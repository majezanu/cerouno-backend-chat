import {EVENTS} from '../../common/constants';

export default (io) => (socket) => {
    socket.on(EVENTS.TEST, (data) =>{
        console.log('Test Connection', data);
    });

    socket.on(EVENTS.SEND_MESSAGE, (data) => {
        console.log(data);
        io.emit(EVENTS.BROADCAST_MESSAGE, data);
    })
}