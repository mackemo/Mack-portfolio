import images from '../assets/images'

export default function Projects() {
    return (
        <section className="container col-md-10" id="projects">
            <div className="row">
                <div>
                    <h3 className="title fw-medium">Projects</h3>
                    <div className="work-topics">
                        <div className="main-work">
                            <a href="https://tech-blog-lkbj.onrender.com" target="_blank">
                                <img src={images.tech} alt="Tech Blog"/>
                                <div className="main-info">
                                <h5>Tech Blog</h5>
                                    <a href="https://github.com/mackemo/12-tech-blog" target="_blank">link to repo</a>
                                    <p>Javascript, Handlebars.js, Sequelize, Bootstrap</p>
                                </div>
                            </a>
                        </div>
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
                        <div className="main-work">
                            <a href="https://py-ex-tech-news-784b646bd364.herokuapp.com/" target="_blank">
                                <img src={images.news} alt="Tech News"/>
                                <div className="main-info">
                                <h5>Tech News</h5>
                                    <a href="https://github.com/mackemo/python-newsfeed" target="_blank">link to repo</a>
                                    <p>Python, Jinja2, Flask, SQLAlchemy</p>
                                </div>
                            </a>
                        </div>
                        <div className="main-work">
                            <a href="https://text-based-adventure-game.onrender.com/" target="_blank">
                                <img src={images.game} alt="Adventure Game"/>
                                <div className="main-info">
                                <h5>Adventure Game</h5>
                                    <a href="https://github.com/Flem-House-Dev/Text-Based-Adventure-Game" target="_blank">link to repo</a>
                                    <p>MongoDB, Express.js, React.js, Node.js, Team Project</p>
                                </div>
                            </a>
                        </div>
                        <br></br>
                        <div className="work">
                            <a href="https://mackemo.github.io/prework-study-guide/" target="_blank">
                                <img src={images.prework} alt="Prework Study Guide"/>
                                <div className="info">
                                <h5>Prework Study Guide</h5>
                                    <a href="https://github.com/mackemo/prework-study-guide" target="_blank">link to repo</a>
                                    <p>Html, Css</p>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://mackemo.github.io/3-payroll-tracker/" target="_blank">
                                <img src={images.payroll} alt="Payroll Tracker"/>
                                <div className="info">
                                <h5>Payroll Tracker</h5>
                                    <a href="https://github.com/mackemo/3-payroll-tracker" target="_blank">link to repo</a>
                                    <p>Javascript</p>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://mackemo.github.io/4-personal-blog/" target="_blank">
                                <img src={images.blog} alt="Personal Blog"/>
                                <div className="info">
                                <h5>Personal Blog</h5>
                                    <a href="https://github.com/mackemo/12-tech-blog" target="_blank">link to repo</a>
                                    <p>Javascript, Css</p>
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
                            <a href="https://mackemo.github.io/6-weather-dashboard/" target="_blank">
                                <img src={images.weather} alt="Weather Dashboard"/>
                                <div className="info">
                                <h5>Weather Dashboard</h5>
                                    <a href="https://github.com/mackemo/6-weather-dashboard" target="_blank">link to repo</a>
                                    <p>Server-side APIs, Bootstrap</p>
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
                            <a href="https://drive.google.com/file/d/1FEylRp6MDN0mAO5NpnvG0fm5p-2HMln1/view" target="_blank">
                                <img src={images.readme} alt="Readme Generator"/>
                                <div className="info">
                                <h5>Readme Generator</h5>
                                    <a href="https://github.com/mackemo/7-readme-generator" target="_blank">link to repo</a>
                                    <p>Inquirer, Markdown</p>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://drive.google.com/file/d/1dL5c2ptSsVas_cwclkuP5_EEBa3kF2lc/view" target="_blank">
                                <img src={images.svg} alt="SVG Logomaker"/>
                                <div className="info">
                                <h5>SVG Logomaker</h5>
                                    <a href="https://github.com/mackemo/8-svg-logomaker" target="_blank">link to repo</a>
                                    <p>Unit testing, Inquirer, SVG markdown</p>
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
                        <div className="work">
                            <a href="https://drive.google.com/file/d/1xM-w4MFCEGdOS1mtH_yGVQ5vfOHO2Rl9/view" target="_blank">
                                <img src={images.emp} alt="Employee Tracker"/>
                                <div className="info">
                                <h5>Employee Tracker</h5>
                                    <a href="https://github.com/mackemo/10-employee-tracker" target="_blank">link to repo</a>
                                    <p>Inquirer, PostgreSQL</p>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://drive.google.com/file/d/13UVQjVMGu9k3k1hvGJfX8_18R_3cMDSi/view" target="_blank">
                                <img src={images.ecom} alt="Ecommerce Site"/>
                                <div className="info">
                                <h5>Ecommerce Site</h5>
                                    <a href="https://github.com/mackemo/11-ecommerce-site" target="_blank">link to repo</a>
                                    <p>Sequelize, PostgreSQL, Express.js</p>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://drive.google.com/file/d/1N4CSPskwOIT0OLARWuOWCPSxcj2mDs1A/view?usp=drive_link" target="_blank">
                                <img src={images.social} alt="Social Network"/>
                                <div className="info">
                                <h5>Social Network</h5>
                                    <a href="https://github.com/mackemo/12-tech-blog" target="_blank">link to repo</a>
                                    <p>MongoDB, Express.js</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 