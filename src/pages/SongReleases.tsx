import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Music, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const SongReleases: React.FC = () => {
  const { t } = useTranslation();
  const [selectedSong, setSelectedSong] = useState<string | null>(null);

  const songs = [
    {
      id: '1',
      title: 'Midnight Dreams',
      description: 'A soulful ballad perfect for romantic moments',
      coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      embedCode: '123456789', // Sample SoundCloud track ID
    },
    {
      id: '2',
      title: 'Electric Nights',
      description: 'High-energy track that gets everyone dancing',
      coverArt: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop',
      embedCode: '123456789',
    },
    {
      id: '3',
      title: 'Summer Breeze',
      description: 'Light acoustic melody for perfect summer vibes',
      coverArt: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop',
      embedCode: '123456789',
    },
    {
      id: '4',
      title: 'City Lights',
      description: 'Urban-inspired track with modern beats',
      coverArt: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
      embedCode: '123456789',
    },
    {
      id: '5',
      title: 'Heartstrings',
      description: 'Emotional piece that touches the soul',
      coverArt: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop',
      embedCode: '123456789',
    },
    {
      id: '6',
      title: 'New Horizons',
      description: 'Uplifting anthem about hope and new beginnings',
      coverArt: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
      embedCode: '123456789',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('releases.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('releases.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedSong(song.id)}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-square">
                    <img
                      src={song.coverArt}
                      alt={song.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                      <Music className="h-8 w-8 text-pink-600" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {song.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {song.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Audio Modal */}
        <Dialog open={!!selectedSong} onOpenChange={() => setSelectedSong(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center">
                {selectedSong && songs.find(s => s.id === selectedSong)?.title}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSong(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            
            {selectedSong && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={songs.find(s => s.id === selectedSong)?.coverArt}
                    alt="Cover Art"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {songs.find(s => s.id === selectedSong)?.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {songs.find(s => s.id === selectedSong)?.description}
                    </p>
                  </div>
                </div>
                
                {/* SoundCloud Embed Placeholder */}
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-lg text-center">
                  <Music className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <p className="text-gray-700">
                    SoundCloud player would be embedded here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Track ID: {songs.find(s => s.id === selectedSong)?.embedCode}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};