(function(e){function t(t){for(var o,n,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"80ddfdfd"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"1ecb6704"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],d.parentNode.removeChild(d),r(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=a[e]=[t,r]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",p.name="ChunkLoadError",p.type=o,p.request=n,r[1](p)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",[r("router-view")],1)],1)},a=[],i=(r("5c0b"),r("2877")),c={},s=Object(i["a"])(c,n,a,!1,null,null,null),l=s.exports,u=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:e.windowHeight},[e.showMap?r("l-map",{staticStyle:{height:"100%"},attrs:{zoom:e.zoom,center:e.center,options:e.mapOptions},on:{"update:center":e.centerUpdate,"update:zoom":e.zoomUpdate}},[r("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),r("l-marker",{attrs:{"lat-lng":e.withPopup,icon:e.icons.red}},[r("l-popup",[r("div",{on:{click:e.innerClick}},[e._v(" 當前位置 "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showParagraph,expression:"showParagraph"}]},[e._v(" Lorem ")])])])],1),e.Mask.length>0&&"mdi-face"==e.currMaskType?r("div",e._l(e.items,(function(t){return r("l-marker",{key:t.properties.id,attrs:{icon:t.properties.mask_adult>=100?e.icons.green:t.properties.mask_adult>=50&&t.properties.mask_adult<=99?e.icons.orange:e.icons.grey,"lat-lng":{lat:t.geometry.coordinates[1],lng:t.geometry.coordinates[0]}}},[r("l-popup",[r("div",{staticStyle:{"font-family":"Microsoft JhengHei"}},[r("p",[r("v-icon",[e._v("mdi-store-outline")]),e._v("藥局:"+e._s(t.properties.name))],1),r("p",[r("v-icon",[e._v("mdi-map-marker")]),e._v("地址:"+e._s(t.properties.address))],1),r("p",[r("v-icon",[e._v("mdi-phone")]),e._v("電話:"+e._s(t.properties.phone))],1),r("v-divider"),r("p",[r("v-icon",[e._v("mdi-face")]),e._v("成人口罩:"+e._s(t.properties.mask_adult)+" ")],1),r("p",[r("v-icon",[e._v("mdi-baby-face-outline")]),e._v("兒童口罩:"+e._s(t.properties.mask_child))],1)],1)])],1)})),1):e._e(),e.Mask.length>0&&"mdi-baby-face-outline"==e.currMaskType?r("div",e._l(e.items,(function(t){return r("l-marker",{key:t.properties.id,attrs:{icon:t.properties.mask_child>=100?e.icons.green:t.properties.mask_child>=50&&t.properties.mask_child<=99?e.icons.orange:e.icons.grey,"lat-lng":{lat:t.geometry.coordinates[1],lng:t.geometry.coordinates[0]}}},[r("l-popup",[r("div",{staticStyle:{"font-family":"Microsoft JhengHei"}},[r("p",[r("v-icon",[e._v("mdi-store-outline")]),e._v("藥局:"+e._s(t.properties.name))],1),r("p",[r("v-icon",[e._v("mdi-map-marker")]),e._v("地址:"+e._s(t.properties.address))],1),r("p",[r("v-icon",[e._v("mdi-phone")]),e._v("電話:"+e._s(t.properties.phone))],1),r("v-divider"),r("p",[r("v-icon",[e._v("mdi-face")]),e._v("成人口罩:"+e._s(t.properties.mask_adult)+" ")],1),r("p",[r("v-icon",[e._v("mdi-baby-face-outline")]),e._v("兒童口罩:"+e._s(t.properties.mask_child))],1)],1)])],1)})),1):e._e(),r("l-control",[r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:e.changeMaskType}},[r("v-icon",[e._v(e._s(e.currMaskType))])],1)],1),r("l-control",{attrs:{position:"bottomright"}},[r("v-speed-dial",{attrs:{right:"",direction:"top"},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[e.fab?r("v-icon",[e._v("mdi-close")]):r("v-icon",[e._v("mdi-cogs")])],1)]},proxy:!0}],null,!1,194280805),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"},on:{click:e.getData}},[r("v-icon",[e._v("mdi-reload")])],1),r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:e.pageReload}},[r("v-icon",[e._v("mdi-crosshairs-gps")])],1)],1)],1)],1):e._e(),r("div")],1)},d=[],m=(r("4160"),r("159b"),r("96cf"),r("1da1")),f=r("e11e"),h=r.n(f),g=r("2699"),v=r("a40a"),b=r("4e2b"),y=r("f60f"),_=r("2253"),k=r("bc3a"),w=r.n(k),O={name:"Example",components:{LMap:g["a"],LTileLayer:v["a"],LMarker:b["a"],LPopup:y["a"],LControl:_["a"]},data:function(){return{windowHeight:{height:window.innerHeight+"px"},currMaskType:"mdi-face",zoom:16,center:Object(f["latLng"])(47.41322,-1.219482),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',withPopup:Object(f["latLng"])(47.41322,-1.219482),withTooltip:Object(f["latLng"])(47.41422,-1.250482),currentZoom:16,currentCenter:Object(f["latLng"])(47.41322,-1.219482),showParagraph:!1,mapOptions:{zoomSnap:.5},showMap:!0,Mask:[],position:{latitude:"",longitude:""},icons:{green:Object(f["icon"])({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",iconSize:[32,37],iconAnchor:[16,37]}),orange:Object(f["icon"])({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",iconSize:[32,37],iconAnchor:[16,37]}),grey:Object(f["icon"])({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",iconSize:[32,37],iconAnchor:[16,37]}),red:Object(f["icon"])({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",iconSize:[32,37],iconAnchor:[16,37]})},fab:!1}},mounted:function(){this.getLocation()},watch:{currentCenter:function(e){this.centerUpdate(e),this.getData()}},computed:{items:function(){var e=this,t=[];return this.Mask.forEach((function(r){Math.abs(r.geometry.coordinates[1]-e.currentCenter.lat)<.01&&Math.abs(r.geometry.coordinates[0]-e.currentCenter.lng)<.01&&t.push(r)})),t}},methods:{pageReload:function(){location.reload()},changeMaskType:function(){"mdi-face"==this.currMaskType?this.currMaskType="mdi-baby-face-outline":this.currMaskType="mdi-face"},getData:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(t){e.Mask=t.data.features}));case 2:case"end":return t.stop()}}),t)})))()},zoomUpdate:function(e){this.currentZoom=e},centerUpdate:function(e){this.currentCenter=e},showLongText:function(){this.showParagraph=!this.showParagraph},innerClick:function(){},getLocation:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.showPosition)},showPosition:function(e){this.position.latitude=e.coords.latitude,this.position.longitude=e.coords.longitude;var t=Object(f["latLng"])(e.coords.latitude,e.coords.longitude);this.withPopup=t,this.centerUpdate(t),this.center=t}}},M=O,j=Object(i["a"])(M,p,d,!1,null,null,null),x=j.exports;o["default"].use(u["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],L=new u["a"]({mode:"history",base:"/",routes:P}),S=L,T=r("2f62");o["default"].use(T["a"]);var C=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=r("ce5b"),E=r.n(U);r("d1e78"),r("bf40"),r("5363"),r("6cc5");o["default"].use(E.a),delete h.a.Icon.Default.prototype._getIconUrl,h.a.Icon.Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),o["default"].component("l-map",g["a"]),o["default"].component("l-tile-layer",v["a"]),o["default"].component("l-marker",b["a"]),o["default"].config.productionTip=!1;t["default"]=new E.a({});new o["default"]({router:S,store:C,render:function(e){return e(l)},vuetify:new E.a}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var o=r("9c0c"),n=r.n(o);n.a},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.7120c9c9.js.map