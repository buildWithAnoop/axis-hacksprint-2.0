import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Modal } from '../components/Modal.jsx';
import { galleryModel } from '../../models/galleryModel.js';
import { galleryController } from '../../controllers/galleryController.js';

export function Gallery() {
  const photos = galleryModel.getPhotos();
  const [lightboxState, setLightboxState] = useState(galleryController.createGalleryState());

  const handleOpenPhoto = (photo) => {
    setLightboxState(galleryController.openLightbox(photo));
  };

  const handleClose = () => {
    setLightboxState(galleryController.closeLightbox());
  };

  const handlePrev = () => {
    const prev = galleryController.getPreviousPhoto(lightboxState.selectedPhoto, photos);
    if (prev) setLightboxState(galleryController.openLightbox(prev));
  };

  const handleNext = () => {
    const next = galleryController.getNextPhoto(lightboxState.selectedPhoto, photos);
    if (next) setLightboxState(galleryController.openLightbox(next));
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C51F3A]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE ARCHIVES"
          title="MEMORIES FROM WONDERLAND"
          subtitle="Glimpses from prior sprints capturing high-voltage coding, vibrant mentorship, jury evaluations, and podium celebrations."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              onClick={() => handleOpenPhoto(photo)}
              className={`group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#C51F3A]/60 cursor-pointer transition-all duration-300 shadow-lg ${
                i === 0 || i === 3 ? 'sm:col-span-2' : ''
              }`}
            >
              {/* Image with overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1A0B10]">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080608] via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Caption & Tag */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#E5BE6E] block mb-1">
                    {photo.tag}
                  </span>
                  <h4 className="text-base sm:text-lg font-display font-bold text-[#FAF3E8]">
                    {photo.title}
                  </h4>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 group-hover:bg-[#C51F3A] text-white transition-colors duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={lightboxState.isOpen}
        photo={lightboxState.selectedPhoto}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
