 /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection; 
const { IP, PORT, keyBind} = require('./constants');
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  
  stdin.on('data', (key) => {
    handleUserInput(key);
      conn.write(keyBind[key]);    
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