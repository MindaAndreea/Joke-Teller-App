const buton = document.getElementById("joke-btn");

const container = document.querySelector(".joke-container");

async function getDataFromAPI() {
  const url =
    " https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?blacklistFlags=sexist ";

  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Eroare API: " + error);
  }
}

getDataFromAPI();
