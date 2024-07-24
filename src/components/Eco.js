import React from 'react';
import Kesh from '../assets/images/Khesh.png';
import Ecoimg from '../assets/images/Eco.png';
import '../styles/eco.css';


export default function Eco() {
    return (
        <>
            <div class="container row">
                <div class="section col-lg-6 col-xs-12 mb-5">
                    <div className='row'>
                        <div className='col-lg-6 col-xs-12'>
                            <img src={Kesh} alt={"kesh"} style={{ width: '100%' }} />
                        </div>
                        <div className='col-lg-6 col-xs-12 text-lg-start'>
                            <h3 style={{ color: '#8f7f5f', fontFamily: 'serif' }}>Khesh</h3>
                            <p style={{ color: '#8f7f5f', fontFamily: 'serif', height: '150px' }}>Khesh is a traditional form of weaving that finds its roots in the Birbhum district of West Bengal. The beauty about Khesh is that no two materials look the same and only once the fabric is woven can it be appreciated in its full beauty.</p>
                            <button style={{
                                backgroundColor: 'white',
                                color: 'black',
                                border: 'none',
                                padding: '10px 20px',
                            }}>Know More</button>
                        </div>
                    </div>
                </div>
                <div class="section col-lg-6 col-xs-12 mb-5">
                    <div className='row'>
                        <div className='col-lg-6 col-xs-12'>
                            <img src={Ecoimg} alt={"Eco"} style={{ width: '100%' }} />
                        </div>
                        <div className='col-lg-6 col-xs-12 text-lg-start'>
                            <h3 style={{ color: '#8f7f5f', fontFamily: 'serif' }}>Eco Friendly Packaging</h3>
                            <p style={{ color: '#8f7f5f', fontFamily: 'serif', height: '150px' }}>We have a strict plastic-free and zero waste packaging policy. Our products come in a jute bag and recyclable boxes. The product information card is made with seed paper which is reusable, and we recommend that you do!</p>
                            <button style={{
                                backgroundColor: 'white',
                                color: 'black',
                                border: 'none',
                                padding: '10px 20px',
                            }}>Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
