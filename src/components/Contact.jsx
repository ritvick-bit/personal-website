import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center' }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Get In Touch</h2>

                <div className="glass-panel" style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    minWidth: '300px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                            <Phone size={24} color="var(--primary-green)" />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Phone</p>
                            <p style={{ fontSize: '1.2rem' }}>(214) 836-5446</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                            <Mail size={24} color="var(--primary-green)" />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</p>
                            <a href="mailto:Ritvick.official@gmail.com" style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Ritvick.official@gmail.com</a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                            <Linkedin size={24} color="var(--primary-green)" />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/ritvick-palanikumar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>
                                linkedin.com/in/ritvick-palanikumar
                            </a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                            <MapPin size={24} color="var(--primary-green)" />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Location</p>
                            <p style={{ fontSize: '1.2rem' }}>Austin, TX</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                <p>&copy; {new Date().getFullYear()} Ritvick Palanikumar. All rights reserved.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Designed with Green & Modern Theme</p>
            </footer>
        </section>
    );
};

export default Contact;
