import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/list" element={<ProductList />} />
    </Routes>
  );
}

export default App;
