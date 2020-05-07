import React from 'react';

function Footer() {
    return (
        <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p className="w3-margin">Find me on social media or get in touch with me.</p>
            <a href="mailto:shashank.kotturi@uwaterloo.ca" className="w3-text-white"><i className="w3-margin fa fa-envelope w3-hover-opacity" /></a>
            <a href="https://www.linkedin.com/in/shashank-kotturi/" target="_blank" className="w3-text-white"><i className="w3-margin fa fa-linkedin w3-hover-opacity" /></a>
            <a href="https://github.com/shashankkotturi" target="_blank" className="w3-text-white"><i className="w3-margin fa fa-github w3-hover-opacity" /></a>
            <a href="tel:6046005956" className="w3-text-white"><i className="w3-margin fa fa-phone w3-hover-opacity" /></a>
        </footer>

    );
}

export default Footer;