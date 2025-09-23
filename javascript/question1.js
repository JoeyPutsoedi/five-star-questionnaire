const plyn = localStorage.getItem('user-name');
let wincount = 0;
let hintcount = 0;
document.querySelector('#player-name').textContent = plyn;

const hints = document.querySelector('.hint');
const answer = document.querySelector('.answer');
const wOptions = document.querySelectorAll('.option2, .option3, .option4');
const rOption = document.querySelector('.option1');
const qIcon = document.querySelector('.fa-question');
const qClue = document.querySelector('.cluet');
const next = document.querySelector('.fa-right-long');

//Right answer selection-----------
rOption.onclick = () => {
    rOption.style.backgroundColor = 'green';
    rOption.style.borderColor ='gray';
    next.style.color = "green"
    wincount = 1;
    for (i = 0; i < wOptions.length; i++) {
        wOptions[i].style.pointerEvents = "none";
    }
}
//wrong answer selction----------------------
wOptions.forEach(opt => {
    opt.addEventListener("click", event => {
        event.target.style.backgroundColor = "red";
        next.style.color = "red";
        rOption.style.pointerEvents = "none";
        for (i = 0; i < wOptions.length; i++) {
            wOptions[i].style.pointerEvents = "none";
        }
    })
});
//hint appear---------------------------------
answer.onclick = () => {
    hints.style.opacity = "1";
    hints.style.transition = "1.7s ease";
    wincount = wincount - 1;
    hintcount = 1;
}
//tool tip appear-----------------------------------
qIcon.addEventListener("mouseover", event => {
    qClue.style.opacity = "1";
})
qIcon.addEventListener("mouseout", event => {
    qClue.style.opacity = "0";
})

//sent values to next page-------------------
next.addEventListener('click', event => {
    event.preventDefault();

    const nameValue = plyn;
    let score = wincount;
    let counter = hintcount;

    localStorage.setItem('user-name', nameValue);
    localStorage.setItem('user-score', score);
    localStorage.setItem('user-hints', counter);
    window.location.href = "question2.html";

})