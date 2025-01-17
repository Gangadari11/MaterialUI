import { AppBar, styled, Toolbar, Typography , Box , InputBase , Badge, Avatar  } from "@mui/material"; 
import React from "react";  
import Pets from '@mui/icons-material/Pets';
import Mail from '@mui/icons-material/Mail'; 
import Notifications from '@mui/icons-material/Notifications'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
    display:"none" , 
    alignItems:"center" , 
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    },
}));

const UserBox = styled(Box)(({theme}) => ({
    display:"flex" ,
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))


const Navbar = () => {
    const [open , setOpen] = React.useState(false);
    return (
        <AppBar position="sticky" >
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none" , sm:"block"}}}>
                    LAMA DEV
                </Typography>
                <Pets sx={{display:{xs:"none" , sm:"block"}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar 
                        sx={{width:30 , height:30 }} 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyPsxAlVL4-n27fQKY3jPB2DSKMH2MO2XVg&s"
                        onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                    
                    <Avatar sx={{width:30 , height:30 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyPsxAlVL4-n27fQKY3jPB2DSKMH2MO2XVg&s"/>
                    <Typography variant="span">John</Typography> 

                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>


            
        </AppBar >
    )
}

export default Navbar;