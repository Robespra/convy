(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rqyz:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),r=a.n(n);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.render=function(){var e=this.state.status;return r.a.createElement("div",{className:"card-section"},r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mnbbobvm",method:"POST"},r.a.createElement("label",{htmlFor:"TestMySite_Name"},"Website or App url"),r.a.createElement("input",{type:"text",className:"login-box-input",name:"TestMySite_Domain",id:"userName",required:!0,"data-error":"NEW ERROR MESSAGE",placeholder:"domain.com"}),r.a.createElement("label",{htmlFor:"userEmail"},"Email"),r.a.createElement("input",{type:"email",className:"login-box-input",name:"TestMySite_Email",id:"userEmail",required:!0,"data-error":"NEW ERROR MESSAGE",placeholder:"name@email.com"}),r.a.createElement("div",{className:"padding5_top"},"SUCCESS"===e?r.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Form submitted. Thank you!"}):r.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Test my site"}),"ERROR"===e&&r.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Ooops! There was an error."}))))},s.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)},n}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-myformhero-js-04117e7dbf1e6d6bc1e3.js.map