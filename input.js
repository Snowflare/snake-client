 /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    handleUserInput(key);
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