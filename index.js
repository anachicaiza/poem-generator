function displayJoke(response) {
    console.log(response.data);
    let jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = response.data.answer;

    new Typewriter("#joke", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20
    })
}

function generateJoke(event) {
    event.preventDefault();
    let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
    let context = "You are a funny AI assisstant who tells really good jokes. Also, you hate to tell the same joke twice, so do not repeat yourself.";
    let prompt = "Generate a short joke about whatever you want. Everyitme the button is clicked i want you to tell a different joke. display only the joke as an asnwer to the button but do not add extras.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    console.log("Generating...")
    let jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = "Generating a joke for you...please wait";
    axios.get(apiURL).then(displayJoke);
}

let button = document.querySelector("#joke-button");
button.addEventListener("click", generateJoke);