import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from '../Loader'

import ProductCard from '../ProductCard'
import './index.css'

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoaded: true,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/products'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.products.map(item => ({
      id: item.id,
      brand: item.brand,
      imageUrl: item.image_url,
      price: item.price,
      rating: item.rating,
      title: item.title,
    }))
    this.setState({productsList: updatedData, isLoaded: false})
  }

  renderProductsList = () => {
    const {productsList, isLoaded} = this.state
    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {isLoaded ? (
            <Loader/>
          ) : (
            productsList.map(product => (
              <ProductCard productData={product} key={product.id} />
            ))
          )}
        </ul>
      </div>
    )
  }

  render() {
    return <>{this.renderProductsList()}</>
  }
}

export default AllProductsSection
