(self.webpackChunkbigdata=self.webpackChunkbigdata||[]).push([[48],{3905:function(M,t,L){"use strict";L.d(t,{Zo:function(){return I},kt:function(){return S}});var j=L(7294);function N(M,t,L){return t in M?Object.defineProperty(M,t,{value:L,enumerable:!0,configurable:!0,writable:!0}):M[t]=L,M}function u(M,t){var L=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);t&&(j=j.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),L.push.apply(L,j)}return L}function e(M){for(var t=1;t<arguments.length;t++){var L=null!=arguments[t]?arguments[t]:{};t%2?u(Object(L),!0).forEach((function(t){N(M,t,L[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(L)):u(Object(L)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(L,t))}))}return M}function A(M,t){if(null==M)return{};var L,j,N=function(M,t){if(null==M)return{};var L,j,N={},u=Object.keys(M);for(j=0;j<u.length;j++)L=u[j],t.indexOf(L)>=0||(N[L]=M[L]);return N}(M,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(j=0;j<u.length;j++)L=u[j],t.indexOf(L)>=0||Object.prototype.propertyIsEnumerable.call(M,L)&&(N[L]=M[L])}return N}var g=j.createContext({}),i=function(M){var t=j.useContext(g),L=t;return M&&(L="function"==typeof M?M(t):e(e({},t),M)),L},I=function(M){var t=i(M.components);return j.createElement(g.Provider,{value:t},M.children)},T={inlineCode:"code",wrapper:function(M){var t=M.children;return j.createElement(j.Fragment,{},t)}},D=j.forwardRef((function(M,t){var L=M.components,N=M.mdxType,u=M.originalType,g=M.parentName,I=A(M,["components","mdxType","originalType","parentName"]),D=i(L),S=N,n=D["".concat(g,".").concat(S)]||D[S]||T[S]||u;return L?j.createElement(n,e(e({ref:t},I),{},{components:L})):j.createElement(n,e({ref:t},I))}));function S(M,t){var L=arguments,N=t&&t.mdxType;if("string"==typeof M||N){var u=L.length,e=new Array(u);e[0]=D;var A={};for(var g in t)hasOwnProperty.call(t,g)&&(A[g]=t[g]);A.originalType=M,A.mdxType="string"==typeof M?M:N,e[1]=A;for(var i=2;i<u;i++)e[i]=L[i];return j.createElement.apply(null,e)}return j.createElement.apply(null,L)}D.displayName="MDXCreateElement"},5042:function(M,t,L){"use strict";L.r(t),L.d(t,{frontMatter:function(){return e},metadata:function(){return A},toc:function(){return g},default:function(){return I}});var j=L(2122),N=L(9756),u=(L(7294),L(3905)),e={},A={type:"mdx",permalink:"/bigdata-arch/demo",source:"@site/src/pages/demo.md"},g=[{value:"Know about FPS dataset and find the good version",id:"know-about-fps-dataset-and-find-the-good-version",children:[]},{value:"Parts of PA/TA SnR Environments/Machine Functions",id:"parts-of-pata-snr-environmentsmachine-functions",children:[]}],i={toc:g};function I(M){var t=M.components,e=(0,N.Z)(M,["components"]);return(0,u.kt)("wrapper",(0,j.Z)({},i,e,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"wasp-dri-handle-books"},"WASP DRI handle books"),(0,u.kt)("p",null,"This document covers how to handle serious Woodblocks DRI issue including FPS dataset current active version checking, Lego/Topoflow model logs checking, setting force version via FPS and how create IcM ticket to get help from SnR team."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"WASP Super!",src:L(1958).Z})),(0,u.kt)("h2",{id:"know-about-fps-dataset-and-find-the-good-version"},"Know about FPS dataset and find the good version"),(0,u.kt)("p",null,"FPS dataset is an data publish management unit provided by ",(0,u.kt)("a",{parentName:"p",href:"https://fpsmanager.azurewebsites.net"},"FPS"),". Simplly you can think FPS will monitor the dataset's cosmos path and if it find there're a new folder comes, it will transfer the new folder to the AP machines of the configurated AP environment and machine funcation. Below are two major FPS dataset responsible to publish WB PA/TA models. "),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://fpsmanager.azurewebsites.net/#/publish/detail/woodblocksadsfedp_prod"},"woodblocksadsfedp_prod")," - PA",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"serves 19, 50, 52, 58, 59 "))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://fpsmanager.azurewebsites.net/#/publish/detail/woodblocks_prod"},"woodblocks_prod")," - TA",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"serves 31, 41, 56")))),(0,u.kt)("p",null,'Click the above two FPS dataset link to go to the related FPS dataset in FPS management portal. You can click "View" link in the "Subscriptions" table to see the rollout details for the dataset targetting the specific machine functions. And checking the "Publish Versions" list you can decide which version is a good version. Topically, a good version is the second latest data version. You are suggest to go to ',(0,u.kt)("a",{parentName:"p",href:"https://fpsmanager.azurewebsites.net/#/monitor/rollout-status-by-dataset"},"https://fpsmanager.azurewebsites.net/#/monitor/rollout-status-by-dataset")," to check whethe your selected good version happened lots of hours a ago."),(0,u.kt)("h2",{id:"parts-of-pata-snr-environmentsmachine-functions"},"Parts of PA/TA SnR Environments/Machine Functions"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"environtments"),(0,u.kt)("th",{parentName:"tr",align:null},"Machine Functions"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"PA"),(0,u.kt)("td",{parentName:"tr",align:null},"adspasnr1-prod-ch01, adspasnr1-prod-bn01, adspasnr1-prod-co4"),(0,u.kt)("td",{parentName:"tr",align:null},"rankingserver")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"TA"),(0,u.kt)("td",{parentName:"tr",align:null},"adssnr1-prod-ch1b, adssnr1-prod-bn2b"),(0,u.kt)("td",{parentName:"tr",align:null},"WaaS_PS, listingstore_ps")))),(0,u.kt)("p",null,"Just list some parts of the environments/machine functions that host related PA/TA WB model"))}I.isMDXComponent=!0},1958:function(M,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOTkgNTJoODR2MzRIOTl6Ii8+PHBhdGggZD0iTTIzIDE2M2MtNy4zOTggMC0xMy44NDMtNC4wMjctMTcuMzAzLTEwQTE5Ljg4NiAxOS44ODYgMCAwIDAgMyAxNjNjMCAxMS4wNDYgOC45NTQgMjAgMjAgMjBoMjB2LTIwSDIzeiIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGQ9Ik0xMTIuOTggNTcuMzc2TDE4MyA1M1Y0M2MwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMEg3M2wtMi41LTQuMzNjLTEuMTEyLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw2MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw1MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw0MyAyM2MtLjAyMiAwLS4wNDIuMDAzLS4wNjUuMDAzbC00LjE0Mi00LjE0MWMtMS41Ny0xLjU3MS00LjI1Mi0uODUzLTQuODI4IDEuMjk0bC0xLjM2OSA1LjEwNC01LjE5Mi0xLjM5MmMtMi4xNDgtLjU3NS00LjExMSAxLjM4OS0zLjUzNSAzLjUzNmwxLjM5IDUuMTkzLTUuMTAyIDEuMzY3Yy0yLjE0OC41NzYtMi44NjcgMy4yNTktMS4yOTYgNC44M2w0LjE0MiA0LjE0MmMwIC4wMjEtLjAwMy4wNDItLjAwMy4wNjRsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNzNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgODNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgOTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTAzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDExM2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxMjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTMzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDE0M2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTYzYzAgMTEuMDQ2IDguOTU0IDIwIDIwIDIwaDEyMGMxMS4wNDYgMCAyMC04Ljk1NCAyMC0yMFY4M2wtNzAuMDItNC4zNzZBMTAuNjQ1IDEwLjY0NSAwIDAgMSAxMDMgNjhjMC01LjYyMSA0LjM3LTEwLjI3MyA5Ljk4LTEwLjYyNCIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNDMgMTgzaDMwdi00MGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxOTAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNTMgMTIzaDMwdi0yMGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxMTUuNWEyLjUgMi41IDAgMSAwIDAtNWMtLjEwOSAwLS4yMTQuMDE5LS4zMTkuMDMyLS4wMi0uMDc1LS4wMzctLjE1LS4wNTgtLjIyNWEyLjUwMSAyLjUwMSAwIDAgMC0uOTYzLTQuODA3Yy0uNTY5IDAtMS4wODguMTk3LTEuNTA4LjUxOGE2LjY1MyA2LjY1MyAwIDAgMC0uMTY4LS4xNjhjLjMxNC0uNDE3LjUwNi0uOTMxLjUwNi0xLjQ5NGEyLjUgMi41IDAgMCAwLTQuOC0uOTc5QTkuOTg3IDkuOTg3IDAgMCAwIDE4MyAxMDNjLTUuNTIyIDAtMTAgNC40NzgtMTAgMTBzNC40NzggMTAgMTAgMTBjLjkzNCAwIDEuODMzLS4xMzggMi42OS0uMzc3YTIuNSAyLjUgMCAwIDAgNC44LS45NzljMC0uNTYzLS4xOTItMS4wNzctLjUwNi0xLjQ5NC4wNTctLjA1NS4xMTMtLjExMS4xNjgtLjE2OC40Mi4zMjEuOTM5LjUxOCAxLjUwOC41MThhMi41IDIuNSAwIDAgMCAuOTYzLTQuODA3Yy4wMjEtLjA3NC4wMzgtLjE1LjA1OC0uMjI1LjEwNS4wMTMuMjEuMDMyLjMxOS4wMzIiIGZpbGw9IiM0NEQ4NjAiLz48cGF0aCBkPSJNNjMgNTUuNWEyLjUgMi41IDAgMCAxLTIuNS0yLjVjMC00LjEzNi0zLjM2NC03LjUtNy41LTcuNXMtNy41IDMuMzY0LTcuNSA3LjVhMi41IDIuNSAwIDEgMS01IDBjMC02Ljg5MyA1LjYwNy0xMi41IDEyLjUtMTIuNVM2NS41IDQ2LjEwNyA2NS41IDUzYTIuNSAyLjUgMCAwIDEtMi41IDIuNSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xMDMgMTgzaDYwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwVjkzaC02MGMtMTEuMDQ2IDAtMjAgOC45NTQtMjAgMjB2NzB6IiBmaWxsPSIjRkZGRjUwIi8+PHBhdGggZD0iTTE2OC4wMiAxMjRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAyMGgtNTAuMDRhMSAxIDAgMSAxIDAtMmg1MC4wNGExIDEgMCAxIDEgMCAybTAtNDkuODE0aC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAxOS44MTRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJNMTgzIDYxLjYxMWMtLjAxMiAwLS4wMjItLjAwNi0uMDM0LS4wMDUtMy4wOS4xMDUtNC41NTIgMy4xOTYtNS44NDIgNS45MjMtMS4zNDYgMi44NS0yLjM4NyA0LjcwMy00LjA5MyA0LjY0Ny0xLjg4OS0uMDY4LTIuOTY5LTIuMjAyLTQuMTEzLTQuNDYtMS4zMTQtMi41OTQtMi44MTQtNS41MzYtNS45NjMtNS40MjYtMy4wNDYuMTA0LTQuNTEzIDIuNzk0LTUuODA3IDUuMTY3LTEuMzc3IDIuNTI4LTIuMzE0IDQuMDY1LTQuMTIxIDMuOTk0LTEuOTI3LS4wNy0yLjk1MS0xLjgwNS00LjEzNi0zLjgxMy0xLjMyMS0yLjIzNi0yLjg0OC00Ljc1LTUuOTM2LTQuNjY0LTIuOTk0LjEwMy00LjQ2NSAyLjM4NS01Ljc2MyA0LjQtMS4zNzMgMi4xMy0yLjMzNSAzLjQyOC00LjE2NSAzLjM1MS0xLjk3My0uMDctMi45OTItMS41MS00LjE3MS0zLjE3Ny0xLjMyNC0xLjg3My0yLjgxNi0zLjk5My01Ljg5NS0zLjg5LTIuOTI4LjEtNC4zOTkgMS45Ny01LjY5NiAzLjYxOC0xLjIzMiAxLjU2NC0yLjE5NCAyLjgwMi00LjIyOSAyLjcyNGExIDEgMCAwIDAtLjA3MiAyYzMuMDE3LjEwMSA0LjU0NS0xLjggNS44NzItMy40ODcgMS4xNzctMS40OTYgMi4xOTMtMi43ODcgNC4xOTMtMi44NTUgMS45MjYtLjA4MiAyLjgyOSAxLjExNSA0LjE5NSAzLjA0NSAxLjI5NyAxLjgzNCAyLjc2OSAzLjkxNCA1LjczMSA0LjAyMSAzLjEwMy4xMDQgNC41OTYtMi4yMTUgNS45MTgtNC4yNjcgMS4xODItMS44MzQgMi4yMDItMy40MTcgNC4xNS0zLjQ4NCAxLjc5My0uMDY3IDIuNzY5IDEuMzUgNC4xNDUgMy42ODEgMS4yOTcgMi4xOTcgMi43NjYgNC42ODYgNS43ODcgNC43OTYgMy4xMjUuMTA4IDQuNjM0LTIuNjIgNS45NDktNS4wMzUgMS4xMzktMi4wODggMi4yMTQtNC4wNiA0LjExOS00LjEyNiAxLjc5My0uMDQyIDIuNzI4IDEuNTk1IDQuMTExIDQuMzMgMS4yOTIgMi41NTMgMi43NTcgNS40NDUgNS44MjUgNS41NTZsLjE2OS4wMDNjMy4wNjQgMCA0LjUxOC0zLjA3NSA1LjgwNS01Ljc5NCAxLjEzOS0yLjQxIDIuMjE3LTQuNjggNC4wNjctNC43NzN2LTJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbD0iIzNFQ0M1RiIgZD0iTTgzIDE4M2g0MHYtNDBIODN6Ii8+PHBhdGggZD0iTTE0MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxNDAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik04MyAxMjNoNDB2LTIwSDgzeiIvPjxwYXRoIGQ9Ik0xMzMgMTE1LjVhMi41IDIuNSAwIDEgMCAwLTVjLS4xMDkgMC0uMjE0LjAxOS0uMzE5LjAzMi0uMDItLjA3NS0uMDM3LS4xNS0uMDU4LS4yMjVhMi41MDEgMi41MDEgMCAwIDAtLjk2My00LjgwN2MtLjU2OSAwLTEuMDg4LjE5Ny0xLjUwOC41MThhNi42NTMgNi42NTMgMCAwIDAtLjE2OC0uMTY4Yy4zMTQtLjQxNy41MDYtLjkzMS41MDYtMS40OTRhMi41IDIuNSAwIDAgMC00LjgtLjk3OUE5Ljk4NyA5Ljk4NyAwIDAgMCAxMjMgMTAzYy01LjUyMiAwLTEwIDQuNDc4LTEwIDEwczQuNDc4IDEwIDEwIDEwYy45MzQgMCAxLjgzMy0uMTM4IDIuNjktLjM3N2EyLjUgMi41IDAgMCAwIDQuOC0uOTc5YzAtLjU2My0uMTkyLTEuMDc3LS41MDYtMS40OTQuMDU3LS4wNTUuMTEzLS4xMTEuMTY4LS4xNjguNDIuMzIxLjkzOS41MTggMS41MDguNTE4YTIuNSAyLjUgMCAwIDAgLjk2My00LjgwN2MuMDIxLS4wNzQuMDM4LS4xNS4wNTgtLjIyNS4xMDUuMDEzLjIxLjAzMi4zMTkuMDMyIiBmaWxsPSIjNDREODYwIi8+PHBhdGggZD0iTTE0MyA0MS43NWMtLjE2IDAtLjMzLS4wMi0uNDktLjA1YTIuNTIgMi41MiAwIDAgMS0uNDctLjE0Yy0uMTUtLjA2LS4yOS0uMTQtLjQzMS0uMjMtLjEzLS4wOS0uMjU5LS4yLS4zOC0uMzEtLjEwOS0uMTItLjIxOS0uMjQtLjMwOS0uMzhzLS4xNy0uMjgtLjIzMS0uNDNhMi42MTkgMi42MTkgMCAwIDEtLjE4OS0uOTZjMC0uMTYuMDItLjMzLjA1LS40OS4wMy0uMTYuMDgtLjMxLjEzOS0uNDcuMDYxLS4xNS4xNDEtLjI5LjIzMS0uNDMuMDktLjEzLjItLjI2LjMwOS0uMzguMTIxLS4xMS4yNS0uMjIuMzgtLjMxLjE0MS0uMDkuMjgxLS4xNy40MzEtLjIzLjE0OS0uMDYuMzEtLjExLjQ3LS4xNC4zMi0uMDcuNjUtLjA3Ljk4IDAgLjE1OS4wMy4zMi4wOC40Ny4xNC4xNDkuMDYuMjkuMTQuNDMuMjMuMTMuMDkuMjU5LjIuMzguMzEuMTEuMTIuMjIuMjUuMzEuMzguMDkuMTQuMTcuMjguMjMuNDMuMDYuMTYuMTEuMzEuMTQuNDcuMDI5LjE2LjA1LjMzLjA1LjQ5IDAgLjY2LS4yNzEgMS4zMS0uNzMgMS43Ny0uMTIxLjExLS4yNS4yMi0uMzguMzEtLjE0LjA5LS4yODEuMTctLjQzLjIzYTIuNTY1IDIuNTY1IDAgMCAxLS45Ni4xOW0yMC0xLjI1Yy0uNjYgMC0xLjMtLjI3LTEuNzcxLS43M2EzLjgwMiAzLjgwMiAwIDAgMS0uMzA5LS4zOGMtLjA5LS4xNC0uMTctLjI4LS4yMzEtLjQzYTIuNjE5IDIuNjE5IDAgMCAxLS4xODktLjk2YzAtLjY2LjI3LTEuMy43MjktMS43Ny4xMjEtLjExLjI1LS4yMi4zOC0uMzEuMTQxLS4wOS4yODEtLjE3LjQzMS0uMjMuMTQ5LS4wNi4zMS0uMTEuNDctLjE0LjMyLS4wNy42Ni0uMDcuOTggMCAuMTU5LjAzLjMyLjA4LjQ3LjE0LjE0OS4wNi4yOS4xNC40My4yMy4xMy4wOS4yNTkuMi4zOC4zMS40NTkuNDcuNzMgMS4xMS43MyAxLjc3IDAgLjE2LS4wMjEuMzMtLjA1LjQ5LS4wMy4xNi0uMDguMzItLjE0LjQ3LS4wNy4xNS0uMTQuMjktLjIzLjQzLS4wOS4xMy0uMi4yNi0uMzEuMzgtLjEyMS4xMS0uMjUuMjItLjM4LjMxLS4xNC4wOS0uMjgxLjE3LS40My4yM2EyLjU2NSAyLjU2NSAwIDAgMS0uOTYuMTkiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"}}]);