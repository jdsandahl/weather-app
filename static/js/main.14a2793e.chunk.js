(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(54)},38:function(e,t,a){},39:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a(2),o=a(4),i=a.n(o),l=(a(38),function(e){var t=e.city,a=e.country;return c.a.createElement("h1",{className:"location-details"},"".concat(t,", ").concat(a))}),m=(a(39),a(15)),u=a.n(m),d=a(3),f=a.n(d),p=function(e){var t=e.date,a=e.icon,n=e.temperature,r=e.description,s=e.onSelect;return c.a.createElement("div",{className:"forecast-summary"},c.a.createElement("div",{className:"date","data-testid":"date-id"},c.a.createElement("span",null,f()(t).format("ddd Do MMM"))),c.a.createElement("div",{className:"icon","data-testid":"icon-id"},c.a.createElement(u.a,{name:"owm",iconId:a})),c.a.createElement("div",{className:"temperature","data-testid":"temperature-id"},c.a.createElement("span",null,n,"\xb0c")),c.a.createElement("div",{className:"description","data-testid":"description-id"},c.a.createElement("span",null,r)),c.a.createElement("button",{onClick:function(){return s(t)}},"More Details"))},E=(a(50),function(e){return c.a.createElement("div",{className:"forecast-list"},e.forecasts.map((function(t){var a=t.date,n=t.description,r=t.icon,s=t.temperature.max;return c.a.createElement(p,{key:a,date:a,description:n,icon:r,temperature:s,onSelect:e.onForecastSelect})})))}),h=(a(51),a(52),function(e){return c.a.createElement("div",{className:"forecast-details"},c.a.createElement("div",{className:"date"},c.a.createElement("h3",null,f()(e.forecasts.date).format("ddd Do MMM y"))),c.a.createElement("div",{className:"max-temperature"},c.a.createElement("span",null,"Max Temperature: ",e.forecasts.temperature.max,"\xb0c")),c.a.createElement("div",{className:"min-temperature"},c.a.createElement("span",null,"Min Temperature: ",e.forecasts.temperature.min,"\xb0c")),c.a.createElement("div",{className:"humidity"},c.a.createElement("span",null,"Humidity: ",e.forecasts.humidity,"%")),c.a.createElement("div",{className:"wind-speed"},c.a.createElement("span",null,"Wind: ",e.forecasts.wind.speed,"mph ",e.forecasts.wind.direction)))}),v=(a(53),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1];return c.a.createElement("div",{className:"search-form"},c.a.createElement("div",{className:"search-instruction"},c.a.createElement("p",{className:""},"Check a different city:")),c.a.createElement("input",{type:"text",value:r,onChange:function(e){o(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(){return e.onCitySearch(r)}},"Search"))}),y=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)([]),u=Object(s.a)(m,2),d=u[0],f=u[1],p=Object(n.useState)({city:"",country:""}),y=Object(s.a)(p,2),N=y[0],b=y[1],S=Object(n.useState)(!1),j=Object(s.a)(S,2),O=j[0],w=j[1],g=Object(n.useState)(null),M=Object(s.a)(g,2),k=M[0],C=M[1];Object(n.useEffect)((function(){w(!0),C(null),i.a.get("https://mcr-codes-weather.herokuapp.com/forecast").then((function(e){f(e.data.forecasts),b(e.data.location),w(!1)}))}),[]);var x=function(e){var t=e.toLowerCase();w(!0),C(null),i.a.get("https://mcr-codes-weather.herokuapp.com/forecast?city=".concat(t)).then((function(e){f(e.data.forecasts),b(e.data.location),w(!1)})).catch((function(e){e.response?C("".concat(e.message,": The city entered was not found")):e.request?C("".concat(e.message,": Server error")):C(e.message),w(!1)}))},D=d.find((function(e){return e.date===r}));return O&&!k?c.a.createElement("div",{className:"forecast"},c.a.createElement("h1",{className:"appLoading"},"Loading the weather...")):c.a.createElement("div",{className:"forecast"},k&&c.a.createElement("div",null,c.a.createElement("h2",{className:"error-message"},k),c.a.createElement(v,{onCitySearch:x})),!O&&!k&&c.a.createElement("div",null,c.a.createElement(l,{city:N.city,country:N.country}),c.a.createElement(v,{onCitySearch:x}),c.a.createElement(E,{forecasts:d,onForecastSelect:function(e){o(e)}}),D&&c.a.createElement(h,{forecasts:D})))};Object(r.render)(c.a.createElement(y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14a2793e.chunk.js.map