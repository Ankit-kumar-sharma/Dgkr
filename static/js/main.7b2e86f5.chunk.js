(this.webpackJsonpdatagrokr=this.webpackJsonpdatagrokr||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.66fbda94.png"},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),s=t.n(r),c=(t(10),t(1)),m=t(2),i=(t(11),function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),r=a[0],s=a[1],i=Object(n.useState)(""),o=Object(c.a)(i,2),u=o[0],N=o[1],E=Object(n.useState)(""),d=Object(c.a)(E,2),p=d[0],v=d[1],g=Object(n.useState)(""),b=Object(c.a)(g,2),f=b[0],h=b[1],C=Object(n.useState)(""),y=Object(c.a)(C,2),O=y[0],S=y[1],j=Object(n.useState)(""),w=Object(c.a)(j,2),x=w[0],F=w[1],D=Object(n.useState)(""),k=Object(c.a)(D,2),B=k[0],I=k[1],z=Object(n.useState)(""),U=Object(c.a)(z,2),M=U[0],_=U[1],J=Object(n.useState)("Show"),L=Object(c.a)(J,2),P=L[0],T=L[1],A=Object(n.useState)(!1),R=Object(c.a)(A,2),Z=R[0],$=R[1],q=new Array([]),G=Object(n.useState)(!1),H=Object(c.a)(G,2),K=H[0],Q=H[1],V=localStorage.getItem("userDetails");function W(e){e.preventDefault(),"localstorage"===B?($(!0),X(r,u,p,f,O,x,B)&&(q.push({FirstName:r,LastName:u,UniversityName:p,CityName:f,ZipCode:O,Phone:x}),localStorage.setItem("userDetails",JSON.stringify(q)),s(""),N(""),v(""),F(""),h(""),I(""),S(""))):X(r,u,p,f,O,x,B)&&(alert("Successful Firebase!!!"),s(""),N(""),v(""),F(""),h(""),I(""),S(""))}function X(e,a,t,n,l,r,s){var c={firstName:e,lastName:a,universityName:t,cityName:n,zipCode:l,phone:r,storageMedium:s},m={},i=!0;return 0===c.firstName.length?(i=!1,m.firstName="Firstname can't be empty."):c.firstName.length<3?(i=!1,m.firstName="Firstname should've atleast 3 char."):/^[0-9]/.test(c.firstName)&&(i=!1,m.firstName="Can't start with digits."),0===c.lastName.length?(i=!1,m.lastName="Lastname can't be empty."):/^[0-9]/.test(c.lastName)&&(i=!1,m.lastName="Can't start with digits."),0===c.universityName.length?(i=!1,m.universityName="Fill University name."):/\d/.test(c.universityName)&&(i=!1,m.universityName="Can't have digits."),0===c.cityName.length?(i=!1,m.cityName="Fill city name."):/\d/.test(c.cityName)&&(i=!1,m.cityName="Can't have digits."),0===c.zipCode.length?(i=!1,m.zipCode="Fill zip code."):!1===/^\d{6}$/.test(c.zipCode)&&(i=!1,m.zipCode="Invalid zip code."),0===c.phone.length?(i=!1,m.phone="Fill phone number."):!1===/^\d{10}$/.test(c.phone)&&(i=!1,m.phone="Invalid contact number."),0===c.storageMedium.length&&(i=!1,m.storageMedium="Select appropriate storage medium."),_(m),i}return q=null===V?[]:JSON.parse(V),l.a.createElement(l.a.Fragment,null,l.a.createElement("main",null,l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:t(12),alt:"logo of website",className:"logo"}),l.a.createElement("p",{className:"logoTitle"},"Data",l.a.createElement("span",{style:{color:"#bfbfbf"}},"Grokr"))),l.a.createElement("div",{className:"toggleButtonContainer"},Z?l.a.createElement("button",{className:"getStartedBtn",id:"showBtn",onClick:function(){"Show"===P?0===q.length?alert("Please fill the data first to see."):(Q(!0),T("Hide")):(Q(!1),T("Show"))}},P):null)),l.a.createElement("section",{className:"banner"},l.a.createElement("div",{className:"layer"}),l.a.createElement("q",{className:"Message"}," Be the best version of yourself."),l.a.createElement("a",{href:"#informationContainerID"},"Join Us"),l.a.createElement("div",{className:"mouse_scroll"},l.a.createElement("div",{className:"mouse"},l.a.createElement("div",{className:"wheel"})),l.a.createElement("div",null,l.a.createElement("span",{className:"m_scroll_arrows unu"}),l.a.createElement("span",{className:"m_scroll_arrows doi"}),l.a.createElement("span",{className:"m_scroll_arrows trei"})))),l.a.createElement("div",{className:"informationContainer",id:"informationContainerID"},l.a.createElement("div",{className:"titleContainer"},l.a.createElement("p",{className:"heading"},"Contact Us")),l.a.createElement("div",{className:"informationBox"},l.a.createElement("div",{className:"informationBox1"}),l.a.createElement("div",{className:"informationBox2"},l.a.createElement("form",{action:""},l.a.createElement("label",{htmlFor:""},l.a.createElement(m.i,{className:"icon"}),"Personal Details"),l.a.createElement("div",{className:"elementContainer"},l.a.createElement("div",{className:"element"},l.a.createElement("div",{className:"labelContainer"},l.a.createElement("p",null,l.a.createElement(m.g,{className:"icon"}),"First name")),l.a.createElement("input",{type:"text",value:r,onChange:function(e){s(e.target.value)}}),l.a.createElement("p",{className:"error"},M.firstName)),l.a.createElement("div",{className:"element"},l.a.createElement("div",{className:"labelContainer"},l.a.createElement("p",null,l.a.createElement(m.d,{className:"icon"}),"Last name")),l.a.createElement("input",{type:"text",value:u,onChange:function(e){N(e.target.value)}}),l.a.createElement("p",{className:"error"},M.lastName))),l.a.createElement("div",{className:"elementContainer"},l.a.createElement("div",{className:"element"},l.a.createElement("div",{className:"labelContainer"},l.a.createElement("p",null,l.a.createElement(m.h,{className:"icon"}),"University's Name")),l.a.createElement("input",{type:"text",value:p,onChange:function(e){v(e.target.value)}}),l.a.createElement("p",{className:"error"},M.universityName)),l.a.createElement("div",{className:"element"},l.a.createElement("div",{className:"labelContainer"},l.a.createElement("p",null,l.a.createElement(m.b,{className:"icon"}),"City")),l.a.createElement("input",{type:"text",value:f,onChange:function(e){h(e.target.value)}}),l.a.createElement("p",{className:"error"},M.cityName))),l.a.createElement("label",{style:{marginTop:"10px"}},l.a.createElement(m.a,{className:"icon"}),"Address Details"),l.a.createElement("div",{className:"elementContainer"},l.a.createElement("div",{className:"element"},l.a.createElement("div",{className:"labelContainer"},l.a.createElement("p",null,l.a.createElement(m.f,{className:"icon"}),"Zip Code")),l.a.createElement("input",{type:"text",value:O,onChange:function(e){S(e.target.value)}}),l.a.createElement("p",{className:"error"},M.zipCode)),l.a.createElement("div",{className:"element"},l.a.createElement("div",{className:"labelContainer"},l.a.createElement("p",null,l.a.createElement(m.e,{style:{marginRight:"10px"}}),"Phone")),l.a.createElement("input",{type:"text",value:x,onChange:function(e){F(e.target.value)}}),l.a.createElement("p",{className:"error"},M.phone))),l.a.createElement("div",{className:"elementContainer",style:{flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{className:"labelContainer",style:{marginTop:"20px"}},l.a.createElement("p",null,l.a.createElement(m.c,{className:"icon"}),"Storage Medium")),l.a.createElement("div",{className:"element"},l.a.createElement("select",{name:"",id:"",value:B,className:"select",onChange:function(e){I(e.target.value)}},l.a.createElement("option",{value:"",disabled:!0},"--Select"),l.a.createElement("option",{value:"localstorage"},"Local Storage"),l.a.createElement("option",{value:"firebase"},"Firebase")),l.a.createElement("p",{className:"error"},M.storageMedium)),l.a.createElement("button",{className:"submitBtn",onClick:function(e){return W(e)}},"Register"))))))),K?l.a.createElement("div",{className:"storedData"},l.a.createElement("div",{className:"titleContainer"},l.a.createElement("p",null,"User Information")),l.a.createElement("div",{className:"localDataContainer",style:{backgroundColor:"maroon",color:"white"}},l.a.createElement("p",null,"Name"),l.a.createElement("p",null,"University"),l.a.createElement("p",null,"Mobile")),q?q.map((function(e,a){return l.a.createElement("div",{className:"localDataContainer",key:a},l.a.createElement("p",null,e.FirstName+" "+e.LastName),l.a.createElement("p",null,e.UniversityName),l.a.createElement("p",null,e.Phone))})):Q(!1)):null)});s.a.render(l.a.createElement(i,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.7b2e86f5.chunk.js.map