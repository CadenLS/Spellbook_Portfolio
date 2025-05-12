$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 800,
    height: 500,
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