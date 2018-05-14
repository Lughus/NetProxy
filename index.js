const proxy = require('./netProxy')
const emul = require('./netProxyEmul')

module.exports = Object.assign({}, proxy, emul)