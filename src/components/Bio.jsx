import { motion } from 'framer-motion';

const Bio = () => {
    return (
        <section id="bio" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    borderLeft: '5px solid var(--primary-green)',
                    paddingLeft: '1rem'
                }}>
                    Executive Bio
                </h2>

                <div className="glass-panel" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I am currently pursuing a <strong>Bachelor of Science in Environmental Engineering</strong> at <strong>The University of Texas at Austin</strong>, with minors in Statistics/Data Science & Humanitarian Engineering. I maintain a <strong>3.88/4.00 GPA</strong> and expect to graduate in May 2027.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        My passion lies in leveraging technology and engineering principles to solve pressing environmental challenges. I have hands-on experience in water infrastructure, resource efficiency, and carbon sequestration.
                    </p>
                    <p>
                        Beyond technical work, I am an entrepreneur and community leader. As the Founder of <strong>ForMyEarth</strong>, I've worked to promote eco-friendly habits and support green entrepreneurship. I also lead projects at UT Austin focused on CO2 sequestration and AI for grid stability.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Bio;
