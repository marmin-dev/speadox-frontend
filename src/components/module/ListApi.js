import axios from "axios";

export const getListDataByCategory = async (category, page) => {
  // 카테고리에 따라 리스트 데이터를 불러오는 함수
  // speaker,subwoofer, all 등
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/api/v1/product/list/${category}/${page}`;
  console.log(url);
  const response = await axios.get(url);
  if (response.status >= 200 && response.status < 300) {
    console.log(response);
    return response.data;
  } else {
    alert("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getSearchListDataBy = async (request, page) => {
  // 카테고리에 따라 검색 하여 리스트를 불러오는 함수
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/api/v1/product/search/${page}`;
  console.log(url);
  const response = await axios.post(url, request);
  if (response.status >= 200 && response.status < 300) {
    console.log(response);
    return response.data;
  } else {
    alert("데이터를 불러오는데 실패하였습니다.");
  }
};
