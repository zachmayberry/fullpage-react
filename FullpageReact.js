!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React")):"function"==typeof define&&define.amd?define("FullpageReact",["React"],e):"object"==typeof exports?exports.FullpageReact=e(require("React")):t.FullpageReact=e(t.React)}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=5)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(r),l=function(t){var e=t.render,n=t.className,r=t.window,l=t.horizontal,s=t.horizontalSliderName;if(!e)return null;var c=Array.isArray(t.children)?t.children:[t.children],a=r.innerWidth,u=r.innerHeight,h=t.style||{},d=Object.assign({overflow:"hidden",width:a,height:u,position:"relative"},h),f=l?["HorizontalSlide"]:["VerticalSlide"];n&&f.push(n),f=f.join(" ");var p={"data-slide":l?"HorizontalSlide":"VerticalSlide","data-horizontal-slider":s||null};return o.default.createElement("div",i({className:f,id:t.id},p,{style:d}),c)};e.default=l},function(e,n){e.exports=t},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(1),u=i(a),h=n(0),d=i(h),f=n(3),p=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.name=n.props.name,n}return l(e,t),c(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.activeSlide,n=t.document,i=t.name;(0,t.cache)(this);var r=(0,f.getNodes)(n,'data-horizontal-slider="'+i+'"');(0,f.hideAllButActive)(e,r)}},{key:"render",value:function(){var t=this,e=this.props,n=e.name,i=e.children,r=e.window;if(!n)throw new Error("name is a required prop for HorizontalSlider");var o=e.slides.reduce(function(t,e){return e?("function"!=typeof e.type?t.other.push(e):t.slides.push(e),t):t},{slides:[],other:[]}),l=o.other,c=o.slides,a=r.innerWidth,h=r.innerHeight,f={"data-slide":"HorizontalSlider","data-name":n},p=(e.className||"")+"HorizontalSlider",v=e.hideScrollBars?"hidden":"auto",y=Object.assign({},e.style,{height:r.innerHeight,width:a,position:"relative",overflowX:v,whiteSpace:"nowrap",padding:"0px",margin:"0"}),S={overflow:"hidden",whiteSpace:"normal",display:"inline-block",height:h,width:a};return u.default.createElement("div",s({ref:function(e){return t.node=e},className:p,id:e.id},f,{style:y}),l.map(function(t,e){var n=t.props||{};return u.default.createElement("div",s({key:e},n))}),c.map(function(t,e){if(!t)return null;var i=Object.assign({},S,l),o=t.props||{},l=o.style||{};return u.default.createElement(d.default,s({render:!0,key:e,horizontalSliderName:n,slide:t,id:o.id,className:o.className||"",window:r,horizontal:!0,style:i},o),o.children)}),i)}}]),e}(u.default.Component);e.default=p},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function r(t,e){return t.querySelectorAll("["+e+"]")}function o(t,e){Array.prototype.forEach.call(e,function(e,n){e.style.display=n===t?"inline-block":"none"})}function l(t){Array.prototype.forEach.call(t,function(t){t.style.display="inline-block"})}Object.defineProperty(e,"__esModule",{value:!0}),e.getNodes=e.scrollTo=e.renderUtils=e.INTENT_MAP=e.hideAllButActive=e.showAll=e.constants=void 0;var s=n(7),c=i(s),a=n(8),u=function(t){return t&&t.__esModule?t:{default:t}}(a),h=n(6),d=i(h),f={VERTICAL:{0:"UP",1:"DOWN"},HORIZONTAL:{0:"LEFT",1:"RIGHT"}};e.constants=d,e.showAll=l,e.hideAllButActive=o,e.INTENT_MAP=f,e.renderUtils=c,e.scrollTo=u.default,e.getNodes=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{activeSlide:t,lastActive:t-1}}function a(t,e,n){return t[e||n].parentNode.insertBefore(t[n],t[e]),t}function u(t){a(t,0,t.length-1)}function h(t){a(t,null,t.length-1)}function d(t,e,n){var i=e.slides,r=n.activeSlide;return!n.scrollPending&&(!!e.infinite||!(t>i.length-1||t<0)&&t!=r)}Object.defineProperty(e,"__esModule",{value:!0});var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),v=n(1),y=i(v),S=n(9),w=i(S),g=n(3),b=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(g),m=n(0),E=i(m),A=n(2),O=i(A),T=b.constants,P=b.scrollTo,_=b.renderUtils,k=b.INTENT_MAP,H=b.getNodes,j=b.showAll,N=b.hideAllButActive,C=T.noOp,z=_.KEY_IDX,I={},D={},L=function(t){function e(t){o(this,e);var n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),i=n.props;if(i.infinite&&i.resetSlides)throw new Error("Fullpage Component cannot have both infinite and resetSlides as truthy props");var r=i.slides,s=i.window;if(!r||!r.length)throw new Error("Please provide slides for Fullpage");s&&(D.window=s,D.document=D.window.document);var a={},u=r.reduce(function(t,e,n){var i=e.props.name;return e.props.slides&&i&&(t[i]=c(0),a[n]=i),t},{});u.horizontalMap=a,n.name="Fullpage";var h=i.activeSlide||0;return n.scrollSensitivity=i.scrollSensitivity||10,n.touchSensitivity=i.touchSensitivity||10,n.scrollSpeed=i.scrollSpeed||500,n.node=null,n.ss=null,n.onHorizontalChange=i.onHorizontalChange||C,n.onSlideChangeStart=i.onSlideChangeStart||C,n.onSlideChangeEnd=i.onSlideChangeEnd||C,n.onScrollAction=n.onScrollAction.bind(n),n.onVerticalScroll=n.onVerticalScroll.bind(n),n.onHorizontalScroll=n.onHorizontalScroll.bind(n),n.resize=n.resize.bind(n),n.handleScroll=n.handleScroll.bind(n),n.hSlideCache={},n.cacheHslide=function(t){n.hSlideCache[t.name]=t},I=n,n.state=Object.assign({scrollPending:!1,window:null,document:null},u,c(h)),n}return s(e,t),p(e,[{key:"componentDidMount",value:function(){var t=this;if(D.window||(D.window=window||this.props.window||null,D.document=D.window?D.window.document:null),!D.window)throw new Error("Window is not available at componentDidMount, please provide a stub and pass window into props when available");this.setState({window:D.window,document:D.document},function(){t.init.call(t)})}},{key:"init",value:function(){var t=this.props,e=t.breakpoint,n=t.enableArrowKeys,i=t.hideScrollBars,r=this.state,o=r.window,l=r.document,s=o.innerWidth;o.addEventListener("resize",this.resize.bind(this,o)),this.resize(o);var c=e&&e>=s;if(i&&!c&&(l.documentElement.style.overflow="hidden",l.body.style.overflow="hidden"),n&&o.addEventListener("keydown",this.checkKey.bind(this)),!c){var a=this.node,u=new w.default({target:a,scrollSensitivity:3*this.scrollSensitivity,touchSensitivity:3*this.touchSensitivity,scrollPreventDefault:!0,touchPreventDefault:!0,scrollCb:this.onScrollAction,touchCb:this.onScrollAction});this.ss=u}}},{key:"resize",value:function(t){this.setState({width:t.innerWidth,height:t.innerHeight})}},{key:"onScrollAction",value:function(t){var e=t.direction,n=t.intent,i=t.startEvent;if(!this.state.scrollPending){var r=k[e];if("VERTICAL"===e)return this.onVerticalScroll(r[n],i);var o=i.path,l=o.find(function(t){return!!t.dataset&&"HorizontalSlider"===t.dataset.slide});l&&this.onHorizontalScroll(r[n],l)}}},{key:"onVerticalScroll",value:function(t){var e=this,n=this.state,i=n.window,r=n.document,o=n.activeSlide,l="DOWN"===t?o+1:o-1,s=l*i.innerHeight,c={activeSlide:l,lastActive:o};this.setState({scrollPending:!0},function(){e.handleScroll(r.body,"scrollTop",s,c,e.name)})}},{key:"onHorizontalScroll",value:function(t,e){var n=e.dataset.name,i=this.state[n].activeSlide,o="RIGHT"===t?i+1:i-1,l=this.state.window.innerWidth,s=I.hSlideCache[n],c=s.props,a=c.infinite,u=H(this.state.document,'data-horizontal-slider="'+n+'"'),h=i*l,d=o*l,f=this.determineHSlide(s,i,o,h,d,u);h=f.leftVal,o=f.next,d=f.to;var p=r({},n,{activeSlide:o,lastActive:i});this.handleHorizontal(n,e,u,h,d,o,p,a)}},{key:"determineHSlide",value:function(t,e,n,i,r,o){var l=t.props,s=l.infinite,c=l.resetSlides,a=this.state.window.innerWidth,h=o.length,d=0===e&&-1===n,f=e===h-1&&n===h;return s||c||!d&&!f?(s&&d?(n=h-1,u(o),i=a,r=0):s&&f&&(n=0,u(o),i=0,r=a),{next:n,leftVal:i,to:r}):this.ss.listen()}},{key:"handleHorizontal",value:function(t,e,n,i,r,o,l,s){var c=this;j(n),e.scrollLeft=i,this.setState({scrollPending:!0},function(){c.handleScroll(e,"scrollLeft",r,l,t,function(){s&&(h(n),e.scrollLeft=innerWidth*o),N(o,n)})})}},{key:"handleScroll",value:function(t,e,n,i,r){var o=this,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:C;this.ss.flush(),this.onSlideChangeStart(r,this.props,this.state,i[r]||i),P(t,e,n,this.scrollSpeed,function(){i.scrollPending=!1,o.setState(i,function(){l(),o.onSlideChangeEnd(r,o.props,o.state,i[r]||i),setTimeout(function(){o.ss.flush(),o.ss.listen()},200)})})}},{key:"componentWillUnmount",value:function(){this.ss.killAll(),this.ss=null;var t=this.state.window;t.removeEventListener("resize",this.resize.bind(this)),this.props.enableArrowKeys&&t.removeEventListener("keydown",this.checkKey.bind(this))}},{key:"checkKey",value:function(t){var n=z[t.keyCode];if(n){var i="UP"===n||"LEFT"===n?-1:1;if("VERTICAL"===("UP"===n||"DOWN"===n?"VERTICAL":"HORIZONTAL"))return void e.changeFullpageSlide(this.state.activeSlide+i);var r=this.state.horizontalMap[this.state.activeSlide];if(r){var o=this.state[r].activeSlide;e.changeHorizontalSlide(r,o+i)}}}},{key:"render",value:function(){var t=this,e=this.state,n=this.props,i=e.window,r=e.document;if(!i)return n.children;var o=n.slides.reduce(function(t,e){return e?("function"!=typeof e.type?t.other.push(e):t.slides.push(e),t):t},{slides:[],other:[]}),l=o.other,s=o.slides;return y.default.createElement("div",{ref:function(e){return t.node=e},className:"Fullpage"},n.children,l.map(function(t,e){var n=t.props||{};return y.default.createElement("div",f({key:e},n))}),s.map(function(o,l){var s=o.props||{},c=s.children;if(s.slides){var a=s.name;return y.default.createElement(O.default,f({cache:t.cacheHslide.bind(t),window:i,document:r,activeSlide:e[a].activeSlide,hideScrollBars:n.hideScrollBars},s,{key:l}),c)}return y.default.createElement(E.default,f({render:!0,className:s.className||"",id:s.id,window:i,document:r,key:l},s),c)}))}}],[{key:"changeHorizontalSlide",value:function(t,e){e=+e;var n=I.hSlideCache[t];if(!n)throw Error("cannt find HorizontalSlider by name",t);var i=n.node,o=n.props,l=o.infinite;if(d(e,o,I.state)){var s=I.state[t].activeSlide,c=H(I.state.document,'data-horizontal-slider="'+t+'"'),a=s*innerWidth,u=e*innerWidth,h=I.determineHSlide.call(I,n,s,e,a,u,c);a=h.leftVal,e=h.next,u=h.to;var f=r({},t,{activeSlide:e,lastActive:s});I.handleHorizontal.call(I,t,i,c,a,u,e,f,l)}}},{key:"changeFullpageSlide",value:function(t){var e=I,n=e.props,i=e.state,r=i.activeSlide,o=i.window,l=i.document;if(d(t,n,i)){var s={activeSlide:t,lastActive:r},c=t*o.innerHeight;e.setState({scrollPending:!0},function(){e.handleScroll(l.body,"scrollTop",c,s,e.name)})}}}]),e}(y.default.Component);e.default=L},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HorizontalSlider=e.Slide=e.Fullpage=void 0;var r=n(4),o=i(r),l=n(0),s=i(l),c=n(2),a=i(c);e.Fullpage=o.default,e.Slide=s.default,e.HorizontalSlider=a.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){};e.INCREMENT="INCREMENT",e.DECREMENT="DECREMENT",e.VERTICAL="VERTICAL",e.HORIZONTAL="HORIZONTAL",e.I_BLOCK="inline-block",e.HEAD="HEAD",e.TAIL="TAIL",e.BLOCK="block",e.NONE="none",e.noOp=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};e.KEY_IDX=i},function(t,e,n){"use strict";function i(t,e,n,i,o){function l(n){a+=u;var o=r(a,s,c,i);return t[e]=o,a<i?a>h?void setTimeout(function(){l(n)},d):void setTimeout(function(){l(n)},u):n()}var s=t[e],c=n-s,a=0,u=10,h=.8*i,d=15;l(o)}function r(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){var i,r,o;!function(n,l){r=[],i=l,void 0!==(o="function"==typeof i?i.apply(e,r):i)&&(t.exports=o)}(0,function(){"use strict";function e(t){var e=this;if(Object.keys(t).forEach(function(n){if(r[n])return void(e[n]=t[n]);throw new Error("unknown options for ScrollSwipe: "+n)}),!t.target)throw new Error("must provide DOM target element to ScrollSwipe");return(!this.scrollSensitivity||this.scrollSensitivity<0)&&(this.scrollSensitivity=0),(!this.touchSensitivity||this.touchSensitivity<0)&&(this.touchSensitivity=0),this.startTouchEvent=null,this.latestTouchEvent=null,this.latestTouch=null,this.startScrollEvent=null,this.latestScrollEvent=null,this.latestScroll=null,this.intent=0,this.currentDirection=i,this.touchArr=[],this.xArr=[],this.yArr=[],this.touchArrX=[],this.touchArrY=[],this.scrollPending=!1,this.target.style&&(this.target.style.touchAction="none"),this.scrollCb&&this.initScroll(),this.touchCb&&this.initTouch(),this}function n(t,e){this.previousIntent=this.currentIntent,this.currentIntent=t,this.previousDirection=this.currentDirection,this.currentDirection=e}var i="VERTICAL",r={target:!0,scrollSensitivity:!0,touchSensitivity:!0,scrollCb:!0,touchCb:!0,scrollPreventDefault:!0,touchPreventDefault:!0};return t.exports=e,e.prototype.listen=function(){return this.flush(),this.scrollPending=!1,this},e.prototype.killScroll=function(){return this.target.removeEventListener("wheel"),this},e.prototype.killTouch=function(){return this.target.removeEventListener("touchmove"),this.target.removeEventListener("touchend"),this},e.prototype.killAll=function(){return this.killScroll().killTouch(),this},e.prototype.initScroll=function(){var t=this;return this.target.addEventListener("wheel",function(e){if(t.scrollPreventDefault&&e.preventDefault(),!t.scrollPending){t.startScrollEvent=e;var n=e.deltaX,i=e.deltaY;t.addXScroll(n),t.addYScroll(i),t.scrollFulfilled(function(n,i,r){if(n){t.latestScrollEvent=e;var o={startEvent:e,lastEvent:t.latestScrollEvent,scrollPending:t.scrollPending,direction:i,intent:r};t.scrollCb(o)}})}}),this},e.prototype.initTouch=function(){var t=this;return this.target.addEventListener("touchmove",function(e){t.touchPreventDefault&&e.preventDefault();var n=e.changedTouches[0],i=n.clientX,r=n.clientY;t.startTouchEvent=e,t.addXTouch(i),t.addYTouch(r)}),this.target.addEventListener("touchend",function(e){t.touchFulfilled(e,function(e,n,i){if(e){var r={startEvent:t.startTouchEvent,lastEvent:t.latestTouchEvent,scrollPending:t.scrollPending,direction:n,intent:i};t.touchCb(r)}})}),this},e.prototype.touchFulfilled=function(t,e){if(!t)throw new Error("must provide event to touchFulfilled");if(!e)throw new Error("must provide callback to touchFulfilled");var r=this.touchSensitivity,o=this.touchArrX,l=this.touchArrY;if(!(o.length>r&&l.length>r))return e(!1,null);var s=t.changedTouches[0],c=o[0],a=l[0],u=s.clientX,h=s.clientY,d=c<u?0:1,f=a<h?0:1,p=i;Math.abs(c-u)>Math.abs(a-h)&&(p="HORIZONTAL");var v=p===i?f:d;return n.call(this,v,p),this.resetTouches(),this.scrollPending=!0,this.latestTouchEvent=t,e(this.scrollPending,this.currentDirection,this.currentIntent),this},e.prototype.getTouch=function(t){return this.touchArr[t]},e.prototype.addXTouch=function(t){return this.pending()?this:(this.latestTouch=t,this.touchArrX.push(t),this)},e.prototype.addYTouch=function(t){return this.pending()?this:(this.latestTouch=t,this.touchArrY.push(t),this)},e.prototype.resetTouches=function(){return this.touchArrX=[],this.touchArrY=[],this},e.prototype.addXScroll=function(t){return this.pending()?this:(this.latestScroll=t,this.xArr.push(t),this)},e.prototype.addYScroll=function(t){return this.pending()?this:(this.latestScroll=t,this.yArr.push(t),this)},e.prototype.getDirection=function(){return this.currentDirection},e.prototype.resetScroll=function(){return this.xArr=[],this.yArr=[],this},e.prototype.flush=function(){return this.resetScroll(),this.resetTouches(),this},e.prototype.scrollFulfilled=function(t){if(!t)throw new Error("must provide callback to scrollFulfilled");var e=this.xArr,i=this.yArr,r=this.scrollSensitivity,o=e.length>r&&i.length>r,l=this.evalScrollDirection(),s=l.direction,c=l.intent;return o&&(n.call(this,c,s),this.resetScroll(),this.scrollPending=!0),t(this.scrollPending,this.currentDirection,this.currentIntent),this},e.prototype.evalScrollDirection=function(){var t=this.getSums(),e=t.x,n=t.y,r=t.xIntent,o=t.yIntent,l=e>n?"HORIZONTAL":i,s=l===i?o:r,c=0;return s>0&&(c=1),{direction:l,intent:c}},e.prototype.getSums=function(){var t=this.xArr,e=this.yArr,n=0,i=0;return{x:t.reduce(function(t,e){return n+=e,t+=Math.abs(e)},0),y:e.reduce(function(t,e){return i+=e,t+=Math.abs(e)},0),xIntent:n,yIntent:i}},e.prototype.getScrollDirection=function(){return this.currentDirection},e.prototype.pending=function(){return this.scrollPending},e})}])});
//# sourceMappingURL=FullpageReact.js.map