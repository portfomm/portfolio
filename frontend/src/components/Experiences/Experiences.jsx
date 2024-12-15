import React, {useState} from 'react';
import './Experiences.scss';
import Modal from "../../custom/Modal/Modal"
import projectimg from "../../assets/Images/aboutMe.jpg"

const Experiences = () => {
  const [openModal, setOpenModal] = useState(false)
  const [details, setDetails] = useState()

  const experiencesArray = [
    {
      id: 1,
      post: 'Software Engineer',
      company: 'Avonet Technologies PVT LTD',
      companyLocation: 'Kent Town SA 5067, Australia',
      duration: 'Since 2023',
      moreDetails: {
        project: 'Train Ticket Booking System',
        clients: 'World Compass, Odamigo',
        description: 'Started to work with RailEurope and sell our product to their customers aswell. And grow more the product.',
        technologies: 'NextJs, NestJs, TypeScripts, AWS Resources',
        myResponsibilities: [
          'Successfully integrated the PAYTEN payment method as a configurable feature for the Odamigo client, ensuring seamless and efficient payment processing.',
          'Took ownership of releasing QA, staging, and live versions of projects, incorporating DevOps practices to streamline deployment workflows.'
        ]
      }
    },
    {
      id: 2,
      post: 'Associate Software Engineer',
      company: 'Avonet Technologies PVT LTD',
      companyLocation: 'Kent Town SA 5067, Australia',
      duration: 'Apr 2022 - Dec 2022',
      moreDetails: {
        project: 'Train Ticket Booking System',
        clients: 'International Rail, Ohshu Express, WebBeds',
        description: 'The International Rail project was converted into a customizable product as name ”AVNLINK”.',
        technologies: 'NextJs, NestJs, TypeScripts, AWS Resources',
        myResponsibilities: [
          'Implemented the GMO payment gateway into the Ohshu project as a configurable option alongside the existing Stripe gateway, ensuring flexibility and adaptability in payment processing.',
          'Began leveraging AWS Amplify to enhance project development and deployment workflows.'
        ]
      }
    }
  ]

  // return (
  //   <>
  //   <h1 className='project_header'>My Experiences</h1>
  //   {experiencesArray.map((experience) => (
  //     <>
  //     <section id="portfolio" className='d-flex me-5'>
  //     <div className="section_right">
  //       {" "}
  //       <h2 className="header_about">{experience.post}</h2>
  //       <h3 className="h3_heading">{experience.company}</h3>
  //       <h3 className="h3_heading">{experience.duration}</h3>
  //       <button className="contact_button" onClick={() => {
  //         console.log('in onclicked func');
  //         setOpenModal(true)
  //         setDetails(experience.moreDetails)
  //         }}>View More</button>
  //     </div>
  //     <div className="section_left">
  //       <div className="circle_img">
  //       </div>
  //     </div>
  //   </section>
  // </>
  //   ))}
  //   <Modal open={openModal} onCloseModal={(value) => setOpenModal(value)}>
  //   <div className="modal">
  //     <h2>helloo</h2>
  //     <p>Modal is here</p>
  //   </div>
  // </Modal>
  //   </>
  // );

  return (
    <section id="experiences" className="d-flex me-5">
        <h2 className="project_heading">My Experiences</h2>
        <div className="w-100 d-flex flex-column align-item-center justify-center">
          {experiencesArray.map((experience, index) => (
            <div className={`w-100 d-flex ${'project-item'.concat(index % 2 === 0 ? '-left' : '-right')}`}  style={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            }}>
            <div
              key={experience.id}
              className="project_wrapper"
            >
              <div className="project_cover">
                <img src={projectimg} alt={experience.post} />

              </div>
              <div className="project_header" style={{top: index % 3 === 0 ? '0px' : index % 3 === 1 ? '50px' : '100px', left: index % 3 === 0 ? 'unset' : index % 3 === 1 ? '-50px' : '-50px'}}>
                  <h3>{experience.post}</h3>
                  <span>{experience.company}</span>
              </div>
              <button className="contact_button" onClick={() => {
                console.log('in onclicked func');
                setOpenModal(true)
                setDetails(experience.moreDetails)
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
  )
};

export default Experiences;
