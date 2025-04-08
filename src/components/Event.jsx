import EventCard from "./EventCard";
import { data } from "../assets/data";
import { motion } from "framer-motion";

const Events = () => {
    return (
        <motion.section
            id="Event"
            className="px-6 md:px-40 py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-shuriken text-cyan-400 text-center mb-10 drop-shadow-[0_0_10px_#22d3ee]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                EVENTS 🚀
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {data.map((event, idx) => (
                    <motion.div
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <EventCard
                            image={event.image}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            description={event.description}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Events;
