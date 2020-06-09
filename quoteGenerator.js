//Create arrays for all quotes
  let quote1 = [
    'Thanks God',
    'God loves us',
    'Always pray',
    'Be honest',
    'Target'
  ];
  let quote2 = [
    'Please', 
    'Thanks', 
    'Welcome',
    'Sorry',
    'Do not give up'
  ];

  let quote3 = [
      'Fine',
     'Good', 
     'Goodbye',
     'Whatever',
     'Whenever'
  ];
  const generatedQuote = () =>{
    let randomIndex1= Math.floor(Math.random() *quote1.length);
    let randomIndex2 = Math.floor(Math.random() *quote2.length);
    let randomIndex3 = Math.floor(Math.random() *quote3.length);
    let array1 = quote1[randomIndex1];
    let array2 = quote2[randomIndex2];
    let array3 = quote3[randomIndex3];
    let quote = `${array1} ${array2} ${array3}`;
    console.log(quote);
  };

//1. use prompt to ask the user how many times we want to generate a random quote
  const quoteNumber = prompt("Number of quotes ( 1 to 5):");
//2. check if the prompt give us something between 1 and 5
  if (quoteNumber >= 1 && quoteNumber <= 5){
// //3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
  for (let i = 0; i > quoteNumber; i++){
// //4. refactor our code into a function, and put the function call inside the loop
// //4.1 generate random numbers
//4.2 show the generated quotes
  let quote = generatedQuote();
  console.log(quote);
  }
  }else{
    console.error('We need a number between 1 and 5');
}