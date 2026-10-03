import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { registrationService } from '../../services/registrationService.js';

export function Button({
  children,
  variant = 'primary', // 'primary', 'crimson', 'gold', 'outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  icon = null,
  showArrow = false,
  isRegistration = false,
  href = null,
  onClick = null,
  className = '',
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-display font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer select-none group overflow-hidden active:scale-95";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3 text-sm gap-2.5",
    lg: "px-8 py-4 text-base gap-3 shadow-lg"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#C51F3A] to-[#A71930] text-[#FAF3E8] border border-[#E63956]/50 shadow-crimson-sm hover:shadow-crimson-lg hover:border-[#FAF3E8]/80 hover:brightness-110",
    crimson: "bg-[#1A0B10] text-[#F4E6CE] border border-[#C51F3A]/60 shadow-crimson-sm hover:bg-[#C51F3A] hover:text-white",
    gold: "bg-gradient-to-r from-[#E5BE6E] to-[#C9A45C] text-[#080608] border border-[#F4E6CE]/60 shadow-gold-sm hover:shadow-gold-lg hover:brightness-110 font-black",
    outline: "bg-transparent text-[#F4E6CE] border border-[#F4E6CE]/30 hover:border-[#C51F3A] hover:bg-[#C51F3A]/15 hover:text-white",
    ghost: "bg-transparent text-[#E8D5B5] hover:text-[#FAF3E8] hover:bg-white/5"
  };

  const handleClick = (e) => {
    if (isRegistration) {
      e.preventDefault();
      registrationService.openRegistration(true);
    } else if (onClick) {
      onClick(e);
    }
  };

  const content = (
    <>
      {/* Background Sheen effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href && !isRegistration) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
