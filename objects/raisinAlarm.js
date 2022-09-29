const raisinAlarm = function (cookie) {
  if (cookie.includes("🍇")) {
    return "Raisin alert!";
  }  
  return "All good";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  let result = [];
  for (let item of cookies) {
    if (Array.isArray(item)) {
      result.push(raisinAlarm(item));
    } 
  } 
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

//pair programmed by @stevenls811118 & nicholasburgess17