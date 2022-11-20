const sumLargestNumbers = function (data) {
  largestNumOne = 0;
  largestNumTwo = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumOne) {
      largestNumTwo = largestNumOne;
      largestNumOne = data[i];
    }
  }
  return largestNumOne + largestNumTwo
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));