import { motion } from 'framer-motion';
import { ExternalLink, Database, Cpu, Leaf, Droplets, Zap, Activity } from 'lucide-react';

const SectionHeader = ({ title }) => (
    <div className="mb-12 text-center">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {title}
        </h2>
        <div style={{ width: '60px', height: '3px', background: '#10b981', margin: '0 auto' }}></div>
    </div>
);

const ResearchItem = ({ title, subtitle, bullets }) => (
    <div style={{ marginBottom: '3rem', textAlign: 'left', background: 'rgba(10, 15, 20, 0.6)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10b981', marginBottom: '0.5rem' }}>{title}</h3>
        <h4 style={{ fontSize: '1.1rem', color: '#e0e0e0', marginBottom: '1.5rem', fontStyle: 'italic' }}>{subtitle}</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {bullets.map((bullet, index) => (
                <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d1d5db' }}>
                    <span style={{ color: '#10b981', marginTop: '0.25rem' }}>•</span>
                    <span>{bullet}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ProjectCard = ({ title, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <motion.div
            whileHover={{ y: -5, background: 'rgba(16, 185, 129, 0.15)' }}
            style={{
                background: 'rgba(10, 15, 20, 0.6)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
        >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', textAlign: 'center' }}>{title}</h3>
            <ExternalLink size={20} color="#10b981" />
        </motion.div>
    </a>
);

const OrgCard = ({ name, link, icon: Icon }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                border: '1px solid rgba(16, 185, 129, 0.1)'
            }}
        >
            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                <Icon size={32} color="#10b981" />
            </div>
            <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'white' }}>{name}</span>
        </motion.div>
    </a>
);

const ExperienceCard = ({ title, company, date, description }) => (
    <div style={{ background: 'rgba(10, 15, 20, 0.6)', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid #10b981', marginBottom: '2rem', textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'white' }}>{title}</h3>
                <h4 style={{ fontSize: '1.1rem', color: '#10b981' }}>{company}</h4>
            </div>
            <span style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.9rem', color: '#a7f3d0' }}>
                {date}
            </span>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {description.map((point, index) => (
                <li key={index} style={{ marginBottom: '0.75rem', color: '#d1d5db', display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: '#10b981' }}>•</span>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const WhatIDo = () => {
    return (
        <section id="whatido" style={{ padding: '8rem 1rem 5rem', position: 'relative' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* 1. Research */}
                <SectionHeader title="Research" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <ResearchItem
                        title="CWE (Center for Water & the Environment)"
                        subtitle="Metal Oxidation Kinetics of Iron and Manganese in Arctic Water Treatment Systems"
                        bullets={[
                            "Conduct controlled jar tests and UV-VIS/HACH analyses to quantify FE(II)/Mn(II) Oxidization, precipitation and removal efficiency across pH regimes.",
                            "Develop improved analytical protocols (e.g. concentration scaling, speciation methods) to overcome detection limits and measure trace metals like AS(II)/As(V)."
                        ]}
                    />
                    <ResearchItem
                        title="Techno-Economic Analysis of Vehicle-to-Grid Deployment"
                        subtitle="Texas Urban Regions Analysis"
                        bullets={[
                            "Building predictive models to estimate V2G participant uptake using demographic, EV Registration, and behavioural survey data to forecast grid-scale participation scenarios.",
                            "Implementing Monte Carlo simulations to quantify uncertainty in V2G deployment cost, revenue streams, and grid reliability impacts across multiple market and policy scenarios."
                        ]}
                    />
                </motion.div>

                {/* 2. Projects */}
                <div style={{ marginTop: '8rem' }}>
                    <SectionHeader title="Projects" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
                    >
                        <ProjectCard
                            title="RecAI - Real Time Waste Recognition for Post-Disaster Communities"
                            link="https://docs.google.com/presentation/d/1gLSmkXLguLZ5zx49pFIt-aExzPJttGWz/edit?usp=sharing&ouid=118137951694219537192&rtpof=true&sd=true"
                        />
                        <ProjectCard
                            title="Decentralized ADERS: Peer to Peer Energy Trading"
                            link="https://www.canva.com/design/DAHArMTIKsU/9k6l7s1wU1VOKeogkKBk3A/edit?utm_content=DAHArMTIKsU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        />
                        <ProjectCard
                            title="Humanitarian Product Design: Biodigestor Project"
                            link="https://docs.google.com/presentation/d/1-iy17BKwhEa1vFx65FHF1-Gw3NAE6cRNeIqUmo03eXU/edit?usp=sharing"
                        />
                    </motion.div>
                </div>

                {/* 3. Organizations */}
                <div style={{ marginTop: '8rem' }}>
                    <SectionHeader title="Organizations" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}
                    >
                        <OrgCard
                            name="NET Project"
                            link="https://netprojectaustin.wordpress.com/"
                            icon={Leaf}
                        />
                        <OrgCard
                            name="Engineers for a Sustainable World"
                            link="https://utexas.campuslabs.com/engage/organization/engineersforasustainableworld"
                            icon={Zap} // Using generic icons as placeholders
                        />
                        <OrgCard
                            name="Texas Club Tennis"
                            link="https://texasclubtennis.com/"
                            icon={Activity}
                        />
                    </motion.div>
                </div>

                {/* 4. Experience */}
                <div style={{ marginTop: '8rem' }}>
                    <SectionHeader title="Experiences" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ExperienceCard
                            title="Water Engineer Intern"
                            company="Wade Trim"
                            date="06/2025 – 08/2025"
                            description={[
                                "Supported water infrastructure and resource efficiency projects through pipeline design, flow modeling, and cost estimation.",
                                "Used Civil3D, Fathom, and ArcGIS to analyze water system performance and capacity planning pipelines.",
                                "Conducted QA/QC during site visits, supporting regulatory compliance, documentation accuracy, and risk mitigation."
                            ]}
                        />
                        <ExperienceCard
                            title="Sequestration Project Lead"
                            company="NET Project - UT Austin"
                            date="08/2024 – Present"
                            description={[
                                "Designed and tested sequestration systems to enhance CO2 absorption and ensure efficient integration with DAC(Direct Air Capture) processes.",
                                "Analyzed experimental data to evaluate the performance of wollastonite in capturing and storing atmospheric carbon dioxide."
                            ]}
                        />
                        <ExperienceCard
                            title="Founder"
                            company="ForMyEarth"
                            date="05/2023 – Present"
                            description={[
                                "Worked with local schools and community spaces to promote eco-friendly habits, reduce waste, and raise environmental awareness.",
                                "Designed and sold reusable products, contributing to plastic waste reduction and promoting sustainable living practices."
                            ]}
                        />
                        <ExperienceCard
                            title="Available Data"
                            company="Upcoming/Future Roles"
                            date="Future"
                            description={[
                                "Client Services & Lab Intern at ALS Environmental (06/2023 – 07/2023)",
                                "ESW Outreach Chair at Engineers for a Sustainable World (05/2025 – Present)",
                                "Project: Decentralized ADERS — AI for Grid Stability (05/2025 – Present)"
                            ]}
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WhatIDo;
