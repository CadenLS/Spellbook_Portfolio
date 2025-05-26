$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 970.2,   // was 1386
    height: 606.375,  // was 866.25
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
