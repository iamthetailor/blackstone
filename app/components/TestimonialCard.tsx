"use client"

import { ReactNode } from 'react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  testimonial: string
  avatarUrl?: string
}

export function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  avatarUrl
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
      <div className="mb-6">
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24V15.4286C0 13.3929 0.422619 11.4524 1.26786 9.60714C2.11309 7.72024 3.2619 6.07143 4.71429 4.66071C6.16666 3.25 7.85714 2.14286 9.78571 1.34286C11.75 0.47619 13.8333 0 16.0357 0V4.57143C13.8333 4.57143 11.9762 5.08333 10.4643 6.10714C8.98809 7.09524 8.25 8.52381 8.25 10.3929V12H14V24H0ZM18 24V15.4286C18 13.3929 18.4226 11.4524 19.2679 9.60714C20.1131 7.72024 21.2619 6.07143 22.7143 4.66071C24.1667 3.25 25.8452 2.14286 28.25 1.34286C30.1786 0.47619 32.2262 0 34.4286 0V4.57143C32.2262 4.57143 30.3691 5.08333 28.8571 6.10714C27.381 7.09524 26.6429 8.52381 26.6429 10.3929V12H31.9286V24H18Z" fill="black" fillOpacity="0.1"/>
        </svg>
      </div>
      <p className="mb-6 text-gray-700 italic">{testimonial}</p>
      <div>
        <h4 className="font-medium font-['Lexend_Peta'] uppercase">{name}</h4>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  )
} 