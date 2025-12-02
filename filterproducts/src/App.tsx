import "./App.css";
import { FilterByAvailable } from "./components/FilterByAvilable/FilterByAvilable";
import { FilterByColor } from "./components/FilterByColor/FilterByColor";
import { FilterByDescription } from "./components/FilterByDescription/FilterByDescription";
import { FilterByName } from "./components/FilterByName/FilterByName";
import { FIlterByPrice } from "./components/FilterByPrice/FIlterByPrice";

function App() {
  return (
    <div className="App">
      <h1>Filter Products</h1>

      {/* Filter By Name */}
      <div className="section">
        <h2>Filter By Name</h2>
        <FilterByName />
      </div>

      {/* Filter By Price */}

      <div className="section">
        <h2>Filter By Price</h2>
        <FIlterByPrice />
      </div>

      {/* Filter By Color*/}

      <div className="section">
        <h2>Filter By Color</h2>
        <FilterByColor />
      </div>

      {/* Filter By Available */}

      <div className="section">
        <h2>Filter By Available</h2>
        <FilterByAvailable />
      </div>

      {/* Filter By Description */}

      <div className="section">
        <h2>Filter By Description</h2>
        <FilterByDescription />
      </div>
    </div>
  );
}

export default App;
