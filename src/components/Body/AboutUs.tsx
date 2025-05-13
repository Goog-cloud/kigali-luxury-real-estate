import { useState } from "react";
import Values from "./Values";
import MissionVision from "./MissionVision";
import MiddleFive from "./MiddleFive";

function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <main className="flex-grow items-center justify-center pt-10 space-y-10">
      <section className="py-8 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <p className="text-left text-gray-700 leading-relaxed text-xl">
              <span className="font-bold">Kigali Luxury Real Estate</span> is Rwanda's premier luxury property
              consultancy, specializing in high-end residential and commercial real estate
              in Kigali's most prestigious neighborhoods. Since our establishment, we have
              been at the forefront of connecting discerning clients with exceptional
              properties that embody the perfect blend of luxury, comfort, and investment
              potential. Our deep understanding of Kigali's real estate market, combined
              with our commitment to excellence, makes us the trusted partner for those
              seeking to invest in or experience the finest properties Rwanda has to offer.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="container mx-auto py-8 md:py-16 px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              {["mission", "team", "values"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-sm md:text-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#001420] text-white rounded-t-lg mx-1 md:mx-5"
                      : "text-[#001420] hover:bg-gray-100 hover:text-[#001420]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-4 md:p-8">
              {activeTab === "mission" && <MissionVision />}
              {activeTab === "team" && <MiddleFive />}
              {activeTab === "values" && <Values />}
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

export default AboutUs;
