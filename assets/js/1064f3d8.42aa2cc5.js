"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[2180],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?t.createElement(d,c(c({ref:n},s),{},{components:r})):t.createElement(d,c({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6902:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={},u="/info/reserve",l={unversionedId:"Api/REST/Blockchain/inforeserve",id:"Api/REST/Blockchain/inforeserve",title:"/info/reserve",description:"Request Type: GET",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Api/REST/Blockchain/inforeserve.md",sourceDirName:"Api/REST/Blockchain",slug:"/Api/REST/Blockchain/inforeserve",permalink:"/Api/REST/Blockchain/inforeserve",draft:!1,editUrl:"https://github.com/notus-labs/docs/tree/main/docs/Api/REST/Blockchain/inforeserve.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"/info/transfer",permalink:"/Api/REST/Blockchain/infotransfer"},next:{title:"/balance/{walletKey}",permalink:"/Api/REST/Wallet/balance"}},s={},p=[{value:"Response",id:"response",level:2}],f={toc:p};function m(e){var n=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inforeserve"},"/info/reserve"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request Type: GET")),(0,i.kt)("p",null,"Returns the reserved amount of Notus Token."),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "Value": 100000000000000000, "Total": 0, "Digit": 0, "Decimal": 9 }\n')))}m.isMDXComponent=!0}}]);