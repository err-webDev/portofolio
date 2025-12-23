import { motion } from "framer-motion";
import { User, Code, Globe, Shield } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Tentang <span className="text-cyan-400">Saya</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-20 transform rotate-3" />
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative z-10">
                            <h3 className="text-2xl font-bold mb-4 text-slate-100">Profil</h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-center gap-3">
                                    <User className="text-cyan-400" size={20} />
                                    <span>Christiano Ahmad Rhehan</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Code className="text-purple-400" size={20} />
                                    <span>Mahasiswa Teknik Informatika</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Globe className="text-blue-400" size={20} />
                                    <span>Pengembangan Web (Full Stack)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Shield className="text-green-400" size={20} />
                                    <span>Cybersecurity</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>
                                Halo! Saya seorang pengembang yang bersemangat dengan dasar yang kuat dalam <span className="text-cyan-400 font-semibold">Pengembangan Web</span> dan minat yang besar dalam <span className="text-purple-400 font-semibold">Keamanan Siber</span>.
                                Saat ini sedang menempuh pendidikan, saya suka mengeksplorasi perpaduan antara infrastruktur yang aman dan antarmuka pengguna yang indah.
                            </p>
                            <p>
                                Perjalanan saya dimulai dengan pengembangan frontend, menguasai React dan animasi, tetapi rasa ingin tahu membawa saya lebih dalam ke teknologi stack penuh.
                                Sekarang, saya membangun solusi web yang lengkap sambil mempelajari cara melindunginya dari ancaman digital.
                            </p>
                            <p>
                                Baik itu membuat UI yang presisi atau mengamankan endpoint API, saya menikmati setiap tantangan yang ada dalam dunia koding.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
