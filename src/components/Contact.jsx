import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 1rem', position: 'relative' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '3rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Get In Touch</h2>

                    {/* Icons Container */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        marginBottom: '3rem'
                    }}>
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/ritvick-palanikumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                textDecoration: 'none',
                                color: 'white',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{
                                padding: '1.5rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '50%',
                                border: '1px solid rgba(16, 185, 129, 0.3)'
                            }}>
                                <Linkedin size={40} color="#10b981" />
                            </div>
                            <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>LinkedIn</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:Ritvick.official@gmail.com"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                textDecoration: 'none',
                                color: 'white',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{
                                padding: '1.5rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '50%',
                                border: '1px solid rgba(16, 185, 129, 0.3)'
                            }}>
                                <Mail size={40} color="#10b981" />
                            </div>
                            <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Email Me</span>
                        </a>
                    </div>

                    {/* Phone Number */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '1rem 2rem',
                        borderRadius: '2rem',
                        display: 'inline-block',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <p style={{ fontSize: '1.2rem', color: '#e0e0e0', fontWeight: 500, letterSpacing: '0.05em' }}>
                            (214) 836-5446
                        </p>
                    </div>

                </motion.div>

                <footer style={{ marginTop: '5rem', color: '#6b7280', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Ritvick Palanikumar.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
