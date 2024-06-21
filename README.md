    # String Sum Calculator

This project implements a string sum calculator using TypeScript, following the principles of Test-Driven Development (TDD). The calculator supports custom delimiters and handles various edge cases, including negative numbers.

## Features

- Calculate the sum of numbers in a comma-separated string.
- Support for custom delimiters specified at the start of the string.
- Handle newlines as delimiters.
- Throw an exception for negative numbers with a detailed message.

## Function Signature

The main function `calculateStringSum` has the following signature:

## Examples

```typescript
function calculateStringSum(input: string): number


calculateStringSum(""); // returns 0
calculateStringSum("1"); // returns 1
calculateStringSum("1,5"); // returns 6
calculateStringSum("1\n2,3"); // returns 6
calculateStringSum("//;\n1;2"); // returns 3
calculateStringSum("-1"); // throws Error: negative numbers not allowed: -1
calculateStringSum("-1,-2"); // throws Error: negative numbers not allowed: -1,-2
```


## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation

- Clone the repository:
```bash
git clone https://github.com/shivammodiin/string-calculator
cd string-calculator 
```

- Install the dependencies:

```bash
npm install
```
