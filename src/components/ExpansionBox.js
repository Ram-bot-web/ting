import React from 'react';
import RectImage1 from "../assets/images/Rectangle 6 copy 7.png";
import RectImage2 from "../assets/images/Rectangle 6 copy 6.png";
import CirclePlus from "../assets/images/circle_plus.png";
import "../styles/expansion.css";

function ExpansionBox(props) {
    return (
        <>
        <div className='container'>
            <div className="row py-5 align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 px-3">
                    <h1 className="expand-header">When fashion made another statement</h1>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 px-3 ml-auto">
                    <button className="button-light float-end">Katha</button>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 px-3">
                    <div className="">
                        <img src={RectImage1} alt='' className="w-100" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 expand-hidden">
                        <div className="image-exp-container px-4">
                            <div className="expand-bg align-items-center">
                                <p className="flex-grow-1 m-0">5 simple ways to get started with a more conscious way of living</p>
                                <img src={CirclePlus} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 px-3">
                    <div className="">
                        <img src={RectImage2} className="w-100" alt=''/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 expand-hidden">
                        <div className="image-exp-container px-4">
                            <div className="expand-bg align-items-center">
                                <p className="flex-grow-1 m-0">Easy tips for a conscious closet</p>
                                <img src={CirclePlus} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row expand">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 px-5">
                    <div className="image-exp-container">
                        <div className="expand-bg align-items-center">
                            <p className="flex-grow-1 m-0">5 simple ways to get started with a more conscious way of living</p>
                            <img src={CirclePlus} />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 px-5">
                    <div className="image-exp-container">
                        <div className="expand-bg align-items-center">
                            <p className="flex-grow-1 m-0">Easy tips for a conscious closet</p>
                            <img src={CirclePlus} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default ExpansionBox;