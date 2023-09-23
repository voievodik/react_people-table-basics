(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(22),a=(n(31),n(32),n(6)),r=n(3),s=(n(33),n(10)),i=n.n(s),j=["Name","Sex","Born","Died","Mother","Father"],l=n(2),o=function(e){var t=e.person;return Object(l.jsx)(a.b,{to:"/people/".concat(null===t||void 0===t?void 0:t.slug),className:i()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},d=function(e,t){if(null===t)return"-";var n=e.find((function(e){return e.name===t}));return n?Object(l.jsx)(o,{person:n}):t},b=function(e,t){if(null===t)return"-";var n=e.find((function(e){return e.name===t}));return n?Object(l.jsx)(o,{person:n}):t},u=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},h=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.c,{to:"/",className:u,children:"Home"}),Object(l.jsx)(a.c,{to:"/people",className:u,children:"People"})]})})})},x=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(h,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(r.b,{})})})]})},O=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},p=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},m=n(4),f=n(0);function v(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(35);var g=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},N=function(e){var t=e.people,n=Object(r.r)().personSlug;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:j.map((function(e){return Object(l.jsx)("th",{children:e},e)}))})}),Object(l.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var c=e.sex,a=e.born,r=e.died,s=e.fatherName,j=e.motherName,u=e.slug;return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":u===n}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(o,{person:e})}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:b(t,j)}),Object(l.jsx)("td",{children:d(t,s)})]})}))})]})},y=function(){var e=Object(f.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],a=Object(f.useState)(!1),r=Object(m.a)(a,2),s=r[0],i=r[1],j=Object(f.useState)([]),o=Object(m.a)(j,2),d=o[0],b=o[1];Object(f.useEffect)((function(){c(!0),v().then((function(e){b(e)})).catch((function(){i(!0)})).finally((function(){return c(!1)}))}),[]);var u=!n&&!s&&!(null!==d&&void 0!==d&&d.length);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[n&&Object(l.jsx)(g,{}),s&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),u&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!(null===d||void 0===d||!d.length)&&Object(l.jsx)(N,{people:d})]})})]})},w=function(){return Object(l.jsxs)(a.a,{children:[Object(l.jsx)(r.e,{children:Object(l.jsxs)(r.c,{path:"/",element:Object(l.jsx)(x,{}),children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(O,{})}),Object(l.jsxs)(r.c,{path:"people",children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(y,{})}),Object(l.jsx)(r.c,{path:":personSlug?",element:Object(l.jsx)(y,{})})]}),Object(l.jsx)(r.c,{path:"/home",element:Object(l.jsx)(r.a,{to:"/",replace:!0})}),Object(l.jsx)(r.c,{path:"*",element:Object(l.jsx)(p,{})})]})}),Object(l.jsx)(x,{})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(l.jsx)(w,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ac4ef9e0.chunk.js.map