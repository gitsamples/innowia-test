(this["webpackJsonpreact-examples"]=this["webpackJsonpreact-examples"]||[]).push([[0],{120:function(e,c,t){},144:function(e,c,t){},244:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(85),n=t.n(s),l=(t(96),t(2)),r=(t(97),t(98),t(120),t(6)),i=t(4),o=t(16),j=t.n(o),d=t(0);function m(){var e=Object(l.f)(),c=Object(a.useState)(""),t=Object(i.a)(c,2),s=t[0],n=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),m=o[0],b=o[1],h=Object(a.useState)(!1),x=Object(i.a)(h,2),u=x[0],O=x[1];console.log(u);return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"col-4",onSubmit:function(c){c.preventDefault(),s&&m?j.a.post("https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData",{firstName:s,lastName:m,checkbox:u}).then((function(){e.push("/crud/read")})):alert("Fill the all input value...")},children:[Object(d.jsxs)("div",{className:"mb-3 row",children:[Object(d.jsx)("label",{className:"col-form-label col-sm-4",children:"First Name"}),Object(d.jsx)("div",{className:"col-sm-8",children:Object(d.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return n(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"mb-3 row",children:[Object(d.jsx)("label",{className:"col-form-label col-sm-4",children:"Last Name"}),Object(d.jsx)("div",{className:"col-sm-8",children:Object(d.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return b(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"mb-3 form-check",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",onChange:function(e){return O(!u)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Check me out"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"}),Object(d.jsx)("button",{type:"button",className:"btn ms-3 text-danger",onClick:function(){return e.goBack()},children:"Cancel"})]})})}function b(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(!0),l=Object(i.a)(n,2),o=l[0],m=l[1],b=Object(a.useState)(!1),h=Object(i.a)(b,2),x=h[0],u=h[1];Object(a.useEffect)((function(){var e=j.a.CancelToken.source();return j.a.get("https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData",{cancelToken:e.token}).then((function(e){console.log(e.data),s(e.data),m(!1),e.data.length||u(!0)})).catch((function(e){console.log(e)})),function(){e.cancel("Cancelling in cleanup")}}),[]);var O=function(e){window.confirm("Delete the item?")&&j.a.delete("https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/".concat(e)).then((function(){j.a.get("https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData").then((function(e){s(e.data)}))}))};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"First Name"}),Object(d.jsx)("th",{children:"Last Name"}),Object(d.jsx)("th",{children:"Checkbox Value"}),Object(d.jsx)("th",{children:"Update"}),Object(d.jsx)("th",{children:"Delete"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,c){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c+1}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{children:e.lastName}),Object(d.jsx)("td",{children:e.checkbox?"Checked":"Unchecked"}),Object(d.jsx)("td",{children:Object(d.jsx)(r.b,{to:"/crud/update",children:Object(d.jsx)("button",{onClick:function(){return function(e){var c=e.id,t=e.firstName,a=e.lastName,s=e.checkbox;localStorage.setItem("ID",c),localStorage.setItem("First Name",t),localStorage.setItem("Last Name",a),localStorage.setItem("Checkbox Value",s)}(e)},children:"Update"})})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return O(e.id)},children:"Delete"})})]},c)}))})]}),x&&Object(d.jsx)("div",{children:"Data not avaliable"}),o&&Object(d.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(d.jsx)("div",{className:"spinner-border"}),Object(d.jsx)("strong",{children:"Loading..."})]})]})}function h(){var e=Object(l.f)(),c=Object(a.useState)(null),t=Object(i.a)(c,2),s=t[0],n=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),m=o[0],b=o[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),u=x[0],O=x[1],f=Object(a.useState)(!1),p=Object(i.a)(f,2),v=p[0],N=p[1];console.log(v),Object(a.useEffect)((function(){n(localStorage.getItem("ID")),b(localStorage.getItem("First Name")),O(localStorage.getItem("Last Name")),N("true"===localStorage.getItem("Checkbox Value"))}),[]);return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"col-4",children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{className:"form-label",children:"First Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",value:m,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{className:"form-label",children:"Last Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",value:u,onChange:function(e){return O(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mb-3 form-check",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",checked:v?1:0,onChange:function(){return N(!v)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Check me out"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-secondary",onClick:function(c){c.preventDefault(),m&&u?j.a.put("https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/".concat(s),{firstName:m,lastName:u,checkbox:v}).then((function(){e.push("/crud/read")})):alert("Fill the all input value...")},children:"Update"}),Object(d.jsx)("button",{type:"button",className:"btn ms-3 text-danger",onClick:function(){return e.goBack()},children:"Cancel"})]})})}var x=function(){return document.title="React CRUD Demo",Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsxs)("header",{className:"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom",children:[Object(d.jsx)(r.b,{to:"/crud/",className:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none",children:Object(d.jsx)("span",{className:"fs-4",children:"React CRUD Demo"})}),Object(d.jsxs)("ul",{className:"nav nav-pills",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.c,{to:"/crud/create",className:"nav-link",children:"Create"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.c,{to:"/crud/read",className:"nav-link",children:"Read"})})]})]}),Object(d.jsx)(l.a,{exact:!0,path:"/crud/",children:Object(d.jsx)("h1",{className:"display-4 d-flex align-items-center justify-content-center",style:{height:"calc(100vh - 110px)"},children:"CRUD Operations"})}),Object(d.jsx)(l.a,{exact:!0,path:"/crud/create",component:m}),Object(d.jsx)(l.a,{exact:!0,path:"/crud/read",component:b}),Object(d.jsx)(l.a,{exact:!0,path:"/crud/update",component:h})]})};t(144);var u=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"h-100 p-5 bg-light border rounded-3",children:[Object(d.jsx)("h2",{children:"About us"}),Object(d.jsx)("p",{children:"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."})]})})};var O=function(){return Object(d.jsx)("div",{children:"UserList"})};var f=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-4 offset-md-4",children:Object(d.jsxs)("div",{className:"bg-light p-4",children:[Object(d.jsxs)("form",{className:"row g-3",children:[Object(d.jsx)("h4",{children:"Login"}),Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{type:"text",name:"username",className:"form-control"})]}),Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",className:"form-control"})]}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",id:"rememberMe"}),Object(d.jsxs)("label",{className:"form-check-label",htmlFor:"rememberMe",children:[" ","Remember me"]})]})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-dark",children:"Login"})})]}),Object(d.jsx)("hr",{className:"mt-4"}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("p",{className:"text-center mb-0",children:["Have not account yet? ",Object(d.jsx)(r.b,{to:"/form/signup",children:"Signup"})]})})]})})})})},p=t(13),v=t(19),N=t(91),g=t(20);var k=function(){var e,c,t,a,s,n=g.b().shape({username:g.d().required("Username is required").min(6,"Username must be at least 6 characters").max(20,"Username must not exceed 20 characters"),email:g.d().required("Email is required").email("Email is invalid"),password:g.d().required("Password is required").min(6,"Password must be at least 6 characters").max(40,"Password must not exceed 40 characters"),confirmPassword:g.d().required("Confirm Password is required").oneOf([g.c("password"),null],"Confirm Password does not match"),acceptTerms:g.a().oneOf([!0],"Accept Terms is required")}),r=Object(v.d)({resolver:Object(N.a)(n)}),i=r.register,o=r.handleSubmit,j=r.reset,m=r.formState.errors,b=Object(l.f)();return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("div",{className:"register-form",children:Object(d.jsxs)("div",{className:"bg-light p-4 rounded shadow",children:[Object(d.jsx)("h4",{children:"Sign up"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{onSubmit:o((function(e){console.log(JSON.stringify(e,null,2)),localStorage.setItem("formState",JSON.stringify(e)),j(),b.push("/form/user-list")})),children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",Object(p.a)(Object(p.a)({name:"username",type:"text"},i("username")),{},{className:"form-control ".concat(m.username?"is-invalid":"")})),Object(d.jsx)("div",{className:"invalid-feedback",children:null===(e=m.username)||void 0===e?void 0:e.message})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",Object(p.a)(Object(p.a)({name:"email",type:"email"},i("email")),{},{className:"form-control ".concat(m.email?"is-invalid":"")})),Object(d.jsx)("div",{className:"invalid-feedback",children:null===(c=m.email)||void 0===c?void 0:c.message})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",Object(p.a)(Object(p.a)({name:"password",type:"password"},i("password")),{},{className:"form-control ".concat(m.password?"is-invalid":"")})),Object(d.jsx)("div",{className:"invalid-feedback",children:null===(t=m.password)||void 0===t?void 0:t.message})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("label",{children:"Confirm Password"}),Object(d.jsx)("input",Object(p.a)(Object(p.a)({name:"confirmPassword",type:"password"},i("confirmPassword")),{},{className:"form-control ".concat(m.confirmPassword?"is-invalid":"")})),Object(d.jsx)("div",{className:"invalid-feedback",children:null===(a=m.confirmPassword)||void 0===a?void 0:a.message})]}),Object(d.jsxs)("div",{className:"mb-2 form-check",children:[Object(d.jsx)("input",Object(p.a)(Object(p.a)({id:"acceptTerms",name:"acceptTerms",type:"checkbox"},i("acceptTerms")),{},{className:"form-check-input ".concat(m.acceptTerms?"is-invalid":"")})),Object(d.jsx)("label",{htmlFor:"acceptTerms",className:"form-check-label",children:Object(d.jsx)("small",{children:"I have read and agree to the Terms"})}),Object(d.jsx)("div",{className:"invalid-feedback",children:null===(s=m.acceptTerms)||void 0===s?void 0:s.message})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("button",{type:"submit",className:"btn btn-dark me-3",children:"Register"}),Object(d.jsx)("button",{type:"button",onClick:function(){return j()},className:"btn btn-link text-decoration-none",children:"Reset"})]})]})]})})})})};var y=function(){return Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsxs)("header",{className:"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom",children:[Object(d.jsx)(r.b,{to:"/form/",className:"d-flex align-items-center mb-3 mb-md-0 pe-3 border-end text-dark text-decoration-none",children:Object(d.jsx)("span",{className:"fs-4",children:"React Form Demo"})}),Object(d.jsxs)("ul",{className:"nav nav-pills me-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.c,{to:"/form/about",className:"nav-link",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.c,{to:"/form/user-list",className:"nav-link",children:"User List"})})]}),Object(d.jsxs)("ul",{className:"nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/form/login",className:"nav-link link-dark px-2",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/form/signup",className:"nav-link link-dark px-2",children:"Sign up"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/form/login",className:"nav-link link-dark px-2",children:"Log out"})})]})]}),Object(d.jsx)(l.a,{exact:!0,path:"/form/",children:Object(d.jsxs)("h1",{className:"display-4 d-flex align-items-center justify-content-center",style:{height:"calc(100vh - 110px)"},children:["Form Example with ",Object(d.jsx)("br",{}),"Login / Logout and Registration"]})}),Object(d.jsx)(l.a,{exact:!0,path:"/form/about",component:u}),Object(d.jsx)(l.a,{exact:!0,path:"/form/user-list",component:O}),Object(d.jsx)(l.a,{exact:!0,path:"/form/login",component:f}),Object(d.jsx)(l.a,{exact:!0,path:"/form/signup",component:k})]})};var w=function(){return document.title="React Examples",Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"display-5 d-flex text-primary justify-content-center",children:"React Examples"}),Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row justify-content-center text-center my-5",children:[Object(d.jsx)("div",{className:"col-12 col-sm col-md-4",children:Object(d.jsxs)("div",{className:"rounded shadow py-3",children:[Object(d.jsx)("h5",{children:"Crud Demo"}),Object(d.jsx)(r.c,{to:"/crud",className:"nav-link",children:"Click here"})]})}),Object(d.jsx)("div",{className:"col-12 col-sm col-md-4",children:Object(d.jsxs)("div",{className:"rounded shadow py-3",children:[Object(d.jsx)("h5",{children:"Form Demo"}),Object(d.jsx)(r.c,{to:"/form",className:"nav-link",children:"Click here"})]})})]})})})]})};var C=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:w}),Object(d.jsx)(l.a,{path:"/crud",component:x}),Object(d.jsx)(l.a,{path:"/form",component:y})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,245)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,l=c.getTTFB;t(e),a(e),s(e),n(e),l(e)}))};n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),S()},96:function(e,c,t){}},[[244,1,2]]]);
//# sourceMappingURL=main.0375f714.chunk.js.map