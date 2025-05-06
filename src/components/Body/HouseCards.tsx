import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HouseCard {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
}

const HouseCards: React.FC = () => {
  const [houses, setHouses] = useState<HouseCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockHouses: HouseCard[] = [
      {
        id: "1",
        title: "Modern Family Home",
        price: 90000,
        location: "123 Main Street, City",
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Beautiful modern home with spacious rooms and a large backyard."
      },
      {
        id: "2",
        title: "Luxury Apartment",
        price: 100000,
        location: "456 Park Avenue, Downtown",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Stunning apartment with city views and modern amenities."
      },
      {
        id: "3",
        title: "Cozy Cottage",
        price: 120000,
        location: "789 Country Road, Suburbs",
        bedrooms: 2,
        bathrooms: 1,
        area: 1200,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Charming cottage perfect for a small family or couple."
      }
    ];

    setHouses(mockHouses);
    setIsLoading(false);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Properties</h2>
        <p className="text-gray-600 text-center mb-12">
          Discover our selection of premium properties
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {formatPrice(house.price)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{house.title}</h3>
                <p className="text-gray-600 mb-4">{house.location}</p>
                
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{house.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{house.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{house.area} sqft</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{house.description}</p>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseCards; 