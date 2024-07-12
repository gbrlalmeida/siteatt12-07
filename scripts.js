document.addEventListener('DOMContentLoaded', function () {
    let startX = 0;
    let endX = 0;
    let startTransform = 0;
    let currentIndex = 0;
    const slides = document.querySelectorAll('.timeline-item');
    let slideWidth = slides[0].offsetWidth;
    const totalSlides = slides.length;

    function moveSlide(n) {
        currentIndex += n;

        // Verifica se chegou ao final do carrossel
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Volta para o primeiro slide
        }

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // Volta para o último slide
        }

        document.querySelector('.timeline-slide').style.transition = 'transform 0.5s ease';
        document.querySelector('.timeline-slide').style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function handleStart(e) {
        startX = e.clientX || e.touches[0].clientX;
        startTransform = parseFloat(getComputedStyle(document.querySelector('.timeline-slide')).getPropertyValue('transform').split(',')[4]);
        document.querySelector('.timeline-slide').style.transition = 'none';
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);
    }

    function handleMove(e) {
        endX = e.clientX || e.touches[0].clientX;
        let diff = endX - startX;
        document.querySelector('.timeline-slide').style.transform = `translateX(${startTransform + diff}px)`;
    }

    function handleEnd() {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('touchmove', handleMove);
        let threshold = slideWidth / 4;

        if (endX && Math.abs(endX - startX) > threshold) {
            if (endX < startX) {
                moveSlide(1); // Move para o próximo slide
            } else {
                moveSlide(-1); // Move para o slide anterior
            }
        } else {
            document.querySelector('.timeline-slide').style.transition = 'transform 0.5s ease';
            document.querySelector('.timeline-slide').style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        }

        endX = 0;
    }

    window.addEventListener('resize', function () {
        slideWidth = slides[0].offsetWidth;
        document.querySelector('.timeline-slide').style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    });

    document.querySelector('.timeline-wrapper').addEventListener('mousedown', handleStart);
    document.addEventListener('mouseup', handleEnd);
    document.querySelector('.timeline-wrapper').addEventListener('touchstart', handleStart);
    document.addEventListener('touchend', handleEnd);

    // Correção para garantir que o carrossel seja reiniciado corretamente ao chegar no último slide
    document.querySelector('.timeline-slide').addEventListener('transitionend', function() {
        if (currentIndex === totalSlides) {
            currentIndex = 0;
            document.querySelector('.timeline-slide').style.transition = 'none';
            document.querySelector('.timeline-slide').style.transform = `translateX(0px)`;
        }
    });
});

function aceitarCookies() {
    // Exemplo: armazenar no localStorage que os cookies foram aceitos
    localStorage.setItem('cookiesAceitos', 'true');
    // Ocultar o banner de consentimento
    document.getElementById('cookieConsent').style.display = 'none';
}

// Verificar se os cookies já foram aceitos anteriormente
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('cookiesAceitos') === 'true') {
        document.getElementById('cookieConsent').style.display = 'none';
    }
});




document.addEventListener('DOMContentLoaded', function () {
    let startX = 0;
    let startScrollLeft = 0;
    let isMouseDown = false;
    const contactContent = document.querySelector('.contact-content');

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
});