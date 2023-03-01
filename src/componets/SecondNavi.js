

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage';
export default function SecondNavi () {
  const [isLogin, setLogin] = useState({
    token: ""
  });
  const refreshpage = useNavigate()
  const [Login, setHere] = useState(true);
  const [Register, setRegister] = useState(true);
  const OnLogout = () => {
    secureLocalStorage.removeItem('authlogin');
    setHere(true)
    setRegister(true)
    setLogin(
      {
        token:""
      }
    )
    refreshpage('/Login')
  }
  useEffect(() => {
    isLogin.token = secureLocalStorage.getItem('authlogin');
    if (isLogin.token) {
      setHere(false)
      setRegister(false)
    }
  }, [])
  return (
    <nav className=''
    style={{
        backgroundcolor: "#6c757d",
        minHeight:"0px"
    


    }}>

        <header>
        
          <h3 className='fw-bold'>Mango</h3>
        </header>

        <ul>
          <Link to={'/'} className='text-decoration-none'> <li>Home</li></Link>
      
          <Link to={'/add'}   className='text-decoration-none'><li>Create</li></Link> 
          {
            isLogin.token && <button type='submit' className='rounded fw-bold border-0 '  onClick={OnLogout}>Logout</button>
          }
          {
            Login && <Link to={'/login'} className='text-decoration-none '><li>Login</li></Link>
          }
          {
            Register &&  <Link to={'/register '} className='text-decoration-none'><li>Register</li></Link>
          }
        </ul>

      </nav>
  )
}
