(this["webpackJsonp2Clothy-SellCenter"]=this["webpackJsonp2Clothy-SellCenter"]||[]).push([[20],{282:function(e,t,a){"use strict";a.r(t);var l=a(10),n=a(68),r=a(0),c=a.n(r),i=a(56),s=a(19),u=a(57),m=a(25),o=a(85),d=["icon"];function b(e){var t=e.icon,a=Object(n.a)(e,d),l=t;return c.a.createElement(l,a)}t.default=function(){var e=Object(r.useState)(5),t=Object(l.a)(e,2),a=t[0],n=(t[1],Object(r.useState)("T\u1ea5t c\u1ea3")),d=Object(l.a)(n,2),E=d[0],f=d[1],g=function(e){"T\u1ea5t c\u1ea3"===e&&f("T\u1ea5t c\u1ea3"),"Ch\u1edd x\xe1c nh\u1eadn"===e&&f("Ch\u1edd x\xe1c nh\u1eadn"),"\u0110ang giao"===e&&f("\u0110ang giao"),"\u0110\xe3 giao"===e&&f("\u0110\xe3 giao"),"\u0110\xe3 hu\u1ef7"===e&&f("\u0110\xe3 hu\u1ef7")};return c.a.createElement("div",null,c.a.createElement(i.a,null,"\u0110\u01a1n h\xe0ng"),c.a.createElement("div",{className:"flex text-gray-800 dark:text-gray-300"},c.a.createElement("div",{className:"flex items-center text-orange-600"},c.a.createElement(b,{className:"w-5 h-5","aria-hidden":"true",icon:u.HomeIcon}),c.a.createElement(s.c,{exact:!0,to:"/dashboard",className:"mx-2"},"K\xeanh ng\u01b0\u1eddi b\xe1n")),">",c.a.createElement("p",{className:"mx-2"},"\u0110\u01a1n h\xe0ng")),c.a.createElement(m.Card,{className:"mt-5 mb-5 shadow-md"},c.a.createElement(m.CardBody,null,c.a.createElement("div",{className:"flex items-center "},c.a.createElement(m.Label,{className:"mx-3 flex items-center "},c.a.createElement("p",{className:"text-sm w-full  text-gray-600 dark:text-gray-400"},"L\u1ecdc \u0111\u01a1n h\xe0ng"),c.a.createElement(m.Select,{className:"py-3",onChange:function(e){return g(e.target.value)}},c.a.createElement("option",null,"T\u1ea5t c\u1ea3"),c.a.createElement("option",null,"Ch\u1edd x\xe1c nh\u1eadn"),c.a.createElement("option",null,"\u0110ang giao"),c.a.createElement("option",null,"\u0110\xe3 giao"),c.a.createElement("option",null,"\u0110\xe3 hu\u1ef7"))),c.a.createElement(m.Label,{className:"mx-3 flex items-center"},c.a.createElement("p",{className:"text-sm w-full text-gray-600 dark:text-gray-400"},"Ng\xe0y \u0111\u1eb7t h\xe0ng"),c.a.createElement(m.Select,{className:"py-3",onChange:function(e){return g(e.target.value)}},c.a.createElement("option",null,"T\u1ea5t c\u1ea3"),c.a.createElement("option",null,"Ch\u01b0a thanh to\xe1n"),c.a.createElement("option",null,"\u0110\xe3 thanh to\xe1n"),c.a.createElement("option",null,"Ho\xe0n th\xe0nh")))))),c.a.createElement(o.a,{resultsPerPage:a,filter:E,path:"orders"}))}},56:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.children;return n.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},63:function(e,t,a){"use strict";var l=a(0),n=a.n(l);a(66);t.a=function(e){var t=e.src,a=e.alt,l=e.size,r=void 0===l?"w-20 h-20":l;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"relative rounded-md inline-block ".concat(r," hidden mr-4 md:block")},n.a.createElement("img",{className:"object-cover w-full h-full rounded-md",src:t,alt:a,loading:"lazy"})))}},76:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},85:function(e,t,a){"use strict";var l=a(58),n=a.n(l),r=a(59),c=a(10),i=a(0),s=a.n(i),u=a(25),m=(a(57),a(19)),o=a(63),d=a(62),b=a(17),E=a(26),f=a(67),g=a(77),h=a.n(g),v=a(27);t.a=function(e){var t=e.resultsPerPage,a=e.filter,l=(e.path,Object(i.useState)(1)),g=Object(c.a)(l,2),p=g[0],x=g[1],N=Object(i.useState)([]),C=Object(c.a)(N,2),T=C[0],y=C[1],j=Object(i.useState)([]),w=Object(c.a)(j,2),k=w[0],O=w[1],S=Object(b.b)(),P=Object(b.c)(E.a),I=null===P||void 0===P?void 0:P.login.currentUser,D=null===I||void 0===I?void 0:I.accessToken;Object(i.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.a)(I,S,v.a.actions.loginSuccess),e.next=3,d.m(D,t);case 3:a=e.sent,O(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.useEffect)((function(){"T\u1ea5t c\u1ea3"!==a&&a||y(null===k||void 0===k?void 0:k.slice((p-1)*t,p*t)),"Ch\u1edd x\xe1c nh\u1eadn"===a&&y(null===k||void 0===k?void 0:k.filter((function(e){return 1===e.statusId})).slice((p-1)*t,p*t)),"\u0110ang giao"===a&&y(null===k||void 0===k?void 0:k.filter((function(e){return 2===e.statusId})).slice((p-1)*t,p*t)),"\u0110\xe3 giao"===a&&y(null===k||void 0===k?void 0:k.filter((function(e){return 3===e.statusId})).slice((p-1)*t,p*t)),"\u0110\xe3 hu\u1ef7"===a&&y(null===k||void 0===k?void 0:k.filter((function(e){return 4===e.statusId})).slice((p-1)*t,p*t))}),[p,t,a,k]);var L=function(e,t){(function(){var a=Object(r.a)(n.a.mark((function a(){var l,r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l=Object(f.a)(I,S,v.a.actions.loginSuccess),2!=t){a.next=8;break}return a.next=4,d.t(e,{StatusId:t},D,l);case 4:r=a.sent,O(r),a.next=12;break;case 8:return a.next=10,d.d(e,D,l);case 10:r=a.sent,O(r);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()};return s.a.createElement("div",null,s.a.createElement(u.TableContainer,{className:"mb-8"},s.a.createElement(u.Table,null,s.a.createElement(u.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(u.TableCell,null,"S\u1ea3n ph\u1ea9m"),s.a.createElement(u.TableCell,null,"S\u1ed1 l\u01b0\u1ee3ng"),s.a.createElement(u.TableCell,null,"T\u1ed5ng \u0110\u01a1n h\xe0ng"),s.a.createElement(u.TableCell,null,"Tr\u1ea1ng th\xe1i "),s.a.createElement(u.TableCell,null,"Ng\xe0y \u0111\u1eb7t \u0111\u01a1n"),s.a.createElement(u.TableCell,null,"Thao t\xe1c"))),s.a.createElement(u.TableBody,null,null===T||void 0===T?void 0:T.map((function(e,t){var a,l,n;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.TableRow,{key:t,className:"mb-4"},s.a.createElement(u.TableCell,null,s.a.createElement("div",{className:"flex flex-end p-4"}," M\xe3 \u0111\u01a1n h\xe0ng: ",e.billId," "),s.a.createElement("div",{className:"flex items-center text-sm"},s.a.createElement(o.a,{className:"hidden mr-3 md:block",src:null===(a=e.orderDetails[0])||void 0===a?void 0:a.itemImg,alt:"User image"}),s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},null===(l=e.orderDetails[0])||void 0===l?void 0:l.itemName)))),s.a.createElement(u.TableCell,null,s.a.createElement("span",{className:"text-sm"},"X ",null===(n=e.orderDetails[0])||void 0===n?void 0:n.quantity)),s.a.createElement(u.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.orderDetails.reduce((function(e,t){return e+t.price}),0).toLocaleString("es-ES")," ","\u20ab")),s.a.createElement(u.TableCell,null,s.a.createElement(u.Badge,{type:4===e.statusId?"danger":3===e.statusId?"success":1===e.statusId?"warning":"primary"},e.statusName)),s.a.createElement(u.TableCell,null,s.a.createElement("span",{className:"text-sm"},h()(T.dateCreated).format("L"))),s.a.createElement(u.TableCell,null,s.a.createElement("div",{className:"flex flex-col  justify-between"},s.a.createElement(m.b,{to:"/orders/".concat(e.id)},s.a.createElement("span",{className:"my-2 font-medium leading-3 text-blue-500 hover:text-blue-700","aria-label":"Preview"},"Xem chi ti\u1ebft")),function(e,t){switch(e){case 1:return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{onClick:function(){return L(t,2)},className:"my-2 font-medium cursor-pointer leading-3 text-blue-500 hover:text-blue-700","aria-label":"Preview"},"X\xe1c nh\u1eadn"),s.a.createElement("span",{onClick:function(){return L(t,4)},className:"my-2 font-medium cursor-pointer leading-3 text-blue-500 hover:text-blue-700","aria-label":"Preview"},"Hu\u1ef7"));default:return""}}(e.statusId,e.id)))),e.orderDetails.splice(1,e.orderDetails.length).map((function(e,t){return s.a.createElement(u.TableRow,{key:t},s.a.createElement(u.TableCell,null,s.a.createElement("div",{className:"flex items-center text-sm"},s.a.createElement(o.a,{className:"hidden mr-3 md:block",src:e.itemImg,alt:"User image"}),s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.itemName)))),s.a.createElement(u.TableCell,null,"X ",e.quantity),s.a.createElement(u.TableCell,null),s.a.createElement(u.TableCell,null),s.a.createElement(u.TableCell,null),s.a.createElement(u.TableCell,null))})))}))),s.a.createElement(u.TableFooter,null,s.a.createElement(u.Pagination,{totalResults:null===k||void 0===k?void 0:k.length,resultsPerPage:t,label:"Table navigation",onChange:function(e){x(e)}})))))}}}]);
//# sourceMappingURL=20.7167281e.chunk.js.map