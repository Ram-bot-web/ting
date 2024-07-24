import React from 'react';
import '../styles/footer.css';
import logo from '../assets/images/Beej_Logo-01.png';

export default function Footer() {
    return (
        <>
            <div>
                <div class="row" style={{ background: '#cac5b6', width: '101%', padding: '2% 8%' }}>
                    <div class="col-lg-6"><h2 className='text-start' style={{ fontFamily: "serif", color: 'white' }}>Join the Beej community</h2><p className='footPara' style={{ textAlign: "justify" }}>and explore the world of sustainability, get updates on our
                        collections, collaborations, and more!</p></div>
                    <div class="col-lg-6 my-auto">
                        <div class="input-group" >
                            <input type="email" class="form-control email" placeholder="Email Address" style={{ top: '47%' }} />
                            <span class="input-group-btn" />
                            <button class="btn submit" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="content row px-5">
                    <div className="foots services col-lg-3 col-6">
                        <h4>Navigate</h4>
                        <p>
                            <button className="link">Shop</button>
                        </p>
                        <p>
                            <button className="link">Sustainability</button>
                        </p>
                        <div className="about">
                            <p>
                                <button className="link">Our Planet</button>
                            </p>
                            <p>
                                <button className="link">Our People</button>
                            </p>
                            <p>
                                <button className="link">Our Partners</button>
                            </p>
                            <p>
                                <button className="link">Green Story</button>
                            </p>
                            <p>
                                <button className="link">Certifications</button>
                            </p>
                        </div>
                        {/* <p>
                            <button className="link">DevOps</button>
                        </p>
                        <p>
                            <button className="link">Web designing</button>
                        </p> */}
                    </div>
                    <div className="foots social-media col-lg-3 col-6">
                        <h4> </h4>
                        <p>
                            <button className="link">
                                <i className="fab fa-linkedin" /> About
                            </button>
                        </p>
                        <div className="about">
                            <p>
                                <button className="link">Our Story</button>
                            </p>
                            <p>
                                <button className="link">Our Story</button>
                            </p>
                            <p>
                                <button className="link">Our Philosophy</button>
                            </p>
                        </div>
                        <p>
                            <button className="link">
                                <i className="fab fa-twitter" /> Customer Crafts
                            </button>
                        </p>
                        <p>
                            <button className="link">
                                <i className="fab fa-github" /> Corporate Gifts
                            </button>
                        </p>

                    </div>
                    <div className="foots links col-lg-3 col-6">
                        <h4> </h4>
                        <p>
                            <button className="link">Atelier</button>
                        </p>
                        <p>
                            <button className="link">Journal</button>
                        </p>
                        <p>
                            <button className="link">Press & Media</button>
                        </p>
                    </div>
                    <div className="foots details col-lg-3 col-6">
                        {/* <div> */}
                        <div>
                            <h4>Need Help </h4>
                            <p>
                                <button className="link">FAQ</button>
                            </p>
                            <p>
                                <button className="link">Contact Us</button>
                            </p>
                        </div>

                    </div>
                    <div className='foots footLogo col-lg-3 col-6 mt-3'>
                        <img src={logo} alt=''></img>
                    </div>
                </div>
                <footer>
                    <hr />
                    <div className="row">
                        <div className='col-lg-4 col-12 mb-3' style={{ fontWeight: '100', opacity: '0.5' }}>
                            <span>All rights reserved - 2020 Studio Beej</span>
                        </div>
                        <div className='col-lg-4 col-12 mb-3' style={{ fontWeight: '100', opacity: '0.5' }}>
                            <span>Terms & Conditions</span>
                        </div>
                        <div className='col-lg-4 col-12 mb-3' style={{ fontWeight: '100', opacity: '0.5' }}>
                            <span>Made by TING</span>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}
