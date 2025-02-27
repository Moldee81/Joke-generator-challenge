function handleClick() {
  axios.get(apiUrl).then(tellJoke);
}

let buttonElement = document.querySelector("#joker");

function tellJoke(response) {
  let jokeElement = document.querySelector("#joke");
  // Clear the content before starting typing
  jokeElement.innerHTML = "";

  // Create a new instance of Typewriter for the joke
  const typewriter = new Typewriter(jokeElement, {
    autoStart: true,
  });

  // Use the joke text from the response to type it out
  typewriter.typeString(response.data.answer).start();
}

let apiKey = "6dod2fbfa8c43fe552ftae49bc36d90b";
let context =
  "you have a fantastic sense of humor and you know a lot of short jokes about Polish people, please provide a funny joke";
let prompt =
  "Tell a short joke about Polish without any intro or sidenotes, be concise"; // Fixed "wihtout" to "without"
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let jokeElement = document.querySelector("#joke");

// Initial instruction before the joke is fetched
const typewriter = new Typewriter(jokeElement, {
  autoStart: true,
});

typewriter.typeString("Press the button to get a joke").start();

buttonElement.addEventListener("click", handleClick);
