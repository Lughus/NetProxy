# NetProxy

NetProxy is a simple "interface" that is will be used to wrap a net utils so we can swap between them easily.
This package contains the interface and one example that use the events module to emulate a net interface

## Create a new proxy

- install `npm i @lug/netproxy`
- import 
```js
const {NetClientProxy, NetServerProxy} = require('@lug/netproxy')
class Server extends NetServerProxy { ... }
class Client extends NetClientProxy { ... }
```

please see `netProxyEmul.js` for an example for how it works

## Methods

At the end you will have this

- Server
  - listen(port)
  - stop()
  - send(socket,data)
- Client
  - connect(ip,port)
  - disconnect()
  - send(data)

and some events that are triggered when it needs to

## Events

An event is fired with `this.ev.emit('event'[,arg])`

### Server

| event             | arg          | type        | description                     |
| ----------------- | ------------ | ----------- | ------------------------------- |
| error             | error        | any         | when an error happen            |
| start             | -            | -           | when the server start listening |
| stop              | -            | -           | when the server stop            |
| socket.connect    | socket       | socket      | when a client connect           |
| socket.disconnect | socket       | socket      | when a client disconnect        |
| socket.data       | socket, data | socket, any | when a client send data         |

### Client

| event             | arg    | type        | description                       |
| ----------------- | ------ | ----------- | --------------------------------- |
| error             | error  | any         | when an error happen              |
| connect           | -      | -           | when the client is connecting     |
| connected         | socket | socket      | when the client is connected stop |
| disconnect        | -      | -           | when a client disconnect          |
| destroy           | -      | -           | when a client is destroyed        |
| data              | data   | any         | when a client recieve data        |


