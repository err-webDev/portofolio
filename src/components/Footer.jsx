const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Christiano Ahmad Rhehan. Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="mt-2">Dibuat dengan React, Tailwind CSS & Framer Motion</p>
        </footer>
    );
};

export default Footer;
