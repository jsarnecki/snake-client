// const connect = require("./play");
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("You receive this message from server: ", data);
  })

  conn.setEncoding("utf8");

  return conn;
};
const num = 42;

module.exports = {
  connect: connect
};
