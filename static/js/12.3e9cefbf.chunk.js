(this["webpackJsonp2Clothy-SellCenter"]=this["webpackJsonp2Clothy-SellCenter"]||[]).push([[12],{113:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.children,a=e.title;return n.a.createElement("div",{className:"w-min h-full flex items-center flex-col p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"},n.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},a),t)}},114:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.legends;return n.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},null===t||void 0===t?void 0:t.map((function(e,t){return n.a.createElement("div",{className:"flex items-center",key:t},n.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(e.color," rounded-full")}),n.a.createElement("span",null,e.title))})))}},117:function(e,t,a){"use strict";t.a=[{avatar:"https://i.pravatar.cc/300",first_name:"Chandler",last_name:"Jacobi",email:"chandlerjacobi@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!0,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to know the price of New Nike Shoues"},{flag:"to_client",text:"Newset Nike one will be $199.00 sir"},{flag:"from_client",text:"Okay, Do you deliver it my home after purchase..?"},{flag:"to_client",text:"Yes sir, But it may take at least 1 Day... Are you okay with that time..?"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Harry",last_name:"Peter",email:"harrypeter@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to buy latest revealed Apple Watch"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Judith",last_name:"Espanaso",email:"judith.es@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!0,messages:[{flag:"from_client",text:"Hello..,"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Jason",last_name:"Mike",email:"jjmike@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to know the price of New Addidas Shoues"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Smith",last_name:"Shane",email:"shane_smith@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:null},{avatar:"https://i.pravatar.cc/300",first_name:"Adam",last_name:"Joe",email:"adam.jj@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!0,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to know the price of New Addidas Shoues"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Josheph ",last_name:"churchille",email:"joe.churchile@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:null}]},297:function(e,t,a){"use strict";a.r(t);var l=a(58),n=a.n(l),r=a(59),s=a(28),i=a(10),o=a(0),c=a.n(o),m=a(56),d=a(113),u=a(144),f=a(114),v=a(19),g=a(25),h=(a(117),a(57)),p=a(61),b=a(62),x=(a(63),a(17)),y=a(26),E=a(67),N=a(27),C=a(30);t.default=function(){var e,t,a,l=Object(o.useState)(),w=Object(i.a)(l,2),_=w[0],k=w[1],j=Object(o.useState)(),M=Object(i.a)(j,2),S=M[0],T=M[1],H=Object(o.useState)("Yesterday"),O=Object(i.a)(H,2),B=O[0],L=O[1],F=Object(x.b)(),I=Object(x.c)(y.a),q=null===I||void 0===I?void 0:I.login.currentUser,G=null===q||void 0===q?void 0:q.accessToken;function J(e){var t=Math.min.apply(Math,Object(s.a)(e)),a=Math.max.apply(Math,Object(s.a)(e));return e.map((function(e){return(e-t)/(a-t)}))}return Object(o.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var l,r,s,i,o,c,m,d,u,f,v,g,h,p,x,y,C,w,_;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=Object(E.a)(q,F,N.a.actions.loginSuccess),T(!1),e.next=4,b.l({Type:B},G,p);case 4:return x=e.sent,e.next=7,b.k({Type:B},G,p);case 7:return y=e.sent,e.next=10,b.j({Type:B},G,p);case 10:return C=e.sent,e.next=13,b.i({Type:B},G,p);case 13:w=e.sent,_=[x,y,C,w],x&&y&&C&&w&&T(!0),t=[{title:null===(l=_[0])||void 0===l?void 0:l.title,color:"bg-red-600"},{title:null===(r=_[1])||void 0===r?void 0:r.title,color:"bg-green-600"},{title:null===(s=_[2])||void 0===s?void 0:s.title,color:"bg-blue-600"},{title:null===(i=_[3])||void 0===i?void 0:i.title,color:"bg-purple-600"}],a={data:{labels:null===(o=_[0])||void 0===o?void 0:o.labels,datasets:[{label:null===(c=_[0])||void 0===c?void 0:c.title,backgroundColor:"#e02424",borderColor:"#e02424",data:J(null===(m=_[0])||void 0===m?void 0:m.data),fill:!1,tension:.5},{label:null===(d=_[1])||void 0===d?void 0:d.title,fill:!1,backgroundColor:"#057a55",borderColor:"#057a55",data:J(null===(u=_[1])||void 0===u?void 0:u.data),tension:.5},{label:null===(f=_[2])||void 0===f?void 0:f.title,fill:!1,backgroundColor:"#1c64f2",borderColor:"#1c64f2",data:J(null===(v=_[2])||void 0===v?void 0:v.data),tension:.5},{label:null===(g=_[3])||void 0===g?void 0:g.title,fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:J(null===(h=_[3])||void 0===h?void 0:h.data),tension:.5}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!0}},k({lineLegends:t,lineOptions:a,resultStatis:_});case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[B]),console.log(_),S?c.a.createElement("div",null,c.a.createElement(m.a,null,"Ph\xe2n T\xedch B\xe1n H\xe0ng"),c.a.createElement("div",{className:"flex text-gray-800 dark:text-gray-300"},c.a.createElement("div",{className:"flex items-center text-orange-600"},c.a.createElement(p.a,{className:"w-5 h-5","aria-hidden":"true",icon:h.HomeIcon}),c.a.createElement(v.c,{exact:!0,to:"/dashboard",className:"mx-2"},"K\xeanh ng\u01b0\u1eddi b\xe1n")),">",c.a.createElement("p",{className:"mx-2 text-[#ffa400]"},"Ph\xe2n T\xedch B\xe1n H\xe0ng")),c.a.createElement(g.Card,{className:"mt-5 mb-5 hover:shadow-md"},c.a.createElement(g.CardBody,null,c.a.createElement("div",{className:"flex items-center justify-between"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement("p",{className:"text-sm text-gray-600 dark:text-gray-400"},"Khung th\xf2i gian"),c.a.createElement(g.Label,{className:"mx-3"},c.a.createElement(g.Select,{className:"py-3",onChange:function(e){return"H\xf4m qua"==(t=e.target.value)&&L("Yesterday"),"Trong 7 ng\xe0y qua"==t&&L("7Days"),void("Trong 30 ng\xe0y qua"==t&&L("30Days"));var t}},c.a.createElement("option",null,"H\xf4m qua"),c.a.createElement("option",null,"Trong 7 ng\xe0y qua"),c.a.createElement("option",null,"Trong 30 ng\xe0y qua"))),c.a.createElement(g.Label,{className:"mx-3"},c.a.createElement(g.Select,{className:"py-3"},c.a.createElement("option",null,"Filter by Statis"),c.a.createElement("option",null,"Electronics"),c.a.createElement("option",null,"Cloths"),c.a.createElement("option",null,"Mobile Accerssories"))),c.a.createElement(g.Label,{className:"mr-8"},c.a.createElement("div",{className:"relative text-gray-500 focus-within:text-orange-600 dark:focus-within:text-orange-400"},c.a.createElement("input",{className:"py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input",placeholder:"Number of Results"}),c.a.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none"}))))))),c.a.createElement(g.Card,{className:"mt-5 mb-5 hover:shadow-md"},c.a.createElement(g.CardBody,null,c.a.createElement("div",{className:" mb-8 "},c.a.createElement("div",{className:"ml-4"},c.a.createElement(m.a,null,"Ch\u1ec9 s\u1ed1 quan tr\u1ecdng")),c.a.createElement("div",{className:"pb-6 mt-6 flex items-center relative w-full overflow-hidden"},null===_||void 0===_||null===(e=_.resultStatis)||void 0===e?void 0:e.map((function(e,t){return c.a.createElement("div",{key:t,className:"w-48 ml-4 flex-col flex justify-between relative rounded-md  hover:shadow-md border-t-4 border-t-blue-600 border-solid border border-slate-600 py-4 pr-2 pl-4 "},c.a.createElement("div",{className:"flex flex-1 text-sm font-medium leading-4 items-center"},c.a.createElement("span",{className:"mr-2"},e.title),c.a.createElement("div",{className:"text-slate-600 w-4 h-4"},c.a.createElement("i",{className:"shopee-icon"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c.a.createElement("path",{d:"M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"}))))),c.a.createElement("div",{className:"flex items-center mt-3"},e.data.reduce((function(e,t){return e+t}),0)>1e4&&c.a.createElement("label",{className:"font-normal translate-y-2.5 "},"\u20ab"),c.a.createElement("label",{className:"font-medium mt-1 text-xl leading-6 ml-2 "},e.data.reduce((function(e,t){return e+t}),0))),c.a.createElement("div",{className:"flex mt-2"},c.a.createElement("span",{className:"text-xs leading-3 text-gray-500"},function(e){switch(e){case"Yesterday":return"so v\u1edbi h\xf4m qua";case"7Days":return"so v\u1edbi 7 ng\xe0y tr\u01b0\u1edbc";case"30Days":return"so v\u1edbi 30 ng\xe0y tr\u01b0\u1edbc";default:return""}}(B))))}))),_&&c.a.createElement(d.a,{title:""},c.a.createElement(u.b,_.lineOptions),c.a.createElement(f.a,{legends:_.lineLegends})))))):c.a.createElement(C.a,null)}},56:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.children;return n.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},61:function(e,t,a){"use strict";var l=a(68),n=a(0),r=a.n(n),s=["icon"];t.a=function(e){var t=e.icon,a=Object(l.a)(e,s),n=t;return r.a.createElement(n,a)}},63:function(e,t,a){"use strict";var l=a(0),n=a.n(l);a(66);t.a=function(e){var t=e.src,a=e.alt,l=e.size,r=void 0===l?"w-20 h-20":l;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"relative rounded-md inline-block ".concat(r," hidden mr-4 md:block")},n.a.createElement("img",{className:"object-cover w-full h-full rounded-md",src:t,alt:a,loading:"lazy"})))}}}]);
//# sourceMappingURL=12.3e9cefbf.chunk.js.map