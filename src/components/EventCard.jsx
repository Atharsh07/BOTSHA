import { useState } from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EventCard = ({ image, title,  date, description, moreDetail }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="bg-container-gradient rounded-xl overflow-hidden border border-cyan-500 shadow-md hover:shadow-[0_0_20px_#22d3ee] transition duration-300 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="aspect-w-2 aspect-h-1 w-full">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full rounded-t-xl"
                />
            </div>

            <div className="px-4 py-3 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>


                <div className="flex items-center justify-center text-sm text-cyan-300 mb-2">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {date}
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.p
                            className="text-sm text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {description}
                        </motion.p>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.p
                            className="text-sm text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {moreDetail}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default EventCard;
