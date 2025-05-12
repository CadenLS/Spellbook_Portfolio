$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 1200,
    height: 750,
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