import { useEffect, useState } from "react";
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
  width: 100%;
  justify-content: center;
  margin: 5px;
`;

const Pagenation = (page) => {
  const [pageNumb, setPageNumb] = useState([]);
  let urlParams = new URLSearchParams(window.location.search);
  const [pageParam, setPageParam] = useState(urlParams.get("page"));
  const [currentPage, setCurrentPage] = useState(urlParams.get("page"));

  useEffect(() => {
    if (currentPage == null) {
      setCurrentPage(1);
    }
    if (pageParam == null) {
      if (page < 5) {
        let pageList = [];
        for (let p = 1; p <= page; p++) {
          pageList.push(p);
        }
        setPageNumb(pageList);
      } else {
        setPageNumb([1, 2, 3, 4, 5]);
      }
    } else {
      let pageList = [];
      let pageSeq = Math.ceil(currentPage / 5);
      for (let i = (pageSeq - 1) * 5 + 1; i < pageSeq * 5 + 1; i++) {
        pageList.push(i);
      }
      setPageNumb(pageList);
    }
  }, []);

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
    console.log(pageList);
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
        <PageLi>
          <a href={`?page=${item}`} key={`page${item}`}>
            {item}
          </a>
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
