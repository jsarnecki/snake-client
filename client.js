// const connect = require("./play");
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("connect", () => {
    conn.write("Name: JNS");
    console.log("Successfully connected to the game server")
  })

  conn.on("connect", () => {
    // let movements = ["Move: up", "Move: up", "Move: up", "Move left", "Move left", "Move left", "Move right", "move right"];
    // let dur = 0;
    // for (let move of movements) {
    //   setTimeout(() => {
    //     conn.write(move);
    //     console.log(move);
    //   }, dur += 500);
    // };
    
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
