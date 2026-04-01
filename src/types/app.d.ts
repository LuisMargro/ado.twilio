import { z } from 'zod';

const configSchema = z.object({
    twilioAccountSID: z.string(),
    twilioAuthToken: z.string(),
    twilioNumber: z.string()
});
type AppConfig = z.infer<typeof configSchema>;
type Message = {
    waId: string, 
    body: string,
    smsSid: string,
}
export{
    type AppConfig,
    type Message,
    configSchema
};