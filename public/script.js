const baseURL = 'https://api.giphy.com/v1/gifs/search';
const key = 'QdaGvpclc6BE390B35gTZWmmlCtVJftN';
let url;
const keywordSearch = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const form = document.querySelector('form');
const resultsSection = document.querySelector('.container-fluid');

form.addEventListener('submit', fetchGifs);


async function fetchGifs(e) {
    e.preventDefault();
    url = `${baseURL}?api_key=${key}&q=${keywordSearch.value}&limit=20&rating=pg-13`
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    displayResults(data);

}

function displayResults(data) {
    console.log('Display Results', data);
    let gifs = data.data;
    if (gifs.length === 0) {
        //console.log(`No gifs for ${keywordSearch.value} found. Please try another search term.`);
        console.log('no results');
    } else {
        for(let i = 0; i < gifs.length; i++) {
            let img = document.createElement('img');
            let arrayStart = gifs[i]
            img.src = arrayStart.images.fixed_width.url;
            resultsSection.appendChild(img);
        }
    }
}