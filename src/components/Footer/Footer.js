import React from 'react';

const Footer = (props) => {
    return(
        <div className="has-text-centered">
            <small>Version: {props.versionNum}</small>
        </div>
    );
}

export default Footer;
