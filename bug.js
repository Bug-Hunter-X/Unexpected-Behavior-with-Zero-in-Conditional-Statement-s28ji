function foo(x){
  if (x === null) {
    return 0; // Handle null case
  } else if (x < 0) {
    return -1; // Handle negative numbers
  }
  // The bug lies here: The condition x == 0 should be x === 0
  else if (x == 0) {
    return 1; // Incorrectly handles 0 as 'falsey'
  } else {
    return x; // Returns original number for positive
  }
}