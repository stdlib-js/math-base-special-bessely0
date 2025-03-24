// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-pi@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import{assign as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-besselj0@v0.2.2-esm/index.mjs";var a=1/e,o=2/n,c=.8935769662791675,f=3.957678419314858,l=7.086051060301773,j=[0,0];function p(n){var e,p,v,h,b,u,x;return n<0?NaN:0===n?i:n===r?0:n<=3?(b=n*n,u=t(n/c)*m(n)*o,h=function(t){var s,n;return 0===t?.18214429522164177:((t<0?-t:t)<=1?(s=107235387820.03177+t*(t*(204222743.5737662+t*(t*(10102.532948020907+-18.402381979244993*t)-2128754.84744018))-8371625545.12605),n=588738657389.9703+t*(8161718777.729036+t*(55662956.624278255+t*(238893.93209447255+t*(664.7598668924019+1*t))))):(s=(t=1/t)*(10102.532948020907+t*(t*(204222743.5737662+t*(107235387820.03177*t-8371625545.12605))-2128754.84744018))-18.402381979244993,n=1+t*(664.7598668924019+t*(238893.93209447255+t*(55662956.624278255+t*(8161718777.729036+588738657389.9703*t))))),s/n)}(b),u+(x=(n+c)*(n-228/256-.0029519662791675214))*h):n<=5.5?(b=n*n,u=t(n/f)*m(n)*o,h=function(t){var s,n;return 0===t?-.051200622130023854:((t<0?-t:t)<=1?(s=t*(t*(43600098638.60306+t*(t*(4690528.861167863+t*(17.427031242901595*t-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,n=433861465807072.6+t*(5426682441941.234+t*(34015103849.97124+t*(139602027.7098683+t*(406699.82352539554+t*(830.3085761207029+1*t)))))):(s=17.427031242901595+(t=1/t)*(t*(4690528.861167863+t*(t*(43600098638.60306+t*(-22213976967566.19*t-551074352067.2264))-695904393.9461962))-14566.865832663636),n=1+t*(830.3085761207029+t*(406699.82352539554+t*(139602027.7098683+t*(34015103849.97124+t*(5426682441941.234+433861465807072.6*t)))))),s/n)}(b),u+(x=(n+f)*(n-1013/256-.0006471693148578684))*h):n<=8?(b=n*n,u=t(n/l)*m(n)*o,h=function(t){var s,n;return 0===t?-.023356489432789604:((t<0?-t:t)<=1?(s=t*(670166418691732.4+t*(t*(t*(2195882717.0518103+t*(t*(21363.5341693139+-17.439661319197498*t)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,n=0x4cbf33e862b0ac0+t*(0xdf3ce698dfcbf+t*(22598377924042.9+t*(86926121104.20982+t*(247272194.75672302+t*(539247.3920976806+t*(879.0336216812844+1*t))))))):(s=(t=1/t)*(21363.5341693139+t*(t*(2195882717.0518103+t*(t*(t*(670166418691732.4+-8072872690515021*t)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,n=1+t*(879.0336216812844+t*(539247.3920976806+t*(247272194.75672302+t*(86926121104.20982+t*(22598377924042.9+t*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*t))))))),s/n)}(b),u+(x=(n+l)*(n-1814/256-.00011356030177269763))*h):(e=function(t){var s,n;return 0===t?1:((t<0?-t:t)<=1?(s=22779.090197304686+t*(41345.38663958076+t*(21170.523380864943+t*(3480.648644324927+t*(153.76201909008356+.8896154842421046*t)))),n=22779.090197304686+t*(41370.41249551042+t*(21215.350561880117+t*(3502.8735138235606+t*(157.11159858080893+1*t))))):(s=.8896154842421046+(t=1/t)*(153.76201909008356+t*(3480.648644324927+t*(21170.523380864943+t*(41345.38663958076+22779.090197304686*t)))),n=1+t*(157.11159858080893+t*(3502.8735138235606+t*(21215.350561880117+t*(41370.41249551042+22779.090197304686*t))))),s/n)}(v=(b=8/n)*b),p=function(t){var s,n;return 0===t?-.015625:((t<0?-t:t)<=1?(s=t*(t*(t*(t*(-.008803330304868075*t-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+t*(11951.131543434614+t*(7264.278016921102+t*(1488.7231232283757+t*(90.59376959499312+1*t))))):(s=(t=1/t)*(t*(t*(t*(-89.22660020080009*t-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+t*(90.59376959499312+t*(1488.7231232283757+t*(7264.278016921102+t*(11951.131543434614+5710.502412851206*t))))),s/n)}(v),x=a/s(n),d(n,j,1,0),x*(e*(j[0]-j[1])+b*p*(j[1]+j[0])))}export{p as default};
//# sourceMappingURL=index.mjs.map
