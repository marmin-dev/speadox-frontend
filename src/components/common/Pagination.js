import { useState } from "react";
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

  const next = () => {
    let maxPage = pageNumb[pageNumb.length - 1];
    let pageList = [];
    for (let i = maxPage + 1; i <= maxPage + 5; i++) {
      pageList.push(i);
    }
    setPageNumb(pageList);
  };
  const previous = () => {
    let minPage = pageNumb[0];
    let pageList = [];
    for (let i = minPage - 5; i <= minPage + 4; i++) {
      pageList.push(i);
    }
    setPageNumb(pageList);
  };

  return (
    <PageUl>
      {pageNumb[0] != 1 && (
        <PageLi>
          <PageSetterBtn onClick={previous()}>이전</PageSetterBtn>
        </PageLi>
      )}
      <PageLi>
        <a href="#">1</a>
      </PageLi>
      <PageLi>
        <a href="#">2</a>
      </PageLi>
      <PageLi>
        <a href="#">3</a>
      </PageLi>
      <PageLi>
        <a href="#">4</a>
      </PageLi>
      <PageLi>
        <a href="#">5</a>
      </PageLi>
      {pageNumb[pageNumb.length - 1] != page && (
        <PageLi>
          <PageSetterBtn>다음</PageSetterBtn>
        </PageLi>
      )}
    </PageUl>
  );
};

export default Pagenation;
