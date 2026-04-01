type Message = {
    waId: string, 
    body: string,
    smsSid: string,
}

const parseMessage = (data: Record<string, string>):Message => {
    const message: Message = {
        waId: '', 
        body: '',
        smsSid: '',
    };
    if(Object.prototype.hasOwnProperty.call(data, 'WaId')
        && Object.prototype.hasOwnProperty.call(data, 'Body')
        && Object.prototype.hasOwnProperty.call(data, 'SmsSid'))
        message.waId = data['WaId'] || '';
        message.body = data['Body'] || '';
        message.smsSid = data['SmsSid'] || '';
    return message;
};

export { parseMessage, type Message };
