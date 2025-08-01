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

    const hobbies = [
        { name: "Traveling", icon: "✈️" },
        { name: "Working out", icon: "💪" },
        { name: "Reading", icon: "📚" },
        { name: "Gaming", icon: "🎮" },
        { name: "Guitar", icon: "🎸" },
        { name: "Movies", icon: "🎬" }
    ];

    return (
        <div className="about-section">
            <div className="about-container">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="section-badge">
                                <span className="badge-dot"></span>
                                About me
                            </div>
                            <h1 className="hero-title">
                                I'm <span className="gradient-text">Gerardo</span>,
                                <br />a passionate developer
                            </h1>
                            <p className="hero-description">
                                I create digital experiences with clean code and modern design. 
                                I enjoy learning new technologies and applying them to solve real-world problems.
                            </p>
                            
                            {/* Social Links */}
                            <div className="social-links">
                                <a 
                                    href="https://www.linkedin.com/in/yael-de-leon-b8b11323a/" 
                                    target="_blank"
                                    className="social-link hover-lift"
                                    aria-label="LinkedIn"
                                >
                                    <img src="/icons/linkedin.svg" alt="LinkedIn" />
                                </a>
                                <a 
                                    href="https://github.com/yaelmedina32" 
                                    target="_blank"
                                    className="social-link hover-lift"
                                    aria-label="GitHub"
                                >
                                    <img src="/icons/github.svg" alt="GitHub" />
                                </a>
                                <a 
                                    href="https://www.instagram.com/yaelmedina01" 
                                    target="_blank"
                                    className="social-link hover-lift"
                                    aria-label="Instagram"
                                >
                                    <img src="/icons/instagram.svg" alt="Instagram" />
                                </a>
                            </div>
                        </div>
                        
                        <div className='flex justify-center sm:justify-center md:justify-start lg:justify-end'>
                            <div className="image-container">
                                <img src="/assets/about.jpg" alt="Gerardo" className="profile-image"/>
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills-section">
                    <div className="section-header">
                        <h2 className="section-title">Soft Skills</h2>
                        <p className="section-subtitle">
                            Personal qualities that drive my professional success
                        </p>
                    </div>
                    
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card hover-lift">
                                <div className="skill-icon">{skill.icon}</div>
                                <h3 className="skill-name">{skill.name}</h3>
                                <p className="skill-description">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hobbies Section */}
                <section className="hobbies-section">
                    <div className="hobbies-content">
                        <div className="hobbies-text">
                            <h2 className="section-title">Beyond Code</h2>
                            <p className="section-description">
                                When I'm not coding, you'll find me exploring new places, 
                                staying active, or diving into a good book. I believe in 
                                maintaining a healthy work-life balance.
                            </p>
                            
                            <div className="hobbies-grid">
                                {hobbies.map((hobby, index) => (
                                    <div key={index} className="hobby-item">
                                        <span className="hobby-icon">{hobby.icon}</span>
                                        <span className="hobby-name">{hobby.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="hobbies-image flex justify-center sm:justify-center md:justify-start lg:justify-end">
                            <div className="image-container">
                                <img src="/assets/iglesia.jpg" alt="Hobbies" className="hobby-image"/>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;