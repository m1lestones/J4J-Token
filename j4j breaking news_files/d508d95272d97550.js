(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,507324,t=>{"use strict";var e=t.i(942765);t.i(281675);var a=t.i(689391);let r="#4fa94d",s={"aria-busy":!0,role:"progressbar"},i=a.default.div`
  display: ${t=>t.$visible?"flex":"none"};
`,o=(0,a.keyframes)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;a.default.path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${o} ${1.6}s linear infinite;
`;let n=({height:t=80,width:a=80,color:o=r,secondaryColor:n=r,ariaLabel:d="oval-loading",wrapperStyle:l,wrapperClass:h,visible:c=!0,strokeWidth:p=2,strokeWidthSecondary:f})=>{var k,y;let u,m,x;return(0,e.jsx)(i,{style:l,$visible:c,className:h,"data-testid":"oval-loading","aria-label":d,...s,children:(0,e.jsx)("svg",{width:a,height:t,viewBox:(k=Number(p),y=Number(f||p),m=-20-(u=Math.max(k,y))/2+1,[m,m,x=40+u,x].join(" ")),xmlns:"http://www.w3.org/2000/svg",stroke:o,"data-testid":"oval-svg",children:(0,e.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,e.jsxs)("g",{transform:"translate(1 1)",strokeWidth:Number(f||p),"data-testid":"oval-secondary-group",children:[(0,e.jsx)("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:n,strokeWidth:p}),(0,e.jsx)("path",{d:"M20 0c0-9.94-8.06-20-20-20",children:(0,e.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})})},d=(0,a.keyframes)`
to {
   transform: rotate(360deg);
 }
`;a.default.svg`
  animation: ${d} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,a.default.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let l=(0,a.keyframes)`
to {
   stroke-dashoffset: 136;
 }
`;a.default.polygon`
  stroke-dasharray: 17;
  animation: ${l} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,a.default.svg`
  transform-origin: 50% 65%;
`,t.s(["Oval",()=>n])}]);