
import React from 'react'
import Card from './Card'
import Sdata from './Sdata'


const Services = () => {
    return (
        <>
            <div className="mb-3 ">
                <h1 className='text-center animate__animated animate__backInDown'>Our Services</h1>
            </div>
            <div className="container mb-5 animate__animated animate__backInUp">
                <div className="row">
                    <div className="col-lg-12 mx-lg-auto">
                        <div className="row gy-4">

                        {
                            Sdata.map((value, index)=>{
                                return (
                                    <Card key={index} imgsrc={value.imgsrc} title={value.title} desc={value.desc}/>
                                )
                            })
                        }
                            
        



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

