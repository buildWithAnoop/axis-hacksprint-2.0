export const galleryController = {
  createGalleryState: () => ({
    selectedPhoto: null,
    isOpen: false,
  }),

  openLightbox: (photo) => ({
    selectedPhoto: photo,
    isOpen: true,
  }),

  closeLightbox: () => ({
    selectedPhoto: null,
    isOpen: false,
  }),

  getNextPhoto: (currentPhoto, allPhotos) => {
    if (!currentPhoto || !allPhotos.length) return null;
    const currentIndex = allPhotos.findIndex(p => p.id === currentPhoto.id);
    const nextIndex = (currentIndex + 1) % allPhotos.length;
    return allPhotos[nextIndex];
  },

  getPreviousPhoto: (currentPhoto, allPhotos) => {
    if (!currentPhoto || !allPhotos.length) return null;
    const currentIndex = allPhotos.findIndex(p => p.id === currentPhoto.id);
    const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    return allPhotos[prevIndex];
  }
};
