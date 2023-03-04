import React from 'react'
import './home.scss'
import img from "../../assests/anand.jpeg"
import bg from '../../assests/bg.jpg'
import { Button } from '@material-ui/core'

import BugReportIcon from '@mui/icons-material/BugReport';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { TypeAnimation } from 'react-type-animation';


import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Education from '../../components/education/Education'
import Skills from '../../components/skills/Skills'
import Experience from '../../components/experience/Experience'
import Footer from '../../components/footer/Footer'


const Home = () => {


  return (
    <>
      <div className='home'>

        <img id='Rbg' src={bg} alt="" />

        <div className='hello'>Hello I'm Anand</div>

        <div className='designation'>

          <TypeAnimation
            sequence={[
              'Mern Stack Developer', // Types 'One'
              1000, // Waits 1s
              'C++ Programmer', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Competitive Coder', // Types 'Three' without deleting 'Two'
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />

        </div>

        <div className='text'>Student at jabalpur Engineering College, Jabalpur. Currently
          pursuing Electronics and Communication Engineering.
        </div>

        <div className='imgCon'>
          <img src={img} alt="" />

          <Button className='b1' variant='contained'><DataObjectIcon className='s1' fontSize='small' /> Coder</Button>
          <Button className='b2' variant='contained'><ArrowBackIosIcon style={{ fontSize: "18px" }} className='s2' fontSize='small' />Developer<ArrowForwardIosIcon style={{ fontSize: "18px" }} fontSize='small' /> </Button>
          <Button className='b3' variant='contained'> <BugReportIcon fontSize='large' /> </Button>
          <Button className='b4' variant='contained'> <span className='s3'>🚀</span> Unstoppable </Button>
          <Button className='b5' variant='contained'><EngineeringIcon /> Engineer</Button>
          <Button className='b6' variant='contained'> <span className='s'>👋</span> Hi there!</Button>

        </div>

      </div>


      {/* //////////////////////////////////////////////////////////////////// */}
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      {/* //////////////////////////////////////////////////////////////////// */}


    </>
  )
}

export default Home