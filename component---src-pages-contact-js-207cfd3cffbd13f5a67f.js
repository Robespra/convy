(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+qB+":function(e,t,a){"use strict";a("YbXK"),a("cFtU"),a("rzGZ"),a("Dq+y"),a("8npG"),a("q1tI");"undefined"!=typeof window&&(window.onload=function(){var e=document.getElementById("send-button"),t=function(e){var t=e.entries(),a=Array.from(t).reduce((function(e,t){var a=t[0],n=t[1];return e[a]=n,"email"===a&&(e._replyTo=n),e}),{});return JSON.stringify(a)},a=document.getElementById("contactForm");a&&a.addEventListener("submit",(function(a){var n=this;a.preventDefault(),e.value="Sending...",function(e){return fetch("https://formspree.io/mnbblykm",{method:"POST",body:t(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(new FormData(this)).then((function(t){e.value="Thank you!",n.reset()}))}))})},BAUC:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNTAuNSAzNi42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNTAuNSAzNi42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZEQTA4NTt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjUsMzYuMkgwVjAuOGgxMy44YzIuNCwwLDQuNSwwLjMsNi4yLDAuOFMyMy4xLDMsMjMuOSw0YzEuNSwxLjgsMi40LDMuOSwyLjQsNi4yYzAsMi44LTAuOCw0LjgtMi43LDYuMgoJCWMtMC42LDAuNC0xLDAuNy0xLjMsMC44cy0wLjcsMC4zLTEuMywwLjZjMi4zLDAuNCwzLjksMS40LDUuMiwzYzEuMywxLjUsMiwzLjQsMiw1LjZjMCwyLjUtMC44LDQuNi0yLjUsNi41CgkJQzIzLjgsMzUuMSwyMC40LDM2LjIsMTUuNSwzNi4yeiBNNy45LDE1LjFoMy44YzIuMywwLDMuOC0wLjMsNC45LTAuN2MxLjEtMC40LDEuNS0xLjUsMS41LTMuMXMtMC40LTIuNy0xLjQtMy4xCgkJYy0xLTAuNi0yLjctMC43LTQuOS0wLjdIOEw3LjksMTUuMUw3LjksMTUuMXogTTcuOSwyOS40aDUuNWMyLjMsMCwzLjktMC4zLDUuMS0wLjhjMS4xLTAuNiwxLjctMS43LDEuNy0zLjJjMC0xLjctMC42LTIuNy0xLjgtMy4yCgkJYy0xLjMtMC42LTMuMS0wLjgtNS44LTAuOEg4TDcuOSwyOS40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0LjksMC44aDcuOXYzNS40aC03LjlWMC44eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU5LjgsNy45Yy0wLjcsMC42LTEuMSwxLjQtMS4xLDIuNXMwLjQsMS44LDEuNCwyLjRzMy4xLDEuMyw2LjUsMi4xYzMuNCwwLjgsNS45LDIuMSw3LjksMy43CgkJYzEuOCwxLjcsMi44LDQuMSwyLjgsNy4yYzAsMy4yLTEuMSw1LjgtMy41LDcuN2MtMi40LDItNS41LDMtOS40LDNjLTUuNiwwLTEwLjctMi4xLTE1LjItNi4ybDQuNi01LjhjMy44LDMuNCw3LjMsNS4xLDEwLjUsNS4xCgkJYzEuNCwwLDIuNS0wLjMsMy40LTFjMC44LTAuNiwxLjMtMS40LDEuMy0yLjVzLTAuNC0yLTEuMy0yLjVjLTAuOC0wLjYtMi43LTEuMy01LjItMS44Yy00LjEtMS03LjItMi4zLTktMy44CgkJYy0yLTEuNS0yLjgtNC4xLTIuOC03LjVzMS4zLTUuOSwzLjctNy43YzIuNC0xLjgsNS41LTIuNyw5LTIuN2MyLjQsMCw0LjgsMC40LDcsMS4zYzIuNCwwLjgsNC40LDIsNi4yLDMuNGwtMy45LDUuOAoJCWMtMy4xLTIuNC02LjItMy41LTkuNi0zLjVDNjEuNiw2LjksNjAuNiw3LjIsNTkuOCw3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAwLjEsMjkuMmMzLjksMCw3LTEuNSw5LjYtNC42bDUuMSw1LjJjLTQuMSw0LjUtOC43LDYuOC0xNC4yLDYuOHMtMTAtMS43LTEzLjUtNS4yCgkJYy0zLjUtMy40LTUuMy03LjctNS4zLTEzLjFjMC01LjIsMS44LTkuNiw1LjMtMTMuMXM4LTUuMiwxMy4yLTUuMmM1LjgsMCwxMC43LDIuMywxNC42LDYuNmwtNC45LDUuNmMtMi41LTMuMS01LjYtNC42LTkuMy00LjYKCQljLTMsMC01LjUsMS03LjYsM1M5MCwxNS4xLDkwLDE4LjVjMCwzLjQsMSw1LjksMyw3LjlDOTQuOSwyOC4yLDk3LjMsMjkuMiwxMDAuMSwyOS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0NS44LDM2LjJsLTMuMi03LjZoLTE0LjhsLTMuMiw3LjZoLTguNGwxNS4zLTM1LjRoNy42bDE1LjIsMzUuNEgxNDUuOHogTTEzNS4xLDExLjNsLTQuNSwxMC4zaDguOQoJCUwxMzUuMSwxMS4zeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3MS4xLDM2LjJoLTcuOVYyMi4zTDE1MC44LDAuOGg4LjZMMTY3LDE0bDcuNi0xMy4yaDguNkwxNzEsMjIuMkwxNzEuMSwzNi4yTDE3MS4xLDM2LjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjI0LjksNGMyLjUsMi4xLDMuNyw1LjMsMy43LDkuN3MtMS4zLDcuNi0zLjgsOS42cy02LjUsMy4xLTExLjcsMy4xaC00LjZ2OS44aC03LjlWMC44aDEyLjUKCQlDMjE4LjQsMC44LDIyMi41LDEuOSwyMjQuOSw0eiBNMjE5LjEsMTcuOWMxLTEuMSwxLjQtMi43LDEuNC00LjZjMC0yLTAuNi0zLjUtMS44LTQuNHMtMy4xLTEuMy01LjgtMS4zaC00LjV2MTJoNS4zCgkJQzIxNi40LDE5LjUsMjE4LjEsMTguOSwyMTkuMSwxNy45eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNC44LDM2LjJWMC44aDcuOXYyOC40aDE1djdIMjM0Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg4LjcsMzYuMmwtMy4yLTcuNmgtMTQuOGwtMy4yLDcuNmgtOC40bDE1LjMtMzUuNGg3LjZsMTUuMiwzNS40SDI4OC43eiBNMjc4LDExLjNsLTQuNSwxMC4zaDguOUwyNzgsMTEuM3oiCgkJLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMDEuMiwwLjhoNy45djM1LjRoLTcuOVYwLjh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQyLjYsMC44aDcuOXYzNS40aC03LjlMMzI1LjcsMTR2MjIuMmgtNy45VjAuOGg3LjVsMTcuMywyMi44VjAuOHoiLz4KPC9nPgo8L3N2Zz4K"},"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),u=a.n(n),s=a("FWHX"),M=a.n(s),L=a("LbRr"),i=a("W/9C");var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.render=function(){var e=this.state.status;return u.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xgelbkrn",method:"POST",id:"ContactText"},u.a.createElement("div",{className:"row align-center padding10_bottom"},u.a.createElement("div",{className:"small-11"},u.a.createElement("label",null,"Email:",u.a.createElement("input",{type:"email",name:"email"}))),u.a.createElement("div",{className:"small-11"},u.a.createElement("label",null,"Message:",u.a.createElement("input",{type:"text",name:"message"}))),u.a.createElement("div",{className:"small-11"},"SUCCESS"===e?u.a.createElement("p",null,"Thanks!"):u.a.createElement("button",null,"Submit"),"ERROR"===e&&u.a.createElement("p",null,"Ooops! There was an error."))))},s.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),u=new XMLHttpRequest;u.open(a.method,a.action),u.setRequestHeader("Accept","application/json"),u.onreadystatechange=function(){u.readyState===XMLHttpRequest.DONE&&(200===u.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},u.send(n)},n}(u.a.Component);t.default=function(){return u.a.createElement(M.a,null,u.a.createElement(L.a,null),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row align-center padding10_bottom"},u.a.createElement("div",{className:"small-12 medium-8 columns"},u.a.createElement("h1",null,"Contact & article submission"),u.a.createElement(l,null),"/>")),u.a.createElement(i.a,null)))}},LbRr:function(e,t,a){"use strict";var n=a("q1tI"),u=a.n(n),s=a("Wbzz"),M=a("WXbE"),L=a.n(M);t.a=function(){return u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"small-12"},u.a.createElement(s.a,{to:"/"},u.a.createElement("img",{className:"logo_bp",src:a("BAUC"),alt:"biscay plain logo"}))),u.a.createElement("img",{src:L.a,className:"topo_img",alt:"topo"}))}},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),u=a.n(n),s=a("Wbzz");a("nEz2");t.a=function(){return u.a.createElement("footer",null,u.a.createElement("div",{className:"row align-left mtxl mbl"},u.a.createElement("div",{className:"small-11 column"},u.a.createElement(s.a,{to:"/"},u.a.createElement("img",{src:a("BAUC"),alt:"biscay plain logo"}))),u.a.createElement("div",{className:"small-11 column ptm"},u.a.createElement("h2",null,"Monthly picks for people interested in creativity"))),u.a.createElement("div",{className:"row align-center mbl"},u.a.createElement("div",{className:"column small-3"},u.a.createElement("small",null,u.a.createElement(s.a,{className:"menu__item",to:"/contact/"},u.a.createElement("span",{className:"menu__item-name text-align-center"},"Get in touch")))),u.a.createElement("div",{className:"column small-3"},u.a.createElement("small",null,u.a.createElement(s.a,{className:"menu__item",to:"/contact/"},u.a.createElement("span",{className:"menu__item-name text-align-center"},"Suggest your article")))),u.a.createElement("div",{className:"column small-3"},u.a.createElement("small",null,u.a.createElement(s.a,{className:"menu__item",to:"/legal/"},u.a.createElement("span",{className:"menu__item-name text-align-center"},"Privacy policy"))))))}},WXbE:function(e,t,a){e.exports=a.p+"static/animated_topography-66297f627ef2ede75af6e087d63d2824.svg"},Wbzz:function(e,t,a){"use strict";var n=a("q1tI"),u=a.n(n),s=a("+ZDr"),M=a.n(s);a.d(t,"a",(function(){return M.a}));a("lw3w"),a("emEt").default.enqueue,u.a.createContext({})},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},nEz2:function(e,t,a){"use strict";var n=a("q1tI"),u=a.n(n),s=a("Wbzz");a("+qB+");t.a=function(){return u.a.createElement("form",{action:"https://formspree.io/mnbblykm",name:"contactForm",id:"contactForm",method:"post",className:" row topBefore padding5_top"},u.a.createElement("div",{className:"small-7 medium-5 columns textfield_submit"},u.a.createElement("input",{id:"email",className:"unsent",type:"email",name:"Email",placeholder:"Enter your e-mail address...",required:!0})),u.a.createElement("div",{className:"small-5 medium-3 columns btn_submit"},u.a.createElement("input",{id:"send-button",className:"submitBtn",type:"submit",value:"Subscribe"})),u.a.createElement("div",{className:"small-12 columns no-spam"},u.a.createElement("small",null,"No spam, no fuss. Unsubscribe anytime. ",u.a.createElement(s.a,{to:"/legal/"},"Privacy policy"))))}},rzlk:function(e,t,a){"use strict";a.r(t);a("E5k/");var n=a("q1tI"),u=a.n(n),s=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?u.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-contact-js-207cfd3cffbd13f5a67f.js.map