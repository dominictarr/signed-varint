var varint = require('varint')
exports.encode = function encode (v, b, o) {
  v = v >= 0 ? v*2 : v*-2 - 1
  var r = varint.encode(v, b, o)
  encode.bytesWritten = varint.encode.bytesWritten
  return r
}
exports.decode = function decode (b, o) {
  var v = varint.decode(b, o)
  decode.bytesRead = varint.decode.bytesRead
  return v & 1 ? (v+1) / -2 : v / 2
}

exports.encodingLength = function (v) {
  return varint.encodingLength(v >= 0 ? v*2 : v*-2 - 1)
}
