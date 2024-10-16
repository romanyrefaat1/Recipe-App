import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import AddRecipe from "../../components/Oome/AddRecipe/inputs/Inputs";
import SearcRecipe from "../../components/Oome/SearcRecipe/SearcRecipe";

import "./Oome.css";
import TabsButtons from "../../components/Oome/tabsButtons/TabsButtons";

const Oome = () => {
  
  return (
    <div className="oome--container">
      <TabsButtons />
      <Routes>
        <Route path="/" element={<SearcRecipe />} />
        <Route path="add-recipe" element={<AddRecipe />} />
      </Routes>
    </div>
  );
};

export default Oome;
