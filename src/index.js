module.exports = function toReadable (number) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['0', '0', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numberOfHundreds = Math.trunc( number / 100 );
  let remainderHundred = number % 100;
  let numberOfTens = Math.trunc( remainderHundred / 10 );
  let remainderTen = remainderHundred % 10;

  if ( number >= 100) {
      if ( remainderHundred === 0 ) {
          return ( `${numbers[ numberOfHundreds ]} hundred` );
      }
      else {
          if ( remainderHundred < 20) return ( `${numbers[ numberOfHundreds]} hundred ${numbers[remainderHundred]}` );
          else {
              if ( numberOfTens ) {
                  if ( remainderTen ) return ( `${numbers[ numberOfHundreds]} hundred ${tens[numberOfTens]} ${numbers[remainderTen]}` );
                  else return ( `${numbers[ numberOfHundreds]} hundred ${tens[numberOfTens]}` );
              }
              else {
                  if ( remainderTen ) return ( `${numbers[ numberOfHundreds]} hundred ${numbers[remainderTen]}` );
              }
          }
      }
  }
  if ( number >= 20 ) {
      if ( remainderTen ) return ( `${tens[numberOfTens]} ${numbers[remainderTen]}` );
      else return ( `${tens[numberOfTens]}` );
  }
  else return ( `${numbers[number]}` );
}
