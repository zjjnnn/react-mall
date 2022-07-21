// import { useState } from "react";

import "./menu-demo.styles.css";

const SubMenuItemss = ({ subItem }) => {
  return (
    <span>
      {" "}
      <a href="/#">{subItem.categoryName}</a>
    </span>
  );
};
export default SubMenuItemss;

// onClick={() => setDropdown((prev) => !prev)}
// {subItem.secondLevelCategoryVOS ? (
//   <>
//     <butaton
//       type="button"
//       aria-haspopup="menu"
//       aria-expanded={dropdown ? "true" : "false"}
//       onMouseOver={() => setDropdown(true)}
//     >
//       {subItem.categoryName}{" "}
//       {depthLevel > 0 ? (
//         <span>&raquo;</span>
//       ) : (
//         <span className="arrow"></span>
//       )}
//     </butaton>
//     <a href="/#">{subItem.categoryName}</a>
//   </>
// ) : (
//   <a href="/#" >{subItem.categoryName}</a>
// )}
