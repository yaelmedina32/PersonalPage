import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    const skills = [
        {
            name: "Problem Solving",
            description: "Analytical thinking and creative solutions",
            icon: "🧩"
        },
        {
            name: "Team Collaboration",
            description: "Effective communication and teamwork",
            icon: "🤝"
        },
        {
            name: "Adaptability",
            description: "Quick learning and flexibility",
            icon: "🔄"
        },
        {
            name: "Leadership",
            description: "Project management and mentoring",
            icon: "🎯"
        }
    ];
    return (
        <div className="about-section">
            <div className="about-container">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="hero-content">
                        <div className="hero-text-about">
                            <div className="section-badge">
                                <span className="badge-dot"></span>
                                About me
                            </div>
                            <div className='aboutme-explanation'>
                                <div className='text-aboutme-explanation'>
                                    <h1 className="hero-title"> Who am I? </h1>
                                    <p className='aboutme-description'>
                                        I am a software engineer with a focus on fullstack development. I have a strong background in problem-solving and team collaboration. I am always looking for new challenges and opportunities to grow as a developer.
                                    </p>
                                </div>
                                <div className='image-aboutme-container'>
                                    <img className='image-aboutme' src='/imgs/yoformal.png' alt='Profile Picture' />
                                </div>
                            </div>
                            <h1 className="hero-title">
                                How I approach software engineering
                            </h1>
                            <div className="approaches-content">
                                <div className="approach-item">
                                    <h3 className="approach-title"> 01. Ownership </h3>
                                    <p className='approach-description'>
                                        I take responsibility for systems in production, from development to deployment and maintenance.
                                    </p>
                                </div>
                                <div className="approach-item">
                                    <h3 className="approach-title"> 02. Focus on delivery </h3>
                                    <p className='approach-description'>
                                        I value deep work and structured priorities to ensure consistent and predictable delivery.
                                    </p>
                                </div>
                                <div className="approach-item">
                                    <h3 className="approach-title"> 03. Quality & maintainability </h3>
                                    <p className='approach-description'>
                                        I aim to write code that can be understood, maintained, and extended over time.
                                    </p>
                                </div>
                                <div className="approach-item">
                                    <h3 className="approach-title"> 04. Practical automation </h3>
                                    <p className='approach-description'>
                                        I automate repetitive and error-prone processes to improve reliability and visibility.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <h1 className="aboutme-subtitle">
                                Fullstack Software Engineer with ~3 years of experience working on production systems
                            </h1>
                            <p className="aboutme-hero-description">
                                My work focuses on Angular and React frontends, Node.js and Python backends, SQL databases, CI/CD pipelines, and automation. 
                                <br />
                                I've worked on internal systems, reporting automation, and AI-powered solutions to improve visibility and decision-making. 
                                I'm interested in roles where autonomy, focus, and technical responsibility are valued.
                            </p>
                            
                            {/* Social Links */}

                            <h1 className="aboutme-subtitle">
                                Let's see my projects!
                            </h1>
                            <div className='container-projects-button'>
                                <button className="projects-button">
                                    View Projects &nbsp;&nbsp; <span className="arrow-icon">→</span>
                                </button>
                            </div>
                        </div>
                        
                        {/* <div className='flex justify-center sm:justify-center md:justify-start lg:justify-end'>
                            <div className="image-container">
                                <img src="/assets/about.jpg" alt="Gerardo" className="profile-image"/>
                                <div className="image-glow"></div>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Hobbies Section */}
            </div>
        </div>
    );
};

export default AboutMe;