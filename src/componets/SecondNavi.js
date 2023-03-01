import React from 'react'
import { Link } from 'react-router-dom'
export default function SecondNavi () {
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
          <Link  to={'/login'} className='text-decoration-none'><li>Login</li></Link>
          <Link  to ={'/register'} className='text-decoration-none'><li>Register</li></Link> 
        </ul>

      </nav>
  )
}
