let turn = 0;
let round = 0;
let roundOver = false;
const winScreen = document.querySelector('.win-container');
const xWin = document.querySelector('.xWin');
const oWin = document.querySelector('.oWin');
const tieScreen = document.querySelector('.tie');
const formBackground = document.querySelector('.form-background');
const submitButton = document.querySelector('.submitButton');
const p1name = document.querySelector('#p1name');
const p2name = document.querySelector('#p2name');
const p1text = document.querySelector('.p1-text');
const p2text = document.querySelector('.p2-text');
const p1score = document.querySelector('.p1-score');
const p2score = document.querySelector('.p2-score');
let player1;
let player2;
const nextRoundButtonX = document.querySelector('.new-roundX');
const nextRoundButtonO = document.querySelector('.new-roundO');
const nextRoundButtonTie = document.querySelector('.new-round-tie');
const nextGameButtonX = document.querySelector('.new-gameX');
const nextGameButtonO = document.querySelector('.new-gameO');
const nextGameButtonTie = document.querySelector('.new-game-tie');

function Player(name) {
    this.name = name;
    this.score = 0;
}

function submitForm() {
    formBackground.style.display = 'none';
    player1 = new Player(p1name.value);
    player2 = new Player(p2name.value);
    if(player1.name) {
        p1text.innerHTML = player1.name;
    }
    if(player2.name) {
        p2text.innerHTML = player2.name;
    }
}

function placeMarker(clickedBox) {
    if(round % 2 === 0){
        if(clickedBox.classList.contains('unmarked') && !roundOver) {
            if(turn % 2 === 0) {
                let marker = document.createElement('img');
                marker.setAttribute("src", "img/markerX.png");
                marker.classList.add("markerX");
                clickedBox.appendChild(marker);
                clickedBox.classList.remove("unmarked");
                clickedBox.classList.add("markedX");
                turn++;
            }
            else {
                let marker = document.createElement('img');
                marker.setAttribute("src", "img/markerO.png");
                marker.classList.add("markerO");
                clickedBox.appendChild(marker);
                clickedBox.classList.remove("unmarked");
                clickedBox.classList.add("markedO");
                turn++;
            }
        }
    }
    else {
        if(clickedBox.classList.contains('unmarked') && !roundOver) {
            if(!(turn % 2 === 0)) {
                let marker = document.createElement('img');
                marker.setAttribute("src", "img/markerX.png");
                marker.classList.add("markerX");
                clickedBox.appendChild(marker);
                clickedBox.classList.remove("unmarked");
                clickedBox.classList.add("markedX");
                turn++;
            }
            else {
                let marker = document.createElement('img');
                marker.setAttribute("src", "img/markerO.png");
                marker.classList.add("markerO");
                clickedBox.appendChild(marker);
                clickedBox.classList.remove("unmarked");
                clickedBox.classList.add("markedO");
                turn++;
            }
        }
    }

    checkWin(clickedBox);
    checkDraw();
}

function checkWin(clickedBox) {
    let rowList = document.querySelectorAll(`.${clickedBox.classList[1]}`);
    let columnList = document.querySelectorAll(`.${clickedBox.classList[2]}`);
    if(clickedBox.classList.contains('x1') || clickedBox.classList.contains('x2')) {
        let xList = document.querySelectorAll(`.${clickedBox.classList[3]}`);
        if(xList[0].classList.contains('markedX') && xList[1].classList.contains('markedX') && xList[2].classList.contains('markedX')) {
            player1.score++;
            p1score.innerText = `Score: ${player1.score}`;
            roundOver = true;
            xWin.style.display = "flex";
            winScreen.style.display = 'flex';

        }
        else if(xList[0].classList.contains('markedO') && xList[1].classList.contains('markedO') && xList[2].classList.contains('markedO')) {
            player2.score++;
            p2score.innerText = `Score: ${player2.score}`;
            roundOver = true;
            oWin.style.display = "flex";
            winScreen.style.display = 'flex';
        }
    }

    if(rowList[0].classList.contains('markedX') && rowList[1].classList.contains('markedX') && rowList[2].classList.contains('markedX')) {
        player1.score++;
        p1score.innerText = `Score: ${player1.score}`;
        roundOver = true;
        xWin.style.display = "flex";
        winScreen.style.display = 'flex';
    }
    else if(rowList[0].classList.contains('markedO') && rowList[1].classList.contains('markedO') && rowList[2].classList.contains('markedO')) {
        player2.score++;
        p2score.innerText = `Score: ${player2.score}`;
        roundOver = true;
        winScreen.style.display = 'flex';
        oWin.style.display = "flex";
    }

    else if(columnList[0].classList.contains('markedX') && columnList[1].classList.contains('markedX') && columnList[2].classList.contains('markedX')) {
        player1.score++;
        p1score.innerText = `Score: ${player1.score}`;
        roundOver = true;
        xWin.style.display = "flex";
        winScreen.style.display = 'flex';
    }
    else if(columnList[0].classList.contains('markedO') && columnList[1].classList.contains('markedO') && columnList[2].classList.contains('markedO')) {
        player2.score++;
        p2score.innerText = `Score: ${player2.score}`;
        roundOver = true;
        winScreen.style.display = 'flex';
        oWin.style.display = "flex";
    }
}

function checkDraw() {
    let draw = true;
    for(let i = 0; i < boxList.length; i++) {
        if (boxList[i].classList.contains('unmarked')) {
            draw = false;
            break;
        }
    }
    if(draw && !roundOver) {
        roundOver = true;
        winScreen.style.display = "flex";
        tieScreen.style.display = 'flex';
    }
}

function nextRound() {
    for(let i = 0; i < boxList.length; i++) {
        boxList[i].classList.add('unmarked');
        if(boxList[i].classList.contains('markedX')) {
            boxList[i].classList.remove('markedX');
        }
        else if(boxList[i].classList.contains('markedO')) {
            boxList[i].classList.remove('markedO');
        }
        boxList[i].innerHTML = '';
    }
    winScreen.style.display = 'none';
    xWin.style.display = 'none';
    oWin.style.display = 'none';
    tieScreen.style.display = 'none';
    roundOver = false;
}

function newGame() {
    for(let i = 0; i < boxList.length; i++) {
        boxList[i].classList.add('unmarked');
        if(boxList[i].classList.contains('markedX')) {
            boxList[i].classList.remove('markedX');
        }
        else if(boxList[i].classList.contains('markedO')) {
            boxList[i].classList.remove('markedO');
        }
        boxList[i].innerHTML = '';
    }
    player1.score = 0;
    player2.score = 0;
    p1score.innerText = `Score: ${player1.score}`;
    p2score.innerText = `Score: ${player2.score}`;
    p1name.value ='';
    p2name.value ='';
    formBackground.style.display = 'flex';
    winScreen.style.display = 'none';
    xWin.style.display = 'none';
    oWin.style.display = 'none';
    tieScreen.style.display = 'none';
    roundOver = false;
    turn = 0;
    round = 0;
}

const allBoxes = document.querySelectorAll('.box');
let boxList = Array.from(allBoxes);
for(let i = 0; i < boxList.length; i++) {
    boxList[i].classList.add('unmarked');
    boxList[i].addEventListener('click', () => placeMarker(boxList[i]));
}

submitButton.addEventListener('click', submitForm);

nextRoundButtonX.addEventListener('click', nextRound);
nextRoundButtonO.addEventListener('click', nextRound);
nextRoundButtonTie.addEventListener('click', nextRound);

nextGameButtonX.addEventListener('click', newGame);
nextGameButtonO.addEventListener('click', newGame);
nextGameButtonTie.addEventListener('click', newGame);