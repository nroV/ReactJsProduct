import React, { useEffect } from 'react'


export default function
  (props) {
  // useEffect(()=>{
  //       Fetchcategory().then(res=>res.json())
  //       .then(res=>console.log("category",res))
  // },[])
  const category = props.cate;
  return (

    <div className='my-5'>
      {
        console.log(category)
      }
      <div className='tab container d-flex justify-content-center '>
        {category && category.map(cate => (


         <div >
              {cate.name} 
              
              
              </div>



        ))}

      </div>
    </div>
  )
}
