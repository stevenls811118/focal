const obfuscate = function(str) {
  //let result = str.replace(/a/g, 4).replace(/e/g, '3').replace(/o/g, '0').replace(/l/g, '1');
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case 'a':
        arr[i] = '4';
        break;
      case 'e':
        arr[i] = '3';
        break;
      case 'o':
        arr[i] = '0';
        break;
      case 'l':
        arr[i] = '1';
        break;
    }
  }
  return arr.join('');
}

let str = process.argv.slice(2).toString();
console.log(obfuscate(str));