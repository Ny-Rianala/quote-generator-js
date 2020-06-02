// create arrays for each quotes
const quoteWord = prompt("Enter a word:");

  let quote1 = ["God always takes the simplest way.", "Be as you wish to seem.",  "The world is always in movement."];
  let quote2 = ["Life is not a dream", "Never give up", "Only do what your heart tells you"];
  let quote3 = ["Never look yourself down", "Be yourself"];
  
// Show results when the users type number
  function quote() {
    for (let i = 0; i < quote.length; i++) {
      if (quote === 2) {
        console.log("quote1");
      }else if(quote === 2) {
          console.log("quote2");
      }else if (quote === 1) {
          console.log("quote3");
      }else{
          alert("undefined");
      }
    }
}    
console.log (`${quote1} , ${quote2} , ${quote3}`);