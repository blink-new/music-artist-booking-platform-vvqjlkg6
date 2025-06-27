import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', data);
    toast.success('Message sent successfully!');
    form.reset();
  };

  const faqItems = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 4-6 weeks in advance, especially for wedding and corporate events. However, we can sometimes accommodate last-minute bookings depending on availability.',
    },
    {
      question: 'Do you provide your own equipment?',
      answer: 'Yes, we provide all necessary sound equipment including microphones, speakers, and instruments. For larger venues, we can arrange additional equipment as needed.',
    },
    {
      question: 'Can you play specific songs for our event?',
      answer: 'Absolutely! We can learn new songs for your special event. Please provide us with your song requests at least 2 weeks before the event.',
    },
    {
      question: 'What is your travel radius?',
      answer: 'We primarily serve the greater metropolitan area within a 50-mile radius. For events outside this area, additional travel fees may apply.',
    },
    {
      question: 'Do you offer packages for multiple events?',
      answer: 'Yes, we offer discounted rates for multiple bookings such as wedding ceremonies and receptions, or corporate event series.',
    },
    {
      question: 'What happens if you get sick or have an emergency?',
      answer: 'We have a network of professional backup musicians to ensure your event goes smoothly. We will always find a suitable replacement if needed.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      {...form.register('name')}
                      className="border-pink-200 focus:border-pink-400"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register('email')}
                      className="border-pink-200 focus:border-pink-400"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      {...form.register('message')}
                      rows={6}
                      className="border-pink-200 focus:border-pink-400"
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-600">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-pink hover:opacity-90 text-white"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? t('common.loading') : t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {t('contact.faq.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};