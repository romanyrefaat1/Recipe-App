import { Link } from "react-router-dom";

import { useState } from "react";

import "./TabsButtons.css";

const TabsButtons = () => {
  const [activeTab, setActiveTab] = useState(`button1`);

  function andleButtonClick(button) {
    setActiveTab(button);
  }
  
  return (
    <div className="tabs-buttons">
      <Link
        to={`/`}
        onClick={() => andleButtonClick(`button1`)}
        className={activeTab === `button1` ? "active" : ``}
      >
        Search Recipe
      </Link>
      <Link
        to="/add-recipe"
        onClick={() => andleButtonClick(`button2`)}
        className={activeTab === `button2` ? "active" : ``}
      >
        Add Recipe
      </Link>
    </div>
  );
};

export default TabsButtons;
