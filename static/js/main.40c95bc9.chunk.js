(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=a(2),l=a.n(s),o=a(4),u=a(3),m="de0e746ab5cbd789cda400ae86e4c3a6",d=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={getHomeList:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("discover/tv?with_networks=213&api_key=".concat(m,"&language=pt-BR"));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais Netflix",items:e.t0},e.next=6,d("trending/all/week?api_key=".concat(m,"&language=pt-BR"));case 6:return e.t2=e.sent,e.t3={slug:"tranding",title:"Recomendados da Semana",items:e.t2},e.next=10,d("movie/top_rated?api_key=".concat(m,"&language=pt-BR"));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,d("discover/movie?with_genres=99&api_key=".concat(m,"&language=pt-BR"));case 14:return e.t6=e.sent,e.t7={slug:"documentary",title:"Document\xe1rios",items:e.t6},e.next=18,d("discover/movie?with_genres=35&api_key=".concat(m,"&language=pt-BR"));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,d("discover/movie?with_genres=28&api_key=".concat(m,"&language=pt-BR"));case 22:return e.t10=e.sent,e.t11={slug:"action",title:"A\xe7\xe3o",items:e.t10},e.next=26,d("discover/movie?with_genres=27&api_key=".concat(m,"&language=pt-BR"));case 26:return e.t12=e.sent,e.t13={slug:"horror",title:"Terror",items:e.t12},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13]);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=a,e.next="movie"===e.t0?7:"tv"===e.t0?11:5;break;case 5:return n=null,e.abrupt("break",15);case 7:return e.next=9,d("movie/".concat(t,"?language=pt_BR&api_key=").concat(m));case 9:return n=e.sent,e.abrupt("break",15);case 11:return e.next=13,d("tv/".concat(t,"?language=pt_BR&api_key=").concat(m));case 13:return n=e.sent,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},g=(a(19),a(20),a(39)),p=a(40),v=function(e){var t=e.title,a=e.items,i=Object(n.useState)(0),c=Object(u.a)(i,2),s=c[0],l=c[1],o=Object(n.useState)(!1),m=Object(u.a)(o,2),d=m[0],f=m[1];return r.a.createElement("div",{className:"movieRow"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"movieRow-navegate-left",onClick:function(){var e=s+Math.floor(window.innerWidth/2);e>0&&(e=0),l(e)}},r.a.createElement(g.a,{style:{fontSize:50,display:!d&&"none"}})),r.a.createElement("div",{className:"movieRow-navegate-right"},r.a.createElement(p.a,{style:{fontSize:50},onClick:function(){var e=s-Math.round(window.innerWidth/2),t=150*a.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-40),l(e),f(!0)}})),r.a.createElement("div",{className:"movieRow-listarea"},r.a.createElement("div",{className:"movieRow-list",style:{marginLeft:s,width:150*a.results.length}},a.results.length>0&&a.results.map((function(e,t){return r.a.createElement("div",{key:t,className:"film"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title}))})))))},h=(a(25),function(e){var t=e.filme,a=new Date(t.first_air_date),n=[];t.genres.forEach((function(e){n.push(e.name)}));var i=t.overview;return i.lenght>200&&(i=i.substring(0,200)+"..."),r.a.createElement("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")}},r.a.createElement("div",{className:"featured-vertical"},r.a.createElement("div",{className:"featured-horizontal"},r.a.createElement("div",{className:"featured-name"},t.original_name),r.a.createElement("div",{className:"featured-info"},r.a.createElement("div",{className:"featured-points"},t.vote_average),r.a.createElement("div",{className:"featured-year"},a.getFullYear()),r.a.createElement("div",{className:"featured-season"},t.number_of_seasons,1!==t.number_of_seasons?" Temporadas":" Temporada")),r.a.createElement("div",{className:"featured-overview"},i),r.a.createElement("div",{className:"featured-buttons"},r.a.createElement("a",{href:"watch/".concat(t.id),className:"watch-button"},"\u25baAssitir"),r.a.createElement("a",{href:"info/".concat(t.id),className:"info-button"},"Mais informa\xe7\xf5es")),r.a.createElement("div",{className:"featured-genres"},r.a.createElement("strong",null,"G\xeaneros: "),n.join(", ")))))}),E=(a(26),a(41)),b=function(e){var t=e.blackHeader;return r.a.createElement("header",{className:t?"black":""},r.a.createElement("div",{className:"header-logo"},r.a.createElement("a",{href:"localhost:3000"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix"}))),r.a.createElement("div",{className:"header-options"},r.a.createElement("ul",null,r.a.createElement("li",null,"In\xedcio"),r.a.createElement("li",null,"S\xe9ries"),r.a.createElement("li",null,"Filmes"),r.a.createElement("li",null,"Bombando"),r.a.createElement("li",null,"Minha\xa0Lista"))),r.a.createElement("div",{className:"header-user"},r.a.createElement(E.a,null),r.a.createElement("a",{href:"http://localhost:3000/"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Eu"}))))},w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),s=Object(u.a)(c,2),m=s[0],d=s[1],g=Object(n.useState)(!1),p=Object(u.a)(g,2),E=p[0],w=p[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getHomeList();case 2:return t=e.sent,i(t),a=t.filter((function(e){return"originals"===e.slug})),n=Math.floor(Math.random()*(a[0].items.results.length-1)),r=a[0].items.results[n],e.next=9,f.getMovieInfo(r.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=function(){window.scrollY>15?w(!0):w(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),r.a.createElement("div",{className:"page"},a.length<=3&&r.a.createElement("div",{className:"loading"},r.a.createElement("img",{id:"loading-img",src:"https://c.tenor.com/DQyztbEmqnYAAAAC/netflix-loading.gif",alt:"Netlfix"})),r.a.createElement(b,{blackHeader:E}),m&&r.a.createElement(h,{filme:m}),r.a.createElement("section",{className:"lists"},a.map((function(e,t){return r.a.createElement(v,{key:t,title:e.title,items:e.items})}))),r.a.createElement("footer",null,"Feito com ",r.a.createElement("span",{"aria-label":"cora\xe7\xe3o",role:"img"},"\u2764")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.linkedin.com/in/ian-nascimento-11358b203/"}," Clique aqui e me coneh\xe7a "),r.a.createElement("br",null),"Inspirado na Netflix e API do IMDB"))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.40c95bc9.chunk.js.map