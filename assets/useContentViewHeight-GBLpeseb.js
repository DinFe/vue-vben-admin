var h=(t,i,e)=>new Promise((a,o)=>{var H=n=>{try{u(e.next(n))}catch(s){o(s)}},m=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?a(n.value):Promise.resolve(n.value).then(H,m);u((e=e.apply(t,i)).next())});import{x as w}from"./entry/index-BoR6xJVt-1715568906032.js";import{u as d}from"./useWindowSizeFn-DYxWZ0vQ.js";import{f as r,c as p,u as c}from"./vue-BjERyvPm.js";const l=Symbol();function v(t){return w(t,l,{native:!0})}const g=r(0),f=r(0);function P(){function t(e){g.value=e}function i(e){f.value=e}return{headerHeightRef:g,footerHeightRef:f,setHeaderHeight:t,setFooterHeight:i}}function R(){const t=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>c(t)-c(g)-c(f)||0);d(()=>{t.value=window.innerHeight},{wait:100,immediate:!0});function a(o){return h(this,null,function*(){i.value=o})}v({contentHeight:e,setPageHeight:a,pageHeight:i})}export{R as a,P as u};
