import { useEffect } from "react";
import { styled } from "styled-components";

const imgUrl = process.env.REACT_APP_THUMBNAIL_URL;

const BoxImg = styled.img`
  width: 100%;
  height: 100%;
`;

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
  align-items: center;
  width: 100%;
`;

const ResultSpan = styled.span`
  margin-left: 10px;
  color: #464646;
`;

const ImageDiv = styled.div`
  height: 100%;
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;

const Box = styled.div`
  margin-bottom: 0px;
  height: fit-content;
  display: flex; /* flexbox를 사용하여 내부 요소를 가로 정렬 */
`;

const MainSection = styled.div`
  background-color: #fff;
  width: 100%;
`;

const ItemList = ({ items, resultSize }) => {
  useEffect(() => {
    if (typeof items != "list") {
      items = [];
    }
  }, [items]);

  return (
    <MainSection>
      <div>
        <ResultSpan>{resultSize}개의 검색 결과가 있습니다</ResultSpan>
      </div>
      {Array.isArray(items)
        ? items.map((i, index) => (
            <Box className="box" style={{ marginBottom: 0 }} key={i.pname}>
              <RowBlock>
                <ImageDiv>
                  <a href={`/product/detail/${i.id}`}>
                    <BoxImg src={`${imgUrl}/${i.pbrand}/${i.imageName}`} />
                  </a>
                </ImageDiv>
                <div>
                  <a href={`/product/detail/${i.id}`}>
                    <Pname>{i.pname}</Pname>
                    <Pspan>{i.pbrand}</Pspan>
                    <Pspan>{i.category}</Pspan>
                    <span style={{ color: "#848484" }}>{i.subDescription}</span>
                  </a>
                </div>
              </RowBlock>
            </Box>
          ))
        : null}
    </MainSection>
  );
};

export default ItemList;
