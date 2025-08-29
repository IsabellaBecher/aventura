const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');

// Objeto que armazena os nós da história
const story = {
    start: {
        text: 'Você está à beira de uma floresta densa e misteriosa. Um caminho se divide em dois. Qual você escolhe?',
        choices: [
            { text: 'Pegar o caminho da esquerda', next: 'leftPath' },
            { text: 'Pegar o caminho da direita', next: 'rightPath' }
        ]
    },
    leftPath: {
        text: 'Você segue o caminho da esquerda e encontra uma ponte de corda sobre um rio caudaloso. A ponte parece frágil.',
        choices: [
            { text: 'Atravessar a ponte', next: 'crossBridge' },
            { text: 'Procurar um lugar para nadar', next: 'swimRiver' }
        ]
    },
    rightPath: {
        text: 'Você segue o caminho da direita e logo se depara com uma caverna escura e imponente. Estranhos ruídos vêm de dentro.',
        choices: [
            { text: 'Entrar na caverna', next: 'enterCave' },
            { text: 'Contornar a caverna', next: 'goAroundCave' }
        ]
    },
    crossBridge: {
        text: 'A ponte balança violentamente, mas você consegue atravessar. Do outro lado, encontra um baú de tesouro! Você venceu!',
        choices: [
            { text: 'Recomeçar', next: 'start' }
        ]
    },
    swimRiver: {
        text: 'A correnteza é forte demais, e você é levado. Fim de jogo.',
        choices: [
            { text: 'Recomeçar', next: 'start' }
        ]
    },
    enterCave: {
        text: 'Você entra na caverna e encontra um urso gigante dormindo. O urso acorda e ruge! Fim de jogo.',
        choices: [
            { text: 'Recomeçar', next: 'start' }
        ]
    },
    goAroundCave: {
        text: 'Você contorna a caverna e descobre uma cachoeira secreta, com uma gema cintilante no fundo. Você venceu!',
        choices: [
            { text: 'Recomeçar', next: 'start' }
        ]
    }
};

let currentNode = 'start';

function updateStory() {
     const node = story[currentNode];
    storyText.innerText = node.text;

    choicesContainer.innerHTML = '';
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.innerText = choice.text;
        button.addEventListener('click', () => {
            currentNode = choice.next;
            updateStory();
        });
        choicesContainer.appendChild(button);
    });
}

// Iniciar a aventura
updateStory();