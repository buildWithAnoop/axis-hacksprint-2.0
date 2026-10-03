import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Modal({ isOpen, onClose, onPrev, onNext, photo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080608]/95 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-[#C51F3A] text-white transition-colors duration-200 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-[#C51F3A] text-white transition-colors duration-200 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
          <img
            src={photo.src}
            alt={photo.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5BE6E] block">
            {photo.tag}
          </span>
          <h3 className="text-lg sm:text-xl font-display font-bold text-[#FAF3E8] mt-1">
            {photo.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#E8D5B5]/70 mt-1 max-w-lg mx-auto">
            {photo.description}
          </p>
        </div>
      </div>

      {/* Next Button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-[#C51F3A] text-white transition-colors duration-200 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
