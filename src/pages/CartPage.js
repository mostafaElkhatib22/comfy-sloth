import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'
import { Zoom } from 'react-reveal'

const CartPage = () => {
  const {cart}=useCartContext()
  if (cart.length<1) {
    return (
      <Wrapper className='page-100'>
        <Zoom>
          <div className="empty">
            <h2>Your Cart is empty</h2>
            <Link to='/products' className='btn'> fill it</Link>
          </div>
        </Zoom>
      </Wrapper>
    );
  }
  return <Zoom>
    <main>
      <PageHero title = 'cart'/>
      <Wrapper className='page'>
        <CartContent/>
      </Wrapper>
    </main>
  </Zoom>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
