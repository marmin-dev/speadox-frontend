import { useEffect } from "react";
import { styled } from "styled-components";

const MainSection = styled.div``;
const ImageSection = styled.div``;

const DataSection = styled.div``;

const DetailBody = ({ data }) => {
  const imgUrl = process.env.REACT_APP_IMAGE_URL;
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <MainSection>
        <ImageSection>
          <img src={`${imgUrl}/${data.pbrand}/${data.imageName}`} />
        </ImageSection>
        <DataSection></DataSection>
      </MainSection>
    </div>
  );
};

export default DetailBody;
