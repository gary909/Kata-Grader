function grader(score) {
  if(score < 0.6 || score > 1){
    return "F";
  } else if (score < 0.7){
    return "D";
  } else if (score < 0.8){
    return "C";
  }  else if (score < 0.9){
    return "B";
  } else {
    return "A";
  }
}

console.log(grader(0.7)); // "C"
console.log(grader(0.9)); // "A"
console.log(grader(0.6)); // "D"

// Anything greater than 1 or less than 0.6	"F"<br>
// 0.9 or greater	"A"<br>
// 0.8 or greater	"B"<br>
// 0.7 or greater	"C"<br>
// 0.6 or greater	"D"<br>