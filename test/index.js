
const {
  NetClientProxyEmitter,
  NetServerProxyEmitter
} = require('../index')
const client = new NetClientProxyEmitter()
//const client2 = new NetClientProxyEmitter()
const server = new NetServerProxyEmitter()

//client2.connect('zesz',1111) // assert error

server.listen(9999)

server.ev.on('socket.data',(socket, data)=>{
  server.send(socket, `I received your message : """${data}"""`)
})

client.connect('localhost',9999)

client.send('Hey srv its me')

client.disconnect()