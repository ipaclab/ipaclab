import * as React from 'react';
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import MemberCard from './MemberCard';
import { Members, sortedMemberData } from './MemberData';
import { navigateTo } from '../../components/navigateTo';
import { useNavigate } from 'react-router-dom';
import RegistrationButton from './RegistrationButton';

export default function MembersPublic() {
  const navigate = useNavigate();
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

  React.useEffect(() => {
    setMemberData(sortedMemberData(Members, setAlumni, setActiveMember, setSupervisor));
  }, [])

  return (
    <main>
      {/*    */}
      <Container 
        maxWidth='xl'
        style={{ paddingLeft: 24, paddingRight: 24}}
      >
        <Box my={15} />
        <PageTitle 
          header='ABOUT' 
          title='Members'
          abstract='Meet the IPAC Lab team with dedicated researchers united by their passion for learning and discovery.'
        />
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
				<Container 
					maxWidth='false'
					sx={{ maxWidth: '900px'}}
					style={{ paddingLeft: 0, paddingRight: 0}}
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
							<Typography variant='h5'>Supervisor</Typography>
							<Typography variant='h2'>{supervisor}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
							<Typography variant='h5'>Members</Typography>
							<Typography variant='h2'>{activeMember}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
							<Typography variant='h5'>Alumni</Typography>
							<Typography variant='h2'>{alumni}</Typography>
						</Stack>
					</Stack>
					<Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
					<RegistrationButton onClick={() => navigateTo(navigate, '/members/registration')} />
				</Container>
        <Box my={10}/>
				{/* Member card */}
        {/* Supervisors */}
        <Typography variant='h4' textAlign='center' my={4}>Supervisor</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.supervisor.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        {/* Supervisors */}
        <Typography variant='h4' textAlign='center' my={4}>Collaborators</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.collaborators.map((member) => (
            <MemberCard member={member} fitMode='contain' aspectRatio='1.5/1' />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        {/* Wireless Sensor and Actuator Networks */}
        <Typography variant='h4' textAlign='center' my={4}>Wireless Sensor and Actuator Networks</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.smart_farm.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        {/* AGV */}
        <Typography variant='h4' textAlign='center' my={4}>Automated Guided Vehicles</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.agv.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        {/* Smart biogas */}
        <Typography variant='h4' textAlign='center' my={4}>Smart biogas monitoring system</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.smart_biogas.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        {/* EV Charging */}
        <Typography variant='h4' textAlign='center' my={4}>EV Charging Station Management System</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.ev_charging.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        {/* Inventory */}
        <Typography variant='h4' textAlign='center' my={4}>Smart Inventory Management System</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.inventory.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        {/* Target tracking */}
        <Typography variant='h4' textAlign='center' my={4}>Target tracking</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.target_tracking.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

        <Typography variant='h4' textAlign='center' my={4}>Alumni</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.alumni.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />

      </Container>
    </main>
  );
}
