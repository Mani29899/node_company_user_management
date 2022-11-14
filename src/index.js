import App from './main.js';
import dbConfig from './config/dbConfig.js';
import http from 'http';

const httpServer = http.createServer(App);
const { sql } = dbConfig;
const { port } = sql;

httpServer.listen(port);
const onListening = () => {
    var addr = httpServer.address();
    var bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + ' ' + addr.port;
    console.log('listening on'+' ' + bind);
}
httpServer.on('listening', onListening);



