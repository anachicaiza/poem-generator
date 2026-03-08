function displayPoem(response) {

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20
    });

    let submitButton = document.querySelector('#submit-button')
    submitButton.removeAttribute('disabled');
}

function displayShecodesPoem() {
    let poem = `
    My heart compiles when your logic is near,<br />
    Through loops of thought, your patterns appear,<br />
    In silent code our dreams align,<br />
    A love algorithm—yours and mine.<br />
    <strong>SheCodes AI</strong>
    `;

    new Typewriter("#poem", {
        strings: poem,
        autoStart: true,
        delay: 1,
    });

}

function generate(event) {
    event.preventDefault();
    let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
    let context =
        "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning. Do not include markdown around it";
    let instructionsInput = document.querySelector("#instructions");
    let prompt = `User instructions: Generate a romantic poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let submitButton = document.querySelector('#submit-button')
    submitButton.setAttribute('disabled', 'disabled');
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden")
    poemElement.innerHTML = `<div class="waiting">⏳ Generating a poem about ${instructionsInput.value}..</div>`;
    axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#search-form");
poemForm.addEventListener("submit", generate);
displayShecodesPoem();