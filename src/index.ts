import express, { type Response, type Request } from 'express';
import twilio from 'twilio';
import config from './config/app.conf.js';
import sendMessage from './messages/send.message.js';
import { parseMessage }from './messages/parse.message.js';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', true);

app.post('/webhook',  twilio.webhook(config.twilioAuthToken), async(req: Request, res: Response) => {
  const message = parseMessage(req.body);
  message.body = 'hola tu mensaje fue el siguiente: ' + message.body;
  await sendMessage(message);
  res.status(200).json({ok: true, msg: 'mensaje envaido'});

});
app.get('/health', (req: Request, res: Response) => {
  console.log(req.body);  
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});
