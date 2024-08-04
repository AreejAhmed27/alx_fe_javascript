// Array of quote objects
let quotes = [
    {
         text: "The only way to do great work is to love what you do.", 
         category: "Inspiration" },
    { 
        text: "Believe you can and you're halfway there.", 
        category: "Motivation" },
    { 
        text: "It does not matter how slowly you go as long as you do not stop.", 
        category: "Perseverance" },
  ];
  
  // Function to display a random quote through the index
  function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
  }
  //calling each function  
  showRandomQuote();