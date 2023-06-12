import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Drawer, IconButton ,Toolbar, Typography , Grid, Stack, Divider  } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import '.././css/style.css';
import { createTheme } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';


const theme = createTheme();


function Header() {
    const [mobileOpen, setmobileOpen] = useState(false);
    const handleDrawertog=()=>{
        setmobileOpen(!mobileOpen)
    }
    const drawer=(
        <Box onClick={handleDrawertog} sx={{textAlign:'center'}}>
            <ul className="Mobile-Navigation">
                <li>
                    <Link className={({ isActive }) => isActive ? "active" : ""} to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Our Products</Link>
                </li>    
                <li>
                    <Link to="/about">About TAPDATA</Link>
                </li>
            </ul>

        </Box>
    );
       return(
        <>
        
        <AppBar component={"nav"} sx={{bgcolor:"white"}}>
            <Toolbar sx={{padding:1}}>   
        
                <Grid container alignItems="center"  sx={{
                [theme.breakpoints.down('sm')]: {
                '& > *': {
                margin: theme.spacing(2),
                },
                },
                }}>

                <Grid item xs={4}>
                    <Typography variant="h6">
                    <img src={process.env.PUBLIC_URL + "/image/Frame 1.png"} alt="logoimg" />
                    </Typography>
                </Grid>
                <Grid item xs={4} display={{ xs: 'none', sm: 'block' }}>
                    <ul className="Navigation-Menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Our Products</Link>
                    </li>
                    <li>
                        <Link to="/about">About TAPDATA</Link>
                    </li>
                    </ul>
                </Grid>
                <Grid item sm={6} display={{ xs: 'block', sm: 'none' }}>
                    <IconButton edge="start" color="inherit" aria-label="open drawer"onClick={handleDrawertog}
                    sx={{ color: 'black' }}>
                    <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={4} display={{ xs: 'none', sm: 'block' }}>
                    <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="flex-end">
                    
                        <Link to="/">Login in</Link>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Link to="/account">Create Account</Link>
                
                        <img src={process.env.PUBLIC_URL + "/image/Vector.png"} alt="" className="image-start"/>
                    </Stack>
                   
                </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <Box component={"nav"}>
             
            <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawertog} 
            sx={{display:{xs:'block', sm:'none'},
            "& .MuiDrawer-paper":{
                boxSizing:"border-box",
                width:"240px",
            },}}>
                {drawer}
            </Drawer>
        </Box>
        </>
       )
}

export default Header;