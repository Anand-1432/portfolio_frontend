import React from 'react'

const SkillCard = (props) => {
    return (
        <>
            <div className='com'>
                <div className='box'>
                    <img src={props.img} alt='' />
                    <p>
                        {props.name}
                        <br />
                        <span> {props.dec} </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SkillCard