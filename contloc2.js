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