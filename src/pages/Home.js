import Card from "../Component/Card/Card";
import React from "react";
import Navbar from "../Component/Header/Header";
import SideNavbar from "../Component/SideNavbar";
import "./Home.scss";
import TransactionContainer from "../Component/TransactionContainer.jsx/TransactionContainer";
import ExpenseGraph from "../Component/ExpenseGraph/ExpenseGrap";

const Home = () => {
  return (
    <div className="home__wrapper">
      <SideNavbar />
      <Navbar />
      <div className="home__sections">
        <Card />
        <TransactionContainer />
        <ExpenseGraph />
      </div>
    </div>
  );
};

export default Home;
