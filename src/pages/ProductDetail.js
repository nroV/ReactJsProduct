import React from 'react'
import CardDetail from '../componets/CardDetail'
import Navi from '../componets/navigationbar'
import TabBar from '../componets/TabBar'

export default function ProductDetail() {
  return (
    <>
        <div style={{
          marginTop:"100px"
        }}>
  
        <TabBar />
         <CardDetail />
      </div>
    </>

  )
}
