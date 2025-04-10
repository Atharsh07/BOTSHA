import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const contactPersons = [
    {
      name: 'Prasanth N',
      phone: '+91 91594 26102',
      email: 'john@example.com',
    },
    {
      name: 'Aashique A S',
      phone: '+91 8765432109',
      email: 'jane@example.com',
    },
    {
      name: 'Barath kumar',
      phone: '+91 89257 03208',
      email: 'alice@example.com',
    },
  ];

  const insta = {
    label: '@rec.botsha',
    href: 'https://www.instagram.com/rec.botsha?igsh=MWdobzk4dzJwanBzaw==',
  };

  const deptEmail = {
    label: 'botsha@dept.edu',
    href: 'trsrec@rajalakshmi.edu.in',
  };

  return (
      <motion.footer
          id="Contact"
          className="bg-gray-900 text-white py-10 px-6 md:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Insta + Mail */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
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
                  </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.footer>
  );
};

export default Footer;
