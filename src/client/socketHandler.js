import { EVENTS } from '../common/constants';

export default (socketClient, ui) => {
    socketClient.on(EVENTS.BROADCAST_MESSAGE, (data) => {
        console.log(EVENTS.BROADCAST_MESSAGE, data);
        ui.messages.innerHTML += `<p>${data.value}</p>`
    });
};