import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/yaelmedina32',
            icon: '/icons/github.svg',
            description: 'Check out my code',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/yael-de-leon-b8b11323a/',
            icon: '/icons/linkedin.svg',
            description: 'Professional network',
            color: '#0077b5'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/yaelmedina01',
            icon: '/icons/instagram.svg',
            description: 'Personal moments',
            color: '#e4405f'
        }
    ];

    return (
        <section className="social-section">
            <div className="social-container">
                {/* Header */}
                <div className="social-header">
                    <h2 className="social-title">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="social-subtitle">
                        Find me on these platforms or drop me a message
                    </p>
                </div>

                {/* Social Links Grid */}
                <div className="social-grid">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-card hover-lift"
                            style={{'--social-color': social.color}}
                        >
                            <div className="social-icon">
                                <img src={social.icon} alt={social.name} />
                            </div>
                            <div className="social-content">
                                <h3 className="social-name">{social.name}</h3>
                                <p className="social-description">{social.description}</p>
                            </div>
                            <div className="social-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="contact-section">
                    <div className="contact-card glass">
                        <h3 className="contact-title">Send me a message</h3>
                        <p className="contact-description">
                            Have a project in mind? Let's discuss how we can work together.
                        </p>
                        <form className="contact-form">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Your name" 
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="your.email@example.com" 
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    placeholder="Tell me about your project..." 
                                    className="form-textarea"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="form-submit hover-lift">
                                Send Message
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;