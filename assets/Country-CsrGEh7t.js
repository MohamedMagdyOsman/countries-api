import{G as d,r as e,x as p,w as x,j as s}from"./index-CGTVkUse.js";function u(a){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"},child:[]}]})(a)}function m(){const[a,c]=e.useState({}),{name:n}=p(),r=x(),o=()=>{r(-1)};return e.useEffect(()=>{async function l(){try{const i=await(await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(n)}?fullText=true`)).json();c(i[0])}catch(t){console.error("Error fetching country data:",t)}}l()},[n]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"container",children:[s.jsxs("button",{className:"btn btn-primary mb-4 shadow-sm back-button",onClick:o,children:[s.jsx(u,{className:"icon"})," Back"]}),Object.keys(a).length>0?s.jsxs("div",{className:"d-flex flex-column flex-md-row gap-5 gap-md-0 justify-content-between country-data ",children:[a.flags&&s.jsx("img",{src:a.flags.png,alt:a.flags.alt,className:"country-flag",loading:"lazy"}),s.jsxs("div",{className:"text",children:[a.name&&s.jsx("h3",{children:a.name.common}),s.jsxs("p",{children:["Population: ",s.jsx("span",{children:a.population})]}),s.jsxs("p",{children:["Region: ",s.jsx("span",{children:a.region})]}),s.jsxs("p",{children:["Subregion: ",s.jsx("span",{children:a.subregion})]}),a.tld&&s.jsxs("p",{children:["Top Level Domain: ",s.jsx("span",{children:a.tld[0]})]}),a.capital&&s.jsxs("p",{children:["Capital: ",s.jsx("span",{children:a.capital[0]})]})]})]}):s.jsx("p",{children:"Loading..."})]})})}export{m as default};
