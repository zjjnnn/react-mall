import "./components/category/menu-demo.styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import CateItemPage from "./routes/cateItemPage";

const Shop = () => {
  return <div>shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cateItem/:id" element={<CateItemPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
