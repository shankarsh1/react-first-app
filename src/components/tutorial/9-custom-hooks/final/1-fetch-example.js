import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)
  //console.log(products, loading)
  if (loading) {
    return (
      <div>
        <h2>Loading....{/* {loading ? 'loading...' : document.write(products)} */}</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>{products.map(product => {
        return <div key={product.id}>{product.fields.name}</div>;
      })}</h2>
    </div>
  )
}

export default Example
