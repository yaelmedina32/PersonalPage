import { useState, useRef, useEffect } from 'react';
import './Abilities.css';



const projects = [
    {
        projectId: 'dctires',
        title: 'DCTires',
        description: 'Inventory and sales management system for a tire shop.',
        technologies: ['angular', 'nodejs', 'mysql', 'docker', 'git'],
        developingTime: '1.5 years (actual)',
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
        liveUrl: '/',
        repoUrl: 'https://github.com/yaelmedina32',
        caseStudyUrl: '#',
        highlights: ['Vite', 'Responsive', 'Routing'],
        keyLearnings: ['Keep content structured']
    },
    {
        projectId: 'ticket-system',
        title: 'Ticket Management System',
        description: 'System for managing support tickets in a company.',
        technologies: ['react', 'nodejs', 'sqlserver', 'docker', 'git', 'tailwind'],
        developingTime: '1 month',
    },
    {
        projectId: 'workflow-automation',
        title: "Workflow Automation",
        description: "Workflow automation tool for connecting different services.",
        technologies: ["nodejs", "n8n", "sqlserver", "gmail", "outlook"],
        developingTime: "6 months",
    },
    {
        projectId: 'ai-chatbot',
        title: "AI Chatbot",
        description: "AI-powered chatbot for customer support and automation.",
        technologies: ["python", "langchain", "gemini"],
        developingTime: "6 months",
    }
];


const Abilities = () => {
    const [_selectedTech, _setSelectedTech] = useState(null);
    const [_filteredProjects, _setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const projectsRef = useRef(null);

    

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
                } catch {
                    // Si no existe la imagen, intentar con .png
                    const pngPath = `/projects/${projectId}/image${i}.jpg`;
                    try {
                        const pngResponse = await fetch(pngPath);
                        if (pngResponse.ok) {
                            images.push(pngPath);
                        }
                    } catch {
                        // Continuar con la siguiente imagen
                        continue;
                    }
                }
            }
            return images;
        } catch {
            return [];
        }
    };

    const handleProjectClick = async (project) => {
        console.log(project);
        setSelectedProject(project);
        const images = await loadProjectImages(project.projectId);
        setGalleryImages(images);
        setCurrentImageIndex(0);
    
        setTimeout(() => {
            if (projectsRef.current) {
                projectsRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                    
                });
            }
        }, 100); // Pequeño delay para asegurar que el contenido se renderice
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

    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 1200 : true);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 1200);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    const list = _filteredProjects.length > 0 ? _filteredProjects : projects;
    const chunk = (arr, size) => {
        const out = [];
        for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
        return out;
    };

    

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
                        Technologies and tools I use to create innovative solutions.
                    </p>
{/*                     
                    <div className="projects-instruction">
                        <div className="instruction-icon">💡</div>
                        <p className="instruction-text">
                            <strong>Want to see my projects?</strong>
                            <br />
                            Click on any technology to discover the projects where I've used it.
                        </p>
                    </div> */}
                </div>

                {/* Projects Display - Agregamos la referencia aquí */}
                <div ref={projectsRef}>
                    {projects.length > 0 && (
                        <div className="projects-showcase">
                            <h3 className="showcase-title">
                                🚀 Projects I have worked on
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
                                {isMobile
                                    ? list.map((project) => (
                                        <div key={project.projectId}>
                                            <div 
                                                className={`project-card cursor-pointer ${selectedProject?.projectId === project.projectId ? 'selected' : ''}`}
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
                                                {project.projectId === 'portfolio' ? null : (
                                                    <div className="project-gallery-hint">
                                                        <span>🖼️ See Gallery</span>
                                                    </div>
                                                )}
                                            </div>
                                            {selectedProject?.projectId === project.projectId ? (
                                                <>
                                                    <br />
                                                    <div className={`selected-container ${selectedProject?.projectId ? 'show' : ''}`}>
                                                        <div className="selected-panel">
                                                            <div className="selected-header">
                                                                <h1 className="selected-title">{selectedProject.title}</h1>
                                                                <div className="selected-actions">
                                                                    {selectedProject.liveUrl && <a className="selected-button" href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>}
                                                                    {selectedProject.repoUrl && <a className="selected-button" href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">Repo</a>}
                                                                    {selectedProject.caseStudyUrl && <a className="selected-button" href={selectedProject.caseStudyUrl} target="_blank" rel="noopener noreferrer">Case study</a>}
                                                                </div>
                                                                <button className="selected-close" onClick={closeGallery}>✕</button>
                                                            </div>
                                                            <div className="selected-body">
                                                                <div className="selected-media">
                                                                    {galleryImages.length > 0 ? (
                                                                        <>
                                                                            <img 
                                                                                src={galleryImages[currentImageIndex]} 
                                                                                alt={`${selectedProject.title}`} 
                                                                                className="selected-image" 
                                                                            />
                                                                            {galleryImages.length > 1 && (
                                                                                <>
                                                                                    <button className="selected-nav selected-prev" onClick={prevImage}>‹</button>
                                                                                    <button className="selected-nav selected-next" onClick={nextImage}>›</button>
                                                                                </>
                                                                            )}
                                                                        </>
                                                                    ) : (
                                                                        <div className="selected-media-placeholder">No image</div>
                                                                    )}
                                                                </div>
                                                                <div className="selected-details">
                                                                    <ul className="selected-bullets">
                                                                        <li><span className="label">Issue</span><span className="value">{selectedProject.problem || 'Contexto del proyecto'}</span></li>
                                                                        <li><span className="label">Solution</span><span className="value">{selectedProject.solution || selectedProject.description}</span></li>
                                                                        <li><span className="label">Impact</span><span className="value">{selectedProject.impact || 'Resultados y métricas clave'}</span></li>
                                                                    </ul>
                                                                    <div className="selected-stack">
                                                                        {selectedProject.technologies.map((tech) => (
                                                                            <span key={tech} className="tech-tag">{tech}</span>
                                                                        ))}
                                                                    </div>
                                                                    {selectedProject.highlights && (
                                                                        <ul className="selected-highlights">
                                                                            {selectedProject.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="selected-footer">
                                                                {selectedProject.tagsExtra && (
                                                                    <div className="selected-tags">
                                                                        {selectedProject.tagsExtra.map((t, i) => <span key={i} className="tag">{t}</span>)}
                                                                    </div>
                                                                )}
                                                                {selectedProject.metrics && (
                                                                    <div className="selected-metrics">
                                                                        {selectedProject.metrics.map((m, i) => <span key={i} className="metric">{m}</span>)}
                                                                    </div>
                                                                )}
                                                                {selectedProject.keyLearnings && (
                                                                    <ul className="selected-learnings">
                                                                        {selectedProject.keyLearnings.map((l, i) => <li key={i}>{l}</li>)}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    ))
                                    : chunk(list, 3).map((row, rowIndex) => {
                                        const rowHasSelected = row.some(p => selectedProject?.projectId === p.projectId);
                                        return (
                                            <div key={`row-${rowIndex}`} style={{ display: 'contents' }}>
                                                {row.map((project) => (
                                                    <div
                                                        key={project.projectId}
                                                        className={`project-card cursor-pointer ${selectedProject?.projectId === project.projectId ? 'selected' : ''}`}
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
                                                        {project.projectId === 'portfolio' ? null : (
                                                            <div className="project-gallery-hint">
                                                                <span>🖼️ See Gallery</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                                {rowHasSelected ? (
                                                    <div className={`selected-container ${selectedProject?.projectId ? 'show' : ''}`} style={{ gridColumn: '1 / -1' }}>
                                                        <div className="selected-panel">
                                                            <div className="selected-header">
                                                                <h1 className="selected-title">{selectedProject.title}</h1>
                                                                <div className="selected-actions">
                                                                    {selectedProject.liveUrl && <a className="selected-button" href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>}
                                                                    {selectedProject.repoUrl && <a className="selected-button" href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">Repo</a>}
                                                                    {selectedProject.caseStudyUrl && <a className="selected-button" href={selectedProject.caseStudyUrl} target="_blank" rel="noopener noreferrer">Case study</a>}
                                                                </div>
                                                                <button className="selected-close" onClick={closeGallery}>✕</button>
                                                            </div>
                                                            <div className="selected-body">
                                                                <div className="selected-media">
                                                                    {galleryImages.length > 0 ? (
                                                                        <>
                                                                            <img 
                                                                                src={galleryImages[currentImageIndex]} 
                                                                                alt={`${selectedProject.title}`} 
                                                                                className="selected-image" 
                                                                            />
                                                                            {galleryImages.length > 1 && (
                                                                                <>
                                                                                    <button className="selected-nav selected-prev" onClick={prevImage}>‹</button>
                                                                                    <button className="selected-nav selected-next" onClick={nextImage}>›</button>
                                                                                </>
                                                                            )}
                                                                        </>
                                                                    ) : (
                                                                        <div className="selected-media-placeholder">No image</div>
                                                                    )}
                                                                </div>
                                                                <div className="selected-details">
                                                                    <ul className="selected-bullets">
                                                                        <li><span className="label">Issue</span><span className="value">{selectedProject.problem || 'Contexto del proyecto'}</span></li>
                                                                        <li><span className="label">Solution</span><span className="value">{selectedProject.solution || selectedProject.description}</span></li>
                                                                        <li><span className="label">Impact</span><span className="value">{selectedProject.impact || 'Resultados y métricas clave'}</span></li>
                                                                    </ul>
                                                                    <div className="selected-stack">
                                                                        {selectedProject.technologies.map((tech) => (
                                                                            <span key={tech} className="tech-tag">{tech}</span>
                                                                        ))}
                                                                    </div>
                                                                    {selectedProject.highlights && (
                                                                        <ul className="selected-highlights">
                                                                            {selectedProject.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="selected-footer">
                                                                {selectedProject.tagsExtra && (
                                                                    <div className="selected-tags">
                                                                        {selectedProject.tagsExtra.map((t, i) => <span key={i} className="tag">{t}</span>)}
                                                                    </div>
                                                                )}
                                                                {selectedProject.metrics && (
                                                                    <div className="selected-metrics">
                                                                        {selectedProject.metrics.map((m, i) => <span key={i} className="metric">{m}</span>)}
                                                                    </div>
                                                                )}
                                                                {selectedProject.keyLearnings && (
                                                                    <ul className="selected-learnings">
                                                                        {selectedProject.keyLearnings.map((l, i) => <li key={i}>{l}</li>)}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Abilities;
