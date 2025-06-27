import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mic, Users, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookingForm } from '@/components/BookingForm';

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'solo',
      title: t('services.solo.title'),
      description: t('services.solo.description'),
      icon: Mic,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      price: 'From €299',
    },
    {
      id: 'mini',
      title: t('services.mini.title'),
      description: t('services.mini.description'),
      icon: Users,
      image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=300&fit=crop',
      price: 'From €599',
    },
    {
      id: 'party',
      title: t('services.party.title'),
      description: t('services.party.description'),
      icon: Music,
      image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=300&fit=crop',
      price: 'From €999',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {!selectedService ? (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        onClick={() => setSelectedService(service.id)}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-pink opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <IconComponent className="h-6 w-6 text-pink-600" />
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-pink-600 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                        <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                          Select
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-6">
              <Button 
                variant="outline" 
                onClick={() => setSelectedService(null)}
                className="mb-4"
              >
                ← {t('common.back')}
              </Button>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('services.booking.title')}
              </h2>
              <p className="text-gray-600">
                Selected: {services.find(s => s.id === selectedService)?.title}
              </p>
            </div>
            
            <BookingForm serviceType={selectedService} />
          </motion.div>
        )}
      </div>
    </div>
  );
};