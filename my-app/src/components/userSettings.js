import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const UserSettings =()=>{
  return(
    <div className='userSettings'>
      <div className='settingsHeader'>
        <h1 className='settingsTitle'>Settings</h1>
      </div>
      <div className='userDetails'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Name</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
      component="form"
      sx={{
        
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="your Name" variant="standard" />
    </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Email</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
      component="form"
      sx={{
        
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="your email" variant="standard" />
    </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Password</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
      component="form"
      sx={{
        
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="your password" variant="standard" />
    </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>About</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
      component="form"
      sx={{
        
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="bio" variant="standard" />
    </Box>
        </AccordionDetails>
      </Accordion>

    </div>
    <div className='settingsButtons'>
    <button  className='cancelDetails'>Cancel</button>
    <button  className='submitDetails'>Update</button>
    </div>
    
      </div>
      

  )
}
export default UserSettings