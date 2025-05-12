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

  $('#nextPage').click(() => {
    $book.turn('next');
  });

  $('#prevPage').click(() => {
    $book.turn('previous');
  });
});
