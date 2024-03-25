import { useParams } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Spacer from "../components/common/Spacer";
import { useEffect, useState } from "react";
import { getDetailData } from "../components/module/ListApi";
import DetailBody from "../components/common/DetailBody";

const DetailPage = () => {
  // 현재 페이지의 id 값을 가져옴
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  const getDetail = async (id) => {
    const response = await getDetailData(id);
    console.log(response);
    setDetailData(detailData);
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  return (
    <div id="main">
      <Header />
      <Spacer />
      <DetailBody />

      <Footer />
    </div>
  );
};

export default DetailPage;
