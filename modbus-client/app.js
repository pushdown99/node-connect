var modbus = require("modbus-stream");

//modbus.tcp.server({ debug: "server" }, (connection) => {
//  console.log("do something with connection");
//}).listen(502, () => {
//  console.log("ready");
//});
var host = "localhost"
var port = 502

modbus.tcp.connect(port, host, { debug: "automaton-2454" }, (err, connection) => {
  if(err) console.log(host + ":" + port + " - server no response");
  else {
    connection.readHoldingRegisters ({ address: 1, quantity: 1 }, (err, info) => {
      console.log("response", info.response.data);
    });
  }
});
