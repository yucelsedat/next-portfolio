'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get('senderEmail') as string
  const message = formData.get('message') as string

  // if(!sendEmail || typeof senderEmail !== 'string') return { message: ''}
  // if(!message || typeof message !== 'string') return { message: ''}

  resend.emails.send({
    from: `${senderEmail} <onboarding@resend.dev>`,
    to: 'yucelsedatt@gmail.com',
    subject: 'Portfolio Contant Message',
    reply_to: senderEmail,
    text: message,
    html: `<p>The mesage came from ${senderEmail}</p>`
  });
}