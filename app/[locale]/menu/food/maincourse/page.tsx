"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { maincourse } from "@/lib/data";
import {useTranslations} from 'next-intl';

export default function Maincourse() {
  const t =  useTranslations("Menu");
  ["margarita", "mojito", "espressoMartini", "bikiniMartini"]
  const [searchTerm, setSearchTerm] = useState("");
  const categories = Array.from(new Set(maincourse.map(item => item.category)));
  

    
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

        {!searchTerm && categories.map((category) => {
          const categoryItems = maincourse.filter(item => item.category === category);
          
          return (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-medium mb-8 pb-2 border-b border-restaurant-primary/30">{category}</h2>
              
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