import AllProductsSection from "../AllProductsSection";
import PrimeDealsSection from "../PrimeDealsSection";

import Header from "../Header";

import "./index.css";

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <div className="prime-deals-component">
        <PrimeDealsSection />
      </div>
      <AllProductsSection />
    </div>
  </>
);

export default Products;
