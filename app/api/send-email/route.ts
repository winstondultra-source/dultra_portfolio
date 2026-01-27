import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create a transporter - using Gmail as example
    // You'll need to set environment variables for these credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to yourself (portfolio owner)
    const ownerEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Confirmation email to the sender
    const senderEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'I received your message!',
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Winston Dultra</p>
      `,
    };

    // Send emails
    await transporter.sendMail(ownerEmailOptions);
    await transporter.sendMail(senderEmailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
