import { motion } from 'framer-motion';

const Bio = () => {
    return (
        <section id="bio" style={{ padding: '5rem 1rem', background: '#0f141a', textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
                        Hi! I'm a student at <a href="https://www.utexas.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'underline', textUnderlineOffset: '4px' }}>The University of Texas at Austin</a> studying Environmental Engineering and Statistics/Data Science. I’m interested in the intersection of climate technology, environmental systems, and computational modeling.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
                        I work at the intersection of sustainability and engineering, with experience in energy grid simulations, carbon sequestration research, flow modeling, pipeline infrastructure mapping, and low-cost sustainable technology development for resource-constrained settings. I’m also exploring research opportunities in environmental and energy systems, particularly where engineering meets societal impact.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                        Outside of school, I enjoy cooking, playing tennis, and exploring prediction markets and sports betting on platforms like <a href="https://kalshi.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'underline', textUnderlineOffset: '4px' }}>Kalshi</a> and <a href="https://polymarket.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'underline', textUnderlineOffset: '4px' }}>Polymarket</a>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Bio;
