 /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  
  stdin.on('data', (key) => {
    handleUserInput(key);
    if (key === 'w'){
      conn.write("Move: up")
    }
    if (key === 's'){
      conn.write("Move: down")
    }
    if (key === 'a'){
      conn.write("Move: left")
    }
    if (key === 'd'){
      conn.write("Move: right")
    }
  });
  stdin.resume();
  return stdin;
}
const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }
}
module.exports.setupInput = setupInput;