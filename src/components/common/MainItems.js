// private String imageName;

import { useEffect, useState } from "react";
import { getRequest } from "../../utils/axiosModule";

// private String pName;

// private Long id;

// private String pBrand;

const MainItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getRequest(
          "http://localhost:8080/api/v1/product/main/jbl"
        );
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="wrapper style2">
      <div className="inner">
        <header>
          <h2>다양한 회사의 제품을 살펴보세요</h2>
          <p>SPEADOX 는 다양한 오디오 회사의 제품들의 정보를 제공합니다</p>
        </header>

        <div className="flex flex-tabs">
          <ul className="tab-list">
            <li>
              <a href="#" data-tab="tab-1" className="active">
                JBL
              </a>
            </li>
          </ul>

          <div className="tabs">
            <div className="tab tab-1 flex flex-3 active">
              {data.map((item, index) => (
                <div className="video col" key={index}>
                  <div className="image fit">
                    <img src={item.imageName} alt="" />
                  </div>
                  <a href={`/list/${item.pName}`} className="link">
                    <span>{item.pName}</span>
                  </a>
                  <span>{item.pName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainItems;
