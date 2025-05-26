$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 1261.26,   // was 970.2
    height: 788.2875,  // was 606.375
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
        updateBookShadow(page);
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
  updateBookShadow(1); // Initial shadow state

  function updateNavButtons(page) {
    const totalPages = $book.turn('pages');
    $('#prevPage').toggle(page > 1);
    $('#nextPage').toggle(page < totalPages);
  }

  function updateBookShadow(page) {
    const totalPages = $book.turn('pages');
    if (page === 1 || page === totalPages) {
      $book.addClass('no-shadow');
    } else {
      $book.removeClass('no-shadow');
    }
  }
});
