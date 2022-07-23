import "./components/category/menu-demo.styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";

const Shop = () => {
  return <div>shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
