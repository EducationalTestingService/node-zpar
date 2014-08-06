var ref = require('ref');
var ffi = require('ffi');


// We are using DynamicLibrary and ForeignFunction instead of the
// more convenient Library interface because Library assumes
// platform-specific extensions for libraries that we don't
// want to be bound by
var RTLD_NOW = ffi.DynamicLibrary.FLAGS.RTLD_NOW;
var zparRef = new ffi.DynamicLibrary(__dirname + '/zpar.so' || null, RTLD_NOW);
var zparobj = {};

// Result types and parameters for the ZPar functions
// that we want to use from the ZPar shared library
var funcsInfo = {
    'load_models': ['int', [ 'string' ]],
    'load_tagger': ['int', [ 'string' ]],
    'load_parser': ['int', [ 'string' ]],
    'load_depparser': ['int', [ 'string' ]],
    'tag_sentence': ['string', [ 'string' ]],
    'parse_sentence': ['string', [ 'string' ]],
    'dep_parse_sentence': ['string', [ 'string' ]],
    'unload_models': [ref.types.void, []]
}


// Link up all the function pointers to the ZPar object
Object.keys(funcsInfo || {}).forEach(function (func) {

    var fptr = zparRef.get(func)
      , info = funcsInfo[func];

    if (fptr.isNull()) {
      throw new Error('Library: "' + libfile
        + '" returned NULL function pointer for "' + func + '"')
    }

    var resultType = info[0]
      , paramTypes = info[1]
      , fopts = info[2]
      , abi = fopts && fopts.abi
      , async = fopts && fopts.async

    var ff = ffi.ForeignFunction(fptr, resultType, paramTypes, abi);
    zparobj[func] = async ? ff.async : ff;
})


// export the ZPar object
module.exports = zparobj;
