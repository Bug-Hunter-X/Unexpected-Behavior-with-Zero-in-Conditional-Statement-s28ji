# JavaScript Bug: Incorrect Zero Handling in Conditional

This repository demonstrates a common JavaScript bug related to the incorrect handling of zero in conditional statements. The issue stems from using loose equality (==) instead of strict equality (===) when checking for zero.

## Bug Description
The provided JavaScript function `foo` aims to handle different input values (null, negative numbers, zero, and positive numbers) based on conditional statements. However, the loose equality check (`x == 0`) incorrectly identifies the number zero as a 'falsey' value, resulting in unexpected output when the input is zero.

## Bug Solution
The solution involves replacing loose equality (==) with strict equality (===) in the conditional statement to ensure precise and reliable comparison.

## How to Reproduce
1. Clone this repository.
2. Open the `bug.js` file and observe the flawed function `foo`.
3. Execute the `bug.js` file and call the function `foo(0)`. You'll notice that it returns 1 instead of the expected result.
4. Open the `bugSolution.js` file to see how the issue is resolved with strict equality.
5. Execute the `bugSolution.js` file and call the function `foo(0)` to see the corrected output.
