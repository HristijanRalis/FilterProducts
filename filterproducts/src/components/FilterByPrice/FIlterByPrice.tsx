import { useState } from "react";
import data from "../../db.json";

export const FIlterByPrice = () => {
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProduct = data.products.filter((item) => {
    if (!maxPrice) return true;

    return item.price <= parseFloat(maxPrice);
  });
  return (
    <div className="FIlterByPrice">
      <h3>Products</h3>

      <form className="FilterPrice">
        <div className="filterPriceContent">
          <label>Filter by Price</label>
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </form>

      <div className="filteredProduct">
        {filteredProduct.map((item) => (
          <p key={item.id} className="filterItem">
            {item.name} - ${item.price}
          </p>
        ))}
      </div>
    </div>
  );
};
