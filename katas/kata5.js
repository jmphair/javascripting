const urlEncode = function(text) {
  const whitespace = text.length;
  // use ternary operator to find 'whitespace'
  const start = text[0] === ' ' ? 1 : 0;
  const end = text[whitespace - 1] === ' ' ? whitespace - 1 : whitespace;
  let result = "";
  // run for loop to replace 'whitespace' with '%20'
  for (let i = start; i < end; i++) {
       result += text[i] === ' ' ? '%20' : text[i];
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));