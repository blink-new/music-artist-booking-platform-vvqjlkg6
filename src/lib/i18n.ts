import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        releases: 'Song Releases',
        contact: 'Contact',
        admin: 'Admin'
      },
      // Language switcher
      language: {
        switch: 'Switch Language',
        en: 'English',
        de: 'Deutsch'
      },
      // Home page
      home: {
        hero: {
          title: 'Experience Live Music Like Never Before',
          subtitle: 'Professional music entertainment for every occasion',
          bookButton: 'Book a Performance',
          videoButton: 'Watch Videos'
        },
        testimonials: {
          title: 'What Clients Say',
          subtitle: 'Hear from those who experienced our music firsthand'
        }
      },
      // Services page
      services: {
        title: 'Choose Your Experience',
        subtitle: 'Select the perfect performance for your event',
        solo: {
          title: 'Solo Singer',
          description: 'Intimate acoustic performances perfect for small gatherings and special moments'
        },
        mini: {
          title: 'Mini Band',
          description: 'Dynamic duo or trio performances with a full sound for medium-sized events'
        },
        party: {
          title: 'Party Band',
          description: 'Full band experience with high energy performances for large celebrations'
        },
        booking: {
          title: 'Book Your Performance',
          form: {
            name: 'Your Name',
            email: 'Email Address',
            phone: 'Phone Number',
            event: 'Event Type',
            date: 'Event Date',
            location: 'Event Location',
            guests: 'Number of Guests',
            message: 'Additional Details',
            submit: 'Send Booking Request'
          }
        }
      },
      // Portfolio page
      portfolio: {
        title: 'Our Performances',
        subtitle: 'Watch highlights from our live shows and events'
      },
      // Song Releases page
      releases: {
        title: 'Latest Releases',
        subtitle: 'Listen to our newest songs and musical creations'
      },
      // Contact page
      contact: {
        title: 'Get in Touch',
        subtitle: 'Have questions or want to discuss your event?',
        form: {
          name: 'Your Name',
          email: 'Email Address',
          message: 'Your Message',
          submit: 'Send Message'
        },
        faq: {
          title: 'Frequently Asked Questions'
        }
      },
      // Admin section
      admin: {
        dashboard: {
          title: 'Admin Dashboard',
          stats: {
            bookings: 'Total Booking Requests',
            messages: 'Total Messages',
            revenue: 'Total Revenue'
          }
        }
      },
      // Common
      common: {
        loading: 'Loading...',
        error: 'Something went wrong',
        success: 'Success!',
        cancel: 'Cancel',
        save: 'Save',
        edit: 'Edit',
        delete: 'Delete',
        add: 'Add',
        back: 'Back'
      }
    }
  },
  de: {
    translation: {
      // Navigation
      nav: {
        home: 'Startseite',
        services: 'Services',
        portfolio: 'Portfolio',
        releases: 'Veröffentlichungen',
        contact: 'Kontakt',
        admin: 'Admin'
      },
      // Language switcher
      language: {
        switch: 'Sprache wechseln',
        en: 'English',
        de: 'Deutsch'
      },
      // Home page
      home: {
        hero: {
          title: 'Erleben Sie Live-Musik wie nie zuvor',
          subtitle: 'Professionelle Musikunterhaltung für jeden Anlass',
          bookButton: 'Aufführung buchen',
          videoButton: 'Videos ansehen'
        },
        testimonials: {
          title: 'Was Kunden sagen',
          subtitle: 'Hören Sie von denen, die unsere Musik aus erster Hand erlebt haben'
        }
      },
      // Services page
      services: {
        title: 'Wählen Sie Ihr Erlebnis',
        subtitle: 'Wählen Sie die perfekte Aufführung für Ihre Veranstaltung',
        solo: {
          title: 'Solo-Sänger',
          description: 'Intime akustische Aufführungen perfekt für kleine Versammlungen und besondere Momente'
        },
        mini: {
          title: 'Mini-Band',
          description: 'Dynamische Duo- oder Trio-Aufführungen mit vollem Sound für mittelgroße Events'
        },
        party: {
          title: 'Party-Band',
          description: 'Vollband-Erlebnis mit energiegeladenen Aufführungen für große Feiern'
        },
        booking: {
          title: 'Buchen Sie Ihre Aufführung',
          form: {
            name: 'Ihr Name',
            email: 'E-Mail-Adresse',
            phone: 'Telefonnummer',
            event: 'Art der Veranstaltung',
            date: 'Veranstaltungsdatum',
            location: 'Veranstaltungsort',
            guests: 'Anzahl der Gäste',
            message: 'Zusätzliche Details',
            submit: 'Buchungsanfrage senden'
          }
        }
      },
      // Portfolio page
      portfolio: {
        title: 'Unsere Aufführungen',
        subtitle: 'Sehen Sie Höhepunkte unserer Live-Shows und Events'
      },
      // Song Releases page
      releases: {
        title: 'Neueste Veröffentlichungen',
        subtitle: 'Hören Sie unsere neuesten Songs und musikalischen Kreationen'
      },
      // Contact page
      contact: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Haben Sie Fragen oder möchten Sie Ihre Veranstaltung besprechen?',
        form: {
          name: 'Ihr Name',
          email: 'E-Mail-Adresse',
          message: 'Ihre Nachricht',
          submit: 'Nachricht senden'
        },
        faq: {
          title: 'Häufig gestellte Fragen'
        }
      },
      // Admin section
      admin: {
        dashboard: {
          title: 'Admin-Dashboard',
          stats: {
            bookings: 'Gesamte Buchungsanfragen',
            messages: 'Gesamte Nachrichten',
            revenue: 'Gesamtumsatz'
          }
        }
      },
      // Common
      common: {
        loading: 'Wird geladen...',
        error: 'Etwas ist schiefgelaufen',
        success: 'Erfolgreich!',
        cancel: 'Abbrechen',
        save: 'Speichern',
        edit: 'Bearbeiten',
        delete: 'Löschen',
        add: 'Hinzufügen',
        back: 'Zurück'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Default language
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;