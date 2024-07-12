document.addEventListener('DOMContentLoaded', function() {
    const arrowLeft = document.querySelector('.arrow-left2');
    const arrowRight = document.querySelector('.arrow-right2');
    const contactContent = document.querySelector('.contact-content');

    arrowLeft.addEventListener('click', function() {
        // Move para a esquerda
        contactContent.scrollBy({
            left: -300, // Ajuste o valor conforme necessário
            behavior: 'smooth' // Comportamento suave de scroll
        });
    });

    arrowRight.addEventListener('click', function() {
        // Move para a direita
        contactContent.scrollBy({
            left: 300, // Ajuste o valor conforme necessário
            behavior: 'smooth' // Comportamento suave de scroll
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let startX = 0;
    let startScrollLeft = 0;
    let isMouseDown = false;
    const contactContent = document.querySelector('.custom-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    contactContent.addEventListener('mousedown', function (event) {
        isMouseDown = true;
        startX = event.pageX - contactContent.offsetLeft;
        startScrollLeft = contactContent.scrollLeft;
        contactContent.style.cursor = 'grabbing';
    });

    contactContent.addEventListener('mousemove', function (event) {
        if (!isMouseDown) return;
        const x = event.pageX - contactContent.offsetLeft;
        const walk = (x - startX) * 3; // Ajuste a sensibilidade de arraste aqui
        contactContent.scrollLeft = startScrollLeft - walk;
    });

    contactContent.addEventListener('mouseup', function () {
        isMouseDown = false;
        contactContent.style.cursor = 'grab';
    });

    contactContent.addEventListener('mouseleave', function () {
        isMouseDown = false;
        contactContent.style.cursor = 'grab';
    });

    // Desativa a seleção de texto durante o arraste
    contactContent.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Restaura a rolagem suave ao redimensionar a janela
    window.addEventListener('resize', function () {
        contactContent.scrollLeft = 0;
    });

    // Função para rolar o conteúdo para a esquerda
    leftArrow.addEventListener('click', function () {
        contactContent.scrollBy({
            left: -300, // Ajuste o valor conforme necessário
            behavior: 'smooth'
        });
    });

    // Função para rolar o conteúdo para a direita
    rightArrow.addEventListener('click', function () {
        contactContent.scrollBy({
            left: 300, // Ajuste o valor conforme necessário
            behavior: 'smooth'
        });
    });
});