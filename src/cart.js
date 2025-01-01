import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartLength = useSelector(state => state.cart.length)
  return (
    <>
    <div>Cart</div>
    <p>{cartLength}</p>
    </>
  )
}

export default Cart