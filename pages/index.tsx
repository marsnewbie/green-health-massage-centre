import React, { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Coffee, Droplets, Car, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

export default function Home() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev: {[key: string]: boolean}) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      category: "Relaxation Therapy",
      treatments: [
        { name: "Detox Massage", duration: [30, 45, 60], prices: [30, 40, 45] },
        { name: "Relaxing Massage", duration: [30, 45, 60], prices: [30, 40, 45] },
        { name: "Swedish Massage", duration: [30, 45, 60], prices: [30, 40, 45] }
      ]
    },
    {
      category: "Traditional Chinese Therapy",
      treatments: [
        { name: "Cupping Therapy", duration: [30, 45, 60], prices: [40, 50, 60] },
        { name: "Scrapping Therapy", duration: [30, 45, 60], prices: [40, 50, 60] }
      ]
    },
    {
      category: "Therapeutic Massage",
      treatments: [
        { name: "Deep Tissue Massage", duration: [30, 45, 60], prices: [35, 45, 50] },
        { name: "Sport Massage", duration: [30, 45, 60], prices: [35, 45, 50] },
        { name: "Hot Stone Massage", duration: [30, 45, 60], prices: [35, 45, 50] }
      ]
    },
    {
      category: "Specialized Treatment",
      treatments: [
        { name: "Foot Massage", duration: [30, 45, 60], prices: [30, 40, 45] }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Green Health Massage Centre - Professional Chinese Massage Therapy in Bath</title>
        <meta name="description" content="Experience authentic Chinese massage therapy in Bath. Professional therapists, traditional healing techniques, and relaxing treatment rooms. Book your appointment today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-purple-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="text-left">
                  <div className="leading-none">
                    <span className="text-3xl font-bold text-red-800 block" 
                          style={{fontFamily: 'Times New Roman, serif', letterSpacing: '0.5px'}}>
                      Green Health
                    </span>
                    <span className="text-lg font-semibold text-red-700 block mt-1" 
                          style={{fontFamily: 'Times New Roman, serif', letterSpacing: '2px'}}>
                      MASSAGE CENTRE
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-stone-600 hover:text-purple-600 transition-colors font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-stone-600 hover:text-purple-600 transition-colors font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-stone-600 hover:text-purple-600 transition-colors font-medium">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-stone-600 hover:text-purple-600 transition-colors font-medium">Contact</button>
              </div>
              
              <Button onClick={() => scrollToSection('booking')} className="bg-purple-600 hover:bg-purple-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-stone-800 leading-tight">
                    Your Body Deserves
                    <span className="text-purple-600 block">Professional Care</span>
                  </h1>
                  <p className="text-xl text-stone-600 mt-6 leading-relaxed">
                    Experience authentic Chinese massage therapy in the heart of Bath. 
                    Our professional therapists help restore your body's natural balance 
                    with traditional healing techniques.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    +44 7759 034505
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="px-8 py-4 text-lg border-purple-600 text-purple-600 hover:bg-purple-50">
                    View Services
                  </Button>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-stone-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    Professional Therapists
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    Fully Insured
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-300 ${isVisible.home ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
                  <img 
                    src="/home.jpg"
                    alt="Green Health Massage Centre Storefront"
                    className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Welcome to Green Health Massage Centre</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                After a long day at work, your worn-out body needs refreshing. Through regular massage treatments, 
                you not only feel great, but it can also be very beneficial for body circulation and overall wellness.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Coffee, title: "Complimentary Refreshments", desc: "Free tea or coffee with every session" },
                { icon: Droplets, title: "Shower Facilities", desc: "Clean, private shower available" },
                { icon: Car, title: "Free Parking", desc: "3 hours free parking on St Michael's Road" },
                { icon: CheckCircle, title: "Professional Care", desc: "Qualified & fully insured therapists" }
              ].map((feature, index) => (
                <Card key={index} className={`text-center p-6 border-none shadow-lg bg-white transition-all duration-1000 delay-${index * 100} ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-stone-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-stone-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
              <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <img 
                  src="/about.jpeg"
                  alt="Comfortable waiting area"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <h3 className="text-3xl font-bold text-stone-800">Traditional Chinese Healing</h3>
                <p className="text-stone-600 leading-relaxed">
                  We offer authentic traditional treatments including cupping therapy and scrapping therapy. 
                  These time-tested methods provide remarkable benefits for pain relief, skin health, cold management, 
                  stomach issues, joint pain, and many other health concerns.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Our therapists are professionally qualified with extensive experience in both traditional 
                  Chinese medicine and modern massage techniques, ensuring you receive the highest quality care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Our Massage Services</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of professional massage and therapeutic treatments
              </p>
            </div>
            
            <div className="grid gap-8">
              {services.map((category, categoryIndex) => (
                <Card key={categoryIndex} className={`border-none shadow-lg bg-white transition-all duration-1000 delay-${categoryIndex * 200} ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">{category.category}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-purple-100">
                            <th className="text-left py-4 text-stone-700 font-semibold">Treatment</th>
                            <th className="text-center py-4 text-stone-700 font-semibold">30 Min</th>
                            <th className="text-center py-4 text-stone-700 font-semibold">45 Min</th>
                            <th className="text-center py-4 text-stone-700 font-semibold">60 Min</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.treatments.map((treatment, index) => (
                            <tr key={index} className="border-b border-stone-100 hover:bg-purple-50/50 transition-colors">
                              <td className="py-4 font-medium text-stone-800">{treatment.name}</td>
                              <td className="text-center py-4 text-purple-600 font-semibold">£{treatment.prices[0]}</td>
                              <td className="text-center py-4 text-purple-600 font-semibold">£{treatment.prices[1]}</td>
                              <td className="text-center py-4 text-purple-600 font-semibold">£{treatment.prices[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <div className={`transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <img 
                  src="/service.jpeg"
                  alt="Professional massage treatment room"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible.services ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <h3 className="text-3xl font-bold text-stone-800">Professional Treatment Rooms</h3>
                <p className="text-stone-600 leading-relaxed">
                  Our peaceful treatment rooms are designed to provide the ultimate relaxation experience. 
                  Each room is equipped with professional massage tables and maintains the perfect ambiance 
                  for your healing journey.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-stone-700">Clean, sanitized environment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-stone-700">Comfortable temperature control</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-stone-700">Relaxing ambient lighting</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-stone-700">Premium massage oils and equipment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-stone-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Visit Us Today</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Book your appointment and experience professional massage therapy in Bath
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className={`border-none shadow-lg bg-white transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold text-stone-800">Telephone Bookings</p>
                        <p className="text-purple-600 text-lg font-medium">+44 7759 034505</p>
                        <p className="text-sm text-stone-500">All telephone bookings welcome</p>
                        <p className="text-sm text-stone-500">No text enquiries or withheld numbers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold text-stone-800">Address</p>
                        <p className="text-stone-600">5 Cork St, Lower Weston</p>
                        <p className="text-stone-600">Bath BA1 3BB, United Kingdom</p>
                        <p className="text-sm text-purple-600 mt-1">Free parking available on St Michael's Road (3 hours)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold text-stone-800">Opening Hours</p>
                        <p className="text-stone-600">Monday to Sunday</p>
                        <p className="text-stone-600 font-medium">9:00 AM - 9:00 PM</p>
                        <p className="text-sm text-stone-500">Including bank holidays</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-stone-800 mb-2">Payment Methods</h4>
                    <p className="text-stone-600">Cash or Bank Transfer accepted</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <img 
                  src="/contact.jpg"
                  alt="Green Health Massage Centre interior"
                  className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
                />
                <Card id="booking" className="border-none shadow-lg bg-purple-600 text-white">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-2xl font-bold mb-4">Ready to Book?</h4>
                    <p className="mb-6 opacity-90">Call us now to schedule your relaxing massage session</p>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-stone-50 font-semibold px-8 py-4">
                      <Phone className="w-5 h-5 mr-2" />
                      +44 7759 034505
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-stone-300">Green Health Massage Centre</h3>
                </div>
              </div>
              <p className="text-stone-400 mb-4">Professional Chinese Massage Therapy</p>
              <div className="space-y-2 text-stone-400">
                <p>5 Cork St, Lower Weston, Bath BA1 3BB, United Kingdom</p>
                <p>Phone: +44 7759 034505 | Open Daily: 9:00 AM - 9:00 PM</p>
              </div>
              <div className="mt-8 pt-8 border-t border-stone-700">
                <p className="text-stone-500">© 2024 Green Health Massage Centre. Professional massage therapy in Bath.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
