import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/list" element={<ProductList />} />
      <Route path="/product/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
