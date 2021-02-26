import React from 'react'
import './FooterElements.css'
import Link from '@material-ui/core/Link';

const Footer = () => {
    return (
        <>
            <footer>
                <p>
                    &copy; 2021 Copyright. All Rights Reserved. | &nbsp;
                    <Link className="footer__link" style={{color:"#111111"}} href="/login">{"Logout"} </Link>
                </p>
            </footer>
        </>
    )
}

export default Footer
