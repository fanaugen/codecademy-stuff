---
layout: page
title: "FAQ"
comments: true
sharing: true
footer: true
---

## General
- [Formatting Code in Forums](http://www.codecademy.com/forum_questions/509b9e7c3feca80200001d40#response-509bc71d6d816a0200003251)
- [An illustrated analogy for explaining dereferencing and value assignment](http://www.codecademy.com/forum_questions/514788af008571acea000271)


## JavaScript
- [A Guide to Semicolons in JavaScript](http://www.codecademy.com/blog/78)

- [Do you need an empty pair of parentheses for a `function`?](http://www.codecademy.com/forum_questions/4f6108e51a440d000300e959)

- [Object Literals vs. Constructor Notation](http://www.codecademy.com/forum_questions/5100b32aa51d4373ea000d2d)

- [String objects vs. string literals](http://www.codecademy.com/forum_questions/4f568efbb89a8a000306c282#response-4f5745343508c7000300c5d0)

- `var name=function(){}` vs. `function name(){}`

	This question has been asked many times and discussed in great detail in the forums. Please read the answers to these questions:

	- [Different formats for defining a function?][1]
	- [Why do we use this specific syntax for defining functions?][2]
	- [Why do we create functions as variables?][3]

[1]: http://www.codecademy.com/forum_questions/4f14a620312f04000100cf97
[2]: http://www.codecademy.com/forum_questions/505a2562f0dfd30002049eb0
[3]: http://www.codecademy.com/forum_questions/4f4ceb235e0a2000030161a2


- The `new` keyword

	Read the [OOP section][4] of the JavaScript Glossary on Codecademy. The use of the `new` keyword is explained under "Class Instances and Usage".

	For more details, read [this answer][5] on StackOverflow or [this definition][6] in the Mozilla wiki.

[4]: http://www.codecademy.com/glossary/javascript#oop
[5]: http://stackoverflow.com/a/3658673/1030985
[6]: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/new


- [What’s the `return` keyword?](http://www.codecademy.com/forum_questions/510c7d85a5aa59539400118b)

- [Variable scope: local vs. global variables](http://www.codecademy.com/forum_questions/514900b642e721e65d0003f1#response-5149ee5c8613d3c2530000a7)

- [Difference between `x++` and `x = x++`](http://www.codecademy.com/forum_questions/514995a07272221a5b001f32)

- [FizzBuzz – A Simple Solution](http://labs.codecademy.com/2Tf#:workspace)

- [Rock Paper Scissors Lizard Spock](http://www.codecademy.com/forum_questions/4f622f7597d895000301f540)

- [Inheritance and private variables](http://www.codecademy.com/forum_questions/4f554438feda570003002214)

- [Dynamic variable names](http://www.codecademy.com/forum_questions/51068e93f73ad4947a005629)

- [Addressing Frustration about Badly Written SCTs](http://www.codecademy.com/forum_questions/505c68d2b447eb0002049f6b)

- [JSLint warning: mixed spaces and tabs](http://www.codecademy.com/forum_questions/5087f2b63b7cfd02000041ad)

- Chained comparison statement: `a < b < c`

	JavaScript translates `a < b < c` to `(a < b) < c`. The first parentheses will yield `true` if and only if `a` is less than `b`, but then `true` is compared to `c`. In that situation, `true` evaluates to 1, so if `c` is larger than 1, the whole thing returns `true`, but this, of course, doesn't mean that `b` was actually between `a` and `c`.


## Web
- Classes vs. IDs: See [this answer](http://www.codecademy.com/forum_questions/503c822b2fe4f200020105d6). For more details, [read this](http://css-tricks.com/the-difference-between-id-and-class/) excellent CSSTricks article.

- [CSSLint warning: don’t use IDs in selectors](http://www.codecademy.com/forum_questions/50b26dcfa6e5461b2a0003b9)

- Bold, Italic, Emphasis: `<b>`, `<i>` vs. `<em>`, `<strong>`: read [my answer][7] and [mtf](http://www.codecademy.com/mtf)’s [answer][8].
  
- [Vertical (and horizontal) alignment of text (in circles)](http://www.codecademy.com/forum_questions/51db458b9c4e9d073a000613#response-51dd43819c4e9d6c7c00512d)

- [floated p inside a hyperlink: no underline](http://www.codecademy.com/forum_questions/51dce51c8c1ccc8a8a000552)


[7]: http://www.codecademy.com/forum_questions/5079b690918e7b02000008ce
[8]: http://www.codecademy.com/forum_questions/50908c3176c79b0200000379


## Ruby
- [Rounding errors and `BigDecimal`](http://www.codecademy.com/forum_questions/50fe886f68fc44056f00626c)

- [Ruby `and`, `or` vs. `&&`, `||`](http://www.codecademy.com/forum_questions/5102b8a393ffa230930003aa)

- [Ruby Symbol-to-Proc conversion](http://www.codecademy.com/forum_questions/510f1e971ceaf3de2e002348)

- [Ruby `'`single-quoted`'` vs. `"`double-quoted`"` strings](http://www.codecademy.com/forum_questions/514b78373d1166aa0d000051#response-514c30e0eafed913280015c6)

- Sorting with a block: answered in detail [here][9] and [here][10]

[9]: http://www.codecademy.com/forum_questions/51460322cedb4b1444006c54#response-51461350bde24d1bb00070b4
[10]: http://www.codecademy.com/forum_questions/5149e1bbcbe835068200336d#response-5149ad20252e31d4950022b9

- [Value Assignment and `x += 1`](http://www.codecademy.com/forum_questions/514788af008571acea000271) – *with pictures!*. This answer isn’t Ruby-specific. It applies to pretty much every programming language.

- [Ruby: Counting (down) in steps](http://www.codecademy.com/forum_questions/5147a712474ee6b056001411)

- [`downto` doesn’t work with Strings](http://www.codecademy.com/forum_questions/514c5d99fe6e1714b8001d9a)

- [Conditional Assignment: `x||=y` is a shorthand for `x=x||y`](http://www.codecademy.com/forum_questions/5149680470d288f3540016f6#response-5149c7c787058869e2002a48)


## Python
- [`return` in Python](http://www.codecademy.com/forum_questions/51c0e35d7c82caace80008b1)

- [Printing Unicode characters in Python 2](http://www.codecademy.com/forum_questions/5099b78905ac410200003298)

- [Python string formatting with the `%` syntax](http://www.codecademy.com/forum_questions/5144f03a197a33b3e5000c15)

- [`'a' or 'e' or 'i'` (`or` with strings instead of Booleans)](http://www.codecademy.com/forum_questions/5145eec9ca49551635006101)

- [Python `print` without inserting a newline](http://www.codecademy.com/forum_questions/510b26d889df24a7930019a4)

- purify doesn’t work on list `[4,5,5,4]`: answered [here][11], [here][12], and [here][13].

[11]: http://www.codecademy.com/forum_questions/51020170958665ced4000775
[12]: http://www.codecademy.com/forum_questions/5102f0fe0f10f34bc500049b
[13]: http://www.codecademy.com/forum_questions/510769cab6bc6bdce50013b8


## jQuery
- [Avoiding Redundancy in jQuery](http://www.codecademy.com/forum_questions/5125a0fe7352f2bf9e005273)

- [Changing box size on mouseover](http://www.codecademy.com/forum_questions/516c934a3168b4d8f700277e) using jQuery vs. CSS3
