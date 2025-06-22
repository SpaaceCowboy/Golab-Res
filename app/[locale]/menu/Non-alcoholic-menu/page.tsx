import Image from "next/image";
import {Link} from '@/i18n/navigation';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MenuList from "@/components/menu/menu-list";
import { categories, subcategory } from "@/lib/data";
import {useTranslations} from 'next-intl';

export const metadata = {
  title: 'Menu | GoLab Restaurant',
  description: 'Explore our diverse menu featuring authentic cuisine prepared with the finest ingredients.',
};

export default function Nonalcoholicmenu() {
  const t =  useTranslations("Menu");
  
  return (
    <main>
      <Header />
      
      {/* Hero Banner 
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Menu Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-white mb-4">{t("title")}</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
              {t("subtitle")}
          </p>
        </div>
      </section>
      */}
      
      {/* Categories */}
      <section className="section bg-restaurant-light">
      <div className="flex gap-2 mt-10 md:gap-8 justify-center ">
            {subcategory.map((subcategory) => (
          <Link 
                href={`/${subcategory.link}`} 
                key={subcategory.id}
                className="bg-transparent border-2 text-sm border-[#015440] text-[#015440] px-2  md:px-6 py-1 md:py-3 rounded inline-block font-medium transition-all duration-300 hover:bg-white hover:text-restaurant-dark"
              >
                {subcategory.name}
              </Link>
              ))}
          </div>
        <div className="container-custom mt-10">
          <div className="text-center mb-12">
            <span className="text-[#015440] font-medium mb-2 inline-block">
            {t("selection")}
            </span>
            <h2>{t("categories")}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {categories.slice(14, 17).map((category) => (
              <Link 
                href={`${category.link}`} 
                key={category.id}
                className="group"
              >
                <div className="relative  h-20 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                    
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu List by Categories */}
      
      {/* Dietary Information */}

      
      <Footer />
    </main>
  );
}