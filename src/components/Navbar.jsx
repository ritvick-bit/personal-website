import { Home, User, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const links = [
        { name: 'Home', icon: Home, id: '#home' },
        { name: 'Bio', icon: User, id: '#bio' },
        { name: 'Experience', icon: Briefcase, id: '#experience' },
        { name: 'Contact', icon: Mail, id: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
            }}
        >
            <ul style={{
                display: 'flex',
                gap: '2rem',
                listStyle: 'none',
                padding: '0.5rem 2rem',
                background: 'rgba(5, 24, 20, 0.8)',
                borderRadius: '2rem',
                border: '1px solid var(--secondary-green)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}>
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--text-main)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                            }}
                        >
                            <link.icon size={18} color="var(--primary-green)" />
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
