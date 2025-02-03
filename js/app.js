

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false, 
        navText: ['PREV', 'NEXT'],
         
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })


   
});


// MODAL PROJETOS

//MODAL 
const openModalBtn = document.querySelectorAll('.open-modal2');
const closeModalBtn2 = document.getElementById('close-modal2');
const modal2 = document.getElementById("modal-overlay");
const modalContent2 = document.getElementById("modal-content");

// Quando qualquer um dos botões de abrir modal for clicado
openModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    modal2.style.display = "flex"; // Ativar a exibição do modal
    document.body.classList.add('modal-open'); // Bloqueia a rolagem do fundo
  });
});

// Quando o botão de fechar modal é clicado
closeModalBtn2.addEventListener('click', () => {
  modal2.style.display = "none"; // Fechar o modal
  document.body.classList.remove('modal-open'); // Libera a rolagem do fundo
});

// Fechar o modal se o usuário clicar fora do conteúdo (na área do fundo)
modal2.addEventListener('click', (e) => {
  if (e.target === modal2) { // Verifica se o clique foi no fundo (não no conteúdo)
    modal2.style.display = "none"; // Fechar o modal
    document.body.classList.remove('modal-open'); // Libera a rolagem do fundo
  }
});

// Fechar o modal quando a tecla "Esc" for pressionada
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { // Verifica se a tecla pressionada é "Escape"
    modal2.style.display = "none"; // Fechar o modal
    document.body.classList.remove('modal-open'); // Libera a rolagem do fundo
  }
});