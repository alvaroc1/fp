!function(){function e(){if(!e._executed){var n;n=function(e){var n={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:'b"',end:'"'},{begin:"b'",end:"'"},e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null})]},i={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]};return{aliases:["zep"],case_insensitive:!0,keywords:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var let while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally int uint long ulong char uchar double float bool boolean stringlikely unlikely",contains:[e.C_LINE_COMMENT_MODE,e.HASH_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,keywords:"__halt_compiler",lexemes:e.UNDERSCORE_IDENT_RE}),{className:"string",begin:"<<<['\"]?\\w+['\"]?$",end:"^\\w+;",contains:[e.BACKSLASH_ESCAPE]},{begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",beginKeywords:"function",end:/[;{]/,excludeEnd:!0,illegal:"\\$|\\[|%",contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",contains:["self",e.C_BLOCK_COMMENT_MODE,n,i]}]},{className:"class",beginKeywords:"class interface",end:"{",excludeEnd:!0,illegal:/[:\(\$"]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",end:";",illegal:/[\.']/,contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",end:";",contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"=>"},n,i]}},parcelRequire.register("40cb25e1f4f06b088ab362803a6fde55",(function(){return n})),e._executed=!0}}parcelRequire.registerBundle("40cb25e1f4f06b088ab362803a6fde55",e);for(var n=[],i=0;i<n.length;i++)parcelRequire.registerBundle(n[i],e)}();
//# sourceMappingURL=zephir.a27d282f.js.map
