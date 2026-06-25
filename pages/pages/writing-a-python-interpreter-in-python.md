---
title: Writing a python interpreter in python
draft: true
date:
    created: 2026-06-25
search:
  exclude: true
---

Suppose you had a python interpreter that was written in python. If you did, you could run the interpreter in itself. How many layers of python interpreters interpreting themselves could you stack before computing a trivial operation becomes infeasible?

<!-- more -->

## TLDR

If you already know what the introduction means and just want the answer, it is: [X]

Here is a graph of the speed for [operation] by self-interpretation depth:

![img]()

The following explain how the python python interpreter was written, and provide some background.


```
2 + 2
```

How does that actually turn into `4` though? After all, the computer doesn't intrinsically know what addition or numbers are. Addition and numbers, in some kind of primitive form, *might* exist in some.


<!--
explain binary operations, addition, happens after lexing, parsing, application of logic,

BUT

technically this isn't actually true, because in python a number is not a byte string corresponding to some
kind of pure form of number represented in binary, instead it is a big hunk of a machine that is brought into existence for the purpose of handling the actions that might be applied to whatever the number actually is

  I could have told you what a number is when I was 16. Know I am 26, I really am not so sure.
    But how can I refer to ages using numbers if I don't even really know what a number is? There is an answer there, but it is out of scope.


-->


- lexer
  - why lex? because there is an infinite number of possible characters, sequences that the expression (assuming we even know it is an expression) can open with
- parser
- primitive computational operations and binary
- routing table from parsed symbols to primitive operations
- whoops, that was a lie, actually I skipped over a few turtles in the stack, python doesn't have a routing table like that
- explanation of what python does have
- demo with numeric methods, attributes
- actual implementation
  - originally using lark, ran into some issues I don't care to debug
  - instead figured I would use ast module
  - but then I need to have the interpreter be able to handle imports, which is fine, but specifically an import of the ast module and all its dependencies, and one of its dependencies is `re`, for which in the standard library, only type stubs exist (?) - the actual implementation under the hood is in c, a different language - plus it's a compiled one
  - so ideally everything, absolutely everything, is self contained in a single module which can run itself, and while imports are maybe ok, the only things we should import would be things which themselves are self contained, and managing that would get annoying, because I would need to the standard library dependency graph and create an index of what is and isn't supported and blah blah blah that's getting complicated in a boring way and while complexity is acceptable boring complexity is only acceptable if I'm being paid a bunch of money, so it will be self contained.
  - this means that the lexer, parser, and interpreter all need to be pure python, no dependencies.