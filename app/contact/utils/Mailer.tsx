"use server"
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.SMTP_SERVER_USERNAME,
    pass: process.env.SMTP_SERVER_PASSWORD,
  },
});

export default async function Mailer(
	{
    Name,
		EmailTo,
		Message,
	}: {
    Name: string;
		EmailTo: string;
		Message: string;
	}
) {

	const mailOptions: Mail.Options = {
		from: process.env.SITE_MAIL_RECIEVER,
		to: process.env.SITE_MAIL_RECIEVER,
		subject: `Une nouvel demande viens d'être reçu de la part de ${Name} (${EmailTo})`,
		text: Message,
	};

  await Confirmation({EmailTo: EmailTo})

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
		return true;
	} catch {
		return false;
	}
}

async function Confirmation(
  {
    EmailTo,
  }: {
    EmailTo: string;
  }
) {
  const mailOptions: Mail.Options = {
    from: process.env.SITE_MAIL_RECIEVER,
    to: EmailTo,
    subject: "Merci de m'avoir contacté !",
    html: `
      <h2>Merci pour votre message</h2>
      <p>
        Bonjour,<br><br>
        Merci d'avoir pris le temps de me contacter via mon portfolio.<br>
        J'ai bien reçu votre message et je vous répondrai dès que possible.
      </p>
      <p>
        À bientôt,<br>
        <strong>Gabriel</strong>
      </p>
      <hr>
      <p style="font-size: 12px; color: #555;">
        Cet email est une confirmation automatique. Merci de ne pas y répondre.
      </p>
    `
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
    return true;
  } catch {
    return false;
  }
}
