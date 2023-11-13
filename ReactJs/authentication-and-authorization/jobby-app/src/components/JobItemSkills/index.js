import Header from '../Header'
import './index.css'

const Cart = () =>(
    <div className="cart-container">
      <Header />
      <div className="cart-body">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-image"
        />
      </div>
    </div>
  )
export default Cart
