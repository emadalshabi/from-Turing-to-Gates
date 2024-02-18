$(document).ready(function() {

    $('img').click(function() {

      let currentSrc = $(this).attr('src');
      let altSrc = $(this).attr('alt-pic');
  
      
      $(this).attr('src', altSrc);
      $(this).attr('alt-pic', currentSrc);

    });
  });