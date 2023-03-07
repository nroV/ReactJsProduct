import React from 'react'

export default function Services() {
  return (
    <div className='container mb-5' style={{
      marginTop:"170px"
    }}>
      <div className='row justify-content-center'>
        <div className="col-12 mb-5">
              <h1 className='text-center fw-bold'  style={{
                fontSize:"5em"
              }}>Shopping <span className='text-success'>Now</span>
            </h1>
            <h3 className='text-center my-5' >
            Access to every single latest & added product for just $2.99 a month.
            </h3>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card text-dark" style={{
            minHeight: "100%",
            background: "#F4F4F4"

          }}>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <span class="material-symbols-outlined display-1">
                airport_shuttle
              </span>
              <div className="text fw-bold display-6 text-center">Super Fast and Free Delivery</div>
            </div>

          </div>

        </div>

        <div className="col-12 col-lg-4">
          <div className="row mb-4">
            <div className="col">
              <div className="card text-dark " style={{
                minHeight: "100%",
                background: "#F4F4F4"

              }}>
                <div className="card-body d-flex justify-content-center flex-column align-items-center">
                  <span class="material-symbols-outlined display-1">
                    paid
                  </span>
                  <div className="text fw-bold display-6 text-center">Non-contract Shipping and fees</div>
                </div>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card text-dark " style={{
                background: "#F4F4F4"
              }}>
                <div className="card-body d-flex justify-content-center flex-column align-items-center">
                  <span class="material-symbols-outlined display-1">
                    credit_score
                  </span>
                  <div className="text fw-bold display-6 text-center">Money-back Guaranteed</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="col-12 col-lg-4 ">
          <div className="card text-dark " style={{
            minHeight: "100%",
            background: "#F4F4F4"

          }}>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <span class="material-symbols-outlined display-1">
                local_convenience_store
              </span>
              <div className="text fw-bold display-6 text-center">Super Secure Payment System</div>
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}
