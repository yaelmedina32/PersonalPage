import { useState, useRef } from 'react';
import './Abilities.css';

const technologies = [
    {
        id: 'angular',
        name: 'Angular',
        icon: '/imgs/Angular.png',
        description: 'Framework for building dynamic web applications',
        category: 'Frontend',
        experience: '3 years'
    },
    {
        id: 'react',
        name: 'React',
        icon: '/imgs/React.png',
        description: 'Library for building user interfaces',
        category: 'Frontend',
        experience: '1 year'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        icon: '/imgs/NodeJS.svg',
        description: 'JavaScript runtime for building APIs and microservices',
        category: 'Backend',
        experience: '3 years'
    },
    {
        id: 'mysql',
        name: 'MySQL',
        icon: '/imgs/Mysql.png',
        description: 'Relational database management system',
        category: 'Database',
        experience: '2 years'
    },
    {
        id: 'sqlserver',
        name: 'SQL Server',
        icon: '/imgs/SqlServer.png',
        description: 'Microsoft relational database platform',
        category: 'Database',
        experience: '3 years'
    },
    {
        id: 'flutter',
        name: 'Flutter',
        icon: '/imgs/Flutter.svg',
        description: 'Cross-platform mobile development framework',
        category: 'Mobile',
        experience: '2 years'
    },
    {
        id: 'docker',
        name: 'Docker',
        icon: '/imgs/Docker.svg',
        description: 'Containerization platform for deployment',
        category: 'DevOps',
        experience: '1 year'
    },
    {
        id: 'git',
        name: 'Git',
        icon: '/imgs/gitlab.svg',
        description: 'Version control system for code management',
        category: 'Tools',
        experience: '3 years'
    },
    
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        icon: '/imgs/tailwind.png',
        description: 'Utility-first CSS framework for rapid UI development',
        category: 'Frontend',
        experience: '1 year'
    },
];



const projects = [
    {
        title: 'DCTires',
        description: 'Inventory and sales management system for a tire shop.',
        technologies: ['angular', 'nodejs', 'mysql', 'docker', 'git'],
        developingTime: '4 months',
    },
    {
        title: 'Client Service System',
        description: 'System for managing client service requests for a real estate company.',
        technologies: ['react', 'nodejs', 'sqlserver', 'git'],
        developingTime: '3 months',
    },
    {
        title: "Grupo Soldi's Backend",
        description: 'RESTful API for managing the website of Grupo Soldi.',
        technologies: ['nodejs', 'sqlserver'],
        developingTime: '2 weeks',
    },
    {
        title: 'ERP for Grupo Soldi',
        description: 'Enterprise Resource Planning system for Grupo Soldi.',
        technologies: ['angular', 'nodejs', 'sqlserver', 'docker', 'git'],
        developingTime: '3 years (actual)',
    },
    {
        title: 'Mobile ERP',
        description: 'Mobile App for business processes in Grupo Soldi.',
        technologies: ['flutter', 'nodejs', 'sqlserver', 'docker', 'git'],
        developingTime: '2 years (actual)',
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing my work.',
        technologies: ['react', 'tailwind'],
        developingTime: '1 week',
    },
    {
        title: 'Ticket Management System',
        description: 'System for managing support tickets in a company.',
        technologies: ['react', 'nodejs', 'sqlserver', 'docker', 'git', 'tailwind'],
        developingTime: '1 month',
    },
];


const Abilities = () => {
    const [selectedTech, setSelectedTech] = useState(null);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const projectsRef = useRef(null);

    const handleTechClick = (techId) => {
        if (selectedTech === techId) {
            setSelectedTech(null);
            setFilteredProjects([]);
        } else {
            setSelectedTech(techId);
            const filtered = projects.filter(project => 
                project.technologies.includes(techId)
            );
            setFilteredProjects(filtered);
            
            // Auto-scroll hacia la sección de proyectos
            setTimeout(() => {
                if (projectsRef.current) {
                    projectsRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100); // Pequeño delay para asegurar que el contenido se renderice
        }
    };

    const categories = [...new Set(technologies.map(tech => tech.category))];

    return (
        <section className="abilities-section">
            <div className="abilities-container">
                {/* Header */}
                <div className="section-header">
                    <div className="section-badge">
                        <div className="badge-dot"></div>
                        <span>Skills & Technologies</span>
                    </div>
                    <h2 className="section-title">
                        <span className="gradient-text">Technical Expertise</span>
                    </h2>
                    <p className="section-subtitle">
                        Tecnologías y herramientas que uso para crear soluciones innovadoras.
                    </p>
                    
                    {/* Instrucción destacada para ver proyectos */}
                    <div className="projects-instruction">
                        <div className="instruction-icon">💡</div>
                        <p className="instruction-text">
                            <strong>Want to see my projects?</strong>
                            <br />
                            Click on any technology to discover the projects where I've used it.
                        </p>
                    </div>
                </div>

                {/* Technologies Grid */}
                <div className="technologies-grid">
                    {categories.map(category => (
                        <div key={category} className="category-section">
                            <h3 className="category-title">{category}</h3>
                            <div className="tech-cards">
                                {technologies
                                    .filter(tech => tech.category === category)
                                    .map(tech => (
                                    <div 
                                        key={tech.id}
                                        className={`tech-card ${
                                            selectedTech === tech.id ? 'active' : ''
                                        }`}
                                        onClick={() => handleTechClick(tech.id)}
                                    >
                                        <div className="tech-icon">
                                            <img src={tech.icon} alt={tech.name} />
                                        </div>
                                        <div className="tech-info">
                                            <h4 className="tech-name">{tech.name}</h4>
                                            <p className="tech-description">{tech.description}</p>
                                            <span className="tech-experience">{tech.experience}</span>
                                        </div>
                                        <div className="click-indicator">
                                            <span>👆 Click to see projects</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects Display - Agregamos la referencia aquí */}
                <div ref={projectsRef}>
                    {filteredProjects.length > 0 && (
                        <div className="projects-showcase">
                            <h3 className="showcase-title">
                                🚀 Proyectos usando {technologies.find(t => t.id === selectedTech)?.name}
                            </h3>
                            <div className="projects-grid">
                                {filteredProjects.map((project, index) => (
                                    <div key={index} className="project-card">
                                        <div className="project-header">
                                            <h4 className="project-title">{project.title}</h4>
                                            <span className="project-duration">{project.developingTime}</span>
                                        </div>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mensaje cuando no hay tecnología seleccionada */}
                    {!selectedTech && (
                        <div className="no-selection-message">
                            <div className="message-icon">🎯</div>
                            <h3>Selecciona una tecnología</h3>
                            <p>Haz clic en cualquiera de las tecnologías de arriba para ver los proyectos relacionados.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Abilities;