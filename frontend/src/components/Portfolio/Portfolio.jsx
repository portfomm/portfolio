import React from "react";
import "./Portfolio.scss";
import projectimg from "../../assets/Images/aboutMe.jpg"

const Portfolio = () => {

  const projects = [
    { id: 1, img: projectimg, title: "Project 1", date: "Dec 2023" },
    { id: 2, img: projectimg, title: "Project 2", date: "Jan 2024" },
    { id: 3, img: projectimg, title: "Project 3", date: "Feb 2024" },
    { id: 4, img: projectimg, title: "Project 4", date: "Mar 2024" },
    { id: 5, img: projectimg, title: "Project 5", date: "Apr 2024" },
    { id: 6, img: projectimg, title: "Project 6", date: "May 2024" },
  ];

  return (

      <section id="portfolio" className="d-flex me-5">
        <h2 className="project_heading">My Projects</h2>
        <div className="w-100 d-flex flex-column align-item-center justify-center">
          {projects.map((project, index) => (
            <div className={`w-100 d-flex ${'project-item'.concat(index % 2 === 0 ? '-left' : '-right')}`}  style={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            }}>
            <div
              key={project.id}
              className="project_wrapper"
            >
              <div className="project_cover">
                <img src={project.img} alt={project.title} />
               
              </div>
              <div className="project_header" style={{top: index % 3 === 0 ? '0px' : index % 3 === 1 ? '50px' : '100px', left: index % 3 === 0 ? 'unset' : index % 3 === 1 ? '-50px' : '-50px'}}>
                  <h3>{project.title}</h3>
                  <span>{project.date}</span>
                </div>
            </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Portfolio;
