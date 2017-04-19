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

Version: 0.3
Last updated: 19. April 2017 to match Codecademy’s new UI
*/

(function(){

try {
  // step 1: get the SCT code and author name
  var c  = CCDATA.composer,
      pi = +location.pathname.match(/(\d+)\/\d+$/)[1],    // pi for project index
      ci = c.current_checkpoint_index,                    // ci for checkpoint index
      p  = c.course.projects[pi],                         // p is the project
      a  = p.author.handle,                               // a for author
      l  = c.course.language.toLowerCase(),               // l for language (syntax highlighting)
      t  = p.checkpoints[ci].test_functions;              // t is the test code

  // step 2: load bootstrap-modal.js
  if ($.fn.modal) sm()
  else $.getScript('//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/modal.min.js')
        .done(sm)
        .fail(function(r,s,e){throw e})
} catch (e) {
  return console.log(e.message);
}
function sm(){
  // step 3: compose the modal div
  var $m = $('#sct'); // the modal
  if ($m.length == 0) { // modal is not yet in the document
    $m = $('<div id=\'sct\' class=\'modal fade hide\' style=\'width:700px\'>')
      .append($('<div class=\'modal-header\'>')
        .append($('<button type=\'button\' class=\'close\' data-dismiss=\'modal\'>').text('×'))
        .append('<h3>Correctness Test <small> &nbsp; by '+a+'</small></h3>')
    ).append('<div class=\'modal-body\'><pre><code></code></pre></div>')
    .append($('<div class=\'modal-footer\'>')
      .append('<a target=\'blank\' href=\'//j.mp/17nuoIp\'>Feedback</a> &nbsp;')
      .append($('<button class=\'btn btn-small\' data-dismiss=\'modal\'>').text('Close'))
    ).appendTo($('body'));
  }

  // step 4: sanitize, insert, and highlight the code (currently not visible)
  t = t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  var $code = $m.find('code').eq(0)
    .attr('class','language-'+ (l == 'web' ? 'javascript' : l))
    .html(t)
  hljs && hljs.highlightBlock($code.get(0))

  // step 5: show the modal
  $m.modal('show')
}
})();
