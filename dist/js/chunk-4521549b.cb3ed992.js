(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4521549b"],{"07a0":function(t,e,r){},"0bb1":function(t,e,r){r("6bca")("asyncIterator")},"18c5":function(t,e,r){"use strict";var n=r("31d0");r("2d2c")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},"1cb8":function(t,e,r){e.f=r("f3ae")},"1ff3":function(t,e,r){"use strict";var n=r("caa4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},2146:function(t,e,r){var n=r("54a3"),i=r("62af").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(n(t))}},2998:function(t,e,r){var n=r("d753"),i=r("81a3"),a=r("48ed");t.exports=function(t){var e=n(t),r=i.f;if(r){var o,s=r(t),u=a.f,c=0;while(s.length>c)u.call(t,o=s[c++])&&e.push(o)}return e}},"31d0":function(t,e,r){"use strict";var n=r("7fe4"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),c=void 0!==/()??/.exec("")[1],l=u||c;l&&(o=function(t){var e,r,o,l,f=this;return c&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),u&&(e=f[s]),o=i.call(f,t),u&&o&&(f[s]=f.global?o.index+o[0].length:e),c&&o&&o.length>1&&a.call(o[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)}),o}),t.exports=o},"3f84":function(t,e,r){"use strict";var n=r("07a0"),i=r.n(n);i.a},"40f8":function(t,e,r){"use strict";var n=r("4839"),i=r("3301"),a=r("3a0f"),o=r("2d2c"),s=r("7f00"),u=r("67a1").KEY,c=r("201d"),l=r("13c4"),f=r("c67d"),h=r("75ff"),d=r("f3ae"),v=r("1cb8"),p=r("6bca"),g=r("2998"),b=r("990a"),m=r("4d65"),y=r("b429"),S=r("54a3"),x=r("1f51"),w=r("b915"),L=r("04ac"),C=r("2146"),E=r("78de"),R=r("694f"),$=r("d753"),N=E.f,O=R.f,T=C.f,k=n.Symbol,I=n.JSON,M=I&&I.stringify,P="prototype",A=d("_hidden"),F=d("toPrimitive"),j={}.propertyIsEnumerable,_=l("symbol-registry"),W=l("symbols"),D=l("op-symbols"),V=Object[P],G="function"==typeof k,J=n.QObject,H=!J||!J[P]||!J[P].findChild,Y=a&&c(function(){return 7!=L(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=N(V,e);n&&delete V[e],O(t,e,r),n&&t!==V&&O(V,e,n)}:O,B=function(t){var e=W[t]=L(k[P]);return e._k=t,e},K=G&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},q=function(t,e,r){return t===V&&q(D,e,r),m(t),e=x(e,!0),m(r),i(W,e)?(r.enumerable?(i(t,A)&&t[A][e]&&(t[A][e]=!1),r=L(r,{enumerable:w(0,!1)})):(i(t,A)||O(t,A,w(1,{})),t[A][e]=!0),Y(t,e,r)):O(t,e,r)},z=function(t,e){m(t);var r,n=g(e=S(e)),i=0,a=n.length;while(a>i)q(t,r=n[i++],e[r]);return t},Q=function(t,e){return void 0===e?L(t):z(L(t),e)},U=function(t){var e=j.call(this,t=x(t,!0));return!(this===V&&i(W,t)&&!i(D,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,A)&&this[A][t])||e)},X=function(t,e){if(t=S(t),e=x(e,!0),t!==V||!i(W,e)||i(D,e)){var r=N(t,e);return!r||!i(W,e)||i(t,A)&&t[A][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=T(S(t)),n=[],a=0;while(r.length>a)i(W,e=r[a++])||e==A||e==u||n.push(e);return n},tt=function(t){var e,r=t===V,n=T(r?D:S(t)),a=[],o=0;while(n.length>o)!i(W,e=n[o++])||r&&!i(V,e)||a.push(W[e]);return a};G||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(r){this===V&&e.call(D,r),i(this,A)&&i(this[A],t)&&(this[A][t]=!1),Y(this,t,w(1,r))};return a&&H&&Y(V,t,{configurable:!0,set:e}),B(t)},s(k[P],"toString",function(){return this._k}),E.f=X,R.f=q,r("62af").f=C.f=Z,r("48ed").f=U,r("81a3").f=tt,a&&!r("4725")&&s(V,"propertyIsEnumerable",U,!0),v.f=function(t){return B(d(t))}),o(o.G+o.W+o.F*!G,{Symbol:k});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)d(et[rt++]);for(var nt=$(d.store),it=0;nt.length>it;)p(nt[it++]);o(o.S+o.F*!G,"Symbol",{for:function(t){return i(_,t+="")?_[t]:_[t]=k(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in _)if(_[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),o(o.S+o.F*!G,"Object",{create:Q,defineProperty:q,defineProperties:z,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),I&&o(o.S+o.F*(!G||c(function(){var t=k();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e=n[1],(y(e)||void 0!==t)&&!K(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!K(e))return e}),n[1]=e,M.apply(I,n)}}),k[P][F]||r("c84b")(k[P],F,k[P].valueOf),f(k,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},"48fb":function(t,e,r){"use strict";r("66f5");var n=r("4d65"),i=r("7fe4"),a=r("3a0f"),o="toString",s=/./[o],u=function(t){r("7f00")(RegExp.prototype,o,t,!0)};r("201d")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)}):s.name!=o&&u(function(){return s.call(this)})},"612f":function(t,e,r){for(var n=r("5c07"),i=r("d753"),a=r("7f00"),o=r("4839"),s=r("c84b"),u=r("f03e"),c=r("f3ae"),l=c("iterator"),f=c("toStringTag"),h=u.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(d),p=0;p<v.length;p++){var g,b=v[p],m=d[b],y=o[b],S=y&&y.prototype;if(S&&(S[l]||s(S,l,h),S[f]||s(S,f,b),u[b]=h,m))for(g in n)S[g]||a(S,g,n[g],!0)}},"62af":function(t,e,r){var n=r("7cbd"),i=r("2ba0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},6328:function(t,e,r){var n=r("33f2"),i=r("7276"),a=r("2b11");t.exports=function(t,e,r,o){var s=String(a(t)),u=s.length,c=void 0===r?" ":String(r),l=n(e);if(l<=u||""==c)return s;var f=l-u,h=i.call(c,Math.ceil(f/c.length));return h.length>f&&(h=h.slice(0,f)),o?h+s:s+h}},"66f5":function(t,e,r){r("3a0f")&&"g"!=/./g.flags&&r("694f").f(RegExp.prototype,"flags",{configurable:!0,get:r("7fe4")})},"67a1":function(t,e,r){var n=r("75ff")("meta"),i=r("b429"),a=r("3301"),o=r("694f").f,s=0,u=Object.isExtensible||function(){return!0},c=!r("201d")(function(){return u(Object.preventExtensions({}))}),l=function(t){o(t,n,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!u(t))return"F";if(!e)return"E";l(t)}return t[n].i},h=function(t,e){if(!a(t,n)){if(!u(t))return!0;if(!e)return!1;l(t)}return t[n].w},d=function(t){return c&&v.NEED&&u(t)&&!a(t,n)&&l(t),t},v=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:h,onFreeze:d}},"6bca":function(t,e,r){var n=r("4839"),i=r("1dff"),a=r("4725"),o=r("1cb8"),s=r("694f").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},7276:function(t,e,r){"use strict";var n=r("ae63"),i=r("2b11");t.exports=function(t){var e=String(i(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"78de":function(t,e,r){var n=r("48ed"),i=r("b915"),a=r("54a3"),o=r("1f51"),s=r("3301"),u=r("8003"),c=Object.getOwnPropertyDescriptor;e.f=r("3a0f")?c:function(t,e){if(t=a(t),e=o(e,!0),u)try{return c(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},"7fe4":function(t,e,r){"use strict";var n=r("4d65");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"8b3d":function(t,e,r){t.exports=r.p+"img/pause.fc899c59.png"},"990a":function(t,e,r){var n=r("9b6d");t.exports=Array.isArray||function(t){return"Array"==n(t)}},b21e:function(t,e,r){"use strict";var n=r("56f8"),i=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},c5aa:function(t,e,r){"use strict";r("18c5");var n=r("7f00"),i=r("c84b"),a=r("201d"),o=r("2b11"),s=r("f3ae"),u=r("31d0"),c=s("species"),l=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var h=s(t),d=!a(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),v=d?!a(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[c]=function(){return r}),r[h](""),!e}):void 0;if(!d||!v||"replace"===t&&!l||"split"===t&&!f){var p=/./[h],g=r(o,h,""[t],function(t,e,r,n,i){return e.exec===u?d&&!i?{done:!0,value:p.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),b=g[0],m=g[1];n(String.prototype,t,b),i(RegExp.prototype,h,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},c74c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"player",style:{background:"url("+t.data.pic+") no-repeat"}},[n("div",{staticClass:"cover"}),n("div",{staticClass:"player-disc flex-center",on:{click:t.changeStatus}},[n("div",{staticClass:"mask flex-center",style:{transform:"rotate("+t.angle+"deg)"}},[n("img",{staticClass:"pic",attrs:{src:t.data.pic}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.btnShow,expression:"btnShow"}],staticClass:"pause",attrs:{src:r("8b3d")}})])]),n("div",{staticClass:"player-songWords"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.noWord,expression:"!noWord"}],ref:"ul"},t._l(t.oLRC.ms,function(e,r){return n("li",{key:r},[t._v(t._s(e.c))])}),0),n("h2",{directives:[{name:"show",rawName:"v-show",value:t.noWord,expression:"noWord"}]},[t._v("歌曲库里暂无这首歌的歌词或者这首歌!")])]),n("audio",{ref:"audio",on:{durationchange:t.durationchange,timeupdate:t.timeupdate,ended:t.ended,error:t.error}},[n("source",{attrs:{src:""}})]),n("div",{staticClass:"progressBar"},[n("span",{staticClass:"currentTime"},[t._v(t._s(t.currentTime))]),n("input",{ref:"range",style:{backgroundSize:t.progress+" 100%"},attrs:{type:"range"},on:{input:t.changeProgress}}),n("span",{staticClass:"duration"},[t._v(t._s(t.duration))])])])},i=[],a=(r("f10e"),r("f91a"),r("0bb1"),r("40f8"),r("612f"),r("ea65"),r("48fb"),r("cca6"),{data:function(){return{isplay:!0,currentTime:"00:00",duration:"00:00",progress:"0%",ismove:!1,btnShow:!1,data:{},angle:0,timer:null,oLRC:{ti:"",ar:"",al:"",by:"",offset:0,ms:[]},lineNo:0,played:!1,noWord:!1}},methods:{durationchange:function(){this.duration=this.timeFormat(this.$refs.audio.duration)},timeupdate:function(){if(this.ismove){for(var t in this.$refs.audio.currentTime=this.$refs.range.value/100*this.$refs.audio.duration,this.oLRC.ms)if(this.oLRC.ms[t].t>this.$refs.audio.currentTime){this.lineNo=t-1;break}}else this.$refs.range.value=this.$refs.audio.currentTime/this.$refs.audio.duration*100;this.currentTime=this.timeFormat(this.$refs.audio.currentTime),this.progress=this.$refs.range.value+"%",this.ismove=!1,this.lineNo>=this.oLRC.ms.length||this.oLRC.ms[this.lineNo].t<=this.$refs.audio.currentTime&&this.heightLight()},changeProgress:function(){this.ismove=!0,this.progress=this.$refs.range.value+"%"},changeStatus:function(){this.btnShow=!this.btnShow,this.isplay=!this.isplay,this.isplay?(this.played&&(document.querySelector(".light").removeAttribute("class"),this.$refs.ul.style.transform="translateY(0)",this.lineNo=0,this.currentTime="00:00",this.progress="0%",this.$refs.audio.currentTime=0,this.played=!1,this.angle=0),this.autoRatate(),this.$refs.audio.play()):(this.$refs.audio.pause(),clearInterval(this.timer))},timeFormat:function(t){var e=Math.floor(t/60),r=Math.round(t%60);return e.toString().padStart(2,0)+":"+r.toString().padStart(2,0)},parseLrc:function(t){if(0!=t.length){var e=t.split("\n"),r=!0,n=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;s=s.replace(/(^\s*)|(\s*$)/g,"");var u=s.substring(s.indexOf("[")+1,s.indexOf("]")),c=u.split(":");if(isNaN(parseInt(c[0])))for(var l in this.oLRC)"ms"!=l&&l==c[0].toLowerCase()&&(this.oLRC[l]=c[1]);else{var f=s.match(/\[(\d+:.+?)\]/g),h=0,d=!0,v=!1,p=void 0;try{for(var g,b=f[Symbol.iterator]();!(d=(g=b.next()).done);d=!0){var m=g.value;h+=m.length}}catch(L){v=!0,p=L}finally{try{d||null==b.return||b.return()}finally{if(v)throw p}}var y=s.substring(h);if(""!=y)for(var S in f){var x=f[S].substring(1,f[S].length-1),w=x.split(":");this.oLRC.ms.push({t:(60*parseFloat(w[0])+parseFloat(w[1])).toFixed(3),c:y})}}}}catch(L){n=!0,i=L}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}0==this.oLRC.ms.length&&(this.noWord=!0)}},autoRatate:function(){var t=this;this.timer=setInterval(function(){t.angle+=10},500)},heightLight:function(){var t=this.$refs.ul.getElementsByTagName("li"),e=!0,r=!1,n=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;o.removeAttribute("class")}}catch(s){r=!0,n=s}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}t[this.lineNo].className="light",this.lineNo>6&&(this.$refs.ul.style.transform="translateY("+-20*(this.lineNo-6)+"px)"),this.lineNo++},ended:function(){this.played=!0,this.btnShow=!0,this.isplay=!1,clearInterval(this.timer)},error:function(){clearInterval(this.timer),this.progress="0%",this.$refs.range.value=0,this.noWord=!0}},mounted:function(){var t=this;this.data=JSON.parse(localStorage.getItem("data")),this.$refs.audio.src=this.data.url,this.$refs.audio.autoplay=!0,this.$refs.audio.load();var e=this.data.lrc;this.$axios.get(e).then(function(e){t.parseLrc(e)}),this.autoRatate()}}),o=a,s=(r("3f84"),r("17cc")),u=Object(s["a"])(o,n,i,!1,null,"1b4a6b29",null);e["default"]=u.exports},caa4:function(t,e,r){var n=r("ae63"),i=r("2b11");t.exports=function(t){return function(e,r){var a,o,s=String(i(e)),u=n(r),c=s.length;return u<0||u>=c?t?"":void 0:(a=s.charCodeAt(u),a<55296||a>56319||u+1===c||(o=s.charCodeAt(u+1))<56320||o>57343?t?s.charAt(u):a:t?s.slice(u,u+2):o-56320+(a-55296<<10)+65536)}}},cca6:function(t,e,r){"use strict";var n=r("2d2c"),i=r("6328"),a=r("dad2"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);n(n.P+n.F*o,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},d635:function(t,e,r){var n=r("b429"),i=r("9b6d"),a=r("f3ae")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},ea65:function(t,e,r){"use strict";var n=r("d635"),i=r("4d65"),a=r("d4f6"),o=r("1ff3"),s=r("33f2"),u=r("b21e"),c=r("31d0"),l=r("201d"),f=Math.min,h=[].push,d="split",v="length",p="lastIndex",g=4294967295,b=!l(function(){RegExp(g,"y")});r("c5aa")("split",2,function(t,e,r,l){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[v]||2!="ab"[d](/(?:ab)*/)[v]||4!="."[d](/(.?)(.?)/)[v]||"."[d](/()()/)[v]>1||""[d](/.?/)[v]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(i,t,e);var a,o,s,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?g:e>>>0,b=new RegExp(t.source,l+"g");while(a=c.call(b,i)){if(o=b[p],o>f&&(u.push(i.slice(f,a.index)),a[v]>1&&a.index<i[v]&&h.apply(u,a.slice(1)),s=a[0][v],f=o,u[v]>=d))break;b[p]===a.index&&b[p]++}return f===i[v]?!s&&b.test("")||u.push(""):u.push(i.slice(f)),u[v]>d?u.slice(0,d):u}:"0"[d](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var i=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):m.call(String(i),r,n)},function(t,e){var n=l(m,t,this,e,m!==r);if(n.done)return n.value;var c=i(t),h=String(this),d=a(c,RegExp),v=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),y=new d(b?c:"^(?:"+c.source+")",p),S=void 0===e?g:e>>>0;if(0===S)return[];if(0===h.length)return null===u(y,h)?[h]:[];var x=0,w=0,L=[];while(w<h.length){y.lastIndex=b?w:0;var C,E=u(y,b?h:h.slice(w));if(null===E||(C=f(s(y.lastIndex+(b?0:w)),h.length))===x)w=o(h,w,v);else{if(L.push(h.slice(x,w)),L.length===S)return L;for(var R=1;R<=E.length-1;R++)if(L.push(E[R]),L.length===S)return L;w=x=C}}return L.push(h.slice(x)),L}]})},f10e:function(t,e,r){"use strict";var n=r("4d65"),i=r("33f2"),a=r("1ff3"),o=r("b21e");r("c5aa")("match",1,function(t,e,r,s){return[function(r){var n=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=s(r,t,this);if(e.done)return e.value;var u=n(t),c=String(this);if(!u.global)return o(u,c);var l=u.unicode;u.lastIndex=0;var f,h=[],d=0;while(null!==(f=o(u,c))){var v=String(f[0]);h[d]=v,""===v&&(u.lastIndex=a(c,i(u.lastIndex),l)),d++}return 0===d?null:h}]})},f91a:function(t,e,r){"use strict";var n=r("4d65"),i=r("aa91"),a=r("33f2"),o=r("ae63"),s=r("1ff3"),u=r("b21e"),c=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("c5aa")("replace",2,function(t,e,r,p){return[function(n,i){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,i):r.call(String(a),n,i)},function(t,e){var i=p(r,t,this,e);if(i.done)return i.value;var f=n(t),h=String(this),d="function"===typeof e;d||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var y=[];while(1){var S=u(f,h);if(null===S)break;if(y.push(S),!b)break;var x=String(S[0]);""===x&&(f.lastIndex=s(h,a(f.lastIndex),m))}for(var w="",L=0,C=0;C<y.length;C++){S=y[C];for(var E=String(S[0]),R=c(l(o(S.index),h.length),0),$=[],N=1;N<S.length;N++)$.push(v(S[N]));var O=S.groups;if(d){var T=[E].concat($,R,h);void 0!==O&&T.push(O);var k=String(e.apply(void 0,T))}else k=g(E,h,R,$,O,e);R>=L&&(w+=h.slice(L,R)+k,L=R+E.length)}return w+h.slice(L)}];function g(t,e,n,a,o,s){var u=n+t.length,c=a.length,l=d;return void 0!==o&&(o=i(o),l=h),r.call(s,l,function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(u);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return r;if(l>c){var h=f(l/10);return 0===h?r:h<=c?void 0===a[h-1]?i.charAt(1):a[h-1]+i.charAt(1):r}s=a[l-1]}return void 0===s?"":s})}})}}]);
//# sourceMappingURL=chunk-4521549b.cb3ed992.js.map