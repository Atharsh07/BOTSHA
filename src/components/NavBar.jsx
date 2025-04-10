import {useState} from "react";
import {HiMenu, HiX} from "react-icons/hi";
import { motion } from "framer-motion";

const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const navLinks = [
        {href: "#Home", label: "HOME"},
        {href: "#OurSponsors", label: "OUR SPONSORS"},
        {href: "#Contact", label: "CONTACT"},
        {href: "https://docs.google.com/forms/d/e/1FAIpQLSecBjin_aoXPrAaR8pY7O4vj1oM9x9d07PkK-X_nLFBPw5mfw/viewform", label: "REGISTER"},
    ]
    return (
        <nav className='fixed top-0 left-0 right-0 md:left-40 md:right-40 bg-container-gradient backdrop-blur-sm z-50 border-b border-gray-100'>
            <style jsx="true">{`
                @keyframes menu-enter {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>

            <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20'>
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src="botsha-png.png"
                        alt="Botsha"
                        className="h-18 w-auto object-contain"
                    />
                </div>

                <button onClick={()=> setIsOpenMenu(!isOpenMenu)} className="md:hidden p-8 ">
                    {
                        isOpenMenu ? <HiX className="size-6"/> : <HiMenu className='size-6'/>
                    }
                </button>

                <div className="hidden md:flex items-center gap-10">
                    {
                        navLinks.map((link, index) => (
                            <a key={index} href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5
                                after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ?
                                "text-blue-600 after:w-full" : "text-white hover:text-white"}`}
                            >
                                {link.label}
                            </a>
                        ))
                    }
                </div>

                <button
                    className="hidden md:inline-block px-6 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-xl transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_#22d3ee] hover:scale-105">
                    <a href="#Event">EVENTS</a>
                </button>
            </div>

            {isOpenMenu && (
                <motion.div 
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden fixed inset-0 flex items-center justify-center bg-gray-900/70 z-50"
                    style={{ transform: 'translate(-50%, -20%)', top: '450%', left: '50%', width: '70%' }}
                >

                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="flex flex-col items-center justify-center space-y-8 px-8 py-12 bg-gray-800/90 rounded-2xl border border-cyan-400/30 w-[150%] max-w-md mx-auto my-auto text-center"
                    >
                        {navLinks.map((link, index) => (
                            <a
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsOpenMenu(false);
                                }}
                                key={index}
                                href={link.href}
                                className={`text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 ${
                                    activeLink === link.href
                                        ? "text-cyan-400 underline underline-offset-4"
                                        : "text-white hover:text-cyan-300"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#Event"
                            onClick={() => setIsOpenMenu(false)}
                            className="mt-4 px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_#22d3ee] hover:scale-105 text-center w-[80%]"
                        >
                            EVENTS
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
};

export default NavBar;
