$(document).ready(function () {
  const $book = $('#book');
  const $wrapper = $('.book-wrapper');

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
        updateBookCentering(page);
      },
      turned: function (event, page, view) {
        updateNavButtons(page);
        updateBookCentering(page);
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
  updateBookCentering(1); // Initial centering

  function updateNavButtons(page) {
    const totalPages = $book.turn('pages');
    $('#prevPage').toggle(page > 1);
    $('#nextPage').toggle(page < totalPages);
  }

  function updateBookCentering(page) {
    const totalPages = $book.turn('pages');
    // Center if on first or last page (cover or back)
    if (page === 1 || page === totalPages) {
      $wrapper.addClass('centered-book');
    } else {
      $wrapper.removeClass('centered-book');
    }
  }
});
