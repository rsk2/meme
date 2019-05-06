(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),c=a.n(i),r=(a(16),a(2)),o=a(3),s=a(6),u=a(4),d=a(5);a(17),a(18);var y=function(){return l.a.createElement("header",null,l.a.createElement("p",null,"LCM/GCD Calculator"))},p=a(9),b=a(1),m=(l.a.Component,a(19),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={displayText:"",variableOne:0,variableTwo:0,action:"",clear:!1,historyText:""},e.addToDisplay=e.addToDisplay.bind(Object(b.a)(Object(b.a)(e))),e.clearDisplay=e.clearDisplay.bind(Object(b.a)(Object(b.a)(e))),e.deleteLastChar=e.deleteLastChar.bind(Object(b.a)(Object(b.a)(e))),e.gcd=e.gcd.bind(Object(b.a)(Object(b.a)(e))),e.lcm=e.lcm.bind(Object(b.a)(Object(b.a)(e))),e.result=e.result.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"addToDisplay",value:function(e){var t=e.target.innerText;this.setState(function(e){return e.clear?{displayText:t,clear:!1}:e.displayText.length<10?{displayText:e.displayText+t}:void 0})}},{key:"clearDisplay",value:function(e){this.setState({displayText:""})}},{key:"deleteLastChar",value:function(e){this.setState(function(e){return{displayText:e.displayText.slice(0,-1)}})}},{key:"gcd",value:function(e){this.setState(function(e){return{variableOne:e.displayText,displayText:"",action:"gcd",historyText:e.displayText+" GCD "}})}},{key:"lcm",value:function(e){this.setState(function(e){return{variableOne:e.displayText,displayText:"",action:"lcm",historyText:e.displayText+" LCM "}})}},{key:"calculateGCD",value:function(e,t){if(0===e||0===t)return 0;var a=1;if(e%t===0)a=t;else if(t%e===0)a=e;else for(var n=e>t?t:e,l=2;l<=n&&!(l>=e||l>=t);l++)for(;e%l==0&&t%l==0;)a*=l,e/=l,t/=l;return a}},{key:"calculateLCM",value:function(e,t){var a=1;if(e%t===0)a=e;else if(t%e===0)a=t;else{for(var n=e>t?t:e,l=2;l<=n&&!(l>=e||l>=t);l++)for(;e%l==0&&t%l==0;)a*=l,e/=l,t/=l;a*=e*t}return a}},{key:"result",value:function(e){var t=this;this.setState(function(e){var a=parseInt(e.variableOne);""===e.displayText&&(e.displayText=0);var n=parseInt(e.displayText);if("gcd"===e.action){var l=t.calculateGCD(a,n);return{variableOne:0,displayText:l,clear:!0,action:"",historyText:e.historyText+" "+e.displayText+" = "+l}}if("lcm"==e.action){var i=t.calculateLCM(a,n);return{variableOne:0,displayText:i,clear:!0,action:"",historyText:e.historyText+" "+e.displayText+" = "+i}}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"calculator"},l.a.createElement("input",{type:"text",value:this.state.displayText,className:"display",readOnly:!0}),l.a.createElement("br",null),l.a.createElement("div",{className:"inputBoxes"},l.a.createElement("div",{className:"row"},l.a.createElement("button",{onClick:this.addToDisplay},"1"),l.a.createElement("button",{onClick:this.addToDisplay},"2"),l.a.createElement("button",{onClick:this.addToDisplay},"3"),l.a.createElement("button",{onClick:this.addToDisplay},"4"),l.a.createElement("button",{onClick:this.addToDisplay},"5"),l.a.createElement("button",{onClick:this.clearDisplay},"C")),l.a.createElement("div",{className:"row"},l.a.createElement("button",{onClick:this.addToDisplay},"6"),l.a.createElement("button",{onClick:this.addToDisplay},"7"),l.a.createElement("button",{onClick:this.addToDisplay},"8"),l.a.createElement("button",{onClick:this.addToDisplay},"9"),l.a.createElement("button",{onClick:this.addToDisplay},"0"),l.a.createElement("button",{onClick:this.deleteLastChar}," \u2190 ")),l.a.createElement("div",{className:"row"},l.a.createElement("button",{onClick:this.gcd},"GCD"),l.a.createElement("button",{onClick:this.lcm},"LCM"),l.a.createElement("button",{onClick:this.result,style:{width:"1.28em"}},"="))),l.a.createElement("textarea",{rows:"1",value:this.state.historyText,readOnly:!0,className:"history"}))}}]),t}(l.a.Component)),h=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("p",null))}}]),t}(l.a.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(m,null),l.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.85c81f0e.chunk.js.map