import React, {  useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";




interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string[];
}


const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  if (!isOpen) return null;

  const stripHtmlTags = (str: string) => {
    return str.replace(/<[^>]*>/g, "");
  };

  const descriptionArray = Array.isArray(description)
    ? description.map(stripHtmlTags)
    : [stripHtmlTags(description)];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg w-full max-w-2xl max-h-[85vh] overflow-y-auto relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">{title}</h2>
        <div className="mb-6 text-gray-800 text-left">
          {descriptionArray.map((line, index) => (
            <p key={index} className="mb-4 text-sm md:text-lg">
              {line}
            </p>
          ))}
        </div>
        <button
          onClick={onClose}
          className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-300 text-sm md:text-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const MovingImages: React.FC = () => {
  const locations = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
      name: "Kigali"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
      name: "Gisenyi"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=60",
    name: "Butare"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=60",
      name: "Ruhengeri"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",
      name: "Kibuye"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=60",
      name: "Gitarama"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
      name: "Nyamata"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60",
      name: "Rwamagana"
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60",
      name: "Kibungo"
    }
  ];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll hover:pause">
        {locations.map((location, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-48 mx-4 relative group">
            <img
              src={location.image}
              alt={`Luxury Property in ${location.name}`}
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
              <div className="flex items-center justify-center space-x-2">
                <span className="font-semibold">{location.name}</span>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate locations for seamless loop */}
        {locations.map((location, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0 w-64 h-48 mx-4 relative group">
            <img
              src={location.image}
              alt={`Luxury Property in ${location.name}`}
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
              <div className="flex items-center justify-center space-x-2">
                <span className="font-semibold">{location.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MiddleOne: React.FC = () => {
  const [popupContent, setPopupContent] = useState<{
    title: string;
    description: string[];
  } | null>(null);

 

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Excellence in Luxury Living</h2>
        <p className="text-gray-600 mb-12 text-lg font-semibold">
          Rwanda's Kigali luxury real estate provider, offering exceptional properties with premium finishes, prime locations, and meticulous attention to detail. Your dream home awaits.
        </p>

        

        <MovingImages />

        {popupContent && (
          <Popup
            isOpen={!!popupContent}
            onClose={() => setPopupContent(null)}
            title={popupContent.title}
            description={popupContent.description}
          />
        )}
      </div>
    </section>
  );
};

export default MiddleOne;