import React from 'react';
import './footer.scss';

import Mail from '@mui/icons-material/Email';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Copyright } from '@mui/icons-material';


const Footer = () => {
    return (
        <>
            <div className='container-fluid mt-5 px-0' id='cardcontainer'>
                <div className='card w-100'>
                    <div className='row mb-4'>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 style={{ color: 'White' }}>Anand Rao Gaikwad</h2>
                                </div>
                                <p className="card-text">
                                    Address : 207/8 Mahankal Colony Dewas, 455001, near STI Sahno Madhya Pradesh.</p>
                                <div className="social mt-2 mb-3">
                                    <a className='fa' href="https://www.linkedin.com/in/anand-rao-gaikwad-1b11b5227/" target="1"><LinkedInIcon /></a>
                                    <a className='fa' href="https://github.com/Anand-1432" target="1"><GitHubIcon /></a>
                                    <a className="fa" href='https://wa.me/8103570600' target="1"><WhatsApp /></a>
                                    <a className="fa" href='mailto:123agaikwad@gmail.com' target="1"><Mail /></a> </div>

                            </div>
                        </div>
                        <div className='col-md-2 col-sm-2 col-xs-2'></div>
                        <div className='col-md-3 col-sm-3 col-xs-3'>
                            <h5 className='heading'>All Pages</h5>
                            <ul>
                                <li>
                                    <a href='/#about'>About</a>
                                </li>
                                <li>
                                    <a href='/#education'>Education</a>
                                </li>
                                <li>
                                    <a href="/#skills">Skills</a>
                                </li>

                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-3 col-xs-3'>
                            <h5 className='heading'>Details</h5>
                            <div className='card-text'>

                                <p>
                                  Anand Rao Gaikwad Engineering student at JEC Jabalpur campus. Currently
                                  pursuing Electronics and Communication Engineering.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className='divider mb-4'> </div>
                    <div className='row' style={{ fontSize: '10px' }}>
                        <div className='col-md-6 col-sm-6 col-xs-6'>
                            <div className='pull-left'>
                                <p style={{ fontWeight: '600', fontSize: '12px' }}>
                                    <Copyright fontSize='small' /> 2022 Copyright
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-6'>
                            <div className='pull-right mr-4 d-flex policy'>
                                <div style={{ fontWeight: '600', fontSize: '12px' }}>
                                    Terms of Use
                                </div>
                                <div style={{ fontWeight: '600', fontSize: '12px' }}>
                                    Privacy Policy
                                </div>
                                <div style={{ fontWeight: '600', fontSize: '12px' }}>
                                    Cookie Policy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
