import images from '../assets/images'

export default function Projects() {
    return (
        <section className="container col-md-10" id="projects">
            <div className="row">
                <div>
                    <h3 className="title fw-medium">Projects</h3>
                    <div className="work-topics">
                        
                        <div className="main-work">
                            <a href="https://mackemo-chatbot.streamlit.app/" target="_blank">
                                <img src={images.chat} alt="Chatbot"/>
                                <div className="main-info">
                                <h5>Chatbot</h5>
                                    <a href="https://github.com/mackemo/my-chatbot" target="_blank">link to repo</a>
                                    <p>Python, Streamlit, OpenAI</p>
                                </div>
                            </a>
                        </div>
               
                        <div className="work">
                            <a href="https://mackemo.github.io/5-task-board/" target="_blank">
                                <img src={images.task} alt="Task Board"/>
                                <div className="info">
                                <h5>Task Board</h5>
                                    <a href="https://github.com/mackemo/5-task-board" target="_blank">link to repo</a>
                                    <p>jQuery, Bootstrap</p>
                                </div>
                            </a>
                        </div>
             
                        <div className="work">
                            <a href="https://mackemo.github.io/project-1-charge-car/" target="_blank">
                                <img src={images.charge} alt="Project 1"/>
                                <div className="info">
                                <h5>Charge Car</h5>
                                    <a href="https://github.com/mackemo/project-1-charge-car" target="_blank">link to repo</a>
                                    <p>Server-side APIs, Bootstrap, Team Project</p>
                                </div>
                            </a>
                        </div>
                  
                        <div className="work">
                            <a href="https://nine-note-taker.onrender.com" target="_blank">
                                <img src={images.note} alt="Note Taker"/>
                                <div className="info">
                                <h5>Note Taker</h5>
                                    <a href="https://github.com/mackemo/9-note-taker" target="_blank">link to repo</a>
                                    <p>Express.js</p>
                                </div>
                            </a>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    );
} 