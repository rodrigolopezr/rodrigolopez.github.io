(function(){"use strict";var t={6224:function(t,e,r){var a=r(8935),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("home-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-app-bar",{attrs:{absolute:"",color:"#00669E",dark:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[a("v-toolbar-title",[t._v("Rodrigo López - Resume")]),a("v-spacer")],1)],1),a("v-row",[a("video-background",{staticStyle:{height:"50vh",left:"0px !important"},attrs:{overlay:"linear-gradient(45deg,#2a4ae430,#fb949e6b)",poster:r(3839),src:r(567)}},[a("v-container",{staticClass:"containerDev fill-height mt-10 text-center"},[a("v-row",{attrs:{align:"center"}},[a("v-col",[a("v-card",{staticClass:"cardDev"},[a("v-card-title",{staticClass:"justify-center"},[a("div",{staticClass:"text-center"},[a("div",[a("v-avatar",{staticClass:"text-center",attrs:{size:t.$vuetify.breakpoint.smAndDown?90:110}},[a("img",{attrs:{src:r(976)}})])],1),a("div",[a("span",{staticClass:"black--text font-weight-bold text-center text-lg-h4 text-sm-h5"},[t._v(" Developer, Tech Lead ")])])])]),a("v-card-text",[a("vue-typer",{attrs:{"caret-animation":"blink","erase-delay":250,"erase-on-complete":!1,"erase-style":"select-all","initial-action":"typing","pre-erase-delay":2e3,"pre-type-delay":70,repeat:1/0,shuffle:!1,text:["require node from nodeJS","import vue from VueJS","require_once(LUMEN)","require(LARAVEL)","import Mobile from ReactNative","const value = Javascript"],"type-delay":70}})],1)],1)],1)],1)],1)],1)],1),a("div",{ref:"#about",staticClass:"mt-10"},[a("v-container",{staticClass:"containerCards"},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" About Me ")])]),a("v-card-text",[a("p",{staticClass:"text-h6 text-justify"},[t._v(" I am a Systems Engineer graduated in 2009 from the Universidad de la Salle Bajío, since then I have worked as a software developer, thus having an experience of more than 13 years working in different languages and frameworks. ")]),a("p",{staticClass:"text-h6 text-justify"},[t._v(" In addition to my work as a developer, I have taught development courses such as .NET, VueJS, Excel, among others. ")]),a("p",{staticClass:"text-h6 text-justify"},[t._v(" I have a high sense of urgency, I have worked for companies where it is necessary to solve an issue in minutes, this has led me to have a great experience with errors or problems in production. ")]),a("p",{staticClass:"text-center"},[a("v-btn",{staticClass:"white--text",attrs:{color:"red"},on:{click:function(e){return t.redirect("EnCurriculumRodrigoLopezREn.pdf")}}},[t._v(" Download Full Resume "),a("v-icon",{attrs:{color:"white",dark:"",right:"",size:"30"}},[t._v(" mdi-file-pdf-box ")])],1)],1)])],1)],1)],1),a("div",{ref:"experience"},[a("v-container",{staticClass:"containerCards"},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Experience ")])]),a("v-card-text",[a("v-timeline",t._l(t.years,(function(e,r){return a("v-timeline-item",{key:r,attrs:{color:e.color,small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{class:"headline font-weight-bold "+e.color+"--text",domProps:{textContent:t._s(e.year)}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"py-4"},[a("h2",{class:"headline font-weight-light mb-4 "+e.color+"--text"},[t._v(" "+t._s(e.title)+" ")]),a("div",[t._v(" "+t._s(e.text)+" ")])])])})),1)],1)],1)],1)],1),a("div",{ref:"languages",staticClass:"mt-10"},[a("v-container",{staticClass:"containerCards"},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Languages and Frameworks ")])]),a("v-card-text",[a("div",{staticClass:"justify-center text-center"},[a("span",{staticClass:"text-h6"},[t._v("These are the languages and frameworks I've worked")]),a("v-progress-linear",{attrs:{color:"blue",height:"25",value:"90"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"white--text"},[t._v(".NET => 8 years")])]},proxy:!0}])}),a("v-progress-linear",{attrs:{color:"purple",height:"25",value:"90"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"white--text"},[t._v("PHP => 8 years")])]},proxy:!0}])}),a("v-progress-linear",{attrs:{color:"cyan",height:"25",value:"90"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"white--text"},[t._v("Javascript => 8 years")])]},proxy:!0}])}),a("v-progress-linear",{attrs:{color:"red",height:"25",value:"70"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"white--text"},[t._v("VueJS => 5 years")])]},proxy:!0}])}),a("v-progress-linear",{attrs:{color:"grey",height:"25",value:"60"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"black--text"},[t._v("ReactJS => 3 years")])]},proxy:!0}])}),a("v-progress-linear",{attrs:{color:"green",height:"25",value:"65"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"white--text"},[t._v("Lumen/Laravel => 4 years")])]},proxy:!0}])}),a("v-progress-linear",{attrs:{color:"pink",height:"25",value:"15"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"black--text"},[t._v("React Native => 1 year")])]},proxy:!0}])}),a("v-progress-linear",{attrs:{color:"yellow",height:"25",value:"35"},scopedSlots:t._u([{key:"default",fn:function(){return[a("strong",{staticClass:"black--text"},[t._v("NodeJS => 2 years")])]},proxy:!0}])})],1)])],1)],1)],1),a("div",{ref:"portfolio"},[a("v-container",{staticClass:"containerCards"},[a("v-card",{attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Portfolio ")])]),a("v-card-text",{staticClass:"justify-center"}),a("v-row",t._l(t.cards,(function(e){return a("v-col",{key:e.title,attrs:{md:e.flex,sm:"2"}},[a("v-card",[a("v-img",{staticClass:"align-end white--text",attrs:{gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px",src:e.src}},[a("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{icon:""},on:{click:function(r){return t.redirect(e.to)}}},[a("v-icon",[t._v("mdi-web")])],1)],1)],1)],1)})),1)],1)],1)],1),a("div",{ref:"contact"},[a("v-container",{staticClass:"containerCards"},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Contact Me ")])]),a("v-card-text",{staticClass:"justify-center"},[a("div",{staticClass:"justify-center text-center"},[a("p",{staticClass:"text-center text-h6"},[t._v(" Do you like my profile? Conctact Me, I can help you with your project ")]),a("v-icon",{staticClass:"text-center"},[t._v(" mdi-gmail ")]),t._v(" "),a("span",{staticClass:"text-body-2 text-center"},[t._v("rodrigo.lopez.r87@gmail.com")]),t._v(" "),a("v-spacer"),a("v-icon",{staticClass:"text-center"},[t._v(" mdi-whatsapp ")]),t._v(" "),a("span",{staticClass:"text-body-2 text-center"},[t._v("52+ (477) 154-23-12")]),a("p"),a("p",{staticClass:"justify-center text-center text-lg-h4 text-md-h5"},[t._v(" If you want you cand send me a direct Message by whatsapp ")]),a("v-btn",{staticClass:"justify-center mx-auto",attrs:{color:"teal",dark:"",fab:""},on:{click:function(e){return t.redirect("https://api.whatsapp.com/send?phone=+524771542312")}}},[a("v-icon",[t._v("mdi-whatsapp"),a("v-icon")],1)],1)],1)])],1)],1)],1),a("div",[a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"indigo lighten-1 text-center white--text",staticStyle:{width:"100% !important"},attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e.icon,staticClass:"mx-4 white--text",attrs:{icon:""},on:{click:function(r){return t.redirect(e.to)}}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1),a("v-card-text",{staticClass:"pt-0 white--text"},[t._v(" This page was totally made by me, I'm using vuetify and VueJs ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Rodrigo López")])])],1)],1)],1)],1)},n=[],l={name:"HomeView",components:{},data:()=>({years:[{color:"cyan",year:"Oct 2020 - Now",title:"(M6 Connect USA) Tech Developer, Developer Lead",text:"Developing in Node Js, Laravel, Lumen, VueJS, Javascript, control of the development team to reach the goal of delivering in a timely manner"},{color:"green",year:"(Instituto Lux México) Oct 2014 - Oct 2020",title:"Developer Lead",text:"Development Web Application for Register of new members(made With VueJS + Larave + REACT) https://lux.org.mx/admisiones/#/ • Develoment Web Application to Instituto Lux College for Child delivery (intranet) made with VueJs + Laravel + REACT  • Development of the current page (php-mysql, responsive) with panel administration. • Development of help desk for tickets support (php-mysql) • Development of application for rating capture BADyG’s evaluation (C# MCV) • Improvement and administration of the schools web and office control system • Improvement and administration of the institutes cash control system. • Administration of domain and mail of the institute (platform google)"},{color:"red",year:"(Siemens México) Apr 2014 - Oct-2014",title:"Sr. Developer.",text:"Web application development for the administration of computer equipment (Register, Low, Reservation, Assignment of equipment) developed in C #, SQL Server 2008, WCF)"},{color:"grey",year:"(Fábricas de Calzado Andrea México) Aug. 2012 – Apr. 2014",title:"Sr. Developer.",text:"Development of WCF Services for sending e-mail to Andrea System Customers. • Development of WCF Services for billing through a Suppliers DLL (MySuite). • Development and improvements to the sales system."},{color:"blue",year:"(Poder Judicial del Estado de Guanajuato) Mar. 2009 – Aug.2012",title:"Webmaster",text:"Updating of the page design of www.poderjudicial-gto.gob.mx (Years of update: 2009, 2011, 2012)"}],icons:[{icon:"mdi-linkedin",to:"https://www.linkedin.com/in/rodrigolopezr"},{icon:"mdi-github",to:"https://github.com/rodrigolopezr/"}],cards:[{title:"App Junta 360",src:r(4642),flex:3,to:"https://play.google.com/store/apps/details?id=com.misjuntas&hl=es_MX"},{title:"Sistema de pedidos",src:r(5529),flex:3,to:"http://pedidos.vabadus.mx/login"},{title:"Instituto Lux Landing page",src:r(5319),to:"https://institutolux.edu.mx",flex:3},{title:"Rigel Lógistica",src:r(6687),to:"http://rigel-scm.com/",flex:3},{title:"Alfatextiles",src:r(5476),to:"http://alfatextiles.mx/",flex:3},{title:"Biblioteca Virtual",src:r(3597),to:"https://github.com/rodrigolopezr/library",flex:3}]}),methods:{scrollMeTo(t){const e=this.$refs[t],r=e.offsetTop;window.scrollTo(0,r)},messageSendHandler(){},redirect(t){window.location.href=t}}},c=l,u=r(1001),d=(0,u.Z)(c,s,n,!1,null,"f5c10cc2",null),p=d.exports,v={name:"App",components:{HomeView:p}},f=v,g=(0,u.Z)(f,o,i,!1,null,null,null),m=g.exports,h=r(8209),x=r.n(h);r(243);a["default"].use(x());const y={};var b=new(x())(y),C=r(3205),w=r.n(C),_=r(6676),k=r.n(_);a["default"].use(C.Plugin),a["default"].component("VideoBackground",w()),a["default"].config.productionTip=!1,a["default"].use(b),a["default"].use(k()),new a["default"]({vuetify:b,Plugin:C.Plugin,VueTyperPlugin:k(),render:t=>t(m)}).$mount("#app")},5476:function(t,e,r){t.exports=r.p+"img/alfatextiles.99b7aff0.png"},3839:function(t,e,r){t.exports=r.p+"img/bg-1.67750213.jpg"},3597:function(t,e,r){t.exports=r.p+"img/biblioteca.8c79c0d4.png"},4642:function(t,e,r){t.exports=r.p+"img/junta360.fd82bd5d.png"},5319:function(t,e,r){t.exports=r.p+"img/lux.214bf61b.png"},5529:function(t,e,r){t.exports=r.p+"img/pedidos.17e713b8.png"},6687:function(t,e,r){t.exports=r.p+"img/rigel.aa88e10c.png"},976:function(t,e,r){t.exports=r.p+"img/rodrigolopez.447ec3cc.jpg"},567:function(t,e,r){t.exports=r.p+"media/video.e6d1c005.mp4"}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,i){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],i=t[u][2];for(var n=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(n=!1,i<s&&(s=i));if(n){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,o,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,s=a[0],n=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(l)var u=l(r)}for(e&&e(a);c<s.length;c++)i=s[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},a=self["webpackChunkrodrigocv"]=self["webpackChunkrodrigocv"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(6224)}));a=r.O(a)})();
//# sourceMappingURL=app.7c144b06.js.map