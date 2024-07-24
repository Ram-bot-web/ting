import React from 'react';
import img1 from '../assets/images/DSC04381 copy.png';
import img2 from '../assets/images/DSC04614 copy.png';
import img3 from '../assets/images/corporate gifting.png';
import plus from '../assets/images/plus.png';

export default function LivingUp() {
    return (
        <>
            <div className='container mb-4'>
                <h1 className='text-start' style={{ color: 'white', fontFamily: 'serif' }}>Living up to earth-standard</h1>
                <div className='row'>
                    <div className='col-lg-12 living mb-2'>
                        <div className='d-flex img-hover-zoom imgContainer'>
                            <div className='image-wrapper'>
                                <img src={img2} alt='img1' style={{ width: '100%', height: '100%' }} className='img'></img>
                                <div className='p-3' style={{ position: 'absolute', top: '0' }}>
                                    <h1 className='text-start' style={{ fontSize: '30px', fontFamily: 'serif' }}>custom craft</h1>

                                </div>
                                <div class="text-overlay">
                                    <span>Giving a sustainable form to your creative vision</span>
                                </div>
                                <div className='plus'>
                                    <img src={plus} alt='plus'></img>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex img-hover-zoom imgContainer'>
                            <div className='image-wrapper'>
                                <img src={img1} alt='img1' style={{ width: '100%', height: '100%' }} className='img'></img>
                                <div className='p-3' style={{ position: 'absolute', top: '0' }}>
                                    <h1 className='text-start' style={{ fontSize: '30px', fontFamily: 'serif' }}>atelier</h1>

                                </div>
                                <div class="text-overlay">
                                    <span>A sustainable production unit to craft your next eco-conscious collection</span>
                                </div>
                                <div className='plus'>
                                    <img src={plus} alt='plus'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='d-flex img-hover-zoom imgContainer1'>
                            <div className='image-wrapper1'>
                                <img src={img3} alt='img3' style={{ width: '100%' }} className='img'></img>
                                <div className='p-3' style={{ position: 'absolute', top: '0' }}>
                                    <h1 className='text-start' style={{ fontSize: '30px', fontFamily: 'serif' }}>corporate gifting</h1>
                                    {/* <img src={plus} alt='plus'></img> */}
                                </div>
                                <div class="text-overlay1">
                                    <span>When conscious working translates to conscious gifting</span>
                                </div>
                                <div className='plus'>
                                    <img src={plus} alt='plus'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
