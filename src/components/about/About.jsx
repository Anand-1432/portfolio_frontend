import React, { useState } from 'react'
import './about.scss'

import img from '../../assests/img1.png'
// import img1 from '../../assests/m5.png'
import { Button } from '@material-ui/core'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import NavigationIcon from '@mui/icons-material/Navigation';

import resume from '../../pdf/resume.pdf'

const About = () => {


    const [state, setState] = useState(false);


    const countStyle = {
        fontSize: "14px", position: 'relative', top: '0px', fontWeight: "700", color: "black"
    }


    return (
        <>
            <div className='about' id='about'>

                {/* <img className='bgImg' src={img1} alt="" /> */}


                <ScrollTrigger onEnter={() => setState(true)} onExit={() => setState(false)}>

                    <div className='headBarCon'>
                        <div className='headBar'>

                            <div className='g1'>
                                <a href="https://github.com/Anand-1432?tab=repositories" target="_blank">
                                    <div id="sg1">
                                        <div id='sg11'>
                                            <div><GitHubIcon /></div>
                                        </div>
                                        <div id='sg12'>
                                            <section> {state && <CountUp start={0} end={15} duration={2} delay={0} style={countStyle} />}+ Projects</section>
                                            <span>Compeleted</span>
                                        </div>
                                    </div>

                                    <div className='pop'>Click to visit Projects
                                        <NavigationIcon className='arrow' />
                                    </div>
                                </a>
                            </div>


                            <div className='g2'>
                                <a href="https://leetcode.com/123agaikwad/" target="_blank">
                                    <div id="sg1">
                                        <div id='sg11'>
                                            <div><CodeIcon /></div>
                                        </div>
                                        <div id='sg12'>
                                            <section> {state && <CountUp start={0} end={250} duration={2} delay={0} style={countStyle} />}+ Problems </section>
                                            <span>Solved on Leetcode</span>
                                        </div>
                                    </div>

                                    <div className='pop'>Click to visit Profile
                                        <NavigationIcon className='arrow' />
                                    </div>
                                </a>
                            </div>


                            <div className='g3'>
                                <div id="sg1">
                                    <div id='sg11'>
                                        <div><SchoolIcon /></div>
                                    </div>
                                    <div id='sg12'>
                                        <section> {state && <CountUp start={0} end={6} duration={2} delay={0} style={countStyle} />}+ Months</section>
                                        <span>Intern Experience</span>
                                    </div>
                                </div>

                                <div className='pop'>Click to visit Certificate
                                    <NavigationIcon className='arrow' />
                                </div>

                            </div>

                        </div>
                    </div>

                </ScrollTrigger>


                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6 col-xl-6 sec1'>
                            <img src={img} alt="" />
                        </div>

                        <div className='col-lg-6 col-xl-6 sec2'>
                            <div className='heading'>About Me</div>
                            <p>
                                I am a third-year student pursuing Electronics and Communication Engineering
                                @ JEC Jabalpur campus. I am always ready to have new experiences, love to
                                interact with new people, and learn new things. Always trying to add efforts
                                for people and impacting the world through my work is gratifying.
                                <br /> <br />
                                I love to write code, work on projects and enjoy building web apps and have learned Mern
                                Stack web development. Also, have little command of React-Native for Android
                                app development. My goal is to become a software developer in a renowned company.
                                My dream is to visit the whole world.
                            </p>

                            <div className='btnSection'>
                                <Button id='education' href={resume} className='bt' variant='contained' download="anand_resume">Download Resume</Button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About