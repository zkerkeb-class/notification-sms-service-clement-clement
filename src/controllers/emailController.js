import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Créez un transporteur réutilisable en utilisant le transport SMTP par défaut
let transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net', // Serveur SMTP OVH
  port: 465,
  secure: true, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.SMTP_EMAIL, // Votre adresse e-mail OVH
    pass: process.env.SMTP_PASSWORD, // Votre mot de passe OVH
  },
});

export const sendConfirmationEmail = async (req, res) => {
  // Lire le fichier HTML
  const htmlTemplate = fs.readFileSync(templatePath, 'utf8');

  let info = await transporter.sendMail({
    from: '"YNOV WS" <ynov@clementwds.com>', // Expéditeur
    to: req.body.email, // Destinataire
    subject: "Confirmation d'e-mail", // Sujet
    text: 'Veuillez confirmer votre e-mail', // Texte brut
    html: '<b>Veuillez confirmer votre e-mail</b>', // HTML
  });

  res.status(200).send(`E-mail de confirmation envoyé: ${info.messageId}`);
};

export const sendPasswordResetCode = async (req, res) => {
  let info = await transporter.sendMail({
    from: '"YNOV WS" <ynov@clementwds.com>', // Expéditeur
    to: req.body.email, // Destinataire
    subject: 'Réinitialisation du mot de passe', // Sujet
    text: 'Voici votre code de réinitialisation du mot de passe', // Texte brut
    html: '<b>Voici votre code de réinitialisation du mot de passe</b>', // HTML
  });

  res
    .status(200)
    .send(`Code de réinitialisation du mot de passe envoyé: ${info.messageId}`);
};
