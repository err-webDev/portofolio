import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Hubungi <span className="text-purple-500">Saya</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <h3 className="text-2xl font-bold mb-6 text-slate-100">Hubungi Saya</h3>
                            <p className="text-slate-400 mb-8">
                                Saya saat ini terbuka untuk proyek freelance dan peluang kerja baru.
                                Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Email</p>
                                        <p className="font-medium">rhehanganz342@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-purple-400">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Telepon</p>
                                        <p className="font-medium">+62 855 4651 1794</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-green-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Lokasi</p>
                                        <p className="font-medium">Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Nama Anda</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Email Anda</label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Pesan</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                                />
                            </div>
                            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2">
                                Kirim Pesan
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
