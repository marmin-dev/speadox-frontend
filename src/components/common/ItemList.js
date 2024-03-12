import { styled } from "styled-components";

const imgUrl = process.env.REACT_APP_IMAGE_URL;

const BoxImg = styled.img`
  height: 100px;
`;
const A = styled.link``;

const ItemList = () => {
  const items = [
    {
      imageName: "vtx-b28.jpg",
      id: 202,
      pname: "vtx-b28",
      pbrand: "jbl",
    },
    {
      imageName: "vla-c2100.jpg",
      id: 183,
      pname: "vla-c2100",
      pbrand: "jbl",
    },
    {
      imageName: "cbt-70j-1-plus-70je-1-system.jpg",
      id: 116,
      pname: "cbt-70j-1-plus-70je-1-system",
      pbrand: "jbl",
    },
    {
      imageName: "css-bb8x6.jpg",
      id: 55,
      pname: "css-bb8x6",
      pbrand: "jbl",
    },
    {
      imageName: "control-47lp.jpg",
      id: 83,
      pname: "control-47lp",
      pbrand: "jbl",
    },
    {
      imageName: "control-312cs.jpg",
      id: 95,
      pname: "control-312cs",
      pbrand: "jbl",
    },
    {
      imageName: "control-25-1.jpg",
      id: 294,
      pname: "control-25-1",
      pbrand: "jbl",
    },
    {
      imageName: "scs-12.jpg",
      id: 48,
      pname: "scs-12",
      pbrand: "jbl",
    },
    {
      imageName: "vrx918sp.jpg",
      id: 177,
      pname: "vrx918sp",
      pbrand: "jbl",
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div>
        <h2 style={{ color: "black" }}>음향 기기 목록</h2>
      </div>
      {items.map((i, index) => (
        <div className="box" style={{ zIndex: 1 }}>
          <a href="#">
            <BoxImg src={`${imgUrl}/${i.pbrand}/${i.imageName}`} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
