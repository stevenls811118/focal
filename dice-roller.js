const diceRoller = function() {
  const num = Number(process.argv.slice(2).toString());
  let str = "";
  for (let i = 0; i < num; i++) {
    str += (Math.floor(Math.random() * 6) + 1).toString() + ", ";
  }
  return "Rolled 3 dice: " + str.replace(/,\s$/, "");
};

console.log(diceRoller());