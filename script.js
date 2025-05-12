$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 2000,
    height: 1000,   
    autoCenter: true,
    elevation: 50,
    gradients: true,
    duration: 1000
  });

  $('#nextPage').click(function () {
    $book.turn('next');
  });

  $('#prevPage').click(function () {
    $book.turn('previous');
  });
});