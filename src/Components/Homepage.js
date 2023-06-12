import React from 'react';
import { Container, Box, Typography, Paper ,Button, Stack, useTheme, useMediaQuery} from '@mui/material';
import backgroundImage from './../assets/Vector-8.png';
import heroimg from './../assets/Dashboard-Image.png';
import SendIcon from '@mui/icons-material/Send';

function Homepage() {
  const backimgUrl = `url(${backgroundImage})`;
  const gradient = 'linear-gradient(98.05deg, #0AB2EA 5.59%, #6F0478 296.05%);';
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    <Container   maxWidth={isSmallScreen ? 'sm' : 'lg'}  style={{ marginTop: 100  }} >
      <Box style={{paddingTop:135, paddingBottom:135, backgroundImage: backimgUrl, backgroundSize: 'cover'}} xs={{paddingTop:50}}>
      <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={2} justifyContent={{ sm:"space-between"}} alignItems="center">
        <div >
          <Box style={{ backgroundImage: backimgUrl }}>
            <Button variant="outlined" size="small" startIcon="" style={{borderRadius: 14}}>Trusted</Button>
          </Box>
          <Typography variant="h2" className='herotitle'>Data that's Professional</Typography>
          <Typography variant="body1" sx={{marginBottom: 2}}>If trading is a profession, then your data needs to be professional too. Trading as profession presents Data Blaze.</Typography>
          <Button variant="outlined" size="medium" sx={{marginRight:2}}>LOG IN</Button>
          <Button  variant="contained" size="medium">SIGN UP</Button>

        </div>

        <div >
          <img src={heroimg} alt="" style={{width:'80%'}}/>
        </div>

      </Stack>
      </Box>

      <Box style={{}}>

          <Typography variant="h2" className=''>Features</Typography>
          <Typography variant="body1" sx={{marginBottom: 2}}>You have been looking for</Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent={{xs:"space-around"}} alignItems={{xs:"center"}} useFlexGap flexWrap="wrap"  >

          <Box component="div" sx={{ backgroundImage: gradient , padding:2, borderRadius:3 , width: 232 ,height:232}}>
            <Typography variant="h5" sx={{color:'#fff', fontSize:'28px'}} className=''>Superior Data </Typography>
            <Typography variant="body1" sx={{marginBottom: 2 ,fontSize:'16px'}}>Covers all the data points meant for professional traders and investors in the market.</Typography>
          </Box>
          <Box component="div" sx={{ backgroundImage: gradient , padding:2, borderRadius:3, width: 232, height:232}}>
            <Typography variant="h5" sx={{color:'#fff'}} className=''>Robust Performance</Typography>
            <Typography variant="body1" sx={{marginBottom: 2}}>Offers high frequency data for the market with ultra low latency.</Typography>
          </Box>
          <Box component="div" sx={{ backgroundImage: gradient , padding:2, borderRadius:3, width: 232 ,height:232}}>
            <Typography variant="h5" sx={{color:'#fff'}} className=''>Practical to use</Typography>
            <Typography variant="body1" sx={{marginBottom: 2}}>Data points available at a glance, no strangle and signal based struggle.</Typography>
          </Box>
          <Box component="div" sx={{ backgroundImage: gradient , padding:2, borderRadius:3,width: 232 ,height:232}}>
            <Typography variant="h5" sx={{color:'#fff'}} className=''>Performance benchmark</Typography>
            <Typography variant="body1" sx={{marginBottom: 2}}>Offers you live data from exchange along with charts from Trading View directly.</Typography>
          </Box>
          </Stack>

      </Box>

      <Box style={{paddingTop:135, paddingBottom:135}}>
      <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={3}  justifyContent={{ sm:"space-between"}} alignItems="center">
        <div style={{width:'50%'}}>
          <img src={heroimg} alt="" style={{width:'80%'}}/>
        </div>

        <div style={{width:'50%'}}> 
          <Typography variant="h2" className='finance_sec'>Finance can’t hold you back now.</Typography>
          <Typography variant="body1" sx={{marginBottom: 2}}>If finance is your challenge then finance can’t challenge, if you are a part of trading as profession. we are there to support you. To know more about how we can help you.</Typography>
          <Button  variant="contained" size="medium">Connect Now</Button>
        </div>

      </Stack>
      </Box>
     
      <Box className="career" sx={{textAlign:"center" ,paddingBottom:'82px'}}>
        <Typography variant="h3" className='career-para'>Your <span>career</span> is waiting ahead</Typography>
        <Typography variant="h3" className='career-para'>click on the button and <span>get started</span></Typography>
        <Button  variant="contained" size="medium" sx={{background:gradient}} endIcon={<SendIcon />}>Get Started</Button>
      
      </Box> 

   </Container>
   
    
    </>
   
  );
}

export default Homepage;
