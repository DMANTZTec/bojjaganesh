import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";
import ProductCard from "../ProductCard";
import Loader from "../Loader";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class PrimeDealsSection extends Component {
  state = { primeDeals: [], apiStatus: apiConstants.initial };

  componentDidMount() {
    this.getPrimeDeals();
  }

  getPrimeDeals = async () => {
    this.setState({ apiStatus: apiConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = "https://apis.ccbp.in/prime-deals";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.prime_deals.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({
        apiStatus: apiConstants.success,
        primeDeals: updatedData,
      });
    }
    if (response.status === 401) {
      this.setState({ apiStatus: apiConstants.failure });
    }
  };

  renderSuccessView = () => {
    const { primeDeals } = this.state;
    return (
      <div>
        <h1 className="prime-deals-head">Exclusive Prime Deals</h1>
        <ul className="prime-deals-container">
          {primeDeals.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
  };

  renderFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register Prime"
      className="register-prime-image"
    />
  );

  renderLoadingView = () => <Loader />;

  render() {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoadingView();
      case apiConstants.success:
        return this.renderSuccessView();
      case apiConstants.failure:
        return this.renderFailureView();
      default:
        return null;
    }
  }
}

export default PrimeDealsSection;
