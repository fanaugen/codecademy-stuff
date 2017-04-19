---
layout: page
title: "SCT Viewer"
comments: true
sharing: true
---

## Intro

This JavaScript bookmarklet is based on the [original][orig] Submission Correctness Viewer bookmarklet by [minrice][min] (Michael Tackes). My version should work with Codecademy’s [new coding UI][ui].

It uses Twitter Bootstrap’s [Modal][modal] component (the new UI already loads the CSS styles for that; the javascript part is loaded dynamically on first use).

[orig]: http://www.codecademy.com/users/4f190e333aa50b000100aeb9/projects/500c7558d143430002002551/
[min]:  http://www.codecademy.com/users/minrice2099
[ui]:   http://www.codecademy.com/blog/62-introducing-a-new-learning-experience
[modal]: http://twitter.github.io/bootstrap/javascript.html#modals

The bookmarklet only works on Codecademy _exercise pages_ (like [this one][ex]). To use it:

1. Drag the link below to your bookmarks (keeping it in the Bookmarks bar gives you one-click access)
2. __Edit the bookmark, replacing the URL with the code [from here][bkmrklt]__
3. Now go to a Codecademy exercise, and click the bookmark

[ex]: http://www.codecademy.com/courses/javascript-lesson-n1woS/1/1
[bkmrklt]: http://j.mp/sct-viewer

<div style="text-align:center;background-color:lightyellow;vertical-align:middle;height:3em;padding:.8em;">
	<p><a title="Drag me to your Bookmarks" href="javascript:alert('http://j.mp/sct-viewer');">Show SCT</a></p>
</div>

**There may be bugs** and I haven’t tested it on any browser other than the latest Chrome for Mac. So if you find any errors, do let me know.

## Updates
- August 26, 2013 – [Joah G.][joahg] repaired the script to work with Codecademy’s modified API – thanks, Joah! The code is still being "highlighted" by [hljs][hljs], but Codecademy changed their CSS stylesheets so the highlighting is no longer visible. I might switch to [Prettify][prtf] if I have some spare time to do that (which is unlikely).

[joahg]: https://github.com/JoahG
[prtf]:  https://code.google.com/p/google-code-prettify/wiki/GettingStarted
[hljs]:  http://softwaremaniacs.org/soft/highlight/en/ 

## Source
{% include_code SCT Viewer sct-viewer/sct-viewer.js %}

Now go try it out!
