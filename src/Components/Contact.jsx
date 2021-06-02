import React, {useState} from 'react'

function Contact() {
    const [data, setdata]= useState({
        name:"",
        email:'',
        phone:'',
        msg:'',
    })

    const getData = (event) => {
        const { name , value } = event.target
        setdata((allVal)=>{
            return {
                ...allVal,
            [name]:value 
        }
        })
    }

    const formSubmit=()=> { 
        alert(`Name: ${data.name} email: ${data.email} phone: ${data.phone} msg: ${data.msg}`)

    }

    return (
        <>
        <div className="mb-5 animate__animated animate__fadeIn">
            <div className=''>
                <h1 className="text-center"> Contact Us </h1>
            </div>

            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"> Full Name</label>
                                   
                                <input type="text" className="form-control" onChange={getData} name="name" value={data.name} id="fname" placeholder="Enter Your Name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" onChange={getData} name="email" value={data.email} id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" onChange={getData} name="phone" value={data.phone} id="exampleFormControlInput1" placeholder="Mobile No" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" onChange={getData} name="msg" value={data.msg} id="exampleFormControlTextarea1" rows={3} defaultValue={""} required />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Contact
