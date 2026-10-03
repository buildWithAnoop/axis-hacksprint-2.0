import { eventConfig } from './eventConfig.js';
import { linksConfig } from './linksConfig.js';

export const siteConfig = {
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'rules', label: 'Rules' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'team', label: 'Team' },
    { id: 'faq', label: 'FAQ' },
    { id: 'venue', label: 'Venue' },
  ],
  socials: [
    { name: 'Instagram', url: linksConfig.instagram, icon: 'Instagram' },
    { name: 'LinkedIn', url: linksConfig.linkedin, icon: 'Linkedin' },
  ],
  meta: {
    title: `${eventConfig.eventName} | ${eventConfig.tagline}`,
    description: `Official Hackathon Portal for ${eventConfig.eventName} at ${eventConfig.organizer}.`,
  }
};
