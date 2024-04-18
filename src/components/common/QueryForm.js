import { useState } from "react";
import { styled } from "styled-components";

const StyledForm = styled.form`
  width: 100%;
`;

const QueryForm = () => {
  const [data, setData] = useState([]);

  const change = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // const onSearch = () => {
  //   const currentUrl = window.location.href.split["?"][0];
  //   let url = `${currentUrl}?`;
  //   for (let key in data.keys) {
  //     url.concat(`${key}=${data[key]}&`);
  //   }
  //   window.location.href = url.substring(0, url.length - 1);
  // };

  return (
    <StyledForm>
      <div className="row uniform">
        <div className="9u 12u$(small)">
          <input
            type="text"
            name="keyword"
            id="query"
            placeholder="무엇을 검색할까요?"
          />
        </div>
        <div className="3u$ 12u$(small)">
          <input
            type="submit"
            value="Search"
            className="fit"
            // onClick={onSearch}
          />
        </div>
      </div>
      <div className="select-wrapper">
        <select name="searchCat" id="category">
          <option value="name">스피커 이름으로 검색</option>
          <option value="spec">스피커 스펙으로 검색</option>
          <option value="brand">브랜드로 검색</option>
        </select>
      </div>
    </StyledForm>
  );
};

export default QueryForm;
