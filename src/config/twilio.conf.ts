import Twilio from 'twilio';
import config from './app.conf.js';

const twilio = Twilio(config.twilioAccountSID, config.twilioAccountSID);

export default twilio;