const QueryForm = () => {
  return (
    <form method="post" action="#">
      <div class="row uniform">
        <div class="9u 12u$(small)">
          <input
            type="text"
            name="query"
            id="query"
            placeholder="무엇을 검색할까요?"
          />
        </div>
        <div class="3u$ 12u$(small)">
          <input type="submit" value="Search" class="fit" />
        </div>
      </div>
      <div class="select-wrapper">
        <select name="category" id="category">
          <option value="name">스피커 이름으로 검색</option>
          <option value="spec">스피커 스펙으로 검색</option>
          <option value="brand">브랜드로 검색</option>
        </select>
      </div>
    </form>
  );
};

export default QueryForm;
