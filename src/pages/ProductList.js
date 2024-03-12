import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ItemList from "../components/common/ItemList";
import QueryForm from "../components/common/QueryForm";
import Spacer from "../components/common/Spacer";

const ProductList = () => {
  return (
    <div id="main">
      <Header />
      <Spacer />
      <QueryForm />
      <ItemList />
      <Footer />
    </div>
  );
};

export default ProductList;
