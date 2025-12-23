import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Frontend",
        items: ["React.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "Framer Motion"],
        color: "from-cyan-400 to-cyan-600"
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Manajemen Database", "Desain API", "Otentikasi"],
        color: "from-purple-400 to-purple-600"
    },
    {
        category: "Alat & Keamanan",
        items: ["Git/GitHub", "Linux", "Keamanan Jaringan", "Dasar Penetration Testing", "VS Code"],
        color: "from-green-400 to-green-600"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-purple-500">Keahlian</span> Saya
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-600 transition-colors group"
                        >
                            <div className={`h-1 w-full bg-gradient-to-r ${skill.color} mb-6 rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />
                            <h3 className="text-2xl font-bold mb-6 text-slate-100">{skill.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-slate-500 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
