import { styled } from "styled-components";

const imgUrl = process.env.REACT_APP_IMAGE_URL;

const BoxImg = styled.img`
  height: 100px;
`;
const A = styled.link``;

const Pname = styled.h4`
  color: #000;
  margin: 0px;
`;

const Pspan = styled.p`
  color: #000;
  margin: 0px;
`;

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResultSpan = styled.span`
  margin-left: 10px;
  color: #464646;
`;

const ItemList = ({ items }) => {
  // const items = TestListData;
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div>
        <ResultSpan>{items.length}개의 검색 결과가 있습니다</ResultSpan>
      </div>
      {items.map((i, index) => (
        <div className="box" style={{ marginBottom: 0 }} key={i.pname}>
          <a href={`/product/detail/${i.id}`}>
            <RowBlock>
              <div style={{ marginRight: 5 }}>
                <BoxImg src={`${imgUrl}/${i.pbrand}/${i.imageName}`} />
              </div>
              <div>
                <Pname>{i.pname}</Pname>
                <Pspan>{i.pbrand}</Pspan>
                <Pspan>{i.category}</Pspan>
                <span style={{ color: "#848484" }}>{i.subDescription}</span>
              </div>
            </RowBlock>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
