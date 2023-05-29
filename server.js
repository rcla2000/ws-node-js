const WebSocket = require('ws');

// Crea un nuevo servidor WebSocket en el puerto especificado
const wss = new WebSocket.Server({ port: 6001 });

// Manejador de conexión para cuando un cliente se conecta al servidor WebSocket
wss.on('connection', (ws) => {
  // Evento para cuando se recibe un mensaje del cliente
  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message);

    // Envía un mensaje de vuelta al cliente
    ws.send('¡Hola cliente!');
  });

  // Evento para cuando se cierra la conexión con el cliente
  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket iniciado en el puerto 6001');