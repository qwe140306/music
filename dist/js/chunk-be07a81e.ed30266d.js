(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be07a81e"],{"107c":function(e,t,n){var i=n("d039"),s=n("da84"),a=s.RegExp;e.exports=i((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var i=n("d784"),s=n("44e7"),a=n("825a"),r=n("1d80"),l=n("4840"),o=n("8aa5"),c=n("50c4"),u=n("577e"),d=n("dc4a"),f=n("14c3"),g=n("9263"),m=n("9f7f"),v=n("d039"),p=m.UNSUPPORTED_Y,h=[].push,x=Math.min,_=4294967295,b=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=u(r(this)),a=void 0===n?_:n>>>0;if(0===a)return[];if(void 0===e)return[i];if(!s(e))return t.call(i,e,a);var l,o,c,d=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=new RegExp(e.source,f+"g");while(l=g.call(v,i)){if(o=v.lastIndex,o>m&&(d.push(i.slice(m,l.index)),l.length>1&&l.index<i.length&&h.apply(d,l.slice(1)),c=l[0].length,m=o,d.length>=a))break;v.lastIndex===l.index&&v.lastIndex++}return m===i.length?!c&&v.test("")||d.push(""):d.push(i.slice(m)),d.length>a?d.slice(0,a):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var s=r(this),a=void 0==t?void 0:d(t,e);return a?a.call(t,s,n):i.call(u(s),t,n)},function(e,s){var r=a(this),d=u(e),g=n(i,r,d,s,i!==t);if(g.done)return g.value;var m=l(r,RegExp),v=r.unicode,h=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(p?"g":"y"),b=new m(p?"^(?:"+r.source+")":r,h),C=void 0===s?_:s>>>0;if(0===C)return[];if(0===d.length)return null===f(b,d)?[d]:[];var E=0,w=0,y=[];while(w<d.length){b.lastIndex=p?0:w;var S,T=f(b,p?d.slice(w):d);if(null===T||(S=x(c(b.lastIndex+(p?w:0)),d.length))===E)w=o(d,w,v);else{if(y.push(d.slice(E,w)),y.length===C)return y;for(var L=1;L<=T.length-1;L++)if(y.push(T[L]),y.length===C)return y;w=E=S}}return y.push(d.slice(E)),y}]}),!b,p)},"14c3":function(e,t,n){var i=n("825a"),s=n("1626"),a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if(s(n)){var l=n.call(e,t);return null!==l&&i(l),l}if("RegExp"===a(e))return r.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"16c0":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[n("van-nav-bar",{scopedSlots:e._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"wap-nav",size:"0.58667rem"}})]},proxy:!0},{key:"title",fn:function(){return[n("van-search",{attrs:{placeholder:"请输入搜索关键词",shape:"round"},on:{click:function(t){return e.$router.push({name:"Search"})}}})]},proxy:!0},{key:"right",fn:function(){return[n("van-icon",{staticClass:"iconfont icon-mic",attrs:{size:"0.53rem"}})]},proxy:!0}])}),n("div",{ref:"main",staticClass:"main"},[0!==e.ballList.length?n("van-swipe",{staticClass:"loop-img",attrs:{autoplay:"3000","indicator-color":"#fff"}},e._l(e.banners,(function(t){return n("van-swipe-item",{key:t.bannersId},[n("van-image",{attrs:{src:t.pic,"lazy-load":""}}),n("div",{staticClass:"typeTitle",style:"backgroundColor:"+t.titleColor},[e._v(" "+e._s(t.typeTitle)+" ")])],1)})),1):e._e(),0!==e.banners.length?n("div",{staticClass:"ball-list"},e._l(e.ballList,(function(t,i){return n("div",{key:t.id,staticClass:"ball-item",on:{click:function(n){return e.ballRouteJMP(t.id,t.routerUrl)}}},[n("div",{staticClass:"ball-img-back"},[n("img",{staticClass:"ball-img",class:19e3===t.id?"zaonieA":"",attrs:{src:t.iconUrl}}),0===i?n("span",{staticClass:"today"},[e._v(e._s(e._f("Today")(e.today)))]):e._e()]),n("span",{staticClass:"ball-text"},[e._v(e._s(t.name))])])})),0):e._e(),n("song-list",{attrs:{"recommended-song-list":e.recommendedSongList}}),e.songRemds.uiElement?n("div",{staticClass:"song-recomd"},[n("Title",{attrs:{title:e.songRemds.uiElement.subTitle.title,refreshIcon:"icon-refresh",leftIcon:"icon-play",iconText:e.songRemds.uiElement.button.text}}),n("music-swipe",{attrs:{"song-page":e.songRemds.creatives}})],1):e._e(),e.musicVideo.uiElement?n("div",{staticClass:"musicVideo"},[n("Title",{attrs:{title:e.musicVideo.uiElement.subTitle.title,iconText:e.musicVideo.uiElement.button.text,leftIcon:"icon-refresh"}}),n("div",{staticClass:"video-wrap"},e._l(e.musicVideo.extInfo,(function(t){return n("div",{key:t.id,staticClass:"video-item"},[n("van-image",{attrs:{width:"2.667rem",height:"4rem",fit:"cover",src:t.resource.mlogBaseData.coverUrl+"?param=100y150","lazy-load":""}}),n("div",{staticClass:"video-title"},[e._v(" "+e._s(t.resource.mlogBaseData.text)+" ")])],1)})),0)],1):e._e(),0!==e.banners.length?n("div",{staticClass:"ranking"},[n("Title",{attrs:{title:"排行版"}}),n("van-swipe",{staticClass:"swipe-page",attrs:{"show-indicators":!1,touchable:"",loop:!1}},e._l(e.ranking,(function(t){return n("van-swipe-item",{key:t.id,scopedSlots:e._u([{key:"default",fn:function(){return[n("h4",[e._v(" "+e._s(t.name)+" "),n("van-icon",{attrs:{name:"arrow",size:"0.426rem"}})],1),n("div",{staticClass:"song-list"},e._l(t.tracks,(function(t,i){return n("div",{key:t.id,staticClass:"song-list-item"},[n("van-image",{attrs:{"lazy-load":"",src:t.al.picUrl}}),n("span",{staticClass:"ranking-index"},[e._v(e._s(i+1))]),n("span",{staticClass:"song-name"},[e._v(e._s(t.name))]),n("span",{staticClass:"author"},[e._v(" - "+e._s(t.ar[0].name))])],1)})),0)]},proxy:!0}],null,!0)})})),1)],1):e._e(),e.radarSongList.creatives?n("song-list",{attrs:{"recommended-song-list":e.radarSongList}}):e._e(),e.newSong?n("tabs-music-list",{attrs:{"new-song":e.newSong}}):e._e(),e.sceneSongList.creatives?n("song-list",{attrs:{"recommended-song-list":e.sceneSongList}}):e._e(),e.musicCalendar.uiElement?n("div",{staticClass:"music-calendar-wrap"},[n("Title",{attrs:{title:e.musicCalendar.uiElement.subTitle.title,"icon-text":e.musicCalendar.uiElement.button.text}}),n("div",{staticClass:"receive-good-luck"},[n("div",[e._v("领取你的今日好运")]),n("div",{staticClass:"luck-read"},[e._v(" 查看运势解读 "),n("van-icon",{attrs:{name:"arrow"}})],1)]),n("div",{staticClass:"music-calendar"},e._l(e.musicCalendar.creatives,(function(t){return n("div",{key:t.creativeId,staticClass:"music-calendar-item"},[n("div",{staticClass:"calendar-title "},[n("div",{staticClass:"time-container"},[n("span",{staticClass:"time"},[e._v(e._s(e._f("isToday")(t.resources[0].resourceExtInfo.startTime)))]),t.resources[0].uiElement.labelTexts?n("span",{staticClass:"hot"},[e._v(e._s(t.resources[0].uiElement.labelTexts[0]))]):n("span",{staticClass:"labelTexts"},[e._v(e._s(t.resources[0].resourceExtInfo.startTime>Date.now()?"预告":"发布"))])]),n("div",{staticClass:"title text-hidden"},[e._v(" "+e._s(t.resources[0].uiElement.mainTitle.title)+" ")])]),n("van-image",{attrs:{width:"1.33rem",height:"1.33rem",src:t.resources[0].uiElement.image.imageUrl,"lazy-load":""}})],1)})),0)],1):e._e(),n("div",{staticClass:"bottom"})],1)],1)},s=[],a=n("1da1"),r=(n("96cf"),n("159b"),n("99af"),n("ac1f"),n("1276"),n("fb6a"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"song-list-wrap"},[e.recommendedSongList&&e.recommendedSongList.uiElement&&e.recommendedSongList.uiElement.subTitle?n("Title",{attrs:{title:e.recommendedSongList.uiElement.subTitle.title,iconText:e.recommendedSongList.uiElement.button.text}}):e._e(),n("div",{staticClass:"recommended-song-list"},e._l(e.recommendedSongList.creatives,(function(t){return n("div",{key:t.creativeId,staticClass:"song-list",on:{click:function(n){return e.toPlayListDetail(t.creativeId)}}},[n("van-image",{attrs:{src:t.uiElement.image.imageUrl,"lazy-load":""}}),n("div",{staticClass:"song-list-title"},[n("p",[e._v(e._s(t.uiElement.mainTitle.title))])]),n("van-button",{staticClass:"playCount",attrs:{round:"",size:"mini"}},[n("van-icon",{staticClass:" iconfont icon-play2",attrs:{size:"0.266rem"}}),e._v(" "+e._s(e._f("Count")(t.resources[0].resourceExtInfo.playCount))+" ")],1)],1)})),0)],1)}),l=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-container"},[n("h2",{staticClass:"leftTitle"},[e.refreshIcon?n("van-icon",{staticClass:"iconfont",class:e.refreshIcon,attrs:{size:"0.426rem"}}):e._e(),e._v(" "+e._s(e.title)+" ")],1),n("div",{staticClass:"rightIcon"},[n("van-button",{attrs:{round:"",size:"mini"}},[e.leftIcon?n("van-icon",{staticClass:"iconfont",class:e.leftIcon,attrs:{size:"0.32rem"}}):e._e(),e._v(" "+e._s(e.iconText)+" "),e.leftIcon?e._e():n("van-icon",{attrs:{name:e.rightIcon,size:"0.32rem"}})],1)],1)])},c=[],u={name:"Title",props:{title:{default:"歌单"},rightIcon:{default:"arrow"},iconText:{default:"更多"},leftIcon:{default:""},refreshIcon:{default:""}}},d=u,f=(n("647b"),n("2877")),g=Object(f["a"])(d,o,c,!1,null,null,null),m=g.exports,v={name:"SongList",components:{Title:m},props:{recommendedSongList:{default:{},required:!0}},methods:{toPlayListDetail:function(e){this.$router.push({name:"PlayListDetail",query:{id:e}})}}},p=v,h=(n("bff9"),Object(f["a"])(p,r,l,!1,null,"276874ad",null)),x=h.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!==e.newSong.length?n("div",{staticClass:"new-song-list"},[n("van-tabs",{attrs:{"line-height":"0",background:"#fff","title-active-color":"#000","title-inactive-color":"#A3A3A3"},scopedSlots:e._u([{key:"nav-right",fn:function(){return[n("van-button",{attrs:{round:"",size:"mini"}},[e._v(" 更多 "),n("van-icon",{attrs:{name:"arrow",size:"0.32rem"}})],1)]},proxy:!0}],null,!1,3074105339),model:{value:e.newSongActive,callback:function(t){e.newSongActive=t},expression:"newSongActive"}},e._l(e.newSong,(function(e){return n("van-tab",{key:e[0].uiElement.mainTitle.title,attrs:{title:e[0].uiElement.mainTitle.title}},[n("music-swipe",{attrs:{songPage:e}})],1)})),1)],1):e._e()},b=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!==e.songPage.length?n("van-swipe",{staticClass:"my-swipe",attrs:{"show-indicators":!1,loop:!1}},e._l(e.songPage,(function(t){return n("van-swipe-item",{key:t.creativeId},e._l(t.resources,(function(t){return n("div",{key:t.resourceId,staticClass:"song-info-wrap"},[n("van-image",{staticClass:"song-img",attrs:{src:t.uiElement.image.imageUrl}},[n("van-icon",{staticClass:"iconfont icon-play",attrs:{size:"0.426rem"}})],1),n("div",{staticClass:"song-info"},[n("div",{staticClass:"song-resources"},[n("h3",{staticClass:"song-name "},[n("span",{staticClass:"musicName text-hidden"},[e._v(e._s(t.uiElement.mainTitle.title))])])]),n("div",[t.uiElement.subTitle?n("p",{staticClass:"subTitle text-hidden"},[e._v(e._s(t.uiElement.subTitle.title))]):e._e()])])],1)})),0)})),1):e._e()},E=[],w={name:"MusicSwipe",props:{songPage:{type:Array,require:!0}}},y=w,S=(n("48d6"),Object(f["a"])(y,C,E,!1,null,"7061aeae",null)),T=S.exports,L={name:"TabsMusicList",props:{newSong:{type:Array,default:[]}},components:{MusicSwipe:T},data:function(){return{newSongActive:0}}},k=L,I=(n("92bf"),Object(f["a"])(k,_,b,!1,null,"0ca316f2",null)),R=I.exports,O=n("2ef0"),A={name:"Home",data:function(){return{newSongActive:0,banners:[],ballList:[],today:Date.now(),recommendedSongList:{},newSongList:[],musicCalendar:{},songRemds:{},radarSongList:{},sceneSongList:{},musicVideo:{},ranking:[],cursor:"",loading:!1,finished:!1,refresh:!1,scrollTop:0}},components:{Title:m,SongList:x,TabsMusicList:R,MusicSwipe:T},computed:{newSong:function(){if(0!==this.newSongList.length){var e=[];this.newSongList.forEach((function(t){-1===e.indexOf(t.uiElement.mainTitle.title)&&e.push(t.uiElement.mainTitle.title)})),console.log(e);for(var t=e.length,n=new Array(t),i=0;i<t;i++)n[i]=[];return this.newSongList.forEach((function(t){var i=e.indexOf(t.uiElement.mainTitle.title);-1!==i&&n[i].push(t)})),n}}},methods:{ballRouteJMP:function(e,t){if(13e3===e)return window.open(t);this.$router.push(t)},throttled:function(){},getScroll:function(){console.log("正在监测滚动条");var e=this.$refs.main;null===this.cursor&&this.$refs.main.removeEventListener("scroll",this.throttled),e.scrollHeight-e.clientHeight===e.scrollTop&&this.getSwipe()},getSwipe:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/homepage/block/page?refresh=".concat(e.refresh).concat(e.cursor?"&cursor="+e.cursor:""));case 3:n=t.sent,i=n.data,e.cursor=i.data.cursor,s=i.data.blocks,s.forEach((function(t){switch(t.blockCode){case"HOMEPAGE_BANNER":e.banners=t.extInfo.banners;break;case"HOMEPAGE_BLOCK_PLAYLIST_RCMD":e.recommendedSongList=t;break;case"HOMEPAGE_BLOCK_STYLE_RCMD":e.songRemds=t;break;case"HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG":e.newSongList=t.creatives;break;case"HOMEPAGE_MUSIC_CALENDAR":e.musicCalendar=t;break;case"HOMEPAGE_MUSIC_MLOG":e.musicVideo=t;break;case"HOMEPAGE_BLOCK_MGC_PLAYLIST":e.radarSongList=t;break;case"HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST":e.sceneSongList=t;break;default:console.log("Sorry, we are out")}})),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.$toast.fail(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getBail:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/homepage/dragon/ball");case 2:n=t.sent,i=n.data,i.data.forEach((function(e){if(13e3===e.id)return e.routerUrl=e.url;e.routerUrl=e.url.split("//")[1].split("?")[0].toLowerCase()})),e.ballList=i.data;case 6:case"end":return t.stop()}}),t)})))()},getTopList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/toplist");case 2:n=t.sent,i=n.data,s=i.list.slice(0,8),s.forEach((function(t){e.getDetail(t.id)}));case 6:case"end":return t.stop()}}),t)})))()},getDetail:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/playlist/detail?id=".concat(e));case 2:i=n.sent,s=i.data,s.playlist.tracks.splice(3),t.ranking.push(s.playlist);case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){var e=this;this.throttled=Object(O["throttle"])(this.getScroll,400),this.$nextTick((function(){e.$refs.main.addEventListener("scroll",e.throttled)}))},beforeRouteLeave:function(e,t,n){this.scrollTop=this.$refs.main.scrollTop,n()},activated:function(){this.$refs.main.scrollTop=this.scrollTop},created:function(){this.getSwipe(),this.getBail(),this.getTopList()}},P=A,M=(n("4724"),Object(f["a"])(P,i,s,!1,null,"25cdd95b",null));t["default"]=M.exports},"45ef":function(e,t,n){},4724:function(e,t,n){"use strict";n("9447")},"48d6":function(e,t,n){"use strict";n("45ef")},"5b4a":function(e,t,n){},"647b":function(e,t,n){"use strict";n("5b4a")},"69a5":function(e,t,n){},"6b33":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var i=n("6547").charAt;e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},9263:function(e,t,n){"use strict";var i=n("577e"),s=n("ad6d"),a=n("9f7f"),r=n("5692"),l=n("7c73"),o=n("69f3").get,c=n("fce3"),u=n("107c"),d=RegExp.prototype.exec,f=r("native-string-replace",String.prototype.replace),g=d,m=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],h=m||p||v||c||u;h&&(g=function(e){var t,n,a,r,c,u,h,x=this,_=o(x),b=i(e),C=_.raw;if(C)return C.lastIndex=x.lastIndex,t=g.call(C,b),x.lastIndex=C.lastIndex,t;var E=_.groups,w=v&&x.sticky,y=s.call(x),S=x.source,T=0,L=b;if(w&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),L=b.slice(x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==b.charAt(x.lastIndex-1))&&(S="(?: "+S+")",L=" "+L,T++),n=new RegExp("^(?:"+S+")",y)),p&&(n=new RegExp("^"+S+"$(?!\\s)",y)),m&&(a=x.lastIndex),r=d.call(w?n:x,L),w?r?(r.input=r.input.slice(T),r[0]=r[0].slice(T),r.index=x.lastIndex,x.lastIndex+=r[0].length):x.lastIndex=0:m&&r&&(x.lastIndex=x.global?r.index+r[0].length:a),p&&r&&r.length>1&&f.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r&&E)for(r.groups=u=l(null),c=0;c<E.length;c++)h=E[c],u[h[0]]=r[h[1]];return r}),e.exports=g},"92bf":function(e,t,n){"use strict";n("69a5")},9447:function(e,t,n){},"9f7f":function(e,t,n){var i=n("d039"),s=n("da84"),a=s.RegExp;t.UNSUPPORTED_Y=i((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var i=n("23e7"),s=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},bff9:function(e,t,n){"use strict";n("6b33")},d784:function(e,t,n){"use strict";n("ac1f");var i=n("6eeb"),s=n("9263"),a=n("d039"),r=n("b622"),l=n("9112"),o=r("species"),c=RegExp.prototype;e.exports=function(e,t,n,u){var d=r(e),f=!a((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),g=f&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!g||n){var m=/./[d],v=t(d,""[e],(function(e,t,n,i,a){var r=t.exec;return r===s||r===c.exec?f&&!a?{done:!0,value:m.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}));i(String.prototype,e,v[0]),i(c,d,v[1])}u&&l(c[d],"sham",!0)}},fce3:function(e,t,n){var i=n("d039"),s=n("da84"),a=s.RegExp;e.exports=i((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-be07a81e.ed30266d.js.map