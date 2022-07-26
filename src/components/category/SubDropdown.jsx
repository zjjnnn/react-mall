import "./menu-demo.styles.css";
import { Link } from "react-router-dom";
// import SubMenuItemss from "./SubMenuItemss";

const SubDropdown = ({
  submenus,
  depthLevel,
  categoryName,
  setDropdown,
  subDropdown,
}) => {
  depthLevel = depthLevel + 1;
  return (
    <ul className={`subdropdown ${subDropdown ? "show" : ""}`}>
      <div className="g-gcategory_children">
        <p className="g-gcategory_h">
          <a href="/#">
            <img
              className="lozad"
              alt=""
              width="120"
              height="120"
              src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8993449607198/Bed.jpg"
            />
            {categoryName}
          </a>
        </p>
        <ul className="sub_list">
          {submenus.map((subItem, index) => (
            <li key={index}>
              <a href="/#">{subItem.categoryName}</a>
              <Link to="shop" onClick={() => setDropdown(false)}>
                To Shop
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ul>
  );
};
export default SubDropdown;
