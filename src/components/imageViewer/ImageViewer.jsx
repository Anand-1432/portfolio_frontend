import React from 'react'
import './imageViewer.scss'

import CloseIcon from '@mui/icons-material/Close';
import img from '../../assests/certificate.jpg'

const ImageViewer = ({ fun }) => {
    return (
        <>
            <div className='imageViewer' onClick={fun}>
                <img src={img} alt="" onClick={(e) => e.stopPropagation()} />
                <div className='icon'> <CloseIcon fontSize='large'/> </div>
            </div>
        </>
    )
}

export default ImageViewer