function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

// OR
// You can omit the explicit comparison to zero as the conditional expression itself evaluates to a truthy or falsy value (1 or 0) respectively, for odd and even values of argument, respectively, although you would need to swap the places of 'Even' and 'Odd' for it to work here.

function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even'
}



