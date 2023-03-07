import React from 'react'
import { Link } from 'react-router-dom'
export default function

    () {
    return (
        <div className='container' style={{
            marginTop:"170px"
        }}>

            <div className="row g-5 justify-content-center">
                <div className="col-12">

                    <p className="intro fw-bold text-center display-3">Mango Team

                        <span className='text-success'> Customer</span></p>
                    <p class="lead text-center display-6">
                        Get instant access to all courses with a Mango Pro membership.
                    </p>

                </div>
                <div className="col-12 col-lg-6 ">

                    <div class="card text-left bg-dark p-5 m-5" style={{
                        border:"5px solid green",
                       
                   
                    }}>

                        <div class="card-body">
                            <h2 class="card-title text-center display-6 fw-bold">Monthly Membership</h2>
                            <center style={{
                                fontSize: "2em",
                                marginTop: "20px"
                            }}>
                                <p>only <span style={{
                                    fontSize: "2em",
                                    fontWeight: "bolder"
                                }}>$2.99 </span> / month</p>
                            </center>
                            <div class="card-bottom">

                                <ul className='list-group'>
                                    <li className='list-group-item bg-dark text-white'>Instant access to all courses</li>
                                    <li className='list-group-item bg-dark text-white'>Early access to new courses</li>
                                    <li className='list-group-item bg-dark text-white'>Access to premium & Udemy courses</li>
                                    <li className='list-group-item bg-dark text-white'>Cancel at any time</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-footer bg-dark d-flex justify-content-center">
                            <button className='btn btn-lg btn-success fw-bolder w-75' style={{
                                fontSize: "2em"
                            }}>Join us Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 ">

                    <div class="card text-left bg-dark p-5 m-5">

                        <div class="card-body">
                            <h2 class="card-title text-center display-6 fw-bold">Free Membership</h2>
                            <center style={{
                                fontSize: "2em",
                                marginTop: "20px"
                            }}>
                                <p>only <span style={{
                                    fontSize: "2em",
                                    fontWeight: "bolder"
                                }}>$0.00 </span> / month</p>
                            </center>
                            <div class="card-bottom">

                                <ul className='list-group'>
                                    <li className='list-group-item bg-dark text-white'>Instant access to all courses</li>
                                    <li className='list-group-item bg-dark text-white'>Early access to new courses</li>
                                    <li className='list-group-item bg-dark text-white'>Access to premium & Udemy courses</li>
                                    <li className='list-group-item bg-dark text-white'>Cancel at any time</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-footer bg-dark d-flex justify-content-center">
                            <Link to={'/Register'} className='btn btn-lg btn-success fw-bolder w-75' style={{
                                fontSize: "2em"
                            }}>Register Now </Link> 
                        </div>
                    </div>
                </div>
                                <div className="col">
                                     <h3 className='text-center' style={{
                                        color:"gray"
                                     }}>Get your first month half price when you use the code NINJAFLEDGLING. (monthly plan only).</h3>
                                </div>
            </div>
        </div>
    )
}
