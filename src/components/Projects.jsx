import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Aman",
        description: "Platform e-commerce full-stack dengan fokus pada otentikasi aman dan pemrosesan pembayaran.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Pemindai Kerentanan",
        description: "Alat berbasis Python untuk memindai aplikasi web dari kerentanan keamanan umum.",
        tags: ["Python", "Keamanan", "Otomatisasi"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Portofolio V1",
        description: "Website portofolio pertama saya yang dibuat dengan HTML/CSS dan JavaScript sederhana.",
        tags: ["HTML", "CSS", "JavaScript"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-cyan-400">Proyek</span> Saya
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.links.code} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                        <Github size={16} /> Kode
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                                        <ExternalLink size={16} /> Demo Langsung
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
