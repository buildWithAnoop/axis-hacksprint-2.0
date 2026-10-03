export const sceneConfig = {
  quality: {
    desktop: {
      particlesCount: 400,
      enableFog: true,
      shadows: true,
      dpr: [1, 2],
    },
    tablet: {
      particlesCount: 200,
      enableFog: true,
      shadows: false,
      dpr: [1, 1.5],
    },
    mobile: {
      particlesCount: 80,
      enableFog: false,
      shadows: false,
      dpr: [1, 1],
    },
  },
  colors: {
    moon: '#FAF0DE',
    moonGlow: '#C51F3A',
    ambient: '#240E17',
    ground: '#080608',
    fog: '#080608',
    crimsonLight: '#E63956',
    goldLight: '#E5BE6E',
  }
};
