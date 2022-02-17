const {IP, PORT} = require("./constants");
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    conn.write("Name: J");
    console.log("Successfully connected to the game server")
  })

  conn.on("data", (data) => {
    console.log("You receive this message from server: ", data);
  })

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect: connect
};


