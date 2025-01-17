import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import {Box, createTheme} from '@mui/material'
import {Container, Stack, ThemeProvider} from '@mui/system'
import Navbar from './components/Navbar';
import Add from './components/Add';


function App() {
  
  const [mode , setMode] = React.useState('light')
  const darkTheme = createTheme ({
    palette: {
      mode: mode
    }
  })
  return (

    <ThemeProvider theme={darkTheme}>
     
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>

        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
            <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
    

    
  );
}

export default App;
