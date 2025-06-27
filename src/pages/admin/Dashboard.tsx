import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutDashboard, Mail, Calendar, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  {
    label: 'Total Booking Requests',
    value: 42,
    icon: Calendar,
    color: 'bg-gradient-to-tr from-pink-400 to-rose-400',
  },
  {
    label: 'Total Messages',
    value: 17,
    icon: Mail,
    color: 'bg-gradient-to-tr from-pink-400 to-pink-600',
  },
  {
    label: 'Total Revenue',
    value: '€12,500',
    icon: Euro,
    color: 'bg-gradient-to-tr from-rose-400 to-pink-500',
  },
];

const messages = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', subject: 'Wedding Inquiry', status: 'unread', date: '2024-06-01' },
  { id: 2, name: 'Michael Chen', email: 'michael@email.com', subject: 'Corporate Event', status: 'read', date: '2024-06-02' },
  { id: 3, name: 'Emma Rodriguez', email: 'emma@email.com', subject: 'Birthday Party', status: 'unread', date: '2024-06-03' },
];

const bookings = [
  { id: 1, name: 'Sarah Johnson', service: 'Solo Singer', date: '2024-07-10', status: 'pending' },
  { id: 2, name: 'Michael Chen', service: 'Party Band', date: '2024-08-15', status: 'pending' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Widget Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {stats.map((stat, i) => (
          <Card key={i} className="shadow-lg border-0">
            <CardContent className="flex items-center space-x-4 p-6">
              <div className={`rounded-full p-4 text-white ${stat.color} shadow-lg animate-pulse-glow`}>
                <stat.icon className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold font-display text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* All Messages Table */}
      <div className="mb-12">
        <h2 className="text-xl font-bold font-display mb-4 text-gray-900">All Messages</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white/80">
            <thead>
              <tr className="text-left text-gray-700 bg-pink-50">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="border-b last:border-0 hover:bg-pink-50/50">
                  <td className="py-2 px-4 font-medium">{msg.name}</td>
                  <td className="py-2 px-4">{msg.email}</td>
                  <td className="py-2 px-4">{msg.subject}</td>
                  <td className="py-2 px-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${msg.status === 'unread' ? 'bg-rose-100 text-rose-700' : 'bg-green-100 text-green-700'}`}>{msg.status}</span>
                  </td>
                  <td className="py-2 px-4">{msg.date}</td>
                  <td className="py-2 px-4 space-x-2">
                    <Button size="sm" variant="outline">View</Button>
                    <Button size="sm" variant="ghost" className="text-rose-600">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Bookings Table */}
      <div className="mb-12">
        <h2 className="text-xl font-bold font-display mb-4 text-gray-900">Pending Bookings</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white/80">
            <thead>
              <tr className="text-left text-gray-700 bg-pink-50">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-b last:border-0 hover:bg-pink-50/50">
                  <td className="py-2 px-4 font-medium">{b.name}</td>
                  <td className="py-2 px-4">{b.service}</td>
                  <td className="py-2 px-4">{b.date}</td>
                  <td className="py-2 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700">{b.status}</span>
                  </td>
                  <td className="py-2 px-4 space-x-2">
                    <Button size="sm" variant="outline">View</Button>
                    <Button size="sm" variant="ghost" className="text-rose-600">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Home Page Content Editor (UI only) */}
      <div className="mb-12">
        <h2 className="text-xl font-bold font-display mb-4 text-gray-900">Home Page Content Editor</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80">
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Claim (EN)</label>
                <input className="w-full border border-pink-200 rounded px-3 py-2" defaultValue="Experience Live Music Like Never Before" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Claim (DE)</label>
                <input className="w-full border border-pink-200 rounded px-3 py-2" defaultValue="Erleben Sie Live-Musik wie nie zuvor" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Label (EN)</label>
                <input className="w-full border border-pink-200 rounded px-3 py-2" defaultValue="Book a Performance" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Label (DE)</label>
                <input className="w-full border border-pink-200 rounded px-3 py-2" defaultValue="Aufführung buchen" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Collage Images</label>
                <div className="flex space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-16 h-16 bg-pink-100 rounded overflow-hidden flex items-center justify-center">
                      <span className="text-xs text-gray-400">Img {i}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Testimonials (EN/DE)</label>
                <div className="space-y-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <input className="flex-1 border border-pink-200 rounded px-2 py-1" defaultValue={`Testimonial ${i}`} />
                      <Button size="sm" variant="ghost" className="text-rose-600">Delete</Button>
                    </div>
                  ))}
                  <Button size="sm" variant="outline">Add Testimonial</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
