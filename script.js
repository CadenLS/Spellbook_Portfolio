$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 1600,
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