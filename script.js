$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 1980,   // was 1800
    height: 1237.5,  // was 1125
    autoCenter: true,
    elevation: 50,
    gradients: true,
    duration: 1200,
    display: 'double',
    when: {
      turning: function (event, page, view) {
        updateNavButtons(page);
      },
      turned: function (event, page, view) {
        updateNavButtons(page);
      }
    }
  });

  $('#nextPage').click(function () {
    $book.turn('next');
  });

  $('#prevPage').click(function () {
    $book.turn('previous');
  });

  updateNavButtons(1); // Initial button state

  function updateNavButtons(page) {
    const totalPages = $book.turn('pages');
    $('#prevPage').toggle(page > 1);
    $('#nextPage').toggle(page < totalPages);
  }
});
