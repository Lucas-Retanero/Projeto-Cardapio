//botão topo

const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 2.5;

function animaScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem - metadeWindow < 0;

    if (itemVisivel) {
        scrollAnima.classList.add('mostrar-botao');
    } else {
        scrollAnima.classList.remove('mostrar-botao');
    };

};

window.addEventListener('scroll', animaScroll)