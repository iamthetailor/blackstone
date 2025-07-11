import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, // Use app-specific password
  },
});

export async function POST(request: Request) {
  try {
    // Debug: Log environment variables (remove in production)
    console.log('Email Config:', {
      user: process.env.EMAIL_USER ? 'Set' : 'Not set',
      pass: process.env.EMAIL_APP_PASSWORD ? 'Set' : 'Not set',
      recipient: process.env.RECIPIENT_EMAIL ? 'Set' : 'Not set'
    });

    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      projectType,
      otherProjectType,
      propertyType,
      startDate,
      projectDescription,
      additionalInfo
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !projectType || !propertyType || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Quote Request: ${projectType}`,
      text: `
        Personal Information:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address || 'Not provided'}
        City: ${city || 'Not provided'}
        State: ${state || 'Not provided'}
        ZIP Code: ${zipCode || 'Not provided'}

        Project Details:
        Project Type: ${projectType}
        ${otherProjectType ? `Other Project Type: ${otherProjectType}` : ''}
        Property Type: ${propertyType}
        Desired Start Date: ${startDate || 'Not specified'}
        
        Project Description:
        ${projectDescription}
        
        Additional Information:
        ${additionalInfo || 'None provided'}
      `,
      html: `
        <h2>New Quote Request</h2>
        
        <h3>Personal Information:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <p><strong>City:</strong> ${city || 'Not provided'}</p>
        <p><strong>State:</strong> ${state || 'Not provided'}</p>
        <p><strong>ZIP Code:</strong> ${zipCode || 'Not provided'}</p>

        <h3>Project Details:</h3>
        <p><strong>Project Type:</strong> ${projectType}</p>
        ${otherProjectType ? `<p><strong>Other Project Type:</strong> ${otherProjectType}</p>` : ''}
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Desired Start Date:</strong> ${startDate || 'Not specified'}</p>
        
        <h3>Project Description:</h3>
        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
        
        <h3>Additional Information:</h3>
        <p>${(additionalInfo || 'None provided').replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
    } else {
      console.error('Unknown error:', error);
    }
    
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }
} 