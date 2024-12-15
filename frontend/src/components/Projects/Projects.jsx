import React, {useState} from "react";
import "./Projects.scss";
import projectimg from "../../assets/Images/aboutMe.jpg"
import Modal from "../../custom/Modal/Modal"

const Projects = () => {
    const [openModal, setOpenModal] = useState(false)
    const [details, setDetails] = useState()

    const projectsArray = [
        {
            id: 1,
            name: 'Train Ticket Booking System',
            languages: 'Next Js, Nest Js, TypeScripts, AWS Resources',
            company: 'Avonet Technologies PVT LTD',
            discription: 'Built a Europe-based platform for booking railway tickets and passes in Australia, integrating Rail Europe APIs. Enabled agents and consultants to make bookings through the system, while providing admins with tools to manage bookings and agents via a dedicated admin panel. And this is a customizable product. So we have many clients in different countries',
            clients: [
                {
                    name: 'International Rail',
                    url: 'https://www.internationalrail.com.au/'
                },
                {
                    name: 'Ohshu Express',
                    url: 'https://www.reserve.ohshu.com/'
                },
                {
                    name: 'WebBeds',
                    url: 'https://www.rail-bookings.webbeds.com/'
                },
                {
                    name: 'World Compass',
                    url: 'https://eurorail-wcc.railflash.com/'
                },
                {
                    name: 'Odamigo',
                    url: 'https://eurotrain.railflash.com/'
                }
            ]
        },
        {
            id: 2,
            name: 'IMSystem',
            languages: 'HTML, CSS, PHP, Javascript',
            company: '2nd Year Group Project',
            discription: 'IMSystem is a web application to support Academic and Publication Division of UCSC for there documentation.',
            options: [
                "Staff medical support scheme",
                "Hall Allocation Scheduling.",
                "Student Attendance Recording.",
                "Mahapola Scheme"
            ],
            githubUrl: 'https://github.com/UCSC-group17-secondyear/IMS_system/'
        }
    ]

  return (

      <section id="projects" className="d-flex me-5">
        <h2 className="project_heading">My Projects</h2>
        <div className="w-100 d-flex flex-column align-item-center justify-center">
          {projectsArray.map((project, index) => (
            <div className="w-100 d-flex"  style={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            }}>
            <div
              key={project.id}
              className="project_wrapper"
            >
              <div className="project_cover">
                <img src={projectimg} alt={project.name} />

              </div>
              <div className="project_header" style={{top: index % 3 === 0 ? '0px' : index % 3 === 1 ? '50px' : '100px', left: index % 3 === 0 ? 'unset' : index % 3 === 1 ? '-50px' : '-50px'}}>
                  <h3>{project.name}</h3>
                  <span>{project.company}</span>
              </div>
              <button className="contact_button" onClick={() => {
                console.log('in onclicked func');
                setOpenModal(true)
                setDetails(project.details)
                }}>View More</button>
            </div>
            </div>
          ))}
        </div>
          <Modal open={openModal} onCloseModal={(value) => setOpenModal(value)}>
              <div className="modal">
                  <h2>helloo</h2>
                  <p>Modal is here</p>
              </div>
          </Modal>
      </section>
  );
};

export default Projects;
