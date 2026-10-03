import { linksConfig } from '../config/linksConfig.js';

export const socialService = {
  getSocialLinks: () => [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@sanganakshila.tech',
      url: linksConfig.instagram,
      icon: 'Instagram',
      color: '#E1306C'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'Sanganakshila Society',
      url: linksConfig.linkedin,
      icon: 'Linkedin',
      color: '#0A66C2'
    }
  ],

  openSocial: (platformId) => {
    const link = linksConfig[platformId];
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  }
};
