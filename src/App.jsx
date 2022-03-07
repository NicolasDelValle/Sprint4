import "./App.css";
import PageNavBar from "./components/bigComponents/navBar";
import PageHeader from "./components/bigComponents/header";
import PageNavBarPhone from "./components/bigComponents/navBarPhone";
import Api from "./api/api";
function App() {
  const handleLog = () => {
    console.log(Api.getTopRatedMovies());
  };
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <PageNavBar />

      <button onClick={handleLog}>PULSAR</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, possimus
        commodi quisquam itaque non culpa delectus animi natus, consequatur cum
        impedit officiis vel expedita optio facilis assumenda totam voluptatum
        dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, possimus
        commodi quisquam itaque non culpa delectus animi natus, consequatur cum
        impedit officiis vel expedita optio facilis assumenda totam voluptatum
        dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, possimus
        commodi quisquam itaque non culpa delectus animi natus, consequatur cum
        impedit officiis vel expedita optio facilis assumenda totam voluptatum
        dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, possimus
        commodi quisquam itaque non culpa delectus animi natus, consequatur cum
        impedit officiis vel expedita optio facilis assumenda totam voluptatum
        dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, possimus
        commodi quisquam itaque non culpa delectus animi natus, consequatur cum
        impedit officiis vel expedita optio facilis assumenda totam voluptatum
        dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, possimus
        commodi quisquam itaque non culpa delectus animi natus, consequatur cum
        impedit officiis vel expedita optio facilis assumenda totam voluptatum
        dignissimos!
      </p>
      <PageNavBarPhone />
    </div>
  );
}

export default App;
