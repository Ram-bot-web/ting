import React from 'react'

export default function Grids() {
    return (
        <>
            <div className='container py-5 grid'>
                <h1 className='text-start'>Conscious. Mindful. Responsible.</h1>
                <h1 className='text-start'>Even when no one is watching.</h1>
                <p className='text-start grifpara' style={{ color: '#55524a', fontFamily: 'serif' }}>
                    <b>Beej</b> is a metaphor for the origin of all creation. It symbolizes our respect towards every life form and works as a guiding principle of every business decision we make.
                </p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-xs-12 mb-5'>
                        <h4 className='text-start' style={{ color: "#99a080", fontFamily: 'serif'}}>show me some love</h4>
                        <p className='text-start' style={{height: "165px"}}>Our deep commitment to being mindful of the world we live in and its fast depleting resources reflects in every single material we work with. Every element of our product from the inner linings to the zippers and even the packaging is sustainable in some form making it a 100% sustainable supply chain.</p>
                    <button className='planet'>Our Planet  +</button>
                    </div>
                    <div className='col-lg-4 col-xs-12 mb-5'>
                        <h4 className='text-start' style={{color: "#be9b7f", fontFamily: 'serif'}}>the power of plenty</h4>
                        <p className='text-start' style={{height: "165px"}}>An empowered team with a common purpose fuels the passion we bring to our work. Our team of artisans has consciously made a shift to the world of sustainable fashion and take pride in the contributions they are making individually. We practice fair pay and demand the same of the partners we work with.</p>
                        <button className='planet'>Our Planet  +</button>
                    </div>
                    <div className='col-lg-4 col-xs-12 mb-5'>
                        <h4 className='text-start'  style={{color: "#9f9eb1", fontFamily: 'serif'}}>birds of a feather</h4>
                        <p className='text-start' style={{height: "165px"}}>Right from the onset, it was important for us to collaborate with brands and partners that share the same value system as ours. We only work with businesses that are conscious of their practices and committed to sustainability both environmentally and socially.</p>
                        <button className='planet'>Our Planet  +</button>
                    </div>
                </div>
            </div>
        </>
    )
}
