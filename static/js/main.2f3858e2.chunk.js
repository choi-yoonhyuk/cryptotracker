(this["webpackJsonptypescript-practice"]=this["webpackJsonptypescript-practice"]||[]).push([[0],{83:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(25),o=t.n(r),a=t(6),s=t(5),l=t(34),d=t(22),h=t(9),b=t(18),j=t(11),u=t.n(j),p=t(23),x="https://api.coinpaprika.com/v1";function O(){return f.apply(this,arguments)}function f(){return(f=Object(p.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/coins"));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return(g=Object(p.a)(u.a.mark((function n(e){var t,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/coins/").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(p.a)(u.a.mark((function n(e){var t,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/tickers/").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return(v=Object(p.a)(u.a.mark((function n(e){var t,c,i,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(Date.now()/1e3),c=t-1209600,n.next=4,fetch("".concat(x,"/coins/").concat(e,"/ohlcv/historical?start=").concat(c,"&end=").concat(t));case 4:return i=n.sent,n.next=7,i.json();case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y,k,w,C,_,S,q=t(51),D=t.n(q),P=t(17),I=Object(P.b)({key:"isDark",default:!0}),L=t(1),U=function(n){var e=n.coinId,t=(Object(P.c)(I),Object(b.useQuery)(["ohlcv",e],(function(){return function(n){return v.apply(this,arguments)}(e)}),{refetchInterval:1e4})),c=t.isLoading,i=t.data;return Object(L.jsx)("div",{children:c?"Loading chart...":Object(L.jsx)(D.a,{type:"line",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})},z=t(4),F=Object(s.d)(y||(y=Object(a.a)(["\n  0% {\n    transform: none;\n    opacity: 0;\n  }\n  1% {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n"]))),M=s.c.div(k||(k=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  main:first-child {\n    animation-delay: 0.2s;\n  }\n  main:nth-child(2) {\n    animation-delay: 0.4s;\n  }\n  main:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  main:nth-child(4) {\n    animation-delay: 0.8s;\n  }\n  main:nth-child(5) {\n    animation-delay: 1s;\n  }\n  main:last-child {\n    animation-delay: 1.2s;\n  }\n"]))),Q=s.c.main(w||(w=Object(a.a)(["\n  width: 100%;\n  height: 50px;\n  background-color: white;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 15px;\n  margin: 10px 0;\n  padding: 20px;\n  transform: translateY(-5px);\n  opacity: 0;\n  animation: "," 0.5s linear forwards;\n"])),F),T=s.c.h3(C||(C=Object(a.a)(["\n  width: 50%;\n  color: black;\n  font-size: 12px;\n  font-weight: 600;\n"]))),B=s.c.div(_||(_=Object(a.a)(["\n  width: 50%;\n"]))),A=s.c.h3(S||(S=Object(a.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.isPositive?"lightgreen":"red"}));function H(n){if(n)return n>0}var $,E,J,R,Y,G,K,N,V,W,X,Z,nn,en,tn,cn,rn,on,an,sn,ln,dn=function(n){var e=n.coinId,t=n.tickersData,i=Object(c.useState)(),r=Object(z.a)(i,2),o=r[0],a=r[1],s=Object(c.useState)(!0),l=Object(z.a)(s,2),d=l[0],h=l[1];return Object(c.useEffect)((function(){a(t),h(!1)}),[e,t]),Object(L.jsx)(M,{children:d?"Loading Price...":Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(Q,{children:[Object(L.jsx)(T,{children:"Price :"}),Object(L.jsx)(B,{children:Object(L.jsxs)(A,{isPositive:!0,children:["$ ",null===o||void 0===o?void 0:o.quotes.USD.price.toFixed(3)]})})]}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(T,{children:" Max Change rate in last 24h:"}),Object(L.jsx)(B,{children:Object(L.jsxs)(A,{isPositive:!0===H(null===o||void 0===o?void 0:o.quotes.USD.market_cap_change_24h),children:[null===o||void 0===o?void 0:o.quotes.USD.market_cap_change_24h," %"]})})]}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(T,{children:" Change rate (last 30 Minutes):"}),Object(L.jsx)(B,{children:Object(L.jsxs)(A,{isPositive:!0===H(null===o||void 0===o?void 0:o.quotes.USD.percent_change_30m),children:[null===o||void 0===o?void 0:o.quotes.USD.percent_change_30m," %"]})})]}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(T,{children:" Change rate (last 1 hours):"}),Object(L.jsx)(B,{children:Object(L.jsxs)(A,{isPositive:!0===H(null===o||void 0===o?void 0:o.quotes.USD.percent_change_1h),children:[null===o||void 0===o?void 0:o.quotes.USD.percent_change_1h," %"]})})]}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(T,{children:" Change rate (last 12 hours):"}),Object(L.jsx)(B,{children:Object(L.jsxs)(A,{isPositive:!0===H(null===o||void 0===o?void 0:o.quotes.USD.percent_change_12h),children:[null===o||void 0===o?void 0:o.quotes.USD.percent_change_12h," %"]})})]}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(T,{children:" Change rate (last 24 hours):"}),Object(L.jsx)(B,{children:Object(L.jsxs)(A,{isPositive:!0===H(null===o||void 0===o?void 0:o.quotes.USD.percent_change_24h),children:[null===o||void 0===o?void 0:o.quotes.USD.percent_change_24h," %"]})})]})]})})},hn=t(37),bn=s.c.h1($||($=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),jn=s.c.span(E||(E=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),un=s.c.div(J||(J=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),pn=s.c.header(R||(R=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),xn=s.c.div(Y||(Y=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),On=s.c.div(G||(G=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),fn=s.c.p(K||(K=Object(a.a)(["\n  margin: 20px 0px;\n"]))),gn=s.c.div(N||(N=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),mn=s.c.span(V||(V=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),vn=s.c.button(W||(W=Object(a.a)(["\n  margin-left: 390px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  background-color: #7f8c8d;\n  color: white;\n"]))),yn=function(n){var e,t,c;Object(l.a)(n);var i=Object(h.g)().coinId,r=Object(h.f)().state,o=Object(h.h)("/:coinId/price"),a=Object(h.h)("/:coinId/chart"),s=Object(b.useQuery)(["info",i],(function(){return function(n){return g.apply(this,arguments)}(i)})),j=s.isLoading,u=s.data,p=Object(b.useQuery)(["tickers",i],(function(){return function(n){return m.apply(this,arguments)}(i)}),{refetchInterval:5e3}),x=p.isLoading,O=p.data,f=j||x;return Object(L.jsxs)(un,{children:[Object(L.jsx)(hn.a,{children:Object(L.jsx)("title",{children:(null===r||void 0===r?void 0:r.name)?r.name:f?"Loading...":null===u||void 0===u?void 0:u.name})}),Object(L.jsx)(pn,{children:Object(L.jsx)(bn,{children:(null===r||void 0===r?void 0:r.name)?r.name:f?"Loading...":null===u||void 0===u?void 0:u.name})}),f?Object(L.jsx)(jn,{children:"Loading..."}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(d.b,{to:"/",children:Object(L.jsx)(vn,{children:"Home"})}),Object(L.jsxs)(xn,{children:[Object(L.jsxs)(On,{children:[Object(L.jsx)("span",{children:"Rank:"}),Object(L.jsx)("span",{children:null===u||void 0===u?void 0:u.rank})]}),Object(L.jsxs)(On,{children:[Object(L.jsx)("span",{children:"Symbol:"}),Object(L.jsx)("span",{children:null===u||void 0===u?void 0:u.symbol})]}),Object(L.jsxs)(On,{children:[Object(L.jsx)("span",{children:"Price:"}),Object(L.jsxs)("span",{children:["$",null===O||void 0===O||null===(e=O.quotes)||void 0===e||null===(t=e.USD)||void 0===t||null===(c=t.price)||void 0===c?void 0:c.toFixed(3)]})]})]}),Object(L.jsx)(fn,{children:null===u||void 0===u?void 0:u.description}),Object(L.jsxs)(xn,{children:[Object(L.jsxs)(On,{children:[Object(L.jsx)("span",{children:"Total Suply:"}),Object(L.jsx)("span",{children:null===O||void 0===O?void 0:O.total_supply})]}),Object(L.jsxs)(On,{children:[Object(L.jsx)("span",{children:"Max Supply:"}),Object(L.jsx)("span",{children:null===O||void 0===O?void 0:O.max_supply})]})]}),Object(L.jsxs)(gn,{children:[Object(L.jsx)(mn,{isActive:null!==a,children:Object(L.jsx)(d.b,{to:"/".concat(i,"/chart"),children:"Chart"})}),Object(L.jsx)(mn,{isActive:null!==o,children:Object(L.jsx)(d.b,{to:"/".concat(i,"/price"),children:"Price"})})]}),Object(L.jsxs)(h.c,{children:[Object(L.jsx)(h.a,{path:"/:coinId/price",children:Object(L.jsx)(dn,{coinId:i,tickersData:O})}),Object(L.jsx)(h.a,{path:"/:coinId/chart",children:Object(L.jsx)(U,{coinId:i})})]})]})]})},kn=s.c.div(X||(X=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),wn=s.c.header(Z||(Z=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Cn=s.c.ul(nn||(nn=Object(a.a)([""]))),_n=s.c.li(en||(en=Object(a.a)(["\n  background-color: white;\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  border: 1px solid white;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),Sn=s.c.h1(tn||(tn=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),qn=s.c.span(cn||(cn=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),Dn=s.c.img(rn||(rn=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),Pn=(s.c.button(on||(on=Object(a.a)([""]))),s.c.div(an||(an=Object(a.a)(["\n  position: relative;\n  margin-left: 60px;\n"])))),In=s.c.label(sn||(sn=Object(a.a)(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 42px;\n  height: 26px;\n  border-radius: 15px;\n  background: #bebebe;\n  cursor: pointer;\n  &::after {\n    content: "";\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: #ffffff;\n    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n    transition: 0.2s;\n  }\n']))),Ln=s.c.input(ln||(ln=Object(a.a)(["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 20px;\n  height: 15px;\n  &:checked + ",' {\n    background: #a29bfe;\n    &::after {\n      content: "";\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n'])),In);var Un,zn=function(){var n=Object(b.useQuery)("allCoins",O),e=n.isLoading,t=n.data,c=Object(P.d)(I);return Object(L.jsxs)(kn,{children:[Object(L.jsx)(hn.a,{children:Object(L.jsx)("title",{children:"Coin (Top100)"})}),Object(L.jsxs)(wn,{children:[Object(L.jsx)(Sn,{children:"Coin (Top100)"}),Object(L.jsxs)(Pn,{children:[Object(L.jsx)(Ln,{id:"checkbox",type:"checkbox",onClick:function(){return c((function(n){return!n}))}}),Object(L.jsx)(In,{htmlFor:"checkbox"})]})]}),e?Object(L.jsx)(qn,{children:"Loading..."}):Object(L.jsx)(Cn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(L.jsx)(_n,{children:Object(L.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name,rank:n.rank}},children:[Object(L.jsx)(Dn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},Fn=function(n){return Object(l.a)(n),Object(L.jsx)(d.a,{children:Object(L.jsxs)(h.c,{children:[Object(L.jsx)(h.a,{path:"/:coinId",children:Object(L.jsx)(yn,{})}),Object(L.jsx)(h.a,{path:"/",children:Object(L.jsx)(zn,{})})]})})},Mn=t(58),Qn={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},Tn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},Bn=Object(s.b)(Un||(Un=Object(a.a)(["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  font-weight: 300;\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var An=function(){var n=Object(P.c)(I);return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(s.a,{theme:n?Qn:Tn,children:[Object(L.jsx)(Bn,{}),Object(L.jsx)(Fn,{}),Object(L.jsx)(Mn.ReactQueryDevtools,{initialIsOpen:!1})]})})},Hn=new b.QueryClient;o.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(P.a,{children:Object(L.jsx)(b.QueryClientProvider,{client:Hn,children:Object(L.jsx)(An,{})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.2f3858e2.chunk.js.map