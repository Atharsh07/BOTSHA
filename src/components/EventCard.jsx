import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EventCard = ({ image, title,  date, description, moreDetail, instagramLink }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="bg-container-gradient rounded-xl overflow-hidden border border-cyan-500 shadow-md hover:shadow-[0_0_20px_#22d3ee] transition duration-300 cursor-pointer h-full flex flex-col w-full max-w-md min-h-[320px] sm:min-h-0"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="w-full aspect-[16/10] relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                />
            </div>

            <div className="px-6 py-4 text-center flex-1 flex flex-col min-h-[120px] sm:min-h-0">
                <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>

                <div className="flex items-center justify-center text-base text-cyan-300 mb-2">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    {date}
                </div>

                {instagramLink && (
                    <a
                        href={instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-2 inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-[0_0_20px_#ec4899] transition duration-300 transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View Rules
                    </a>
                )}

                <div className="min-h-[40px] flex-1">
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                className="text-base text-gray-300 leading-relaxed max-h-[250px] overflow-y-auto text-center"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="mb-3 text-center">{description}</p>
                                {moreDetail && (
                                    <>
                                        <p className="text-center">{moreDetail}</p>
                                        {title === "Paper Presentation" && (
                                            <a
                                                href="mailto:botsha25paperpresentation@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-[0_0_20px_#22d3ee] transition duration-300 transform hover:scale-105"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Submit Your Paper
                                            </a>
                                        )}
                                    </>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default EventCard;