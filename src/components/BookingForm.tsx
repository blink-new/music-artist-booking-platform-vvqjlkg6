import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'react-hot-toast';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Please select an event date'),
  location: z.string().min(5, 'Please enter event location'),
  guests: z.string().min(1, 'Please enter number of guests'),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  serviceType: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ serviceType }) => {
  const { t } = useTranslation();
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      location: '',
      guests: '',
      message: '',
    },
  });

  const onSubmit = (data: BookingFormData) => {
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', { ...data, serviceType });
    toast.success('Booking request sent successfully!');
    form.reset();
  };

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Private Party',
    'Festival',
    'Concert',
    'Other',
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">
          {t('services.booking.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('services.booking.form.name')}</Label>
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
              <Label htmlFor="email">{t('services.booking.form.email')}</Label>
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
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t('services.booking.form.phone')}</Label>
              <Input
                id="phone"
                {...form.register('phone')}
                className="border-pink-200 focus:border-pink-400"
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-red-600">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">{t('services.booking.form.event')}</Label>
              <Select onValueChange={(value) => form.setValue('eventType', value)}>
                <SelectTrigger className="border-pink-200 focus:border-pink-400">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.eventType && (
                <p className="text-sm text-red-600">{form.formState.errors.eventType.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventDate">{t('services.booking.form.date')}</Label>
              <Input
                id="eventDate"
                type="date"
                {...form.register('eventDate')}
                className="border-pink-200 focus:border-pink-400"
              />
              {form.formState.errors.eventDate && (
                <p className="text-sm text-red-600">{form.formState.errors.eventDate.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">{t('services.booking.form.guests')}</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                {...form.register('guests')}
                className="border-pink-200 focus:border-pink-400"
              />
              {form.formState.errors.guests && (
                <p className="text-sm text-red-600">{form.formState.errors.guests.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">{t('services.booking.form.location')}</Label>
            <Input
              id="location"
              {...form.register('location')}
              className="border-pink-200 focus:border-pink-400"
            />
            {form.formState.errors.location && (
              <p className="text-sm text-red-600">{form.formState.errors.location.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('services.booking.form.message')}</Label>
            <Textarea
              id="message"
              {...form.register('message')}
              rows={4}
              className="border-pink-200 focus:border-pink-400"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-pink hover:opacity-90 text-white"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? t('common.loading') : t('services.booking.form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};