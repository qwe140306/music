(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-417dca83"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function i(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return s(t)||a(t)||i(t)||c()}},"498a":function(t,e,r){"use strict";var n=r("23e7"),s=r("58a8").trim,a=r("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return s(this)}})},"4d63":function(t,e,r){var n=r("83ab"),s=r("da84"),a=r("94ca"),i=r("7156"),c=r("9112"),o=r("9bf2").f,u=r("241c").f,l=r("44e7"),h=r("577e"),f=r("ad6d"),d=r("9f7f"),g=r("6eeb"),p=r("d039"),v=r("5135"),y=r("69f3").enforce,m=r("2626"),x=r("b622"),b=r("fce3"),w=r("107c"),k=x("match"),S=s.RegExp,C=S.prototype,R=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,_=/a/g,O=/a/g,T=new S(_)!==_,j=d.UNSUPPORTED_Y,E=n&&(!T||j||b||w||p((function(){return O[k]=!1,S(_)!=_||S(O)==O||"/a/i"!=S(_,"i")}))),L=function(t){for(var e,r=t.length,n=0,s="",a=!1;n<=r;n++)e=t.charAt(n),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),s+=e):s+="[\\s\\S]":s+=e+t.charAt(++n);return s},A=function(t){for(var e,r=t.length,n=0,s="",a=[],i={},c=!1,o=!1,u=0,l="";n<=r;n++){if(e=t.charAt(n),"\\"===e)e+=t.charAt(++n);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:R.test(t.slice(n+1))&&(n+=2,o=!0),s+=e,u++;continue;case">"===e&&o:if(""===l||v(i,l))throw new SyntaxError("Invalid capture group name");i[l]=!0,a.push([l,u]),o=!1,l="";continue}o?l+=e:s+=e}return[s,a]};if(a("RegExp",E)){for(var I=function(t,e){var r,n,s,a,o,u,d=this instanceof I,g=l(t),p=void 0===e,v=[],m=t;if(!d&&g&&p&&t.constructor===I)return t;if((g||t instanceof I)&&(t=t.source,p&&(e="flags"in m?m.flags:f.call(m))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),m=t,b&&"dotAll"in _&&(n=!!e&&e.indexOf("s")>-1,n&&(e=e.replace(/s/g,""))),r=e,j&&"sticky"in _&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,""))),w&&(a=A(t),t=a[0],v=a[1]),o=i(S(t,e),d?this:C,I),(n||s||v.length)&&(u=y(o),n&&(u.dotAll=!0,u.raw=I(L(t),r)),s&&(u.sticky=!0),v.length&&(u.groups=v)),t!==m)try{c(o,"source",""===m?"(?:)":m)}catch(x){}return o},$=function(t){t in I||o(I,t,{configurable:!0,get:function(){return S[t]},set:function(e){S[t]=e}})},M=u(S),P=0;M.length>P;)$(M[P++]);C.constructor=I,I.prototype=C,g(s,"RegExp",I)}m("RegExp")},"4df4":function(t,e,r){"use strict";var n=r("0366"),s=r("7b0b"),a=r("9bdd"),i=r("e95a"),c=r("68ee"),o=r("50c4"),u=r("8418"),l=r("9a1f"),h=r("35a1");t.exports=function(t){var e=s(t),r=c(this),f=arguments.length,d=f>1?arguments[1]:void 0,g=void 0!==d;g&&(d=n(d,f>2?arguments[2]:void 0,2));var p,v,y,m,x,b,w=h(e),k=0;if(!w||this==Array&&i(w))for(p=o(e.length),v=r?new this(p):Array(p);p>k;k++)b=g?d(e[k],k):e[k],u(v,k,b);else for(m=l(e,w),x=m.next,v=r?new this:[];!(y=x.call(m)).done;k++)b=g?a(m,d,[y.value,k],!0):y.value,u(v,k,b);return v.length=k,v}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),s=r("577e"),a=r("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),u=function(t){return function(e){var r=s(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},"70b8":function(t,e,r){"use strict";r("84c1")},7156:function(t,e,r){var n=r("1626"),s=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var i,c;return a&&n(i=e.constructor)&&i!==r&&s(c=i.prototype)&&c!==r.prototype&&a(t,c),t}},"79ce":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("van-field",{ref:"searchInp",attrs:{"label-width":"0.64rem",placeholder:t.showKeyword,clearable:""},on:{input:t.getSearchSuggest,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterSerach.apply(null,arguments)},focus:function(e){return t.getSearchSuggest(e.target.value)}},scopedSlots:t._u([{key:"left-icon",fn:function(){return[r("van-icon",{attrs:{name:"arrow-left"},on:{click:t.returnPre}})]},proxy:!0}]),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t.historyList.length>0&&0===t.searchResults.length&&!t.searchText?r("div",{staticClass:"history"},[r("div",{staticClass:"text"},[t._v("历史")]),r("div",{staticClass:"history-list"},t._l(t.historyList,(function(e){return r("van-button",{key:e,staticClass:"history-item",attrs:{size:"mini",round:""},on:{click:function(e){return t.clickSearch(e.target.innerText)}}},[t._v(" "+t._s(e)+" ")])})),1),r("van-icon",{attrs:{size:"0.54rem",name:"delete-o"},on:{click:t.deleteHistory}})],1):t._e(),t.searchText||0!==t.searchResults.length?t.suggest.length>0&&0===t.searchResults.length?r("div",{staticClass:"search-suggest"},t._l(t.suggest,(function(e){return r("van-cell",{key:e.keyword,attrs:{icon:"search"},on:{click:function(e){return t.clickSearch(e.target.innerText)}},scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{domProps:{innerHTML:t._s(e.keyword)}})]},proxy:!0}],null,!0)})})),1):!t.isShowNotMatch&&0===t.suggest.length&&t.searchText&&0===t.searchResults.length?r("div",{staticClass:"search-suggest-null"},[r("van-cell",{on:{click:function(e){return t.clickSearch(t.searchText)}}},[t._v("搜索”"+t._s(t.searchText)+"“")])],1):0!==t.searchResults.length?r("div",{staticClass:"search-results"},[r("van-sticky",{attrs:{"offset-top":"1.36rem"}},[r("div",{staticClass:"title"},[r("van-icon",{staticClass:"play-icon",attrs:{name:"play-circle",color:"#E34D3B",size:"0.533rem"}}),r("span",{staticClass:"text"},[t._v("播放全部")]),r("van-icon",{attrs:{name:"passed",size:"0.533rem"}})],1)]),0!==t.searchResults.length?r("van-list",{staticClass:"results-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.searchResults,(function(e){return r("div",{key:e.id,staticClass:"result-item",on:{click:function(r){return t.playMusic(e)}}},[r("div",{staticClass:"item-left van-ellipsis"},[r("div",{staticClass:"song-name van-ellipsis"},[t._v(" "+t._s(e.name)+" ")]),r("div",{staticClass:"song-author van-ellipsis"},[t._v(" "+t._s(e.ar[0].name)+" - "+t._s(e.al.name)+" ")]),e.alia?r("div",{staticClass:"song-tip van-ellipsis"},[t._v(" "+t._s(e.alia[0])+" ")]):t._e()]),r("div",{staticClass:"item-right"},[r("van-icon",{attrs:{"class-prefix":"iconfont icon-youcecaidan",size:"0.54rem"}})],1)])})),0):t._e()],1):t._e():r("div",{staticClass:"hot-search"},[r("van-tag",{attrs:{color:"#ffffff","text-color":"#000000",size:"large"}},[t._v("热搜榜 ")]),r("div",{staticClass:"hot-search-list"},t._l(t.hotList,(function(e,n){return r("span",{key:e.score,staticClass:"hot-search-item",on:{click:function(r){return t.clickSearch(e.searchWord)}}},[r("span",{staticClass:"score-ranking",class:n<3?"firstThree":""},[t._v(t._s(n+1))]),r("span",{staticClass:"hot-text van-ellipsis",class:n<3?"firstText":""},[t._v(t._s(e.searchWord))]),e.iconUrl&&5!==e.iconType?r("van-image",{attrs:{width:"0.8rem",src:e.iconUrl}}):t._e(),e.iconUrl&&5===e.iconType?r("van-image",{attrs:{width:"0.3rem",src:e.iconUrl}}):t._e()],1)})),0)],1),r("playControlPanel")],1)},s=[],a=r("2909"),i=r("1da1"),c=r("5530"),o=(r("96cf"),r("498a"),r("ac1f"),r("841c"),r("5319"),r("159b"),r("a434"),r("b64b"),r("4d63"),r("25f0"),r("99af"),r("2ef0")),u=r("5d2d"),l=r("2f62"),h=r("d2e4"),f={name:"Search",components:{playControlPanel:h["a"]},data:function(){return{isSend:!1,searchText:"",showKeyword:"",hotList:[],suggest:[],hasMore:!1,index:0,searchResults:[],loading:!1,finished:!1,historyList:Object(u["a"])("historyList")||[],isShowNotMatch:!0,songCount:0}},computed:Object(c["a"])({},Object(l["b"])(["musicIndex"])),methods:{deleteHistory:function(){var t=this;this.$dialog.confirm({message:"是否清空历史记录"}).then((function(){t.historyList=[],Object(u["b"])("historyList")})).catch((function(){}))},enterSerach:function(t){t.target.value.trim()||(this.searchText=this.showKeyword),this.$refs.searchInp.blur(),this.search(this.searchText)},clickSearch:function(t){console.log(t),this.searchText=t,this.$refs.searchInp.blur(),this.search(t)},onLoad:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$refs.searchInp.value,e.next=3,t.search(r,t.searchResults.length);case 3:t.loading=!1,console.log(t.searchResults.length),console.log(t.songCount),t.searchResults.length>=t.songCount&&(t.finished=!0);case 7:case"end":return e.stop()}}),e)})))()},returnPre:function(){this.searchText="",this.suggest=[],this.searchResults=[],this.$router.replace({name:"Home"})},playMusic:function(t){var e,r=Object(u["a"])("songList");null===r?(Object(u["c"])("songList",[t]),this.$store.commit("CHANGEMUSICINDEX",0),this.$router.push({name:"PlayMusic",params:{id:t.id}})):(r.forEach((function(r,n){r.id===t.id&&(e=n,console.log(e))})),void 0===e&&(console.log(e),console.log("baocunle"),e=1*this.musicIndex+1,r.splice(e,0,t),Object(u["c"])("songList",r)),this.$store.commit("CHANGEMUSICINDEX",e),this.$router.push({name:"PlayMusic",params:{id:t.id}}))},searchDefault:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios("/search/default");case 2:r=e.sent,n=r.data,t.showKeyword=n.data.showKeyword;case 5:case"end":return e.stop()}}),e)})))()},getSearchHot:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios("/search/hot/detail");case 2:r=e.sent,n=r.data,t.hotList=n.data;case 5:case"end":return e.stop()}}),e)})))()},getSearchSuggest:Object(o["debounce"])(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.searchResults=[],this.isShowNotMatch=!0,e.trim()){t.next=6;break}return this.isSend=!0,this.suggest=[],t.abrupt("return");case 6:return this.isSend=!1,t.next=9,this.$axios("/search/suggest?keywords=".concat(e,"&type=mobile"));case 9:if(r=t.sent,n=r.data,0!==Object.keys(n.result).length){t.next=15;break}return this.suggest=[],this.isShowNotMatch=!1,t.abrupt("return");case 15:this.isShowNotMatch=!0,s=new RegExp(e,"g"),a='<span style="color: #e04439" class="search-value">'+e+"</span>",n.result.allMatch.forEach((function(t){t.keyword=t.keyword.replace(s,a)})),this.suggest=n.result.allMatch;case 20:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),200),search:function(t,e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,i,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r.finished){n.next=2;break}return n.abrupt("return");case 2:return r.isSend=!0,n.prev=3,n.next=6,r.$axios("/cloudsearch?keywords=".concat(t,"&type=1&offset=").concat(e||0));case 6:if(i=n.sent,c=i.data,0!==c.result.songCount){n.next=10;break}return n.abrupt("return",r.$toast.fail("没有搜索到结果"));case 10:(s=r.searchResults).push.apply(s,Object(a["a"])(c.result.songs)),r.songCount=c.result.songCount,o=r.historyList.indexOf(t),-1!==o&&r.historyList.splice(o,1),r.historyList.unshift(t),Object(u["c"])("historyList",r.historyList),n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](3),console.dir(n.t0);case 21:case"end":return n.stop()}}),n,null,[[3,18]])})))()}},created:function(){this.getSearchHot(),this.searchDefault()}},d=f,g=(r("70b8"),r("2877")),p=Object(g["a"])(d,n,s,!1,null,"595cfe45",null);e["default"]=p.exports},"841c":function(t,e,r){"use strict";var n=r("d784"),s=r("825a"),a=r("1d80"),i=r("129f"),c=r("577e"),o=r("dc4a"),u=r("14c3");n("search",(function(t,e,r){return[function(e){var r=a(this),n=void 0==e?void 0:o(e,t);return n?n.call(e,r):new RegExp(e)[t](c(r))},function(t){var n=s(this),a=c(t),o=r(e,n,a);if(o.done)return o.value;var l=n.lastIndex;i(l,0)||(n.lastIndex=0);var h=u(n,a);return i(n.lastIndex,l)||(n.lastIndex=l),null===h?-1:h.index}]}))},"84c1":function(t,e,r){},"9bdd":function(t,e,r){var n=r("825a"),s=r("2a62");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(i){s(t,"throw",i)}}},a630:function(t,e,r){var n=r("23e7"),s=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:s})},c8d2:function(t,e,r){var n=r("5e77").PROPER,s=r("d039"),a=r("5899"),i="​᠎";t.exports=function(t){return s((function(){return!!a[t]()||i[t]()!==i||n&&a[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-417dca83.ed8885e9.js.map