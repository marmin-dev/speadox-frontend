// private String imageName;

import { useEffect, useState } from "react";
import { getRequest } from "../../utils/axiosModule";

// private String pName;

// private Long id;

// private String pBrand;
const imgUrl = process.env.REACT_APP_THUMBNAIL_URL;

const MainItems = () => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      let response = [];
      try {
        if (isActive == 1) {
          response = await getRequest(`${apiUrl}/api/v1/product/main/jbl`);
        } else if (isActive == 2) {
          response = await getRequest(
            `${apiUrl}/api/v1/product/main/crownaudio`
          );
        }

        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isActive]);

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
              <a
                data-tab="tab-1"
                className={`${isActive == 1 ? "active" : ""}`}
                onClick={() => setIsActive(1)}
              >
                JBL
              </a>
            </li>
            <li>
              <a
                data-tab="tab-1"
                className={`${isActive == 2 ? "active" : ""}`}
                onClick={() => setIsActive(2)}
              >
                CrownAudio
              </a>
            </li>
          </ul>

          <div className="tabs">
            <div className="tab tab-1 flex flex-3 active">
              {data.map((item, index) => (
                <div className="video col" key={index}>
                  <div className="image fitter">
                    <img
                      src={`${imgUrl}/${item.pbrand}/${item.imageName}`}
                      alt=""
                    />
                  </div>
                  <a href={`/product/detail/${item.id}`} className="link">
                    <span>{item.pname}</span>
                  </a>
                  <span>{item.pname}</span>
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
