var ffi = require('ffi');

var zparobj = ffi.Library('./zpar', {'load_models': ['int', ['string']],
                                   'load_tagger': ['int', ['string']],
                                   'load_parser': ['int', ['string']],
                                   'load_depparser': ['int', ['string']],
                                   'tag_sentence': ['string', ['string']],
                                   'parse_sentence': ['string', ['string']],
                                   'dep_parse_sentence': ['string', ['string']],
                                   'unload_models': ['void', []]
                          });
// export the ZPar object
module.exports = zparobj;
