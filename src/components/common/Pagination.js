import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const PageSetterBtn = styled.button`
  border: none;
  color: #000;
`;

const PageLi = styled.li`
  color: #000;
  text-decoration: none;
  list-style-type: none;
  a {
    margin: 5px;
  }
`;

const PageUl = styled.ul`
  display: flex;
  width: 99%;
  justify-content: center;
  margin: 5px;
`;

const Pagenation = (page) => {
  const [pageNumb, setPageNumb] = useState([]);
  let urlParams = new URLSearchParams(window.location.search);
  const [pageParam, setPageParam] = useState(urlParams.get("page"));
  const [currentPage, setCurrentPage] = useState(urlParams.get("page"));
  const [baseUrl, setBaseUrl] = useState("");
  const location = useLocation();

  // {data !== null ? <p>{data}</p> : null}

  useEffect(() => {
    const params = location.search;
    if (currentPage == null) {
      setCurrentPage(1);
    }
    if (pageParam == null) {
      if (page.page < 5) {
        let pageList = [];
        for (let p = 1; p <= page.page; p++) {
          pageList.push(p);
        }
        setPageNumb(pageList);
      } else {
        setPageNumb([1, 2, 3, 4, 5]);
      }
    } else {
      let pageList = [];
      let pageSeq = Math.ceil(currentPage / 5);
      if (page.page > pageSeq * 5 + 1) {
        for (let i = (pageSeq - 1) * 5 + 1; i < pageSeq * 5 + 1; i++) {
          pageList.push(i);
        }
      } else {
        for (let i = (pageSeq - 1) * 5 + 1; i <= page.page; i++) {
          pageList.push(i);
        }
      }
      setPageNumb(pageList);
    }
    let base = window.location.href.split("?")[0] + "?";
    if (params.includes("?")) {
      let paramList = params.split("&");
      for (let param of paramList) {
        if (!param.includes("page")) {
          param = param.replace("?", "");
          base = `${base}${param}&`;
        }
      }
    } else {
      base = `${base}`;
    }
    setBaseUrl(base);
  }, [page.page]);

  const next = () => {
    // 다음 버튼 클릭시
    let maxPage = pageNumb[pageNumb.length - 1];
    let nextMaxPage = maxPage + 5;
    let pageList = [];
    if (nextMaxPage > page.page) {
      nextMaxPage = page.page;
    }
    for (let i = maxPage + 1; i <= nextMaxPage; i++) {
      pageList.push(i);
    }
    setPageNumb(pageList);
  };

  const previous = () => {
    // 이전 버튼 클릭시
    let minPage = pageNumb[0];
    let pageList = [];
    for (let i = minPage - 5; i <= minPage - 1; i++) {
      pageList.push(i);
    }
    setPageNumb(pageList);
  };

  return (
    <PageUl>
      {pageNumb[0] != 1 && (
        <PageLi>
          <PageSetterBtn onClick={previous}>이전</PageSetterBtn>
        </PageLi>
      )}
      {pageNumb.map((item) => (
        <PageLi key={`page${item}`}>
          <a href={`${baseUrl}page=${item}`}>{item}</a>
        </PageLi>
      ))}
      {pageNumb[pageNumb.length - 1] != page.page && (
        <PageLi>
          <PageSetterBtn onClick={next}>다음</PageSetterBtn>
        </PageLi>
      )}
    </PageUl>
  );
};

export default Pagenation;
