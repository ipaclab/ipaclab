import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { animated, useSpring } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { unstable_useTreeItem2 as useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Label,
  TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';

const ITEMS = [
  { id: '1', label: 'Publications', path: '/developer/publication' },
  { id: '2', label: 'Technologies', path: '/developer/technology' },
  {
    id: '3',
    label: 'Activities',
    children: [
      { id: '3.1', label: 'All activities', path: '/developer/activity' },
      { id: '3.2', label: 'Spotlight', path: '/developer/activity/spotlight' },
    ],
  },
  {
    id: '4',
    label: 'Members',
    children: [
      { id: '4.1', label: 'All members', path: '/developer/member' },
      { id: '4.2', label: 'Active members', path: '/developer/member/active' },
      { id: '4.3', label: 'Alumnus', path: '/developer/member/alumnus' },
    ],
  },
];

function DotIcon() {
  return (
    <Box sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}>
      <svg width={6} height={6}>
        <circle cx={3} cy={3} r={3} fill='green' />
      </svg>
    </Box>
  );
}

DotIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

const AnimatedCollapse = animated(Collapse);

function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
    },
  });

  return <AnimatedCollapse style={style} {...props} />;
}

TransitionComponent.propTypes = {
  in: PropTypes.bool,
};

function CustomLabel({ color, expandable, children, ...other }) {
  return (
    <TreeItem2Label {...other} sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        className="labelText"
        variant="body2"
        sx={{ color: 'text.primary' }}
      >
        {children}
      </Typography>
    </TreeItem2Label>
  );
}

CustomLabel.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['blue', 'green']),
  expandable: PropTypes.bool,
};

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
  const { id, itemId, label, disabled, children, ...other } = props;
  const navigate = useNavigate();  // Hook to navigate

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
    publicAPI,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  // Check if this item is selected and navigate if selected
  React.useEffect(() => {
    if (status.selected) {
      const selectedItem = findItemById(ITEMS, itemId);
      if (selectedItem && selectedItem.path) {
        navigate(selectedItem.path);
      }
    }
  }, [status.selected, itemId, navigate]);

  const findItemById = (items, id) => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const foundChild = findItemById(item.children, id);
        if (foundChild) return foundChild;
      }
    }
    return null;
  };

  const item = publicAPI.getItem(itemId);
  const color = item?.color;
  return (
    <TreeItem2Provider itemId={itemId}>
      <TreeItem2Root {...getRootProps(other)}>
        <TreeItem2Content
          {...getContentProps({
            className: clsx('content', {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
              disabled: status.disabled,
            }),
          })}
        >
          {status.expandable && (
            <TreeItem2IconContainer {...getIconContainerProps()}>
              <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
          )}

          <CustomLabel {...getLabelProps({ color })} />
        </TreeItem2Content>
        {children && (
          <TransitionComponent
            {...getGroupTransitionProps({ className: 'groupTransition' })}
          />
        )}
      </TreeItem2Root>
    </TreeItem2Provider>
  );
});

CustomTreeItem.propTypes = {
  children: PropTypes.node,
  /**
   * If `true`, the item is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  id: PropTypes.string,
  itemId: PropTypes.string.isRequired,
  label: PropTypes.node,
};

export default function CustomizedTreeView() {
  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" fontWeight='bold' variant="subtitle2">
          Content
        </Typography>
        <RichTreeView
          items={ITEMS}
          aria-label="pages"
          multiSelect
          defaultExpandedItems={['1', '1.1']}
          defaultSelectedItems={['1.1', '1.1.1']}
          sx={{
            m: '0 -8px',
            pb: '8px',
            height: 'fit-content',
            flexGrow: 1,
            overflowY: 'auto',
          }}
          slots={{ item: CustomTreeItem }}
        />
      </CardContent>
    </Card>
  );
}
