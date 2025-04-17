import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { data } from "../assets/data";
import CountdownCard from "./CountdownCard";

const EventCard = lazy(() => import("./EventCard"));

const Events = () => {
    const [visibleEvents, setVisibleEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadEvents = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500));
            setVisibleEvents(data);
            setLoading(false);
        };
        loadEvents();
    }, []);

    return (
        <><CountdownCard /><motion.section
            id="Event"
            className="px-6 md:px-40 py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-shuriken text-cyan-400 text-center w-full mx-auto mb-10 drop-shadow-[0_0_10px_#22d3ee]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                EVENTS 🚀
            </motion.h2>
            <motion.h3 className="">
            </motion.h3>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.2,
                        },
                    },
                }}
                role="list"
                aria-label="Events list"
            >
                {loading
                    ? [...Array(6)].map((_, idx) => (
                        <motion.div
                            key={`skeleton-${idx}`}
                            className="w-full h-64 bg-gray-800 rounded-xl animate-pulse"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 0.5, y: 0 },
                            }} />
                    ))
                    : visibleEvents.map((event, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            role="listitem"
                        >
                            <Suspense fallback={<div className="w-full h-64 bg-gray-800 rounded-xl animate-pulse" />}>
                                <EventCard
                                    image={event.image}
                                    title={event.title}
                                    location={event.location}
                                    date={event.date}
                                    description={event.description}
                                    moreDetail={event.moreDetail}
                                    instagramLink={event.instagramLink}/>
                            </Suspense>
                        </motion.div>
                    ))}
            </motion.div>

        </motion.section></>
    );
};

export default Events;
