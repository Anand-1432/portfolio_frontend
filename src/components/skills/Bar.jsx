import React, { useEffect, useState } from 'react'

const Bar = (props) => {

    const [style, setStyle] = useState();


    useEffect(() => {

        if (props.flow) {
            setTimeout(() => {

                setStyle({
                    width: `${props.data.percentage}%`,
                    opacity: 1
                })

            }, 500);
        }
        else {
            setStyle({
                width: "0%",
                opacity: 0
            })
        }


    }, [props.data.percentage, props.flow])


    return (
        <>

            <div className='skillBar'>

                <div className='text'>
                    <div> {props.data.name} </div>
                    <div className='percent'> {props.data.percentage}%</div>
                </div>

                <div className='barCover'>
                    <div className='bar' style={style}></div>
                </div>

            </div>
        </>
    )
}

export default Bar