$(document).ready(function () {
  const $book = $('#book');

  $book.turn({
    width: 1387.386,   // was 1261.26
    height: 867.11625, // was 788.2875
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

  // Lex Talionis slideshow logic
  const lexSlides = [
    'images/LexTalionis_1.png',
    'images/bosses.png',
    'images/PlayWithYourFriendsDing.png'
  ];
  let lexSlideIndex = 0;

  window.showPrevLexSlide = function() {
    lexSlideIndex = (lexSlideIndex - 1 + lexSlides.length) % lexSlides.length;
    $('#lex-slideshow-img').attr('src', lexSlides[lexSlideIndex]);
  };

  window.showNextLexSlide = function() {
    lexSlideIndex = (lexSlideIndex + 1) % lexSlides.length;
    $('#lex-slideshow-img').attr('src', lexSlides[lexSlideIndex]);
  };

  // Table of Contents navigation
  $(document).on('click', '.toc-link', function() {
    const page = parseInt($(this).data('page'), 10);
    $book.turn('page', page);
  });

  // Quick navigation bar
  $(document).on('click', '.quick-nav-btn', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const page = parseInt($(this).attr('data-page'), 10);
    if (!isNaN(page)) {
      $book.turn('page', page);
    }
    return false;
  });

  // Improved scroll wheel navigation (allow scroll even during animation)
  let scrollTimeout = null;
  let scrollDirection = null;

  $('#book').on('wheel', function(e) {
    e.preventDefault();

    // Determine direction
    if (e.originalEvent.deltaY < 0) {
      scrollDirection = 'previous';
    } else if (e.originalEvent.deltaY > 0) {
      scrollDirection = 'next';
    } else {
      return;
    }

    // If already animating, queue up the next scroll after a short delay
    if ($book.turn('animating')) {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        $book.turn(scrollDirection);
        scrollTimeout = null;
      }, 100);
    } else {
      $book.turn(scrollDirection);
    }
  });
});
