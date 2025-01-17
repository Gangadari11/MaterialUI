import React from "react";  
import {Box} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox'
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import { AccountBox, Article, Group, Person, Settings, Storefront } from "@mui/icons-material";
import Switch from '@mui/material/Switch'
import ModeNight from "@mui/icons-material/ModeNight";

const Sidebar = ({mode , setMode}) => {
    return (
        <Box  flex={1} p={2} sx={{display:{xs:"none"  , sm:"block"}}}>
            <Box position="fixed" >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Article/>
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-set">
                    <ListItemIcon>
                        <Storefront/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-set">
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-set">
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-set">
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-set">
                    <ListItemIcon>
                        <ModeNight/>
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode === "light"? "dark" : "light")}  />
                    </ListItemButton>
                </ListItem>


            </List>
            </Box>
            
        </Box>
    )
}

export default Sidebar;