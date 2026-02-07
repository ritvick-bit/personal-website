import InteractivePhoto from './InteractivePhoto';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="section container" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '4rem',
            paddingTop: '8rem', // Clearance for navbar
        }}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ flex: 1 }}
            >
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 800,
                    background: 'linear-gradient(to right, var(--primary-green), var(--accent-green))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem',
                }}>
                    Ritvick Palanikumar
                </h1>
                <h2 style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2rem',
                }}>
                    Environmental Engineering Student & Innovator
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    marginBottom: '2rem',
                    color: 'var(--text-main)'
                }}>
                    Building sustainable solutions through engineering, data science, and green entrepreneurship.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#contact" style={{
                        padding: '0.8rem 2rem',
                        background: 'var(--primary-green)',
                        color: '#000',
                        borderRadius: '2rem',
                        fontWeight: 'bold',
                        border: 'none',
                    }}>
                        Get in Touch
                    </a>
                    <a href="#experience" style={{
                        padding: '0.8rem 2rem',
                        border: '1px solid var(--primary-green)',
                        borderRadius: '2rem',
                        fontWeight: 'bold',
                    }}>
                        View Work
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
            >
                <InteractivePhoto />
            </motion.div>
        </section>
    );
};

export default Hero;
