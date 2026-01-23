import icons from '../assets/icons'
import headshot from '../assets/images/headshot.jpg'

export default function About() {
    return (
        <section className="container col-md-12" id="about">
            <div className="row">
                <div>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="intro col-md-6 d-flex flex-column">
                            <h3 className="name fw-normal">Hello!</h3> 
                            <h4 className="fs-3 fw-normal fst-italic">Aspiring Software Developer</h4>
                            <p className="fs-6">
                                I am a Cybersecurity Developer with Flat Earth Networking based in Nashville, TN. I have background knowledge in cybersecurity,
                                earning a CompTIA Security+ certification. I have worked with Flat Earth first as a SOC Analyst, then transitioning into a Network 
                                Engineer, and now as their sole developer. 
                                <br></br>
                                <br></br>
                                So, I have expanded my knowledge in the world of technology and have continued to learn new topics. My current interest lies in 
                                understanding and building with AI. I have experience with creating an internal AI. Though, my common tasks with my job include 
                                building out automations and handling bug reports.
                            </p> 
                            
                            <div className="d-flex flex-wrap">
                                <a href="https://github.com/mackemo/" target="_blank">
                                    <img className="icon" src={icons.github} alt="Github"/></a>
                                <a href="https://www.linkedin.com/in/mackenzie-moore1410" target="_blank">
                                    <img className="icon" src={icons.linkedin} alt="LinkedIn"/></a>
                                <a href="https://docs.google.com/document/d/1llnGyzWal6S0qqCwzfovvd3K2aydl_NUWIdym-sdSQ4/edit" target="_blank">
                                    <img className="icon" src={icons.resume} alt="Resume"/></a>
                            </div>
                        </div>
                        
                        <div className="col-md-6 d-flex justify-content-center">
                            <img className="img-mack col-md-6" src={headshot} alt="Mackenzie Moore"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 