(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[179],{98196:function(e,n,t){"use strict";t.d(n,{q:function(){return A},o:function(){return D}});var i=t(27378),a=t.n(i),r=t(66917),l=t.n(r),s=t(95005),c=t(93306),d=t(75609),o=t(21380),m=t(60042),u=t.n(m),k="_QGXLsEyg7RRgIp_EZ1l",v="x-downloadButton-DownloadButton",g="x-downloadButton-button",p="C3GcGKysJKlmAAxQ7R_M",f="xZlEQ5p_NEGYozT1C4ER",y="_UjZ8K0pVb8aAu6s3cX5",N="_6k_YuexiKYPfsT4GXhb",S=t(28101),E=t(35181),h=t(57661),b=t(3108);var F=t(82614),w=t(86131);let A;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(A||(A={}));const D=({uri:e,isFollowing:n,onFollow:t,size:r=A.sm,className:m})=>{const D={"--size":`${r}px`},{useDownloading:O,useDownloadCapability:L}=(0,i.useContext)(d.I),[C,I]=(0,i.useState)(!1),[R,x]=L(l().isEpisode(e)),[T,_]=(0,i.useState)(!1),{currentAvailability:P,progress:U,beginDownload:$,clearDownload:j}=O(e);((e,n)=>{const t=(0,b.r)(),a=(0,i.useRef)(!1);(0,i.useEffect)((()=>{e===o.V8.DOWNLOADING&&!1===a.current&&(a.current=!0,t.say(E.ag.get("download.downloading",n.totalItems)))}),[t,e,n]);const r=(0,h.D)(e);(0,i.useEffect)((()=>{r===o.V8.DOWNLOADING&&e===o.V8.YES&&(a.current=!1,t.say(E.ag.get("download.complete")))}),[t,r,e])})(P,U);const G=()=>{!1===n?(t(),I(!0)):$()};return(0,i.useEffect)((()=>{!0===C&&!0===n&&($(),I(!1))}),[n,C,$]),R===o.PQ.NO_DOWNLOAD_CAPABILITY?null:x===o.v$.DOWNLOADING_NOT_ALLOWED?a().createElement("div",{className:v},a().createElement(w.u,{label:E.ag.get("download.download")},a().createElement("button",{className:u()(g,m),role:"switch",onClick:()=>{_(!0)},"aria-label":E.ag.get("download.download"),"aria-checked":!1},a().createElement(s.a,{iconSize:r}))),T&&a().createElement("div",{className:N},a().createElement(F.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{_(!1)}},E.ag.get("download.upsell")))):P===o.V8.YES?a().createElement(w.u,{label:E.ag.get("download.remove")},a().createElement("button",{className:u()(g,m,p),role:"switch",onClick:j,"aria-label":E.ag.get("download.remove"),"aria-checked":!0},a().createElement(c.C,{iconSize:r}))):P===o.V8.NO?a().createElement(w.u,{label:E.ag.get("download.download")},a().createElement("button",{className:u()(g,m),role:"switch",onClick:G,"aria-label":E.ag.get("download.download"),"aria-checked":!1},a().createElement(s.a,{iconSize:r}))):a().createElement("div",{className:u()(f,m),role:"switch","aria-checked":!0},a().createElement(w.u,{label:E.ag.get("download.cancel")},a().createElement("button",{style:D,className:u()(g,k,m),onClick:j,"aria-label":E.ag.get("download.cancel")})),a().createElement("span",{style:D,className:u()(y,k)},a().createElement(S.e,{"aria-valuetext":E.ag.get("progress.downloading-tracks"),percentage:U.percentage,size:r})))}},59146:function(e,n,t){"use strict";t.d(n,{$:function(){return k}});var i=t(35181),a=t(27378),r=t.n(a),l=t(97015),s=t(18291),c=t(42044),d=t(39519),o=t(73429),m=t(67831);function u(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const k=({children:e})=>{let n=u(e);(e=>{const{mainLandmarkRef:n}=(0,m.Oh)(),t=(0,o.k6)(),i=(0,a.useRef)(t.length<2);i.current=t.length<2,(0,a.useEffect)((()=>{const t=n.current;t&&!i.current&&e&&(t.setAttribute("aria-label",e),t.focus())}),[e,n])})(e);const t=(0,s.Y)(d.o9)===c.PO.PLAYING,k=(0,s.Y)((e=>null==e?void 0:e.item));return k&&t&&((0,c.G_)(k)?n=[k.name,k.artists.map((e=>e.name)).join(i.ag.getSeparator())].join(" · "):(0,c.iw)(k)?n=[k.name,k.show.name].join(" · "):(0,c.k6)(k)&&(n=u(i.ag.get("ad-formats.advertisement")))),r().createElement(l.q,{defaultTitle:"Spotify",defer:!1},r().createElement("title",null,n))}},5129:function(e,n,t){"use strict";t.d(n,{$:function(){return i.$}});var i=t(59146)},15811:function(e,n,t){"use strict";t.r(n),t.d(n,{Track:function(){return te},default:function(){return ie}});var i=t(27378),a=t.n(i),r=t(73429),l=t(49429),s=t(31284),c=t(36726),d=t(57940),o=t(90849),m="m8nHi8QXUB6NM8v1MwxL",u=t(26425),k=t(35511),v=t(67265),g=t(23),p=t(41805),f=t(36256),y=t(33060),N=t(35181),S=t(66917),E=t.n(S),h=t(76385),b=t(89614),F=t(88319),w=t(2835),A=t(83509),D=t(98196),O=t(5312),L=t(43497),C=t(15407),I=t(17922),R=t(9807),x=t(65526),T=t.n(x),_=t(28907);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){T()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}let $;!function(e){e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE"}($||($={}));const j=(0,_.ZP)(((e,n)=>{switch(n.type){case"LYRICS_LOADING":e[n.uri]={status:$.LOADING};break;case"LYRICS_LOADED":e[n.uri]={status:$.LOADED,data:{lyrics:U({},n.response.lyrics)}};break;case"LYRICS_ERROR":e[n.uri]={status:$.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${n.type}`)}}));var G=t(86930);const z={status:$.LOADING},V={status:$.UNAVAILABLE},Y=a().createContext(void 0),M=({children:e,initialState:n={}})=>{const t=a().useReducer(j,n);return a().createElement(Y.Provider,{value:t,children:e})},W=e=>{const n=a().useContext(Y);if(void 0===n)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!E().isTrack(e))return V;const[t,i]=n,r=t[e];return r||(i({type:"LYRICS_LOADING",uri:e}),(0,G.ZA)(e).then((n=>{i({type:"LYRICS_LOADED",uri:e,response:n})})).catch((()=>{i({type:"LYRICS_ERROR",uri:e})})),z)};var q="_10q6s4ZppLO_dcF7S5U",Q="sX8vbX7mm2_ZmQfMeHam";const X=({padded:e})=>a().createElement(R.Dy,{as:"p",variant:R.Dy.finale,className:`${q} ${e?Q:""}`},"Lyrics powered by Musixmatch."),Z=({uri:e})=>{const{status:n}=W(e);return n!==$.LOADED?null:a().createElement(X,null)};var H="_F46egpEWGFKypfzURsN",K="imC3RMOU7Us2V8nndJYX";const B=({lines:e=[]})=>0===e.length?null:a().createElement("div",null,a().createElement(R.Dy,{as:"h2",variant:R.Dy.canon,color:"var(--spice-text)",className:H},N.ag.get("lyrics.title")),e.map((({words:e},n)=>a().createElement(R.Dy,{as:"p",variant:R.Dy.ballad,key:`lyrics-seo-line-${n}`,className:K},e))));var J=({uri:e})=>{const{status:n,data:t}=W(e);return n!==$.LOADED?null:a().createElement(B,{lines:null==t?void 0:t.lyrics.lines})};const ee=({copyrights:e,courtesyLine:n,uri:t})=>a().createElement(M,null,a().createElement(J,{uri:t}),a().createElement("div",{className:m},a().createElement(L.k,{copyrights:e,courtesyLine:n})),a().createElement(Z,{uri:t}));var ne=t(5129);const te=({uri:e,track:n})=>{var t,l;const s=(0,F.o)(),c=(0,A.k)(),S=(0,r.TH)(),E="1"===new URLSearchParams(S.search).get("lotw"),{artistsWithRoles:R,album:x,duration:T,name:_}=n,P=x.coverArt,U=x.copyright.items,$=x.courtesyLine,j=null===(t=x.date)||void 0===t?void 0:t.isoString,G=null==P||null===(l=P.extractedColors)||void 0===l?void 0:l.colorRaw.hex,z=((null==P?void 0:P.sources)||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),V=R.items.map((e=>{var n;return{name:e.artist.profile.name,images:((null===(n=e.artist.visuals.avatarImage)||void 0===n?void 0:n.sources)||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),uri:e.artist.uri,id:e.artist.uri}})),Y=n.playability.playable,M=(0,v.Y)(e),{togglePlay:W,isPlaying:q}=(0,g.n)({uri:M},{featureIdentifier:"track"}),[Q,X]=(0,b.Z)(e),Z=(0,i.useCallback)((async()=>{s({targetUri:e,intent:Q?"unsave":"save",type:"click"});try{await X(!Q)}catch{}}),[s,e,Q,X]);return a().createElement("section",{"data-testid":"track-page"},a().createElement(ne.$,null,`${n.name} - song by ${V.map((e=>e.name)).join(", ")}`),a().createElement(d.gF,{backgroundColor:G},a().createElement(o.W,null,a().createElement(u.$,{size:k.qE.sm,onClick:()=>W(),disabled:!Y,isPlaying:q,uri:e}),a().createElement(p.i,{text:_,dragUri:e,dragLabel:_})),a().createElement(f._P,{menu:a().createElement(y.$,{uri:e})},a().createElement(d.Oz,{dragUri:e,images:z,name:_,placeholderType:"album"})),a().createElement(d.sP,null,a().createElement(d.dy,{small:!0,uppercase:!0},N.ag.get("song")),a().createElement(f._P,{menu:a().createElement(y.$,{uri:e})},a().createElement(d.xd,{dragUri:e,dragLabel:_},_)),a().createElement(d.QS,{creators:V,releaseDate:j,durationMilliseconds:T.totalMilliseconds,isTrack:!0}))),a().createElement(h.o,{backgroundColor:G},a().createElement(h.F,null,a().createElement(d.rn,null,a().createElement(u.$,{onClick:()=>W(),isPlaying:q,disabled:!Y,size:k.qE.lg,uri:e})),a().createElement(d.rn,null,a().createElement(w.H,{isAdded:!!Q,onClick:Z,disabled:!c,size:w.q.md})),c?a().createElement(D.o,{uri:e,isFollowing:!!Q,onFollow:Z,size:D.q.md}):null,a().createElement(f.yj,{menu:a().createElement(y.$,{uri:e})},a().createElement(O.z,null)))),a().createElement("div",{className:"contentSpacing"},E?a().createElement(ee,{copyrights:U,courtesyLine:$,uri:e}):a().createElement(I.F,{property:C.NX,renderOldExperience:()=>a().createElement("div",{className:m},a().createElement(L.k,{copyrights:U,courtesyLine:$})),renderNewExperience:()=>a().createElement(ee,{copyrights:U,courtesyLine:$,uri:e})})))};var ie=a().memo((()=>{var e;const{trackId:n}=(0,r.UO)(),t=E().trackURI(n).toURI(),i=(0,l.aM)(s.getTrack,{uri:t});if(i.loading||null===(e=i.data)||void 0===e||!e.trackUnion)return a().createElement(c.h,{errorMessage:N.ag.get("track-page.error")});const d=i.data.trackUnion;return a().createElement(te,{uri:t,track:d})}))},43497:function(e,n,t){"use strict";t.d(n,{k:function(){return s}});var i=t(27378),a=t.n(i),r=t(9807),l="wggmHVWzlw5OzJkFusA5";const s=({copyrights:e,courtesyLine:n})=>{const t=(e||[]).map(((e,n)=>{const t=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let i;return i="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,a().createElement(r.Dy,{as:"p",variant:r.Dy.finale,key:n,dir:"auto"},`${i} ${t}`)}));return n&&t.unshift(a().createElement(r.Dy,{as:"p",variant:r.Dy.finale,key:t.length,dir:"auto"},n)),a().createElement("div",{className:l},t)}},31284:function(e){var n={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"trackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentRating"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"playability"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reason"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"trackNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"playcount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"saved"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareId"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackArtists"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbum"},directives:[]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"artist"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visuals"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"profile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"precision"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"copyright"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"courtesyLine"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbumCoverArt"},directives:[]}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackFields"},directives:[]}]}}]}}],loc:{start:0,end:1123}};n.loc.source={body:"fragment trackFields on Track {\n  id\n  uri\n  name\n  contentRating {\n    label\n  }\n  duration {\n    totalMilliseconds\n  }\n  playability {\n    playable\n    reason\n  }\n  trackNumber\n  playcount\n  saved\n  sharingInfo {\n    shareUrl\n    shareId\n  }\n  ...trackArtists\n  ...trackAlbum\n}\n\nfragment trackArtists on Track {\n  artistsWithRoles {\n    totalCount\n    items {\n      role\n      artist {\n        uri\n        visuals {\n          avatarImage {\n            sources {\n              width\n              height\n              url\n            }\n          }\n        }\n        profile {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment trackAlbum on Track {\n  album {\n    uri\n    id\n    date {\n      isoString\n      precision\n    }\n    copyright {\n      totalCount\n      items {\n        text\n        type\n      }\n    }\n    courtesyLine\n    ...trackAlbumCoverArt\n  }\n}\n\nfragment trackAlbumCoverArt on Album {\n  coverArt {\n    extractedColors {\n      colorRaw {\n        hex\n      }\n    }\n    sources {\n      url\n      width\n      height\n    }\n  }\n}\n\nquery getTrack($uri: ID!) {\n  trackUnion(uri: $uri) {\n    ...trackFields\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var i={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function r(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,l=new Set,s=new Set;for(r.forEach((function(e){s.add(e)}));s.size>0;){var c=s;s=new Set,c.forEach((function(e){l.has(e)||(l.add(e),(i[e]||new Set).forEach((function(e){s.add(e)})))}))}return l.forEach((function(n){var i=a(e,n);i&&t.definitions.push(i)})),t}n.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),i[e.name.value]=n}})),e.exports=n,e.exports.trackFields=r(n,"trackFields"),e.exports.trackArtists=r(n,"trackArtists"),e.exports.trackAlbum=r(n,"trackAlbum"),e.exports.trackAlbumCoverArt=r(n,"trackAlbumCoverArt"),e.exports.getTrack=r(n,"getTrack")}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map