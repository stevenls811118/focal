const sum = function() {
  const args = process.argv.slice(2);
  console.log(Number(args[0]) + Number(args[1]));
};

sum();