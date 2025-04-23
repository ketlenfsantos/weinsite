

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

document.querySelectorAll('.open-modal2').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = "flex"; // Abre o modal correto
  });
});

document.querySelectorAll('.close-modal').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal-overlay').style.display = "none"; // Fecha o modal correto
  });
});

// Fechar ao clicar fora do modal
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Fechar com a tecla "Esc"
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.style.display = "none";
    });
  }


});


document.addEventListener('DOMContentLoaded', function () {
  // Captura o botão de alternância e o menu
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const modalBtn = document.querySelector('[data-bs-target="#exampleModal"]');

  // Instancia o objeto Collapse do Bootstrap
  const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false // Não ativa o toggle automaticamente
  });

  // Abre ou fecha o menu ao clicar no botão
  navbarToggler.addEventListener('click', function () {
    bootstrapCollapse.toggle(); // Alterna entre abrir e fechar
  });

  // Fecha o menu ao clicar fora (fora do menu e do botão de toggle)
  document.addEventListener('click', function (event) {
    if (
      navbarCollapse.classList.contains('show') &&
      !navbarCollapse.contains(event.target) && 
      !navbarToggler.contains(event.target) &&
      !modalBtn.contains(event.target) // Verifica se não clicou no botão "Contato"
    ) {
      bootstrapCollapse.hide(); // Fecha o menu
    }
  });

  // Fecha o menu ao pressionar a tecla "Esc"
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (navbarCollapse.classList.contains('show')) {
        bootstrapCollapse.hide(); // Fecha o menu
      }
    }
  });
});


  