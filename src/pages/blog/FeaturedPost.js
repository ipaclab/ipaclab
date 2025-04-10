import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <CardActionArea component="a">
      <Card sx={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}>
        <CardMedia
          component="img"
          sx={{ display: 'block' }}
          image={post.image}
          alt='pic'
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
            }}
          >
            {post.date}
          </Typography>
          <Typography variant="subtitle1" 
            sx={{ 
              marginBottom: 2,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2,
            }}
          >
            {post.description}
          </Typography>
          <Box my={4} />
          <Grid container justifyContent='right'>
            <ArrowForwardIcon color='primary' />
          </Grid>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
