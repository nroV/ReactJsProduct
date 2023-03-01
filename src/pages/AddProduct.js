import React, { useEffect, useState } from 'react'
import Navi from '../componets/navigationbar'
import SecondNavi from '../componets/SecondNavi'
import { AddProduct } from '../Service/Action/PostProduct'

import { connect, useDispatch, useSelector } from 'react-redux';
import { Fetchcategory} from '../Service/Action/GetCategory';
import { useNavigate, useParams } from 'react-router-dom';
import { Uploadimg } from '../Service/Action/UploadImg';
import { FetchProductID,FetchProductIDTwo } from '../Service/Action/GetProductID';
export function ModifyProduct(props) {
    const {id} = useParams();

    const [category, setCategory] = useState([])
    useEffect(() => {
 
        Fetchcategory()
        .then(res=>res.json())
        .then(res=>setCategory(res))

        // dispatch_two(FetchProductIDTwo(id))
       

    }, [])

    const [uploadimg, setImg] = useState([])

    const dispatch = useDispatch();
    
   const dispatch_two = useDispatch();

    const navigator = useNavigate()

    const { pproduct } = useSelector(state => state.postproduct)

    const { imgresponse } = useSelector(state => state.uploadimagereducer)


    const [newproduct, setProduct] = useState(
        {
            "title": "",
            "price": null,
            "description": "",
            "categoryId": null,
            "images": ["https://placeimg.com/640/480/any"]
        }
    )

    const OnSubMitHandle = (e) => {
        e.preventDefault()
        dispatch(AddProduct(newproduct))

        if (newproduct.title === "" || newproduct.price === null ||
            newproduct.description === "" || newproduct.categoryId == null
        ) {
                alert("Something missing in your information")
        }

        else {
                navigator('/')
        }

        // props.AddProduct(newproduct)
        // console.log(e.target.value)
    }

    const OnChangeValue = (e) => {
        // console.log(e)

        const { name, value } = e.target;

        setProduct(
            previousState => {
                return {
                    ...previousState,
                    [name]: value
                }
            }

        )
        // console.log(newproduct)
    }

    const onFileValue = (e) => {
        console.log(e.target.files[0])

        const formData = new FormData();
        formData.append("file", e.target.files[0], e.target.files[0].name)

        Uploadimg(formData)
            .then(res => {
                console.log(res.data.location);

                newproduct.images = [res.data.location]
            })
            .catch(err => console.log(err))

    }
    return (
        <>
            {/* {console.log(props.categories)} */}
            <SecondNavi />
        
            <div className='container w-50' style={{
                marginTop: "200px"

            }}>

                <h2 className='fw-bold text-sm-center text-md-left'>Add New Product</h2>
                <form className='bg-dark p-4 my-5' onSubmit={OnSubMitHandle}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Product Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            name='title'
                            onChange={OnChangeValue}

                        />
                    </div>
                    <div className="form-groupmy-5">
                        <label for="exampleFormControlInput2">Product Description</label>
                        <div class="mb-3">

                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description'

                                name='description'
                                onChange={OnChangeValue}
                            ></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Image</label>
                        <input type="file" className="form-control"


                            onChange={onFileValue}
                        />

                    </div>
                    <div class="form-group my-5">
                        <label for="exampleFormControlInput3">Category</label>


                        <select class="form-select" id="inputGroupSelect01"
                            name='categoryId'
                            onChange={OnChangeValue}


                        >
                            <option selected>Choose...</option>
                            {category && category.map(cate => (
                                <option value={cate.id}>{cate.name}</option>

                            ))

                            }

                        </select>
                    </div>
                    <label for="exampleFormControlInput3">Price</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text">$</span>

                        <input type="text" class="form-control"

                            aria-label="Dollar amount (with dot and two decimal places)"
                            name='price'
                            onChange={OnChangeValue}
                        />
                    </div>


                    <button type="submit" class="btn btn-primary my-5 bg-dark border" data-toggle="button" aria-pressed="false" autocomplete="off" onSubmit={OnSubMitHandle}>Add Product</button>
                </form>

            </div>
        </>

    )
}

// const mtp = (store) =>{
//     return{
//             productupdate:store.productid.products
//     }
// }

// export default connect(mtp,{FetchProductID})(AddProducts)


