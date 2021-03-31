import React from 'react';
import myImage from "../img/myImage.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:12, content: "Data Structures"},
                {id:13, content: "Algorithms"},
                {id:14, content: "C/C++"},
                {id:0, content: "HTML5"},
                {id:1, content: "CSS3"},
                {id:2, content: "JavaScript"},
                {id:3, content: "Python"},
                {id:4, content: "Flask"},
                {id:5, content: "Node.js"},
                {id:6, content: "ExpressJS"},
                {id:7, content: "ReactJS"},
                {id:8, content: "ElectronJS"},
                {id:9, content: "MySQL"},
                {id:10, content: "MongoDB"},
                {id:11, content: "Git & GitHub"}
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
                                                            <span className='badge badge-warning'>{skill.content}</span>
                                                            { skill.id % 3 === 2 && <br /> }
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