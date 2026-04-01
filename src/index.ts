import express, { type Response, type Request } from 'express';
import twilio from 'twilio';
import config from './config/app.conf.js';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.post('/webhook',  twilio.webhook(config.twilioAuthToken),(req: Request, res: Response) => {
  console.log(req.body);
  const twiml = new twilio.twiml.MessagingResponse();
  twiml.message('Message received! Hello again from the Twilio Sandbox for WhatsApp.');
  res.type('text/xml').send(twiml.toString());

});
app.get('/health', (req: Request, res: Response) => {
  console.log(req.body);  
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});
