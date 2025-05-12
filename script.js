$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 2400,
    height: 1500,   
    autoCenter: true,
    elevation: 50,
    gradients: true,
    duration: 1200
  });

  $('#nextPage').click(function () {
    $book.turn('next');
  });

  $('#prevPage').click(function () {
    $book.turn('previous');
  });
});