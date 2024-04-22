import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Homepage.css";
import "../styles/Nav2.css";
import Nav2 from "../components/Navs/Nav2";
import Cards from "../components/Cards";
import Cards1 from "../components/Cards1";
import Nav3 from "../components/Navs/Nav3";

const HomePage = () => {
  return (
    <Layout>
      <div id="startmain">
      <div id="main1">
        <Nav2 />
        <div className="main12">
        <Cards/>
        <Cards1/>
        </div>
      </div>
      <hr className="hrline"></hr>
      <div id="main1">
        <Nav3 />
        <div className="main12">
        <Cards/>
        <Cards1/>
        </div>
      </div>
      <hr className="hrline"></hr>
      <div id="main1">
        <Nav2 />
        <div className="main12">
        <Cards/>
        <Cards1/>
        </div>
      </div>
      <hr className="hrline"></hr>
      <div id="main1">
        <Nav3 />
        <div className="main12">
        <Cards/>
        <Cards1/>
        </div>
      </div>
      <hr className="hrline"></hr>
      </div>
    </Layout>
  );
};

export default HomePage;
