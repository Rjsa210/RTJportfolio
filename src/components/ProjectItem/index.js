import React from "react";
import "./style.css";


function ProjectItem(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <figure>
            <a target="_blank" href={props.url}><img src={props.img} alt={props.name} className="project-thumbnail" /></a>


          </figure>
        </div>
      </div>
      <p className="project-title">{props.name}</p>
      <p className="technologies">{props.tech}</p>
      <p className="description">{props.description}</p>
      
    

    </div>







  )
}
export default ProjectItem;