const modal = document.getElementById('myModal');
const btnOpenModal = document.getElementById('openModal');
const btnCancelLogout = document.getElementById('cancelLogout');
const btnClose = document.getElementsByClassName('close')[0];

// Função para abrir o modal
btnOpenModal.onclick = function() {
  modal.style.display = 'block';
}

// Fechar o modal ao clicar no "x"
btnClose.onclick = function() {
  modal.style.display = 'none';
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Cancelar o logout
btnCancelLogout.onclick = function() {
  modal.style.display = 'none';
}

