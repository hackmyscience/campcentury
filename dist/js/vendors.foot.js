/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

 /* --------------------------- */ 

/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

 /* --------------------------- */ 

/**
 * History.js Native Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

// Closure
(function(window,undefined){
	"use strict";

	// Localise Globals
	var History = window.History = window.History||{};

	// Check Existence
	if ( typeof History.Adapter !== 'undefined' ) {
		throw new Error('History.js Adapter has already been loaded...');
	}

	// Add the Adapter
	History.Adapter = {
		/**
		 * History.Adapter.handlers[uid][eventName] = Array
		 */
		handlers: {},

		/**
		 * History.Adapter._uid
		 * The current element unique identifier
		 */
		_uid: 1,

		/**
		 * History.Adapter.uid(element)
		 * @param {Element} element
		 * @return {String} uid
		 */
		uid: function(element){
			return element._uid || (element._uid = History.Adapter._uid++);
		},

		/**
		 * History.Adapter.bind(el,event,callback)
		 * @param {Element} element
		 * @param {String} eventName - custom and standard events
		 * @param {Function} callback
		 * @return
		 */
		bind: function(element,eventName,callback){
			// Prepare
			var uid = History.Adapter.uid(element);

			// Apply Listener
			History.Adapter.handlers[uid] = History.Adapter.handlers[uid] || {};
			History.Adapter.handlers[uid][eventName] = History.Adapter.handlers[uid][eventName] || [];
			History.Adapter.handlers[uid][eventName].push(callback);

			// Bind Global Listener
			element['on'+eventName] = (function(element,eventName){
				return function(event){
					History.Adapter.trigger(element,eventName,event);
				};
			})(element,eventName);
		},

		/**
		 * History.Adapter.trigger(el,event)
		 * @param {Element} element
		 * @param {String} eventName - custom and standard events
		 * @param {Object} event - a object of event data
		 * @return
		 */
		trigger: function(element,eventName,event){
			// Prepare
			event = event || {};
			var uid = History.Adapter.uid(element),
				i,n;

			// Apply Listener
			History.Adapter.handlers[uid] = History.Adapter.handlers[uid] || {};
			History.Adapter.handlers[uid][eventName] = History.Adapter.handlers[uid][eventName] || [];

			// Fire Listeners
			for ( i=0,n=History.Adapter.handlers[uid][eventName].length; i<n; ++i ) {
				History.Adapter.handlers[uid][eventName][i].apply(this,[event]);
			}
		},

		/**
		 * History.Adapter.extractEventData(key,event,extra)
		 * @param {String} key - key for the event data to extract
		 * @param {String} event - custom and standard events
		 * @return {mixed}
		 */
		extractEventData: function(key,event){
			var result = (event && event[key]) || undefined;
			return result;
		},

		/**
		 * History.Adapter.onDomLoad(callback)
		 * @param {Function} callback
		 * @return
		 */
		onDomLoad: function(callback) {
			var timeout = window.setTimeout(function(){
				callback();
			},2000);
			window.onload = function(){
				clearTimeout(timeout);
				callback();
			};
		}
	};

	// Try to Initialise History
	if ( typeof History.init !== 'undefined' ) {
		History.init();
	}

})(window);
/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

(function(window,undefined){
	"use strict";

	// ========================================================================
	// Initialise

	// Localise Globals
	var
		console = window.console||undefined, // Prevent a JSLint complain
		document = window.document, // Make sure we are using the correct document
		navigator = window.navigator, // Make sure we are using the correct navigator
		sessionStorage = false, // sessionStorage
		setTimeout = window.setTimeout,
		clearTimeout = window.clearTimeout,
		setInterval = window.setInterval,
		clearInterval = window.clearInterval,
		JSON = window.JSON,
		alert = window.alert,
		History = window.History = window.History||{}, // Public History Object
		history = window.history; // Old History Object

	try {
		sessionStorage = window.sessionStorage; // This will throw an exception in some browsers when cookies/localStorage are explicitly disabled (i.e. Chrome)
		sessionStorage.setItem('TEST', '1');
		sessionStorage.removeItem('TEST');
	} catch(e) {
		sessionStorage = false;
	}

	// MooTools Compatibility
	JSON.stringify = JSON.stringify||JSON.encode;
	JSON.parse = JSON.parse||JSON.decode;

	// Check Existence
	if ( typeof History.init !== 'undefined' ) {
		throw new Error('History.js Core has already been loaded...');
	}

	// Initialise History
	History.init = function(options){
		// Check Load Status of Adapter
		if ( typeof History.Adapter === 'undefined' ) {
			return false;
		}

		// Check Load Status of Core
		if ( typeof History.initCore !== 'undefined' ) {
			History.initCore();
		}

		// Check Load Status of HTML4 Support
		if ( typeof History.initHtml4 !== 'undefined' ) {
			History.initHtml4();
		}

		// Return true
		return true;
	};


	// ========================================================================
	// Initialise Core

	// Initialise Core
	History.initCore = function(options){
		// Initialise
		if ( typeof History.initCore.initialized !== 'undefined' ) {
			// Already Loaded
			return false;
		}
		else {
			History.initCore.initialized = true;
		}


		// ====================================================================
		// Options

		/**
		 * History.options
		 * Configurable options
		 */
		History.options = History.options||{};

		/**
		 * History.options.hashChangeInterval
		 * How long should the interval be before hashchange checks
		 */
		History.options.hashChangeInterval = History.options.hashChangeInterval || 100;

		/**
		 * History.options.safariPollInterval
		 * How long should the interval be before safari poll checks
		 */
		History.options.safariPollInterval = History.options.safariPollInterval || 500;

		/**
		 * History.options.doubleCheckInterval
		 * How long should the interval be before we perform a double check
		 */
		History.options.doubleCheckInterval = History.options.doubleCheckInterval || 500;

		/**
		 * History.options.disableSuid
		 * Force History not to append suid
		 */
		History.options.disableSuid = History.options.disableSuid || false;

		/**
		 * History.options.storeInterval
		 * How long should we wait between store calls
		 */
		History.options.storeInterval = History.options.storeInterval || 1000;

		/**
		 * History.options.busyDelay
		 * How long should we wait between busy events
		 */
		History.options.busyDelay = History.options.busyDelay || 250;

		/**
		 * History.options.debug
		 * If true will enable debug messages to be logged
		 */
		History.options.debug = History.options.debug || false;

		/**
		 * History.options.initialTitle
		 * What is the title of the initial state
		 */
		History.options.initialTitle = History.options.initialTitle || document.title;

		/**
		 * History.options.html4Mode
		 * If true, will force HTMl4 mode (hashtags)
		 */
		History.options.html4Mode = History.options.html4Mode || false;

		/**
		 * History.options.delayInit
		 * Want to override default options and call init manually.
		 */
		History.options.delayInit = History.options.delayInit || false;


		// ====================================================================
		// Interval record

		/**
		 * History.intervalList
		 * List of intervals set, to be cleared when document is unloaded.
		 */
		History.intervalList = [];

		/**
		 * History.clearAllIntervals
		 * Clears all setInterval instances.
		 */
		History.clearAllIntervals = function(){
			var i, il = History.intervalList;
			if (typeof il !== "undefined" && il !== null) {
				for (i = 0; i < il.length; i++) {
					clearInterval(il[i]);
				}
				History.intervalList = null;
			}
		};


		// ====================================================================
		// Debug

		/**
		 * History.debug(message,...)
		 * Logs the passed arguments if debug enabled
		 */
		History.debug = function(){
			if ( (History.options.debug||false) ) {
				History.log.apply(History,arguments);
			}
		};

		/**
		 * History.log(message,...)
		 * Logs the passed arguments
		 */
		History.log = function(){
			// Prepare
			var
				consoleExists = !(typeof console === 'undefined' || typeof console.log === 'undefined' || typeof console.log.apply === 'undefined'),
				textarea = document.getElementById('log'),
				message,
				i,n,
				args,arg
				;

			// Write to Console
			if ( consoleExists ) {
				args = Array.prototype.slice.call(arguments);
				message = args.shift();
				if ( typeof console.debug !== 'undefined' ) {
					console.debug.apply(console,[message,args]);
				}
				else {
					console.log.apply(console,[message,args]);
				}
			}
			else {
				message = ("\n"+arguments[0]+"\n");
			}

			// Write to log
			for ( i=1,n=arguments.length; i<n; ++i ) {
				arg = arguments[i];
				if ( typeof arg === 'object' && typeof JSON !== 'undefined' ) {
					try {
						arg = JSON.stringify(arg);
					}
					catch ( Exception ) {
						// Recursive Object
					}
				}
				message += "\n"+arg+"\n";
			}

			// Textarea
			if ( textarea ) {
				textarea.value += message+"\n-----\n";
				textarea.scrollTop = textarea.scrollHeight - textarea.clientHeight;
			}
			// No Textarea, No Console
			else if ( !consoleExists ) {
				alert(message);
			}

			// Return true
			return true;
		};


		// ====================================================================
		// Emulated Status

		/**
		 * History.getInternetExplorerMajorVersion()
		 * Get's the major version of Internet Explorer
		 * @return {integer}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 * @author James Padolsey <https://gist.github.com/527683>
		 */
		History.getInternetExplorerMajorVersion = function(){
			var result = History.getInternetExplorerMajorVersion.cached =
					(typeof History.getInternetExplorerMajorVersion.cached !== 'undefined')
				?	History.getInternetExplorerMajorVersion.cached
				:	(function(){
						var v = 3,
								div = document.createElement('div'),
								all = div.getElementsByTagName('i');
						while ( (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->') && all[0] ) {}
						return (v > 4) ? v : false;
					})()
				;
			return result;
		};

		/**
		 * History.isInternetExplorer()
		 * Are we using Internet Explorer?
		 * @return {boolean}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 */
		History.isInternetExplorer = function(){
			var result =
				History.isInternetExplorer.cached =
				(typeof History.isInternetExplorer.cached !== 'undefined')
					?	History.isInternetExplorer.cached
					:	Boolean(History.getInternetExplorerMajorVersion())
				;
			return result;
		};

		/**
		 * History.emulated
		 * Which features require emulating?
		 */

		if (History.options.html4Mode) {
			History.emulated = {
				pushState : true,
				hashChange: true
			};
		}

		else {

			History.emulated = {
				pushState: !Boolean(
					window.history && window.history.pushState && window.history.replaceState
					&& !(
						(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent) /* disable for versions of iOS before version 4.3 (8F190) */
						|| (/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent) /* disable for the mercury iOS browser, or at least older versions of the webkit engine */
					)
				),
				hashChange: Boolean(
					!(('onhashchange' in window) || ('onhashchange' in document))
					||
					(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8)
				)
			};
		}

		/**
		 * History.enabled
		 * Is History enabled?
		 */
		History.enabled = !History.emulated.pushState;

		/**
		 * History.bugs
		 * Which bugs are present
		 */
		History.bugs = {
			/**
			 * Safari 5 and Safari iOS 4 fail to return to the correct state once a hash is replaced by a `replaceState` call
			 * https://bugs.webkit.org/show_bug.cgi?id=56249
			 */
			setHash: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),

			/**
			 * Safari 5 and Safari iOS 4 sometimes fail to apply the state change under busy conditions
			 * https://bugs.webkit.org/show_bug.cgi?id=42940
			 */
			safariPoll: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),

			/**
			 * MSIE 6 and 7 sometimes do not apply a hash even it was told to (requiring a second call to the apply function)
			 */
			ieDoubleCheck: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8),

			/**
			 * MSIE 6 requires the entire hash to be encoded for the hashes to trigger the onHashChange event
			 */
			hashEscape: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 7)
		};

		/**
		 * History.isEmptyObject(obj)
		 * Checks to see if the Object is Empty
		 * @param {Object} obj
		 * @return {boolean}
		 */
		History.isEmptyObject = function(obj) {
			for ( var name in obj ) {
				if ( obj.hasOwnProperty(name) ) {
					return false;
				}
			}
			return true;
		};

		/**
		 * History.cloneObject(obj)
		 * Clones a object and eliminate all references to the original contexts
		 * @param {Object} obj
		 * @return {Object}
		 */
		History.cloneObject = function(obj) {
			var hash,newObj;
			if ( obj ) {
				hash = JSON.stringify(obj);
				newObj = JSON.parse(hash);
			}
			else {
				newObj = {};
			}
			return newObj;
		};


		// ====================================================================
		// URL Helpers

		/**
		 * History.getRootUrl()
		 * Turns "http://mysite.com/dir/page.html?asd" into "http://mysite.com"
		 * @return {String} rootUrl
		 */
		History.getRootUrl = function(){
			// Create
			var rootUrl = document.location.protocol+'//'+(document.location.hostname||document.location.host);
			if ( document.location.port||false ) {
				rootUrl += ':'+document.location.port;
			}
			rootUrl += '/';

			// Return
			return rootUrl;
		};

		/**
		 * History.getBaseHref()
		 * Fetches the `href` attribute of the `<base href="...">` element if it exists
		 * @return {String} baseHref
		 */
		History.getBaseHref = function(){
			// Create
			var
				baseElements = document.getElementsByTagName('base'),
				baseElement = null,
				baseHref = '';

			// Test for Base Element
			if ( baseElements.length === 1 ) {
				// Prepare for Base Element
				baseElement = baseElements[0];
				baseHref = baseElement.href.replace(/[^\/]+$/,'');
			}

			// Adjust trailing slash
			baseHref = baseHref.replace(/\/+$/,'');
			if ( baseHref ) baseHref += '/';

			// Return
			return baseHref;
		};

		/**
		 * History.getBaseUrl()
		 * Fetches the baseHref or basePageUrl or rootUrl (whichever one exists first)
		 * @return {String} baseUrl
		 */
		History.getBaseUrl = function(){
			// Create
			var baseUrl = History.getBaseHref()||History.getBasePageUrl()||History.getRootUrl();

			// Return
			return baseUrl;
		};

		/**
		 * History.getPageUrl()
		 * Fetches the URL of the current page
		 * @return {String} pageUrl
		 */
		History.getPageUrl = function(){
			// Fetch
			var
				State = History.getState(false,false),
				stateUrl = (State||{}).url||History.getLocationHref(),
				pageUrl;

			// Create
			pageUrl = stateUrl.replace(/\/+$/,'').replace(/[^\/]+$/,function(part,index,string){
				return (/\./).test(part) ? part : part+'/';
			});

			// Return
			return pageUrl;
		};

		/**
		 * History.getBasePageUrl()
		 * Fetches the Url of the directory of the current page
		 * @return {String} basePageUrl
		 */
		History.getBasePageUrl = function(){
			// Create
			var basePageUrl = (History.getLocationHref()).replace(/[#\?].*/,'').replace(/[^\/]+$/,function(part,index,string){
				return (/[^\/]$/).test(part) ? '' : part;
			}).replace(/\/+$/,'')+'/';

			// Return
			return basePageUrl;
		};

		/**
		 * History.getFullUrl(url)
		 * Ensures that we have an absolute URL and not a relative URL
		 * @param {string} url
		 * @param {Boolean} allowBaseHref
		 * @return {string} fullUrl
		 */
		History.getFullUrl = function(url,allowBaseHref){
			// Prepare
			var fullUrl = url, firstChar = url.substring(0,1);
			allowBaseHref = (typeof allowBaseHref === 'undefined') ? true : allowBaseHref;

			// Check
			if ( /[a-z]+\:\/\//.test(url) ) {
				// Full URL
			}
			else if ( firstChar === '/' ) {
				// Root URL
				fullUrl = History.getRootUrl()+url.replace(/^\/+/,'');
			}
			else if ( firstChar === '#' ) {
				// Anchor URL
				fullUrl = History.getPageUrl().replace(/#.*/,'')+url;
			}
			else if ( firstChar === '?' ) {
				// Query URL
				fullUrl = History.getPageUrl().replace(/[\?#].*/,'')+url;
			}
			else {
				// Relative URL
				if ( allowBaseHref ) {
					fullUrl = History.getBaseUrl()+url.replace(/^(\.\/)+/,'');
				} else {
					fullUrl = History.getBasePageUrl()+url.replace(/^(\.\/)+/,'');
				}
				// We have an if condition above as we do not want hashes
				// which are relative to the baseHref in our URLs
				// as if the baseHref changes, then all our bookmarks
				// would now point to different locations
				// whereas the basePageUrl will always stay the same
			}

			// Return
			return fullUrl.replace(/\#$/,'');
		};

		/**
		 * History.getShortUrl(url)
		 * Ensures that we have a relative URL and not a absolute URL
		 * @param {string} url
		 * @return {string} url
		 */
		History.getShortUrl = function(url){
			// Prepare
			var shortUrl = url, baseUrl = History.getBaseUrl(), rootUrl = History.getRootUrl();

			// Trim baseUrl
			if ( History.emulated.pushState ) {
				// We are in a if statement as when pushState is not emulated
				// The actual url these short urls are relative to can change
				// So within the same session, we the url may end up somewhere different
				shortUrl = shortUrl.replace(baseUrl,'');
			}

			// Trim rootUrl
			shortUrl = shortUrl.replace(rootUrl,'/');

			// Ensure we can still detect it as a state
			if ( History.isTraditionalAnchor(shortUrl) ) {
				shortUrl = './'+shortUrl;
			}

			// Clean It
			shortUrl = shortUrl.replace(/^(\.\/)+/g,'./').replace(/\#$/,'');

			// Return
			return shortUrl;
		};

		/**
		 * History.getLocationHref(document)
		 * Returns a normalized version of document.location.href
		 * accounting for browser inconsistencies, etc.
		 *
		 * This URL will be URI-encoded and will include the hash
		 *
		 * @param {object} document
		 * @return {string} url
		 */
		History.getLocationHref = function(doc) {
			doc = doc || document;

			// most of the time, this will be true
			if (doc.URL === doc.location.href)
				return doc.location.href;

			// some versions of webkit URI-decode document.location.href
			// but they leave document.URL in an encoded state
			if (doc.location.href === decodeURIComponent(doc.URL))
				return doc.URL;

			// FF 3.6 only updates document.URL when a page is reloaded
			// document.location.href is updated correctly
			if (doc.location.hash && decodeURIComponent(doc.location.href.replace(/^[^#]+/, "")) === doc.location.hash)
				return doc.location.href;

			if (doc.URL.indexOf('#') == -1 && doc.location.href.indexOf('#') != -1)
				return doc.location.href;
			
			return doc.URL || doc.location.href;
		};


		// ====================================================================
		// State Storage

		/**
		 * History.store
		 * The store for all session specific data
		 */
		History.store = {};

		/**
		 * History.idToState
		 * 1-1: State ID to State Object
		 */
		History.idToState = History.idToState||{};

		/**
		 * History.stateToId
		 * 1-1: State String to State ID
		 */
		History.stateToId = History.stateToId||{};

		/**
		 * History.urlToId
		 * 1-1: State URL to State ID
		 */
		History.urlToId = History.urlToId||{};

		/**
		 * History.storedStates
		 * Store the states in an array
		 */
		History.storedStates = History.storedStates||[];

		/**
		 * History.savedStates
		 * Saved the states in an array
		 */
		History.savedStates = History.savedStates||[];

		/**
		 * History.noramlizeStore()
		 * Noramlize the store by adding necessary values
		 */
		History.normalizeStore = function(){
			History.store.idToState = History.store.idToState||{};
			History.store.urlToId = History.store.urlToId||{};
			History.store.stateToId = History.store.stateToId||{};
		};

		/**
		 * History.getState()
		 * Get an object containing the data, title and url of the current state
		 * @param {Boolean} friendly
		 * @param {Boolean} create
		 * @return {Object} State
		 */
		History.getState = function(friendly,create){
			// Prepare
			if ( typeof friendly === 'undefined' ) { friendly = true; }
			if ( typeof create === 'undefined' ) { create = true; }

			// Fetch
			var State = History.getLastSavedState();

			// Create
			if ( !State && create ) {
				State = History.createStateObject();
			}

			// Adjust
			if ( friendly ) {
				State = History.cloneObject(State);
				State.url = State.cleanUrl||State.url;
			}

			// Return
			return State;
		};

		/**
		 * History.getIdByState(State)
		 * Gets a ID for a State
		 * @param {State} newState
		 * @return {String} id
		 */
		History.getIdByState = function(newState){

			// Fetch ID
			var id = History.extractId(newState.url),
				str;

			if ( !id ) {
				// Find ID via State String
				str = History.getStateString(newState);
				if ( typeof History.stateToId[str] !== 'undefined' ) {
					id = History.stateToId[str];
				}
				else if ( typeof History.store.stateToId[str] !== 'undefined' ) {
					id = History.store.stateToId[str];
				}
				else {
					// Generate a new ID
					while ( true ) {
						id = (new Date()).getTime() + String(Math.random()).replace(/\D/g,'');
						if ( typeof History.idToState[id] === 'undefined' && typeof History.store.idToState[id] === 'undefined' ) {
							break;
						}
					}

					// Apply the new State to the ID
					History.stateToId[str] = id;
					History.idToState[id] = newState;
				}
			}

			// Return ID
			return id;
		};

		/**
		 * History.normalizeState(State)
		 * Expands a State Object
		 * @param {object} State
		 * @return {object}
		 */
		History.normalizeState = function(oldState){
			// Variables
			var newState, dataNotEmpty;

			// Prepare
			if ( !oldState || (typeof oldState !== 'object') ) {
				oldState = {};
			}

			// Check
			if ( typeof oldState.normalized !== 'undefined' ) {
				return oldState;
			}

			// Adjust
			if ( !oldState.data || (typeof oldState.data !== 'object') ) {
				oldState.data = {};
			}

			// ----------------------------------------------------------------

			// Create
			newState = {};
			newState.normalized = true;
			newState.title = oldState.title||'';
			newState.url = History.getFullUrl(oldState.url?oldState.url:(History.getLocationHref()));
			newState.hash = History.getShortUrl(newState.url);
			newState.data = History.cloneObject(oldState.data);

			// Fetch ID
			newState.id = History.getIdByState(newState);

			// ----------------------------------------------------------------

			// Clean the URL
			newState.cleanUrl = newState.url.replace(/\??\&_suid.*/,'');
			newState.url = newState.cleanUrl;

			// Check to see if we have more than just a url
			dataNotEmpty = !History.isEmptyObject(newState.data);

			// Apply
			if ( (newState.title || dataNotEmpty) && History.options.disableSuid !== true ) {
				// Add ID to Hash
				newState.hash = History.getShortUrl(newState.url).replace(/\??\&_suid.*/,'');
				if ( !/\?/.test(newState.hash) ) {
					newState.hash += '?';
				}
				newState.hash += '&_suid='+newState.id;
			}

			// Create the Hashed URL
			newState.hashedUrl = History.getFullUrl(newState.hash);

			// ----------------------------------------------------------------

			// Update the URL if we have a duplicate
			if ( (History.emulated.pushState || History.bugs.safariPoll) && History.hasUrlDuplicate(newState) ) {
				newState.url = newState.hashedUrl;
			}

			// ----------------------------------------------------------------

			// Return
			return newState;
		};

		/**
		 * History.createStateObject(data,title,url)
		 * Creates a object based on the data, title and url state params
		 * @param {object} data
		 * @param {string} title
		 * @param {string} url
		 * @return {object}
		 */
		History.createStateObject = function(data,title,url){
			// Hashify
			var State = {
				'data': data,
				'title': title,
				'url': url
			};

			// Expand the State
			State = History.normalizeState(State);

			// Return object
			return State;
		};

		/**
		 * History.getStateById(id)
		 * Get a state by it's UID
		 * @param {String} id
		 */
		History.getStateById = function(id){
			// Prepare
			id = String(id);

			// Retrieve
			var State = History.idToState[id] || History.store.idToState[id] || undefined;

			// Return State
			return State;
		};

		/**
		 * Get a State's String
		 * @param {State} passedState
		 */
		History.getStateString = function(passedState){
			// Prepare
			var State, cleanedState, str;

			// Fetch
			State = History.normalizeState(passedState);

			// Clean
			cleanedState = {
				data: State.data,
				title: passedState.title,
				url: passedState.url
			};

			// Fetch
			str = JSON.stringify(cleanedState);

			// Return
			return str;
		};

		/**
		 * Get a State's ID
		 * @param {State} passedState
		 * @return {String} id
		 */
		History.getStateId = function(passedState){
			// Prepare
			var State, id;

			// Fetch
			State = History.normalizeState(passedState);

			// Fetch
			id = State.id;

			// Return
			return id;
		};

		/**
		 * History.getHashByState(State)
		 * Creates a Hash for the State Object
		 * @param {State} passedState
		 * @return {String} hash
		 */
		History.getHashByState = function(passedState){
			// Prepare
			var State, hash;

			// Fetch
			State = History.normalizeState(passedState);

			// Hash
			hash = State.hash;

			// Return
			return hash;
		};

		/**
		 * History.extractId(url_or_hash)
		 * Get a State ID by it's URL or Hash
		 * @param {string} url_or_hash
		 * @return {string} id
		 */
		History.extractId = function ( url_or_hash ) {
			// Prepare
			var id,parts,url, tmp;

			// Extract
			
			// If the URL has a #, use the id from before the #
			if (url_or_hash.indexOf('#') != -1)
			{
				tmp = url_or_hash.split("#")[0];
			}
			else
			{
				tmp = url_or_hash;
			}
			
			parts = /(.*)\&_suid=([0-9]+)$/.exec(tmp);
			url = parts ? (parts[1]||url_or_hash) : url_or_hash;
			id = parts ? String(parts[2]||'') : '';

			// Return
			return id||false;
		};

		/**
		 * History.isTraditionalAnchor
		 * Checks to see if the url is a traditional anchor or not
		 * @param {String} url_or_hash
		 * @return {Boolean}
		 */
		History.isTraditionalAnchor = function(url_or_hash){
			// Check
			var isTraditional = !(/[\/\?\.]/.test(url_or_hash));

			// Return
			return isTraditional;
		};

		/**
		 * History.extractState
		 * Get a State by it's URL or Hash
		 * @param {String} url_or_hash
		 * @return {State|null}
		 */
		History.extractState = function(url_or_hash,create){
			// Prepare
			var State = null, id, url;
			create = create||false;

			// Fetch SUID
			id = History.extractId(url_or_hash);
			if ( id ) {
				State = History.getStateById(id);
			}

			// Fetch SUID returned no State
			if ( !State ) {
				// Fetch URL
				url = History.getFullUrl(url_or_hash);

				// Check URL
				id = History.getIdByUrl(url)||false;
				if ( id ) {
					State = History.getStateById(id);
				}

				// Create State
				if ( !State && create && !History.isTraditionalAnchor(url_or_hash) ) {
					State = History.createStateObject(null,null,url);
				}
			}

			// Return
			return State;
		};

		/**
		 * History.getIdByUrl()
		 * Get a State ID by a State URL
		 */
		History.getIdByUrl = function(url){
			// Fetch
			var id = History.urlToId[url] || History.store.urlToId[url] || undefined;

			// Return
			return id;
		};

		/**
		 * History.getLastSavedState()
		 * Get an object containing the data, title and url of the current state
		 * @return {Object} State
		 */
		History.getLastSavedState = function(){
			return History.savedStates[History.savedStates.length-1]||undefined;
		};

		/**
		 * History.getLastStoredState()
		 * Get an object containing the data, title and url of the current state
		 * @return {Object} State
		 */
		History.getLastStoredState = function(){
			return History.storedStates[History.storedStates.length-1]||undefined;
		};

		/**
		 * History.hasUrlDuplicate
		 * Checks if a Url will have a url conflict
		 * @param {Object} newState
		 * @return {Boolean} hasDuplicate
		 */
		History.hasUrlDuplicate = function(newState) {
			// Prepare
			var hasDuplicate = false,
				oldState;

			// Fetch
			oldState = History.extractState(newState.url);

			// Check
			hasDuplicate = oldState && oldState.id !== newState.id;

			// Return
			return hasDuplicate;
		};

		/**
		 * History.storeState
		 * Store a State
		 * @param {Object} newState
		 * @return {Object} newState
		 */
		History.storeState = function(newState){
			// Store the State
			History.urlToId[newState.url] = newState.id;

			// Push the State
			History.storedStates.push(History.cloneObject(newState));

			// Return newState
			return newState;
		};

		/**
		 * History.isLastSavedState(newState)
		 * Tests to see if the state is the last state
		 * @param {Object} newState
		 * @return {boolean} isLast
		 */
		History.isLastSavedState = function(newState){
			// Prepare
			var isLast = false,
				newId, oldState, oldId;

			// Check
			if ( History.savedStates.length ) {
				newId = newState.id;
				oldState = History.getLastSavedState();
				oldId = oldState.id;

				// Check
				isLast = (newId === oldId);
			}

			// Return
			return isLast;
		};

		/**
		 * History.saveState
		 * Push a State
		 * @param {Object} newState
		 * @return {boolean} changed
		 */
		History.saveState = function(newState){
			// Check Hash
			if ( History.isLastSavedState(newState) ) {
				return false;
			}

			// Push the State
			History.savedStates.push(History.cloneObject(newState));

			// Return true
			return true;
		};

		/**
		 * History.getStateByIndex()
		 * Gets a state by the index
		 * @param {integer} index
		 * @return {Object}
		 */
		History.getStateByIndex = function(index){
			// Prepare
			var State = null;

			// Handle
			if ( typeof index === 'undefined' ) {
				// Get the last inserted
				State = History.savedStates[History.savedStates.length-1];
			}
			else if ( index < 0 ) {
				// Get from the end
				State = History.savedStates[History.savedStates.length+index];
			}
			else {
				// Get from the beginning
				State = History.savedStates[index];
			}

			// Return State
			return State;
		};
		
		/**
		 * History.getCurrentIndex()
		 * Gets the current index
		 * @return (integer)
		*/
		History.getCurrentIndex = function(){
			// Prepare
			var index = null;
			
			// No states saved
			if(History.savedStates.length < 1) {
				index = 0;
			}
			else {
				index = History.savedStates.length-1;
			}
			return index;
		};

		// ====================================================================
		// Hash Helpers

		/**
		 * History.getHash()
		 * @param {Location=} location
		 * Gets the current document hash
		 * Note: unlike location.hash, this is guaranteed to return the escaped hash in all browsers
		 * @return {string}
		 */
		History.getHash = function(doc){
			var url = History.getLocationHref(doc),
				hash;
			hash = History.getHashByUrl(url);
			return hash;
		};

		/**
		 * History.unescapeHash()
		 * normalize and Unescape a Hash
		 * @param {String} hash
		 * @return {string}
		 */
		History.unescapeHash = function(hash){
			// Prepare
			var result = History.normalizeHash(hash);

			// Unescape hash
			result = decodeURIComponent(result);

			// Return result
			return result;
		};

		/**
		 * History.normalizeHash()
		 * normalize a hash across browsers
		 * @return {string}
		 */
		History.normalizeHash = function(hash){
			// Prepare
			var result = hash.replace(/[^#]*#/,'').replace(/#.*/, '');

			// Return result
			return result;
		};

		/**
		 * History.setHash(hash)
		 * Sets the document hash
		 * @param {string} hash
		 * @return {History}
		 */
		History.setHash = function(hash,queue){
			// Prepare
			var State, pageUrl;

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.setHash: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.setHash,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Log
			//History.debug('History.setHash: called',hash);

			// Make Busy + Continue
			History.busy(true);

			// Check if hash is a state
			State = History.extractState(hash,true);
			if ( State && !History.emulated.pushState ) {
				// Hash is a state so skip the setHash
				//History.debug('History.setHash: Hash is a state so skipping the hash set with a direct pushState call',arguments);

				// PushState
				History.pushState(State.data,State.title,State.url,false);
			}
			else if ( History.getHash() !== hash ) {
				// Hash is a proper hash, so apply it

				// Handle browser bugs
				if ( History.bugs.setHash ) {
					// Fix Safari Bug https://bugs.webkit.org/show_bug.cgi?id=56249

					// Fetch the base page
					pageUrl = History.getPageUrl();

					// Safari hash apply
					History.pushState(null,null,pageUrl+'#'+hash,false);
				}
				else {
					// Normal hash apply
					document.location.hash = hash;
				}
			}

			// Chain
			return History;
		};

		/**
		 * History.escape()
		 * normalize and Escape a Hash
		 * @return {string}
		 */
		History.escapeHash = function(hash){
			// Prepare
			var result = History.normalizeHash(hash);

			// Escape hash
			result = window.encodeURIComponent(result);

			// IE6 Escape Bug
			if ( !History.bugs.hashEscape ) {
				// Restore common parts
				result = result
					.replace(/\%21/g,'!')
					.replace(/\%26/g,'&')
					.replace(/\%3D/g,'=')
					.replace(/\%3F/g,'?');
			}

			// Return result
			return result;
		};

		/**
		 * History.getHashByUrl(url)
		 * Extracts the Hash from a URL
		 * @param {string} url
		 * @return {string} url
		 */
		History.getHashByUrl = function(url){
			// Extract the hash
			var hash = String(url)
				.replace(/([^#]*)#?([^#]*)#?(.*)/, '$2')
				;

			// Unescape hash
			hash = History.unescapeHash(hash);

			// Return hash
			return hash;
		};

		/**
		 * History.setTitle(title)
		 * Applies the title to the document
		 * @param {State} newState
		 * @return {Boolean}
		 */
		History.setTitle = function(newState){
			// Prepare
			var title = newState.title,
				firstState;

			// Initial
			if ( !title ) {
				firstState = History.getStateByIndex(0);
				if ( firstState && firstState.url === newState.url ) {
					title = firstState.title||History.options.initialTitle;
				}
			}

			// Apply
			try {
				document.getElementsByTagName('title')[0].innerHTML = title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');
			}
			catch ( Exception ) { }
			document.title = title;

			// Chain
			return History;
		};


		// ====================================================================
		// Queueing

		/**
		 * History.queues
		 * The list of queues to use
		 * First In, First Out
		 */
		History.queues = [];

		/**
		 * History.busy(value)
		 * @param {boolean} value [optional]
		 * @return {boolean} busy
		 */
		History.busy = function(value){
			// Apply
			if ( typeof value !== 'undefined' ) {
				//History.debug('History.busy: changing ['+(History.busy.flag||false)+'] to ['+(value||false)+']', History.queues.length);
				History.busy.flag = value;
			}
			// Default
			else if ( typeof History.busy.flag === 'undefined' ) {
				History.busy.flag = false;
			}

			// Queue
			if ( !History.busy.flag ) {
				// Execute the next item in the queue
				clearTimeout(History.busy.timeout);
				var fireNext = function(){
					var i, queue, item;
					if ( History.busy.flag ) return;
					for ( i=History.queues.length-1; i >= 0; --i ) {
						queue = History.queues[i];
						if ( queue.length === 0 ) continue;
						item = queue.shift();
						History.fireQueueItem(item);
						History.busy.timeout = setTimeout(fireNext,History.options.busyDelay);
					}
				};
				History.busy.timeout = setTimeout(fireNext,History.options.busyDelay);
			}

			// Return
			return History.busy.flag;
		};

		/**
		 * History.busy.flag
		 */
		History.busy.flag = false;

		/**
		 * History.fireQueueItem(item)
		 * Fire a Queue Item
		 * @param {Object} item
		 * @return {Mixed} result
		 */
		History.fireQueueItem = function(item){
			return item.callback.apply(item.scope||History,item.args||[]);
		};

		/**
		 * History.pushQueue(callback,args)
		 * Add an item to the queue
		 * @param {Object} item [scope,callback,args,queue]
		 */
		History.pushQueue = function(item){
			// Prepare the queue
			History.queues[item.queue||0] = History.queues[item.queue||0]||[];

			// Add to the queue
			History.queues[item.queue||0].push(item);

			// Chain
			return History;
		};

		/**
		 * History.queue (item,queue), (func,queue), (func), (item)
		 * Either firs the item now if not busy, or adds it to the queue
		 */
		History.queue = function(item,queue){
			// Prepare
			if ( typeof item === 'function' ) {
				item = {
					callback: item
				};
			}
			if ( typeof queue !== 'undefined' ) {
				item.queue = queue;
			}

			// Handle
			if ( History.busy() ) {
				History.pushQueue(item);
			} else {
				History.fireQueueItem(item);
			}

			// Chain
			return History;
		};

		/**
		 * History.clearQueue()
		 * Clears the Queue
		 */
		History.clearQueue = function(){
			History.busy.flag = false;
			History.queues = [];
			return History;
		};


		// ====================================================================
		// IE Bug Fix

		/**
		 * History.stateChanged
		 * States whether or not the state has changed since the last double check was initialised
		 */
		History.stateChanged = false;

		/**
		 * History.doubleChecker
		 * Contains the timeout used for the double checks
		 */
		History.doubleChecker = false;

		/**
		 * History.doubleCheckComplete()
		 * Complete a double check
		 * @return {History}
		 */
		History.doubleCheckComplete = function(){
			// Update
			History.stateChanged = true;

			// Clear
			History.doubleCheckClear();

			// Chain
			return History;
		};

		/**
		 * History.doubleCheckClear()
		 * Clear a double check
		 * @return {History}
		 */
		History.doubleCheckClear = function(){
			// Clear
			if ( History.doubleChecker ) {
				clearTimeout(History.doubleChecker);
				History.doubleChecker = false;
			}

			// Chain
			return History;
		};

		/**
		 * History.doubleCheck()
		 * Create a double check
		 * @return {History}
		 */
		History.doubleCheck = function(tryAgain){
			// Reset
			History.stateChanged = false;
			History.doubleCheckClear();

			// Fix IE6,IE7 bug where calling history.back or history.forward does not actually change the hash (whereas doing it manually does)
			// Fix Safari 5 bug where sometimes the state does not change: https://bugs.webkit.org/show_bug.cgi?id=42940
			if ( History.bugs.ieDoubleCheck ) {
				// Apply Check
				History.doubleChecker = setTimeout(
					function(){
						History.doubleCheckClear();
						if ( !History.stateChanged ) {
							//History.debug('History.doubleCheck: State has not yet changed, trying again', arguments);
							// Re-Attempt
							tryAgain();
						}
						return true;
					},
					History.options.doubleCheckInterval
				);
			}

			// Chain
			return History;
		};


		// ====================================================================
		// Safari Bug Fix

		/**
		 * History.safariStatePoll()
		 * Poll the current state
		 * @return {History}
		 */
		History.safariStatePoll = function(){
			// Poll the URL

			// Get the Last State which has the new URL
			var
				urlState = History.extractState(History.getLocationHref()),
				newState;

			// Check for a difference
			if ( !History.isLastSavedState(urlState) ) {
				newState = urlState;
			}
			else {
				return;
			}

			// Check if we have a state with that url
			// If not create it
			if ( !newState ) {
				//History.debug('History.safariStatePoll: new');
				newState = History.createStateObject();
			}

			// Apply the New State
			//History.debug('History.safariStatePoll: trigger');
			History.Adapter.trigger(window,'popstate');

			// Chain
			return History;
		};


		// ====================================================================
		// State Aliases

		/**
		 * History.back(queue)
		 * Send the browser history back one item
		 * @param {Integer} queue [optional]
		 */
		History.back = function(queue){
			//History.debug('History.back: called', arguments);

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.back: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.back,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Make Busy + Continue
			History.busy(true);

			// Fix certain browser bugs that prevent the state from changing
			History.doubleCheck(function(){
				History.back(false);
			});

			// Go back
			history.go(-1);

			// End back closure
			return true;
		};

		/**
		 * History.forward(queue)
		 * Send the browser history forward one item
		 * @param {Integer} queue [optional]
		 */
		History.forward = function(queue){
			//History.debug('History.forward: called', arguments);

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.forward: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.forward,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Make Busy + Continue
			History.busy(true);

			// Fix certain browser bugs that prevent the state from changing
			History.doubleCheck(function(){
				History.forward(false);
			});

			// Go forward
			history.go(1);

			// End forward closure
			return true;
		};

		/**
		 * History.go(index,queue)
		 * Send the browser history back or forward index times
		 * @param {Integer} queue [optional]
		 */
		History.go = function(index,queue){
			//History.debug('History.go: called', arguments);

			// Prepare
			var i;

			// Handle
			if ( index > 0 ) {
				// Forward
				for ( i=1; i<=index; ++i ) {
					History.forward(queue);
				}
			}
			else if ( index < 0 ) {
				// Backward
				for ( i=-1; i>=index; --i ) {
					History.back(queue);
				}
			}
			else {
				throw new Error('History.go: History.go requires a positive or negative integer passed.');
			}

			// Chain
			return History;
		};


		// ====================================================================
		// HTML5 State Support

		// Non-Native pushState Implementation
		if ( History.emulated.pushState ) {
			/*
			 * Provide Skeleton for HTML4 Browsers
			 */

			// Prepare
			var emptyFunction = function(){};
			History.pushState = History.pushState||emptyFunction;
			History.replaceState = History.replaceState||emptyFunction;
		} // History.emulated.pushState

		// Native pushState Implementation
		else {
			/*
			 * Use native HTML5 History API Implementation
			 */

			/**
			 * History.onPopState(event,extra)
			 * Refresh the Current State
			 */
			History.onPopState = function(event,extra){
				// Prepare
				var stateId = false, newState = false, currentHash, currentState;

				// Reset the double check
				History.doubleCheckComplete();

				// Check for a Hash, and handle apporiatly
				currentHash = History.getHash();
				if ( currentHash ) {
					// Expand Hash
					currentState = History.extractState(currentHash||History.getLocationHref(),true);
					if ( currentState ) {
						// We were able to parse it, it must be a State!
						// Let's forward to replaceState
						//History.debug('History.onPopState: state anchor', currentHash, currentState);
						History.replaceState(currentState.data, currentState.title, currentState.url, false);
					}
					else {
						// Traditional Anchor
						//History.debug('History.onPopState: traditional anchor', currentHash);
						History.Adapter.trigger(window,'anchorchange');
						History.busy(false);
					}

					// We don't care for hashes
					History.expectedStateId = false;
					return false;
				}

				// Ensure
				stateId = History.Adapter.extractEventData('state',event,extra) || false;

				// Fetch State
				if ( stateId ) {
					// Vanilla: Back/forward button was used
					newState = History.getStateById(stateId);
				}
				else if ( History.expectedStateId ) {
					// Vanilla: A new state was pushed, and popstate was called manually
					newState = History.getStateById(History.expectedStateId);
				}
				else {
					// Initial State
					newState = History.extractState(History.getLocationHref());
				}

				// The State did not exist in our store
				if ( !newState ) {
					// Regenerate the State
					newState = History.createStateObject(null,null,History.getLocationHref());
				}

				// Clean
				History.expectedStateId = false;

				// Check if we are the same state
				if ( History.isLastSavedState(newState) ) {
					// There has been no change (just the page's hash has finally propagated)
					//History.debug('History.onPopState: no change', newState, History.savedStates);
					History.busy(false);
					return false;
				}

				// Store the State
				History.storeState(newState);
				History.saveState(newState);

				// Force update of the title
				History.setTitle(newState);

				// Fire Our Event
				History.Adapter.trigger(window,'statechange');
				History.busy(false);

				// Return true
				return true;
			};
			History.Adapter.bind(window,'popstate',History.onPopState);

			/**
			 * History.pushState(data,title,url)
			 * Add a new State to the history object, become it, and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.pushState = function(data,title,url,queue){
				//History.debug('History.pushState: called', arguments);

				// Check the State
				if ( History.getHashByUrl(url) && History.emulated.pushState ) {
					throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.pushState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.pushState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy + Continue
				History.busy(true);

				// Create the newState
				var newState = History.createStateObject(data,title,url);

				// Check it
				if ( History.isLastSavedState(newState) ) {
					// Won't be a change
					History.busy(false);
				}
				else {
					// Store the newState
					History.storeState(newState);
					History.expectedStateId = newState.id;

					// Push the newState
					history.pushState(newState.id,newState.title,newState.url);

					// Fire HTML5 Event
					History.Adapter.trigger(window,'popstate');
				}

				// End pushState closure
				return true;
			};

			/**
			 * History.replaceState(data,title,url)
			 * Replace the State and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.replaceState = function(data,title,url,queue){
				//History.debug('History.replaceState: called', arguments);

				// Check the State
				if ( History.getHashByUrl(url) && History.emulated.pushState ) {
					throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.replaceState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.replaceState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy + Continue
				History.busy(true);

				// Create the newState
				var newState = History.createStateObject(data,title,url);

				// Check it
				if ( History.isLastSavedState(newState) ) {
					// Won't be a change
					History.busy(false);
				}
				else {
					// Store the newState
					History.storeState(newState);
					History.expectedStateId = newState.id;

					// Push the newState
					history.replaceState(newState.id,newState.title,newState.url);

					// Fire HTML5 Event
					History.Adapter.trigger(window,'popstate');
				}

				// End replaceState closure
				return true;
			};

		} // !History.emulated.pushState


		// ====================================================================
		// Initialise

		/**
		 * Load the Store
		 */
		if ( sessionStorage ) {
			// Fetch
			try {
				History.store = JSON.parse(sessionStorage.getItem('History.store'))||{};
			}
			catch ( err ) {
				History.store = {};
			}

			// Normalize
			History.normalizeStore();
		}
		else {
			// Default Load
			History.store = {};
			History.normalizeStore();
		}

		/**
		 * Clear Intervals on exit to prevent memory leaks
		 */
		History.Adapter.bind(window,"unload",History.clearAllIntervals);

		/**
		 * Create the initial State
		 */
		History.saveState(History.storeState(History.extractState(History.getLocationHref(),true)));

		/**
		 * Bind for Saving Store
		 */
		if ( sessionStorage ) {
			// When the page is closed
			History.onUnload = function(){
				// Prepare
				var	currentStore, item, currentStoreString;

				// Fetch
				try {
					currentStore = JSON.parse(sessionStorage.getItem('History.store'))||{};
				}
				catch ( err ) {
					currentStore = {};
				}

				// Ensure
				currentStore.idToState = currentStore.idToState || {};
				currentStore.urlToId = currentStore.urlToId || {};
				currentStore.stateToId = currentStore.stateToId || {};

				// Sync
				for ( item in History.idToState ) {
					if ( !History.idToState.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.idToState[item] = History.idToState[item];
				}
				for ( item in History.urlToId ) {
					if ( !History.urlToId.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.urlToId[item] = History.urlToId[item];
				}
				for ( item in History.stateToId ) {
					if ( !History.stateToId.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.stateToId[item] = History.stateToId[item];
				}

				// Update
				History.store = currentStore;
				History.normalizeStore();

				// In Safari, going into Private Browsing mode causes the
				// Session Storage object to still exist but if you try and use
				// or set any property/function of it it throws the exception
				// "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to
				// add something to storage that exceeded the quota." infinitely
				// every second.
				currentStoreString = JSON.stringify(currentStore);
				try {
					// Store
					sessionStorage.setItem('History.store', currentStoreString);
				}
				catch (e) {
					if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {
						if (sessionStorage.length) {
							// Workaround for a bug seen on iPads. Sometimes the quota exceeded error comes up and simply
							// removing/resetting the storage can work.
							sessionStorage.removeItem('History.store');
							sessionStorage.setItem('History.store', currentStoreString);
						} else {
							// Otherwise, we're probably private browsing in Safari, so we'll ignore the exception.
						}
					} else {
						throw e;
					}
				}
			};

			// For Internet Explorer
			History.intervalList.push(setInterval(History.onUnload,History.options.storeInterval));

			// For Other Browsers
			History.Adapter.bind(window,'beforeunload',History.onUnload);
			History.Adapter.bind(window,'unload',History.onUnload);

			// Both are enabled for consistency
		}

		// Non-Native pushState Implementation
		if ( !History.emulated.pushState ) {
			// Be aware, the following is only for native pushState implementations
			// If you are wanting to include something for all browsers
			// Then include it above this if block

			/**
			 * Setup Safari Fix
			 */
			if ( History.bugs.safariPoll ) {
				History.intervalList.push(setInterval(History.safariStatePoll, History.options.safariPollInterval));
			}

			/**
			 * Ensure Cross Browser Compatibility
			 */
			if ( navigator.vendor === 'Apple Computer, Inc.' || (navigator.appCodeName||'') === 'Mozilla' ) {
				/**
				 * Fix Safari HashChange Issue
				 */

				// Setup Alias
				History.Adapter.bind(window,'hashchange',function(){
					History.Adapter.trigger(window,'popstate');
				});

				// Initialise Alias
				if ( History.getHash() ) {
					History.Adapter.onDomLoad(function(){
						History.Adapter.trigger(window,'hashchange');
					});
				}
			}

		} // !History.emulated.pushState


	}; // History.initCore

	// Try to Initialise History
	if (!History.options || !History.options.delayInit) {
		History.init();
	}

})(window);

 /* --------------------------- */ 

/**
 * @license
 * pixi.js - v1.6.0
 * Copyright (c) 2012-2014, Mat Groves
 * http://goodboydigital.com/
 *
 * Compiled: 2014-07-18
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

(function(){

    var root = this;

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * @module PIXI
 */
var PIXI = PIXI || {};

/* 
* 
* This file contains a lot of pixi consts which are used across the rendering engine
* @class Consts
*/
PIXI.WEBGL_RENDERER = 0;
PIXI.CANVAS_RENDERER = 1;

// useful for testing against if your lib is using pixi.
PIXI.VERSION = "v1.6.1";


// the various blend modes supported by pixi
PIXI.blendModes = {
    NORMAL:0,
    ADD:1,
    MULTIPLY:2,
    SCREEN:3,
    OVERLAY:4,
    DARKEN:5,
    LIGHTEN:6,
    COLOR_DODGE:7,
    COLOR_BURN:8,
    HARD_LIGHT:9,
    SOFT_LIGHT:10,
    DIFFERENCE:11,
    EXCLUSION:12,
    HUE:13,
    SATURATION:14,
    COLOR:15,
    LUMINOSITY:16
};

// the scale modes
PIXI.scaleModes = {
    DEFAULT:0,
    LINEAR:0,
    NEAREST:1
};

// used to create uids for various pixi objects..
PIXI._UID = 0;

if(typeof(Float32Array) != 'undefined')
{
    PIXI.Float32Array = Float32Array;
    PIXI.Uint16Array = Uint16Array;
}
else
{
    PIXI.Float32Array = Array;
    PIXI.Uint16Array = Array;
}

// interaction frequency 
PIXI.INTERACTION_FREQUENCY = 30;
PIXI.AUTO_PREVENT_DEFAULT = true;

PIXI.RAD_TO_DEG = 180 / Math.PI;
PIXI.DEG_TO_RAD = Math.PI / 180;


PIXI.dontSayHello = false;

PIXI.sayHello = function (type) 
{
    if(PIXI.dontSayHello)return;

    if ( navigator.userAgent.toLowerCase().indexOf('chrome') > -1 )
    {
        var args = [
            '%c %c %c Pixi.js ' + PIXI.VERSION + ' - ' + type + '  %c ' + ' %c ' + ' http://www.pixijs.com/  %c %c ♥%c♥%c♥ ',
            'background: #ff66a5',
            'background: #ff66a5',
            'color: #ff66a5; background: #030307;',
            'background: #ff66a5',
            'background: #ffc3dc',
            'background: #ff66a5',
            'color: #ff2424; background: #fff',
            'color: #ff2424; background: #fff',
            'color: #ff2424; background: #fff'
        ];

       

        console.log.apply(console, args);
    }
    else if (window['console'])
    {
        console.log('Pixi.js ' + PIXI.VERSION + ' - http://www.pixijs.com/');
    }

    PIXI.dontSayHello = true;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *
 * @class Point
 * @constructor
 * @param x {Number} position of the point on the x axis
 * @param y {Number} position of the point on the y axis
 */
PIXI.Point = function(x, y)
{
    /**
     * @property x
     * @type Number
     * @default 0
     */
    this.x = x || 0;

    /**
     * @property y
     * @type Number
     * @default 0
     */
    this.y = y || 0;
};

/**
 * Creates a clone of this point
 *
 * @method clone
 * @return {Point} a copy of the point
 */
PIXI.Point.prototype.clone = function()
{
    return new PIXI.Point(this.x, this.y);
};

/**
 * Sets the point to a new x and y position.
 * If y is ommited, both x and y will be set to x.
 * 
 * @method set
 * @param [x=0] {Number} position of the point on the x axis
 * @param [y=0] {Number} position of the point on the y axis
 */
PIXI.Point.prototype.set = function(x, y)
{
    this.x = x || 0;
    this.y = y || ( (y !== 0) ? this.x : 0 ) ;
};

// constructor
PIXI.Point.prototype.constructor = PIXI.Point;
/**
 * @author Mat Groves http://matgroves.com/
 */

/**
 * the Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class Rectangle
 * @constructor
 * @param x {Number} The X coord of the upper-left corner of the rectangle
 * @param y {Number} The Y coord of the upper-left corner of the rectangle
 * @param width {Number} The overall width of this rectangle
 * @param height {Number} The overall height of this rectangle
 */
PIXI.Rectangle = function(x, y, width, height)
{
    /**
     * @property x
     * @type Number
     * @default 0
     */
    this.x = x || 0;

    /**
     * @property y
     * @type Number
     * @default 0
     */
    this.y = y || 0;

    /**
     * @property width
     * @type Number
     * @default 0
     */
    this.width = width || 0;

    /**
     * @property height
     * @type Number
     * @default 0
     */
    this.height = height || 0;
};

/**
 * Creates a clone of this Rectangle
 *
 * @method clone
 * @return {Rectangle} a copy of the rectangle
 */
PIXI.Rectangle.prototype.clone = function()
{
    return new PIXI.Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates passed to this function are contained within this Rectangle
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coords are within this Rectangle
 */
PIXI.Rectangle.prototype.contains = function(x, y)
{
    if(this.width <= 0 || this.height <= 0)
        return false;

    var x1 = this.x;
    if(x >= x1 && x <= x1 + this.width)
    {
        var y1 = this.y;

        if(y >= y1 && y <= y1 + this.height)
        {
            return true;
        }
    }

    return false;
};

// constructor
PIXI.Rectangle.prototype.constructor = PIXI.Rectangle;

PIXI.EmptyRectangle = new PIXI.Rectangle(0,0,0,0);
/**
 * @author Adrien Brault <adrien.brault@gmail.com>
 */

/**
 * @class Polygon
 * @constructor
 * @param points* {Array<Point>|Array<Number>|Point...|Number...} This can be an array of Points that form the polygon,
 *      a flat array of numbers that will be interpreted as [x,y, x,y, ...], or the arguments passed can be
 *      all the points of the polygon e.g. `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the
 *      arguments passed can be flat x,y values e.g. `new PIXI.Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are
 *      Numbers.
 */
PIXI.Polygon = function(points)
{
    //if points isn't an array, use arguments as the array
    if(!(points instanceof Array))
        points = Array.prototype.slice.call(arguments);

    //if this is a flat array of numbers, convert it to points
    if(typeof points[0] === 'number') {
        var p = [];
        for(var i = 0, il = points.length; i < il; i+=2) {
            p.push(
                new PIXI.Point(points[i], points[i + 1])
            );
        }

        points = p;
    }

    this.points = points;
};

/**
 * Creates a clone of this polygon
 *
 * @method clone
 * @return {Polygon} a copy of the polygon
 */
PIXI.Polygon.prototype.clone = function()
{
    var points = [];
    for (var i=0; i<this.points.length; i++) {
        points.push(this.points[i].clone());
    }

    return new PIXI.Polygon(points);
};

/**
 * Checks whether the x and y coordinates passed to this function are contained within this polygon
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coordinates are within this polygon
 */
PIXI.Polygon.prototype.contains = function(x, y)
{
    var inside = false;

    // use some raycasting to test hits
    // https://github.com/substack/point-in-polygon/blob/master/index.js
    for(var i = 0, j = this.points.length - 1; i < this.points.length; j = i++) {
        var xi = this.points[i].x, yi = this.points[i].y,
            xj = this.points[j].x, yj = this.points[j].y,
            intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

        if(intersect) inside = !inside;
    }

    return inside;
};

// constructor
PIXI.Polygon.prototype.constructor = PIXI.Polygon;

/**
 * @author Chad Engler <chad@pantherdev.com>
 */

/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class Circle
 * @constructor
 * @param x {Number} The X coordinate of the center of this circle
 * @param y {Number} The Y coordinate of the center of this circle
 * @param radius {Number} The radius of the circle
 */
PIXI.Circle = function(x, y, radius)
{
    /**
     * @property x
     * @type Number
     * @default 0
     */
    this.x = x || 0;

    /**
     * @property y
     * @type Number
     * @default 0
     */
    this.y = y || 0;

    /**
     * @property radius
     * @type Number
     * @default 0
     */
    this.radius = radius || 0;
};

/**
 * Creates a clone of this Circle instance
 *
 * @method clone
 * @return {Circle} a copy of the polygon
 */
PIXI.Circle.prototype.clone = function()
{
    return new PIXI.Circle(this.x, this.y, this.radius);
};

/**
 * Checks whether the x, and y coordinates passed to this function are contained within this circle
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coordinates are within this polygon
 */
PIXI.Circle.prototype.contains = function(x, y)
{
    if(this.radius <= 0)
        return false;

    var dx = (this.x - x),
        dy = (this.y - y),
        r2 = this.radius * this.radius;

    dx *= dx;
    dy *= dy;

    return (dx + dy <= r2);
};

/**
* Returns the framing rectangle of the circle as a PIXI.Rectangle object
*
* @method getBounds
* @return {Rectangle} the framing rectangle
*/
PIXI.Circle.prototype.getBounds = function()
{
    return new PIXI.Rectangle(this.x - this.radius, this.y - this.radius, this.width, this.height);
};

// constructor
PIXI.Circle.prototype.constructor = PIXI.Circle;


/**
 * @author Chad Engler <chad@pantherdev.com>
 */

/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class Ellipse
 * @constructor
 * @param x {Number} The X coordinate of the center of the ellipse
 * @param y {Number} The Y coordinate of the center of the ellipse
 * @param width {Number} The half width of this ellipse
 * @param height {Number} The half height of this ellipse
 */
PIXI.Ellipse = function(x, y, width, height)
{
    /**
     * @property x
     * @type Number
     * @default 0
     */
    this.x = x || 0;

    /**
     * @property y
     * @type Number
     * @default 0
     */
    this.y = y || 0;

    /**
     * @property width
     * @type Number
     * @default 0
     */
    this.width = width || 0;

    /**
     * @property height
     * @type Number
     * @default 0
     */
    this.height = height || 0;
};

/**
 * Creates a clone of this Ellipse instance
 *
 * @method clone
 * @return {Ellipse} a copy of the ellipse
 */
PIXI.Ellipse.prototype.clone = function()
{
    return new PIXI.Ellipse(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates passed to this function are contained within this ellipse
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coords are within this ellipse
 */
PIXI.Ellipse.prototype.contains = function(x, y)
{
    if(this.width <= 0 || this.height <= 0)
        return false;

    //normalize the coords to an ellipse with center 0,0
    var normx = ((x - this.x) / this.width),
        normy = ((y - this.y) / this.height);

    normx *= normx;
    normy *= normy;

    return (normx + normy <= 1);
};

/**
* Returns the framing rectangle of the ellipse as a PIXI.Rectangle object
*
* @method getBounds
* @return {Rectangle} the framing rectangle
*/
PIXI.Ellipse.prototype.getBounds = function()
{
    return new PIXI.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
};

// constructor
PIXI.Ellipse.prototype.constructor = PIXI.Ellipse;

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Matrix class is now an object, which makes it a lot faster, 
 * here is a representation of it : 
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class Matrix
 * @constructor
 */
PIXI.Matrix = function()
{
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
};

/**
 * Creates a pixi matrix object based on the array given as a parameter
 *
 * @method fromArray
 * @param array {Array} The array that the matrix will be filled with
 */
PIXI.Matrix.prototype.fromArray = function(array)
{
    this.a = array[0];
    this.b = array[1];
    this.c = array[3];
    this.d = array[4];
    this.tx = array[2];
    this.ty = array[5];
};

/**
 * Creates an array from the current Matrix object
 *
 * @method toArray
 * @param transpose {Boolean} Whether we need to transpose the matrix or not
 * @return {Array} the newly created array which contains the matrix
 */
PIXI.Matrix.prototype.toArray = function(transpose)
{
    if(!this.array) this.array = new Float32Array(9);
    var array = this.array;

    if(transpose)
    {
        array[0] = this.a;
        array[1] = this.c;
        array[2] = 0;
        array[3] = this.b;
        array[4] = this.d;
        array[5] = 0;
        array[6] = this.tx;
        array[7] = this.ty;
        array[8] = 1;
    }
    else
    {
        array[0] = this.a;
        array[1] = this.b;
        array[2] = this.tx;
        array[3] = this.c;
        array[4] = this.d;
        array[5] = this.ty;
        array[6] = 0;
        array[7] = 0;
        array[8] = 1;
    }

    return array;
};

PIXI.identityMatrix = new PIXI.Matrix();

PIXI.determineMatrixArrayType = function() {
    return (typeof Float32Array !== 'undefined') ? Float32Array : Array;
};

/**
 * The Matrix2 class will choose the best type of array to use between
 * a regular javascript Array and a Float32Array if the latter is available
 *
 * @class Matrix2
 * @constructor
 */
PIXI.Matrix2 = PIXI.determineMatrixArrayType();

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The base class for all objects that are rendered on the screen. 
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class DisplayObject
 * @constructor
 */
PIXI.DisplayObject = function()
{
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     *
     * @property position
     * @type Point
     */
    this.position = new PIXI.Point();

    /**
     * The scale factor of the object.
     *
     * @property scale
     * @type Point
     */
    this.scale = new PIXI.Point(1,1);//{x:1, y:1};

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @property pivot
     * @type Point
     */
    this.pivot = new PIXI.Point(0,0);

    /**
     * The rotation of the object in radians.
     *
     * @property rotation
     * @type Number
     */
    this.rotation = 0;

    /**
     * The opacity of the object.
     *
     * @property alpha
     * @type Number
     */
    this.alpha = 1;

    /**
     * The visibility of the object.
     *
     * @property visible
     * @type Boolean
     */
    this.visible = true;

    /**
     * This is the defined area that will pick up mouse / touch events. It is null by default.
     * Setting it is a neat way of optimising the hitTest function that the interactionManager will use (as it will not need to hit test all the children)
     *
     * @property hitArea
     * @type Rectangle|Circle|Ellipse|Polygon
     */
    this.hitArea = null;

    /**
     * This is used to indicate if the displayObject should display a mouse hand cursor on rollover
     *
     * @property buttonMode
     * @type Boolean
     */
    this.buttonMode = false;

    /**
     * Can this object be rendered
     *
     * @property renderable
     * @type Boolean
     */
    this.renderable = false;

    /**
     * [read-only] The display object container that contains this display object.
     *
     * @property parent
     * @type DisplayObjectContainer
     * @readOnly
     */
    this.parent = null;

    /**
     * [read-only] The stage the display object is connected to, or undefined if it is not connected to the stage.
     *
     * @property stage
     * @type Stage
     * @readOnly
     */
    this.stage = null;

    /**
     * [read-only] The multiplied alpha of the displayObject
     *
     * @property worldAlpha
     * @type Number
     * @readOnly
     */
    this.worldAlpha = 1;

    /**
     * [read-only] Whether or not the object is interactive, do not toggle directly! use the `interactive` property
     *
     * @property _interactive
     * @type Boolean
     * @readOnly
     * @private
     */
    this._interactive = false;

    /**
     * This is the cursor that will be used when the mouse is over this object. To enable this the element must have interaction = true and buttonMode = true
     * 
     * @property defaultCursor
     * @type String
     *
    */
    this.defaultCursor = 'pointer';

    /**
     * [read-only] Current transform of the object based on world (parent) factors
     *
     * @property worldTransform
     * @type Mat3
     * @readOnly
     * @private
     */
    this.worldTransform = new PIXI.Matrix();

    /**
     * [NYI] Unknown
     *
     * @property color
     * @type Array<>
     * @private
     */
    this.color = [];

    /**
     * [NYI] Holds whether or not this object is dynamic, for rendering optimization
     *
     * @property dynamic
     * @type Boolean
     * @private
     */
    this.dynamic = true;

    // cached sin rotation and cos rotation
    this._sr = 0;
    this._cr = 1;

    /**
     * The area the filter is applied to like the hitArea this is used as more of an optimisation
     * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
     *
     * @property filterArea
     * @type Rectangle
     */
    this.filterArea = null;//new PIXI.Rectangle(0,0,1,1);

    /**
     * The original, cached bounds of the object
     *
     * @property _bounds
     * @type Rectangle
     * @private
     */
    this._bounds = new PIXI.Rectangle(0, 0, 1, 1);
    /**
     * The most up-to-date bounds of the object
     *
     * @property _currentBounds
     * @type Rectangle
     * @private
     */
    this._currentBounds = null;
    /**
     * The original, cached mask of the object
     *
     * @property _currentBounds
     * @type Rectangle
     * @private
     */
    this._mask = null;

    this._cacheAsBitmap = false;
    this._cacheIsDirty = false;


    /*
     * MOUSE Callbacks
     */

    /**
     * A callback that is used when the users clicks on the displayObject with their mouse
     * @method click
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the user clicks the mouse down over the sprite
     * @method mousedown
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the user releases the mouse that was over the displayObject
     * for this callback to be fired the mouse must have been pressed down over the displayObject
     * @method mouseup
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the user releases the mouse that was over the displayObject but is no longer over the displayObject
     * for this callback to be fired, The touch must have started over the displayObject
     * @method mouseupoutside
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the users mouse rolls over the displayObject
     * @method mouseover
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the users mouse leaves the displayObject
     * @method mouseout
     * @param interactionData {InteractionData}
     */


    /*
     * TOUCH Callbacks
     */

    /**
     * A callback that is used when the users taps on the sprite with their finger
     * basically a touch version of click
     * @method tap
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the user touches over the displayObject
     * @method touchstart
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the user releases a touch over the displayObject
     * @method touchend
     * @param interactionData {InteractionData}
     */

    /**
     * A callback that is used when the user releases the touch that was over the displayObject
     * for this callback to be fired, The touch must have started over the sprite
     * @method touchendoutside
     * @param interactionData {InteractionData}
     */
};

// constructor
PIXI.DisplayObject.prototype.constructor = PIXI.DisplayObject;

/**
 * [Deprecated] Indicates if the sprite will have touch and mouse interactivity. It is false by default
 * Instead of using this function you can now simply set the interactive property to true or false
 *
 * @method setInteractive
 * @param interactive {Boolean}
 * @deprecated Simply set the `interactive` property directly
 */
PIXI.DisplayObject.prototype.setInteractive = function(interactive)
{
    this.interactive = interactive;
};

/**
 * Indicates if the sprite will have touch and mouse interactivity. It is false by default
 *
 * @property interactive
 * @type Boolean
 * @default false
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'interactive', {
    get: function() {
        return this._interactive;
    },
    set: function(value) {
        this._interactive = value;

        // TODO more to be done here..
        // need to sort out a re-crawl!
        if(this.stage)this.stage.dirty = true;
    }
});

/**
 * [read-only] Indicates if the sprite is globaly visible.
 *
 * @property worldVisible
 * @type Boolean
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'worldVisible', {
    get: function() {
        var item = this;

        do
        {
            if(!item.visible)return false;
            item = item.parent;
        }
        while(item);

        return true;
    }
});

/**
 * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.
 * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.
 * To remove a mask, set this property to null.
 *
 * @property mask
 * @type Graphics
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'mask', {
    get: function() {
        return this._mask;
    },
    set: function(value) {

        if(this._mask)this._mask.isMask = false;
        this._mask = value;
        if(this._mask)this._mask.isMask = true;
    }
});

/**
 * Sets the filters for the displayObject.
 * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
 * To remove filters simply set this property to 'null'
 * @property filters
 * @type Array An array of filters
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'filters', {
    get: function() {
        return this._filters;
    },
    set: function(value) {

        if(value)
        {
            // now put all the passes in one place..
            var passes = [];
            for (var i = 0; i < value.length; i++)
            {
                var filterPasses = value[i].passes;
                for (var j = 0; j < filterPasses.length; j++)
                {
                    passes.push(filterPasses[j]);
                }
            }

            // TODO change this as it is legacy
            this._filterBlock = {target:this, filterPasses:passes};
        }

        this._filters = value;
    }
});

/**
 * Set weather or not a the display objects is cached as a bitmap.
 * This basically takes a snap shot of the display object as it is at that moment. It can provide a performance benefit for complex static displayObjects
 * To remove filters simply set this property to 'null'
 * @property cacheAsBitmap
 * @type Boolean
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'cacheAsBitmap', {
    get: function() {
        return  this._cacheAsBitmap;
    },
    set: function(value) {

        if(this._cacheAsBitmap === value)return;

        if(value)
        {
            //this._cacheIsDirty = true;
            this._generateCachedSprite();
        }
        else
        {
            this._destroyCachedSprite();
        }

        this._cacheAsBitmap = value;
    }
});

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.DisplayObject.prototype.updateTransform = function()
{
    // TODO OPTIMIZE THIS!! with dirty
    if(this.rotation !== this.rotationCache)
    {

        this.rotationCache = this.rotation;
        this._sr =  Math.sin(this.rotation);
        this._cr =  Math.cos(this.rotation);
    }

   // var localTransform = this.localTransform//.toArray();
    var parentTransform = this.parent.worldTransform;//.toArray();
    var worldTransform = this.worldTransform;//.toArray();

    var px = this.pivot.x;
    var py = this.pivot.y;

    var a00 = this._cr * this.scale.x,
        a01 = -this._sr * this.scale.y,
        a10 = this._sr * this.scale.x,
        a11 = this._cr * this.scale.y,
        a02 = this.position.x - a00 * px - py * a01,
        a12 = this.position.y - a11 * py - px * a10,
        b00 = parentTransform.a, b01 = parentTransform.b,
        b10 = parentTransform.c, b11 = parentTransform.d;

    worldTransform.a = b00 * a00 + b01 * a10;
    worldTransform.b = b00 * a01 + b01 * a11;
    worldTransform.tx = b00 * a02 + b01 * a12 + parentTransform.tx;

    worldTransform.c = b10 * a00 + b11 * a10;
    worldTransform.d = b10 * a01 + b11 * a11;
    worldTransform.ty = b10 * a02 + b11 * a12 + parentTransform.ty;

    this.worldAlpha = this.alpha * this.parent.worldAlpha;
};

/**
 * Retrieves the bounds of the displayObject as a rectangle object
 *
 * @method getBounds
 * @return {Rectangle} the rectangular bounding area
 */
PIXI.DisplayObject.prototype.getBounds = function( matrix )
{
    matrix = matrix;//just to get passed js hinting (and preserve inheritance)
    return PIXI.EmptyRectangle;
};

/**
 * Retrieves the local bounds of the displayObject as a rectangle object
 *
 * @method getLocalBounds
 * @return {Rectangle} the rectangular bounding area
 */
PIXI.DisplayObject.prototype.getLocalBounds = function()
{
    return this.getBounds(PIXI.identityMatrix);///PIXI.EmptyRectangle();
};


/**
 * Sets the object's stage reference, the stage this object is connected to
 *
 * @method setStageReference
 * @param stage {Stage} the stage that the object will have as its current stage reference
 */
PIXI.DisplayObject.prototype.setStageReference = function(stage)
{
    this.stage = stage;
    if(this._interactive)this.stage.dirty = true;
};

PIXI.DisplayObject.prototype.generateTexture = function(renderer)
{
    var bounds = this.getLocalBounds();

    var renderTexture = new PIXI.RenderTexture(bounds.width | 0, bounds.height | 0, renderer);
    renderTexture.render(this, new PIXI.Point(-bounds.x, -bounds.y) );

    return renderTexture;
};

PIXI.DisplayObject.prototype.updateCache = function()
{
    this._generateCachedSprite();
};

PIXI.DisplayObject.prototype._renderCachedSprite = function(renderSession)
{
    this._cachedSprite.worldAlpha = this.worldAlpha;
   
    if(renderSession.gl)
    {
        PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, renderSession);
    }
    else
    {
        PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite, renderSession);
    }
};

PIXI.DisplayObject.prototype._generateCachedSprite = function()//renderSession)
{
    this._cacheAsBitmap = false;
    var bounds = this.getLocalBounds();
   
    if(!this._cachedSprite)
    {
        var renderTexture = new PIXI.RenderTexture(bounds.width | 0, bounds.height | 0);//, renderSession.renderer);
        
        this._cachedSprite = new PIXI.Sprite(renderTexture);
        this._cachedSprite.worldTransform = this.worldTransform;
    }
    else
    {
        this._cachedSprite.texture.resize(bounds.width | 0, bounds.height | 0);
    }

    //REMOVE filter!
    var tempFilters = this._filters;
    this._filters = null;

    this._cachedSprite.filters = tempFilters;
    this._cachedSprite.texture.render(this, new PIXI.Point(-bounds.x, -bounds.y) );

    this._cachedSprite.anchor.x = -( bounds.x / bounds.width );
    this._cachedSprite.anchor.y = -( bounds.y / bounds.height );

    this._filters = tempFilters;

    this._cacheAsBitmap = true;
};

/**
* Renders the object using the WebGL renderer
*
* @method _renderWebGL
* @param renderSession {RenderSession} 
* @private
*/
PIXI.DisplayObject.prototype._destroyCachedSprite = function()
{
    if(!this._cachedSprite)return;

    this._cachedSprite.texture.destroy(true);
  //  console.log("DESTROY")
    // let the gc collect the unused sprite
    // TODO could be object pooled!
    this._cachedSprite = null;
};


PIXI.DisplayObject.prototype._renderWebGL = function(renderSession)
{
    // OVERWRITE;
    // this line is just here to pass jshinting :)
    renderSession = renderSession;
};

/**
* Renders the object using the Canvas renderer
*
* @method _renderCanvas
* @param renderSession {RenderSession} 
* @private
*/
PIXI.DisplayObject.prototype._renderCanvas = function(renderSession)
{
    // OVERWRITE;
    // this line is just here to pass jshinting :)
    renderSession = renderSession;
};

/**
 * The position of the displayObject on the x axis relative to the local coordinates of the parent.
 *
 * @property x
 * @type Number
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'x', {
    get: function() {
        return  this.position.x;
    },
    set: function(value) {
        this.position.x = value;
    }
});

/**
 * The position of the displayObject on the y axis relative to the local coordinates of the parent.
 *
 * @property y
 * @type Number
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'y', {
    get: function() {
        return  this.position.y;
    },
    set: function(value) {
        this.position.y = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */


/**
 * A DisplayObjectContainer represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 * @class DisplayObjectContainer
 * @extends DisplayObject
 * @constructor
 */
PIXI.DisplayObjectContainer = function()
{
    PIXI.DisplayObject.call( this );

    /**
     * [read-only] The array of children of this container.
     *
     * @property children
     * @type Array<DisplayObject>
     * @readOnly
     */
    this.children = [];
};

// constructor
PIXI.DisplayObjectContainer.prototype = Object.create( PIXI.DisplayObject.prototype );
PIXI.DisplayObjectContainer.prototype.constructor = PIXI.DisplayObjectContainer;

/**
 * The width of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
 *
 * @property width
 * @type Number
 */

 
Object.defineProperty(PIXI.DisplayObjectContainer.prototype, 'width', {
    get: function() {
        return this.scale.x * this.getLocalBounds().width;
    },
    set: function(value) {
        
        var width = this.getLocalBounds().width;

        if(width !== 0)
        {
            this.scale.x = value / ( width/this.scale.x );
        }
        else
        {
            this.scale.x = 1;
        }

        
        this._width = value;
    }
});


/**
 * The height of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
 *
 * @property height
 * @type Number
 */

Object.defineProperty(PIXI.DisplayObjectContainer.prototype, 'height', {
    get: function() {
        return  this.scale.y * this.getLocalBounds().height;
    },
    set: function(value) {

        var height = this.getLocalBounds().height;

        if(height !== 0)
        {
            this.scale.y = value / ( height/this.scale.y );
        }
        else
        {
            this.scale.y = 1;
        }

        this._height = value;
    }
});


/**
 * Adds a child to the container.
 *
 * @method addChild
 * @param child {DisplayObject} The DisplayObject to add to the container
 */
PIXI.DisplayObjectContainer.prototype.addChild = function(child)
{
    return this.addChildAt(child, this.children.length);
};

/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 *
 * @method addChildAt
 * @param child {DisplayObject} The child to add
 * @param index {Number} The index to place the child in
 */
PIXI.DisplayObjectContainer.prototype.addChildAt = function(child, index)
{
    if(index >= 0 && index <= this.children.length)
    {
        if(child.parent)
        {
            child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);

        if(this.stage)child.setStageReference(this.stage);

        return child;
    }
    else
    {
        throw new Error(child + ' The index '+ index +' supplied is out of bounds ' + this.children.length);
    }
};

/**
 * [NYI] Swaps the depth of 2 displayObjects
 *
 * @method swapChildren
 * @param child {DisplayObject}
 * @param child2 {DisplayObject}
 * @private
 */
PIXI.DisplayObjectContainer.prototype.swapChildren = function(child, child2)
{
    if(child === child2) {
        return;
    }

    var index1 = this.children.indexOf(child);
    var index2 = this.children.indexOf(child2);

    if(index1 < 0 || index2 < 0) {
        throw new Error('swapChildren: Both the supplied DisplayObjects must be a child of the caller.');
    }

    this.children[index1] = child2;
    this.children[index2] = child;
    
};

/**
 * Returns the child at the specified index
 *
 * @method getChildAt
 * @param index {Number} The index to get the child from
 */
PIXI.DisplayObjectContainer.prototype.getChildAt = function(index)
{
    if(index >= 0 && index < this.children.length)
    {
        return this.children[index];
    }
    else
    {
        throw new Error('Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller');
    }
};

/**
 * Removes a child from the container.
 *
 * @method removeChild
 * @param child {DisplayObject} The DisplayObject to remove
 */
PIXI.DisplayObjectContainer.prototype.removeChild = function(child)
{
    return this.removeChildAt( this.children.indexOf( child ) );
};

/**
 * Removes a child from the specified index position in the child list of the container.
 *
 * @method removeChildAt
 * @param index {Number} The index to get the child from
 */
PIXI.DisplayObjectContainer.prototype.removeChildAt = function(index)
{
    var child = this.getChildAt( index );
    if(this.stage)
        child.removeStageReference();

    child.parent = undefined;
    this.children.splice( index, 1 );
    return child;
};

/**
* Removes all child instances from the child list of the container.
*
* @method removeChildren
* @param beginIndex {Number} The beginning position. Predefined value is 0.
* @param endIndex {Number} The ending position. Predefined value is children's array length.
*/
PIXI.DisplayObjectContainer.prototype.removeChildren = function(beginIndex, endIndex)
{
    var begin = beginIndex || 0;
    var end = typeof endIndex === 'number' ? endIndex : this.children.length;
    var range = end - begin;

    if (range > 0 && range <= end)
    {
        var removed = this.children.splice(begin, range);
        for (var i = 0; i < removed.length; i++) {
            var child = removed[i];
            if(this.stage)
                child.removeStageReference();
            child.parent = undefined;
        }
        return removed;
    }
    else
    {
        throw new Error( 'Range Error, numeric values are outside the acceptable range' );
    }
};

/*
 * Updates the container's childrens transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.DisplayObjectContainer.prototype.updateTransform = function()
{
    //this._currentBounds = null;

    if(!this.visible)return;

    PIXI.DisplayObject.prototype.updateTransform.call( this );

    if(this._cacheAsBitmap)return;

    for(var i=0,j=this.children.length; i<j; i++)
    {
        this.children[i].updateTransform();
    }
};

/**
 * Retrieves the bounds of the displayObjectContainer as a rectangle object
 *
 * @method getBounds
 * @return {Rectangle} the rectangular bounding area
 */
PIXI.DisplayObjectContainer.prototype.getBounds = function(matrix)
{
    if(this.children.length === 0)return PIXI.EmptyRectangle;

    // TODO the bounds have already been calculated this render session so return what we have
    if(matrix)
    {
        var matrixCache = this.worldTransform;
        this.worldTransform = matrix;
        this.updateTransform();
        this.worldTransform = matrixCache;
    }

    var minX = Infinity;
    var minY = Infinity;

    var maxX = -Infinity;
    var maxY = -Infinity;

    var childBounds;
    var childMaxX;
    var childMaxY;

    var childVisible = false;

    for(var i=0,j=this.children.length; i<j; i++)
    {
        var child = this.children[i];
        
        if(!child.visible)continue;

        childVisible = true;

        childBounds = this.children[i].getBounds( matrix );
     
        minX = minX < childBounds.x ? minX : childBounds.x;
        minY = minY < childBounds.y ? minY : childBounds.y;

        childMaxX = childBounds.width + childBounds.x;
        childMaxY = childBounds.height + childBounds.y;

        maxX = maxX > childMaxX ? maxX : childMaxX;
        maxY = maxY > childMaxY ? maxY : childMaxY;
    }

    if(!childVisible)
        return PIXI.EmptyRectangle;

    var bounds = this._bounds;

    bounds.x = minX;
    bounds.y = minY;
    bounds.width = maxX - minX;
    bounds.height = maxY - minY;

    // TODO: store a reference so that if this function gets called again in the render cycle we do not have to recalculate
    //this._currentBounds = bounds;
   
    return bounds;
};

PIXI.DisplayObjectContainer.prototype.getLocalBounds = function()
{
    var matrixCache = this.worldTransform;

    this.worldTransform = PIXI.identityMatrix;

    for(var i=0,j=this.children.length; i<j; i++)
    {
        this.children[i].updateTransform();
    }

    var bounds = this.getBounds();

    this.worldTransform = matrixCache;

    return bounds;
};

/**
 * Sets the container's stage reference, the stage this object is connected to
 *
 * @method setStageReference
 * @param stage {Stage} the stage that the container will have as its current stage reference
 */
PIXI.DisplayObjectContainer.prototype.setStageReference = function(stage)
{
    this.stage = stage;
    if(this._interactive)this.stage.dirty = true;

    for(var i=0,j=this.children.length; i<j; i++)
    {
        var child = this.children[i];
        child.setStageReference(stage);
    }
};

/**
 * removes the current stage reference of the container
 *
 * @method removeStageReference
 */
PIXI.DisplayObjectContainer.prototype.removeStageReference = function()
{

    for(var i=0,j=this.children.length; i<j; i++)
    {
        var child = this.children[i];
        child.removeStageReference();
    }

    if(this._interactive)this.stage.dirty = true;
    
    this.stage = null;
};

/**
* Renders the object using the WebGL renderer
*
* @method _renderWebGL
* @param renderSession {RenderSession} 
* @private
*/
PIXI.DisplayObjectContainer.prototype._renderWebGL = function(renderSession)
{
    if(!this.visible || this.alpha <= 0)return;
    
    if(this._cacheAsBitmap)
    {
        this._renderCachedSprite(renderSession);
        return;
    }
    
    var i,j;

    if(this._mask || this._filters)
    {
        
        // push filter first as we need to ensure the stencil buffer is correct for any masking
        if(this._filters)
        {
            renderSession.spriteBatch.flush();
            renderSession.filterManager.pushFilter(this._filterBlock);
        }

        if(this._mask)
        {
            renderSession.spriteBatch.stop();
            renderSession.maskManager.pushMask(this.mask, renderSession);
            renderSession.spriteBatch.start();
        }

        // simple render children!
        for(i=0,j=this.children.length; i<j; i++)
        {
            this.children[i]._renderWebGL(renderSession);
        }

        renderSession.spriteBatch.stop();

        if(this._mask)renderSession.maskManager.popMask(this._mask, renderSession);
        if(this._filters)renderSession.filterManager.popFilter();
        
        renderSession.spriteBatch.start();
    }
    else
    {
        // simple render children!
        for(i=0,j=this.children.length; i<j; i++)
        {
            this.children[i]._renderWebGL(renderSession);
        }
    }
};

/**
* Renders the object using the Canvas renderer
*
* @method _renderCanvas
* @param renderSession {RenderSession} 
* @private
*/
PIXI.DisplayObjectContainer.prototype._renderCanvas = function(renderSession)
{
    if(this.visible === false || this.alpha === 0)return;

    if(this._cacheAsBitmap)
    {

        this._renderCachedSprite(renderSession);
        return;
    }

    if(this._mask)
    {
        renderSession.maskManager.pushMask(this._mask, renderSession.context);
    }

    for(var i=0,j=this.children.length; i<j; i++)
    {
        var child = this.children[i];
        child._renderCanvas(renderSession);
    }

    if(this._mask)
    {
        renderSession.maskManager.popMask(renderSession.context);
    }
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * @class Sprite
 * @extends DisplayObjectContainer
 * @constructor
 * @param texture {Texture} The texture for this sprite
 * 
 * A sprite can be created directly from an image like this : 
 * var sprite = new PIXI.Sprite.fromImage('assets/image.png');
 * yourStage.addChild(sprite);
 * then obviously don't forget to add it to the stage you have already created
 */
PIXI.Sprite = function(texture)
{
    PIXI.DisplayObjectContainer.call( this );

    /**
     * The anchor sets the origin point of the texture.
     * The default is 0,0 this means the texture's origin is the top left
     * Setting than anchor to 0.5,0.5 means the textures origin is centred
     * Setting the anchor to 1,1 would mean the textures origin points will be the bottom right corner
     *
     * @property anchor
     * @type Point
     */
    this.anchor = new PIXI.Point();

    /**
     * The texture that the sprite is using
     *
     * @property texture
     * @type Texture
     */
    this.texture = texture;

    /**
     * The width of the sprite (this is initially set by the texture)
     *
     * @property _width
     * @type Number
     * @private
     */
    this._width = 0;

    /**
     * The height of the sprite (this is initially set by the texture)
     *
     * @property _height
     * @type Number
     * @private
     */
    this._height = 0;


    /**
     * The tint applied to the sprite. This is a hex value
     *
     * @property tint
     * @type Number
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;// * Math.random();
    
    /**
     * The blend mode to be applied to the sprite
     *
     * @property blendMode
     * @type Number
     * @default PIXI.blendModes.NORMAL;
     */
    this.blendMode = PIXI.blendModes.NORMAL;

    if(texture.baseTexture.hasLoaded)
    {
        this.onTextureUpdate();
    }
    else
    {
        this.onTextureUpdateBind = this.onTextureUpdate.bind(this);
        this.texture.addEventListener( 'update', this.onTextureUpdateBind );
    }

    this.renderable = true;
};

// constructor
PIXI.Sprite.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
PIXI.Sprite.prototype.constructor = PIXI.Sprite;

/**
 * The width of the sprite, setting this will actually modify the scale to achieve the value set
 *
 * @property width
 * @type Number
 */
Object.defineProperty(PIXI.Sprite.prototype, 'width', {
    get: function() {
        return this.scale.x * this.texture.frame.width;
    },
    set: function(value) {
        this.scale.x = value / this.texture.frame.width;
        this._width = value;
    }
});

/**
 * The height of the sprite, setting this will actually modify the scale to achieve the value set
 *
 * @property height
 * @type Number
 */
Object.defineProperty(PIXI.Sprite.prototype, 'height', {
    get: function() {
        return  this.scale.y * this.texture.frame.height;
    },
    set: function(value) {
        this.scale.y = value / this.texture.frame.height;
        this._height = value;
    }
});

/**
 * Sets the texture of the sprite
 *
 * @method setTexture
 * @param texture {Texture} The PIXI texture that is displayed by the sprite
 */
PIXI.Sprite.prototype.setTexture = function(texture)
{
    this.texture = texture;
    this.cachedTint = 0xFFFFFF;
};

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @method onTextureUpdate
 * @param event
 * @private
 */
PIXI.Sprite.prototype.onTextureUpdate = function()
{
    // so if _width is 0 then width was not set..
    if(this._width)this.scale.x = this._width / this.texture.frame.width;
    if(this._height)this.scale.y = this._height / this.texture.frame.height;


    //this.updateFrame = true;
};

/**
* Returns the framing rectangle of the sprite as a PIXI.Rectangle object
*
* @method getBounds
* @param matrix {Matrix} the transformation matrix of the sprite
* @return {Rectangle} the framing rectangle
*/
PIXI.Sprite.prototype.getBounds = function(matrix)
{

    var width = this.texture.frame.width;
    var height = this.texture.frame.height;

    var w0 = width * (1-this.anchor.x);
    var w1 = width * -this.anchor.x;

    var h0 = height * (1-this.anchor.y);
    var h1 = height * -this.anchor.y;

    var worldTransform = matrix || this.worldTransform ;

    var a = worldTransform.a;
    var b = worldTransform.c;
    var c = worldTransform.b;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var x1 = a * w1 + c * h1 + tx;
    var y1 = d * h1 + b * w1 + ty;

    var x2 = a * w0 + c * h1 + tx;
    var y2 = d * h1 + b * w0 + ty;

    var x3 = a * w0 + c * h0 + tx;
    var y3 = d * h0 + b * w0 + ty;

    var x4 =  a * w1 + c * h0 + tx;
    var y4 =  d * h0 + b * w1 + ty;

    var maxX = -Infinity;
    var maxY = -Infinity;

    var minX = Infinity;
    var minY = Infinity;

    minX = x1 < minX ? x1 : minX;
    minX = x2 < minX ? x2 : minX;
    minX = x3 < minX ? x3 : minX;
    minX = x4 < minX ? x4 : minX;

    minY = y1 < minY ? y1 : minY;
    minY = y2 < minY ? y2 : minY;
    minY = y3 < minY ? y3 : minY;
    minY = y4 < minY ? y4 : minY;

    maxX = x1 > maxX ? x1 : maxX;
    maxX = x2 > maxX ? x2 : maxX;
    maxX = x3 > maxX ? x3 : maxX;
    maxX = x4 > maxX ? x4 : maxX;

    maxY = y1 > maxY ? y1 : maxY;
    maxY = y2 > maxY ? y2 : maxY;
    maxY = y3 > maxY ? y3 : maxY;
    maxY = y4 > maxY ? y4 : maxY;

    var bounds = this._bounds;

    bounds.x = minX;
    bounds.width = maxX - minX;

    bounds.y = minY;
    bounds.height = maxY - minY;

    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
    this._currentBounds = bounds;

    return bounds;
};

/**
* Renders the object using the WebGL renderer
*
* @method _renderWebGL
* @param renderSession {RenderSession} 
* @private
*/
PIXI.Sprite.prototype._renderWebGL = function(renderSession)
{
    // if the sprite is not visible or the alpha is 0 then no need to render this element
    if(!this.visible || this.alpha <= 0)return;
    
    var i,j;

    // do a quick check to see if this element has a mask or a filter.
    if(this._mask || this._filters)
    {
        var spriteBatch =  renderSession.spriteBatch;

        // push filter first as we need to ensure the stencil buffer is correct for any masking
        if(this._filters)
        {
            spriteBatch.flush();
            renderSession.filterManager.pushFilter(this._filterBlock);
        }

        if(this._mask)
        {
            spriteBatch.stop();
            renderSession.maskManager.pushMask(this.mask, renderSession);
            spriteBatch.start();
        }

        // add this sprite to the batch
        spriteBatch.render(this);

        // now loop through the children and make sure they get rendered
        for(i=0,j=this.children.length; i<j; i++)
        {
            this.children[i]._renderWebGL(renderSession);
        }

        // time to stop the sprite batch as either a mask element or a filter draw will happen next
        spriteBatch.stop();

        if(this._mask)renderSession.maskManager.popMask(this._mask, renderSession);
        if(this._filters)renderSession.filterManager.popFilter();
        
        spriteBatch.start();
    }
    else
    {
        renderSession.spriteBatch.render(this);

        // simple render children!
        for(i=0,j=this.children.length; i<j; i++)
        {
            this.children[i]._renderWebGL(renderSession);
        }
    }

   
    //TODO check culling  
};

/**
* Renders the object using the Canvas renderer
*
* @method _renderCanvas
* @param renderSession {RenderSession} 
* @private
*/
PIXI.Sprite.prototype._renderCanvas = function(renderSession)
{
    // If the sprite is not visible or the alpha is 0 then no need to render this element
    if (this.visible === false || this.alpha === 0) return;
    
    if (this.blendMode !== renderSession.currentBlendMode)
    {
        renderSession.currentBlendMode = this.blendMode;
        renderSession.context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
    }

    if (this._mask)
    {
        renderSession.maskManager.pushMask(this._mask, renderSession.context);
    }

    //  Ignore null sources
    if (this.texture.valid)
    {
        renderSession.context.globalAlpha = this.worldAlpha;

        //  Allow for pixel rounding
        if (renderSession.roundPixels)
        {
            renderSession.context.setTransform(
                this.worldTransform.a,
                this.worldTransform.c,
                this.worldTransform.b,
                this.worldTransform.d,
                this.worldTransform.tx | 0,
                this.worldTransform.ty | 0);
        }
        else
        {
            renderSession.context.setTransform(
                this.worldTransform.a,
                this.worldTransform.c,
                this.worldTransform.b,
                this.worldTransform.d,
                this.worldTransform.tx,
                this.worldTransform.ty);
        }

        //  If smoothingEnabled is supported and we need to change the smoothing property for this texture
        if (renderSession.smoothProperty && renderSession.scaleMode !== this.texture.baseTexture.scaleMode)
        {
            renderSession.scaleMode = this.texture.baseTexture.scaleMode;
            renderSession.context[renderSession.smoothProperty] = (renderSession.scaleMode === PIXI.scaleModes.LINEAR);
        }

        //  If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions
        var dx = (this.texture.trim) ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width;
        var dy = (this.texture.trim) ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;

        if (this.tint !== 0xFFFFFF)
        {
            if (this.cachedTint !== this.tint)
            {
                this.cachedTint = this.tint;
                
                //  TODO clean up caching - how to clean up the caches?
                this.tintedTexture = PIXI.CanvasTinter.getTintedTexture(this, this.tint);
            }

            renderSession.context.drawImage(
                                this.tintedTexture,
                                0,
                                0,
                                this.texture.crop.width,
                                this.texture.crop.height,
                                dx,
                                dy,
                                this.texture.crop.width,
                                this.texture.crop.height);
        }
        else
        {
            renderSession.context.drawImage(
                                this.texture.baseTexture.source,
                                this.texture.crop.x,
                                this.texture.crop.y,
                                this.texture.crop.width,
                                this.texture.crop.height,
                                dx,
                                dy,
                                this.texture.crop.width,
                                this.texture.crop.height);
        }
    }

    // OVERWRITE
    for (var i = 0, j = this.children.length; i < j; i++)
    {
        this.children[i]._renderCanvas(renderSession);
    }

    if (this._mask)
    {
        renderSession.maskManager.popMask(renderSession.context);
    }
};

// some helper functions..

/**
 *
 * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @method fromFrame
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the frameId
 */
PIXI.Sprite.fromFrame = function(frameId)
{
    var texture = PIXI.TextureCache[frameId];
    if(!texture) throw new Error('The frameId "' + frameId + '" does not exist in the texture cache' + this);
    return new PIXI.Sprite(texture);
};

/**
 *
 * Helper function that creates a sprite that will contain a texture based on an image url
 * If the image is not in the texture cache it will be loaded
 *
 * @method fromImage
 * @static
 * @param imageId {String} The image url of the texture
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the image id
 */
PIXI.Sprite.fromImage = function(imageId, crossorigin, scaleMode)
{
    var texture = PIXI.Texture.fromImage(imageId, crossorigin, scaleMode);
    return new PIXI.Sprite(texture);
};

/**
 * @author Mat Groves http://matgroves.com/
 */

/**
 * The SpriteBatch class is a really fast version of the DisplayObjectContainer 
 * built solely for speed, so use when you need a lot of sprites or particles.
 * And it's extremely easy to use : 

    var container = new PIXI.SpriteBatch();
 
    stage.addChild(container);
 
    for(var i  = 0; i < 100; i++)
    {
        var sprite = new PIXI.Sprite.fromImage("myImage.png");
        container.addChild(sprite);
    }
 * And here you have a hundred sprites that will be renderer at the speed of light
 *
 * @class SpriteBatch
 * @constructor
 * @param texture {Texture}
 */
PIXI.SpriteBatch = function(texture)
{
    PIXI.DisplayObjectContainer.call( this);

    this.textureThing = texture;

    this.ready = false;
};

PIXI.SpriteBatch.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.SpriteBatch.constructor = PIXI.SpriteBatch;

/*
 * Initialises the spriteBatch
 *
 * @method initWebGL
 * @param gl {WebGLContext} the current WebGL drawing context
 */
PIXI.SpriteBatch.prototype.initWebGL = function(gl)
{
    // TODO only one needed for the whole engine really?
    this.fastSpriteBatch = new PIXI.WebGLFastSpriteBatch(gl);

    this.ready = true;
};

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.SpriteBatch.prototype.updateTransform = function()
{
   // TODO dont need to!
    PIXI.DisplayObject.prototype.updateTransform.call( this );
  //  PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
};

/**
* Renders the object using the WebGL renderer
*
* @method _renderWebGL
* @param renderSession {RenderSession} 
* @private
*/
PIXI.SpriteBatch.prototype._renderWebGL = function(renderSession)
{
    if(!this.visible || this.alpha <= 0 || !this.children.length)return;

    if(!this.ready)this.initWebGL( renderSession.gl );
    
    renderSession.spriteBatch.stop();
    
    renderSession.shaderManager.setShader(renderSession.shaderManager.fastShader);
    
    this.fastSpriteBatch.begin(this, renderSession);
    this.fastSpriteBatch.render(this);

    renderSession.spriteBatch.start();
 
};

/**
* Renders the object using the Canvas renderer
*
* @method _renderCanvas
* @param renderSession {RenderSession} 
* @private
*/
PIXI.SpriteBatch.prototype._renderCanvas = function(renderSession)
{
    var context = renderSession.context;
    context.globalAlpha = this.worldAlpha;

    PIXI.DisplayObject.prototype.updateTransform.call(this);

    var transform = this.worldTransform;
    // alow for trimming
       
    var isRotated = true;

    for (var i = 0; i < this.children.length; i++) {
       
        var child = this.children[i];

        if(!child.visible)continue;

        var texture = child.texture;
        var frame = texture.frame;

        context.globalAlpha = this.worldAlpha * child.alpha;

        if(child.rotation % (Math.PI * 2) === 0)
        {
            if(isRotated)
            {
                context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx, transform.ty);
                isRotated = false;
            }

            // this is the fastest  way to optimise! - if rotation is 0 then we can avoid any kind of setTransform call
            context.drawImage(texture.baseTexture.source,
                                 frame.x,
                                 frame.y,
                                 frame.width,
                                 frame.height,
                                 ((child.anchor.x) * (-frame.width * child.scale.x) + child.position.x  + 0.5) | 0,
                                 ((child.anchor.y) * (-frame.height * child.scale.y) + child.position.y  + 0.5) | 0,
                                 frame.width * child.scale.x,
                                 frame.height * child.scale.y);
        }
        else
        {
            if(!isRotated)isRotated = true;
    
            PIXI.DisplayObject.prototype.updateTransform.call(child);
           
            var childTransform = child.worldTransform;

            // allow for trimming
           
            if (renderSession.roundPixels)
            {
                context.setTransform(childTransform.a, childTransform.c, childTransform.b, childTransform.d, childTransform.tx | 0, childTransform.ty | 0);
            }
            else
            {
                context.setTransform(childTransform.a, childTransform.c, childTransform.b, childTransform.d, childTransform.tx, childTransform.ty);
            }

            context.drawImage(texture.baseTexture.source,
                                 frame.x,
                                 frame.y,
                                 frame.width,
                                 frame.height,
                                 ((child.anchor.x) * (-frame.width) + 0.5) | 0,
                                 ((child.anchor.y) * (-frame.height) + 0.5) | 0,
                                 frame.width,
                                 frame.height);
           

        }

       // context.restore();
    }

//    context.restore();
};


/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A MovieClip is a simple way to display an animation depicted by a list of textures.
 *
 * @class MovieClip
 * @extends Sprite
 * @constructor
 * @param textures {Array<Texture>} an array of {Texture} objects that make up the animation
 */
PIXI.MovieClip = function(textures)
{
    PIXI.Sprite.call(this, textures[0]);

    /**
     * The array of textures that make up the animation
     *
     * @property textures
     * @type Array
     */
    this.textures = textures;

    /**
     * The speed that the MovieClip will play at. Higher is faster, lower is slower
     *
     * @property animationSpeed
     * @type Number
     * @default 1
     */
    this.animationSpeed = 1;

    /**
     * Whether or not the movie clip repeats after playing.
     *
     * @property loop
     * @type Boolean
     * @default true
     */
    this.loop = true;

    /**
     * Function to call when a MovieClip finishes playing
     *
     * @property onComplete
     * @type Function
     */
    this.onComplete = null;

    /**
     * [read-only] The MovieClips current frame index (this may not have to be a whole number)
     *
     * @property currentFrame
     * @type Number
     * @default 0
     * @readOnly
     */
    this.currentFrame = 0;

    /**
     * [read-only] Indicates if the MovieClip is currently playing
     *
     * @property playing
     * @type Boolean
     * @readOnly
     */
    this.playing = false;
};

// constructor
PIXI.MovieClip.prototype = Object.create( PIXI.Sprite.prototype );
PIXI.MovieClip.prototype.constructor = PIXI.MovieClip;

/**
* [read-only] totalFrames is the total number of frames in the MovieClip. This is the same as number of textures
* assigned to the MovieClip.
*
* @property totalFrames
* @type Number
* @default 0
* @readOnly
*/
Object.defineProperty( PIXI.MovieClip.prototype, 'totalFrames', {
    get: function() {

        return this.textures.length;
    }
});


/**
 * Stops the MovieClip
 *
 * @method stop
 */
PIXI.MovieClip.prototype.stop = function()
{
    this.playing = false;
};

/**
 * Plays the MovieClip
 *
 * @method play
 */
PIXI.MovieClip.prototype.play = function()
{
    this.playing = true;
};

/**
 * Stops the MovieClip and goes to a specific frame
 *
 * @method gotoAndStop
 * @param frameNumber {Number} frame index to stop at
 */
PIXI.MovieClip.prototype.gotoAndStop = function(frameNumber)
{
    this.playing = false;
    this.currentFrame = frameNumber;
    var round = (this.currentFrame + 0.5) | 0;
    this.setTexture(this.textures[round % this.textures.length]);
};

/**
 * Goes to a specific frame and begins playing the MovieClip
 *
 * @method gotoAndPlay
 * @param frameNumber {Number} frame index to start at
 */
PIXI.MovieClip.prototype.gotoAndPlay = function(frameNumber)
{
    this.currentFrame = frameNumber;
    this.playing = true;
};

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.MovieClip.prototype.updateTransform = function()
{
    PIXI.Sprite.prototype.updateTransform.call(this);

    if(!this.playing)return;

    this.currentFrame += this.animationSpeed;

    var round = (this.currentFrame + 0.5) | 0;

    this.currentFrame = this.currentFrame % this.textures.length;

    if(this.loop || round < this.textures.length)
    {
        this.setTexture(this.textures[round % this.textures.length]);
    }
    else if(round >= this.textures.length)
    {
        this.gotoAndStop(this.textures.length - 1);
        if(this.onComplete)
        {
            this.onComplete();
        }
    }
};

/**
 * A short hand way of creating a movieclip from an array of frame ids
 *
 * @static
 * @method fromFrames
 * @param frames {Array} the array of frames ids the movieclip will use as its texture frames
 */
PIXI.MovieClip.fromFrames = function(frames)
{
    var textures = [];

    for (var i = 0; i < frames.length; i++)
    {
        textures.push(new PIXI.Texture.fromFrame(frames[i]));
    }

    return new PIXI.MovieClip(textures);
};

/**
 * A short hand way of creating a movieclip from an array of image ids
 *
 * @static
 * @method fromFrames
 * @param frames {Array} the array of image ids the movieclip will use as its texture frames
 */
PIXI.MovieClip.fromImages = function(images)
{
    var textures = [];

    for (var i = 0; i < images.length; i++)
    {
        textures.push(new PIXI.Texture.fromImage(images[i]));
    }

    return new PIXI.MovieClip(textures);
};
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */


PIXI.FilterBlock = function()
{
    this.visible = true;
    this.renderable = true;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * - Modified by Tom Slezakowski http://www.tomslezakowski.com @TomSlezakowski (24/03/2014) - Added dropShadowColor.
 */

/**
 * A Text Object will create a line(s) of text. To split a line you can use '\n' 
 * or add a wordWrap property set to true and and wordWrapWidth property with a value
 * in the style object
 *
 * @class Text
 * @extends Sprite
 * @constructor
 * @param text {String} The copy that you would like the text to display
 * @param [style] {Object} The style parameters
 * @param [style.font] {String} default 'bold 20px Arial' The style and size of the font
 * @param [style.fill='black'] {String|Number} A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'
 * @param [style.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.stroke] {String|Number} A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {Number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.wordWrap=false] {Boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {Number} The width at which text will wrap, it needs wordWrap to be set to true
 * @param [style.dropShadow=false] {Boolean} Set a drop shadow for the text
 * @param [style.dropShadowColor='#000000'] {String} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowAngle=Math.PI/4] {Number} Set a angle of the drop shadow
 * @param [style.dropShadowDistance=5] {Number} Set a distance of the drop shadow
 */
PIXI.Text = function(text, style)
{
    /**
     * The canvas element that everything is drawn to
     *
     * @property canvas
     * @type HTMLCanvasElement
     */
    this.canvas = document.createElement('canvas');

    /**
     * The canvas 2d context that everything is drawn with
     * @property context
     * @type HTMLCanvasElement 2d Context
     */
    this.context = this.canvas.getContext('2d');

    PIXI.Sprite.call(this, PIXI.Texture.fromCanvas(this.canvas));

    this.setText(text);
    this.setStyle(style);
};

// constructor
PIXI.Text.prototype = Object.create(PIXI.Sprite.prototype);
PIXI.Text.prototype.constructor = PIXI.Text;


/**
 * The width of the sprite, setting this will actually modify the scale to achieve the value set
 *
 * @property width
 * @type Number
 */
Object.defineProperty(PIXI.Text.prototype, 'width', {
    get: function() {

        if(this.dirty)
        {
            this.updateText();
            this.dirty = false;
        }


        return this.scale.x * this.texture.frame.width;
    },
    set: function(value) {
        this.scale.x = value / this.texture.frame.width;
        this._width = value;
    }
});

/**
 * The height of the Text, setting this will actually modify the scale to achieve the value set
 *
 * @property height
 * @type Number
 */
Object.defineProperty(PIXI.Text.prototype, 'height', {
    get: function() {

        if(this.dirty)
        {
            this.updateText();
            this.dirty = false;
        }


        return  this.scale.y * this.texture.frame.height;
    },
    set: function(value) {
        this.scale.y = value / this.texture.frame.height;
        this._height = value;
    }
});


/**
 * Set the style of the text
 *
 * @method setStyle
 * @param [style] {Object} The style parameters
 * @param [style.font='bold 20pt Arial'] {String} The style and size of the font
 * @param [style.fill='black'] {Object} A canvas fillstyle that will be used on the text eg 'red', '#00FF00'
 * @param [style.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.stroke='black'] {String} A canvas fillstyle that will be used on the text stroke eg 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {Number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.wordWrap=false] {Boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {Number} The width at which text will wrap
 * @param [style.dropShadow=false] {Boolean} Set a drop shadow for the text
 * @param [style.dropShadowColor='#000000'] {String} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowAngle=Math.PI/4] {Number} Set a angle of the drop shadow
 * @param [style.dropShadowDistance=5] {Number} Set a distance of the drop shadow
 */
PIXI.Text.prototype.setStyle = function(style)
{
    style = style || {};
    style.font = style.font || 'bold 20pt Arial';
    style.fill = style.fill || 'black';
    style.align = style.align || 'left';
    style.stroke = style.stroke || 'black'; //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
    style.strokeThickness = style.strokeThickness || 0;
    style.wordWrap = style.wordWrap || false;
    style.wordWrapWidth = style.wordWrapWidth || 100;
    style.wordWrapWidth = style.wordWrapWidth || 100;
    
    style.dropShadow = style.dropShadow || false;
    style.dropShadowAngle = style.dropShadowAngle || Math.PI / 6;
    style.dropShadowDistance = style.dropShadowDistance || 4;
    style.dropShadowColor = style.dropShadowColor || 'black';

    this.style = style;
    this.dirty = true;
};

/**
 * Set the copy for the text object. To split a line you can use '\n'
 *
 * @method setText
 * @param {String} text The copy that you would like the text to display
 */
PIXI.Text.prototype.setText = function(text)
{
    this.text = text.toString() || ' ';
    this.dirty = true;

};

/**
 * Renders text and updates it when needed
 *
 * @method updateText
 * @private
 */
PIXI.Text.prototype.updateText = function()
{
    this.context.font = this.style.font;

    var outputText = this.text;

    // word wrap
    // preserve original text
    if(this.style.wordWrap)outputText = this.wordWrap(this.text);

    //split text into lines
    var lines = outputText.split(/(?:\r\n|\r|\n)/);

    //calculate text width
    var lineWidths = [];
    var maxLineWidth = 0;
    for (var i = 0; i < lines.length; i++)
    {
        var lineWidth = this.context.measureText(lines[i]).width;
        lineWidths[i] = lineWidth;
        maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }

    var width = maxLineWidth + this.style.strokeThickness;
    if(this.style.dropShadow)width += this.style.dropShadowDistance;

    this.canvas.width = width + this.context.lineWidth;
    //calculate text height
    var lineHeight = this.determineFontHeight('font: ' + this.style.font  + ';') + this.style.strokeThickness;
    
    var height = lineHeight * lines.length;
    if(this.style.dropShadow)height += this.style.dropShadowDistance;

    this.canvas.height = height;

    if(navigator.isCocoonJS) this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    
    this.context.font = this.style.font;
    this.context.strokeStyle = this.style.stroke;
    this.context.lineWidth = this.style.strokeThickness;
    this.context.textBaseline = 'top';

    var linePositionX;
    var linePositionY;

    if(this.style.dropShadow)
    {
        this.context.fillStyle = this.style.dropShadowColor;

        var xShadowOffset = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance;
        var yShadowOffset = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;

        for (i = 0; i < lines.length; i++)
        {
            linePositionX = this.style.strokeThickness / 2;
            linePositionY = this.style.strokeThickness / 2 + i * lineHeight;

            if(this.style.align === 'right')
            {
                linePositionX += maxLineWidth - lineWidths[i];
            }
            else if(this.style.align === 'center')
            {
                linePositionX += (maxLineWidth - lineWidths[i]) / 2;
            }

            if(this.style.fill)
            {
                this.context.fillText(lines[i], linePositionX + xShadowOffset, linePositionY + yShadowOffset);
            }

          //  if(dropShadow)
        }
    }

    //set canvas text styles
    this.context.fillStyle = this.style.fill;
    
    //draw lines line by line
    for (i = 0; i < lines.length; i++)
    {
        linePositionX = this.style.strokeThickness / 2;
        linePositionY = this.style.strokeThickness / 2 + i * lineHeight;

        if(this.style.align === 'right')
        {
            linePositionX += maxLineWidth - lineWidths[i];
        }
        else if(this.style.align === 'center')
        {
            linePositionX += (maxLineWidth - lineWidths[i]) / 2;
        }

        if(this.style.stroke && this.style.strokeThickness)
        {
            this.context.strokeText(lines[i], linePositionX, linePositionY);
        }

        if(this.style.fill)
        {
            this.context.fillText(lines[i], linePositionX, linePositionY);
        }

      //  if(dropShadow)
    }


    this.updateTexture();
};

/**
 * Updates texture size based on canvas size
 *
 * @method updateTexture
 * @private
 */
PIXI.Text.prototype.updateTexture = function()
{
    this.texture.baseTexture.width = this.canvas.width;
    this.texture.baseTexture.height = this.canvas.height;
    this.texture.crop.width = this.texture.frame.width = this.canvas.width;
    this.texture.crop.height = this.texture.frame.height = this.canvas.height;

    this._width = this.canvas.width;
    this._height = this.canvas.height;

    this.requiresUpdate =  true;
};

/**
* Renders the object using the WebGL renderer
*
* @method _renderWebGL
* @param renderSession {RenderSession} 
* @private
*/
PIXI.Text.prototype._renderWebGL = function(renderSession)
{
    if(this.requiresUpdate)
    {
        this.requiresUpdate = false;
        PIXI.updateWebGLTexture(this.texture.baseTexture, renderSession.gl);
    }

    PIXI.Sprite.prototype._renderWebGL.call(this, renderSession);
};

/**
 * Updates the transform of this object
 *
 * @method updateTransform
 * @private
 */
PIXI.Text.prototype.updateTransform = function()
{
    if(this.dirty)
    {
        this.updateText();
        this.dirty = false;
    }

    PIXI.Sprite.prototype.updateTransform.call(this);
};

/*
 * http://stackoverflow.com/users/34441/ellisbben
 * great solution to the problem!
 * returns the height of the given font
 *
 * @method determineFontHeight
 * @param fontStyle {Object}
 * @private
 */
PIXI.Text.prototype.determineFontHeight = function(fontStyle)
{
    // build a little reference dictionary so if the font style has been used return a
    // cached version...
    var result = PIXI.Text.heightCache[fontStyle];

    if(!result)
    {
        var body = document.getElementsByTagName('body')[0];
        var dummy = document.createElement('div');
        var dummyText = document.createTextNode('M');
        dummy.appendChild(dummyText);
        dummy.setAttribute('style', fontStyle + ';position:absolute;top:0;left:0');
        body.appendChild(dummy);

        result = dummy.offsetHeight;
        PIXI.Text.heightCache[fontStyle] = result;

        body.removeChild(dummy);
    }

    return result;
};

/**
 * Applies newlines to a string to have it optimally fit into the horizontal
 * bounds set by the Text object's wordWrapWidth property.
 *
 * @method wordWrap
 * @param text {String}
 * @private
 */
PIXI.Text.prototype.wordWrap = function(text)
{
    // Greedy wrapping algorithm that will wrap words as the line grows longer
    // than its horizontal bounds.
    var result = '';
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++)
    {
        var spaceLeft = this.style.wordWrapWidth;
        var words = lines[i].split(' ');
        for (var j = 0; j < words.length; j++)
        {
            var wordWidth = this.context.measureText(words[j]).width;
            var wordWidthWithSpace = wordWidth + this.context.measureText(' ').width;
            if(j === 0 || wordWidthWithSpace > spaceLeft)
            {
                // Skip printing the newline if it's the first word of the line that is
                // greater than the word wrap width.
                if(j > 0)
                {
                    result += '\n';
                }
                result += words[j];
                spaceLeft = this.style.wordWrapWidth - wordWidth;
            }
            else
            {
                spaceLeft -= wordWidthWithSpace;
                result += ' ' + words[j];
            }
        }

        if (i < lines.length-1)
        {
            result += '\n';
        }
    }
    return result;
};

/**
 * Destroys this text object
 *
 * @method destroy
 * @param destroyBaseTexture {Boolean} whether to destroy the base texture as well
 */
PIXI.Text.prototype.destroy = function(destroyBaseTexture)
{
    // make sure to reset the the context and canvas.. dont want this hanging around in memory!
    this.context = null;
    this.canvas = null;

    this.texture.destroy(destroyBaseTexture === undefined ? true : destroyBaseTexture);
};

PIXI.Text.heightCache = {};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A Text Object will create a line(s) of text using bitmap font. To split a line you can use '\n', '\r' or '\r\n'
 * You can generate the fnt files using
 * http://www.angelcode.com/products/bmfont/ for windows or
 * http://www.bmglyph.com/ for mac.
 *
 * @class BitmapText
 * @extends DisplayObjectContainer
 * @constructor
 * @param text {String} The copy that you would like the text to display
 * @param style {Object} The style parameters
 * @param style.font {String} The size (optional) and bitmap font id (required) eq 'Arial' or '20px Arial' (must have loaded previously)
 * @param [style.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 */
PIXI.BitmapText = function(text, style)
{
    PIXI.DisplayObjectContainer.call(this);

    this._pool = [];

    this.setText(text);
    this.setStyle(style);
    this.updateText();
    this.dirty = false;
};

// constructor
PIXI.BitmapText.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.BitmapText.prototype.constructor = PIXI.BitmapText;

/**
 * Set the copy for the text object
 *
 * @method setText
 * @param text {String} The copy that you would like the text to display
 */
PIXI.BitmapText.prototype.setText = function(text)
{
    this.text = text || ' ';
    this.dirty = true;
};

/**
 * Set the style of the text
 * style.font {String} The size (optional) and bitmap font id (required) eq 'Arial' or '20px Arial' (must have loaded previously)
 * [style.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 *
 * @method setStyle
 * @param style {Object} The style parameters, contained as properties of an object
 */
PIXI.BitmapText.prototype.setStyle = function(style)
{
    style = style || {};
    style.align = style.align || 'left';
    this.style = style;

    var font = style.font.split(' ');
    this.fontName = font[font.length - 1];
    this.fontSize = font.length >= 2 ? parseInt(font[font.length - 2], 10) : PIXI.BitmapText.fonts[this.fontName].size;

    this.dirty = true;
    this.tint = style.tint;
};

/**
 * Renders text and updates it when needed
 *
 * @method updateText
 * @private
 */
PIXI.BitmapText.prototype.updateText = function()
{
    var data = PIXI.BitmapText.fonts[this.fontName];
    var pos = new PIXI.Point();
    var prevCharCode = null;
    var chars = [];
    var maxLineWidth = 0;
    var lineWidths = [];
    var line = 0;
    var scale = this.fontSize / data.size;
    

    for(var i = 0; i < this.text.length; i++)
    {
        var charCode = this.text.charCodeAt(i);
        if(/(?:\r\n|\r|\n)/.test(this.text.charAt(i)))
        {
            lineWidths.push(pos.x);
            maxLineWidth = Math.max(maxLineWidth, pos.x);
            line++;

            pos.x = 0;
            pos.y += data.lineHeight;
            prevCharCode = null;
            continue;
        }

        var charData = data.chars[charCode];
        if(!charData) continue;

        if(prevCharCode && charData[prevCharCode])
        {
            pos.x += charData.kerning[prevCharCode];
        }
        chars.push({texture:charData.texture, line: line, charCode: charCode, position: new PIXI.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)});
        pos.x += charData.xAdvance;

        prevCharCode = charCode;
    }

    lineWidths.push(pos.x);
    maxLineWidth = Math.max(maxLineWidth, pos.x);

    var lineAlignOffsets = [];
    for(i = 0; i <= line; i++)
    {
        var alignOffset = 0;
        if(this.style.align === 'right')
        {
            alignOffset = maxLineWidth - lineWidths[i];
        }
        else if(this.style.align === 'center')
        {
            alignOffset = (maxLineWidth - lineWidths[i]) / 2;
        }
        lineAlignOffsets.push(alignOffset);
    }

    var lenChildren = this.children.length;
    var lenChars = chars.length;
    var tint = this.tint || 0xFFFFFF;
    for(i = 0; i < lenChars; i++)
    {
        var c = i < lenChildren ? this.children[i] : this._pool.pop(); // get old child if have. if not - take from pool.

        if (c) c.setTexture(chars[i].texture); // check if got one before.
        else c = new PIXI.Sprite(chars[i].texture); // if no create new one.

        c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
        c.position.y = chars[i].position.y * scale;
        c.scale.x = c.scale.y = scale;
        c.tint = tint;
        if (!c.parent) this.addChild(c);
    }

    // remove unnecessary children.
    // and put their into the pool.
    while(this.children.length > lenChars)
    {
        var child = this.getChildAt(this.children.length - 1);
        this._pool.push(child);
        this.removeChild(child);
    }


    /**
     * [read-only] The width of the overall text, different from fontSize,
     * which is defined in the style object
     *
     * @property textWidth
     * @type Number
     */
    this.textWidth = maxLineWidth * scale;

    /**
     * [read-only] The height of the overall text, different from fontSize,
     * which is defined in the style object
     *
     * @property textHeight
     * @type Number
     */
    this.textHeight = (pos.y + data.lineHeight) * scale;
};

/**
 * Updates the transform of this object
 *
 * @method updateTransform
 * @private
 */
PIXI.BitmapText.prototype.updateTransform = function()
{
    if(this.dirty)
    {
        this.updateText();
        this.dirty = false;
    }

    PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
};

PIXI.BitmapText.fonts = {};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */
 
/**
 * Holds all information related to an Interaction event
 *
 * @class InteractionData
 * @constructor
 */
PIXI.InteractionData = function()
{
    /**
     * This point stores the global coords of where the touch/mouse event happened
     *
     * @property global
     * @type Point
     */
    this.global = new PIXI.Point();

   
    /**
     * The target Sprite that was interacted with
     *
     * @property target
     * @type Sprite
     */
    this.target = null;

    /**
     * When passed to an event handler, this will be the original DOM Event that was captured
     *
     * @property originalEvent
     * @type Event
     */
    this.originalEvent = null;
};

/**
 * This will return the local coordinates of the specified displayObject for this InteractionData
 *
 * @method getLocalPosition
 * @param displayObject {DisplayObject} The DisplayObject that you would like the local coords off
 * @return {Point} A point containing the coordinates of the InteractionData position relative to the DisplayObject
 */
PIXI.InteractionData.prototype.getLocalPosition = function(displayObject)
{
    var worldTransform = displayObject.worldTransform;
    var global = this.global;

    // do a cheeky transform to get the mouse coords;
    var a00 = worldTransform.a, a01 = worldTransform.b, a02 = worldTransform.tx,
        a10 = worldTransform.c, a11 = worldTransform.d, a12 = worldTransform.ty,
        id = 1 / (a00 * a11 + a01 * -a10);
    // set the mouse coords...
    return new PIXI.Point(a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id,
                               a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id);
};

// constructor
PIXI.InteractionData.prototype.constructor = PIXI.InteractionData;
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

 /**
 * The interaction manager deals with mouse and touch events. Any DisplayObject can be interactive
 * if its interactive parameter is set to true
 * This manager also supports multitouch.
 *
 * @class InteractionManager
 * @constructor
 * @param stage {Stage} The stage to handle interactions
 */
PIXI.InteractionManager = function(stage)
{
    /**
     * a reference to the stage
     *
     * @property stage
     * @type Stage
     */
    this.stage = stage;

    /**
     * the mouse data
     *
     * @property mouse
     * @type InteractionData
     */
    this.mouse = new PIXI.InteractionData();

    /**
     * an object that stores current touches (InteractionData) by id reference
     *
     * @property touchs
     * @type Object
     */
    this.touchs = {};

    // helpers
    this.tempPoint = new PIXI.Point();

    /**
     * 
     * @property mouseoverEnabled
     * @type Boolean
     * @default
     */
    this.mouseoverEnabled = true;

    /**
     * tiny little interactiveData pool !
     * 
     * @property pool
     * @type Array
     */
    this.pool = [];

    /**
     * An array containing all the iterative items from the our interactive tree
     * @property interactiveItems
     * @type Array
     * @private
     *
     */
    this.interactiveItems = [];

    /**
     * Our canvas
     * @property interactionDOMElement
     * @type HTMLCanvasElement
     * @private
     */
    this.interactionDOMElement = null;

    //this will make it so that you dont have to call bind all the time
    this.onMouseMove = this.onMouseMove.bind( this );
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);

    this.last = 0;

    /**
     * The css style of the cursor that is being used
     * @property currentCursorStyle
     * @type String
     *
     */
    this.currentCursorStyle = 'inherit';

    /**
     * Is set to true when the mouse is moved out of the canvas
     * @property mouseOut
     * @type Boolean
     *
     */
    this.mouseOut = false;
};

// constructor
PIXI.InteractionManager.prototype.constructor = PIXI.InteractionManager;

/**
 * Collects an interactive sprite recursively to have their interactions managed
 *
 * @method collectInteractiveSprite
 * @param displayObject {DisplayObject} the displayObject to collect
 * @param iParent {DisplayObject} the display object's parent
 * @private
 */
PIXI.InteractionManager.prototype.collectInteractiveSprite = function(displayObject, iParent)
{
    var children = displayObject.children;
    var length = children.length;

    // make an interaction tree... {item.__interactiveParent}
    for (var i = length-1; i >= 0; i--)
    {
        var child = children[i];

        // push all interactive bits
        if(child._interactive)
        {
            iParent.interactiveChildren = true;
            //child.__iParent = iParent;
            this.interactiveItems.push(child);

            if(child.children.length > 0)
            {
                this.collectInteractiveSprite(child, child);
            }
        }
        else
        {
            child.__iParent = null;

            if(child.children.length > 0)
            {
                this.collectInteractiveSprite(child, iParent);
            }
        }

    }
};

/**
 * Sets the target for event delegation
 *
 * @method setTarget
 * @param target {WebGLRenderer|CanvasRenderer} the renderer to bind events to
 * @private
 */
PIXI.InteractionManager.prototype.setTarget = function(target)
{
    this.target = target;

    //check if the dom element has been set. If it has don't do anything
    if( this.interactionDOMElement === null ) {

        this.setTargetDomElement( target.view );
    }

    
};


/**
 * Sets the DOM element which will receive mouse/touch events. This is useful for when you have other DOM
 * elements on top of the renderers Canvas element. With this you'll be able to delegate another DOM element
 * to receive those events
 *
 * @method setTargetDomElement
 * @param domElement {DOMElement} the DOM element which will receive mouse and touch events
 * @private
 */
PIXI.InteractionManager.prototype.setTargetDomElement = function(domElement)
{

    this.removeEvents();


    if (window.navigator.msPointerEnabled)
    {
        // time to remove some of that zoom in ja..
        domElement.style['-ms-content-zooming'] = 'none';
        domElement.style['-ms-touch-action'] = 'none';

        // DO some window specific touch!
    }

    this.interactionDOMElement = domElement;

    domElement.addEventListener('mousemove',  this.onMouseMove, true);
    domElement.addEventListener('mousedown',  this.onMouseDown, true);
    domElement.addEventListener('mouseout',   this.onMouseOut, true);

    // aint no multi touch just yet!
    domElement.addEventListener('touchstart', this.onTouchStart, true);
    domElement.addEventListener('touchend', this.onTouchEnd, true);
    domElement.addEventListener('touchmove', this.onTouchMove, true);

    window.addEventListener('mouseup',  this.onMouseUp, true);
};


PIXI.InteractionManager.prototype.removeEvents = function()
{
    if(!this.interactionDOMElement)return;

    this.interactionDOMElement.style['-ms-content-zooming'] = '';
    this.interactionDOMElement.style['-ms-touch-action'] = '';

    this.interactionDOMElement.removeEventListener('mousemove',  this.onMouseMove, true);
    this.interactionDOMElement.removeEventListener('mousedown',  this.onMouseDown, true);
    this.interactionDOMElement.removeEventListener('mouseout',   this.onMouseOut, true);

    // aint no multi touch just yet!
    this.interactionDOMElement.removeEventListener('touchstart', this.onTouchStart, true);
    this.interactionDOMElement.removeEventListener('touchend', this.onTouchEnd, true);
    this.interactionDOMElement.removeEventListener('touchmove', this.onTouchMove, true);

    this.interactionDOMElement = null;

    window.removeEventListener('mouseup',  this.onMouseUp, true);
};

/**
 * updates the state of interactive objects
 *
 * @method update
 * @private
 */
PIXI.InteractionManager.prototype.update = function()
{
    if(!this.target)return;

    // frequency of 30fps??
    var now = Date.now();
    var diff = now - this.last;
    diff = (diff * PIXI.INTERACTION_FREQUENCY ) / 1000;
    if(diff < 1)return;
    this.last = now;

    var i = 0;

    // ok.. so mouse events??
    // yes for now :)
    // OPTIMISE - how often to check??
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }

    // loop through interactive objects!
    var length = this.interactiveItems.length;
    var cursor = 'inherit';
    var over = false;

    for (i = 0; i < length; i++)
    {
        var item = this.interactiveItems[i];

        // OPTIMISATION - only calculate every time if the mousemove function exists..
        // OK so.. does the object have any other interactive functions?
        // hit-test the clip!
       // if(item.mouseover || item.mouseout || item.buttonMode)
       // {
        // ok so there are some functions so lets hit test it..
        item.__hit = this.hitTest(item, this.mouse);
        this.mouse.target = item;
        // ok so deal with interactions..
        // looks like there was a hit!
        if(item.__hit && !over)
        {
            if(item.buttonMode) cursor = item.defaultCursor;

            if(!item.interactiveChildren)over = true;

            if(!item.__isOver)
            {
                if(item.mouseover)item.mouseover(this.mouse);
                item.__isOver = true;
            }
        }
        else
        {
            if(item.__isOver)
            {
                // roll out!
                if(item.mouseout)item.mouseout(this.mouse);
                item.__isOver = false;
            }
        }
    }

    if( this.currentCursorStyle !== cursor )
    {
        this.currentCursorStyle = cursor;
        this.interactionDOMElement.style.cursor = cursor;
    }
};

PIXI.InteractionManager.prototype.rebuildInteractiveGraph = function()
{
    this.dirty = false;

    var len = this.interactiveItems.length;

    for (var i = 0; i < len; i++) {
        this.interactiveItems[i].interactiveChildren = false;
    }

    this.interactiveItems = [];

    if(this.stage.interactive)this.interactiveItems.push(this.stage);
    // go through and collect all the objects that are interactive..
    this.collectInteractiveSprite(this.stage, this.stage);
};

/**
 * Is called when the mouse moves across the renderer element
 *
 * @method onMouseMove
 * @param event {Event} The DOM event of the mouse moving
 * @private
 */
PIXI.InteractionManager.prototype.onMouseMove = function(event)
{
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }

    this.mouse.originalEvent = event || window.event; //IE uses window.event
    // TODO optimize by not check EVERY TIME! maybe half as often? //
    var rect = this.interactionDOMElement.getBoundingClientRect();

    this.mouse.global.x = (event.clientX - rect.left) * (this.target.width / rect.width);
    this.mouse.global.y = (event.clientY - rect.top) * ( this.target.height / rect.height);

    var length = this.interactiveItems.length;

    for (var i = 0; i < length; i++)
    {
        var item = this.interactiveItems[i];

        if(item.mousemove)
        {
            //call the function!
            item.mousemove(this.mouse);
        }
    }
};

/**
 * Is called when the mouse button is pressed down on the renderer element
 *
 * @method onMouseDown
 * @param event {Event} The DOM event of a mouse button being pressed down
 * @private
 */
PIXI.InteractionManager.prototype.onMouseDown = function(event)
{
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }

    this.mouse.originalEvent = event || window.event; //IE uses window.event

    if(PIXI.AUTO_PREVENT_DEFAULT)this.mouse.originalEvent.preventDefault();

    // loop through interaction tree...
    // hit test each item! ->
    // get interactive items under point??
    //stage.__i
    var length = this.interactiveItems.length;

    // while
    // hit test
    for (var i = 0; i < length; i++)
    {
        var item = this.interactiveItems[i];

        if(item.mousedown || item.click)
        {
            item.__mouseIsDown = true;
            item.__hit = this.hitTest(item, this.mouse);

            if(item.__hit)
            {
                //call the function!
                if(item.mousedown)item.mousedown(this.mouse);
                item.__isDown = true;

                // just the one!
                if(!item.interactiveChildren)break;
            }
        }
    }
};

/**
 * Is called when the mouse button is moved out of the renderer element
 *
 * @method onMouseOut
 * @param event {Event} The DOM event of a mouse button being moved out
 * @private 
 */
PIXI.InteractionManager.prototype.onMouseOut = function()
{
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }

    var length = this.interactiveItems.length;

    this.interactionDOMElement.style.cursor = 'inherit';

    for (var i = 0; i < length; i++)
    {
        var item = this.interactiveItems[i];
        if(item.__isOver)
        {
            this.mouse.target = item;
            if(item.mouseout)item.mouseout(this.mouse);
            item.__isOver = false;
        }
    }

    this.mouseOut = true;

    // move the mouse to an impossible position
    this.mouse.global.x = -10000;
    this.mouse.global.y = -10000;
};

/**
 * Is called when the mouse button is released on the renderer element
 *
 * @method onMouseUp
 * @param event {Event} The DOM event of a mouse button being released
 * @private
 */
PIXI.InteractionManager.prototype.onMouseUp = function(event)
{
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }

    this.mouse.originalEvent = event || window.event; //IE uses window.event

    var length = this.interactiveItems.length;
    var up = false;

    for (var i = 0; i < length; i++)
    {
        var item = this.interactiveItems[i];

        item.__hit = this.hitTest(item, this.mouse);

        if(item.__hit && !up)
        {
            //call the function!
            if(item.mouseup)
            {
                item.mouseup(this.mouse);
            }
            if(item.__isDown)
            {
                if(item.click)item.click(this.mouse);
            }

            if(!item.interactiveChildren)up = true;
        }
        else
        {
            if(item.__isDown)
            {
                if(item.mouseupoutside)item.mouseupoutside(this.mouse);
            }
        }

        item.__isDown = false;
        //}
    }
};

/**
 * Tests if the current mouse coordinates hit a sprite
 *
 * @method hitTest
 * @param item {DisplayObject} The displayObject to test for a hit
 * @param interactionData {InteractionData} The interactionData object to update in the case there is a hit
 * @private
 */
PIXI.InteractionManager.prototype.hitTest = function(item, interactionData)
{
    var global = interactionData.global;

    if( !item.worldVisible )return false;

    // temp fix for if the element is in a non visible
   
    var isSprite = (item instanceof PIXI.Sprite),
        worldTransform = item.worldTransform,
        a00 = worldTransform.a, a01 = worldTransform.b, a02 = worldTransform.tx,
        a10 = worldTransform.c, a11 = worldTransform.d, a12 = worldTransform.ty,
        id = 1 / (a00 * a11 + a01 * -a10),
        x = a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id,
        y = a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id;

    interactionData.target = item;

    //a sprite or display object with a hit area defined
    if(item.hitArea && item.hitArea.contains) {
        if(item.hitArea.contains(x, y)) {
            //if(isSprite)
            interactionData.target = item;

            return true;
        }

        return false;
    }
    // a sprite with no hitarea defined
    else if(isSprite)
    {
        var width = item.texture.frame.width,
            height = item.texture.frame.height,
            x1 = -width * item.anchor.x,
            y1;

        if(x > x1 && x < x1 + width)
        {
            y1 = -height * item.anchor.y;

            if(y > y1 && y < y1 + height)
            {
                // set the target property if a hit is true!
                interactionData.target = item;
                return true;
            }
        }
    }

    var length = item.children.length;

    for (var i = 0; i < length; i++)
    {
        var tempItem = item.children[i];
        var hit = this.hitTest(tempItem, interactionData);
        if(hit)
        {
            // hmm.. TODO SET CORRECT TARGET?
            interactionData.target = item;
            return true;
        }
    }

    return false;
};

/**
 * Is called when a touch is moved across the renderer element
 *
 * @method onTouchMove
 * @param event {Event} The DOM event of a touch moving across the renderer view
 * @private
 */
PIXI.InteractionManager.prototype.onTouchMove = function(event)
{
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }

    var rect = this.interactionDOMElement.getBoundingClientRect();
    var changedTouches = event.changedTouches;
    var touchData;
    var i = 0;

    for (i = 0; i < changedTouches.length; i++)
    {
        var touchEvent = changedTouches[i];
        touchData = this.touchs[touchEvent.identifier];
        touchData.originalEvent =  event || window.event;

        // update the touch position
        touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
        touchData.global.y = (touchEvent.clientY - rect.top)  * (this.target.height / rect.height);
        if(navigator.isCocoonJS) {
            touchData.global.x = touchEvent.clientX;
            touchData.global.y = touchEvent.clientY;
        }

        for (var j = 0; j < this.interactiveItems.length; j++)
        {
            var item = this.interactiveItems[j];
            if(item.touchmove && item.__touchData && item.__touchData[touchEvent.identifier]) item.touchmove(touchData);
        }
    }
};

/**
 * Is called when a touch is started on the renderer element
 *
 * @method onTouchStart
 * @param event {Event} The DOM event of a touch starting on the renderer view
 * @private
 */
PIXI.InteractionManager.prototype.onTouchStart = function(event)
{
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }

    var rect = this.interactionDOMElement.getBoundingClientRect();

    if(PIXI.AUTO_PREVENT_DEFAULT)event.preventDefault();
    
    var changedTouches = event.changedTouches;
    for (var i=0; i < changedTouches.length; i++)
    {
        var touchEvent = changedTouches[i];

        var touchData = this.pool.pop();
        if(!touchData)touchData = new PIXI.InteractionData();

        touchData.originalEvent =  event || window.event;

        this.touchs[touchEvent.identifier] = touchData;
        touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
        touchData.global.y = (touchEvent.clientY - rect.top)  * (this.target.height / rect.height);
        if(navigator.isCocoonJS) {
            touchData.global.x = touchEvent.clientX;
            touchData.global.y = touchEvent.clientY;
        }

        var length = this.interactiveItems.length;

        for (var j = 0; j < length; j++)
        {
            var item = this.interactiveItems[j];

            if(item.touchstart || item.tap)
            {
                item.__hit = this.hitTest(item, touchData);

                if(item.__hit)
                {
                    //call the function!
                    if(item.touchstart)item.touchstart(touchData);
                    item.__isDown = true;
                    item.__touchData = item.__touchData || {};
                    item.__touchData[touchEvent.identifier] = touchData;

                    if(!item.interactiveChildren)break;
                }
            }
        }
    }
};

/**
 * Is called when a touch is ended on the renderer element
 *
 * @method onTouchEnd
 * @param event {Event} The DOM event of a touch ending on the renderer view
 * @private
 */
PIXI.InteractionManager.prototype.onTouchEnd = function(event)
{
    if(this.dirty)
    {
        this.rebuildInteractiveGraph();
    }
    
    //this.mouse.originalEvent = event || window.event; //IE uses window.event
    var rect = this.interactionDOMElement.getBoundingClientRect();
    var changedTouches = event.changedTouches;

    for (var i=0; i < changedTouches.length; i++)
    {
        var touchEvent = changedTouches[i];
        var touchData = this.touchs[touchEvent.identifier];
        var up = false;
        touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
        touchData.global.y = (touchEvent.clientY - rect.top)  * (this.target.height / rect.height);
        if(navigator.isCocoonJS) {
            touchData.global.x = touchEvent.clientX;
            touchData.global.y = touchEvent.clientY;
        }

        var length = this.interactiveItems.length;
        for (var j = 0; j < length; j++)
        {
            var item = this.interactiveItems[j];

            if(item.__touchData && item.__touchData[touchEvent.identifier]) {

                item.__hit = this.hitTest(item, item.__touchData[touchEvent.identifier]);

                // so this one WAS down...
                touchData.originalEvent = event || window.event;
                // hitTest??

                if(item.touchend || item.tap)
                {
                    if(item.__hit && !up)
                    {
                        if(item.touchend)item.touchend(touchData);
                        if(item.__isDown)
                        {
                            if(item.tap)item.tap(touchData);
                        }

                        if(!item.interactiveChildren)up = true;
                    }
                    else
                    {
                        if(item.__isDown)
                        {
                            if(item.touchendoutside)item.touchendoutside(touchData);
                        }
                    }

                    item.__isDown = false;
                }

                item.__touchData[touchEvent.identifier] = null;
            }
        }
        // remove the touch..
        this.pool.push(touchData);
        this.touchs[touchEvent.identifier] = null;
    }
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A Stage represents the root of the display tree. Everything connected to the stage is rendered
 *
 * @class Stage
 * @extends DisplayObjectContainer
 * @constructor
 * @param backgroundColor {Number} the background color of the stage, you have to pass this in is in hex format
 *      like: 0xFFFFFF for white
 * 
 * Creating a stage is a mandatory process when you use Pixi, which is as simple as this : 
 * var stage = new PIXI.Stage(0xFFFFFF);
 * where the parameter given is the background colour of the stage, in hex
 * you will use this stage instance to add your sprites to it and therefore to the renderer
 * Here is how to add a sprite to the stage : 
 * stage.addChild(sprite);
 */
PIXI.Stage = function(backgroundColor)
{
    PIXI.DisplayObjectContainer.call( this );

    /**
     * [read-only] Current transform of the object based on world (parent) factors
     *
     * @property worldTransform
     * @type Mat3
     * @readOnly
     * @private
     */
    this.worldTransform = new PIXI.Matrix();

    /**
     * Whether or not the stage is interactive
     *
     * @property interactive
     * @type Boolean
     */
    this.interactive = true;

    /**
     * The interaction manage for this stage, manages all interactive activity on the stage
     *
     * @property interactionManager
     * @type InteractionManager
     */
    this.interactionManager = new PIXI.InteractionManager(this);

    /**
     * Whether the stage is dirty and needs to have interactions updated
     *
     * @property dirty
     * @type Boolean
     * @private
     */
    this.dirty = true;

    //the stage is its own stage
    this.stage = this;

    //optimize hit detection a bit
    this.stage.hitArea = new PIXI.Rectangle(0,0,100000, 100000);

    this.setBackgroundColor(backgroundColor);
};

// constructor
PIXI.Stage.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
PIXI.Stage.prototype.constructor = PIXI.Stage;

/**
 * Sets another DOM element which can receive mouse/touch interactions instead of the default Canvas element.
 * This is useful for when you have other DOM elements on top of the Canvas element.
 *
 * @method setInteractionDelegate
 * @param domElement {DOMElement} This new domElement which will receive mouse/touch events
 */
PIXI.Stage.prototype.setInteractionDelegate = function(domElement)
{
    this.interactionManager.setTargetDomElement( domElement );
};

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.Stage.prototype.updateTransform = function()
{
    this.worldAlpha = 1;

    for(var i=0,j=this.children.length; i<j; i++)
    {
        this.children[i].updateTransform();
    }

    if(this.dirty)
    {
        this.dirty = false;
        // update interactive!
        this.interactionManager.dirty = true;
    }

    if(this.interactive)this.interactionManager.update();
};

/**
 * Sets the background color for the stage
 *
 * @method setBackgroundColor
 * @param backgroundColor {Number} the color of the background, easiest way to pass this in is in hex format
 *      like: 0xFFFFFF for white
 */
PIXI.Stage.prototype.setBackgroundColor = function(backgroundColor)
{
    this.backgroundColor = backgroundColor || 0x000000;
    this.backgroundColorSplit = PIXI.hex2rgb(this.backgroundColor);
    var hex = this.backgroundColor.toString(16);
    hex = '000000'.substr(0, 6 - hex.length) + hex;
    this.backgroundColorString = '#' + hex;
};

/**
 * This will return the point containing global coords of the mouse.
 *
 * @method getMousePosition
 * @return {Point} The point containing the coords of the global InteractionData position.
 */
PIXI.Stage.prototype.getMousePosition = function()
{
    return this.interactionManager.mouse.global;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */
 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

/**
 * A polyfill for requestAnimationFrame
 * You can actually use both requestAnimationFrame and requestAnimFrame, 
 * you will still benefit from the polyfill
 *
 * @method requestAnimationFrame
 */
/**
 * A polyfill for cancelAnimationFrame
 *
 * @method cancelAnimationFrame
 */
var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
        window[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}

if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}

window.requestAnimFrame = window.requestAnimationFrame;

/**
 * Converts a hex color number to an [R, G, B] array
 *
 * @method hex2rgb
 * @param hex {Number}
 */
PIXI.hex2rgb = function(hex) {
    return [(hex >> 16 & 0xFF) / 255, ( hex >> 8 & 0xFF) / 255, (hex & 0xFF)/ 255];
};

/**
 * Converts a color as an [R, G, B] array to a hex number
 *
 * @method rgb2hex
 * @param rgb {Array}
 */
PIXI.rgb2hex = function(rgb) {
    return ((rgb[0]*255 << 16) + (rgb[1]*255 << 8) + rgb[2]*255);
};

/**
 * A polyfill for Function.prototype.bind
 *
 * @method bind
 */
if (typeof Function.prototype.bind !== 'function') {
    Function.prototype.bind = (function () {
        var slice = Array.prototype.slice;
        return function (thisArg) {
            var target = this, boundArgs = slice.call(arguments, 1);

            if (typeof target !== 'function') throw new TypeError();

            function bound() {
                var args = boundArgs.concat(slice.call(arguments));
                target.apply(this instanceof bound ? this : thisArg, args);
            }

            bound.prototype = (function F(proto) {
                if (proto) F.prototype = proto;
                if (!(this instanceof F)) return new F();
            })(target.prototype);

            return bound;
        };
    })();
}

/**
 * A wrapper for ajax requests to be handled cross browser
 *
 * @class AjaxRequest
 * @constructor
 */
PIXI.AjaxRequest = function()
{
    var activexmodes = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Microsoft.XMLHTTP']; //activeX versions to check for in IE

    if (window.ActiveXObject)
    { //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
        for (var i=0; i<activexmodes.length; i++)
        {
            try{
                return new window.ActiveXObject(activexmodes[i]);
            }
            catch(e) {
                //suppress error
            }
        }
    }
    else if (window.XMLHttpRequest) // if Mozilla, Safari etc
    {
        return new window.XMLHttpRequest();
    }
    else
    {
        return false;
    }
};
/*
PIXI.packColorRGBA = function(r, g, b, a)//r, g, b, a)
{
  //  console.log(r, b, c, d)
  return (Math.floor((r)*63) << 18) | (Math.floor((g)*63) << 12) | (Math.floor((b)*63) << 6);// | (Math.floor((a)*63))
  //  i = i | (Math.floor((a)*63));
   // return i;
   // var r = (i / 262144.0 ) / 64;
   // var g = (i / 4096.0)%64 / 64;
  //  var b = (i / 64.0)%64 / 64;
  //  var a = (i)%64 / 64;
     
  //  console.log(r, g, b, a);
  //  return i;

};
*/
/*
PIXI.packColorRGB = function(r, g, b)//r, g, b, a)
{
    return (Math.floor((r)*255) << 16) | (Math.floor((g)*255) << 8) | (Math.floor((b)*255));
};

PIXI.unpackColorRGB = function(r, g, b)//r, g, b, a)
{
    return (Math.floor((r)*255) << 16) | (Math.floor((g)*255) << 8) | (Math.floor((b)*255));
};
*/

/**
 * Checks whether the Canvas BlendModes are supported by the current browser
 *
 * @method canUseNewCanvasBlendModes
 * @return {Boolean} whether they are supported
 */
PIXI.canUseNewCanvasBlendModes = function()
{
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    var context = canvas.getContext('2d');
    context.fillStyle = '#000';
    context.fillRect(0,0,1,1);
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = '#fff';
    context.fillRect(0,0,1,1);
    return context.getImageData(0,0,1,1).data[0] === 0;
};

/**
 * Given a number, this function returns the closest number that is a power of two
 * this function is taken from Starling Framework as its pretty neat ;)
 *
 * @method getNextPowerOfTwo
 * @param number {Number}
 * @return {Number} the closest number that is a power of two
 */
PIXI.getNextPowerOfTwo = function(number)
{
    if (number > 0 && (number & (number - 1)) === 0) // see: http://goo.gl/D9kPj
        return number;
    else
    {
        var result = 1;
        while (result < number) result <<= 1;
        return result;
    }
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */
 
/**
 * https://github.com/mrdoob/eventtarget.js/
 * THankS mr DOob!
 */

/**
 * Adds event emitter functionality to a class
 *
 * @class EventTarget
 * @example
 *      function MyEmitter() {
 *          PIXI.EventTarget.call(this); //mixes in event target stuff
 *      }
 *
 *      var em = new MyEmitter();
 *      em.emit({ type: 'eventName', data: 'some data' });
 */
PIXI.EventTarget = function () {

    /**
     * Holds all the listeners
     *
     * @property listeners
     * @type Object
     */
    var listeners = {};

    /**
     * Adds a listener for a specific event
     *
     * @method addEventListener
     * @param type {string} A string representing the event type to listen for.
     * @param listener {function} The callback function that will be fired when the event occurs
     */
    this.addEventListener = this.on = function ( type, listener ) {


        if ( listeners[ type ] === undefined ) {

            listeners[ type ] = [];

        }

        if ( listeners[ type ].indexOf( listener ) === - 1 ) {

            listeners[ type ].unshift( listener );
        }

    };

    /**
     * Fires the event, ie pretends that the event has happened
     *
     * @method dispatchEvent
     * @param event {Event} the event object
     */
    this.dispatchEvent = this.emit = function ( event ) {

        if ( !listeners[ event.type ] || !listeners[ event.type ].length ) {

            return;

        }


        for(var i = listeners[ event.type ].length-1; i >= 0; i--) {
//        for(var i = 0, l=listeners[ event.type ].length; i < l; i++) {


            listeners[ event.type ][ i ]( event );

        }

    };

    /**
     * Removes the specified listener that was assigned to the specified event type
     *
     * @method removeEventListener
     * @param type {string} A string representing the event type which will have its listener removed
     * @param listener {function} The callback function that was be fired when the event occured
     */
    this.removeEventListener = this.off = function ( type, listener ) {

        if ( listeners[ type ] === undefined ) return;

        var index = listeners[ type ].indexOf( listener );

        if ( index !== - 1 ) {

            listeners[ type ].splice( index, 1 );

        }

    };

    /**
     * Removes all the listeners that were active for the specified event type
     *
     * @method removeAllEventListeners
     * @param type {string} A string representing the event type which will have all its listeners removed
     */
    this.removeAllEventListeners = function( type ) {
        var a = listeners[type];
        if (a)
            a.length = 0;
    };
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * This helper function will automatically detect which renderer you should be using.
 * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
 * the browser then this function will return a canvas renderer
 * @class autoDetectRenderer
 * @static
 * @param width=800 {Number} the width of the renderers view
 * @param height=600 {Number} the height of the renderers view
 * @param [view] {Canvas} the canvas to use as a view, optional 
 * @param [transparent=false] {Boolean} the transparency of the render view, default false
 * @param [antialias=false] {Boolean} sets antialias (only applicable in webGL chrome at the moment)
 *
 */
PIXI.autoDetectRenderer = function(width, height, view, transparent, antialias)
{
    if(!width)width = 800;
    if(!height)height = 600;

    // BORROWED from Mr Doob (mrdoob.com)
    var webgl = ( function () { try {
                                    var canvas = document.createElement( 'canvas' );
                                    return !! window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) );
                                } catch( e ) {
                                    return false;
                                }
                            } )();

    if( webgl )
    {
        return new PIXI.WebGLRenderer(width, height, view, transparent, antialias);
    }

    return  new PIXI.CanvasRenderer(width, height, view, transparent);
};

/**
 * This helper function will automatically detect which renderer you should be using.
 * This function is very similar to the autoDetectRenderer function except that is will return a canvas renderer for android.
 * Even thought both android chrome suports webGL the canvas implementation perform better at the time of writing. 
 * This function will likely change and update as webGL performance imporoves on thease devices.
 * @class getRecommendedRenderer
 * @static
 * @param width=800 {Number} the width of the renderers view
 * @param height=600 {Number} the height of the renderers view
 * @param [view] {Canvas} the canvas to use as a view, optional 
 * @param [transparent=false] {Boolean} the transparency of the render view, default false
 * @param [antialias=false] {Boolean} sets antialias (only applicable in webGL chrome at the moment)
 *
 */
PIXI.autoDetectRecommendedRenderer = function(width, height, view, transparent, antialias)
{
    if(!width)width = 800;
    if(!height)height = 600;

    // BORROWED from Mr Doob (mrdoob.com)
    var webgl = ( function () { try {
                                    var canvas = document.createElement( 'canvas' );
                                    return !! window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) );
                                } catch( e ) {
                                    return false;
                                }
                            } )();

    var isAndroid = /Android/i.test(navigator.userAgent);

    if( webgl && !isAndroid)
    {
        return new PIXI.WebGLRenderer(width, height, view, transparent, antialias);
    }

    return  new PIXI.CanvasRenderer(width, height, view, transparent);
};

/*
    PolyK library
    url: http://polyk.ivank.net
    Released under MIT licence.

    Copyright (c) 2012 Ivan Kuckir

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    This is an amazing lib!

    slightly modified by Mat Groves (matgroves.com);
*/

/**
 * Based on the Polyk library http://polyk.ivank.net released under MIT licence.
 * This is an amazing lib!
 * slightly modified by Mat Groves (matgroves.com);
 * @class PolyK
 *
 */
PIXI.PolyK = {};

/**
 * Triangulates shapes for webGL graphic fills
 *
 * @method Triangulate
 * 
 */
PIXI.PolyK.Triangulate = function(p)
{
    var sign = true;

    var n = p.length >> 1;
    if(n < 3) return [];

    var tgs = [];
    var avl = [];
    for(var i = 0; i < n; i++) avl.push(i);

    i = 0;
    var al = n;
    while(al > 3)
    {
        var i0 = avl[(i+0)%al];
        var i1 = avl[(i+1)%al];
        var i2 = avl[(i+2)%al];

        var ax = p[2*i0],  ay = p[2*i0+1];
        var bx = p[2*i1],  by = p[2*i1+1];
        var cx = p[2*i2],  cy = p[2*i2+1];

        var earFound = false;
        if(PIXI.PolyK._convex(ax, ay, bx, by, cx, cy, sign))
        {
            earFound = true;
            for(var j = 0; j < al; j++)
            {
                var vi = avl[j];
                if(vi === i0 || vi === i1 || vi === i2) continue;

                if(PIXI.PolyK._PointInTriangle(p[2*vi], p[2*vi+1], ax, ay, bx, by, cx, cy)) {
                    earFound = false;
                    break;
                }
            }
        }

        if(earFound)
        {
            tgs.push(i0, i1, i2);
            avl.splice((i+1)%al, 1);
            al--;
            i = 0;
        }
        else if(i++ > 3*al)
        {
            // need to flip flip reverse it!
            // reset!
            if(sign)
            {
                tgs = [];
                avl = [];
                for(i = 0; i < n; i++) avl.push(i);

                i = 0;
                al = n;

                sign = false;
            }
            else
            {
                window.console.log("PIXI Warning: shape too complex to fill");
                return [];
            }
        }
    }

    tgs.push(avl[0], avl[1], avl[2]);
    return tgs;
};

/**
 * Checks whether a point is within a triangle
 *
 * @method _PointInTriangle
 * @param px {Number} x coordinate of the point to test
 * @param py {Number} y coordinate of the point to test
 * @param ax {Number} x coordinate of the a point of the triangle
 * @param ay {Number} y coordinate of the a point of the triangle
 * @param bx {Number} x coordinate of the b point of the triangle
 * @param by {Number} y coordinate of the b point of the triangle
 * @param cx {Number} x coordinate of the c point of the triangle
 * @param cy {Number} y coordinate of the c point of the triangle
 * @private
 */
PIXI.PolyK._PointInTriangle = function(px, py, ax, ay, bx, by, cx, cy)
{
    var v0x = cx-ax;
    var v0y = cy-ay;
    var v1x = bx-ax;
    var v1y = by-ay;
    var v2x = px-ax;
    var v2y = py-ay;

    var dot00 = v0x*v0x+v0y*v0y;
    var dot01 = v0x*v1x+v0y*v1y;
    var dot02 = v0x*v2x+v0y*v2y;
    var dot11 = v1x*v1x+v1y*v1y;
    var dot12 = v1x*v2x+v1y*v2y;

    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    // Check if point is in triangle
    return (u >= 0) && (v >= 0) && (u + v < 1);
};

/**
 * Checks whether a shape is convex
 *
 * @method _convex
 * 
 * @private
 */
PIXI.PolyK._convex = function(ax, ay, bx, by, cx, cy, sign)
{
    return ((ay-by)*(cx-bx) + (bx-ax)*(cy-by) >= 0) === sign;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

// TODO Alvin and Mat
// Should we eventually create a Utils class ? 
// Or just move this file to the pixi.js file ?
PIXI.initDefaultShaders = function()
{
   
  //  PIXI.stripShader = new PIXI.StripShader();
//    PIXI.stripShader.init();

};

PIXI.CompileVertexShader = function(gl, shaderSrc)
{
    return PIXI._CompileShader(gl, shaderSrc, gl.VERTEX_SHADER);
};

PIXI.CompileFragmentShader = function(gl, shaderSrc)
{
    return PIXI._CompileShader(gl, shaderSrc, gl.FRAGMENT_SHADER);
};

PIXI._CompileShader = function(gl, shaderSrc, shaderType)
{
    var src = shaderSrc.join("\n");
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        window.console.log(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
};

PIXI.compileProgram = function(gl, vertexSrc, fragmentSrc)
{
    var fragmentShader = PIXI.CompileFragmentShader(gl, fragmentSrc);
    var vertexShader = PIXI.CompileVertexShader(gl, vertexSrc);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        window.console.log("Could not initialise shaders");
    }

    return shaderProgram;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * @author Richard Davey http://www.photonstorm.com @photonstorm
 */

/**
* @class PixiShader
* @constructor
*/
PIXI.PixiShader = function(gl)
{
    this._UID = PIXI._UID++;
    
    /**
     * @property gl
     * @type WebGLContext
     */
    this.gl = gl;

    /**
    * @property {any} program - The WebGL program.
    */
    this.program = null;

    /**
    * @property {array} fragmentSrc - The fragment shader.
    */
    this.fragmentSrc = [
        'precision lowp float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D uSampler;',
        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
        '}'
    ];

    /**
    * @property {number} textureCount - A local texture counter for multi-texture shaders.
    */
    this.textureCount = 0;

    this.attributes = [];

    this.init();
};

/**
* Initialises the shader
* @method init
*
*/
PIXI.PixiShader.prototype.init = function()
{
    var gl = this.gl;

    var program = PIXI.compileProgram(gl, this.vertexSrc || PIXI.PixiShader.defaultVertexSrc, this.fragmentSrc);
    
    gl.useProgram(program);

    // get and store the uniforms for the shader
    this.uSampler = gl.getUniformLocation(program, 'uSampler');
    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
    this.dimensions = gl.getUniformLocation(program, 'dimensions');

    // get and store the attributes
    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');
    this.colorAttribute = gl.getAttribLocation(program, 'aColor');


    // Begin worst hack eva //

    // WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?
    // maybe its something to do with the current state of the gl context.
    // Im convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel
    // If theres any webGL people that know why could happen please help :)
    if(this.colorAttribute === -1)
    {
        this.colorAttribute = 2;
    }

    this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];

    // End worst hack eva //

    // add those custom shaders!
    for (var key in this.uniforms)
    {
        // get the uniform locations..
        this.uniforms[key].uniformLocation = gl.getUniformLocation(program, key);
    }

    this.initUniforms();

    this.program = program;
};

/**
* Initialises the shader uniform values.
* Uniforms are specified in the GLSL_ES Specification: http://www.khronos.org/registry/webgl/specs/latest/1.0/
* http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf
*
* @method initUniforms
*/
PIXI.PixiShader.prototype.initUniforms = function()
{
    this.textureCount = 1;
    var gl = this.gl;
    var uniform;

    for (var key in this.uniforms)
    {
        uniform = this.uniforms[key];

        var type = uniform.type;

        if (type === 'sampler2D')
        {
            uniform._init = false;

            if (uniform.value !== null)
            {
                this.initSampler2D(uniform);
            }
        }
        else if (type === 'mat2' || type === 'mat3' || type === 'mat4')
        {
            //  These require special handling
            uniform.glMatrix = true;
            uniform.glValueLength = 1;

            if (type === 'mat2')
            {
                uniform.glFunc = gl.uniformMatrix2fv;
            }
            else if (type === 'mat3')
            {
                uniform.glFunc = gl.uniformMatrix3fv;
            }
            else if (type === 'mat4')
            {
                uniform.glFunc = gl.uniformMatrix4fv;
            }
        }
        else
        {
            //  GL function reference
            uniform.glFunc = gl['uniform' + type];

            if (type === '2f' || type === '2i')
            {
                uniform.glValueLength = 2;
            }
            else if (type === '3f' || type === '3i')
            {
                uniform.glValueLength = 3;
            }
            else if (type === '4f' || type === '4i')
            {
                uniform.glValueLength = 4;
            }
            else
            {
                uniform.glValueLength = 1;
            }
        }
    }

};

/**
* Initialises a Sampler2D uniform (which may only be available later on after initUniforms once the texture has loaded)
*
* @method initSampler2D
*/
PIXI.PixiShader.prototype.initSampler2D = function(uniform)
{
    if (!uniform.value || !uniform.value.baseTexture || !uniform.value.baseTexture.hasLoaded)
    {
        return;
    }

    var gl = this.gl;

    gl.activeTexture(gl['TEXTURE' + this.textureCount]);
    gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTextures[gl.id]);

    //  Extended texture data
    if (uniform.textureData)
    {
        var data = uniform.textureData;

        // GLTexture = mag linear, min linear_mipmap_linear, wrap repeat + gl.generateMipmap(gl.TEXTURE_2D);
        // GLTextureLinear = mag/min linear, wrap clamp
        // GLTextureNearestRepeat = mag/min NEAREST, wrap repeat
        // GLTextureNearest = mag/min nearest, wrap clamp
        // AudioTexture = whatever + luminance + width 512, height 2, border 0
        // KeyTexture = whatever + luminance + width 256, height 2, border 0

        //  magFilter can be: gl.LINEAR, gl.LINEAR_MIPMAP_LINEAR or gl.NEAREST
        //  wrapS/T can be: gl.CLAMP_TO_EDGE or gl.REPEAT

        var magFilter = (data.magFilter) ? data.magFilter : gl.LINEAR;
        var minFilter = (data.minFilter) ? data.minFilter : gl.LINEAR;
        var wrapS = (data.wrapS) ? data.wrapS : gl.CLAMP_TO_EDGE;
        var wrapT = (data.wrapT) ? data.wrapT : gl.CLAMP_TO_EDGE;
        var format = (data.luminance) ? gl.LUMINANCE : gl.RGBA;

        if (data.repeat)
        {
            wrapS = gl.REPEAT;
            wrapT = gl.REPEAT;
        }

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!data.flipY);

        if (data.width)
        {
            var width = (data.width) ? data.width : 512;
            var height = (data.height) ? data.height : 2;
            var border = (data.border) ? data.border : 0;

            // void texImage2D(GLenum target, GLint level, GLenum internalformat, GLsizei width, GLsizei height, GLint border, GLenum format, GLenum type, ArrayBufferView? pixels);
            gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, border, format, gl.UNSIGNED_BYTE, null);
        }
        else
        {
            //  void texImage2D(GLenum target, GLint level, GLenum internalformat, GLenum format, GLenum type, ImageData? pixels);
            gl.texImage2D(gl.TEXTURE_2D, 0, format, gl.RGBA, gl.UNSIGNED_BYTE, uniform.value.baseTexture.source);
        }

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
    }

    gl.uniform1i(uniform.uniformLocation, this.textureCount);

    uniform._init = true;

    this.textureCount++;

};

/**
* Updates the shader uniform values.
*
* @method syncUniforms
*/
PIXI.PixiShader.prototype.syncUniforms = function()
{
    this.textureCount = 1;
    var uniform;
    var gl = this.gl;

    //  This would probably be faster in an array and it would guarantee key order
    for (var key in this.uniforms)
    {
        uniform = this.uniforms[key];

        if (uniform.glValueLength === 1)
        {
            if (uniform.glMatrix === true)
            {
                uniform.glFunc.call(gl, uniform.uniformLocation, uniform.transpose, uniform.value);
            }
            else
            {
                uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value);
            }
        }
        else if (uniform.glValueLength === 2)
        {
            uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y);
        }
        else if (uniform.glValueLength === 3)
        {
            uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y, uniform.value.z);
        }
        else if (uniform.glValueLength === 4)
        {
            uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y, uniform.value.z, uniform.value.w);
        }
        else if (uniform.type === 'sampler2D')
        {
            if (uniform._init)
            {
                gl.activeTexture(gl['TEXTURE' + this.textureCount]);
                gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTextures[gl.id] || PIXI.createWebGLTexture( uniform.value.baseTexture, gl));
                gl.uniform1i(uniform.uniformLocation, this.textureCount);
                this.textureCount++;
            }
            else
            {
                this.initSampler2D(uniform);
            }
        }
    }

};

/**
* Destroys the shader
* @method destroy
*/
PIXI.PixiShader.prototype.destroy = function()
{
    this.gl.deleteProgram( this.program );
    this.uniforms = null;
    this.gl = null;

    this.attributes = null;
};

/**
* The Default Vertex shader source
* @property defaultVertexSrc
* @type String
*/
PIXI.PixiShader.defaultVertexSrc = [
    'attribute vec2 aVertexPosition;',
    'attribute vec2 aTextureCoord;',
    'attribute vec2 aColor;',

    'uniform vec2 projectionVector;',
    'uniform vec2 offsetVector;',

    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',

    'const vec2 center = vec2(-1.0, 1.0);',

    'void main(void) {',
    '   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);',
    '   vTextureCoord = aTextureCoord;',
    '   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;',
    '   vColor = vec4(color * aColor.x, aColor.x);',
    '}'
];

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * @author Richard Davey http://www.photonstorm.com @photonstorm
 */

/**
* @class PixiFastShader
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
*/
PIXI.PixiFastShader = function(gl)
{
    this._UID = PIXI._UID++;
    
    /**
     * @property gl
     * @type WebGLContext
     */
    this.gl = gl;

    /**
     * @property {any} program - The WebGL program.
     */
    this.program = null;

    /**
     * @property {array} fragmentSrc - The fragment shader.
     */
    this.fragmentSrc = [
        'precision lowp float;',
        'varying vec2 vTextureCoord;',
        'varying float vColor;',
        'uniform sampler2D uSampler;',
        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
        '}'
    ];

    /**
    * @property {array} vertexSrc - The vertex shader
    */
    this.vertexSrc = [
        'attribute vec2 aVertexPosition;',
        'attribute vec2 aPositionCoord;',
        'attribute vec2 aScale;',
        'attribute float aRotation;',
        'attribute vec2 aTextureCoord;',
        'attribute float aColor;',

        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',
        'uniform mat3 uMatrix;',

        'varying vec2 vTextureCoord;',
        'varying float vColor;',

        'const vec2 center = vec2(-1.0, 1.0);',

        'void main(void) {',
        '   vec2 v;',
        '   vec2 sv = aVertexPosition * aScale;',
        '   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);',
        '   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);',
        '   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;',
        '   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);',
        '   vTextureCoord = aTextureCoord;',
      //  '   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;',
        '   vColor = aColor;',
        '}'
    ];


    /**
    * @property {number} textureCount - A local texture counter for multi-texture shaders.
    */
    this.textureCount = 0;

    
    this.init();
};

/**
* Initialises the shader
* @method init
*
*/
PIXI.PixiFastShader.prototype.init = function()
{

    var gl = this.gl;

    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);
    
    gl.useProgram(program);

    // get and store the uniforms for the shader
    this.uSampler = gl.getUniformLocation(program, 'uSampler');

    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
    this.dimensions = gl.getUniformLocation(program, 'dimensions');
    this.uMatrix = gl.getUniformLocation(program, 'uMatrix');

    // get and store the attributes
    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    this.aPositionCoord = gl.getAttribLocation(program, 'aPositionCoord');

    this.aScale = gl.getAttribLocation(program, 'aScale');
    this.aRotation = gl.getAttribLocation(program, 'aRotation');

    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');
    this.colorAttribute = gl.getAttribLocation(program, 'aColor');
   

   
    // Begin worst hack eva //

    // WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?
    // maybe its somthing to do with the current state of the gl context.
    // Im convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel
    // If theres any webGL people that know why could happen please help :)
    if(this.colorAttribute === -1)
    {
        this.colorAttribute = 2;
    }

    this.attributes = [this.aVertexPosition, this.aPositionCoord,  this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute];
    
    // End worst hack eva //


    this.program = program;
};

/**
* Destroys the shader
* @method destroy
*
*/
PIXI.PixiFastShader.prototype.destroy = function()
{
    this.gl.deleteProgram( this.program );
    this.uniforms = null;
    this.gl = null;

    this.attributes = null;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */


PIXI.StripShader = function(gl)
{
    this._UID = PIXI._UID++;
    
    this.gl = gl;

    /**
    * @property {any} program - The WebGL program.
    */
    this.program = null;

    /**
     * @property {array} fragmentSrc - The fragment shader.
     */
    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
     //   'varying float vColor;',
        'uniform float alpha;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));',
      //  '   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',//gl_FragColor * alpha;',
        '}'
    ];

     /**
    * @property {array} fragmentSrc - The fragment shader.
    */
    this.vertexSrc  = [
        'attribute vec2 aVertexPosition;',
        'attribute vec2 aTextureCoord;',
        'uniform mat3 translationMatrix;',
        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',
      //  'uniform float alpha;',
       // 'uniform vec3 tint;',
        'varying vec2 vTextureCoord;',
      //  'varying vec4 vColor;',

        'void main(void) {',
        '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',
        '   v -= offsetVector.xyx;',
        '   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);',
        '   vTextureCoord = aTextureCoord;',
       // '   vColor = aColor * vec4(tint * alpha, alpha);',
        '}'
    ];

    this.init();
};

/**
* Initialises the shader
* @method init
*
*/
PIXI.StripShader.prototype.init = function()
{
    var gl = this.gl;

    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);
    gl.useProgram(program);

    // get and store the uniforms for the shader
    this.uSampler = gl.getUniformLocation(program, 'uSampler');
    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
    this.colorAttribute = gl.getAttribLocation(program, 'aColor');
    //this.dimensions = gl.getUniformLocation(this.program, 'dimensions');

    // get and store the attributes
    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');

    this.attributes = [this.aVertexPosition, this.aTextureCoord];

    this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');
    this.alpha = gl.getUniformLocation(program, 'alpha');

    this.program = program;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
* @class PrimitiveShader
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
*/
PIXI.PrimitiveShader = function(gl)
{
    this._UID = PIXI._UID++;
 
    /**
     * @property gl
     * @type WebGLContext
     */
    this.gl = gl;

    /**
    * @property {any} program - The WebGL program.
    */
    this.program = null;

    /**
     * @property fragmentSrc
     * @type Array
     */
    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec4 vColor;',

        'void main(void) {',
        '   gl_FragColor = vColor;',
        '}'
    ];

    /**
     * @property vertexSrc
     * @type Array
     */
    this.vertexSrc  = [
        'attribute vec2 aVertexPosition;',
        'attribute vec4 aColor;',
        'uniform mat3 translationMatrix;',
        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',
        'uniform float alpha;',
        'uniform vec3 tint;',
        'varying vec4 vColor;',

        'void main(void) {',
        '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',
        '   v -= offsetVector.xyx;',
        '   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);',
        '   vColor = aColor * vec4(tint * alpha, alpha);',
        '}'
    ];

    this.init();
};

/**
* Initialises the shader
* @method init
*
*/
PIXI.PrimitiveShader.prototype.init = function()
{

    var gl = this.gl;

    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);
    gl.useProgram(program);

    // get and store the uniforms for the shader
    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
    this.tintColor = gl.getUniformLocation(program, 'tint');


    // get and store the attributes
    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    this.colorAttribute = gl.getAttribLocation(program, 'aColor');

    this.attributes = [this.aVertexPosition, this.colorAttribute];

    this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');
    this.alpha = gl.getUniformLocation(program, 'alpha');

    this.program = program;
};

/**
* Destroys the shader
* @method destroy
*
*/
PIXI.PrimitiveShader.prototype.destroy = function()
{
    this.gl.deleteProgram( this.program );
    this.uniforms = null;
    this.gl = null;

    this.attribute = null;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
* @class ComplexPrimitiveShader
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
*/
PIXI.ComplexPrimitiveShader = function(gl)
{
    this._UID = PIXI._UID++;
    /**
     * @property gl
     * @type WebGLContext
     */
    this.gl = gl;

    /**
    * @property {any} program - The WebGL program.
    */
    this.program = null;

    /**
     * @property fragmentSrc
     * @type Array
     */
    this.fragmentSrc = [
        'precision mediump float;',
        


        'varying vec4 vColor;',

        'void main(void) {',
        '   gl_FragColor = vColor;',
        '}'
    ];

    /**
     * @property vertexSrc
     * @type Array
     */
    this.vertexSrc  = [
        'attribute vec2 aVertexPosition;',
        //'attribute vec4 aColor;',
        'uniform mat3 translationMatrix;',
        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',
        
        'uniform vec3 tint;',
        'uniform float alpha;',
        'uniform vec3 color;',

        'varying vec4 vColor;',

        'void main(void) {',
        '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',
        '   v -= offsetVector.xyx;',
        '   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);',
        '   vColor = vec4(color * alpha * tint, alpha);',//" * vec4(tint * alpha, alpha);',
        '}'
    ];

    this.init();
};

/**
* Initialises the shader
* @method init
*
*/
PIXI.ComplexPrimitiveShader.prototype.init = function()
{

    var gl = this.gl;

    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);
    gl.useProgram(program);

    // get and store the uniforms for the shader
    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
    this.tintColor = gl.getUniformLocation(program, 'tint');
    this.color = gl.getUniformLocation(program, 'color');


    // get and store the attributes
    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
   // this.colorAttribute = gl.getAttribLocation(program, 'aColor');

    this.attributes = [this.aVertexPosition, this.colorAttribute];

    this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');
    this.alpha = gl.getUniformLocation(program, 'alpha');

    this.program = program;
};

/**
* Destroys the shader
* @method destroy
*
*/
PIXI.ComplexPrimitiveShader.prototype.destroy = function()
{
    this.gl.deleteProgram( this.program );
    this.uniforms = null;
    this.gl = null;

    this.attribute = null;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A set of functions used by the webGL renderer to draw the primitive graphics data
 *
 * @class WebGLGraphics
 * @private
 * @static
 */
PIXI.WebGLGraphics = function()
{

};

/**
 * Renders the graphics object
 *
 * @static
 * @private
 * @method renderGraphics
 * @param graphics {Graphics}
 * @param renderSession {Object}
 */
PIXI.WebGLGraphics.renderGraphics = function(graphics, renderSession)//projection, offset)
{
    var gl = renderSession.gl;
    var projection = renderSession.projection,
        offset = renderSession.offset,
        shader = renderSession.shaderManager.primitiveShader,
        webGLData;

    if(graphics.dirty)
    {
        PIXI.WebGLGraphics.updateGraphics(graphics, gl);
    }

    var webGL = graphics._webGL[gl.id];

    // This  could be speeded up for sure!

    for (var i = 0; i < webGL.data.length; i++)
    {
        if(webGL.data[i].mode === 1)
        {
            webGLData = webGL.data[i];

            renderSession.stencilManager.pushStencil(graphics, webGLData, renderSession);

            // render quad..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );
            
            renderSession.stencilManager.popStencil(graphics, webGLData, renderSession);
            
            this.last = webGLData.mode;
        }
        else
        {
            webGLData = webGL.data[i];
           

            renderSession.shaderManager.setShader( shader );//activatePrimitiveShader();
            shader = renderSession.shaderManager.primitiveShader;
            gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));

            gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
            gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);

            gl.uniform3fv(shader.tintColor, PIXI.hex2rgb(graphics.tint));

            gl.uniform1f(shader.alpha, graphics.worldAlpha);
            

            gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

            gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
            gl.vertexAttribPointer(shader.colorAttribute, 4, gl.FLOAT, false,4 * 6, 2 * 4);

            // set the index buffer!
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );
        }
    }
};

/**
 * Updates the graphics object
 *
 * @static
 * @private
 * @method updateGraphics
 * @param graphicsData {Graphics} The graphics object to update
 * @param gl {WebGLContext} the current WebGL drawing context
 */
PIXI.WebGLGraphics.updateGraphics = function(graphics, gl)
{
    // get the contexts graphics object
    var webGL = graphics._webGL[gl.id];
    // if the graphics object does not exist in the webGL context time to create it!
    if(!webGL)webGL = graphics._webGL[gl.id] = {lastIndex:0, data:[], gl:gl};

    // flag the graphics as not dirty as we are about to update it...
    graphics.dirty = false;

    var i;

    // if the user cleared the graphics object we will need to clear every object
    if(graphics.clearDirty)
    {
        graphics.clearDirty = false;

        // lop through and return all the webGLDatas to the object pool so than can be reused later on
        for (i = 0; i < webGL.data.length; i++)
        {
            var graphicsData = webGL.data[i];
            graphicsData.reset();
            PIXI.WebGLGraphics.graphicsDataPool.push( graphicsData );
        }

        // clear the array and reset the index.. 
        webGL.data = [];
        webGL.lastIndex = 0;
    }

    
    var webGLData;
    
    // loop through the graphics datas and construct each one..
    // if the object is a complex fill then the new stencil buffer technique will be used
    // other wise graphics objects will be pushed into a batch..
    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];

        if(data.type === PIXI.Graphics.POLY)
        {
            // MAKE SURE WE HAVE THE CORRECT TYPE..
            if(data.fill)
            {
                if(data.points.length > 6)
                {
                    if(data.points.length > 5 * 2)
                    {
                        webGLData = PIXI.WebGLGraphics.switchMode(webGL, 1);
                        PIXI.WebGLGraphics.buildComplexPoly(data, webGLData);
                    }
                    else
                    {
                        webGLData = PIXI.WebGLGraphics.switchMode(webGL, 0);
                        PIXI.WebGLGraphics.buildPoly(data, webGLData);
                    }
                }
            }

            if(data.lineWidth > 0)
            {
                webGLData = PIXI.WebGLGraphics.switchMode(webGL, 0);
                PIXI.WebGLGraphics.buildLine(data, webGLData);

            }
        }
        else
        {
            webGLData = PIXI.WebGLGraphics.switchMode(webGL, 0);
            
            if(data.type === PIXI.Graphics.RECT)
            {
                PIXI.WebGLGraphics.buildRectangle(data, webGLData);
            }
            else if(data.type === PIXI.Graphics.CIRC || data.type === PIXI.Graphics.ELIP)
            {
                PIXI.WebGLGraphics.buildCircle(data, webGLData);
            }
            else if(data.type === PIXI.Graphics.RREC)
            {
                PIXI.WebGLGraphics.buildRoundedRectangle(data, webGLData);
            }
        }


        webGL.lastIndex++;
    }

    // upload all the dirty data...
    for (i = 0; i < webGL.data.length; i++)
    {
        webGLData = webGL.data[i];
        if(webGLData.dirty)webGLData.upload();
    }
};


PIXI.WebGLGraphics.switchMode = function(webGL, type)
{
    var webGLData;

    if(!webGL.data.length)
    {
        webGLData = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(webGL.gl);
        webGLData.mode = type;
        webGL.data.push(webGLData);
    }
    else
    {
        webGLData = webGL.data[webGL.data.length-1];

        if(webGLData.mode !== type || type === 1)
        {
            webGLData = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(webGL.gl);
            webGLData.mode = type;
            webGL.data.push(webGLData);
        }
    }

    webGLData.dirty = true;

    return webGLData;
};

/**
 * Builds a rectangle to draw
 *
 * @static
 * @private
 * @method buildRectangle
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {Object}
 */
PIXI.WebGLGraphics.buildRectangle = function(graphicsData, webGLData)
{
    // --- //
    // need to convert points to a nice regular data
    //
    var rectData = graphicsData.points;
    var x = rectData[0];
    var y = rectData[1];
    var width = rectData[2];
    var height = rectData[3];


    if(graphicsData.fill)
    {
        var color = PIXI.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vertPos = verts.length/6;

        // start
        verts.push(x, y);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y);
        verts.push(r, g, b, alpha);

        verts.push(x , y + height);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y + height);
        verts.push(r, g, b, alpha);

        // insert 2 dead triangles..
        indices.push(vertPos, vertPos, vertPos+1, vertPos+2, vertPos+3, vertPos+3);
    }

    if(graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = [x, y,
                  x + width, y,
                  x + width, y + height,
                  x, y + height,
                  x, y];


        PIXI.WebGLGraphics.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a rounded rectangle to draw
 *
 * @static
 * @private
 * @method buildRoundedRectangle
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {Object}
 */
PIXI.WebGLGraphics.buildRoundedRectangle = function(graphicsData, webGLData)
{

    var points = graphicsData.points;
    var x = points[0];
    var y = points[1];
    var width = points[2];
    var height = points[3];
    var radius = points[4];


    var recPoints = [];
    recPoints.push(x, y + radius);
    recPoints = recPoints.concat(PIXI.WebGLGraphics.quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height));
    recPoints = recPoints.concat(PIXI.WebGLGraphics.quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
    recPoints = recPoints.concat(PIXI.WebGLGraphics.quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y));
    recPoints = recPoints.concat(PIXI.WebGLGraphics.quadraticBezierCurve(x + radius, y, x, y, x, y + radius));


    if (graphicsData.fill) {
        var color = PIXI.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        var triangles = PIXI.PolyK.Triangulate(recPoints);

        var i = 0;
        for (i = 0; i < triangles.length; i+=3)
        {
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i+1] + vecPos);
            indices.push(triangles[i+2] + vecPos);
            indices.push(triangles[i+2] + vecPos);
        }

        for (i = 0; i < recPoints.length; i++)
        {
            verts.push(recPoints[i], recPoints[++i], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = recPoints;

        PIXI.WebGLGraphics.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Calcul the points for a quadratic bezier curve. (helper function..)
 * Based on : https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @param  {number}   fromX Origin point x
 * @param  {number}   fromY Origin point x
 * @param  {number}   cpX   Control point x
 * @param  {number}   cpY   Control point y
 * @param  {number}   toX   Destination point x
 * @param  {number}   toY   Destination point y
 * @return {number[]}
 */
PIXI.WebGLGraphics.quadraticBezierCurve = function(fromX, fromY, cpX, cpY, toX, toY) {
    var xa,
        ya,
        xb,
        yb,
        x,
        y,
        n = 20,
        points = [];

    function getPt(n1 , n2, perc) {
        var diff = n2 - n1;

        return n1 + ( diff * perc );
    }

    var j = 0;
    for (var i = 0; i <= n; i++ )
    {
        j = i / n;

        // The Green Line
        xa = getPt( fromX , cpX , j );
        ya = getPt( fromY , cpY , j );
        xb = getPt( cpX , toX , j );
        yb = getPt( cpY , toY , j );

        // The Black Dot
        x = getPt( xa , xb , j );
        y = getPt( ya , yb , j );

        points.push(x, y);
    }
    return points;
};

/**
 * Builds a circle to draw
 *
 * @static
 * @private
 * @method buildCircle
 * @param graphicsData {Graphics} The graphics object to draw
 * @param webGLData {Object}
 */
PIXI.WebGLGraphics.buildCircle = function(graphicsData, webGLData)
{
    
    // need to convert points to a nice regular data
    var rectData = graphicsData.points;
    var x = rectData[0];
    var y = rectData[1];
    var width = rectData[2];
    var height = rectData[3];

    var totalSegs = 40;
    var seg = (Math.PI * 2) / totalSegs ;

    var i = 0;

    if(graphicsData.fill)
    {
        var color = PIXI.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        indices.push(vecPos);

        for (i = 0; i < totalSegs + 1 ; i++)
        {
            verts.push(x,y, r, g, b, alpha);

            verts.push(x + Math.sin(seg * i) * width,
                       y + Math.cos(seg * i) * height,
                       r, g, b, alpha);

            indices.push(vecPos++, vecPos++);
        }

        indices.push(vecPos-1);
    }

    if(graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = [];

        for (i = 0; i < totalSegs + 1; i++)
        {
            graphicsData.points.push(x + Math.sin(seg * i) * width,
                                     y + Math.cos(seg * i) * height);
        }

        PIXI.WebGLGraphics.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a line to draw
 *
 * @static
 * @private
 * @method buildLine
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {Object}
 */
PIXI.WebGLGraphics.buildLine = function(graphicsData, webGLData)
{
    // TODO OPTIMISE!
    var i = 0;

    var points = graphicsData.points;
    if(points.length === 0)return;

    // if the line width is an odd number add 0.5 to align to a whole pixel
    if(graphicsData.lineWidth%2)
    {
        for (i = 0; i < points.length; i++) {
            points[i] += 0.5;
        }
    }

    // get first and last point.. figure out the middle!
    var firstPoint = new PIXI.Point( points[0], points[1] );
    var lastPoint = new PIXI.Point( points[points.length - 2], points[points.length - 1] );

    // if the first point is the last point - gonna have issues :)
    if(firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y)
    {
        // need to clone as we are going to slightly modify the shape..
        points = points.slice();

        points.pop();
        points.pop();

        lastPoint = new PIXI.Point( points[points.length - 2], points[points.length - 1] );

        var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) *0.5;
        var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) *0.5;

        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }

    var verts = webGLData.points;
    var indices = webGLData.indices;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length/6;

    // DRAW the Line
    var width = graphicsData.lineWidth / 2;

    // sort color
    var color = PIXI.hex2rgb(graphicsData.lineColor);
    var alpha = graphicsData.lineAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var px, py, p1x, p1y, p2x, p2y, p3x, p3y;
    var perpx, perpy, perp2x, perp2y, perp3x, perp3y;
    var a1, b1, c1, a2, b2, c2;
    var denom, pdist, dist;

    p1x = points[0];
    p1y = points[1];

    p2x = points[2];
    p2y = points[3];

    perpx = -(p1y - p2y);
    perpy =  p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);

    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    // start
    verts.push(p1x - perpx , p1y - perpy,
                r, g, b, alpha);

    verts.push(p1x + perpx , p1y + perpy,
                r, g, b, alpha);

    for (i = 1; i < length-1; i++)
    {
        p1x = points[(i-1)*2];
        p1y = points[(i-1)*2 + 1];

        p2x = points[(i)*2];
        p2y = points[(i)*2 + 1];

        p3x = points[(i+1)*2];
        p3y = points[(i+1)*2 + 1];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt(perpx*perpx + perpy*perpy);
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;

        perp2x = -(p2y - p3y);
        perp2y = p2x - p3x;

        dist = Math.sqrt(perp2x*perp2x + perp2y*perp2y);
        perp2x /= dist;
        perp2y /= dist;
        perp2x *= width;
        perp2y *= width;

        a1 = (-perpy + p1y) - (-perpy + p2y);
        b1 = (-perpx + p2x) - (-perpx + p1x);
        c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
        a2 = (-perp2y + p3y) - (-perp2y + p2y);
        b2 = (-perp2x + p2x) - (-perp2x + p3x);
        c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

        denom = a1*b2 - a2*b1;

        if(Math.abs(denom) < 0.1 )
        {

            denom+=10.1;
            verts.push(p2x - perpx , p2y - perpy,
                r, g, b, alpha);

            verts.push(p2x + perpx , p2y + perpy,
                r, g, b, alpha);

            continue;
        }

        px = (b1*c2 - b2*c1)/denom;
        py = (a2*c1 - a1*c2)/denom;


        pdist = (px -p2x) * (px -p2x) + (py -p2y) + (py -p2y);


        if(pdist > 140 * 140)
        {
            perp3x = perpx - perp2x;
            perp3y = perpy - perp2y;

            dist = Math.sqrt(perp3x*perp3x + perp3y*perp3y);
            perp3x /= dist;
            perp3y /= dist;
            perp3x *= width;
            perp3y *= width;

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x + perp3x, p2y +perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            indexCount++;
        }
        else
        {

            verts.push(px , py);
            verts.push(r, g, b, alpha);

            verts.push(p2x - (px-p2x), p2y - (py - p2y));
            verts.push(r, g, b, alpha);
        }
    }

    p1x = points[(length-2)*2];
    p1y = points[(length-2)*2 + 1];

    p2x = points[(length-1)*2];
    p2y = points[(length-1)*2 + 1];

    perpx = -(p1y - p2y);
    perpy = p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    verts.push(p2x - perpx , p2y - perpy);
    verts.push(r, g, b, alpha);

    verts.push(p2x + perpx , p2y + perpy);
    verts.push(r, g, b, alpha);

    indices.push(indexStart);

    for (i = 0; i < indexCount; i++)
    {
        indices.push(indexStart++);
    }

    indices.push(indexStart-1);
};

/**
 * Builds a complex polygon to draw
 *
 * @static
 * @private
 * @method buildPoly
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {Object}
 */
PIXI.WebGLGraphics.buildComplexPoly = function(graphicsData, webGLData)
{

    //TODO - no need to copy this as it gets turned into a FLoat32Array anyways..
    var points = graphicsData.points.slice();
    if(points.length < 6)return;

    // get first and last point.. figure out the middle!
    var indices = webGLData.indices;
    webGLData.points = points;
    webGLData.alpha = graphicsData.fillAlpha;
    webGLData.color = PIXI.hex2rgb(graphicsData.fillColor);

    /*
        calclate the bounds..
    */
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    var x,y;

    // get size..
    for (var i = 0; i < points.length; i+=2)
    {
        x = points[i];
        y = points[i+1];

        minX = x < minX ? x : minX;
        maxX = x > maxX ? x : maxX;

        minY = y < minY ? y : minY;
        maxY = y > maxY ? y : maxY;
    }

    // add a quad to the end cos there is no point making another buffer!
    points.push(minX, minY,
                maxX, minY,
                maxX, maxY,
                minX, maxY);

    // push a quad onto the end.. 
    
    //TODO - this aint needed!
    var length = points.length / 2;
    for (i = 0; i < length; i++)
    {
        indices.push( i );
    }

};

PIXI.WebGLGraphics.buildPoly = function(graphicsData, webGLData)
{
    var points = graphicsData.points;
    if(points.length < 6)return;

    // get first and last point.. figure out the middle!
    var verts = webGLData.points;
    var indices = webGLData.indices;

    var length = points.length / 2;

    // sort color
    var color = PIXI.hex2rgb(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var triangles = PIXI.PolyK.Triangulate(points);
    var vertPos = verts.length / 6;

    var i = 0;

    for (i = 0; i < triangles.length; i+=3)
    {
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i+1] + vertPos);
        indices.push(triangles[i+2] +vertPos);
        indices.push(triangles[i+2] + vertPos);
    }

    for (i = 0; i < length; i++)
    {
        verts.push(points[i * 2], points[i * 2 + 1],
                   r, g, b, alpha);
    }

};

PIXI.WebGLGraphics.graphicsDataPool = [];

PIXI.WebGLGraphicsData = function(gl)
{
    this.gl = gl;

    //TODO does this need to be split before uploding??
    this.color = [0,0,0]; // color split!
    this.points = [];
    this.indices = [];
    this.lastIndex = 0;
    this.buffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();
    this.mode = 1;
    this.alpha = 1;
    this.dirty = true;
};

PIXI.WebGLGraphicsData.prototype.reset = function()
{
    this.points = [];
    this.indices = [];
    this.lastIndex = 0;
};

PIXI.WebGLGraphicsData.prototype.upload = function()
{
    var gl = this.gl;

//    this.lastIndex = graphics.graphicsData.length;
    this.glPoints = new Float32Array(this.points);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.glPoints, gl.STATIC_DRAW);

    this.glIndicies = new Uint16Array(this.indices);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.glIndicies, gl.STATIC_DRAW);

    this.dirty = false;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.glContexts = []; // this is where we store the webGL contexts for easy access.

/**
 * the WebGLRenderer draws the stage and all its content onto a webGL enabled canvas. This renderer
 * should be used for browsers that support webGL. This Render works by automatically managing webGLBatch's.
 * So no need for Sprite Batch's or Sprite Cloud's
 * Dont forget to add the view to your DOM or you will not see anything :)
 *
 * @class WebGLRenderer
 * @constructor
 * @param width=0 {Number} the width of the canvas view
 * @param height=0 {Number} the height of the canvas view
 * @param view {HTMLCanvasElement} the canvas to use as a view, optional
 * @param transparent=false {Boolean} If the render view is transparent, default false
 * @param antialias=false {Boolean} sets antialias (only applicable in chrome at the moment)
 * @param preserveDrawingBuffer=false {Boolean} enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context
 *
 */
PIXI.WebGLRenderer = function(width, height, view, transparent, antialias, preserveDrawingBuffer)
{
    if(!PIXI.defaultRenderer)
    {
        PIXI.sayHello('webGL');
        PIXI.defaultRenderer = this;
    }

    this.type = PIXI.WEBGL_RENDERER;

    // do a catch.. only 1 webGL renderer..
    /**
     * Whether the render view is transparent
     *
     * @property transparent
     * @type Boolean
     */
    this.transparent = !!transparent;

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.
     *
     * @property preserveDrawingBuffer
     * @type Boolean
     */
    this.preserveDrawingBuffer = preserveDrawingBuffer;

    /**
     * The width of the canvas view
     *
     * @property width
     * @type Number
     * @default 800
     */
    this.width = width || 800;

    /**
     * The height of the canvas view
     *
     * @property height
     * @type Number
     * @default 600
     */
    this.height = height || 600;

    /**
     * The canvas element that everything is drawn to
     *
     * @property view
     * @type HTMLCanvasElement
     */
    this.view = view || document.createElement( 'canvas' );
    this.view.width = this.width;
    this.view.height = this.height;

    // deal with losing context..
    this.contextLost = this.handleContextLost.bind(this);
    this.contextRestoredLost = this.handleContextRestored.bind(this);
    
    this.view.addEventListener('webglcontextlost', this.contextLost, false);
    this.view.addEventListener('webglcontextrestored', this.contextRestoredLost, false);

    this.options = {
        alpha: this.transparent,
        antialias:!!antialias, // SPEED UP??
        premultipliedAlpha:!!transparent,
        stencil:true,
        preserveDrawingBuffer: preserveDrawingBuffer
    };

    var gl = null;

    ['experimental-webgl', 'webgl'].forEach(function(name) {
        try {
            gl = gl || this.view.getContext(name,  this.options);
        } catch(e) {}
    }, this);

    if (!gl) {
        // fail, not able to get a context
        throw new Error('This browser does not support webGL. Try using the canvas renderer' + this);
    }

    this.gl = gl;
    this.glContextId = gl.id = PIXI.WebGLRenderer.glContextId ++;

    PIXI.glContexts[this.glContextId] = gl;

    if(!PIXI.blendModesWebGL)
    {
        PIXI.blendModesWebGL = [];

        PIXI.blendModesWebGL[PIXI.blendModes.NORMAL]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.ADD]           = [gl.SRC_ALPHA, gl.DST_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.MULTIPLY]      = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.SCREEN]        = [gl.SRC_ALPHA, gl.ONE];
        PIXI.blendModesWebGL[PIXI.blendModes.OVERLAY]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.DARKEN]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.LIGHTEN]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.COLOR_DODGE]   = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.COLOR_BURN]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.HARD_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.SOFT_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.DIFFERENCE]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.EXCLUSION]     = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.HUE]           = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.SATURATION]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.COLOR]         = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        PIXI.blendModesWebGL[PIXI.blendModes.LUMINOSITY]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    }




    this.projection = new PIXI.Point();
    this.projection.x =  this.width/2;
    this.projection.y =  -this.height/2;

    this.offset = new PIXI.Point(0, 0);

    this.resize(this.width, this.height);
    this.contextLost = false;

    // time to create the render managers! each one focuses on managine a state in webGL
    this.shaderManager = new PIXI.WebGLShaderManager(gl);                   // deals with managing the shader programs and their attribs
    this.spriteBatch = new PIXI.WebGLSpriteBatch(gl);                       // manages the rendering of sprites
    //this.primitiveBatch = new PIXI.WebGLPrimitiveBatch(gl);               // primitive batch renderer
    this.maskManager = new PIXI.WebGLMaskManager(gl);                       // manages the masks using the stencil buffer
    this.filterManager = new PIXI.WebGLFilterManager(gl, this.transparent); // manages the filters
    this.stencilManager = new PIXI.WebGLStencilManager(gl);
    this.blendModeManager = new PIXI.WebGLBlendModeManager(gl);

    this.renderSession = {};
    this.renderSession.gl = this.gl;
    this.renderSession.drawCount = 0;
    this.renderSession.shaderManager = this.shaderManager;
    this.renderSession.maskManager = this.maskManager;
    this.renderSession.filterManager = this.filterManager;
    this.renderSession.blendModeManager = this.blendModeManager;
   // this.renderSession.primitiveBatch = this.primitiveBatch;
    this.renderSession.spriteBatch = this.spriteBatch;
    this.renderSession.stencilManager = this.stencilManager;
    this.renderSession.renderer = this;

    gl.useProgram(this.shaderManager.defaultShader.program);

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);

    gl.enable(gl.BLEND);
    gl.colorMask(true, true, true, this.transparent);
};

// constructor
PIXI.WebGLRenderer.prototype.constructor = PIXI.WebGLRenderer;

/**
 * Renders the stage to its webGL view
 *
 * @method render
 * @param stage {Stage} the Stage element to be rendered
 */
PIXI.WebGLRenderer.prototype.render = function(stage)
{
    if(this.contextLost)return;


    // if rendering a new stage clear the batches..
    if(this.__stage !== stage)
    {
        if(stage.interactive)stage.interactionManager.removeEvents();

        // TODO make this work
        // dont think this is needed any more?
        this.__stage = stage;
    }

    // update any textures this includes uvs and uploading them to the gpu
    PIXI.WebGLRenderer.updateTextures();

    // update the scene graph
    stage.updateTransform();


    // interaction
    if(stage._interactive)
    {
        //need to add some events!
        if(!stage._interactiveEventsAdded)
        {
            stage._interactiveEventsAdded = true;
            stage.interactionManager.setTarget(this);
        }
    }
    
    var gl = this.gl;

    // -- Does this need to be set every frame? -- //
    //gl.colorMask(true, true, true, this.transparent);
    gl.viewport(0, 0, this.width, this.height);

    // make sure we are bound to the main frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    if(this.transparent)
    {
        gl.clearColor(0, 0, 0, 0);
    }
    else
    {
        gl.clearColor(stage.backgroundColorSplit[0],stage.backgroundColorSplit[1],stage.backgroundColorSplit[2], 1);
    }


    gl.clear(gl.COLOR_BUFFER_BIT);

    this.renderDisplayObject( stage, this.projection );

    // interaction
    if(stage.interactive)
    {
        //need to add some events!
        if(!stage._interactiveEventsAdded)
        {
            stage._interactiveEventsAdded = true;
            stage.interactionManager.setTarget(this);
        }
    }
    else
    {
        if(stage._interactiveEventsAdded)
        {
            stage._interactiveEventsAdded = false;
            stage.interactionManager.setTarget(this);
        }
    }

    /*
    //can simulate context loss in Chrome like so:
     this.view.onmousedown = function(ev) {
     console.dir(this.gl.getSupportedExtensions());
        var ext = (
            gl.getExtension("WEBGL_scompressed_texture_s3tc")
       // gl.getExtension("WEBGL_compressed_texture_s3tc") ||
       // gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
       // gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc")
     );
     console.dir(ext);
     var loseCtx = this.gl.getExtension("WEBGL_lose_context");
      console.log("killing context");
      loseCtx.loseContext();
     setTimeout(function() {
          console.log("restoring context...");
          loseCtx.restoreContext();
      }.bind(this), 1000);
     }.bind(this);
     */
};

/**
 * Renders a display Object
 *
 * @method renderDIsplayObject
 * @param displayObject {DisplayObject} The DisplayObject to render
 * @param projection {Point} The projection
 * @param buffer {Array} a standard WebGL buffer 
 */
PIXI.WebGLRenderer.prototype.renderDisplayObject = function(displayObject, projection, buffer)
{
    this.renderSession.blendModeManager.setBlendMode(PIXI.blendModes.NORMAL);
    // reset the render session data..
    this.renderSession.drawCount = 0;
    this.renderSession.currentBlendMode = 9999;

    this.renderSession.projection = projection;
    this.renderSession.offset = this.offset;

    // start the sprite batch
    this.spriteBatch.begin(this.renderSession);

//    this.primitiveBatch.begin(this.renderSession);

    // start the filter manager
    this.filterManager.begin(this.renderSession, buffer);

    // render the scene!
    displayObject._renderWebGL(this.renderSession);

    // finish the sprite batch
    this.spriteBatch.end();

//    this.primitiveBatch.end();
};

/**
 * Updates the textures loaded into this webgl renderer
 *
 * @static
 * @method updateTextures
 * @private
 */
PIXI.WebGLRenderer.updateTextures = function()
{
    var i = 0;

    //TODO break this out into a texture manager...
  //  for (i = 0; i < PIXI.texturesToUpdate.length; i++)
  //      PIXI..updateWebGLTexture(PIXI.texturesToUpdate[i], this.gl);


    for (i=0; i < PIXI.Texture.frameUpdates.length; i++)
        PIXI.WebGLRenderer.updateTextureFrame(PIXI.Texture.frameUpdates[i]);

    for (i = 0; i < PIXI.texturesToDestroy.length; i++)
        PIXI.WebGLRenderer.destroyTexture(PIXI.texturesToDestroy[i]);

    PIXI.texturesToUpdate.length = 0;
    PIXI.texturesToDestroy.length = 0;
    PIXI.Texture.frameUpdates.length = 0;
};

/**
 * Destroys a loaded webgl texture
 *
 * @method destroyTexture
 * @param texture {Texture} The texture to update
 * @private
 */
PIXI.WebGLRenderer.destroyTexture = function(texture)
{
    //TODO break this out into a texture manager...

    for (var i = texture._glTextures.length - 1; i >= 0; i--)
    {
        var glTexture = texture._glTextures[i];
        var gl = PIXI.glContexts[i];

        if(gl && glTexture)
        {
            gl.deleteTexture(glTexture);
        }
    }

    texture._glTextures.length = 0;
};

/**
 *
 * @method updateTextureFrame
 * @param texture {Texture} The texture to update the frame from
 * @private
 */
PIXI.WebGLRenderer.updateTextureFrame = function(texture)
{
    //texture.updateFrame = false;

    // now set the uvs. Figured that the uv data sits with a texture rather than a sprite.
    // so uv data is stored on the texture itself
    texture._updateWebGLuvs();
};

/**
 * resizes the webGL view to the specified width and height
 *
 * @method resize
 * @param width {Number} the new width of the webGL view
 * @param height {Number} the new height of the webGL view
 */
PIXI.WebGLRenderer.prototype.resize = function(width, height)
{
    this.width = width;
    this.height = height;

    this.view.width = width;
    this.view.height = height;

    this.gl.viewport(0, 0, this.width, this.height);

    this.projection.x =  this.width/2;
    this.projection.y =  -this.height/2;
};

/**
 * Creates a WebGL texture
 *
 * @method createWebGLTexture
 * @param texture {Texture} the texture to render
 * @param gl {webglContext} the WebGL context
 * @static
 */
PIXI.createWebGLTexture = function(texture, gl)
{


    if(texture.hasLoaded)
    {
        texture._glTextures[gl.id] = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);

        // reguler...

        if(!texture._powerOf2)
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }

        gl.bindTexture(gl.TEXTURE_2D, null);

        texture._dirty[gl.id] = false;
    }

    return  texture._glTextures[gl.id];
};

/**
 * Updates a WebGL texture
 *
 * @method updateWebGLTexture
 * @param texture {Texture} the texture to update
 * @param gl {webglContext} the WebGL context
 * @private
 */
PIXI.updateWebGLTexture = function(texture, gl)
{
    if( texture._glTextures[gl.id] )
    {
        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);

        // reguler...

        if(!texture._powerOf2)
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }

        texture._dirty[gl.id] = false;
    }
    
};

/**
 * Handles a lost webgl context
 *
 * @method handleContextLost
 * @param event {Event}
 * @private
 */
PIXI.WebGLRenderer.prototype.handleContextLost = function(event)
{
    event.preventDefault();
    this.contextLost = true;
};

/**
 * Handles a restored webgl context
 *
 * @method handleContextRestored
 * @param event {Event}
 * @private
 */
PIXI.WebGLRenderer.prototype.handleContextRestored = function()
{

    //try 'experimental-webgl'
    try {
        this.gl = this.view.getContext('experimental-webgl',  this.options);
    } catch (e) {
        //try 'webgl'
        try {
            this.gl = this.view.getContext('webgl',  this.options);
        } catch (e2) {
            // fail, not able to get a context
            throw new Error(' This browser does not support webGL. Try using the canvas renderer' + this);
        }
    }

    var gl = this.gl;
    gl.id = PIXI.WebGLRenderer.glContextId ++;



    // need to set the context...
    this.shaderManager.setContext(gl);
    this.spriteBatch.setContext(gl);
    this.primitiveBatch.setContext(gl);
    this.maskManager.setContext(gl);
    this.filterManager.setContext(gl);


    this.renderSession.gl = this.gl;

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);

    gl.enable(gl.BLEND);
    gl.colorMask(true, true, true, this.transparent);

    this.gl.viewport(0, 0, this.width, this.height);

    for(var key in PIXI.TextureCache)
    {
        var texture = PIXI.TextureCache[key].baseTexture;
        texture._glTextures = [];
    }

    /**
     * Whether the context was lost 
     * @property contextLost
     * @type Boolean
     */
    this.contextLost = false;

};

/**
 * Removes everything from the renderer (event listeners, spritebatch, etc...)
 *
 * @method destroy
 */
PIXI.WebGLRenderer.prototype.destroy = function()
{

    // deal with losing context..
    
    // remove listeners
    this.view.removeEventListener('webglcontextlost', this.contextLost);
    this.view.removeEventListener('webglcontextrestored', this.contextRestoredLost);

    PIXI.glContexts[this.glContextId] = null;

    this.projection = null;
    this.offset = null;

    // time to create the render managers! each one focuses on managine a state in webGL
    this.shaderManager.destroy();
    this.spriteBatch.destroy();
    this.primitiveBatch.destroy();
    this.maskManager.destroy();
    this.filterManager.destroy();

    this.shaderManager = null;
    this.spriteBatch = null;
    this.maskManager = null;
    this.filterManager = null;
    
    this.gl = null;
    //
    this.renderSession = null;
};


PIXI.WebGLRenderer.glContextId = 0;

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
* @class WebGLMaskManager
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
* @private
*/
PIXI.WebGLBlendModeManager = function(gl)
{
    this.gl = gl;
    this.currentBlendMode = 99999;
};

/**
* Sets-up the given blendMode from WebGL's point of view
* @method setBlendMode 
*
* @param blendMode {Number} the blendMode, should be a Pixi const, such as PIXI.BlendModes.ADD
*/
PIXI.WebGLBlendModeManager.prototype.setBlendMode = function(blendMode)
{
    if(this.currentBlendMode === blendMode)return false;
 //   console.log("SWAP!")
    this.currentBlendMode = blendMode;
    
    var blendModeWebGL = PIXI.blendModesWebGL[this.currentBlendMode];
    this.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
    
    return true;
};

PIXI.WebGLBlendModeManager.prototype.destroy = function()
{
    this.gl = null;
};
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
* @class WebGLMaskManager
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
* @private
*/
PIXI.WebGLMaskManager = function(gl)
{
    this.maskStack = [];
    this.maskPosition = 0;

    this.setContext(gl);

    this.reverse = false;
    this.count = 0;
};

/**
* Sets the drawing context to the one given in parameter
* @method setContext 
* @param gl {WebGLContext} the current WebGL drawing context
*/
PIXI.WebGLMaskManager.prototype.setContext = function(gl)
{
    this.gl = gl;
};

/**
* Applies the Mask and adds it to the current filter stack
* @method pushMask
* @param maskData {Array}
* @param renderSession {RenderSession}
*/
PIXI.WebGLMaskManager.prototype.pushMask = function(maskData, renderSession)
{
    var gl = renderSession.gl;

    if(maskData.dirty)
    {
        PIXI.WebGLGraphics.updateGraphics(maskData, gl);
    }

    if(!maskData._webGL[gl.id].data.length)return;

    renderSession.stencilManager.pushStencil(maskData, maskData._webGL[gl.id].data[0], renderSession);
};

/**
* Removes the last filter from the filter stack and doesn't return it
* @method popMask
*
* @param renderSession {RenderSession} an object containing all the useful parameters
*/
PIXI.WebGLMaskManager.prototype.popMask = function(maskData, renderSession)
{
    var gl = this.gl;
    renderSession.stencilManager.popStencil(maskData, maskData._webGL[gl.id].data[0], renderSession);
};


/**
* Destroys the mask stack
* @method destroy
*/
PIXI.WebGLMaskManager.prototype.destroy = function()
{
    this.maskStack = null;
    this.gl = null;
};
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */
 
//BA0285
//Intercontinental Hotel, 888 Howard Street
//San Francisco

/**
* @class WebGLStencilManager
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
* @private
*/
PIXI.WebGLStencilManager = function(gl)
{
   
    this.stencilStack = [];
    this.setContext(gl);
    this.reverse = true;
    this.count = 0;

};

/**
* Sets the drawing context to the one given in parameter
* @method setContext 
* @param gl {WebGLContext} the current WebGL drawing context
*/
PIXI.WebGLStencilManager.prototype.setContext = function(gl)
{
    this.gl = gl;
};

/**
* Applies the Mask and adds it to the current filter stack
* @method pushMask
* @param maskData {Array}
* @param renderSession {RenderSession}
*/
PIXI.WebGLStencilManager.prototype.pushStencil = function(graphics, webGLData, renderSession)
{
    var gl = this.gl;
    this.bindGraphics(graphics, webGLData, renderSession);

    if(this.stencilStack.length === 0)
    {
        gl.enable(gl.STENCIL_TEST);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        this.reverse = true;
        this.count = 0;
    }

    this.stencilStack.push(webGLData);

    var level = this.count;

    gl.colorMask(false, false, false, false);

    gl.stencilFunc(gl.ALWAYS,0,0xFF);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

    // draw the triangle strip!

    if(webGLData.mode === 1)
    {

        gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );
       
        if(this.reverse)
        {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        // draw a quad to increment..
        gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );
               
        if(this.reverse)
        {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }

        this.reverse = !this.reverse;
    }
    else
    {
        if(!this.reverse)
        {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

        if(!this.reverse)
        {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }
    }

    gl.colorMask(true, true, true, true);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);

    this.count++;
};

//TODO this does not belong here!
PIXI.WebGLStencilManager.prototype.bindGraphics = function(graphics, webGLData, renderSession)
{
    //if(this._currentGraphics === graphics)return;
    this._currentGraphics = graphics;

    var gl = this.gl;

     // bind the graphics object..
    var projection = renderSession.projection,
        offset = renderSession.offset,
        shader;// = renderSession.shaderManager.primitiveShader;

    if(webGLData.mode === 1)
    {
        shader = renderSession.shaderManager.complexPrimativeShader;

        renderSession.shaderManager.setShader( shader );

        gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));

        gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
        gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);

        gl.uniform3fv(shader.tintColor, PIXI.hex2rgb(graphics.tint));
        gl.uniform3fv(shader.color, webGLData.color);

        gl.uniform1f(shader.alpha, graphics.worldAlpha * webGLData.alpha);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 2, 0);


        // now do the rest..
        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
    else
    {
        //renderSession.shaderManager.activatePrimitiveShader();
        shader = renderSession.shaderManager.primitiveShader;
        renderSession.shaderManager.setShader( shader );

        gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));

        gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
        gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);

        gl.uniform3fv(shader.tintColor, PIXI.hex2rgb(graphics.tint));

        gl.uniform1f(shader.alpha, graphics.worldAlpha);
        
        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
        gl.vertexAttribPointer(shader.colorAttribute, 4, gl.FLOAT, false,4 * 6, 2 * 4);

        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
};

PIXI.WebGLStencilManager.prototype.popStencil = function(graphics, webGLData, renderSession)
{
    var gl = this.gl;
    this.stencilStack.pop();
   
    this.count--;

    if(this.stencilStack.length === 0)
    {
        // the stack is empty!
        gl.disable(gl.STENCIL_TEST);

    }
    else
    {

        var level = this.count;

        this.bindGraphics(graphics, webGLData, renderSession);

        gl.colorMask(false, false, false, false);
    
        if(webGLData.mode === 1)
        {
            this.reverse = !this.reverse;

            if(this.reverse)
            {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            // draw a quad to increment..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );
            
            gl.stencilFunc(gl.ALWAYS,0,0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

            // draw the triangle strip!
            gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );
           
            if(!this.reverse)
            {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }

        }
        else
        {
          //  console.log("<<>>")
            if(!this.reverse)
            {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

            if(!this.reverse)
            {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }
        }

        gl.colorMask(true, true, true, true);
        gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);


    }

    //renderSession.shaderManager.deactivatePrimitiveShader();
};

/**
* Destroys the mask stack
* @method destroy
*/
PIXI.WebGLStencilManager.prototype.destroy = function()
{
    this.maskStack = null;
    this.gl = null;
};
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
* @class WebGLShaderManager
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
* @private
*/
PIXI.WebGLShaderManager = function(gl)
{

    this.maxAttibs = 10;
    this.attribState = [];
    this.tempAttribState = [];
    this.shaderMap = [];

    for (var i = 0; i < this.maxAttibs; i++) {
        this.attribState[i] = false;
    }

    this.setContext(gl);
    // the final one is used for the rendering strips
};


/**
* Initialises the context and the properties
* @method setContext 
* @param gl {WebGLContext} the current WebGL drawing context
* @param transparent {Boolean} Whether or not the drawing context should be transparent
*/
PIXI.WebGLShaderManager.prototype.setContext = function(gl)
{
    this.gl = gl;
    
    // the next one is used for rendering primatives
    this.primitiveShader = new PIXI.PrimitiveShader(gl);

    // the next one is used for rendering triangle strips
    this.complexPrimativeShader = new PIXI.ComplexPrimitiveShader(gl);

    // this shader is used for the default sprite rendering
    this.defaultShader = new PIXI.PixiShader(gl);

    // this shader is used for the fast sprite rendering
    this.fastShader = new PIXI.PixiFastShader(gl);

    // the next one is used for rendering triangle strips
    this.stripShader = new PIXI.StripShader(gl);
    this.setShader(this.defaultShader);
};


/**
* Takes the attributes given in parameters 
* @method setAttribs
* @param attribs {Array} attribs 
*/
PIXI.WebGLShaderManager.prototype.setAttribs = function(attribs)
{
    // reset temp state

    var i;

    for (i = 0; i < this.tempAttribState.length; i++)
    {
        this.tempAttribState[i] = false;
    }

    // set the new attribs
    for (i = 0; i < attribs.length; i++)
    {
        var attribId = attribs[i];
        this.tempAttribState[attribId] = true;
    }

    var gl = this.gl;

    for (i = 0; i < this.attribState.length; i++)
    {
        if(this.attribState[i] !== this.tempAttribState[i])
        {
            this.attribState[i] = this.tempAttribState[i];

            if(this.tempAttribState[i])
            {
                gl.enableVertexAttribArray(i);
            }
            else
            {
                gl.disableVertexAttribArray(i);
            }
        }
    }
};

PIXI.WebGLShaderManager.prototype.setShader = function(shader)
{
    if(this._currentId === shader._UID)return false;
    
    this._currentId = shader._UID;

    this.currentShader = shader;

    this.gl.useProgram(shader.program);
    this.setAttribs(shader.attributes);

    return true;
};

/**
* Destroys
* @method destroy
*/
PIXI.WebGLShaderManager.prototype.destroy = function()
{
    this.attribState = null;

    this.tempAttribState = null;

    this.primitiveShader.destroy();

    this.defaultShader.destroy();

    this.fastShader.destroy();

    this.stripShader.destroy();

    this.gl = null;
};


/**
 * @author Mat Groves
 * 
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 *
 * Heavily inspired by LibGDX's WebGLSpriteBatch:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/WebGLSpriteBatch.java
 */

 /**
 *
 * @class WebGLSpriteBatch
 * @private
 * @constructor
 * @param gl {WebGLContext} the current WebGL drawing context
 *
 */
PIXI.WebGLSpriteBatch = function(gl)
{

    /**
     * 
     *
     * @property vertSize
     * @type Number
     */
    this.vertSize = 6;

    /**
     * The number of images in the SpriteBatch before it flushes
     * @property size
     * @type Number
     */
    this.size = 2000;//Math.pow(2, 16) /  this.vertSize;

    //the total number of floats in our batch
    var numVerts = this.size * 4 *  this.vertSize;
    //the total number of indices in our batch
    var numIndices = this.size * 6;

    //vertex data

    /**
    * Holds the vertices
    *
    * @property vertices
    * @type Float32Array
    */
    this.vertices = new Float32Array(numVerts);

    //index data
    /**
     * Holds the indices
     *
     * @property indices
     * @type Uint16Array
     */
    this.indices = new Uint16Array(numIndices);
    
    this.lastIndexCount = 0;

    for (var i=0, j=0; i < numIndices; i += 6, j += 4)
    {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }


    this.drawing = false;
    this.currentBatchSize = 0;
    this.currentBaseTexture = null;
    
    this.setContext(gl);

    this.dirty = true;

    this.textures = [];
    this.blendModes = [];
};

/**
* 
* @method setContext
*
* @param gl {WebGLContext} the current WebGL drawing context
*/
PIXI.WebGLSpriteBatch.prototype.setContext = function(gl)
{
    this.gl = gl;

    // create a couple of buffers
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.


    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

    this.currentBlendMode = 99999;
};

/**
* 
* @method begin
*
* @param renderSession {RenderSession} the RenderSession
*/
PIXI.WebGLSpriteBatch.prototype.begin = function(renderSession)
{
    this.renderSession = renderSession;
    this.shader = this.renderSession.shaderManager.defaultShader;

    this.start();
};

/**
* 
* @method end
*
*/
PIXI.WebGLSpriteBatch.prototype.end = function()
{
    this.flush();
};

/**
* 
* @method render
* 
* @param sprite {Sprite} the sprite to render when using this spritebatch
*/
PIXI.WebGLSpriteBatch.prototype.render = function(sprite)
{
    var texture = sprite.texture;
    
   //TODO set blend modes.. 
    // check texture..
    if(this.currentBatchSize >= this.size)
    {
        //return;
        this.flush();
        this.currentBaseTexture = texture.baseTexture;
    }

    // get the uvs for the texture
    var uvs = texture._uvs;
    // if the uvs have not updated then no point rendering just yet!
    if(!uvs)return;

    // get the sprites current alpha
    var alpha = sprite.worldAlpha;
    var tint = sprite.tint;

    var verticies = this.vertices;


    // TODO trim??
    var aX = sprite.anchor.x;
    var aY = sprite.anchor.y;

    var w0, w1, h0, h1;
        
    if (texture.trim)
    {
        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
        var trim = texture.trim;

        w1 = trim.x - aX * trim.width;
        w0 = w1 + texture.crop.width;

        h1 = trim.y - aY * trim.height;
        h0 = h1 + texture.crop.height;

    }
    else
    {
        w0 = (texture.frame.width ) * (1-aX);
        w1 = (texture.frame.width ) * -aX;

        h0 = texture.frame.height * (1-aY);
        h1 = texture.frame.height * -aY;
    }

    var index = this.currentBatchSize * 4 * this.vertSize;

    var worldTransform = sprite.worldTransform;

    var a = worldTransform.a;//[0];
    var b = worldTransform.c;//[3];
    var c = worldTransform.b;//[1];
    var d = worldTransform.d;//[4];
    var tx = worldTransform.tx;//[2];
    var ty = worldTransform.ty;///[5];

    // xy
    verticies[index++] = a * w1 + c * h1 + tx;
    verticies[index++] = d * h1 + b * w1 + ty;
    // uv
    verticies[index++] = uvs.x0;
    verticies[index++] = uvs.y0;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;

    // xy
    verticies[index++] = a * w0 + c * h1 + tx;
    verticies[index++] = d * h1 + b * w0 + ty;
    // uv
    verticies[index++] = uvs.x1;
    verticies[index++] = uvs.y1;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;

    // xy
    verticies[index++] = a * w0 + c * h0 + tx;
    verticies[index++] = d * h0 + b * w0 + ty;
    // uv
    verticies[index++] = uvs.x2;
    verticies[index++] = uvs.y2;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;

    // xy
    verticies[index++] = a * w1 + c * h0 + tx;
    verticies[index++] = d * h0 + b * w1 + ty;
    // uv
    verticies[index++] = uvs.x3;
    verticies[index++] = uvs.y3;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;
    
    // increment the batchsize
    this.textures[this.currentBatchSize] = sprite.texture.baseTexture;
    this.blendModes[this.currentBatchSize] = sprite.blendMode;

    this.currentBatchSize++;

};

/**
* Renders a tilingSprite using the spriteBatch
* @method renderTilingSprite
* 
* @param sprite {TilingSprite} the tilingSprite to render
*/
PIXI.WebGLSpriteBatch.prototype.renderTilingSprite = function(tilingSprite)
{
    var texture = tilingSprite.tilingTexture;

    
    // check texture..
    if(this.currentBatchSize >= this.size)
    {
        //return;
        this.flush();
        this.currentBaseTexture = texture.baseTexture;
    }

     // set the textures uvs temporarily
    // TODO create a separate texture so that we can tile part of a texture

    if(!tilingSprite._uvs)tilingSprite._uvs = new PIXI.TextureUvs();

    var uvs = tilingSprite._uvs;

    tilingSprite.tilePosition.x %= texture.baseTexture.width * tilingSprite.tileScaleOffset.x;
    tilingSprite.tilePosition.y %= texture.baseTexture.height * tilingSprite.tileScaleOffset.y;

    var offsetX =  tilingSprite.tilePosition.x/(texture.baseTexture.width*tilingSprite.tileScaleOffset.x);
    var offsetY =  tilingSprite.tilePosition.y/(texture.baseTexture.height*tilingSprite.tileScaleOffset.y);

    var scaleX =  (tilingSprite.width / texture.baseTexture.width)  / (tilingSprite.tileScale.x * tilingSprite.tileScaleOffset.x);
    var scaleY =  (tilingSprite.height / texture.baseTexture.height) / (tilingSprite.tileScale.y * tilingSprite.tileScaleOffset.y);

    uvs.x0 = 0 - offsetX;
    uvs.y0 = 0 - offsetY;

    uvs.x1 = (1 * scaleX) - offsetX;
    uvs.y1 = 0 - offsetY;

    uvs.x2 = (1 * scaleX) - offsetX;
    uvs.y2 = (1 * scaleY) - offsetY;

    uvs.x3 = 0 - offsetX;
    uvs.y3 = (1 *scaleY) - offsetY;

    // get the tilingSprites current alpha
    var alpha = tilingSprite.worldAlpha;
    var tint = tilingSprite.tint;

    var  verticies = this.vertices;

    var width = tilingSprite.width;
    var height = tilingSprite.height;

    // TODO trim??
    var aX = tilingSprite.anchor.x;
    var aY = tilingSprite.anchor.y;
    var w0 = width * (1-aX);
    var w1 = width * -aX;

    var h0 = height * (1-aY);
    var h1 = height * -aY;

    var index = this.currentBatchSize * 4 * this.vertSize;

    var worldTransform = tilingSprite.worldTransform;

    var a = worldTransform.a;//[0];
    var b = worldTransform.c;//[3];
    var c = worldTransform.b;//[1];
    var d = worldTransform.d;//[4];
    var tx = worldTransform.tx;//[2];
    var ty = worldTransform.ty;///[5];

    // xy
    verticies[index++] = a * w1 + c * h1 + tx;
    verticies[index++] = d * h1 + b * w1 + ty;
    // uv
    verticies[index++] = uvs.x0;
    verticies[index++] = uvs.y0;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;

    // xy
    verticies[index++] = (a * w0 + c * h1 + tx);
    verticies[index++] = d * h1 + b * w0 + ty;
    // uv
    verticies[index++] = uvs.x1;
    verticies[index++] = uvs.y1;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;
    
    // xy
    verticies[index++] = a * w0 + c * h0 + tx;
    verticies[index++] = d * h0 + b * w0 + ty;
    // uv
    verticies[index++] = uvs.x2;
    verticies[index++] = uvs.y2;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;

    // xy
    verticies[index++] = a * w1 + c * h0 + tx;
    verticies[index++] = d * h0 + b * w1 + ty;
    // uv
    verticies[index++] = uvs.x3;
    verticies[index++] = uvs.y3;
    // color
    verticies[index++] = alpha;
    verticies[index++] = tint;

    // increment the batchs
    this.textures[this.currentBatchSize] = texture.baseTexture;
    this.blendModes[this.currentBatchSize] = tilingSprite.blendMode;
    this.currentBatchSize++;
};


/**
* Renders the content and empties the current batch
*
* @method flush
* 
*/
PIXI.WebGLSpriteBatch.prototype.flush = function()
{
    // If the batch is length 0 then return as there is nothing to draw
    if (this.currentBatchSize===0)return;

    var gl = this.gl;

    this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader);

    if(this.dirty)
    {
        this.dirty = false;
        // bind the main texture
        gl.activeTexture(gl.TEXTURE0);

        // bind the buffers
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        // set the projection
        var projection = this.renderSession.projection;
        gl.uniform2f(this.shader.projectionVector, projection.x, projection.y);

        // set the pointers
        var stride =  this.vertSize * 4;
        gl.vertexAttribPointer(this.shader.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
        gl.vertexAttribPointer(this.shader.aTextureCoord, 2, gl.FLOAT, false, stride, 2 * 4);
        gl.vertexAttribPointer(this.shader.colorAttribute, 2, gl.FLOAT, false, stride, 4 * 4);

    }

    // upload the verts to the buffer  
    if(this.currentBatchSize > ( this.size * 0.5 ) )
    {
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    }
    else
    {
        var view = this.vertices.subarray(0, this.currentBatchSize * 4 * this.vertSize);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }

    var nextTexture, nextBlendMode;
    var batchSize = 0;
    var start = 0;

    var currentBaseTexture = null;
    var currentBlendMode = this.renderSession.blendModeManager.currentBlendMode;

    for (var i = 0, j = this.currentBatchSize; i < j; i++) {
        
        nextTexture = this.textures[i];
        nextBlendMode = this.blendModes[i];

        if(currentBaseTexture !== nextTexture || currentBlendMode !== nextBlendMode)
        {
            this.renderBatch(currentBaseTexture, batchSize, start);

            start = i;
            batchSize = 0;
            currentBaseTexture = nextTexture;
            currentBlendMode = nextBlendMode;
            
            this.renderSession.blendModeManager.setBlendMode( currentBlendMode );
        }

        batchSize++;
    }

    this.renderBatch(currentBaseTexture, batchSize, start);

    // then reset the batch!
    this.currentBatchSize = 0;
};

PIXI.WebGLSpriteBatch.prototype.renderBatch = function(texture, size, startIndex)
{
    if(size === 0)return;

    var gl = this.gl;
    // bind the current texture
    gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id] || PIXI.createWebGLTexture(texture, gl));

    // check if a texture is dirty..
    if(texture._dirty[gl.id])
    {
        PIXI.updateWebGLTexture(this.currentBaseTexture, gl);
    }

    // now draw those suckas!
    gl.drawElements(gl.TRIANGLES, size * 6, gl.UNSIGNED_SHORT, startIndex * 6 * 2);
    
    // increment the draw count
    this.renderSession.drawCount++;
};

/**
* 
* @method stop
*
*/
PIXI.WebGLSpriteBatch.prototype.stop = function()
{
    this.flush();
};

/**
* 
* @method start
*
*/
PIXI.WebGLSpriteBatch.prototype.start = function()
{
    this.dirty = true;
};

/**
* Destroys the SpriteBatch
* @method destroy
*/
PIXI.WebGLSpriteBatch.prototype.destroy = function()
{

    this.vertices = null;
    this.indices = null;
    
    this.gl.deleteBuffer( this.vertexBuffer );
    this.gl.deleteBuffer( this.indexBuffer );
    
    this.currentBaseTexture = null;
    
    this.gl = null;
};


/**
 * @author Mat Groves
 * 
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 *
 * Heavily inspired by LibGDX's WebGLSpriteBatch:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/WebGLSpriteBatch.java
 */

PIXI.WebGLFastSpriteBatch = function(gl)
{
   

    this.vertSize = 10;
    this.maxSize = 6000;//Math.pow(2, 16) /  this.vertSize;
    this.size = this.maxSize;

    //the total number of floats in our batch
    var numVerts = this.size * 4 *  this.vertSize;
    //the total number of indices in our batch
    var numIndices = this.maxSize * 6;

     //vertex data
    this.vertices = new Float32Array(numVerts);
    //index data
    this.indices = new Uint16Array(numIndices);
    
    this.vertexBuffer = null;
    this.indexBuffer = null;

    this.lastIndexCount = 0;

    for (var i=0, j=0; i < numIndices; i += 6, j += 4)
    {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }

    this.drawing = false;
    this.currentBatchSize = 0;
    this.currentBaseTexture = null;
   
    this.currentBlendMode = 0;
    this.renderSession = null;
    

    this.shader = null;

    this.matrix = null;

    this.setContext(gl);
};

PIXI.WebGLFastSpriteBatch.prototype.setContext = function(gl)
{
    this.gl = gl;

    // create a couple of buffers
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.


    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
};

PIXI.WebGLFastSpriteBatch.prototype.begin = function(spriteBatch, renderSession)
{
    this.renderSession = renderSession;
    this.shader = this.renderSession.shaderManager.fastShader;

    this.matrix = spriteBatch.worldTransform.toArray(true);

    this.start();
};

PIXI.WebGLFastSpriteBatch.prototype.end = function()
{
    this.flush();
};


PIXI.WebGLFastSpriteBatch.prototype.render = function(spriteBatch)
{

    var children = spriteBatch.children;
    var sprite = children[0];

    // if the uvs have not updated then no point rendering just yet!
    
    // check texture.
    if(!sprite.texture._uvs)return;
   
    this.currentBaseTexture = sprite.texture.baseTexture;
    
    // check blend mode
    if(sprite.blendMode !== this.renderSession.blendModeManager.currentBlendMode)
    {
        this.flush();
        this.renderSession.blendModeManager.setBlendMode(sprite.blendMode);
    }
    
    for(var i=0,j= children.length; i<j; i++)
    {
        this.renderSprite(children[i]);
    }

    this.flush();
};

PIXI.WebGLFastSpriteBatch.prototype.renderSprite = function(sprite)
{
    //sprite = children[i];
    if(!sprite.visible)return;
    
    // TODO trim??
    if(sprite.texture.baseTexture !== this.currentBaseTexture)
    {
        this.flush();
        this.currentBaseTexture = sprite.texture.baseTexture;
        
        if(!sprite.texture._uvs)return;
    }

    var uvs, verticies = this.vertices, width, height, w0, w1, h0, h1, index;

    uvs = sprite.texture._uvs;


    width = sprite.texture.frame.width;
    height = sprite.texture.frame.height;

    if (sprite.texture.trim)
    {
        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
        var trim = sprite.texture.trim;

        w1 = trim.x - sprite.anchor.x * trim.width;
        w0 = w1 + sprite.texture.crop.width;

        h1 = trim.y - sprite.anchor.y * trim.height;
        h0 = h1 + sprite.texture.crop.height;
    }
    else
    {
        w0 = (sprite.texture.frame.width ) * (1-sprite.anchor.x);
        w1 = (sprite.texture.frame.width ) * -sprite.anchor.x;

        h0 = sprite.texture.frame.height * (1-sprite.anchor.y);
        h1 = sprite.texture.frame.height * -sprite.anchor.y;
    }

    index = this.currentBatchSize * 4 * this.vertSize;

    // xy
    verticies[index++] = w1;
    verticies[index++] = h1;

    verticies[index++] = sprite.position.x;
    verticies[index++] = sprite.position.y;

    //scale
    verticies[index++] = sprite.scale.x;
    verticies[index++] = sprite.scale.y;

    //rotation
    verticies[index++] = sprite.rotation;

    // uv
    verticies[index++] = uvs.x0;
    verticies[index++] = uvs.y1;
    // color
    verticies[index++] = sprite.alpha;
 

    // xy
    verticies[index++] = w0;
    verticies[index++] = h1;

    verticies[index++] = sprite.position.x;
    verticies[index++] = sprite.position.y;

    //scale
    verticies[index++] = sprite.scale.x;
    verticies[index++] = sprite.scale.y;

     //rotation
    verticies[index++] = sprite.rotation;

    // uv
    verticies[index++] = uvs.x1;
    verticies[index++] = uvs.y1;
    // color
    verticies[index++] = sprite.alpha;
  

    // xy
    verticies[index++] = w0;
    verticies[index++] = h0;

    verticies[index++] = sprite.position.x;
    verticies[index++] = sprite.position.y;

    //scale
    verticies[index++] = sprite.scale.x;
    verticies[index++] = sprite.scale.y;

     //rotation
    verticies[index++] = sprite.rotation;

    // uv
    verticies[index++] = uvs.x2;
    verticies[index++] = uvs.y2;
    // color
    verticies[index++] = sprite.alpha;
 



    // xy
    verticies[index++] = w1;
    verticies[index++] = h0;

    verticies[index++] = sprite.position.x;
    verticies[index++] = sprite.position.y;

    //scale
    verticies[index++] = sprite.scale.x;
    verticies[index++] = sprite.scale.y;

     //rotation
    verticies[index++] = sprite.rotation;

    // uv
    verticies[index++] = uvs.x3;
    verticies[index++] = uvs.y3;
    // color
    verticies[index++] = sprite.alpha;

    // increment the batchs
    this.currentBatchSize++;

    if(this.currentBatchSize >= this.size)
    {
        this.flush();
    }
};

PIXI.WebGLFastSpriteBatch.prototype.flush = function()
{

    // If the batch is length 0 then return as there is nothing to draw
    if (this.currentBatchSize===0)return;

    var gl = this.gl;
    
    // bind the current texture

    if(!this.currentBaseTexture._glTextures[gl.id])PIXI.createWebGLTexture(this.currentBaseTexture, gl);

    gl.bindTexture(gl.TEXTURE_2D, this.currentBaseTexture._glTextures[gl.id]);

    // upload the verts to the buffer

   
    if(this.currentBatchSize > ( this.size * 0.5 ) )
    {
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    }
    else
    {
        var view = this.vertices.subarray(0, this.currentBatchSize * 4 * this.vertSize);

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }
    
    
    // now draw those suckas!
    gl.drawElements(gl.TRIANGLES, this.currentBatchSize * 6, gl.UNSIGNED_SHORT, 0);
   
    // then reset the batch!
    this.currentBatchSize = 0;

    // increment the draw count
    this.renderSession.drawCount++;
};


PIXI.WebGLFastSpriteBatch.prototype.stop = function()
{
    this.flush();
};

PIXI.WebGLFastSpriteBatch.prototype.start = function()
{
    var gl = this.gl;

    // bind the main texture
    gl.activeTexture(gl.TEXTURE0);

    // bind the buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    // set the projection
    var projection = this.renderSession.projection;
    gl.uniform2f(this.shader.projectionVector, projection.x, projection.y);

    // set the matrix
    gl.uniformMatrix3fv(this.shader.uMatrix, false, this.matrix);

    // set the pointers
    var stride =  this.vertSize * 4;

    gl.vertexAttribPointer(this.shader.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
    gl.vertexAttribPointer(this.shader.aPositionCoord, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.vertexAttribPointer(this.shader.aScale, 2, gl.FLOAT, false, stride, 4 * 4);
    gl.vertexAttribPointer(this.shader.aRotation, 1, gl.FLOAT, false, stride, 6 * 4);
    gl.vertexAttribPointer(this.shader.aTextureCoord, 2, gl.FLOAT, false, stride, 7 * 4);
    gl.vertexAttribPointer(this.shader.colorAttribute, 1, gl.FLOAT, false, stride, 9 * 4);

    
};



/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
* @class WebGLFilterManager
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
* @param transparent {Boolean} Whether or not the drawing context should be transparent
* @private
*/
PIXI.WebGLFilterManager = function(gl, transparent)
{
    this.transparent = transparent;

    this.filterStack = [];
    
    this.offsetX = 0;
    this.offsetY = 0;

    this.setContext(gl);
};

// API
/**
* Initialises the context and the properties
* @method setContext 
* @param gl {WebGLContext} the current WebGL drawing context
*/
PIXI.WebGLFilterManager.prototype.setContext = function(gl)
{
    this.gl = gl;
    this.texturePool = [];

    this.initShaderBuffers();
};

/**
* 
* @method begin
* @param renderSession {RenderSession} 
* @param buffer {ArrayBuffer} 
*/
PIXI.WebGLFilterManager.prototype.begin = function(renderSession, buffer)
{
    this.renderSession = renderSession;
    this.defaultShader = renderSession.shaderManager.defaultShader;

    var projection = this.renderSession.projection;
   // console.log(this.width)
    this.width = projection.x * 2;
    this.height = -projection.y * 2;
    this.buffer = buffer;
};

/**
* Applies the filter and adds it to the current filter stack
* @method pushFilter
* @param filterBlock {Object} the filter that will be pushed to the current filter stack
*/
PIXI.WebGLFilterManager.prototype.pushFilter = function(filterBlock)
{
    var gl = this.gl;

    var projection = this.renderSession.projection;
    var offset = this.renderSession.offset;

    filterBlock._filterArea = filterBlock.target.filterArea || filterBlock.target.getBounds();


    // filter program
    // OPTIMISATION - the first filter is free if its a simple color change?
    this.filterStack.push(filterBlock);

    var filter = filterBlock.filterPasses[0];

    this.offsetX += filterBlock._filterArea.x;
    this.offsetY += filterBlock._filterArea.y;

    var texture = this.texturePool.pop();
    if(!texture)
    {
        texture = new PIXI.FilterTexture(this.gl, this.width, this.height);
    }
    else
    {
        texture.resize(this.width, this.height);
    }

    gl.bindTexture(gl.TEXTURE_2D,  texture.texture);

    var filterArea = filterBlock._filterArea;// filterBlock.target.getBounds();///filterBlock.target.filterArea;

    var padding = filter.padding;
    filterArea.x -= padding;
    filterArea.y -= padding;
    filterArea.width += padding * 2;
    filterArea.height += padding * 2;

    // cap filter to screen size..
    if(filterArea.x < 0)filterArea.x = 0;
    if(filterArea.width > this.width)filterArea.width = this.width;
    if(filterArea.y < 0)filterArea.y = 0;
    if(filterArea.height > this.height)filterArea.height = this.height;

    //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  filterArea.width, filterArea.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, texture.frameBuffer);

    // set view port
    gl.viewport(0, 0, filterArea.width, filterArea.height);

    projection.x = filterArea.width/2;
    projection.y = -filterArea.height/2;

    offset.x = -filterArea.x;
    offset.y = -filterArea.y;

    // update projection
    // now restore the regular shader..
    this.renderSession.shaderManager.setShader(this.defaultShader);
    gl.uniform2f(this.defaultShader.projectionVector, filterArea.width/2, -filterArea.height/2);
    gl.uniform2f(this.defaultShader.offsetVector, -filterArea.x, -filterArea.y);

    gl.colorMask(true, true, true, true);
    gl.clearColor(0,0,0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    filterBlock._glFilterTexture = texture;

};


/**
* Removes the last filter from the filter stack and doesn't return it
* @method popFilter
*/
PIXI.WebGLFilterManager.prototype.popFilter = function()
{
    var gl = this.gl;
    var filterBlock = this.filterStack.pop();
    var filterArea = filterBlock._filterArea;
    var texture = filterBlock._glFilterTexture;
    var projection = this.renderSession.projection;
    var offset = this.renderSession.offset;

    if(filterBlock.filterPasses.length > 1)
    {
        gl.viewport(0, 0, filterArea.width, filterArea.height);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

        this.vertexArray[0] = 0;
        this.vertexArray[1] = filterArea.height;

        this.vertexArray[2] = filterArea.width;
        this.vertexArray[3] = filterArea.height;

        this.vertexArray[4] = 0;
        this.vertexArray[5] = 0;

        this.vertexArray[6] = filterArea.width;
        this.vertexArray[7] = 0;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
        // now set the uvs..
        this.uvArray[2] = filterArea.width/this.width;
        this.uvArray[5] = filterArea.height/this.height;
        this.uvArray[6] = filterArea.width/this.width;
        this.uvArray[7] = filterArea.height/this.height;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);

        var inputTexture = texture;
        var outputTexture = this.texturePool.pop();
        if(!outputTexture)outputTexture = new PIXI.FilterTexture(this.gl, this.width, this.height);
        outputTexture.resize(this.width, this.height);

        // need to clear this FBO as it may have some left over elements from a previous filter.
        gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer );
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.disable(gl.BLEND);

        for (var i = 0; i < filterBlock.filterPasses.length-1; i++)
        {
            var filterPass = filterBlock.filterPasses[i];

            gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer );

            // set texture
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, inputTexture.texture);

            // draw texture..
            //filterPass.applyFilterPass(filterArea.width, filterArea.height);
            this.applyFilterPass(filterPass, filterArea, filterArea.width, filterArea.height);

            // swap the textures..
            var temp = inputTexture;
            inputTexture = outputTexture;
            outputTexture = temp;
        }

        gl.enable(gl.BLEND);

        texture = inputTexture;
        this.texturePool.push(outputTexture);
    }

    var filter = filterBlock.filterPasses[filterBlock.filterPasses.length-1];

    this.offsetX -= filterArea.x;
    this.offsetY -= filterArea.y;


    var sizeX = this.width;
    var sizeY = this.height;

    var offsetX = 0;
    var offsetY = 0;

    var buffer = this.buffer;

    // time to render the filters texture to the previous scene
    if(this.filterStack.length === 0)
    {
        gl.colorMask(true, true, true, true);//this.transparent);
    }
    else
    {
        var currentFilter = this.filterStack[this.filterStack.length-1];
        filterArea = currentFilter._filterArea;

        sizeX = filterArea.width;
        sizeY = filterArea.height;

        offsetX = filterArea.x;
        offsetY = filterArea.y;

        buffer =  currentFilter._glFilterTexture.frameBuffer;
    }



    // TODO need toremove thease global elements..
    projection.x = sizeX/2;
    projection.y = -sizeY/2;

    offset.x = offsetX;
    offset.y = offsetY;

    filterArea = filterBlock._filterArea;

    var x = filterArea.x-offsetX;
    var y = filterArea.y-offsetY;

    // update the buffers..
    // make sure to flip the y!
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

    this.vertexArray[0] = x;
    this.vertexArray[1] = y + filterArea.height;

    this.vertexArray[2] = x + filterArea.width;
    this.vertexArray[3] = y + filterArea.height;

    this.vertexArray[4] = x;
    this.vertexArray[5] = y;

    this.vertexArray[6] = x + filterArea.width;
    this.vertexArray[7] = y;

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);

    this.uvArray[2] = filterArea.width/this.width;
    this.uvArray[5] = filterArea.height/this.height;
    this.uvArray[6] = filterArea.width/this.width;
    this.uvArray[7] = filterArea.height/this.height;

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);

   //console.log(this.vertexArray)
   //console.log(this.uvArray)
    //console.log(sizeX + " : " + sizeY)

    gl.viewport(0, 0, sizeX, sizeY);

    // bind the buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer );

    // set the blend mode! 
    //gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

    // set texture
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture.texture);

    // apply!
    this.applyFilterPass(filter, filterArea, sizeX, sizeY);

    // now restore the regular shader..
    this.renderSession.shaderManager.setShader(this.defaultShader);
    gl.uniform2f(this.defaultShader.projectionVector, sizeX/2, -sizeY/2);
    gl.uniform2f(this.defaultShader.offsetVector, -offsetX, -offsetY);

    // return the texture to the pool
    this.texturePool.push(texture);
    filterBlock._glFilterTexture = null;
};


/**
* Applies the filter to the specified area
* @method applyFilterPass
* @param filter {AbstractFilter} the filter that needs to be applied
* @param filterArea {texture} TODO - might need an update
* @param width {Number} the horizontal range of the filter
* @param height {Number} the vertical range of the filter
*/
PIXI.WebGLFilterManager.prototype.applyFilterPass = function(filter, filterArea, width, height)
{
    // use program
    var gl = this.gl;
    var shader = filter.shaders[gl.id];

    if(!shader)
    {
        shader = new PIXI.PixiShader(gl);

        shader.fragmentSrc = filter.fragmentSrc;
        shader.uniforms = filter.uniforms;
        shader.init();

        filter.shaders[gl.id] = shader;
    }

    // set the shader
    this.renderSession.shaderManager.setShader(shader);

//    gl.useProgram(shader.program);

    gl.uniform2f(shader.projectionVector, width/2, -height/2);
    gl.uniform2f(shader.offsetVector, 0,0);

    if(filter.uniforms.dimensions)
    {
        filter.uniforms.dimensions.value[0] = this.width;//width;
        filter.uniforms.dimensions.value[1] = this.height;//height;
        filter.uniforms.dimensions.value[2] = this.vertexArray[0];
        filter.uniforms.dimensions.value[3] = this.vertexArray[5];//filterArea.height;
    }

  //  console.log(this.uvArray )
    shader.syncUniforms();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
    gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    gl.vertexAttribPointer(shader.colorAttribute, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    // draw the filter...
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

    this.renderSession.drawCount++;
};

/**
* Initialises the shader buffers
* @method initShaderBuffers
*/
PIXI.WebGLFilterManager.prototype.initShaderBuffers = function()
{
    var gl = this.gl;

    // create some buffers
    this.vertexBuffer = gl.createBuffer();
    this.uvBuffer = gl.createBuffer();
    this.colorBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();


    // bind and upload the vertexs..
    // keep a reference to the vertexFloatData..
    this.vertexArray = new Float32Array([0.0, 0.0,
                                         1.0, 0.0,
                                         0.0, 1.0,
                                         1.0, 1.0]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(
    gl.ARRAY_BUFFER,
    this.vertexArray,
    gl.STATIC_DRAW);


    // bind and upload the uv buffer
    this.uvArray = new Float32Array([0.0, 0.0,
                                     1.0, 0.0,
                                     0.0, 1.0,
                                     1.0, 1.0]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
    gl.bufferData(
    gl.ARRAY_BUFFER,
    this.uvArray,
    gl.STATIC_DRAW);

    this.colorArray = new Float32Array([1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    gl.bufferData(
    gl.ARRAY_BUFFER,
    this.colorArray,
    gl.STATIC_DRAW);

    // bind and upload the index
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array([0, 1, 2, 1, 3, 2]),
    gl.STATIC_DRAW);
};

/**
* Destroys the filter and removes it from the filter stack
* @method destroy
*/
PIXI.WebGLFilterManager.prototype.destroy = function()
{
    var gl = this.gl;

    this.filterStack = null;
    
    this.offsetX = 0;
    this.offsetY = 0;

    // destroy textures
    for (var i = 0; i < this.texturePool.length; i++) {
        this.texturePool[i].destroy();
    }
    
    this.texturePool = null;

    //destroy buffers..
    gl.deleteBuffer(this.vertexBuffer);
    gl.deleteBuffer(this.uvBuffer);
    gl.deleteBuffer(this.colorBuffer);
    gl.deleteBuffer(this.indexBuffer);
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
* @class FilterTexture
* @constructor
* @param gl {WebGLContext} the current WebGL drawing context
* @param width {Number} the horizontal range of the filter
* @param height {Number} the vertical range of the filter
* @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
* @private
*/
PIXI.FilterTexture = function(gl, width, height, scaleMode)
{
    /**
     * @property gl
     * @type WebGLContext
     */
    this.gl = gl;

    // next time to create a frame buffer and texture
    this.frameBuffer = gl.createFramebuffer();
    this.texture = gl.createTexture();

    scaleMode = scaleMode || PIXI.scaleModes.DEFAULT;

    gl.bindTexture(gl.TEXTURE_2D,  this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer );

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer );
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

    // required for masking a mask??
    this.renderBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer);
  
    this.resize(width, height);
};


/**
* Clears the filter texture
* @method clear
*/
PIXI.FilterTexture.prototype.clear = function()
{
    var gl = this.gl;
    
    gl.clearColor(0,0,0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
};

/**
 * Resizes the texture to the specified width and height
 *
 * @method resize
 * @param width {Number} the new width of the texture
 * @param height {Number} the new height of the texture
 */
PIXI.FilterTexture.prototype.resize = function(width, height)
{
    if(this.width === width && this.height === height) return;

    this.width = width;
    this.height = height;

    var gl = this.gl;

    gl.bindTexture(gl.TEXTURE_2D,  this.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    // update the stencil buffer width and height
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
};

/**
* Destroys the filter texture
* @method destroy
*/
PIXI.FilterTexture.prototype.destroy = function()
{
    var gl = this.gl;
    gl.deleteFramebuffer( this.frameBuffer );
    gl.deleteTexture( this.texture );

    this.frameBuffer = null;
    this.texture = null;
};

/**
 * @author Mat Groves
 * 
 * 
 */
/**
 * A set of functions used to handle masking
 *
 * @class CanvasMaskManager
 */
PIXI.CanvasMaskManager = function()
{
    
};

/**
 * This method adds it to the current stack of masks
 *
 * @method pushMask
 * @param maskData the maskData that will be pushed
 * @param context {Context2D} the 2d drawing method of the canvas
 */
PIXI.CanvasMaskManager.prototype.pushMask = function(maskData, context)
{
    context.save();
    
    var cacheAlpha = maskData.alpha;
    var transform = maskData.worldTransform;

    context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx, transform.ty);

    PIXI.CanvasGraphics.renderGraphicsMask(maskData, context);

    context.clip();

    maskData.worldAlpha = cacheAlpha;
};

/**
 * Restores the current drawing context to the state it was before the mask was applied
 *
 * @method popMask
 * @param context {Context2D} the 2d drawing method of the canvas
 */
PIXI.CanvasMaskManager.prototype.popMask = function(context)
{
    context.restore();
};

/**
 * @author Mat Groves
 * 
 * 
 */

/**
 * @class CanvasTinter
 * @constructor
 * @static
 */
PIXI.CanvasTinter = function()
{
    /// this.textureCach
};

//PIXI.CanvasTinter.cachTint = true;
    

/**
 * Basically this method just needs a sprite and a color and tints the sprite 
 * with the given color
 * 
 * @method getTintedTexture 
 * @param sprite {Sprite} the sprite to tint
 * @param color {Number} the color to use to tint the sprite with
 */
PIXI.CanvasTinter.getTintedTexture = function(sprite, color)
{

    var texture = sprite.texture;

    color = PIXI.CanvasTinter.roundColor(color);

    var stringColor = "#" + ("00000" + ( color | 0).toString(16)).substr(-6);
   
    texture.tintCache = texture.tintCache || {};

    if(texture.tintCache[stringColor]) return texture.tintCache[stringColor];

     // clone texture..
    var canvas = PIXI.CanvasTinter.canvas || document.createElement("canvas");
    
    //PIXI.CanvasTinter.tintWithPerPixel(texture, stringColor, canvas);

    
    PIXI.CanvasTinter.tintMethod(texture, color, canvas);

    if(PIXI.CanvasTinter.convertTintToImage)
    {
        // is this better?
        var tintImage = new Image();
        tintImage.src = canvas.toDataURL();

        texture.tintCache[stringColor] = tintImage;
    }
    else
    {
      
        texture.tintCache[stringColor] = canvas;
        // if we are not converting the texture to an image then we need to lose the reference to the canvas
        PIXI.CanvasTinter.canvas = null;

    }

    return canvas;
};

/**
 * Tint a texture using the "multiply" operation
 * @method tintWithMultiply
 * @param texture {texture} the texture to tint
 * @param color {Number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
PIXI.CanvasTinter.tintWithMultiply = function(texture, color, canvas)
{
    var context = canvas.getContext( "2d" );

    var frame = texture.frame;

    canvas.width = frame.width;
    canvas.height = frame.height;

    context.fillStyle = "#" + ("00000" + ( color | 0).toString(16)).substr(-6);
    
    context.fillRect(0, 0, frame.width, frame.height);
    
    context.globalCompositeOperation = "multiply";

    context.drawImage(texture.baseTexture.source,
                           frame.x,
                           frame.y,
                           frame.width,
                           frame.height,
                           0,
                           0,
                           frame.width,
                           frame.height);

    context.globalCompositeOperation = "destination-atop";
    
    context.drawImage(texture.baseTexture.source,
                           frame.x,
                           frame.y,
                           frame.width,
                           frame.height,
                           0,
                           0,
                           frame.width,
                           frame.height);
};

/**
 * Tint a texture using the "overlay" operation
 * @method tintWithOverlay
 * @param texture {texture} the texture to tint
 * @param color {Number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
PIXI.CanvasTinter.tintWithOverlay = function(texture, color, canvas)
{
    var context = canvas.getContext( "2d" );

    var frame = texture.frame;

    canvas.width = frame.width;
    canvas.height = frame.height;

    
    
    context.globalCompositeOperation = "copy";
    context.fillStyle = "#" + ("00000" + ( color | 0).toString(16)).substr(-6);
    context.fillRect(0, 0, frame.width, frame.height);

    context.globalCompositeOperation = "destination-atop";
    context.drawImage(texture.baseTexture.source,
                           frame.x,
                           frame.y,
                           frame.width,
                           frame.height,
                           0,
                           0,
                           frame.width,
                           frame.height);

    
    //context.globalCompositeOperation = "copy";

};

/**
 * Tint a texture pixel per pixel
 * @method tintPerPixel
 * @param texture {texture} the texture to tint
 * @param color {Number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
PIXI.CanvasTinter.tintWithPerPixel = function(texture, color, canvas)
{
    var context = canvas.getContext( "2d" );

    var frame = texture.frame;

    canvas.width = frame.width;
    canvas.height = frame.height;
  
    context.globalCompositeOperation = "copy";
    context.drawImage(texture.baseTexture.source,
                           frame.x,
                           frame.y,
                           frame.width,
                           frame.height,
                           0,
                           0,
                           frame.width,
                           frame.height);

    var rgbValues = PIXI.hex2rgb(color);
    var r = rgbValues[0], g = rgbValues[1], b = rgbValues[2];

    var pixelData = context.getImageData(0, 0, frame.width, frame.height);

    var pixels = pixelData.data;

    for (var i = 0; i < pixels.length; i += 4)
    {
        pixels[i+0] *= r;
        pixels[i+1] *= g;
        pixels[i+2] *= b;
    }

    context.putImageData(pixelData, 0, 0);
};

/**
 * Rounds the specified color according to the PIXI.CanvasTinter.cacheStepsPerColorChannel
 * @method roundColor
 * @param color {number} the color to round, should be a hex color
 */
PIXI.CanvasTinter.roundColor = function(color)
{
    var step = PIXI.CanvasTinter.cacheStepsPerColorChannel;

    var rgbValues = PIXI.hex2rgb(color);

    rgbValues[0] = Math.min(255, (rgbValues[0] / step) * step);
    rgbValues[1] = Math.min(255, (rgbValues[1] / step) * step);
    rgbValues[2] = Math.min(255, (rgbValues[2] / step) * step);

    return PIXI.rgb2hex(rgbValues);
};

/**
 * 
 * Number of steps which will be used as a cap when rounding colors
 *
 * @property cacheStepsPerColorChannel
 * @type Number
 */
PIXI.CanvasTinter.cacheStepsPerColorChannel = 8;
/**
 * 
 * Number of steps which will be used as a cap when rounding colors
 *
 * @property convertTintToImage
 * @type Boolean
 */
PIXI.CanvasTinter.convertTintToImage = false;

/**
 * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method
 *
 * @property canUseMultiply
 * @type Boolean
 */
PIXI.CanvasTinter.canUseMultiply = PIXI.canUseNewCanvasBlendModes();

PIXI.CanvasTinter.tintMethod = PIXI.CanvasTinter.canUseMultiply ? PIXI.CanvasTinter.tintWithMultiply :  PIXI.CanvasTinter.tintWithPerPixel;


/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * the CanvasRenderer draws the stage and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Dont forget to add the view to your DOM or you will not see anything :)
 *
 * @class CanvasRenderer
 * @constructor
 * @param width=800 {Number} the width of the canvas view
 * @param height=600 {Number} the height of the canvas view
 * @param [view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [transparent=false] {Boolean} the transparency of the render view, default false
 */
PIXI.CanvasRenderer = function(width, height, view, transparent)
{
    if(!PIXI.defaultRenderer)
    {
        PIXI.sayHello("Canvas");
        PIXI.defaultRenderer = this;
    }

    this.type = PIXI.CANVAS_RENDERER;

    /**
     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
     * If the Stage is NOT transparent Pixi will use a canvas sized fillRect operation every frame to set the canvas background color.
     * If the Stage is transparent Pixi will use clearRect to clear the canvas every frame.
     * Disable this by setting this to false. For example if your game has a canvas filling background image you often don't need this set.
     *
     * @property clearBeforeRender
     * @type Boolean
     * @default
     */
    this.clearBeforeRender = true;

    /**
     * Whether the render view is transparent
     *
     * @property transparent
     * @type Boolean
     */
    this.transparent = !!transparent;

    if(!PIXI.blendModesCanvas)
    {
        PIXI.blendModesCanvas = [];

        if(PIXI.canUseNewCanvasBlendModes())
        {
            PIXI.blendModesCanvas[PIXI.blendModes.NORMAL]   = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.ADD]      = "lighter"; //IS THIS OK???
            PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = "multiply";
            PIXI.blendModesCanvas[PIXI.blendModes.SCREEN]   = "screen";
            PIXI.blendModesCanvas[PIXI.blendModes.OVERLAY]  = "overlay";
            PIXI.blendModesCanvas[PIXI.blendModes.DARKEN]   = "darken";
            PIXI.blendModesCanvas[PIXI.blendModes.LIGHTEN]  = "lighten";
            PIXI.blendModesCanvas[PIXI.blendModes.COLOR_DODGE] = "color-dodge";
            PIXI.blendModesCanvas[PIXI.blendModes.COLOR_BURN] = "color-burn";
            PIXI.blendModesCanvas[PIXI.blendModes.HARD_LIGHT] = "hard-light";
            PIXI.blendModesCanvas[PIXI.blendModes.SOFT_LIGHT] = "soft-light";
            PIXI.blendModesCanvas[PIXI.blendModes.DIFFERENCE] = "difference";
            PIXI.blendModesCanvas[PIXI.blendModes.EXCLUSION] = "exclusion";
            PIXI.blendModesCanvas[PIXI.blendModes.HUE]       = "hue";
            PIXI.blendModesCanvas[PIXI.blendModes.SATURATION] = "saturation";
            PIXI.blendModesCanvas[PIXI.blendModes.COLOR]      = "color";
            PIXI.blendModesCanvas[PIXI.blendModes.LUMINOSITY] = "luminosity";
        }
        else
        {
            // this means that the browser does not support the cool new blend modes in canvas "cough" ie "cough"
            PIXI.blendModesCanvas[PIXI.blendModes.NORMAL]   = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.ADD]      = "lighter"; //IS THIS OK???
            PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.SCREEN]   = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.OVERLAY]  = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.DARKEN]   = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.LIGHTEN]  = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.COLOR_DODGE] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.COLOR_BURN] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.HARD_LIGHT] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.SOFT_LIGHT] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.DIFFERENCE] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.EXCLUSION] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.HUE]       = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.SATURATION] = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.COLOR]      = "source-over";
            PIXI.blendModesCanvas[PIXI.blendModes.LUMINOSITY] = "source-over";
        }
    }

    /**
     * The width of the canvas view
     *
     * @property width
     * @type Number
     * @default 800
     */
    this.width = width || 800;

    /**
     * The height of the canvas view
     *
     * @property height
     * @type Number
     * @default 600
     */
    this.height = height || 600;

    /**
     * The canvas element that everything is drawn to
     *
     * @property view
     * @type HTMLCanvasElement
     */
    this.view = view || document.createElement( "canvas" );

    /**
     * The canvas 2d context that everything is drawn with
     * @property context
     * @type HTMLCanvasElement 2d Context
     */
    this.context = this.view.getContext( "2d", { alpha: this.transparent } );

    this.refresh = true;
    // hack to enable some hardware acceleration!
    //this.view.style["transform"] = "translatez(0)";

    this.view.width = this.width;
    this.view.height = this.height;
    this.count = 0;

    /**
     * Instance of a PIXI.CanvasMaskManager, handles masking when using the canvas renderer
     * @property CanvasMaskManager
     * @type CanvasMaskManager
     */
    this.maskManager = new PIXI.CanvasMaskManager();

    /**
     * The render session is just a bunch of parameter used for rendering
     * @property renderSession
     * @type Object
     */
    this.renderSession = {
        context: this.context,
        maskManager: this.maskManager,
        scaleMode: null,
        smoothProperty: null,

        /**
         * If true Pixi will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Handy for crisp pixel art and speed on legacy devices.
         *
         */
        roundPixels: false
    };

    if("imageSmoothingEnabled" in this.context)
        this.renderSession.smoothProperty = "imageSmoothingEnabled";
    else if("webkitImageSmoothingEnabled" in this.context)
        this.renderSession.smoothProperty = "webkitImageSmoothingEnabled";
    else if("mozImageSmoothingEnabled" in this.context)
        this.renderSession.smoothProperty = "mozImageSmoothingEnabled";
    else if("oImageSmoothingEnabled" in this.context)
        this.renderSession.smoothProperty = "oImageSmoothingEnabled";
};

// constructor
PIXI.CanvasRenderer.prototype.constructor = PIXI.CanvasRenderer;

/**
 * Renders the stage to its canvas view
 *
 * @method render
 * @param stage {Stage} the Stage element to be rendered
 */
PIXI.CanvasRenderer.prototype.render = function(stage)
{
    // update textures if need be
    PIXI.texturesToUpdate.length = 0;
    PIXI.texturesToDestroy.length = 0;

    stage.updateTransform();

    this.context.setTransform(1,0,0,1,0,0);
    this.context.globalAlpha = 1;

    if (navigator.isCocoonJS && this.view.screencanvas) {
        this.context.fillStyle = "black";
        this.context.clear();
    }

    if (!this.transparent && this.clearBeforeRender)
    {
        this.context.fillStyle = stage.backgroundColorString;
        this.context.fillRect(0, 0, this.width, this.height);
    }
    else if (this.transparent && this.clearBeforeRender)
    {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    this.renderDisplayObject(stage);

    // run interaction!
    if(stage.interactive)
    {
        //need to add some events!
        if(!stage._interactiveEventsAdded)
        {
            stage._interactiveEventsAdded = true;
            stage.interactionManager.setTarget(this);
        }
    }

    // remove frame updates..
    if(PIXI.Texture.frameUpdates.length > 0)
    {
        PIXI.Texture.frameUpdates.length = 0;
    }
};

/**
 * Resizes the canvas view to the specified width and height
 *
 * @method resize
 * @param width {Number} the new width of the canvas view
 * @param height {Number} the new height of the canvas view
 */
PIXI.CanvasRenderer.prototype.resize = function(width, height)
{
    this.width = width;
    this.height = height;

    this.view.width = width;
    this.view.height = height;
};

/**
 * Renders a display object
 *
 * @method renderDisplayObject
 * @param displayObject {DisplayObject} The displayObject to render
 * @param context {Context2D} the context 2d method of the canvas
 * @private
 */
PIXI.CanvasRenderer.prototype.renderDisplayObject = function(displayObject, context)
{
    // no longer recursive!
    //var transform;
    //var context = this.context;

    this.renderSession.context = context || this.context;
    displayObject._renderCanvas(this.renderSession);
};

/**
 * Renders a flat strip
 *
 * @method renderStripFlat
 * @param strip {Strip} The Strip to render
 * @private
 */
PIXI.CanvasRenderer.prototype.renderStripFlat = function(strip)
{
    var context = this.context;
    var verticies = strip.verticies;

    var length = verticies.length/2;
    this.count++;

    context.beginPath();
    for (var i=1; i < length-2; i++)
    {
        // draw some triangles!
        var index = i*2;

        var x0 = verticies[index],   x1 = verticies[index+2], x2 = verticies[index+4];
        var y0 = verticies[index+1], y1 = verticies[index+3], y2 = verticies[index+5];

        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
    }

    context.fillStyle = "#FF0000";
    context.fill();
    context.closePath();
};

/**
 * Renders a strip
 *
 * @method renderStrip
 * @param strip {Strip} The Strip to render
 * @private
 */
PIXI.CanvasRenderer.prototype.renderStrip = function(strip)
{
    var context = this.context;

    // draw triangles!!
    var verticies = strip.verticies;
    var uvs = strip.uvs;

    var length = verticies.length/2;
    this.count++;

    for (var i = 1; i < length-2; i++)
    {
        // draw some triangles!
        var index = i*2;

        var x0 = verticies[index],   x1 = verticies[index+2], x2 = verticies[index+4];
        var y0 = verticies[index+1], y1 = verticies[index+3], y2 = verticies[index+5];

        var u0 = uvs[index] * strip.texture.width,   u1 = uvs[index+2] * strip.texture.width, u2 = uvs[index+4]* strip.texture.width;
        var v0 = uvs[index+1]* strip.texture.height, v1 = uvs[index+3] * strip.texture.height, v2 = uvs[index+5]* strip.texture.height;

        context.save();
        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.closePath();

        context.clip();

        // Compute matrix transform
        var delta = u0*v1 + v0*u2 + u1*v2 - v1*u2 - v0*u1 - u0*v2;
        var deltaA = x0*v1 + v0*x2 + x1*v2 - v1*x2 - v0*x1 - x0*v2;
        var deltaB = u0*x1 + x0*u2 + u1*x2 - x1*u2 - x0*u1 - u0*x2;
        var deltaC = u0*v1*x2 + v0*x1*u2 + x0*u1*v2 - x0*v1*u2 - v0*u1*x2 - u0*x1*v2;
        var deltaD = y0*v1 + v0*y2 + y1*v2 - v1*y2 - v0*y1 - y0*v2;
        var deltaE = u0*y1 + y0*u2 + u1*y2 - y1*u2 - y0*u1 - u0*y2;
        var deltaF = u0*v1*y2 + v0*y1*u2 + y0*u1*v2 - y0*v1*u2 - v0*u1*y2 - u0*y1*v2;

        context.transform(deltaA / delta, deltaD / delta,
                            deltaB / delta, deltaE / delta,
                            deltaC / delta, deltaF / delta);

        context.drawImage(strip.texture.baseTexture.source, 0, 0);
        context.restore();
    }
};

/**
 * Creates a Canvas element of the given size
 *
 * @method CanvasBuffer
 * @param width {Number} the width for the newly created canvas
 * @param height {Number} the height for the newly created canvas
 * @static
 * @private
 */
PIXI.CanvasBuffer = function(width, height)
{
    this.width = width;
    this.height = height;

    this.canvas = document.createElement( "canvas" );
    this.context = this.canvas.getContext( "2d" );

    this.canvas.width = width;
    this.canvas.height = height;
};

/**
 * Clears the canvas that was created by the CanvasBuffer class
 *
 * @method clear
 * @private
 */
PIXI.CanvasBuffer.prototype.clear = function()
{
    this.context.clearRect(0,0, this.width, this.height);
};

/**
 * Resizes the canvas that was created by the CanvasBuffer class to the specified width and height
 *
 * @method resize
 * @param width {Number} the new width of the canvas
 * @param height {Number} the new height of the canvas
 * @private
 */

PIXI.CanvasBuffer.prototype.resize = function(width, height)
{
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
};


/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */


/**
 * A set of functions used by the canvas renderer to draw the primitive graphics data
 *
 * @class CanvasGraphics
 */
PIXI.CanvasGraphics = function()
{

};


/*
 * Renders the graphics object
 *
 * @static
 * @private
 * @method renderGraphics
 * @param graphics {Graphics} the actual graphics object to render
 * @param context {Context2D} the 2d drawing method of the canvas
 */
PIXI.CanvasGraphics.renderGraphics = function(graphics, context)
{
    var worldAlpha = graphics.worldAlpha;
    var color = '';

    for (var i = 0; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];
        var points = data.points;

        context.strokeStyle = color = '#' + ('00000' + ( data.lineColor | 0).toString(16)).substr(-6);

        context.lineWidth = data.lineWidth;

        if(data.type === PIXI.Graphics.POLY)
        {
            context.beginPath();

            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++)
            {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if(points[0] === points[points.length-2] && points[1] === points[points.length-1])
            {
                context.closePath();
            }

            if(data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = color = '#' + ('00000' + ( data.fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if(data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.stroke();
            }
        }
        else if(data.type === PIXI.Graphics.RECT)
        {

            if(data.fillColor || data.fillColor === 0)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = color = '#' + ('00000' + ( data.fillColor | 0).toString(16)).substr(-6);
                context.fillRect(points[0], points[1], points[2], points[3]);

            }
            if(data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeRect(points[0], points[1], points[2], points[3]);
            }

        }
        else if(data.type === PIXI.Graphics.CIRC)
        {
            // TODO - need to be Undefined!
            context.beginPath();
            context.arc(points[0], points[1], points[2],0,2*Math.PI);
            context.closePath();

            if(data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = color = '#' + ('00000' + ( data.fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if(data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.stroke();
            }
        }
        else if(data.type === PIXI.Graphics.ELIP)
        {

            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var ellipseData =  data.points;

            var w = ellipseData[2] * 2;
            var h = ellipseData[3] * 2;

            var x = ellipseData[0] - w/2;
            var y = ellipseData[1] - h/2;

            context.beginPath();

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

            context.closePath();

            if(data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = color = '#' + ('00000' + ( data.fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if(data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.stroke();
            }
        }
        else if (data.type === PIXI.Graphics.RREC)
        {
            var rx = points[0];
            var ry = points[1];
            var width = points[2];
            var height = points[3];
            var radius = points[4];

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.beginPath();
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();

            if(data.fillColor || data.fillColor === 0)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = color = '#' + ('00000' + ( data.fillColor | 0).toString(16)).substr(-6);
                context.fill();

            }
            if(data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.stroke();
            }
        }
    }
};

/*
 * Renders a graphics mask
 *
 * @static
 * @private
 * @method renderGraphicsMask
 * @param graphics {Graphics} the graphics which will be used as a mask
 * @param context {Context2D} the context 2d method of the canvas
 */
PIXI.CanvasGraphics.renderGraphicsMask = function(graphics, context)
{
    var len = graphics.graphicsData.length;

    if(len === 0) return;

    if(len > 1)
    {
        len = 1;
        window.console.log('Pixi.js warning: masks in canvas can only mask using the first path in the graphics object');
    }

    for (var i = 0; i < 1; i++)
    {
        var data = graphics.graphicsData[i];
        var points = data.points;

        if(data.type === PIXI.Graphics.POLY)
        {
            context.beginPath();
            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++)
            {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if(points[0] === points[points.length-2] && points[1] === points[points.length-1])
            {
                context.closePath();
            }

        }
        else if(data.type === PIXI.Graphics.RECT)
        {
            context.beginPath();
            context.rect(points[0], points[1], points[2], points[3]);
            context.closePath();
        }
        else if(data.type === PIXI.Graphics.CIRC)
        {
            // TODO - need to be Undefined!
            context.beginPath();
            context.arc(points[0], points[1], points[2],0,2*Math.PI);
            context.closePath();
        }
        else if(data.type === PIXI.Graphics.ELIP)
        {

            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
            var ellipseData =  data.points;

            var w = ellipseData[2] * 2;
            var h = ellipseData[3] * 2;

            var x = ellipseData[0] - w/2;
            var y = ellipseData[1] - h/2;

            context.beginPath();

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            context.closePath();
        }
        else if (data.type === PIXI.Graphics.RREC)
        {
            var rx = points[0];
            var ry = points[1];
            var width = points[2];
            var height = points[3];
            var radius = points[4];

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.beginPath();
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();
        }
    }
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */


/**
 * The Graphics class contains a set of methods that you can use to create primitive shapes and lines.
 * It is important to know that with the webGL renderer only simple polygons can be filled at this stage
 * Complex polygons will not be filled. Heres an example of a complex polygon: http://www.goodboydigital.com/wp-content/uploads/2013/06/complexPolygon.png
 *
 * @class Graphics
 * @extends DisplayObjectContainer
 * @constructor
 */
PIXI.Graphics = function()
{
    PIXI.DisplayObjectContainer.call( this );

    this.renderable = true;

    /**
     * The alpha of the fill of this graphics object
     *
     * @property fillAlpha
     * @type Number
     */
    this.fillAlpha = 1;

    /**
     * The width of any lines drawn
     *
     * @property lineWidth
     * @type Number
     */
    this.lineWidth = 0;

    /**
     * The color of any lines drawn
     *
     * @property lineColor
     * @type String
     */
    this.lineColor = "black";

    /**
     * Graphics data
     *
     * @property graphicsData
     * @type Array
     * @private
     */
    this.graphicsData = [];


    /**
     * The tint applied to the graphic shape. This is a hex value
     *
     * @property tint
     * @type Number
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;// * Math.random();
    
    /**
     * The blend mode to be applied to the graphic shape
     *
     * @property blendMode
     * @type Number
     * @default PIXI.blendModes.NORMAL;
     */
    this.blendMode = PIXI.blendModes.NORMAL;
    
    /**
     * Current path
     *
     * @property currentPath
     * @type Object
     * @private
     */
    this.currentPath = {points:[]};

    /**
     * Array containing some WebGL-related properties used by the WebGL renderer
     *
     * @property _webGL
     * @type Array
     * @private
     */
    this._webGL = [];

    /**
     * Whether this shape is being used as a mask
     *
     * @property isMask
     * @type isMask
     */
    this.isMask = false;

    /**
     * The bounds of the graphic shape as rectangle object
     *
     * @property bounds
     * @type Rectangle
     */
    this.bounds = null;

    /**
     * the bounds' padding used for bounds calculation
     *
     * @property boundsPadding
     * @type Number
     */
    this.boundsPadding = 10;

    /**
     * Used to detect if the graphics object has changed if this is set to true then the graphics object will be recalculated
     * 
     * @type {Boolean}
     */
    this.dirty = true;
};

// constructor
PIXI.Graphics.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
PIXI.Graphics.prototype.constructor = PIXI.Graphics;

/**
 * If cacheAsBitmap is true the graphics object will then be rendered as if it was a sprite.
 * This is useful if your graphics element does not change often as it will speed up the rendering of the object
 * It is also usful as the graphics object will always be antialiased because it will be rendered using canvas
 * Not recommended if you are constanly redrawing the graphics element.
 *
 * @property cacheAsBitmap
 * @default false
 * @type Boolean
 * @private
 */
Object.defineProperty(PIXI.Graphics.prototype, "cacheAsBitmap", {
    get: function() {
        return  this._cacheAsBitmap;
    },
    set: function(value) {
        this._cacheAsBitmap = value;

        if(this._cacheAsBitmap)
        {
            this._generateCachedSprite();
        }
        else
        {
            this.destroyCachedSprite();
            this.dirty = true;
        }

    }
});


/**
 * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
 *
 * @method lineStyle
 * @param lineWidth {Number} width of the line to draw, will update the object's stored style
 * @param color {Number} color of the line to draw, will update the object's stored style
 * @param alpha {Number} alpha of the line to draw, will update the object's stored style
 */
PIXI.Graphics.prototype.lineStyle = function(lineWidth, color, alpha)
{
    if (!this.currentPath.points.length) this.graphicsData.pop();

    this.lineWidth = lineWidth || 0;
    this.lineColor = color || 0;
    this.lineAlpha = (arguments.length < 3) ? 1 : alpha;

    this.currentPath = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.lineAlpha,
                        fillColor:this.fillColor, fillAlpha:this.fillAlpha, fill:this.filling, points:[], type:PIXI.Graphics.POLY};

    this.graphicsData.push(this.currentPath);

    return this;
};

/**
 * Moves the current drawing position to (x, y).
 *
 * @method moveTo
 * @param x {Number} the X coordinate to move to
 * @param y {Number} the Y coordinate to move to
 */
PIXI.Graphics.prototype.moveTo = function(x, y)
{
    if (!this.currentPath.points.length) this.graphicsData.pop();

    this.currentPath = this.currentPath = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.lineAlpha,
                        fillColor:this.fillColor, fillAlpha:this.fillAlpha, fill:this.filling, points:[], type:PIXI.Graphics.POLY};

    this.currentPath.points.push(x, y);

    this.graphicsData.push(this.currentPath);

    return this;
};

/**
 * Draws a line using the current line style from the current drawing position to (x, y);
 * the current drawing position is then set to (x, y).
 *
 * @method lineTo
 * @param x {Number} the X coordinate to draw to
 * @param y {Number} the Y coordinate to draw to
 */
PIXI.Graphics.prototype.lineTo = function(x, y)
{
    this.currentPath.points.push(x, y);
    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a quadratic bezier curve.
 * Based on : https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @method quadraticCurveTo
 * @param  {number}   cpX   Control point x
 * @param  {number}   cpY   Control point y
 * @param  {number}   toX   Destination point x
 * @param  {number}   toY   Destination point y
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.quadraticCurveTo = function(cpX, cpY, toX, toY)
{
    if( this.currentPath.points.length === 0)this.moveTo(0,0);

    var xa,
    ya,
    n = 20,
    points = this.currentPath.points;
    if(points.length === 0)this.moveTo(0, 0);
    

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;
    for (var i = 1; i <= n; i++ )
    {
        j = i / n;

        xa = fromX + ( (cpX - fromX) * j );
        ya = fromY + ( (cpY - fromY) * j );

        points.push( xa + ( ((cpX + ( (toX - cpX) * j )) - xa) * j ),
                     ya + ( ((cpY + ( (toY - cpY) * j )) - ya) * j ) );
    }


    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a bezier curve.
 *
 * @method bezierCurveTo
 * @param  {number}   cpX    Control point x
 * @param  {number}   cpY    Control point y
 * @param  {number}   cpX2   Second Control point x
 * @param  {number}   cpY2   Second Control point y
 * @param  {number}   toX    Destination point x
 * @param  {number}   toY    Destination point y
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.bezierCurveTo = function(cpX, cpY, cpX2, cpY2, toX, toY)
{
    if( this.currentPath.points.length === 0)this.moveTo(0,0);

    var n = 20,
    dt,
    dt2,
    dt3,
    t2,
    t3,
    points = this.currentPath.points;

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];
    
    var j = 0;

    for (var i=1; i<n; i++)
    {
        j = i / n;

        dt = (1 - j);
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;
        
        points.push( dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX,
                     dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
        
    }
    
    this.dirty = true;

    return this;
};

/*
 * the arcTo() method creates an arc/curve between two tangents on the canvas.
 * 
 * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
 *
 * @method arcTo
 * @param  {number}   x1        The x-coordinate of the beginning of the arc
 * @param  {number}   y1        The y-coordinate of the beginning of the arc
 * @param  {number}   x2        The x-coordinate of the end of the arc
 * @param  {number}   y2        The y-coordinate of the end of the arc
 * @param  {number}   radius    The radius of the arc
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.arcTo = function(x1, y1, x2, y2, radius)
{
    // check that path contains subpaths
    if( this.currentPath.points.length === 0)this.moveTo(x1, y1);
    
    var points = this.currentPath.points;
    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

//    points.push( x1,  y1);

    var a1 = fromY - y1;
    var b1 = fromX - x1;
    var a2 = y2   - y1;
    var b2 = x2   - x1;
    var mm = Math.abs(a1 * b2 - b1 * a2);

    if (mm < 1.0e-8 || radius === 0)
    {
        points.push(x1, y1);
    }
    else
    {
        var dd = a1 * a1 + b1 * b1;
        var cc = a2 * a2 + b2 * b2;
        var tt = a1 * a2 + b1 * b2;
        var k1 = radius * Math.sqrt(dd) / mm;
        var k2 = radius * Math.sqrt(cc) / mm;
        var j1 = k1 * tt / dd;
        var j2 = k2 * tt / cc;
        var cx = k1 * b2 + k2 * b1;
        var cy = k1 * a2 + k2 * a1;
        var px = b1 * (k2 + j1);
        var py = a1 * (k2 + j1);
        var qx = b2 * (k1 + j2);
        var qy = a2 * (k1 + j2);
        var startAngle = Math.atan2(py - cy, px - cx);
        var endAngle   = Math.atan2(qy - cy, qx - cx);
        // not required?
     //   points.push(px + x1 , py + y1);
        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
    }

    this.dirty = true;

    return this;
};

/**
 * The arc() method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @method arc
 * @param  {number}   cx                The x-coordinate of the center of the circle
 * @param  {number}   cy                The y-coordinate of the center of the circle
 * @param  {number}   radius            The radius of the circle
 * @param  {number}   startAngle        The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param  {number}   endAngle          The ending angle, in radians
 * @param  {number}   anticlockwise     Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise)
{
    var startX = cx + Math.cos(startAngle) * radius;
    var startY = cy + Math.sin(startAngle) * radius;
    
    var points = this.currentPath.points;

    if(points.length !== 0 && points[points.length-2] !== startX || points[points.length-1] !== startY)
    {
        this.moveTo(startX, startY);
        points = this.currentPath.points;
    }

    if (startAngle === endAngle)return this;

    if( !anticlockwise && endAngle <= startAngle )
    {
        endAngle += Math.PI * 2;
    }
    else if( anticlockwise && startAngle <= endAngle )
    {
        startAngle += Math.PI * 2;
    }

    var sweep = anticlockwise ? (startAngle - endAngle) *-1 : (endAngle - startAngle);
    var segs =  ( Math.abs(sweep)/ (Math.PI * 2) ) * 40;

    if( sweep === 0 ) return this;

    var theta = sweep/(segs*2);
    var theta2 = theta*2;

    var cTheta = Math.cos(theta);
    var sTheta = Math.sin(theta);
    
    var segMinus = segs - 1;

    var remainder = ( segMinus % 1 ) / segMinus;

    for(var i=0; i<=segMinus; i++)
    {
        var real =  i + remainder * i;

    
        var angle = ((theta) + startAngle + (theta2 * real));

        var c = Math.cos(angle);
        var s = -Math.sin(angle);

        points.push(( (cTheta *  c) + (sTheta * s) ) * radius + cx,
                    ( (cTheta * -s) + (sTheta * c) ) * radius + cy);
    }

    this.dirty = true;

    return this;
};

/**
 * Draws a line using the current line style from the current drawing position to (x, y);
 * the current drawing position is then set to (x, y).
 *
 * @method lineTo
 * @param x {Number} the X coordinate to draw to
 * @param y {Number} the Y coordinate to draw to
 */
PIXI.Graphics.prototype.drawPath = function(path)
{
    if (!this.currentPath.points.length) this.graphicsData.pop();

    this.currentPath = this.currentPath = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.lineAlpha,
                        fillColor:this.fillColor, fillAlpha:this.fillAlpha, fill:this.filling, points:[], type:PIXI.Graphics.POLY};

    this.graphicsData.push(this.currentPath);

    this.currentPath.points = this.currentPath.points.concat(path);
    this.dirty = true;

    return this;
};

/**
 * Specifies a simple one-color fill that subsequent calls to other Graphics methods
 * (such as lineTo() or drawCircle()) use when drawing.
 *
 * @method beginFill
 * @param color {Number} the color of the fill
 * @param alpha {Number} the alpha of the fill
 */
PIXI.Graphics.prototype.beginFill = function(color, alpha)
{

    this.filling = true;
    this.fillColor = color || 0;
    this.fillAlpha = (arguments.length < 2) ? 1 : alpha;

    return this;
};

/**
 * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
 *
 * @method endFill
 */
PIXI.Graphics.prototype.endFill = function()
{
    this.filling = false;
    this.fillColor = null;
    this.fillAlpha = 1;

    return this;
};

/**
 * @method drawRect
 *
 * @param x {Number} The X coord of the top-left of the rectangle
 * @param y {Number} The Y coord of the top-left of the rectangle
 * @param width {Number} The width of the rectangle
 * @param height {Number} The height of the rectangle
 */
PIXI.Graphics.prototype.drawRect = function( x, y, width, height )
{
    if (!this.currentPath.points.length) this.graphicsData.pop();

    this.currentPath = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.lineAlpha,
                        fillColor:this.fillColor, fillAlpha:this.fillAlpha, fill:this.filling,
                        points:[x, y, width, height], type:PIXI.Graphics.RECT};

    this.graphicsData.push(this.currentPath);
    this.dirty = true;

    return this;
};

/**
 * @method drawRoundedRect
 *
 * @param x {Number} The X coord of the top-left of the rectangle
 * @param y {Number} The Y coord of the top-left of the rectangle
 * @param width {Number} The width of the rectangle
 * @param height {Number} The height of the rectangle
 * @param radius {Number} Radius of the rectangle corners
 */
PIXI.Graphics.prototype.drawRoundedRect = function( x, y, width, height, radius )
{
    if (!this.currentPath.points.length) this.graphicsData.pop();

    this.currentPath = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.lineAlpha,
                        fillColor:this.fillColor, fillAlpha:this.fillAlpha, fill:this.filling,
                        points:[x, y, width, height, radius], type:PIXI.Graphics.RREC};

    this.graphicsData.push(this.currentPath);
    this.dirty = true;

    return this;
};

/**
 * Draws a circle.
 *
 * @method drawCircle
 * @param x {Number} The X coordinate of the center of the circle
 * @param y {Number} The Y coordinate of the center of the circle
 * @param radius {Number} The radius of the circle
 */
PIXI.Graphics.prototype.drawCircle = function(x, y, radius)
{

    if (!this.currentPath.points.length) this.graphicsData.pop();

    this.currentPath = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.lineAlpha,
                        fillColor:this.fillColor, fillAlpha:this.fillAlpha, fill:this.filling,
                        points:[x, y, radius, radius], type:PIXI.Graphics.CIRC};

    this.graphicsData.push(this.currentPath);
    this.dirty = true;

    return this;
};

/**
 * Draws an ellipse.
 *
 * @method drawEllipse
 * @param x {Number} The X coordinate of the center of the ellipse
 * @param y {Number} The Y coordinate of the center of the ellipse
 * @param width {Number} The half width of the ellipse
 * @param height {Number} The half height of the ellipse
 */
PIXI.Graphics.prototype.drawEllipse = function(x, y, width, height)
{

    if (!this.currentPath.points.length) this.graphicsData.pop();

    this.currentPath = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.lineAlpha,
                        fillColor:this.fillColor, fillAlpha:this.fillAlpha, fill:this.filling,
                        points:[x, y, width, height], type:PIXI.Graphics.ELIP};

    this.graphicsData.push(this.currentPath);
    this.dirty = true;

    return this;
};

/**
 * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
 *
 * @method clear
 */
PIXI.Graphics.prototype.clear = function()
{
    this.lineWidth = 0;
    this.filling = false;

    this.dirty = true;
    this.clearDirty = true;
    this.graphicsData = [];

    this.bounds = null; //new PIXI.Rectangle();

    return this;
};

/**
 * Useful function that returns a texture of the graphics object that can then be used to create sprites
 * This can be quite useful if your geometry is complicated and needs to be reused multiple times.
 *
 * @method generateTexture
 * @return {Texture} a texture of the graphics object
 */
PIXI.Graphics.prototype.generateTexture = function()
{
    var bounds = this.getBounds();

    var canvasBuffer = new PIXI.CanvasBuffer(bounds.width, bounds.height);
    var texture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);

    canvasBuffer.context.translate(-bounds.x,-bounds.y);
    
    PIXI.CanvasGraphics.renderGraphics(this, canvasBuffer.context);

    return texture;
};

/**
* Renders the object using the WebGL renderer
*
* @method _renderWebGL
* @param renderSession {RenderSession} 
* @private
*/
PIXI.Graphics.prototype._renderWebGL = function(renderSession)
{
    // if the sprite is not visible or the alpha is 0 then no need to render this element
    if(this.visible === false || this.alpha === 0 || this.isMask === true)return;
    

    if(this._cacheAsBitmap)
    {
       
        if(this.dirty)
        {
            this._generateCachedSprite();
            // we will also need to update the texture on the gpu too!
            PIXI.updateWebGLTexture(this._cachedSprite.texture.baseTexture, renderSession.gl);
            
            this.dirty =  false;
        }

        this._cachedSprite.alpha = this.alpha;
        PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, renderSession);

        return;
    }
    else
    {
        renderSession.spriteBatch.stop();
        renderSession.blendModeManager.setBlendMode(this.blendMode);

        if(this._mask)renderSession.maskManager.pushMask(this._mask, renderSession);
        if(this._filters)renderSession.filterManager.pushFilter(this._filterBlock);
      
        // check blend mode
        if(this.blendMode !== renderSession.spriteBatch.currentBlendMode)
        {
            renderSession.spriteBatch.currentBlendMode = this.blendMode;
            var blendModeWebGL = PIXI.blendModesWebGL[renderSession.spriteBatch.currentBlendMode];
            renderSession.spriteBatch.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
        }
        
      //  for (var i = this.graphicsData.length - 1; i >= 0; i--) {
        //    this.graphicsData[i]
            
//        };

        PIXI.WebGLGraphics.renderGraphics(this, renderSession);
        
        // only render if it has children!
        if(this.children.length)
        {
            renderSession.spriteBatch.start();

             // simple render children!
            for(var i=0, j=this.children.length; i<j; i++)
            {
                this.children[i]._renderWebGL(renderSession);
            }

            renderSession.spriteBatch.stop();
        }

        if(this._filters)renderSession.filterManager.popFilter();
        if(this._mask)renderSession.maskManager.popMask(this.mask, renderSession);
          
        renderSession.drawCount++;

        renderSession.spriteBatch.start();
    }
};

/**
* Renders the object using the Canvas renderer
*
* @method _renderCanvas
* @param renderSession {RenderSession} 
* @private
*/
PIXI.Graphics.prototype._renderCanvas = function(renderSession)
{
    // if the sprite is not visible or the alpha is 0 then no need to render this element
    if(this.visible === false || this.alpha === 0 || this.isMask === true)return;
    
    var context = renderSession.context;
    var transform = this.worldTransform;
    
    if(this.blendMode !== renderSession.currentBlendMode)
    {
        renderSession.currentBlendMode = this.blendMode;
        context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
    }

    if(this._mask)
    {
        renderSession.maskManager.pushMask(this._mask, renderSession.context);
    }

    context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx, transform.ty);
    PIXI.CanvasGraphics.renderGraphics(this, context);

     // simple render children!
    for(var i=0, j=this.children.length; i<j; i++)
    {
        this.children[i]._renderCanvas(renderSession);
    }

    if(this._mask)
    {
        renderSession.maskManager.popMask(renderSession.context);
    }
};

/**
 * Retrieves the bounds of the graphic shape as a rectangle object
 *
 * @method getBounds
 * @return {Rectangle} the rectangular bounding area
 */
PIXI.Graphics.prototype.getBounds = function( matrix )
{
    if(!this.bounds)this.updateBounds();

    var w0 = this.bounds.x;
    var w1 = this.bounds.width + this.bounds.x;

    var h0 = this.bounds.y;
    var h1 = this.bounds.height + this.bounds.y;

    var worldTransform = matrix || this.worldTransform;

    var a = worldTransform.a;
    var b = worldTransform.c;
    var c = worldTransform.b;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var x1 = a * w1 + c * h1 + tx;
    var y1 = d * h1 + b * w1 + ty;

    var x2 = a * w0 + c * h1 + tx;
    var y2 = d * h1 + b * w0 + ty;

    var x3 = a * w0 + c * h0 + tx;
    var y3 = d * h0 + b * w0 + ty;

    var x4 =  a * w1 + c * h0 + tx;
    var y4 =  d * h0 + b * w1 + ty;

    var maxX = x1;
    var maxY = y1;

    var minX = x1;
    var minY = y1;

    minX = x2 < minX ? x2 : minX;
    minX = x3 < minX ? x3 : minX;
    minX = x4 < minX ? x4 : minX;

    minY = y2 < minY ? y2 : minY;
    minY = y3 < minY ? y3 : minY;
    minY = y4 < minY ? y4 : minY;

    maxX = x2 > maxX ? x2 : maxX;
    maxX = x3 > maxX ? x3 : maxX;
    maxX = x4 > maxX ? x4 : maxX;

    maxY = y2 > maxY ? y2 : maxY;
    maxY = y3 > maxY ? y3 : maxY;
    maxY = y4 > maxY ? y4 : maxY;

    var bounds = this._bounds;

    bounds.x = minX;
    bounds.width = maxX - minX;

    bounds.y = minY;
    bounds.height = maxY - minY;

    return bounds;
};

/**
 * Update the bounds of the object
 *
 * @method updateBounds
 */
PIXI.Graphics.prototype.updateBounds = function()
{
    
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    var points, x, y, w, h;

    for (var i = 0; i < this.graphicsData.length; i++) {
        var data = this.graphicsData[i];
        var type = data.type;
        var lineWidth = data.lineWidth;

        points = data.points;

        if(type === PIXI.Graphics.RECT)
        {
            x = points[0] - lineWidth/2;
            y = points[1] - lineWidth/2;
            w = points[2] + lineWidth;
            h = points[3] + lineWidth;

            minX = x < minX ? x : minX;
            maxX = x + w > maxX ? x + w : maxX;

            minY = y < minY ? x : minY;
            maxY = y + h > maxY ? y + h : maxY;
        }
        else if(type === PIXI.Graphics.CIRC || type === PIXI.Graphics.ELIP)
        {
            x = points[0];
            y = points[1];
            w = points[2] + lineWidth/2;
            h = points[3] + lineWidth/2;

            minX = x - w < minX ? x - w : minX;
            maxX = x + w > maxX ? x + w : maxX;

            minY = y - h < minY ? y - h : minY;
            maxY = y + h > maxY ? y + h : maxY;
        }
        else
        {
            // POLY
            for (var j = 0; j < points.length; j+=2)
            {

                x = points[j];
                y = points[j+1];
                minX = x-lineWidth < minX ? x-lineWidth : minX;
                maxX = x+lineWidth > maxX ? x+lineWidth : maxX;

                minY = y-lineWidth < minY ? y-lineWidth : minY;
                maxY = y+lineWidth > maxY ? y+lineWidth : maxY;
            }
        }
    }

    var padding = this.boundsPadding;
    this.bounds = new PIXI.Rectangle(minX - padding, minY - padding, (maxX - minX) + padding * 2, (maxY - minY) + padding * 2);
};


/**
 * Generates the cached sprite when the sprite has cacheAsBitmap = true
 *
 * @method _generateCachedSprite
 * @private
 */
PIXI.Graphics.prototype._generateCachedSprite = function()
{
    var bounds = this.getLocalBounds();

    if(!this._cachedSprite)
    {
        var canvasBuffer = new PIXI.CanvasBuffer(bounds.width, bounds.height);
        var texture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);
        
        this._cachedSprite = new PIXI.Sprite(texture);
        this._cachedSprite.buffer = canvasBuffer;

        this._cachedSprite.worldTransform = this.worldTransform;
    }
    else
    {
        this._cachedSprite.buffer.resize(bounds.width, bounds.height);
    }

    // leverage the anchor to account for the offset of the element
    this._cachedSprite.anchor.x = -( bounds.x / bounds.width );
    this._cachedSprite.anchor.y = -( bounds.y / bounds.height );

   // this._cachedSprite.buffer.context.save();
    this._cachedSprite.buffer.context.translate(-bounds.x,-bounds.y);
    
    PIXI.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context);
    this._cachedSprite.alpha = this.alpha;

   // this._cachedSprite.buffer.context.restore();
};

PIXI.Graphics.prototype.destroyCachedSprite = function()
{
    this._cachedSprite.texture.destroy(true);

    // let the gc collect the unused sprite
    // TODO could be object pooled!
    this._cachedSprite = null;
};


// SOME TYPES:
PIXI.Graphics.POLY = 0;
PIXI.Graphics.RECT = 1;
PIXI.Graphics.CIRC = 2;
PIXI.Graphics.ELIP = 3;
PIXI.Graphics.RREC = 4;


/**
 * @author Mat Groves http://matgroves.com/
 */

 /**
 * 
 * @class Strip
 * @extends DisplayObjectContainer
 * @constructor
 * @param texture {Texture} The texture to use
 * @param width {Number} the width 
 * @param height {Number} the height
 * 
 */
PIXI.Strip = function(texture)
{
    PIXI.DisplayObjectContainer.call( this );
    
    this.texture = texture;

    // set up the main bits..
    this.uvs = new PIXI.Float32Array([0, 1,
                                    1, 1,
                                    1, 0,
                                    0,1]);

    this.verticies = new PIXI.Float32Array([0, 0,
                      100,0,
                      100,100,
                      0, 100]);

    this.colors = new PIXI.Float32Array([1, 1, 1, 1]);

    this.indices = new PIXI.Uint16Array([0, 1, 2, 3]);
    

    this.dirty = true;
};

// constructor
PIXI.Strip.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.Strip.prototype.constructor = PIXI.Strip;

PIXI.Strip.prototype._renderWebGL = function(renderSession)
{
    // if the sprite is not visible or the alpha is 0 then no need to render this element
    if(!this.visible || this.alpha <= 0)return;
    // render triangle strip..

    renderSession.spriteBatch.stop();

    // init! init!
    if(!this._vertexBuffer)this._initWebGL(renderSession);
    
    renderSession.shaderManager.setShader(renderSession.shaderManager.stripShader);

    this._renderStrip(renderSession);

    ///renderSession.shaderManager.activateDefaultShader();

    renderSession.spriteBatch.start();

    //TODO check culling  
};

PIXI.Strip.prototype._initWebGL = function(renderSession)
{
    // build the strip!
    var gl = renderSession.gl;
    
    this._vertexBuffer = gl.createBuffer();
    this._indexBuffer = gl.createBuffer();
    this._uvBuffer = gl.createBuffer();
    this._colorBuffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.verticies, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,  this.uvs, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);
 
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
};

PIXI.Strip.prototype._renderStrip = function(renderSession)
{
    var gl = renderSession.gl;
    var projection = renderSession.projection,
        offset = renderSession.offset,
        shader = renderSession.shaderManager.stripShader;


    // gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mat4Real);

    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    // set uniforms
    gl.uniformMatrix3fv(shader.translationMatrix, false, this.worldTransform.toArray(true));
    gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
    gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);
    gl.uniform1f(shader.alpha, 1);

    if(!this.dirty)
    {
        
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.verticies);
        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
        
        // update the uvs
        gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);
        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
            
        gl.activeTexture(gl.TEXTURE0);
         // bind the current texture
        gl.bindTexture(gl.TEXTURE_2D, this.texture.baseTexture._glTextures[gl.id] || PIXI.createWebGLTexture(this.texture.baseTexture, gl));
    
        // dont need to upload!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    
    
    }
    else
    {

        this.dirty = false;
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.verticies, gl.STATIC_DRAW);
        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
        
        // update the uvs
        gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);
        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
            
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture.baseTexture._glTextures[gl.id] || PIXI.createWebGLTexture(this.texture.baseTexture, gl));
    
        // dont need to upload!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        
    }
    //console.log(gl.TRIANGLE_STRIP)
    //
    //
    gl.drawElements(gl.TRIANGLE_STRIP, this.indices.length, gl.UNSIGNED_SHORT, 0);
    
  
};

PIXI.Strip.prototype._renderCanvas = function(renderSession)
{
    var context = renderSession.context;
    
    var transform = this.worldTransform;

    if (renderSession.roundPixels)
    {
        context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx | 0, transform.ty | 0);
    }
    else
    {
        context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx, transform.ty);
    }
        
    var strip = this;
    // draw triangles!!
    var verticies = strip.verticies;
    var uvs = strip.uvs;

    var length = verticies.length/2;
    this.count++;

    for (var i = 0; i < length-2; i++)
    {
        // draw some triangles!
        var index = i*2;

        var x0 = verticies[index],   x1 = verticies[index+2], x2 = verticies[index+4];
        var y0 = verticies[index+1], y1 = verticies[index+3], y2 = verticies[index+5];

        if(true)
        {

            //expand();
            var centerX = (x0 + x1 + x2)/3;
            var centerY = (y0 + y1 + y2)/3;

            var normX = x0 - centerX;
            var normY = y0 - centerY;

            var dist = Math.sqrt( normX * normX + normY * normY );
            x0 = centerX + (normX / dist) * (dist + 3);
            y0 = centerY + (normY / dist) * (dist + 3);

            // 
            
            normX = x1 - centerX;
            normY = y1 - centerY;

            dist = Math.sqrt( normX * normX + normY * normY );
            x1 = centerX + (normX / dist) * (dist + 3);
            y1 = centerY + (normY / dist) * (dist + 3);

            normX = x2 - centerX;
            normY = y2 - centerY;

            dist = Math.sqrt( normX * normX + normY * normY );
            x2 = centerX + (normX / dist) * (dist + 3);
            y2 = centerY + (normY / dist) * (dist + 3);

        }

        var u0 = uvs[index] * strip.texture.width,   u1 = uvs[index+2] * strip.texture.width, u2 = uvs[index+4]* strip.texture.width;
        var v0 = uvs[index+1]* strip.texture.height, v1 = uvs[index+3] * strip.texture.height, v2 = uvs[index+5]* strip.texture.height;

        context.save();
        context.beginPath();


        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);

        context.closePath();

        context.clip();

        // Compute matrix transform
        var delta = u0*v1 + v0*u2 + u1*v2 - v1*u2 - v0*u1 - u0*v2;
        var deltaA = x0*v1 + v0*x2 + x1*v2 - v1*x2 - v0*x1 - x0*v2;
        var deltaB = u0*x1 + x0*u2 + u1*x2 - x1*u2 - x0*u1 - u0*x2;
        var deltaC = u0*v1*x2 + v0*x1*u2 + x0*u1*v2 - x0*v1*u2 - v0*u1*x2 - u0*x1*v2;
        var deltaD = y0*v1 + v0*y2 + y1*v2 - v1*y2 - v0*y1 - y0*v2;
        var deltaE = u0*y1 + y0*u2 + u1*y2 - y1*u2 - y0*u1 - u0*y2;
        var deltaF = u0*v1*y2 + v0*y1*u2 + y0*u1*v2 - y0*v1*u2 - v0*u1*y2 - u0*y1*v2;

        context.transform(deltaA / delta, deltaD / delta,
                            deltaB / delta, deltaE / delta,
                            deltaC / delta, deltaF / delta);

        context.drawImage(strip.texture.baseTexture.source, 0, 0);
        context.restore();
    }
};

/*
 * Sets the texture that the Strip will use 
 *
 * @method setTexture
 * @param texture {Texture} the texture that will be used
 * @private
 */

/*
PIXI.Strip.prototype.setTexture = function(texture)
{
    //TODO SET THE TEXTURES
    //TODO VISIBILITY

    // stop current texture
    this.texture = texture;
    this.width   = texture.frame.width;
    this.height  = texture.frame.height;
    this.updateFrame = true;
};
*/

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @method onTextureUpdate
 * @param event
 * @private
 */

PIXI.Strip.prototype.onTextureUpdate = function()
{
    this.updateFrame = true;
};
/* @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * 
 * @class Rope
 * @constructor
 * @param texture {Texture} The texture to use
 * @param points {Array}
 * 
 */
PIXI.Rope = function(texture, points)
{
    PIXI.Strip.call( this, texture );
    this.points = points;

    this.verticies = new PIXI.Float32Array(points.length * 4);
    this.uvs = new PIXI.Float32Array(points.length * 4);
    this.colors = new PIXI.Float32Array(points.length * 2);
    this.indices = new PIXI.Uint16Array(points.length * 2);
   

    this.refresh();
};


// constructor
PIXI.Rope.prototype = Object.create( PIXI.Strip.prototype );
PIXI.Rope.prototype.constructor = PIXI.Rope;

/*
 * Refreshes 
 *
 * @method refresh
 */
PIXI.Rope.prototype.refresh = function()
{
    var points = this.points;
    if(points.length < 1) return;

    var uvs = this.uvs;

    var lastPoint = points[0];
    var indices = this.indices;
    var colors = this.colors;

    this.count-=0.2;

    uvs[0] = 0;
    uvs[1] = 0;
    uvs[2] = 0;
    uvs[3] = 1;

    colors[0] = 1;
    colors[1] = 1;

    indices[0] = 0;
    indices[1] = 1;

    var total = points.length,
        point, index, amount;

    for (var i = 1; i < total; i++)
    {
        point = points[i];
        index = i * 4;
        // time to do some smart drawing!
        amount = i / (total-1);

        if(i%2)
        {
            uvs[index] = amount;
            uvs[index+1] = 0;

            uvs[index+2] = amount;
            uvs[index+3] = 1;
        }
        else
        {
            uvs[index] = amount;
            uvs[index+1] = 0;

            uvs[index+2] = amount;
            uvs[index+3] = 1;
        }

        index = i * 2;
        colors[index] = 1;
        colors[index+1] = 1;

        index = i * 2;
        indices[index] = index;
        indices[index + 1] = index + 1;

        lastPoint = point;
    }
};

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.Rope.prototype.updateTransform = function()
{

    var points = this.points;
    if(points.length < 1)return;

    var lastPoint = points[0];
    var nextPoint;
    var perp = {x:0, y:0};

    this.count-=0.2;

    var verticies = this.verticies;
    var total = points.length,
        point, index, ratio, perpLength, num;

    for (var i = 0; i < total; i++)
    {
        point = points[i];
        index = i * 4;

        if(i < points.length-1)
        {
            nextPoint = points[i+1];
        }
        else
        {
            nextPoint = point;
        }

        perp.y = -(nextPoint.x - lastPoint.x);
        perp.x = nextPoint.y - lastPoint.y;

        ratio = (1 - (i / (total-1))) * 10;

        if(ratio > 1) ratio = 1;

        perpLength = Math.sqrt(perp.x * perp.x + perp.y * perp.y);
        num = this.texture.height / 2; //(20 + Math.abs(Math.sin((i + this.count) * 0.3) * 50) )* ratio;
        perp.x /= perpLength;
        perp.y /= perpLength;

        perp.x *= num;
        perp.y *= num;

        verticies[index] = point.x + perp.x;
        verticies[index+1] = point.y + perp.y;
        verticies[index+2] = point.x - perp.x;
        verticies[index+3] = point.y - perp.y;

        lastPoint = point;
    }

    PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
};
/*
 * Sets the texture that the Rope will use 
 *
 * @method setTexture
 * @param texture {Texture} the texture that will be used
 */
PIXI.Rope.prototype.setTexture = function(texture)
{
    // stop current texture
    this.texture = texture;
    //this.updateFrame = true;
};

/**
 * @author Mat Groves http://matgroves.com/
 */

/**
 * A tiling sprite is a fast way of rendering a tiling image
 *
 * @class TilingSprite
 * @extends Sprite
 * @constructor
 * @param texture {Texture} the texture of the tiling sprite
 * @param width {Number}  the width of the tiling sprite
 * @param height {Number} the height of the tiling sprite
 */
PIXI.TilingSprite = function(texture, width, height)
{
    PIXI.Sprite.call( this, texture);

    /**
     * The with of the tiling sprite
     *
     * @property width
     * @type Number
     */
    this._width = width || 100;

    /**
     * The height of the tiling sprite
     *
     * @property height
     * @type Number
     */
    this._height = height || 100;

    /**
     * The scaling of the image that is being tiled
     *
     * @property tileScale
     * @type Point
     */
    this.tileScale = new PIXI.Point(1,1);

    /**
     * A point that represents the scale of the texture object
     *
     * @property tileScaleOffset
     * @type Point
     */
    this.tileScaleOffset = new PIXI.Point(1,1);
    
    /**
     * The offset position of the image that is being tiled
     *
     * @property tilePosition
     * @type Point
     */
    this.tilePosition = new PIXI.Point(0,0);

    /**
     * Whether this sprite is renderable or not
     *
     * @property renderable
     * @type Boolean
     * @default true
     */
    this.renderable = true;

    /**
     * The tint applied to the sprite. This is a hex value
     *
     * @property tint
     * @type Number
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;
    
    /**
     * The blend mode to be applied to the sprite
     *
     * @property blendMode
     * @type Number
     * @default PIXI.blendModes.NORMAL;
     */
    this.blendMode = PIXI.blendModes.NORMAL;

    

};

// constructor
PIXI.TilingSprite.prototype = Object.create(PIXI.Sprite.prototype);
PIXI.TilingSprite.prototype.constructor = PIXI.TilingSprite;


/**
 * The width of the sprite, setting this will actually modify the scale to achieve the value set
 *
 * @property width
 * @type Number
 */
Object.defineProperty(PIXI.TilingSprite.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(value) {
        
        this._width = value;
    }
});

/**
 * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
 *
 * @property height
 * @type Number
 */
Object.defineProperty(PIXI.TilingSprite.prototype, 'height', {
    get: function() {
        return  this._height;
    },
    set: function(value) {
        this._height = value;
    }
});

PIXI.TilingSprite.prototype.setTexture = function(texture)
{
    if (this.texture === texture) return;

    this.texture = texture;

    this.refreshTexture = true;

    this.cachedTint = 0xFFFFFF;
};

/**
* Renders the object using the WebGL renderer
*
* @method _renderWebGL
* @param renderSession {RenderSession} 
* @private
*/
PIXI.TilingSprite.prototype._renderWebGL = function(renderSession)
{
    if (this.visible === false || this.alpha === 0) return;
    var i,j;

    if (this._mask)
    {
        renderSession.spriteBatch.stop();
        renderSession.maskManager.pushMask(this.mask, renderSession);
        renderSession.spriteBatch.start();
    }

    if (this._filters)
    {
        renderSession.spriteBatch.flush();
        renderSession.filterManager.pushFilter(this._filterBlock);
    }

   

    if (!this.tilingTexture || this.refreshTexture)
    {
        this.generateTilingTexture(true);

        if (this.tilingTexture && this.tilingTexture.needsUpdate)
        {
            //TODO - tweaking
            PIXI.updateWebGLTexture(this.tilingTexture.baseTexture, renderSession.gl);
            this.tilingTexture.needsUpdate = false;
           // this.tilingTexture._uvs = null;
        }
    }
    else
    {
        renderSession.spriteBatch.renderTilingSprite(this);
    }
    // simple render children!
    for (i=0,j=this.children.length; i<j; i++)
    {
        this.children[i]._renderWebGL(renderSession);
    }

    renderSession.spriteBatch.stop();

    if (this._filters) renderSession.filterManager.popFilter();
    if (this._mask) renderSession.maskManager.popMask(renderSession);
    
    renderSession.spriteBatch.start();
};

/**
* Renders the object using the Canvas renderer
*
* @method _renderCanvas
* @param renderSession {RenderSession} 
* @private
*/
PIXI.TilingSprite.prototype._renderCanvas = function(renderSession)
{
    if (this.visible === false || this.alpha === 0)return;
    
    var context = renderSession.context;

    if (this._mask)
    {
        renderSession.maskManager.pushMask(this._mask, context);
    }

    context.globalAlpha = this.worldAlpha;
    
    var transform = this.worldTransform;

    var i,j;

    context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx , transform.ty);

    if (!this.__tilePattern ||  this.refreshTexture)
    {
        this.generateTilingTexture(false);
    
        if (this.tilingTexture)
        {
            this.__tilePattern = context.createPattern(this.tilingTexture.baseTexture.source, 'repeat');
        }
        else
        {
            return;
        }
    }

    // check blend mode
    if (this.blendMode !== renderSession.currentBlendMode)
    {
        renderSession.currentBlendMode = this.blendMode;
        context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
    }

    var tilePosition = this.tilePosition;
    var tileScale = this.tileScale;

    tilePosition.x %= this.tilingTexture.baseTexture.width;
    tilePosition.y %= this.tilingTexture.baseTexture.height;

    // offset
    context.scale(tileScale.x,tileScale.y);
    context.translate(tilePosition.x, tilePosition.y);

    context.fillStyle = this.__tilePattern;

    // make sure to account for the anchor point..
    context.fillRect(-tilePosition.x + (this.anchor.x * -this._width),
                    -tilePosition.y + (this.anchor.y * -this._height),
                    this._width / tileScale.x,
                    this._height / tileScale.y);

    context.scale(1 / tileScale.x, 1 / tileScale.y);
    context.translate(-tilePosition.x, -tilePosition.y);

    if (this._mask)
    {
        renderSession.maskManager.popMask(renderSession.context);
    }

    for (i=0,j=this.children.length; i<j; i++)
    {
        this.children[i]._renderCanvas(renderSession);
    }
};


/**
* Returns the framing rectangle of the sprite as a PIXI.Rectangle object
*
* @method getBounds
* @return {Rectangle} the framing rectangle
*/
PIXI.TilingSprite.prototype.getBounds = function()
{
    var width = this._width;
    var height = this._height;

    var w0 = width * (1-this.anchor.x);
    var w1 = width * -this.anchor.x;

    var h0 = height * (1-this.anchor.y);
    var h1 = height * -this.anchor.y;

    var worldTransform = this.worldTransform;

    var a = worldTransform.a;
    var b = worldTransform.c;
    var c = worldTransform.b;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;
    
    var x1 = a * w1 + c * h1 + tx;
    var y1 = d * h1 + b * w1 + ty;

    var x2 = a * w0 + c * h1 + tx;
    var y2 = d * h1 + b * w0 + ty;

    var x3 = a * w0 + c * h0 + tx;
    var y3 = d * h0 + b * w0 + ty;

    var x4 =  a * w1 + c * h0 + tx;
    var y4 =  d * h0 + b * w1 + ty;

    var maxX = -Infinity;
    var maxY = -Infinity;

    var minX = Infinity;
    var minY = Infinity;

    minX = x1 < minX ? x1 : minX;
    minX = x2 < minX ? x2 : minX;
    minX = x3 < minX ? x3 : minX;
    minX = x4 < minX ? x4 : minX;

    minY = y1 < minY ? y1 : minY;
    minY = y2 < minY ? y2 : minY;
    minY = y3 < minY ? y3 : minY;
    minY = y4 < minY ? y4 : minY;

    maxX = x1 > maxX ? x1 : maxX;
    maxX = x2 > maxX ? x2 : maxX;
    maxX = x3 > maxX ? x3 : maxX;
    maxX = x4 > maxX ? x4 : maxX;

    maxY = y1 > maxY ? y1 : maxY;
    maxY = y2 > maxY ? y2 : maxY;
    maxY = y3 > maxY ? y3 : maxY;
    maxY = y4 > maxY ? y4 : maxY;

    var bounds = this._bounds;

    bounds.x = minX;
    bounds.width = maxX - minX;

    bounds.y = minY;
    bounds.height = maxY - minY;

    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
    this._currentBounds = bounds;

    return bounds;
};



/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @method onTextureUpdate
 * @param event
 * @private
 */
PIXI.TilingSprite.prototype.onTextureUpdate = function()
{
   // overriding the sprite version of this!
};


/**
* 
* @method generateTilingTexture
* 
* @param forcePowerOfTwo {Boolean} Whether we want to force the texture to be a power of two
*/
PIXI.TilingSprite.prototype.generateTilingTexture = function(forcePowerOfTwo)
{
    if (!this.texture.baseTexture.hasLoaded) return;

    var texture = this.texture;
    var frame = texture.frame;
    var targetWidth, targetHeight;

    //  Check that the frame is the same size as the base texture.
    var isFrame = frame.width !== texture.baseTexture.width || frame.height !== texture.baseTexture.height;

    var newTextureRequired = false;

    if (!forcePowerOfTwo)
    {
        if (isFrame)
        {
            targetWidth = frame.width;
            targetHeight = frame.height;
           
            newTextureRequired = true;
        }
    }
    else
    {
        targetWidth = PIXI.getNextPowerOfTwo(frame.width);
        targetHeight = PIXI.getNextPowerOfTwo(frame.height);

        if (frame.width !== targetWidth || frame.height !== targetHeight) newTextureRequired = true;
    }

    if (newTextureRequired)
    {
        var canvasBuffer;

        if (this.tilingTexture && this.tilingTexture.isTiling)
        {
            canvasBuffer = this.tilingTexture.canvasBuffer;
            canvasBuffer.resize(targetWidth, targetHeight);
            this.tilingTexture.baseTexture.width = targetWidth;
            this.tilingTexture.baseTexture.height = targetHeight;
            this.tilingTexture.needsUpdate = true;
        }
        else
        {
            canvasBuffer = new PIXI.CanvasBuffer(targetWidth, targetHeight);

            this.tilingTexture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);
            this.tilingTexture.canvasBuffer = canvasBuffer;
            this.tilingTexture.isTiling = true;
        }

        canvasBuffer.context.drawImage(texture.baseTexture.source,
                               texture.crop.x,
                               texture.crop.y,
                               texture.crop.width,
                               texture.crop.height,
                               0,
                               0,
                               targetWidth,
                               targetHeight);

        this.tileScaleOffset.x = frame.width / targetWidth;
        this.tileScaleOffset.y = frame.height / targetHeight;
    }
    else
    {
        //  TODO - switching?
        if (this.tilingTexture && this.tilingTexture.isTiling)
        {
            // destroy the tiling texture!
            // TODO could store this somewhere?
            this.tilingTexture.destroy(true);
        }

        this.tileScaleOffset.x = 1;
        this.tileScaleOffset.y = 1;
        this.tilingTexture = texture;
    }

    this.refreshTexture = false;
    this.tilingTexture.baseTexture._powerOf2 = true;
};
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * based on pixi impact spine implementation made by Eemeli Kelokorpi (@ekelokorpi) https://github.com/ekelokorpi
 *
 * Awesome JS run time provided by EsotericSoftware
 * https://github.com/EsotericSoftware/spine-runtimes
 *
 */

/*
 * Awesome JS run time provided by EsotericSoftware
 *
 * https://github.com/EsotericSoftware/spine-runtimes
 *
 */



var spine = {};

spine.BoneData = function (name, parent) {
    this.name = name;
    this.parent = parent;
};
spine.BoneData.prototype = {
    length: 0,
    x: 0, y: 0,
    rotation: 0,
    scaleX: 1, scaleY: 1
};

spine.SlotData = function (name, boneData) {
    this.name = name;
    this.boneData = boneData;
};
spine.SlotData.prototype = {
    r: 1, g: 1, b: 1, a: 1,
    attachmentName: null
};

spine.Bone = function (boneData, parent) {
    this.data = boneData;
    this.parent = parent;
    this.setToSetupPose();
};
spine.Bone.yDown = false;
spine.Bone.prototype = {
    x: 0, y: 0,
    rotation: 0,
    scaleX: 1, scaleY: 1,
    m00: 0, m01: 0, worldX: 0, // a b x
    m10: 0, m11: 0, worldY: 0, // c d y
    worldRotation: 0,
    worldScaleX: 1, worldScaleY: 1,
    updateWorldTransform: function (flipX, flipY) {
        var parent = this.parent;
        if (parent != null) {
            this.worldX = this.x * parent.m00 + this.y * parent.m01 + parent.worldX;
            this.worldY = this.x * parent.m10 + this.y * parent.m11 + parent.worldY;
            this.worldScaleX = parent.worldScaleX * this.scaleX;
            this.worldScaleY = parent.worldScaleY * this.scaleY;
            this.worldRotation = parent.worldRotation + this.rotation;
        } else {
            this.worldX = this.x;
            this.worldY = this.y;
            this.worldScaleX = this.scaleX;
            this.worldScaleY = this.scaleY;
            this.worldRotation = this.rotation;
        }
        var radians = this.worldRotation * Math.PI / 180;
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        this.m00 = cos * this.worldScaleX;
        this.m10 = sin * this.worldScaleX;
        this.m01 = -sin * this.worldScaleY;
        this.m11 = cos * this.worldScaleY;
        if (flipX) {
            this.m00 = -this.m00;
            this.m01 = -this.m01;
        }
        if (flipY) {
            this.m10 = -this.m10;
            this.m11 = -this.m11;
        }
        if (spine.Bone.yDown) {
            this.m10 = -this.m10;
            this.m11 = -this.m11;
        }
    },
    setToSetupPose: function () {
        var data = this.data;
        this.x = data.x;
        this.y = data.y;
        this.rotation = data.rotation;
        this.scaleX = data.scaleX;
        this.scaleY = data.scaleY;
    }
};

spine.Slot = function (slotData, skeleton, bone) {
    this.data = slotData;
    this.skeleton = skeleton;
    this.bone = bone;
    this.setToSetupPose();
};
spine.Slot.prototype = {
    r: 1, g: 1, b: 1, a: 1,
    _attachmentTime: 0,
    attachment: null,
    setAttachment: function (attachment) {
        this.attachment = attachment;
        this._attachmentTime = this.skeleton.time;
    },
    setAttachmentTime: function (time) {
        this._attachmentTime = this.skeleton.time - time;
    },
    getAttachmentTime: function () {
        return this.skeleton.time - this._attachmentTime;
    },
    setToSetupPose: function () {
        var data = this.data;
        this.r = data.r;
        this.g = data.g;
        this.b = data.b;
        this.a = data.a;

        var slotDatas = this.skeleton.data.slots;
        for (var i = 0, n = slotDatas.length; i < n; i++) {
            if (slotDatas[i] == data) {
                this.setAttachment(!data.attachmentName ? null : this.skeleton.getAttachmentBySlotIndex(i, data.attachmentName));
                break;
            }
        }
    }
};

spine.Skin = function (name) {
    this.name = name;
    this.attachments = {};
};
spine.Skin.prototype = {
    addAttachment: function (slotIndex, name, attachment) {
        this.attachments[slotIndex + ":" + name] = attachment;
    },
    getAttachment: function (slotIndex, name) {
        return this.attachments[slotIndex + ":" + name];
    },
    _attachAll: function (skeleton, oldSkin) {
        for (var key in oldSkin.attachments) {
            var colon = key.indexOf(":");
            var slotIndex = parseInt(key.substring(0, colon), 10);
            var name = key.substring(colon + 1);
            var slot = skeleton.slots[slotIndex];
            if (slot.attachment && slot.attachment.name == name) {
                var attachment = this.getAttachment(slotIndex, name);
                if (attachment) slot.setAttachment(attachment);
            }
        }
    }
};

spine.Animation = function (name, timelines, duration) {
    this.name = name;
    this.timelines = timelines;
    this.duration = duration;
};
spine.Animation.prototype = {
    apply: function (skeleton, time, loop) {
        if (loop && this.duration) time %= this.duration;
        var timelines = this.timelines;
        for (var i = 0, n = timelines.length; i < n; i++)
            timelines[i].apply(skeleton, time, 1);
    },
    mix: function (skeleton, time, loop, alpha) {
        if (loop && this.duration) time %= this.duration;
        var timelines = this.timelines;
        for (var i = 0, n = timelines.length; i < n; i++)
            timelines[i].apply(skeleton, time, alpha);
    }
};

spine.binarySearch = function (values, target, step) {
    var low = 0;
    var high = Math.floor(values.length / step) - 2;
    if (!high) return step;
    var current = high >>> 1;
    while (true) {
        if (values[(current + 1) * step] <= target)
            low = current + 1;
        else
            high = current;
        if (low == high) return (low + 1) * step;
        current = (low + high) >>> 1;
    }
};
spine.linearSearch = function (values, target, step) {
    for (var i = 0, last = values.length - step; i <= last; i += step)
        if (values[i] > target) return i;
    return -1;
};

spine.Curves = function (frameCount) {
    this.curves = []; // dfx, dfy, ddfx, ddfy, dddfx, dddfy, ...
    this.curves.length = (frameCount - 1) * 6;
};
spine.Curves.prototype = {
    setLinear: function (frameIndex) {
        this.curves[frameIndex * 6] = 0/*LINEAR*/;
    },
    setStepped: function (frameIndex) {
        this.curves[frameIndex * 6] = -1/*STEPPED*/;
    },
    /** Sets the control handle positions for an interpolation bezier curve used to transition from this keyframe to the next.
     * cx1 and cx2 are from 0 to 1, representing the percent of time between the two keyframes. cy1 and cy2 are the percent of
     * the difference between the keyframe's values. */
    setCurve: function (frameIndex, cx1, cy1, cx2, cy2) {
        var subdiv_step = 1 / 10/*BEZIER_SEGMENTS*/;
        var subdiv_step2 = subdiv_step * subdiv_step;
        var subdiv_step3 = subdiv_step2 * subdiv_step;
        var pre1 = 3 * subdiv_step;
        var pre2 = 3 * subdiv_step2;
        var pre4 = 6 * subdiv_step2;
        var pre5 = 6 * subdiv_step3;
        var tmp1x = -cx1 * 2 + cx2;
        var tmp1y = -cy1 * 2 + cy2;
        var tmp2x = (cx1 - cx2) * 3 + 1;
        var tmp2y = (cy1 - cy2) * 3 + 1;
        var i = frameIndex * 6;
        var curves = this.curves;
        curves[i] = cx1 * pre1 + tmp1x * pre2 + tmp2x * subdiv_step3;
        curves[i + 1] = cy1 * pre1 + tmp1y * pre2 + tmp2y * subdiv_step3;
        curves[i + 2] = tmp1x * pre4 + tmp2x * pre5;
        curves[i + 3] = tmp1y * pre4 + tmp2y * pre5;
        curves[i + 4] = tmp2x * pre5;
        curves[i + 5] = tmp2y * pre5;
    },
    getCurvePercent: function (frameIndex, percent) {
        percent = percent < 0 ? 0 : (percent > 1 ? 1 : percent);
        var curveIndex = frameIndex * 6;
        var curves = this.curves;
        var dfx = curves[curveIndex];
        if (!dfx/*LINEAR*/) return percent;
        if (dfx == -1/*STEPPED*/) return 0;
        var dfy = curves[curveIndex + 1];
        var ddfx = curves[curveIndex + 2];
        var ddfy = curves[curveIndex + 3];
        var dddfx = curves[curveIndex + 4];
        var dddfy = curves[curveIndex + 5];
        var x = dfx, y = dfy;
        var i = 10/*BEZIER_SEGMENTS*/ - 2;
        while (true) {
            if (x >= percent) {
                var lastX = x - dfx;
                var lastY = y - dfy;
                return lastY + (y - lastY) * (percent - lastX) / (x - lastX);
            }
            if (!i) break;
            i--;
            dfx += ddfx;
            dfy += ddfy;
            ddfx += dddfx;
            ddfy += dddfy;
            x += dfx;
            y += dfy;
        }
        return y + (1 - y) * (percent - x) / (1 - x); // Last point is 1,1.
    }
};

spine.RotateTimeline = function (frameCount) {
    this.curves = new spine.Curves(frameCount);
    this.frames = []; // time, angle, ...
    this.frames.length = frameCount * 2;
};
spine.RotateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 2;
    },
    setFrame: function (frameIndex, time, angle) {
        frameIndex *= 2;
        this.frames[frameIndex] = time;
        this.frames[frameIndex + 1] = angle;
    },
    apply: function (skeleton, time, alpha) {
        var frames = this.frames,
            amount;

        if (time < frames[0]) return; // Time is before first frame.

        var bone = skeleton.bones[this.boneIndex];

        if (time >= frames[frames.length - 2]) { // Time is after last frame.
            amount = bone.data.rotation + frames[frames.length - 1] - bone.rotation;
            while (amount > 180)
                amount -= 360;
            while (amount < -180)
                amount += 360;
            bone.rotation += amount * alpha;
            return;
        }

        // Interpolate between the last frame and the current frame.
        var frameIndex = spine.binarySearch(frames, time, 2);
        var lastFrameValue = frames[frameIndex - 1];
        var frameTime = frames[frameIndex];
        var percent = 1 - (time - frameTime) / (frames[frameIndex - 2/*LAST_FRAME_TIME*/] - frameTime);
        percent = this.curves.getCurvePercent(frameIndex / 2 - 1, percent);

        amount = frames[frameIndex + 1/*FRAME_VALUE*/] - lastFrameValue;
        while (amount > 180)
            amount -= 360;
        while (amount < -180)
            amount += 360;
        amount = bone.data.rotation + (lastFrameValue + amount * percent) - bone.rotation;
        while (amount > 180)
            amount -= 360;
        while (amount < -180)
            amount += 360;
        bone.rotation += amount * alpha;
    }
};

spine.TranslateTimeline = function (frameCount) {
    this.curves = new spine.Curves(frameCount);
    this.frames = []; // time, x, y, ...
    this.frames.length = frameCount * 3;
};
spine.TranslateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 3;
    },
    setFrame: function (frameIndex, time, x, y) {
        frameIndex *= 3;
        this.frames[frameIndex] = time;
        this.frames[frameIndex + 1] = x;
        this.frames[frameIndex + 2] = y;
    },
    apply: function (skeleton, time, alpha) {
        var frames = this.frames;
        if (time < frames[0]) return; // Time is before first frame.

        var bone = skeleton.bones[this.boneIndex];

        if (time >= frames[frames.length - 3]) { // Time is after last frame.
            bone.x += (bone.data.x + frames[frames.length - 2] - bone.x) * alpha;
            bone.y += (bone.data.y + frames[frames.length - 1] - bone.y) * alpha;
            return;
        }

        // Interpolate between the last frame and the current frame.
        var frameIndex = spine.binarySearch(frames, time, 3);
        var lastFrameX = frames[frameIndex - 2];
        var lastFrameY = frames[frameIndex - 1];
        var frameTime = frames[frameIndex];
        var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*LAST_FRAME_TIME*/] - frameTime);
        percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);

        bone.x += (bone.data.x + lastFrameX + (frames[frameIndex + 1/*FRAME_X*/] - lastFrameX) * percent - bone.x) * alpha;
        bone.y += (bone.data.y + lastFrameY + (frames[frameIndex + 2/*FRAME_Y*/] - lastFrameY) * percent - bone.y) * alpha;
    }
};

spine.ScaleTimeline = function (frameCount) {
    this.curves = new spine.Curves(frameCount);
    this.frames = []; // time, x, y, ...
    this.frames.length = frameCount * 3;
};
spine.ScaleTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 3;
    },
    setFrame: function (frameIndex, time, x, y) {
        frameIndex *= 3;
        this.frames[frameIndex] = time;
        this.frames[frameIndex + 1] = x;
        this.frames[frameIndex + 2] = y;
    },
    apply: function (skeleton, time, alpha) {
        var frames = this.frames;
        if (time < frames[0]) return; // Time is before first frame.

        var bone = skeleton.bones[this.boneIndex];

        if (time >= frames[frames.length - 3]) { // Time is after last frame.
            bone.scaleX += (bone.data.scaleX - 1 + frames[frames.length - 2] - bone.scaleX) * alpha;
            bone.scaleY += (bone.data.scaleY - 1 + frames[frames.length - 1] - bone.scaleY) * alpha;
            return;
        }

        // Interpolate between the last frame and the current frame.
        var frameIndex = spine.binarySearch(frames, time, 3);
        var lastFrameX = frames[frameIndex - 2];
        var lastFrameY = frames[frameIndex - 1];
        var frameTime = frames[frameIndex];
        var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*LAST_FRAME_TIME*/] - frameTime);
        percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);

        bone.scaleX += (bone.data.scaleX - 1 + lastFrameX + (frames[frameIndex + 1/*FRAME_X*/] - lastFrameX) * percent - bone.scaleX) * alpha;
        bone.scaleY += (bone.data.scaleY - 1 + lastFrameY + (frames[frameIndex + 2/*FRAME_Y*/] - lastFrameY) * percent - bone.scaleY) * alpha;
    }
};

spine.ColorTimeline = function (frameCount) {
    this.curves = new spine.Curves(frameCount);
    this.frames = []; // time, r, g, b, a, ...
    this.frames.length = frameCount * 5;
};
spine.ColorTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 5;
    },
    setFrame: function (frameIndex, time, r, g, b, a) {
        frameIndex *= 5;
        this.frames[frameIndex] = time;
        this.frames[frameIndex + 1] = r;
        this.frames[frameIndex + 2] = g;
        this.frames[frameIndex + 3] = b;
        this.frames[frameIndex + 4] = a;
    },
    apply: function (skeleton, time, alpha) {
        var frames = this.frames;
        if (time < frames[0]) return; // Time is before first frame.

        var slot = skeleton.slots[this.slotIndex];

        if (time >= frames[frames.length - 5]) { // Time is after last frame.
            var i = frames.length - 1;
            slot.r = frames[i - 3];
            slot.g = frames[i - 2];
            slot.b = frames[i - 1];
            slot.a = frames[i];
            return;
        }

        // Interpolate between the last frame and the current frame.
        var frameIndex = spine.binarySearch(frames, time, 5);
        var lastFrameR = frames[frameIndex - 4];
        var lastFrameG = frames[frameIndex - 3];
        var lastFrameB = frames[frameIndex - 2];
        var lastFrameA = frames[frameIndex - 1];
        var frameTime = frames[frameIndex];
        var percent = 1 - (time - frameTime) / (frames[frameIndex - 5/*LAST_FRAME_TIME*/] - frameTime);
        percent = this.curves.getCurvePercent(frameIndex / 5 - 1, percent);

        var r = lastFrameR + (frames[frameIndex + 1/*FRAME_R*/] - lastFrameR) * percent;
        var g = lastFrameG + (frames[frameIndex + 2/*FRAME_G*/] - lastFrameG) * percent;
        var b = lastFrameB + (frames[frameIndex + 3/*FRAME_B*/] - lastFrameB) * percent;
        var a = lastFrameA + (frames[frameIndex + 4/*FRAME_A*/] - lastFrameA) * percent;
        if (alpha < 1) {
            slot.r += (r - slot.r) * alpha;
            slot.g += (g - slot.g) * alpha;
            slot.b += (b - slot.b) * alpha;
            slot.a += (a - slot.a) * alpha;
        } else {
            slot.r = r;
            slot.g = g;
            slot.b = b;
            slot.a = a;
        }
    }
};

spine.AttachmentTimeline = function (frameCount) {
    this.curves = new spine.Curves(frameCount);
    this.frames = []; // time, ...
    this.frames.length = frameCount;
    this.attachmentNames = []; // time, ...
    this.attachmentNames.length = frameCount;
};
spine.AttachmentTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function () {
            return this.frames.length;
    },
    setFrame: function (frameIndex, time, attachmentName) {
        this.frames[frameIndex] = time;
        this.attachmentNames[frameIndex] = attachmentName;
    },
    apply: function (skeleton, time, alpha) {
        var frames = this.frames;
        if (time < frames[0]) return; // Time is before first frame.

        var frameIndex;
        if (time >= frames[frames.length - 1]) // Time is after last frame.
            frameIndex = frames.length - 1;
        else
            frameIndex = spine.binarySearch(frames, time, 1) - 1;

        var attachmentName = this.attachmentNames[frameIndex];
        skeleton.slots[this.slotIndex].setAttachment(!attachmentName ? null : skeleton.getAttachmentBySlotIndex(this.slotIndex, attachmentName));
    }
};

spine.SkeletonData = function () {
    this.bones = [];
    this.slots = [];
    this.skins = [];
    this.animations = [];
};
spine.SkeletonData.prototype = {
    defaultSkin: null,
    /** @return May be null. */
    findBone: function (boneName) {
        var bones = this.bones;
        for (var i = 0, n = bones.length; i < n; i++)
            if (bones[i].name == boneName) return bones[i];
        return null;
    },
    /** @return -1 if the bone was not found. */
    findBoneIndex: function (boneName) {
        var bones = this.bones;
        for (var i = 0, n = bones.length; i < n; i++)
            if (bones[i].name == boneName) return i;
        return -1;
    },
    /** @return May be null. */
    findSlot: function (slotName) {
        var slots = this.slots;
        for (var i = 0, n = slots.length; i < n; i++) {
            if (slots[i].name == slotName) return slot[i];
        }
        return null;
    },
    /** @return -1 if the bone was not found. */
    findSlotIndex: function (slotName) {
        var slots = this.slots;
        for (var i = 0, n = slots.length; i < n; i++)
            if (slots[i].name == slotName) return i;
        return -1;
    },
    /** @return May be null. */
    findSkin: function (skinName) {
        var skins = this.skins;
        for (var i = 0, n = skins.length; i < n; i++)
            if (skins[i].name == skinName) return skins[i];
        return null;
    },
    /** @return May be null. */
    findAnimation: function (animationName) {
        var animations = this.animations;
        for (var i = 0, n = animations.length; i < n; i++)
            if (animations[i].name == animationName) return animations[i];
        return null;
    }
};

spine.Skeleton = function (skeletonData) {
    this.data = skeletonData;

    this.bones = [];
    for (var i = 0, n = skeletonData.bones.length; i < n; i++) {
        var boneData = skeletonData.bones[i];
        var parent = !boneData.parent ? null : this.bones[skeletonData.bones.indexOf(boneData.parent)];
        this.bones.push(new spine.Bone(boneData, parent));
    }

    this.slots = [];
    this.drawOrder = [];
    for (i = 0, n = skeletonData.slots.length; i < n; i++) {
        var slotData = skeletonData.slots[i];
        var bone = this.bones[skeletonData.bones.indexOf(slotData.boneData)];
        var slot = new spine.Slot(slotData, this, bone);
        this.slots.push(slot);
        this.drawOrder.push(slot);
    }
};
spine.Skeleton.prototype = {
    x: 0, y: 0,
    skin: null,
    r: 1, g: 1, b: 1, a: 1,
    time: 0,
    flipX: false, flipY: false,
    /** Updates the world transform for each bone. */
    updateWorldTransform: function () {
        var flipX = this.flipX;
        var flipY = this.flipY;
        var bones = this.bones;
        for (var i = 0, n = bones.length; i < n; i++)
            bones[i].updateWorldTransform(flipX, flipY);
    },
    /** Sets the bones and slots to their setup pose values. */
    setToSetupPose: function () {
        this.setBonesToSetupPose();
        this.setSlotsToSetupPose();
    },
    setBonesToSetupPose: function () {
        var bones = this.bones;
        for (var i = 0, n = bones.length; i < n; i++)
            bones[i].setToSetupPose();
    },
    setSlotsToSetupPose: function () {
        var slots = this.slots;
        for (var i = 0, n = slots.length; i < n; i++)
            slots[i].setToSetupPose(i);
    },
    /** @return May return null. */
    getRootBone: function () {
        return this.bones.length ? this.bones[0] : null;
    },
    /** @return May be null. */
    findBone: function (boneName) {
        var bones = this.bones;
        for (var i = 0, n = bones.length; i < n; i++)
            if (bones[i].data.name == boneName) return bones[i];
        return null;
    },
    /** @return -1 if the bone was not found. */
    findBoneIndex: function (boneName) {
        var bones = this.bones;
        for (var i = 0, n = bones.length; i < n; i++)
            if (bones[i].data.name == boneName) return i;
        return -1;
    },
    /** @return May be null. */
    findSlot: function (slotName) {
        var slots = this.slots;
        for (var i = 0, n = slots.length; i < n; i++)
            if (slots[i].data.name == slotName) return slots[i];
        return null;
    },
    /** @return -1 if the bone was not found. */
    findSlotIndex: function (slotName) {
        var slots = this.slots;
        for (var i = 0, n = slots.length; i < n; i++)
            if (slots[i].data.name == slotName) return i;
        return -1;
    },
    setSkinByName: function (skinName) {
        var skin = this.data.findSkin(skinName);
        if (!skin) throw "Skin not found: " + skinName;
        this.setSkin(skin);
    },
    /** Sets the skin used to look up attachments not found in the {@link SkeletonData#getDefaultSkin() default skin}. Attachments
     * from the new skin are attached if the corresponding attachment from the old skin was attached.
     * @param newSkin May be null. */
    setSkin: function (newSkin) {
        if (this.skin && newSkin) newSkin._attachAll(this, this.skin);
        this.skin = newSkin;
    },
    /** @return May be null. */
    getAttachmentBySlotName: function (slotName, attachmentName) {
        return this.getAttachmentBySlotIndex(this.data.findSlotIndex(slotName), attachmentName);
    },
    /** @return May be null. */
    getAttachmentBySlotIndex: function (slotIndex, attachmentName) {
        if (this.skin) {
            var attachment = this.skin.getAttachment(slotIndex, attachmentName);
            if (attachment) return attachment;
        }
        if (this.data.defaultSkin) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
        return null;
    },
    /** @param attachmentName May be null. */
    setAttachment: function (slotName, attachmentName) {
        var slots = this.slots;
        for (var i = 0, n = slots.size; i < n; i++) {
            var slot = slots[i];
            if (slot.data.name == slotName) {
                var attachment = null;
                if (attachmentName) {
                    attachment = this.getAttachment(i, attachmentName);
                    if (attachment == null) throw "Attachment not found: " + attachmentName + ", for slot: " + slotName;
                }
                slot.setAttachment(attachment);
                return;
            }
        }
        throw "Slot not found: " + slotName;
    },
    update: function (delta) {
        time += delta;
    }
};

spine.AttachmentType = {
    region: 0
};

spine.RegionAttachment = function () {
    this.offset = [];
    this.offset.length = 8;
    this.uvs = [];
    this.uvs.length = 8;
};
spine.RegionAttachment.prototype = {
    x: 0, y: 0,
    rotation: 0,
    scaleX: 1, scaleY: 1,
    width: 0, height: 0,
    rendererObject: null,
    regionOffsetX: 0, regionOffsetY: 0,
    regionWidth: 0, regionHeight: 0,
    regionOriginalWidth: 0, regionOriginalHeight: 0,
    setUVs: function (u, v, u2, v2, rotate) {
        var uvs = this.uvs;
        if (rotate) {
            uvs[2/*X2*/] = u;
            uvs[3/*Y2*/] = v2;
            uvs[4/*X3*/] = u;
            uvs[5/*Y3*/] = v;
            uvs[6/*X4*/] = u2;
            uvs[7/*Y4*/] = v;
            uvs[0/*X1*/] = u2;
            uvs[1/*Y1*/] = v2;
        } else {
            uvs[0/*X1*/] = u;
            uvs[1/*Y1*/] = v2;
            uvs[2/*X2*/] = u;
            uvs[3/*Y2*/] = v;
            uvs[4/*X3*/] = u2;
            uvs[5/*Y3*/] = v;
            uvs[6/*X4*/] = u2;
            uvs[7/*Y4*/] = v2;
        }
    },
    updateOffset: function () {
        var regionScaleX = this.width / this.regionOriginalWidth * this.scaleX;
        var regionScaleY = this.height / this.regionOriginalHeight * this.scaleY;
        var localX = -this.width / 2 * this.scaleX + this.regionOffsetX * regionScaleX;
        var localY = -this.height / 2 * this.scaleY + this.regionOffsetY * regionScaleY;
        var localX2 = localX + this.regionWidth * regionScaleX;
        var localY2 = localY + this.regionHeight * regionScaleY;
        var radians = this.rotation * Math.PI / 180;
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        var localXCos = localX * cos + this.x;
        var localXSin = localX * sin;
        var localYCos = localY * cos + this.y;
        var localYSin = localY * sin;
        var localX2Cos = localX2 * cos + this.x;
        var localX2Sin = localX2 * sin;
        var localY2Cos = localY2 * cos + this.y;
        var localY2Sin = localY2 * sin;
        var offset = this.offset;
        offset[0/*X1*/] = localXCos - localYSin;
        offset[1/*Y1*/] = localYCos + localXSin;
        offset[2/*X2*/] = localXCos - localY2Sin;
        offset[3/*Y2*/] = localY2Cos + localXSin;
        offset[4/*X3*/] = localX2Cos - localY2Sin;
        offset[5/*Y3*/] = localY2Cos + localX2Sin;
        offset[6/*X4*/] = localX2Cos - localYSin;
        offset[7/*Y4*/] = localYCos + localX2Sin;
    },
    computeVertices: function (x, y, bone, vertices) {
        x += bone.worldX;
        y += bone.worldY;
        var m00 = bone.m00;
        var m01 = bone.m01;
        var m10 = bone.m10;
        var m11 = bone.m11;
        var offset = this.offset;
        vertices[0/*X1*/] = offset[0/*X1*/] * m00 + offset[1/*Y1*/] * m01 + x;
        vertices[1/*Y1*/] = offset[0/*X1*/] * m10 + offset[1/*Y1*/] * m11 + y;
        vertices[2/*X2*/] = offset[2/*X2*/] * m00 + offset[3/*Y2*/] * m01 + x;
        vertices[3/*Y2*/] = offset[2/*X2*/] * m10 + offset[3/*Y2*/] * m11 + y;
        vertices[4/*X3*/] = offset[4/*X3*/] * m00 + offset[5/*X3*/] * m01 + x;
        vertices[5/*X3*/] = offset[4/*X3*/] * m10 + offset[5/*X3*/] * m11 + y;
        vertices[6/*X4*/] = offset[6/*X4*/] * m00 + offset[7/*Y4*/] * m01 + x;
        vertices[7/*Y4*/] = offset[6/*X4*/] * m10 + offset[7/*Y4*/] * m11 + y;
    }
}

spine.AnimationStateData = function (skeletonData) {
    this.skeletonData = skeletonData;
    this.animationToMixTime = {};
};
spine.AnimationStateData.prototype = {
        defaultMix: 0,
    setMixByName: function (fromName, toName, duration) {
        var from = this.skeletonData.findAnimation(fromName);
        if (!from) throw "Animation not found: " + fromName;
        var to = this.skeletonData.findAnimation(toName);
        if (!to) throw "Animation not found: " + toName;
        this.setMix(from, to, duration);
    },
    setMix: function (from, to, duration) {
        this.animationToMixTime[from.name + ":" + to.name] = duration;
    },
    getMix: function (from, to) {
        var time = this.animationToMixTime[from.name + ":" + to.name];
            return time ? time : this.defaultMix;
    }
};

spine.AnimationState = function (stateData) {
    this.data = stateData;
    this.queue = [];
};
spine.AnimationState.prototype = {
    animationSpeed: 1,
    current: null,
    previous: null,
    currentTime: 0,
    previousTime: 0,
    currentLoop: false,
    previousLoop: false,
    mixTime: 0,
    mixDuration: 0,
    update: function (delta) {
        this.currentTime += (delta * this.animationSpeed); //timeScale: Multiply delta by the speed of animation required.
        this.previousTime += delta;
        this.mixTime += delta;

        if (this.queue.length > 0) {
            var entry = this.queue[0];
            if (this.currentTime >= entry.delay) {
                this._setAnimation(entry.animation, entry.loop);
                this.queue.shift();
            }
        }
    },
    apply: function (skeleton) {
        if (!this.current) return;
        if (this.previous) {
            this.previous.apply(skeleton, this.previousTime, this.previousLoop);
            var alpha = this.mixTime / this.mixDuration;
            if (alpha >= 1) {
                alpha = 1;
                this.previous = null;
            }
            this.current.mix(skeleton, this.currentTime, this.currentLoop, alpha);
        } else
            this.current.apply(skeleton, this.currentTime, this.currentLoop);
    },
    clearAnimation: function () {
        this.previous = null;
        this.current = null;
        this.queue.length = 0;
    },
    _setAnimation: function (animation, loop) {
        this.previous = null;
        if (animation && this.current) {
            this.mixDuration = this.data.getMix(this.current, animation);
            if (this.mixDuration > 0) {
                this.mixTime = 0;
                this.previous = this.current;
                this.previousTime = this.currentTime;
                this.previousLoop = this.currentLoop;
            }
        }
        this.current = animation;
        this.currentLoop = loop;
        this.currentTime = 0;
    },
    /** @see #setAnimation(Animation, Boolean) */
    setAnimationByName: function (animationName, loop) {
        var animation = this.data.skeletonData.findAnimation(animationName);
        if (!animation) throw "Animation not found: " + animationName;
        this.setAnimation(animation, loop);
    },
    /** Set the current animation. Any queued animations are cleared and the current animation time is set to 0.
     * @param animation May be null. */
    setAnimation: function (animation, loop) {
        this.queue.length = 0;
        this._setAnimation(animation, loop);
    },
    /** @see #addAnimation(Animation, Boolean, Number) */
    addAnimationByName: function (animationName, loop, delay) {
        var animation = this.data.skeletonData.findAnimation(animationName);
        if (!animation) throw "Animation not found: " + animationName;
        this.addAnimation(animation, loop, delay);
    },
    /** Adds an animation to be played delay seconds after the current or last queued animation.
     * @param delay May be <= 0 to use duration of previous animation minus any mix duration plus the negative delay. */
    addAnimation: function (animation, loop, delay) {
        var entry = {};
        entry.animation = animation;
        entry.loop = loop;

        if (!delay || delay <= 0) {
            var previousAnimation = this.queue.length ? this.queue[this.queue.length - 1].animation : this.current;
            if (previousAnimation != null)
                delay = previousAnimation.duration - this.data.getMix(previousAnimation, animation) + (delay || 0);
            else
                delay = 0;
        }
        entry.delay = delay;

        this.queue.push(entry);
    },
    /** Returns true if no animation is set or if the current time is greater than the animation duration, regardless of looping. */
    isComplete: function () {
        return !this.current || this.currentTime >= this.current.duration;
    }
};

spine.SkeletonJson = function (attachmentLoader) {
    this.attachmentLoader = attachmentLoader;
};
spine.SkeletonJson.prototype = {
    scale: 1,
    readSkeletonData: function (root) {
        /*jshint -W069*/
        var skeletonData = new spine.SkeletonData(),
            boneData;

        // Bones.
        var bones = root["bones"];
        for (var i = 0, n = bones.length; i < n; i++) {
            var boneMap = bones[i];
            var parent = null;
            if (boneMap["parent"]) {
                parent = skeletonData.findBone(boneMap["parent"]);
                if (!parent) throw "Parent bone not found: " + boneMap["parent"];
            }
            boneData = new spine.BoneData(boneMap["name"], parent);
            boneData.length = (boneMap["length"] || 0) * this.scale;
            boneData.x = (boneMap["x"] || 0) * this.scale;
            boneData.y = (boneMap["y"] || 0) * this.scale;
            boneData.rotation = (boneMap["rotation"] || 0);
            boneData.scaleX = boneMap["scaleX"] || 1;
            boneData.scaleY = boneMap["scaleY"] || 1;
            skeletonData.bones.push(boneData);
        }

        // Slots.
        var slots = root["slots"];
        for (i = 0, n = slots.length; i < n; i++) {
            var slotMap = slots[i];
            boneData = skeletonData.findBone(slotMap["bone"]);
            if (!boneData) throw "Slot bone not found: " + slotMap["bone"];
            var slotData = new spine.SlotData(slotMap["name"], boneData);

            var color = slotMap["color"];
            if (color) {
                slotData.r = spine.SkeletonJson.toColor(color, 0);
                slotData.g = spine.SkeletonJson.toColor(color, 1);
                slotData.b = spine.SkeletonJson.toColor(color, 2);
                slotData.a = spine.SkeletonJson.toColor(color, 3);
            }

            slotData.attachmentName = slotMap["attachment"];

            skeletonData.slots.push(slotData);
        }

        // Skins.
        var skins = root["skins"];
        for (var skinName in skins) {
            if (!skins.hasOwnProperty(skinName)) continue;
            var skinMap = skins[skinName];
            var skin = new spine.Skin(skinName);
            for (var slotName in skinMap) {
                if (!skinMap.hasOwnProperty(slotName)) continue;
                var slotIndex = skeletonData.findSlotIndex(slotName);
                var slotEntry = skinMap[slotName];
                for (var attachmentName in slotEntry) {
                    if (!slotEntry.hasOwnProperty(attachmentName)) continue;
                    var attachment = this.readAttachment(skin, attachmentName, slotEntry[attachmentName]);
                    if (attachment != null) skin.addAttachment(slotIndex, attachmentName, attachment);
                }
            }
            skeletonData.skins.push(skin);
            if (skin.name == "default") skeletonData.defaultSkin = skin;
        }

        // Animations.
        var animations = root["animations"];
        for (var animationName in animations) {
            if (!animations.hasOwnProperty(animationName)) continue;
            this.readAnimation(animationName, animations[animationName], skeletonData);
        }

        return skeletonData;
    },
    readAttachment: function (skin, name, map) {
        /*jshint -W069*/
        name = map["name"] || name;

        var type = spine.AttachmentType[map["type"] || "region"];

        if (type == spine.AttachmentType.region) {
            var attachment = new spine.RegionAttachment();
            attachment.x = (map["x"] || 0) * this.scale;
            attachment.y = (map["y"] || 0) * this.scale;
            attachment.scaleX = map["scaleX"] || 1;
            attachment.scaleY = map["scaleY"] || 1;
            attachment.rotation = map["rotation"] || 0;
            attachment.width = (map["width"] || 32) * this.scale;
            attachment.height = (map["height"] || 32) * this.scale;
            attachment.updateOffset();

            attachment.rendererObject = {};
            attachment.rendererObject.name = name;
            attachment.rendererObject.scale = {};
            attachment.rendererObject.scale.x = attachment.scaleX;
            attachment.rendererObject.scale.y = attachment.scaleY;
            attachment.rendererObject.rotation = -attachment.rotation * Math.PI / 180;
            return attachment;
        }

            throw "Unknown attachment type: " + type;
    },

    readAnimation: function (name, map, skeletonData) {
        /*jshint -W069*/
        var timelines = [];
        var duration = 0;
        var frameIndex, timeline, timelineName, valueMap, values,
            i, n;

        var bones = map["bones"];
        for (var boneName in bones) {
            if (!bones.hasOwnProperty(boneName)) continue;
            var boneIndex = skeletonData.findBoneIndex(boneName);
            if (boneIndex == -1) throw "Bone not found: " + boneName;
            var boneMap = bones[boneName];

            for (timelineName in boneMap) {
                if (!boneMap.hasOwnProperty(timelineName)) continue;
                values = boneMap[timelineName];
                if (timelineName == "rotate") {
                    timeline = new spine.RotateTimeline(values.length);
                    timeline.boneIndex = boneIndex;

                    frameIndex = 0;
                    for (i = 0, n = values.length; i < n; i++) {
                        valueMap = values[i];
                        timeline.setFrame(frameIndex, valueMap["time"], valueMap["angle"]);
                        spine.SkeletonJson.readCurve(timeline, frameIndex, valueMap);
                        frameIndex++;
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 2 - 2]);

                } else if (timelineName == "translate" || timelineName == "scale") {
                    var timelineScale = 1;
                    if (timelineName == "scale")
                        timeline = new spine.ScaleTimeline(values.length);
                    else {
                        timeline = new spine.TranslateTimeline(values.length);
                        timelineScale = this.scale;
                    }
                    timeline.boneIndex = boneIndex;

                    frameIndex = 0;
                    for (i = 0, n = values.length; i < n; i++) {
                        valueMap = values[i];
                        var x = (valueMap["x"] || 0) * timelineScale;
                        var y = (valueMap["y"] || 0) * timelineScale;
                        timeline.setFrame(frameIndex, valueMap["time"], x, y);
                        spine.SkeletonJson.readCurve(timeline, frameIndex, valueMap);
                        frameIndex++;
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 3 - 3]);

                } else
                    throw "Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")";
            }
        }
        var slots = map["slots"];
        for (var slotName in slots) {
            if (!slots.hasOwnProperty(slotName)) continue;
            var slotMap = slots[slotName];
            var slotIndex = skeletonData.findSlotIndex(slotName);

            for (timelineName in slotMap) {
                if (!slotMap.hasOwnProperty(timelineName)) continue;
                values = slotMap[timelineName];
                if (timelineName == "color") {
                    timeline = new spine.ColorTimeline(values.length);
                    timeline.slotIndex = slotIndex;

                    frameIndex = 0;
                    for (i = 0, n = values.length; i < n; i++) {
                        valueMap = values[i];
                        var color = valueMap["color"];
                        var r = spine.SkeletonJson.toColor(color, 0);
                        var g = spine.SkeletonJson.toColor(color, 1);
                        var b = spine.SkeletonJson.toColor(color, 2);
                        var a = spine.SkeletonJson.toColor(color, 3);
                        timeline.setFrame(frameIndex, valueMap["time"], r, g, b, a);
                        spine.SkeletonJson.readCurve(timeline, frameIndex, valueMap);
                        frameIndex++;
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 5 - 5]);

                } else if (timelineName == "attachment") {
                    timeline = new spine.AttachmentTimeline(values.length);
                    timeline.slotIndex = slotIndex;

                    frameIndex = 0;
                    for (i = 0, n = values.length; i < n; i++) {
                        valueMap = values[i];
                        timeline.setFrame(frameIndex++, valueMap["time"], valueMap["name"]);
                    }
                    timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);

                } else
                    throw "Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")";
            }
        }
        skeletonData.animations.push(new spine.Animation(name, timelines, duration));
    }
};
spine.SkeletonJson.readCurve = function (timeline, frameIndex, valueMap) {
    /*jshint -W069*/
    var curve = valueMap["curve"];
    if (!curve) return;
    if (curve == "stepped")
        timeline.curves.setStepped(frameIndex);
    else if (curve instanceof Array)
        timeline.curves.setCurve(frameIndex, curve[0], curve[1], curve[2], curve[3]);
};
spine.SkeletonJson.toColor = function (hexString, colorIndex) {
    if (hexString.length != 8) throw "Color hexidecimal length must be 8, recieved: " + hexString;
    return parseInt(hexString.substr(colorIndex * 2, 2), 16) / 255;
};

spine.Atlas = function (atlasText, textureLoader) {
    this.textureLoader = textureLoader;
    this.pages = [];
    this.regions = [];

    var reader = new spine.AtlasReader(atlasText);
    var tuple = [];
    tuple.length = 4;
    var page = null;
    while (true) {
        var line = reader.readLine();
        if (line == null) break;
        line = reader.trim(line);
        if (!line.length)
            page = null;
        else if (!page) {
            page = new spine.AtlasPage();
            page.name = line;

            page.format = spine.Atlas.Format[reader.readValue()];

            reader.readTuple(tuple);
            page.minFilter = spine.Atlas.TextureFilter[tuple[0]];
            page.magFilter = spine.Atlas.TextureFilter[tuple[1]];

            var direction = reader.readValue();
            page.uWrap = spine.Atlas.TextureWrap.clampToEdge;
            page.vWrap = spine.Atlas.TextureWrap.clampToEdge;
            if (direction == "x")
                page.uWrap = spine.Atlas.TextureWrap.repeat;
            else if (direction == "y")
                page.vWrap = spine.Atlas.TextureWrap.repeat;
            else if (direction == "xy")
                page.uWrap = page.vWrap = spine.Atlas.TextureWrap.repeat;

            textureLoader.load(page, line);

            this.pages.push(page);

        } else {
            var region = new spine.AtlasRegion();
            region.name = line;
            region.page = page;

            region.rotate = reader.readValue() == "true";

            reader.readTuple(tuple);
            var x = parseInt(tuple[0], 10);
            var y = parseInt(tuple[1], 10);

            reader.readTuple(tuple);
            var width = parseInt(tuple[0], 10);
            var height = parseInt(tuple[1], 10);

            region.u = x / page.width;
            region.v = y / page.height;
            if (region.rotate) {
                region.u2 = (x + height) / page.width;
                region.v2 = (y + width) / page.height;
            } else {
                region.u2 = (x + width) / page.width;
                region.v2 = (y + height) / page.height;
            }
            region.x = x;
            region.y = y;
            region.width = Math.abs(width);
            region.height = Math.abs(height);

            if (reader.readTuple(tuple) == 4) { // split is optional
                region.splits = [parseInt(tuple[0], 10), parseInt(tuple[1], 10), parseInt(tuple[2], 10), parseInt(tuple[3], 10)];

                if (reader.readTuple(tuple) == 4) { // pad is optional, but only present with splits
                    region.pads = [parseInt(tuple[0], 10), parseInt(tuple[1], 10), parseInt(tuple[2], 10), parseInt(tuple[3], 10)];

                    reader.readTuple(tuple);
                }
            }

            region.originalWidth = parseInt(tuple[0], 10);
            region.originalHeight = parseInt(tuple[1], 10);

            reader.readTuple(tuple);
            region.offsetX = parseInt(tuple[0], 10);
            region.offsetY = parseInt(tuple[1], 10);

            region.index = parseInt(reader.readValue(), 10);

            this.regions.push(region);
        }
    }
};
spine.Atlas.prototype = {
    findRegion: function (name) {
        var regions = this.regions;
        for (var i = 0, n = regions.length; i < n; i++)
            if (regions[i].name == name) return regions[i];
        return null;
    },
    dispose: function () {
        var pages = this.pages;
        for (var i = 0, n = pages.length; i < n; i++)
            this.textureLoader.unload(pages[i].rendererObject);
    },
    updateUVs: function (page) {
        var regions = this.regions;
        for (var i = 0, n = regions.length; i < n; i++) {
            var region = regions[i];
            if (region.page != page) continue;
            region.u = region.x / page.width;
            region.v = region.y / page.height;
            if (region.rotate) {
                region.u2 = (region.x + region.height) / page.width;
                region.v2 = (region.y + region.width) / page.height;
            } else {
                region.u2 = (region.x + region.width) / page.width;
                region.v2 = (region.y + region.height) / page.height;
            }
        }
    }
};

spine.Atlas.Format = {
    alpha: 0,
    intensity: 1,
    luminanceAlpha: 2,
    rgb565: 3,
    rgba4444: 4,
    rgb888: 5,
    rgba8888: 6
};

spine.Atlas.TextureFilter = {
    nearest: 0,
    linear: 1,
    mipMap: 2,
    mipMapNearestNearest: 3,
    mipMapLinearNearest: 4,
    mipMapNearestLinear: 5,
    mipMapLinearLinear: 6
};

spine.Atlas.TextureWrap = {
    mirroredRepeat: 0,
    clampToEdge: 1,
    repeat: 2
};

spine.AtlasPage = function () {};
spine.AtlasPage.prototype = {
    name: null,
    format: null,
    minFilter: null,
    magFilter: null,
    uWrap: null,
    vWrap: null,
    rendererObject: null,
    width: 0,
    height: 0
};

spine.AtlasRegion = function () {};
spine.AtlasRegion.prototype = {
    page: null,
    name: null,
    x: 0, y: 0,
    width: 0, height: 0,
    u: 0, v: 0, u2: 0, v2: 0,
    offsetX: 0, offsetY: 0,
    originalWidth: 0, originalHeight: 0,
    index: 0,
    rotate: false,
    splits: null,
    pads: null
};

spine.AtlasReader = function (text) {
    this.lines = text.split(/\r\n|\r|\n/);
};
spine.AtlasReader.prototype = {
    index: 0,
    trim: function (value) {
        return value.replace(/^\s+|\s+$/g, "");
    },
    readLine: function () {
        if (this.index >= this.lines.length) return null;
        return this.lines[this.index++];
    },
    readValue: function () {
        var line = this.readLine();
        var colon = line.indexOf(":");
        if (colon == -1) throw "Invalid line: " + line;
        return this.trim(line.substring(colon + 1));
    },
    /** Returns the number of tuple values read (2 or 4). */
    readTuple: function (tuple) {
        var line = this.readLine();
        var colon = line.indexOf(":");
        if (colon == -1) throw "Invalid line: " + line;
        var i = 0, lastMatch= colon + 1;
        for (; i < 3; i++) {
            var comma = line.indexOf(",", lastMatch);
            if (comma == -1) {
                if (!i) throw "Invalid line: " + line;
                break;
            }
            tuple[i] = this.trim(line.substr(lastMatch, comma - lastMatch));
            lastMatch = comma + 1;
        }
        tuple[i] = this.trim(line.substring(lastMatch));
        return i + 1;
    }
}

spine.AtlasAttachmentLoader = function (atlas) {
    this.atlas = atlas;
}
spine.AtlasAttachmentLoader.prototype = {
    newAttachment: function (skin, type, name) {
        switch (type) {
        case spine.AttachmentType.region:
            var region = this.atlas.findRegion(name);
            if (!region) throw "Region not found in atlas: " + name + " (" + type + ")";
            var attachment = new spine.RegionAttachment(name);
            attachment.rendererObject = region;
            attachment.setUVs(region.u, region.v, region.u2, region.v2, region.rotate);
            attachment.regionOffsetX = region.offsetX;
            attachment.regionOffsetY = region.offsetY;
            attachment.regionWidth = region.width;
            attachment.regionHeight = region.height;
            attachment.regionOriginalWidth = region.originalWidth;
            attachment.regionOriginalHeight = region.originalHeight;
            return attachment;
        }
        throw "Unknown attachment type: " + type;
    }
}

spine.Bone.yDown = true;
PIXI.AnimCache = {};

/**
 * A class that enables the you to import and run your spine animations in pixi.
 * Spine animation data needs to be loaded using the PIXI.AssetLoader or PIXI.SpineLoader before it can be used by this class
 * See example 12 (http://www.goodboydigital.com/pixijs/examples/12/) to see a working example and check out the source
 *
 * @class Spine
 * @extends DisplayObjectContainer
 * @constructor
 * @param url {String} The url of the spine anim file to be used
 */
PIXI.Spine = function (url) {
    PIXI.DisplayObjectContainer.call(this);

    this.spineData = PIXI.AnimCache[url];

    if (!this.spineData) {
        throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + url);
    }

    this.skeleton = new spine.Skeleton(this.spineData);
    this.skeleton.updateWorldTransform();

    this.stateData = new spine.AnimationStateData(this.spineData);
    this.state = new spine.AnimationState(this.stateData);

    this.slotContainers = [];

    for (var i = 0, n = this.skeleton.drawOrder.length; i < n; i++) {
        var slot = this.skeleton.drawOrder[i];
        var attachment = slot.attachment;
        var slotContainer = new PIXI.DisplayObjectContainer();
        this.slotContainers.push(slotContainer);
        this.addChild(slotContainer);
        if (!(attachment instanceof spine.RegionAttachment)) {
            continue;
        }
        var spriteName = attachment.rendererObject.name;
        var sprite = this.createSprite(slot, attachment.rendererObject);
        slot.currentSprite = sprite;
        slot.currentSpriteName = spriteName;
        slotContainer.addChild(sprite);
    }
};

PIXI.Spine.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.Spine.prototype.constructor = PIXI.Spine;

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.Spine.prototype.updateTransform = function () {
    this.lastTime = this.lastTime || Date.now();
    var timeDelta = (Date.now() - this.lastTime) * 0.001;
    this.lastTime = Date.now();
    this.state.update(timeDelta);
    this.state.apply(this.skeleton);
    this.skeleton.updateWorldTransform();

    var drawOrder = this.skeleton.drawOrder;
    for (var i = 0, n = drawOrder.length; i < n; i++) {
        var slot = drawOrder[i];
        var attachment = slot.attachment;
        var slotContainer = this.slotContainers[i];
        if (!(attachment instanceof spine.RegionAttachment)) {
            slotContainer.visible = false;
            continue;
        }

        if (attachment.rendererObject) {
            if (!slot.currentSpriteName || slot.currentSpriteName != attachment.name) {
                var spriteName = attachment.rendererObject.name;
                if (slot.currentSprite !== undefined) {
                    slot.currentSprite.visible = false;
                }
                slot.sprites = slot.sprites || {};
                if (slot.sprites[spriteName] !== undefined) {
                    slot.sprites[spriteName].visible = true;
                } else {
                    var sprite = this.createSprite(slot, attachment.rendererObject);
                    slotContainer.addChild(sprite);
                }
                slot.currentSprite = slot.sprites[spriteName];
                slot.currentSpriteName = spriteName;
            }
        }
        slotContainer.visible = true;

        var bone = slot.bone;

        slotContainer.position.x = bone.worldX + attachment.x * bone.m00 + attachment.y * bone.m01;
        slotContainer.position.y = bone.worldY + attachment.x * bone.m10 + attachment.y * bone.m11;
        slotContainer.scale.x = bone.worldScaleX;
        slotContainer.scale.y = bone.worldScaleY;

        slotContainer.rotation = -(slot.bone.worldRotation * Math.PI / 180);

        slotContainer.alpha = slot.a;
        slot.currentSprite.tint = PIXI.rgb2hex([slot.r,slot.g,slot.b]);
    }

    PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
};


PIXI.Spine.prototype.createSprite = function (slot, descriptor) {
    var name = PIXI.TextureCache[descriptor.name] ? descriptor.name : descriptor.name + ".png";
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(name));
    sprite.scale = descriptor.scale;
    sprite.rotation = descriptor.rotation;
    sprite.anchor.x = sprite.anchor.y = 0.5;

    slot.sprites = slot.sprites || {};
    slot.sprites[descriptor.name] = sprite;
    return sprite;
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.BaseTextureCache = {};
PIXI.texturesToUpdate = [];
PIXI.texturesToDestroy = [];

PIXI.BaseTextureCacheIdGenerator = 0;

/**
 * A texture stores the information that represents an image. All textures have a base texture
 *
 * @class BaseTexture
 * @uses EventTarget
 * @constructor
 * @param source {String} the source object (image or canvas)
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 */
PIXI.BaseTexture = function(source, scaleMode)
{
    PIXI.EventTarget.call( this );

    /**
     * [read-only] The width of the base texture set when the image has loaded
     *
     * @property width
     * @type Number
     * @readOnly
     */
    this.width = 100;

    /**
     * [read-only] The height of the base texture set when the image has loaded
     *
     * @property height
     * @type Number
     * @readOnly
     */
    this.height = 100;

    /**
     * The scale mode to apply when scaling this texture
     * @property scaleMode
     * @type PIXI.scaleModes
     * @default PIXI.scaleModes.LINEAR
     */
    this.scaleMode = scaleMode || PIXI.scaleModes.DEFAULT;

    /**
     * [read-only] Describes if the base texture has loaded or not
     *
     * @property hasLoaded
     * @type Boolean
     * @readOnly
     */
    this.hasLoaded = false;

    /**
     * The source that is loaded to create the texture
     *
     * @property source
     * @type Image
     */
    this.source = source;

    //TODO will be used for futer pixi 1.5...
    this.id = PIXI.BaseTextureCacheIdGenerator++;

    /**
     * Controls if RGB channels should be premultiplied by Alpha  (WebGL only)
     *
     * @property
     * @type Boolean
     * @default TRUE
    */
    this.premultipliedAlpha = true;

    // used for webGL
    this._glTextures = [];
    
    // used for webGL teture updateing...
    this._dirty = [];
    
    if(!source)return;

    if((this.source.complete || this.source.getContext) && this.source.width && this.source.height)
    {
        this.hasLoaded = true;
        this.width = this.source.width;
        this.height = this.source.height;

        PIXI.texturesToUpdate.push(this);
    }
    else
    {

        var scope = this;
        this.source.onload = function() {

            scope.hasLoaded = true;
            scope.width = scope.source.width;
            scope.height = scope.source.height;

            for (var i = 0; i < scope._glTextures.length; i++)
            {
                scope._dirty[i] = true;
            }

            // add it to somewhere...
            scope.dispatchEvent( { type: 'loaded', content: scope } );
        };
        this.source.onerror = function() {
            scope.dispatchEvent( { type: 'error', content: scope } );
        };
    }

    this.imageUrl = null;
    this._powerOf2 = false;

    

};

PIXI.BaseTexture.prototype.constructor = PIXI.BaseTexture;

/**
 * Destroys this base texture
 *
 * @method destroy
 */
PIXI.BaseTexture.prototype.destroy = function()
{
    if(this.imageUrl)
    {
        delete PIXI.BaseTextureCache[this.imageUrl];
        delete PIXI.TextureCache[this.imageUrl];
        this.imageUrl = null;
        this.source.src = null;
    }
    else if (this.source && this.source._pixiId)
    {
        delete PIXI.BaseTextureCache[this.source._pixiId];
    }
    this.source = null;
    PIXI.texturesToDestroy.push(this);
};

/**
 * Changes the source image of the texture
 *
 * @method updateSourceImage
 * @param newSrc {String} the path of the image
 */
PIXI.BaseTexture.prototype.updateSourceImage = function(newSrc)
{
    this.hasLoaded = false;
    this.source.src = null;
    this.source.src = newSrc;
};

/**
 * Helper function that returns a base texture based on an image url
 * If the image is not in the base texture cache it will be created and loaded
 *
 * @static
 * @method fromImage
 * @param imageUrl {String} The image url of the texture
 * @param crossorigin {Boolean} 
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 * @return BaseTexture
 */
PIXI.BaseTexture.fromImage = function(imageUrl, crossorigin, scaleMode)
{
    var baseTexture = PIXI.BaseTextureCache[imageUrl];
    
    if(crossorigin === undefined && imageUrl.indexOf('data:') === -1) crossorigin = true;

    if(!baseTexture)
    {
        // new Image() breaks tex loading in some versions of Chrome.
        // See https://code.google.com/p/chromium/issues/detail?id=238071
        var image = new Image();//document.createElement('img');
        if (crossorigin)
        {
            image.crossOrigin = '';
        }
        image.src = imageUrl;
        baseTexture = new PIXI.BaseTexture(image, scaleMode);
        baseTexture.imageUrl = imageUrl;
        PIXI.BaseTextureCache[imageUrl] = baseTexture;
    }

    return baseTexture;
};

/**
 * Helper function that returns a base texture based on a canvas element
 * If the image is not in the base texture cache it will be created and loaded
 *
 * @static
 * @method fromCanvas
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 * @return BaseTexture
 */
PIXI.BaseTexture.fromCanvas = function(canvas, scaleMode)
{
    if(!canvas._pixiId)
    {
        canvas._pixiId = 'canvas_' + PIXI.TextureCacheIdGenerator++;
    }

    var baseTexture = PIXI.BaseTextureCache[canvas._pixiId];

    if(!baseTexture)
    {
        baseTexture = new PIXI.BaseTexture(canvas, scaleMode);
        PIXI.BaseTextureCache[canvas._pixiId] = baseTexture;
    }

    return baseTexture;
};



/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.TextureCache = {};
PIXI.FrameCache = {};

PIXI.TextureCacheIdGenerator = 0;

/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. To do this use PIXI.Sprite. If no frame is provided then the whole image is used
 *
 * @class Texture
 * @uses EventTarget
 * @constructor
 * @param baseTexture {BaseTexture} The base texture source to create the texture from
 * @param frame {Rectangle} The rectangle frame of the texture to show
 */
PIXI.Texture = function(baseTexture, frame)
{
    PIXI.EventTarget.call( this );

    /**
     * Does this Texture have any frame data assigned to it?
     *
     * @property noFrame
     * @type Boolean
     */
    this.noFrame = false;

    if (!frame)
    {
        this.noFrame = true;
        frame = new PIXI.Rectangle(0,0,1,1);
    }

    if (baseTexture instanceof PIXI.Texture)
    {
        baseTexture = baseTexture.baseTexture;
    }

    /**
     * The base texture that this texture uses.
     *
     * @property baseTexture
     * @type BaseTexture
     */
    this.baseTexture = baseTexture;

    /**
     * The frame specifies the region of the base texture that this texture uses
     *
     * @property frame
     * @type Rectangle
     */
    this.frame = frame;

    /**
     * The trim point
     *
     * @property trim
     * @type Rectangle
     */
    this.trim = null;
    
    /**
     * This will let the renderer know if the texture is valid. If its not then it cannot be rendered.
     *
     * @property valid
     * @type Boolean
     */
    this.valid = false;

    /**
     * The context scope under which events are run.
     *
     * @property scope
     * @type Object
     */
    this.scope = this;

    /**
     * The WebGL UV data cache.
     *
     * @private
     * @property _uvs
     * @type Object
     */
    this._uvs = null;
    
    /**
     * The width of the Texture in pixels.
     *
     * @property width
     * @type Number
     */
    this.width = 0;

    /**
     * The height of the Texture in pixels.
     *
     * @property height
     * @type Number
     */
    this.height = 0;

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @property crop
     * @type Rectangle
     */
    this.crop = new PIXI.Rectangle(0, 0, 1, 1);

    if (baseTexture.hasLoaded)
    {
        if (this.noFrame) frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height);
        this.setFrame(frame);
    }
    else
    {
        var scope = this;
        baseTexture.addEventListener('loaded', function(){ scope.onBaseTextureLoaded(); });
    }
};

PIXI.Texture.prototype.constructor = PIXI.Texture;

/**
 * Called when the base texture is loaded
 *
 * @method onBaseTextureLoaded
 * @param event
 * @private
 */
PIXI.Texture.prototype.onBaseTextureLoaded = function()
{
    var baseTexture = this.baseTexture;
    baseTexture.removeEventListener('loaded', this.onLoaded);

    if (this.noFrame) this.frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height);
    
    this.setFrame(this.frame);

    this.scope.dispatchEvent( { type: 'update', content: this } );
};

/**
 * Destroys this texture
 *
 * @method destroy
 * @param destroyBase {Boolean} Whether to destroy the base texture as well
 */
PIXI.Texture.prototype.destroy = function(destroyBase)
{
    if (destroyBase) this.baseTexture.destroy();

    this.valid = false;
};

/**
 * Specifies the region of the baseTexture that this texture will use.
 *
 * @method setFrame
 * @param frame {Rectangle} The frame of the texture to set it to
 */
PIXI.Texture.prototype.setFrame = function(frame)
{
    this.noFrame = false;

    this.frame = frame;
    this.width = frame.width;
    this.height = frame.height;

    this.crop.x = frame.x;
    this.crop.y = frame.y;
    this.crop.width = frame.width;
    this.crop.height = frame.height;

    if (!this.trim && (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height))
    {
        throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);
    }

    this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;

    if (this.trim)
    {
        this.width = this.trim.width;
        this.height = this.trim.height;
        this.frame.width = this.trim.width;
        this.frame.height = this.trim.height;
    }

    if (this.valid) PIXI.Texture.frameUpdates.push(this);

};

/**
 * Updates the internal WebGL UV cache.
 *
 * @method _updateWebGLuvs
 * @private
 */
PIXI.Texture.prototype._updateWebGLuvs = function()
{
    if(!this._uvs)this._uvs = new PIXI.TextureUvs();

    var frame = this.crop;
    var tw = this.baseTexture.width;
    var th = this.baseTexture.height;

    this._uvs.x0 = frame.x / tw;
    this._uvs.y0 = frame.y / th;

    this._uvs.x1 = (frame.x + frame.width) / tw;
    this._uvs.y1 = frame.y / th;

    this._uvs.x2 = (frame.x + frame.width) / tw;
    this._uvs.y2 = (frame.y + frame.height) / th;

    this._uvs.x3 = frame.x / tw;
    this._uvs.y3 = (frame.y + frame.height) / th;

};

/**
 * Helper function that returns a texture based on an image url
 * If the image is not in the texture cache it will be  created and loaded
 *
 * @static
 * @method fromImage
 * @param imageUrl {String} The image url of the texture
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 * @return Texture
 */
PIXI.Texture.fromImage = function(imageUrl, crossorigin, scaleMode)
{
    var texture = PIXI.TextureCache[imageUrl];

    if(!texture)
    {
        texture = new PIXI.Texture(PIXI.BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
        PIXI.TextureCache[imageUrl] = texture;
    }

    return texture;
};

/**
 * Helper function that returns a texture based on a frame id
 * If the frame id is not in the texture cache an error will be thrown
 *
 * @static
 * @method fromFrame
 * @param frameId {String} The frame id of the texture
 * @return Texture
 */
PIXI.Texture.fromFrame = function(frameId)
{
    var texture = PIXI.TextureCache[frameId];
    if(!texture) throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ');
    return texture;
};

/**
 * Helper function that returns a texture based on a canvas element
 * If the canvas is not in the texture cache it will be  created and loaded
 *
 * @static
 * @method fromCanvas
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 * @return Texture
 */
PIXI.Texture.fromCanvas = function(canvas, scaleMode)
{
    var baseTexture = PIXI.BaseTexture.fromCanvas(canvas, scaleMode);

    return new PIXI.Texture( baseTexture );

};


/**
 * Adds a texture to the textureCache.
 *
 * @static
 * @method addTextureToCache
 * @param texture {Texture}
 * @param id {String} the id that the texture will be stored against.
 */
PIXI.Texture.addTextureToCache = function(texture, id)
{
    PIXI.TextureCache[id] = texture;
};

/**
 * Remove a texture from the textureCache.
 *
 * @static
 * @method removeTextureFromCache
 * @param id {String} the id of the texture to be removed
 * @return {Texture} the texture that was removed
 */
PIXI.Texture.removeTextureFromCache = function(id)
{
    var texture = PIXI.TextureCache[id];
    delete PIXI.TextureCache[id];
    delete PIXI.BaseTextureCache[id];
    return texture;
};

// this is more for webGL.. it contains updated frames..
PIXI.Texture.frameUpdates = [];

PIXI.TextureUvs = function()
{
    this.x0 = 0;
    this.y0 = 0;

    this.x1 = 0;
    this.y1 = 0;

    this.x2 = 0;
    this.y2 = 0;

    this.x3 = 0;
    this.y3 = 0;


};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 A RenderTexture is a special texture that allows any pixi displayObject to be rendered to it.

 __Hint__: All DisplayObjects (exmpl. Sprites) that render on RenderTexture should be preloaded.
 Otherwise black rectangles will be drawn instead.

 RenderTexture takes snapshot of DisplayObject passed to render method. If DisplayObject is passed to render method, position and rotation of it will be ignored. For example:

    var renderTexture = new PIXI.RenderTexture(800, 600);
    var sprite = PIXI.Sprite.fromImage("spinObj_01.png");
    sprite.position.x = 800/2;
    sprite.position.y = 600/2;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
    renderTexture.render(sprite);

 Sprite in this case will be rendered to 0,0 position. To render this sprite at center DisplayObjectContainer should be used:

    var doc = new PIXI.DisplayObjectContainer();
    doc.addChild(sprite);
    renderTexture.render(doc);  // Renders to center of renderTexture

 * @class RenderTexture
 * @extends Texture
 * @constructor
 * @param width {Number} The width of the render texture
 * @param height {Number} The height of the render texture
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 */
PIXI.RenderTexture = function(width, height, renderer, scaleMode)
{
    PIXI.EventTarget.call( this );

    /**
     * The with of the render texture
     *
     * @property width
     * @type Number
     */
    this.width = width || 100;
    /**
     * The height of the render texture
     *
     * @property height
     * @type Number
     */
    this.height = height || 100;

    /**
     * The framing rectangle of the render texture
     *
     * @property frame
     * @type Rectangle
     */
    this.frame = new PIXI.Rectangle(0, 0, this.width, this.height);

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @property crop
     * @type Rectangle
     */
    this.crop = new PIXI.Rectangle(0, 0, this.width, this.height);
    
    /**
     * The base texture object that this texture uses
     *
     * @property baseTexture
     * @type BaseTexture
     */
    this.baseTexture = new PIXI.BaseTexture();
    this.baseTexture.width = this.width;
    this.baseTexture.height = this.height;
    this.baseTexture._glTextures = [];

    this.baseTexture.scaleMode = scaleMode || PIXI.scaleModes.DEFAULT;

    this.baseTexture.hasLoaded = true;

    // each render texture can only belong to one renderer at the moment if its webGL
    this.renderer = renderer || PIXI.defaultRenderer;

    if(this.renderer.type === PIXI.WEBGL_RENDERER)
    {
        var gl = this.renderer.gl;

        this.textureBuffer = new PIXI.FilterTexture(gl, this.width, this.height, this.baseTexture.scaleMode);
        this.baseTexture._glTextures[gl.id] =  this.textureBuffer.texture;

        this.render = this.renderWebGL;
        this.projection = new PIXI.Point(this.width/2 , -this.height/2);
    }
    else
    {
        this.render = this.renderCanvas;
        this.textureBuffer = new PIXI.CanvasBuffer(this.width, this.height);
        this.baseTexture.source = this.textureBuffer.canvas;
    }

    this.valid = true;
    PIXI.Texture.frameUpdates.push(this);


};

PIXI.RenderTexture.prototype = Object.create(PIXI.Texture.prototype);
PIXI.RenderTexture.prototype.constructor = PIXI.RenderTexture;

/**
 * Resize the RenderTexture.
 *
 * @method resize
 * @param width {Number} The width to resize to.
 * @param height {Number} The height to resize to.
 * @param updateBase {Boolean} Should the baseTexture.width and height values be resized as well?
 */
PIXI.RenderTexture.prototype.resize = function(width, height, updateBase)
{
    if (width === this.width && height === this.height)
    {
        return;
    }

    this.width = this.frame.width = this.crop.width = width;
    this.height =  this.frame.height = this.crop.height = height;

    if (updateBase)
    {
        this.baseTexture.width = this.width;
        this.baseTexture.height = this.height;
    }

    if (this.renderer.type === PIXI.WEBGL_RENDERER)
    {
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;
    }
    
    this.textureBuffer.resize(this.width, this.height);
};

/**
 * Clears the RenderTexture.
 *
 * @method clear
 */
PIXI.RenderTexture.prototype.clear = function()
{
    if (this.renderer.type === PIXI.WEBGL_RENDERER)
    {
        this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
    }
    
    this.textureBuffer.clear();
};

/**
 * This function will draw the display object to the texture.
 *
 * @method renderWebGL
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param clear {Boolean} If true the texture will be cleared before the displayObject is drawn
 * @private
 */
PIXI.RenderTexture.prototype.renderWebGL = function(displayObject, position, clear)
{
    //TOOD replace position with matrix..
    var gl = this.renderer.gl;

    gl.colorMask(true, true, true, true);

    gl.viewport(0, 0, this.width, this.height);

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer );

    if(clear)this.textureBuffer.clear();


    // THIS WILL MESS WITH HIT TESTING!
    var children = displayObject.children;

    //TODO -? create a new one??? dont think so!
    var originalWorldTransform = displayObject.worldTransform;
    displayObject.worldTransform = PIXI.RenderTexture.tempMatrix;
    // modify to flip...
    displayObject.worldTransform.d = -1;
    displayObject.worldTransform.ty = this.projection.y * -2;

    if(position)
    {
        displayObject.worldTransform.tx = position.x;
        displayObject.worldTransform.ty -= position.y;
    }

    for(var i=0,j=children.length; i<j; i++)
    {
        children[i].updateTransform();
    }

    // update the textures!
    PIXI.WebGLRenderer.updateTextures();

    this.renderer.spriteBatch.dirty = true;
    
    this.renderer.renderDisplayObject(displayObject, this.projection, this.textureBuffer.frameBuffer);

    displayObject.worldTransform = originalWorldTransform;

    this.renderer.spriteBatch.dirty = true;
};


/**
 * This function will draw the display object to the texture.
 *
 * @method renderCanvas
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param clear {Boolean} If true the texture will be cleared before the displayObject is drawn
 * @private
 */
PIXI.RenderTexture.prototype.renderCanvas = function(displayObject, position, clear)
{
    var children = displayObject.children;

    var originalWorldTransform = displayObject.worldTransform;

    displayObject.worldTransform = PIXI.RenderTexture.tempMatrix;
    
    if(position)
    {
        displayObject.worldTransform.tx = position.x;
        displayObject.worldTransform.ty = position.y;
    }
    else
    {
        displayObject.worldTransform.tx = 0;
        displayObject.worldTransform.ty = 0;
    }

    for(var i = 0, j = children.length; i < j; i++)
    {
        children[i].updateTransform();
    }

    if(clear)this.textureBuffer.clear();

    var context = this.textureBuffer.context;

    this.renderer.renderDisplayObject(displayObject, context);

    context.setTransform(1,0,0,1,0,0);

    displayObject.worldTransform = originalWorldTransform;
};

PIXI.RenderTexture.tempMatrix = new PIXI.Matrix();


/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A Class that loads a bunch of images / sprite sheet / bitmap font files. Once the
 * assets have been loaded they are added to the PIXI Texture cache and can be accessed
 * easily through PIXI.Texture.fromImage() and PIXI.Sprite.fromImage()
 * When all items have been loaded this class will dispatch a 'onLoaded' event
 * As each individual item is loaded this class will dispatch a 'onProgress' event
 *
 * @class AssetLoader
 * @constructor
 * @uses EventTarget
 * @param {Array<String>} assetURLs an array of image/sprite sheet urls that you would like loaded
 *      supported. Supported image formats include 'jpeg', 'jpg', 'png', 'gif'. Supported
 *      sprite sheet data formats only include 'JSON' at this time. Supported bitmap font
 *      data formats include 'xml' and 'fnt'.
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 */
PIXI.AssetLoader = function(assetURLs, crossorigin)
{
    PIXI.EventTarget.call(this);

    /**
     * The array of asset URLs that are going to be loaded
     *
     * @property assetURLs
     * @type Array<String>
     */
    this.assetURLs = assetURLs;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @property crossorigin
     * @type Boolean
     */
    this.crossorigin = crossorigin;

    /**
     * Maps file extension to loader types
     *
     * @property loadersByType
     * @type Object
     */
    this.loadersByType = {
        'jpg':  PIXI.ImageLoader,
        'jpeg': PIXI.ImageLoader,
        'png':  PIXI.ImageLoader,
        'gif':  PIXI.ImageLoader,
        'webp': PIXI.ImageLoader,
        'json': PIXI.JsonLoader,
        'atlas': PIXI.AtlasLoader,
        'anim': PIXI.SpineLoader,
        'xml':  PIXI.BitmapFontLoader,
        'fnt':  PIXI.BitmapFontLoader
    };
};

/**
 * Fired when an item has loaded
 * @event onProgress
 */

/**
 * Fired when all the assets have loaded
 * @event onComplete
 */

// constructor
PIXI.AssetLoader.prototype.constructor = PIXI.AssetLoader;

/**
 * Given a filename, returns its extension, wil
 *
 * @method _getDataType
 * @param str {String} the name of the asset
 */
PIXI.AssetLoader.prototype._getDataType = function(str)
{
    var test = 'data:';
    //starts with 'data:'
    var start = str.slice(0, test.length).toLowerCase();
    if (start === test) {
        var data = str.slice(test.length);

        var sepIdx = data.indexOf(',');
        if (sepIdx === -1) //malformed data URI scheme
            return null;

        //e.g. 'image/gif;base64' => 'image/gif'
        var info = data.slice(0, sepIdx).split(';')[0];

        //We might need to handle some special cases here...
        //standardize text/plain to 'txt' file extension
        if (!info || info.toLowerCase() === 'text/plain')
            return 'txt';

        //User specified mime type, try splitting it by '/'
        return info.split('/').pop().toLowerCase();
    }

    return null;
};

/**
 * Starts loading the assets sequentially
 *
 * @method load
 */
PIXI.AssetLoader.prototype.load = function()
{
    var scope = this;

    function onLoad(evt) {
        scope.onAssetLoaded(evt.content);
    }

    this.loadCount = this.assetURLs.length;

    for (var i=0; i < this.assetURLs.length; i++)
    {
        var fileName = this.assetURLs[i];
        //first see if we have a data URI scheme..
        var fileType = this._getDataType(fileName);

        //if not, assume it's a file URI
        if (!fileType)
            fileType = fileName.split('?').shift().split('.').pop().toLowerCase();

        var Constructor = this.loadersByType[fileType];
        if(!Constructor)
            throw new Error(fileType + ' is an unsupported file type');

        var loader = new Constructor(fileName, this.crossorigin);

        loader.addEventListener('loaded', onLoad);
        loader.load();
    }
};

/**
 * Invoked after each file is loaded
 *
 * @method onAssetLoaded
 * @private
 */
PIXI.AssetLoader.prototype.onAssetLoaded = function(loader)
{
    this.loadCount--;
    this.dispatchEvent({ type: 'onProgress', content: this, loader: loader });
    if (this.onProgress) this.onProgress(loader);

    if (!this.loadCount)
    {
        this.dispatchEvent({type: 'onComplete', content: this});
        if(this.onComplete) this.onComplete();
    }
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The json file loader is used to load in JSON data and parse it
 * When loaded this class will dispatch a 'loaded' event
 * If loading fails this class will dispatch an 'error' event
 *
 * @class JsonLoader
 * @uses EventTarget
 * @constructor
 * @param url {String} The url of the JSON file
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 */
PIXI.JsonLoader = function (url, crossorigin) {
    PIXI.EventTarget.call(this);

    /**
     * The url of the bitmap font data
     *
     * @property url
     * @type String
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @property crossorigin
     * @type Boolean
     */
    this.crossorigin = crossorigin;

    /**
     * [read-only] The base url of the bitmap font data
     *
     * @property baseUrl
     * @type String
     * @readOnly
     */
    this.baseUrl = url.replace(/[^\/]*$/, '');

    /**
     * [read-only] Whether the data has loaded yet
     *
     * @property loaded
     * @type Boolean
     * @readOnly
     */
    this.loaded = false;

};

// constructor
PIXI.JsonLoader.prototype.constructor = PIXI.JsonLoader;

/**
 * Loads the JSON data
 *
 * @method load
 */
PIXI.JsonLoader.prototype.load = function () {

    var scope = this;

    if(window.XDomainRequest && scope.crossorigin)
    {
        this.ajaxRequest = new window.XDomainRequest();

        // XDomainRequest has a few querks. Occasionally it will abort requests
        // A way to avoid this is to make sure ALL callbacks are set even if not used
        // More info here: http://stackoverflow.com/questions/15786966/xdomainrequest-aborts-post-on-ie-9
        this.ajaxRequest.timeout = 3000;

        this.ajaxRequest.onerror = function () {
            scope.onError();
        };
           
        this.ajaxRequest.ontimeout = function () {
            scope.onError();
        };

        this.ajaxRequest.onprogress = function() {};

    }
    else if (window.XMLHttpRequest)
    {
        this.ajaxRequest = new window.XMLHttpRequest();
    }
    else
    {
        this.ajaxRequest = new window.ActiveXObject('Microsoft.XMLHTTP');
    }

    

    this.ajaxRequest.onload = function(){

        scope.onJSONLoaded();
    };

    this.ajaxRequest.open('GET',this.url,true);

    this.ajaxRequest.send();
};

/**
 * Invoke when JSON file is loaded
 *
 * @method onJSONLoaded
 * @private
 */
PIXI.JsonLoader.prototype.onJSONLoaded = function () {
    
    if(!this.ajaxRequest.responseText )
    {
        this.onError();
        return;
    }
   
    this.json = JSON.parse(this.ajaxRequest.responseText);

    if(this.json.frames)
    {
        // sprite sheet
        var scope = this;
        var textureUrl = this.baseUrl + this.json.meta.image;
        var image = new PIXI.ImageLoader(textureUrl, this.crossorigin);
        var frameData = this.json.frames;

        this.texture = image.texture.baseTexture;
        image.addEventListener('loaded', function() {
            scope.onLoaded();
        });

        for (var i in frameData)
        {
            var rect = frameData[i].frame;

            if (rect)
            {
                PIXI.TextureCache[i] = new PIXI.Texture(this.texture, {
                    x: rect.x,
                    y: rect.y,
                    width: rect.w,
                    height: rect.h
                });

                PIXI.TextureCache[i].crop = new PIXI.Rectangle(rect.x, rect.y, rect.w, rect.h);

                //  Check to see if the sprite is trimmed
                if (frameData[i].trimmed)
                {
                    var actualSize = frameData[i].sourceSize;
                    var realSize = frameData[i].spriteSourceSize;
                    PIXI.TextureCache[i].trim = new PIXI.Rectangle(realSize.x, realSize.y, actualSize.w, actualSize.h);
                }
            }
        }

        image.load();

    }
    else if(this.json.bones)
    {
        // spine animation
        var spineJsonParser = new spine.SkeletonJson();
        var skeletonData = spineJsonParser.readSkeletonData(this.json);
        PIXI.AnimCache[this.url] = skeletonData;
        this.onLoaded();
    }
    else
    {
        this.onLoaded();
    }
};

/**
 * Invoke when json file loaded
 *
 * @method onLoaded
 * @private
 */
PIXI.JsonLoader.prototype.onLoaded = function () {
    this.loaded = true;
    this.dispatchEvent({
        type: 'loaded',
        content: this
    });
};

/**
 * Invoke when error occured
 *
 * @method onError
 * @private
 */
PIXI.JsonLoader.prototype.onError = function () {

    this.dispatchEvent({
        type: 'error',
        content: this
    });
};

/**
 * @author Martin Kelm http://mkelm.github.com
 */

/**
 * The atlas file loader is used to load in Atlas data and parse it
 * When loaded this class will dispatch a 'loaded' event
 * If loading fails this class will dispatch an 'error' event
 * @class AtlasLoader
 * @extends EventTarget
 * @constructor
 * @param {String} url the url of the JSON file
 * @param {Boolean} crossorigin
 */

PIXI.AtlasLoader = function (url, crossorigin) {
    PIXI.EventTarget.call(this);
    this.url = url;
    this.baseUrl = url.replace(/[^\/]*$/, '');
    this.crossorigin = crossorigin;
    this.loaded = false;

};

// constructor
PIXI.AtlasLoader.constructor = PIXI.AtlasLoader;


 /**
 * Starts loading the JSON file
 *
 * @method load
 */
PIXI.AtlasLoader.prototype.load = function () {
    this.ajaxRequest = new PIXI.AjaxRequest();
    this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this);

    this.ajaxRequest.open('GET', this.url, true);
    if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType('application/json');
    this.ajaxRequest.send(null);
};

/**
 * Invoke when JSON file is loaded
 * @method onAtlasLoaded
 * @private
 */
PIXI.AtlasLoader.prototype.onAtlasLoaded = function () {
    if (this.ajaxRequest.readyState === 4) {
        if (this.ajaxRequest.status === 200 || window.location.href.indexOf('http') === -1) {
            this.atlas = {
                meta : {
                    image : []
                },
                frames : []
            };
            var result = this.ajaxRequest.responseText.split(/\r?\n/);
            var lineCount = -3;

            var currentImageId = 0;
            var currentFrame = null;
            var nameInNextLine = false;

            var i = 0,
                j = 0,
                selfOnLoaded = this.onLoaded.bind(this);

            // parser without rotation support yet!
            for (i = 0; i < result.length; i++) {
                result[i] = result[i].replace(/^\s+|\s+$/g, '');
                if (result[i] === '') {
                    nameInNextLine = i+1;
                }
                if (result[i].length > 0) {
                    if (nameInNextLine === i) {
                        this.atlas.meta.image.push(result[i]);
                        currentImageId = this.atlas.meta.image.length - 1;
                        this.atlas.frames.push({});
                        lineCount = -3;
                    } else if (lineCount > 0) {
                        if (lineCount % 7 === 1) { // frame name
                            if (currentFrame != null) { //jshint ignore:line
                                this.atlas.frames[currentImageId][currentFrame.name] = currentFrame;
                            }
                            currentFrame = { name: result[i], frame : {} };
                        } else {
                            var text = result[i].split(' ');
                            if (lineCount % 7 === 3) { // position
                                currentFrame.frame.x = Number(text[1].replace(',', ''));
                                currentFrame.frame.y = Number(text[2]);
                            } else if (lineCount % 7 === 4) { // size
                                currentFrame.frame.w = Number(text[1].replace(',', ''));
                                currentFrame.frame.h = Number(text[2]);
                            } else if (lineCount % 7 === 5) { // real size
                                var realSize = {
                                    x : 0,
                                    y : 0,
                                    w : Number(text[1].replace(',', '')),
                                    h : Number(text[2])
                                };

                                if (realSize.w > currentFrame.frame.w || realSize.h > currentFrame.frame.h) {
                                    currentFrame.trimmed = true;
                                    currentFrame.realSize = realSize;
                                } else {
                                    currentFrame.trimmed = false;
                                }
                            }
                        }
                    }
                    lineCount++;
                }
            }

            if (currentFrame != null) { //jshint ignore:line
                this.atlas.frames[currentImageId][currentFrame.name] = currentFrame;
            }

            if (this.atlas.meta.image.length > 0) {
                this.images = [];
                for (j = 0; j < this.atlas.meta.image.length; j++) {
                    // sprite sheet
                    var textureUrl = this.baseUrl + this.atlas.meta.image[j];
                    var frameData = this.atlas.frames[j];
                    this.images.push(new PIXI.ImageLoader(textureUrl, this.crossorigin));

                    for (i in frameData) {
                        var rect = frameData[i].frame;
                        if (rect) {
                            PIXI.TextureCache[i] = new PIXI.Texture(this.images[j].texture.baseTexture, {
                                x: rect.x,
                                y: rect.y,
                                width: rect.w,
                                height: rect.h
                            });
                            if (frameData[i].trimmed) {
                                PIXI.TextureCache[i].realSize = frameData[i].realSize;
                                // trim in pixi not supported yet, todo update trim properties if it is done ...
                                PIXI.TextureCache[i].trim.x = 0;
                                PIXI.TextureCache[i].trim.y = 0;
                            }
                        }
                    }
                }

                this.currentImageId = 0;
                for (j = 0; j < this.images.length; j++) {
                    this.images[j].addEventListener('loaded', selfOnLoaded);
                }
                this.images[this.currentImageId].load();

            } else {
                this.onLoaded();
            }

        } else {
            this.onError();
        }
    }
};

/**
 * Invoke when json file has loaded
 * @method onLoaded
 * @private
 */
PIXI.AtlasLoader.prototype.onLoaded = function () {
    if (this.images.length - 1 > this.currentImageId) {
        this.currentImageId++;
        this.images[this.currentImageId].load();
    } else {
        this.loaded = true;
        this.dispatchEvent({
            type: 'loaded',
            content: this
        });
    }
};

/**
 * Invoke when error occured
 * @method onError
 * @private
 */
PIXI.AtlasLoader.prototype.onError = function () {
    this.dispatchEvent({
        type: 'error',
        content: this
    });
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The sprite sheet loader is used to load in JSON sprite sheet data
 * To generate the data you can use http://www.codeandweb.com/texturepacker and publish in the 'JSON' format
 * There is a free version so thats nice, although the paid version is great value for money.
 * It is highly recommended to use Sprite sheets (also know as a 'texture atlas') as it means sprites can be batched and drawn together for highly increased rendering speed.
 * Once the data has been loaded the frames are stored in the PIXI texture cache and can be accessed though PIXI.Texture.fromFrameId() and PIXI.Sprite.fromFrameId()
 * This loader will load the image file that the Spritesheet points to as well as the data.
 * When loaded this class will dispatch a 'loaded' event
 *
 * @class SpriteSheetLoader
 * @uses EventTarget
 * @constructor
 * @param url {String} The url of the sprite sheet JSON file
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 */
PIXI.SpriteSheetLoader = function (url, crossorigin) {
    /*
     * i use texture packer to load the assets..
     * http://www.codeandweb.com/texturepacker
     * make sure to set the format as 'JSON'
     */
    PIXI.EventTarget.call(this);

    /**
     * The url of the bitmap font data
     *
     * @property url
     * @type String
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @property crossorigin
     * @type Boolean
     */
    this.crossorigin = crossorigin;

    /**
     * [read-only] The base url of the bitmap font data
     *
     * @property baseUrl
     * @type String
     * @readOnly
     */
    this.baseUrl = url.replace(/[^\/]*$/, '');

    /**
     * The texture being loaded
     *
     * @property texture
     * @type Texture
     */
    this.texture = null;

    /**
     * The frames of the sprite sheet
     *
     * @property frames
     * @type Object
     */
    this.frames = {};
};

// constructor
PIXI.SpriteSheetLoader.prototype.constructor = PIXI.SpriteSheetLoader;

/**
 * This will begin loading the JSON file
 *
 * @method load
 */
PIXI.SpriteSheetLoader.prototype.load = function () {
    var scope = this;
    var jsonLoader = new PIXI.JsonLoader(this.url, this.crossorigin);
    jsonLoader.addEventListener('loaded', function (event) {
        scope.json = event.content.json;
        scope.onLoaded();
    });
    jsonLoader.load();
};

/**
 * Invoke when all files are loaded (json and texture)
 *
 * @method onLoaded
 * @private
 */
PIXI.SpriteSheetLoader.prototype.onLoaded = function () {
    this.dispatchEvent({
        type: 'loaded',
        content: this
    });
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The image loader class is responsible for loading images file formats ('jpeg', 'jpg', 'png' and 'gif')
 * Once the image has been loaded it is stored in the PIXI texture cache and can be accessed though PIXI.Texture.fromFrameId() and PIXI.Sprite.fromFrameId()
 * When loaded this class will dispatch a 'loaded' event
 *
 * @class ImageLoader
 * @uses EventTarget
 * @constructor
 * @param url {String} The url of the image
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 */
PIXI.ImageLoader = function(url, crossorigin)
{
    PIXI.EventTarget.call(this);

    /**
     * The texture being loaded
     *
     * @property texture
     * @type Texture
     */
    this.texture = PIXI.Texture.fromImage(url, crossorigin);

    /**
     * if the image is loaded with loadFramedSpriteSheet
     * frames will contain the sprite sheet frames
     *
     */
    this.frames = [];
};

// constructor
PIXI.ImageLoader.prototype.constructor = PIXI.ImageLoader;

/**
 * Loads image or takes it from cache
 *
 * @method load
 */
PIXI.ImageLoader.prototype.load = function()
{
    if(!this.texture.baseTexture.hasLoaded)
    {
        var scope = this;
        this.texture.baseTexture.addEventListener('loaded', function()
        {
            scope.onLoaded();
        });
    }
    else
    {
        this.onLoaded();
    }
};

/**
 * Invoked when image file is loaded or it is already cached and ready to use
 *
 * @method onLoaded
 * @private
 */
PIXI.ImageLoader.prototype.onLoaded = function()
{
    this.dispatchEvent({type: 'loaded', content: this});
};

/**
 * Loads image and split it to uniform sized frames
 *
 *
 * @method loadFramedSpriteSheet
 * @param frameWidth {Number} width of each frame
 * @param frameHeight {Number} height of each frame
 * @param textureName {String} if given, the frames will be cached in <textureName>-<ord> format
 */
PIXI.ImageLoader.prototype.loadFramedSpriteSheet = function(frameWidth, frameHeight, textureName)
{
    this.frames = [];
    var cols = Math.floor(this.texture.width / frameWidth);
    var rows = Math.floor(this.texture.height / frameHeight);

    var i=0;
    for (var y=0; y<rows; y++)
    {
        for (var x=0; x<cols; x++,i++)
        {
            var texture = new PIXI.Texture(this.texture, {
                x: x*frameWidth,
                y: y*frameHeight,
                width: frameWidth,
                height: frameHeight
            });

            this.frames.push(texture);
            if (textureName) PIXI.TextureCache[textureName + '-' + i] = texture;
        }
    }

    if(!this.texture.baseTexture.hasLoaded)
    {
        var scope = this;
        this.texture.baseTexture.addEventListener('loaded', function() {
            scope.onLoaded();
        });
    }
    else
    {
        this.onLoaded();
    }
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The xml loader is used to load in XML bitmap font data ('xml' or 'fnt')
 * To generate the data you can use http://www.angelcode.com/products/bmfont/
 * This loader will also load the image file as the data.
 * When loaded this class will dispatch a 'loaded' event
 *
 * @class BitmapFontLoader
 * @uses EventTarget
 * @constructor
 * @param url {String} The url of the sprite sheet JSON file
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 */
PIXI.BitmapFontLoader = function(url, crossorigin)
{
    /*
     * I use texture packer to load the assets..
     * http://www.codeandweb.com/texturepacker
     * make sure to set the format as 'JSON'
     */
    PIXI.EventTarget.call(this);

    /**
     * The url of the bitmap font data
     *
     * @property url
     * @type String
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @property crossorigin
     * @type Boolean
     */
    this.crossorigin = crossorigin;

    /**
     * [read-only] The base url of the bitmap font data
     *
     * @property baseUrl
     * @type String
     * @readOnly
     */
    this.baseUrl = url.replace(/[^\/]*$/, '');

    /**
     * [read-only] The texture of the bitmap font
     *
     * @property baseUrl
     * @type String
     */
    this.texture = null;
};

// constructor
PIXI.BitmapFontLoader.prototype.constructor = PIXI.BitmapFontLoader;

/**
 * Loads the XML font data
 *
 * @method load
 */
PIXI.BitmapFontLoader.prototype.load = function()
{
    this.ajaxRequest = new PIXI.AjaxRequest();
    var scope = this;
    this.ajaxRequest.onreadystatechange = function()
    {
        scope.onXMLLoaded();
    };

    this.ajaxRequest.open('GET', this.url, true);
    if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType('application/xml');
    this.ajaxRequest.send(null);
};

/**
 * Invoked when the XML file is loaded, parses the data
 *
 * @method onXMLLoaded
 * @private
 */
PIXI.BitmapFontLoader.prototype.onXMLLoaded = function()
{
    if (this.ajaxRequest.readyState === 4)
    {
        if (this.ajaxRequest.status === 200 || window.location.protocol.indexOf('http') === -1)
        {
            var responseXML = this.ajaxRequest.responseXML;
            if(!responseXML || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS) {
                if(typeof(window.DOMParser) === 'function') {
                    var domparser = new DOMParser();
                    responseXML = domparser.parseFromString(this.ajaxRequest.responseText, 'text/xml');
                } else {
                    var div = document.createElement('div');
                    div.innerHTML = this.ajaxRequest.responseText;
                    responseXML = div;
                }
            }

            var textureUrl = this.baseUrl + responseXML.getElementsByTagName('page')[0].getAttribute('file');
            var image = new PIXI.ImageLoader(textureUrl, this.crossorigin);
            this.texture = image.texture.baseTexture;

            var data = {};
            var info = responseXML.getElementsByTagName('info')[0];
            var common = responseXML.getElementsByTagName('common')[0];
            data.font = info.getAttribute('face');
            data.size = parseInt(info.getAttribute('size'), 10);
            data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10);
            data.chars = {};

            //parse letters
            var letters = responseXML.getElementsByTagName('char');

            for (var i = 0; i < letters.length; i++)
            {
                var charCode = parseInt(letters[i].getAttribute('id'), 10);

                var textureRect = new PIXI.Rectangle(
                    parseInt(letters[i].getAttribute('x'), 10),
                    parseInt(letters[i].getAttribute('y'), 10),
                    parseInt(letters[i].getAttribute('width'), 10),
                    parseInt(letters[i].getAttribute('height'), 10)
                );

                data.chars[charCode] = {
                    xOffset: parseInt(letters[i].getAttribute('xoffset'), 10),
                    yOffset: parseInt(letters[i].getAttribute('yoffset'), 10),
                    xAdvance: parseInt(letters[i].getAttribute('xadvance'), 10),
                    kerning: {},
                    texture: PIXI.TextureCache[charCode] = new PIXI.Texture(this.texture, textureRect)

                };
            }

            //parse kernings
            var kernings = responseXML.getElementsByTagName('kerning');
            for (i = 0; i < kernings.length; i++)
            {
                var first = parseInt(kernings[i].getAttribute('first'), 10);
                var second = parseInt(kernings[i].getAttribute('second'), 10);
                var amount = parseInt(kernings[i].getAttribute('amount'), 10);

                data.chars[second].kerning[first] = amount;

            }

            PIXI.BitmapText.fonts[data.font] = data;

            var scope = this;
            image.addEventListener('loaded', function() {
                scope.onLoaded();
            });
            image.load();
        }
    }
};

/**
 * Invoked when all files are loaded (xml/fnt and texture)
 *
 * @method onLoaded
 * @private
 */
PIXI.BitmapFontLoader.prototype.onLoaded = function()
{
    this.dispatchEvent({type: 'loaded', content: this});
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * based on pixi impact spine implementation made by Eemeli Kelokorpi (@ekelokorpi) https://github.com/ekelokorpi
 *
 * Awesome JS run time provided by EsotericSoftware
 * https://github.com/EsotericSoftware/spine-runtimes
 *
 */

/**
 * The Spine loader is used to load in JSON spine data
 * To generate the data you need to use http://esotericsoftware.com/ and export in the "JSON" format
 * Due to a clash of names  You will need to change the extension of the spine file from *.json to *.anim for it to load
 * See example 12 (http://www.goodboydigital.com/pixijs/examples/12/) to see a working example and check out the source
 * You will need to generate a sprite sheet to accompany the spine data
 * When loaded this class will dispatch a "loaded" event
 *
 * @class Spine
 * @uses EventTarget
 * @constructor
 * @param url {String} The url of the JSON file
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 */
PIXI.SpineLoader = function(url, crossorigin)
{
    PIXI.EventTarget.call(this);

    /**
     * The url of the bitmap font data
     *
     * @property url
     * @type String
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @property crossorigin
     * @type Boolean
     */
    this.crossorigin = crossorigin;

    /**
     * [read-only] Whether the data has loaded yet
     *
     * @property loaded
     * @type Boolean
     * @readOnly
     */
    this.loaded = false;
};

PIXI.SpineLoader.prototype.constructor = PIXI.SpineLoader;

/**
 * Loads the JSON data
 *
 * @method load
 */
PIXI.SpineLoader.prototype.load = function () {

    var scope = this;
    var jsonLoader = new PIXI.JsonLoader(this.url, this.crossorigin);
    jsonLoader.addEventListener("loaded", function (event) {
        scope.json = event.content.json;
        scope.onLoaded();
    });
    jsonLoader.load();
};

/**
 * Invoke when JSON file is loaded
 *
 * @method onLoaded
 * @private
 */
PIXI.SpineLoader.prototype.onLoaded = function () {
    this.loaded = true;
    this.dispatchEvent({type: "loaded", content: this});
};


/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * This is the base class for creating a pixi.js filter. Currently only webGL supports filters.
 * If you want to make a custom filter this should be your base class.
 * @class AbstractFilter
 * @constructor
 * @param fragmentSrc
 * @param uniforms
 */
PIXI.AbstractFilter = function(fragmentSrc, uniforms)
{
    /**
    * An array of passes - some filters contain a few steps this array simply stores the steps in a liniear fashion.
    * For example the blur filter has two passes blurX and blurY.
    * @property passes
    * @type Array an array of filter objects
    * @private
    */
    this.passes = [this];

    /**
    * @property shaders
    * @type Array an array of shaders
    * @private
    */
    this.shaders = [];
    
    this.dirty = true;
    this.padding = 0;

    /**
    * @property uniforms
    * @type object
    * @private
    */
    this.uniforms = uniforms || {};
    /**
    * @property fragmentSrc
    * @type Array
    * @private
    */
    this.fragmentSrc = fragmentSrc || [];
};

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * The AlphaMaskFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used to offset the x and the g propery of the texture is used to offset the y.
 * @class AlphaMaskFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */
PIXI.AlphaMaskFilter = function(texture)
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];
    texture.baseTexture._powerOf2 = true;

    // set the uniforms
    this.uniforms = {
        mask: {type: 'sampler2D', value:texture},
        mapDimensions:   {type: '2f', value:{x:1, y:5112}},
        dimensions:   {type: '4fv', value:[0,0,0,0]}
    };

    if(texture.baseTexture.hasLoaded)
    {
        this.uniforms.mask.value.x = texture.width;
        this.uniforms.mask.value.y = texture.height;
    }
    else
    {
        this.boundLoadedFunction = this.onTextureLoaded.bind(this);

        texture.baseTexture.on('loaded', this.boundLoadedFunction);
    }

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D mask;',
        'uniform sampler2D uSampler;',
        'uniform vec2 offset;',
        'uniform vec4 dimensions;',
        'uniform vec2 mapDimensions;',

        'void main(void) {',
        '   vec2 mapCords = vTextureCoord.xy;',
        '   mapCords += (dimensions.zw + offset)/ dimensions.xy ;',
        '   mapCords.y *= -1.0;',
        '   mapCords.y += 1.0;',
        '   mapCords *= dimensions.xy / mapDimensions;',

        '   vec4 original =  texture2D(uSampler, vTextureCoord);',
        '   float maskAlpha =  texture2D(mask, mapCords).r;',
        '   original *= maskAlpha;',
        //'   original.rgb *= maskAlpha;',
        '   gl_FragColor =  original;',
        //'   gl_FragColor = gl_FragColor;',
        '}'
    ];
};

PIXI.AlphaMaskFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.AlphaMaskFilter.prototype.constructor = PIXI.AlphaMaskFilter;

PIXI.AlphaMaskFilter.prototype.onTextureLoaded = function()
{
    this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width;
    this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height;

    this.uniforms.mask.value.baseTexture.off('loaded', this.boundLoadedFunction);
};

/**
 * The texture used for the displacemtent map * must be power of 2 texture at the moment
 *
 * @property map
 * @type Texture
 */
Object.defineProperty(PIXI.AlphaMaskFilter.prototype, 'map', {
    get: function() {
        return this.uniforms.mask.value;
    },
    set: function(value) {
        this.uniforms.mask.value = value;
    }
});


/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * The ColorMatrixFilter class lets you apply a 4x4 matrix transformation on the RGBA
 * color and alpha values of every pixel on your displayObject to produce a result
 * with a new set of RGBA color and alpha values. Its pretty powerful!
 * @class ColorMatrixFilter
 * @contructor
 */
PIXI.ColorMatrixFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        matrix: {type: 'mat4', value: [1,0,0,0,
                                       0,1,0,0,
                                       0,0,1,0,
                                       0,0,0,1]}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float invert;',
        'uniform mat4 matrix;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;',
      //  '   gl_FragColor = gl_FragColor;',
        '}'
    ];
};

PIXI.ColorMatrixFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.ColorMatrixFilter.prototype.constructor = PIXI.ColorMatrixFilter;

/**
 * Sets the matrix of the color matrix filter
 *
 * @property matrix
 * @type Array and array of 26 numbers
 * @default [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
 */
Object.defineProperty(PIXI.ColorMatrixFilter.prototype, 'matrix', {
    get: function() {
        return this.uniforms.matrix.value;
    },
    set: function(value) {
        this.uniforms.matrix.value = value;
    }
});
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * This turns your displayObjects to black and white.
 * @class GrayFilter
 * @contructor
 */
PIXI.GrayFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        gray: {type: '1f', value: 1}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D uSampler;',
        'uniform float gray;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);',
     //   '   gl_FragColor = gl_FragColor;',
        '}'
    ];
};

PIXI.GrayFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.GrayFilter.prototype.constructor = PIXI.GrayFilter;

/**
The strength of the gray. 1 will make the object black and white, 0 will make the object its normal color
@property gray
*/
Object.defineProperty(PIXI.GrayFilter.prototype, 'gray', {
    get: function() {
        return this.uniforms.gray.value;
    },
    set: function(value) {
        this.uniforms.gray.value = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * The DisplacementFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class DisplacementFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */
PIXI.DisplacementFilter = function(texture)
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];
    texture.baseTexture._powerOf2 = true;

    // set the uniforms
    this.uniforms = {
        displacementMap: {type: 'sampler2D', value:texture},
        scale:           {type: '2f', value:{x:30, y:30}},
        offset:          {type: '2f', value:{x:0, y:0}},
        mapDimensions:   {type: '2f', value:{x:1, y:5112}},
        dimensions:   {type: '4fv', value:[0,0,0,0]}
    };

    if(texture.baseTexture.hasLoaded)
    {
        this.uniforms.mapDimensions.value.x = texture.width;
        this.uniforms.mapDimensions.value.y = texture.height;
    }
    else
    {
        this.boundLoadedFunction = this.onTextureLoaded.bind(this);

        texture.baseTexture.on('loaded', this.boundLoadedFunction);
    }

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D displacementMap;',
        'uniform sampler2D uSampler;',
        'uniform vec2 scale;',
        'uniform vec2 offset;',
        'uniform vec4 dimensions;',
        'uniform vec2 mapDimensions;',// = vec2(256.0, 256.0);',
        // 'const vec2 textureDimensions = vec2(750.0, 750.0);',

        'void main(void) {',
        '   vec2 mapCords = vTextureCoord.xy;',
        //'   mapCords -= ;',
        '   mapCords += (dimensions.zw + offset)/ dimensions.xy ;',
        '   mapCords.y *= -1.0;',
        '   mapCords.y += 1.0;',
        '   vec2 matSample = texture2D(displacementMap, mapCords).xy;',
        '   matSample -= 0.5;',
        '   matSample *= scale;',
        '   matSample /= mapDimensions;',
        '   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));',
        '   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);',
        '   vec2 cord = vTextureCoord;',

        //'   gl_FragColor =  texture2D(displacementMap, cord);',
     //   '   gl_FragColor = gl_FragColor;',
        '}'
    ];
};

PIXI.DisplacementFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DisplacementFilter.prototype.constructor = PIXI.DisplacementFilter;

PIXI.DisplacementFilter.prototype.onTextureLoaded = function()
{
    this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
    this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;

    this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
};

/**
 * The texture used for the displacemtent map * must be power of 2 texture at the moment
 *
 * @property map
 * @type Texture
 */
Object.defineProperty(PIXI.DisplacementFilter.prototype, 'map', {
    get: function() {
        return this.uniforms.displacementMap.value;
    },
    set: function(value) {
        this.uniforms.displacementMap.value = value;
    }
});

/**
 * The multiplier used to scale the displacement result from the map calculation.
 *
 * @property scale
 * @type Point
 */
Object.defineProperty(PIXI.DisplacementFilter.prototype, 'scale', {
    get: function() {
        return this.uniforms.scale.value;
    },
    set: function(value) {
        this.uniforms.scale.value = value;
    }
});

/**
 * The offset used to move the displacement map.
 *
 * @property offset
 * @type Point
 */
Object.defineProperty(PIXI.DisplacementFilter.prototype, 'offset', {
    get: function() {
        return this.uniforms.offset.value;
    },
    set: function(value) {
        this.uniforms.offset.value = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * This filter applies a pixelate effect making display objects appear 'blocky'
 * @class PixelateFilter
 * @contructor
 */
PIXI.PixelateFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        invert: {type: '1f', value: 0},
        dimensions: {type: '4fv', value:new Float32Array([10000, 100, 10, 10])},
        pixelSize: {type: '2f', value:{x:10, y:10}}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec2 testDim;',
        'uniform vec4 dimensions;',
        'uniform vec2 pixelSize;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec2 coord = vTextureCoord;',

        '   vec2 size = dimensions.xy/pixelSize;',

        '   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;',
        '   gl_FragColor = texture2D(uSampler, color);',
        '}'
    ];
};

PIXI.PixelateFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.PixelateFilter.prototype.constructor = PIXI.PixelateFilter;

/**
 *
 * This a point that describes the size of the blocs. x is the width of the block and y is the the height
 * @property size
 * @type Point
 */
Object.defineProperty(PIXI.PixelateFilter.prototype, 'size', {
    get: function() {
        return this.uniforms.pixelSize.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.pixelSize.value = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.BlurXFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        blur: {type: '1f', value: 1/512}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec4 sum = vec4(0.0);',

        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;',

        '   gl_FragColor = sum;',
        '}'
    ];
};

PIXI.BlurXFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.BlurXFilter.prototype.constructor = PIXI.BlurXFilter;

Object.defineProperty(PIXI.BlurXFilter.prototype, 'blur', {
    get: function() {
        return this.uniforms.blur.value / (1/7000);
    },
    set: function(value) {

        this.dirty = true;
        this.uniforms.blur.value = (1/7000) * value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.BlurYFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        blur: {type: '1f', value: 1/512}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec4 sum = vec4(0.0);',

        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;',

        '   gl_FragColor = sum;',
        '}'
    ];
};

PIXI.BlurYFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.BlurYFilter.prototype.constructor = PIXI.BlurYFilter;

Object.defineProperty(PIXI.BlurYFilter.prototype, 'blur', {
    get: function() {
        return this.uniforms.blur.value / (1/7000);
    },
    set: function(value) {
        //this.padding = value;
        this.uniforms.blur.value = (1/7000) * value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * The BlurFilter applies a Gaussian blur to an object.
 * The strength of the blur can be set for x- and y-axis separately (always relative to the stage).
 *
 * @class BlurFilter
 * @contructor
 */
PIXI.BlurFilter = function()
{
    this.blurXFilter = new PIXI.BlurXFilter();
    this.blurYFilter = new PIXI.BlurYFilter();

    this.passes =[this.blurXFilter, this.blurYFilter];
};

/**
 * Sets the strength of both the blurX and blurY properties simultaneously
 *
 * @property blur
 * @type Number the strength of the blur
 * @default 2
 */
Object.defineProperty(PIXI.BlurFilter.prototype, 'blur', {
    get: function() {
        return this.blurXFilter.blur;
    },
    set: function(value) {
        this.blurXFilter.blur = this.blurYFilter.blur = value;
    }
});

/**
 * Sets the strength of the blurX property
 *
 * @property blurX
 * @type Number the strength of the blurX
 * @default 2
 */
Object.defineProperty(PIXI.BlurFilter.prototype, 'blurX', {
    get: function() {
        return this.blurXFilter.blur;
    },
    set: function(value) {
        this.blurXFilter.blur = value;
    }
});

/**
 * Sets the strength of the blurX property
 *
 * @property blurY
 * @type Number the strength of the blurY
 * @default 2
 */
Object.defineProperty(PIXI.BlurFilter.prototype, 'blurY', {
    get: function() {
        return this.blurYFilter.blur;
    },
    set: function(value) {
        this.blurYFilter.blur = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * This inverts your displayObjects colors.
 * @class InvertFilter
 * @contructor
 */
PIXI.InvertFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        invert: {type: '1f', value: 1}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float invert;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);',
        //'   gl_FragColor.rgb = gl_FragColor.rgb  * gl_FragColor.a;',
      //  '   gl_FragColor = gl_FragColor * vColor;',
        '}'
    ];
};

PIXI.InvertFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.InvertFilter.prototype.constructor = PIXI.InvertFilter;

/**
The strength of the invert. 1 will fully invert the colors, 0 will make the object its normal color
@property invert
*/
Object.defineProperty(PIXI.InvertFilter.prototype, 'invert', {
    get: function() {
        return this.uniforms.invert.value;
    },
    set: function(value) {
        this.uniforms.invert.value = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * This applies a sepia effect to your displayObjects.
 * @class SepiaFilter
 * @contructor
 */
PIXI.SepiaFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        sepia: {type: '1f', value: 1}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float sepia;',
        'uniform sampler2D uSampler;',

        'const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);',
       // '   gl_FragColor = gl_FragColor * vColor;',
        '}'
    ];
};

PIXI.SepiaFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.SepiaFilter.prototype.constructor = PIXI.SepiaFilter;

/**
The strength of the sepia. 1 will apply the full sepia effect, 0 will make the object its normal color
@property sepia
*/
Object.defineProperty(PIXI.SepiaFilter.prototype, 'sepia', {
    get: function() {
        return this.uniforms.sepia.value;
    },
    set: function(value) {
        this.uniforms.sepia.value = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * This filter applies a twist effect making display objects appear twisted in the given direction
 * @class TwistFilter
 * @contructor
 */
PIXI.TwistFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        radius: {type: '1f', value:0.5},
        angle: {type: '1f', value:5},
        offset: {type: '2f', value:{x:0.5, y:0.5}}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'uniform float radius;',
        'uniform float angle;',
        'uniform vec2 offset;',

        'void main(void) {',
        '   vec2 coord = vTextureCoord - offset;',
        '   float distance = length(coord);',

        '   if (distance < radius) {',
        '       float ratio = (radius - distance) / radius;',
        '       float angleMod = ratio * ratio * angle;',
        '       float s = sin(angleMod);',
        '       float c = cos(angleMod);',
        '       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);',
        '   }',

        '   gl_FragColor = texture2D(uSampler, coord+offset);',
        '}'
    ];
};

PIXI.TwistFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.TwistFilter.prototype.constructor = PIXI.TwistFilter;

/**
 *
 * This point describes the the offset of the twist
 * @property size
 * @type Point
 */
Object.defineProperty(PIXI.TwistFilter.prototype, 'offset', {
    get: function() {
        return this.uniforms.offset.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.offset.value = value;
    }
});

/**
 *
 * This radius describes size of the twist
 * @property size
 * @type Number
 */
Object.defineProperty(PIXI.TwistFilter.prototype, 'radius', {
    get: function() {
        return this.uniforms.radius.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.radius.value = value;
    }
});

/**
 *
 * This radius describes angle of the twist
 * @property angle
 * @type Number
 */
Object.defineProperty(PIXI.TwistFilter.prototype, 'angle', {
    get: function() {
        return this.uniforms.angle.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.angle.value = value;
    }
});
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * This lowers the color depth of your image by the given amount, producing an image with a smaller palette.
 * @class ColorStepFilter
 * @contructor
 */
PIXI.ColorStepFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        step: {type: '1f', value: 5}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D uSampler;',
        'uniform float step;',

        'void main(void) {',
        '   vec4 color = texture2D(uSampler, vTextureCoord);',
        '   color = floor(color * step) / step;',
        '   gl_FragColor = color;',
        '}'
    ];
};

PIXI.ColorStepFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.ColorStepFilter.prototype.constructor = PIXI.ColorStepFilter;

/**
The number of steps.
@property step
*/
Object.defineProperty(PIXI.ColorStepFilter.prototype, 'step', {
    get: function() {
        return this.uniforms.step.value;
    },
    set: function(value) {
        this.uniforms.step.value = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * original filter: https://github.com/evanw/glfx.js/blob/master/src/filters/fun/dotscreen.js
 */

/**
 *
 * This filter applies a dotscreen effect making display objects appear to be made out of black and white halftone dots like an old printer
 * @class DotScreenFilter
 * @contructor
 */
PIXI.DotScreenFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        scale: {type: '1f', value:1},
        angle: {type: '1f', value:5},
        dimensions:   {type: '4fv', value:[0,0,0,0]}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'uniform float angle;',
        'uniform float scale;',

        'float pattern() {',
        '   float s = sin(angle), c = cos(angle);',
        '   vec2 tex = vTextureCoord * dimensions.xy;',
        '   vec2 point = vec2(',
        '       c * tex.x - s * tex.y,',
        '       s * tex.x + c * tex.y',
        '   ) * scale;',
        '   return (sin(point.x) * sin(point.y)) * 4.0;',
        '}',

        'void main() {',
        '   vec4 color = texture2D(uSampler, vTextureCoord);',
        '   float average = (color.r + color.g + color.b) / 3.0;',
        '   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);',
        '}'
    ];
};

PIXI.DotScreenFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DotScreenFilter.prototype.constructor = PIXI.DotScreenFilter;

/**
 *
 * This describes the the scale
 * @property scale
 * @type Number
 */
Object.defineProperty(PIXI.DotScreenFilter.prototype, 'scale', {
    get: function() {
        return this.uniforms.scale.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.scale.value = value;
    }
});

/**
 *
 * This radius describes angle
 * @property angle
 * @type Number
 */
Object.defineProperty(PIXI.DotScreenFilter.prototype, 'angle', {
    get: function() {
        return this.uniforms.angle.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.angle.value = value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.CrossHatchFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        blur: {type: '1f', value: 1 / 512}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);',

        '    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);',

        '    if (lum < 1.00) {',
        '        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.75) {',
        '        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.50) {',
        '        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.3) {',
        '        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',
        '}'
    ];
};

PIXI.CrossHatchFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.CrossHatchFilter.prototype.constructor = PIXI.BlurYFilter;

Object.defineProperty(PIXI.CrossHatchFilter.prototype, 'blur', {
    get: function() {
        return this.uniforms.blur.value / (1/7000);
    },
    set: function(value) {
        //this.padding = value;
        this.uniforms.blur.value = (1/7000) * value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.RGBSplitFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        red: {type: '2f', value: {x:20, y:20}},
        green: {type: '2f', value: {x:-20, y:20}},
        blue: {type: '2f', value: {x:20, y:-20}},
        dimensions:   {type: '4fv', value:[0,0,0,0]}
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec2 red;',
        'uniform vec2 green;',
        'uniform vec2 blue;',
        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;',
        '   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;',
        '   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;',
        '   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;',
        '}'
    ];
};

PIXI.RGBSplitFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.RGBSplitFilter.prototype.constructor = PIXI.RGBSplitFilter;

Object.defineProperty(PIXI.RGBSplitFilter.prototype, 'angle', {
    get: function() {
        return this.uniforms.blur.value / (1/7000);
    },
    set: function(value) {
        //this.padding = value;
        this.uniforms.blur.value = (1/7000) * value;
    }
});

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = PIXI;
        }
        exports.PIXI = PIXI;
    } else if (typeof define !== 'undefined' && define.amd) {
        define(PIXI);
    } else {
        root.PIXI = PIXI;
    }
}).call(this);

 /* --------------------------- */ 


/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * The ColorMatrixFilter2 class lets you apply a 4x4 matrix transformation on the RGBA
 * color and alpha values of every pixel on your displayObject to produce a result
 * with a new set of RGBA color and alpha values. Its pretty powerful!
 * @class ColorMatrixFilter
 * @contructor
 */
PIXI.ColorMatrixFilter2 = function()
{
  'use strict';
  PIXI.AbstractFilter.call( this );

  this.passes = [this];

  // set the uniforms
  this.uniforms = {
    matrix: {type: 'mat4', value: [1,0,0,0,
                                   0,1,0,0,
                                   0,0,1,0,
                                   0,0,0,1]},
    shift: {type: '4fv', value:  [0.0,0.0,0.0,0.0]},
  };

  this.fragmentSrc = [
    'precision mediump float;',
    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',
    'uniform float invert;',
    'uniform mat4 matrix;',
    'uniform vec4 shift;',
    'uniform sampler2D uSampler;',

    'void main(void) {',
    '   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix + shift;',
    //  '   gl_FragColor = gl_FragColor;',
    '}'
  ];
};

PIXI.ColorMatrixFilter2.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.ColorMatrixFilter2.prototype.constructor = PIXI.ColorMatrixFilter2;

/**
 * Sets the matrix of the color matrix filter
 *
 * @property matrix
 * @type Array and array of 16 numbers
 * @default [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
 */
Object.defineProperty(PIXI.ColorMatrixFilter2.prototype, 'matrix', {
  get: function() {
    return this.uniforms.matrix.value;
  },
  set: function(value) {
    this.uniforms.matrix.value = value;
  }
});

/**
 * Sets the constant channel shift
 *
 * @property shift
 * @type Array and array of 26 numbers
 * @default [0,0,0,0]
 */
Object.defineProperty(PIXI.ColorMatrixFilter2.prototype, 'shift', {
  get: function() {
    return this.uniforms.shift.value;
  },
  set: function(value) {
    this.uniforms.shift.value = value;
  }
});



/**

  Experimental shader giving perspective effect on image with depthmap.

  Quality is controlled by defined profiles 1, 2 and 3.

  ---------------
  The MIT License

  Copyright (c) 2014 Rafał Lindemann. http://panrafal.github.com/depthy

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

 */

PIXI.DepthPerspectiveFilter = function(texture, quality)
{
  PIXI.AbstractFilter.call( this );
 
  this.passes = [this];

  // set the uniforms
  this.uniforms = {
    displacementMap: {type: 'sampler2D', value:texture},
    scale:           {type: '1f', value:0.015},
    offset:          {type: '2f', value:{x:0, y:0}},
    mapDimensions:   {type: '2f', value:{x:1, y:5112}},
    dimensions:      {type: '4fv', value:[0,0,0,0]},
    focus:           {type: '1f', value:0.5},
    enlarge:         {type: '1f', value:1.06}
  };
 
  if(texture.baseTexture.hasLoaded)
  {
    this.uniforms.mapDimensions.value.x = texture.width;
    this.uniforms.mapDimensions.value.y = texture.height;
  }
  else
  {
    this.boundLoadedFunction = this.onTextureLoaded.bind(this);
 
    texture.baseTexture.on('loaded', this.boundLoadedFunction);
  }
 
  this.fragmentSrc = [


'// Copyright (c) 2014 Rafał Lindemann. http://panrafal.github.com/depthy',
'precision mediump float;',
'',
'varying vec2 vTextureCoord;',
'varying vec4 vColor;',
'uniform sampler2D displacementMap;',
'uniform sampler2D uSampler;',
'uniform vec4 dimensions;',
'uniform vec2 mapDimensions;',
'uniform float scale;',
'uniform vec2 offset;',
'uniform float focus;',
'uniform float enlarge;',
'',
'#if !defined(QUALITY)',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define UPSCALE 1.5',
'  #define ANTIALIAS 1',
'  #define AA_TRIGGER 0.8',
'  #define AA_POWER 1.0',
'  #define AA_MAXITER 8.0',
'  #define MAXSTEPS 16.0',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 2',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define MAXSTEPS 4.0',
'  #define UPSCALE 0.8',
'//   #define ANTIALIAS 2',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 3',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define MAXSTEPS 6.0',
'  #define UPSCALE 1.0',
'  #define ANTIALIAS 2',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 4',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define MAXSTEPS 16.0',
'  #define UPSCALE 1.5',
'  #define ANTIALIAS 2',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 5',
'',
'  #define METHOD 1',
'  #define CORRECT',
'  #define COLORAVG',
'  #define MAXSTEPS 40.0',
'  #define UPSCALE 1.5',
'//     #define ANTIALIAS 2',
'  #define AA_TRIGGER 0.8',
'  #define AA_POWER 1.0',
'  #define AA_MAXITER 8.0',
'  #define CONFIDENCE_MAX 4.5',
'',
'#endif',
'',
'',
'#define BRANCHLOOP  ',
'#define BRANCHSAMPLE ',
'#define DEBUG 0',
'//#define DEBUGBREAK 4',
'',
'#ifndef METHOD',
'  #define METHOD 1',
'#endif',
'#ifndef MAXSTEPS',
'  #define MAXSTEPS 8.0',
'#endif',
'#ifndef UPSCALE',
'  #define UPSCALE 1.2',
'#endif',
'#ifndef PERSPECTIVE',
'  #define PERSPECTIVE 0.0',
'#endif',
'#ifndef UPSCALE',
'  #define UPSCALE 1.06',
'#endif',
'#ifndef CONFIDENCE_MAX',
'  #define CONFIDENCE_MAX 0.2',
'#endif',
'#ifndef COMPRESSION',
'  #define COMPRESSION 0.8',
'#endif',
'',
'const float perspective = PERSPECTIVE;',
'// float steps = clamp( ceil( max(abs(offset.x), abs(offset.y)) * maxSteps ), 1.0, maxSteps);',
'float steps = MAXSTEPS;',
'',
'#ifdef COLORAVG',
'float maskPower = steps * 2.0;// 32.0;',
'#else ',
'float maskPower = steps * 1.0;// 32.0;',
'#endif',
'float correctPower = 1.0;//max(1.0, steps / 8.0);',
'',
'const float compression = COMPRESSION;',
'const float dmin = (1.0 - compression) / 2.0;',
'const float dmax = (1.0 + compression) / 2.0;',
'',
'const float vectorCutoff = 0.0 + dmin - 0.0001;',
'',
'float aspect = dimensions.x / dimensions.y;',
'vec2 scale2 = vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1) * vec2(UPSCALE);',
'// mat2 baseVector = mat2(vec2(-focus * offset) * scale2, vec2(offset - focus * offset) * scale2);',
'mat2 baseVector = mat2(vec2((0.5 - focus) * offset - offset/2.0) * scale2, ',
'                       vec2((0.5 - focus) * offset + offset/2.0) * scale2);',
'',
'',
'void main(void) {',
'',
'  vec2 pos = (vTextureCoord - vec2(0.5)) / vec2(enlarge) + vec2(0.5);',
'  mat2 vector = baseVector;',
'  // perspective shift',
'  vector[1] += (vec2(2.0) * pos - vec2(1.0)) * vec2(perspective);',
'  ',
'  float dstep = compression / (steps - 1.0);',
'  vec2 vstep = (vector[1] - vector[0]) / vec2((steps - 1.0)) ;',
'  ',
'  #ifdef COLORAVG',
'    vec4 colSum = vec4(0.0);',
'  #else',
'    vec2 posSum = vec2(0.0);',
'  #endif',
'',
'  float confidenceSum = 0.0;',
'  float minConfidence = dstep / 2.0;',
'    ',
'  #ifdef ANTIALIAS',
'    #ifndef AA_TRIGGER',
'      #define AA_TRIGGER 0.8',
'    #endif',
'    #if ANTIALIAS == 11 || ANTIALIAS == 12',
'      #ifndef AA_POWER',
'        #define AA_POWER 0.5',
'      #endif',
'      #ifndef AA_MAXITER',
'        #define AA_MAXITER 16.0',
'      #endif',
'      float loopStep = 1.0;',
'    #endif',
'    ',
'    #define LOOP_INDEX j',
'    float j = 0.0;',
'  #endif',
'',
'  #ifndef LOOP_INDEX',
'    #define LOOP_INDEX i',
'  #endif',
'',
'',
'  for(float i = 0.0; i < MAXSTEPS; ++i) {',
'    vec2 vpos = pos + vector[1] - LOOP_INDEX * vstep;',
'    float dpos = 0.5 + compression / 2.0 - LOOP_INDEX * dstep;',
'    #ifdef BRANCHLOOP',
'    if (dpos >= vectorCutoff && confidenceSum < CONFIDENCE_MAX) {',
'    #endif',
'      float depth = 1.0 - texture2D(displacementMap, vpos * vec2(1, -1) + vec2(0, 1)).r;',
'      depth = clamp(depth, dmin + 0.001, dmax); // add 0.001 for htc one+meth 1',
'      float confidence;',
'',
'      #if METHOD == 1',
'        confidence = step(dpos, depth);',
'',
'      #elif METHOD == 3',
'        confidence = 1.0 - abs(dpos - depth);',
'        if (confidence < 1.0 - minConfidence * 2.0) confidence = 0.0;',
'',
'      #elif METHOD == 5',
'        confidence = 1.0 - abs(dpos - depth);',
'        confidence = pow(confidence, maskPower);',
'',
'      #endif',
'',
'      #ifndef BRANCHLOOP',
'       confidence *= step(vectorCutoff, dpos);',
'       confidence *= step(confidenceSum, CONFIDENCE_MAX);',
'      #endif',
'',
'      #ifdef ANTIALIAS',
'        #if ANTIALIAS == 1 // go back halfstep, go forward fullstep - branched',
'',
'          if (confidence > AA_TRIGGER && i == j) {',
'            j -= 0.5;',
'          } else {',
'            j += 1.0;',
'          }',
'          // confidence *= CONFIDENCE_MAX / 3.0;',
'',
'        #elif ANTIALIAS == 2 // go back halfstep, go forward fullstep - mult',
'          j += 1.0 + step(AA_TRIGGER, confidence) ',
'               * step(i, j) * -1.5; ',
'          // confidence *= CONFIDENCE_MAX / 3.0;',
'',
'        #elif ANTIALIAS == 11',
'          if (confidence >= AA_TRIGGER && i == j && steps - i > 1.0) {',
'            loopStep = AA_POWER * 2.0 / min(AA_MAXITER, steps - i - 1.0);',
'            j -= AA_POWER + loopStep;',
'          }',
'          confidence *= loopStep;',
'          j += loopStep;',
'        #elif ANTIALIAS == 12',
'          float _if_aa = step(AA_TRIGGER, confidence)',
'                       * step(i, j)',
'                       * step(1.5, steps - i);',
'          loopStep = _if_aa * (AA_POWER * 2.0 / min(AA_MAXITER, max(0.1, steps - i - 1.0)) - 1.0) + 1.0;',
'          confidence *= loopStep;',
'          j += _if_aa * -(AA_POWER + loopStep) + loopStep;',
'        #endif',
'      #endif',
'',
'',
'      #ifdef BRANCHSAMPLE',
'      if (confidence > 0.0) {',
'      #endif',
'',
'        #ifdef CORRECT',
'          #define CORRECTION_MATH +( ( vec2((depth - dpos) / (dstep * correctPower)) * vstep ))',
'        #else',
'          #define CORRECTION_MATH',
'        #endif',
'          ',
'        #ifdef COLORAVG    ',
'          colSum += texture2D(uSampler, vpos CORRECTION_MATH) * confidence;',
'        #else',
'          posSum += (vpos CORRECTION_MATH) * confidence;    ',
'        #endif',
'          confidenceSum += confidence;',
'          ',
'      #ifdef BRANCHSAMPLE',
'      }',
'      #endif',
'',
'        ',
'      #if DEBUG > 2',
'        gl_FragColor = vec4(vector[0] / 2.0 + 1.0, vector[1].xy / 2.0 + 1.0);',
'      #elif DEBUG > 1',
'        gl_FragColor = vec4(confidenceSum, depth, dpos, 0);',
'      #elif DEBUG > 0',
'        gl_FragColor = vec4(confidence, depth, dpos, 0);',
'      #endif',
'      #ifdef DEBUGBREAK ',
'      if (i == float(DEBUGBREAK)) {',
'          dstep = 1.0;',
'      }     ',
'      #endif',
'',
'    #ifdef BRANCHLOOP',
'    }',
'    #endif',
'  };',
'',
'  #if defined(COLORAVG) && DEBUG == 0',
'    gl_FragColor = colSum / vec4(confidenceSum);',
'  #elif !defined(COLORAVG) && DEBUG == 0',
'    gl_FragColor = texture2D(uSampler, posSum / confidenceSum);',
'  #endif',
'',
'}',


  ];

  this.quality = quality;
  if (quality) {
    this.fragmentSrc.unshift('#define QUALITY ' + quality);
  }
};
 
PIXI.DepthPerspectiveFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DepthPerspectiveFilter.prototype.constructor = PIXI.DepthPerspectiveFilter;
 
PIXI.DepthPerspectiveFilter.prototype.onTextureLoaded = function()
{
  this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
  this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;
 
  this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
};
 
/**
 * The texture used for the displacemtent map * must be power of 2 texture at the moment
 *
 * @property map
 * @type Texture
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'map', {
  get: function() {
    return this.uniforms.displacementMap.value;
  },
  set: function(value) {
    this.uniforms.displacementMap.value = value;
  }
});
 
/**
 * The multiplier used to scale the displacement result from the map calculation.
 *
 * @property scale
 * @type Point
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'scale', {
  get: function() {
    return this.uniforms.scale.value;
  },
  set: function(value) {
    this.uniforms.scale.value = value;
  }
});
 
/**
 * Focus point in paralax
 *
 * @property focus
 * @type float
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'focus', {
  get: function() {
    return this.uniforms.focus.value;
  },
  set: function(value) {
    this.uniforms.focus.value = Math.min(1,Math.max(0,value));
  }
}); 

/**
 * Image enlargment
 *
 * @property enlarge
 * @type float
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'enlarge', {
  get: function() {
    return this.uniforms.enlarge.value;
  },
  set: function(value) {
    this.uniforms.enlarge.value = value;
  }
});

/**
 * The offset used to move the displacement map.
 *
 * @property offset
 * @type Point
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'offset', {
  get: function() {
    return this.uniforms.offset.value;
  },
  set: function(value) {
    this.uniforms.offset.value = value;
  }
});

/**
 *
 * The DepthDisplacementFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class DepthDisplacementFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */

PIXI.DepthDisplacementFilter = function(texture)
{
  PIXI.AbstractFilter.call( this );
 
  this.passes = [this];
  // texture.baseTexture._powerOf2 = true;
 
  // set the uniforms
  this.uniforms = {
    displacementMap: {type: 'sampler2D', value:texture},
    scale:           {type: '1f', value:0.015},
    offset:          {type: '2f', value:{x:0, y:0}},
    mapDimensions:   {type: '2f', value:{x:1, y:5112}},
    dimensions:      {type: '4fv', value:[0,0,0,0]},
    focus:           {type: '1f', value:0.5}
  };
 
  if(texture.baseTexture.hasLoaded)
  {
    this.uniforms.mapDimensions.value.x = texture.width;
    this.uniforms.mapDimensions.value.y = texture.height;
  }
  else
  {
    this.boundLoadedFunction = this.onTextureLoaded.bind(this);
 
    texture.baseTexture.on('loaded', this.boundLoadedFunction);
  }
 
  this.fragmentSrc = [
    'precision mediump float;',
    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',
    'uniform sampler2D displacementMap;',
    'uniform sampler2D uSampler;',
    'uniform float scale;',
    'uniform vec2 offset;',
    'uniform vec4 dimensions;',
    'uniform vec2 mapDimensions;',
    'uniform float focus;',
 
    'void main(void) {',
    '   float aspect = dimensions.x / dimensions.y;',
    '   vec2 scale2 = vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1) * vec2(1);',
    '   vec2 mapCords = vTextureCoord;',
    '   mapCords.y *= -1.0;',
    '   mapCords.y += 1.0;',
    '   float map = texture2D(displacementMap, mapCords).r;',
    '   map = map * -1.0 + focus;',
    '   vec2 disCords = vTextureCoord;',
    '   disCords += offset * map * scale2;',
    '   gl_FragColor = texture2D(uSampler, disCords) * vColor;',
    // '   gl_FragColor = vec4(1,1,1,0.5);',
    // '   gl_FragColor *= texture2D(displacementMap, mapCords);',
    '}'
  ];
};
 
PIXI.DepthDisplacementFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DepthDisplacementFilter.prototype.constructor = PIXI.DepthDisplacementFilter;
 
PIXI.DepthDisplacementFilter.prototype.onTextureLoaded = function()
{
  this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
  this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;
 
  this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
};
 
/**
 * The texture used for the displacemtent map * must be power of 2 texture at the moment
 *
 * @property map
 * @type Texture
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'map', {
  get: function() {
    return this.uniforms.displacementMap.value;
  },
  set: function(value) {
    this.uniforms.displacementMap.value = value;
  }
});
 
/**
 * The multiplier used to scale the displacement result from the map calculation.
 *
 * @property scale
 * @type Point
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'scale', {
  get: function() {
    return this.uniforms.scale.value;
  },
  set: function(value) {
    this.uniforms.scale.value = value;
  }
});
 
/**
 * Focus point in paralax
 *
 * @property focus
 * @type float
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'focus', {
  get: function() {
    return this.uniforms.focus.value;
  },
  set: function(value) {
    this.uniforms.focus.value = Math.min(1,Math.max(0,value));
  }
});

/**
 * The offset used to move the displacement map.
 *
 * @property offset
 * @type Point
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'offset', {
  get: function() {
    return this.uniforms.offset.value;
  },
  set: function(value) {
    this.uniforms.offset.value = value;
  }
});


PIXI.glReadPixels = function(gl, frameBuffer, x, y, width, height, pixels) {
  if (!pixels) pixels = new Uint8Array(4 * width * height);

  if (frameBuffer instanceof PIXI.RenderTexture) {
    frameBuffer = frameBuffer.textureBuffer.frameBuffer;
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);        
  gl.viewport(0, 0, width, height);
  gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);    

  return pixels;
};

PIXI.glReadPixelsToCanvas = function(gl, frameBuffer, x, y, width, height) {
  var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      imgdata = ctx.createImageData(width, height);

  canvas.width = width;
  canvas.height = height;

  PIXI.glReadPixels(gl, frameBuffer, x, y, width, height, new Uint8Array(imgdata.data.buffer));

  ctx.putImageData(imgdata, 0, 0);

  return canvas;
};



 /* --------------------------- */ 

/*! PixiParticles 1.2.2 */
/**
*  @module cloudkid
*/
(function(undefined) {

	"use strict";

	window.cloudkid = window.cloudkid || {};

	/**
	*	Contains helper functions for particles and emitters to use.
	*	@class ParticleUtils
	*	@static
	*/
	var ParticleUtils = {};

	var DEG_TO_RADS = ParticleUtils.DEG_TO_RADS = Math.PI / 180;

	/**
	*	Rotates a point by a given angle.
	*	@method rotatePoint
	*	@param {Number} angle The angle to rotate by in degrees
	*	@param {PIXI.Point} p The point to rotate around 0,0.
	*	@static
	*/
	ParticleUtils.rotatePoint = function(angle, p)
	{
		if(!angle) return;
		angle *= DEG_TO_RADS;
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		var xnew = p.x * c - p.y * s;
		var ynew = p.x * s + p.y * c;
		p.x = xnew;
		p.y = ynew;
	};

	/**
	*	Combines separate color components (0-255) into a single uint color.
	*	@method combineRGBComponents
	*	@param {uint} r The red value of the color
	*	@param {uint} g The green value of the color
	*	@param {uint} b The blue value of the color
	*	@return {uint} The color in the form of 0xRRGGBB
	*	@static
	*/
	ParticleUtils.combineRGBComponents = function(r, g, b/*, a*/)
	{
		return /*a << 24 |*/ r << 16 | g << 8 | b;
	};

	/**
	 * Reduces the point to a length of 1.
	 * @method normalize
	 * @static
	 * @param {PIXI.Point} point The point to normalize
	 */
	ParticleUtils.normalize = function(point)
	{
		var oneOverLen = 1 / ParticleUtils.length(point);
		point.x *= oneOverLen;
		point.y *= oneOverLen;
	};

	/**
	 * Multiplies the x and y values of this point by a value.
	 * @method scaleBy
	 * @static
	 * @param {PIXI.Point} point The point to scaleBy
	 * @param value {Number} The value to scale by.
	 */
	ParticleUtils.scaleBy = function(point, value)
	{
		point.x *= value;
		point.y *= value;
	};

	/**
	 * Returns the length (or magnitude) of this point.
	 * @method length
	 * @static
	 * @param {PIXI.Point} point The point to measure length
	 * @return The length of this point.
	 */
	ParticleUtils.length = function(point)
	{
		return Math.sqrt(point.x * point.x + point.y * point.y);
	};

	/**
	*	Converts a hex string from "#AARRGGBB", "#RRGGBB", "0xAARRGGBB", "0xRRGGBB",
	*	"AARRGGBB", or "RRGGBB" to an array of ints of 0-255 or Numbers from 0-1, as
	*	[r, g, b, (a)].
	*	@method hexToRGB
	*	@param {String} color The input color string.
	*	@param {Array} output An array to put the output in. If omitted, a new array is created.
	*	@return The array of numeric color values.
	*	@static
	*/
	ParticleUtils.hexToRGB = function(color, output)
	{
		if (output)
			output.length = 0;
		else
			output = [];
		if (color.charAt(0) == "#")
			color = color.substr(1);
		else if (color.indexOf("0x") === 0)
			color = color.substr(2);
		var alpha;
		if (color.length == 8)
		{
			alpha = color.substr(0, 2);
			color = color.substr(2);
		}
		output.push(parseInt(color.substr(0, 2), 16));//Red
		output.push(parseInt(color.substr(2, 2), 16));//Green
		output.push(parseInt(color.substr(4, 2), 16));//Blue
		if (alpha)
			output.push(parseInt(alpha, 16));
		return output;
	};

	/**
	*	Generates a custom ease function, based on the GreenSock custom ease, as demonstrated
	*	by the related tool at http://www.greensock.com/customease/.
	*	@method generateEase
	*	@param {Array} segments An array of segments, as created by
	*	http://www.greensock.com/customease/.
	*	@return {Function} A function that calculates the percentage of change at
	*						a given point in time (0-1 inclusive).
	*	@static
	*/
	ParticleUtils.generateEase = function(segments)
	{
		var qty = segments.length;
		var oneOverQty = 1 / qty;
		/*
		*	Calculates the percentage of change at a given point in time (0-1 inclusive).
		*	@param {Number} time The time of the ease, 0-1 inclusive.
		*	@return {Number} The percentage of the change, 0-1 inclusive (unless your
		*			ease goes outside those bounds).
		*/
		var simpleEase = function(time)
		{
			var t, s;
			var i = (qty * time) | 0;//do a quick floor operation
			t = (time - (i * oneOverQty)) * qty;
			s = segments[i] || segments[qty - 1];
			return (s.s + t * (2 * (1 - t) * (s.cp - s.s) + t * (s.e - s.s)));
		};
		return simpleEase;
	};

	/**
	*	Gets a blend mode, ensuring that it is valid.
	*	@method getBlendMode
	*	@param {String} name The name of the blend mode to get.
	*	@return {int} The blend mode as specified in the PIXI.blendModes enumeration.
	*	@static
	*/
	ParticleUtils.getBlendMode = function(name)
	{
		if(!name) return PIXI.blendModes.NORMAL;
		name = name.toUpperCase();
		while(name.indexOf(" ") >= 0)
			name = name.replace(" ", "_");
		return PIXI.blendModes[name] || PIXI.blendModes.NORMAL;
	};

	cloudkid.ParticleUtils = ParticleUtils;

	/**
	*  @module global
	*/
	/**
	*  Add methods to Array
	*  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
	*  @class Array.prototype
	*/

	/**
	*  Shuffles the array
	*  @method shuffle
	*  @return {Array} The array, for chaining calls.
	*/
	if(!Array.prototype.shuffle)
	{
		// In EcmaScript 5 specs and browsers that support it you can use the Object.defineProperty
		// to make it not enumerable set the enumerable property to false
		Object.defineProperty(Array.prototype, 'shuffle', {
			enumerable: false,
			writable:false,
			value: function() {
				for(var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
				return this;
			}
		});
	}

	/**
	*  Get a random item from an array
	*  @method random
	*  @return {*} The random item
	*/
	if(!Array.prototype.random)
	{
		Object.defineProperty(Array.prototype, 'random', {
			enumerable: false,
			writable: false,
			value: function() {
				return this[Math.floor(Math.random() * this.length)];
			}
		});
	}
}());
/**
*  @module cloudkid
*/
(function(cloudkid, undefined) {

	"use strict";

	var ParticleUtils = cloudkid.ParticleUtils;

	/**
	*	An individual particle image. You shouldn't have to deal with these.
	*	@class Particle
	*	@constructor
	*	@param {Emitter} emitter The emitter that controls this particle.
	*/
	var Particle = function(emitter)
	{
		var art = emitter.particleImages[0] instanceof PIXI.Texture ?
															[emitter.particleImages[0]] :
															emitter.particleImages[0];
		PIXI.MovieClip.call(this, art);

		/**
		*	The emitter that controls this particle.
		*	@property {Emitter} emitter
		*/
		this.emitter = emitter;
		this.anchor.x = this.anchor.y = 0.5;
		/**
		*	The velocity of the particle. Speed may change, but the angle also
		*	contained in velocity is constant.
		*	@property {PIXI.Point} velocity
		*/
		this.velocity = new PIXI.Point();
		/**
		*	The maximum lifetime of this particle, in seconds.
		*	@property {Number} maxLife
		*/
		this.maxLife = 0;
		/**
		*	The current age of the particle, in seconds.
		*	@property {Number} age
		*/
		this.age = 0;
		/**
		*	A simple easing function to be applied to all properties that
		*	are being interpolated.
		*	@property {Function} ease
		*/
		this.ease = null;
		/**
		*	Extra data that the emitter passes along for custom particles.
		*	@property {Object} extraData
		*/
		this.extraData = null;
		/**
		*	The alpha of the particle at the start of its life.
		*	@property {Number} startAlpha
		*/
		this.startAlpha = 0;
		/**
		*	The alpha of the particle at the end of its life.
		*	@property {Number} endAlpha
		*/
		this.endAlpha = 0;
		/**
		*	The speed of the particle at the start of its life.
		*	@property {Number} startSpeed
		*/
		this.startSpeed = 0;
		/**
		*	The speed of the particle at the end of its life.
		*	@property {Number} endSpeed
		*/
		this.endSpeed = 0;
		/**
		*	Acceleration to apply to the particle.
		*	@property {PIXI.Point} accleration
		*/
		this.acceleration = null;
		/**
		*	The scale of the particle at the start of its life.
		*	@property {Number} startScale
		*/
		this.startScale = 0;
		/**
		*	The scale of the particle at the start of its life.
		*	@property {Number} endScale
		*/
		this.endScale = 0;
		/**
		*	The tint of the particle at the start of its life.
		*	@property {Array} startColor
		*/
		this.startColor = null;
		/**
		*	The red tint of the particle at the start of its life.
		*	This is pulled from startColor in init().
		*	@property {uint} _sR
		*	@private
		*/
		this._sR = 0;
		/**
		*	The green tint of the particle at the start of its life.
		*	This is pulled from startColor in init().
		*	@property {uint} _sG
		*	@private
		*/
		this._sG = 0;
		/**
		*	The blue tint of the particle at the start of its life.
		*	This is pulled from startColor in init().
		*	@property {uint} _sB
		*	@private
		*/
		this._sB = 0;
		/**
		*	The tint of the particle at the start of its life.
		*	@property {Array} endColor
		*/
		this.endColor = null;
		/**
		*	The red tint of the particle at the end of its life.
		*	This is pulled from endColor in init().
		*	@property {uint} _eR
		*	@private
		*/
		this._eR = 0;
		/**
		*	The green tint of the particle at the end of its life.
		*	This is pulled from endColor in init().
		*	@property {uint} _sG
		*	@private
		*/
		this._eG = 0;
		/**
		*	The blue tint of the particle at the end of its life.
		*	This is pulled from endColor in init().
		*	@property {uint} _sB
		*	@private
		*/
		this._eB = 0;
		/**
		*	If alpha should be interpolated at all.
		*	@property {Boolean} _doAlpha
		*	@private
		*/
		this._doAlpha = false;
		/**
		*	If scale should be interpolated at all.
		*	@property {Boolean} _doScale
		*	@private
		*/
		this._doScale = false;
		/**
		*	If speed should be interpolated at all.
		*	@property {Boolean} _doSpeed
		*	@private
		*/
		this._doSpeed = false;
		/**
		*	If color should be interpolated at all.
		*	@property {Boolean} _doColor
		*	@private
		*/
		this._doColor = false;
		/**
		*	One divided by the max life of the particle, saved for slightly faster math.
		*	@property {Number} _oneOverLife
		*	@private
		*/
		this._oneOverLife = 0;
	};
	
	// Reference to the prototype
	var p = Particle.prototype = Object.create(PIXI.MovieClip.prototype);

	/**
	*	Initializes the particle for use, based on the properties that have to
	*	have been set already on the particle.
	*	@method init
	*/
	p.init = function()
	{
		//reset the age
		this.age = 0;
		//set up the velocity based on the start speed and rotation
		this.velocity.x = this.startSpeed;
		this.velocity.y = 0;
		ParticleUtils.rotatePoint(this.rotation, this.velocity);
		//convert rotation to Radians from Degrees
		this.rotation *= ParticleUtils.DEG_TO_RADS;
		//convert rotation speed to Radians from Degrees
		this.rotationSpeed *= ParticleUtils.DEG_TO_RADS;
		//set alpha to inital alpha
		this.alpha = this.startAlpha;
		//set scale to initial scale
		this.scale.x = this.scale.y = this.startScale;
		//determine start and end color values
		if (this.startColor)
		{
			this._sR = this.startColor[0];
			this._sG = this.startColor[1];
			this._sB = this.startColor[2];
			if(this.endColor)
			{
				this._eR = this.endColor[0];
				this._eG = this.endColor[1];
				this._eB = this.endColor[2];
			}
		}
		//figure out what we need to interpolate
		this._doAlpha = this.startAlpha != this.endAlpha;
		this._doSpeed = this.startSpeed != this.endSpeed;
		this._doScale = this.startScale != this.endScale;
		this._doColor = !!this.endColor;
		//save our lerp helper
		this._oneOverLife = 1 / this.maxLife;
		//set the inital color
		this.tint = ParticleUtils.combineRGBComponents(this._sR, this._sG, this._sB);
	};

	/**
	*	Sets the texture for the particle. This can be overridden to allow
	*	for an animated particle.
	*	@method applyArt
	*	@param {PIXI.Texture} art The texture to set.
	*/
	p.applyArt = function(art)
	{
		this.setTexture(art);
	};

	/**
	*	Updates the particle.
	*	@method update
	*	@param {Number} delta Time elapsed since the previous frame, in __seconds__.
	*/
	p.update = function(delta)
	{
		//increase age
		this.age += delta;
		//recycle particle if it is too old
		if(this.age >= this.maxLife)
		{
			this.kill();
			return;
		}
		
		//determine our interpolation value
		var lerp = this.age * this._oneOverLife;//lifetime / maxLife;
		if (this.ease)
		{
			if(this.ease.length == 4)
			{
				//the t, b, c, d parameters that some tween libraries use
				//(time, initial value, end value, duration)
				lerp = this.ease(lerp, 0, 1, 1);
			}
			else
			{
				//the simplified version that we like that takes
				//one parameter, time from 0-1. TweenJS eases provide this usage.
				lerp = this.ease(lerp);
			}
		}
		
		//interpolate alpha
		if (this._doAlpha)
			this.alpha = (this.endAlpha - this.startAlpha) * lerp + this.startAlpha;
		//interpolate scale
		if (this._doScale)
		{
			var scale = (this.endScale - this.startScale) * lerp + this.startScale;
			this.scale.x = this.scale.y = scale;
		}
		//handle movement
		if(this._doSpeed || this.startSpeed !== 0 || this.acceleration)
		{
			//interpolate speed
			if (this._doSpeed)
			{
				var speed = (this.endSpeed - this.startSpeed) * lerp + this.startSpeed;
				ParticleUtils.normalize(this.velocity);
				ParticleUtils.scaleBy(this.velocity, speed);
			}
			else if(this.acceleration)
			{
				this.velocity.x += this.acceleration.x * delta;
				this.velocity.y += this.acceleration.y * delta;
			}
			//adjust position based on velocity
			this.position.x += this.velocity.x * delta;
			this.position.y += this.velocity.y * delta;
		}
		//interpolate color
		if (this._doColor)
		{
			var r = (this._eR - this._sR) * lerp + this._sR;
			var g = (this._eG - this._sG) * lerp + this._sG;
			var b = (this._eB - this._sB) * lerp + this._sB;
			this.tint = ParticleUtils.combineRGBComponents(r, g, b);
		}
		//update rotation
		if(this.rotationSpeed !== 0)
		{
			this.rotation += this.rotationSpeed * delta;
		}
		else if(this.acceleration)
		{
			this.rotation = Math.atan2(this.velocity.y, this.velocity.x);// + Math.PI / 2;
		}
	};

	/**
	*	Kills the particle, removing it from the display list
	*	and telling the emitter to recycle it.
	*	@method kill
	*/
	p.kill = function()
	{
		this.emitter.recycle(this);
	};

	/**
	*	Destroys the particle, removing references and preventing future use.
	*	@method destroy
	*/
	p.destroy = function()
	{
		this.emitter = null;
		this.velocity = null;
		this.startColor = this.endColor = null;
		this.ease = null;
	};

	cloudkid.Particle = Particle;
	
}(cloudkid));
/**
*  @module cloudkid
*/
(function(cloudkid, undefined) {

	"use strict";

	var ParticleUtils = cloudkid.ParticleUtils,
		Particle = cloudkid.Particle;
	
	/**
	*	An individual particle image with an animation. You shouldn't have to deal with these.
	*	@class AnimatedParticle
	*	@constructor
	*	@param {Emitter} emitter The emitter that controls this AnimatedParticle.
	*/
	var AnimatedParticle = function(emitter)
	{
		Particle.call(this, emitter);
		
		/**
		 * Array used to avoid damaging previous texture arrays
		 * when applyArt() passes a texture instead of an array.
		 * @property {Array} _helperTextures
		 * @private
		 */
		this._helperTextures = [];
	};
	
	// Reference to the super class
	var s = Particle.prototype;
	// Reference to the prototype
	var p = AnimatedParticle.prototype = Object.create(s);
	
	/**
	*	Initializes the particle for use, based on the properties that have to
	*	have been set already on the particle.
	*	@method init
	*/
	p.init = function()
	{
		s.init.call(this);
		
		//set the standard PIXI animationSpeed
		if(this.extraData)
		{
			//fps will work differently for CloudKid's fork of PIXI than
			//standard PIXI, where it will just be a variable
			if(this.extraData.fps)
			{
				this.fps = this.extraData.fps;
			}
			else
			{
				this.fps = 60;
			}
			var animationSpeed = this.extraData.animationSpeed || 1;
			if(animationSpeed == "matchLife")
			{
				this.loop = false;
				//animation should end when the particle does
				if(this.hasOwnProperty("_duration"))
				{
					//CloudKid's fork of PIXI redoes how MovieClips animate,
					//with duration and elapsed time
					this.animationSpeed = this._duration / this.maxLife;
				}
				else
				{
					//standard PIXI - assume game tick rate of 60 fps
					this.animationSpeed = this.textures.length / this.maxLife / 60;
				}
			}
			else
			{
				this.loop = true;
				this.animationSpeed = animationSpeed;
			}
		}
		else
		{
			this.loop = true;
			this.animationSpeed = 1;
		}
		this.play();//start playing
	};
	
	/**
	*	Sets the textures for the particle.
	*	@method applyArt
	*	@param {Array} art An array of PIXI.Texture objects for this animated particle.
	*/
	p.applyArt = function(art)
	{
		if(Array.isArray(art))
			this.textures = art;
		else
		{
			this._helperTextures[0] = art;
			this.textures = this._helperTextures;
		}
		this.gotoAndStop(0);
	};

	/**
	*	Updates the particle.
	*	@method update
	*	@param {Number} delta Time elapsed since the previous frame, in __seconds__.
	*/
	p.update = function(delta)
	{
		s.update.call(this, delta);
		if(this.age < this.maxLife)
		{
			//only animate the particle if it is still alive
			if(this._duration)
			{
				//work with CloudKid's fork
				this.updateAnim(delta);
			}
			else
			{
				//standard PIXI - movieclip will advance automatically - this means
				//that the movieclip will animate even if the emitter (and the particles)
				//are paused
			}
		}
	};
	
	/**
	*	Destroys the particle, removing references and preventing future use.
	*	@method destroy
	*/
	p.destroy = function()
	{
		s.destroy.call(this);
	};
	
	cloudkid.AnimatedParticle = AnimatedParticle;
	
}(cloudkid));
/**
*  @module cloudkid
*/
(function(cloudkid, undefined) {

	"use strict";

	var ParticleUtils = cloudkid.ParticleUtils,
		Particle = cloudkid.Particle;

	/**
	*	A particle emitter.
	*	@class Emitter
	*	@constructor
	*	@param {PIXI.DisplayObjectContainer} particleParent The display object to add the
	*														particles to.
	*	@param {Array|PIXI.Texture} [particleImages] A texture or array of textures to use
	*												for the particles.
	*	@param {Object} [config] A configuration object containing settings for the emitter.
	*/
	var Emitter = function(particleParent, particleImages, config)
	{
		/**
		*	The constructor used to create new particles. The default is
		*	the built in particle class.
		*	@property {Function} _particleConstructor
		*	@private
		*/
		this._particleConstructor = Particle;
		//properties for individual particles
		/**
		*	An array of PIXI Texture objects.
		*	@property {Array} particleImages
		*/
		this.particleImages = null;
		/**
		*	The starting alpha of all particles.
		*	@property {Number} startAlpha
		*	@default 1
		*/
		this.startAlpha = 1;
		/**
		*	The ending alpha of all particles.
		*	@property {Number} endAlpha
		*	@default 1
		*/
		this.endAlpha = 1;
		/**
		*	The starting speed of all particles.
		*	@property {Number} startSpeed
		*	@default 0
		*/
		this.startSpeed = 0;
		/**
		*	The ending speed of all particles.
		*	@property {Number} endSpeed
		*	@default 0
		*/
		this.endSpeed = 0;
		/**
		*	Acceleration to apply to particles. Using this disables
		*	any interpolation of particle speed. If the particles do
		*	not have a rotation speed, then they will be rotated to
		*	match the direction of travel.
		*	@property {PIXI.Point} acceleration
		*	@default null
		*/
		this.acceleration = null;
		/**
		*	The starting scale of all particles.
		*	@property {Number} startScale
		*	@default 1
		*/
		this.startScale = 1;
		/**
		*	The ending scale of all particles.
		*	@property {Number} endScale
		*	@default 1
		*/
		this.endScale = 1;
		/**
		*	A minimum multiplier for the scale of a particle at both start and
		*	end. A value between minimumScaleMultiplier and 1 is randomly generated
		*	and multiplied with startScale and endScale to provide the actual
		*	startScale and endScale for each particle.
		*	@property {Number} minimumScaleMultiplier
		*	@default 1
		*/
		this.minimumScaleMultiplier = 1;
		/**
		*	The starting color of all particles, as red, green, and blue uints from 0-255.
		*	@property {Array} startColor
		*/
		this.startColor = null;
		/**
		*	The ending color of all particles, as red, green, and blue uints from 0-255.
		*	@property {Array} endColor
		*/
		this.endColor = null;
		/**
		*	The minimum lifetime for a particle, in seconds.
		*	@property {Number} minLifetime
		*/
		this.minLifetime = 0;
		/**
		*	The maximum lifetime for a particle, in seconds.
		*	@property {Number} maxLifetime
		*/
		this.maxLifetime = 0;
		/**
		*	The minimum start rotation for a particle, in degrees. This value
		*	is ignored if the spawn type is "burst" or "arc".
		*	@property {Number} minStartRotation
		*/
		this.minStartRotation = 0;
		/**
		*	The maximum start rotation for a particle, in degrees. This value
		*	is ignored if the spawn type is "burst" or "arc".
		*	@property {Number} maxStartRotation
		*/
		this.maxStartRotation = 0;
		/**
		*	The minimum rotation speed for a particle, in degrees per second.
		*	This only visually spins the particle, it does not change direction of movement.
		*	@property {Number} minRotationSpeed
		*/
		this.minRotationSpeed = 0;
		/**
		*	The maximum rotation speed for a particle, in degrees per second.
		*	This only visually spins the particle, it does not change direction of movement.
		*	@property {Number} maxRotationSpeed
		*/
		this.maxRotationSpeed = 0;
		/**
		*	The blend mode for all particles, as named by PIXI.blendModes.
		*	@property {int} particleBlendMode
		*/
		this.particleBlendMode = 0;
		/**
		*	An easing function for nonlinear interpolation of values. Accepts a single
		*	parameter of time as a value from 0-1, inclusive. Expected outputs are values
		*	from 0-1, inclusive.
		*	@property {Function} customEase
		*/
		this.customEase = null;
		/**
		 *	Extra data for use in custom particles. The emitter doesn't look inside, but
		 *	passes it on to the particle to use in init().
		 *	@property {Object} extraData
		 */
		this.extraData = null;
		//properties for spawning particles
		/**
		*	Time between particle spawns in seconds.
		*	@property {Number} frequency
		*/
		this.frequency = 0;
		/**
		*	Maximum number of particles to keep alive at a time. If this limit
		*	is reached, no more particles will spawn until some have died.
		*	@property {int} maxParticles
		*	@default 1000
		*/
		this.maxParticles = 1000;
		/**
		*	The amount of time in seconds to emit for before setting emit to false.
		*	A value of -1 is an unlimited amount of time.
		*	@property {Number} emitterLifetime
		*	@default -1
		*/
		this.emitterLifetime = -1;
		/**
		*	Position at which to spawn particles, relative to the emitter's owner's origin.
		*	For example, the flames of a rocket travelling right might have a spawnPos
		*	of {x:-50, y:0}.
		*	to spawn at the rear of the rocket.
		*	To change this, use updateSpawnPos().
		*	@property {PIXI.Point} spawnPos
		*	@readOnly
		*/
		this.spawnPos = null;
		/**
		*	How the particles will be spawned. Valid types are "point", "rectangle",
		*	"circle", "burst".
		*	@property {String} spawnType
		*	@readOnly
		*/
		this.spawnType = null;
		/**
		*	A reference to the emitter function specific to the spawn type.
		*	@property {Function} _spawnFunc
		*	@private
		*/
		this._spawnFunc = null;
		/**
		*	A rectangle relative to spawnPos to spawn particles inside if the spawn type is "rect".
		*	@property {PIXI.Rectangle} spawnRect
		*/
		this.spawnRect = null;
		/**
		*	A circle relative to spawnPos to spawn particles inside if the spawn type is "circle".
		*	@property {PIXI.Circle} spawnCircle
		*/
		this.spawnCircle = null;
		/**
		*	Number of particles to spawn each wave in a burst.
		*	@property {int} particlesPerWave
		*	@default 1
		*/
		this.particlesPerWave = 1;
		/**
		*	Spacing between particles in a burst. 0 gives a random angle for each particle.
		*	@property {Number} particleSpacing
		*	@default 0
		*/
		this.particleSpacing = 0;
		/**
		*	Angle at which to start spawning particles in a burst.
		*	@property {Number} angleStart
		*	@default 0
		*/
		this.angleStart = 0;
		/**
		*	Rotation of the emitter or emitter's owner in degrees. This is added to
		*	the calculated spawn angle.
		*	To change this, use rotate().
		*	@property {Number} rotation
		*	@default 0
		*	@readOnly
		*/
		this.rotation = 0;
		/**
		*	The world position of the emitter's owner, to add spawnPos to when
		*	spawning particles. To change this, use updateSpawnOrigin().
		*	@property {PIXI.Point} ownerPos
		*	@default {x:0, y:0}
		*	@readOnly
		*/
		this.ownerPos = null;
		/**
		*	The origin + spawnPos in the previous update, so that the spawn position
		*	can be interpolated to space out particles better.
		*	@property {PIXI.Point} _prevEmitterPos
		*	@private
		*/
		this._prevEmitterPos = null;
		/**
		*	If _prevEmitterPos is valid, to prevent interpolation on the first update
		*	@property {Boolean} _prevPosIsValid
		*	@private
		*	@default false
		*/
		this._prevPosIsValid = false;
		/**
		*	If either ownerPos or spawnPos has changed since the previous update.
		*	@property {Boolean} _posChanged
		*/
		this._posChanged = false;
		/**
		*	The display object to add particles to.
		*	@property {PIXI.DisplayObjectContainer} parent
		*/
		this.parent = particleParent;
		/**
		*	If particles should be added at the back of the display list instead of the front.
		*	@property {Boolean} addAtBack
		*/
		this.addAtBack = false;
		/**
		*	If particles should be emitted during update() calls. Setting this to false
		*	stops new particles from being created, but allows existing ones to die out.
		*	@property {Boolean} _emit
		*	@private
		*/
		this._emit = false;
		/**
		*	The timer for when to spawn particles in seconds, where numbers less
		*	than 0 mean that particles should be spawned.
		*	@property {Number} _spawnTimer
		*	@private
		*/
		this._spawnTimer = 0;
		/**
		*	The life of the emitter in seconds.
		*	@property {Number} _emitterLife
		*	@private
		*/
		this._emitterLife = -1;
		/**
		*	The particles that are active and on the display list.
		*	@property {Array} _activeParticles
		*/
		this._activeParticles = [];
		/**
		*	The particles that are not currently being used.
		*	@property {Array} _pool
		*/
		this._pool = [];

		if(particleImages && config)
			this.init(particleImages, config);
	};
	
	// Reference to the prototype
	var p = Emitter.prototype = {};
	
	var helperPoint = new PIXI.Point();


	/**
	*	The constructor used to create new particles. The default is
	*	the built in Particle class. Setting this will dump any active or
	*	pooled particles, if the emitter has already been used.
	*	@property {Function} particleConstructor
	*/
	Object.defineProperty(p, "particleConstructor",
	{
		get: function() { return this._particleConstructor; },
		set: function(value)
		{
			if(value != this._particleConstructor)
			{
				this._particleConstructor = value;
				if(this._activeParticles.length)
					this._activeParticles.length = 0;
				if(this._pool.length)
					this._pool.length = 0;
			}
		}
	});

	/**
	*	Sets up the emitter based on the config settings.
	*	@method init
	*	@param {Array|PIXI.Texture} particleImages A texture or array of textures to
	*												use for the particles.
	*	@param {Object} config A configuration object containing settings for the emitter.
	*/
	p.init = function(particleImages, config)
	{
		if(!particleImages || !config)
			return;
		//clean up any existing particles
		this.cleanup();
		//set up the array of textures
		this.particleImages = particleImages instanceof PIXI.Texture ?
																[particleImages] :
																particleImages;
		//particles from different base textures will be slower in WebGL than if they
		//were from one spritesheet
		if(true && this.particleImages.length > 1)
		{
			for(var i = this.particleImages.length - 1; i > 0; --i)
			{
				if(this.particleImages[i].baseTexture != this.particleImages[i - 1].baseTexture)
				{
					if(window.Debug)
						Debug.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");
					else if(window.console)
						console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");
					break;
				}
			}
		}
		///////////////////////////
		// Particle Properties   //
		///////////////////////////
		//set up the alpha
		if (config.alpha)
		{
			this.startAlpha = config.alpha.start;
			this.endAlpha = config.alpha.end;
		}
		else
			this.startAlpha = this.endAlpha = 1;
		//set up the speed
		if (config.speed)
		{
			this.startSpeed = config.speed.start;
			this.endSpeed = config.speed.end;
		}
		else
			this.startSpeed = this.endSpeed = 0;
		var acceleration = config.acceleration;
		if(acceleration && (acceleration.x || acceleration.y))
		{
			this.endSpeed = this.startSpeed;
			this.acceleration = new PIXI.Point(acceleration.x, acceleration.y);
		}
		else
			this.acceleration = null;
		//set up the scale
		if (config.scale)
		{
			this.startScale = config.scale.start;
			this.endScale = config.scale.end;
			this.minimumScaleMultiplier = config.scale.minimumScaleMultiplier || 1;
		}
		else
			this.startScale = this.endScale = this.minimumScaleMultiplier = 1;
		//set up the color
		if (config.color)
		{
			this.startColor = ParticleUtils.hexToRGB(config.color.start);
			//if it's just one color, only use the start color
			if (config.color.start != config.color.end)
			{
				this.endColor = ParticleUtils.hexToRGB(config.color.end);
			}
			else
				this.endColor = null;
		}
		//set up the start rotation
		if (config.startRotation)
		{
			this.minStartRotation = config.startRotation.min;
			this.maxStartRotation = config.startRotation.max;
		}
		else
			this.minStartRotation = this.maxStartRotation = 0;
		//set up the rotation speed
		if (config.rotationSpeed)
		{
			this.minRotationSpeed = config.rotationSpeed.min;
			this.maxRotationSpeed = config.rotationSpeed.max;
		}
		else
			this.minRotationSpeed = this.maxRotationSpeed = 0;
		//set up the lifetime
		this.minLifetime = config.lifetime.min;
		this.maxLifetime = config.lifetime.max;
		//get the blend mode
		this.particleBlendMode = ParticleUtils.getBlendMode(config.blendMode);
		//use the custom ease if provided
		if (config.ease)
		{
			this.customEase = typeof config.ease == "function" ?
														config.ease :
														ParticleUtils.generateEase(config.ease);
		}
		else
			this.customEase = null;
		this.extraData = config.extraData || null;
		//////////////////////////
		// Emitter Properties   //
		//////////////////////////
		//reset spawn type specific settings
		this.minAngle = this.maxAngle = 0;
		this.spawnRect = this.spawnCircle = null;
		this.particlesPerWave = 1;
		this.particleSpacing = 0;
		this.angleStart = 0;
		//determine the spawn function to use
		switch(config.spawnType)
		{
			case "rect":
				this.spawnType = "rect";
				this._spawnFunc = this._spawnRect;
				var spawnRect = config.spawnRect;
				this.spawnRect = new PIXI.Rectangle(spawnRect.x, spawnRect.y, spawnRect.w, spawnRect.h);
				break;
			case "circle":
				this.spawnType = "circle";
				this._spawnFunc = this._spawnCircle;
				var spawnCircle = config.spawnCircle;
				this.spawnCircle = new PIXI.Circle(spawnCircle.x, spawnCircle.y, spawnCircle.r);
				break;
			case "arc":
				this.spawnType = "arc";
				this._spawnFunc = this._spawnArc;
				//set up the angle for spawning particles in
				this.minAngle = config.angle.min;
				this.maxAngle = config.angle.max;
				break;
			case "burst":
				this.spawnType = "burst";
				this._spawnFunc = this._spawnBurst;
				this.particlesPerWave = config.particlesPerWave;
				this.particleSpacing = config.particleSpacing;
				this.angleStart = config.angleStart ? config.angleStart : 0;
				break;
			case "point":
				this.spawnType = "point";
				this._spawnFunc = this._spawnPoint;
				break;
			default:
				this.spawnType = "point";
				this._spawnFunc = this._spawnPoint;
				break;
		}
		//set the spawning frequency
		this.frequency = config.frequency;
		//set the emitter lifetime
		this.emitterLifetime = config.emitterLifetime || -1;
		//set the max particles
		this.maxParticles = config.maxParticles > 0 ? config.maxParticles : 1000;
		//determine if we should add the particle at the back of the list or not
		this.addAtBack = !!config.addAtBack;
		//reset the emitter position and rotation variables
		this.rotation = 0;
		this.ownerPos = new PIXI.Point();
		this.spawnPos = new PIXI.Point(config.pos.x, config.pos.y);
		this._prevEmitterPos = this.spawnPos.clone();
		//previous emitter position is invalid and should not be used for interpolation
		this._prevPosIsValid = false;
		//start emitting
		this._spawnTimer = 0;
		this.emit = true;
	};

	/**
	*	Recycles an individual particle.
	*	@method recycle
	*	@param {Particle} particle The particle to recycle.
	*/
	p.recycle = function(particle)
	{
		var index = this._activeParticles.indexOf(particle);
		//pop is preferrable to slice, so always pop the particles off the end
		if(index < this._activeParticles.length - 1)
			this._activeParticles[index] = this._activeParticles[this._activeParticles.length - 1];
		this._activeParticles.pop();
		//readd to pool
		this._pool.push(particle);
		//remove child from display
		if(particle.parent)
			particle.parent.removeChild(particle);
	};
	
	/**
	*	Sets the rotation of the emitter to a new value.
	*	@method rotate
	*	@param {Number} newRot The new rotation, in degrees.
	*/
	p.rotate = function(newRot)
	{
		if (this.rotation == newRot) return;
		//caclulate the difference in rotation for rotating spawnPos
		var diff = newRot - this.rotation;
		this.rotation = newRot;
		//rotate spawnPos
		ParticleUtils.rotatePoint(diff, this.spawnPos);
		//mark the position as having changed
		this._posChanged = true;
	};
	
	/**
	*	Changes the spawn position of the emitter.
	*	@method updateSpawnPos
	*	@param {Number} x The new x value of the spawn position for the emitter.
	*	@param {Number} y The new y value of the spawn position for the emitter.
	*/
	p.updateSpawnPos = function(x, y)
	{
		this._posChanged = true;
		this.spawnPos.x = x;
		this.spawnPos.y = y;
	};
	
	/**
	*	Changes the position of the emitter's owner. You should call this if you are adding
	*	particles to the world display object that your emitter's owner is moving around in.
	*	@method updateOwnerPos
	*	@param {Number} x The new x value of the emitter's owner.
	*	@param {Number} y The new y value of the emitter's owner.
	*/
	p.updateOwnerPos = function(x, y)
	{
		this._posChanged = true;
		this.ownerPos.x = x;
		this.ownerPos.y = y;
	};
	
	/**
	*	Prevents emitter position interpolation in the next update.
	*	This should be used if you made a major position change of your emitter's owner
	*	that was not normal movement.
	*	@method resetPositionTracking
	*/
	p.resetPositionTracking = function()
	{
		this._prevPosIsValid = false;
	};
	
	/**
	*	If particles should be emitted during update() calls. Setting this to false
	*	stops new particles from being created, but allows existing ones to die out.
	*	@property {Boolean} emit
	*/
	Object.defineProperty(p, "emit",
	{
		get: function() { return this._emit; },
		set: function(value)
		{
			this._emit = !!value;
			this._emitterLife = this.emitterLifetime;
		}
	});

	/**
	*	Updates all particles spawned by this emitter and emits new ones.
	*	@method update
	*	@param {Number} delta Time elapsed since the previous frame, in __seconds__.
	*/
	p.update = function(delta)
	{
		//update existing particles
		var i;
		for(i = this._activeParticles.length - 1; i >= 0; --i)
			this._activeParticles[i].update(delta);
		var prevX, prevY;
		//if the previous position is valid, store these for later interpolation
		if(this._prevPosIsValid)
		{
			prevX = this._prevEmitterPos.x;
			prevY = this._prevEmitterPos.y;
		}
		//store current position of the emitter as local variables
		var curX = this.ownerPos.x + this.spawnPos.x;
		var curY = this.ownerPos.y + this.spawnPos.y;
		//spawn new particles
		if (this.emit)
		{
			//decrease spawn timer
			this._spawnTimer -= delta;
			//while _spawnTimer < 0, we have particles to spawn
			while(this._spawnTimer <= 0)
			{
				//determine if the emitter should stop spawning
				if(this._emitterLife > 0)
				{
					this._emitterLife -= this.frequency;
					if(this._emitterLife <= 0)
					{
						this._spawnTimer = 0;
						this._emitterLife = 0;
						this.emit = false;
						break;
					}
				}
				//determine if we have hit the particle limit
				if(this._activeParticles.length >= this.maxParticles)
				{
					this._spawnTimer += this.frequency;
					continue;
				}
				//determine the particle lifetime
				var lifetime;
				if (this.minLifetime == this.maxLifetime)
					lifetime = this.minLifetime;
				else
					lifetime = Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime;
				//only make the particle if it wouldn't immediately destroy itself
				if(-this._spawnTimer < lifetime)
				{
					//If the position has changed and this isn't the first spawn,
					//interpolate the spawn position
					var emitPosX, emitPosY;
					if (this._prevPosIsValid && this._posChanged)
					{
						//1 - _spawnTimer / delta, but _spawnTimer is negative
						var lerp = 1 + this._spawnTimer / delta;
						emitPosX = (curX - prevX) * lerp + prevX;
						emitPosY = (curY - prevY) * lerp + prevY;
					}
					else//otherwise just set to the spawn position
					{
						emitPosX = curX;
						emitPosY = curY;
					}
					//create enough particles to fill the wave (non-burst types have a wave of 1)
					i = 0;
					for(var len = Math.min(this.particlesPerWave, this.maxParticles - this._activeParticles.length); i < len; ++i)
					{
						//create particle
						var p = this._pool.length ?
												this._pool.pop() :
												new this.particleConstructor(this);
						//set a random texture if we have more than one
						if(this.particleImages.length > 1)
						{
							p.applyArt(this.particleImages.random());
						}
						else
						{
							//if they are actually the same texture, a standard particle
							//will quit early from the texture setting in setTexture().
							p.applyArt(this.particleImages[0]);
						}
						//set up the start and end values
						p.startAlpha = this.startAlpha;
						p.endAlpha = this.endAlpha;
						p.startSpeed = this.startSpeed;
						p.endSpeed = this.endSpeed;
						p.acceleration = this.acceleration;
						if(this.minimumScaleMultiplier != 1)
						{
							var rand = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier;
							p.startScale = this.startScale * rand;
							p.endScale = this.endScale * rand;
						}
						else
						{
							p.startScale = this.startScale;
							p.endScale = this.endScale;
						}
						p.startColor = this.startColor;
						p.endColor = this.endColor;
						//randomize the rotation speed
						if(this.minRotationSpeed == this.maxRotationSpeed)
							p.rotationSpeed = this.minRotationSpeed;
						else
							p.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed;
						//set up the lifetime
						p.maxLife = lifetime;
						//set the blend mode
						p.blendMode = this.particleBlendMode;
						//set the custom ease, if any
						p.ease = this.customEase;
						//set the extra data, if any
						p.extraData = this.extraData;
						//call the proper function to handle rotation and position of particle
						this._spawnFunc(p, emitPosX, emitPosY, i);
						//initialize particle
						p.init();
						//update the particle by the time passed, so the particles are spread out properly
						p.update(-this._spawnTimer);//we want a positive delta, because a negative delta messes things up
						//add the particle to the display list
						if (this.addAtBack)
							this.parent.addChildAt(p, 0);
						else
							this.parent.addChild(p);
						//add particle to list of active particles
						this._activeParticles.push(p);
					}
				}
				//increase timer and continue on to any other particles that need to be created
				this._spawnTimer += this.frequency;
			}
		}
		//if the position changed before this update, then keep track of that
		if(this._posChanged)
		{
			this._prevEmitterPos.x = curX;
			this._prevEmitterPos.y = curY;
			this._prevPosIsValid = true;
			this._posChanged = false;
		}
	};
	
	/**
	*	Positions a particle for a point type emitter.
	*	@method _spawnPoint
	*	@private
	*	@param {Particle} p The particle to position and rotate.
	*	@param {Number} emitPosX The emitter's x position
	*	@param {Number} emitPosY The emitter's y position
	*	@param {int} i The particle number in the current wave. Not used for this function.
	*/
	p._spawnPoint = function(p, emitPosX, emitPosY, i)
	{
		//set the initial rotation/direction of the particle based on
		//starting particle angle and rotation of emitter
		if (this.minStartRotation == this.maxStartRotation)
			p.rotation = this.minStartRotation + this.rotation;
		else
			p.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation;
		//drop the particle at the emitter's position
		p.position.x = emitPosX;
		p.position.y = emitPosY;
	};
	
	/**
	*	Positions a particle for a rectangle type emitter.
	*	@method _spawnRect
	*	@private
	*	@param {Particle} p The particle to position and rotate.
	*	@param {Number} emitPosX The emitter's x position
	*	@param {Number} emitPosY The emitter's y position
	*	@param {int} i The particle number in the current wave. Not used for this function.
	*/
	p._spawnRect = function(p, emitPosX, emitPosY, i)
	{
		//set the initial rotation/direction of the particle based on starting
		//particle angle and rotation of emitter
		if (this.minStartRotation == this.maxStartRotation)
			p.rotation = this.minStartRotation + this.rotation;
		else
			p.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation;
		//place the particle at a random point in the rectangle
		helperPoint.x = Math.random() * this.spawnRect.width + this.spawnRect.x;
		helperPoint.y = Math.random() * this.spawnRect.height + this.spawnRect.y;
		if(this.rotation !== 0)
			ParticleUtils.rotatePoint(this.rotation, helperPoint);
		p.position.x = emitPosX + helperPoint.x;
		p.position.y = emitPosY + helperPoint.y;
	};
	
	/**
	*	Positions a particle for a circle type emitter.
	*	@method _spawnCircle
	*	@private
	*	@param {Particle} p The particle to position and rotate.
	*	@param {Number} emitPosX The emitter's x position
	*	@param {Number} emitPosY The emitter's y position
	*	@param {int} i The particle number in the current wave. Not used for this function.
	*/
	p._spawnCircle = function(p, emitPosX, emitPosY, i)
	{
		//set the initial rotation/direction of the particle based on starting
		//particle angle and rotation of emitter
		if (this.minStartRotation == this.maxStartRotation)
			p.rotation = this.minStartRotation + this.rotation;
		else
			p.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation;
		//place the particle at a random point in the circle
		helperPoint.x = Math.random() * this.spawnCircle.radius;// + this.spawnRect.x;
		helperPoint.y = 0;
		ParticleUtils.rotatePoint(Math.random() * 360, helperPoint);
		helperPoint.x += this.spawnCircle.x;
		helperPoint.y += this.spawnCircle.y;
		if(this.rotation !== 0)
			ParticleUtils.rotatePoint(this.rotation, helperPoint);
		p.position.x = emitPosX + helperPoint.x;
		p.position.y = emitPosY + helperPoint.y;
	};
	
	/**
	*	Positions a particle for a burst type emitter.
	*	@method _spawnBurst
	*	@private
	*	@param {Particle} p The particle to position and rotate.
	*	@param {Number} emitPosX The emitter's x position
	*	@param {Number} emitPosY The emitter's y position
	*	@param {int} i The particle number in the current wave.
	*/
	p._spawnBurst = function(p, emitPosX, emitPosY, i)
	{
		//set the initial rotation/direction of the particle based on spawn
		//angle and rotation of emitter
		if(this.particleSpacing === 0)
			p.rotation = Math.random() * 360;
		else
			p.rotation = this.angleStart + (this.particleSpacing * i) + this.rotation;
		//drop the particle at the emitter's position
		p.position.x = emitPosX;
		p.position.y = emitPosY;
	};

	/**
	*	Kills all active particles immediately.
	*	@method cleanup
	*/
	p.cleanup = function()
	{
		for (var i = this._activeParticles.length - 1; i >= 0; --i)
		{
			this.recycle(this._activeParticles[i]);
		}
	};
	
	/**
	*	Destroys the emitter and all of its particles.
	*	@method destroy
	*/
	p.destroy = function()
	{
		this.cleanup();
		for(var i = this._pool.length - 1; i >= 0; --i)
		{
			this._pool[i].destroy();
		}
		this._pool = null;
		this._activeParticles = null;
		this.parent = null;
		this.particleImages = null;
		this.spawnPos = null;
		this.ownerPos = null;
		this.startColor = null;
		this.endColor = null;
		this.customEase = null;
	};

	cloudkid.Emitter = Emitter;

}(cloudkid));

 /* --------------------------- */ 


/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);

 /* --------------------------- */ 

// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:12,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};"object"===typeof module&&(module.exports=Stats);


 /* --------------------------- */ 

/*
MIT Licensed

Copyright (c) 2014 Rafał Lindemann. http://panrafal.github.com/depthy
*/
(function(root){
  'use strict';

  // HELPER FUNCTIONS
  var extend = (root.$ && root.$.extend) || (root._ && root._.extend) || (root.angular && root.angular.extend),
      isNumber = (root.$ && root.$.isNumeric) || (root._ && root._.isNumber) || (root.angular && root.angular.isNumber),
      isMobile = function() {return root.Modernizr && root.Modernizr.isMobile;},
      Promise = (root.Q && root.Q.Promise) || (root.RSVP && root.RSVP.Promise) || root.Promise;

  var defaultOptions = {
      // preferred viewport size {width, height}
      size: {width: 768, height: 1024},
      sizeDivisible: 1,
      // auto fitting: false, 'cover', 'contain'. False will disable retina and upscale
      fit: 'cover',
      // allow 2x upscale
      retina: true,
      // maximum upscaling to fit in viewport (through canvas stretching)
      upscale: 4,
      // image enlargment to protect from overflowing edges
      enlarge: 1.06,

      // animation options
      animate: false,
      animateDuration: 2,
      animatePosition: null,
      animateScale: {x: 1, y: 0.5},

      depthScale: 1,
      depthBlurSize: 4,
      depthFocus: 0.5,
      depthPreview: 0,

      easeFactor: isMobile() ? 0.2 : 0.4,

      orient: 2,

      hover: true,
      // element to control mouse movements
      hoverElement: false,

      // 1, 2, 3, 4, 5 or false for auto
      quality: false,
      qualityMin: 1,
      qualityMax: 5,
      qualityStart: isMobile ? 3 : 4,

      alwaysRender: true,
      pauseRender: false,
    };

  var DepthyViewer = root.DepthyViewer = function(element, options) {
    var self = this,
        canvas, stage, renderer, stats,
        image = {}, depth = {},
        sizeDirty = true, stageDirty = true, renderDirty = true, depthFilterDirty = true, 
        discardAlphaFilter, resetAlphaFilter, invertedAlphaToRGBFilter, discardRGBFilter, invertedRGBToAlphaFilter, depthBlurFilter, grayscaleFilter,
        stageSize, stageSizeCPX,
        // renderUpscale = 1.05,
        readyResolver,
        quality = {current: options.qualityStart || 4, dirty: true, provenSlow: {}},

        imageTextureSprite, imageTextureContainer, imageRender,
        depthTextureSprite, depthTextureContainer, depthRender,

        depthFilter, compoundSprite, previewSprite,

        depthOffset = {x: 0, y: 0}, easedOffset = depthOffset;

    var maincontainer = new PIXI.DisplayObjectContainer(), emitter;

    options = extend({}, defaultOptions, options || {});

    // PRIVATE FUNCTIONS
    function init() {

      canvas = element.getElementsByTagName('canvas')[0];
      if (!canvas) {
        canvas = element.ownerDocument.createElement('canvas');
        element.appendChild(canvas)
;      }

      initHover();
      initOrient();
      initRenderer();
      
      if (renderer) requestAnimFrame( renderLoop );

    }

    function initHover() {
      var hoverElement = options.hoverElement || element;
      if (typeof(hoverElement) === 'string') hoverElement = element.ownerDocument.querySelector(hoverElement);
      if (!hoverElement) {
        console.warn('Hover element %s not found!', options.hoverElement);
        return;
      }

      hoverElement.addEventListener('mousemove', onHover, false);
      hoverElement.addEventListener('touchmove', onHover, false);
    }

    function onHover(event) {
      if (options.animate || !options.hover || !stageSize || !isReady()) return;
      // todo get rid off jQuery!
      var hoverElement = event.currentTarget,
          size = Math.min(stageSizeCPX.height, stageSizeCPX.width) * 0.9,
          pointerEvent = event.touches ? event.touches[0] : event,
          x = (pointerEvent.pageX - hoverElement.offsetLeft) / hoverElement.offsetWidth,
          y = (pointerEvent.pageY - hoverElement.offsetTop) / hoverElement.offsetHeight;
      x = Math.max(-1, Math.min(1, (x * 2 - 1) * hoverElement.offsetWidth / size));
      y = Math.max(-1, Math.min(1, (y * 2 - 1) *  hoverElement.offsetHeight / size));

      depthOffset = {x: -x, y: -y};
      renderDirty = true;
    }

    function initOrient() {
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', onMotion);
      } else if (window.DeviceOrientationEvent) {
        console.warn('devicemotion unsupported!');
        window.addEventListener('deviceorientation', onOrientation);
      } else {
        console.warn('deviceorientation unsupported!');
      }
    }

    var lastOrientation;
    function onOrientation(event) {
      if (options.animate || !options.orient || !isReady()) return;
      if (event.beta === null || event.gamma === null) return;

      if (lastOrientation) {
        var portrait = window.innerHeight > window.innerWidth,
            beta = (event.beta - lastOrientation.beta) * 0.2,
            gamma = (event.gamma - lastOrientation.gamma) * 0.2,
            x = portrait ? -gamma : -beta,
            y = portrait ? -beta : -gamma;

        if (x && y) {
          depthOffset = {
            x : Math.max(-1, Math.min(1, depthOffset.x + x)),
            y : Math.max(-1, Math.min(1, depthOffset.y + y))
          };
          renderDirty = true;
        }
        // console.log("offset %d %d ABG %d %d %d", depthOffset.x, depthOffset.y, event.alpha, event.beta, event.gamma)

      }
      lastOrientation = {
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma
      };
    }

    function onMotion(event) {
      var rotation = event.rotationRate,
          gravity = event.accelerationIncludingGravity || {}
      if (!rotation) {
        // unsupported :(
        console.warn('devicemotion seems to be unsupported :(', event, rotation);
        window.removeEventListener('devicemotion', onMotion);
        window.addEventListener('deviceorientation', onOrientation);
        return;
      }
      if (options.animate || !options.orient || !isReady()) return;
      var rate = (Modernizr.chrome && !Modernizr.ios ? 1 : 0.005) / options.orient, // Chrome doesn't give angle per second
          portrait = window.innerHeight > window.innerWidth,
          x = (portrait ? rotation.beta : rotation.alpha) * -rate,
          y = (portrait ? rotation.alpha : -rotation.beta) * -rate;

      // detect flipped orientation
      if (Math.abs(gravity.z) < 9 && (portrait ? gravity.y : gravity.x) < 0) {
        x *= -1;
        y *= -1;
      }

      if (x && y) {
        depthOffset = {
          x : Math.max(-1, Math.min(1, depthOffset.x + x)),
          y : Math.max(-1, Math.min(1, depthOffset.y + y))
        };
        renderDirty = true;
      }
    }

    function initRenderer() {

        stage = new PIXI.Stage();
        
        renderer = new PIXI.WebGLRenderer(800, 600, canvas, false, true);

        discardAlphaFilter = createDiscardAlphaFilter();
        resetAlphaFilter = createDiscardAlphaFilter(1.0);
        invertedAlphaToRGBFilter = createInvertedAlphaToRGBFilter();
        discardRGBFilter = createDiscardRGBFilter();
        invertedRGBToAlphaFilter = createInvertedRGBToAlphaFilter();
        depthBlurFilter = createDepthBlurFilter();
        grayscaleFilter = createGrayscaleFilter();

    }


    function createDiscardAlphaFilter(alphaConst) {
      var filter = new PIXI.ColorMatrixFilter2();
      filter.matrix = [1.0, 0.0, 0.0, 0.0,
                       0.0, 1.0, 0.0, 0.0,
                       0.0, 0.0, 1.0, 0.0,
                       0.0, 0.0, 0.0, 0.0];
      filter.shift =  [0.0, 0.0, 0.0, alphaConst || 0.0];
      return filter;
    }

    function createDiscardRGBFilter() {
      var filter = new PIXI.ColorMatrixFilter2();
      filter.matrix = [0.0, 0.0, 0.0, 0.0,
                       0.0, 0.0, 0.0, 0.0,
                       0.0, 0.0, 0.0, 0.0,
                       0.0, 0.0, 0.0, 1.0];
      filter.shift =  [0.0, 0.0, 0.0, 0.0];
      return filter;
    }

    function createInvertedAlphaToRGBFilter() {
      // move inverted alpha to rgb, set alpha to 1
      var filter = new PIXI.ColorMatrixFilter2();
      filter.matrix = [0.0, 0.0, 0.0,-1.0,
                       0.0, 0.0, 0.0,-1.0,
                       0.0, 0.0, 0.0,-1.0,
                       0.0, 0.0, 0.0, 0.0];
      filter.shift =  [1.0, 1.0, 1.0, 1.0];
      return filter;
    }

    function createInvertedRGBToAlphaFilter() {
      // move inverted alpha to rgb, set alpha to 1
      var filter = new PIXI.ColorMatrixFilter2();
      filter.matrix = [0.0, 0.0, 0.0, 0.0,
                       0.0, 0.0, 0.0, 0.0,
                       0.0, 0.0, 0.0, 0.0,
                      -1.0, 0.0, 0.0, 0.0];
      filter.shift =  [0.0, 0.0, 0.0, 1.0];
      return filter;
    }

    function createGrayscaleFilter() {
      // move inverted alpha to rgb, set alpha to 1
      var filter = new PIXI.ColorMatrixFilter();
      filter.matrix = [0.333, 0.333, 0.333, 0.0,
                       0.333, 0.333, 0.333, 0.0,
                       0.333, 0.333, 0.333, 0.0,
                       0.0, 0.0, 0.0, 1.0];
      return filter;
    }

    function createDepthBlurFilter() {
      return new PIXI.BlurFilter();
    }

    function sizeCopy(size, expand) {
      expand = expand || 1;
      return {width: size.width * expand, height: size.height * expand};
    }

    function sizeFit(size, max, cover) {
      var ratio = size.width / size.height;
      size = sizeCopy(size);
      if (cover && size.height < max.height || !cover && size.height > max.height) {
        size.height = max.height;
        size.width = size.height * ratio;
      }
      if (cover && size.width < max.width || !cover && size.width > max.width) {
        size.width = max.width;
        size.height = size.width / ratio;
      }
      return size;
    }

    function sizeRound(size) {
      return {
        width: Math.round(size.width),
        height: Math.round(size.height)
      };
    }

    function sizeFitScale(size, max, cover) {
      if (cover) {
        return max.width / max.height > size.width / size.height ?
          max.width / size.width :
          max.height / size.height;
      } else {
        return max.width / max.height > size.width / size.height ?
          max.height / size.height :
          max.width / size.width;
      }
    }

    function isReady() {
      return !!(renderer !== false && image.texture && image.size && (!depth.texture || depth.size));
    }

    // true when image and depth use the same texture...
    function isTextureShared() {
      return image.texture && depth.texture && image.texture === depth.texture;
    }

    function hasImage() {
      return !!image.texture;
    };

    function hasDepthmap() {
      return !!depth.texture;
    };


    function changeTexture(old, source) {
      if ((old.texture === source)|| old.url === source) return old;
      var current = {
        dirty: true
      };
      current.promise = new Promise(function(resolve, reject) {
        if (source) {
          if (source instanceof PIXI.RenderTexture) {
            current.texture = source;
          } else {
            current.texture = PIXI.Texture.fromImage(source);
            current.url = source;
          }
          current.texture.baseTexture.premultipliedAlpha = false;
          if (current.texture.baseTexture.hasLoaded) {
            current.size = current.texture.frame;
            sizeDirty = true;
            resolve(current);
          } else {
            current.texture.addEventListener('update', function() {
              if (!current.texture) return;
              current.size = current.texture.frame;
              sizeDirty = true;
              resolve(current);
            });
            current.texture.baseTexture.source.onerror = function(error) {
              if (!current.texture) return;
              console.error('Texture load failed', error);
              current.error = true;
              current.texture.destroy(true);
              delete current.texture;
              reject(error);
            };
          }
        } else {
          console.log('Empty texture!');
          resolve(current);
        }
        // free up mem...
        if (old) {
          if (old.texture && !isTextureShared() && !old.shared) {
            old.texture.destroy(true);
          }
          old.texture = null;
        }
      });
      return current;
    }


    function updateSize() {
      var maxSize = sizeCopy(image.size, (options.fit && options.upscale) || 1);

      stageSize = sizeCopy(maxSize);

      // preferred size
      if (options.size) {
        stageSize = sizeFit(stageSize, options.size);
        if (options.fit === 'cover') {
          stageSize = sizeFit(stageSize, options.size, true);
          stageSize = sizeFit(stageSize, maxSize);
          // 
          if (stageSize.height > options.size.height) stageSize.height = options.size.height;
          if (stageSize.width > options.size.width) stageSize.width = options.size.width;
        }
      }

      // console.log('Image %dx%d Stage %dx%d View %dx%d', image.size.width, image.size.height, stageSize.width, stageSize.height, options.size.width, options.size.height);

      // remember target size
      stageSizeCPX = sizeRound(stageSize);

      // retina
      if (options.retina && options.fit && window.devicePixelRatio >= 2) {
        stageSize.width *= 2;
        stageSize.height *= 2;
      }

      // don't upscale the canvas beyond image size
      stageSize = sizeFit(stageSize, image.size);
      stageSize = sizeRound(stageSize);

      if (options.sizeDivisible > 1) {
        stageSize.width -= stageSize.width % options.sizeDivisible;
        stageSize.height -= stageSize.height % options.sizeDivisible;
      }
      // console.log('Stage %dx%d StageCPX %dx%d', stageSize.width, stageSize.height, stageSizeCPX.width, stageSizeCPX.height);

      canvas.style.width = stageSizeCPX.width + 'px';
      canvas.style.height = stageSizeCPX.height + 'px';
      canvas.style.marginLeft = Math.round(stageSizeCPX.width / -2) + 'px';
      canvas.style.marginTop = Math.round(stageSizeCPX.height / -2) + 'px';

      if (renderer && (renderer.width !== stageSize.width || renderer.height !== stageSize.height)) {
        renderer.resize(stageSize.width, stageSize.height);
        image.dirty = depth.dirty = true;
        stageDirty = true;
      }

      sizeDirty = false;
    }

    function updateImageTexture() {
      var scale = sizeFitScale(image.size, stageSize, true);

      // prepare image render
      imageTextureSprite = new PIXI.Sprite(image.texture);
      imageTextureSprite.scale = new PIXI.Point(scale, scale);

      imageTextureSprite.anchor = {x: 0.5, y: 0.5};
      imageTextureSprite.position = {x: stageSize.width / 2, y: stageSize.height / 2};

      // discard alpha channel
      imageTextureSprite.filters = [discardAlphaFilter];

      imageTextureContainer = new PIXI.DisplayObjectContainer();
      imageTextureContainer.addChild(imageTextureSprite);

      if (imageRender && (imageRender.width !== stageSize.width || imageRender.height !== stageSize.height)) {
        // todo: pixi errors out on this... why?
        // imageRender.resize(stageSize.width, stageSize.height);
        imageRender.destroy(true);
        imageRender = null;
      }
      imageRender = imageRender || new PIXI.RenderTexture(stageSize.width, stageSize.height);
      
      image.dirty = false;
      image.renderDirty = stageDirty = true;
    }

    function renderImageTexture() {
      imageRender.render(imageTextureContainer, null, true);
      image.renderDirty = false;
      renderDirty = true;
    }

    function updateDepthTexture() {
      var scale = depth.size ? sizeFitScale(depth.size, stageSize, true) : 1;

      depthTextureContainer = new PIXI.DisplayObjectContainer();

      if (hasDepthmap()) {
        // prepare depth render / filter
        depthTextureSprite = new PIXI.Sprite(depth.texture);
        depthTextureSprite.filters = [depthBlurFilter];
        depthTextureSprite.scale = new PIXI.Point(scale, scale);
        depthTextureSprite.renderable = !!depth.texture;

        depthTextureSprite.anchor = {x: 0.5, y: 0.5};
        depthTextureSprite.position = {x: stageSize.width / 2, y: stageSize.height / 2};

        if (depth.useAlpha) {
          // move inverted alpha to rgb, set alpha to 1
          depthTextureSprite.filters.push(invertedAlphaToRGBFilter);
          depthTextureSprite.filters = depthTextureSprite.filters;
        }
        depthTextureContainer.addChild(depthTextureSprite);
      } else {
        depthTextureSprite = null;
      }


      if (depthRender && (depthRender.width !== stageSize.width || depthRender.height !== stageSize.height)) {
        depthRender.destroy(true);
        depthRender = null;
      }
      depthRender = depthRender || new PIXI.RenderTexture(stageSize.width, stageSize.height);

      depth.dirty = false;
      depth.renderDirty = stageDirty = true;
    }

    function renderDepthTexture() {
      depthBlurFilter.blur = options.depthBlurSize;
      depthRender.render(depthTextureContainer, null, true);
      depth.renderDirty = false;
      renderDirty = true;
    }


    var depthFiltersCache = {};
    function updateStage() {
      // combine image with depthmap
      var q = options.quality || quality.current;
      if (!depthFilter || depthFilter.quality !== q) {
        depthFiltersCache[q] = depthFilter = depthFiltersCache[q] || 
            (q === 1 ? new PIXI.DepthDisplacementFilter(depthRender)
                    : new PIXI.DepthPerspectiveFilter(depthRender, q));
        depthFilter.quality = q;
        // depthFilter = new PIXI.DepthDisplacementFilter(depthRender);
      }
      if (depthFilter.map !== depthRender) {
        depthFilter.map = depthRender;
      }

      if (compoundSprite) {
        stage.removeChild(compoundSprite);
      }

      compoundSprite = new PIXI.Sprite(imageRender);
      compoundSprite.filters= [depthFilter];
      stage.addChild(compoundSprite);

      if (previewSprite) stage.removeChild(previewSprite);
      previewSprite = new PIXI.Sprite(depthRender);
      stage.addChild(previewSprite);

      stage.addChild(maincontainer);

      stageDirty = false;
      renderDirty = depthFilterDirty = true;
      quality.dirty = true;
    }

    function updateDepthFilter() {
      depthFilter.scale = 0.02 * (options.depthScale);

      depthFilter.offset = {
        x : easedOffset.x || 0,
        y : easedOffset.y || 0
      };
      depthFilter.focus = options.depthFocus;
      depthFilter.enlarge = options.enlarge;

      previewSprite.visible = options.depthPreview != 0;
      previewSprite.alpha = options.depthPreview;

      depthFilterDirty = false;
      renderDirty = true;
    }

    function updateOffset() {
      if (depthOffset.x !== easedOffset.x || depthOffset.y !== easedOffset.y) {
        
        if (options.easeFactor && !options.animate) {
          easedOffset.x = easedOffset.x * options.easeFactor + depthOffset.x * (1-options.easeFactor);
          easedOffset.y = easedOffset.y * options.easeFactor + depthOffset.y * (1-options.easeFactor);
          if (Math.abs(easedOffset.x - depthOffset.x) < 0.0001 && Math.abs(easedOffset.y - depthOffset.y) < 0.0001) {
            easedOffset = depthOffset;
          }
        } else {
          easedOffset = depthOffset;
        }

        depthFilter.offset = {
          x : easedOffset.x,
          y : easedOffset.y
        };

        renderDirty = true;
      }

    }

    function getNow(){
      return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }

    function updateAnimation() {
      if (options.animate) {
        var now = isNumber(options.animatePosition) ?
                    options.animatePosition * options.animateDuration * 1000
                    : getNow();
        depthFilter.offset = {
          x : Math.sin(now * Math.PI * 2 / options.animateDuration / 1000) * options.animateScale.x,
          y : Math.cos(now * Math.PI * 2 / options.animateDuration / 1000) * options.animateScale.y
        };

        renderDirty = true;
      }
    }

    function changeQuality(q) {
      quality.measured = true;
      q = Math.max(options.qualityMin, Math.min(options.qualityMax, q));
      if (q !== quality.current) {
        if (q > quality.current && quality.provenSlow[q] && stageSize.width * stageSize.height >= quality.provenSlow[q]) {
          console.warn('Quality %d proven to be slow for size %d >= %d at %d', q, stageSize.width * stageSize.height, quality.provenSlow[q], quality.avg);
        } else {
          console.warn('Quality change %d -> %d at %d fps', quality.current, q, quality.avg);
          quality.current = q;
          stageDirty = true;
        }
      } else {
        console.warn('Quality %d is ok at %d fps', q, quality.avg);
      }
      updateDebug();
    }

    function updateQuality() {
      if (!hasDepthmap() || !hasImage() || options.quality) return;
      if (quality.dirty) {
        console.log('Quality reset');
        quality.count = quality.slow = quality.fast = quality.sum = 0;
        quality.measured = false;
        quality.dirty = false;
        updateDebug();
      }
      quality.count++;
      quality.fps = 1000 / quality.ms;
      quality.sum += quality.fps;
      quality.avg = quality.sum / quality.count;
      if (quality.fps < 10) { // 20fps
        quality.slow++;
      } else if (quality.fps > 58) { // 50fps
        quality.fast++;
      }
      
      // console.log('Quality ', quality);

      if (quality.slow > 5 || (quality.count > 15 && quality.avg < (quality.current > 4 ? 55 : 25))) {
        // quality 5 is slow below 55
        // log this stagesize as slow...
        if (!options.quality) quality.provenSlow[quality.current] = stageSize.width * stageSize.height;
        changeQuality(quality.current - 1);
      } else if (/*quality.fast > 30 ||*/ quality.count > 40 && quality.avg > (quality.current > 3 ? 55 : 50)) {
        // quality 4 is fast above 55
        // log this 
        changeQuality(quality.current + 1);
      } else if (quality.count > 60) {
        changeQuality(quality.current);
      } else {
        // render a bit more please...
        renderDirty = true;
      }
    }

    function updateDebug() {
      if (stats) {
        stats.domElement.className = 'q' + quality.current + (quality.measured ? '' : ' qm');
        stats.infoElement.textContent = 'Q' + (options.quality || quality.current) + (quality.measured ? '' : '?') + ' <' + quality.slow + ' >' + quality.fast + ' n' + quality.count + ' ~' + Math.round(quality.avg);
      }
    }

    function renderStage() {
      renderer.render(stage);
      renderDirty = false;
    }

    function update() {

      if (sizeDirty) updateSize();

      if (image.dirty) updateImageTexture();
      if (image.renderDirty) renderImageTexture();

      if (depth.dirty) updateDepthTexture();
      if (depth.renderDirty) renderDepthTexture();

      if (stageDirty) updateStage();
      if (depthFilterDirty) updateDepthFilter();

      if (hasDepthmap()) {
        updateOffset();
        updateAnimation();
      }

      if (readyResolver) {
        readyResolver();
        readyResolver = null;
      }
    }

    function render() {
      if (!isReady()) return;

      update();

      if (renderDirty || options.alwaysRender) {
        renderStage();
      }

      if (quality.dirty || !quality.measured) {
        updateQuality();
      }
      
    }

    var lastLoopTime = 0;
    var elapsed = Date.now();
    function renderLoop() {
      requestAnimFrame( renderLoop );

      if (!options.pauseRender) {
        quality.ms = lastLoopTime && (getNow() - lastLoopTime);
        
        stats && stats.begin();
        
        var now = Date.now();
        emitter.update((now - elapsed) * 0.001);
        elapsed = now;

        render();
        
        stats && stats.end();
      }
    }

    // PUBLIC FUNCTIONS

    this.setOptions = function(newOptions) {
      for(var k in newOptions) {
        if (options[k] === newOptions[k]) continue;
        options[k] = newOptions[k];
        switch(k) {
          case 'size':
          case 'fit':
          case 'retina':
          case 'upscale':
            sizeDirty = true;
            break;
          case 'quality':
            stageDirty = true;
            updateDebug();
            break;
          case 'depthScale':
          case 'depthFocus':
          case 'depthPreview':
            depthFilterDirty = true;
            break;
          case 'depthBlurSize':
            depth.renderDirty = true;
            break;
          default:
            renderDirty = true;
        }
      }
    };

    this.getOptions = function() {
      var oc = {};
      for(var k in options) oc[k] = options[k];
      return oc;
    };

    this.getElement = function() {
      return element;
    };

    this.getCanvas = function() {
      return canvas;
    };

    this.getRenderer = function() {
      return renderer;
    };

    this.getSize = function() {
      return sizeCopy(stageSize);
    };

    this.getSizeCPX = function() {
      return sizeCopy(stageSizeCPX);
    };

    this.getQuality = function() {
      return quality.current;
    };

    /** Returns a promise resolved when the viewer is ready, or rejected when any of the images are missing or failed on load.
        @param resolvedOnly TRUE - only wait for the isReady() to become true. Otherwise, the promise may be rejected
               but will be reset every time you change any of the images.
     */
    this.getPromise = function(resolvedOnly) {
      if (!resolvedOnly && (!this.hasImage() || this.getLoadError())) {
        return Promise.reject();
      }
      if (isReady()) {
        return Promise.resolve();
      }
      if (!readyResolver) {
        var promise = new Promise(function(resolve) {
          readyResolver = resolve;
        });
        readyResolver.promise = promise;
      }
      return resolvedOnly ? readyResolver.promise : Promise.all( [image.promise, depth.promise, readyResolver.promise] );
    };

    this.setImage = function(source) {
      image = changeTexture(image, source);
      return image.promise;
    };

    this.getImage = function() {
      return image;
    };

    this.setDepthmap = function(source, useAlpha) {
      depth = changeTexture(depth, source);
      depth.useAlpha = !!useAlpha;
      return depth.promise;
    };

    this.getDepthmap = function() {
      return depth;
    };

    this.render = render;

    this.reset = function() {
      this.setImage();
      this.setDepthmap();
    };

    this.hasImage = hasImage;

    this.hasDepthmap = hasDepthmap;

    this.getLoadError = function() {
      return image.error || depth.error;
    };

    this.setOffset = function(offset) {
      depthOffset = offset;
    };

    this.screenToImagePos = function(pos, clamp) {
      var rect = canvas.getBoundingClientRect();
      pos = {x: pos.x, y: pos.y};
      pos.x = (pos.x - rect.left) / rect.width;
      pos.y = (pos.y - rect.top) / rect.height;
      if (clamp) {
        pos.x = Math.max(0, Math.min(1, pos.x));
        pos.y = Math.max(0, Math.min(1, pos.y));
      }
      return pos;
    };

    /** Exports image + depthmap as PNG file. Returns promise */
    this.exportToPNG = function(maxSize) {

      return this.getPromise().then(
        function() {
          if (!hasDepthmap()) return false;

          var size = sizeRound(sizeFit(image.size, maxSize || image.size)),
              localstage = new PIXI.Stage(),
              scale = size.width / image.size.width,
              depthScale = size.width / depth.size.width,
              // we need unmultiplied canvas for this... 
              // it uploads images to the GPU once again, and won't work with local textures, but... well...
              localrenderer = new PIXI.WebGLRenderer(size.width, size.height, null, 'notMultiplied', true);

          var imageSprite = new PIXI.Sprite(image.texture);
          imageSprite.scale = new PIXI.Point(scale, scale);
          localstage.addChild(imageSprite);

          // discard alpha channel
          imageSprite.filters = [createDiscardAlphaFilter()];
          console.log(depth.texture);
          var depthSprite = new PIXI.Sprite(depth.texture);
          depthSprite.scale = new PIXI.Point(depthScale, depthScale);
          depthSprite.filters = [depth.useAlpha ? createDiscardRGBFilter() : createInvertedRGBToAlphaFilter()];

          // copy alpha using custom blend mode
          PIXI.blendModesWebGL['one.one'] = [localrenderer.gl.ONE, localrenderer.gl.ONE];
          depthSprite.blendMode = 'one.one';

          localstage.addChild(depthSprite);

          localrenderer.render(localstage);
          var dataUrl = localrenderer.view.toDataURL('image/png');

          try {
            localrenderer.destroy();
          } catch(e) {
            console.error('Render destroy error', e);
          }
          return dataUrl;
        }
      );
    };


    function exportTexture(source, options) {
      return source.promise.then(
        function() {
          if (!source.texture) {
            return false;
          } else if (options.allowDirect && source.url) {
            return source.url;
          } else {
            var size = sizeCopy(options.size || source.size);
            if (options.maxSize) size = sizeFit(size, options.maxSize);
            if (options.minSize) size = sizeFit(size, options.minSize, true);
            size = sizeRound(size);

            var localstage = new PIXI.Stage(),
                scale = sizeFitScale(source.size, size, true),
                renderTexture = new PIXI.RenderTexture(size.width, size.height);

            var sourceSprite = new PIXI.Sprite(source.texture);
            if (options.filters) sourceSprite.filters = options.filters;
            sourceSprite.scale = new PIXI.Point(scale, scale);
            sourceSprite.anchor = {x: 0.5, y: 0.5};
            sourceSprite.position = {x: size.width / 2, y: size.height / 2};

            localstage.addChild(sourceSprite);

            renderTexture.render(localstage, null, true);
            var canvas = PIXI.glReadPixelsToCanvas(renderer.gl, renderTexture, 0, 0, renderTexture.width, renderTexture.height),
                dataUrl = canvas.toDataURL(options.type || 'image/jpeg', options.quality || undefined);

            try {
              renderTexture.destroy();
            } catch(e) {
              console.error('Render destroy error', e);
            }
            return dataUrl;
          }
        }
      );
    }

    /** Exports depthmap as is, or converts it to JGP. Returns promise */
    this.exportDepthmap = function(options) {
      return exportTexture(depth, extend({
        // allowDirect: !depth.useAlpha,
        filters: depth.useAlpha ? [invertedAlphaToRGBFilter] : [grayscaleFilter],
      }, options));
    };

    this.exportImage = function(options) {
      return exportTexture(image, extend({
        filters: [resetAlphaFilter]
      }, options));
    };

    this.exportSourceImage = function(source, options) {
      source = changeTexture({}, source);
      return exportTexture(source, extend({
        filters: [resetAlphaFilter]
      }, options));
    };

    this.exportDepthmapAsTexture = function(maxSize) {
      var size = sizeCopy(image.size);
      if (maxSize) size = sizeFit(size, maxSize);
      size = sizeRound(size);

      var texture = new PIXI.RenderTexture(size.width, size.height);

      var container = new PIXI.DisplayObjectContainer();
      if (hasDepthmap()) {
        var scale = sizeFitScale(depth.size, size, true);
        
        var sprite = new PIXI.Sprite(depth.texture);
        sprite.scale = new PIXI.Point(scale, scale);
        sprite.anchor = {x: 0.5, y: 0.5};
        sprite.position = {x: size.width / 2, y: size.height / 2};
        if (depth.useAlpha) {
          sprite.filters = [invertedAlphaToRGBFilter];
        } else {
          sprite.filters = [grayscaleFilter];
        }
        container.addChild(sprite);
      } else {
        // flat is in the back
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFFFFF, 1);
        graphics.drawRect(0, 0, size.width, size.height);
        container.addChild(graphics);
      }

      texture.render(container, null, true);
      return texture;
    };

    /** Exports thumbnail as JPG file. Returns promise */
    this.exportThumbnail = function(size, quality) {
      size = size || {width: 50, height: 50};
      return this.getPromise().then(
        function() {
          var localstage = new PIXI.Stage(),
              scale = sizeFitScale(image.size, size, true),
              renderTexture = new PIXI.RenderTexture(size.width, size.height);

          var imageSprite = new PIXI.Sprite(image.texture);
          imageSprite.scale = new PIXI.Point(scale, scale);
          imageSprite.anchor = {x: 0.5, y: 0.5};
          imageSprite.position = {x: size.width / 2, y: size.height / 2};
          localstage.addChild(imageSprite);

          // discard alpha channel
          imageSprite.filters = [resetAlphaFilter];

          renderTexture.render(localstage, null, true);
          var canvas = PIXI.glReadPixelsToCanvas(renderer.gl, renderTexture, 0, 0, renderTexture.width, renderTexture.height),
              dataUrl = canvas.toDataURL('image/jpeg', quality);


          try {
            renderTexture.destroy();
          } catch(e) {
            console.error('Render destroy error', e);
          }
          return dataUrl;
        }
      );
    };

    this.exportAnaglyph = function(exportOpts) {
      return this.getPromise().then(
        function() {

          var size = sizeCopy(exportOpts.size || image.size);
          if (exportOpts.maxSize) size = sizeFit(size, exportOpts.maxSize);
          if (exportOpts.minSize) size = sizeFit(size, exportOpts.minSize, true);
          size = sizeRound(size);

          var oldOptions = self.getOptions();

          self.setOptions({
            animate: false,
            size: size,
            fit: false,
            orient: false,
            hover: false,
            depthPreview: 0,
            quality: 5,
          });

          // enforce settings
          update();

          var localstage = new PIXI.Stage(),
              leftEye, rightEye, filter;

          leftEye = compoundSprite;
          depthFilter.offset = {x: -1, y: 0.5};
          filter = new PIXI.ColorMatrixFilter2();
          filter.matrix = [1.0, 0.0, 0.0, 0.0,
                           0.0, 0.0, 0.0, 0.0,
                           0.0, 0.0, 0.0, 0.0,
                           0.0, 0.0, 0.0, 1.0];
          leftEye.filters.push(filter);
          leftEye.filters = leftEye.filters;
          localstage.addChild(leftEye);

          // right eye
          compoundSprite = null;
          depthFilter = new PIXI.DepthPerspectiveFilter(depthRender, options.quality); // independent copy
          depthFilter.quality = options.quality; // enforce it
          updateStage(); // recreate sprite
          updateDepthFilter();

          rightEye = compoundSprite;
          depthFilter.offset = {x: 1, y: 0.5};
          filter = new PIXI.ColorMatrixFilter2();
          filter.matrix = [0.0, 0.0, 0.0, 0.0,
                           0.0, 1.0, 0.0, 0.0,
                           0.0, 0.0, 1.0, 0.0,
                           0.0, 0.0, 0.0, 1.0];
          rightEye.filters.push(filter);
          rightEye.filters = rightEye.filters;

          PIXI.blendModesWebGL['one.one'] = [renderer.gl.ONE, renderer.gl.ONE];
          rightEye.blendMode = 'one.one';

          // rightEye.blendMode = PIXI.blendModes.NORMAL;
          localstage.addChild(rightEye);

          // render...
          renderer.render(localstage);
          // store
          var dataUrl = canvas.toDataURL('image/jpeg', exportOpts.quality || 0.9);

          // done!
          compoundSprite = null;
          depthFilter = null;

          self.setOptions(oldOptions);
          // make full render cycle
          render();

          return dataUrl;
        }
      );
    };

    this.setParticles = function(images, params){
        emitter = new cloudkid.Emitter(
          maincontainer,
          images,
          params
        );

        emitter.emit = true;
        /*
        emitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);

              // Click on the canvas to trigger 
              document.body.addEventListener('mouseup', function(e){
                emitter.emit = true;
                emitter.resetPositionTracking();
                emitter.updateOwnerPos(e.offsetX, e.offsetY);
              });
      */
    };

    this.enableDebug = function() {
      if (window.Stats) {
        stats = new window.Stats();
        stats.setMode(0); // 0: fps, 1: ms
        stats.infoElement = document.createElement( 'div' );
        stats.infoElement.className = 'info';
        stats.domElement.appendChild(stats.infoElement);
        document.body.appendChild( stats.domElement );
        updateDebug();
      }
    };

    this.isReady = isReady;

    // STARTUP

    init();

  };

  DepthyViewer.defaultOptions = defaultOptions;

})(window);


 /* --------------------------- */ 

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

 /* --------------------------- */ 

/**
 * @name        jQuery FullScreen Plugin
 * @author      Martin Angelov, Morten SjÃ¸gren
 * @version     1.2
 * @url         http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/
 * @license     MIT License
 */

/*jshint browser: true, jquery: true */
(function($){
    "use strict";

    // These helper functions available only to our plugin scope.
    function supportFullScreen(){
        var doc = document.documentElement;

        return ('requestFullscreen' in doc) ||
                ('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
                ('webkitRequestFullScreen' in doc);
    }

    function requestFullScreen(elem){
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }

    function fullScreenStatus(){
        return document.fullscreen ||
                document.mozFullScreen ||
                document.webkitIsFullScreen ||
                false;
    }

    function cancelFullScreen(){
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

    function onFullScreenEvent(callback){
        $(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function(){
            // The full screen status is automatically
            // passed to our callback as an argument.
            callback(fullScreenStatus());
        });
    }

    // Adding a new test to the jQuery support object
    $.support.fullscreen = supportFullScreen();

    // Creating the plugin
    $.fn.fullScreen = function(props){
        if(!$.support.fullscreen || this.length !== 1) {
            // The plugin can be called only
            // on one element at a time

            return this;
        }

        if(fullScreenStatus()){
            // if we are already in fullscreen, exit
            cancelFullScreen();
            return this;
        }

        // You can potentially pas two arguments a color
        // for the background and a callback function

        var options = $.extend({
            'background'      : '#111',
            'callback'        : $.noop( ),
            'fullscreenClass' : 'fullScreen'
        }, props),

        elem = this,

        // This temporary div is the element that is
        // actually going to be enlarged in full screen

        fs = $('<div>', {
            'css' : {
                'overflow-y' : 'auto',
                'background' : options.background,
                'width'      : '100%',
                'height'     : '100%'
            }
        })
            .insertBefore(elem)
            .append(elem);

        // You can use the .fullScreen class to
        // apply styling to your element
        elem.addClass( options.fullscreenClass );

        // Inserting our element in the temporary
        // div, after which we zoom it in fullscreen

        requestFullScreen(fs.get(0));

        fs.click(function(e){
            if(e.target == this){
                // If the black bar was clicked
                cancelFullScreen();
            }
        });

        elem.cancel = function(){
            cancelFullScreen();
            return elem;
        };

        onFullScreenEvent(function(fullScreen){
            if(!fullScreen){
                // We have exited full screen.
                    // Detach event listener
                    $(document).off( 'fullscreenchange mozfullscreenchange webkitfullscreenchange' );
                // Remove the class and destroy
                // the temporary div

                elem.removeClass( options.fullscreenClass ).insertBefore(fs);
                fs.remove();
            }

            // Calling the facultative user supplied callback
            if(options.callback) {
                            options.callback(fullScreen);
                        }
        });

        return elem;
    };

    $.fn.cancelFullScreen = function( ) {
            cancelFullScreen();

            return this;
    };
}(jQuery));




/*global Element */
(function (window, document) {
    'use strict';

    var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element, // IE6 throws without typeof check

        fn = (function () {
            var val, valLength;
            var fnMap = [
                [
                    'requestFullscreen',
                    'exitFullscreen',
                    'fullscreenElement',
                    'fullscreenEnabled',
                    'fullscreenchange',
                    'fullscreenerror'
                ],
                // new WebKit
                [
                    'webkitRequestFullscreen',
                    'webkitExitFullscreen',
                    'webkitFullscreenElement',
                    'webkitFullscreenEnabled',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'

                ],
                // old WebKit (Safari 5.1)
                [
                    'webkitRequestFullScreen',
                    'webkitCancelFullScreen',
                    'webkitCurrentFullScreenElement',
                    'webkitCancelFullScreen',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'

                ],
                [
                    'mozRequestFullScreen',
                    'mozCancelFullScreen',
                    'mozFullScreenElement',
                    'mozFullScreenEnabled',
                    'mozfullscreenchange',
                    'mozfullscreenerror'
                ],
                [
                    'msRequestFullscreen',
                    'msExitFullscreen',
                    'msFullscreenElement',
                    'msFullscreenEnabled',
                    'MSFullscreenchange',
                    'MSFullscreenerror'
                ]
            ];
            var i = 0;
            var l = fnMap.length;
            var ret = {};

            for (; i < l; i++) {
                val = fnMap[i];
                if (val && val[1] in document) {
                    for (i = 0, valLength = val.length; i < valLength; i++) {
                        ret[fnMap[0][i]] = val[i];
                    }
                    return ret;
                }
            }
            return false;
        })(),

        screenfull = {
            request: function (elem) {
                var request = fn.requestFullscreen;

                elem = elem || document.documentElement;

                // Work around Safari 5.1 bug: reports support for
                // keyboard in fullscreen even though it doesn't.
                // Browser sniffing, since the alternative with
                // setTimeout is even worse.
                if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
                    elem[request]();
                } else {
                    elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
                }
            },
            exit: function () {
                document[fn.exitFullscreen]();
            },
            toggle: function (elem) {
                if (this.isFullscreen) {
                    this.exit();
                } else {
                    this.request(elem);
                }
            },
            onchange: function () {},
            onerror: function () {},
            raw: fn
        };

    if (!fn) {
        window.screenfull = false;
        return;
    }

    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function () {
                return !!document[fn.fullscreenElement];
            }
        },
        element: {
            enumerable: true,
            get: function () {
                return document[fn.fullscreenElement];
            }
        },
        enabled: {
            enumerable: true,
            get: function () {
                // Coerce to boolean in case of old WebKit
                return !!document[fn.fullscreenEnabled];
            }
        }
    });

    document.addEventListener(fn.fullscreenchange, function (e) {
        screenfull.onchange.call(screenfull, e);
    });

    document.addEventListener(fn.fullscreenerror, function (e) {
        screenfull.onerror.call(screenfull, e);
    });

    window.screenfull = screenfull;
})(window, document);



 /* --------------------------- */ 

//seriously.js and related effects


 /* --------------------------- */ 

/*jslint devel: true, bitwise: true, browser: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4, todo: true */
/*global Float32Array, Uint8Array, Uint16Array, WebGLTexture, HTMLInputElement, HTMLSelectElement, HTMLElement, WebGLFramebuffer, HTMLCanvasElement, WebGLRenderingContext, define, module, exports */
(function (root, factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define('seriously', function () {
			var Seriously = factory(root);
			if (!root.Seriously) {
				root.Seriously = Seriously;
			}
			return Seriously;
		});
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like enviroments that support module.exports,
		// like Node.
		module.exports = factory(root);
	} else if (typeof root.Seriously !== 'function') {
		// Browser globals
		root.Seriously = factory(root);
	}
}(this, function (window) {
	'use strict';

	var document = window.document,
		console = window.console,

	/*
		Global-ish look-up variables
	*/

	testContext,
	colorElement,
	incompatibility,
	seriousEffects = {},
	seriousTransforms = {},
	seriousSources = {},
	seriousTargets = {},
	timeouts = [],
	allEffectsByHook = {},
	allTransformsByHook = {},
	allSourcesByHook = {
		canvas: [],
		image: [],
		video: []
	},
	allTargetsByHook = {},
	allTargets = window.WeakMap && new WeakMap(),
	identity,
	maxSeriouslyId = 0,
	nop = function () {},
	noVideoTextureSupport,

	/*
		Global reference variables
	*/

	// http://www.w3.org/TR/css3-color/#svg-color
	colorNames = {
		transparent: [0, 0, 0, 0],
		black: [0, 0, 0, 1],
		red: [1, 0, 0, 1],
		green: [0, 128 / 255, 0, 1],
		blue: [0, 0, 1, 1],
		white: [1, 1, 1, 1],
		silver: [192 / 255, 192 / 255, 192 / 255, 1],
		gray: [128 / 255, 128 / 255, 128 / 255, 1],
		maroon: [128 / 255, 0, 0, 1],
		purple: [128 / 255, 0, 128 / 255, 1],
		fuchsia: [1, 0, 1, 1],
		lime: [0, 1, 0, 1],
		olive: [128 / 255, 128 / 255, 0, 1],
		yellow: [1, 1, 0, 1],
		navy: [0, 0, 128 / 255, 1],
		teal: [0, 128 / 255, 128 / 255, 1],
		aqua: [0, 1, 1, 1],
		orange: [1, 165 / 255, 0, 1]
	},

	vectorFields = ['x', 'y', 'z', 'w'],
	colorFields = ['r', 'g', 'b', 'a'],

	/*
		utility functions
	*/

	/*
	mat4 matrix functions borrowed from gl-matrix by toji
	https://github.com/toji/gl-matrix
	License: https://github.com/toji/gl-matrix/blob/master/LICENSE.md
	*/
	mat4 = {
		/*
		 * mat4.frustum
		 * Generates a frustum matrix with the given bounds
		 *
		 * Params:
		 * left, right - scalar, left and right bounds of the frustum
		 * bottom, top - scalar, bottom and top bounds of the frustum
		 * near, far - scalar, near and far bounds of the frustum
		 * dest - Optional, mat4 frustum matrix will be written into
		 *
		 * Returns:
		 * dest if specified, a new mat4 otherwise
		 */
		frustum: function (left, right, bottom, top, near, far, dest) {
			if(!dest) { dest = mat4.create(); }
			var rl = (right - left),
				tb = (top - bottom),
				fn = (far - near);
			dest[0] = (near*2) / rl;
			dest[1] = 0;
			dest[2] = 0;
			dest[3] = 0;
			dest[4] = 0;
			dest[5] = (near*2) / tb;
			dest[6] = 0;
			dest[7] = 0;
			dest[8] = (right + left) / rl;
			dest[9] = (top + bottom) / tb;
			dest[10] = -(far + near) / fn;
			dest[11] = -1;
			dest[12] = 0;
			dest[13] = 0;
			dest[14] = -(far*near*2) / fn;
			dest[15] = 0;
			return dest;
		},

		perspective: function (fovy, aspect, near, far, dest) {
			var top = near*Math.tan(fovy*Math.PI / 360.0),
				right = top*aspect;
			return mat4.frustum(-right, right, -top, top, near, far, dest);
		},
		multiply: function (dest, mat, mat2) {
			// Cache the matrix values (makes for huge speed increases!)
			var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3],
				a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7],
				a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11],
				a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15],

			// Cache only the current line of the second matrix
			b0 = mat2[0], b1 = mat2[1], b2 = mat2[2], b3 = mat2[3];
			dest[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
			dest[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
			dest[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
			dest[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

			b0 = mat2[4];
			b1 = mat2[5];
			b2 = mat2[6];
			b3 = mat2[7];
			dest[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
			dest[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
			dest[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
			dest[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

			b0 = mat2[8];
			b1 = mat2[9];
			b2 = mat2[10];
			b3 = mat2[11];
			dest[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
			dest[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
			dest[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
			dest[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

			b0 = mat2[12];
			b1 = mat2[13];
			b2 = mat2[14];
			b3 = mat2[15];
			dest[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
			dest[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
			dest[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
			dest[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

			return dest;
		},
		identity: function (dest) {
			dest[0] = 1;
			dest[1] = 0;
			dest[2] = 0;
			dest[3] = 0;
			dest[4] = 0;
			dest[5] = 1;
			dest[6] = 0;
			dest[7] = 0;
			dest[8] = 0;
			dest[9] = 0;
			dest[10] = 1;
			dest[11] = 0;
			dest[12] = 0;
			dest[13] = 0;
			dest[14] = 0;
			dest[15] = 1;
			return dest;
		},
		copy: function (out, a) {
			out[0] = a[0];
			out[1] = a[1];
			out[2] = a[2];
			out[3] = a[3];
			out[4] = a[4];
			out[5] = a[5];
			out[6] = a[6];
			out[7] = a[7];
			out[8] = a[8];
			out[9] = a[9];
			out[10] = a[10];
			out[11] = a[11];
			out[12] = a[12];
			out[13] = a[13];
			out[14] = a[14];
			out[15] = a[15];
			return out;
		}
	},

	requestAnimationFrame = (function (){
		var lastTime = 0;
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					var currTime, timeToCall, id;

					function timeoutCallback() {
						callback(currTime + timeToCall);
					}

					currTime = new Date().getTime();
					timeToCall = Math.max(0, 16 - (currTime - lastTime));
					id = window.setTimeout(timeoutCallback, timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
	}()),

	cancelAnimFrame = (function (){
		return  window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function (id) {
					window.cancelTimeout(id);
				};
	}()),

	reservedEffectProperties = [
		'alias',
		'destroy',
		'effect',
		'id',
		'initialize',
		'inputs',
		'isDestroyed',
		'isReady',
		'matte',
		'off',
		'on',
		'readPixels',
		'render',
		'title',
		'update'
	],

	reservedTransformProperties = [
		'alias',
		'destroy',
		'id',
		'inputs',
		'isDestroyed',
		'isReady',
		'off',
		'on',
		'source',
		'title',
		'update'
	],

	reservedNames = [
		'aliases',
		'defaults',
		'destroy',
		'effect',
		'go',
		'id',
		'incompatible',
		'isDestroyed',
		'isEffect',,
		'isNode',
		'isSource',
		'isTarget',
		'isTransform',
		'removeAlias',
		'render',
		'source',
		'stop',
		'target',
		'transform'
	];

	function getElement(input, tags) {
		var element,
			tag;
		if (typeof input === 'string') {
			//element = document.getElementById(input) || document.getElementsByTagName(input)[0];
			element = document.querySelector(input);
		} else if (!input) {
			return false;
		}

		if (input.tagName) {
			element = input;
		}

		if (!element) {
			return input;
		}

		tag = element.tagName.toLowerCase();
		if (tags && tags.indexOf(tag) < 0) {
			return input;
		}

		return element;
	}

	function extend(dest, src) {
		var property,
			descriptor;

		//todo: are we sure this is safe?
		if (dest.prototype && src.prototype && dest.prototype !== src.prototype) {
			extend(dest.prototype, src.prototype);
		}

		for (property in src) {
			if (src.hasOwnProperty(property)) {
				descriptor = Object.getOwnPropertyDescriptor(src, property);

				if (descriptor.get || descriptor.set) {
					Object.defineProperty(dest, property, {
						configurable: true,
						enumerable: true,
						get: descriptor.get,
						set: descriptor.set
					});
				} else {
					dest[property] = src[property];
				}
			}
		}

		return dest;
	}

	function consoleMethod(name) {
		var method;
		if (!console) {
			return nop;
		}

		if (typeof console[name] === 'function') {
			method = console[name];
		} else if (typeof console.log === 'function') {
			method = console.log;
		} else {
			return nop;
		}

		if (method.bind) {
			return method.bind(console);
		}

		return function () {
			method.apply(console, arguments);
		};
	}

	//http://www.w3.org/TR/css3-color/#hsl-color
	function hslToRgb(h, s, l, a, out) {
		function hueToRgb(m1, m2, h) {
			h = h % 1;
			if (h < 0) {
				h += 1;
			}
			if (h < 1 / 6) {
				return m1 + (m2 - m1) * h * 6;
			}
			if (h < 1 / 2) {
				return m2;
			}
			if (h < 2 / 3) {
				return m1 + (m2 - m1) * (2/3 - h) * 6;
			}
			return m1;
		}

		var m1, m2;
		if (l < 0.5) {
			m2 = l * (s + 1);
		} else {
			m2 = l + s - l * s;
		}
		m1 = l * 2 - m2;

		if (!out) {
			out = [];
		}

		out[0] = hueToRgb(m1, m2, h + 1/3);
		out[1] = hueToRgb(m1, m2, h);
		out[2] = hueToRgb(m1, m2, h - 1/3);
		out[3] = a;

		return out;
	}

	function colorArrayToHex(color) {
		var i,
			val,
			hex,
			s = '#',
			len = color[3] < 1 ? 4 : 3;

		for (i = 0; i < len; i++) {
			val = Math.min(255, Math.round(color[i] * 255 || 0));
			hex = val.toString(16);
			if (val < 16) {
				hex = '0' + hex;
			}
			s += hex;
		}
		return s;
	}

	function isArrayLike(obj) {
		return Array.isArray(obj) ||
			(obj && obj.BYTES_PER_ELEMENT && 'length' in obj);
	}

	/*
	faster than setTimeout(fn, 0);
	http://dbaron.org/log/20100309-faster-timeouts
	*/
	function setTimeoutZero(fn) {
		/*
		Workaround for postMessage bug in Firefox if the page is loaded from the file system
		https://bugzilla.mozilla.org/show_bug.cgi?id=740576
		Should run fine, but maybe a few milliseconds slower per frame.
		*/
		function timeoutFunction() {
			if (timeouts.length) {
				(timeouts.shift())();
			}
		}

		if (typeof fn !== 'function') {
			throw new Error('setTimeoutZero argument is not a function');
		}

		timeouts.push(fn);
		if (window.location.protocol === 'file:') {
			setTimeout(timeoutFunction, 0);
			return;
		}

		window.postMessage('seriously-timeout-message', window.location);
	}

	window.addEventListener('message', function (event) {
		if (event.source === window && event.data === 'seriously-timeout-message') {
			event.stopPropagation();
			if (timeouts.length > 0) {
				var fn = timeouts.shift();
				fn();
			}
		}
	}, true);

	function getWebGlContext(canvas, options) {
		var context;
		try {
			if (window.WebGLDebugUtils && options && options.debugContext) {
				context = window.WebGLDebugUtils.makeDebugContext(canvas.getContext('webgl', options));
			} else {
				context = canvas.getContext('webgl', options);
			}
		} catch (expError) {
		}

		if (!context) {
			try {
				context = canvas.getContext('experimental-webgl', options);
			} catch (error) {
			}
		}
		return context;
	}

	function getTestContext() {
		var canvas;

		if (testContext && testContext.getError() === testContext.CONTEXT_LOST_WEBGL) {
			/*
			Test context was lost already, and the webglcontextlost event maybe hasn't fired yet
			so try making a new context
			*/
			testContext = undefined;
		}

		if (testContext || !window.WebGLRenderingContext || incompatibility) {
			return testContext;
		}

		canvas = document.createElement('canvas');
		testContext = getWebGlContext(canvas);

		if (testContext) {
			canvas.addEventListener('webglcontextlost', function contextLost(event) {
				/*
				If/When context is lost, just clear testContext and create
				a new one the next time it's needed
				*/
				event.preventDefault();
				if (testContext && testContext.canvas === this) {
					testContext = undefined;
					canvas.removeEventListener('webglcontextlost', contextLost, false);
				}
			}, false);
		} else {
			Seriously.logger.warn('Unable to access WebGL.');
		}

		return testContext;
	}

	function checkSource(source) {
		var element, canvas, ctx, texture;

		//todo: don't need to create a new array every time we do this
		element = getElement(source, ['img', 'canvas', 'video']);
		if (!element) {
			return false;
		}

		canvas = document.createElement('canvas');
		if (!canvas) {
			Seriously.logger.warn('Browser does not support canvas or Seriously.js');
			return false;
		}

		if (element.naturalWidth === 0 && element.tagName === 'IMG') {
			Seriously.logger.warn('Image not loaded');
			return false;
		}

		if (element.readyState === 0 && element.videoWidth === 0 && element.tagName === 'VIDEO') {
			Seriously.logger.warn('Video not loaded');
			return false;
		}

		ctx = getTestContext();
		if (ctx) {
			texture = ctx.createTexture();
			if (!texture) {
				Seriously.logger.error('Test WebGL context has been lost');
			}

			ctx.bindTexture(ctx.TEXTURE_2D, texture);

			try {
				ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, element);
			} catch (textureError) {
				if (textureError.code === window.DOMException.SECURITY_ERR) {
					Seriously.logger.log('Unable to access cross-domain image');
				} else {
					Seriously.logger.error('Error storing image to texture: ' + textureError.message);
				}
				ctx.deleteTexture(texture);
				return false;
			}
			ctx.deleteTexture(texture);
		} else {
			ctx = canvas.getContext('2d');
			try {
				ctx.drawImage(element, 0, 0);
				ctx.getImageData(0, 0, 1, 1);
			} catch (drawImageError) {
				if (drawImageError.code === window.DOMException.SECURITY_ERR) {
					Seriously.logger.log('Unable to access cross-domain image');
				} else {
					Seriously.logger.error('Error drawing image to canvas: ' + drawImageError.message);
				}
				return false;
			}
		}

		// This method will return a false positive for resources that aren't
		// actually images or haven't loaded yet

		return true;
	}

	function validateInputSpecs(plugin) {
		var input,
			options,
			name;

		function normalizeEnumOption(option, i) {
			var key,
				name;

			if (isArrayLike(option)) {
				key = option[0];
				name = option[1] || key;
			} else {
				key = option;
			}

			if (typeof key === 'string') {
				key = key.toLowerCase();
			} else if (typeof key === 'number') {
				key = String(key);
			} else if (!key) {
				key = '';
			}

			options[key] = name;

			if (!i) {
				input.firstValue = key;
			}
		}

		function passThrough(value) {
			return value;
		}

		for (name in plugin.inputs) {
			if (plugin.inputs.hasOwnProperty(name)) {
				if (plugin.reserved.indexOf(name) >= 0 || Object.prototype[name]) {
					throw new Error('Reserved input name: ' + name);
				}

				input = plugin.inputs[name];
				input.name = name;

				if (isNaN(input.min)) {
					input.min = -Infinity;
				}

				if (isNaN(input.max)) {
					input.max = Infinity;
				}

				if (isNaN(input.minCount)) {
					input.minCount = -Infinity;
				}

				if (isNaN(input.maxCount)) {
					input.maxCount = Infinity;
				}

				if (isNaN(input.step)) {
					input.step = 0;
				}

				if (input.type === 'enum') {
					/*
					Normalize options to make validation easy
					- all items will have both a key and a name
					- all keys will be lowercase strings
					*/
					if (input.options && isArrayLike(input.options) && input.options.length) {
						options = {};
						input.options.forEach(normalizeEnumOption);
						input.options = options;
					}
				}

				if (input.type === 'vector') {
					if (input.dimensions < 2) {
						input.dimensions = 2;
					} else if (input.dimensions > 4) {
						input.dimensions = 4;
					} else if (!input.dimensions || isNaN(input.dimensions)) {
						input.dimensions = 4;
					} else {
						input.dimensions = Math.round(input.dimensions);
					}
				} else {
					input.dimensions = 1;
				}

				input.shaderDirty = !!input.shaderDirty;

				if (typeof input.validate !== 'function') {
					input.validate = Seriously.inputValidators[input.type] || passThrough;
				}

				if (!plugin.defaultImageInput && input.type === 'image') {
					plugin.defaultImageInput = name;
				}
			}
		}
	}

	/*
		helper Classes
	*/

	function FrameBuffer(gl, width, height, options) {
		var frameBuffer,
			renderBuffer,
			tex,
			status,
			useFloat = options === true ? options : (options && options.useFloat);

		useFloat = false;//useFloat && !!gl.getExtension('OES_texture_float'); //useFloat is not ready!
		if (useFloat) {
			this.type = gl.FLOAT;
		} else {
			this.type = gl.UNSIGNED_BYTE;
		}

		frameBuffer = gl.createFramebuffer();
		gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

		if (options && options.texture) {
			this.texture = options.texture;
			gl.bindTexture(gl.TEXTURE_2D, this.texture);
			this.ownTexture = false;
		} else {
			this.texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, this.texture);
			gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			this.ownTexture = true;
		}

		try {
			if (this.type === gl.FLOAT) {
				tex = new Float32Array(width * height * 4);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.FLOAT, tex);
			} else {
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
				this.type = gl.UNSIGNED_BYTE;
			}
		} catch (e) {
			// Null rejected
			this.type = gl.UNSIGNED_BYTE;
			tex = new Uint8Array(width * height * 4);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, tex);
		}

		renderBuffer = gl.createRenderbuffer();
		gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
		gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
		gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderBuffer);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

		status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

		if (status === gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT) {
			throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
		}

		if (status === gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT) {
			throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
		}

		if (status === gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS) {
			throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
		}

		if (status === gl.FRAMEBUFFER_UNSUPPORTED) {
			throw new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED');
		}

		if (status !== gl.FRAMEBUFFER_COMPLETE) {
			throw new Error('Incomplete framebuffer: ' + status);
		}

		//clean up
		gl.bindTexture(gl.TEXTURE_2D, null);
		gl.bindRenderbuffer(gl.RENDERBUFFER, null);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);

		this.gl = gl;
		this.frameBuffer = frameBuffer;
		this.renderBuffer = renderBuffer;
		this.width = width;
		this.height = height;
	}

	FrameBuffer.prototype.resize = function (width, height) {
		var gl = this.gl;

		if (this.width === width && this.height === height) {
			return;
		}

		this.width = width;
		this.height = height;

		if (!gl) {
			return;
		}

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
		gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);

		//todo: handle float
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
		gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

		gl.bindTexture(gl.TEXTURE_2D, null);
		gl.bindRenderbuffer(gl.RENDERBUFFER, null);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	};

	FrameBuffer.prototype.destroy = function () {
		var gl = this.gl;

		if (gl) {
			gl.deleteFramebuffer(this.frameBuffer);
			gl.deleteRenderbuffer(this.renderBuffer);
			if (this.ownTexture) {
				gl.deleteTexture(this.texture);
			}
		}

		delete this.frameBuffer;
		delete this.renderBuffer;
		delete this.texture;
		delete this.gl;
	};

	/* ShaderProgram - utility class for building and accessing WebGL shaders */

	function ShaderProgram(gl, vertexShaderSource, fragmentShaderSource) {
		var program, vertexShader, fragmentShader,
			programError = '',
			shaderError,
			i, l,
			obj;

		function compileShader(source, fragment) {
			var shader, j;
			if (fragment) {
				shader = gl.createShader(gl.FRAGMENT_SHADER);
			} else {
				shader = gl.createShader(gl.VERTEX_SHADER);
			}

			gl.shaderSource(shader, source);
			gl.compileShader(shader);

			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				source = source.split(/[\n\r]/);
				for (j = 0; j < source.length; j++) {
					source[j] = (j + 1) + ':\t' + source[j];
				}
				source.unshift('Error compiling ' + (fragment ? 'fragment' : 'vertex') + ' shader:');
				Seriously.logger.error(source.join('\n'));
				throw new Error('Shader error: ' + gl.getShaderInfoLog(shader));
			}

			return shader;
		}

		function makeShaderSetter(info, loc) {
			if (info.type === gl.SAMPLER_2D) {
				return function (value) {
					info.glTexture = gl['TEXTURE' + value];
					gl.uniform1i(loc, value);
				};
			}

			if (info.type === gl.BOOL|| info.type === gl.INT) {
				if (info.size > 1) {
					return function (value) {
						gl.uniform1iv(loc, value);
					};
				}

				return function (value) {
					gl.uniform1i(loc, value);
				};
			}

			if (info.type === gl.FLOAT) {
				if (info.size > 1) {
					return function (value) {
						gl.uniform1fv(loc, value);
					};
				}

				return function (value) {
					gl.uniform1f(loc, value);
				};
			}

			if (info.type === gl.FLOAT_VEC2) {
				return function (obj) {
					gl.uniform2f(loc, obj[0], obj[1]);
				};
			}

			if (info.type === gl.FLOAT_VEC3) {
				return function (obj) {
					gl.uniform3f(loc, obj[0], obj[1], obj[2]);
				};
			}

			if (info.type === gl.FLOAT_VEC4) {
				return function (obj) {
					gl.uniform4f(loc, obj[0], obj[1], obj[2], obj[3]);
				};
			}

			if (info.type === gl.FLOAT_MAT3) {
				return function (mat3) {
					gl.uniformMatrix3fv(loc, false, mat3);
				};
			}

			if (info.type === gl.FLOAT_MAT4) {
				return function (mat4) {
					gl.uniformMatrix4fv(loc, false, mat4);
				};
			}

			throw new Error('Unknown shader uniform type: ' + info.type);
		}

		function makeShaderGetter(loc) {
			return function () {
				return gl.getUniform(program, loc);
			};
		}

		vertexShader = compileShader(vertexShaderSource);
		fragmentShader = compileShader(fragmentShaderSource, true);

		program = gl.createProgram();
		gl.attachShader(program, vertexShader);
		shaderError = gl.getShaderInfoLog(vertexShader);
		if (shaderError) {
			programError += 'Vertex shader error: ' + shaderError + '\n';
		}
		gl.attachShader(program, fragmentShader);
		shaderError = gl.getShaderInfoLog(fragmentShader);
		if (shaderError) {
			programError += 'Fragment shader error: ' + shaderError + '\n';
		}
		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			programError += gl.getProgramInfoLog(program);
			gl.deleteProgram(program);
			gl.deleteShader(vertexShader);
			gl.deleteShader(fragmentShader);
			throw new Error('Could not initialise shader: ' + programError);
		}

		gl.useProgram(program);

		this.uniforms = {};

		l = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
		for (i = 0; i < l; ++i) {
			obj = {
				info: gl.getActiveUniform(program, i)
			};

			obj.name = obj.info.name;
			obj.loc = gl.getUniformLocation(program, obj.name);
			obj.set = makeShaderSetter(obj.info, obj.loc);
			obj.get = makeShaderGetter(obj.loc);
			this.uniforms[obj.name] = obj;

			if (!this[obj.name]) {
				//for convenience
				this[obj.name] = obj;
			}
		}

		this.attributes = {};
		this.location = {};
		l = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
		for (i = 0; i < l; ++i) {
			obj = {
				info: gl.getActiveAttrib(program, i)
			};

			obj.name = obj.info.name;
			obj.location = gl.getAttribLocation(program, obj.name);
			this.attributes[obj.name] = obj;
			this.location[obj.name] = obj.location;
		}

		this.gl = gl;
		this.program = program;

		this.destroy = function () {
			var key;

			if (gl) {
				gl.deleteProgram(program);
				gl.deleteShader(vertexShader);
				gl.deleteShader(fragmentShader);
			}

			for (key in this) {
				if (this.hasOwnProperty(key)) {
					delete this[key];
				}
			}

			program = null;
			vertexShader = null;
			fragmentShader = null;
		};
	}

	ShaderProgram.prototype.use = function () {
		this.gl.useProgram(this.program);
	};

	/*
		main class: Seriously
	*/

	function Seriously(options) {

		//if called without 'new', make a new object and return that
		if (window === this || !(this instanceof Seriously) || this.id !== undefined) {
			return new Seriously(options);
		}

		//initialize object, private properties
		var id = ++maxSeriouslyId,
			seriously = this,
			nodes = [],
			nodesById = {},
			nodeId = 0,
			sources = [],
			targets = [],
			transforms = [],
			effects = [],
			aliases = {},
			preCallbacks = [],
			postCallbacks = [],
			defaultInputs = {},
			glCanvas,
			gl,
			primaryTarget,
			rectangleModel,
			commonShaders = {},
			baseShader,
			baseVertexShader, baseFragmentShader,
			Node, SourceNode, EffectNode, TransformNode, TargetNode,
			Effect, Source, Transform, Target,
			auto = false,
			isDestroyed = false,
			rafId;

		function makeGlModel(shape, gl) {
			var vertex, index, texCoord;

			if (!gl) {
				return false;
			}

			vertex = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, vertex);
			gl.bufferData(gl.ARRAY_BUFFER, shape.vertices, gl.STATIC_DRAW);
			vertex.size = 3;

			index = gl.createBuffer();
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index);
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, shape.indices, gl.STATIC_DRAW);

			texCoord = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, texCoord);
			gl.bufferData(gl.ARRAY_BUFFER, shape.coords, gl.STATIC_DRAW);
			texCoord.size = 2;

			return {
				vertex: vertex,
				index: index,
				texCoord: texCoord,
				length: shape.indices.length,
				mode: shape.mode || gl.TRIANGLES
			};
		}

		function buildRectangleModel(gl) {
			var shape = {};

			shape.vertices = new Float32Array([
				-1, -1, 0,
				1, -1, 0,
				1, 1, 0,
				-1, 1, 0
			]);

			shape.indices = new Uint16Array([
				0, 1, 2,
				0, 2, 3	// Front face
			]);

			shape.coords = new Float32Array([
				0, 0,
				1, 0,
				1, 1,
				0, 1
			]);

			return makeGlModel(shape, gl);
		}

		function attachContext(context) {
			var i, node;

			if (gl) {
				return;
			}

			context.canvas.addEventListener('webglcontextlost', destroyContext, false);
			context.canvas.addEventListener('webglcontextrestored', restoreContext, false);

			if (context.isContextLost()) {
				Seriously.logger.warn('Unable to attach lost WebGL context. Will try again when context is restored.');
				return;
			}

			gl = context;
			glCanvas = context.canvas;

			rectangleModel = buildRectangleModel(gl);

			baseShader = new ShaderProgram(gl, baseVertexShader, baseFragmentShader);

			for (i = 0; i < effects.length; i++) {
				node = effects[i];
				node.gl = gl;
				node.initialize();
				node.buildShader();
			}

			for (i = 0; i < sources.length; i++) {
				node = sources[i];
				node.initialize();
			}

			for (i = 0; i < targets.length; i++) {
				node = targets[i];

				if (!node.model) {
					node.model = rectangleModel;
					node.shader = baseShader;
				}

				//todo: initialize frame buffer if not main canvas
			}
		}

		function restoreContext() {
			var context,
				target,
				i,
				node;

			if (primaryTarget && !gl) {
				target = primaryTarget.target;

				//todo: if too many webglcontextlost events fired in too short a time, abort
				//todo: consider allowing "manual" control of restoring context

				if (target instanceof WebGLFramebuffer) {
					Seriously.logger.error('Unable to restore target built on WebGLFramebuffer');
					return;
				}

				context = getWebGlContext(target, {
					alpha: true,
					premultipliedAlpha: false,
					preserveDrawingBuffer: true,
					stencil: true,
					debugContext: primaryTarget.debugContext
				});

				if (context) {
					if (context.isContextLost()) {
						Seriously.logger.error('Unable to restore WebGL Context');
						return;
					}

					attachContext(context);

					if (primaryTarget.renderToTexture) {
						primaryTarget.frameBuffer = new FrameBuffer(gl, primaryTarget.width, primaryTarget.height, false);
					} else {
						primaryTarget.frameBuffer = {
							frameBuffer: null
						};
					}

					/*
					Set all nodes dirty. In most cases, it should only be necessary
					to set sources dirty, but we want to make sure unattached nodes are covered

					This should get renderDaemon running again if necessary.
					*/
					for (i = 0; i < nodes.length; i++) {
						node = nodes[i];
						node.setDirty();
						node.emit('webglcontextrestored');
					}

					Seriously.logger.log('WebGL context restored');
				}
			}
		}

		function destroyContext(event) {
			// either webglcontextlost or primary target node has been destroyed
			var i, node;

			/*
			todo: once multiple shared webgl resources are supported,
			see if we can switch context to another existing one and
			rebuild immediately
			*/

			if (event) {
				Seriously.logger.warn('WebGL context lost');
				/*
				todo: if too many webglcontextlost events fired in too short a time,
				don't preventDefault
				*/
				event.preventDefault();
			}

			//don't draw anymore until context is restored
			if (rafId) {
				cancelAnimFrame(rafId);
				rafId = 0;
			}

			if (glCanvas) {
				glCanvas.removeEventListener('webglcontextlost', destroyContext, false);
			}

			for (i = 0; i < effects.length; i++) {
				node = effects[i];
				node.gl = null;
				node.initialized = false;
				node.baseShader = null;
				node.model = null;
				node.frameBuffer = null;
				node.texture = null;
				if (node.shader && node.shader.destroy) {
					node.shader.destroy();
				}
				node.shaderDirty = true;
				node.shader = null;
				if (node.effect.lostContext) {
					node.effect.lostContext.call(node);
				}

				/*
				todo: do we need to set nodes to uready?
				if so, make sure nodes never get set to ready unless gl exists
				and make sure to set ready again when context is restored
				*/

				if (event) {
					node.emit('webglcontextlost');
				}
			}

			for (i = 0; i < sources.length; i++) {
				node = sources[i];
				//node.setUnready();
				node.texture = null;
				node.initialized = false;
				node.allowRefresh = false;
				if (event) {
					node.emit('webglcontextlost');
				}
			}

			for (i = 0; i < transforms.length; i++) {
				node = transforms[i];
				node.frameBuffer = null;
				node.texture = null;
				if (event) {
					node.emit('webglcontextlost');
				}
			}

			for (i = 0; i < targets.length; i++) {
				node = targets[i];
				node.model = false;
				node.frameBuffer = null;
				//texture?
				if (event) {
					node.emit('webglcontextlost');
				}
			}

			if (baseShader && baseShader.destroy) {
				baseShader.destroy();
			}

			//clean up rectangleModel
			if (gl) {
				gl.deleteBuffer(rectangleModel.vertex);
				gl.deleteBuffer(rectangleModel.texCoord);
				gl.deleteBuffer(rectangleModel.index);
			}

			if (rectangleModel) {
				delete rectangleModel.vertex;
				delete rectangleModel.texCoord;
				delete rectangleModel.index;
			}

			rectangleModel = null;
			baseShader = null;
			gl = null;
			glCanvas = null;
		}

		/*
		runs on every frame, as long as there are media sources (img, video, canvas, etc.) to check,
		dirty target nodes or pre/post callbacks to run. any sources that are updated are set to dirty,
		forcing all dependent nodes to render
		*/
		function renderDaemon(now) {
			var i, node, media,
				keepRunning = false;

			rafId = 0;

			if (preCallbacks.length) {
				keepRunning = true;
				for (i = 0; i < preCallbacks.length; i++) {
					preCallbacks[i].call(seriously, now);
				}
			}

			if (sources && sources.length) {
				keepRunning = true;
				for (i = 0; i < sources.length; i++) {
					node = sources[i];

					media = node.source;
					if (node.dirty ||
							node.checkDirty && node.checkDirty()) {
						node.dirty = false;
						node.setDirty();
					}
				}
			}

			for (i = 0; i < targets.length; i++) {
				node = targets[i];
				if (node.auto && node.dirty) {
					node.render();
				}
			}

			if (postCallbacks.length) {
				keepRunning = true;
				for (i = 0; i < postCallbacks.length; i++) {
					postCallbacks[i].call(seriously);
				}
			}

			//rafId may have been set again by a callback or in target.setDirty()
			if (keepRunning && !rafId) {
				rafId = requestAnimationFrame(renderDaemon);
			}
		}

		function draw(shader, model, uniforms, frameBuffer, node, options) {
			var numTextures = 0,
				name, value, shaderUniform,
				width, height,
				nodeGl = (node && node.gl) || gl,
				srcRGB, srcAlpha,
				dstRGB, dstAlpha;

			if (!nodeGl) {
				return;
			}

			if (node) {
				width = options && options.width || node.width || nodeGl.canvas.width;
				height = options && options.height || node.height || nodeGl.canvas.height;
			} else {
				width = options && options.width || nodeGl.canvas.width;
				height = options && options.height || nodeGl.canvas.height;
			}

			shader.use();

			nodeGl.viewport(0, 0, width, height);

			nodeGl.bindFramebuffer(nodeGl.FRAMEBUFFER, frameBuffer);

			/* todo: do this all only once at the beginning, since we only have one model? */
			nodeGl.enableVertexAttribArray(shader.location.position);
			nodeGl.enableVertexAttribArray(shader.location.texCoord);

			if (model.texCoord) {
				nodeGl.bindBuffer(nodeGl.ARRAY_BUFFER, model.texCoord);
				nodeGl.vertexAttribPointer(shader.location.texCoord, model.texCoord.size, nodeGl.FLOAT, false, 0, 0);
			}

			nodeGl.bindBuffer(nodeGl.ARRAY_BUFFER, model.vertex);
			nodeGl.vertexAttribPointer(shader.location.position, model.vertex.size, nodeGl.FLOAT, false, 0, 0);

			nodeGl.bindBuffer(nodeGl.ELEMENT_ARRAY_BUFFER, model.index);

			//default for depth is disable
			if (options && options.depth) {
				gl.enable(gl.DEPTH_TEST);
			} else {
				gl.disable(gl.DEPTH_TEST);
			}

			//default for blend is enabled
			if (!options) {
				gl.enable(gl.BLEND);
				gl.blendFunc(
					gl.ONE,
					gl.ZERO
				);
				gl.blendEquation(gl.FUNC_ADD);
			} else if (options.blend === undefined || options.blend) {
				gl.enable(gl.BLEND);

				srcRGB = options.srcRGB === undefined ? gl.ONE : options.srcRGB;
				dstRGB = options.dstRGB || gl.ZERO;
				srcAlpha = options.srcAlpha === undefined ? srcRGB : options.srcAlpha;
				dstAlpha = options.dstAlpha === undefined ? dstRGB : options.dstAlpha;

				gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
				gl.blendEquation(options.blendEquation || gl.FUNC_ADD);
			} else {
				gl.disable(gl.BLEND);
			}

			/* set uniforms to current values */
			for (name in uniforms) {
				if (uniforms.hasOwnProperty(name)) {
					value = uniforms[name];
					shaderUniform = shader.uniforms[name];
					if (shaderUniform) {
						if (value instanceof WebGLTexture) {
							nodeGl.activeTexture(nodeGl.TEXTURE0 + numTextures);
							nodeGl.bindTexture(nodeGl.TEXTURE_2D, value);
							shaderUniform.set(numTextures);
							numTextures++;
						} else if (value instanceof SourceNode ||
								value instanceof EffectNode ||
								value instanceof TransformNode) {
							if (value.texture) {
								nodeGl.activeTexture(nodeGl.TEXTURE0 + numTextures);
								nodeGl.bindTexture(nodeGl.TEXTURE_2D, value.texture);
								shaderUniform.set(numTextures);
								numTextures++;
							}
						} else if(value !== undefined && value !== null) {
							shaderUniform.set(value);
						}
					}
				}
			}

			//default for clear is true
			if (!options || options.clear === undefined || options.clear) {
				nodeGl.clearColor(0.0, 0.0, 0.0, 0.0);
				nodeGl.clear(nodeGl.COLOR_BUFFER_BIT | nodeGl.DEPTH_BUFFER_BIT);
			}

			// draw!
			nodeGl.drawElements(model.mode, model.length, nodeGl.UNSIGNED_SHORT, 0);

			//to protect other 3D libraries that may not remember to turn their depth tests on
			gl.enable(gl.DEPTH_TEST);
		}

		function findInputNode(hook, source, options) {
			var node, i;

			if (typeof hook !== 'string' || !source && source !== 0) {
				if (!options || typeof options !== 'object') {
					options = source;
				}
				source = hook;
			}

			if (typeof hook !== 'string' || !seriousSources[hook]) {
				hook = null;
			}

			if (source instanceof SourceNode ||
					source instanceof EffectNode ||
					source instanceof TransformNode) {
				node = source;
			} else if (source instanceof Effect ||
					source instanceof Source ||
					source instanceof Transform) {
				node = nodesById[source.id];

				if (!node) {
					throw new Error('Cannot connect a foreign node');
				}
			} else {
				if (typeof source === 'string' && isNaN(source)) {
					source = getElement(source, ['canvas', 'img', 'video']);
				}

				for (i = 0; i < sources.length; i++) {
					node = sources[i];
					if ((!hook || hook === node.hook) && node.compare && node.compare(source, options)) {
						return node;
					}
				}

				node = new SourceNode(hook, source, options);
			}

			return node;
		}

		//trace back all sources to make sure we're not making a cyclical connection
		function traceSources(node, original) {
			var i,
				source,
				nodeSources;

			if (!(node instanceof EffectNode) && !(node instanceof TransformNode)) {
				return false;
			}

			if (node === original) {
				return true;
			}

			nodeSources = node.sources;

			for (i in nodeSources) {
				if (nodeSources.hasOwnProperty(i)) {
					source = nodeSources[i];

					if (source === original || traceSources(source, original)) {
						return true;
					}
				}
			}

			return false;
		}

		Node = function () {
			this.ready = false;
			this.width = 1;
			this.height = 1;

			this.gl = gl;

			this.uniforms = {
				resolution: [this.width, this.height],
				transform: null
			};

			this.dirty = true;
			this.isDestroyed = false;

			this.seriously = seriously;

			this.listeners = {};

			this.id = nodeId;
			nodeId++;
		};

		Node.prototype.setReady = function () {
			var i;

			if (!this.ready) {
				this.ready = true;
				this.emit('ready');
				if (this.targets) {
					for (i = 0; i < this.targets.length; i++) {
						this.targets[i].setReady();
					}
				}
			}
		};

		Node.prototype.setUnready = function () {
			var i;

			if (this.ready) {
				this.ready = false;
				this.emit('unready');
				if (this.targets) {
					for (i = 0; i < this.targets.length; i++) {
						this.targets[i].setUnready();
					}
				}
			}
		};

		Node.prototype.setDirty = function () {
			//loop through all targets calling setDirty (depth-first)
			var i;

			if (!this.dirty) {
				this.emit('dirty');
				this.dirty = true;
				if (this.targets) {
					for (i = 0; i < this.targets.length; i++) {
						this.targets[i].setDirty();
					}
				}
			}
		};

		Node.prototype.initFrameBuffer = function (useFloat) {
			if (gl) {
				this.frameBuffer = new FrameBuffer(gl, this.width, this.height, useFloat);
			}
		};

		Node.prototype.readPixels = function (x, y, width, height, dest) {
			var nodeGl = this.gl || gl;

			if (!gl) {
				//todo: is this the best approach?
				throw new Error('Cannot read pixels until a canvas is connected');
			}

			//todo: check on x, y, width, height

			if (!this.frameBuffer) {
				this.initFrameBuffer();
				this.setDirty();
			}

			//todo: should we render here?
			this.render();

			//todo: figure out formats and types
			if (dest === undefined) {
				dest = new Uint8Array(width * height * 4);
			} else if (!dest instanceof Uint8Array) {
				throw new Error('Incompatible array type');
			}

			nodeGl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer.frameBuffer);
			nodeGl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, dest);

			return dest;
		};

		Node.prototype.resize = function () {
			var width,
				height;

			if (this.source) {
				width = this.source.width;
				height = this.source.height;
			} else if (this.sources && this.sources.source) {
				width = this.sources.source.width;
				height = this.sources.source.height;
			} else if (this.inputs && this.inputs.width) {
				width = this.inputs.width;
				height = this.inputs.height || width;
			} else if (this.inputs && this.inputs.height) {
				width = height = this.inputs.height;
			} else {
				//this node will be responsible for calculating its own size
				width = 1;
				height = 1;
			}

			width = Math.floor(width);
			height = Math.floor(height);

			if (this.width !== width || this.height !== height) {
				this.width = width;
				this.height = height;

				this.emit('resize');
				this.setDirty();
			}

			if (this.uniforms && this.uniforms.resolution) {
				this.uniforms.resolution[0] = width;
				this.uniforms.resolution[1] = height;
			}

			if (this.frameBuffer && this.frameBuffer.resize) {
				this.frameBuffer.resize(width, height);
			}
		};

		Node.prototype.on = function (eventName, callback) {
			var listeners,
				index = -1;

			if (!eventName || typeof callback !== 'function') {
				return;
			}

			listeners = this.listeners[eventName];
			if (listeners) {
				index = listeners.indexOf(callback);
			} else {
				listeners = this.listeners[eventName] = [];
			}

			if (index < 0) {
				listeners.push(callback);
			}
		};

		Node.prototype.off = function (eventName, callback) {
			var listeners,
				index = -1;

			if (!eventName || typeof callback !== 'function') {
				return;
			}

			listeners = this.listeners[eventName];
			if (listeners) {
				index = listeners.indexOf(callback);
				if (index >= 0) {
					listeners.splice(index, 1);
				}
			}
		};

		Node.prototype.emit = function (eventName) {
			var i,
				listeners = this.listeners[eventName];

			if (listeners && listeners.length) {
				for (i = 0; i < listeners.length; i++) {
					setTimeoutZero(listeners[i]);
				}
			}
		};

		Node.prototype.destroy = function () {
			var i,
				key;

			delete this.gl;
			delete this.seriously;

			//remove all listeners
			for (key in this.listeners) {
				if (this.listeners.hasOwnProperty(key)) {
					delete this.listeners[key];
				}
			}

			//clear out uniforms
			for (i in this.uniforms) {
				if (this.uniforms.hasOwnProperty(i)) {
					delete this.uniforms[i];
				}
			}

			//clear out list of targets and disconnect each
			if (this.targets) {
				delete this.targets;
			}

			//clear out frameBuffer
			if (this.frameBuffer && this.frameBuffer.destroy) {
				this.frameBuffer.destroy();
				delete this.frameBuffer;
			}

			//remove from main nodes index
			i = nodes.indexOf(this);
			if (i >= 0) {
				nodes.splice(i, 1);
			}
			delete nodesById[this.id];

			this.isDestroyed = true;
		};

		Effect = function (effectNode) {
			var name, me = effectNode;

			function setInput(inputName, input) {
				var lookup, value, effectInput, i;

				effectInput = me.effect.inputs[inputName];

				lookup = me.inputElements[inputName];

				if (typeof input === 'string' && isNaN(input)) {
					if (effectInput.type === 'enum') {
						if (!effectInput.options.hasOwnProperty(input)) {
							input = getElement(input, ['select']);
						}
					} else if (effectInput.type === 'number' || effectInput.type === 'boolean') {
						input = getElement(input, ['input', 'select']);
					} else if (effectInput.type === 'image') {
						input = getElement(input, ['canvas', 'img', 'video']);
					}
					//todo: color? date/time?
				}

				if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
					value = input.value;

					if (lookup && lookup.element !== input) {
						lookup.element.removeEventListener('change', lookup.listener, true);
						lookup.element.removeEventListener('input', lookup.listener, true);
						delete me.inputElements[inputName];
						lookup = null;
					}

					if (!lookup) {
						lookup = {
							element: input,
							listener: (function (name, element) {
								return function () {
									var oldValue, newValue;

									if (input.type === 'checkbox') {
										//special case for check box
										oldValue = input.checked;
									} else {
										oldValue = element.value;
									}
									newValue = me.setInput(name, oldValue);

									//special case for color type
									if (effectInput.type === 'color') {
										newValue = colorArrayToHex(newValue).substr(0, 7);
									}

									//if input validator changes our value, update HTML Element
									//todo: make this optional...somehow
									if (newValue !== oldValue) {
										element.value = newValue;
									}
								};
							}(inputName, input))
						};

						me.inputElements[inputName] = lookup;
						if (input.type === 'range') {
							input.addEventListener('input', lookup.listener, true);
							input.addEventListener('change', lookup.listener, true);
						} else {
							input.addEventListener('change', lookup.listener, true);
						}
					}

					if (lookup && input.type === 'checkbox') {
						value = input.checked;
					}
				} else {
					if (lookup) {
						lookup.element.removeEventListener('change', lookup.listener, true);
						lookup.element.removeEventListener('input', lookup.listener, true);
						delete me.inputElements[inputName];
					}
					value = input;
				}

				me.setInput(inputName, value);
				return me.inputs[inputName];
			}

			function makeImageSetter(inputName) {
				return function (value) {
					var val = setInput(inputName, value);
					return val && val.pub;
				};
			}

			function makeImageGetter(inputName) {
				return function () {
					var val = me.inputs[inputName];
					return val && val.pub;
				};
			}

			function makeSetter(inputName) {
				return function (value) {
					return setInput(inputName, value);
				};
			}

			function makeGetter(inputName) {
				return function () {
					return me.inputs[inputName];
				};
			}

			//priveleged publicly accessible methods/setters/getters
			//todo: provide alternate set/get methods
			for (name in me.effect.inputs) {
				if (me.effect.inputs.hasOwnProperty(name)) {
					if (this[name] === undefined) {
						if (me.effect.inputs[name].type === 'image') {
							Object.defineProperty(this, name, {
								configurable: true,
								enumerable: true,
								get: makeImageGetter(name),
								set: makeImageSetter(name)
							});
						} else {
							Object.defineProperty(this, name, {
								configurable: true,
								enumerable: true,
								get: makeGetter(name),
								set: makeSetter(name)
							});
						}
					} else {
						//todo: this is temporary. get rid of it.
						throw new Error('Cannot overwrite Seriously.' + name);
					}
				}
			}

			Object.defineProperties(this, {
				effect: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.hook;
					}
				},
				title: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.effect.title || me.hook;
					}
				},
				width: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.width;
					}
				},
				height: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.height;
					}
				},
				id: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.id;
					}
				}
			});

			this.render = function () {
				me.render();
				return this;
			};

			this.readPixels = function (x, y, width, height, dest) {
				return me.readPixels(x, y, width, height, dest);
			};

			this.on = function (eventName, callback) {
				me.on(eventName, callback);
			};

			this.off = function (eventName, callback) {
				me.off(eventName, callback);
			};

			this.inputs = function (name) {
				var result,
					input,
					inputs,
					i,
					key;

				inputs = me.effect.inputs;

				if (name) {
					input = inputs[name];
					if (!input) {
						return null;
					}

					result = {
						type: input.type,
						defaultValue: input.defaultValue,
						title: input.title || name
					};

					if (input.type === 'number') {
						result.min = input.min;
						result.max = input.max;
						result.step = input.step;
					} else if (input.type === 'enum') {
						//make a copy
						result.options = extend({}, input.options);
					} else if (input.type === 'vector') {
						result.dimensions = input.dimensions;
					}

					if (input.description) {
						result.description = input.description;
					}

					return result;
				}

				result = {};
				for (key in inputs) {
					if (inputs.hasOwnProperty(key)) {
						result[key] = this.inputs(key);
					}
				}
				return result;
			};

			this.alias = function (inputName, aliasName) {
				me.alias(inputName, aliasName);
				return this;
			};

			this.matte = function (polygons) {
				me.matte(polygons);
			};

			this.destroy = function () {
				var i,
					descriptor;

				me.destroy();

				for (i in this) {
					if (this.hasOwnProperty(i) && i !== 'isDestroyed' && i !== 'id') {
						descriptor = Object.getOwnPropertyDescriptor(this, i);
						if (descriptor.get || descriptor.set ||
								typeof this[i] !== 'function') {
							delete this[i];
						} else {
							this[i] = nop;
						}
					}
				}
			};

			this.isDestroyed = function () {
				return me.isDestroyed;
			};

			this.isReady = function () {
				return me.ready;
			};
		};

		EffectNode = function (hook, options) {
			var key, name, input,
				defaultValue,
				defaults,
				defaultSources = {};

			Node.call(this, options);
			this.gl = gl;

			this.effectRef = seriousEffects[hook];
			this.sources = {};
			this.targets = [];
			this.inputElements = {};
			this.dirty = true;
			this.shaderDirty = true;
			this.hook = hook;
			this.options = options;
			this.transform = null;

			this.effect = extend({}, this.effectRef);
			if (this.effectRef.definition) {
				/*
				todo: copy over inputs object separately in case some are specified
				in advance and some are specified in definition function
				*/
				extend(this.effect, this.effectRef.definition.call(this, options));
			}
			validateInputSpecs(this.effect);

			this.uniforms.transform = identity;
			this.inputs = {};
			defaults = defaultInputs[hook];
			for (name in this.effect.inputs) {
				if (this.effect.inputs.hasOwnProperty(name)) {
					input = this.effect.inputs[name];

					if (input.defaultValue === undefined || input.defaultValue === null) {
						if (input.type === 'number') {
							input.defaultValue = Math.min(Math.max(0, input.min), input.max);
						} else if (input.type === 'color') {
							input.defaultValue = [0, 0, 0, 0];
						} else if (input.type === 'boolean') {
							input.defaultValue = false;
						} else if (input.type === 'string') {
							input.defaultValue = '';
						} else if (input.type === 'enum') {
							input.defaultValue = input.firstValue;
						}
					}

					defaultValue = input.validate.call(this, input.defaultValue, input);
					if (defaults && defaults[name] !== undefined) {
						defaultValue = input.validate.call(this, defaults[name], input, input.defaultValue, defaultValue);
						defaults[name] = defaultValue;
						if (input.type === 'image') {
							defaultSources[name] = defaultValue;
						}
					}

					this.inputs[name] = defaultValue;
					if (input.uniform) {
						this.uniforms[input.uniform] = input.defaultValue;
					}
				}
			}

			if (gl) {
				this.initialize();
				if (this.effect.commonShader) {
					/*
					this effect is unlikely to need to be modified again
					by changing parameters, so build it now to avoid jank later
					*/
					this.buildShader();
				}
			}

			this.updateReady();
			this.inPlace = this.effect.inPlace;

			this.pub = new Effect(this);

			nodes.push(this);
			nodesById[this.id] = this;
			effects.push(this);

			allEffectsByHook[hook].push(this);

			for (name in defaultSources) {
				if (defaultSources.hasOwnProperty(name)) {
					this.setInput(name, defaultSources[name]);
				}
			}
		};

		extend(EffectNode, Node);

		EffectNode.prototype.initialize = function () {
			if (!this.initialized) {
				var that = this;

				this.baseShader = baseShader;

				if (this.shape) {
					this.model = makeGlModel(this.shape, this.gl);
				} else {
					this.model = rectangleModel;
				}

				if (typeof this.effect.initialize === 'function') {
					this.effect.initialize.call(this, function () {
						that.initFrameBuffer(true);
					}, gl);
				} else {
					this.initFrameBuffer(true);
				}

				if (this.frameBuffer) {
					this.texture = this.frameBuffer.texture;
				}

				this.initialized = true;
			}
		};

		EffectNode.prototype.resize = function () {
			var i;

			Node.prototype.resize.call(this);

			if (this.effect.resize) {
				this.effect.resize.call(this);
			}

			for (i = 0; i < this.targets.length; i++) {
				this.targets[i].resize();
			}
		};

		EffectNode.prototype.updateReady = function () {
			var i,
				input,
				key,
				effect,
				ready = true,
				method;

			effect = this.effect;
			for (key in effect.inputs) {
				if (effect.inputs.hasOwnProperty(key)) {
					input = this.effect.inputs[key];
					if (input.type === 'image' &&
							(!this.sources[key] || !this.sources[key].ready) &&
							(!effect.requires || effect.requires.call(this, key, this.inputs))
							) {
						ready = false;
						break;
					}
				}
			}

			if (this.ready !== ready) {
				this.ready = ready;
				this.emit(ready ? 'ready' : 'unready');
				method = ready ? 'setReady' : 'setUnready';

				if (this.targets) {
					for (i = 0; i < this.targets.length; i++) {
						this.targets[i][method]();
					}
				}
			}
		};

		EffectNode.prototype.setReady = EffectNode.prototype.updateReady;

		EffectNode.prototype.setUnready = EffectNode.prototype.updateReady;

		EffectNode.prototype.addTarget = function (target) {
			var i;
			for (i = 0; i < this.targets.length; i++) {
				if (this.targets[i] === target) {
					return;
				}
			}

			this.targets.push(target);
		};

		EffectNode.prototype.removeTarget = function (target) {
			var i = this.targets && this.targets.indexOf(target);
			if (i >= 0) {
				this.targets.splice(i, 1);
			}
		};

		EffectNode.prototype.removeSource = function (source) {
			var i, pub = source && source.pub;

			for (i in this.inputs) {
				if (this.inputs.hasOwnProperty(i) &&
					(this.inputs[i] === source || this.inputs[i] === pub)) {
					this.inputs[i] = null;
				}
			}

			for (i in this.sources) {
				if (this.sources.hasOwnProperty(i) &&
					(this.sources[i] === source || this.sources[i] === pub)) {
					this.sources[i] = null;
				}
			}
		};

		EffectNode.prototype.buildShader = function () {
			var shader, effect = this.effect;
			if (this.shaderDirty) {
				if (effect.commonShader && commonShaders[this.hook]) {
					if (!this.shader) {
						commonShaders[this.hook].count++;
					}
					this.shader = commonShaders[this.hook].shader;
				} else if (effect.shader) {
					if (this.shader && !effect.commonShader) {
						this.shader.destroy();
					}
					shader = effect.shader.call(this, this.inputs, {
						vertex: baseVertexShader,
						fragment: baseFragmentShader
					}, Seriously.util);

					if (shader instanceof ShaderProgram) {
						this.shader = shader;
					} else if (shader && shader.vertex && shader.fragment) {
						this.shader = new ShaderProgram(gl, shader.vertex, shader.fragment);
					} else {
						this.shader = baseShader;
					}

					if (effect.commonShader) {
						commonShaders[this.hook] = {
							count: 1,
							shader: this.shader
						};
					}
				} else {
					this.shader = baseShader;
				}

				this.shaderDirty = false;
			}
		};

		EffectNode.prototype.render = function () {
			var key,
				frameBuffer,
				effect = this.effect,
				that = this,
				inPlace;

			function drawFn(shader, model, uniforms, frameBuffer, node, options) {
				draw(shader, model, uniforms, frameBuffer, node || that, options);
			}

			if (!gl) {
				return;
			}

			if (!this.initialized) {
				this.initialize();
			}

			if (this.shaderDirty) {
				this.buildShader();
			}

			if (this.dirty && this.ready) {
				for (key in this.sources) {
					if (this.sources.hasOwnProperty(key) &&
						(!effect.requires || effect.requires.call(this, key, this.inputs))) {

						//todo: set source texture in case it changes?
						//sourcetexture = this.sources[i].render() || this.sources[i].texture

						inPlace = typeof this.inPlace === 'function' ? this.inPlace(key) : this.inPlace;
						this.sources[key].render(!inPlace);
					}
				}

				if (this.frameBuffer) {
					frameBuffer = this.frameBuffer.frameBuffer;
				}

				if (typeof effect.draw === 'function') {
					effect.draw.call(this, this.shader, this.model, this.uniforms, frameBuffer, drawFn);
					this.emit('render');
				} else if (frameBuffer) {
					draw(this.shader, this.model, this.uniforms, frameBuffer, this);
					this.emit('render');
				}

				this.dirty = false;
			}

			return this.texture;
		};

		EffectNode.prototype.setInput = function (name, value) {
			var input, uniform,
				sourceKeys,
				source,
				me = this,
				defaultValue;

			function disconnectSource() {
				var previousSource = me.sources[name],
					key;

				/*
				remove this node from targets of previously connected source node,
				but only if the source node is not being used as another input
				*/
				if (previousSource) {
					for (key in me.sources) {
						if (key !== name &&
								me.sources.hasOwnProperty(key) &&
								me.sources[key] === previousSource) {
							return;
						}
					}
					previousSource.removeTarget(me);
				}
			}

			if (this.effect.inputs.hasOwnProperty(name)) {
				input = this.effect.inputs[name];
				if (input.type === 'image') {
					//&& !(value instanceof Effect) && !(value instanceof Source)) {

					if (value) {
						value = findInputNode(value);

						if (value !== this.sources[name]) {
							disconnectSource();

							if (traceSources(value, this)) {
								throw new Error('Attempt to make cyclical connection.');
							}

							this.sources[name] = value;
							value.addTarget(this);
						}
					} else {
						delete this.sources[name];
						value = false;
					}

					uniform = this.sources[name];

					sourceKeys = Object.keys(this.sources);
					if (this.inPlace === true && sourceKeys.length === 1) {
						source = this.sources[sourceKeys[0]];
						this.uniforms.transform = source && source.cumulativeMatrix || identity;
					} else {
						this.uniforms.transform = identity;
					}
				} else {
					if (defaultInputs[this.hook] && defaultInputs[this.hook][name] !== undefined) {
						defaultValue = defaultInputs[this.hook][name];
					} else {
						defaultValue = input.defaultValue;
					}
					value = input.validate.call(this, value, input, defaultValue, this.inputs[name]);
					uniform = value;
				}

				if (this.inputs[name] === value && input.type !== 'color' && input.type !== 'vector') {
					return value;
				}

				this.inputs[name] = value;

				if (input.uniform) {
					this.uniforms[input.uniform] = uniform;
				}

				if (input.type === 'image') {
					this.resize();
					this.updateReady();
				} else if (input.updateSources) {
					this.updateReady();
				}

				if (input.shaderDirty) {
					this.shaderDirty = true;
				}

				this.setDirty();

				if (input.update) {
					input.update.call(this, value);
				}

				return value;
			}
		};

		EffectNode.prototype.alias = function (inputName, aliasName) {
			var that = this;

			if (reservedNames.indexOf(aliasName) >= 0) {
				throw new Error('\'' + aliasName + '\' is a reserved name and cannot be used as an alias.');
			}

			if (this.effect.inputs.hasOwnProperty(inputName)) {
				if (!aliasName) {
					aliasName = inputName;
				}

				seriously.removeAlias(aliasName);

				aliases[aliasName] = {
					node: this,
					input: inputName
				};

				Object.defineProperty(seriously, aliasName, {
					configurable: true,
					enumerable: true,
					get: function () {
						return that.inputs[inputName];
					},
					set: function (value) {
						return that.setInput(inputName, value);
					}
				});
			}

			return this;
		};

		/*
		matte function to be assigned as a method to EffectNode and TargetNode
		*/
		EffectNode.prototype.matte = function (poly) {
			var polys,
				polygons = [],
				polygon,
				vertices = [],
				i, j, v,
				vert, prev,
				//triangles = [],
				shape = {};

			//detect whether it's multiple polygons or what
			function makePolygonsArray(poly) {
				if (!poly || !poly.length || !Array.isArray(poly)) {
					return [];
				}

				if (!Array.isArray(poly[0])) {
					return [poly];
				}

				if (Array.isArray(poly[0]) && !isNaN(poly[0][0])) {
					return [poly];
				}

				return poly;
			}

			function linesIntersect(a1, a2, b1, b2) {
				var ua_t, ub_t, u_b, ua, ub;
				ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
				ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
				u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
				if (u_b) {
					ua = ua_t / u_b;
					ub = ub_t / u_b;
					if (ua > 0 && ua <= 1 && ub > 0 && ub <= 1) {
						return {
							x: a1.x + ua * (a2.x - a1.x),
							y: a1.y + ua * (a2.y - a1.y)
						};
					}
				}
				return false;
			}

			function makeSimple(poly) {
				/*
				this uses a slow, naive approach to detecting line intersections.
				Use Bentley-Ottmann Algorithm
				see: http://softsurfer.com/Archive/algorithm_0108/algorithm_0108.htm#Bentley-Ottmann Algorithm
				see: https://github.com/tokumine/sweepline
				*/
				var i, j,
					edge1, edge2,
					intersect,
					intersections = [],
					newPoly,
					head, point,
					newPolygons,
					point1, point2;

				if (poly.simple) {
					return;
				}

				for (i = 0; i < poly.edges.length; i++) {
					edge1 = poly.edges[i];
					for (j = i + 1; j < poly.edges.length; j++) {
						edge2 = poly.edges[j];
						intersect = linesIntersect(edge1[0], edge1[1], edge2[0], edge2[1]);
						if (intersect) {
							intersect.edge1 = edge1;
							intersect.edge2 = edge2;
							intersections.push(intersect);
						}
					}
				}

				if (intersections.length) {
					newPolygons = [];

					for (i = 0; i < intersections.length; i++) {
						intersect = intersections[i];
						edge1 = intersect.edge1;
						edge2 = intersect.edge2;

						//make new points
						//todo: set ids for points
						point1 = {
							x: intersect.x,
							y: intersect.y,
							prev: edge1[0],
							next: edge2[1],
							id: vertices.length
						};
						poly.vertices.push(point1);
						vertices.push(point1);

						point2 = {
							x: intersect.x,
							y: intersect.y,
							prev: edge2[0],
							next: edge1[1],
							id: vertices.length
						};
						poly.vertices.push(point2);
						vertices.push(point1);

						//modify old points
						point1.prev.next = point1;
						point1.next.prev = point1;
						point2.prev.next = point2;
						point2.next.prev = point2;

						//don't bother modifying the old edges. we're just gonna throw them out
					}

					//make new polygons
					do {
						newPoly = {
							edges: [],
							vertices: [],
							simple: true
						};
						newPolygons.push(newPoly);
						point = poly.vertices[0];
						head = point;
						//while (point.next !== head && poly.vertices.length) {
						do {
							i = poly.vertices.indexOf(point);
							poly.vertices.splice(i, 1);
							newPoly.edges.push([point, point.next]);
							newPoly.vertices.push(point);
							point = point.next;
						} while (point !== head);
					} while (poly.vertices.length);

					//remove original polygon from list
					i = polygons.indexOf(poly);
					polygons.splice(i, 1);

					//add new polygons to list
					for (i = 0; i < newPolygons.length; i++) {
						polygons.push(newPolygons[i]);
					}
				} else {
					poly.simple = true;
				}
			}

			function clockWise(poly) {
				var p, q, n = poly.vertices.length,
					pv, qv, sum = 0;
				for (p = n - 1, q = 0; q < n; p = q, q++) {
					pv = poly.vertices[p];
					qv = poly.vertices[q];
					//sum += (next.x - v.x) * (next.y + v.y);
					//sum += (v.next.x + v.x) * (v.next.y - v.y);
					sum += pv.x * qv.y - qv.x * pv.y;
				}
				return sum > 0;
			}

			function triangulate(poly) {
				var v, points = poly.vertices,
					n, V = [], indices = [],
					nv, count, m, u, w,

					//todo: give these variables much better names
					a, b, c, s, t;

				function pointInTriangle(a, b, c, p) {
					var ax, ay, bx, by, cx, cy, apx, apy, bpx, bpy, cpx, cpy,
						cXap, bXcp, aXbp;

					ax = c.x - b.x;
					ay = c.y - b.y;
					bx = a.x - c.x;
					by = a.y - c.y;
					cx = b.x - a.x;
					cy = b.y - a.y;
					apx = p.x - a.x;
					apy = p.y - a.y;
					bpx = p.x - b.x;
					bpy = p.y - b.y;
					cpx = p.x - c.x;
					cpy = p.y - c.y;

					aXbp = ax * bpy - ay * bpx;
					cXap = cx * apy - cy * apx;
					bXcp = bx * cpy - by * cpx;

					return aXbp >= 0 && bXcp >=0 && cXap >=0;
				}

				function snip(u, v, w, n, V) {
					var p, a, b, c, point;
					a = points[V[u]];
					b = points[V[v]];
					c = points[V[w]];
					if (0 > (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) {
						return false;
					}
					for (p = 0; p < n; p++) {
						if (!(p === u || p === v || p === w)) {
							point = points[V[p]];
							if (pointInTriangle(a, b, c, point)) {
								return false;
							}
						}
					}
					return true;
				}

				//copy points
				//for (v = 0; v < poly.vertices.length; v++) {
				//	points.push(poly.vertices[v]);
				//}
				n = points.length;

				if (poly.clockWise) {
					for (v = 0; v < n; v++) {
						V[v] = v;
					}
				} else {
					for (v = 0; v < n; v++) {
						V[v] = (n - 1) - v;
					}
				}

				nv = n;
				count = 2 * nv;
				m = 0;
				v = nv - 1;
				while (nv > 2) {
					if ((count--) <= 0) {
						return indices;
					}

					u = v;
					if (nv <= u) {
						u = 0;
					}

					v = u + 1;
					if (nv <= v) {
						v = 0;
					}

					w = v + 1;
					if (nv < w) {
						w = 0;
					}

					if (snip(u, v, w, nv, V)) {
						a = V[u];
						b = V[v];
						c = V[w];
						if (poly.clockWise) {
							indices.push(points[a]);
							indices.push(points[b]);
							indices.push(points[c]);
						} else {
							indices.push(points[c]);
							indices.push(points[b]);
							indices.push(points[a]);
						}
						m++;
						for (s = v, t = v + 1; t < nv; s++, t++) {
							V[s] = V[t];
						}
						nv--;
						count = 2 * nv;
					}
				}

				polygon.indices = indices;
			}

			polys = makePolygonsArray(poly);

			for (i = 0; i < polys.length; i++) {
				poly = polys[i];
				prev = null;
				polygon = {
					vertices: [],
					edges: []
				};

				for (j = 0; j < poly.length; j++) {
					v = poly[j];
					if (typeof v ==='object' && !isNaN(v.x) && !isNaN(v.y)) {
						vert = {
							x: v.x,
							y: v.y,
							id: vertices.length
						};
					} else if (v.length >= 2 && !isNaN(v[0]) && !isNaN(v[1])) {
						vert = {
							x: v[0],
							y: v[1],
							id: vertices.length
						};
					}
					if (vert) {
						if (prev) {
							prev.next = vert;
							vert.prev = prev;
							vert.next = polygon.vertices[0];
							polygon.vertices[0].prev = vert;
						} else {
							polygon.head = vert;
							vert.next = vert;
							vert.prev = vert;
						}
						vertices.push(vert);
						polygon.vertices.push(vert);
						prev = vert;
					}
				}

				if (polygon.vertices.length > 2) {
					if (polygon.vertices.length === 3) {
						polygon.simple = true;
					}

					polygons.push(polygon);

					//save edges
					for (j = 0; j < polygon.vertices.length; j++) {
						vert = polygon.vertices[j];
						polygon.edges.push([
							vert, vert.next
						]);
					}
				}
			}

			for (i = polygons.length - 1; i >= 0; i--) {
				polygon = polygons[i];
				makeSimple(polygon);
			}

			for (i = 0; i < polygons.length; i++) {
				polygon = polygons[i];
				polygon.clockWise = clockWise(polygon);
				triangulate(polygon);
			}

			//build shape
			shape.vertices = [];
			shape.coords = [];
			for (i = 0; i < vertices.length; i++) {
				v = vertices[i];
				shape.vertices.push(v.x * 2 - 1);
				shape.vertices.push(v.y * -2 + 1);
				shape.vertices.push(-1);

				shape.coords.push(v.x);
				shape.coords.push(v.y * -1 + 1);
			}
			shape.vertices = new Float32Array(shape.vertices);
			shape.coords = new Float32Array(shape.coords);

			shape.indices = [];
			for (i = 0; i < polygons.length; i++) {
				polygon = polygons[i];
				for (j = 0; j < polygon.indices.length; j++) {
					v = polygon.indices[j];
					shape.indices.push(v.id);
					//shape.indices.push(v[1].id);
					//shape.indices.push(v[2].id);
				}
			}
			shape.indices = new Uint16Array(shape.indices);

			this.shape = shape;
			if (this.gl) {
				makeGlModel(shape, this.gl);
			}
		};

		EffectNode.prototype.destroy = function () {
			var i, key, item, hook = this.hook;

			//let effect destroy itself
			if (this.effect.destroy && typeof this.effect.destroy === 'function') {
				this.effect.destroy.call(this);
			}
			delete this.effect;

			//shader
			if (commonShaders[hook]) {
				commonShaders[hook].count--;
				if (!commonShaders[hook].count) {
					delete commonShaders[hook];
				}
			}
			if (this.shader && this.shader.destroy && this.shader !== baseShader && !commonShaders[hook]) {
				this.shader.destroy();
			}
			delete this.shader;

			//stop watching any input elements
			for (key in this.inputElements) {
				if (this.inputElements.hasOwnProperty(key)) {
					item = this.inputElements[key];
					item.element.removeEventListener('change', item.listener, true);
					item.element.removeEventListener('input', item.listener, true);
				}
			}

			//sources
			for (key in this.sources) {
				if (this.sources.hasOwnProperty(key)) {
					item = this.sources[key];
					if (item && item.removeTarget) {
						item.removeTarget(this);
					}
					delete this.sources[key];
				}
			}

			//targets
			while (this.targets.length) {
				item = this.targets.pop();
				if (item && item.removeSource) {
					item.removeSource(this);
				}
			}

			for (key in this) {
				if (this.hasOwnProperty(key) && key !== 'id') {
					delete this[key];
				}
			}

			//remove any aliases
			for (key in aliases) {
				if (aliases.hasOwnProperty(key)) {
					item = aliases[key];
					if (item.node === this) {
						seriously.removeAlias(key);
					}
				}
			}

			//remove self from master list of effects
			i = effects.indexOf(this);
			if (i >= 0) {
				effects.splice(i, 1);
			}

			i = allEffectsByHook[hook].indexOf(this);
			if (i >= 0) {
				allEffectsByHook[hook].splice(i, 1);
			}

			Node.prototype.destroy.call(this);
		};

		Source = function (sourceNode) {
			var me = sourceNode;

			//priveleged accessor methods
			Object.defineProperties(this, {
				original: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.source;
					}
				},
				id: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.id;
					}
				},
				width: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.width;
					}
				},
				height: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.height;
					}
				}
			});

			this.render = function () {
				me.render();
			};

			this.update = function () {
				me.setDirty();
			};

			this.readPixels = function (x, y, width, height, dest) {
				return me.readPixels(x, y, width, height, dest);
			};

			this.on = function (eventName, callback) {
				me.on(eventName, callback);
			};

			this.off = function (eventName, callback) {
				me.off(eventName, callback);
			};

			this.destroy = function () {
				var i,
					descriptor;

				me.destroy();

				for (i in this) {
					if (this.hasOwnProperty(i) && i !== 'isDestroyed' && i !== 'id') {
						descriptor = Object.getOwnPropertyDescriptor(this, i);
						if (descriptor.get || descriptor.set ||
								typeof this[i] !== 'function') {
							delete this[i];
						} else {
							this[i] = nop;
						}
					}
				}
			};

			this.isDestroyed = function () {
				return me.isDestroyed;
			};

			this.isReady = function () {
				return me.ready;
			};
		};

		/*
			possible sources: img, video, canvas (2d or 3d), texture, ImageData, array, typed array
		*/
		SourceNode = function (hook, source, options) {
			var opts = options || {},
				flip = opts.flip === undefined ? true : opts.flip,
				width = opts.width,
				height = opts.height,
				deferTexture = false,
				that = this,
				matchedType = false,
				key,
				plugin;

			function sourcePlugin(hook, source, options, force) {
				var p = seriousSources[hook];
				if (p.definition) {
					p = p.definition.call(that, source, options, force);
					if (p) {
						p = extend(extend({}, seriousSources[hook]), p);
					} else {
						return null;
					}
				}
				return p;
			}

			function compareSource(source) {
				return that.source === source;
			}

			Node.call(this);

			if (hook && typeof hook !== 'string' || !source && source !== 0) {
				if (!options || typeof options !== 'object') {
					options = source;
				}
				source = hook;
			}

			if (typeof source === 'string' && isNaN(source)) {
				source = getElement(source, ['canvas', 'img', 'video']);
			}

			// forced source type?
			if (typeof hook === 'string' && seriousSources[hook]) {
				plugin = sourcePlugin(hook, source, options, true);
				if (plugin) {
					this.hook = hook;
					matchedType = true;
					deferTexture = plugin.deferTexture;
					this.plugin = plugin;
					this.compare = plugin.compare;
					this.checkDirty = plugin.checkDirty;
					if (plugin.source) {
						source = plugin.source;
					}
				}
			}

			//todo: could probably stand to re-work and re-indent this whole block now that we have plugins
			if (!plugin && source instanceof HTMLElement) {
				if (source.tagName === 'CANVAS') {
					this.width = source.width;
					this.height = source.height;

					this.render = this.renderImageCanvas;
					matchedType = true;
					this.hook = 'canvas';
					this.compare = compareSource;
				} else if (source.tagName === 'IMG') {
					this.width = source.naturalWidth || 1;
					this.height = source.naturalHeight || 1;

					if (!source.complete || !source.naturalWidth) {
						deferTexture = true;
					}

					source.addEventListener('load', function () {
						if (!that.isDestroyed) {
							if (that.width !== source.naturalWidth || that.height !== source.naturalHeight) {
								that.width = source.naturalWidth;
								that.height = source.naturalHeight;
								that.resize();
							}

							that.setDirty();
							that.setReady();
						}
					}, true);

					this.render = this.renderImageCanvas;
					matchedType = true;
					this.hook = 'image';
					this.compare = compareSource;
				}
			} else if (!plugin && source instanceof WebGLTexture) {
				if (gl && !gl.isTexture(source)) {
					throw new Error('Not a valid WebGL texture.');
				}

				//different defaults
				if (!isNaN(width)) {
					if (isNaN(height)) {
						height = width;
					}
				} else if (!isNaN(height)) {
					width = height;
				}/* else {
					//todo: guess based on dimensions of target canvas
					//throw new Error('Must specify width and height when using a WebGL texture as a source');
				}*/

				this.width = width;
				this.height = height;

				if (opts.flip === undefined) {
					flip = false;
				}
				matchedType = true;

				this.texture = source;
				this.initialized = true;
				this.hook = 'texture';
				this.compare = compareSource;

				//todo: if WebGLTexture source is from a different context render it and copy it over
				this.render = function () {};
			}

			if (!matchedType && !plugin) {
				for (key in seriousSources) {
					if (seriousSources.hasOwnProperty(key) && seriousSources[key]) {
						plugin = sourcePlugin(key, source, options, false);
						if (plugin) {
							this.hook = key;
							matchedType = true;
							deferTexture = plugin.deferTexture;
							this.plugin = plugin;
							this.compare = plugin.compare;
							this.checkDirty = plugin.checkDirty;
							if (plugin.source) {
								source = plugin.source;
							}

							break;
						}
					}
				}
			}

			if (!matchedType) {
				throw new Error('Unknown source type');
			}

			this.source = source;
			if (this.flip === undefined) {
				this.flip = flip;
			}

			this.targets = [];

			if (!deferTexture) {
				that.setReady();
			}

			this.pub = new Source(this);

			nodes.push(this);
			nodesById[this.id] = this;
			sources.push(this);
			allSourcesByHook[this.hook].push(this);

			if (sources.length && !rafId) {
				renderDaemon();
			}
		};

		extend(SourceNode, Node);

		SourceNode.prototype.initialize = function () {
			var texture;

			if (!gl || this.texture || !this.ready) {
				return;
			}

			texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.bindTexture(gl.TEXTURE_2D, null);

			this.texture = texture;
			this.initialized = true;
			this.allowRefresh = true;
			this.setDirty();
		};

		SourceNode.prototype.initFrameBuffer = function (useFloat) {
			if (gl) {
				this.frameBuffer = new FrameBuffer(gl, this.width, this.height, {
					texture: this.texture,
					useFloat: useFloat
				});
			}
		};

		SourceNode.prototype.addTarget = function (target) {
			var i;
			for (i = 0; i < this.targets.length; i++) {
				if (this.targets[i] === target) {
					return;
				}
			}

			this.targets.push(target);
		};

		SourceNode.prototype.removeTarget = function (target) {
			var i = this.targets && this.targets.indexOf(target);
			if (i >= 0) {
				this.targets.splice(i, 1);
			}
		};

		SourceNode.prototype.resize = function () {
			var i,
				target;

			this.uniforms.resolution[0] = this.width;
			this.uniforms.resolution[1] = this.height;

			if (this.framebuffer) {
				this.framebuffer.resize(this.width, this.height);
			}

			this.emit('resize');
			this.setDirty();

			if (this.targets) {
				for (i = 0; i < this.targets.length; i++) {
					target = this.targets[i];
					target.resize();
					if (target.setTransformDirty) {
						target.setTransformDirty();
					}
				}
			}
		};

		SourceNode.prototype.setReady = function () {
			var i;
			if (!this.ready) {
				this.ready = true;
				this.resize();
				this.initialize();

				this.emit('ready');
				if (this.targets) {
					for (i = 0; i < this.targets.length; i++) {
						this.targets[i].setReady();
					}
				}

			}
		};

		SourceNode.prototype.render = function () {
			var media = this.source;

			if (!gl || !media && media !== 0 || !this.ready) {
				return;
			}

			if (!this.initialized) {
				this.initialize();
			}

			if (!this.allowRefresh) {
				return;
			}

			if (this.plugin && this.plugin.render &&
					(this.dirty || this.checkDirty && this.checkDirty()) &&
					this.plugin.render.call(this, gl, draw, rectangleModel, baseShader)) {

				this.dirty = false;
				this.emit('render');
			}
		};

		SourceNode.prototype.renderImageCanvas = function () {
			var media = this.source;

			if (!gl || !media || !this.ready) {
				return;
			}

			if (!this.initialized) {
				this.initialize();
			}

			if (!this.allowRefresh) {
				return;
			}

			if (this.dirty) {
				gl.bindTexture(gl.TEXTURE_2D, this.texture);
				gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.flip);
				gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
				try {
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, media);

					this.dirty = false;
					this.emit('render');
					return true;
				} catch (securityError) {
					if (securityError.code === window.DOMException.SECURITY_ERR) {
						this.allowRefresh = false;
						Seriously.logger.error('Unable to access cross-domain image');
					}
				}

				return false;
			}
		};

		SourceNode.prototype.destroy = function () {
			var i, key, item;

			if (this.plugin && this.plugin.destroy) {
				this.plugin.destroy.call(this);
			}

			if (gl && this.texture) {
				gl.deleteTexture(this.texture);
			}

			//targets
			while (this.targets.length) {
				item = this.targets.pop();
				if (item && item.removeSource) {
					item.removeSource(this);
				}
			}

			//remove self from master list of sources
			i = sources.indexOf(this);
			if (i >= 0) {
				sources.splice(i, 1);
			}

			i = allSourcesByHook[this.hook].indexOf(this);
			if (i >= 0) {
				allSourcesByHook[this.hook].splice(i, 1);
			}

			for (key in this) {
				if (this.hasOwnProperty(key) && key !== 'id') {
					delete this[key];
				}
			}

			Node.prototype.destroy.call(this);
		};

		//todo: implement render for array and typed array

		Target = function (targetNode) {
			var me = targetNode;

			//priveleged accessor methods
			Object.defineProperties(this, {
				source: {
					enumerable: true,
					configurable: true,
					get: function () {
						if (me.source) {
							return me.source.pub;
						}
					},
					set: function (value) {
						me.setSource(value);
					}
				},
				original: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.target;
					}
				},
				width: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.width;
					},
					set: function (value) {
						if (!isNaN(value) && value >0 && me.width !== value) {
							me.width = value;
							me.resize();
							me.setTransformDirty();
						}
					}
				},
				height: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.height;
					},
					set: function (value) {
						if (!isNaN(value) && value >0 && me.height !== value) {
							me.height = value;
							me.resize();
							me.setTransformDirty();
						}
					}
				},
				id: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.id;
					}
				}
			});

			this.render = function () {
				me.render();
			};

			this.readPixels = function (x, y, width, height, dest) {
				return me.readPixels(x, y, width, height, dest);
			};

			this.on = function (eventName, callback) {
				me.on(eventName, callback);
			};

			this.off = function (eventName, callback) {
				me.off(eventName, callback);
			};

			this.go = function (options) {
				me.go(options);
			};

			this.stop = function () {
				me.stop();
			};

			this.getTexture = function () {
				return me.frameBuffer.texture;
			};

			this.destroy = function () {
				var i,
					descriptor;

				me.destroy();

				for (i in this) {
					if (this.hasOwnProperty(i) && i !== 'isDestroyed' && i !== 'id') {
						descriptor = Object.getOwnPropertyDescriptor(this, i);
						if (descriptor.get || descriptor.set ||
								typeof this[i] !== 'function') {
							delete this[i];
						} else {
							this[i] = nop;
						}
					}
				}
			};

			this.inputs = function (name) {
				return {
					source: {
						type: 'image'
					}
				};
			};

			this.isDestroyed = function () {
				return me.isDestroyed;
			};

			this.isReady = function () {
				return me.ready;
			};
		};

		/*
			possible targets: canvas (2d or 3d), gl render buffer (must be same canvas)
		*/
		TargetNode = function (hook, target, options) {
			var opts,
				flip,
				width,
				height,
				that = this,
				matchedType = false,
				i, element, elements, context,
				debugContext,
				frameBuffer,
				targetList,
				triedWebGl = false,
				key;

			function targetPlugin(hook, target, options, force) {
				var plugin = seriousTargets[hook];
				if (plugin.definition) {
					plugin = plugin.definition.call(that, target, options, force);
					if (!plugin) {
						return null;
					}
					plugin = extend(extend({}, seriousTargets[hook]), plugin);
					that.hook = key;
					matchedType = true;
					that.plugin = plugin;
					that.compare = plugin.compare;
					if (plugin.target) {
						target = plugin.target;
					}
					if (plugin.gl && !that.gl) {
						that.gl = plugin.gl;
						if (!gl) {
							attachContext(plugin.gl);
						}
					}
					if (that.gl === gl) {
						that.model = rectangleModel;
						that.shader = baseShader;
					}
				}
				return plugin;
			}

			function compareTarget(target) {
				return that.target === target;
			}

			Node.call(this);

			if (hook && typeof hook !== 'string' || !target && target !== 0) {
				if (!options || typeof options !== 'object') {
					options = target;
				}
				target = hook;
			}

			opts = options || {};
			flip = opts.flip === undefined ? true : opts.flip
			width = parseInt(opts.width, 10);
			height = parseInt(opts.height, 10);
			debugContext = opts.debugContext;

			// forced target type?
			if (typeof hook === 'string' && seriousTargets[hook]) {
				targetPlugin(hook, target, opts, true);
			}

			this.renderToTexture = opts.renderToTexture;

			if (target instanceof WebGLFramebuffer) {
				frameBuffer = target;

				if (opts instanceof HTMLCanvasElement) {
					target = opts;
				} else if (opts instanceof WebGLRenderingContext) {
					target = opts.canvas;
				} else if (opts.canvas instanceof HTMLCanvasElement) {
					target = opts.canvas;
				} else if (opts.context instanceof WebGLRenderingContext) {
					target = opts.context.canvas;
				} else {
					//todo: search all canvases for matching contexts?
					throw new Error('Must provide a canvas with WebGLFramebuffer target');
				}
			}

			if (target instanceof HTMLElement && target.tagName === 'CANVAS') {
				width = target.width;
				height = target.height;

				//try to get a webgl context.
				if (!gl || gl.canvas !== target && opts.allowSecondaryWebGL) {
					triedWebGl = true;
					context = getWebGlContext(target, {
						alpha: true,
						premultipliedAlpha: false,
						preserveDrawingBuffer: true,
						stencil: true,
						debugContext: debugContext
					});
				}

				if (!context) {
					if (!opts.allowSecondaryWebGL && gl && gl.canvas !== target) {
						throw new Error('Only one WebGL target canvas allowed. Set allowSecondaryWebGL option to create secondary context.');
					}

					this.render = nop;
					Seriously.logger.log('Unable to create WebGL context.');
					//throw new Error('Unable to create WebGL context.');
				} else if (!gl || gl === context) {
					//this is our main WebGL canvas
					if (!primaryTarget) {
						primaryTarget = this;
					}
					if (!gl) {
						attachContext(context);
					}
					this.render = this.renderWebGL;

					/*
					Don't remember what this is for. Maybe we should remove it
					*/
					if (opts.renderToTexture) {
						if (gl) {
							this.frameBuffer = new FrameBuffer(gl, width, height, false);
						}
					} else {
						this.frameBuffer = {
							frameBuffer: frameBuffer || null
						};
					}
				} else {
					//set up alternative drawing method using ArrayBufferView
					this.gl = context;

					//this.pixels = new Uint8Array(width * height * 4);
					//todo: probably need another framebuffer for renderToTexture?
					//todo: handle lost context on secondary webgl
					this.frameBuffer = {
						frameBuffer: frameBuffer || null
					};
					this.shader = new ShaderProgram(this.gl, baseVertexShader, baseFragmentShader);
					this.model = buildRectangleModel.call(this, this.gl);
					this.pixels = null;

					this.texture = this.gl.createTexture();
					this.gl.bindTexture(gl.TEXTURE_2D, this.texture);
					this.gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
					this.gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
					this.gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
					this.gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

					this.render = this.renderSecondaryWebGL;
				}

				matchedType = true;
			}

			if (!matchedType) {
				for (key in seriousTargets) {
					if (seriousTargets.hasOwnProperty(key) && seriousTargets[key]) {
						if (targetPlugin(key, target, opts, false)) {
							break;
						}
					}
				}
			}

			if (!matchedType) {
				throw new Error('Unknown target type');
			}

			if (allTargets) {
				targetList = allTargets.get(target);
				if (targetList) {
					Seriously.logger.warn(
						'Target already in use by another instance',
						target,
						Object.keys(targetList).map(function (key) {
							return targetList[key];
						})
					);
				} else {
					targetList = {};
					allTargets.set(target, targetList);
				}
				targetList[seriously.id] = seriously;
			}

			this.target = target;
			this.transform = null;
			this.transformDirty = true;
			this.flip = flip;
			if (width) {
				this.width = width;
			}
			if (height) {
				this.height = height;
			}

			this.uniforms.resolution[0] = this.width;
			this.uniforms.resolution[1] = this.height;

			if (opts.auto !== undefined) {
				this.auto = opts.auto;
			} else {
				this.auto = auto;
			}
			this.frames = 0;

			this.pub = new Target(this);

			nodes.push(this);
			nodesById[this.id] = this;
			targets.push(this);
		};

		extend(TargetNode, Node);

		TargetNode.prototype.setSource = function (source) {
			var newSource;

			//todo: what if source is null/undefined/false

			newSource = findInputNode(source);

			//todo: check for cycles

			if (newSource !== this.source) {
				if (this.source) {
					this.source.removeTarget(this);
				}
				this.source = newSource;
				newSource.addTarget(this);

				if (newSource) {
					this.resize();
					if (newSource.ready) {
						this.setReady();
					} else {
						this.setUnready();
					}
				}

				this.setDirty();
			}
		};

		TargetNode.prototype.setDirty = function () {
			this.dirty = true;

			if (this.auto && !rafId) {
				rafId = requestAnimationFrame(renderDaemon);
			}
		};

		TargetNode.prototype.resize = function () {
			//if target is a canvas, reset size to canvas size
			if (this.target instanceof HTMLCanvasElement) {
				if (this.width !== this.target.width || this.height !== this.target.height) {
					this.target.width = this.width;
					this.target.height = this.height;
					this.uniforms.resolution[0] = this.width;
					this.uniforms.resolution[1] = this.height;
					this.emit('resize');
					this.setTransformDirty();
				}
			} else if (this.plugin && this.plugin.resize) {
				this.plugin.resize.call(this);
			}

			if (this.source &&
				(this.source.width !== this.width || this.source.height !== this.height)) {
				if (!this.transform) {
					this.transform = new Float32Array(16);
				}
			}
		};

		TargetNode.prototype.setTransformDirty = function () {
			this.transformDirty = true;
			this.setDirty();
		};

		TargetNode.prototype.go = function () {
			this.auto = true;
			this.setDirty();
		};

		TargetNode.prototype.stop = function () {
			this.auto = false;
		};

		TargetNode.prototype.render = function () {
			if (gl && this.plugin && this.plugin.render) {
				this.plugin.render.call(this, draw, baseShader, rectangleModel);
			}
		};

		TargetNode.prototype.renderWebGL = function () {
			var matrix, x, y;

			this.resize();

			if (gl && this.dirty && this.ready) {
				if (!this.source) {
					return;
				}

				this.source.render();

				this.uniforms.source = this.source.texture;

				if (this.source.width === this.width && this.source.height === this.height) {
					this.uniforms.transform = this.source.cumulativeMatrix || identity;
				} else if (this.transformDirty) {
					matrix = this.transform;
					mat4.copy(matrix, this.source.cumulativeMatrix || identity);
					x = this.source.width / this.width;
					y = this.source.height / this.height;
					matrix[0] *= x;
					matrix[1] *= x;
					matrix[2] *= x;
					matrix[3] *= x;
					matrix[4] *= y;
					matrix[5] *= y;
					matrix[6] *= y;
					matrix[7] *= y;
					this.uniforms.transform = matrix;
					this.transformDirty = false;
				}

				draw(baseShader, rectangleModel, this.uniforms, this.frameBuffer.frameBuffer, this);

				this.emit('render');
				this.dirty = false;
			}
		};

		TargetNode.prototype.renderSecondaryWebGL = function () {
			var sourceWidth,
				sourceHeight,
				matrix,
				x,
				y;

			if (this.dirty && this.ready && this.source) {
				this.emit('render');
				this.source.render(true);

				sourceWidth = this.source.width;
				sourceHeight = this.source.height;

				if (!this.pixels || this.pixels.length !== sourceWidth * sourceHeight * 4) {
					this.pixels = new Uint8Array(sourceWidth * sourceHeight * 4);
				}

				this.source.readPixels(0, 0, sourceWidth, sourceHeight, this.pixels);

				this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, sourceWidth, sourceHeight, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.pixels);

				if (sourceWidth === this.width && sourceHeight === this.height) {
					this.uniforms.transform = identity;
				} else if (this.transformDirty) {
					matrix = this.transform;
					mat4.copy(matrix, identity);
					x = this.source.width / this.width;
					y = this.source.height / this.height;
					matrix[0] *= x;
					matrix[1] *= x;
					matrix[2] *= x;
					matrix[3] *= x;
					matrix[4] *= y;
					matrix[5] *= y;
					matrix[6] *= y;
					matrix[7] *= y;
					this.uniforms.transform = matrix;
					this.transformDirty = false;
				}

				this.uniforms.source = this.texture;
				draw(this.shader, this.model, this.uniforms, null, this);

				this.dirty = false;
			}
		};

		TargetNode.prototype.removeSource = function (source) {
			if (this.source === source || this.source === source.pub) {
				this.source = null;
			}
		};

		TargetNode.prototype.destroy = function () {
			var i,
				targetList;

			//source
			if (this.source && this.source.removeTarget) {
				this.source.removeTarget(this);
			}

			if (allTargets) {
				targetList = allTargets.get(this.target);
				delete targetList[seriously.id];
				if (!Object.keys(targetList).length) {
					allTargets.delete(this.target);
				}
			}

			if (this.plugin && this.plugin.destroy) {
				this.plugin.destroy.call(this);
			}

			delete this.source;
			delete this.target;
			delete this.pub;
			delete this.uniforms;
			delete this.pixels;
			delete this.auto;

			//remove self from master list of targets
			i = targets.indexOf(this);
			if (i >= 0) {
				targets.splice(i, 1);
			}

			Node.prototype.destroy.call(this);

			//clear out context so we can start over
			if (this === primaryTarget) {
				glCanvas.removeEventListener('webglcontextrestored', restoreContext, false);
				destroyContext();
				primaryTarget = null;
			}
		};

		Transform = function (transformNode) {
			var me = transformNode,
				self = this,
				key;

			function setInput(inputName, def, input) {
				var inputKey, lookup, value;

				lookup = me.inputElements[inputName];

				//todo: there is some duplicate code with Effect here. Consolidate.
				if (typeof input === 'string' && isNaN(input)) {
					if (def.type === 'enum') {
						if (!def.options.hasOwnProperty(input)) {
							input = getElement(input, ['select']);
						}
					} else if (def.type === 'number' || def.type === 'boolean') {
						input = getElement(input, ['input', 'select']);
					} else if (def.type === 'image') {
						input = getElement(input, ['canvas', 'img', 'video']);
					}
				}

				if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
					value = input.value;

					if (lookup && lookup.element !== input) {
						lookup.element.removeEventListener('change', lookup.listener, true);
						lookup.element.removeEventListener('input', lookup.listener, true);
						delete me.inputElements[inputName];
						lookup = null;
					}

					if (!lookup) {
						lookup = {
							element: input,
							listener: (function (element) {
								return function () {
									var oldValue, newValue;

									if (input.type === 'checkbox') {
										//special case for check box
										oldValue = input.checked;
									} else {
										oldValue = element.value;
									}
									newValue = me.setInput(inputName, oldValue);

									//special case for color type
									if (input.type === 'color') {
										newValue = colorArrayToHex(newValue);
									}

									//if input validator changes our value, update HTML Element
									//todo: make this optional...somehow
									if (newValue !== oldValue) {
										element.value = newValue;
									}
								};
							}(input))
						};

						me.inputElements[inputName] = lookup;
						if (input.type === 'range') {
							input.addEventListener('input', lookup.listener, true);
							input.addEventListener('change', lookup.listener, true);
						} else {
							input.addEventListener('change', lookup.listener, true);
						}
					}

					if (lookup && input.type === 'checkbox') {
						value = input.checked;
					}
				} else {
					if (lookup) {
						lookup.element.removeEventListener('change', lookup.listener, true);
						lookup.element.removeEventListener('input', lookup.listener, true);
						delete me.inputElements[inputName];
					}
					value = input;
				}

				me.setInput(inputName, value);
			}

			function setProperty(name, def) {
				// todo: validate value passed to 'set'
				Object.defineProperty(self, name, {
					configurable: true,
					enumerable: true,
					get: function () {
						return def.get.call(me);
					},
					set: function (val) {
						setInput(name, def, val);
					}
				});
			}

			function makeMethod(method) {
				return function () {
					if (method.apply(me, arguments)) {
						me.setTransformDirty();
					}
				};
			}

			//priveleged accessor methods
			Object.defineProperties(this, {
				transform: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.hook;
					}
				},
				title: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.plugin.title || me.hook;
					}
				},
				width: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.width;
					}
				},
				height: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.height;
					}
				},
				id: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.id;
					}
				},
				source: {
					enumerable: true,
					configurable: true,
					get: function () {
						return me.source && me.source.pub;
					},
					set: function (source) {
						me.setSource(source);
					}
				}
			});

			// attach methods
			for (key in me.methods) {
				if (me.methods.hasOwnProperty(key)) {
					this[key] = makeMethod(me.methods[key].bind(me));
				}
			}

			for (key in me.inputs) {
				if (me.inputs.hasOwnProperty(key)) {
					setProperty(key, me.inputs[key]);
				}
			}

			this.update = function () {
				me.setDirty();
			};

			this.inputs = function (name) {
				var result,
					input,
					inputs,
					i,
					key;

				inputs = me.plugin.inputs;

				/*
				Only reports setter/getter inputs, not methods
				*/

				if (name) {
					input = inputs[name];
					if (!input || input.method) {
						return null;
					}

					result = {
						type: input.type,
						defaultValue: input.defaultValue,
						title: input.title || name
					};

					if (input.type === 'number') {
						result.min = input.min;
						result.max = input.max;
						result.step = input.step;
					} else if (input.type === 'enum') {
						//make a copy
						result.options = extend({}, input.options);
					} else if (input.type === 'vector') {
						result.dimensions = input.dimensions;
					}

					if (input.description) {
						result.description = input.description;
					}

					return result;
				}

				result = {};
				for (key in inputs) {
					if (inputs.hasOwnProperty(key) && !inputs[key].method) {
						result[key] = this.inputs(key);
					}
				}
				return result;
			};

			this.alias = function (inputName, aliasName) {
				me.alias(inputName, aliasName);
				return this;
			};

			this.on = function (eventName, callback) {
				me.on(eventName, callback);
			};

			this.off = function (eventName, callback) {
				me.off(eventName, callback);
			};

			this.destroy = function () {
				var i,
					descriptor;

				me.destroy();

				for (i in this) {
					if (this.hasOwnProperty(i) && i !== 'isDestroyed' && i !== 'id') {
						//todo: probably can simplify this if the only setter/getter is id
						descriptor = Object.getOwnPropertyDescriptor(this, i);
						if (descriptor.get || descriptor.set ||
								typeof this[i] !== 'function') {
							delete this[i];
						} else {
							this[i] = nop;
						}
					}
				}
			};

			this.isDestroyed = function () {
				return me.isDestroyed;
			};

			this.isReady = function () {
				return me.ready;
			};
		};

		TransformNode = function (hook, options) {
			var key,
				input,
				initialValue,
				defaultValue,
				defaults;

			this.matrix = new Float32Array(16);
			this.cumulativeMatrix = new Float32Array(16);

			this.ready = false;
			this.width = 1;
			this.height = 1;

			this.seriously = seriously;

			this.transformRef = seriousTransforms[hook];
			this.hook = hook;
			this.id = nodeId;
			nodeId++;

			this.options = options;
			this.sources = null;
			this.targets = [];
			this.inputElements = {};
			this.inputs = {};
			this.methods = {};
			this.listeners = {};

			this.texture = null;
			this.frameBuffer = null;
			this.uniforms = null;

			this.dirty = true;
			this.transformDirty = true;
			this.renderDirty = false;
			this.isDestroyed = false;
			this.transformed = false;

			this.plugin = extend({}, this.transformRef);
			if (this.transformRef.definition) {
				extend(this.plugin, this.transformRef.definition.call(this, options));
			}

			// set up inputs and methods
			for (key in this.plugin.inputs) {
				if (this.plugin.inputs.hasOwnProperty(key)) {
					input = this.plugin.inputs[key];

					if (input.method && typeof input.method === 'function') {
						this.methods[key] = input.method;
					} else if (typeof input.set === 'function' && typeof input.get === 'function') {
						this.inputs[key] = input;
					}
				}
			}
			validateInputSpecs(this.plugin);

			// set default value for all inputs (no defaults for methods)
			defaults = defaultInputs[hook];
			for (key in this.plugin.inputs) {
				if (this.plugin.inputs.hasOwnProperty(key)) {
					input = this.plugin.inputs[key];

					if (typeof input.set === 'function' && typeof input.get === 'function' &&
							typeof input.method !== 'function') {

						initialValue = input.get.call(this);
						defaultValue = input.defaultValue === undefined ? initialValue : input.defaultValue;
						defaultValue = input.validate.call(this, defaultValue, input, initialValue);
						if (defaults && defaults[key] !== undefined) {
							defaultValue = input.validate.call(this, defaults[key], input, input.defaultValue, defaultValue);
							defaults[key] = defaultValue;
						}
						if (defaultValue !== initialValue) {
							input.set.call(this, defaultValue);
						}
					}
				}
			}

			nodes.push(this);
			nodesById[this.id] = this;

			this.pub = new Transform(this);

			transforms.push(this);

			allTransformsByHook[hook].push(this);
		};

		TransformNode.prototype.setDirty = function () {
			this.renderDirty = true;
			Node.prototype.setDirty.call(this);
		};

		TransformNode.prototype.setTransformDirty = function () {
			var i,
				target;
			this.transformDirty = true;
			this.dirty = true;
			this.renderDirty = true;
			for (i = 0; i < this.targets.length; i++) {
				target = this.targets[i];
				if (target.setTransformDirty) {
					target.setTransformDirty();
				} else {
					target.setDirty();
				}
			}
		};

		TransformNode.prototype.resize = function () {
			var i;

			Node.prototype.resize.call(this);

			if (this.plugin.resize) {
				this.plugin.resize.call(this);
			}

			for (i = 0; i < this.targets.length; i++) {
				this.targets[i].resize();
			}

			this.setTransformDirty();
		};

		TransformNode.prototype.setSource = function (source) {
			var newSource;

			//todo: what if source is null/undefined/false

			newSource = findInputNode(source);

			if (newSource === this.source) {
				return;
			}

			if (traceSources(newSource, this)) {
				throw new Error('Attempt to make cyclical connection.');
			}

			if (this.source) {
				this.source.removeTarget(this);
			}
			this.source = newSource;
			newSource.addTarget(this);

			if (newSource && newSource.ready) {
				this.setReady();
			} else {
				this.setUnready();
			}
			this.resize();
		};

		TransformNode.prototype.addTarget = function (target) {
			var i;
			for (i = 0; i < this.targets.length; i++) {
				if (this.targets[i] === target) {
					return;
				}
			}

			this.targets.push(target);
		};

		TransformNode.prototype.removeTarget = function (target) {
			var i = this.targets && this.targets.indexOf(target);
			if (i >= 0) {
				this.targets.splice(i, 1);
			}

			if (this.targets && this.targets.length) {
				this.resize();
			}
		};

		TransformNode.prototype.setInput = function (name, value) {
			var input,
				defaultValue,
				previous;

			if (this.plugin.inputs.hasOwnProperty(name)) {
				input = this.plugin.inputs[name];

				if (defaultInputs[this.hook] && defaultInputs[this.hook][name] !== undefined) {
					defaultValue = defaultInputs[this.hook][name];
				} else {
					defaultValue = input.defaultValue;
				}

				previous = input.get.call(this);
				if (defaultValue === undefined) {
					defaultValue = previous;
				}
				value = input.validate.call(this, value, input, defaultValue, previous);

				if (input.set.call(this, value)) {
					this.setTransformDirty();
				}

				return input.get.call(this);
			}
		};

		TransformNode.prototype.alias = function (inputName, aliasName) {
			var me = this,
				input,
				def;

			if (reservedNames.indexOf(aliasName) >= 0) {
				throw new Error('\'' + aliasName + '\' is a reserved name and cannot be used as an alias.');
			}

			if (this.plugin.inputs.hasOwnProperty(inputName)) {
				if (!aliasName) {
					aliasName = inputName;
				}

				seriously.removeAlias(aliasName);

				input = this.inputs[inputName];
				if (input) {
					def = me.inputs[inputName];
					Object.defineProperty(seriously, aliasName, {
						configurable: true,
						enumerable: true,
						get: function () {
							return def.get.call(me);
						},
						set: function (val) {
							if (def.set.call(me, val)) {
								me.setTransformDirty();
							}
						}
					});
				} else {
					input = this.methods[inputName];
					if (input) {
						def = input;
						seriously[aliasName] = function () {
							if (def.apply(me, arguments)) {
								me.setTransformDirty();
							}
						};
					}
				}

				if (input) {
					aliases[aliasName] = {
						node: this,
						input: inputName
					};
				}
			}

			return this;
		};

		TransformNode.prototype.render = function (renderTransform) {
			if (!this.source) {
				if (this.transformDirty) {
					mat4.copy(this.cumulativeMatrix, this.matrix);
					this.transformDirty = false;
				}
				this.texture = null;
				this.dirty = false;

				return;
			}

			this.source.render();

			if (this.transformDirty) {
				if (this.transformed) {
					//use this.matrix
					if (this.source.cumulativeMatrix) {
						mat4.multiply(this.cumulativeMatrix, this.matrix, this.source.cumulativeMatrix);
					} else {
						mat4.copy(this.cumulativeMatrix, this.matrix);
					}
				} else {
					//copy source.cumulativeMatrix
					mat4.copy(this.cumulativeMatrix, this.source.cumulativeMatrix || identity);
				}

				this.transformDirty = false;
			}

			if (renderTransform && gl) {
				if (this.renderDirty) {
					if (!this.frameBuffer) {
						this.uniforms = {
							resolution: [this.width, this.height]
						};
						this.frameBuffer = new FrameBuffer(gl, this.width, this.height);
					}

					this.uniforms.source = this.source.texture;
					this.uniforms.transform = this.cumulativeMatrix || identity;
					draw(baseShader, rectangleModel, this.uniforms, this.frameBuffer.frameBuffer, this);

					this.renderDirty = false;
				}
				this.texture = this.frameBuffer.texture;
			} else if (this.source) {
				this.texture = this.source.texture;
			} else {
				this.texture = null;
			}

			this.dirty = false;

			return this.texture;
		};

		TransformNode.prototype.readPixels = function (x, y, width, height, dest) {
			var nodeGl = this.gl || gl;

			if (!gl) {
				//todo: is this the best approach?
				throw new Error('Cannot read pixels until a canvas is connected');
			}

			//todo: check on x, y, width, height
			this.render(true);

			if (dest === undefined) {
				dest = new Uint8Array(width * height * 4);
			} else if (!dest instanceof Uint8Array) {
				throw new Error('Incompatible array type');
			}

			nodeGl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer.frameBuffer);
			nodeGl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, dest);

			return dest;
		};

		TransformNode.prototype.destroy = function () {
			var i, key, item, hook = this.hook;

			//let effect destroy itself
			if (this.plugin.destroy && typeof this.plugin.destroy === 'function') {
				this.plugin.destroy.call(this);
			}
			delete this.effect;

			if (this.frameBuffer) {
				this.frameBuffer.destroy();
				delete this.frameBuffer;
				delete this.texture;
			}

			//stop watching any input elements
			for (i in this.inputElements) {
				if (this.inputElements.hasOwnProperty(i)) {
					item = this.inputElements[i];
					item.element.removeEventListener('change', item.listener, true);
					item.element.removeEventListener('input', item.listener, true);
				}
			}

			//sources
			if (this.source) {
				this.source.removeTarget(this);
			}

			//targets
			while (this.targets.length) {
				item = this.targets.pop();
				if (item && item.removeSource) {
					item.removeSource(this);
				}
			}

			for (key in this) {
				if (this.hasOwnProperty(key) && key !== 'id') {
					delete this[key];
				}
			}

			//remove any aliases
			for (key in aliases) {
				if (aliases.hasOwnProperty(key)) {
					item = aliases[key];
					if (item.node === this) {
						seriously.removeAlias(key);
					}
				}
			}

			//remove self from master list of effects
			i = transforms.indexOf(this);
			if (i >= 0) {
				transforms.splice(i, 1);
			}

			i = allTransformsByHook[hook].indexOf(this);
			if (i >= 0) {
				allTransformsByHook[hook].splice(i, 1);
			}

			Node.prototype.destroy.call(this);
		};

		TransformNode.prototype.setReady = Node.prototype.setReady;
		TransformNode.prototype.setUnready = Node.prototype.setUnready;
		TransformNode.prototype.on = Node.prototype.on;
		TransformNode.prototype.off = Node.prototype.off;
		TransformNode.prototype.emit = Node.prototype.emit;

		/*
		Initialize Seriously object based on options
		*/

		if (options instanceof HTMLCanvasElement) {
			options = {
				canvas: options
			};
		} else {
			options = options || {};
		}

		if (options.canvas) {
		}

		/*
		priveleged methods
		*/
		this.effect = function (hook, options) {
			if (!seriousEffects[hook]) {
				throw new Error('Unknown effect: ' + hook);
			}

			var effectNode = new EffectNode(hook, options);
			return effectNode.pub;
		};

		this.source = function (hook, source, options) {
			var sourceNode = findInputNode(hook, source, options);
			return sourceNode.pub;
		};

		this.transform = function (hook, opts) {
			var transformNode;

			if (typeof hook !== 'string') {
				opts = hook;
				hook = false;
			}

			if (hook) {
				if (!seriousTransforms[hook]) {
					throw new Error('Unknown transform: ' + hook);
				}
			} else {
				hook = options && options.defaultTransform || '2d';
				if (!seriousTransforms[hook]) {
					throw new Error('No transform specified');
				}
			}

			transformNode = new TransformNode(hook, opts);
			return transformNode.pub;
		};

		this.target = function (hook, target, options) {
			var targetNode,
				element,
				hook,
				i;

			if (hook && typeof hook === 'string' && !seriousTargets[hook]) {
				element = document.querySelector(hook);
			}

			if (typeof hook !== 'string' || !target && target !== 0 || element) {
				if (!options || typeof options !== 'object') {
					options = target;
				}
				target = element || hook;
				hook = null;
			}

			if (typeof target === 'string' && isNaN(target)) {
				target = document.querySelector(target);
			}

			for (i = 0; i < targets.length; i++) {
				targetNode = targets[i];
				if ((!hook || hook === targetNode.hook) &&
						(targetNode.target === target || targetNode.compare && targetNode.compare(target, options))) {

					return targetNode.pub;
				}
			}

			targetNode = new TargetNode(hook, target, options);

			return targetNode.pub;
		};

		this.aliases = function () {
			return Object.keys(aliases);
		};

		this.removeAlias = function (name) {
			if (aliases[name]) {
				delete this[name];
				delete aliases[name];
			}
		};

		this.defaults = function (hook, options) {
			var key;

			if (!hook) {
				if (hook === null) {
					for (key in defaultInputs) {
						if (defaultInputs.hasOwnProperty(key)) {
							delete defaultInputs[key];
						}
					}
				}
				return;
			}

			if (typeof hook === 'object') {
				for (key in hook) {
					if (hook.hasOwnProperty(key)) {
						this.defaults(key, hook[key]);
					}
				}

				return;
			}

			if (options === null) {
				delete defaultInputs[hook];
			} else if (typeof options === 'object') {
				defaultInputs[hook] = extend({}, options);
			}
		};

		this.go = function (pre, post) {
			var i;

			if (typeof pre === 'function' && preCallbacks.indexOf(pre) < 0) {
				preCallbacks.push(pre);
			}

			if (typeof post === 'function' && postCallbacks.indexOf(post) < 0) {
				postCallbacks.push(post);
			}

			auto = true;
			for (i = 0; i < targets.length; i++) {
				targets[i].go();
			}

			if (!rafId && (preCallbacks.length || postCallbacks.length)) {
				renderDaemon();
			}
		};

		this.stop = function () {
			preCallbacks.length = 0;
			postCallbacks.length = 0;
			cancelAnimFrame(rafId);
			rafId = 0;
		};

		this.render = function () {
			var i;
			for (i = 0; i < targets.length; i++) {
				targets[i].render(options);
			}
		};

		this.destroy = function () {
			var i,
				node,
				descriptor;

			while (nodes.length) {
				node = nodes.shift();
				node.destroy();
			}

			for (i in this) {
				if (this.hasOwnProperty(i) && i !== 'isDestroyed' && i !== 'id') {
					descriptor = Object.getOwnPropertyDescriptor(this, i);
					if (descriptor.get || descriptor.set ||
							typeof this[i] !== 'function') {
						delete this[i];
					} else {
						this[i] = nop;
					}
				}
			}

			baseFragmentShader = null;
			baseVertexShader = null;
			seriously = null;

			//todo: do we really need to allocate new arrays here?
			sources = [];
			targets = [];
			effects = [];
			nodes = [];

			preCallbacks.length = 0;
			postCallbacks.length = 0;
			cancelAnimFrame(rafId);
			rafId = 0;

			isDestroyed = true;
		};

		this.isDestroyed = function () {
			return isDestroyed;
		};

		this.incompatible = function (hook) {
			var key,
				plugin,
				failure = false;

			failure = Seriously.incompatible(hook);

			if (failure) {
				return failure;
			}

			if (!hook) {
				for (key in allEffectsByHook) {
					if (allEffectsByHook.hasOwnProperty(key) && allEffectsByHook[key].length) {
						plugin = seriousEffects[key];
						if (plugin && typeof plugin.compatible === 'function' &&
								!plugin.compatible.call(this)) {
							return 'plugin-' + key;
						}
					}
				}

				for (key in allSourcesByHook) {
					if (allSourcesByHook.hasOwnProperty(key) && allSourcesByHook[key].length) {
						plugin = seriousSources[key];
						if (plugin && typeof plugin.compatible === 'function' &&
								!plugin.compatible.call(this)) {
							return 'source-' + key;
						}
					}
				}
			}

			return false;
		};

		/*
		Informational utility methods
		*/

		this.isNode = function (candidate) {
			var node;
			if (candidate) {
				node = nodesById[candidate.id];
				if (node && !node.isDestroyed) {
					return true;
				}
			}
			return false;
		};

		this.isSource = function (candidate) {
			return this.isNode(candidate) && candidate instanceof Source;
		};

		this.isEffect = function (candidate) {
			return this.isNode(candidate) && candidate instanceof Effect;
		};

		this.isTransform = function (candidate) {
			return this.isNode(candidate) && candidate instanceof Transform;
		};

		this.isTarget = function (candidate) {
			return this.isNode(candidate) && candidate instanceof Target;
		};

		Object.defineProperties(this, {
			id: {
				enumerable: true,
				configurable: true,
				get: function () {
					return id;
				}
			}
		});

		//todo: load, save, find

		baseVertexShader = [
			'precision mediump float;',

			'attribute vec4 position;',
			'attribute vec2 texCoord;',

			'uniform vec2 resolution;',
			'uniform mat4 transform;',

			'varying vec2 vTexCoord;',

			'void main(void) {',
			// first convert to screen space
			'	vec4 screenPosition = vec4(position.xy * resolution / 2.0, position.z, position.w);',
			'	screenPosition = transform * screenPosition;',

			// convert back to OpenGL coords
			'	gl_Position.xy = screenPosition.xy * 2.0 / resolution;',
			'	gl_Position.z = screenPosition.z * 2.0 / (resolution.x / resolution.y);',
			'	gl_Position.w = screenPosition.w;',
			'	vTexCoord = texCoord;',
			'}\n'
		].join('\n');

		baseFragmentShader = [
			'precision mediump float;',

			'varying vec2 vTexCoord;',

			'uniform sampler2D source;',

			'void main(void) {',
			/*
			'	if (any(lessThan(vTexCoord, vec2(0.0))) || any(greaterThanEqual(vTexCoord, vec2(1.0)))) {',
			'		gl_FragColor = vec4(0.0);',
			'	} else {',
			*/
			'		gl_FragColor = texture2D(source, vTexCoord);',
			//'	}',
			'}'
		].join('\n');

		this.defaults(options.defaults);
	}

	Seriously.incompatible = function (hook) {
		var canvas, gl, plugin;

		if (incompatibility === undefined) {
			canvas = document.createElement('canvas');
			if (!canvas || !canvas.getContext) {
				incompatibility = 'canvas';
			} else if (!window.WebGLRenderingContext) {
				incompatibility = 'webgl';
			} else {
				gl = getTestContext();
				if (!gl) {
					incompatibility = 'context';
				}
			}
		}

		if (incompatibility) {
			return incompatibility;
		}

		if (hook) {
			plugin = seriousEffects[hook];
			if (plugin && typeof plugin.compatible === 'function' &&
				!plugin.compatible(gl)) {

				return 'plugin-' + hook;
			}

			plugin = seriousSources[hook];
			if (plugin && typeof plugin.compatible === 'function' &&
				!plugin.compatible(gl)) {

				return 'source-' + hook;
			}
		}

		return false;
	};

	Seriously.plugin = function (hook, definition, meta) {
		var effect;

		if (seriousEffects[hook]) {
			Seriously.logger.warn('Effect [' + hook + '] already loaded');
			return;
		}

		if (meta === undefined && typeof definition === 'object') {
			meta = definition;
		}

		if (!meta) {
			return;
		}

		effect = extend({}, meta);

		if (typeof definition === 'function') {
			effect.definition = definition;
		}

		effect.reserved = reservedEffectProperties;

		if (effect.inputs) {
			validateInputSpecs(effect);
		}

		if (!effect.title) {
			effect.title = hook;
		}

		/*
		if (typeof effect.requires !== 'function') {
			effect.requires = false;
		}
		*/

		seriousEffects[hook] = effect;
		allEffectsByHook[hook] = [];

		return effect;
	};

	Seriously.removePlugin = function (hook) {
		var all, effect, plugin;

		if (!hook) {
			return this;
		}

		plugin = seriousEffects[hook];

		if (!plugin) {
			return this;
		}

		all = allEffectsByHook[hook];
		if (all) {
			while (all.length) {
				effect = all.shift();
				effect.destroy();
			}
			delete allEffectsByHook[hook];
		}

		delete seriousEffects[hook];

		return this;
	};

	Seriously.source = function (hook, definition, meta) {
		var source;

		if (seriousSources[hook]) {
			Seriously.logger.warn('Source [' + hook + '] already loaded');
			return;
		}

		if (meta === undefined && typeof definition === 'object') {
			meta = definition;
		}

		if (!meta && !definition) {
			return;
		}

		source = extend({}, meta);

		if (typeof definition === 'function') {
			source.definition = definition;
		}

		if (!source.title) {
			source.title = hook;
		}


		seriousSources[hook] = source;
		allSourcesByHook[hook] = [];

		return source;
	};

	Seriously.removeSource = function (hook) {
		var all, source, plugin;

		if (!hook) {
			return this;
		}

		plugin = seriousSources[hook];

		if (!plugin) {
			return this;
		}

		all = allSourcesByHook[hook];
		if (all) {
			while (all.length) {
				source = all.shift();
				source.destroy();
			}
			delete allSourcesByHook[hook];
		}

		delete seriousSources[hook];

		return this;
	};

	Seriously.transform = function (hook, definition, meta) {
		var transform;

		if (seriousTransforms[hook]) {
			Seriously.logger.warn('Transform [' + hook + '] already loaded');
			return;
		}

		if (meta === undefined && typeof definition === 'object') {
			meta = definition;
		}

		if (!meta && !definition) {
			return;
		}

		transform = extend({}, meta);

		if (typeof definition === 'function') {
			transform.definition = definition;
		}

		transform.reserved = reservedTransformProperties;

		//todo: validate method definitions
		if (transform.inputs) {
			validateInputSpecs(transform);
		}

		if (!transform.title) {
			transform.title = hook;
		}

		seriousTransforms[hook] = transform;
		allTransformsByHook[hook] = [];

		return transform;
	};

	Seriously.removeTransform = function (hook) {
		var all, transform, plugin;

		if (!hook) {
			return this;
		}

		plugin = seriousTransforms[hook];

		if (!plugin) {
			return this;
		}

		all = allTransformsByHook[hook];
		if (all) {
			while (all.length) {
				transform = all.shift();
				transform.destroy();
			}
			delete allTransformsByHook[hook];
		}

		delete seriousTransforms[hook];

		return this;
	};

	Seriously.target = function (hook, definition, meta) {
		var target;

		if (seriousTargets[hook]) {
			Seriously.logger.warn('Target [' + hook + '] already loaded');
			return;
		}

		if (meta === undefined && typeof definition === 'object') {
			meta = definition;
		}

		if (!meta && !definition) {
			return;
		}

		target = extend({}, meta);

		if (typeof definition === 'function') {
			target.definition = definition;
		}

		if (!target.title) {
			target.title = hook;
		}


		seriousTargets[hook] = target;
		allTargetsByHook[hook] = [];

		return target;
	};

	Seriously.removeTarget = function (hook) {
		var all, target, plugin;

		if (!hook) {
			return this;
		}

		plugin = seriousTargets[hook];

		if (!plugin) {
			return this;
		}

		all = allTargetsByHook[hook];
		if (all) {
			while (all.length) {
				target = all.shift();
				target.destroy();
			}
			delete allTargetsByHook[hook];
		}

		delete seriousTargets[hook];

		return this;
	};

	//todo: validators should not allocate new objects/arrays if input is valid
	Seriously.inputValidators = {
		color: function (value, input, defaultValue, oldValue) {
			var s, a, i, computed, bg;

			a = oldValue || [];

			if (typeof value === 'string') {
				//todo: support percentages, decimals
				s = (/^(rgb|hsl)a?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*(\d+(\.\d*)?)\s*)?\)/i).exec(value);
				if (s && s.length) {
					if (s.length < 3) {
						a[0] = a[1] = a[2] = a[3] = 0;
						return a;
					}

					a[3] = 1;
					for (i = 0; i < 3; i++) {
						a[i] = parseFloat(s[i+2]) / 255;
					}
					if (!isNaN(s[6])) {
						a[3] = parseFloat(s[6]);
					}
					if (s[1].toLowerCase() === 'hsl') {
						return hslToRgb(a[0], a[1], a[2], a[3], a);
					}
					return a;
				}

				s = (/^#(([0-9a-fA-F]{3,8}))/).exec(value);
				if (s && s.length) {
					s = s[1];
					if (s.length === 3) {
						a[0] = parseInt(s[0], 16) / 15;
						a[1] = parseInt(s[1], 16) / 15;
						a[2] = parseInt(s[2], 16) / 15;
						a[3] = 1;
					} else if (s.length === 4) {
						a[0] = parseInt(s[0], 16) / 15;
						a[1] = parseInt(s[1], 16) / 15;
						a[2] = parseInt(s[2], 16) / 15;
						a[3] = parseInt(s[3], 16) / 15;
					} else if (s.length === 6) {
						a[0] = parseInt(s.substr(0, 2), 16) / 255;
						a[1] = parseInt(s.substr(2, 2), 16) / 255;
						a[2] = parseInt(s.substr(4, 2), 16) / 255;
						a[3] = 1;
					} else if (s.length === 8) {
						a[0] = parseInt(s.substr(0, 2), 16) / 255;
						a[1] = parseInt(s.substr(2, 2), 16) / 255;
						a[2] = parseInt(s.substr(4, 2), 16) / 255;
						a[3] = parseInt(s.substr(6, 2), 16) / 255;
					} else {
						a[0] = a[1] = a[2] = a[3] = 0;
					}
					return a;
				}

				s = colorNames[value.toLowerCase()];
				if (s) {
					for (i = 0; i < 4; i++) {
						a[i] = s[i];
					}
					return a;
				}

				if (!colorElement) {
					colorElement = document.createElement('a');
				}
				colorElement.style.backgroundColor = '';
				colorElement.style.backgroundColor = value;
				computed = window.getComputedStyle(colorElement);
				bg = computed.getPropertyValue('background-color') ||
					computed.getPropertyValue('backgroundColor') ||
					colorElement.style.backgroundColor;
				if (bg && bg !== value) {
					return Seriously.inputValidators.color(bg, input, oldValue);
				}

				a[0] = a[1] = a[2] = a[3] = 0;
				return a;
			}

			if (isArrayLike(value)) {
				a = value;
				if (a.length < 3) {
					a[0] = a[1] = a[2] = a[3] = 0;
					return a;
				}
				for (i = 0; i < 3; i++) {
					if (isNaN(a[i])) {
						a[0] = a[1] = a[2] = a[3] = 0;
						return a;
					}
				}
				if (a.length < 4) {
					a.push(1);
				}
				return a;
			}

			if (typeof value === 'number') {
				a[0] = a[1] = a[2] = value;
				a[3] = 1;
				return a;
			}

			if (typeof value === 'object') {
				for (i = 0; i < 4; i++) {
					s = colorFields[i];
					if (value[s] === null || isNaN(value[s])) {
						a[i] = i === 3 ? 1 : 0;
					} else {
						a[i] = value[s];
					}
				}
				return a;
			}

			a[0] = a[1] = a[2] = a[3] = 0;
			return a;
		},
		number: function (value, input, defaultValue) {
			if (isNaN(value)) {
				return defaultValue || 0;
			}

			value = parseFloat(value);

			if (value < input.min) {
				return input.min;
			}

			if (value > input.max) {
				return input.max;
			}

			if (input.step) {
				return Math.round(value / input.step) * input.step;
			}

			return value;
		},
		'enum': function (value, input, defaultValue) {
			var options = input.options || [],
				i,
				opt;

			if (typeof value === 'string') {
				value = value.toLowerCase();
			} else if (typeof value === 'number') {
				value = value.toString();
			} else if (!value) {
				value = '';
			}

			if (options.hasOwnProperty(value)) {
				return value;
			}

			return defaultValue || '';
		},
		vector: function (value, input, defaultValue, oldValue) {
			var a, i, s, n = input.dimensions || 4;

			a = oldValue || [];
			if (isArrayLike(value)) {
				for (i = 0; i < n; i++) {
					a[i] = value[i] || 0;
				}
				return a;
			}

			if (typeof value === 'object') {
				for (i = 0; i < n; i++) {
					s = vectorFields[i];
					if (value[s] === undefined) {
						s = colorFields[i];
					}
					a[i] = value[s] || 0;
				}
				return a;
			}

			value = parseFloat(value) || 0;
			for (i = 0; i < n; i++) {
				a[i] = value;
			}

			return a;
		},
		'boolean': function (value) {
			if (!value) {
				return false;
			}

			if (value && value.toLowerCase && value.toLowerCase() === 'false') {
				return false;
			}

			return true;
		},
		'string': function (value) {
			if (typeof value === 'string') {
				return value;
			}

			if (value !== 0 && !value) {
				return '';
			}

			if (value.toString) {
				return value.toString();
			}

			return String(value);
		}
		//todo: date/time
	};

	Seriously.prototype.effects = Seriously.effects = function () {
		var name,
			effect,
			manifest,
			effects = {},
			input,
			i;

		for (name in seriousEffects) {
			if (seriousEffects.hasOwnProperty(name)) {
				effect = seriousEffects[name];
				manifest = {
					title: effect.title || name,
					description: effect.description || '',
					inputs: {}
				};

				for (i in effect.inputs) {
					if (effect.inputs.hasOwnProperty(i)) {
						input = effect.inputs[i];
						manifest.inputs[i] = {
							type: input.type,
							defaultValue: input.defaultValue,
							step: input.step,
							min: input.min,
							max: input.max,
							minCount: input.minCount,
							maxCount: input.maxCount,
							dimensions: input.dimensions,
							title: input.title || i,
							description: input.description || '',
							options: input.options || []
						};
					}
				}

				effects[name] = manifest;
			}
		}

		return effects;
	};

	if (window.Float32Array) {
		identity = new Float32Array([
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		]);
	}

	//check for plugins loaded out of order
	if (window.Seriously) {
		if (typeof window.Seriously === 'object') {
			(function () {
				var i;
				for (i in window.Seriously) {
					if (window.Seriously.hasOwnProperty(i) &&
						i !== 'plugin' &&
						typeof window.Seriously[i] === 'object') {

						Seriously.plugin(i, window.Seriously[i]);
					}
				}
			}());
		}
	}

	/*

	*/
	Seriously.logger = {
		log: consoleMethod('log'),
		info: consoleMethod('info'),
		warn: consoleMethod('warn'),
		error: consoleMethod('error')
	};

	Seriously.util = {
		mat4: mat4,
		checkSource: checkSource,
		hslToRgb: hslToRgb,
		colors: colorNames,
		setTimeoutZero: setTimeoutZero,
		ShaderProgram: ShaderProgram,
		FrameBuffer: FrameBuffer,
		requestAnimationFrame: requestAnimationFrame,
		shader: {
			makeNoise: 'float makeNoise(float u, float v, float timer) {\n' +
						'	float x = u * v * mod(timer * 1000.0, 100.0);\n' +
						'	x = mod(x, 13.0) * mod(x, 127.0);\n' +
						'	float dx = mod(x, 0.01);\n' +
						'	return clamp(0.1 + dx * 100.0, 0.0, 1.0);\n' +
						'}\n',
			random: '#ifndef RANDOM\n' +
				'#define RANDOM\n' +
				'float random(vec2 n) {\n' +
				'	return 0.5 + 0.5 * fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);\n' +
				'}\n' +
				'#endif\n'
		}
	};

	Seriously.source('video', function (video, options, force) {
		var me = this,
			video,
			key,
			opts,

			canvas,
			ctx2d,

			destroyed = false,
			deferTexture = false,

			isSeeking = false,
			lastRenderTime = 0;

		function initializeVideo() {
			video.removeEventListener('loadedmetadata', initializeVideo, true);

			if (destroyed) {
				return;
			}

			if (video.videoWidth) {
				if (me.width !== video.videoWidth || me.height !== video.videoHeight) {
					me.width = video.videoWidth;
					me.height = video.videoHeight;
					me.resize();
				}

				if (deferTexture) {
					me.setReady();
				}
			} else {
				//Workaround for Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=926753
				deferTexture = true;
				setTimeout(initializeVideo, 50);
			}
		}

		function seeking() {
			// IE doesn't report .seeking properly so make our own
			isSeeking = true;
		}

		function seeked() {
			isSeeking = false;
			me.setDirty();
		}

		if (video instanceof window.HTMLVideoElement) {
			if (video.readyState) {
				initializeVideo();
			} else {
				deferTexture = true;
				video.addEventListener('loadedmetadata', initializeVideo, true);
			}

			video.addEventListener('seeking', seeking, false);
			video.addEventListener('seeked', seeked, false);

			return {
				deferTexture: deferTexture,
				source: video,
				render: function renderVideo(gl) {
					var source,
						error;

					lastRenderTime = video.currentTime;

					if (!video.videoHeight || !video.videoWidth) {
						return false;
					}

					if (noVideoTextureSupport) {
						if (!ctx2d) {
							ctx2d = document.createElement('canvas').getContext('2d');
							canvas = ctx2d.canvas;
							canvas.width = me.width;
							canvas.height = me.height;
						}
						source = canvas;
						ctx2d.drawImage(video, 0, 0, me.width, me.height);
					} else {
						source = video;
					}

					gl.bindTexture(gl.TEXTURE_2D, me.texture);
					gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, me.flip);
					gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
					try {
						gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

						//workaround for lack of video texture support in IE
						if (noVideoTextureSupport === undefined) {
							error = gl.getError();
							if (error === gl.INVALID_VALUE) {
								noVideoTextureSupport = true;
								return renderVideo(gl);
							}
							noVideoTextureSupport = false;
						}
						return true;
					} catch (securityError) {
						if (securityError.code === window.DOMException.SECURITY_ERR) {
							me.allowRefresh = false;
							Seriously.logger.error('Unable to access cross-domain image');
						} else {
							Seriously.logger.error('Error rendering video source', securityError);
						}
					}
					return false;
				},
				checkDirty: function () {
					return !isSeeking && video.currentTime !== lastRenderTime;
				},
				compare: function (source) {
					return me.source === source;
				},
				destroy: function () {
					destroyed = true;
					video.removeEventListener('seeking', seeking, false);
					video.removeEventListener('seeked', seeked, false);
					video.removeEventListener('loadedmetadata', initializeVideo, true);
				}
			};
		}
	}, {
		title: 'Video'
	});

	/*
	Default transform - 2D
	Affine transforms
	- translate
	- rotate (degrees)
	- scale
	- skew

	todo: move this to a different file when we have a build tool
	*/
	Seriously.transform('2d', function (options) {
		var me = this,
			degrees = !(options && options.radians),

			centerX = 0,
			centerY = 0,
			scaleX = 1,
			scaleY = 1,
			translateX = 0,
			translateY = 0,
			rotation = 0,
			skewX = 0,
			skewY = 0;

		//todo: skew order
		//todo: invert?

		function recompute() {
			var matrix = me.matrix,
				angle,
				s, c,
				m00,
				m01,
				m02,
				m03,
				m10,
				m11,
				m12,
				m13;

			function translate(x, y) {
				matrix[12] = matrix[0] * x + matrix[4] * y + matrix[12];
				matrix[13] = matrix[1] * x + matrix[5] * y + matrix[13];
				matrix[14] = matrix[2] * x + matrix[6] * y + matrix[14];
				matrix[15] = matrix[3] * x + matrix[7] * y + matrix[15];
			}

			if (!translateX &&
					!translateY &&
					!rotation &&
					!skewX &&
					!skewY &&
					scaleX === 1 &&
					scaleY === 1
					) {
				me.transformed = false;
				return;
			}

			//calculate transformation matrix
			mat4.identity(matrix);

			translate(translateX + centerX, translateY + centerY);

			//skew
			if (skewX) {
				matrix[4] = skewX / me.width;
			}
			if (skewY) {
				matrix[1] = skewY / me.height;
			}

			if (rotation) {
				m00 = matrix[0];
				m01 = matrix[1];
				m02 = matrix[2];
				m03 = matrix[3];
				m10 = matrix[4];
				m11 = matrix[5];
				m12 = matrix[6];
				m13 = matrix[7];

				//rotate
				angle = -(degrees ? rotation * Math.PI / 180 : rotation);
				//...rotate
				s = Math.sin(angle);
				c = Math.cos(angle);
				matrix[0] = m00 * c + m10 * s;
				matrix[1] = m01 * c + m11 * s;
				matrix[2] = m02 * c + m12 * s;
				matrix[3] = m03 * c + m13 * s;
				matrix[4] = m10 * c - m00 * s;
				matrix[5] = m11 * c - m01 * s;
				matrix[6] = m12 * c - m02 * s;
				matrix[7] = m13 * c - m03 * s;
			}

			//scale
			if (scaleX !== 1) {
				matrix[0] *= scaleX;
				matrix[1] *= scaleX;
				matrix[2] *= scaleX;
				matrix[3] *= scaleX;
			}
			if (scaleY !== 1) {
				matrix[4] *= scaleY;
				matrix[5] *= scaleY;
				matrix[6] *= scaleY;
				matrix[7] *= scaleY;
			}

			translate(-centerX, -centerY);

			me.transformed = true;
		}

		return {
			inputs: {
				reset: {
					method: function () {
						centerX = 0;
						centerY = 0;
						scaleX = 1;
						scaleY = 1;
						translateX = 0;
						translateY = 0;
						rotation = 0;
						skewX = 0;
						skewY = 0;

						if (me.transformed) {
							me.transformed = false;
							return true;
						}

						return false;
					}
				},
				translate: {
					method: function (x, y) {
						if (isNaN(x)) {
							x = translateX;
						}

						if (isNaN(y)) {
							y = translateY;
						}

						if (x === translateX && y === translateY) {
							return false;
						}

						translateX = x;
						translateY = y;

						recompute();
						return true;
					},
					type: [
						'number',
						'number'
					]
				},
				translateX: {
					get: function () {
						return translateX;
					},
					set: function (x) {
						if (x === translateX) {
							return false;
						}

						translateX = x;

						recompute();
						return true;
					},
					type: 'number'
				},
				translateY: {
					get: function () {
						return translateY;
					},
					set: function (y) {
						if (y === translateY) {
							return false;
						}

						translateY = y;

						recompute();
						return true;
					},
					type: 'number'
				},
				rotation: {
					get: function () {
						return rotation;
					},
					set: function (angle) {
						if (angle === rotation) {
							return false;
						}

						//todo: fmod 360deg or Math.PI * 2 radians
						rotation = parseFloat(angle);

						recompute();
						return true;
					},
					type: 'number'
				},
				center: {
					method: function (x, y) {
						if (isNaN(x)) {
							x = centerX;
						}

						if (isNaN(y)) {
							y = centerY;
						}

						if (x === centerX && y === centerY) {
							return false;
						}

						centerX = x;
						centerY = y;

						recompute();
						return true;
					},
					type: [
						'number',
						'number'
					]
				},
				centerX: {
					get: function () {
						return centerX;
					},
					set: function (x) {
						if (x === centerX) {
							return false;
						}

						centerX = x;

						recompute();
						return true;
					},
					type: 'number'
				},
				centerY: {
					get: function () {
						return centerY;
					},
					set: function (y) {
						if (y === centerY) {
							return false;
						}

						centerY = y;

						recompute();
						return true;
					},
					type: 'number'
				},
				skew: {
					method: function (x, y) {
						if (isNaN(x)) {
							x = skewX;
						}

						if (isNaN(y)) {
							y = skewY;
						}

						if (x === skewX && y === skewY) {
							return false;
						}

						skewX = x;
						skewY = y;

						recompute();
						return true;
					},
					type: [
						'number',
						'number'
					]
				},
				skewX: {
					get: function () {
						return skewX;
					},
					set: function (x) {
						if (x === skewX) {
							return false;
						}

						skewX = x;

						recompute();
						return true;
					},
					type: 'number'
				},
				skewY: {
					get: function () {
						return skewY;
					},
					set: function (y) {
						if (y === skewY) {
							return false;
						}

						skewY = y;

						recompute();
						return true;
					},
					type: 'number'
				},
				scale: {
					method: function (x, y) {
						var newX, newY;

						if (isNaN(x)) {
							newX = scaleX;
						} else {
							newX = x;
						}

						/*
						if only one value is specified, set both x and y to the same scale
						*/
						if (isNaN(y)) {
							if (isNaN(x)) {
								return false;
							}

							newY = newX;
						} else {
							newY = y;
						}

						if (newX === scaleX && newY === scaleY) {
							return false;
						}

						scaleX = newX;
						scaleY = newY;

						recompute();
						return true;
					},
					type: [
						'number',
						'number'
					]
				},
				scaleX: {
					get: function () {
						return scaleX;
					},
					set: function (x) {
						if (x === scaleX) {
							return false;
						}

						scaleX = x;

						recompute();
						return true;
					},
					type: 'number'
				},
				scaleY: {
					get: function () {
						return scaleY;
					},
					set: function (y) {
						if (y === scaleY) {
							return false;
						}

						scaleY = y;

						recompute();
						return true;
					},
					type: 'number'
				}
			}
		};
	}, {
		title: '2D Transform',
		description: 'Translate, Rotate, Scale, Skew'
	});

	/*
	todo: move this to a different file when we have a build tool
	*/
	Seriously.transform('flip', function () {
		var me = this,
			horizontal = true;

		function recompute() {
			var matrix = me.matrix;

			//calculate transformation matrix
			//mat4.identity(matrix);

			//scale
			if (horizontal) {
				matrix[0] = -1;
				matrix[5] = 1;
			} else {
				matrix[0] = 1;
				matrix[5] = -1;
			}
		}

		mat4.identity(me.matrix);
		recompute();

		me.transformDirty = true;

		me.transformed = true;

		return {
			inputs: {
				direction: {
					get: function () {
						return horizontal ? 'horizontal' : 'vertical';
					},
					set: function (d) {
						var horiz;
						if (d === 'vertical') {
							horiz = false;
						} else {
							horiz = true;
						}

						if (horiz === horizontal) {
							return false;
						}

						horizontal = horiz;
						recompute();
						return true;
					},
					type: 'string'
				}
			}
		};
	}, {
		title: 'Flip',
		description: 'Flip Horizontal/Vertical'
	});

	/*
	Reformat
	todo: move this to a different file when we have a build tool
	*/
	Seriously.transform('reformat', function () {
		var me = this,
			forceWidth,
			forceHeight,
			mode = 'contain';

		function recompute() {
			var matrix = me.matrix,
				width = forceWidth || me.width,
				height = forceHeight || me.height,
				scaleX,
				scaleY,
				source = me.source,
				sourceWidth = source && source.width || 1,
				sourceHeight = source && source.height || 1,
				aspectIn,
				aspectOut;

			if (mode === 'distort' || width === sourceWidth && height === sourceHeight) {
				me.transformed = false;
				return;
			}

			aspectIn = sourceWidth / sourceHeight;

			aspectOut = width / height;

			if (mode === 'none') {
				scaleX = sourceWidth / width;
				scaleY = sourceHeight / height;
			} else if (mode === 'width' || mode === 'contain' && aspectOut <= aspectIn) {
				scaleX = 1;
				scaleY = aspectOut / aspectIn;
			} else if (mode === 'height' || mode === 'contain' && aspectOut > aspectIn) {
				scaleX = aspectIn / aspectOut;
				scaleY = 1;
			} else {
				//mode === 'cover'
				if (aspectOut > aspectIn) {
					scaleX = 1;
					scaleY = aspectOut / aspectIn;
				} else {
					scaleX = aspectIn / aspectOut;
					scaleY = 1;
				}
			}

			if (scaleX === 1 && scaleY === 1) {
				me.transformed = false;
				return;
			}

			//calculate transformation matrix
			mat4.identity(matrix);

			//scale
			if (scaleX !== 1) {
				matrix[0] *= scaleX;
				matrix[1] *= scaleX;
				matrix[2] *= scaleX;
				matrix[3] *= scaleX;
			}
			if (scaleY !== 1) {
				matrix[4] *= scaleY;
				matrix[5] *= scaleY;
				matrix[6] *= scaleY;
				matrix[7] *= scaleY;
			}
			me.transformed = true;
		}

		function getWidth() {
			return forceWidth || me.source && me.source.width || 1;
		}

		function getHeight() {
			return forceHeight || me.source && me.source.height || 1;
		}

		this.resize = function () {
			var width = getWidth(),
				height = getHeight(),
				i;

			if (this.width !== width || this.height !== height) {
				this.width = width;
				this.height = height;

				if (this.uniforms && this.uniforms.resolution) {
					this.uniforms.resolution[0] = width;
					this.uniforms.resolution[1] = height;
				}

				if (this.frameBuffer && this.frameBuffer.resize) {
					this.frameBuffer.resize(width, height);
				}

				for (i = 0; i < this.targets.length; i++) {
					this.targets[i].resize();
				}
			}

			this.setTransformDirty();

			recompute();
		};

		return {
			inputs: {
				width: {
					get: getWidth,
					set: function (x) {
						x = Math.floor(x);
						if (x === forceWidth) {
							return false;
						}

						forceWidth = x;

						this.resize();

						//don't need to run setTransformDirty again
						return false;
					},
					type: 'number'
				},
				height: {
					get: getHeight,
					set: function (y) {
						y = Math.floor(y);
						if (y === forceHeight) {
							return false;
						}

						forceHeight = y;

						this.resize();

						//don't need to run setTransformDirty again
						return false;
					},
					type: 'number'
				},
				mode: {
					get: function () {
						return mode;
					},
					set: function (m) {
						if (m === mode) {
							return false;
						}

						mode = m;

						recompute();
						return true;
					},
					type: 'enum',
					options: [
						'cover',
						'contain',
						'distort',
						'width',
						'height',
						'none'
					]
				}
			}
		};
	}, {
		title: 'Reformat',
		description: 'Change output dimensions'
	});

	/*
	todo: additional transform node types
	- perspective
	- matrix
	- crop? - maybe not - probably would just scale.
	*/

	/*
	 * simplex noise shaders
	 * https://github.com/ashima/webgl-noise
	 * Copyright (C) 2011 by Ashima Arts (Simplex noise)
	 * Copyright (C) 2011 by Stefan Gustavson (Classic noise)
	 */

	Seriously.util.shader.noiseHelpers = '#ifndef NOISE_HELPERS\n' +
		'#define NOISE_HELPERS\n' +
		'vec2 mod289(vec2 x) {\n' +
		'	return x - floor(x * (1.0 / 289.0)) * 289.0;\n' +
		'}\n' +
		'vec3 mod289(vec3 x) {\n' +
		'	return x - floor(x * (1.0 / 289.0)) * 289.0;\n' +
		'}\n' +
		'vec4 mod289(vec4 x) {\n' +
		'	return x - floor(x * (1.0 / 289.0)) * 289.0;\n' +
		'}\n' +
		'vec3 permute(vec3 x) {\n' +
		'	return mod289(((x*34.0)+1.0)*x);\n' +
		'}\n' +
		'vec4 permute(vec4 x) {\n' +
		'	return mod289(((x*34.0)+1.0)*x);\n' +
		'}\n' +
		'vec4 taylorInvSqrt(vec4 r) {\n' +
		'	return 1.79284291400159 - 0.85373472095314 * r;\n' +
		'}\n' +
		'float taylorInvSqrt(float r) {\n' +
		'	return 1.79284291400159 - 0.85373472095314 * r;\n' +
		'}\n' +
		'#endif\n';

	Seriously.util.shader.snoise2d = '#ifndef NOISE2D\n' +
		'#define NOISE2D\n' +
		'float snoise(vec2 v) {\n' +
		'	const vec4 C = vec4(0.211324865405187, // (3.0-sqrt(3.0))/6.0\n' +
		'		0.366025403784439, // 0.5*(sqrt(3.0)-1.0)\n' +
		'		-0.577350269189626, // -1.0 + 2.0 * C.x\n' +
		'		0.024390243902439); // 1.0 / 41.0\n' +
		'	vec2 i = floor(v + dot(v, C.yy));\n' +
		'	vec2 x0 = v - i + dot(i, C.xx);\n' +
		'	vec2 i1;\n' +
		'	//i1.x = step(x0.y, x0.x); // x0.x > x0.y ? 1.0 : 0.0\n' +
		'	//i1.y = 1.0 - i1.x;\n' +
		'	i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n' +
		'	// x0 = x0 - 0.0 + 0.0 * C.xx ;\n' +
		'	// x1 = x0 - i1 + 1.0 * C.xx ;\n' +
		'	// x2 = x0 - 1.0 + 2.0 * C.xx ;\n' +
		'	vec4 x12 = x0.xyxy + C.xxzz;\n' +
		'	x12.xy -= i1;\n' +
		'	i = mod289(i); // Avoid truncation effects in permutation\n' +
		'	vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n' +
		'	vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n' +
		'	m = m*m ;\n' +
		'	m = m*m ;\n' +
		'	vec3 x = 2.0 * fract(p * C.www) - 1.0;\n' +
		'	vec3 h = abs(x) - 0.5;\n' +
		'	vec3 ox = floor(x + 0.5);\n' +
		'	vec3 a0 = x - ox;\n' +
		'	m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);\n' +
		'	vec3 g;\n' +
		'	g.x = a0.x * x0.x + h.x * x0.y;\n' +
		'	g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n' +
		'	return 130.0 * dot(m, g);\n' +
		'}\n' +
		'#endif\n';

	Seriously.util.shader.snoise3d = '#ifndef NOISE3D\n' +
		'#define NOISE3D\n' +
		'float snoise(vec3 v) {\n' +
		'	const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;\n' +
		'	const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n' +

		// First corner
		'	vec3 i = floor(v + dot(v, C.yyy));\n' +
		'	vec3 x0 = v - i + dot(i, C.xxx) ;\n' +

		// Other corners
		'	vec3 g = step(x0.yzx, x0.xyz);\n' +
		'	vec3 l = 1.0 - g;\n' +
		'	vec3 i1 = min(g.xyz, l.zxy);\n' +
		'	vec3 i2 = max(g.xyz, l.zxy);\n' +

		'	// x0 = x0 - 0.0 + 0.0 * C.xxx;\n' +
		'	// x1 = x0 - i1 + 1.0 * C.xxx;\n' +
		'	// x2 = x0 - i2 + 2.0 * C.xxx;\n' +
		'	// x3 = x0 - 1.0 + 3.0 * C.xxx;\n' +
		'	vec3 x1 = x0 - i1 + C.xxx;\n' +
		'	vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n' +
		'	vec3 x3 = x0 - D.yyy; // -1.0+3.0*C.x = -0.5 = -D.y\n' +

		// Permutations
		'	i = mod289(i);\n' +
		'	vec4 p = permute(permute(permute(\n' +
		'						i.z + vec4(0.0, i1.z, i2.z, 1.0))\n' +
		'						+ i.y + vec4(0.0, i1.y, i2.y, 1.0))\n' +
		'						+ i.x + vec4(0.0, i1.x, i2.x, 1.0));\n' +

		// Gradients: 7x7 points over a square, mapped onto an octahedron.
		// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
		'	float n_ = 0.142857142857; // 1.0/7.0\n' +
		'	vec3 ns = n_ * D.wyz - D.xzx;\n' +

		'	vec4 j = p - 49.0 * floor(p * ns.z * ns.z); // mod(p, 7 * 7)\n' +

		'	vec4 x_ = floor(j * ns.z);\n' +
		'	vec4 y_ = floor(j - 7.0 * x_); // mod(j, N)\n' +

		'	vec4 x = x_ * ns.x + ns.yyyy;\n' +
		'	vec4 y = y_ * ns.x + ns.yyyy;\n' +
		'	vec4 h = 1.0 - abs(x) - abs(y);\n' +

		'	vec4 b0 = vec4(x.xy, y.xy);\n' +
		'	vec4 b1 = vec4(x.zw, y.zw);\n' +

		'	//vec4 s0 = vec4(lessThan(b0, 0.0)) * 2.0 - 1.0;\n' +
		'	//vec4 s1 = vec4(lessThan(b1, 0.0)) * 2.0 - 1.0;\n' +
		'	vec4 s0 = floor(b0) * 2.0 + 1.0;\n' +
		'	vec4 s1 = floor(b1) * 2.0 + 1.0;\n' +
		'	vec4 sh = -step(h, vec4(0.0));\n' +

		'	vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy ;\n' +
		'	vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww ;\n' +

		'	vec3 p0 = vec3(a0.xy, h.x);\n' +
		'	vec3 p1 = vec3(a0.zw, h.y);\n' +
		'	vec3 p2 = vec3(a1.xy, h.z);\n' +
		'	vec3 p3 = vec3(a1.zw, h.w);\n' +

		//Normalise gradients
		'	vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n' +
		'	p0 *= norm.x;\n' +
		'	p1 *= norm.y;\n' +
		'	p2 *= norm.z;\n' +
		'	p3 *= norm.w;\n' +

		// Mix final noise value
		'	vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\n' +
		'	m = m * m;\n' +
		'	return 42.0 * dot(m*m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n' +
		'}\n' +
		'#endif\n';

	Seriously.util.shader.snoise4d = '#ifndef NOISE4D\n' +
		'#define NOISE4D\n' +
		'vec4 grad4(float j, vec4 ip)\n' +
		'	{\n' +
		'	const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n' +
		'	vec4 p, s;\n' +
		'\n' +
		'	p.xyz = floor(fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n' +
		'	p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n' +
		'	s = vec4(lessThan(p, vec4(0.0)));\n' +
		'	p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n' +
		'\n' +
		'	return p;\n' +
		'	}\n' +
		'\n' +
		// (sqrt(5) - 1)/4 = F4, used once below\n
		'#define F4 0.309016994374947451\n' +
		'\n' +
		'float snoise(vec4 v)\n' +
		'	{\n' +
		'	const vec4 C = vec4(0.138196601125011, // (5 - sqrt(5))/20 G4\n' +
		'						0.276393202250021, // 2 * G4\n' +
		'						0.414589803375032, // 3 * G4\n' +
		'						-0.447213595499958); // -1 + 4 * G4\n' +
		'\n' +
		// First corner
		'	vec4 i = floor(v + dot(v, vec4(F4)));\n' +
		'	vec4 x0 = v - i + dot(i, C.xxxx);\n' +
		'\n' +
		// Other corners
		'\n' +
		// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
		'	vec4 i0;\n' +
		'	vec3 isX = step(x0.yzw, x0.xxx);\n' +
		'	vec3 isYZ = step(x0.zww, x0.yyz);\n' +
		// i0.x = dot(isX, vec3(1.0));
		'	i0.x = isX.x + isX.y + isX.z;\n' +
		'	i0.yzw = 1.0 - isX;\n' +
		// i0.y += dot(isYZ.xy, vec2(1.0));
		'	i0.y += isYZ.x + isYZ.y;\n' +
		'	i0.zw += 1.0 - isYZ.xy;\n' +
		'	i0.z += isYZ.z;\n' +
		'	i0.w += 1.0 - isYZ.z;\n' +
		'\n' +
			// i0 now contains the unique values 0, 1, 2, 3 in each channel
		'	vec4 i3 = clamp(i0, 0.0, 1.0);\n' +
		'	vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);\n' +
		'	vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);\n' +
		'\n' +
		'	vec4 x1 = x0 - i1 + C.xxxx;\n' +
		'	vec4 x2 = x0 - i2 + C.yyyy;\n' +
		'	vec4 x3 = x0 - i3 + C.zzzz;\n' +
		'	vec4 x4 = x0 + C.wwww;\n' +
		'\n' +
		// Permutations
		'	i = mod289(i);\n' +
		'	float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);\n' +
		'	vec4 j1 = permute(permute(permute(permute (\n' +
		'					i.w + vec4(i1.w, i2.w, i3.w, 1.0))\n' +
		'					+ i.z + vec4(i1.z, i2.z, i3.z, 1.0))\n' +
		'					+ i.y + vec4(i1.y, i2.y, i3.y, 1.0))\n' +
		'					+ i.x + vec4(i1.x, i2.x, i3.x, 1.0));\n' +
		'\n' +
		// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
		// 7*7*6 = 294, which is close to the ring size 17*17 = 289.
		'	vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n' +
		'\n' +
		'	vec4 p0 = grad4(j0, ip);\n' +
		'	vec4 p1 = grad4(j1.x, ip);\n' +
		'	vec4 p2 = grad4(j1.y, ip);\n' +
		'	vec4 p3 = grad4(j1.z, ip);\n' +
		'	vec4 p4 = grad4(j1.w, ip);\n' +
		'\n' +
		// Normalise gradients
		'	vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n' +
		'	p0 *= norm.x;\n' +
		'	p1 *= norm.y;\n' +
		'	p2 *= norm.z;\n' +
		'	p3 *= norm.w;\n' +
		'	p4 *= taylorInvSqrt(dot(p4, p4));\n' +
		'\n' +
		// Mix contributions from the five corners
		'	vec3 m0 = max(0.6 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0);\n' +
		'	vec2 m1 = max(0.6 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);\n' +
		'	m0 = m0 * m0;\n' +
		'	m1 = m1 * m1;\n' +
		'	return 49.0 * (dot(m0*m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)))\n' +
		'							+ dot(m1*m1, vec2(dot(p3, x3), dot(p4, x4)))) ;\n' +
		'}\n' +
		'#endif\n';

	return Seriously;
}));


 /* --------------------------- */ 

/* global define, require, exports, Float32Array */
(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['seriously'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('seriously'));
	} else {
		if (!root.Seriously) {
			root.Seriously = { plugin: function (name, opt) { this[name] = opt; } };
		}
		factory(root.Seriously);
	}
}(this, function (Seriously) {
	'use strict';

	/*
	todo: if transforms are used, do multiple passes and enable depth testing?
	todo: for now, only supporting float blend modes. Add complex ones
	todo: apply proper credit and license

	Adapted from blend mode shader by Romain Dura
	http://mouaif.wordpress.com/2009/01/05/photoshop-math-with-glsl-shaders/
	*/

	function vectorBlendFormula(formula, base, blend) {
		function replace(channel) {
			var r = {
				base: (base || 'base') + '.' + channel,
				blend: (blend || 'blend') + '.' + channel
			};
			return function (match) {
				return r[match] || match;
			};
		}

		return 'vec3(' +
			formula.replace(/blend|base/g, replace('r')) + ', ' +
			formula.replace(/blend|base/g, replace('g')) + ', ' +
			formula.replace(/blend|base/g, replace('b')) +
			')';
	}

	var blendModes = {
		normal: 'blend',
		lighten: 'max(blend, base)',
		darken: 'min(blend, base)',
		multiply: '(base * blend)',
		average: '(base + blend / TWO)',
		add: 'min(base + blend, ONE)',
		subtract: 'max(base - blend, ZERO)',
		divide: 'base / blend',
		difference: 'abs(base - blend)',
		negation: '(ONE - abs(ONE - base - blend))',
		exclusion: '(base + blend - TWO * base * blend)',
		screen: '(ONE - ((ONE - base) * (ONE - blend)))',
		lineardodge: 'min(base + blend, ONE)',
		phoenix: '(min(base, blend) - max(base, blend) + ONE)',
		linearburn: 'max(base + blend - ONE, ZERO)',

		hue: 'BlendHue(base, blend)',
		saturation: 'BlendSaturation(base, blend)',
		color: 'BlendColor(base, blend)',
		luminosity: 'BlendLuminosity(base, blend)',
		darkercolor: 'BlendDarkerColor(base, blend)',
		lightercolor: 'BlendLighterColor(base, blend)',

		overlay: vectorBlendFormula('base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend))'),
		softlight: vectorBlendFormula('blend < 0.5 ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend))'),
		hardlight: vectorBlendFormula('base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend))', 'blend', 'base'),
		colordodge: vectorBlendFormula('blend == 1.0 ? blend : min(base / (1.0 - blend), 1.0)'),
		colorburn: vectorBlendFormula('blend == 0.0 ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0)'),
		linearlight: vectorBlendFormula('BlendLinearLightf(base, blend)'),
		vividlight: vectorBlendFormula('BlendVividLightf(base, blend)'),
		pinlight: vectorBlendFormula('BlendPinLightf(base, blend)'),
		hardmix: vectorBlendFormula('BlendHardMixf(base, blend)'),
		reflect: vectorBlendFormula('BlendReflectf(base, blend)'),
		glow: vectorBlendFormula('BlendReflectf(blend, base)')
	},
	nativeBlendModes = {
		normal: ['FUNC_ADD', 'SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'SRC_ALPHA', 'DST_ALPHA']/*,
		add: ['FUNC_ADD', 'SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'SRC_ALPHA', 'DST_ALPHA']*/
		//todo: multiply, screen
	},
	identity = new Float32Array([
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	]);

	Seriously.plugin('blend', function () {
		var topUniforms,
			bottomUniforms,
			topOpts = {
				clear: false
			},
			inputs,
			gl;

		function updateDrawFunction() {
			var nativeMode = inputs && nativeBlendModes[inputs.mode];
			if (nativeMode && gl) {
				topOpts.blendEquation = gl[nativeMode[0]];
				topOpts.srcRGB = gl[nativeMode[1]];
				topOpts.dstRGB = gl[nativeMode[2]];
				topOpts.srcAlpha = gl[nativeMode[3]];
				topOpts.dstAlpha = gl[nativeMode[4]];
			}
		}

		// custom resize method
		this.resize = function () {
			var width,
				height,
				mode = this.inputs.sizeMode,
				node,
				fn,
				i,
				bottom = this.inputs.bottom,
				top = this.inputs.top;

			if (mode === 'bottom' || mode === 'top') {
				node = this.inputs[mode];
				if (node) {
					width = node.width;
					height = node.height;
				} else {
					width = 1;
					height = 1;
				}
			} else {
				if (bottom) {
					if (top) {
						fn = (mode === 'union' ? Math.max : Math.min);
						width = fn(bottom.width, top.width);
						height = fn(bottom.height, top.height);
					} else {
						width = bottom.width;
						height = bottom.height;
					}
				} else if (top) {
					width = top.width;
					height = top.height;
				} else {
					width = 1;
					height = 1;
				}
			}

			if (this.width !== width || this.height !== height) {
				this.width = width;
				this.height = height;

				this.uniforms.resolution[0] = width;
				this.uniforms.resolution[1] = height;

				if (this.frameBuffer) {
					this.frameBuffer.resize(width, height);
				}

				this.emit('resize');
				this.setDirty();
			}

			this.uniforms.resBottom[0] = bottom && bottom.width || 1;
			this.uniforms.resBottom[1] = bottom && bottom.height || 1;
			this.uniforms.resTop[0] = top && top.width || 1;
			this.uniforms.resTop[1] = top && top.height || 1;

			if (topUniforms) {
				if (bottom) {
					bottomUniforms.resolution[0] = bottom.width;
					bottomUniforms.resolution[1] = bottom.height;
				}
				if (top) {
					topUniforms.resolution[0] = top.width;
					topUniforms.resolution[1] = top.height;
				}
			}

			for (i = 0; i < this.targets.length; i++) {
				this.targets[i].resize();
			}
		};

		this.uniforms.resTop = [1, 1];
		this.uniforms.resBottom = [1, 1];

		return {
			initialize: function (initialize) {
				inputs = this.inputs;
				initialize();
				gl = this.gl;
				updateDrawFunction();
			},
			shader: function (inputs, shaderSource) {
				var mode = inputs.mode || 'normal',
					node;
				mode = mode.toLowerCase();

				if (nativeBlendModes[mode]) {
					//todo: move this to an 'update' event for 'mode' input
					if (!topUniforms) {
						node = this.inputs.top;
						topUniforms = {
							resolution: [
								node && node.width || 1,
								node && node.height || 1
							],
							targetRes: this.uniforms.resolution,
							source: node,
							transform: node && node.cumulativeMatrix || identity,
							opacity: this.inputs.opacity
						};

						node = this.inputs.bottom;
						bottomUniforms = {
							resolution: [
								node && node.width || 1,
								node && node.height || 1
							],
							targetRes: this.uniforms.resolution,
							source: node,
							transform: node && node.cumulativeMatrix || identity,
							opacity: 1
						};
					}

					shaderSource.vertex = [
						'precision mediump float;',

						'attribute vec4 position;',
						'attribute vec2 texCoord;',

						'uniform vec2 resolution;',
						'uniform vec2 targetRes;',
						'uniform mat4 transform;',

						'varying vec2 vTexCoord;',

						'void main(void) {',
						// first convert to screen space
						'	vec4 screenPosition = vec4(position.xy * resolution / 2.0, position.z, position.w);',
						'	screenPosition = transform * screenPosition;',

						// convert back to OpenGL coords
						'	gl_Position.xy = screenPosition.xy * 2.0 / resolution;',
						'	gl_Position.z = screenPosition.z * 2.0 / (resolution.x / resolution.y);',
						'	gl_Position.xy *= resolution / targetRes;',
						'	gl_Position.w = screenPosition.w;',
						'	vTexCoord = texCoord;',
						'}\n'
					].join('\n');

					shaderSource.fragment = [
						'precision mediump float;',
						'varying vec2 vTexCoord;',
						'uniform sampler2D source;',
						'uniform float opacity;',
						'void main(void) {',
						'	gl_FragColor = texture2D(source, vTexCoord);',
						'	gl_FragColor.a *= opacity;',
						'}'
					].join('\n');

					return shaderSource;
				}

				topUniforms = null;
				bottomUniforms = null;

				//todo: need separate texture coords for different size top/bottom images
				shaderSource.vertex = [
					'precision mediump float;',

					'attribute vec4 position;',
					'attribute vec2 texCoord;',

					'uniform vec2 resolution;',
					'uniform vec2 resBottom;',
					'uniform vec2 resTop;',

					'varying vec2 texCoordBottom;',
					'varying vec2 texCoordTop;',

					'const vec2 HALF = vec2(0.5);',

					'void main(void) {',
					//we don't need to do a transform in this shader, since this effect is not "inPlace"
					'	gl_Position = position;',

					'	vec2 adjusted = (texCoord - HALF) * resolution;',

					'	texCoordBottom = adjusted / resBottom + HALF;',
					'	texCoordTop = adjusted / resTop + HALF;',
					'}'
				].join('\n');

				shaderSource.fragment = [
					'precision mediump float;',

					'const vec3 ZERO = vec3(0.0);',
					'const vec3 ONE = vec3(1.0);',
					'const vec3 HALF = vec3(0.5);',
					'const vec3 TWO = vec3(2.0);',

					/*
					Linear Light is another contrast-increasing mode
					If the blend color is darker than midgray, Linear Light darkens the image
					by decreasing the brightness. If the blend color is lighter than midgray,
					the result is a brighter image due to increased brightness.
					*/

					'#define BlendAddf(base, blend)			min(base + blend, 1.0)',
					'#define BlendLinearDodgef(base, blend)	BlendAddf(base, blend)',
					'#define BlendLinearBurnf(base, blend)	max(base + blend - 1.0, 0.0)',
					'#define BlendLightenf(base, blend)		max(blend, base)',
					'#define BlendDarkenf(base, blend)		min(blend, base)',
					'#define BlendLinearLightf(base, blend)	(blend < 0.5 ? BlendLinearBurnf(base, (2.0 * blend)) : BlendLinearDodgef(base, (2.0 * (blend - 0.5))))',
					'#define BlendScreenf(base, blend)		(1.0 - ((1.0 - base) * (1.0 - blend)))',
					'#define BlendOverlayf(base, blend)		(base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))',
					'#define BlendSoftLightf(base, blend)	((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))',
					'#define BlendColorDodgef(base, blend)	((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))',
					'#define BlendColorBurnf(base, blend)	((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))',
					'#define BlendVividLightf(base, blend)	((blend < 0.5) ? BlendColorBurnf(base, (2.0 * blend)) : BlendColorDodgef(base, (2.0 * (blend - 0.5))))',
					'#define BlendPinLightf(base, blend)	((blend < 0.5) ? BlendDarkenf(base, (2.0 * blend)) : BlendLightenf(base, (2.0 *(blend - 0.5))))',
					'#define BlendHardMixf(base, blend)		((BlendVividLightf(base, blend) < 0.5) ? 0.0 : 1.0)',
					'#define BlendReflectf(base, blend)		((blend == 1.0) ? blend : min(base * base / (1.0 - blend), 1.0))',

					/*
					RGB/HSL conversion functions needed for Color, Saturation, Hue, Luminosity, etc.
					*/

					'vec3 RGBToHSL(vec3 color) {',
					'	vec3 hsl;', // init to 0 to avoid warnings ? (and reverse if + remove first part)

					'	float fmin = min(min(color.r, color.g), color.b);',    //Min. value of RGB
					'	float fmax = max(max(color.r, color.g), color.b);',    //Max. value of RGB
					'	float delta = fmax - fmin;',             //Delta RGB value

					'	hsl.z = (fmax + fmin) / 2.0;', // Luminance

					'	if (delta == 0.0) {',		//This is a gray, no chroma...
					'		hsl.x = 0.0;',	// Hue
					'		hsl.y = 0.0;',	// Saturation
					'	} else {',                                    //Chromatic data...
					'		if (hsl.z < 0.5)',
					'			hsl.y = delta / (fmax + fmin);', // Saturation
					'		else',
					'			hsl.y = delta / (2.0 - fmax - fmin);', // Saturation

					'		float deltaR = (((fmax - color.r) / 6.0) + (delta / 2.0)) / delta;',
					'		float deltaG = (((fmax - color.g) / 6.0) + (delta / 2.0)) / delta;',
					'		float deltaB = (((fmax - color.b) / 6.0) + (delta / 2.0)) / delta;',

					'		if (color.r == fmax )',
					'			hsl.x = deltaB - deltaG;', // Hue
					'		else if (color.g == fmax)',
					'			hsl.x = (1.0 / 3.0) + deltaR - deltaB;', // Hue
					'		else if (color.b == fmax)',
					'			hsl.x = (2.0 / 3.0) + deltaG - deltaR;', // Hue

					'		if (hsl.x < 0.0)',
					'			hsl.x += 1.0;', // Hue
					'		else if (hsl.x > 1.0)',
					'			hsl.x -= 1.0;', // Hue
					'	}',

					'	return hsl;',
					'}',

					'float HueToRGB(float f1, float f2, float hue) {',
					'	if (hue < 0.0)',
					'		hue += 1.0;',
					'	else if (hue > 1.0)',
					'		hue -= 1.0;',
					'	float res;',
					'	if ((6.0 * hue) < 1.0)',
					'		res = f1 + (f2 - f1) * 6.0 * hue;',
					'	else if ((2.0 * hue) < 1.0)',
					'		res = f2;',
					'	else if ((3.0 * hue) < 2.0)',
					'		res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;',
					'	else',
					'		res = f1;',
					'	return res;',
					'}',

					'vec3 HSLToRGB(vec3 hsl) {',
					'	vec3 rgb;',

					'	if (hsl.y == 0.0)',
					'		rgb = vec3(hsl.z);', // Luminance
					'	else {',
					'		float f2;',

					'		if (hsl.z < 0.5)',
					'			f2 = hsl.z * (1.0 + hsl.y);',
					'		else',
					'			f2 = (hsl.z + hsl.y) - (hsl.y * hsl.z);',

					'		float f1 = 2.0 * hsl.z - f2;',

					'		rgb.r = HueToRGB(f1, f2, hsl.x + (1.0/3.0));',
					'		rgb.g = HueToRGB(f1, f2, hsl.x);',
					'		rgb.b= HueToRGB(f1, f2, hsl.x - (1.0/3.0));',
					'	}',

					'	return rgb;',
					'}',

					// Hue Blend mode creates the result color by combining the luminance and saturation of the base color with the hue of the blend color.
					'vec3 BlendHue(vec3 base, vec3 blend) {',
					'	vec3 baseHSL = RGBToHSL(base);',
					'	return HSLToRGB(vec3(RGBToHSL(blend).r, baseHSL.g, baseHSL.b));',
					'}',

					// Saturation Blend mode creates the result color by combining the luminance and hue of the base color with the saturation of the blend color.
					'vec3 BlendSaturation(vec3 base, vec3 blend) {',
					'	vec3 baseHSL = RGBToHSL(base);',
					'	return HSLToRGB(vec3(baseHSL.r, RGBToHSL(blend).g, baseHSL.b));',
					'}',

					// Color Mode keeps the brightness of the base color and applies both the hue and saturation of the blend color.
					'vec3 BlendColor(vec3 base, vec3 blend) {',
					'	vec3 blendHSL = RGBToHSL(blend);',
					'	return HSLToRGB(vec3(blendHSL.r, blendHSL.g, RGBToHSL(base).b));',
					'}',

					// Luminosity Blend mode creates the result color by combining the hue and saturation of the base color with the luminance of the blend color.
					'vec3 BlendLuminosity(vec3 base, vec3 blend) {',
					'	vec3 baseHSL = RGBToHSL(base);',
					'	return HSLToRGB(vec3(baseHSL.r, baseHSL.g, RGBToHSL(blend).b));',
					'}',

					// Compares the total of all channel values for the blend and base color and displays the higher value color.
					'vec3 BlendLighterColor(vec3 base, vec3 blend) {',
					'	float baseTotal = base.r + base.g + base.b;',
					'	float blendTotal = blend.r + blend.g + blend.b;',
					'	return blendTotal > baseTotal ? blend : base;',
					'}',

					// Compares the total of all channel values for the blend and base color and displays the lower value color.
					'vec3 BlendDarkerColor(vec3 base, vec3 blend) {',
					'	float baseTotal = base.r + base.g + base.b;',
					'	float blendTotal = blend.r + blend.g + blend.b;',
					'	return blendTotal < baseTotal ? blend : base;',
					'}',

					'#define BlendFunction(base, blend) ' + blendModes[mode],

					'varying vec2 texCoordBottom;',
					'varying vec2 texCoordTop;',

					'uniform sampler2D top;',
					'uniform sampler2D bottom;',
					'uniform float opacity;',

					'vec3 BlendOpacity(vec4 base, vec4 blend, float opacity) {',
					//apply blend, then mix by (opacity * blend.a)
					'	vec3 blendedColor = BlendFunction(base.rgb, blend.rgb);',
					'	return mix(base.rgb, blendedColor, opacity * blend.a);',
					'}',

					'void main(void) {',
					'	vec4 topPixel = texture2D(top, texCoordTop);',
					'	vec4 bottomPixel = texture2D(bottom, texCoordBottom);',

					'	if (topPixel.a == 0.0) {',
					'		gl_FragColor = bottomPixel;',
					'	} else {',
					'		gl_FragColor = vec4(BlendOpacity(bottomPixel, topPixel, opacity), bottomPixel.a);',
					'	}',
					'}'
				].join('\n');

				return shaderSource;
			},
			draw: function (shader, model, uniforms, frameBuffer, draw) {
				if (nativeBlendModes[this.inputs.mode]) {
					if (this.inputs.bottom) {
						draw(shader, model, bottomUniforms, frameBuffer);
					} else {
						//just clear
						gl.viewport(0, 0, this.width, this.height);
						gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
						gl.clearColor(0.0, 0.0, 0.0, 0.0);
						gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
					}

					if (this.inputs.top && this.inputs.opacity) {
						draw(shader, model, topUniforms, frameBuffer, null, topOpts);
					}
				} else {
					draw(shader, model, uniforms, frameBuffer);
				}
			},
			requires: function (sourceName) {
				if (!this.inputs.opacity && sourceName === 'top') {
					return false;
				}
				return true;
			},
			inputs: {
				top: {
					type: 'image',
					uniform: 'top',
					update: function () {
						if (topUniforms) {
							topUniforms.source = this.inputs.top;
							topUniforms.transform = this.inputs.top.cumulativeMatrix || identity;
						}
						this.resize();
					}
				},
				bottom: {
					type: 'image',
					uniform: 'bottom',
					update: function () {
						if (bottomUniforms) {
							bottomUniforms.source = this.inputs.bottom;
							bottomUniforms.transform = this.inputs.bottom.cumulativeMatrix || identity;
						}
						this.resize();
					}
				},
				opacity: {
					type: 'number',
					uniform: 'opacity',
					defaultValue: 1,
					min: 0,
					max: 1,
					updateSources: true,
					update: function (opacity) {
						if (topUniforms) {
							topUniforms.opacity = opacity;
						}
					}
				},
				sizeMode: {
					type: 'enum',
					defaultValue: 'bottom',
					options: [
						'bottom',
						'top',
						'union',
						'intersection'
					],
					update: function () {
						this.resize();
					}
				},
				mode: {
					type: 'enum',
					shaderDirty: true,
					defaultValue: 'normal',
					options: [
						['normal', 'Normal'],
						['lighten', 'Lighten'],
						['darken', 'Darken'],
						['multiply', 'Multiply'],
						['average', 'Average'],
						['add', 'Add'],
						['subtract', 'Subtract'],
						['divide', 'Divide'],
						['difference', 'Difference'],
						['negation', 'Negation'],
						['exclusion', 'Exclusion'],
						['screen', 'Screen'],
						['overlay', 'Overlay'],
						['softlight', 'Soft Light'],
						['hardlight', 'Hard Light'],
						['colordodge', 'Color Dodge'],
						['colorburn', 'Color Burn'],
						['lineardodge', 'Linear Dodge'],
						['linearburn', 'Linear Burn'],
						['linearlight', 'Linear Light'],
						['vividlight', 'Vivid Light'],
						['pinlight', 'Pin Light'],
						['hardmix', 'Hard Mix'],
						['reflect', 'Reflect'],
						['glow', 'Glow'],
						['phoenix', 'Phoenix'],
						['hue', 'Hue'],
						['saturation', 'Saturation'],
						['color', 'color'],
						['luminosity', 'Luminosity'],
						['darkercolor', 'Darker Color'],
						['lightercolor', 'Lighter Color']
					],
					update: function () {
						updateDrawFunction();
					}
				}
			}
		};
	},
	{
		inPlace: function () {
			return !!nativeBlendModes[this.inputs.mode];
		},
		description: 'Blend two layers',
		title: 'Blend'
	});
}));


 /* --------------------------- */ 

/* global define, require */
(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['seriously'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('seriously'));
	} else {
		if (!root.Seriously) {
			root.Seriously = { plugin: function (name, opt) { this[name] = opt; } };
		}
		factory(root.Seriously);
	}
}(this, function (Seriously) {
	'use strict';

	var channelOptions = [
			'Red',
			'Green',
			'Blue',
			'Alpha'
		],
		channelLookup = {
			r: 0,
			g: 1,
			b: 2,
			a: 3,
			x: 0,
			y: 1,
			z: 2,
			w: 3
		};

	Seriously.plugin('channels', function () {
		var sources = [],
			shaders = [],
			matrices = [],
			me = this;

		function validateChannel(value, input, name) {
			var val;
			if (typeof value === 'string') {
				val = value.charAt(0).toLowerCase();
				val = channelLookup[val];
				if (val === undefined) {
					val = -1;
				}
				if (val < 0) {
					val = parseFloat(value);
				}
			} else {
				val = value;
			}

			if (val === 0 || val === 1 || val === 2 || val === 3) {
				return val;
			}

			return me.inputs[name];
		}

		function updateChannels() {
			var inputs = me.inputs,
				i, j,
				source,
				matrix;

			for (i = 0; i < sources.length; i++) {
				source = sources[i];
				matrix = matrices[i];
				if (!matrix) {
					matrix = matrices[i] = [];
					me.uniforms['channels' + i] = matrix;
				}

				for (j = 0; j < 16; j++) {
					matrix[j] = 0;
				}

				matrix[inputs.red] = (inputs.redSource === source) ? 1 : 0;
				matrix[4 + inputs.green] = (inputs.greenSource === source) ? 1 : 0;
				matrix[8 + inputs.blue] = (inputs.blueSource === source) ? 1 : 0;
				matrix[12 + inputs.alpha] = (inputs.alphaSource === source) ? 1 : 0;
			}
		}

		function updateSources() {
			var inputs = me.inputs;

			function validateSource(name) {
				var s, j;
				s = inputs[name];
				if (!s) {
					s = me.sources[name] = inputs[name] = inputs.source;
				}

				j = sources.indexOf(s);
				if (j < 0) {
					j = sources.length;
					sources.push(s);
					me.uniforms['source' + j] = s;
				}
			}
			sources.length = 0;

			validateSource('redSource');
			validateSource('greenSource');
			validateSource('blueSource');
			validateSource('alphaSource');

			me.resize();

			updateChannels();
		}

		// custom resize method
		this.resize = function () {
			var width,
				height,
				mode = this.inputs.sizeMode,
				i,
				resolution,
				source;

			if (!sources.length) {
				width = 1;
				height = 1;
			} else if (sources.length === 1) {
				source = sources[0];
				width = source.width;
				height = source.height;
			} else if (mode === 'union') {
				width = 0;
				height = 0;
				for (i = 0; i < sources.length; i++) {
					source = sources[0];
					width = Math.max(width, source.width);
					height = Math.max(height, source.height);
				}
			} else if (mode === 'intersection') {
				width = Infinity;
				height = Infinity;
				for (i = 0; i < sources.length; i++) {
					source = sources[0];
					width = Math.min(width, source.width);
					height = Math.min(height, source.height);
				}
			} else {
				source = me.inputs[mode + 'Source'];
				if (source) {
					width = source.width;
					height = source.height;
				} else {
					width = 1;
					height = 1;
				}
			}

			for (i = 0; i < sources.length; i++) {
				source = sources[i];
				resolution = me.uniforms['resolution' + i];
				if (resolution) {
					resolution[0] = source.width;
					resolution[1] = source.height;
				} else {
					me.uniforms['resolution' + i] = [source.width, source.height];
				}
			}

			if (this.width !== width || this.height !== height) {
				this.width = width;
				this.height = height;

				this.uniforms.resolution[0] = width;
				this.uniforms.resolution[1] = height;

				if (this.frameBuffer) {
					this.frameBuffer.resize(width, height);
				}

				this.emit('resize');
				this.setDirty();
			}

			for (i = 0; i < this.targets.length; i++) {
				this.targets[i].resize();
			}
		};

		return {
			shader: function () {
				var i,
					frag,
					vert,
					shader,
					uniforms = '',
					samples = '',
					varyings = '',
					position = '';

				/*
				We'll restore this and the draw function below if we ever figure out a way to
				add/& multiple renders without screwing up the brightness
				shaderSource.fragment = [
					'precision mediump float;',

					'varying vec2 vTexCoord;',
					'uniform mat4 channels;',
					'uniform sampler2D source;',
					//'uniform sampler2D previous;',
					'void main(void) {',
					'	vec4 pixel;',
					'	if (any(lessThan(vTexCoord, vec2(0.0))) || any(greaterThanEqual(vTexCoord, vec2(1.0)))) {',
					'		pixel = vec4(0.0);',
					'	} else {',
					'		pixel = texture2D(source, vTexCoord) * channels;',
					//'		if (gl_FragColor.a == 0.0) gl_FragColor.a = 1.0;',
					'	}',
					'	gl_FragColor = pixel;',
					'}'
				].join('\n');

				return shaderSource;
				*/
				if (shaders[sources.length]) {
					return shaders[sources.length];
				}

				for (i = 0; i < sources.length; i++) {
					varyings += 'varying vec2 vTexCoord' + i + ';\n';

					uniforms += 'uniform sampler2D source' + i + ';\n' +
						'uniform mat4 channels' + i + ';\n' +
						'uniform vec2 resolution' + i + ';\n\n';

					position += '    vTexCoord' + i + ' = (position.xy * resolution / resolution' + i + ') * 0.5 + 0.5;\n';

					samples += '    if (all(greaterThanEqual(vTexCoord' + i + ', vec2(0.0))) && all(lessThan(vTexCoord' + i + ', vec2(1.0)))) {\n' +
						'        gl_FragColor += texture2D(source' + i + ', vTexCoord' + i + ') * channels' + i + ';\n    }\n';
				}

				vert = [
					'precision mediump float;',

					'attribute vec4 position;',
					'attribute vec2 texCoord;',

					'uniform vec2 resolution;',
					uniforms,

					varyings,

					'void main(void) {',
					position,
					'	gl_Position = position;',
					'}\n'
				].join('\n');

				frag = [
					'precision mediump float;',

					varyings,
					uniforms,

					'void main(void) {',
					'	gl_FragColor = vec4(0.0);',
					samples,
					'}'
				].join('\n');

				shader = new Seriously.util.ShaderProgram(this.gl,
					vert,
					frag);

				shaders[sources.length] = shader;
				return shader;
			},
			/*
			draw: function (shader, model, uniforms, frameBuffer, draw) {
				var i,
					source;

				options.clear = true;
				for (i = 0; i < sources.length; i++) {
				//for (i = sources.length - 1; i >= 0; i--) {
					uniforms.channels = matrices[i];
					source = sources[i];
					uniforms.source = sources[i];
					//uniforms.resolution[]

					draw(shader, model, uniforms, frameBuffer, null, options);
					options.clear = false;
				}
			},
			*/
			inputs: {
				sizeMode: {
					type: 'enum',
					defaultValue: 'red',
					options: [
						'red',
						'green',
						'blue',
						'alpha',
						'union',
						'intersection'
					],
					update: function () {
						this.resize();
					}
				},
				source: {
					type: 'image',
					update: updateSources,
					shaderDirty: true
				},
				redSource: {
					type: 'image',
					update: updateSources,
					shaderDirty: true
				},
				greenSource: {
					type: 'image',
					update: updateSources,
					shaderDirty: true
				},
				blueSource: {
					type: 'image',
					update: updateSources,
					shaderDirty: true
				},
				alphaSource: {
					type: 'image',
					update: updateSources,
					shaderDirty: true
				},
				red: {
					type: 'enum',
					options: channelOptions,
					validate: validateChannel,
					update: updateChannels,
					defaultValue: 0
				},
				green: {
					type: 'enum',
					options: channelOptions,
					validate: validateChannel,
					update: updateChannels,
					defaultValue: 1
				},
				blue: {
					type: 'enum',
					options: channelOptions,
					validate: validateChannel,
					update: updateChannels,
					defaultValue: 2
				},
				alpha: {
					type: 'enum',
					options: channelOptions,
					validate: validateChannel,
					update: updateChannels,
					defaultValue: 3
				}
			}
		};
	},
	{
		inPlace: false,
		title: 'Channel Mapping'
	});
}));


 /* --------------------------- */ 

/* global define, require */
(function (root, factory) {
	'use strict';

	if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('seriously'));
	} else if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['seriously'], factory);
	} else {
		if (!root.Seriously) {
			root.Seriously = { plugin: function (name, opt) { this[name] = opt; } };
		}
		factory(root.Seriously);
	}
}(this, function (Seriously) {
	'use strict';

	var fillModes = {
		wrap: 'pos = mod(pos, 1.0);',
		clamp: 'pos = min(max(pos, 0.0), 1.0);',
		ignore: 'pos = texCoordSource;',
		color: 'gl_FragColor = color;\n\treturn;'
	};

	Seriously.plugin('displacement', function () {
		this.uniforms.resMap = [1, 1];
		this.uniforms.resSource = [1, 1];

		return {
			shader: function (inputs, shaderSource) {
				var fillMode = fillModes[inputs.fillMode];

					shaderSource.vertex = [
					'precision mediump float;',

					'attribute vec4 position;',
					'attribute vec2 texCoord;',

					'uniform vec2 resolution;',
					'uniform vec2 resSource;',
					'uniform vec2 resMap;',

					'varying vec2 texCoordSource;',
					'varying vec2 texCoordMap;',

					'const vec2 HALF = vec2(0.5);',

					'void main(void) {',
					//we don't need to do a transform in this shader, since this effect is not "inPlace"
					'	gl_Position = position;',

					'	vec2 adjusted = (texCoord - HALF) * resolution;',

					'	texCoordSource = adjusted / resSource + HALF;',
					'	texCoordMap = adjusted / resMap + HALF;',
					'}'
				].join('\n');

				shaderSource.fragment = [
					'precision mediump float;\n',

					'varying vec2 texCoordSource;',
					'varying vec2 texCoordMap;',

					'uniform sampler2D source;',
					'uniform sampler2D map;',

					'uniform float amount;',
					'uniform float offset;',
					'uniform vec2 mapScale;',
					'uniform vec4 color;',

					'void main(void) {',
					'	vec4 mapPixel = texture2D(map, texCoordMap);',
					'	vec2 pos = texCoordSource + (mapPixel.xy - offset) * mapScale * amount;',

					'	if (pos.x < 0.0 || pos.x > 1.0 || pos.y < 0.0 || pos.y > 1.0) {',
					'		' + fillMode,
					'	}',

					'	gl_FragColor = texture2D(source, pos);',
					'}'
				].join('\n');

				return shaderSource;
			},
			requires: function (sourceName) {
				if (!this.inputs.mapScale && sourceName === 'map') {
					return false;
				}
				return true;
			},
			resize: function () {
				var source = this.inputs.source,
					map = this.inputs.map;

				if (source) {
					this.uniforms.resSource[0] = source.width;
					this.uniforms.resSource[1] = source.height;
				} else {
					this.uniforms.resSource[0] = 1;
					this.uniforms.resSource[1] = 1;
				}

				if (map) {
					this.uniforms.resMap[0] = map.width;
					this.uniforms.resMap[1] = map.height;
				} else {
					this.uniforms.resMap[0] = 1;
					this.uniforms.resMap[1] = 1;
				}
			}
		};
	},
	{
		inputs: {
			source: {
				type: 'image',
				uniform: 'source'
			},
			map: {
				type: 'image',
				uniform: 'map'
			},
			fillMode: {
				type: 'enum',
				shaderDirty: true,
				defaultValue: 'color',
				options: [
					'color', 'wrap', 'clamp', 'ignore'
				]
			},
			color: {
				type: 'color',
				uniform: 'color',
				defaultValue: [0, 0, 0, 0]
			},
			offset: {
				type: 'number',
				uniform: 'offset',
				defaultValue: 0.5
			},
			mapScale: {
				type: 'vector',
				dimensions: 2,
				uniform: 'mapScale',
				defaultValue: [1, 1],
				updateSources: true
			},
			amount: {
				type: 'number',
				uniform: 'amount',
				defaultValue: 1
			}
		},
		title: 'Displacement Map',
		description: ''
	});
}));


 /* --------------------------- */ 

/* global define, require */
(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['seriously'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('seriously'));
	} else {
		if (!root.Seriously) {
			root.Seriously = { plugin: function (name, opt) { this[name] = opt; } };
		}
		factory(root.Seriously);
	}
}(this, function (Seriously) {
	'use strict';

	Seriously.plugin('linear-transfer', {
		commonShader: true,
		shader: function (inputs, shaderSource) {
			shaderSource.fragment = [
				'precision mediump float;',

				'varying vec2 vTexCoord;',

				'uniform sampler2D source;',
				'uniform vec4 slope;',
				'uniform vec4 intercept;',

				'const vec3 half3 = vec3(0.5);',

				'void main(void) {',
				'	vec4 pixel = texture2D(source, vTexCoord);',
				'	gl_FragColor = pixel * slope + intercept;',
				'}'
			].join('\n');
			return shaderSource;
		},
		inPlace: true,
		inputs: {
			source: {
				type: 'image',
				uniform: 'source'
			},
			slope: {
				type: 'vector',
				dimensions: 4,
				uniform: 'slope',
				defaultValue: [1, 1, 1, 1]
			},
			intercept: {
				type: 'vector',
				uniform: 'intercept',
				dimensions: 4,
				defaultValue: [0, 0, 0, 0]
			}
		},
		title: 'Linear Transfer',
		description: 'For each color channel: [slope] * [value] + [intercept]'
	});
}));


 /* --------------------------- */ 

/* global define, require */
(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['seriously'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('seriously'));
	} else {
		if (!root.Seriously) {
			root.Seriously = { plugin: function (name, opt) { this[name] = opt; } };
		}
		factory(root.Seriously);
	}
}(this, function (Seriously) {
	'use strict';

	Seriously.plugin('simplex', function () {
		var me = this;

		function resize() {
			me.resize();
		}

		return {
			shader: function (inputs, shaderSource, utilities) {
				var frequency = 1,
					amplitude = 1,
					i,
					adjust = 0;

				function fmtFloat(n) {
					if (n - Math.floor(n) === 0) {
						return n + '.0';
					}
					return n;
				}

				shaderSource.fragment = [
					'precision mediump float;',

					'varying vec2 vTexCoord;',

					'uniform float amount;',
					'uniform vec2 noiseScale;',
					'uniform vec2 noiseOffset;',
					'uniform float time;',
					'uniform vec4 black;',
					'uniform vec4 white;',

					utilities.shader.noiseHelpers,
					utilities.shader.snoise3d,
					//utilities.shader.random,

					'void main(void) {',
					'	float total = 0.0;',
					'	vec3 pos = vec3(vTexCoord.xy * noiseScale + noiseOffset, time);'
				].join('\n');

				for (i = 0; i < inputs.octaves; i++) {
					frequency = Math.pow(2, i);
					amplitude = Math.pow(inputs.persistence, i);
					adjust += amplitude;
					shaderSource.fragment += '\ttotal += snoise(pos * ' + fmtFloat(frequency) + ') * ' + fmtFloat(amplitude) + ';\n';
				}
				shaderSource.fragment += [
					'	total *= amount / ' + fmtFloat(adjust) + ';',
					'	total = (total + 1.0)/ 2.0;',
					'	gl_FragColor = mix(black, white, total);',
					'}'
				].join('\n');

				return shaderSource;
			},
			inputs: {
				noiseScale: {
					type: 'vector',
					dimensions: 2,
					uniform: 'noiseScale',
					defaultValue: [1, 1]
				},
				noiseOffset: {
					type: 'vector',
					dimensions: 2,
					uniform: 'noiseOffset',
					defaultValue: [0, 0]
				},
				octaves: {
					type: 'number',
					shaderDirty: true,
					min: 1,
					max: 8,
					step: 1,
					defaultValue: 1
				},
				persistence: {
					type: 'number',
					defaultValue: 0.5,
					min: 0,
					max: 0.5
				},
				amount: {
					type: 'number',
					uniform: 'amount',
					min: 0,
					defaultValue: 1
				},
				time: {
					type: 'number',
					uniform: 'time',
					defaultValue: 0
				},
				width: {
					type: 'number',
					min: 0,
					step: 1,
					update: resize,
					defaultValue: 0
				},
				height: {
					type: 'number',
					min: 0,
					step: 1,
					update: resize,
					defaultValue: 0
				},
				black: {
					type: 'color',
					uniform: 'black',
					defaultValue: [0, 0, 0, 1]
				},
				white: {
					type: 'color',
					uniform: 'white',
					defaultValue: [1, 1, 1, 1]
				}
			}
		};
	}, {
		title: 'Simplex Noise',
		description: 'Generate Simplex Noise'
	});
}));


 /* --------------------------- */ 

/* global define, require */
(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['seriously'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('seriously'));
	} else {
		if (!root.Seriously) {
			root.Seriously = { plugin: function (name, opt) { this[name] = opt; } };
		}
		factory(root.Seriously);
	}
}(this, function (Seriously) {
	'use strict';

	//inspired by Evan Wallace (https://github.com/evanw/glfx.js)

	Seriously.plugin('hue-saturation', {
		commonShader: true,
		shader: function (inputs, shaderSource) {
			shaderSource.vertex = [
				'precision mediump float;',

				'attribute vec4 position;',
				'attribute vec2 texCoord;',

				'uniform vec2 resolution;',
				'uniform mat4 projection;',
				'uniform mat4 transform;',

				'uniform float hue;',
				'uniform float saturation;',

				'varying vec2 vTexCoord;',

				'varying vec3 weights;',

				'void main(void) {',
				'	float angle = hue * 3.14159265358979323846264;',
				'	float s = sin(angle);',
				'	float c = cos(angle);',
				'	weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;',

				// first convert to screen space
				'	vec4 screenPosition = vec4(position.xy * resolution / 2.0, position.z, position.w);',
				'	screenPosition = transform * screenPosition;',

				// convert back to OpenGL coords
				'	gl_Position = screenPosition;',
				'	gl_Position.xy = screenPosition.xy * 2.0 / resolution;',
				'	gl_Position.z = screenPosition.z * 2.0 / (resolution.x / resolution.y);',
				'	vTexCoord = texCoord;',
				'}'
			].join('\n');
			shaderSource.fragment = [
				'precision mediump float;',

				'varying vec2 vTexCoord;',

				'varying vec3 weights;',

				'uniform sampler2D source;',
				'uniform float hue;',
				'uniform float saturation;',

				'void main(void) {',
				'	vec4 color = texture2D(source, vTexCoord);',

				//adjust hue
				'	float len = length(color.rgb);',
				'	color.rgb = vec3(' +
						'dot(color.rgb, weights.xyz), ' +
						'dot(color.rgb, weights.zxy), ' +
						'dot(color.rgb, weights.yzx) ' +
				');',

				//adjust saturation
				'	vec3 adjustment = (color.r + color.g + color.b) / 3.0 - color.rgb;',
				'	if (saturation > 0.0) {',
				'		adjustment *= (1.0 - 1.0 / (1.0 - saturation));',
				'	} else {',
				'		adjustment *= (-saturation);',
				'	}',
				'	color.rgb += adjustment;',

				'	gl_FragColor = color;',
				'}'
			].join('\n');
			return shaderSource;
		},
		inPlace: true,
		inputs: {
			source: {
				type: 'image',
				uniform: 'source'
			},
			hue: {
				type: 'number',
				uniform: 'hue',
				defaultValue: 0.4,
				min: -1,
				max: 1
			},
			saturation: {
				type: 'number',
				uniform: 'saturation',
				defaultValue: 0,
				min: -1,
				max: 1
			}
		},
		title: 'Hue/Saturation',
		description: 'Rotate hue and multiply saturation.'
	});
}));


 /* --------------------------- */ 

/* global define, require */
(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['seriously'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('seriously'));
	} else {
		if (!root.Seriously) {
			root.Seriously = { plugin: function (name, opt) { this[name] = opt; } };
		}
		factory(root.Seriously);
	}
}(this, function (Seriously) {
	'use strict';

	Seriously.plugin('exposure', {
		commonShader: true,
		shader: function (inputs, shaderSource) {
			shaderSource.fragment = [
				'precision mediump float;',

				'varying vec2 vTexCoord;',

				'uniform sampler2D source;',

				'uniform float exposure;',

				'void main (void)  {',
				'	vec4 pixel = texture2D(source, vTexCoord);',
				'	gl_FragColor = vec4(pow(2.0, exposure) * pixel.rgb, pixel.a);',
				'}'
			].join('\n');
			return shaderSource;
		},
		inPlace: true,
		inputs: {
			source: {
				type: 'image',
				uniform: 'source',
				shaderDirty: false
			},
			exposure: {
				type: 'number',
				uniform: 'exposure',
				defaultValue: 1,
				min: -8,
				max: 8
			}
		},
		title: 'Exposure',
		categories: ['film'],
		description: 'Exposure control'
	});
}));


 /* --------------------------- */ 

/*
 * A fast javascript implementation of simplex noise by Jonas Wagner
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 *
 *
 * Copyright (C) 2012 Jonas Wagner
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
(function () {

var F2 = 0.5 * (Math.sqrt(3.0) - 1.0),
    G2 = (3.0 - Math.sqrt(3.0)) / 6.0,
    F3 = 1.0 / 3.0,
    G3 = 1.0 / 6.0,
    F4 = (Math.sqrt(5.0) - 1.0) / 4.0,
    G4 = (5.0 - Math.sqrt(5.0)) / 20.0;


function SimplexNoise(random) {
    if (!random) random = Math.random;
    this.p = new Uint8Array(256);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 256; i++) {
        this.p[i] = random() * 256;
    }
    for (i = 0; i < 512; i++) {
        this.perm[i] = this.p[i & 255];
        this.permMod12[i] = this.perm[i] % 12;
    }

}
SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
                            - 1, 1, 0,
                            1, - 1, 0,

                            - 1, - 1, 0,
                            1, 0, 1,
                            - 1, 0, 1,

                            1, 0, - 1,
                            - 1, 0, - 1,
                            0, 1, 1,

                            0, - 1, 1,
                            0, 1, - 1,
                            0, - 1, - 1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, - 1, 0, 1, - 1, 1, 0, 1, - 1, - 1,
                            0, - 1, 1, 1, 0, - 1, 1, - 1, 0, - 1, - 1, 1, 0, - 1, - 1, - 1,
                            1, 0, 1, 1, 1, 0, 1, - 1, 1, 0, - 1, 1, 1, 0, - 1, - 1,
                            - 1, 0, 1, 1, - 1, 0, 1, - 1, - 1, 0, - 1, 1, - 1, 0, - 1, - 1,
                            1, 1, 0, 1, 1, 1, 0, - 1, 1, - 1, 0, 1, 1, - 1, 0, - 1,
                            - 1, 1, 0, 1, - 1, 1, 0, - 1, - 1, - 1, 0, 1, - 1, - 1, 0, - 1,
                            1, 1, 1, 0, 1, 1, - 1, 0, 1, - 1, 1, 0, 1, - 1, - 1, 0,
                            - 1, 1, 1, 0, - 1, 1, - 1, 0, - 1, - 1, 1, 0, - 1, - 1, - 1, 0]),
    noise2D: function (xin, yin) {
        var permMod12 = this.permMod12,
            perm = this.perm,
            grad3 = this.grad3;
        var n0=0, n1=0, n2=0; // Noise contributions from the three corners
        // Skew the input space to determine which simplex cell we're in
        var s = (xin + yin) * F2; // Hairy factor for 2D
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var t = (i + j) * G2;
        var X0 = i - t; // Unskew the cell origin back to (x,y) space
        var Y0 = j - t;
        var x0 = xin - X0; // The x,y distances from the cell origin
        var y0 = yin - Y0;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        else {
            i1 = 0;
            j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
        var y2 = y0 - 1.0 + 2.0 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        var ii = i & 255;
        var jj = j & 255;
        // Calculate the contribution from the three corners
        var t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            var gi0 = permMod12[ii + perm[jj]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
        }
        var t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
        }
        var t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70.0 * (n0 + n1 + n2);
    },
    // 3D simplex noise
    noise3D: function (xin, yin, zin) {
        var permMod12 = this.permMod12,
            perm = this.perm,
            grad3 = this.grad3;
        var n0, n1, n2, n3; // Noise contributions from the four corners
        // Skew the input space to determine which simplex cell we're in
        var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var k = Math.floor(zin + s);
        var t = (i + j + k) * G3;
        var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
        var Y0 = j - t;
        var Z0 = k - t;
        var x0 = xin - X0; // The x,y,z distances from the cell origin
        var y0 = yin - Y0;
        var z0 = zin - Z0;
        // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
        // Determine which simplex we are in.
        var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
        var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
        if (x0 >= y0) {
            if (y0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } // X Y Z order
            else if (x0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } // X Z Y order
            else {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } // Z X Y order
        }
        else { // x0<y0
            if (y0 < z0) {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } // Z Y X order
            else if (x0 < z0) {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } // Y Z X order
            else {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } // Y X Z order
        }
        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
        // c = 1/6.
        var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
        var y1 = y0 - j1 + G3;
        var z1 = z0 - k1 + G3;
        var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
        var y2 = y0 - j2 + 2.0 * G3;
        var z2 = z0 - k2 + 2.0 * G3;
        var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
        var y3 = y0 - 1.0 + 3.0 * G3;
        var z3 = z0 - 1.0 + 3.0 * G3;
        // Work out the hashed gradient indices of the four simplex corners
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        // Calculate the contribution from the four corners
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) n0 = 0.0;
        else {
            var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) n1 = 0.0;
        else {
            var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) n2 = 0.0;
        else {
            var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) n3 = 0.0;
        else {
            var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
            t3 *= t3;
            n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to stay just inside [-1,1]
        return 32.0 * (n0 + n1 + n2 + n3);
    },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function (x, y, z, w) {
        var permMod12 = this.permMod12,
            perm = this.perm,
            grad4 = this.grad4;

        var n0, n1, n2, n3, n4; // Noise contributions from the five corners
        // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
        var s = (x + y + z + w) * F4; // Factor for 4D skewing
        var i = Math.floor(x + s);
        var j = Math.floor(y + s);
        var k = Math.floor(z + s);
        var l = Math.floor(w + s);
        var t = (i + j + k + l) * G4; // Factor for 4D unskewing
        var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
        var Y0 = j - t;
        var Z0 = k - t;
        var W0 = l - t;
        var x0 = x - X0; // The x,y,z,w distances from the cell origin
        var y0 = y - Y0;
        var z0 = z - Z0;
        var w0 = w - W0;
        // For the 4D case, the simplex is a 4D shape I won't even try to describe.
        // To find out which of the 24 possible simplices we're in, we need to
        // determine the magnitude ordering of x0, y0, z0 and w0.
        // Six pair-wise comparisons are performed between each possible pair
        // of the four coordinates, and the results are used to rank the numbers.
        var rankx = 0;
        var ranky = 0;
        var rankz = 0;
        var rankw = 0;
        if (x0 > y0) rankx++;
        else ranky++;
        if (x0 > z0) rankx++;
        else rankz++;
        if (x0 > w0) rankx++;
        else rankw++;
        if (y0 > z0) ranky++;
        else rankz++;
        if (y0 > w0) ranky++;
        else rankw++;
        if (z0 > w0) rankz++;
        else rankw++;
        var i1, j1, k1, l1; // The integer offsets for the second simplex corner
        var i2, j2, k2, l2; // The integer offsets for the third simplex corner
        var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
        // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
        // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
        // impossible. Only the 24 indices which have non-zero entries make any sense.
        // We use a thresholding to set the coordinates in turn from the largest magnitude.
        // Rank 3 denotes the largest coordinate.
        i1 = rankx >= 3 ? 1 : 0;
        j1 = ranky >= 3 ? 1 : 0;
        k1 = rankz >= 3 ? 1 : 0;
        l1 = rankw >= 3 ? 1 : 0;
        // Rank 2 denotes the second largest coordinate.
        i2 = rankx >= 2 ? 1 : 0;
        j2 = ranky >= 2 ? 1 : 0;
        k2 = rankz >= 2 ? 1 : 0;
        l2 = rankw >= 2 ? 1 : 0;
        // Rank 1 denotes the second smallest coordinate.
        i3 = rankx >= 1 ? 1 : 0;
        j3 = ranky >= 1 ? 1 : 0;
        k3 = rankz >= 1 ? 1 : 0;
        l3 = rankw >= 1 ? 1 : 0;
        // The fifth corner has all coordinate offsets = 1, so no need to compute that.
        var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
        var y1 = y0 - j1 + G4;
        var z1 = z0 - k1 + G4;
        var w1 = w0 - l1 + G4;
        var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
        var y2 = y0 - j2 + 2.0 * G4;
        var z2 = z0 - k2 + 2.0 * G4;
        var w2 = w0 - l2 + 2.0 * G4;
        var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
        var y3 = y0 - j3 + 3.0 * G4;
        var z3 = z0 - k3 + 3.0 * G4;
        var w3 = w0 - l3 + 3.0 * G4;
        var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
        var y4 = y0 - 1.0 + 4.0 * G4;
        var z4 = z0 - 1.0 + 4.0 * G4;
        var w4 = w0 - 1.0 + 4.0 * G4;
        // Work out the hashed gradient indices of the five simplex corners
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        var ll = l & 255;
        // Calculate the contribution from the five corners
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
        if (t0 < 0) n0 = 0.0;
        else {
            var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
            t0 *= t0;
            n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
        if (t1 < 0) n1 = 0.0;
        else {
            var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
            t1 *= t1;
            n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
        if (t2 < 0) n2 = 0.0;
        else {
            var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
            t2 *= t2;
            n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
        if (t3 < 0) n3 = 0.0;
        else {
            var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
            t3 *= t3;
            n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
        }
        var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
        if (t4 < 0) n4 = 0.0;
        else {
            var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
            t4 *= t4;
            n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
        }
        // Sum up and scale the result to cover the range [-1,1]
        return 27.0 * (n0 + n1 + n2 + n3 + n4);
    }


};

// amd
if (typeof define !== 'undefined' && define.amd) define(function(){return SimplexNoise;});
//common js
if (typeof exports !== 'undefined') exports.SimplexNoise = SimplexNoise;
// browser
else if (typeof navigator !== 'undefined') this.SimplexNoise = SimplexNoise;
// nodejs
if (typeof module !== 'undefined') {
    module.exports = SimplexNoise;
}

})();
