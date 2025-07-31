import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    
    const projects = [
        {
            id: 1,
            title: "ERP Grupo Soldi",
            description: "Enterprise resource planning system for construction management with real-time analytics.",
            technologies: ["Angular", "Node.js", "SQL Server", "Docker"],
            category: "enterprise",
            status: "Live",
            duration: "2.5 years",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 2,
            title: "DCTires Management",
            description: "Inventory and sales management system for tire shop operations.",
            technologies: ["Angular", "Node.js", "MySQL", "Docker"],
            category: "web",
            status: "Live",
            duration: "4 months",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 3,
            title: "Real Estate CRM",
            description: "Client service system for house sales management with lead tracking.",
            technologies: ["React", "Node.js", "SQL Server"],
            category: "web",
            status: "Development",
            duration: "3 months",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 4,
            title: "Mobile ERP",
            description: "Mobile application for field operations and real-time data sync.",
            technologies: ["Flutter", "Node.js", "SQL Server"],
            category: "mobile",
            status: "Live",
            duration: "2 years",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 5,
            title: "Grupo Soldi API",
            description: "RESTful API backend for company website with content management.",
            technologies: ["Node.js", "SQL Server"],
            category: "backend",
            status: "Live",
            duration: "2 weeks",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 6,
            title: "Personal Portfolio",
            description: "Modern, responsive portfolio website showcasing my work.",
            technologies: ["React", "Tailwind CSS", "Vite"],
            category: "web",
            status: "Live",
            duration: "1 week",
            demoUrl: "#",
            codeUrl: "https://github.com/yaelmedina32"
        }
    ];

    const categories = [
        { id: 'all', name: 'All', count: projects.length },
        { id: 'enterprise', name: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length },
        { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length },
        { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
        { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="projects-section">
            <div className="projects-container">
                {/* Header */}
                <div className="section-header">
                    <h1 className="section-title">
                        <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="section-subtitle">
                        A collection of my recent work and technical expertise
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="filter-section">
                    <div className="filter-tabs">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                            >
                                {category.name}
                                <span className="tab-count">{category.count}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <span className={`status-indicator ${project.status.toLowerCase()}`}>
                                        {project.status}
                                    </span>
                                    <span className="project-duration">{project.duration}</span>
                                </div>
                            </div>
                            
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-actions">
                                <a href={project.demoUrl} className="action-link primary">
                                    View
                                </a>
                                <a href={project.codeUrl} className="action-link secondary">
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;