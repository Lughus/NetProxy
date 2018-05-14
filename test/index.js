
const {
  NetClientProxyEmitter,
  NetServerProxyEmitter
} = require('../index')
const client = new NetClientProxyEmitter()
const server = new NetServerProxyEmitter()

client.connect('zesz',1111)

server.listen(9999)

client.connect('localhost',9999)