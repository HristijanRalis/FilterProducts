import { useState } from "react";
import data from "../../db.json";

export const FilterByColor = () => {
  const [filterColor, setFilterColor] = useState("");

  const filteredByColor = data.products.filter((item) =>
    item.color.toLowerCase().includes(filterColor.toLowerCase())
  );
  return (
    <div className="FilterByColor">
      <h3>Products color</h3>

      <form className="FilterPrice">
        <div className="filterPriceContent">
          <label>Filter by Name</label>
          <input
            type="text"
            value={filterColor}
            onChange={(e) => setFilterColor(e.target.value)}
          />
        </div>
      </form>

      <div className="filteredProduct">
        {filteredByColor.map((item) => (
          <p key={item.id} className="filterItem" style={{ color: item.color }}>
            {item.color}
          </p>
        ))}
      </div>
    </div>
  );
};
