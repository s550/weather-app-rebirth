(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=a(59),s=(a(32),a(6)),i=a(7),m=a(9),u=a(8),d=a(10),h=(a(34),a(61)),p=a(60),y=a(58),f=a(11),E=a.n(f),w=a(15),v=a.n(w),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],currently:[],weekly:[],forcast:null,dTemp:[],wTemp:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.weatherReport()}},{key:"weatherReport",value:function(e,t){var a=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){E.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3b84024871aef976d646f09db58974da/"+e.coords.latitude+","+e.coords.longitude).then(function(e){console.log(e),a.setState({dTemp:e.data.currently.temperature,data:e.data,currently:e.data.currently,weekly:e.data.daily.data,forcast:e.data.daily.summary},function(){console.log(this.state)})}).catch(function(e){console.log(e)})})}},{key:"showTemp",value:function(e){this.setState({dTemp:e},this.weatherReport)}},{key:"render",value:function(){Math.round(this.state.currently.temperature),v()(this.state.weekly.time).fromNow();var e=this.state.weekly.map(function(e){return r.a.createElement("div",{key:e.time,className:"top"},r.a.createElement("div",{className:"card card-weekly"},r.a.createElement("header",{className:"card-header"},r.a.createElement("h1",{className:"day card-header-title"},v.a.unix(e.time).format("ddd"))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("i",{className:"mini-top wi wi-forecast-io-".concat(e.icon)})),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"sum"},e.summary))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("p",{className:"desc card-footer-item"},"High: ",Math.round(e.temperatureHigh),"\xb0"),r.a.createElement("p",{className:"desc card-footer-item"},"Low: ",Math.round(e.temperatureLow),"\xb0"))))});return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"return"},r.a.createElement(y.a,{className:"return",to:"/"},"Return to Daily View")),r.a.createElement("div",{className:"parent"},e))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],currently:[],weekly:[],forcast:null,dTemp:[],wTemp:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.weatherReport()}},{key:"weatherReport",value:function(e,t){var a=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){E.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3b84024871aef976d646f09db58974da/"+e.coords.latitude+","+e.coords.longitude).then(function(e){console.log(e),a.setState({dTemp:e.data.currently.temperature,data:e.data,currently:e.data.currently,weekly:e.data.daily.data,forcast:e.data.daily.summary},function(){console.log(this.state)})}).catch(function(e){console.log(e)})})}},{key:"showTemp",value:function(e){this.setState({dTemp:e},this.weatherReport)}},{key:"render",value:function(){var e=Math.round(this.state.currently.temperature);(new Date).toLocaleDateString();return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column main-top"},r.a.createElement("div",{className:"card card-logic"},r.a.createElement("header",{className:"card-header"},r.a.createElement("h1",{className:"card-header-title"},"Right Now: ")),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("i",{className:"center-main wi wi-forecast-io-".concat(this.state.currently.icon)}),r.a.createElement("h1",{className:"daily"},e,"\xb0")),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:""},this.state.data.timezone),r.a.createElement("h4",null,r.a.createElement("span",{className:""},"Current Conditions: "),this.state.currently.summary),r.a.createElement("h4",null,r.a.createElement("span",null,"Humidity: "),Math.round(100*this.state.currently.humidity),"%"),r.a.createElement("h4",null,r.a.createElement("span",null,"Dew Point: "),Math.round(this.state.currently.dewPoint),"\xb0"))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("h4",{className:"adj card-footer-item"},r.a.createElement(y.a,{className:"bttn",to:"/days"},"Weekly Forcast"))))))}}]),t}(n.Component),k=function(){return r.a.createElement("main",null,r.a.createElement(l.a,{basename:"/weather-app-rebirth"},r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:g}),r.a.createElement(p.a,{path:"/days",component:N}))))},b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.bf57c9eb.chunk.js.map