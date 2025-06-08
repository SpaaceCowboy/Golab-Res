"use client";

import { useState } from "react";
import Image from "next/image";
import {Link} from '@/i18n/navigation';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories, menuItems, } from "@/lib/data";
import {useTranslations} from 'next-intl';

export default function FeaturedMenu() {
  const t =  useTranslations("HomePage");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const featuredItems = menuItems.filter(item => item.featured);

  const filteredItems = activeCategory === "All" 
    ? featuredItems 
    : featuredItems.filter(item => item.category === activeCategory);

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
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-[#015440] font-medium mb-2 inline-block">
            {t('featuredMenu.title')}
          </span>
          <h2 className="mb-4">{t('featuredMenu.subtitle')}</h2>
          <p className="max-w-2xl mx-auto">
          {t('featuredMenu.description')}
          </p>
        </div>
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeCategory === "All"
                ? "bg-[#015440] text-white"
                : "bg-gray-100 text-restaurant-dark hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {categories.slice(0, 5,).map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.name
                  ? "bg-[#015440] text-white"
                  : "bg-gray-100 text-restaurant-dark hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} className="menu-item-card" >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover menu-item-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-[#015440] text-white px-3 py-1 rounded-full text-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{item.name}</h3>
                </div>
                <p className="text-sm text-restaurant-dark/70 mb-4 line-clamp-2">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/menu" className="btn-primary inline-flex items-center">
            <span>{t('featuredMenu.viewFullMenu')}</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}