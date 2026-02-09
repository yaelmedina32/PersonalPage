import React from 'react';
import './Presentation.css';

const downloadCV = () => {
    const cvUrl = '/assets/CV Gerardo Medina.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV Gerardo Medina.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const Presentation = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for work
                    </div>
                    <h1 className="hero-title">
                        I am <span className="gradient-text">Gerardo Medina</span>
                        <br />
                    </h1>
                    <p className="hero-description">
                        Fullstack Software Engineer focused on Automation, CI/CD and Applied AI
                    </p>
                    <div className="hero-actions">
                        <button className="btn-download hover-lift" onClick={downloadCV}>
                            Download CV
                        </button>
                        <button className="btn-primary hover-lift" onClick={() => window.location.href = '/social'}>
                            Let's talk
                        </button>
                        <button className="btn-secondary hover-lift" onClick={() => window.location.href = '/technologies'}>
                            View work
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-container">
                        <img src="/imgs/presentacion.png" alt="Gerardo" className="profile-image"/>
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;