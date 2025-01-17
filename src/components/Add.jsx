import React from "react";
import { Tooltip, Fab, Modal, Box, styled, Typography, Avatar, Stack } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions  , Image   , PersonAdd} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center', 
    gap: '10px',
    marginBottom: '20px' 
})


const Add = () => {

    const [open, setOpen] = React.useState(false);
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
            title="Delete" 
            sx={{
                position:"fixed" , 
                bottom: 20 , 
                left:{xs:"calc(50% - 25px)" , md:30}
            }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>

        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >  

                <Typography variant="h6" color="gary" textAlign="center"> 
                    Create post
                </Typography>
                
                <UserBox>
                    <Avatar 
                         src="/images/2.jpeg"
                         sx={{ width: 30 , height: 30}}
                    />

                    <Typography fontWeight={500} variant="span"> 
                        John Doe 
                    </Typography>
                    
                </UserBox>

                <TextField
                    sx={{width:"100%"}}
                    id="filled-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="filled"
                />

                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary"/>
                    <VideoCameraBack  color="success"/>
                    <PersonAdd color="error"/>

                </Stack>

                <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}>
                        
                        <DateRange/>
                    </Button>
                </ButtonGroup>
                    
            </Box>
               
           
        </StyledModal>
    </>
  )

}

export default Add;