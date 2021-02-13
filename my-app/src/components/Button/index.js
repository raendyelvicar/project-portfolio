import React from 'react'
import './ButtonElements.css'
import file from '../../assets/pdf/Resume_Raendy Andhika El Vicar.pdf'

const Button = (props) => {
    const className = props.className;

    return (
        <>
            <a className={`btn ${className}`} href={file} download="Resume.pdf"> 
                {props.children}
            </a>
        </>
    )
}

export default Button
