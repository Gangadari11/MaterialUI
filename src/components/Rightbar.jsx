import React from "react";  
import {Box, ImageList, Typography} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const Rightbar = () => {
    return (
        <Box  flex={2} p={2} sx={{display:{xs:"none"  , sm:"block"}}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>

                <AvatarGroup max={7}>
                <Avatar alt="Remy Sharp" src="/images/1.jpeg"/>
                <Avatar alt="Travis Howard" src="/images/2.jpeg" />
                <Avatar alt="Cindy Baker" src="/images/3.jpeg" />
                <Avatar alt="Agnes Walker" src="/images/4.jpeg" />
                <Avatar alt="Trevor Henderson" src="/images/5.jpeg" />
                <Avatar alt="Trevor Henderson" src="/images/6.jpeg" />
                <Avatar alt="Trevor Henderson" src="/images/7.jpeg" />
                <Avatar alt="Trevor Henderson" src="/images/8.jpeg" />
                <Avatar alt="Trevor Henderson" src="/images/9.jpeg" />




                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} gap={5} mt={2} mb={2}>
                    Latest Photos
                </Typography>

                <ImageList cols={3} rowHeight={100}>
                    <ImageListItem >
                        <img
                            
                            src="/images/post1.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post2.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post3.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post4.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post5.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post6.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post7.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post8.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <img
                            
                            src="/images/post9.jpeg"
                            alt=""
                            
                        />
                    </ImageListItem>


                </ImageList>


                
                <Typography variant="h6" fontWeight={100} gap={5} mt={2} >
                    Latest Conversations
                </Typography>


                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/images/1.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/images/2.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/images/3.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>




            </Box>
        </Box >
    )
}

export default Rightbar;