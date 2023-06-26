const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  // process.stdout.write gives us more control than console.log
  // (prints individual characters one by one on single line, rather
  // than adding \n after every character as console.log does):
  process.stdout.write(char);
}