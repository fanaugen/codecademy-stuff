---
layout: page
title: "SCT Viewer"
comments: true
sharing: true
---

This JavaScript bookmarklet is based on the [original][orig] Submission Correctness Viewer bookmarklet by [minrice][min] (Michael Tackes). My version should work with Codecademy’s [new coding UI][ui].

It uses Twitter Bootstrap’s [Modal][modal] component (the new UI already loads the CSS styles for that; the javascript part is loaded dynamically on first use).

[orig]: http://www.codecademy.com/users/4f190e333aa50b000100aeb9/projects/500c7558d143430002002551/
[min]:  http://www.codecademy.com/users/minrice2099
[ui]:   http://www.codecademy.com/blog/62-introducing-a-new-learning-experience
[modal]: http://twitter.github.io/bootstrap/javascript.html#modals

The bookmarklet only works on Codecademy exercise pages (like [this one][ex]). Drag the link below to your bookmarks (keeping it in the Bookmarks bar gives you one-click access), then use it in any Codecademy exercise.

[ex]: http://www.codecademy.com/courses/javascript-lesson-n1woS/1/1

<div style="text-align:center;background-color:lightyellow;vertical-align:middle;height:3em;padding:.8em;">
	<p><a title="Add this to your Bookmarks" href="javascript:insert_code_here">Show SCT</a></p>
</div>

**There may be bugs** and I haven’t tested it on any browser other than the latest Chrome for Mac. So if you find any errors, do let me know.

## Source
{% include_code SCT Viewer sct-viewer/sct-viewer.js %}

Now go try it out!
