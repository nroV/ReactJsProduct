import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import SecondNavi from '../componets/SecondNavi'
import { LoginUser } from '../Service/Action/Auth/Login';
export default function Loginform() {
    const [userlogin,setUser] = useState({
        "email": "john@mail.com",
        "password": "changeme"
      })
      const [islogout,setLog] = useState(true)
      
      const navigator = useNavigate();
      const dispatch = useDispatch();

      const OnChangeHandle =(e)=>{
                const {name,value} = e.target;
                setUser(prestate=>{
                    return {
                        ...prestate,
                        [name]:value
                    }
                })
                console.log(userlogin);
      } 
      const OnSubmitLogin =(e)=>{
        e.preventDefault();
        dispatch(LoginUser(userlogin))
        .then((res)=>{
            console.log("token login",res)
            if(res.refresh_token){
                navigator('/')
            }
            
        })

      }
  return (
    <div>

<SecondNavi />

<div className='container' style={{
    marginTop: "250px"
}}>

    <div className="card-login card" style={{
        backgroundColor: "rgba(1, 1,1, 0.3)"

    }}>
        <div className="row">

            <div className='col-12 col-md-6 bg-white col-lg-5 p-5 d-flex justify-content-center d-none d-md-block'>



                <div className='content text-dark'>
                    <div className="display-5 fw-bold text-dark text-left">Welcome back, Time to Shop With Us </div>
                    <div className="img-top my-4">

                        <img alt='img-name' src='https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' className='img-fluid'

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
            <div className='col-12 col-md-6 col-lg-7 my-5'>  
            
             <form className='p-5 my-5' onSubmit={OnSubmitLogin}>

                <h2 className='fw-bold'>Login</h2>
      
                <div class="form-group mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp" 
                     
                     name='email'
                     onChange={OnChangeHandle}
                     />

                </div>
                <div class="form-group mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control"
                    
                    id="exampleInputEmail1" 
                    
                    aria-describedby="emailHelp" 
                    
                    onChange={OnChangeHandle}
                    name='password'
                    />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
           
                <button type="submit" class="btn btn-dark border-white rounded w-100"
                    onSubmit={OnSubmitLogin}
                
                >Login</button>
            </form></div>
        </div>

    </div>

</div>
      
    </div>
  )
}
