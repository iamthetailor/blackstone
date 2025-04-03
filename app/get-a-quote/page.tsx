import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'
import { AnimateOnScroll } from '../components/AnimateOnScroll'

export default function GetAQuote() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <AnimateOnScroll variant="fade-down">
        <section className="bg-gray-100 relative pt-10">
          <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] mb-8 uppercase tracking-wide">
                Get a Quote
              </h1>
              <p className="mb-8 max-w-2xl mx-auto">
                Ready to enhance your property with our quality construction services? Fill out the form below, 
                and our team will get back to you with a customized quote that meets your specific needs.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll variant="fade-up" delay={100}>
              <form className="bg-white p-8 border border-gray-200 rounded-md shadow-sm">
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8">Tell Us About Your Project</h2>
                
                {/* Personal Information */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-4 pb-2 border-b uppercase">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name*</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name*</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
                    <input 
                      type="text" 
                      id="address" 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label htmlFor="city" className="block mb-2 text-sm font-medium">City</label>
                      <input 
                        type="text" 
                        id="city" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block mb-2 text-sm font-medium">State</label>
                      <input 
                        type="text" 
                        id="state" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block mb-2 text-sm font-medium">ZIP Code</label>
                      <input 
                        type="text" 
                        id="zipCode" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-4 pb-2 border-b uppercase">Project Details</h3>
                  <div className="mb-6">
                    <label htmlFor="projectType" className="block mb-2 text-sm font-medium">Type of Project*</label>
                    <select 
                      id="projectType" 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="siding">Siding Installation</option>
                      <option value="windows">Window Installation</option>
                      <option value="doors">Door Installation</option>
                      <option value="slidingDoors">Sliding Glass Door Installation</option>
                      <option value="deck">Deck Rebuilding</option>
                      <option value="dryRot">Dry Rot Repairs</option>
                      <option value="other">Other (Please Specify)</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="otherProjectType" className="block mb-2 text-sm font-medium">If Other, Please Specify</label>
                    <input 
                      type="text" 
                      id="otherProjectType" 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="propertyType" className="block mb-2 text-sm font-medium">Property Type*</label>
                      <select 
                        id="propertyType" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                        required
                      >
                        <option value="">Select Property Type</option>
                        <option value="singleFamily">Single-Family Home</option>
                        <option value="multiFamily">Multi-Family Building</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="startDate" className="block mb-2 text-sm font-medium">Desired Start Date</label>
                      <input 
                        type="date" 
                        id="startDate" 
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="projectDescription" className="block mb-2 text-sm font-medium">Project Description*</label>
                    <textarea 
                      id="projectDescription" 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" 
                      required
                      placeholder="Please provide details about your project, including dimensions, materials preferences, and any specific requirements."
                    ></textarea>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-4 pb-2 border-b uppercase">Additional Information</h3>
                  <div className="mb-6">
                    <label htmlFor="additionalInfo" className="block mb-2 text-sm font-medium">Any Other Information</label>
                    <textarea 
                      id="additionalInfo" 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                      placeholder="Please share any additional information that might help us better understand your project needs."
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input 
                        type="checkbox" 
                        className="mt-1 mr-2" 
                        required
                      />
                      <span className="text-sm">
                        I agree to the processing of my personal data to receive a quote from Blackstone Contracting LLC.
                      </span>
                    </label>
                  </div>
                </div>
                
                <Button type="submit" variant="default" size="lg" className="min-w-[180px] justify-center rounded-none hover:bg-white hover:text-black transition-all hover:translate-y-[-5px]">Submit Request</Button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fade-down">
            <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 text-center">Why Choose Blackstone Contracting</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll variant="zoom-in" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium font-['Lexend_Peta'] mb-2 uppercase">Industry Experience</h3>
                <p className="text-sm">Over 15 years of expertise in construction</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" delay={150}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium font-['Lexend_Peta'] mb-2 uppercase">Quality Craftsmanship</h3>
                <p className="text-sm">Excellence in every detail of our work</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27103 2.12 4.17997C2.09501 3.90344 2.12788 3.62474 2.21649 3.36163C2.3051 3.09852 2.44763 2.85666 2.63482 2.65163C2.82201 2.4466 3.04981 2.28271 3.30379 2.17053C3.55778 2.05834 3.83234 2.0004 4.11 1.99997H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.71997C9.23668 4.68004 9.47151 5.6227 9.81 6.52997C9.94474 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.36 8.63998L8.09 9.90997C9.51356 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0552 17.47 14.19C18.3773 14.5285 19.3199 14.7633 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium font-['Lexend_Peta'] mb-2 uppercase">Responsive Service</h3>
                <p className="text-sm">Clear communication throughout your project</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" delay={450}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium font-['Lexend_Peta'] mb-2 uppercase">Fully Insured</h3>
                <p className="text-sm">Comprehensive coverage for your peace of mind</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 