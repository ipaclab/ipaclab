import * as React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

export default function MemberCard({ member, fitMode = 'cover', aspectRatio = '3/4' }) {
  return (
    <Grid item xs={12} md={4} lg={3} sx={{ display: 'flex' }}>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          p: 2,
        }}
      >
        {/* Image Frame */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '300px',
            aspectRatio: aspectRatio,
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: 'none',
          }}
        >
          <Box
            component="img"
            src={member.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = member.image;
            }}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: fitMode, // switch between 'cover' or 'contain'
              objectPosition: 'center',
              backgroundColor: 'transparent',
              boxShadow: 'none',
            }}
          />
        </Box>

        {/* Text */}
        <Typography variant="h5">{member.name}</Typography>
        <Typography variant="h6" fontWeight="normal">
          {member.research_topic}
        </Typography>
      </Stack>
    </Grid>
  );
}
