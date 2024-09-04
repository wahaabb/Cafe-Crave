import React from 'react'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer mt-5">
            <p className='mt-3'>&copy; {currentYear}. All rights reserved by <a style={{  color: "#c24244"}}  href="https://portfolio1-wahab.vercel.app/">ABDUL WAHAB</a>.</p>
        </footer>
    );
};
export default Footer;