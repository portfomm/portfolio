import React, { useState } from "react";
import "./Projects.scss";
import projectimg1 from "../../assets/Images/projects1.png"
import projectimg2 from "../../assets/Images/projects2.png"
import projectimg3 from "../../assets/Images/projects3.png"
import projectimg4 from "../../assets/Images/projects4.jpeg"
import CommonModal from "../../custom/Modal/Modal";

const Projects = () => {
  const [details, setDetails] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsArray = [
    {
      id: 1,
      img: projectimg1,
      name: "Train Ticket Booking System",
      languages: "Next Js, Nest Js, TypeScripts, AWS Resources",
      company: "Avonet Technologies PVT LTD",
      discription:
        "Built a Europe-based platform for booking railway tickets and passes in Australia, integrating Rail Europe APIs. Enabled agents and consultants to make bookings through the system, while providing admins with tools to manage bookings and agents via a dedicated admin panel. And this is a customizable product. So we have many clients in different countries",
      clients: [
        {
          name: "International Rail",
          url: "https://www.internationalrail.com.au/",
        },
        {
          name: "Ohshu Express",
          url: "https://www.reserve.ohshu.com/",
        },
        {
          name: "WebBeds",
          url: "https://www.rail-bookings.webbeds.com/",
        },
        {
          name: "World Compass",
          url: "https://eurorail-wcc.railflash.com/",
        },
        {
          name: "Odamigo",
          url: "https://eurotrain.railflash.com/",
        },
      ],
    },
    {
      id: 2,
      img: projectimg4,
      name: "Personal Expenses Tracking",
      languages: "React, MongoDB, Spring Boot, Javascript",
      company: "Personal Project",
      discription:
        "Developed a personal expense tracking system that allows users to record, edit, delete, and view daily expenses efficiently. The system includes a feature to set a monthly expense limit and displays warnings when the limit is reached, providing valuable assistance for managing day-to-day finances.",
      githubUrl: "https://github.com/milanmalshika/PersonalExpenseTracking",
    },
    {
      id: 3,
      img: projectimg2,
      name: "SmartRide",
      languages: "Flutter, PostgreSQL, Express, React, NodeJs",
      company: "3rd Year Group Project",
      discription:
        "Mobile application to pay the bus fare and web app for bus owner to handle their busses and their routes. Kind of a mobile wallet works with NFC technology; passengers can pay the bus fare according to the distance they travel. And view details about routes.",
      githubUrl: "https://github.com/Group-29-3rd-Year/",
    },
    {
      id: 4,
      img: projectimg3,
      name: "IMSystem",
      languages: "HTML, CSS, PHP, Javascript",
      company: "2nd Year Group Project",
      discription:
        "IMSystem is a web application to support Academic and Publication Division of UCSC for there documentation.",
      options: [
        "Staff medical support scheme",
        "Hall Allocation Scheduling.",
        "Student Attendance Recording.",
        "Mahapola Scheme",
      ],
      githubUrl: "https://github.com/UCSC-group17-secondyear/IMS_system/",
    },
  ];

  return (
    <section id="projects" className="d-flex me-5">
      <h2 className="project_heading">My Projects</h2>
      <div className="w-100 d-flex flex-column align-item-center justify-center project-wrapper">
        {projectsArray.map((project, index) => (
          <div
            className={`w-100 d-flex ${"project-item".concat(
              index % 2 === 0 ? "-left" : "-right"
            )}`}
            style={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            }}
          >
            <div key={project.id} className="project_wrapper">
              <div className="project_cover">
                <img src={project.img} alt={project.name} />
              </div>
              <div className="project_header" style={{top: index % 2 === 0 ? '0px' : index % 2 === 1 ? '50px' : '50px', left: index % 2 === 0 ? 'unset' : index % 2 === 1 ? '-50px' : 'unset', right: index % 2 === 1 ? '' : '-50px'}}>
                <h3>{project.name}</h3>
                <span>{project.company}</span>
              </div>
              <button
                className="contact_button"
                onClick={() => {
                  console.log("in onclicked func");
                  setIsModalOpen(true);
                  setDetails(project);
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
      {details && (
        <CommonModal
          open={isModalOpen}
          onCloseModal={(isOpen) => setIsModalOpen(isOpen)}
        >
          <h2>{details?.name}</h2>
          <h4>{details?.company}</h4>
          <p>{details?.languages}</p>
          <p>{details?.discription}</p>
          {details?.clients && (
            <>
              <p>Clients: </p>
              <ul className="list-items">
                {details?.clients?.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-button  gmail_link"
                    >
                      {item?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
          {details?.options && (
            <>
              <p>We prepared: </p>
              <ul>
                {details?.options?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {details.githubUrl && (
            <p>
              GitHub:{" "}
              <a
                href={details?.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-button  gmail_link"
              >
                {details?.name ?? ""}
              </a>
            </p>
          )}
        </CommonModal>
      )}
    </section>
  );
};

export default Projects;
