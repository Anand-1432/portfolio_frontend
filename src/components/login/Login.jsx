import { Button } from '@mui/material'
import React, { useState } from 'react'
import './login.scss'

const Login = (props) => {

    const [code, setCode] = useState();

    const checkCode = () => {
        if (code == "anand@123") {
            props.fun(true);
        }
    }

    return (
        <>
            <div className='login'>
                <div className='loginBox'>

                    <h4>Hello Anand !</h4>

                    <div className="form-group">
                        <input type="text" name="code" className="form-control" placeholder="Enter Secret Code" onChange={(e) => setCode(e.target.value)} />
                    </div>

                    <div className='btnBox'>
                        <Button className='bt' variant='contained' onClick={checkCode}>Submit</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login