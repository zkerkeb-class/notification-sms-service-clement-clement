import express from 'express';
import {
  sendConfirmationEmail,
  sendPasswordResetCode,
  sendFactureEmail,
} from '../controllers/emailController.js';
import {sendSMS} from '../controllers/smsController.js';

const router = express.Router();

router.post('/sendConfirmationEmail', sendConfirmationEmail);
router.post('/sendPasswordResetCode', sendPasswordResetCode);
router.post('/sendFactureEmail', sendFactureEmail);

router.post('/sendSMS', sendSMS);

export default router;
