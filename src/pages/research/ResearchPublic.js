import * as React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import FeaturedPost from '../blog/FeaturedPost';
import PageTitle from '../../components/PageTitle';
import NewsList from '../../components/NewsList';
import PostTitle from '../../components/PostTitle';
import { ResearchTopics } from './ResearchTopic';
import { Publications } from './Publications';

export default function ResearchPublic() {
  return (
    <main>
      {/*    */}
      <Container 
        maxWidth='false'
        sx={{ maxWidth: '1296px'}}
        style={{ paddingLeft: 24, paddingRight: 24}}
      >
        <Box my={15} />
        <PageTitle
          header='RESEARCH' 
          title='Publications'
          abstract='Explore a selection of our recent research on some of the most complex and interesting challenges'
        />
        <Box my={15} />
        <PostTitle 
          title='Research areas'
          abstract='Discover our research field from the lab'
        />
        <Box my={4} />
        <Grid container spacing={10}>
          {ResearchTopics.map((post, index) => (
            <Grid item xs={12} md={4}>
              <FeaturedPost key={index} post={post} />
            </Grid>
          ))}
        </Grid>
        <Box pt={5} />  
        <Grid container justifyContent='center'>
          <Button variant='contained' sx={{
            fontSize: '18px',
            padding: 3,
            borderRadius: 3,
            backgroundColor: '#1a73e8',
            backgroundImage: 'none',
            ':hover': {
              backgroundColor: '#2975CA',
            },
          }}
          >
            Load more
          </Button>
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
        <NewsList 
          title='Publications'
          abstract=' '
          type='publication'
          posts={Publications}
          numberOfPosts={Publications.length}
        />
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
      </Container>
    </main>
  );
}
