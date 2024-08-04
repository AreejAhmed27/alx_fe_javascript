// Array of quote objects
let quotes = [
    {
         text: "The only way to move forward is to simply move.", 
         category: "Inspiration" },
    { 
        text: "Believe in yourself, trust yourself and no one in the world will be able to break that bond.", 
        category: "Motivation" },
    { 
        text: "You will never lose if you never quit.", 
        category: "Perseverance" },
  ];

  function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("qouteDisplay").innerHTML = quotes[randomIndex];
  }
  
  function createAddQuoteForm() {
    let form = document.createElement("form");
    let newQoute = document.getElementById("newQouteText");
    let newCat = document.getElementById("newQouteCategory");

    document.getElementById("addQoute()").appendChild(form);
  }
  submitButton.addEventListener("click", (addQoute) => {
    e.preventDefault();
    quotes.push(newQuote);
    displayQuote(newQuote);
  });
  
  //calling each function  
  showRandomQuote();
  createAddQuoteForm();