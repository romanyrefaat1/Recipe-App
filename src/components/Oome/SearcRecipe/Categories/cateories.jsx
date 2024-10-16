import { useEffect, useState } from "react";

import "./cateories.css";

const Categories = () => {
  const [selected, setSelected] = useState([`item1`]);

  function andleSelected(e) {
    setSelected((prevSelected) => {
      if (prevSelected.includes(e.target.textContent)) {
        return prevSelected.filter((current) => e.target.textContent !== current);
      } else {
        return [...selected, e.target.textContent];
      }
    });
  }

  // useEffect(() => console.log(selected));

  return (
    <div className="cateories--container">
      {["Category 1", "Category 2", "Category 3", "Category 4"].map(
        (item, index) => {
          return <span
            key={index}
            onClick={andleSelected}
            className={`cateroy ${selected.includes(item) ? `selected` : ``}`}
          >
            {item}
          </span>;
        }
      )}
    </div>
  );
};

export default Categories;
