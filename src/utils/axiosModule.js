import axios from "axios";

export const getRequest = async (url) => {
  // get 요청 보내는 메서드
  try {
    let response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(`${Date.now} -- axios get error`);
  }
};

export const postRequest = async (data, url) => {
  // post 요청 보내는 메서드
  try {
    let response = await axios.post(url, data);
    return response.data;
  } catch (e) {
    console.error(`${Date.now} -- axios post error`);
  }
};
