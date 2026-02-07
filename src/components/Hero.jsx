import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: '#0a0f14'
        }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                background: 'linear-gradient(to bottom, #020617, #1e1b4b, #020617)',
                opacity: 0.8
            }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', padding: '0 1rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Top Line */}
                    <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: 'white', margin: '0 auto 1.5rem', opacity: 0.7 }}></div>

                    {/* Name */}
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        fontFamily: "'Montserrat', sans-serif"
                    }}>
                        Ritvick Palanikumar
                    </h1>

                    {/* Bottom Line */}
                    <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: 'white', margin: '1.5rem auto 2rem', opacity: 0.7 }}></div>

                    {/* Subtitle */}
                    <h2 style={{
                        fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
                        letterSpacing: '0.3em',
                        fontWeight: 300,
                        textTransform: 'uppercase',
                        color: '#e0e0e0'
                    }}>
                        Environmental Engineering | Data Scientist | Innovator
                    </h2>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block', color: '#e0e0e0' }}>Learn More</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
