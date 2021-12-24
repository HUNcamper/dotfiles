"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[835],{78494:function(e,t,n){n.r(t),n.d(t,{CollectionConcerts:function(){return P},default:function(){return R}});var a=n(27378),c=n.n(a),o=n(14298),r=n(47574),l=n(54798),i=n(36726),s=n(17088),u=n(28979),m=n(23104),g=n(35181),d=n(50878),h=n(57940),_=n(90849),E=n(41805),f=n(93881),p=n(10194),v=n(66422),y=n(72246),b=n(96816),L="w9fPbiMERwCVb_zlJ_I9",N="Ue1_5g5KjQ2S4EGh_qiO",S="CpsKSRQeRgJmtMJeeHiu",D=n(86268);const C={Online:g.ag.get("concerts_upcoming_virtual_events"),Recommended:g.ag.get("concerts_recommended_for_you"),Popular:g.ag.get("concerts_popular_near_you"),Playlists:g.ag.get("playlists")},k=o.jN0,I=e=>{var t,n;const{collection:a,concertMetadata:o,handleLocationChange:r,shouldCombineRecs:l}=e,u=(null===(t=a.concerts)||void 0===t?void 0:t.items)||[],m=null===(n=a.concerts)||void 0===n?void 0:n.isFetching,h=o.userLocation.name||g.ag.get("concerts.default_location"),_=e=>{if("playlist"===e.type)return c().createElement(v.Z,{entity:e});if(!e.concerts||!e.concerts.length)return null;const t=e.concerts[0];return c().createElement(y.k,{entity:t,isVirtual:l?"ONLINE"===t.category:"online"===e.source,shouldCombineRecs:l})};if(m)return c().createElement(i.h,{errorMessage:g.ag.get("error.request-browse-concerts-failure")});return c().createElement("div",{className:S},c().createElement("div",{className:L,"data-testid":"location-selector"},c().createElement(f.Z,{handleLocationChange:r,locationStr:h})),(()=>{if(!u.length)return c().createElement(s.u,{title:g.ag.get("concerts.error.no_concerts_found_title"),message:g.ag.get("concerts.error.no_concerts_found_message",h)});const e=(e=>{const t={Online:[],Recommended:[],Popular:[],Playlists:o.playlists};return e.reduce(((e,t)=>("recommendation"===t.source?e.Recommended.push(t):"popular"===t.source?e.Popular.push(t):"online"===t.source&&e.Online.push(t),e)),t)})(u);return Object.keys(e).map(((t,n)=>{const a=e[t];return 0===a.length?null:c().createElement("div",{key:t,className:L},c().createElement(d.ZP,{value:"headered-grid",index:n},c().createElement(b.P,{total:a.length,title:C[t],showAll:!0},a.map(_))))}))})())},w=c().memo((()=>{const e=(0,m.I0)(),t=(0,r.W6)(l.QD),n=(0,r.W6)(l.AW),o=(0,m.v9)((e=>e.entities.collection)),i=(0,m.v9)((e=>e.concerts)),s=i.userLocation.name||g.ag.get("concerts.default_location");(0,a.useEffect)((()=>{e((0,u.AJ)(null,t))}),[e,s,t]);const d=(0,D.Y)(k);return c().createElement("section",{className:N},c().createElement(h.gF,{size:h.fR.SMALL,backgroundColor:k},c().createElement(h.sP,null,c().createElement(h.xd,null,g.ag.get("concerts.label"))),c().createElement(_.W,null,c().createElement(E.i,{text:g.ag.get("concerts.label")}))),c().createElement(p.I,{backgroundColor:d}),c().createElement(I,{collection:o,concertMetadata:i,handleLocationChange:n=>{n&&n.geonameId&&e((0,u.AJ)(n.geonameId,t))},shouldCombineRecs:n}))})),P=e=>c().createElement(a.Suspense,{fallback:null},c().createElement(w,e));var R=P},72246:function(e,t,n){n.d(t,{k:function(){return N}});var a=n(27378),c=n.n(a),o=n(62508),r=n(54220),l=n(4328),i=n(9807),s="_My6WIIVUHqLCPSWUIHG",u="o2WtIZKoEVLJ9SX8FnvK",m="zEAbeR_GJ2GyYBcDvy_X",g="_hQd31bwCsubIYFifuAR",d="H_kDITOf9mz4jX7HdBMz",h="KfG8BxSi_KqDnUir4hYP",_="_7fi25PFSOdc3Vn7AnSJ",E="_KZWAaN9xwYdXEqXSC53",f="_jHHDdi8JWJ6O24nOGS1",p="vCEXm7QKBdrt_sMJT8vj",v="TW1wD4WmXs881vWbPakl",y=n(12622),b=n(11931),L=n(10340);const N=c().memo((e=>{const{entity:t,isVirtual:n,shouldCombineRecs:a}=e,{venue:{name:N,location:{name:S}}}=t,D=t.artists[0],C=(0,o.ij)(t),k=new Date(t.date.isoString),I=n?b.q:L.K;return c().createElement(r.r,{to:`/concert/${t.id}`,className:s},D.imageUri?c().createElement(l.Z,null,c().createElement("div",{"data-testid":"image-container",className:v,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${D.imageUri})`}})):null,c().createElement("time",{className:u,dateTime:t.date.isoString},c().createElement(i.Dy.h5,{variant:i.$e.minuetBold,className:m},(0,o.lJ)(k)),c().createElement(i.Dy.h1,{variant:i.$e.canon,className:g},k.getDate())),c().createElement("div",{className:d,dir:"auto"},c().createElement(i.Dy.h2,{className:p,variant:i.$e.minuetBold},(0,y.FO)(k),", ",(0,o.b8)(k)),c().createElement(i.Dy.h2,{variant:i.$e.cello,weight:i.vS.bold,className:h},C),c().createElement("div",{className:_},a?c().createElement(I,{className:E,"aria-label":n?"Virtual Event":"In-Person Event",iconSize:16}):null,c().createElement(i.Dy.h2,{className:f,variant:i.$e.mesto,"data-testid":"location-name"},n?N:`${N}, ${S}`))))}))},93881:function(e,t,n){n.d(t,{Z:function(){return v}});n(23615);var a=n(27378),c=n.n(a),o=n(76654),r=n(60042),l=n.n(r),i=n(20476),s=n(35181),u=n(60849),m=n(43803),g=n(13737),d=n(9807),h={locationContainer:"w5LHaemYT_yWUapP3Zz3",locationName:"CPT_8mu5E0GE88xsBeG8",clearSuggestions:"UetmEN43ZnTZWOZ2N8O6",hide:"YYToGJe_eRAaQFcoTkB5",changeLocation:"bwBA_6kT8_xx7s_i8Ie7",changeLocationDropdown:"zB4J8QVL0ODjI5UdbI9q",changeLocationInputLabel:"n4Sa_PENbSVAvqMRlFBX",changeLocationInput:"sa0vsLkOwzylMcIIM0Iu",searchInputSearchIcon:"IY4RFnPlBgAzV_XG2fDl",changeLocationLabel:"k3_luW_HDIGP2D6aq58i",changeLocationList:"_ln12wSq2zQH34MRKn1I",changeLocationError:"B5iBpCNKmRS1N0PWl2eI",changeLocationLink:"LBgRDFE8hq4M4Vn_0fC2",changeLocationItem:"VWKhouK561OziFPV7Q7A",button:"Pc2jnJ_kZm2nyuCp2Qht",locationLink:"kCDb8zZEzFSb_nhxAJJh"};const _="location_no_results",E="location_fetch_error",f={[_]:s.ag.get("concert.error.no_locations_found_subtitle"),[E]:s.ag.get("concert.error.general_error_title")},p=e=>{const t=c().createRef(),n=c().createRef(),[r,p]=(0,a.useState)(""),[v,y]=(0,a.useState)(-1),[b,L]=(0,a.useState)([]),[N,S]=(0,a.useState)(null),{placeholder:D,onSelectLocation:C,hideLocationSelector:k}=e,I=(0,i.D)((()=>{m.LH.fetchLocationQuery(u.b.getInstance(),r).then((e=>{const{body:{results:t=[]}={}}=e;L(t),t.length?S(null):S(_)}),(()=>{L([]),S(E)}))}))(250),w=e=>{p(e),y(-1),L([]),S(null),e&&e.length>1&&I(e)};let P=l()(h.clearSuggestions,h.hide);return(b&&b.length||N===_)&&(P=h.clearSuggestions),c().createElement("div",{className:h.changeLocation,"data-interaction-context":"location-selector"},c().createElement("div",{className:h.changeLocationDropdown,onKeyDown:e=>{const a=38,c=40,o=27,r=9,l=e.which;let i=v;switch([o,c,a,r].indexOf(l)>-1&&e.preventDefault(),l){default:return;case o:return void C(null);case a:i=Math.max(v-1,-1);break;case c:case r:i=Math.min(v+1,b.length-1);break;case 13:C(b[v])}if(i<0)t.current.focus();else{const e=n.current.childNodes[i];e&&e.focus()}y(i)},role:"searchbox",onBlur:e=>{e.relatedTarget||(w(""),k())}},c().createElement("div",{className:h.changeLocationForm},c().createElement("div",{className:l()(h.changeLocationLabel,"spoticon-search-16")},c().createElement("input",{className:h.changeLocationInput,type:"search",id:"change-location-input",placeholder:D,value:r,onChange:e=>w(e.target.value),ref:t,"aria-label":D,autoFocus:!0}),c().createElement("button",{className:P,"aria-label":s.ag.get("search.a11y.clear-input"),onClick:()=>w("")},c().createElement(g.T,{size:16})))),c().createElement("ol",{className:h.changeLocationList,ref:n},N&&c().createElement(d.Dy.li,{className:h.changeLocationError},c().createElement("span",{className:"spoticon spoticon-warning-16"})," ",f[N]),b&&b.length&&b.map(((e,t)=>c().createElement(d.Dy.li,{weight:d.vS.book,key:t,className:h.changeLocationItem,tabIndex:t+1},c().createElement(o.rU,{to:"#",className:h.changeLocationLink,onClick:()=>C(e),role:"button"},e.location))))||null)))};var v=e=>{const{handleLocationChange:t,locationStr:n}=e,[o,r]=(0,a.useState)(!1);return c().createElement("div",{className:h.locationContainer},c().createElement(d.Dy.h1,{variant:d.$e.alto},s.ag.get("concerts_shows_in")),c().createElement("span",null,o&&c().createElement(p,{placeholder:s.ag.get("concerts.input.search_placeholder"),onSelectLocation:e=>{t(e),r(!1)},hideLocationSelector:()=>r(!1)}),!o&&c().createElement(d.Dy.h2,{variant:d.$e.alto,className:h.locationName,dir:"auto",onClick:r,role:"button"},n)))}},62508:function(e,t,n){n.d(t,{Ms:function(){return c},b8:function(){return o},lJ:function(){return r},NL:function(){return l},O1:function(){return i},Yl:function(){return m},ij:function(){return g}});var a=n(35181);const c=e=>a.ag.formatDate(e,{weekday:"short",month:"short",day:"numeric"}),o=e=>a.ag.formatDate(e,{hour:"numeric",minute:"numeric"}),r=e=>a.ag.formatDate(e,{month:"short"}).toUpperCase(),l=e=>a.ag.formatDate(e,{month:"short",day:"numeric"}).toUpperCase(),i=e=>e<new Date,s={row:{1:e=>a.ag.get("concert.header.entity_title_1",...e),2:e=>a.ag.get("concert.header.entity_title_2",...e),3:e=>a.ag.get("concert.header.entity_title_3",...e),4:e=>a.ag.get("concert.header.entity_title_4",...e),more:e=>a.ag.get("concert.header.entity_title_more",...e)},entity:{1:e=>a.ag.get("concert.header.upcoming_concert_title_1",...e),2:e=>a.ag.get("concert.header.upcoming_concert_title_2",...e),3:e=>a.ag.get("concert.header.upcoming_concert_title_3",...e),4:e=>a.ag.get("concert.header.upcoming_concert_title_4",...e),more:e=>a.ag.get("concert.header.upcoming_concert_title_more",...e)}},u=(e,t)=>{const n=s[t],a=(e=>{try{var t;return!e.title||!e.festival&&null!==(t=e.artists)&&void 0!==t&&t.length?{artists:e.artists.map((e=>e.name||e.profile.name))}:{title:e.title}}catch(e){return null}})(e);if(a){if(a.title)return a.title;if(a.artists)return a.artists.length>4?n.more(a.artists):n[a.artists.length](a.artists)}return""},m=e=>u(e,"row"),g=e=>u(e,"entity")},17088:function(e,t,n){n.d(t,{u:function(){return _}});var a=n(27378),c=n.n(a),o=n(60042),r=n.n(o),l=n(9807),i=n(64954),s="x-emptyState-container",u="x-emptyState-renderInline",m="x-emptyState-button",g="x-emptyState-title",d="x-emptyState-subtitle",h=n(17830);const _=c().memo((e=>{const{children:t,message:n,title:a,linkTitle:o,linkTo:_,onClick:E,renderInline:f=!1}=e,{isXSOnly:p,isSMOnly:v}=(0,h.e)(),y=p||v;return c().createElement("section",{className:r()(s,{[u]:f})},t,c().createElement(l.Dy.h1,{variant:y?l.Dy.cello:l.Dy.alto,className:g},a),c().createElement(l.Dy,{variant:y?l.Dy.mesto:l.Dy.ballad,className:d},n),o&&(_||E)&&c().createElement(i.z,{version:"secondary",className:m,linkTo:_,onClick:E},o))}))}}]);
//# sourceMappingURL=xpui-routes-collection-concerts.js.map