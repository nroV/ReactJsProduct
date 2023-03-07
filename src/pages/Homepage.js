import React, { useState } from 'react'
import Body from '../componets/Body'
import CardProduct from '../componets/cardproduct'
import Navi from '../componets/navigationbar'
import TabBar from '../componets/TabBar'
import Layout from './Layout'
import Footer from '../componets/footer'
import Services from '../componets/Services'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Fetchproduct } from '../Service/Action/GetBookAction'
import SkeletonProduct from '../componets/SkeletonCard'
import secureLocalStorage from 'react-secure-storage'
import Joinus from '../componets/Joinus'
import { Fetchcategory } from '../Service/Action/GetCategory'
export function Homepage(props) {

  const [isback, SetBack] = useState(true);
  const [isLoading, SetLoading] = useState(false)

  const [isactive, setActive] = useState();

  const [category, setCategory] = useState([

  ])

  const [activeclass, setClass] = useState()
  const onHandleCate = (id) => {
    console.log(id)

    setcid(id)
    props.Fetchproduct(cid)
  }
  const [userAuth, setUserAuth] = useState({
    access_token: ""

  })

  const [cid, setcid] = useState(1);
  useEffect(() => {
    setClass({
      border: "1px solid white",

    })
    SetLoading(true)
    userAuth.access_token = secureLocalStorage.getItem('authlogin');
    setTimeout(() => {

      props.Fetchproduct(cid)

      setProduct(props.product)
      SetLoading(false)

    }, 1000)


    console.log("use effect render")
    console.log(userAuth.access_token)

    Fetchcategory().
      then(res => res.json()).
      then(data => {
        console.log(data);
        setCategory(data)
      })

  }, [])


  const [pro, setProduct] = useState([])


  return (
    <>
      {/* {console.log(props.product)} */}
      {/* {console.log(pro)} */}
      {/* {console.log(isLoading)} */}

      <Navi />

      <Body />
      <Services />


      <Joinus />



      {
        userAuth.access_token &&

        <div className='container'>
          <div className='my-5'>
            {
              console.log(category)
            }
            <div className='tab container d-flex justify-content-center '>
              {category && category.map(cate => (


                <button



                  className='btn rounded-lg mx-3' onClick={() => onHandleCate(cate.id)}

                  style={activeclass}
                >
                  <div >
                    {cate.name}


                  </div>

                </button>

              ))}

            </div>


          </div>
          {/* <TabBar cate={category} /> */}
          <div className='row g-3 my-5'>

            <div className="col-12 my-5" >

            <p className="header display-6 fw-bold">Filter</p>
              <div className="price-range d-flex align-items-center" >

                <label class="form-check-label">Price </label>
                <input class="form-control mx-3" name="" id="" type="text" placeholder='MIN' />
                <input class="form-control " name="" id="" type="text" placeholder='MAX' />
                <button className='btn btn-success mx-3'>comfirm</button>




                <label class="form-check-label">Product </label>
                <input class="form-control mx-3" name="" id="" type="text" placeholder='Name' />
               
                <button className='btn btn-success mx-3 '>Search</button>

   
              </div>
          

             

            </div>
            {
              isLoading && <SkeletonProduct />

            }


            {pro && props.product.map(product => (


              <CardProduct products={product} key={product.id} />



            ))}


          </div>

        </div>
      }


      {/* <Footer>
      </Footer> */}

    </>
  )
}
const mtp = (store) => {
  return {
    product: store.productreducer.products
  }
}


export default connect(mtp, { Fetchproduct })(Homepage)
