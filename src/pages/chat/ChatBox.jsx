import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

const ChatBox = ({ data, fun }) => {
    return (
        <>
            <div className='chatBox' onClick={() => fun(data)}>
                <div className='imgSection'><PersonIcon style={{ fontSize: "25px" }} /></div>
                <div className='user'>
                    <section> {data.name} </section>
                    <span> {data.email} </span>
                </div>
            </div>
        </>
    )
}

export default ChatBox