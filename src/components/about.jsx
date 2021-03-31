import React from 'react';
import myImage from "../img/myImage.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:"HTML5_skill", content: "HTML5",percentage: "80%", value: "80"},
                {id:"CSS3_skill", content: "CSS3",percentage: "75%", value: "75"},
                {id:"JavaScript_skill", content: "JavaScript",percentage: "90%", value: "90"},
                {id:"Flask_skill", content: "Flask",percentage: "70%", value: "70"},
                {id:"MERN_skill", content: "MERN",percentage: "80%", value: "80"},
                {id:"Python_skill", content: "Python",percentage: "75%", value: "75"},
                {id:"VanillaJS_skill", content: "VanillaJS",percentage: "85%", value: "85"},
                {id:"ElectronJS_skill", content: "ElectronJS",percentage: "80%", value: "80"},
                {id:"MySQL_skill", content: "MySQL",percentage: "85%", value: "85"}
            ],
            about_me:[
                {id: "first-p-about",content: "Software Developer who loves to transform ideas into reality using code. I'm passionate about implementing different web technologies."},
                {id: "second-p-about", content: "With one year of experience developing web and desktop applications using web technologies."},
                {id: "third-p-about", content: "Motivated developer with experience in creating websites with HTML5, CSS3, JavaScript, MERN, and Flask. Strong hold on relational and non-relational databases. Great collaboration skills."}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            {
                                                this.state.skills.map(skill => {
                                                    return(
                                                        <React.Fragment key={skill.id}>
                                                            <span>{skill.content}</span> <span className="pull-right">{skill.percentage}</span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: skill.percentage}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About Me
                                                </h5>
                                            </div>
                                            {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;