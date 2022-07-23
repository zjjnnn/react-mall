import SubDropdown from "./SubDropdown";
import { useState } from "react";
import "./menu-demo.styles.css";

const MenuItemss = ({ subItem, depthLevel }) => {
  const [subDropdown, setSubDropdown] = useState(false);
  return (
    <li className="menu-items" onMouseLeave={() => setSubDropdown(false)}>
      <button
        className="g-gcategory_name"
        type="button"
        aria-haspopup="menu"
        aria-expanded={subDropdown ? "true" : "false"}
        onMouseOver={() => setSubDropdown(true)}
      >
        {subItem.categoryName}{" "}
      </button>
      <SubDropdown
        categoryName={subItem.categoryName}
        submenus={subItem.secondLevelCategoryVOS}
        dropdown={subDropdown}
        setDropdown={setSubDropdown}
        depthLevel={depthLevel}
      />
    </li>
  );
};
export default MenuItemss;

// onClick={() => setDropdown((prev) => !prev)}
// {depthLevel > 0 ? (
//     <span>&raquo;</span>
//   ) : (
//     <span className="arrow"></span>
//   )}
