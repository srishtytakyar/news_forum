(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{19:function(e,a,t){e.exports=t(31)},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),s=t(7);var i=function(e){var a=e.data;return c.a.createElement("div",{className:"horizontalcards card mb-3 "},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-md-4 "},c.a.createElement("img",{className:"card-img  ",width:"100%",height:"100%",src:null!==a.urlToImage?a.urlToImage:"https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg"})),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"card-body "},c.a.createElement("h4",{className:"card-title"},a.title+". . ."),c.a.createElement("p",{className:"card-text content-color"},null!==a.content?a.content+". . .":"Click below to read about it."),c.a.createElement("p",{className:" text-right "},c.a.createElement("a",{className:"linkstyle",href:a.url},"Read more..."))))))};var m=function(){var e=new Request("http://newsapi.org/v2/top-headlines?country=in&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),l=t[0],r=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var m=l.articles;return console.log(m),c.a.createElement("div",null,m?m.map((function(e){return c.a.createElement(i,{data:e,key:e.url})})):"loading")};var o=function(){return c.a.createElement("div",{className:"  recents-container"},c.a.createElement("div",{className:"recents-heading largetext-font "},c.a.createElement("h2",null," Today's Highlights ")),c.a.createElement("div",{className:"scrollbar"},c.a.createElement("div",{className:"news-section"},c.a.createElement(m,null))))};var u=function(){return c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("div",{className:"interestseccard card "},c.a.createElement("img",{className:"card-img-top",width:"200px",height:"200px",src:"https://picsum.photos/200/200",alt:"picsum"}),c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"text-color-light"},"Card-title")),c.a.createElement("div",{className:"card-body text-light"},c.a.createElement("p",{className:"card-text"},"Lorem ipsum lorem ipsum lorem ipsum lorem"),c.a.createElement("p",{className:" text-right "},c.a.createElement("a",{className:"linkstyle",href:"/"},"Read more...")))))};var d=function(){return c.a.createElement("div",{className:"interests-section"},c.a.createElement("div",{className:"row"},c.a.createElement(u,null),c.a.createElement(u,null),c.a.createElement(u,null)))},E=t(8),h=t(33);var v=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],r=function(){l(!t)},i={hidden:{x:-10,opacity:0},visible:{x:0,opacity:1}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement(h.a,{className:"floating-menu btn-outline-light",onClick:r})),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a.div,{id:"mySidenav",className:"sidenav py-5",initial:"hidden",animate:"visible",variants:{hidden:{width:0},visible:{width:"35vw",transition:{when:"beforeChildren",staggerChildren:.3,delayChildren:.4,type:"tween"}}}},c.a.createElement(E.a.h2,{className:"closebtn",onClick:r},"\xd7"),c.a.createElement(E.a.h3,{variants:i},c.a.createElement("a",{href:"/worldNews"}," WORLD NEWS  ")),c.a.createElement(E.a.h3,{variants:i},c.a.createElement("a",{href:"/business"},"BUSINESS")),c.a.createElement(E.a.h3,{variants:i},c.a.createElement("a",{href:"/technology"},"TECHNOLOGY")),c.a.createElement(E.a.h3,{variants:i},c.a.createElement("a",{href:"/sports"},"SPORTS"))),c.a.createElement(E.a.div,{variants:{hidden:{width:0},visible:{width:"100vw",transition:{type:"tween"}}},initial:"hidden",animate:"visible",className:"overlay",onClick:r})))};var f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement(v,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(d,null)),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement(o,null)))))};var p=function(e){var a=e.data;return c.a.createElement("div",{className:"col "},c.a.createElement("div",{className:"business card "},c.a.createElement("div",{className:"sqrcards"},c.a.createElement("img",{className:"card-img-top",width:"200px",height:"200px",src:null!==a.urlToImage?a.urlToImage:"https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg"}),c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"card-title text-color-light"},a.title+". . .")),c.a.createElement("div",{className:"card-body "},c.a.createElement("p",{className:"cardtext content-color"},null!==a.content?a.content+". . .":"Click below to read about it."),c.a.createElement("p",{className:" text-right "},c.a.createElement("a",{className:"linkstyle",href:a.url},"Read more..."))))))};function g(){var e=new Request("http://newsapi.org/v2/everything?q=business&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),l=t[0],r=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var i=l.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"},i?i.map((function(e){return c.a.createElement(p,{data:e,key:e.url})})):"loading")))}function N(){var e=new Request("http://newsapi.org/v2/everything?q=sports&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),l=t[0],r=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var i=l.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-md-4 "},i?i.map((function(e){return c.a.createElement(p,{data:e,key:e.url})})):"loading")))}function b(){var e=new Request("http://newsapi.org/v2/everything?domains=techcrunch.com&q=technology&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),l=t[0],r=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var i=l.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-md-4 "},i?i.map((function(e){return c.a.createElement(p,{data:e,key:e.url})})):"loading")))}function w(){var e=new Request("http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),l=t[0],r=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var i=l.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-md-4 "},i?i.map((function(e){return c.a.createElement(p,{data:e,key:e.url})})):"loading")))}var y=t(1);var j=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{exact:!0,path:"/",component:f}),c.a.createElement(y.a,{path:"/business",component:g}),c.a.createElement(y.a,{path:"/sports",component:N}),c.a.createElement(y.a,{path:"/worldNews",component:w}),c.a.createElement(y.a,{path:"/technology",component:b})))},x=(t(29),t(30),t(34));var O=function(){return c.a.createElement("div",{className:"sticky-top header text-color-light"},c.a.createElement("div",{className:"d-flex user-header align-items-center"},c.a.createElement("div",{className:"container-fluid d-flex justify-content-between align-items-center"})),c.a.createElement("div",{className:"navigation d-flex align-items-center"},c.a.createElement("div",{className:"container-fluid d-flex justify-content-between align-items-center"},c.a.createElement("div",{className:"header-name"},c.a.createElement("h2",null,"KHABAREIN")),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"search_bar"},c.a.createElement(x.a,{size:32}),c.a.createElement("input",null)),c.a.createElement("div",{className:"d-flex justify-content-evenly menu"})))))};var k=function(){return c.a.createElement("div",{className:"fixed-bottom"},"App lore")},S=t(11);r.a.render(c.a.createElement(S.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null),c.a.createElement(j,null),c.a.createElement(k,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1d0a8c91.chunk.js.map