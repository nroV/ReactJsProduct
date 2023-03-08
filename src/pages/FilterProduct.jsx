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
import { Fetchproduct, Filter, FilterProduct } from '../Service/Action/FetchAllProduct'
import SkeletonProduct from '../componets/SkeletonCard'
import secureLocalStorage from 'react-secure-storage'
import Joinus from '../componets/Joinus'
import { Fetchcategory } from '../Service/Action/GetCategory'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export function ProductFilter(props) {
    const [price,setprice] = useState({
        "price_min":"",
        "price_max":"",
    })
    const [isback, SetBack] = useState(true);
    const [isLoading, SetLoading] = useState(false)

    const [isactive, setActive] = useState();

    const [category, setCategory] = useState([

    ])
    const OnSubmitPrice= (e)=>{

        setMax(price.price_max);
        setMin(price.price_min);

        Filter(min, max)
        .then(res => res.json())
        .then(res => {
            setFilter(res)
            console.log(res);
        })
        .catch(err => console.log(err))
        redirect(`/filter/${min}/${max}`)
    
      }
      const redirect = useNavigate();
      const OnPriceHandle=(e)=>{
        const {name,value} = e.target;
   
        setprice(prestate=>{
           return {
             ...prestate,
             [name]:value
           }
        })
        console.log(price)
     }
    const prices = useParams();



    const [max,setMax] = useState(prices.price_max);
    const [min,setMin]=  useState(prices.price_min);
    const [activeclass, setClass] = useState()
    const onHandleCate = (id) => {
        console.log(id)

        setcid(id)
        props.Fetchproduct(cid)

    }
    const [userAuth, setUserAuth] = useState({
        access_token: ""

    })
    const [pfilter, setFilter] = useState([

    ])
    const [cid, setcid] = useState(1);
    useEffect(() => {
        console.log("price", price)
        console.log("price max", max)
        console.log("price min", min)
        setClass({
            border: "1px solid white",

        })

        SetLoading(true)
        userAuth.access_token = secureLocalStorage.getItem('authlogin');
        setTimeout(() => {

            //   props.Fetchproduct(cid)
            //    props.FilterProduct(min,max);
            Filter(min, max)
                .then(res => res.json())
                .then(res => {
                    setFilter(res)
                    console.log(res);
                })
                .catch(err => console.log(err))
            // props.FilterProduct(maxprice,minprice)
            //   setProduct(props.product)
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
            {console.log(props.product)}
            {/* {console.log(pro)} */}
            {/* {console.log(isLoading)} */}

            <Navi />







            {
                userAuth.access_token &&

                <div className='container'>
                    <div className='my-5'>
                        {
                            console.log(category)
                        }



                    </div>
                    {/* <TabBar cate={category} /> */}
                    <div className='row g-3 my-5'>

                        <div className="col-12 my-5" >

                            <p className="header display-6 fw-bold">Filter</p>
                            <div className="price-range d-flex align-items-center" >

                                <label class="form-check-label">Price </label>
                                <input class="form-control mx-3" name="price_min"
                                    id=""
                                    type="text"
                                    placeholder='MIN'
                                    onChange={OnPriceHandle}
                                />
                                <input class="form-control
     " name="price_max"
                                    id="" type="text"
                                    placeholder='MAX'
                                    onChange={OnPriceHandle}






                                />
                                <button type='submit' className='btn btn-success mx-3' onClick={OnSubmitPrice}>comfirm</button>




                                <label class="form-check-label">Product </label>
                                <input class="form-control mx-3" name="" id="" type="text" placeholder='Name' />

                                <button className='btn btn-success mx-3 '>Search</button>


                            </div>




                        </div>
                        {
                            isLoading && <SkeletonProduct />

                        }


                        {pfilter && pfilter.map(product => (


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
        product: store.filter.pfilter
    }
}


export default connect(mtp, { FilterProduct })(ProductFilter)
