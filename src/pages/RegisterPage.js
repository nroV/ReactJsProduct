import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SecondNavi from '../componets/SecondNavi'
import { RegisterNew } from '../Service/Action/Auth/Register'
import { SendEmail } from '../Service/Action/Auth/Sendemail'
export default function RegisterPage() {
    const [user,setUser] = useState({
        email: "wee@gmail.com",
        name: "hong",
        password: "1111",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
      })


      const navigator = useNavigate()

    const OnRegister = (e)=>{
        e.preventDefault()
        console.log("value",user)
        RegisterNew(user).then(res=>res.json())
        .then(res=>{
            console.log(res)
            console.log(user.email)
            if(res.statusCode != 400){
                //send email here
                SendEmail(

                  {
                    "email":user.email
                  }
                )
                .then(res=>res.json())
                .then(res=>{
                    if(res.isAvailable == false){
                        navigator('/login')
                    }
                })
            }
            else{
                alert('Something went wrong in your profile')
            }
        })

      
    }

    const OnChange = (e)=>{
        e.preventDefault()
        console.log(e.target.name)
        const {name,value} = e.target;
        setUser(prestate=>{
            return {
                ...prestate,
                [name]:value
            }
        })

        
    }
    return (
        <>
            <SecondNavi />

            <div className='container' style={{
                marginTop: "220px"
            }}>

                <div className="card-login card" style={{
                    backgroundColor: "rgba(1, 1,1, 0.3)"

                }}>
                    <div className="row">

                        <div className='col bg-white col-lg-5 p-5 d-flex justify-content-center'>



                            <div className='content text-dark'>
                                <div className="display-5 fw-bold text-dark ">New and Fast ecommerce Website</div>
                                <div className="img-top my-4">

                                    <img alt='img-name' src='https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' className='img-fluid'

                                        style={{
                                            minWidth: "100%",
                                            maxHeight:"300px",
                                            objectFit:"cover"
                                   
                                        }}
                                    />

                                </div>

                                <div className='subtitle lead my-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facere sed, recusandae quaerat quia ipsa sint dicta saepe eum mollitia dolor veritatis autem odit nam cumque quis quam vero itaque.
                                </div>
                            </div>
                        </div>
                        <div className='col '> 
                        
                          <form className='p-5'  onSubmit={OnRegister}>

                            <h2 className='fw-bold'>Sign Up</h2>
                            <div class="form-group mb-3 my-5">
                                <label for="exampleInputUsername" class="form-label">Username</label>
                                <input type="text" class="form-control" 
                                
                                id="exampleInputUsername" 
                                aria-describedby="emailHelp" 
                                name='name'
                                onChange={OnChange}
                                
                                />

                            </div>
                            <div class="form-group mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                
                                name='email'
                                onChange={OnChange}
                                />
                                                       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                            </div>
                            <div class="form-group mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                
                                aria-describedby="emailHelp" 
                                name='password'
                                onChange={OnChange}
                                
                                />
                                <div id="emailHelp" class="form-text">We'll never share your password with anyone else.</div>
                            </div>
                            <div class="form-group mb-3">
                                  <label for="formFileMultiple" class="form-label">Browse Image for your avatar</label>
                                  <br></br>
                         
                                <input type="file" className="form-control"
                                name='avatar'
                                onChange={OnChange}
                                
                                />
                            </div>

                            <button type="submit" class="btn btn-dark border-white rounded w-100 my-3"
                                onSubmit={OnRegister}
                            
                            
                            >Register</button>
                        </form></div>
                    </div>

                </div>

            </div>
        </>


    )
}
