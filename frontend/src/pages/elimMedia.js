import React, { useState } from "react";
import ComponentsMenu from "../components/ComponentsMenu";
import StartsideElimMedia from "../components/StartsideElimMedia";
import { FaHome, FaCalendar, FaMusic, FaGift } from "react-icons/fa";

function ElimMedia() {
  const [currentComponent, setCurrentComponent] = useState("startside");

  const menuItems = [
    { name: "Startside", icon: <FaHome />, component: "startside" },
    { name: "Kalender", icon: <FaCalendar />, component: "kalender" },
    { name: "Sanger", icon: <FaMusic />, component: "sanger" },
    { name: "Gi Gave", icon: <FaGift />, component: "giGave" },
  ];

  const renderComponent = () => {
    switch (currentComponent) {
      case "startside":
        return <StartsideElimMedia />;
      case "kalender":
        return <div>Kalender Component Placeholder</div>;
      case "sanger":
        return <div>Sanger Component Placeholder</div>;
      case "giGave":
        return <div>Gi Gave Component Placeholder</div>;
      default:
        return <StartsideElimMedia />;
    }
  };

  return (
    <div className="page elim-media">
      <ComponentsMenu
        items={menuItems}
        onMenuItemClick={(component) => setCurrentComponent(component)}
      />
      <div className="content">{renderComponent()}</div>
    </div>
  );
}

export default ElimMedia;