const instructorWithLongestName = function(instructors) {
  let longest = instructors[0].name.length;
  let answer = instructors[0];
  for (let i = 0; i < instructors.length; i++) {
    const longer = instructors[i].name.length;
    if (longer > longest) {
      answer = instructors[i];
      instructors = longer;
    }
  }
  return answer;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));