import Calculator from "../components/common/Calculator";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Spacer from "../components/common/Spacer";

const CalulatorPage = () => {
  return (
    <div>
      <Header />
      <Spacer />
      <div style={{ backgroundColor: "#fff" }}>
        <h2 style={{ color: "black" }}>계산기</h2>
        {/* 계산기 컴포넌트 추가 */}
        <Calculator />
      </div>
      <Footer />
    </div>
  );
};

export default CalulatorPage;
