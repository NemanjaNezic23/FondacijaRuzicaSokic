
$(document).ready(() => {

  // collapser 
  $('.first-text-collaps').collapser({
      mode: 'words',
      truncate: 550
  });

  $('.sec-collaps').collapser({
      mode: 'words',
      truncate: 50
  });

  $('.third-text-collaps').collapser({
      mode: 'words',
      truncate: 450
  });

  // collaps text tab o_nama
  $('#myElement').collapser({
    mode: 'words',
    truncate: 150
  });

  // active tab
  $('.nav').on('click', 'li', () => {
    $('nav li.active').removeClass('active');
    $(this).addClass('active');
  });

});