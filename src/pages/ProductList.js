import { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ItemList from "../components/common/ItemList";
import QueryForm from "../components/common/QueryForm";
import Spacer from "../components/common/Spacer";
import { getListDataByCategory } from "../components/module/ListApi";
import Pagenation from "../components/common/Pagination";

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [maxPage, setMaxPage] = useState(5);
  let urlParams = new URLSearchParams(window.location.search);

  const getItems = async (category, page) => {
    let response = await getListDataByCategory(category, page);
    setItems(response.dtos);
    setMaxPage(response.maxPage);
  };
  useEffect(() => {
    let page = 1;
    let category = "all";
    if (urlParams.get("category") != null) {
      category = urlParams.get("category");
    }
    if (urlParams.get("page") != null) {
      page = urlParams.get("page");
    }
    getItems(category, page);
  }, []);
  return (
    <div id="main">
      <Header />
      <Spacer />
      <QueryForm />
      <ItemList items={items} />
      <Pagenation page={maxPage} />
      <Footer />
    </div>
  );
};

export default ProductList;
