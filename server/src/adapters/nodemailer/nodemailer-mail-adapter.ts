import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6d173d28b38bd9",
    pass: "941a61b163ebae"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Elias Gabriel <elias.gabriel@rocketseat.team>',
    subject,
    html: body,
  });
  }
}
