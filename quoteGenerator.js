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
  let randomIndex1= Math.floor(Math.random() *quote1.length);
  let randomIndex2 = Math.floor(Math.random() *quote2.length);
  let randomIndex3 = Math.floor(Math.random() *quote3.length);

  let array1 = quote1[randomIndex1];
  let array2 = quote2[randomIndex2];
  let array3 = quote3[randomIndex3];

  let quote = `${array1} ${array2} ${array3}`;
  console.log(quote);

//1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
const quoteNumber = prompt("Number of quotes (from 1 to 5):");
const generateRandomNumber = (array1, array2, array3) => {
  let quotes = Math.floor(Math.random() * generateRandomNumber.length);
  for (let i = 0; i <= 5; i++);
    if (quotes === 1){
      generateRandomNumber(quote1);
    }else if(quotes === 2){
      generateRandomNumber(quote*2); 
    }else if(quotes === 3){
      generateRandomNumber(quote *3);
    }else if(quotes === 4){
      generateRandomNumber(quote *4);
    }else if(quotes === 5){
      generateRandomNumber(quote *5);
    }else{
      console.log(error);
    }
}
  
// //3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!

// //4. refactor our code into a function, and put the function call inside the loop
  
// //4.1 generate random numbers
//4.2 show the generated quotes
