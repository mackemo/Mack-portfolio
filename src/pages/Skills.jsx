import icons from '../assets/icons'

export default function Skills() {
    return (
        <section className="container col-md-10" id="skills">
            <div className="row">
                <h3 className="title fw-medium">Skills</h3>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="text-center m-4">

                        <h5>Languages</h5>
                        <img className="skills" src={icons.html} alt="HTML"/>
                        <img className="skills" src={icons.css} alt="CSS"/>
                        <img className="skills" src={icons.js} alt="Javascript"/>
                        <img className="skills" src={icons.python} alt="Python"/>
                        <img className="skills" src={icons.c} alt="C#"/>
                        <img className="skills" src={icons.java} alt="Java"/>
                    </div>
                    <div className="text-center m-4">
                
                        <h5>Frontend</h5>
                        <img className="skills" src={icons.react} alt="React"/>
                        <img className="skills" src={icons.jquery} alt="jquery"/>
                        <img className="skills" src={icons.bootstrap} alt="Bootstrap"/>
                        <img className="skills" src={icons.handlebars} alt="Handlebars"/>
                    </div>
                    <div className="text-center m-4">
                      
                        <h5>Backend</h5>
                        <img className="skills" src={icons.node} alt="Node"/>
                        <img className="skills" src={icons.express} alt="Express"/>
                        <img className="skills" src={icons.mvc} alt="MVC"/>
                        <img className="skills" src={icons.sequelize} alt="Sequelize"/>
                    </div>
                    <div className="text-center m-4">
                       
                        <h5>Databases</h5>
                        <img className="skills" src={icons.mongo} alt="MongoDB"/>
                        <img className="skills" src={icons.mysql} alt="MySQL"/>
                        <img className="skills" src={icons.postgresql} alt="PostgreSQL"/>
                        <img className="skills" src={icons.nosql} alt="NoSQL"/>
                    </div>
                    <div className="text-center m-4">
                       
                        <h5>Other</h5>
                        <img className="skills" src={icons.api} alt="API"/>
                        <img className="skills" src={icons.pwa} alt="PWA"/>
                        <img className="skills" src={icons.json} alt="JSON"/>
                        <img className="skills" src={icons.vscode} alt="VScode"/>
                        <img className="skills" src={icons.agile} alt="Agile"/>
                        <img className="skills" src={icons.aws} alt="AWS"/>
                    </div>
                </div>
            </div>
    </section>
    );
} 