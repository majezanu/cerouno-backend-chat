import { EVENTS } from '../common/constants';

export default (socketClient) => {
    socketClient.emit(EVENTS.TEST, {value: 'Hello socket'});
    const message = document.getElementById('message');
    const sendMessage = document.getElementById('send-message');
    const messages = document.getElementById('message-list');

    sendMessage.addEventListener('click', () => {
        const msg = message.value;
        if(msg)
            socketClient.emit(EVENTS.SEND_MESSAGE, {
                value: message.value
            });
            message.value = '';
    });
    return {
        messages
    };
}