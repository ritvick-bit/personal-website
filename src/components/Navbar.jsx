import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', id: '#home' },
        { name: 'What I do', id: '#whatido' },
        { name: 'Contact', id: '#contact' },
    ];

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        backgroundColor: scrolled ? 'rgba(10, 15, 20, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={navStyle}
        >
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.id}
                            style={{
                                color: 'white',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#10b981'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
