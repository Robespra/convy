(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+VNo":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"EU/P":function(e,t,a){var o=a("P8UN"),n=a("ap2Z"),i=a("96qb"),r=a("+VNo"),s="["+r+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(e,t,a){var n={},s=i((function(){return!!r[e]()||"​"!="​"[e]()})),l=n[e]=s?t(m):r[e];a&&(n[a]=l),o(o.P+o.F*s,"String",n)},m=u.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},OmGx:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a("q1tI"),n=a.n(o);var i=function(e){var t,a;function o(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=o.prototype;return i.render=function(){var e=this.state.status;return n.a.createElement("div",{className:"card-section"},n.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mnbbobvm",method:"POST"},n.a.createElement("label",{htmlFor:"TestMySite_Name"},"Website or App url"),n.a.createElement("input",{type:"text",className:"login-box-input",name:"TestMySite_Domain",id:"userName",required:!0,"data-error":"NEW ERROR MESSAGE",placeholder:"domain.com"}),n.a.createElement("label",{htmlFor:"userEmail"},"Email"),n.a.createElement("input",{type:"email",className:"login-box-input",name:"TestMySite_Email",id:"userEmail",required:!0,"data-error":"NEW ERROR MESSAGE",placeholder:"name@email.com"}),n.a.createElement("div",{className:"padding5_top"},"SUCCESS"===e?n.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Form Successfully Submitted. Thank you!"}):n.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Test my site"}),"ERROR"===e&&n.a.createElement("input",{className:"button",type:"submit",id:"send_message",name:"submit",value:"Ooops! There was an error."}))))},i.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,o=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},n.send(o)},o}(n.a.Component)},"W/9C":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o);a("Wbzz");t.a=function(){return n.a.createElement("footer",{className:"marketing-site-footer"},n.a.createElement("div",{className:"row expanded medium-unstack"},n.a.createElement("div",{className:"medium-4 column"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"small-12"},n.a.createElement("a",{href:"https://www.convy.io",className:"marketing-site-footer-name"},"convy"),n.a.createElement("p",null,"hello@convy.io"),n.a.createElement("p",null,"We help digital companies increase their revenue. We are a distributed team in Europe (and the UK!). Company registered in Paris, France."),n.a.createElement("ul",{className:"menu marketing-site-footer-menu-social simple"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-youtube-square","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-twitter-square","aria-hidden":"true"}))))))),n.a.createElement("div",{className:"medium-8"},n.a.createElement("div",{className:"row padding10_top"},n.a.createElement("div",{className:"small-12"},n.a.createElement("ul",{className:"menu marketing-site-footer-bottom-links"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://convy.io/read"},"Optimization Tips")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://convy.io/privacy"},"Privacy")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://convy.io/terms"},"Terms of service")),n.a.createElement("li",null,n.a.createElement("a",{href:"#convy_contact"},"Contact")))),n.a.createElement("div",{className:"columns small-12"},n.a.createElement("small",null,"©2021 convy. convy®, the convy logo, and the names and marks associated with convy are trademarks of convy and/or its affiliates."))))))}},Wbzz:function(e,t,a){"use strict";a("YBKJ");var o=a("q1tI"),n=a.n(o),i=a("+ZDr"),r=a.n(i);a.d(t,"a",(function(){return r.a}));a("lw3w"),a("emEt").default.enqueue,n.a.createContext({})},YBKJ:function(e,t,a){"use strict";var o=a("emib"),n=a("qDzq"),i=a("CCE/"),r=a("TUPI"),s=a("kxs/"),l=a("96qb"),c=a("chL8").f,u=a("Drra").f,m=a("rjfK").f,d=a("EU/P").trim,h=o.Number,y=h,p=h.prototype,w="Number"==i(a("nsRs")(p)),f="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,o,n,i=(t=f?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+t}for(var r,l=t.slice(2),c=0,u=l.length;c<u;c++)if((r=l.charCodeAt(c))<48||r>n)return NaN;return parseInt(l,o)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(w?l((function(){p.valueOf.call(a)})):"Number"!=i(a))?r(new y(g(t)),a,h):g(t)};for(var v,E=a("QPJK")?c(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;E.length>b;b++)n(y,v=E[b])&&!n(h,v)&&m(h,v,u(y,v));h.prototype=p,p.constructor=h,a("IYdN")(o,"Number",h)}},eWj4:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjE4LjggNTQuNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjE4LjggNTQuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzNjQ3NkM7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjAuOCwzMC40YzMuNiwwLDYuOC0xLjgsOS43LTUuNGw2LjQsNy4yYy01LDUuMi0xMC40LDcuOC0xNi4yLDcuOFMxMCwzOC4xLDYsMzQuNUMyLDMwLjgsMCwyNiwwLDIwLjEKCWMwLTYsMi0xMC44LDYuMS0xNC41QzEwLjEsMS45LDE1LDAsMjAuNSwwYzIuOCwwLDUuNiwwLjYsOC41LDEuN2MyLjksMS4yLDUuNCwyLjksNy41LDUuMWwtNS42LDcuM2MtMS4yLTEuNS0yLjgtMi42LTQuNi0zLjUKCWMtMS44LTAuOC0zLjYtMS4yLTUuNC0xLjJjLTIuOCwwLTUuMywwLjktNy4zLDIuOGMtMiwxLjgtMy4xLDQuNC0zLjEsNy43czEsNS44LDMuMSw3LjdDMTUuNywyOS41LDE4LjEsMzAuNCwyMC44LDMwLjR6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Mi4yLDIwYzAsNS42LTEuOSwxMC4zLTUuOCwxNC4yQzcyLjUsMzgsNjcuNiw0MCw2MS43LDQwYy01LjgsMC0xMC43LTItMTQuNi01LjhzLTUuOC04LjYtNS44LTE0LjIKCXMxLjktMTAuNCw1LjgtMTQuMkM1MSwxLjksNTUuOSwwLDYxLjcsMGM1LjksMCwxMC44LDEuOSwxNC43LDUuOFM4Mi4yLDE0LjQsODIuMiwyMHogTTUyLjEsMjBjMCwzLjIsMC45LDUuNywyLjcsNy43czQuMSwzLDYuOSwzCgljMi44LDAsNS4xLTEsNi45LTNjMS44LTIsMi43LTQuNiwyLjctNy43cy0wLjktNS44LTIuNy03LjhjLTEuOC0yLTQuMS0zLTYuOS0zYy0yLjgsMC01LjEsMS02LjksM0M1MywxNC4zLDUyLjEsMTYuOCw1Mi4xLDIweiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAxLDE3Ljh2MjEuNkg5MC4yVjAuNkgxMDFWNWMzLjMtMy4zLDYuOS01LDExLTVzNy41LDEuNCwxMC4zLDQuM3M0LjEsNi43LDQuMSwxMS41djIzLjVoLTEwLjhWMTcuNQoJYzAtNi0yLjItOC45LTYuNi04LjljLTIuMiwwLTQsMC44LTUuNywyLjNDMTAxLjgsMTIuNSwxMDEsMTQuOCwxMDEsMTcuOHoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0NiwzOS40TDEzMC43LDAuNmgxMS4ybDkuNiwyNC40bDkuNi0yNC40aDExLjJMMTU3LDM5LjRIMTQ2eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg4LjUsNTQuNmMtMy44LDAtNy40LTEuNS0xMC43LTQuNmw0LjktOGMxLjgsMS44LDMuNywyLjcsNS42LDIuN2MxLDAsMS45LTAuNSwyLjYtMS41YzAuNy0xLDEuMS0yLDEuMS0zLjEKCXMtNS0xNC4zLTE1LTM5LjVoMTEuNWw5LjQsMjQuMWw5LjQtMjQuMWgxMS41bC0xOCw0NS42Yy0xLjEsMi42LTIuNyw0LjctNC45LDYuMkMxOTMuNyw1My45LDE5MS4yLDU0LjYsMTg4LjUsNTQuNnoiLz4KPC9zdmc+Cg=="},lw3w:function(e,t,a){var o;e.exports=(o=a("rzlk"))&&o.default||o},qTMf:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),i=(a("Wbzz"),a("W/9C"));a("8p0J"),a("OmGx");t.default=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"row expanded convy_hero_inner"},n.a.createElement("div",{className:"small-3 columns"},n.a.createElement("div",{className:"top-bar-title"},n.a.createElement("a",{href:"http://www.convy.io",onclick:"track('Click-logo-top','Click-logo-top')",rel:"canonical"},n.a.createElement("img",{className:"convy_logo_app",src:a("eWj4")})))),n.a.createElement("div",{className:"small-9 columns"},n.a.createElement("div",{id:"topbar-responsive",className:"topbar-responsive-links"},n.a.createElement("div",{className:"top-bar-right"},n.a.createElement("ul",{className:"menu_items"},n.a.createElement("li",null,n.a.createElement("a",{href:"howconvyworks",onclick:"track('Click-logo-top-hdiw','Click-logo-top-hdiw')",rel:"canonical"},"How does it work?")),n.a.createElement("li",null,n.a.createElement("a",{href:"#convy_pricing",onclick:"track('Click-logo-top-pricing','Click-logo-top-pricing')",rel:"canonical"},"Pricing")),n.a.createElement("li",null,n.a.createElement("a",{href:"read",onclick:"track('Click-logo-top-blog','Click-logo-top-blog')",rel:"canonical"},"Resources")),n.a.createElement("li",null,n.a.createElement("a",{href:"#convy_contact",onclick:"track('Click-logo-top-contact','Click-logo-top-contact')",rel:"canonical"},"Contact"))))))),n.a.createElement("div",{className:"row align-center padding10_bottom",id:"content"},n.a.createElement("div",{className:"small-11 medium-8"},n.a.createElement("h1",{className:"padding10_top padding5_bottom"},"Our Metholodgie"),n.a.createElement("h4",{className:""},"Last update: Jul 25, 2020."),n.a.createElement("p",null,"convy.io/uxpages takes the security of its systems and the protection of clients information seriously. convy.io/uxpages (“we”, “us” or “convy.io/uxpages”) is registered to collect and process personal data under the Commission Nationale de l’Informatique et des Libertés (CNIL, France). convy.io/uxpages is the data controller of personal information collected by us. We respect and safeguard the privacy of the clients we are contractually working with, the users of convy.io (“website”), convy.io/uxpages App and readers of our blog which include convy.io/read."),n.a.createElement("p",null,"This Privacy Policy outlines how we will collect and use your personal information (such as your name, your email address or other contact details and any financial payment information), business information (analytics data, testing results) how you can limit our use of this data and how we will safeguard your data. Please read this Privacy Policy carefully which should be read together with our website Terms and conditions."),n.a.createElement("h3",null,"1. What information do we gather?"),n.a.createElement("p",null,"1.1 We gather information that relates to, and can identify you (e.g. your name and address) and information that does not identify you (e.g. a visitor’s behaviour patterns when they visit our website)."),n.a.createElement("p",null,"We collect information that does not identify you to in order to evaluate our site performance/usability and ensure that our site and services run properly."),n.a.createElement("p",null,"We might also collect IP addresses through the placement of cookies which means your numerical address is automatically collected when you access the website and is placed in our Internet access logs."),n.a.createElement("p",null,"When working with your company and after signing contracts and non-disclosure documentation, we collect performance analytics of the funnels/sections we agreed to optimize. After running testing and for any iteration, we collect analytics data in order to quantify optimizations."),n.a.createElement("h3",null,"2. How do we gather Information"),n.a.createElement("h4",null,"2.1 Information is gathered in 3 ways:"),n.a.createElement("p",null,"(1) indirectly (for example, through our website’s technology or use of an App); and"),n.a.createElement("p",null,"(2) directly (for example, when you provide information on various pages of the website or when you return any completed form)."),n.a.createElement("p",null,"2.2 We collect information directly from you when you sign up to our services or through the use of cookies. We also collect information when you voluntarily submit it to us."),n.a.createElement("p",null,"2.3 When we collect your information in this way, we will notify you as to how this information will be used and where it will be processed. We will also provide you with the opportunity to indicate your preferences as to the use of your information."),n.a.createElement("p",null,"2.4 The analytics information is collected and stored in our servers. This information is gathered internally with the consultants in charge of the optimization. No information is shared with external third parties."),n.a.createElement("h3",null,"3. Cookies and how we use them"),n.a.createElement("p",null,"3.1 A cookie is a small piece of information sent by a web server to the web browser, which enables the web server to collect information from the browser. Find out more about the use of cookies on http://www.cookiecentral.com."),n.a.createElement("p",null,"3.2 We use the following types of cookie:"),n.a.createElement("p",null,"(1a) Personal Analytics cookies that anonymously remember your computer or mobile device when you visit our website. They keep track of browsing patterns and build up a profile of how our readers use the website. We might use that information to target advertisements to you on our and other websites."),n.a.createElement("p",null,"(1b) Users Analytics cookies. convy.io/uxpages uses cookies to run tests and analyze the customer’s website visitor data. The cookies keep track of the variation a visitor has viewed and serve the same variation to the visitor consistently, track goals completed by a visitor, and determine whether a user is part of a test."),n.a.createElement("p",null,"(2) Service cookies that help us to make our website work as efficiently as possible; remember your registration and login details; remember your settings preferences; and meter the number of pages you view for the purpose of administering subscriptions to Magazines and website."),n.a.createElement("p",null,"(3) Third party advertising and analytics cookies, which are placed by or on behalf of independent advertisers who are advertising on our site. These cookies may be placed within the advertisement and elsewhere on our site. They are anonymous – they cannot identify individuals. They are used for statistical analysis by allowing the advertiser to count how many people have seen their advertisement or have seen it more than once. They might also allow the advertiser to tailor advertising to you when you visit other websites."),n.a.createElement("p",null,"3.3 We have no access to third party cookies and third party organisations have no access to ours. Other than allowing the third party cookies to be served we have no part to play in the use of these cookies although we may obtain statistical information from them about advertising on our site. The third party organisations that place cookies have their own strict privacy policies."),n.a.createElement("p",null,"3.4 Most browsers allow you to turn off cookies (see below in section 6). However, switching off cookies may restrict your use of the website and/or delay or affect the way in which the website operates."),n.a.createElement("h3",null,"4. How do you decide how you want to hear from us?"),n.a.createElement("p",null,"4.1 We always explain why and how we might contact you at the point you give your information to us. We also provide the means for you to grant or withhold your permission for us to contact you. We do this by using opt out or opt-in tick boxes. If the boxes aren’t there, it’s because we will not use your information for any other purpose than that for which you give it (e.g. to administer a subscription)."),n.a.createElement("p",null,"4.2 You may modify your preferences or get further information by:"),n.a.createElement("p",null,"– email to: hello@convy.io"),n.a.createElement("p",null,"and your wishes will be honoured."),n.a.createElement("h3",null,"5. How we use your information"),n.a.createElement("p",null,"Any personal information gathered by or supplied to us via the website will be used in accordance with this Privacy Policy, and in accordance with your wishes as indicated to us and in accordance with the Act."),n.a.createElement("p",null,"5.1 We might use your personnal information to:"),n.a.createElement("p",null,"(1) remember you when you visit our website and track your browsing patterns by using cookies. You can prevent this; section 6 deals with this in more detail;"),n.a.createElement("p",null,"(2) place your anonymised information into audience segments to identify your interests so that we might serve you with offers that will interest you;"),n.a.createElement("p",null,"(3) ensure any products or services you receive are correctly administered;"),n.a.createElement("p",null,"(4) contact you by email, mail, telephone or sms text message to let you know about any of our products, services or promotions (which, in some cases may be provided by third parties) but only according to the permissions you give us;"),n.a.createElement("p",null,"(5) ensure materials on the website or in apps are presented in the most effective manner for you and your computer or mobile device;"),n.a.createElement("p",null,"(6) collate and log numeric internet addresses to improve the website and to monitor website usage;"),n.a.createElement("p",null,"(7) assess and understand customer feedback and identify usage hotspots."),n.a.createElement("p",null,"5.1 We might use your business information to:"),n.a.createElement("p",null,"(1) run optimization test;"),n.a.createElement("p",null,"(2) make comparison table based on the analytics provided for a specific funnel or part of a website/app;"),n.a.createElement("p",null,"(3) run any consulting activity according to the permissions you give us;"),n.a.createElement("p",null,"5.3 If you have subscribed to any of our services, we will use the information you provide to keep you updated on those services unless you have told us otherwise."),n.a.createElement("h3",null,"6. Managing Cookie Preferences"),n.a.createElement("p",null,"6.1 Most browsers allow you to turn off cookies. To do this look at the “help” menu on your browser. Switching off cookies may restrict your use of the website and/or delay or affect the way in which it operates."),n.a.createElement("p",null,"6.2 If you would prefer to just restrict third party cookies, visit www.youronlinechoices.com or click on the AdChoices logo that you will see in the corner of advertisements that carry behavioural targeting cookies."),n.a.createElement("h3",null,"7. Security"),n.a.createElement("p",null,"7.1 The password you provide when registering with the website is encrypted to ensure protection against unauthorised access of your personal information."),n.a.createElement("p",null,"7.2 We invest in high-quality security and do our utmost to protect user privacy. No data transmission over the Internet can be entirely secure, and therefore we cannot guarantee the security of your personal and business information and/or use of the website. Any information that you send is at your own risk and may be read by others. However once we have received your personal and business information we use strict procedures both ourselves and with our suppliers to protect the security of your personal and business information. "),n.a.createElement("p",null,"7.3 We (convy.io/uxpages) commit to perform research only within the scope set out and contractually agreed with our clients. convy.io/uxpages makes every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction of data during testing"),n.a.createElement("p",null,"7.4 We save data in a server provided by OVH and located in Paris, France. Server details are : FS-MAX, Intel  2x Xeon E5-2620v3, 12c/24t - 2.4GHz /3.2GHz, 64GB DDR4 ECC 1866 MHz - Up to 36 disks, 500 Mbps bandwidth vRack: 40 Gbps. Not a big performance beast but a safe device in a safe environment. We backup the information in OVH Data Center spread across different locations. We do not store any customer data locally. The variation configurations required to run the tests for visitors can also be self-hosted on the customer’s servers for added security control. Physical access to the OVH data centers is restricted by OVH. No physical access is allowed to any of the employees of convy.io/uxpages."),n.a.createElement("p",null,"7.5 Master & Optimization codes are stored in in OVH Data Center spread across different locations.  convy.io/uxpages employs strict role-based security / passwords for access to the code. If your servers are used to run tests, commits to production code are strictly reviewed and approval is restricted to client validation, after passing Unit Testing and QA in Test and Staging. When running tests using clients structure, commits to production code are under client policy and process."),n.a.createElement("h3",null,"8. Disclosing your information"),n.a.createElement("p",null,"8.1 We may disclose your personal information if required to do i) in order to fulfil any request you have made through us , ii) by law or iii) in good-faith believing such action is necessary to comply with the law or contract e.g. for a bank or card company to process your payment for purchase of goods."),n.a.createElement("p",null,"8.2 We will not sell or otherwise share your personal information with third parties without your consent except in the case of our data service providers (who are used for example to manage your subscription)."),n.a.createElement("p",null," 8.3 The consultants working for convy.io/uxpages agree and sign a confidentiality agreement (“Confidential Information Agreement”). The consultants or any individual involved in a project in convy.io/uxpages shall not use, disclose, publish, or distribute any such Confidential Information or the vulnerability details, including without limitation any information regarding the optimization process / results / business information for your company."),n.a.createElement("h3",null,"9. Accessing and Updating your personal information"),n.a.createElement("p",null,"We want to ensure that we provide you with the best possible service. Please therefore always keep us updated of any changes to your personal information, for example, if your email address changes."),n.a.createElement("p",null,"9.1 How do I change my personal details?"),n.a.createElement("p",null,"You can update your details and marketing preferences by accessing your account pages on the website by emailing contact@mekacreative.io"),n.a.createElement("p",null,"9.2 What information do you hold on me?"),n.a.createElement("p",null,"You have the right to access the personal information we hold about you. To obtain a copy of the personal information we hold about you, please send an email to hello@convy.io"),n.a.createElement("p",null,"9.3 What information do you hold on my company?"),n.a.createElement("p",null,"You have the right to access the business information we hold about your company (analytics, testing/optimization details & results). To obtain a copy of the business information we hold about your company, please send an email to hello@convy.io"),n.a.createElement("p",null,"There will be an administrative charge of €10 for providing a copy of this information."),n.a.createElement("h3",null,"10. What does providing us with business & personal information mean?"),n.a.createElement("p",null,"By giving us personal information about you and business information about your company, you agree that your personal information and business information can be used as set out in this Privacy Policy. If we change the Privacy Policy, we will post the changes on this page. Please check the website regularly for any changes to this Privacy Policy."),n.a.createElement("h3",null,"11. Associates Program / third parties"),n.a.createElement("p",null,"convy.io/uxpages uses Google Analytics Solutions / Optimize, an online optimization and testing tool. When testing pages and analytics data are linked, the information will also be gathered with Google. Please refer to https://www.google.com/intl/en/policies/privacy/ and https://support.google.com/360suite/optimize#topic=6314903 for more details about Google data privacy."),n.a.createElement("h3",null,"12. If you don’t feel we’re adhering to this Privacy Policy, what should you do?"),n.a.createElement("p",null,"If at any time you believe that we have not adhered to the terms of this Privacy Policy, please notify us by email to hello@convy.io. and we will make any efforts we can to determine and solve the problem promptly."),n.a.createElement("h3",null,"13. Support"),n.a.createElement("p",null,"For any questions regarding these Terms Of Service, feel free to contact us by email to hello@convy.io."))),n.a.createElement("div",{className:"convy_footer"},n.a.createElement(i.a,null)))}},rzlk:function(e,t,a){"use strict";a.r(t);a("E5k/");var o=a("q1tI"),n=a.n(o),i=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-privacy-js-04b77ec1de422679bdcf.js.map