(this["webpackJsonphw18-react.styled"]=this["webpackJsonphw18-react.styled"]||[]).push([[0],{15:function(e,t,a){e.exports={wrapper:"SignUp_wrapper__7NZEm",sign_up_btn:"SignUp_sign_up_btn__cAo3f",link_row:"SignUp_link_row__1LiSD",name_row:"SignUp_name_row__VtC1V",logo:"SignUp_logo__3t2LS"}},17:function(e,t,a){e.exports={wrapper:"SignIn_wrapper__2Tmot",sign_in_btn:"SignIn_sign_in_btn__3Ap_8",link_row:"SignIn_link_row__19fHH",logo:"SignIn_logo__1Dpd7"}},24:function(e,t,a){e.exports=a.p+"static/media/padlock.d964e0b3.svg"},29:function(e,t,a){e.exports=a(42)},34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=(a(34),a(18)),l=a(2),u=(a(35),a(55)),s=function(e){var t=localStorage.getItem("token");return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,e,r.a.createElement("h3",null,"Hello, ",t,"!"),r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){localStorage.removeItem("token"),window.location.assign("../signin")}},"SIGN OUT"))):r.a.createElement(l.a,{to:"../signin"})},m=a(4),d=a(17),f=a.n(d),g=a(8),p=a(9),b=a(24),v=a.n(b);function h(){var e=Object(g.a)(['\n    background-color: #f48fb2;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-image: url("','");\n    background-size: 50% 50%;\n    background-repeat: no-repeat;\n    background-position: center;\n']);return h=function(){return e},e}var E=p.a.div(h(),v.a);function S(){var e=Object(g.a)(["\n    color: #fff;\n    margin-right: auto;\n    cursor: pointer;\n"]);return S=function(){return e},e}var w=p.a.label(S());function O(){var e=Object(g.a)(["\n    color: #fff;\n    font-size: 20px;\n"]);return O=function(){return e},e}var _=p.a.h2(O());function j(){var e=Object(g.a)(["\n    width: ",";\n    height: 40px;\n    border: ",';\n    border-radius: 3px;\n    background-color: #000;\n    padding: 5px 10px;\n    color: #fff;\n    &:placeholder {\n        content: "','";\n        color: #fff;\n    }\n']);return j=function(){return e},e}var k=p.a.input(j(),(function(e){return e.halfWidth?"calc(50% - 10px)":"100%"}),(function(e){return"default"===e.validation?(console.log(e.validation),"1px solid #404040"):"valid"===e.validation?(console.log(e.validation),"4px solid green"):"invalid"===e.validation?(console.log(e.validation),"4px solid red"):void 0}),(function(e){return e.placeholder}));function N(){var e=Object(g.a)(["\n    color: #6d98b9;\n    font-size: 12px;\n    cursor: pointer;\n"]);return N=function(){return e},e}var x=p.a.a(N());function I(){var e=Object(g.a)(["\n    color: #fff;\n    font-size: 12px;\n"]);return I=function(){return e},e}var y=p.a.div(I()),C=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),l=i[0],s=i[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),p=g[0],b=g[1],v=Object(n.useState)(""),h=Object(m.a)(v,2),S=h[0],O=h[1],j=Object(n.useState)(""),N=Object(m.a)(j,2),I=N[0],C=N[1],A=Object(n.useState)("default"),z=Object(m.a)(A,2),U=z[0],W=z[1],J=Object(n.useState)("default"),Z=Object(m.a)(J,2),F=Z[0],M=Z[1],R=[],D=JSON.parse(localStorage.getItem("isRemember")),G=/\S{2,}@{1}\S{2,}.\S{2,}/i,H=/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;Object(n.useEffect)((function(){D&&(console.log(D),b(D.email),C(D.password))}),[D]),Object(n.useEffect)((function(){s(p)}),[p]),Object(n.useEffect)((function(){O(I)}),[I]),Object(n.useEffect)((function(){l.match(G)?W("valid"):W(""===l?"default":"invalid")}),[l]),Object(n.useEffect)((function(){S.match(H)?M("valid"):M(""===S?"default":"invalid")}),[S]);return r.a.createElement("div",{className:f.a.wrapper},r.a.createElement("div",{className:f.a.logo},r.a.createElement(E,null),r.a.createElement(_,null,"Sign in")),r.a.createElement(k,{placeholder:"Email Address *",validation:U,onChange:function(e){return s(e.target.value)},value:l}),r.a.createElement(k,{placeholder:"Password *",type:"password",validation:F,onChange:function(e){return O(e.target.value)},value:S}),r.a.createElement(w,{htmlFor:"rememberMe"},r.a.createElement("input",{type:"checkbox",name:"rememberMe",id:"rememberMe",onChange:function(e){return o(e.target.checked)}}),"Remember me"),r.a.createElement(u.a,{variant:"contained",color:"primary",className:f.a.sign_in_btn,onClick:function(){localStorage.removeItem("isRemember"),function(){for(var e=localStorage.getItem("currentId"),t=0;t<=e;t++){var a=localStorage.getItem(t);R.push(JSON.parse(a))}}(),R.some((function(e){return e.email===l}))?R.forEach((function(e){if(e.email===l)if(e.password===S){var t={firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password},n=JSON.stringify(t);localStorage.setItem("token",e.firstName),window.location.assign("../main"),a&&localStorage.setItem("isRemember",n)}else alert("Wrong password")})):alert("User not find!")}},"SIGN IN"),r.a.createElement("div",{className:f.a.link_row},r.a.createElement(x,{href:"../forgot"},"Forgot password?"),r.a.createElement(x,{href:"../signup"},"Dont have an account? Sign Up")),r.a.createElement(y,null,"Copyright \xa9 Your Website 2020"))},A=a(15),z=a.n(A),U=0,W=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),l=i[0],s=i[1],d=Object(n.useState)(""),f=Object(m.a)(d,2),g=f[0],p=f[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),h=v[0],S=v[1],O=Object(n.useState)(!1),j=Object(m.a)(O,2),N=j[0],I=j[1],C=Object(n.useState)("default"),A=Object(m.a)(C,2),W=A[0],J=A[1],Z=Object(n.useState)("default"),F=Object(m.a)(Z,2),M=F[0],R=F[1],D=Object(n.useState)("default"),G=Object(m.a)(D,2),H=G[0],L=G[1],P=Object(n.useState)("default"),B=Object(m.a)(P,2),T=B[0],V=B[1],Y={firstName:a,lastName:l,email:g,password:h,newsletter:N},$=/\S{2,}@{1}\S{2,}.\S{2,}/i,q=/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/,K=/[a-zA-Z]{3,}/i,Q=function(){o(""),s(""),p(""),S(""),I(!1)};return Object(n.useEffect)((function(){g.match($)?J("valid"):J(""===g?"default":"invalid")}),[g]),Object(n.useEffect)((function(){h.match(q)?R("valid"):R(""===h?"default":"invalid")}),[h]),Object(n.useEffect)((function(){a.match(K)?L("valid"):L(""===a?"default":"invalid")}),[a]),Object(n.useEffect)((function(){l.match(K)?V("valid"):V(""===l?"default":"invalid")}),[l]),r.a.createElement("div",{className:z.a.wrapper},r.a.createElement("div",{className:z.a.logo},r.a.createElement(E,null),r.a.createElement(_,null,"Sign up")),r.a.createElement("div",{className:z.a.name_row},r.a.createElement(k,{placeholder:"First name *",halfWidth:!0,value:a,validation:H,onChange:function(e){return o(e.target.value)}}),r.a.createElement(k,{placeholder:"Last name *",halfWidth:!0,value:l,validation:T,onChange:function(e){return s(e.target.value)}})),r.a.createElement(k,{placeholder:"Email Address *",value:g,validation:W,onChange:function(e){return p(e.target.value)}}),r.a.createElement(k,{placeholder:"Password *",type:"password",value:h,validation:M,onChange:function(e){return S(e.target.value)}}),r.a.createElement(w,{htmlFor:"newsletter"},r.a.createElement("input",{type:"checkbox",name:"newsletter",id:"newsletter",checked:N,onChange:function(e){return I(e.target.checked)}})," ","I want to receive inspiration, marketing promotions and updates via email"),r.a.createElement(u.a,{variant:"contained",color:"primary",className:z.a.sign_up_btn,onClick:function(){if(a&&l&&g&&h){!function(){var e=localStorage.getItem("currentId");e&&(U=+e+1)}();var e=JSON.stringify(Y);localStorage.setItem("".concat(U),e),localStorage.setItem("currentId",U),U++,Q(),window.location.assign("../signin")}}},"SIGN UP"),r.a.createElement("div",{className:z.a.link_row},r.a.createElement(x,{href:"../signin"},"Already have an account? Sign in")),r.a.createElement(y,null,"Copyright \xa9 Your Website 2020"))},J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/signin"},r.a.createElement(C,null)),r.a.createElement(l.b,{exact:!0,path:"/signup"},r.a.createElement(W,null)),r.a.createElement(l.b,{exact:!0,path:"/forgot"},r.a.createElement("h3",null,"If you forgot your password, please write it next time. Now you must sign up one more time."),r.a.createElement(i.b,{to:"/signup"},"Sign up")),r.a.createElement(s,{exact:!0,path:"/main"}),r.a.createElement(l.b,{path:"/",exact:!0,render:function(){return r.a.createElement(l.a,{to:"/main"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.f4c3027c.chunk.js.map