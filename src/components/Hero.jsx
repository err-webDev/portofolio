import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Mail, MessageCircle } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm md:text-base mb-4 block">
                            Selamat Datang di Portofolio Saya
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Christiano</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Seorang <span className="text-slate-200">Full Stack Engineer</span> & <span className="text-slate-200">Cybersecurity</span> yang bersemangat.
                            Membangun solusi web yang aman, modern, dan dapat diandalkan.
                        </p>

                        <div className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-6 mb-12">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-full transition-all flex items-center gap-2 group"
                            >
                                Lihat Karya Saya
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-transparent border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-full transition-all"
                            >
                                Hubungi Saya
                            </a>
                        </div>

                        <div className="flex items-center md:justify-start justify-center gap-6 text-slate-400">
                            <a href="https://github.com/err-webDev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://www.instagram.com/rhan_aja03" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="mailto:rhehanganz342@gmail.com" className="hover:text-cyan-400 transition-colors">
                                <Mail size={24} />
                            </a>
                            <a href="https://wa.me/085546511794" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                            <img
                                src={profileImg}
                                alt="Christiano"
                                className="relative w-full h-full object-cover rounded-full border-4 border-slate-900/50 shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
