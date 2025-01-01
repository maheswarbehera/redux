import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getProducts, getProductById } from './redux/features/productSlice' 
import { addToCart } from './redux/features/cartSlice'
 
 
const Product = () => {
    const {data: products} = useSelector(state => state.products) 
    const cart = useSelector(state => state.cart)
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(getProducts())
    }, [dispatch])
 
    const viewProduct = (id) => {
        dispatch(getProductById(id))
        setIsProduct(false)
    }

const [isProduct, setIsProduct] = useState(true);

 const add = (product, qty) => {
    const isProductExists = cart.find(item => item.id === product.id)
  
    if(!isProductExists){

        dispatch(addToCart({product, qty}))    
    }else{
        const newQty = isProductExists.qty + qty;
        dispatch(addToCart({ product, qty: newQty }));
        
    }
    
 }
 
  return (
    <div>product
        <br></br>
{/* {JSON.stringify(products)} */}
        {isProduct &&
            <>{products.map((product) => {
                return <div key={product.id}> 
                    <h6 onClick={(e) => viewProduct(product.id)}>{product.title}</h6> 
                    <button onClick={() => add(product, qty)}>ADD</button>
                </div>
            })}</> 
        }
        {!isProduct && products.title}

       
     
    </div>

  )
}

export default Product