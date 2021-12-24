"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[289],{24209:function(e,t,n){n.d(t,{Q:function(){return s},$:function(){return o}});var a=n(27378),i=n.n(a),r=n(94744),l=n(2315);const s=(0,a.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:l.oT.ADDED_AT}),o=i().memo((function({uri:e,children:t,defaultSortOption:n}){return i().createElement(r.r,{uri:e,defaultState:n,sortContext:s},t)}))},9195:function(e,t,n){n.d(t,{E:function(){return d}});var a=n(27378),i=n.n(a),r=n(57660),l="collection-searchBar-searchBar",s=n(1266),o=n(81368),c=n(2315),u=n(24209);const m=i().memo((({sortOptions:e})=>{const{sortState:t,setSortState:n}=(0,a.useContext)(u.Q),r=(0,a.useCallback)((e=>{n(c.ei[e])}),[n]),l=e.map((e=>c.MY[e])),s=c.MY[t];return i().createElement(o.A,{options:l,onSelect:r,selected:s})})),d=i().memo((({filterPlaceholder:e,sortOptions:t})=>{const n=(0,a.useContext)(r.H);return i().createElement("div",{className:l},null!=n&&n.getCapabilities().canFilter?i().createElement(s.K,{placeholder:e}):null,null!=n&&n.getCapabilities().canSort?i().createElement(m,{sortOptions:t}):null)}))},38869:function(e,t,n){n.d(t,{K:function(){return C}});var a=n(27378),i=n.n(a),r=n(60042),l=n.n(r),s=n(69971),o="AXHcaOP8T3RZeO7KJyVk",c=n(35181),u=n(60854),m=n(46872),d=n(91592);const p=i().memo((({onClick:e=(()=>{}),size:t,className:n,uri:r,sharingInfo:s,interactionData:p})=>{const{onCopyLink:g}=(0,d.y)({sharingInfo:s,uri:r,interactionData:p}),E=(0,a.useCallback)((()=>{g(),e()}),[e,g]);return i().createElement(m.E,{ariaLabel:c.ag.get("mwp.list.item.share"),size:t,onClick:E,className:l()(o,n),icon:u.M})}));var g=n(21723),E=n(34834),f=n(75609),y=n(21380),h=n(2835);const b={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},C=i().memo((({episodeUri:e,showUri:t,sharingInfo:n,canDownload:r})=>{const{useDownloading:o}=(0,a.useContext)(f.I),{currentAvailability:c}=o(e),u=[y.V8.YES,y.V8.DOWNLOADING,y.V8.WAITING].includes(c),m=(0,a.useMemo)((()=>i().createElement(E.p,{uri:e,size:E.q.sm,showUri:t,className:l()({[s.Z.visibleDownloadButton]:u})})),[e,t,u]),d=(0,a.useMemo)((()=>i().createElement(p,{uri:e,sharingInfo:n,interactionData:b})),[e,n]),C=(0,a.useMemo)((()=>i().createElement(g.w,{uri:e,size:h.q.sm,className:s.Z.saveButton})),[e]);return i().createElement(i().Fragment,null,d,r&&m,C)}))},65898:function(e,t,n){n.r(t),n.d(t,{YourEpisodes:function(){return K},YourEpisodesContainer:function(){return J},default:function(){return ee}});var a=n(27378),i=n.n(a),r=n(47059),l=n(35181),s=n(57660),o=n(36726),c=n(57940),u=n(90849),m=n(41805),d=n(76385),p=n(26425),g=n(35511),E=n(92270),f=n(82229),y=n(50878),h=n(58324),b=n(20280),C=n(2124),v=n(88319),w=n(12275),x=n(18237),k=n(38869),P=n(49107),S=n(5312),N=n(88886),I=n(8360),O=n(89614),D=n(75609),_=n(23),U=n(83509),A=n(64619),M=n(18291),R=n(70266),B=n(73088),L=n(95962);const z={small:64,standard:300,large:640,xlarge:1024},T=i().memo((({index:e,contextUri:t,episode:n,onRemove:r,usePlayContextItem:l})=>{var s,o,c,u;const m=(0,a.useRef)(n.duration.milliseconds-n.timeLeft.milliseconds),d=n.uri,[p,g]=(0,a.useState)(0===n.timeLeft.milliseconds),E=(0,h.O1)(),f=(0,P.jh)(),T=(0,v.o)(),[Z]=(0,O.Z)(d,!0),{useCurrentAvailability:j}=(0,a.useContext)(D.I),[H]=j(d),V=(0,U.k)(),q=(0,M.Y)((e=>{var t;if((null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===n.uri){var a;const t=null!==(a=(0,L.k)(e))&&void 0!==a?a:0;return m.current=t,t}return 0})),{isPlaying:W,isActive:Y,togglePlay:Q}=l({uri:d,index:e}),{isPlaying:$,isActive:G,togglePlay:F}=(0,_.n)({uri:d,pages:[{items:[{type:A.p.EPISODE,uri:d,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,a.useEffect)((()=>{Z||r()}),[Z,r]),(0,a.useEffect)((()=>{W||n.duration.milliseconds<=m.current&&g(!0)}),[W,n.duration.milliseconds]);const X=(0,a.useCallback)((e=>{e||(m.current=0),g(e)}),[]),K=(0,a.useCallback)((()=>{T({type:"click",targetUri:d,intent:"navigate"})}),[d,T]),J=(0,a.useCallback)((()=>{V?(T({type:"click",intent:W?"pause":"play"}),Q()):(T({type:"click",intent:$?"pause":"play"}),F())}),[V,W,$,T,Q,F]),ee=null!==(s=null===(o=n.podcastSubscription)||void 0===o?void 0:o.isPaywalled)&&void 0!==s&&s,te=null!==(c=null===(u=n.podcastSubscription)||void 0===u?void 0:u.isUserSubscribed)&&void 0!==c&&c,{badges:ne}=(0,R.r)({isExplicit:n.isExplicit,isPaywalled:ee});let ae=!1;return(Y||!V&&G)&&(ae=!0),Z?i().createElement(y.ZP,{value:"row",index:e},i().createElement(w._,{menu:i().createElement(x.k,{uri:d,showUri:n.show.uri,isPlayed:p,onMarkAsPlayed:X})},i().createElement(b.X,{index:e,uri:d,uid:d,size:f,images:n.images.map((e=>({url:e.url,width:e.width||(e.label?z[e.label]:null),height:e.height||(e.label?z[e.label]:null)}))),isPaywalled:ee,isUserSubscribed:te,name:n.name,showName:n.show.name,showUri:n.show.uri,description:n.description,isPlayable:n.isPlayable&&H,fullyPlayed:p,durationMs:n.duration.milliseconds,releaseDate:n.release.date.toString()||"",resumePositionMs:m.current,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const a=`${n.name} · ${n.show.name}`;E(e,[d],a,t)},handlePlaybackClick:J,handleClick:K,isCurrentlyPlaying:ae,isPlaying:V?W:$,position:ae?q:void 0,badges:i().createElement(i().Fragment,null,ne.explicit&&i().createElement(C.N,null),ne.paid&&i().createElement(B.g,null)),playButtonWrapper:e=>i().createElement(I.l,{enabled:ee&&!te},e),actionButtons:i().createElement(k.K,{episodeUri:d,sharingInfo:null,showUri:n.show.uri,canDownload:!ee||ee&&te}),topActionButtons:i().createElement(N.y,{menu:i().createElement(x.k,{uri:d,showUri:n.show.uri,isPlayed:p,onMarkAsPlayed:X})},i().createElement(S.z,{size:S.q.sm}))}))):null}));var Z=n(4251),j=n(2315),H=n(24209),V=n(18499);const q=i().memo((({contextUri:e,usePlayContextItem:t})=>{const n=(0,a.useContext)(s.H),{sortState:r}=(0,a.useContext)(H.Q),l=(0,a.useRef)(0),{filter:o}=(0,a.useContext)(V.fo),c=(0,a.useCallback)((async(e,t)=>{const a=await n.getEpisodes({offset:e-l.current,limit:t,sort:(0,j.sv)(r),filter:(0,j.$u)(o)});return l.current=0,((e,t)=>{const n=t+e.items.length;return{totalCount:e.totalLength,items:e.items,pagingInfo:{nextOffset:n<e.totalLength?n:null}}})(a,e)}),[o,n,r]),u=(0,a.useCallback)((()=>{l.current++}),[]),m=(0,a.useCallback)(((n,a)=>i().createElement(T,{key:`${n.uri}/${a}`,index:a,episode:n,contextUri:e,onRemove:u,usePlayContextItem:t})),[e,u,t]),{ref:d,breakpoint:p}=(0,P.Db)({[P.Uo.MEDIUM]:0,[P.Uo.LARGE]:600});return i().createElement(P.ZU.Provider,{value:p},i().createElement(y.ZP,{value:"track-list"},i().createElement(Z.k,{showUri:"",ref:d,renderRow:m,fetchEpisodes:c})))}));var W=n(42044),Y=n(35896),Q=n(68657),$=n(9195),G=n(17088),F=n(11847),X=n(25736);const K=({metadata:e,canSort:t})=>{const n=(0,f.Y5)("#006450"),{sortState:s}=(0,a.useContext)(H.Q),{filter:o}=(0,a.useContext)(V.fo),E=(0,U.k)(),{isPlaying:y,togglePlay:h,usePlayContextItem:b}=(0,_.n)({uri:e.uri,metadata:{[W.sb.SORTING_CRITERIA]:(0,j._s)(s),[W.sb.FILTERING_PREDICATE]:(0,F.aK)(o)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),C=()=>h(),{uri:v,name:w,images:x,totalLength:k,owner:P}=e,S=(0,a.useMemo)((()=>({id:P.username,uri:P.uri,name:P.username,displayName:P.displayName||void 0,images:P.images||[]})),[P]),N=e.totalLength>0;return i().createElement("section",{className:X.Z.yourEpisodes,"data-testid":"your-episodes-page"},i().createElement(c.gF,{backgroundColor:n},i().createElement(u.W,null,i().createElement(p.$,{size:g.qE.sm,onClick:C,isPlaying:y,uri:v,disabled:!E}),i().createElement(m.i,{text:w})),i().createElement(c.Oz,{images:x,name:w,shape:Y.K.ROUNDED_CORNERS,renderImage:()=>i().createElement(Q.$,null)}),i().createElement(c.sP,null,i().createElement(c.dy,{small:!0,uppercase:!0},l.ag.get("playlist")),i().createElement(c.xd,{canEdit:!1,onClick:()=>{},className:X.Z.playlistTitle},w),i().createElement(c.QS,{creators:[S],totalEpisodes:k}))),i().createElement("div",{className:X.Z.yourEpisodesContentWrapper},i().createElement(d.o,{backgroundColor:n},i().createElement(d.F,null,N&&i().createElement(p.$,{onClick:C,isPlaying:y,size:g.qE.lg,uri:v,disabled:!E}),t&&i().createElement("div",{className:X.Z.searchBoxContainer},i().createElement($.E,{filterPlaceholder:l.ag.get("playlist.search_in_playlist"),sortOptions:j.$2})))),i().createElement("div",{className:"contentSpacing"},e.totalLength>0&&i().createElement(q,{contextUri:v,usePlayContextItem:b}))),0===e.totalLength&&i().createElement("div",{className:"contentSpacing"},i().createElement(G.u,{message:l.ag.get("collection.empty-page.episodes-subtitle"),title:l.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:l.ag.get("collection.empty-page.shows-cta"),renderInline:!0},i().createElement(r.Z,null))))},J=i().memo((()=>{const e=(0,a.useContext)(s.H).getCapabilities(),t=(0,E.x)();return t?i().createElement(H.$,{uri:t.uri,defaultSortOption:j.oT.ADDED_AT},i().createElement(V.hz,{uri:t.uri},i().createElement(K,{metadata:t,canSort:e.canSort&&t.totalLength>0}))):i().createElement(o.h,{errorMessage:l.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}));var ee=J},20280:function(e,t,n){n.d(t,{X:function(){return w}});var a=n(27378),i=n.n(a),r=n(76654),l=n(73429),s=n(66917),o=n.n(s),c=n(60042),u=n.n(c),m={episodeBlock:"mojwW3ensP59VkP4Vs_e",isActive:"_f64yVuw2UQ5xCB53VzG",title:"_g8Bdki_n8nxzIbAVn_S",titleLink:"qMrb72bOf3cBtwlepRyu",selected:"_pdjga8YyNRwSdJbzpzp",topActions:"_OOWCxmsUuIDLKr9zY7d",actions:"_hkqbFZ8SjCHHcSgxzXw",titleContainer:"uLPpTBOUKOuqNMu1Y73x",musicAndTalkArtistContainer:"_GJ3dGTdWAEg6iNhQSyM",musicAndTalkArtists:"ev7PE7diAs667F_d8sVR",playlistIcon:"XkGI6bZ29nKLqr0BpW5e",noHover:"jF_9kxrtC_2SjfXDuuhn",imageContainer:"Gxq4YvRnZAXQF8TrsCn4",showImage:"iFDWB1rejy4gEgyzLOB6",description:"XC2fKcHlE3yNzlra_Zex",metadata:"X36EcyNavFJiML_Rsthn",badges:"OB_99uWys1RU2qe_TxGH",medium:"JuybDBNJf3eeRhZyT13h",large:"iH_EOyfU_iz90cgk7aIZ",header:"RdbO6mNzHkie745sxiht",descriptionContainer:"f4dgEM3_Xbw0IC73UUZJ",playerActions:"MQZ49UqipmrLSmcFNjec"},d=n(35511),p=n(9807),g=n(42294),E=n(64619),f=n(35896),y=n(21311),h=n(49107),b=n(29874);var C=n(34601),v=n(96689);const w=i().memo((({uri:e,name:t,showName:n,showUri:s,size:c,description:w,durationMs:x,images:k,badges:P,fullyPlayed:S,releaseDate:N,resumePositionMs:I,isCurrentlyPlaying:O,isPlaying:D,actionButtons:_,topActionButtons:U,onContextMenu:A,onTouchStart:M,onTouchEnd:R,handlePlaybackClick:B,handleDragStart:L,handleClick:z,position:T,index:Z,isPlayable:j,isPaywalled:H,isUserSubscribed:V,playButtonWrapper:q=null})=>{var W;const Y=(0,l.k6)(),Q=O&&D,$=o().from(e).toURLPath(!0),G=null===(W=o().from(s))||void 0===W?void 0:W.toURLPath(!0),F=function({episodeUri:e}){const[t,n]=(0,a.useState)([]),i=(0,b.G)();return(0,a.useEffect)((()=>{let t=!0;return async function(){const a=await i.getArtists(e);t&&n(a)}(),()=>{t=!1}}),[e,i]),t}({episodeUri:e}),X=(0,v.G3)(e,N,I,S),K=(0,a.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Y.push($),z&&z(e)}),[$,Y,z]),J=(0,a.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),G&&Y.push(G)}),[G,Y]),ee=H&&!V,te=(0,a.useCallback)((e=>{e.stopPropagation(),ee||B(e)}),[B,ee]),ne=e=>{e.stopPropagation()},ae=ee||j,ie=i().createElement(d.JM,{size:d.qE.xs,version:d.ul.secondary,onClick:te,isPlaying:Q,disabled:!ae,locked:ee}),re=q?q(ie):ie;return i().createElement("div",{className:u()(m.episodeBlock,{[m.isActive]:O,[m.medium]:c===h.Uo.MEDIUM,[m.large]:c===h.Uo.LARGE,[m.noHover]:c===h.Uo.XSMALL}),"data-testid":`episode-${Z}`,draggable:!!L,onDragStart:L,onClick:K,onContextMenu:A,onTouchStart:M,onTouchEnd:R},i().createElement("div",{className:m.imageContainer},i().createElement(f.O,{className:u()(m.entityImage,m.showImage),type:E.p.EPISODE,size:(e=>{switch(e){case h.Uo.LARGE:return y.m$.SIZE_112;case h.Uo.MEDIUM:return y.m$.SIZE_64;default:return y.m$.SIZE_48}})(c),title:t,shape:f.K.ROUNDED_CORNERS,images:k})),i().createElement("div",{className:m.header},i().createElement("div",{className:m.titleContainer},i().createElement(r.rU,{className:m.titleLink,to:$,onClick:K},i().createElement(p.Dy.h4,{variant:p.Dy.balladBold,className:m.title},X&&i().createElement(v.Rd,null),t)),F.length>0&&i().createElement("div",{className:m.musicAndTalkArtistContainer},i().createElement(C.e,{iconSize:16,className:m.playlistIcon}),i().createElement(p.Dy.p,{variant:p.Dy.mesto,className:m.musicAndTalkArtists},F.join(", ")))),n&&G&&i().createElement(r.rU,{className:m.titleLink,to:G,onClick:J},i().createElement(p.Dy.h4,{variant:p.Dy.mestoBold,className:m.title},n))),i().createElement("div",{className:m.descriptionContainer},i().createElement(p.Dy.p,{variant:p.Dy.mesto,className:m.description},w)),i().createElement("div",{className:m.metadata},i().createElement("div",{className:m.badges},P),i().createElement(g.E,{isPlaying:Q,fullyPlayed:S,durationMs:x,releaseDate:N,resumePositionMs:I,position:O?T:void 0})),U&&i().createElement("div",{onClick:ne,className:m.topActions},U),i().createElement("div",{onClick:ne,className:m.actions},_),i().createElement("div",{className:m.playerActions},re))}))},4251:function(e,t,n){n.d(t,{k:function(){return p}});var a=n(65526),i=n.n(a),r=n(27378),l=n.n(r),s="SlVKIBH4Y1VOs40N2VUM",o="BYq3_YRg2J9NFAlWc53g",c=n(75570),u=n(19873);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p=l().memo(l().forwardRef(((e,t)=>{const{fetchEpisodes:n,renderRow:a,limit:i=50,showUri:m}=e,[p,g]=(0,r.useState)(u.d),E=(0,r.useRef)(!1),f=(0,r.useCallback)(((e=!1)=>{if(!n)return;const t=p.pagingInfo.nextOffset;if(null===t)return;const a=0===p.totalCount?i:Math.min(p.totalCount-t,i);!E.current&&a>0&&(E.current=!0,n(t,a).then((n=>{g((a=>{const i=e?[]:[...a.items];return i.splice(t,n.items.length,...n.items),d(d({},n),{},{items:i})})),E.current=!1})))}),[n,p.pagingInfo.nextOffset,p.totalCount,i]);return(0,r.useEffect)((()=>{g(u.d)}),[m,n]),(0,r.useEffect)((()=>{0===p.pagingInfo.nextOffset&&f(!0)}),[f,p.pagingInfo.nextOffset]),l().createElement("div",{ref:t},l().createElement(c.C,{onReachBottom:f,triggerOnInitialLoad:!0},p.items.map(((e,t)=>l().createElement("div",{className:o,key:`${t}${e.uid}`},l().createElement("hr",{className:s,"aria-hidden":!0}),a(e,t))))))})))},75570:function(e,t,n){n.d(t,{C:function(){return u}});var a=n(27378),i=n.n(a),r=n(9957),l=n(60042),s=n.n(l),o="_OIbzNaZUstr_dmIZnnU",c="_AqkCZVApAiJHpYacWlf";const u=i().memo((e=>{const{triggerOnInitialLoad:t=!1,onReachBottom:n,showScrollbar:l=!0,horizontalScroll:u=!1}=e,{ref:m,inView:d}=(0,r.YD)({initialInView:t});return(0,a.useEffect)((()=>{d&&n&&n()}),[d,n]),i().createElement("div",{className:s()({[c]:!l,[o]:u}),"data-testid":"infinite-scroll-list"},e.children,i().createElement("div",{ref:m}))}))},69971:function(e,t){t.Z={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",ShowPage:"_AE3dN4Mal1RQnaoHlEL",ShowContent:"_1WrCs8_uQkykMhmvP14",metadata:"XBMX3ds2w47inMESHo00",episodes:"__xnC8APzIV0CcBsInP9",episodesHeader:"_3_S0QESNdbtdM3P9MtS",episodesSort:"a2BXjMid6KrVfAPIcMxN",subtitle:"_QCDBnnQSAYQUozRth5G",sectionTitle:"qtlx_DlMfdlRxm5Yobz1",trailer:"AJaWyUE2loaJvCwq3BOy",visibleDownloadButton:"_w4jKvg3eW79H8kH7vW_",moreButton:"pqj9aIoWyFZxS_p1BCVN",saveButton:"qX3rfSQbu80_DIBV9B5T"}}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map