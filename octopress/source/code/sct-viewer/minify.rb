#!/usr/bin/env ruby
system "uglifyjs sct-viewer.js --screw-ie8 --mangle -o sct-viewer.min.js"
bookmarklet = "javascript:" + File.read("sct-viewer.min.js").chomp
print bookmarklet
