(this["webpackJsonp2Clothy-SellCenter"]=this["webpackJsonp2Clothy-SellCenter"]||[]).push([[16],{286:function(e,t,a){"use strict";a.r(t);var i=a(26),r=a(58),o=a.n(r),s=a(59),n=a(10),u=a(0),c=a.n(u),l=a(19),m=a(61),d=a(56),p=a(57),v=a(25),f=a(2),h=(a(74),a(64)),g=a(83),y=a(84),b=function(e){var t=e.children;return c.a.createElement("h2",{className:"mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300"},t)};t.default=function(){var e,t,a=Object(f.i)().id,r=Object(u.useState)(!1),w=Object(n.a)(r,2),q=w[0],x=w[1],I=Object(u.useState)(null),E=Object(n.a)(I,2);E[0],E[1];function N(){return(N=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){x(!1)}var j=Object(u.useState)([]),C=Object(n.a)(j,2),D=C[0],L=C[1],O=Object(u.useState)(),k=Object(n.a)(O,2),_=k[0],H=k[1];Object(u.useLayoutEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a();case 2:return t=e.sent,L(t),e.next=6,h.e(a);case 6:i=e.sent,ae.values.CategoryId=i[0].categoryName,ae.values.Name=i[0].name,ae.values.Price=i[0].price,ae.values.Description=i[0].description,ae.values.Size=i[0].size,H(i[0]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var P=Object(u.useState)([]),A=Object(n.a)(P,2),M=A[0],z=A[1],R=function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.c(t.id);case 2:a=e.sent,z(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=Object(u.useState)(),$=Object(n.a)(Q,2),B=$[0],T=$[1],V=Object(u.useState)([]),U=Object(n.a)(V,2),F=U[0],G=U[1],J=Object(u.useState)([]),K=Object(n.a)(J,2),X=K[0],W=K[1];Object(u.useEffect)((function(){if(!(F.length<1)){var e=[];ae.values.Paths=F,console.log(ae.values.Paths),F.forEach((function(t){return e.push(URL.createObjectURL(t))})),W(e)}}),[F]);var Y=function(e){var t=e.type.split("/")[1];return["png","jpeg","jpg"].includes(t)};var Z=Object(u.useRef)(null),ee=Object(u.useState)(""),te=Object(n.a)(ee,2),ae=(te[0],te[1],Object(g.a)({initialValues:{CategoryId:null===_||void 0===_?void 0:_.CategoryId,Name:null===_||void 0===_?void 0:_.Name,Price:null===_||void 0===_?void 0:_.Price,Description:null===_||void 0===_?void 0:_.Description,Size:null===_||void 0===_?void 0:_.Size},validationSchema:y.a({}),onSubmit:function(e){var t={CategoryId:e.CategoryId.id,Name:e.Name,Price:e.Price,Description:e.Description,Size:e.Size,Paths:e.Paths};console.log("submit",t)}}));return c.a.createElement("div",null,c.a.createElement(d.a,null,"Th\xeam M\u1edbi S\u1ea3n Ph\u1ea9m"),c.a.createElement("div",{className:"flex text-gray-800 dark:text-gray-300"},c.a.createElement("div",{className:"flex items-center text-orange-600"},c.a.createElement(m.a,{className:"w-5 h-5","aria-hidden":"true",icon:p.HomeIcon}),c.a.createElement(l.c,{exact:!0,to:"/dashboard",className:"mx-2"},"K\xeanh ng\u01b0\u1eddi b\xe1n")),">",c.a.createElement("p",{className:"mx-2"},"Th\xeam M\u1edbi S\u1ea3n Ph\u1ea9m")),c.a.createElement("div",{className:"w-full mt-8 grid gap-4 grid-col md:grid-cols-3 "},c.a.createElement(v.Modal,{isOpen:q,onClose:S,style:{width:"1000px"}},c.a.createElement(v.ModalHeader,{className:"flex mb-8 text-3xl "},"Ch\u1ec9nh s\u1eeda ng\xe0nh h\xe0ng"),c.a.createElement(v.ModalBody,{className:"max-w-7xl max-h-96"},c.a.createElement("div",{className:"flex-grow min-h-8 overflow-auto text-sm px-6"},c.a.createElement("div",{className:"rounded p-4 bg-gray-100"},c.a.createElement("div",{className:"relative overflow-hidden  rounded"},c.a.createElement("div",{className:"py-3 relative w-96 flex bg-white"},c.a.createElement("ul",{className:" h-80 flex-1"},D.map((function(e,t){return c.a.createElement("li",{key:e.id,className:"my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100",onClick:function(){return R(e)}},c.a.createElement("p",{className:"text-sm font-semibold leading-8 text-ellipsis"},e.name),c.a.createElement("div",{className:"flex item-center "},c.a.createElement(m.a,{className:"w-5 h-5","aria-hidden":"true",icon:v.RightArrow})))}))),c.a.createElement("ul",{className:" h-80 flex-1"},null===M||void 0===M?void 0:M.map((function(e,t){return c.a.createElement("li",{key:e.id,className:"my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100",onClick:function(){return function(e){T(e),ae.values.CategoryId=e}(e)}},c.a.createElement("p",{className:"text-sm font-semibold leading-8 text-ellipsis"},e.name))})))))))),c.a.createElement(v.ModalFooter,null,c.a.createElement("div",{className:"w-full flex justify-between"},c.a.createElement("div",{className:"leading-5"},c.a.createElement("span",{className:"mr-1"},"\u0110\xe3 ch\u1ecdn :"),c.a.createElement("span",{className:"ml-1"},null===B||void 0===B?void 0:B.name)),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"ml-4 "},c.a.createElement(v.Button,{block:!0,layout:"outline",onClick:S},"HU\u1ef7")),c.a.createElement("div",{className:"ml-4 hidden sm:block"},c.a.createElement(v.Button,{onClick:S},"X\xe1c nh\u1eadn")))))),c.a.createElement(v.Card,{className:"row-span-4 md:col-span-4 "},c.a.createElement("form",{onSubmit:ae.handleSubmit},c.a.createElement(v.CardBody,null,c.a.createElement(b,null,"H\xecnh \u1ea3nh s\u1ea3n ph\u1ea9m"),c.a.createElement("div",{className:"w-full flex flex-wrap"},X.map((function(e,t){return c.a.createElement("div",{key:t,className:"w-20 h-20 rounded mr-4 mb-4"},c.a.createElement("div",{className:"w-full h-full "},c.a.createElement("img",{src:e,alt:"not fount",className:"w-20 h-20 rounded border "})))})),c.a.createElement("div",{className:"w-20 h-20 rounded mr-4 mb-4  text-center  flex"},c.a.createElement("div",{onClick:function(){Z.current.click()},className:"w-full h-full rounded border border-dashed border-slate-600 flex items-center hover:bg-orange-100"},c.a.createElement("input",{id:"Paths",name:"Paths",type:"file",multiple:!0,className:"hidden",onChange:function(e){for(var t,a=e.target.files,r=0;r<e.target.files.length;r++){if(!Y(a[r])){t=!1;break}t=!0}if(a.length<9&&t)if(F.concat(Object(i.a)(e.target.files)).length<=9){var o=F.concat(Object(i.a)(e.target.files));G(o)}else alert("Over the allowed file amount");else alert("File invalid")},ref:Z}),c.a.createElement("div",{className:"flex text-orange-600 flex-col   "},c.a.createElement("div",{className:"h-6"},c.a.createElement("i",{className:"w-6 h-6 inline-block fill-current"},c.a.createElement("svg",{viewBox:"0 0 23 21",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5z"}),c.a.createElement("path",{d:"M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25z"})))),c.a.createElement("div",{className:"leading-3 text-xs"},"Th\xeam h\xecnh \u1ea3nh (",X.length,"/9)"))))),c.a.createElement(b,null,"T\xean s\u1ea3n ph\u1ea9m"),c.a.createElement(v.Label,null,c.a.createElement(v.Input,{id:"Name",name:"Name",value:ae.values.Name,onChange:ae.handleChange,className:"mb-4",placeholder:"Nh\u1eadp v\xe0o"})),c.a.createElement(b,null,"Danh m\u1ee5c"),c.a.createElement(v.Label,null,c.a.createElement(v.Input,{id:"CategoryId",name:"CategoryId",value:(null===(e=ae.values.CategoryId)||void 0===e?void 0:e.name)?null===(t=ae.values.CategoryId)||void 0===t?void 0:t.name:ae.values.CategoryId,onChange:ae.handleChange,onClick:function(){return function(e){return N.apply(this,arguments)}("1")},className:"mb-4",placeholder:"Ch\u1ecdn danh m\u1ee5c",readOnly:!0})),c.a.createElement(b,null,"Size"),c.a.createElement(v.Label,null,c.a.createElement(v.Input,{id:"Size",name:"Size",value:ae.values.Size,onChange:ae.handleChange,className:"mb-4",placeholder:"Nh\u1eadp size"})),c.a.createElement(b,null,"M\xf4 t\u1ea3 s\u1ea3n ph\u1ea9m"),c.a.createElement(v.Label,null,c.a.createElement(v.Textarea,{id:"Description",name:"Description",value:ae.values.Description,onChange:ae.handleChange,className:"mb-4",rows:"6"})),c.a.createElement(b,null,"Gi\xe1"),c.a.createElement(v.Label,null,c.a.createElement(v.Input,{id:"Price",name:"Price",value:ae.values.Price,onChange:ae.handleChange,type:"number",className:"mb-4 ",placeholder:"Nh\u1eadp v\xe0o"})),c.a.createElement("div",{className:"w-full"},c.a.createElement(v.Button,{type:"submit",size:"large",iconLeft:p.AddIcon},"Th\xeam s\u1ea3n ph\u1ea9m")))))))}},56:function(e,t,a){"use strict";var i=a(0),r=a.n(i);t.a=function(e){var t=e.children;return r.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},61:function(e,t,a){"use strict";var i=a(66),r=a(0),o=a.n(r),s=["icon"];t.a=function(e){var t=e.icon,a=Object(i.a)(e,s),r=t;return o.a.createElement(r,a)}},64:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"g",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return p}));var i=a(58),r=a.n(i),o=a(59),s=a(69),n=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c("item");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c("item/".concat(t),{});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("http",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c("category");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c("category/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c("category/".concat(t,"/item"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c("shop/".concat(t,"/category"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c("shop/".concat(t,"/item"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},74:function(e,t,a){"use strict";t.a=[{id:1,photo:"https://vetra.laborasyon.com/assets/images/products/1.jpg",name:"Headphone",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$120.00",qty:120,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:2,photo:"https://vetra.laborasyon.com/assets/images/products/2.jpg",name:"Shoe",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$320.00",qty:54,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:3,photo:"https://vetra.laborasyon.com/assets/images/products/3.jpg",name:"Digital Clock",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$230.00",qty:0,rating:3,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:4,photo:"https://vetra.laborasyon.com/assets/images/products/4.jpg",name:"Toy Car",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$54.00",qty:12,rating:4,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:5,photo:"https://vetra.laborasyon.com/assets/images/products/5.jpg",name:"Sunglasses",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$20.00",qty:340,rating:4,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:6,photo:"https://vetra.laborasyon.com/assets/images/products/6.jpg",name:"Cake",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus \n\neligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit! \nDoloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam \n\nducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$69.00",qty:0,rating:4,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:7,photo:"https://vetra.laborasyon.com/assets/images/products/7.jpg",name:"Glass",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$34.00",qty:12,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:8,photo:"https://vetra.laborasyon.com/assets/images/products/8.jpg",name:"Ear Buds",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$100.00",qty:0,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:9,photo:"https://vetra.laborasyon.com/assets/images/products/9.jpg",name:"Perfume",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$90.00",qty:34,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:10,photo:"https://vetra.laborasyon.com/assets/images/products/10.jpg",name:"Cookie",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$10.00",qty:0,rating:3,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]}]}}]);
//# sourceMappingURL=16.7c73bec5.chunk.js.map