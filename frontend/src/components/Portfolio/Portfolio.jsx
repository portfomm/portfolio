import React, {useState} from 'react';
import './Portfolio.scss';
import Modal from "../../custom/Modal/Modal"

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false)
  const [details, setDetails] = useState()

  const projectsArray = [
    {
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
    <>
    <h1 className='project_header'>My Projects</h1>
    {projectsArray.map((experience) => (
      <>
      <section id="portfolio" className='d-flex me-5'>
      <div className="section_right">
        {" "}
        <h2 className="header_about">{experience.name}</h2>
        <h3 className="h3_heading">{experience.company}</h3>
        <h3 className="h3_heading">{experience.duration}</h3>
        <button className="contact_button" onClick={() => {
          console.log('in onclicked func');
          setOpenModal(true)
          setDetails(experience.moreDetails)
          }}>View More</button>
      </div>
      <div className="section_left">
        <div className="circle_img">
        </div>
      </div>
    </section>
  </>
    ))}
    <Modal open={openModal} onCloseModal={(value) => setOpenModal(value)}>
    <div className="modal">
      <h2>helloo</h2>
      <p>Modal is here</p>
    </div>
  </Modal>
    </>
  );
};

export default Portfolio;
