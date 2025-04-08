import { motion } from "framer-motion";
import sponsorData from "../assets/sponsorData";

const Sponsors = () => {
    return (
        <motion.section
            id="OurSponsors"
            className="py-12 px-6 md:px-20 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 drop-shadow-[0_0_10px_#22d3ee]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                OUR SPONSORS
            </motion.h2>

            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center"
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
                viewport={{ once: true }}
            >
                {sponsorData.map((sponsor) => (
                    <motion.a
                        key={sponsor.id}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-105"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-32 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    </motion.a>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Sponsors;
