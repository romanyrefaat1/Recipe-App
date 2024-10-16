import React, { useEffect, useState } from "react";

import "./CateoryInp.css";
import "../../../SearcRecipe/Categories/cateories.css";

const CateoryInp = () => {
  const [cates, setCates] = useState([`text`]);
  const [inpValue, setInpValue] = useState(``);

  function inpValueCane(e) {
    setInpValue(e.target.value);
  }

  function addCate() {
    setCates((prevCates) => [...prevCates, inpValue]);
  }

  function andleRemove(index) {
    console.log(`before`, cates);
    setCates(cates.filter((_, i) => i !== index))
  }

  useEffect(() => console.log(cates), [cates]);
  useEffect(() => console.log(inpValue), [inpValue]);

  return (
    <div>
      <input onChange={(e) => inpValueCane(e)} value={inpValue} />
      <button onClick={addCate}>Add</button>
      <div className="inputs--cate">
        {cates.map((item, index) => (
          <span key={index} className="cateroy selected">
            {item}
            <button className="remove" onClick={() => andleRemove(index)}>
              X
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CateoryInp;
