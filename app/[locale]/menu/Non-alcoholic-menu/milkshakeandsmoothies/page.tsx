"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { milkshakeandsmoothies,subcategory } from "@/lib/data";
import {useTranslations} from 'next-intl';
import { FoodSlider } from "@/components/menu/food-slider";
import { Link } from "@/i18n/routing";

export default function Milkshakeandsmoothies() {
  const t =  useTranslations("Menu");
  ["margarita", "mojito", "espressoMartini", "bikiniMartini"]
  const [searchTerm, setSearchTerm] = useState("");
  const categories = Array.from(new Set(milkshakeandsmoothies.map(item => item.category)));
  

    
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1    
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (

    <main>
      <Header />
    
    <section className="section bg-white">
      <div className="container-custom">
      <div className="flex gap-2  md:gap-8 justify-center   mt-10">
              {subcategory.map((subcategory) => (
                <Link 
                  href={`/${subcategory.link}`} 
                  key={subcategory.id}
                  className="bg-transparent border-2 text-[10px] border-[#015440] text-[#015440] px-2  md:px-6 py-1 md:py-3 rounded inline-block font-medium transition-all duration-300 hover:bg-white hover:text-restaurant-dark"
                 >
                  {subcategory.name}
                </Link>
                ))}
          </div>
                  <FoodSlider 
                    autoPlay={false} 
                    autoPlayInterval={5000}
                    className="fixed md:relative z-10 bg-white md:ml-[9%]"
                  />
        {!searchTerm && categories.map((category) => {
          const categoryItems = milkshakeandsmoothies.filter(item => item.category === category);
          
          return (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-medium mb-8 pb-2 border-b border-restaurant-primary/30 mt-[16vh] md:mt-[22vh] lg:mt-0">{category}</h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {categoryItems.map((menuItem) => (
                  <motion.div 
                    key={menuItem.id}
                    variants={item}
                    className="flex bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-1/3 relative">
                      <Image
                        src={menuItem.image}
                        alt={menuItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">{menuItem.name}</h3>
                        <span className="text-[#015440] font-medium">{menuItem.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 mb-2">{menuItem.description}</p>

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
    <Footer />
    </main>
  );
}