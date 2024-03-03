import { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import MainItems from "../components/common/MainItems";
import { getRequest } from "../utils/axiosModule";

const Main = () => {
  const [data, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getRequest(`${apiUrl}/api/v1/product/main/jbl`);

        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id="main">
      <Header />
      {/* <NavBar /> */}
      <Banner />
      <MainItems listData={data} />
      <Footer />
    </div>
  );
};
export default Main;
