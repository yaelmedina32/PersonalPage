import { useState, useRef, useEffect } from 'react';
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
        projectId: 'dctires',
        title: 'DCTires',
        description: 'Inventory and sales management system for a tire shop.',
        technologies: ['angular', 'nodejs', 'mysql', 'docker', 'git'],
        developingTime: '4 months',
    },
    {
        projectId: 'client-service',
        title: 'Client Service System',
        description: 'System for managing client service requests for a real estate company.',
        technologies: ['react', 'nodejs', 'sqlserver', 'git'],
        developingTime: '3 months',
    },
    {
        projectId: 'soldi-backend',
        title: "Grupo Soldi's Backend",
        description: 'RESTful API for managing the website of Grupo Soldi.',
        technologies: ['nodejs', 'sqlserver'],
        developingTime: '2 weeks',
    },
    {
        projectId: 'erp-soldi',
        title: 'ERP for Grupo Soldi',
        description: 'Enterprise Resource Planning system for Grupo Soldi.',
        technologies: ['angular', 'nodejs', 'sqlserver', 'docker', 'git'],
        developingTime: '3 years (actual)',
    },
    {
        projectId: 'mobile-erp',
        title: 'Mobile ERP',
        description: 'Mobile App for business processes in Grupo Soldi.',
        technologies: ['flutter', 'nodejs', 'sqlserver', 'docker', 'git'],
        developingTime: '2 years (actual)',
    },
    {
        projectId: 'portfolio',
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing my work.',
        technologies: ['react', 'tailwind'],
        developingTime: '1 week',
    },
    {
        projectId: 'ticket-system',
        title: 'Ticket Management System',
        description: 'System for managing support tickets in a company.',
        technologies: ['react', 'nodejs', 'sqlserver', 'docker', 'git', 'tailwind'],
        developingTime: '1 month',
    },
];


const Abilities = () => {
    const [selectedTech, setSelectedTech] = useState(null);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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

    const loadProjectImages = async (projectId) => {
        try {
            const images = [];
            // Intentar cargar hasta 10 imágenes (puedes ajustar este número)
            const contadorMax = projectId === 'mobile-erp' ? 2 : projectId === 'ticket-system' ? 4 : 3;
            for (let i = 1; i <= contadorMax; i++) {
                const imagePath = `/imgs/projects/${projectId}/image${i}.png`;
                try {
                    const response = await fetch(imagePath);
                    if (response.ok) {
                        images.push(imagePath);
                    }
                } catch (error) {
                    // Si no existe la imagen, intentar con .png
                    const pngPath = `/projects/${projectId}/image${i}.jpg`;
                    try {
                        const pngResponse = await fetch(pngPath);
                        if (pngResponse.ok) {
                            images.push(pngPath);
                        }
                    } catch (pngError) {
                        // Continuar con la siguiente imagen
                        continue;
                    }
                }
            }
            console.log(images);
            return images;
        } catch (error) {
            console.log('Error loading images:', error);
            return [];
        }
    };

    const handleProjectClick = async (project) => {
        setSelectedProject(project);
        const images = await loadProjectImages(project.projectId);
        setGalleryImages(images);
        setCurrentImageIndex(0);
        setIsGalleryOpen(true);
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
        setSelectedProject(null);
        setGalleryImages([]);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );
    };

    // Manejar teclas del teclado para navegación
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isGalleryOpen) return;
            
            switch (e.key) {
                case 'Escape':
                    closeGallery();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isGalleryOpen, galleryImages.length]);

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
                                🚀 Projects using {technologies.find(t => t.id === selectedTech)?.name}
                            </h3>
                            <div className="projects-instruction-gallery">
                                <div className="instruction-icon">📸</div>
                                <p className="instruction-text">
                                    <strong>¡Explore the gallery!</strong>
                                    <br />
                                    Click on any project to see screenshots and visual details.
                                </p>
                            </div>
                            <div className="projects-grid">
                                {filteredProjects.map((project, index) => (
                                    <div 
                                        key={index} 
                                        className="project-card cursor-pointer"
                                        onClick={() => handleProjectClick(project)}
                                    >
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
                                        {
                                            project.projectId === 'portfolio' ? (
                                                null
                                                
                                            ) : <div className="project-gallery-hint">
                                                    <span>🖼️ See Gallery</span>
                                                </div>
                                        }
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

            {/* Galería Modal */}
            {isGalleryOpen && selectedProject && (
                <div className="gallery-modal" onClick={closeGallery}>
                    <div className="gallery-overlay"></div>
                    <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
                        <div className="gallery-header">
                            <div className="gallery-project-info">
                                <h3 className="gallery-title">{selectedProject.title}</h3>
                                <p className="gallery-description">{selectedProject.description}</p>
                            </div>
                            <button className="gallery-close" onClick={closeGallery}>
                                ✕
                            </button>
                        </div>
                        
                        {galleryImages.length > 0 ? (
                            <div className="gallery-content">
                                <div className="gallery-image-container">
                                    <img 
                                        src={galleryImages[currentImageIndex]} 
                                        alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1} - ${galleryImages[currentImageIndex]}`}
                                        className="gallery-image"
                                    />
                                    
                                    {galleryImages.length > 1 && (
                                        <>
                                            <button className="gallery-nav gallery-prev" onClick={prevImage}>
                                                ‹
                                            </button>
                                            <button className="gallery-nav gallery-next" onClick={nextImage}>
                                                ›
                                            </button>
                                        </>
                                    )}
                                </div>
                                
                                {galleryImages.length > 1 && (
                                    <div className="gallery-indicators">
                                        {galleryImages.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`gallery-indicator ${
                                                    index === currentImageIndex ? 'active' : ''
                                                }`}
                                                onClick={() => setCurrentImageIndex(index)}
                                            ></button>
                                        ))}
                                    </div>
                                )}
                                
                                <div className="gallery-counter">
                                    {currentImageIndex + 1} / {galleryImages.length}
                                </div>
                            </div>
                        ) : (
                            <div className="gallery-no-images">
                                <div className="no-images-icon">📷</div>
                                <h4>No hay imágenes disponibles</h4>
                                <p>Las imágenes para este proyecto aún no han sido cargadas.</p>
                                <small>Busca imágenes en: /public/projects/{selectedProject.projectId}/</small>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Abilities;