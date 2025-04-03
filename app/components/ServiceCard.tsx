"use client"

import React, { ReactNode } from 'react'
import { Button } from './Button'

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  ctaText?: string
  ctaHref?: string
  href?: string
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  ctaText = "Learn More", 
  ctaHref = "/services",
  href
}: ServiceCardProps) {
  // Use href if provided, otherwise fall back to ctaHref
  const buttonLink = href || ctaHref;
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition duration-300 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium font-['Lexend_Peta'] mb-4 uppercase">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        href={buttonLink} 
        variant="default" 
        size="full"
        className="rounded-none hover:translate-y-[-5px] transition-all duration-300"
      >
        {ctaText} 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  )
} 