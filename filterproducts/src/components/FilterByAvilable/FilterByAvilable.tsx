import data from "../../db.json";

export const FilterByAvailable = () => {
  return (
    <div className="FilterByAvailable">
      <h3>Product available</h3>

      <div className="filteredProduct">
        {data.products.map((item) => (
          <p
            key={item.id}
            className={`filterItem ${item.available ? "true" : "false"}`}
          >
            {item.available.toString()}
          </p>
        ))}
      </div>
    </div>
  );
};
