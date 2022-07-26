// import { useState, useEffect } from "react";
// import axios from "axios";
import LayoutCategory from "./LayoutCategory";

// const subCate = axios.create({
//     baseURL: "http://localhost:8080/category/item",
//   });

const CategoryItemContainer = () => {
  //const [categoryItemList, setCategoryItemList] = useState([]);

  // useEffect(() => {
  //     subCate.get("").then((response) => {
  //     setCategoryItemList(response.data.data);
  //   });
  // }, []);

  return (
    <div className="g-inner">
      <div className="g-main">
        <LayoutCategory />
      </div>
    </div>
  );
};

export default CategoryItemContainer;
