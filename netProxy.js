const Emitter = require('events')
const debug = require('debug')

class NetClientProxy {
  constructor() {
    this.ev = new Emitter()
    this._log = debug('netProxy:client')
    this._initEvents()
  }
  _initEvents() {
    this.ev.on('error', err => this._log('Error :', err))
    this.ev.on('connect', () => this._log('connect'))
    this.ev.on('connected', socket => this._log('connected:', socket))
    this.ev.on('disconnect', () => this._log('disconnected'))
    this.ev.on('destroy', () => this._log('destroyed'))
    this.ev.on('data', data => this._log('data:', data.toString()))
  }
  get socket() {
    return null
  }
  connect(ip, port) {
    this.ev.emit('connect')
    this.ev.emit('connected', `${ip}:${port}`)
  }
  disconnect() {
    this.ev.emit('disconnect')
  }
  send(data) {
    this._log('Send :', data)
  }
}

class NetServerProxy {
  constructor() {
    this.ev = new Emitter()
    this._log = debug('netProxy:server')
    this._initEvents()
  }
  _initEvents() {
    this.ev.on('error', err => this._log('Error:', err))
    this.ev.on('start', () => this._log('start listening'))
    this.ev.on('stop', () => this._log('stop listening'))
    this.ev.on('socket.connect', socket => this._log('s.connect:', socket))
    this.ev.on('socket.disconnect', socket => this._log('s.disconnect:', socket))
    this.ev.on('socket.data', (socket, data) =>
      this._log('data:', socket, data)
    )
  }
  listen(port) {
    this.ev.emit('start')
  }
  stop() {
    this.ev.emit('stop')
  }
  send(socket, data) {
    this._log(`Send ${socket}:`, data)
  }
}

module.exports = {
  NetClientProxy,
  NetServerProxy
}