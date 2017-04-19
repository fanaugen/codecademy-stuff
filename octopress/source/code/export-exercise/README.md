---
layout: page
title: "Export a Codecademy Exercise to Plain Text"
comments: true
---

### currently for JavaScript exercises only

### What’s this about?
Some Codecademy educators (like <a href="http://www.codecademy.com/users/fanaugen">myself</a>)
want to edit and backup their exercise code outside of the Codecademy editor:
<p><ul>
<li>using a <em>real</em> text editor</li>
<li>using <a href="http://git-scm.com/">git</a> for collaboration and version control</li>
</ul></p>
<p>So I created an <strong>export script</strong> to allow copying the entire 
exercise description (with Hint and Solution) into a Markdown file.
It'll also help you copy the JavaScript (including Correctness Test)
to a JavaScript file.
The script will show an overlay with two text areas to copy 
the Markdown text and the JavaScript code from.</p>
<p>
Unfortunately there's no way of getting the content back <em>into</em> the exercise, so the re-import will involve up to 8 copy &amp;
paste operations:
</p>
<p><ol>
<li>Exercise title</li>
<li>Educational text</li>
<li>Exercise instructions</li>
<li>Exercise hint</li>
<li>JavaScript default code</li>
<li>JavaScript SCT code</li>
<li>Solution text</li>
<li>Solution code</li>
</ol></p>
           
        
## OK, so how do I use it?
Just add this bookmarklet to your Bookmarks (e.g. by dragging it to the Bookmarks Bar):
<p style="text-align:center; background-color:orange; padding:10px 0;">
<a class="btn btn-mini" href='javascript:(function(){try{var u=location.href,a=CCDATA.creator.sectionData,d=a.index+1,i=a.exercises,s=u.split("/")[6],w=i.filter(function(e){return e._id===s})[0]}catch(m){return}var r=w.load_submission_from_previous_exercise,k=location.origin+w.preview_url,z=w.name,n=w.index+1,p=w.entry,g=w.instruction,q=w.hint,b=w.default_code,v=w.test_functions,h=w.solution_code,f=w.solution_entry,o=c="";try{var y="Section "+d+", Exercise "+n;o=[y+"\n# ["+z+"]("+u+") ([preview]("+k+"))","## Text",p,"## Instructions",g,"## Hint",q,"## Solution Text",f,"## Solution Code",h+"\n"].join("\n\n");c=["// "+y+"\n// "+z+"\n// edit:    "+u+"\n// preview: "+k,"// Load submission from previous exercise: "+r,"/*** Default Code    ***/",b,"/*** Submission Test ***/",v+"\n"].join("\n\n");var j=$("<textarea/>").css({overflow:"scroll",height:"100px",width:"98%"});$("#overlay").prepend($("<div/>").css({margin:"60px",width:"initial"}).append($("<h2/>").text(y)).append("<b>Exercise text (as Markdown)</b>").append(j.text(o)).append("<b>JavaScript code</b>").append(j.clone().text(c)).prepend("<a href=\"#\" class=\"close\">close  ×</a>").append("<p style=\"text-align:right;margin-top:10px;\"><a href=\"http://is.gd/EzJKpi\">documentation</a></p>")).show()}catch(m){console.log(m.message)}})();'>Export Code</a>
</p>
<p> It only works on a Codecademy exercise <strong> in edit view</strong>. Just open one of the exercises you are authoring and click the bookmarklet (tested with Google Chrome on a Mac). It should display something <a href="http://i.imgur.com/kj2Gabx.png">like this</a>.</p>
    
## Source &amp; Credits
<p>The bookmarklet was inspired by the fantastic Correctness Test Viewer
 bookmarklet written by <a href="http://twitter.com/minrice2099">Michael Tackes</a>.
The source code is shown below.</p>

{% include_code Export Exercise export-exercise/export_exercise.js %}
