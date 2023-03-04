import React, { useEffect } from 'react'
import './animation.scss'

import n1 from "../../assests/n1.gif"
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { Button } from '@material-ui/core'

const Animation = (props) => {

    const { width, height } = useWindowSize();

    const transition = () =>{
        document.querySelector(".text1").style.marginTop = "-50px";
        document.querySelector(".text1").style.marginBottom = "30px";
        document.querySelector(".text1").style.opacity = "1";
        document.getElementById("but1").style.opacity = "1";
    }

    useEffect(()=>{
         setTimeout(transition, 1000);
    },[]);

    return (
        <>
            <div className='animationss'>
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={50}
                />

                <div className='mainCon'>
                <div className='imgCon1'>
                    <img src={n1} alt="" />
                </div>
                   <div className='text1'> {props.text} </div>
                    <Button variant='contained' id='but1' onClick={props.fun}>Done</Button>
                </div>

            </div>
        </>
    )
}

export default Animation