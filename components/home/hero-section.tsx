"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {Link} from '@/i18n/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

const slides = [
  {
    id: 1,
    title: "Authentic Cuisine",
    subtitle: "Experience the true flavors of traditional cooking",
    image: "https://golabrestaurant.com/wp-content/uploads/2023/10/img_1472_1685464361.jpg",
  },
  {
    id: 2,
    title: "Elegant Dining",
    subtitle: "Immerse yourself in our warm and inviting atmosphere",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Master Chefs",
    subtitle: "Our culinary experts craft every dish with passion",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function HeroSection() {
  const t = useTranslations("HomePage")
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider Background */}
      
        <div
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://golabrestaurant.com/wp-content/uploads/2023/11/EZ_00498-2-1.jpg"
            alt="Elegant Dining"
            fill
            className="object-cover"
            priority
          />
        </div>
      

      {/* Content */}
      <div className="container-custom relative z-20 h-full flex flex-col justify-center">
        
          <div
            className="max-w-2xl"
          >
            <span className="inline-block text-[#015440] font-medium text-lg md:text-xl mb-4">
              {t("welcome")}
            </span>
            <h1 className="text-white mb-6">
            {t("heroSlides.slide1.title")}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              {t("heroSlides.slide1.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="btn-primary">
              {t("viewMenu")}
              </Link>
              <Link 
                href="/reservation" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded inline-block font-medium transition-all duration-300 hover:bg-white hover:text-restaurant-dark"
              >
                {t("bookTable")}
              </Link>
            </div>
          </div>
        
      </div>
      {/*
      {/* Slider Indicators   
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container-custom">
          <div className="flex justify-center space-x-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-restaurant-primary w-8"
                    : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      */}
    </section>
  );
}