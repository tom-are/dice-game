(this.webpackJsonpdice=this.webpackJsonpdice||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.0d580b38.svg"},,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),o=t.n(c),l=(t(15),t(8)),i=t.n(l),s=t(3),m=(t(16),t(9)),u=t(2),d=new Map([[1,u.c],[2,u.f],[3,u.e],[4,u.b],[5,u.a],[6,u.d]]),f=function(e){var a=e.number,t=e.className,n=function(e){var a=Math.floor(e),t=Math.min(a,6);return Math.max(1,t)}(a),c=d.get(n);return r.a.createElement(m.a,{className:t,"data-testid":"die-".concat(n),icon:c,color:"#1cb2e7",size:"6x"})};f.defaultProps={className:""};var b=f,v=function(e){var a=e.name,t=e.roll,n=e.wins,c=e.winner;return r.a.createElement("div",{className:"Player"},r.a.createElement("div",null,r.a.createElement("strong",null,a)),r.a.createElement(b,{number:t,className:c?"Player__die--winner":"Player__die"}),r.a.createElement("div",null,"Wins: ",n))};v.defaultProps={roll:0,wins:0,winner:!1};var E=v,p=(t(22),function(){return Math.floor(6*Math.random())+1});var w=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([1,1]),l=Object(s.a)(o,2),i=l[0],m=l[1],u=Object(n.useState)([0,0]),d=Object(s.a)(u,2),f=d[0],b=d[1],v=Object(n.useState)("Let's go!"),w=Object(s.a)(v,2),h=w[0],g=w[1],O=Object(s.a)(f,2),_=O[0],j=O[1],N=Object(s.a)(i,2),y=N[0],M=N[1];return Object(n.useEffect)((function(){0!==t?y!==M?y>M?(b([_+1,j]),g("You won!")):(b([_,j+1]),g("You lost...")):g("It's a draw..."):g("Let's go!")}),[t]),r.a.createElement("div",{className:"Game"},r.a.createElement("div",{className:"Game__Players"},r.a.createElement(E,{name:"You",roll:y,wins:_,winner:y>M}),r.a.createElement(E,{name:"Computer",roll:M,wins:j,winner:M>y})),r.a.createElement("div",{className:"Game__footer"},r.a.createElement("h1",null,h),r.a.createElement("button",{type:"button","data-testid":"playRound",className:"Game__button",onClick:function(){m([p(),p()]),c(t+1)}},"Roll dice!")))};t(23);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header","data-testid":"app-header"},r.a.createElement("img",{src:i.a,alt:"Origami Energy"})),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.274bd0fc.chunk.js.map