import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { parseSpec } from "../../utils/stringModule";

const MainSection = styled.div`
  width: 100%;
  margin: 10px;
  border-bottom: 1px solid black;
  .spec-h2 {
    color: #646464;
    margin: 0px;
    margin-left: 10px;
  }
  table {
    width: 100%;
    color: #646461;
    tbody {
      tr {
        td {
          margin: 0px;
          padding: 4px;
          border: 1px solid #646410;
        }
      }
    }
  }
`;
const ImageSection = styled.div`
  width: 30%;
`;
const TextSection = styled.div`
  width: 40%;
  h2 {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    color: #646464;
    margin: 0px;
    margin-top: 10px;
  }
  p {
    width: 100%;
    margin: 0px;
    padding-left: 5px;
    color: #646464;
    border-bottom: 1px solid black;
  }
  span {
    width: 100%;
    padding-left: 5px;
    display: block;
    color: #646464;
    border-bottom: 1px solid black;
    margin: 0px;
  }
  a {
    width: 100%;
    display: block;
    padding-left: 5px;
    color: #646464;
    border-bottom: 1px solid black;
  }
`;

const DataSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const DetailBody = ({ data }) => {
  const imgUrl = process.env.REACT_APP_IMAGE_URL;
  const pdfUrl = process.env.REACT_APP_PDF_URL;
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log(data);
    setTableData(parseSpec(data.spec));
  }, [data]);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <MainSection>
        <DataSection>
          <ImageSection>
            <img
              className="image fit"
              src={`${imgUrl}/${data.pbrand}/${data.imageName}`}
            />
          </ImageSection>
          <TextSection>
            <h2>{data.pname}</h2>
            <p>{data.pbrand}</p>
            <p>{data.category}</p>
            <p>{data.subDescription}</p>
            <a href={data.url}>홈페이지 바로가기</a>
            <a href={`${pdfUrl}/${data.pbrand}/${data.filename}`}>
              매뉴얼 확인
            </a>
          </TextSection>
        </DataSection>
      </MainSection>

      <MainSection>
        <h3 className="spec-h2">Specification</h3>
        <table>
          <tbody>
            {tableData.map((t) => (
              <tr key={t["col1"]}>
                <td>{t["col1"]}</td>
                <td>{t["col2"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MainSection>
    </div>
  );
};

export default DetailBody;
