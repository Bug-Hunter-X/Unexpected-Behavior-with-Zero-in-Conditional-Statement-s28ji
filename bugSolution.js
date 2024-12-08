function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x < 0) {
    return -1; // Handle negative numbers
  }
  // Bug fixed: Use strict equality (===) to correctly check for zero
  else if (x === 0) {
    return 1; // Correctly handles 0
  } else {
    return x; // Returns original number for positive
  }
}
