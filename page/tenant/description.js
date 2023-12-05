let some = document.querySelector('.some');
let aparece = document.querySelector('.aparece');

document.querySelector('.cabecalho p').addEventListener('click', function() {
  if (some.style.display === "block" && aparece.style.display === "none") {
    some.style.display = "none";
    aparece.style.display = "block";
  } else {
    some.style.display = "block";
    aparece.style.display = "none";
  }
});
