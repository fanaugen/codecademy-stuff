---
layout: page
title: "SCT Viewer"
comments: true
sharing: true
---

This JavaScript bookmarklet is based on the Submission Correctness Viewer
originally written by [minrice] (Michael Tackes), with valuable contributions
by [Joah G.][joahg]

It uses Twitter Bootstrap’s [Modal][modal] component (Codecademy already loads the CSS for that; the javascript part is loaded dynamically on first use).

[minrice]: http://www.codecademy.com/users/minrice2099
[modal]:   http://bootstrapdocs.com/v3.2.0/docs/javascript/#modals
[joahg]:   https://github.com/JoahG

The bookmarklet only works on Codecademy _exercise pages_ (like [this one][ex]). To use it:

1. Drag the link below to your Bookmarks Bar
2. __(optional)__ edit the bookmarklet, replacing the URL with [this code][bkmrklt]
3. Visit a Codecademy exercise page and click the bookmarklet

[ex]: http://www.codecademy.com/courses/javascript-lesson-n1woS/1/1
[bkmrklt]: http://j.mp/sct-viewer2

<div style="text-align:center;border:4px dashed orange;border-radius:10px;vertical-align:middle;padding:1em;font-size:1.7em;">
	<span><a title="Drag me to your Bookmarks" href="javascript:(function(){try{var c=CCDATA.composer,pi= +location.pathname.match(/(\d+)\/\d+$/)[1],ci=c.current_checkpoint_index,p=c.course.projects[pi],a=p.author.handle,l=c.course.language.toLowerCase(),t=p.checkpoints[ci].test_functions;if($.fn.modal){sm()}else{$.getScript('//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/modal.min.js').done(sm).fail(function(r,s,e){throw e})}}catch(e){return console.log(e.message)}function sm(){var $m=$('#sct');if($m.length==0){$m=$('<div id=\'sct\' class=\'modal fade hide\' style=\'width:700px\'>').append($('<div class=\'modal-header\'>').append($('<button type=\'button\' class=\'close\' data-dismiss=\'modal\'>').text('×')).append('<h3>Correctness Test <small> &nbsp; by '+a+'</small></h3>')).append('<div class=\'modal-body\'><pre><code></code></pre></div>').append($('<div class=\'modal-footer\'>').append('<a target=\'blank\' href=\'//j.mp/17nuoIp\'>Feedback</a> &nbsp;').append($('<button class=\'btn btn-small\' data-dismiss=\'modal\'>').text('Close'))).appendTo($('body'))}t=t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');var $code=$m.find('code').eq(0).attr('class','language-'+(l=='web'?'javascript':l)).html(t);hljs&&hljs.highlightBlock($code.get(0));$m.modal('show')}})();">Cheat</a></span> 
</div>

**There may be bugs** and I haven’t tested it on any browser other than the latest Chrome for Mac. So if you find any errors, do let me know.

## Source
{% include_code SCT Viewer sct-viewer/sct-viewer.js %}

Now go try it out!
