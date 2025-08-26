import React from 'react';
import './Presentation.css';

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
                        Hi, I'm <span className="gradient-text">Gerardo</span>
                        <br />Web Developer
                    </h1>
                    <p className="hero-description">
                        I craft digital experiences with clean code and modern design.
                        Passionate about creating solutions that make a difference.
                    </p>
                    <div className="hero-actions">
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
                        <img src="/assets/yo.jpg" alt="Gerardo" className="profile-image"/>
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;