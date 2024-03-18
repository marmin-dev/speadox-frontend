import axios from "axios";

export const getListDataByCategory = async (category, page) => {
  // 카테고리에 따라 리스트 데이터를 불러오는 함수
  // speaker,subwoofer, all 등
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/api/v1/product/list/${category}/${page}`;
  const response = await axios.get(url);
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    alert("데이터를 불러오는데 실패하였습니다.");
  }
};
