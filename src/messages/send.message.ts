import { MessageInstance } from 'twilio/lib/rest/api/v2010/account/message.js';
import client from '../config/twilio.conf.js';
import appConfig from '../config/app.conf.js';
import { type Message } from '../types/app.types.js';
/**
 * Envia un mensaje de texto plano a whatsapp usando la configuracion por defecto
 * @param message Objecto con la informacion del mensaje a responder
 * @returns una promesa con el id de la respuesta
 */
async function sendMessage(message : Message): Promise<MessageInstance> {
    const twilioMessage = await client.messages.create({
        body: message.body,
        from: `whatsapp:+${appConfig.twilioNumber}`,
        to: `whatsapp:${message.waId}`
    });
    return twilioMessage;
}

export default sendMessage;