import data from "../../db.json";
export const FilterByDescription = () => {
  return (
    <div className="FilterByDescription">
      <h3>Product Description</h3>

      <div className="filteredProduct">
        {data.products.map((item) => (
          <p className="filterItem" key={item.id}>
            {item.description}
          </p>
        ))}
      </div>
    </div>
  );
};
