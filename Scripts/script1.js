var arr;

function adicionEventos() {
  arr = document.querySelectorAll('li');

  for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener('mouseover', function() {
      this.classList.add('movimiento');
    });

    arr[i].addEventListener('mouseout', function() {
      this.classList.remove('movimiento');
    });

    arr[i].addEventListener('click', function() {
      this.classList.add('completado');
    });
  }
}
