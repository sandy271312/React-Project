(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{4:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=a(1);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"navbar-brand","aria-current":"page",href:"/"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.togglemode,role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){return e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",style:{color:"#0f5132",backgroundColor:"#d1e7dd"}},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),":",e.alert.msg))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("h2",null,e.heading),l.a.createElement("textarea",{className:"form-control",id:"myBox",value:r,onChange:function(e){c(e.target.value)},rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted  in uppercase","Success")}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted  in lowercase","Success")}},"Convert to lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","Success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra Spaces removed","Success")}},"Remove Extra spaces"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c(""),e.showAlert("Text cleard","Success")}},"Clear")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your Text Summery"),l.a.createElement("p",null,r.length>0?r.split(" ").length:0," words and ",r.length," character"),l.a.createElement("p",null,.008*r.split(" ").length," minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement(l.a.Fragment,null,r.length>0?r:"Enter something into the text box above to perview it here")))}s.defaultProps={about:"Write about here"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"textUtils",mode:a,togglemode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",p("Dark Mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",p("Light Mode has been enabled","success"))},about:"About"}),l.a.createElement(m,{alert:d}),l.a.createElement(i,{showAlert:p,heading:"Enter text to Analyze below",mode:a}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,11)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()}},[[4,3,2]]]);
//# sourceMappingURL=main.cc1a7dc9.chunk.js.map