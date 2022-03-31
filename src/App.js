import logo from './perfil.jpg';
import './App.css';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import TranslateIcon from '@mui/icons-material/Translate';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';

import data from './data.json';
import { useState } from 'react';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });



const TimelineCompanies = ({companies,title}) => {
  return <Paper elevation={5} className="App-header" >
  
    <Timeline>
    <Typography variant="h5">{title}</Typography>
    {
      companies.map((company) => 
                <TimelineItem key={company["name"]}>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary" className='TimeOpposite'>
                      {company["start"]}
                      <br></br>
                      {company["end"]}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        {company["name"]}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }}>
                        <b>{company["job"]}</b>
                      </Typography>
                      <Typography sx={{ fontSize: 12 }}>{company["experience"]}</Typography>
                    </TimelineContent>
                </TimelineItem>
      )
    }
    </Timeline>
  </Paper>
}

const Presentation = ({presentation}) => {
  return <Paper elevation={5} className="App-header" >
            <div>
              <Avatar className="perfil" src={logo} sx={{ minWidth: 200, minHeight: 200 }}/>
              <Typography variant="button" gutterBottom>{presentation["name"]}</Typography>
              <br></br>
              <div class={'information'}>
                <PhoneAndroidIcon/><Typography sx={{ fontSize: 12 }} className="textInformation" >095170627</Typography>
              </div>
              <div class={'information'}>
                <EmailIcon/><Typography sx={{ fontSize: 12 }} className="textInformation" >niev.mauro@gmail.com</Typography>
              </div>
              <div class={'information'}>
                <LocationOnIcon/><Typography sx={{ fontSize: 12 }} className="textInformation" >Palermo, Montevideo</Typography>
              </div>
              <div className='icons'>
                <a href={presentation["linkedin"]} target={'blank'}>
                  <LinkedInIcon />
                </a>
                <a href={presentation["github"]} target={'blank'}>
                  <GitHubIcon/>
                </a>
              </div>
            </div>
            <div>
              <Typography variant="h5" component="div">
                Sobre Mi
              </Typography>
              <Typography sx={{ fontSize: 15 }} gutterBottom className='presentation'>
                {presentation["biografy"]}
              </Typography>
              <Typography variant="h5" component="div">
                Skills
              </Typography>
              <Typography sx={{ fontSize: 15 }} gutterBottom className='presentation'>
                JavaScript, Python, NodeJS, React, Django, GraphQL, C, C++, MySQL
              </Typography>
            </div>
          </Paper>
}

const switchTeme = (teme,setTeme) => {
  const body = document.body;
  if(teme === darkTheme){ 
    setTeme(lightTheme);
    body.style.backgroundColor = "#c9e9fc";
  } 
  else{ 
    setTeme(darkTheme);
    body.style.backgroundColor = "#282c34";
  }
}

const MenuCurriculum = ({setTeme, teme}) => {

  return <Paper sx={{ width: 50, maxWidth: '10%' }} className={'Menu'}>
          <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <TranslateIcon fontSize="small" />
                </ListItemIcon>
              </MenuItem>
              <MenuItem onClick={() => {switchTeme(teme,setTeme)}}>
                <ListItemIcon>
                  {teme === darkTheme ? <DarkModeIcon fontSize="small" /> : <Brightness5Icon fontSize="small"/>}
                </ListItemIcon>
              </MenuItem>
          </MenuList> 
        </Paper>
}


function App() {

  const [teme, setTeme] = useState(darkTheme);

  return (
    <div className="App">
      <ThemeProvider theme={teme}>
        <MenuCurriculum teme={teme} setTeme={setTeme} />
        <Presentation presentation={data["presentation"]}/>
        <TimelineCompanies companies={data["companies"]} title={"Experiencia laboral"}/>
        <TimelineCompanies companies={data["studies"]}  title={<div><SchoolIcon/>  Estudios</div>}/>
      </ThemeProvider>
      <div className='foot'/>
    </div>
  );
}

export default App;



