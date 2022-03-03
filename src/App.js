import "./App.css";
import ColContainer from "./components/colContainer";
import FrutaItem from "./components/item";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <ColContainer title="Productos disponibles"></ColContainer>
        <ColContainer title="Carrito de compra"></ColContainer>
      </div>
    </div>
  );
}

export default App;
