(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),c=n.n(l),r=(n(16),n(2)),m=n(3),i=n(6),s=n(4),u=n(5);n(17),n(18);var h=function(){return o.a.createElement("header",null,o.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"}),o.a.createElement("p",null,"Meme Generator"))},p=n(9),g=n(1),d=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(g.a)(Object(g.a)(e))),e.genMeme=e.genMeme.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var n=t.data.memes;console.log(n),e.setState({allMemeImgs:n})})}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(p.a)({},n,a))}},{key:"genMeme",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*(this.state.allMemeImgs.length-1)),n=this.state.allMemeImgs[t].url;console.log("url",n),this.setState({randomImage:n})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"meme-form"},o.a.createElement("label",null,"Top Text",o.a.createElement("input",{type:"text",name:"topText",value:this.state.topText,onChange:this.handleChange})),o.a.createElement("label",null,"Bottom Text",o.a.createElement("input",{type:"text",name:"bottomText",value:this.state.bottomText,onChange:this.handleChange})),o.a.createElement("button",{onClick:this.genMeme},"Gen")),o.a.createElement("div",{className:"meme"},o.a.createElement("img",{src:this.state.randomImage,alt:""}),o.a.createElement("h2",{className:"top"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),t}(o.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"container"},o.a.createElement("p",null))}}]),t}(o.a.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(d,null),o.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.ffe47255.chunk.js.map