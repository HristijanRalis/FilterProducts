import { useState } from "react";
import data from "../../db.json";

export const FilterByName = () => {
  const [filterName, setFilterName] = useState("");

  const filteredByName = data.products.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <div className="FilterByName">
      <h3>Products Name</h3>

      <form className="FilterPrice">
        <div className="filterPriceContent">
          <label>Filter by Name</label>
          <input
            type="text"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
        </div>
      </form>

      <div className="filteredProduct">
        {filteredByName.map((item) => (
          <p key={item.id} className="filterItem">
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};
