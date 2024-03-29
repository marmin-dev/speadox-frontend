export const parseSpec = (str) => {
  // 스펙 파싱 하여 객체 리스트로 리턴

  let rows = str.split("{!!}");

  let returnList = [];
  for (let row of rows) {
    let rowData = {};
    let rowLi = row.split("{//}");
    rowData["col1"] = rowLi[0];
    rowData["col2"] = rowLi[1];
    returnList.push(rowData);
  }
  return returnList;
};
