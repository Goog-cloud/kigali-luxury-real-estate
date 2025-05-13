import React, { useState } from 'react';
import { motion } from "framer-motion";

type Moral = {
  title: string;
  description: string;
  link: string;
};

const Morals: React.FC = () => {
  const [selectedMoral, setSelectedMoral] = useState<Moral | null>(null); 

  const moralsData: Moral[] = [
    {
      title: 'Excellence',
      description:
        'We are committed to delivering exceptional service and maintaining the highest standards in luxury real estate. Our attention to detail and dedication to quality ensures that every property we represent meets the most discerning standards.',
      link: 'Read more ',
    },
    {
      title: 'Integrity',
      description:
        'We conduct our business with unwavering honesty and transparency. Our clients trust us with their most significant investments, and we honor that trust through ethical practices and clear communication in all our dealings.',
      link: 'Read more ',
    },
    {
      title: 'Client-Centric',
      description:
        'We prioritize our clients\' needs and aspirations above all else. By understanding their unique requirements and preferences, we provide personalized service that exceeds expectations and creates lasting relationships.',
      link: 'Read more ',
    },
    {
      title: 'Innovation',
      description:
        'We embrace modern technology and innovative approaches to showcase luxury properties. Our forward-thinking methods ensure that we stay ahead in the competitive real estate market while providing cutting-edge solutions to our clients.',
      link: 'Read more ',
    },
    {
      title: 'Local Expertise',
      description:
        'Our deep understanding of Kigali\'s luxury real estate market sets us apart. We combine local knowledge with global standards to provide unmatched insights and opportunities for our clients in Rwanda\'s most prestigious neighborhoods.',
      link: 'Read more ',
    },
  ];

  const handleMoralClick = (moral: Moral) => { 
    setSelectedMoral(moral); 
  };

  const handleClosePopup = () => {
    setSelectedMoral(null); 
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-white"
      >
        <div className="max-w-6xl mx-auto text-left px-4">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-[#001420] mb-2"
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-500 mb-12"
          >
            The principles that guide our commitment to luxury real estate excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {moralsData.map((moral, index) => (
              <motion.div
                key={index}
                onClick={() => handleMoralClick(moral)}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-[#001420] mb-4">{moral.title}</h3>
                <p className="text-gray-700 text-l mb-6">
                  {moral.description.slice(0, 70)}{moral.description.length > 20 ? '...' : ''}
                </p>
                <motion.a
                  href="#"
                  className="text-[#001420] hover:underline"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMoralClick(moral)}
                >
                  {moral.link}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {selectedMoral && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> 
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit w-[55%]"> 
            <h3 className="text-xl font-semibold text-[#001420] mb-4">{selectedMoral.title}</h3>
            <p className="text-gray-700 mb-6">{selectedMoral.description}</p>
            <button onClick={handleClosePopup} className="text-red-500">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Morals;