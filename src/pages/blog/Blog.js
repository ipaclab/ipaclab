import * as React from 'react';
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';
import Banner from './Banner';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import TechnologyPost from './TechnologyPost';
import { useNavigate } from 'react-router-dom';
import PostTitle from '../../components/PostTitle';
import ImageSlider from '../../components/ImageSlider';
import { navigateTo } from '../../components/navigateTo';
import RegistrationButton from '../members/RegistrationButton';
import { ResearchTopics } from '../research/ResearchTopic';
import { Members, sortedMemberData } from '../members/MemberData';
import MemberCard from '../members/MemberCard';
import { Publications } from '../research/Publications';

export default function Blog() {
  const navigate = useNavigate();
  const post = {
    title: 'Welcome to IPAC Lab!',
    description:
      "IoT, Power, Actuation and Control Research Group",
    image: 'https://picsum.photos/1920/1080',
  };
  const [memberData, setMemberData] = React.useState({
    alumni: [], 
    supervisor: [], 
    smart_farm: [], 
    agv: [], 
    smart_biogas: [],
    ev_charging: [],
    inventory: [],
    target_tracking: [],
    collaborators: [],
  })
  const [alumni, setAlumni] = React.useState(0);
  const [supervisor, setSupervisor] = React.useState(0);
  const [activeMember, setActiveMember] = React.useState(0);

  const technology = [
    {
      title: 'MOCAR Lab - Motion Control and Applied Robotics Laboratory',
      description:
        'Phòng thí nghiệm nghiên cứu Điều khiển chuyển động và robot ứng dụng',
      image: 'https://picsum.photos/1600/900',
    },
    {
      title: 'HIPEM Lab - Laboratory of High Performance Electric Machines & Energy Efficiency',
      description:
        'Nhóm nghiên cứu Hiệu quả Năng lượng',
      image: 'https://picsum.photos/1920/1080',
    }
  ]

  React.useEffect(() => {
    setMemberData(sortedMemberData(Members, setAlumni, setActiveMember, setSupervisor));
  }, [])

  return (
    <main>
      {/*  Banner  */}
      <Banner post={post}/>
      <Box sx={{
        paddingTop: {xs: '64px', md: '80px'}
      }} />
        <Typography textAlign='center' variant='h6' fontSize='12px' style={{ color: 'gray' }}>OUR MISSION</Typography>
        <Typography px={1} textAlign='center' variant='h2' fontWeight='normal'
          sx={{
            fontSize: {xs: 24, sm: 32, md: 40}
          }}
        >
          Creating smart and comfort environment for human beings and animals
        </Typography>
        <Box sx={{
          paddingTop: {xs: '64px', md: '80px'}
        }} />
        <Container 
          maxWidth='false'
          sx={{ maxWidth: '616px'}}
          style={{ paddingLeft: 24, paddingRight: 24}}
        >
          <Typography variant='h6' fontSize='36px' my={2}>Our vision</Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            Becoming a strong research and development team in AI, IoT and Automation.
          </Typography>
          {/* <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            We live in an exciting time when AI research and technology are delivering extraordinary advances.
          </Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            In the coming years, AI — and ultimately artificial general intelligence (AGI) — has the potential to drive one of the greatest transformations in history.
          </Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            We're a team of scientists, engineers, ethicists and more, working to build the next generation of AI systems safely and responsibly.
          </Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            By solving some of the hardest scientific and engineering challenges of our time, we're working to create breakthrough technologies that could advance science, transform work, serve diverse communities — and improve billions of people.
          </Typography> */}
          <Typography variant='h6' fontSize='13px' my={2} style={{ color: 'gray'}} textAlign='right'>
            Dr. Hoang Duc Chinh - Supervisor of IPAC Research Group
          </Typography>
        </Container>
        <Box sx={{
          paddingTop: {xs: '64px', md: '80px'}
        }} />
        <Container 
          maxWidth='false'
          sx={{ maxWidth: '1296px'}}
          style={{ paddingLeft: 24, paddingRight: 24}}
        >
          <Stack
            sx={{
              flexDirection: {xs: 'column', md: 'row'},
              alignItems: {xs: 'center', md: 'flex-start'},
              gap: {xs: 5, md: 15, lg: 20}
            }}
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Button onClick={() => navigateTo(navigate, '/research')}>
                <Typography variant='h5'>Publications</Typography>
              </Button>
              <Typography variant='h2'>{Publications.length}</Typography>
            </Stack>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Button onClick={() => navigateTo(navigate, '/members')}>
                <Typography variant='h5'>Members</Typography>
              </Button>
              <Typography variant='h2'>{activeMember + supervisor}</Typography>
            </Stack>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Button onClick={() => navigateTo(navigate, '/research')}>
                <Typography variant='h5'>Research Areas</Typography>
              </Button>
              <Typography variant='h2'>{ResearchTopics.length}</Typography>
            </Stack>
          </Stack>
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
          <Container 
            maxWidth='false'
            sx={{ maxWidth: '900px'}}
            style={{ paddingLeft: 0, paddingRight: 0}}
          >
            <RegistrationButton onClick={() => navigateTo(navigate, '/members/registration')} />
          </Container>
          {/* Research area */}
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
          <PostTitle
            title='Research areas'
            abstract='Discover our research fields of the lab'
            navText='View all research areas'
            navigatePath='/research'
          />
          <Box my={4} />
          <Grid container spacing={10}>
            {ResearchTopics.map((post, index) => (
              <Grid item xs={12} md={4}>
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />

          <Typography variant='h3' textAlign='center'>Collaborators</Typography>
          <Typography variant='h4' fontWeight='normal' py={1} fontSize='30px' textAlign='center'>Empowering progress through collaboration.</Typography>
          <Grid container spacing={4} justifyContent='center'>
            {memberData.collaborators.map((member) => (
              <MemberCard member={member} fitMode='contain' aspectRatio='1.5/1' />
            ))}
          </Grid>
          {/* <Grid container justifyContent='center'>
            <Button>
              <Typography variant='h5' color='primary' onClick={() => navigateTo(navigate, '/technology')}>
                View all collaborators
              </Typography>
            </Button>
          </Grid> */}
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
          
          {/* <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <TechnologyPost key={technology.title} post={technology[0]} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TechnologyPost key={technology.title} post={technology[1]} />
            </Grid>
          </Grid> */}
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />

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
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
        </Container>
    </main>
  );
}
