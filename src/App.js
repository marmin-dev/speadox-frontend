import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import DetailPage from "./pages/DetailPage";
import CalulatorPage from "./pages/CalculatorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/list" element={<ProductList />} />
      <Route path="/product/detail/:id" element={<DetailPage />} />
      <Route path="/calculator" element={<CalulatorPage />} />
    </Routes>
  );
}

export default App;
