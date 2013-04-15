/*
Display SCT (Submission Correctness Test) of a Codecademy Exercise.
By Alex Jahraus (based on the original SCT Viewer Bookmarklet by Michael Tackes)
Works only in Codecademy’s New UI, see
http://www.codecademy.com/blog/62-introducing-a-new-learning-experience
Dependencies:
  - jQuery, Twitter Bootstrap’s CSS for modals and highlight.js (loaded by Codecademy)
  - bootstrap-modal.js (loaded dynamically)
How To Use: the minified code can be used in a bookmarklet to execute
the script on the page of the exercise you’re currently viewing.

Version: 0.1.2
Last updated: 2013-04-15 (fix pathname bug -- should now get current exercise correctly)
*/

(function(){

try {
  // step 1: get the code and some info
  var i    = location.pathname.match(/\d+$/)[0] - 1,
      proj = CCDATA.composer.current_project,
      auth = proj.author.handle,
      lang = proj.language.toLowerCase(),
      sct  = proj.checkpoints[i].test_functions;

  // step 2: load bootstrap-modal.js
  if ($.fn.modal) do_the_magic()
  else $.getScript('//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap'+
  '/2.3.1/js/bootstrap-modal.js')
  .done(do_the_magic)
  .fail(function(r,s,e){throw e})
} catch (e) {
  return console.log(e.message);
}
function do_the_magic(){
  // step 3: compose the modal div
  var $modal, modal_exists = $('#sct').length > 0;
  if (modal_exists) { // the modal is already in the document
    $modal = $('#sct');
  } else {       // create the modal
    $modal = $('<div id=\'sct\' class=\'modal fade hide\' style=\'width:680px\'>')
      .append($('<div class=\'modal-header\'>')
        .append($('<button type=\'button\' class=\'close\' data-dismiss=\'modal\'>').text('×'))
        .append('<h3>Correctness Test <small> &'+'nbsp; by '+auth+'</small></h3>')
    ).append($('<div class=\'modal-body\'>')
      .append($('<pre>').html('<code></code>'))
    )
    .append($('<div class=\'modal-footer\'>')
      .append('<a target=\'blank\' href=\'//www.codecademy.com/docs/submission_tests\'>About Correctness Tests</a> &'+'nbsp;|&'+'nbsp; <a target=\'blank\' href=\'//j.mp/17nuoIp\'>Feedback</a> &'+'nbsp;')
      .append($('<button class=\'btn btn-small\' data-dismiss=\'modal\'>').text('Close'))
    ).appendTo($('body'));
  }

  // step 4: sanitize, insert, and highlight the code
  sct = sct.replace(/&/g,'&'+'amp;').replace(/</g,'&'+'lt;').replace(/>/g,'&'+'gt;')
  var $code = $modal.find('code').eq(0)
    .attr('class','language-'+ (lang == 'web' ? 'javascript' : lang))
    .html(sct)
  hljs && hljs.highlightBlock($code.get(0))

  // step 5: show the modal
  $modal.modal('show')
}
})();