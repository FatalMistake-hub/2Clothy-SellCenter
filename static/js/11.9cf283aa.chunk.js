(this["webpackJsonp2Clothy-SellCenter"]=this["webpackJsonp2Clothy-SellCenter"]||[]).push([[11],{112:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(25);a.a=function(e){var a=e.title,t=e.value,l=e.children;return n.a.createElement(r.Card,null,n.a.createElement(r.CardBody,{className:"flex items-center"},l,n.a.createElement("div",null,n.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},a),n.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))))}},115:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(66),c=t.n(r);a.a=function(e){var a=e.icon,t=e.iconColorClass,l=void 0===t?"text-orange-600 dark:text-orange-100":t,r=e.bgColorClass,s=void 0===r?"bg-orange-100 dark:bg-orange-600":r,m=e.className,i=c()("p-3 rounded-md",l,s,m);return n.a.createElement("div",{className:i},n.a.createElement(a,{className:"w-5 h-5"}))}},283:function(e,a,t){"use strict";t.r(a);var l=t(58),n=t.n(l),r=t(59),c=t(10),s=t(68),m=t(0),i=t.n(m),o=t(56),u=t(2),d=t(19),b=t(57),E=t(25),f=(t(85),t(115)),g=(t(112),t(62)),x=t(17),v=t(26),p=t(67),N=t(77),h=t.n(N),C=t(27),T=t(63),y=["icon"];function w(e){var a=e.icon,t=Object(s.a)(e,y),l=a;return i.a.createElement(l,t)}a.default=function(){var e,a,t,l=Object(u.i)().id,s=Object(m.useState)(10),N=Object(c.a)(s,2),y=(N[0],N[1],Object(m.useState)("all")),k=Object(c.a)(y,2),j=(k[0],k[1],Object(m.useState)([])),O=Object(c.a)(j,2),S=O[0],I=O[1],P=Object(x.b)(),D=Object(x.c)(v.a),L=null===D||void 0===D?void 0:D.login.currentUser,B=null===L||void 0===L?void 0:L.accessToken;Object(m.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.a)(L,P,C.a.actions.loginSuccess),e.next=3,g.n(l,B,a);case 3:t=e.sent,I(t.orders[0]),console.log(t.orders);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return i.a.createElement("div",null,i.a.createElement(o.a,null,"Chi ti\u1ebft \u0111\u01a1n h\xe0ng"),i.a.createElement("div",{className:"flex text-gray-800 dark:text-gray-300"},i.a.createElement("div",{className:"flex items-center text-orange-600"},i.a.createElement(w,{className:"w-5 h-5","aria-hidden":"true",icon:b.HomeIcon}),i.a.createElement(d.c,{exact:!0,to:"/dashboard",className:"mx-2"},"K\xeanh ng\u01b0\u1eddi b\xe1n")),">",i.a.createElement(d.c,{exact:!0,to:"/orders",className:"mx-2  text-orange-600"},"\u0110\u01a1n h\xe0ng"),">",i.a.createElement("p",{className:"mx-2"},"Chi ti\u1ebft \u0111\u01a1n h\xe0ng")),i.a.createElement(E.Card,{className:"mt-5 mb-5 shadow-md"},i.a.createElement("div",{className:"bg-orange-300 p-4"},i.a.createElement("div",{className:"px-3 flex flex-col"},i.a.createElement("span",{className:"text-base font-bold leading-7 flex items-center "},i.a.createElement("img",{className:"w-6 h-6 mr-1",src:"https://img.icons8.com/windows/32/1A1A1A/calendar-week.png"}),h()(S.dateCreated).format("LLL")),i.a.createElement("span",{className:"text-sm font-normal leading-6 mx-4"},"Order ID: ",S.id))),i.a.createElement(E.CardBody,null,i.a.createElement("div",{className:"flex  w-full mb-12 mt-3 px-3"},i.a.createElement("div",{className:"w-2/6 flex"},i.a.createElement(f.a,{icon:b.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4 w-12 h-12 flex justify-center"}),i.a.createElement("div",{className:" flex flex-col"},i.a.createElement("h6",{className:"text-base font-medium leading-5"},"Ng\u01b0\u1eddi mua"),i.a.createElement("p",{className:"flex flex-col"},i.a.createElement("span",{className:"text-base font-normal leading-6"},"datko24"),i.a.createElement("span",{className:"text-base font-normal leading-6"},"datko24@example.com")))),i.a.createElement("div",{className:"w-2/6 flex"},i.a.createElement(f.a,{icon:b.PeopleIcon,iconColorClass:"text-green-500 dark:text-green-100",bgColorClass:"bg-green-100 dark:bg-green-500",className:"mr-4 w-12 h-12 flex justify-center"}),i.a.createElement("div",{className:" flex flex-col"},i.a.createElement("h6",{className:"text-base font-medium leading-5"},"\u0110\u1ecba ch\u1ec9 nh\u1eadn h\xe0ng"),i.a.createElement("p",{className:"flex flex-col"},i.a.createElement("span",{className:"text-base font-normal leading-6"},",",S.phoneNumber),i.a.createElement("span",{className:"text-base font-normal leading-6"},S.address)))),i.a.createElement("div",{className:"w-2/6 flex"},i.a.createElement(f.a,{icon:b.MoneyIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4 w-12 h-12 flex justify-center"}),i.a.createElement("div",{className:" flex flex-col"},i.a.createElement("h6",{className:"text-base font-medium leading-5"},"H\xecnh th\u1ee9c thanh to\xe1n"),i.a.createElement("p",{className:"flex flex-col"},i.a.createElement("span",{className:"text-base font-normal leading-6"},S.paymentName),i.a.createElement("span",{className:"text-base font-normal leading-6"},"datko24@example.com")))))),i.a.createElement("div",{className:"mx-8"},i.a.createElement(E.TableContainer,{className:"mb-8"},i.a.createElement(E.Table,null,i.a.createElement(E.TableHeader,null,i.a.createElement("tr",null,i.a.createElement(E.TableCell,null,"S\u1ea3n ph\u1ea9m"),i.a.createElement(E.TableCell,null,"Size"),i.a.createElement(E.TableCell,null,"S\u1ed1 l\u01b0\u1ee3ng"),i.a.createElement(E.TableCell,null,"\u0110\u01a1n gi\xe1"),i.a.createElement(E.TableCell,null,"Th\xe0nh ti\u1ec1n"))),i.a.createElement(E.TableBody,null,null===S||void 0===S||null===(e=S.orderDetails)||void 0===e?void 0:e.map((function(e,a){return i.a.createElement(E.TableRow,{key:a,className:"mb-4"},i.a.createElement(E.TableCell,null,i.a.createElement("div",{className:"flex items-center text-sm"},i.a.createElement(T.a,{className:"hidden mr-3 md:block",src:e.itemImg,alt:"User image"}),i.a.createElement("div",null,i.a.createElement("p",{className:"font-semibold"},e.itemName)))),i.a.createElement(E.TableCell,null,i.a.createElement("span",{className:"text-sm"},e.size)),i.a.createElement(E.TableCell,null,i.a.createElement("span",{className:"text-sm"},"X ",e.quantity)),i.a.createElement(E.TableCell,null,i.a.createElement("span",{className:"text-sm"},e.price.toLocaleString("es-ES")," \u20ab")),i.a.createElement(E.TableCell,null,i.a.createElement("span",{className:"text-sm"},(e.price*e.quantity).toLocaleString("es-ES")," \u20ab ")))})),i.a.createElement(E.TableRow,null,i.a.createElement(E.TableCell,null),i.a.createElement(E.TableCell,null),i.a.createElement(E.TableCell,null),i.a.createElement(E.TableCell,null,i.a.createElement("div",{className:"flex flex-col items-start "},i.a.createElement("span",{className:"text-base font-normal leading-6"},"T\u1ed5ng ti\u1ec1n s\u1ea3n ph\u1ea9m:"),i.a.createElement("span",{className:"text-base font-normal leading-6"},"Ph\xed v\u1eadn chuy\u1ec3n:"),i.a.createElement("span",{className:"text-base font-normal leading-6"},"T\u1ed5ng ti\u1ec1n thanh to\xe1n:"),i.a.createElement("span",{className:"text-base font-normal leading-6 mt-4"},"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng:"))),i.a.createElement(E.TableCell,null,i.a.createElement("div",{className:"flex flex-col w-48 items-end"},i.a.createElement("span",{className:"text-base font-normal leading-6"},"\u20ab",null===S||void 0===S||null===(a=S.orderDetails)||void 0===a?void 0:a.reduce((function(e,a){return e+a.price}),0).toLocaleString("es-ES")," "),i.a.createElement("span",{className:"text-base font-normal leading-6"},"\u20ab0"),i.a.createElement("span",{className:"text-base font-normal leading-6"},"\u20ab",null===S||void 0===S||null===(t=S.orderDetails)||void 0===t?void 0:t.reduce((function(e,a){return e+a.price}),0).toLocaleString("es-ES")," "),i.a.createElement(E.Badge,{className:"mt-4 w-24 h-14 flex items-center justify-center p-2",type:4===S.statusId?"danger":3===S.statusId?"success":1===S.statusId?"warning":"primary"},S.statusName))))))))))}},56:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.children;return n.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},a)}},63:function(e,a,t){"use strict";var l=t(0),n=t.n(l);t(66);a.a=function(e){var a=e.src,t=e.alt,l=e.size,r=void 0===l?"w-20 h-20":l;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"relative rounded-md inline-block ".concat(r," hidden mr-4 md:block")},n.a.createElement("img",{className:"object-cover w-full h-full rounded-md",src:a,alt:t,loading:"lazy"})))}},76:function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},85:function(e,a,t){"use strict";var l=t(58),n=t.n(l),r=t(59),c=t(10),s=t(0),m=t.n(s),i=t(25),o=(t(57),t(19)),u=t(63),d=t(62),b=t(17),E=t(26),f=t(67),g=t(77),x=t.n(g),v=t(27);a.a=function(e){var a=e.resultsPerPage,t=e.filter,l=(e.path,Object(s.useState)(1)),g=Object(c.a)(l,2),p=g[0],N=g[1],h=Object(s.useState)([]),C=Object(c.a)(h,2),T=C[0],y=C[1],w=Object(s.useState)([]),k=Object(c.a)(w,2),j=k[0],O=k[1],S=Object(b.b)(),I=Object(b.c)(E.a),P=null===I||void 0===I?void 0:I.login.currentUser,D=null===P||void 0===P?void 0:P.accessToken;Object(s.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(f.a)(P,S,v.a.actions.loginSuccess),e.next=3,d.m(D,a);case 3:t=e.sent,O(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){"T\u1ea5t c\u1ea3"!==t&&t||y(null===j||void 0===j?void 0:j.slice((p-1)*a,p*a)),"Ch\u1edd x\xe1c nh\u1eadn"===t&&y(null===j||void 0===j?void 0:j.filter((function(e){return 1===e.statusId})).slice((p-1)*a,p*a)),"\u0110ang giao"===t&&y(null===j||void 0===j?void 0:j.filter((function(e){return 2===e.statusId})).slice((p-1)*a,p*a)),"\u0110\xe3 giao"===t&&y(null===j||void 0===j?void 0:j.filter((function(e){return 3===e.statusId})).slice((p-1)*a,p*a)),"\u0110\xe3 hu\u1ef7"===t&&y(null===j||void 0===j?void 0:j.filter((function(e){return 4===e.statusId})).slice((p-1)*a,p*a))}),[p,a,t,j]);var L=function(e,a){(function(){var t=Object(r.a)(n.a.mark((function t(){var l,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=Object(f.a)(P,S,v.a.actions.loginSuccess),2!=a){t.next=8;break}return t.next=4,d.t(e,{StatusId:a},D,l);case 4:r=t.sent,O(r),t.next=12;break;case 8:return t.next=10,d.d(e,D,l);case 10:r=t.sent,O(r);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()};return m.a.createElement("div",null,m.a.createElement(i.TableContainer,{className:"mb-8"},m.a.createElement(i.Table,null,m.a.createElement(i.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(i.TableCell,null,"S\u1ea3n ph\u1ea9m"),m.a.createElement(i.TableCell,null,"S\u1ed1 l\u01b0\u1ee3ng"),m.a.createElement(i.TableCell,null,"T\u1ed5ng \u0110\u01a1n h\xe0ng"),m.a.createElement(i.TableCell,null,"Tr\u1ea1ng th\xe1i "),m.a.createElement(i.TableCell,null,"Ng\xe0y \u0111\u1eb7t \u0111\u01a1n"),m.a.createElement(i.TableCell,null,"Thao t\xe1c"))),m.a.createElement(i.TableBody,null,null===T||void 0===T?void 0:T.map((function(e,a){var t,l,n;return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.TableRow,{key:a,className:"mb-4"},m.a.createElement(i.TableCell,null,m.a.createElement("div",{className:"flex flex-end p-4"}," M\xe3 \u0111\u01a1n h\xe0ng: ",e.billId," "),m.a.createElement("div",{className:"flex items-center text-sm"},m.a.createElement(u.a,{className:"hidden mr-3 md:block",src:null===(t=e.orderDetails[0])||void 0===t?void 0:t.itemImg,alt:"User image"}),m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},null===(l=e.orderDetails[0])||void 0===l?void 0:l.itemName)))),m.a.createElement(i.TableCell,null,m.a.createElement("span",{className:"text-sm"},"X ",null===(n=e.orderDetails[0])||void 0===n?void 0:n.quantity)),m.a.createElement(i.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.orderDetails.reduce((function(e,a){return e+a.price}),0).toLocaleString("es-ES")," ","\u20ab")),m.a.createElement(i.TableCell,null,m.a.createElement(i.Badge,{type:4===e.statusId?"danger":3===e.statusId?"success":1===e.statusId?"warning":"primary"},e.statusName)),m.a.createElement(i.TableCell,null,m.a.createElement("span",{className:"text-sm"},x()(T.dateCreated).format("L"))),m.a.createElement(i.TableCell,null,m.a.createElement("div",{className:"flex flex-col  justify-between"},m.a.createElement(o.b,{to:"/orders/".concat(e.id)},m.a.createElement("span",{className:"my-2 font-medium leading-3 text-blue-500 hover:text-blue-700","aria-label":"Preview"},"Xem chi ti\u1ebft")),function(e,a){switch(e){case 1:return m.a.createElement(m.a.Fragment,null,m.a.createElement("span",{onClick:function(){return L(a,2)},className:"my-2 font-medium cursor-pointer leading-3 text-blue-500 hover:text-blue-700","aria-label":"Preview"},"X\xe1c nh\u1eadn"),m.a.createElement("span",{onClick:function(){return L(a,4)},className:"my-2 font-medium cursor-pointer leading-3 text-blue-500 hover:text-blue-700","aria-label":"Preview"},"Hu\u1ef7"));default:return""}}(e.statusId,e.id)))),e.orderDetails.splice(1,e.orderDetails.length).map((function(e,a){return m.a.createElement(i.TableRow,{key:a},m.a.createElement(i.TableCell,null,m.a.createElement("div",{className:"flex items-center text-sm"},m.a.createElement(u.a,{className:"hidden mr-3 md:block",src:e.itemImg,alt:"User image"}),m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},e.itemName)))),m.a.createElement(i.TableCell,null,"X ",e.quantity),m.a.createElement(i.TableCell,null),m.a.createElement(i.TableCell,null),m.a.createElement(i.TableCell,null),m.a.createElement(i.TableCell,null))})))}))),m.a.createElement(i.TableFooter,null,m.a.createElement(i.Pagination,{totalResults:null===j||void 0===j?void 0:j.length,resultsPerPage:a,label:"Table navigation",onChange:function(e){N(e)}})))))}}}]);
//# sourceMappingURL=11.9cf283aa.chunk.js.map