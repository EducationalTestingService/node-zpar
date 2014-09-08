### Introduction

**node-zpar** is a node package that allows using the [ZPar parser](http://www.sutd.edu.sg/cmsresource/faculty/yuezhang/zpar.html) with node.js. ZPar was written by [Yue Zhang](http://www.sutd.edu.sg/yuezhang.aspx) while he was at Oxford University. According to its home page: *ZPar is a statistical natural language parser, which performs syntactic analysis tasks including word segmentation, part-of-speech tagging and parsing. ZPar supports multiple languages and multiple grammar formalisms. ZPar has been most heavily developed for Chinese and English, while it provides generic support for other languages. ZPar is fast, processing above 50 sentences per second using the standard Penn Teebank (Wall Street Journal) data.*

This is a simple port of my other project [python-zpar](https://github.com/desilinguist/python-zpar.git) to node.js using the amazing [node-ffi](https://github.com/node-ffi/node-ffi) package. 

To use this module, just define an environment variable `ZPAR_LIBRARY_PATH` that points to the directory containing the zpar shared library module (`zpar.so`). If you have already installed `python-zpar`, this file should be in `dist` folder. So, you would set `ZPAR_LIBRARY_PATH` to the full path of the `dist` folder. Once that is done, using the package is really easy:

```
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

// Tag any sentence
> zpar.tag_sentence('I am going to the market.\n ')
'I/PRP am/VBP going/VBG to/TO the/DT market/NN ./.'

> zpar.unload_models()
null
```

The other functions work in a similar fashion. 

I am still working on making this package installable via `npm`. 

