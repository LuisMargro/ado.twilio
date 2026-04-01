import dotenv from 'dotenv';
import { type AppConfig}  from '../types/app.d.js';

dotenv.config();

const config: AppConfig = {
    twilioAccountSID: process.env.TWILIO_ACCOUNT_SID || '',
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || '',
    twilioNumber: process.env.TWILIO_NUMBER || ''
};

export default config;