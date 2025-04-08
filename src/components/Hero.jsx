import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section
            id="Home"
            className="flex flex-col md:flex-row items-center justify-between px-6 md:px-40 pt-20 md:pt-30 pb-20 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Brand Image */}
            <motion.div
                className="flex justify-center md:w-1/2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <img src={"botsha-png.png"} alt="botsha" className="md:h-100 w-120 h-70 md:w-120" />
            </motion.div>

            {/* Text Content */}
            <motion.div
                className="text-center md:text-left md:w-1/2 space-y-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* First Line - Glowing White */}
                <h2 className="text-xl md:text-2xl font-orbitron text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] tracking-wider">
                    National Level Technical Symposium <br />
                    hosted by
                </h2>

                {/* Second Line - ROBOTICS Glowing Extra */}
                <p className="text-cyan-400 text-3xl md:text-5xl font-shuriken leading-tight">
          <span className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee] font-shuriken">
            ROBOTICS
          </span>{" "}
                    AND AUTOMATION DEPARTMENT
                </p>

                {/* Date & Location */}
                <h3 className="text-gray-400 text-lg md:text-xl font-semibold font-shuriken leading-tight">
                    📅 April 17, 2025 • 📍 REC Campus
                </h3>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 md:inline-block px-6 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-xl transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_#22d3ee]"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSecBjin_aoXPrAaR8pY7O4vj1oM9x9d07PkK-X_nLFBPw5mfw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        REGISTER
                    </a>
                </motion.button>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
