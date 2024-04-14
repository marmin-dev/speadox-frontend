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
  let urlParams = new URLSearchParams(window.location.search);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(urlParams.get("page"));
  const [resultSize, setResultSize] = useState(0);
  const [maxPage, setMaxPage] = useState();

  const getItems = async (category, page) => {
    // 아이템 리스트 불러오는 함수
    let response = await getListDataByCategory(category, page);
    setItems(response.dtos);
    setMaxPage(response.maxPage);
    setResultSize(response.resultSize);
    console.log(response);
  };

  const getSearchItems = async (category, keyword, p) => {
    // 검색 파라미터로 검색
    let requestData = {
      category: category,
      keyword: keyword,
    };
    let response = await getSearchListDataBy(requestData, p);
    setItems(response.dtos);
    setMaxPage(response.maxPage);
    setResultSize(response.resultSize);
    console.log(response);
  };

  useEffect(() => {
    let search = urlParams.get("keyword");
    if (urlParams.get("page") && search != null) {
      setPage(urlParams.get("page"));
    }
  }, []);

  useEffect(() => {
    // 렌더링
    let category = "all";
    let search = urlParams.get("keyword");
    let searchCat = urlParams.get("searchCat");
    if (search == null) {
      if (urlParams.get("category") != null) {
        category = urlParams.get("category");
      }
      if (urlParams.get("page") == null) {
        // 렌더링 된 이후 재렌더링 버그
        getItems(category, 1);
        // pag = urlParams.get("page");
      } else {
        getItems(category, page);
      }
    } else {
      if (urlParams.get("page") == null) {
        getSearchItems(searchCat, search, 1);
      } else {
        getSearchItems(searchCat, search, page);
      }
    }
  }, [page]);

  return (
    <div id="main">
      <Header />
      <Spacer />
      <QueryForm />
      <ItemList items={items} resultSize={resultSize} />
      <Pagenation page={maxPage} />
      <Footer />
    </div>
  );
};

export default ProductList;
