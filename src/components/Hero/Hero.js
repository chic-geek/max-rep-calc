import React from 'react';

const Hero = (props) => {
    return(
        <div className="hero is-info">
            <div className="hero-body">
                <div className="container">
                    <div className="column is-8 is-offset-2">
                        <h1 className="title is-2">{props.title}</h1>
                        <h2 className="subtitle">{props.subtitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
