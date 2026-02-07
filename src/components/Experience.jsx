import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Water Engineer Intern",
        company: "Wade Trim",
        date: "06/2025 – 08/2025",
        description: [
            "Supported water infrastructure and resource efficiency projects through pipeline design, flow modeling, and cost estimation.",
            "Used Civil3D, Fathom, and ArcGIS to analyze water system performance and capacity planning pipelines.",
            "Conducted QA/QC during site visits, supporting regulatory compliance, documentation accuracy, and risk mitigation."
        ]
    },
    {
        title: "Sequestration Project Lead",
        company: "NET Project - UT Austin",
        date: "08/2024 – Present",
        description: [
            "Designed and tested sequestration systems to enhance CO2 absorption and ensure efficient integration with DAC(Direct Air Capture) processes.",
            "Analyzed experimental data to evaluate the performance of wollastonite in capturing and storing atmospheric carbon dioxide."
        ]
    },
    {
        title: "Founder",
        company: "ForMyEarth",
        date: "05/2023 – Present",
        description: [
            "Worked with local schools and community spaces to promote eco-friendly habits, reduce waste, and raise environmental awareness.",
            "Designed and sold reusable products, contributing to plastic waste reduction and promoting sustainable living practices."
        ]
    },
    {
        title: "Available Data",
        company: "Upcoming/Future Roles",
        date: "Future",
        description: [
            "Client Services & Lab Intern at ALS Environmental (06/2023 – 07/2023)",
            "ESW Outreach Chair at Engineers for a Sustainable World (05/2025 – Present)",
            "Project: Decentralized ADERS — AI for Grid Stability (05/2025 – Present)"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
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
                    Experience
                </h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-green)' }}>{exp.title}</h3>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>{exp.company}</h4>
                                </div>
                                <span style={{
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    padding: '0.2rem 0.8rem',
                                    borderRadius: '1rem',
                                    color: 'var(--accent-green)',
                                    fontSize: '0.9rem'
                                }}>
                                    {exp.date}
                                </span>
                            </div>
                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)' }}>
                                {exp.description.map((point, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
