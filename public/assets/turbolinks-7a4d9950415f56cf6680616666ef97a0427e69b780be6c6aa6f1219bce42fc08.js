(function(){var e,t,a,n,i,o,r,l,s,c,d,u,m,p,h,g,f,b,v,T,E,C,k,y,I,D,R,O,S,w,A,K,_,L,x,N,F,P,B,M,z,j,$,H,q,V,U,W,G,Y,Z,X,J,Q,ee,te,ae=[].indexOf||function(e){for(var t=0,a=this.length;a>t;t++)if(t in this&&this[t]===e)return t;return-1},ne=function(e,t){function a(){this.constructor=e}for(var n in t)ie.call(t,n)&&(e[n]=t[n]);return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e},ie={}.hasOwnProperty,oe=[].slice,re=function(e,t){return function(){return e.apply(t,arguments)}};L={},m=10,X=!1,B=null,v=null,K=null,j=null,te=null,n={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",EXPIRE:"page:expire"},y=function(e){var t;return e=new a(e),U(),u(),null!=B&&B.start(),X&&(t=J(e.absolute))?(I(t),D(e,null,!1)):D(e,Y)},J=function(e){var t;return t=L[e],t&&!t.transitionCacheDisabled?t:void 0},E=function(e){return null==e&&(e=!0),X=e},T=function(e){return null==e&&(e=!0),c?e?null!=B?B:B=new o("html"):(null!=B&&B.uninstall(),B=null):void 0},D=function(e,t,a){return null==a&&(a=!0),Q(n.FETCH,{url:e.absolute}),null!=te&&te.abort(),te=new XMLHttpRequest,te.open("GET",e.withoutHashForIE10compatibility(),!0),te.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),te.setRequestHeader("X-XHR-Referer",j),te.onload=function(){var a;return Q(n.RECEIVE,{url:e.absolute}),(a=P())?($(e),H(),p.apply(null,k(a)),_(),"function"==typeof t&&t(),Q(n.LOAD)):document.location.href=b()||e.absolute},B&&a&&(te.onprogress=function(e){return function(e){var t;return t=e.lengthComputable?e.loaded/e.total*100:B.value+(100-B.value)/10,B.advanceTo(t)}}(this)),te.onloadend=function(){return te=null},te.onerror=function(){return document.location.href=e.absolute},te.send()},I=function(e){return null!=te&&te.abort(),p(e.title,e.body),M(e),Q(n.RESTORE)},u=function(){var e;return e=new a(v.url),L[e.absolute]={url:e.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},g(m)},N=function(e){return null==e&&(e=m),/^[\d]+$/.test(e)?m=parseInt(e):void 0},g=function(e){var t,a,i,o,r,l;for(r=Object.keys(L),t=r.map(function(e){return L[e].cachedAt}).sort(function(e,t){return t-e}),l=[],a=0,o=r.length;o>a;a++)i=r[a],L[i].cachedAt<=t[e]&&(Q(n.EXPIRE,L[i]),l.push(delete L[i]));return l},p=function(t,a,i,o){return Q(n.BEFORE_UNLOAD),document.title=t,document.documentElement.replaceChild(a,document.body),null!=i&&e.update(i),Z(),o&&C(),v=window.history.state,null!=B&&B.done(),Q(n.CHANGE),Q(n.UPDATE)},C=function(){var e,t,a,n,i,o,r,l,s,c,d,u;for(u=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),a=0,i=u.length;i>a;a++)if(d=u[a],""===(s=d.type)||"text/javascript"===s){for(t=document.createElement("script"),c=d.attributes,n=0,o=c.length;o>n;n++)e=c[n],t.setAttribute(e.name,e.value);d.hasAttribute("async")||(t.async=!1),t.appendChild(document.createTextNode(d.innerHTML)),l=d.parentNode,r=d.nextSibling,l.removeChild(d),l.insertBefore(t,r)}},W=function(e){return e.innerHTML=e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),e},Z=function(){var e,t;return e=(t=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[t.length-1],e&&document.activeElement!==e?e.focus():void 0},$=function(e){return(e=new a(e)).absolute!==j?window.history.pushState({turbolinks:!0,url:e.absolute},"",e.absolute):void 0},H=function(){var e,t;return(e=te.getResponseHeader("X-XHR-Redirected-To"))?(e=new a(e),t=e.hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",e.href+t)):void 0},b=function(){var e;return null!=(e=te.getResponseHeader("Location"))&&new a(e).crossOrigin()?e:void 0},U=function(){return j=document.location.href},V=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},q=function(){return v=window.history.state},_=function(){var e;return navigator.userAgent.match(/Firefox/)&&!(e=new a).hasNoHash()?(window.history.replaceState(v,"",e.withoutHash()),document.location.hash=e.hash):void 0},M=function(e){return window.scrollTo(e.positionX,e.positionY)},Y=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},h=function(e){var t,a,n;if(null==e||"object"!=typeof e)return e;t=new e.constructor;for(a in e)n=e[a],t[a]=h(n);return t},F=function(e){var t,a;return a=(null!=(t=document.cookie.match(new RegExp(e+"=(\\w+)")))?t[1].toUpperCase():void 0)||"",document.cookie=e+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",a},Q=function(e,t){var a;return"undefined"!=typeof Prototype&&Event.fire(document,e,t,!0),a=document.createEvent("Events"),t&&(a.data=t),a.initEvent(e,!0,!0),document.dispatchEvent(a)},x=function(e){return!Q(n.BEFORE_CHANGE,{url:e})},P=function(){var e,t,a,n,i,o;return t=function(){var e;return 400<=(e=te.status)&&600>e},o=function(){var e;return null!=(e=te.getResponseHeader("Content-Type"))&&e.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},n=function(e){var t,a,n,i,o;for(i=e.querySelector("head").childNodes,o=[],t=0,a=i.length;a>t;t++)n=i[t],null!=("function"==typeof n.getAttribute?n.getAttribute("data-turbolinks-track"):void 0)&&o.push(n.getAttribute("src")||n.getAttribute("href"));return o},e=function(e){var t;return K||(K=n(document)),t=n(e),t.length!==K.length||i(t,K).length!==K.length},i=function(e,t){var a,n,i,o,r;for(e.length>t.length&&(i=[t,e],e=i[0],t=i[1]),o=[],a=0,n=e.length;n>a;a++)r=e[a],ae.call(t,r)>=0&&o.push(r);return o},!t()&&o()&&(a=f(te.responseText),a&&!e(a))?a:void 0},k=function(t){var a;return a=t.querySelector("title"),[null!=a?a.textContent:void 0,W(t.querySelector("body")),e.get(t).token,"runScripts"]},e={get:function(e){var t;return null==e&&(e=document),{node:t=e.querySelector('meta[name="csrf-token"]'),token:null!=t&&"function"==typeof t.getAttribute?t.getAttribute("content"):void 0}},update:function(e){var t;return t=this.get(),null!=t.token&&null!=e&&t.token!==e?t.node.setAttribute("content",e):void 0}},f=function(e){var t;return t=document.documentElement.cloneNode(),t.innerHTML=e,t.head=t.querySelector("head"),t.body=t.querySelector("body"),t},a=function(){function e(t){return this.original=null!=t?t:document.location.href,this.original.constructor===e?this.original:void this._parse()}return e.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},e.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},e.prototype.hasNoHash=function(){return 0===this.hash.length},e.prototype.crossOrigin=function(){return this.origin!==(new e).origin},e.prototype._parse=function(){var e;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,e=this.link,this.href=e.href,this.protocol=e.protocol,this.host=e.host,this.hostname=e.hostname,this.port=e.port,this.pathname=e.pathname,this.search=e.search,this.hash=e.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},e}(),i=function(e){function t(e){return this.link=e,this.link.constructor===t?this.link:(this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),void t.__super__.constructor.apply(this,arguments))}return ne(t,e),t.HTML_EXTENSIONS=["html"],t.allowExtensions=function(){var e,a,n,i;for(a=1<=arguments.length?oe.call(arguments,0):[],n=0,i=a.length;i>n;n++)e=a[n],t.HTML_EXTENSIONS.push(e);return t.HTML_EXTENSIONS},t.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},t.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new a).withoutHash()},t.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+t.HTML_EXTENSIONS.join("|")+")?$","g"))},t.prototype._optOut=function(){var e,t;for(t=this.originalElement;!e&&t!==document;)e=null!=t.getAttribute("data-no-turbolink"),t=t.parentNode;return e},t.prototype._target=function(){return 0!==this.link.target.length},t}(a),t=function(){function e(e){this.event=e,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(x(this.link.absolute)||ee(this.link.href),this.event.preventDefault()))}return e.installHandlerLast=function(t){return t.defaultPrevented?void 0:(document.removeEventListener("click",e.handle,!1),document.addEventListener("click",e.handle,!1))},e.handle=function(t){return new e(t)},e.prototype._extractLink=function(){var e;for(e=this.event.target;e.parentNode&&"A"!==e.nodeName;)e=e.parentNode;return"A"===e.nodeName&&0!==e.href.length?this.link=new i(e):void 0},e.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},e.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},e}(),o=function(){function e(e){this.elementSelector=e,this._trickle=re(this._trickle,this),this.value=0,this.content="",this.speed=300,this.opacity=.99,this.install()}var t;return t="turbolinks-progress-bar",e.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(t),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},e.prototype.uninstall=function(){return this.element.classList.remove(t),document.head.removeChild(this.styleElement)},e.prototype.start=function(){return this.advanceTo(5)},e.prototype.advanceTo=function(e){var t;if(e>(t=this.value)&&100>=t){if(this.value=e,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},e.prototype.done=function(){return this.value>0?(this.advanceTo(100),this._reset()):void 0},e.prototype._reset=function(){var e;return e=this.opacity,setTimeout(function(e){return function(){return e.opacity=0,e._updateStyle()}}(this),this.speed/2),setTimeout(function(t){return function(){return t.value=0,t.opacity=e,t._withSpeed(0,function(){return t._updateStyle(!0)})}}(this),this.speed)},e.prototype._startTrickle=function(){return this.trickling?void 0:(this.trickling=!0,setTimeout(this._trickle,this.speed))},e.prototype._stopTrickle=function(){return delete this.trickling},e.prototype._trickle=function(){return this.trickling?(this.advanceTo(this.value+Math.random()/2),setTimeout(this._trickle,this.speed)):void 0},e.prototype._withSpeed=function(e,t){var a,n;return a=this.speed,this.speed=e,n=t(),this.speed=a,n},e.prototype._updateStyle=function(e){return null==e&&(e=!1),e&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},e.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},e.prototype._createCSSRule=function(){return this.elementSelector+"."+t+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+this.value+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},e}(),d=function(e){return setTimeout(e,500)},S=function(){return document.addEventListener("DOMContentLoaded",function(){return Q(n.CHANGE),Q(n.UPDATE)},!0)},A=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(e,t,a){return jQuery.trim(t.responseText)?Q(n.UPDATE):void 0}):void 0},w=function(e){var t,n;return(null!=(n=e.state)?n.turbolinks:void 0)?(t=L[new a(e.state.url).absolute])?(u(),I(t)):ee(e.target.location.href):void 0},O=function(){return V(),q(),document.addEventListener("click",t.installHandlerLast,!0),window.addEventListener("hashchange",function(e){return V(),q()},!1),d(function(){return window.addEventListener("popstate",w,!1)})},R=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),s=window.history&&window.history.pushState&&window.history.replaceState&&R,r=!navigator.userAgent.match(/CriOS\//),G="GET"===(z=F("request_method"))||""===z,c=s&&r&&G,l=document.addEventListener&&document.createEvent,l&&(S(),A()),c?(ee=y,O()):ee=function(e){return document.location.href=e},this.Turbolinks={visit:ee,pagesCached:N,enableTransitionCache:E,enableProgressBar:T,allowLinkExtensions:i.allowExtensions,supported:c,EVENTS:h(n)}}).call(this);