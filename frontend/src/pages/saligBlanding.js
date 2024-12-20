import React, { useState } from "react";
import ComponentsMenu from "../components/ComponentsMenu";
import StartsideSaligBlanding from "../components/StartsideSaligBlanding";
import { FaHome, FaCalendar, FaGift } from "react-icons/fa";

function SaligBlanding() {
  const [currentComponent, setCurrentComponent] = useState("startside");

  const menuItems = [
    { name: "Startside", icon: <FaHome />, component: "startside" },
    { name: "Kalender", icon: <FaCalendar />, component: "kalender" },
    { name: "Gi Gave", icon: <FaGift />, component: "giGave" },
  ];

  const renderComponent = () => {
    switch (currentComponent) {
      case "startside":
        return <StartsideSaligBlanding />;
      case "kalender":
        return <div>Kalender Component Placeholder</div>;
      case "giGave":
        return <div>Gi Gave Component Placeholder</div>;
      default:
        return <StartsideSaligBlanding />;
    }
  };

  return (
    <div className="page salig-blanding">
      <ComponentsMenu
        items={menuItems}
        onMenuItemClick={(component) => setCurrentComponent(component)}
      />
      <div className="content">{renderComponent()}</div>
    </div>
  );
}

export default SaligBlanding;