import{b as j}from"./antd-BmrhB3rb.js";import{r as B}from"./index-DX_cBM9g.js";function P(y,k){for(var p=0;p<k.length;p++){const f=k[p];if(typeof f!="string"&&!Array.isArray(f)){for(const l in f)if(l!=="default"&&!(l in y)){const o=Object.getOwnPropertyDescriptor(f,l);o&&Object.defineProperty(y,l,o.get?o:{enumerable:!0,get:()=>f[l]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var $={exports:{}};(function(y,k){(function(p){p(B())})(function(p){p.defineMode("xquery",function(){var f=function(){function e(O){return{type:O,style:"keyword"}}for(var n=e("operator"),t={type:"atom",style:"atom"},i={type:"punctuation",style:null},s={type:"axis_specifier",style:"qualifier"},c={",":i},d=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],r=0,a=d.length;r<a;r++)c[d[r]]=e(d[r]);for(var v=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"],r=0,a=v.length;r<a;r++)c[v[r]]=t;for(var g=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],r=0,a=g.length;r<a;r++)c[g[r]]=n;for(var I=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],r=0,a=I.length;r<a;r++)c[I[r]]=s;return c}();function l(e,n,t){return n.tokenize=t,t(e,n)}function o(e,n){var t=e.next(),i=!1,s=M(e);if(t=="<"){if(e.match("!--",!0))return l(e,n,A);if(e.match("![CDATA",!1))return n.tokenize=_,"tag";if(e.match("?",!1))return l(e,n,D);var c=e.eat("/");e.eatSpace();for(var d="",r;r=e.eat(/[^\s\u00a0=<>\"\'\/?]/);)d+=r;return l(e,n,N(d,c))}else{if(t=="{")return x(n,{type:"codeblock"}),null;if(t=="}")return u(n),null;if(w(n))return t==">"?"tag":t=="/"&&e.eat(">")?(u(n),"tag"):"variable";if(/\d/.test(t))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if(t==="("&&e.eat(":"))return x(n,{type:"comment"}),l(e,n,T);if(!s&&(t==='"'||t==="'"))return l(e,n,b(t));if(t==="$")return l(e,n,E);if(t===":"&&e.eat("="))return"keyword";if(t==="(")return x(n,{type:"paren"}),null;if(t===")")return u(n),null;if(t==="[")return x(n,{type:"bracket"}),null;if(t==="]")return u(n),null;var a=f.propertyIsEnumerable(t)&&f[t];if(s&&t==='"')for(;e.next()!=='"';);if(s&&t==="'")for(;e.next()!=="'";);a||e.eatWhile(/[\w\$_-]/);var v=e.eat(":");!e.eat(":")&&v&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(i=!0);var g=e.current();return a=f.propertyIsEnumerable(g)&&f[g],i&&!a&&(a={type:"function_call",style:"variable def"}),q(n)?(u(n),"variable"):((g=="element"||g=="attribute"||a.type=="axis_specifier")&&x(n,{type:"xmlconstructor"}),a?a.style:"variable")}}function T(e,n){for(var t=!1,i=!1,s=0,c;c=e.next();){if(c==")"&&t)if(s>0)s--;else{u(n);break}else c==":"&&i&&s++;t=c==":",i=c=="("}return"comment"}function b(e,n){return function(t,i){var s;if(C(i)&&t.current()==e)return u(i),n&&(i.tokenize=n),"string";if(x(i,{type:"string",name:e,tokenize:b(e,n)}),t.match("{",!1)&&h(i))return i.tokenize=o,"string";for(;s=t.next();)if(s==e){u(i),n&&(i.tokenize=n);break}else if(t.match("{",!1)&&h(i))return i.tokenize=o,"string";return"string"}}function E(e,n){var t=/[\w\$_-]/;if(e.eat('"')){for(;e.next()!=='"';);e.eat(":")}else e.eatWhile(t),e.match(":=",!1)||e.eat(":");return e.eatWhile(t),n.tokenize=o,"variable"}function N(e,n){return function(t,i){if(t.eatSpace(),n&&t.eat(">"))return u(i),i.tokenize=o,"tag";if(t.eat("/")||x(i,{type:"tag",name:e,tokenize:o}),t.eat(">"))i.tokenize=o;else return i.tokenize=z,"tag";return"tag"}}function z(e,n){var t=e.next();return t=="/"&&e.eat(">")?(h(n)&&u(n),w(n)&&u(n),"tag"):t==">"?(h(n)&&u(n),"tag"):t=="="?null:t=='"'||t=="'"?l(e,n,b(t,z)):(h(n)||x(n,{type:"attribute",tokenize:z}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(u(n),n.tokenize=o),"attribute")}function A(e,n){for(var t;t=e.next();)if(t=="-"&&e.match("->",!0))return n.tokenize=o,"comment"}function _(e,n){for(var t;t=e.next();)if(t=="]"&&e.match("]",!0))return n.tokenize=o,"comment"}function D(e,n){for(var t;t=e.next();)if(t=="?"&&e.match(">",!0))return n.tokenize=o,"comment meta"}function w(e){return m(e,"tag")}function h(e){return m(e,"attribute")}function q(e){return m(e,"xmlconstructor")}function C(e){return m(e,"string")}function M(e){return e.current()==='"'?e.match(/^[^\"]+\"\:/,!1):e.current()==="'"?e.match(/^[^\"]+\'\:/,!1):!1}function m(e,n){return e.stack.length&&e.stack[e.stack.length-1].type==n}function x(e,n){e.stack.push(n)}function u(e){e.stack.pop();var n=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=n||o}return{startState:function(){return{tokenize:o,cc:[],stack:[]}},token:function(e,n){if(e.eatSpace())return null;var t=n.tokenize(e,n);return t},blockCommentStart:"(:",blockCommentEnd:":)"}}),p.defineMIME("application/xquery","xquery")})})();var S=$.exports;const W=j(S),Q=P({__proto__:null,default:W},[S]);export{Q as x};
