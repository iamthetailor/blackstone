'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { useState, useRef } from 'react'

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <AnimateOnScroll variant="fade-down">
        <section className="bg-gray-100 relative pt-10">
          <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] mb-8 uppercase tracking-wide">
                Contact Us
              </h1>
              <p className="mb-8 max-w-2xl mx-auto">
                Have a question or ready to discuss your construction needs? We'd love to hear from you. 
                Reach out to our team using the contact details below or fill out the form.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimateOnScroll variant="fade-right" className="h-full">
              <div>
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8">Get In Touch</h2>
                <div className="mb-8">
                  <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-2 uppercase">Our Address</h3>
                  <p className="mb-1">PO Box 283</p>
                  <p className="mb-1">West Linn, OR 97068</p>
                  <p>United States</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-2 uppercase">Contact Information</h3>
                  <p className="mb-1">Phone: (503) 210-5197</p>
                  <p className="mb-1">Email: info@blackstonecontractingllc.com</p>
                  <p>Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-4 uppercase">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/blackstonecontractingllc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/blackstonecontracting/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.0002 11.37C16.1236 12.2022 15.9815 13.0522 15.594 13.799C15.2065 14.5458 14.5933 15.1514 13.8418 15.5297C13.0903 15.9079 12.2386 16.0396 11.408 15.9059C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1902 8.22793 13.4229 8.09426 12.5922C7.9606 11.7615 8.09226 10.9099 8.47052 10.1584C8.84878 9.40685 9.45438 8.79374 10.2012 8.40624C10.948 8.01874 11.7979 7.87658 12.6302 8C13.4791 8.12588 14.265 8.52146 14.8717 9.1282C15.4785 9.73494 15.8741 10.5209 16.0002 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={200} className="h-full">
              <div>
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8">Send Us a Message</h2>
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                    {error}
                  </div>
                )}
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name*</label>
                      <input 
                        type="text" 
                        name="firstName"
                        id="firstName" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name*</label>
                      <input 
                        type="text" 
                        name="lastName"
                        id="lastName" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address*</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject*</label>
                    <input 
                      type="text" 
                      name="subject"
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message*</label>
                    <textarea 
                      name="message"
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                      required
                      disabled={isLoading}
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="min-w-[180px] justify-center rounded-none hover:bg-white hover:text-black transition-all hover:translate-y-[-5px]"
                    disabled={isLoading}
                  >
                    {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                  </Button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <AnimateOnScroll variant="fade-up">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 text-center">Our Commitment to Compliance</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-4">
                We prioritize adhering to all legal and industry-specific compliance standards to ensure the safety, quality, and reliability of our services.
              </p>
              <p className="mb-4">
                All our contractors and team members possess the appropriate licenses and certifications required for their respective trades. Our projects strictly follow applicable building codes and OSHA guidelines to guarantee structural integrity, safety, and energy efficiency.
              </p>
              <p className="mb-4">
                Blackstone Contracting maintains comprehensive insurance coverage to protect our clients, team members, and projects. We are also committed to environmentally responsible practices, including proper disposal of materials and adherence to regulations aimed at reducing environmental impact.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <Footer />
    </main>
  )
} 