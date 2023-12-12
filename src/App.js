import React, { useState } from 'react';
import './App.css';
import logoImage from './bilal.jpg';
import avanceon from './avanceon.jpg';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide'
import { LinearProgress } from '@mui/material';

import Box from '@mui/material/Box';

import { List } from '@mui/material';



function App() {
  const [showGrid, setShowGrid] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const [currentCompanyVisible, setCurrentCompanyVisible] = useState(false);
  const [bilalShahidVisible, setBilalShahidVisible] = useState(true);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const [isExpandCard, setIsExpandCard] = useState(false)
 

  const expandCard = () => {        
    setIsExpandCard(true)
  }
  
  const collapseCard = () => {    
    setIsExpandCard(false)
  }

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'grid') {
      setShowGrid(true);
      setShowChart(false);
    } else if (buttonType === 'chart') {
      setShowGrid(false);
      setShowChart(true);
    }
  };

  const Sidebar = () => (
    <div className="Sidebar">
      <button onClick={() => handleButtonClick('grid')}>Show Grid</button>
      <button onClick={() => handleButtonClick('chart')}>Show Chart</button>
    </div>
  );

  const GridComponent = () => (
    <div className="GridComponent">
      <h2>Grid Component</h2>
      {/* Your grid content goes here */}
    </div>
  );

  const ChartComponent = () => (
    <div className="ChartComponent">
      <h2>Chart Component</h2>
      {/* Your chart content goes here */}
    </div>
  );

  const showCurrentCompany = () => {
    setCurrentCompanyVisible(true);
    setBilalShahidVisible(false);
    setProjectsVisible(false);
  };

  const showBilalShahid = () => {
    setCurrentCompanyVisible(false);
    setBilalShahidVisible(true);
    setProjectsVisible(false);
  };

  const showProjects = () => {
    setCurrentCompanyVisible(false);
    setBilalShahidVisible(false);
    setProjectsVisible(true);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const cardStyle = {
    margin: '0 auto',
    position: 'relative',
    maxWidth: 500,
    transition: 'transform 1.5s, opacity 1.5s', // Adding opacity for fade effect during slide transition
  }

  const cardStyleExpand = {
    margin: '0 auto',
    maxWidth: 500,
    transform: 'scale(1.1)',    
    transition: 'transform 1.5s', 
    zIndex: 99,
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={showCurrentCompany} variant="outlined" style={{ margin: '0 auto', color: 'white', fontSize: '15px', border: '3px solid #1976D2' }}>Current Company</Button>
        <Button onClick={showBilalShahid} variant="outlined" style={{ margin: '0 auto', color: 'white', fontSize: '15px', border: '3px solid #1976D2' }}>Bilal Shahid</Button>
        <Button onClick={showProjects} variant="outlined" style={{ margin: '0 auto', color: 'white', fontSize: '15px', border: '3px solid #1976D2' }}>Projects</Button>
      </header>
      <div className="App-content">
        {currentCompanyVisible && (
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Card style={isExpandCard ? cardStyleExpand : cardStyle} 
          onMouseEnter={() => expandCard()}
          onMouseLeave={() => collapseCard()}>
            <CardMedia
              sx={{
                
                height: 250,
              }}
              image={avanceon}
              title="Avanceon - Octopus Digital"
            />
            <CardContent sx={{ textAlign: 'center', fontWeight: 500, fontFamily: 'Helvetica Neue', }}>
              <Typography style={{ justifyContent: 'center', fontSize : '24px' }} gutterBottom variant="h5" component="div">
                Avanceon - Octopus Digital
              </Typography>
              <Typography variant="body2" color="text.secondary">
  Octopus Digital develops applications in Cloud, IOT, Business Intelligence, and Next Generation After Market support.
  <ul>
    <li>Designed structure of an IOT application in Node JS and React that connected data from 50+ district monitoring authorities</li>
    <li>Debugged and solved 10 deep-rooted code issues within 12 hours to deliver a project before the deadline</li>
    <li>Cooperated with a team of 2 business intelligence analysts, and a cloud services professional to develop the roadmap of a large-tier application</li>
  </ul>
</Typography>

            </CardContent>
          </Card>
          </Slide>
        )}

        {bilalShahidVisible && (
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Card style={isExpandCard ? cardStyleExpand : cardStyle} 
          onMouseEnter={() => expandCard()}
          onMouseLeave={() => collapseCard()}>
            <CardMedia
              sx={{
                height: 350,
              }}
              image={logoImage}
              title="Bilal Shahid"
            />
            <CardContent sx={{ textAlign: 'center', fontWeight: 500 }} >
              <Typography style={{ justifyContent: 'center'}} gutterBottom variant="h5" component="div">
                Software Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                As a Full Stack Engineer at Octopus Digital, I design and develop applications in Cloud, IOT, Business Intelligence, and Next Generation After Market support. I have successfully delivered an IOT application that connected data from 50+ district monitoring authorities, using Node JS and React, and solved 10 deep-rooted code issues within 12 hours to meet a tight deadline.

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Slide>
        )}

        {projectsVisible && (
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Card style={isExpandCard ? cardStyleExpand : cardStyle} 
          onMouseEnter={() => expandCard()}
          onMouseLeave={() => collapseCard()}>
            <CardContent sx={{ textAlign: 'center', fontWeight: 500 }}>
              <Typography  style={{ justifyContent: 'center' }} gutterBottom variant="h5" component="div">
                Projects
              </Typography>

              <Card sx={{ maxWidth: 175 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Vis-Mart
                  </Typography>
                  <Typography variant="body2">
                    Kotlin Mobile App with Text Detection, Image Recognition and APIs for virtual object access
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 175 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Omni-Konnect
                  </Typography>
                  <Typography variant="body2">
                    Digital IOT application, React and Node JS, spanning across 50+ districts
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>








            </CardContent>
          </Card>
          </Slide>
        )}
        

      </div>
      <LinearProgress  color="secondary" />
    </div>


  );
}

export default App;
