var modbus = require("modbus-stream");

var host = "localhost"
var port = 502

modbus.tcp.server({ debug: "server" }, (connection) => {
  connection.on("read-holding-registers", (request, reply) => {
    reply(null, [ Buffer.from([ 0x01, 0x02 ]), Buffer.from([ 0x03, 0x04 ]), Buffer.from([ 0x05, 0x06 ]) ]);
  });
}).listen(port, () => {
});
