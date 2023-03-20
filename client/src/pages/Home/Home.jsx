import React from "react";
import Banner from "../../components/Banner/Banner";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import GamesIndex from "../../components/GamesIndex/GamesIndex";
import './Home.css'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-container">
        <FilterSidebar />
        <GamesIndex />
      </div>
    </div>
  );
};

export default Home;
