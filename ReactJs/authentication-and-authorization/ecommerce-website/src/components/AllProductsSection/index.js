import { Component } from "react";
import Cookies from "js-cookie";
import Loader from "../Loader";

import ProductCard from "../ProductCard";
import "./index.css";
import ProductsHeader from "../ProductsHeader";

const sortOptions = [
  { optionId: "PRICE_HIGH", displayText: "Price (High-Low)" },
  { optionId: "PRICE_LOW", displayText: "Price (Low-High)" },
];

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoaded: false,
    activeOptionId: sortOptions[0].optionId,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({ isLoaded: true });
    const { activeOptionId } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    const url = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const updatedData = data.products.map((item) => ({
      id: item.id,
      brand: item.brand,
      imageUrl: item.image_url,
      price: item.price,
      rating: item.rating,
      title: item.title,
    }));
    this.setState({ productsList: updatedData, isLoaded: false });
  };

  updateActiveOptionId = (activeOptionId) => {
    this.setState({ activeOptionId }, this.getProducts);
  };

  renderProductsList = () => {
    const { productsList, isLoaded, activeOptionId } = this.state;
    return (
      <div>
        <ProductsHeader
          sortOptions={sortOptions}
          activeOptionId={activeOptionId}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <ul className="products-list">
          {isLoaded ? (
            <Loader />
          ) : (
            productsList.map((product) => (
              <ProductCard productData={product} key={product.id} />
            ))
          )}
        </ul>
      </div>
    );
  };

  render() {
    return <>{this.renderProductsList()}</>;
  }
}

export default AllProductsSection;
