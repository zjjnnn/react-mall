import "./menu-demo.styles.css";
import MenuItemss from "./MenuItemss";

const Dropdown = ({ items, dropdown, setDropdown }) => {
  const depthLevel = 1;
  // const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <div id="g-gcategory" className={`dropdown ${dropdown ? "show" : ""} `}>
      <ul className="g-gcategory_el">
        {items.map((subItem, index) => (
          <MenuItemss
            subItem={subItem}
            key={index}
            depthLevel={depthLevel}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;

// <li key={index} className="menu-items">
// <a href="/#">{submenu.title}</a>
// </li>

// className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} `}
