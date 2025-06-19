"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { categories } from '@/lib/data';
import {Link} from '@/i18n/navigation';

interface FoodCategory {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
}

const foodCategories: FoodCategory[] = [
  {
    id: 1,
    name: 'Kahvaltı',
    imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Breakfast specialties'
  },
  {
    id: 2,
    name: 'Başlangıç',
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Appetizers and starters'
  },
  {
    id: 3,
    name: 'Salata',
    imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Fresh salads'
  },
  {
    id: 4,
    name: 'Ana Yemek',
    imageUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Main dishes'
  },
  {
    id: 5,
    name: 'Tatlı',
    imageUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Desserts'
  },
  {
    id: 6,
    name: 'İçecek',
    imageUrl: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Beverages'
  }
  
];


interface FoodSliderProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function FoodSlider({ 
  autoPlay = true, 
  autoPlayInterval = 4000, 
  className 
}: FoodSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  // Initialize with a consistent default value for both server and client
  const [itemsPerView, setItemsPerView] = useState(4);

  // Get items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 3; // sm
      if (window.innerWidth < 768) return 3; // md
      if (window.innerWidth < 1024) return 4; // lg
      return 4; // xl and above
    }
    return 4;
  };

  // Update items per view after component mounts (client-side only)
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView());
    };

    // Set initial value after mount
    updateItemsPerView();

    // Add resize listener
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, foodCategories.length - itemsPerView);

  // Adjust currentIndex if maxIndex changes to prevent out-of-bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  }, [maxIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isHovered, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className={cn(
        "relative w-full max-w-4xl mx-auto py-6",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main slider container */}
      <div className="relative overflow-hidden mt-2 px-12">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(foodCategories.length * 100) / itemsPerView}%`
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {categories.map((categories) => (
            <Link 
              key={categories.id}
              href={`../${categories.link}`}
              
              className="flex-shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / foodCategories.length}%` }}
            >
              <div className="relative group cursor-pointer">
                {/* Circular image container */}
                <div className="relative height  md:h-[13vh]  max-w-[140px] sm:max-w-[160px] mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 p-[3px] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">

                      <div className="w-full h-full z-10 object-cover transition-transform duration-700 group-hover:scale-110"
                      >
                       <Image
                        src={categories.image}
                        alt={categories.name}
                        fill
                        loading="lazy"
                      />
                      </div>


                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      
                      {/* Category name overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-white font-semibold text-[8px] sm:text-base text-center drop-shadow-lg">
                          {categories.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-md hover:shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed border border-gray-100"
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-md hover:shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed border border-gray-100"
        disabled={currentIndex === maxIndex}
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 text-gray-700" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4 space-x-1.5">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-green-600 w-6" 
                : "bg-gray-300 hover:bg-gray-400 w-1.5"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}