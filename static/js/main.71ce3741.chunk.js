(this["webpackJsonpclima-app"]=this["webpackJsonpclima-app"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(29),s=c.n(a),r=(c(38),c(13)),i=c(3),o=c(10),l=(c(39),c(1)),j=function(e){var t=e.handleSearch,c=e.location,a=Object(n.useState)(null),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r||t(null),t(r)},className:"form",children:[Object(l.jsx)("input",{type:"text",className:"input",name:"ciudad",id:"ciudad",placeholder:"Ingresa tu ciudad o pa\xeds",defaultValue:c,onChange:function(e){return i(e.target.value)},autoComplete:"off"}),Object(l.jsx)("button",{type:"submit",className:"button",children:Object(l.jsx)("i",{className:"fas fa-search"})})]})})},u=(c(41),function(e){var t=e.response;if(!t)return null;var c=t.weather[0];return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("p",{className:"city",children:["Clima de ",t.name,", ",t.sys.country]}),Object(l.jsxs)("div",{className:"imagen",children:[Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(c.icon,"@4x.png"),alt:""}),Object(l.jsx)("p",{className:"description",children:c.description})]}),Object(l.jsxs)("div",{className:"temp",children:[Object(l.jsxs)("p",{className:"tempC",children:[t.main.temp,"\xb0C"]}),Object(l.jsxs)("p",{className:"tempFeels",children:["Se siente como ",t.main.feels_like,"\xb0C"]})]})]})}),d=(c(42),function(e){var t=e.error;return Object(l.jsx)("div",{className:"error",children:Object(l.jsxs)("p",{children:["Error ",t.data.cod,": ",t.data.message]})})}),p=(c(43),function(){return Object(l.jsx)("div",{className:"loader",children:Object(l.jsxs)("div",{className:"lds-roller",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})}),b=c(11),O=c.n(b),h=c(14),f=c(15),m=c.n(f);function x(){return(x=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://api.ipdata.co/?api-key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Weather-App",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).KEY_API));case 3:return t=e.sent,e.abrupt("return",t.data.city);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),l=r[0],j=r[1],u=Object(n.useState)(null),d=Object(o.a)(u,2),p=d[0],b=d[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),g=v[0],S=v[1],N=Object(i.e)(),C=Object(n.useCallback)(Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),S(!0),e.prev=2,e.next=5,m.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&lang=es&units=metric&appid=32af7cce19ca153549abe935840d6753"));case 5:t=e.sent,N.replace({search:"?q=".concat(c)}),j(t.data),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),b(e.t0.response),j(null);case 14:return e.prev=14,S(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])}))),[c,N]);return Object(n.useEffect)((function(){N.location.search||function(){return x.apply(this,arguments)}().then((function(e){return a(e)}))})),Object(n.useEffect)((function(){c&&C()}),[c,C]),{response:l,error:p,isLoading:g,setLocation:a,location:c}}c(67);var g=c(31),S=function(){var e=v(),t=e.setLocation,c=e.location,a=e.isLoading,s=e.error,r=e.response,o=Object(i.e)(),b=Object(i.f)().search,O=new URLSearchParams(b).get("q");return Object(n.useEffect)((function(){O&&t(O)})),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(g.a,{children:Object(l.jsxs)("title",{children:["Weather App | ",c||""]})}),Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h2",{children:"Clima Hoy"}),Object(l.jsx)("i",{className:"fas logo",children:"\uf6c4"})]}),Object(l.jsx)(j,{handleSearch:function(e){e&&(t(e),o.location.search!=="?q=".concat(e)&&o.replace({search:"?q=".concat(e)}))},location:c}),a&&Object(l.jsx)(p,{}),s&&Object(l.jsx)(d,{error:s}),r&&Object(l.jsx)(u,{response:r})]})};var N=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(i.a,{exact:!0,path:"/",component:S})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};s.a.render(Object(l.jsx)(N,{}),document.getElementById("root")),C()}},[[68,1,2]]]);
//# sourceMappingURL=main.71ce3741.chunk.js.map