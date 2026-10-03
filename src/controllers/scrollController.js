export const scrollController = {
  calculateProgress: () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
  }
};
