import React, { useState } from "react";
import ComponentsMenu from "../components/ComponentsMenu";
import StartsideElimHeddal from "../components/StartsideElimHeddal";
import { FaHome, FaCalendar, FaGift } from "react-icons/fa";

function ElimHeddal() {
  const [currentComponent, setCurrentComponent] = useState("startside");

  const menuItems = [
    { name: "Startside", icon: <FaHome />, component: "startside" },
    { name: "Kalender", icon: <FaCalendar />, component: "kalender" },
    { name: "Gi Gave", icon: <FaGift />, component: "giGave" },
  ];

  const renderComponent = () => {
    switch (currentComponent) {
      case "startside":
        return <StartsideElimHeddal />;
      case "kalender":
        return <div>Kalender Component Placeholder</div>;
      case "giGave":
        return <div>Gi Gave Component Placeholder</div>;
      default:
        return <StartsideElimHeddal />;
    }
  };

  return (
    <div className="page elim-heddal">
      <ComponentsMenu
        items={menuItems}
        onMenuItemClick={(component) => setCurrentComponent(component)}
      />
      <div className="content">{renderComponent()}</div>
    </div>
  );
}

export default ElimHeddal;