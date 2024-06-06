const buton = document.getElementById("joke-btn");

const jokeContainer = document.querySelector(".joke-container");

async function addJoke() {
  let joke = "";
  jokeContainer.textContent = "Loading...";

  const data = await getDataFromAPI();
  if (data.type === "single") {
    joke = data.joke;
  } else {
    joke = data.setup + " " + data.delivery;
  }
  jokeContainer.textContent = joke;

  tellTheJoke();
}

async function getDataFromAPI() {
  const url =
    " https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?blacklistFlags=racist,sexist ";

  try {
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("Eroare API: " + error);
  }
}

buton.addEventListener("click", addJoke);

function tellTheJoke() {
  VoiceRSS.speech({
    key: "5ff4b1b6ab8143f488a977bc3a2f2a9c",
    src: "Hello, world!",
    hl: "en-us",
    v: "Linda",
    r: 1,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}
