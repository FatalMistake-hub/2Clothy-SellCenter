(this["webpackJsonp2Clothy-SellCenter"]=this["webpackJsonp2Clothy-SellCenter"]||[]).push([[18],{285:function(e,t,a){"use strict";a.r(t);var n=a(59),r=a.n(n),c=a(60),l=a(26),s=a(10),u=a(0),o=a.n(u),i=a(56),m=a(19),f=a(61),h=a(57),d=a(25),p=(a(68),a(92)),v=a(93),b=function(e){var t=e.children;return o.a.createElement("h2",{className:"mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300"},t)};t.default=function(){var e=Object(u.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],g=Object(u.useState)([]),E=Object(s.a)(g,2),w=E[0],x=E[1];Object(u.useEffect)((function(){if(!(a.length<1)){var e=[];a.forEach((function(t){return e.push(URL.createObjectURL(t))})),x(e)}}),[a]);var N=function(e){var t=e.type.split("/")[1];return["png","jpeg","jpg"].includes(t)};var j=Object(u.useRef)(null),y=Object(u.useState)(""),O=Object(s.a)(y,2),k=(O[0],O[1]),S=Object(p.a)({initialValues:{email:"",password:""},validationSchema:v.a({email:v.c().required("B\u1eaft bu\u1ed9c!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Vui l\xf2ng nh\u1eadp m\u1ed9t \u0111\u1ecba ch\u1ec9 email h\u1ee3p l\u1ec7!"),password:v.c().required("B\u1eaft bu\u1ed9c!").matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,"M\u1eadt kh\u1ea9u ph\u1ea3i c\xf3 7-19 k\xfd t\u1ef1 v\xe0 ch\u1ee9a \xedt nh\u1ea5t m\u1ed9t ch\u1eef c\xe1i, m\u1ed9t s\u1ed1 v\xe0 m\u1ed9t k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t!")}),onSubmit:function(e){e.email,e.password;(function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1,k(1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}});return o.a.createElement("div",null,o.a.createElement("div",{className:"flex  mt-8  text-gray-800 dark:text-gray-300"},o.a.createElement("div",{className:"flex items-center text-orange-600"},o.a.createElement(f.a,{className:"w-5 h-5","aria-hidden":"true",icon:h.HomeIcon}),o.a.createElement(m.c,{exact:!0,to:"/dashboard",className:"mx-2"},"K\xeanh ng\u01b0\u1eddi b\xe1n")),">",o.a.createElement("p",{className:"mx-2"},"H\u1ed3 S\u01a1 Shop")),o.a.createElement("div",{className:"w-full mt-8 grid gap-4 grid-col  "},o.a.createElement(d.Card,{className:"row-span-4 md:col-span-4 "},o.a.createElement("div",{className:"ml-8 mb-4"},o.a.createElement(i.a,null,"H\u1ed3 S\u01a1 Shop"),o.a.createElement(b,null,"Xem t\xecnh tr\u1ea1ng Shop v\xe0 c\u1eadp nh\u1eadt h\u1ed3 s\u01a1 Shop c\u1ee7a b\u1ea1n")),o.a.createElement("form",{onSubmit:S.handleSubmit},o.a.createElement(d.CardBody,{className:"w-4/5 mx-auto"},o.a.createElement(b,null,"T\xean shop"),o.a.createElement(d.Label,null,o.a.createElement(d.Input,{className:"mb-4",placeholder:"Nh\u1eadp v\xe0o"})),o.a.createElement(b,null,"Banner shop"),o.a.createElement("div",{className:"w-full flex flex-wrap"},w.map((function(e,t){return o.a.createElement("div",{key:t,className:"w-20 h-20 rounded mr-4 mb-4"},o.a.createElement("div",{className:"w-full h-full "},o.a.createElement("img",{src:e,alt:"not fount",className:"w-20 h-20 rounded border "})))})),o.a.createElement("div",{className:"w-20 h-20 rounded mr-4 mb-4  text-center  flex"},o.a.createElement("div",{onClick:function(){j.current.click()},className:"w-full h-full rounded border border-dashed border-slate-600 flex items-center hover:bg-orange-100"},o.a.createElement("input",{type:"file",multiple:!0,className:"hidden",onChange:function(e){for(var t,r=e.target.files,c=0;c<e.target.files.length;c++){if(!N(r[c])){t=!1;break}t=!0}if(r.length<9&&t)if(a.concat(Object(l.a)(e.target.files)).length<=9){var s=a.concat(Object(l.a)(e.target.files));console.log(s),n(s)}else alert("Over the allowed file amount");else alert("File invalid")},ref:j}),o.a.createElement("div",{className:"flex text-orange-600 flex-col   "},o.a.createElement("div",{className:"h-6"},o.a.createElement("i",{className:"w-6 h-6 inline-block fill-current"},o.a.createElement("svg",{viewBox:"0 0 23 21",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5z"}),o.a.createElement("path",{d:"M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25z"})))),o.a.createElement("div",{className:"leading-3 text-xs"},"Th\xeam h\xecnh \u1ea3nh (",w.length,"/9)"))))),o.a.createElement(b,null,"M\xf4 t\u1ea3 shop"),o.a.createElement(d.Label,null,o.a.createElement(d.Textarea,{className:"mb-4",rows:"6"})),o.a.createElement("div",{className:"w-full"},o.a.createElement(d.Button,{size:"large",iconLeft:h.AddIcon},"L\u01b0u")))))))}},56:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},61:function(e,t,a){"use strict";var n=a(64),r=a(0),c=a.n(r),l=["icon"];t.a=function(e){var t=e.icon,a=Object(n.a)(e,l),r=t;return c.a.createElement(r,a)}},68:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}));var n=a(59),r=a.n(n),c=a(60),l=a(70),s=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.c("item");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.c("item/".concat(t),{});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("http",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.c("category");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.c("category/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=18.49540ff4.chunk.js.map