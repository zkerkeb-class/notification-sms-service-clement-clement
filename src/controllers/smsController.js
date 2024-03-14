import {Vonage} from '@vonage/server-sdk';
import dotenv from 'dotenv';

dotenv.config();

const vonage = new Vonage({
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_SECRET,
});

const from = 'YNOV WS';
const to = '33619023471';
const text = 'Bonjour et bienvenue sur Ynov WS';

export const sendSMS = async (req, res) => {
  try {
    const resp = await vonage.sms.send({to, from, text});
    console.log('Message sent successfully');
    console.log(resp);
    res.status(200).send('Message sent successfully');
  } catch (err) {
    console.log('There was an error sending the messages.');
    console.error(err);
    res.status(500).send('There was an error sending the messages.');
  }
};
