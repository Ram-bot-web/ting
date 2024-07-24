import React from 'react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import '../styles/eco.css';

export default function Logos() {
    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5
    ];
    return (
        <>
            <div className="client-logos">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Client logo ${index + 1}`} className="logo" />
                ))}
            </div>
        </>
    )
}
