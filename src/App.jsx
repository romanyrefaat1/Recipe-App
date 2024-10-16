import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



import Oome from "./Pages/Oome/Oome";
import StaredRecipes from "./Pages/StaredRecipes/StaredRecipes";
import SoppinList from "./Pages/ShoppinList/SoppinList";
import Profile from "./Pages/Profile/Profile";
import BottomNav from "./components/BottomNav/BottomNav";
// import AddRecipe from "./components/AddRecipe/inputs/inputs";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Oome />} />
          <Route path="/stared" element={<StaredRecipes />} />
          <Route path="/shopping-list" element={<SoppinList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <BottomNav />
      </Router>
    </>
  );
};

export default App;
