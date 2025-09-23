const plyn = localStorage.getItem('user-name');
let scores = Number(localStorage.getItem('user-score'));
let hintCounter = Number(localStorage.getItem('user-hints'));
document.querySelector('#player-name').textContent = plyn;
document.querySelector('#player-score').textContent = scores;
document.querySelector('#player-hints').textContent = hintCounter;
const answer = document.querySelector('.answer');

for(i = 0; i < 10 ; i++){

    if (scores > 5) {
        document.querySelector('#winner-title').textContent = "Golden Wanderer";
    } else if (scores <= 5) {
        document.querySelector('#winner-title').textContent = "Novice";
    }
}
//sent values to next page-------------------
answer.addEventListener('click', event => {
    event.preventDefault();
    const nameValue = '';
    let scores = 0;
    let hintCounter = 0;
    localStorage.setItem('user-name', nameValue);
    localStorage.setItem('user-score', scores);
    localStorage.setItem('user-hints', hintCounter);
    
    window.location.href = "index.html";

});

