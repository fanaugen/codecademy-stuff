// This bookmarklet will help you copy the entire
// exercise instructions of a JS exercise to a Markdown file
// and the entire code (default code plus submission test)
// to a JS file.
// You have to view the *Edit mode* of the exercise.
// last updated: Feb 20, 2013 (uses overlay instead of alert())

(function() {
  try {
    var l  = location.href,
        sd  = CCDATA.creator.sectionData,
        seno = sd.index + 1,                // section number
        ee = sd.exercises,                  // an Array
        id = l.split('/')[6],               // exercise id
        e  = ee.filter(function(el){        // exercise data object
          return el._id === id;
        })[0];                              
  } catch (x) { return; }
  var prev = e.load_submission_from_previous_exercise,
      link = location.origin + e.preview_url,    // exercise preview link
      name = e.name,                             // exercise title
      exno = e.index + 1,                        // exercise number
      text = e.entry,                            // educational text
      inst = e.instruction,                      // exercise instructions
      hint = e.hint,                             // exercise hint
      code = e.default_code,
      test = e.test_functions,                   // the SCT
      solc = e.solution_code,
      sole = e.solution_entry,
      t = c = '';                                // text and code
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
    var $ta = $('<textarea/>').css({overflow:'scroll',height:'100px',width:'98%'});
    $('#overlay').prepend(
      $('<div/>').css({margin:'60px',width:'initial'})
      .append($('<h2/>').text(se))
      .append('<b>Exercise text (as Markdown)</b>')
      .append($ta.text(t))
      .append('<b>JavaScript code</b>')
      .append($ta.clone().text(c))
      .prepend('<a href=\'#\' class=\'close\'>close  ×</a>')
      .append('<p style=\'text-align:right;margin-top:10px;\'>'
        +'<a href=\'http://is.gd/EzJKpi\'>documentation</a></p>'
      )
    ).show();
  } catch (x) {console.log(x.message);}
})();