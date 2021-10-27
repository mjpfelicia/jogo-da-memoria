let order = [];
let clickOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

// cria order aleatoria de cores
let shuffleOrder = () => {
        let colorOrder = Math.floor(Math.random() * 4);
        order[order.length] = colorOrder;
        clickOrder = [];

        for (let i in order) {
            let elementColor = createColorElement(order[i]);
            lightColor(elementColor, Number(i) + 1);
        }
    }
    // acende proxima cor
let lightColor = (element, nunber) => {
        const number = nunber * 500;
        setTimeout(() => {
            element.classList.add('seleter');
        }, number - 250);

        setTimeout(() => {
            element.classList.remove('seleter');
        }, number);
    }
    // checa se os botõe clicados são os mesmos da order gerada no jogo
let checkOrder = () => {
        for (let i in clickOrder) {
            if (clickOrder[i] != order[i]) {
                gameOver();
                break;
            }
        }
        if (clickOrder.length == order.length) {
            alert(`Pontuação:${score}\n voçẽ acertou! Iniciando próximo nivel`);
            nextLevel();
        }
    }
    // funçao para o clik usuarios

let click = (color) => {

    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('seleter');

    setTimeout(() => {
        createColorElement(color).classList.remove('seleter');
        checkOrder();
    }, 250)
}

// função que retrna a cor
let createColorElement = (color) => {
        if (color == 0) {
            return green;
        } else if (color == 1) {
            return red;
        } else if (color == 2) {
            return yellow;
        } else if (color == 3) {
            return blue;
        }

    }
    //funçao para poximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funçao para  game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\n voçẽ perdeu o jogo!\n clique aqui ok para iniciar um novo jogo.`);
    order = [];
    clickOrder = [];

    playGame();
}

//funçao inicio do jogo
let playGame = () => {
    alert('Bem vindo ao jogo! Iniciando novo jogo!');
    score = 0;
    nextLevel();

}

// eventos de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


// inicio do jogo
playGame();