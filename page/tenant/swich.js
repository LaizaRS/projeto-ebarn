function openModal() {
  const modal = document.getElementById('modal');
  const switchDiv = document.querySelector('.switch');
  const modalMessage = document.getElementById('modalMessage');

  modal.style.display = 'block';

  if (getComputedStyle(switchDiv).justifyContent === 'flex-start') {
    modalMessage.textContent = 'Ativar Tenant?';
    document.querySelector('.modal-content p').style.color = '#13A166';
    document.querySelector('.desativar').textContent = 'Ativar';

  } else {
    modalMessage.textContent = 'Desativar Tenant?';
    document.querySelector('.modal-content p').style.color = '#858585';
    document.querySelector('.desativar').textContent = 'Desativar';
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function changeSwitch() {
  const switchDiv = document.querySelector('.switch');
  modal.style.display = 'none';
  if (getComputedStyle(switchDiv).justifyContent === 'flex-end') {
    switchDiv.style.justifyContent = 'flex-start';
    applyColors('flex-start');
  } else {
    switchDiv.style.justifyContent = 'flex-end';
    applyColors('flex-end');
  }
}

function applyColors(justify) {
  const listasDeModulos = document.querySelector('.listas-de-modulos');
  const listItems = document.querySelectorAll('.listas-de-modulos ul li');
  const switchBoll = document.querySelector('.switch-boll');
  const cabecalho = document.querySelector('.cabecalho');
  const justfyContent = document.querySelector('.justfy-content');

  if (justify === 'flex-start') {
    listasDeModulos.style.color = '#858585';

    listItems.forEach(item => {
      item.style.borderTop = '40px solid #858585';
      item.style.borderRight = '3px solid #858585';
      item.style.borderBottom = '3px solid #858585';
      item.style.borderLeft = '3px solid #858585';
    });

    switchBoll.style.backgroundColor = '#858585';
    cabecalho.style.backgroundColor = '#858585';
    justfyContent.style.borderLeft = '2px solid #858585';
    justfyContent.style.borderRight = '2px solid #858585';
    justfyContent.style.borderBottom = '2px solid #858585';
  } else {
    listasDeModulos.style.color = '#13A166';

    listItems.forEach(item => {
      item.style.borderTop = '40px solid #13A166';
      item.style.borderRight = '3px solid #13A166';
      item.style.borderBottom = '3px solid #13A166';
      item.style.borderLeft = '3px solid #13A166';
    });

    switchBoll.style.backgroundColor = '#13A166';
    cabecalho.style.backgroundColor = '#13A166';
    justfyContent.style.borderLeft = '2px solid #13A166';
    justfyContent.style.borderRight = '2px solid #13A166';
    justfyContent.style.borderBottom = '2px solid #13A166';
  }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
