import React from 'react'
import './experience.scss'

import img from '../../assests/bill.png'

const Experience = () => {
    return (
        <>
            <div className='experience'>

                <div className='heading'>Experience</div>

                <div className='container'>
                    <div className='row'>

                        <div className='col-xl-6 col-lg-6 left'>
                            <img src={img} alt="" />
                        </div>

                        <div className='col-xl-6 col-lg-6 right'>

                            <div className='head'>Web Developer Intern at KYC
                                <section>Kaizen Young Consultants, Pune</section>
                            </div>

                            <p>
                                For the last 2 years, I am working on web development.
                                Currently working as an intern at Kaizen Young Consultant, Pune.
                                KYC helps all businesses not only reach but exceed their goals.
                                For the last 6 months, I am working with KYC as a web developer intern and
                                have working on many projects, dealing with clients, and working as a team.
                                KYC helps me to improve my skills and increase my potential.
                            </p>

                            <div className='head2'>Some Projects</div>

                            <ul>
                                <li>URL1 :- <a href="https://invoicify2k22.netlify.app/" target="1">https://invoicify2k22.netlify.app/</a></li>
                                <li>URL2 :- <a href="https://aavahan2k22.netlify.app/" target="1">https://aavahan2k22.netlify.app/</a></li>
                                <li>URL3 :- <a href="https://gatekeeper2k22.netlify.app/" target="1">https://gatekeeper2k22.netlify.app/</a></li>
                            </ul>

                            <div className='head3'>Details</div>
                            <p>
                                Here are a few images of the websites and web apps that I
                                built during this internship and create some projects for college clubs.
                                Visit the above links to see the projects which I have built.
                            </p>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience