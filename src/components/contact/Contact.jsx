import React from 'react'
import './contact.scss'
import { Button } from "@material-ui/core"
import img from '../../assests/contact.gif'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Animation from '../animation/Animation';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/userAction';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [animation, setAnimation] = useState(false);

    const closeAnimation = () => {
        setAnimation(false);
    }


    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    }


    ///////////////////////////////////////////// redux ////////////////////////////////
    const dispatch = useDispatch();

    const onSubmit = async () => {
        try {
            dispatch(addUser(data));

            setAnimation(true);
            setData({
                name: "",
                email: "",
                message: ""
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className='contact'>

                <div className='head'>Contact Me</div>

                <div className='inner container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 left'>
                            <div className='h4'>Get In Touch</div>
                            <p className='txt'>I am here for you! How can i help?</p>

                            <form onSubmit={handleSubmit(onSubmit)} >

                                <div className="form-group">
                                    <input type="text" className="form-control" id='name' value={data.name} placeholder="Enter your name" {...register("name", { onChange: (e) => { handleChange(e) }, required: "name is required!" })} />
                                    <span className='err'>{errors.name?.message}</span>
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" value={data.email} placeholder="Enter your email address" {...register("email", { onChange: (e) => { handleChange(e) }, required: "email is required!" })} />
                                    <span className='err'>{errors.email?.message}</span>
                                </div>
                                <div className="form-group">
                                    <textarea className='textArea form-control' id='message' value={data.message} placeholder='Go ahead, i am listening...' {...register("text", { onChange: (e) => { handleChange(e) }, required: "message is required!" })} />
                                    <span className='err'>{errors.text?.message}</span>
                                </div>

                                <div className="form-group">
                                    <Button variant='contained' type='submit' className='but1'>Submit</Button>
                                </div>


                            </form>

                        </div>

                        <div className='col-xl-6 col-lg-6 right'>

                            <img src={img} alt="" />

                            <table className='box'>
                                <tbody>
                                    <tr>
                                        <td><div className='s'><LocationOnIcon fontSize='small' /></div></td>
                                        <td>207/8 Mahakal Colony Dewas, 455001</td>
                                    </tr>
                                    <tr>
                                        <td><div className='s'><CallIcon fontSize='small' /></div></td>
                                        <td>+91 8103570600</td>
                                    </tr>
                                    <tr>
                                        <td><div className='s'><EmailIcon fontSize='small' /></div></td>
                                        <td>123agaikwad@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>


                    </div>
                </div>


                {/* //////////////////////// animation //////////////////////////////////// */}
                {animation ?
                    <Animation
                        text="Message send successfully!"
                        fun={closeAnimation}
                    />
                    : null}
                {/* //////////////////////// animation //////////////////////////////////// */}



            </div>
        </>
    )
}

export default Contact