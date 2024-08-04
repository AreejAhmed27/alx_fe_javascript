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
  
  function loadQuotes() {
    const storedQuotes = localStorage.getItem("quotes");
    if (storedQuotes) {
      quotes = JSON.parse(storedQuotes);
    }
  }

  function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }

  function exportToJson() {
    const json = JSON.stringify(quotes);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    a.click();
  }

  function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

  //calling each function 
  loadQuotes() 
  showRandomQuote();
  createAddQuoteForm();