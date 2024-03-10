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
    </form>
  );
};

export default QueryForm;
