import React from "react";
import "./ComponentsMenu.css";

function ComponentsMenu({ items, onMenuItemClick }) {
  return (
    <div className="component-menu">
      {items.map((item, index) => (
        <button
          key={index}
          className="menu-item"
          onClick={() => onMenuItemClick(item.component)}
        >
          {item.icon && <span className="menu-icon">{item.icon}</span>}
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default ComponentsMenu;