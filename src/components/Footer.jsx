import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const contactPersons = [
    {
      name: 'John Doe',
      phone: '+91 9876543210',
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      phone: '+91 8765432109',
      email: 'jane@example.com',
    },
    {
      name: 'Alice Johnson',
      phone: '+91 7654321098',
      email: 'alice@example.com',
    },
  ];

  const insta = {
    label: '@botsha_event',
    href: 'https://instagram.com/botsha_event',
  };

  const deptEmail = {
    label: 'botsha@dept.edu',
    href: 'mailto:botsha@dept.edu',
  };

  return (
      <motion.footer
          id="Contact"
          className="bg-gray-900 text-white py-10 px-6 md:px-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Insta + Mail */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Reach Us</h3>
            <div className="flex flex-col gap-4">
              <a
                  href={insta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-pink-400 transition"
              >
                <FaInstagram className="text-pink-500" />
                {insta.label}
              </a>
              <a
                  href={deptEmail.href}
                  className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <FaEnvelope className="text-cyan-300" />
                {deptEmail.label}
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Persons */}
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Contact Persons</h3>
            <ul className="space-y-4">
              {contactPersons.map((person, index) => (
                  <li key={index}>
                    <p className="font-semibold">{person.name}</p>
                    <p>
                      📞{' '}
                      <a href={`tel:${person.phone}`} className="hover:text-cyan-300">
                        {person.phone}
                      </a>
                    </p>
                    <p>
                      ✉️{' '}
                      <a href={`mailto:${person.email}`} className="hover:text-cyan-300">
                        {person.email}
                      </a>
                    </p>
                  </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.footer>
  );
};

export default Footer;
