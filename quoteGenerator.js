//Create arrays for all quotes
function quoteArr(){
  let quote1 = [
    'Thanks God',
    'God loves us',
    'Always pray'
  ];
  let randomIndex1= Math.floor(Math.random() *quote1.length);
  let quote2 = [
    'Please', 
    'Thanks', 
    'Welcome'
  ];
  let randomIndex2 = Math.floor(Math.random() *quote2.length);
  let quote3 = [
      'Fine',
     'Good', 
     'Goodbye'
  ];
  let randomIndex3 = Math.floor(Math.random() *quote3.length);
  return finalQuote = `${quote1[randomIndex1]} ${quote2[randomIndex2]} ${quote3[randomIndex3]}`;
}
  console.log(quoteArr());
//  const quoteNumber = prompt("How many quotes (from 1 to 5):");