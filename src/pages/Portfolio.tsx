import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: '1',
      title: 'Wedding Performance - Sarah & Michael',
      description: 'A romantic acoustic set for an intimate garden wedding',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
      embedCode: 'dQw4w9WgXcQ', // Sample YouTube video ID
    },
    {
      id: '2',
      title: 'Corporate Gala - Tech Innovation Summit',
      description: 'High-energy performance for 500+ attendees',
      thumbnail: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=300&fit=crop',
      embedCode: 'dQw4w9WgXcQ',
    },
    {
      id: '3',
      title: 'Birthday Celebration - 50th Birthday Bash',
      description: 'Mix of classic hits and modern favorites',
      thumbnail: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=300&fit=crop',
      embedCode: 'dQw4w9WgXcQ',
    },
    {
      id: '4',
      title: 'Festival Performance - Summer Music Fest',
      description: 'Electric atmosphere with full band setup',
      thumbnail: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop',
      embedCode: 'dQw4w9WgXcQ',
    },
    {
      id: '5',
      title: 'Acoustic Session - Intimate Venue',
      description: 'Stripped-down acoustic versions of popular songs',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      embedCode: 'dQw4w9WgXcQ',
    },
    {
      id: '6',
      title: 'New Year\'s Eve Celebration',
      description: 'Countdown to midnight with party favorites',
      thumbnail: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop',
      embedCode: 'dQw4w9WgXcQ',
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
            {t('portfolio.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedVideo(video.id)}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-8 w-8 text-pink-600" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center">
                {selectedVideo && videos.find(v => v.id === selectedVideo)?.title}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            
            {selectedVideo && (
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videos.find(v => v.id === selectedVideo)?.embedCode}`}
                  title="Video player"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};