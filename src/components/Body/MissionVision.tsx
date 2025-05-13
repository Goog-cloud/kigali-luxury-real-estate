import { motion } from "framer-motion";

function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-2"
        >
          Our Mission & Vision
        </motion.h2>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-500 mb-12"
        >
          Setting new standards in luxury real estate across Rwanda
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="bg-blue-100 rounded-full p-2 items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#001420] mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#001420] ml-4">
                Our Mission
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-700 leading-relaxed">
                To be the premier luxury real estate consultancy in Rwanda, connecting discerning clients with exceptional properties that embody the perfect blend of elegance, comfort, and investment potential. We are dedicated to providing unparalleled service, leveraging our deep market knowledge and global standards to ensure our clients' real estate aspirations are not just met, but exceeded.
              </p>
            </div>
          </div>

          <div className="bg-white border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-start mb-4">
              <div className="bg-blue-100 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-[#001420] mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#001420] ml-4">
                Our Vision
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-700 leading-relaxed">
                To redefine luxury living in Rwanda by setting new standards in real estate excellence. We envision a future where Kigali Luxury Real Estate is synonymous with exceptional properties, unmatched service, and innovative solutions that transform the way people experience and invest in premium real estate across Rwanda.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MissionVision;
