import React from 'react'
import { Link } from 'react-router-dom';

export default function CardProduct(props) {


  const product = props.products;
  return (
    <>
          {console.log(product)}

    <div className='col-12 col-lg-4'>
           <div className='card p-0 m-0 border-0'>
    </div>
     
     <Link to={`/read/${product.id}`} >   <img src={product.images[0]} className="card-img-top" alt="..."

          style={{
            maxHeight: "400px",
            overflow: "hidden",
            objectFit: "cover"

          }}
        />
        </Link>
        <div className="card-body text-white"
          style={{
            background: "rgb(57, 65, 71)",

          }}
        >
          <h5 className="card-title text-white display-5 fw-bold">{product.title}</h5>

          <div className='card-bottom'>
            <p className="card-text fw-bold" style={{
              fontSize: "1.66em",
              color: "#acacac"



            }}>${product.price}</p>

          </div>
          <div className='star-review d-flex justify-content-between'>
            <div>
              <span class="material-symbols-outlined" style={
           
                {
                  color:"gold",
           
                }
       
            
              }>
                star
              </span>
              <span class="material-symbols-outlined">
                star
              </span>
              <span class="material-symbols-outlined">
                star
              </span>
              <span class="material-symbols-outlined">
                star
              </span>
              <span class="material-symbols-outlined">
                star
              </span>
            </div>
            <div>204 reviews</div>
          </div>


        </div>
      </div>




    </>


  )
}
