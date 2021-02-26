import React from 'react'
import './ButtonElements.css'

const Button = (props) => {
    const {className, file, fileName} = props;

    return (
        <>
            <a className={`btn ${className}`} href={file} download={fileName}> 
                {props.children}
            </a>
        </>
    )
}

export default Button
