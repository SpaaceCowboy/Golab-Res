"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Check, Info, Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { location } from "@/lib/data";
import { useTranslations } from "next-intl";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM", "5:00 PM", "5:30 PM", 
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", 
  "8:00 PM", "8:30 PM", "9:00 PM"
];

export default function ReservationPage() {
  const t = useTranslations("Reservation")
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    occasion: "",
    specialRequests: "",
    termsAccepted: false,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.phone) newErrors.phone = "Please enter your phone number";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, this would send data to a backend
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Reservation Banner"
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
      
      {submitted ? (
        <section className="section bg-restaurant-light">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              
              <h2 className="text-3xl font-medium mb-4">{t("form.success.title")}</h2>
              <p className="text-lg mb-6">
              {t("form.success.message")}
              </p>
              
              <div className="bg-restaurant-light p-6 rounded-lg mb-8 text-left">
                <h3 className="text-xl font-medium mb-4">{t("form.success.details")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">{t("form.success.date")}</p>
                    <p className="font-medium">{formData.date} at {formData.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("form.success.guests")}</p>
                    <p className="font-medium">{formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("form.success.Reserved")}</p>
                    <p className="font-medium">{formData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("form.success.contact")}</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  {formData.occasion && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">{t("form.success.occasion")}</p>
                      <p className="font-medium">{formData.occasion}</p>
                    </div>
                  )}
                  {formData.specialRequests && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">{t("form.success.request")}</p>
                      <p className="font-medium">{formData.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-start mb-8 bg-blue-50 p-4 rounded-lg">
                <Info size={24} className="text-blue-500 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-medium text-blue-700">{t("form.success.confirmation")}</p>
                  <p className="text-blue-600 text-sm">
                  {t("form.success.description")}
                  </p>
                </div>
              </div>
              
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="section bg-restaurant-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-medium mb-6">{t("form.reserve")}</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-restaurant-dark mb-1">
                        {t("form.date")} *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Calendar size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={`w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary ${
                              errors.date ? "border-red-500" : "border-gray-300"
                            }`}
                          />
                        </div>
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-restaurant-dark mb-1">
                        {t("form.time")} *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Clock size={18} className="text-gray-400" />
                          </div>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className={`w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary ${
                              errors.time ? "border-red-500" : "border-gray-300"
                            }`}
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                        {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-restaurant-dark mb-1">
                        {t("form.guests")} *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Users size={18} className="text-gray-400" />
                          </div>
                          <select
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                            ))}
                            <option value="11">More than 10 (We'll contact you)</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="occasion" className="block text-sm font-medium text-restaurant-dark mb-1">
                        {t("form.occasion")}
                        </label>
                        <select
                          id="occasion"
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                        >
                          <option value="">{t("form.for.ocassion")}</option>
                          <option value="Birthday">{t("form.for.birthday")}</option>
                          <option value="Anniversary">{t("form.for.anniversary")}</option>
                          <option value="Date Night">{t("form.for.date")}</option>
                          <option value="Business Meal">{t("form.for.business")}</option>
                          <option value="Other">{t("form.for.other")}</option>
                        </select>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4">{t("form.contactinf")}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-restaurant-dark mb-1">
                        {t("form.name")}*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-restaurant-dark mb-1">
                        {t("form.email")} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-restaurant-dark mb-1">
                        {t("form.phone")}*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-restaurant-dark mb-1">
                      {t("form.specialRequests")}
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                        placeholder={t("form.allergy")}
                      ></textarea>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="termsAccepted"
                            name="termsAccepted"
                            type="checkbox"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className={`w-4 h-4 text-restaurant-primary bg-gray-100 border-gray-300 rounded focus:ring-restaurant-primary focus:ring-2 ${
                              errors.termsAccepted ? "border-red-500" : ""
                            }`}
                          />
                        </div>
                        <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-700">
                        {t("form.terms")}
                        </label>
                      </div>
                      {errors.termsAccepted && <p className="text-red-500 text-xs mt-1">{errors.termsAccepted}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-primary py-4"
                    >
                      {t("form.confirm")}
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6 rounded-lg shadow-md mb-6"
                >
                  <h3 className="text-xl font-medium mb-4">{t("information")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-restaurant-primary/10 p-2 rounded-full mr-3">
                        <Clock size={18} className="text-restaurant-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{t("opening")}</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {location.hours.map((hour, index) => (
                            <li key={index}>
                              <span className="font-medium">{hour.day}:</span> {hour.open} - {hour.close}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-restaurant-primary/10 p-2 rounded-full mr-3">
                        <Info size={18} className="text-restaurant-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{t("policy")}</h4>
                        <ul className="text-sm text-gray-600 space-y-2 mt-1">
                          {/*
                          <li>• Reservations can be made up to 30 days in advance</li>
                          <li>• A 15-minute grace period is provided</li>
                          <li>• For parties of 8 or more, please call us directly</li>
                          <li>• Credit card required for Friday/Saturday reservations</li>
                          */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-restaurant-primary/10 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-medium mb-4">{t("assist")}</h3>
                  <p className="mb-4 text-gray-700">
                  {t("contact")}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone size={18} className="text-restaurant-primary mr-2" />
                      <a href={`tel:${location.phone}`} className="text-restaurant-primary hover:underline">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail size={18} className="text-restaurant-primary mr-2" />
                      <a href={`mailto:${location.email}`} className="text-restaurant-primary hover:underline">
                        {location.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </main>
  );
}