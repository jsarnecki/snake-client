
let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  connection = conn;

  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "t") {
    connection.write("Say: YeehaW");
  }
};

module.exports = {
  setupInput
}

// let stdin = process.stdin;
// //Start typing a message less than 5 chars.
// let arr = [];
// stdin.on("data", (key) => {
//   arr.push(key);
//   if (arr.length >= 5) {
//     let answer = arr.join("");
//     connection.write(`Say: ${answer}`);
//   }