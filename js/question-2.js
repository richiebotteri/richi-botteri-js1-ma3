const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f11fdab599f7460b94d035e6d486907f";

function getApiData() {
   fetch(API_URL)
      .then(function (response) {
         return response.json();
      })
      .then(function (convertedJsonData) {
         runHtmlPrintLoop(convertedJsonData.results);
      })
      .catch(function (err) {
         console.log(err);
      });
}

const divElement = document.querySelector("div");
let htmlOutput = "";

function runHtmlPrintLoop(apiArray) {
   for (let i = 0; i < apiArray.length; i++) {
      if (i < 8) {
         htmlOutput += `
        <ul>
        <li>name: ${apiArray[i].name}</li>
        <li>Rating: ${apiArray[i].rating}</li>
        <li>Number of Tags: ${apiArray[i].tags.length}</li>
        </ul>`;
      } else {
         divElement.innerHTML = htmlOutput;
      }
   }
}

getApiData();
