import data from "../../db.json";

export const FilterByColor = () => {
  return (
    <div className="FilterByColor">
      <h3>Products color</h3>

      <div className="filteredProduct">
        {data.products.map((item) => (
          <p key={item.id} className="filterItem" style={{ color: item.color }}>
            {item.color}
          </p>
        ))}
      </div>
    </div>
  );
};
