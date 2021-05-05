import React from 'react';
import pic from "../img/profile.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:0, content: "Data Structures"},
                {id:1, content: "Algorithms"},
                {id:2, content: "C/C++"},
                {id:3, content: "JavaScript"},
                {id:4, content: "Flutter"},
                {id:5, content: "Python"},
                {id:6, content: "HTML & CSS"},
                {id:7, content: "ReactJS"},
                {id:8, content: "Flask"},
                {id:9, content: "Node.js"},
                {id:10, content: "ExpressJS"},
                {id:11, content: "Databases"},
                {id:12, content: "Git & GitHub"},
                {id:13, content: "Figma"},
            ],
            about_me:[
                {id: "first-p-about",content: "Self-taught Software Developer willing to escalate my skills and apply them to solve real-life problems."},
                {id: "second-p-about", content: "Software Developer who loves to transform ideas into reality using code. Passionate about implementing different web technologies."},
                {id: "third-p-about", content: "One year of experience developing web applications using different technologies."}
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
                                                    <img src={pic} className="img-fluid rounded b-shadow-a" alt=""/>
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