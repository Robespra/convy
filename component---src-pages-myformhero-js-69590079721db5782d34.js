(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{rqyz:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a("q1tI"),s=a.n(n);var r=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.render=function(){var e=this.state.status;return s.a.createElement("div",{className:"card-section"},s.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mnbbobvm",method:"POST"},s.a.createElement("label",{htmlFor:"TestMySite_Name"},"Website or App url"),s.a.createElement("input",{type:"text",className:"login-box-input",name:"TestMySite_Domain",id:"userName",required:!0,"data-error":"NEW ERROR MESSAGE",placeholder:"domain.com"}),s.a.createElement("label",{htmlFor:"userEmail"},"Email"),s.a.createElement("input",{type:"email",className:"login-box-input",name:"TestMySite_Email",id:"userEmail",required:!0,"data-error":"NEW ERROR MESSAGE",placeholder:"name@email.com"}),s.a.createElement("div",{className:"padding5_top"},"SUCCESS"===e?s.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Form Successfully Submitted. Thank you!"}):s.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Test my site"}),"ERROR"===e&&s.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Ooops! There was an error."}))))},r.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),s=new XMLHttpRequest;s.open(a.method,a.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},s.send(n)},n}(s.a.Component)}}]);
//# sourceMappingURL=component---src-pages-myformhero-js-69590079721db5782d34.js.map