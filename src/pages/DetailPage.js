import { useParams } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Spacer from "../components/common/Spacer";
import { useEffect, useState } from "react";
import { getDetailData } from "../components/module/ListApi";

const DetailPage = () => {
  // 현재 페이지의 id 값을 가져옴
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  const getDetail = async (id) => {
    const response = await getDetailData(id);
    console.log(response);
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  return (
    <div id="main">
      <Header />
      <Spacer />
      <h1>hello it's detail</h1>

      <Footer />
    </div>
  );
};

export default DetailPage;
