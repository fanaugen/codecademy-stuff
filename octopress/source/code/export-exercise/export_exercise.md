<div class="container">

     <div class="page-header">
        <h1>Export a Codecademy Exercise
            <small>currently for JavaScript only</small>
        </h1>
     </div>

    <div class="row">

        <div class="span6">
            <h3>What’s this about?</h3>
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
           
        </div>
        

        <div class="span6 bg">
            <div class="padded">
                <h3>OK, so how do I use it?</h3>
                <p>Just add this bookmarklet to your Bookmarks (e.g. by dragging it to the Bookmarks Bar):</p>
            <p style="text-align:center; background-color:#325396; padding:10px 0;">
                <a class="btn btn-mini" href='javascript:(function(){try{var u=location.href,a=CCDATA.creator.sectionData,d=a.index+1,i=a.exercises,s=u.split("/")[6],w=i.filter(function(e){return e._id===s})[0]}catch(m){return}var r=w.load_submission_from_previous_exercise,k=location.origin+w.preview_url,z=w.name,n=w.index+1,p=w.entry,g=w.instruction,q=w.hint,b=w.default_code,v=w.test_functions,h=w.solution_code,f=w.solution_entry,o=c="";try{var y="Section "+d+", Exercise "+n;o=[y+"\n# ["+z+"]("+u+") ([preview]("+k+"))","## Text",p,"## Instructions",g,"## Hint",q,"## Solution Text",f,"## Solution Code",h+"\n"].join("\n\n");c=["// "+y+"\n// "+z+"\n// edit:    "+u+"\n// preview: "+k,"// Load submission from previous exercise: "+r,"/*** Default Code    ***/",b,"/*** Submission Test ***/",v+"\n"].join("\n\n");var j=$("<textarea/>").css({overflow:"scroll",height:"100px",width:"98%"});$("#overlay").prepend($("<div/>").css({margin:"60px",width:"initial"}).append($("<h2/>").text(y)).append("<b>Exercise text (as Markdown)</b>").append(j.text(o)).append("<b>JavaScript code</b>").append(j.clone().text(c)).prepend("<a href=\"#\" class=\"close\">close  ×</a>").append("<p style=\"text-align:right;margin-top:10px;\"><a href=\"http://is.gd/EzJKpi\">documentation</a></p>")).show()}catch(m){console.log(m.message)}})();'>Export Code</a>
            </p>
                <p> It only works on a Codecademy exercise <strong> in edit view</strong>. Just open one of the exercises you are authoring and click the bookmarklet (tested with Google Chrome on a Mac). It should display something <a href="http://i.imgur.com/kj2Gabx.png">like this</a>.</p>
            </div>
        </div>
    </div>
    
                    
    <div class="row">
        <div class="span12">
            <h3>Source &amp; Credits</h3>
            <p>The bookmarklet was inspired by the fantastic
            <a href="http://is.gd/y4T0MR">Correctness Test Viewer</a> bookmarklet 
            written by <a href="http://twitter.com/minrice2099">Michael Tackes</a>.
                The source code is shown below.</p>
            
<pre class="pre-scrollable">
	// This bookmarklet will help you copy the entire
	// exercise instructions of a JS exercise to a Markdown file
	// and the entire code (default code plus submission test)
	// to a JS file.
	// You have to view the *Edit mode* of the exercise.
	// minified version to create bookmark: see below
	// last updated: Feb 20, 2013 (uses overlay instead of alert())

	(function() {
	  try {
	    var l  = location.href,
	        sd  = CCDATA.creator.sectionData,
	        seno = sd.index + 1,  // section number
	        ee = sd.exercises,    // an Array
	        id = l.split('/')[6], // exercise id
	        e  = ee.filter(function(el){
	          return el._id === id;
	        })[0]; // e is the current exercise data object
	  } catch (x) { return; }
	  var prev = e.load_submission_from_previous_exercise,
	      link = location.origin + e.preview_url, // exercise preview link
	      name = e.name,      // exercise title
	      exno = e.index + 1, // exercise number
	      text = e.entry,     // educational text
	      inst = e.instruction, // exercise instructions
	      hint = e.hint,        // exercise hint
	      code = e.default_code,
	      test = e.test_functions, // the SCT
	      solc = e.solution_code,
	      sole = e.solution_entry,
	      t = c = ''; // text and code
	  try {
	    var se = 'Section '+ seno +', Exercise '+exno;
	    t = [
	      se + '\n# ['+name+']('+l+') ([preview]('+link+'))',
	      '## Text',         text,
	      '## Instructions', inst,
	      '## Hint',         hint,
	      '## Solution Text',sole,
	      '## Solution Code',solc+'\n'
	    ].join('\n\n');
	    c = [
	      '// ' + se +'\n// '+ name+'\n// edit:    ' + l+
	      '\n// preview: '+ link,
	      '// Load submission from previous exercise: '+prev,
	      '/*** Default Code    ***/', code,
	      '/*** Submission Test ***/', test+'\n'
	    ].join('\n\n');
	    var $ta = $('&lt;textarea/&gt;').css({overflow:'scroll',height:'100px',width:'98%'});
	    $('#overlay').prepend(
	      $('&lt;div/&gt;').css({margin:'60px',width:'initial'})
	      .append($('&lt;h2/&gt;').text(se))
	      .append('&lt;b&gt;Exercise text (as Markdown)&lt;/b&gt;')
	      .append($ta.text(t))
	      .append('&lt;b&gt;JavaScript code&lt;/b&gt;')
	      .append($ta.clone().text(c))
	      .prepend('&lt;a href=\'#\' class=\'close\'&gt;close  ×&lt;/a&gt;')
	      .append('&lt;p style=\'text-align:right;margin-top:10px;\'&gt;'
	        +'&lt;a href=\'http://is.gd/EzJKpi\'&gt;documentation&lt;/a&gt;&lt;/p&gt;'
	      )
	    ).show();
	  } catch (x) {console.log(x.message);}
	})();


	// minified version (made using http://refresh-sf.com/yui/)
	// use this for the actual bookmarklet
	// like this: &lt;a href='___'&gt;bookmarklet&lt;/a&gt;
	// (replace ___ with the minified code below)

	javascript:(function(){try{var u=location.href,a=CCDATA.creator.sectionData,d=a.index+1,i=a.exercises,s=u.split("/")[6],w=i.filter(function(e){return e._id===s})[0]}catch(m){return}var r=w.load_submission_from_previous_exercise,k=location.origin+w.preview_url,z=w.name,n=w.index+1,p=w.entry,g=w.instruction,q=w.hint,b=w.default_code,v=w.test_functions,h=w.solution_code,f=w.solution_entry,o=c="";try{var y="Section "+d+", Exercise "+n;o=[y+"\n# ["+z+"]("+u+") ([preview]("+k+"))","## Text",p,"## Instructions",g,"## Hint",q,"## Solution Text",f,"## Solution Code",h+"\n"].join("\n\n");c=["// "+y+"\n// "+z+"\n// edit:    "+u+"\n// preview: "+k,"// Load submission from previous exercise: "+r,"/*** Default Code    ***/",b,"/*** Submission Test ***/",v+"\n"].join("\n\n");var j=$("&lt;textarea/&gt;").css({overflow:"scroll",height:"100px",width:"98%"});$("#overlay").prepend($("&lt;div/&gt;").css({margin:"60px",width:"initial"}).append($("&lt;h2/&gt;").text(y)).append("&lt;b&gt;Exercise text (as Markdown)&lt;/b&gt;").append(j.text(o)).append("&lt;b&gt;JavaScript code&lt;/b&gt;").append(j.clone().text(c)).prepend("&lt;a href=\"#\" class=\"close\"&gt;close  ×&lt;/a&gt;").append("&lt;p style=\"text-align:right;margin-top:10px;\"&gt;&lt;a href=\"http://is.gd/EzJKpi\"&gt;documentation&lt;/a&gt;&lt;/p&gt;")).show()}catch(m){console.log(m.message)}})();
	
	</pre>           
  <p>&nbsp;</p>
        </div>
    </div>
    

</div>