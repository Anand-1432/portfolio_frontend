import React from 'react'
import './education.scss'

import school from '../../assests/school.png'
import { Button } from '@material-ui/core'

const Education = () => {
    return (
        <>
            <div className='education'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-xl-6 col-lg-6 col-md-6 left'>
                            <div className='head'>Education Details</div>
                            <ul>
                                <li>
                                    <div className='l1'>Jabalpur Engineering College, Jabalpur (M.P.)</div>
                                    <div className='l2'>B.TECH : <span>Electronics & Communication Engineering</span></div>
                                    <div className='l3'>Candidate (Expected graduation May 2024)</div>
                                    <p className='l4'>Current <span>CGPA : 8.1</span></p>
                                </li>
                                <li>
                                    <div className='l5'>The Sardana International School, Dewas (M.P.) </div>
                                    <div className='l6'> <span>12th</span> passed (April 2020) : <span>91.4%</span></div>
                                    <p className='l7'><span>10th</span> passed (April 2018) : <span>93.2%</span></p>
                                </li>
                            </ul>

                            <div className='butSec'><Button id='skills' className='bt' variant='outlined'>Know More</Button></div>

                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 right'>
                            <img src={school} alt="" />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Education