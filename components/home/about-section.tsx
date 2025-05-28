"use client";

import Image from "next/image";
import {Link} from '@/i18n/navigation';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staff } from "@/lib/data";
import {useTranslations} from 'next-intl';


export default function AboutSection() {
  const t =  useTranslations("HomePage");
  return (
    <section className="section bg-restaurant-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative fancy-border p-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="GoLab Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-restaurant-primary font-medium mb-2 inline-block">
              {t('about.title')}
            </span>
            <h2 className="mb-6">{t('about.subtitle')}</h2>
            <p className="mb-6">
            {t('about.description')}
            </p>
            <p className="mb-8">
              {t('about.description2')}
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl mb-6">{t('about.teamTitle')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {staff.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-medium">{member.name}</h4>
                    <p className="text-sm text-restaurant-dark/70">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Link href="/about" className="btn-outline inline-flex items-center">
              <span>{t('about.learnMore')}</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}