import { BsFilterRight } from "react-icons/bs";
import "./index.css";

const ProductsHeader = (props) => {
  const { sortOptions, activeOptionId, updateActiveOptionId } = props;
  const changeActiveOptionId = (event) => {
    updateActiveOptionId(event.target.value);
  };
  return (
    <div className="products-header">
      <h1 className="products-heading">All Products</h1>
      <div className="products-filter-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-text">Sort by</p>
        <select
          className="filter-select-element"
          value={activeOptionId}
          onChange={changeActiveOptionId}
        >
          {sortOptions.map((item) => (
            <option
              value={item.optionId}
              key={item.optionId}
              className="option-style"
            >
              {item.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
