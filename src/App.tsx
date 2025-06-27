import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { SongReleases } from './pages/SongReleases';
import { Contact } from './pages/Contact';
import './lib/i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="releases" element={<SongReleases />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="portfolio" element={<AdminPortfolio />} />
          <Route path="releases" element={<AdminReleases />} />
          <Route path="contact" element={<AdminContact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;