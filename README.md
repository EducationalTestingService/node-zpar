### Introduction

**node-zpar** is a node package that allows using the [ZPar tagger and parser](https://github.com/frcchang/zpar) with node.js. ZPar was written by [Yue Zhang](http://www.sutd.edu.sg/yuezhang.aspx) while he was at Oxford University. According to its home page: *ZPar is a statistical natural language parser, which performs syntactic analysis tasks including word segmentation, part-of-speech tagging and parsing. ZPar supports multiple languages and multiple grammar formalisms. ZPar has been most heavily developed for Chinese and English, while it provides generic support for other languages. ZPar is fast, processing above 50 sentences per second using the standard Penn Teebank (Wall Street Journal) data.*

This is a simple port of my other project [python-zpar](https://github.com/desilinguist/python-zpar.git) to node.js using the amazing [node-ffi](https://github.com/node-ffi/node-ffi) package. 

Using the package is really easy:
```javascript
// Load the module
> zpar = require('./zpar')
{ load_models: { [Function] async: [Function] },
  load_tagger: { [Function] async: [Function] },
  load_parser: { [Function] async: [Function] },
  load_depparser: { [Function] async: [Function] },
  tag_sentence: { [Function] async: [Function] },
  parse_sentence: { [Function] async: [Function] },
  dep_parse_sentence: { [Function] async: [Function] },
  unload_models: { [Function] async: [Function] } }

// Load the tagger model
> zpar.load_tagger('/Users/nmadnani/work/NLPTools/zpar/english')
Loading tagger from /Users/nmadnani/work/NLPTools/zpar/english/tagger
Loading model... done.
0

// Tag any sentence. Note the need for the newline and the space at the end.
// ZPar's tokenizer requires that.
> zpar.tag_sentence('I am going to the market.\n ')
'I/PRP am/VBP going/VBG to/TO the/DT market/NN ./.'

> zpar.unload_models()
null
```

The other functions work in a similar fashion. 

Note that the the package currently only works on 64-bit Linux and OS X systems. Right now, the zpar shared libraries for both these platforms are actually pre-compiled and bundled with the package. I am new to node and am still figuring out how to make this package installable via `npm`. Pull requests are obviously welcome!
