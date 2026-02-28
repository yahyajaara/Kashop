import React from 'react'
import useCart from '../../hooks/useCart';

export default function Cart() {

  const {data , isError, isLoading} = useCart();

  console.log("Cart data:", data);


  return (
    <div>Cart</div>
  )
}
