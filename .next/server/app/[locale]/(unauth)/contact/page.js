(()=>{var e={};e.id=795,e.ids=[795],e.modules={7535:(e,r,t)=>{var s={"./en.json":[1737,737],"./es.json":[5111,111]};function a(e){if(!t.o(s,e))return Promise.resolve().then(()=>{var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r});var r=s[e],a=r[0];return t.e(r[1]).then(()=>t.t(a,19))}a.keys=()=>Object.keys(s),a.id=7535,e.exports=a},7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5058:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.ZP,__next_app__:()=>u,originalPathname:()=>d,pages:()=>c,routeModule:()=>x,tree:()=>i});var s=t(482),a=t(9108),n=t(3543),l=t(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(r,o);let i=["",{children:["[locale]",{children:["(unauth)",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5926)),"/Users/Elisa/Desktop/work/obralink/app/obralink-web/src/app/[locale]/(unauth)/contact/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,1921)),"/Users/Elisa/Desktop/work/obralink/app/obralink-web/src/app/[locale]/(unauth)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,6985)),"/Users/Elisa/Desktop/work/obralink/app/obralink-web/src/app/[locale]/layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/Elisa/Desktop/work/obralink/app/obralink-web/src/app/[locale]/(unauth)/contact/page.tsx"],d="/[locale]/(unauth)/contact/page",u={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/(unauth)/contact/page",pathname:"/[locale]/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},9048:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},2850:(e,r,t)=>{Promise.resolve().then(t.bind(t,3283)),Promise.resolve().then(t.t.bind(t,1900,23))},754:(e,r,t)=>{Promise.resolve().then(t.bind(t,3283)),Promise.resolve().then(t.t.bind(t,1476,23)),Promise.resolve().then(t.bind(t,6318))},9281:(e,r,t)=>{Promise.resolve().then(t.bind(t,3283))},466:(e,r,t)=>{Promise.resolve().then(t.bind(t,6534))},6534:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(5344),a=t(3778),n=t(6886),l=t.n(n),o=t(3729);function i(e){return(0,o.useEffect)(()=>{a.Tb(e.error)},[e.error]),s.jsx("html",{lang:e.params.locale,children:s.jsx("body",{children:s.jsx(l(),{statusCode:void 0})})})}},6318:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(5344),a=t(3877),n=t(8646);let l={locales:["en","es"],localePrefix:"as-needed"},{usePathname:o,useRouter:i}=(0,n.iV)({locales:l.locales,localePrefix:l.localePrefix});function c(){let e=i(),r=o(),t=(0,a.useLocale)();return s.jsx("select",{defaultValue:t,onChange:t=>{e.push(r,{locale:t.target.value}),e.refresh()},className:"border border-gray-300 font-medium focus:outline-none focus-visible:ring",children:l.locales.map(e=>s.jsx("option",{value:e,children:e.toUpperCase()},e))})}},5926:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,generateMetadata:()=>o});var s=t(5036),a=t(2813),n=t(979),l=t(3285);async function o(e){let r=await (0,l.Z)({locale:e.params.locale,namespace:"About"});return{title:r("meta_title"),description:r("meta_description")}}function i(){let e=(0,n.Z)("About");return(0,s.jsxs)(s.Fragment,{children:[s.jsx("p",{children:e("about_paragraph")}),(0,s.jsxs)("div",{className:"mt-2 text-center text-sm",children:[`${e("translation_powered_by")} `,s.jsx("a",{className:"text-blue-700 hover:border-b-2 hover:border-blue-700",href:"https://l.crowdin.com/next-js",target:"_blank",children:"Crowdin"})]}),s.jsx("a",{href:"https://l.crowdin.com/next-js",target:"_blank",children:s.jsx(a.default,{className:"mx-auto mt-2",src:"https://support.crowdin.com/assets/logos/core-logo/svg/crowdin-core-logo-cDark.svg",alt:"Crowdin Translation Management System",width:130,height:112})})]})}},1921:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var s=t(5036),a=t(6274),n=t(979);let l=(0,t(6843).createProxy)(String.raw`/Users/Elisa/Desktop/work/obralink/app/obralink-web/src/components/LocaleSwitcher.tsx`),{__esModule:o,$$typeof:i}=l,c=l.default;var d=t(2595);let u=e=>{let r=(0,n.Z)("BaseTemplate");return s.jsx("div",{className:"w-full px-1 text-gray-700 antialiased",children:(0,s.jsxs)("div",{className:"mx-auto max-w-screen-md",children:[(0,s.jsxs)("header",{className:"border-b border-gray-300",children:[(0,s.jsxs)("div",{className:"pb-8 pt-16",children:[s.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:d.X.name}),s.jsx("h2",{className:"text-xl",children:r("description")})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("nav",{children:s.jsx("ul",{className:"flex flex-wrap gap-x-5 text-xl",children:e.leftNav})}),s.jsx("nav",{children:s.jsx("ul",{className:"flex flex-wrap gap-x-5 text-xl",children:e.rightNav})})]})]}),s.jsx("main",{children:e.children}),(0,s.jsxs)("footer",{className:"border-t border-gray-300 py-8 text-center text-sm",children:["\xa9 Copyright ",new Date().getFullYear()," ",d.X.name,".",` ${r("made_with")} `,s.jsx("a",{href:"https://creativedesignsguru.com",className:"text-blue-700 hover:border-b-2 hover:border-blue-700",children:"CreativeDesignsGuru"}),"."]})]})})};function x(e){let r=(0,n.Z)("RootLayout");return s.jsx(u,{leftNav:(0,s.jsxs)(s.Fragment,{children:[s.jsx("li",{children:s.jsx(a.default,{href:"/",className:"border-none text-gray-700 hover:text-gray-900",children:r("home_link")})}),s.jsx("li",{children:s.jsx(a.default,{href:"/contact/",className:"border-none text-gray-700 hover:text-gray-900",children:r("contact_link")})}),s.jsx("li",{children:s.jsx(a.default,{href:"/products/",className:"border-none text-gray-700 hover:text-gray-900",children:r("products_link")})})]}),rightNav:s.jsx("li",{children:s.jsx(c,{})}),children:s.jsx("div",{className:"py-5 text-xl [&_p]:my-6",children:e.children})})}},6985:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c,metadata:()=>i});var s=t(5036);t(2155);var a=t(867),n=t(8353),l=t(9415),o=t(2595);let i={icons:[{rel:"apple-touch-icon",url:"/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",url:"/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",url:"/favicon-16x16.png"},{rel:"icon",url:"/favicon.ico"}]};function c(e){o.X.locales.includes(e.params.locale)||(0,a.notFound)();let r=(0,n.Z)();return s.jsx("html",{lang:e.params.locale,children:s.jsx("body",{children:s.jsx(l.Z,{locale:e.params.locale,messages:r,children:e.children})})})}},3543:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>l});let s=(0,t(6843).createProxy)(String.raw`/Users/Elisa/Desktop/work/obralink/app/obralink-web/src/app/global-error.tsx`),{__esModule:a,$$typeof:n}=s,l=s.default},4597:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s=(0,t(7231).Z)(async({locale:e})=>({messages:(await t(7535)(`./${e}.json`)).default}))},2595:(e,r,t)=>{"use strict";t.d(r,{X:()=>s});let s={name:"Nextjs Starter",locales:["en","es"],defaultLocale:"en",localePrefix:"as-needed"}},2155:()=>{}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[374,358],()=>t(5058));module.exports=s})();