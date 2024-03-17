import { styled } from "styled-components";
import { TestListData } from "../testData/TestData";

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

const ItemList = () => {
  const items = TestListData;
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div>
        <h2 style={{ color: "black" }}>음향 기기 목록</h2>
      </div>
      {items.map((i, index) => (
        <div className="box" style={{ marginBottom: 0 }}>
          <a href="#">
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
