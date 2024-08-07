import icons from '../assets/icons'
import headshot from '../assets/images/headshot.jpg'

export default function About() {
    return (
        <section className="container col-md-10" id="about">
            <div className="row">
                <div>
                    <div className="d-flex flex-wrap align-items-center m-4">
                        <div className="intro col-md-6 d-flex flex-column">
                            <h3 className="name fw-normal">Hello! <br></br> I'm Mackenzie Moore</h3> 
                            <h4 className="fs-3 fw-normal fst-italic">Aspiring Software Developer</h4>
                            <p className="fs-5">
                                I'm embarking on my coding journey through Vanderbilt University's bootcamp! 
                                I am dedicated to continuously challenging myself to learn the skills 
                                required for creating high-quality user experiences with efficiency. 
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