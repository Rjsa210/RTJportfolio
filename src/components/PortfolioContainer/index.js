import React from "react";
import ProjectItem from "../ProjectItem";
import cookNtrl from "../../images/cooking-natural.jpg";
import podcast from "../../images/podcast-junkie.jpg"
import farmDirect from "../../images/farm-direct.jpg"
import "./style.css"

function PortfolioContainer() {
  return (
    <div className="container-lg project-box">
      <div className="row">

        <div className="col-12 col-md-6 text-center project-column">
          <ProjectItem img={cookNtrl} name={"Cooking Natural"} tech={"HTML, CSS, Javascript, NodeJS"} url={"https://minorelite.github.io/Cook-Natural-Project1/"} description={"Search for new recipes based on ingredient, save them to your recipe book. View calulated nutrition facts for recipes."}>
          </ProjectItem>
        </div>

        <div className="col-12 col-md-6 text-center project-column">
          <ProjectItem img={podcast} name={"Podcast Junkie"} tech={"HTML, CSS, Javascript, Express, Node, Handlebars.js"} url={"https://polar-gorge-02083.herokuapp.com/"} description={"An app to connect listeners with podcasts based on keyword and genre searches. Allows the user to save liked podcasts. "}>
          </ProjectItem>
        </div>

      </div>

      <div className="row">

        <div className="col-12 col-md-6 text-center project-column">
          <ProjectItem img={farmDirect} name={"Farm Direct"} tech={"Mongo DB, Node JS, Express, React"} url={"https://aqueous-reef-16750.herokuapp.com/"} description={"React app for finding local farmers in your area, and purchasing produce directly from the farm. Farmers can add a profile and update their prices and inventory."}>
          </ProjectItem>
        </div>

      </div>
    </div>
  )
}

export default PortfolioContainer;