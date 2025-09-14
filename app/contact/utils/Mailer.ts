import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default async function Mailer (
    { 
        EmailTo, 
        Message,
    }: 
    { 
        EmailTo: string; 
        Message: string; 
    }
)
{  
  const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: process.env.SMTP_SERVER_USERNAME,
      pass: process.env.SMTP_SERVER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SITE_MAIL_RECIEVER,
    to: EmailTo,
    subject: `Message from ${name} (${EmailTo})`,
    text: Message,
  };

  const SendMail = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await SendMail();
    return "Send with successfully"
  } catch (err) {
    return err
  }
}