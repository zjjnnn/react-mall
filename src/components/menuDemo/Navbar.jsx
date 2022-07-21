// import { menuItems } from "./menuItems";
import axios from "axios";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
// import MenuItemss from "./MenuItemss";
import "./menu-demo.styles.css";

const cateUrl = axios.create({
  baseURL: "http://localhost:8080/categories",
});
const Navbar = () => {
  const [cateList, setCateList] = useState([]);

  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    async function getCateList() {
      const response = await cateUrl.get("");
      setCateList(response.data.data);
      console.log("response", response);
    }
    getCateList();
  }, []);
  return (
    <nav>
      <div className="menus">
        <div className="nav-item" onMouseLeave={() => setDropdown(false)}>
          <button
            className="nav-button"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onMouseOver={() => setDropdown(true)}
          >
            カテゴリ
            <span className="arrow"></span>
          </button>
          <Dropdown
            items={cateList}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// {cateList.map((menu, index) => {
//     const depthLevel = 0;
//     return (
//       <MenuItemss items={menu} key={index} depthLevel={depthLevel} />
//     );
//   })}

// <ul>
// <li className="nav-item menu-items">
//   <button>ログイン</button>
// </li>
// <li className="nav-item menu-items">
//   <button>新規会員登録</button>
// </li>
// </ul>
