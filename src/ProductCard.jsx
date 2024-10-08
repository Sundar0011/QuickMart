import React from 'react'
import './productCard.css'
const ProductCard = ({products}) => {
  return (
    <div className="card-container">
      {
        products.map(pro=>
         <div className='card'>
            <img src="" alt="" />
            <h2>{pro.name}</h2>
            <p>{pro.price}</p>
            <p>{pro.description}</p>
         </div>
        )
      }
    </div>
  )
}

export default ProductCard
