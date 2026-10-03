export const navigationController = {
  scrollToSection: (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  },

  getActiveSection: (sectionIds, offset = 120) => {
    const scrollPosition = window.scrollY + offset;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPosition) {
        return sectionIds[i];
      }
    }
    return sectionIds[0] || 'home';
  }
};
