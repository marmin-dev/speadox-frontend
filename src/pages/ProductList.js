import { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ItemList from "../components/common/ItemList";
import QueryForm from "../components/common/QueryForm";
import Spacer from "../components/common/Spacer";
import {
  getListDataByCategory,
  getSearchListDataBy,
} from "../components/module/ListApi";
import Pagenation from "../components/common/Pagination";

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  let urlParams = new URLSearchParams(window.location.search);

  const getItems = async (category, page) => {
    let response = await getListDataByCategory(category, page);
    setItems(response.dtos);
    setMaxPage(response.maxPage);
  };

  const getSearchItems = async (category, keyword, page) => {
    let requestData = {
      category: category,
      keyword: keyword,
    };
    let response = await getSearchListDataBy(requestData, page);
    setItems(response.dtos);
    setMaxPage(response.maxPage);
  };

  useEffect(() => {
    if (urlParams.get("page")) {
      setPage(urlParams.get("page"));
    }
  }, []);

  useEffect(() => {
    let category = "all";
    let search = urlParams.get("keyword");
    let searchCat = urlParams.get("searchCat");
    if (search == null) {
      if (urlParams.get("category") != null) {
        category = urlParams.get("category");
      }
      if (urlParams.get("page") != null) {
        setPage(urlParams.get("page"));
      }
      getItems(category, page);
    } else {
      getSearchItems(searchCat, search, page);
    }
  }, [page]);

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
