(this.webpackJsonpquote_app=this.webpackJsonpquote_app||[]).push([[0],{10:function(e,t,o){e.exports=o(23)},15:function(e,t,o){},22:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=o(5),c=o.n(r),s=(o(15),o(6)),i=o(7),u=o(9),l=o(8),h=(o(16),o(22),["#ef476f","#f6aa1c","#06d6a0","#118ab2","#073b4c"]),d=function(e){Object(u.a)(o,e);var t=Object(l.a)(o);function o(e){var a;return Object(s.a)(this,o),(a=t.call(this,e)).state={bgColor:"black",quote:"",author:"",image:""},a}return Object(i.a)(o,[{key:"setBackground",value:function(){var e=Math.floor(5*Math.random());this.setState({bgColor:h[e]})}},{key:"getQuote",value:function(){var e=new XMLHttpRequest;e.open("GET","https://thesimpsonsquoteapi.glitch.me/quotes"),e.responseType="json",e.send();var t="";e.onload=function(){var o=this;t=e.response[0],console.log(t.quote);o.setState({quote:t.quote,author:t.character,image:t.image})}.bind(this)}},{key:"componentDidMount",value:function(){var e=document.createElement("script");e.async=!0,e.src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",document.body.appendChild(e),this.getQuote(),this.setBackground()}},{key:"render",value:function(){return document.querySelector("body").style.backgroundColor=this.state.bgColor,document.querySelector("body").style.color=this.state.bgColor,console.log(this.state.image),n.a.createElement("div",null,n.a.createElement("div",{id:"quote-box"},n.a.createElement("img",{src:this.state.image,alt:"new"}),n.a.createElement("div",{className:"text-Space"},n.a.createElement("h1",{id:"text"},'"',this.state.quote,'"'),n.a.createElement("h3",{id:"author"}," -",this.state.author," "))))}}]),o}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0384f4ca.chunk.js.map