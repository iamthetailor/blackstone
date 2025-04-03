"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}

export function HeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  reversed = false
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${isLoaded ? 'opacity-60' : 'opacity-100'}`}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 
            className={`text-3xl md:text-5xl font-medium font-['Lexend_Peta'] mb-6 uppercase tracking-wide transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {title}
          </h1>
          <p 
            className={`text-lg md:text-xl mb-8 transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {description}
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Button href={primaryCta.href} variant="white">
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="whiteOutline">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 