import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import ImageSlider from '../../components/ImageSlider';
import NewsList from '../../components/NewsList';

export default function ActivitiesPublic() {
  const activities = [
    {
      id: 1,
      name: "SEEE-HUST Thesis defense semester 2024.2",
      time: "July 9-10, 2025",
      content: "SEEE-HUST Thesis defense semester 2024.2",
    },
  ];

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
          header='ACTIVITES'
          title='Activities'
          abstract='Discover our best moment and latest news from the lab'
        />
        <Box my={15} />
        <Typography variant='h3' textAlign='center'>Spotlight</Typography>
        <Box my={4} />
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <ImageSlider size='medium' />
            <Typography variant='h6' textAlign='center' my={4}>SEEE-HUST Thesis defense semester 2024.2</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageSlider size='medium' />
            <Typography variant='h6' textAlign='center' my={4}>Graduation Party 2024.2</Typography>
          </Grid>
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
        <NewsList 
          title='Activities'
          abstract='Discover our latest news from the lab'
          posts={activities}
          type='activity'
          numberOfPosts={activities.length}
        />
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} /> 
      </Container>
    </main>
  );
}
