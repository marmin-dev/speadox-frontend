import { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import MainItems from "../components/common/MainItems";

const Main = () => {
  const [data, setData] = useState([]);

  return (
    <div id="main">
      <Header />
      <Banner />
      <MainItems />
      <Footer />
    </div>
  );
};
export default Main;
