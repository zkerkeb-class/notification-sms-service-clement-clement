import express from 'express';
import {
  sendConfirmationEmail,
  sendPasswordResetCode,
} from '../controllers/emailController.js';
// import {sendSMS} from '../controllers/smsController';

const router = express.Router();

router.post('/sendConfirmationEmail', sendConfirmationEmail);
router.post('/sendPasswordResetCode', sendPasswordResetCode);
// router.post('/sendSMS', sendSMS);

export default router;
