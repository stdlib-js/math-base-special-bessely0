// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,a,u,f,i;if(null==r)return n.call(r);a=r[e],i=e,o=null!=(f=r)&&t.call(f,i);try{r[e]=void 0}catch(t){return n.call(r)}return u=n.call(r),o?r[e]=a:delete r[e],u}:function(r){return n.call(r)},a="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var f,i="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?i:function(){throw new Error("not implemented")};var c=f,l="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var y,p="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var b=y,s="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var A,_="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,256,257]),t=n,r=(s&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var d=A,m="function"==typeof Uint16Array;var h="function"==typeof Uint16Array?Uint16Array:null;var N,U="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,65536,65537]),t=n,r=(m&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j={uint16:N,uint8:d};(g=new j.uint16(1))[0]=4660;var I=52===new j.uint8(g.buffer)[0],O=!0===I?1:0,S=new b(1),E=new c(S.buffer);function F(r){return S[0]=r,E[O]}var H=!0===I?1:0,T=new b(1),x=new c(T.buffer);function G(r){return r!=r}var P=Number.NEGATIVE_INFINITY;var L=.6931471803691238,M=1.9082149292705877e-10;function V(r){var n,t,e,o,a,u,f,i,c,l,v,y;return 0===r?P:G(r)||r<0?NaN:(a=0,(t=F(r))<1048576&&(a-=54,t=F(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(i=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=function(r,n){return T[0]=r,x[H]=n>>>0,T[0]}(r,t|1072693248^i))-1,(1048575&2+t)<3?0===f?0===a?0:a*L+a*M:(u=f*f*(.5-.3333333333333333*f),0===a?f-u:a*L-(u-a*M-f)):(i=t-398458|0,c=440401-t|0,o=(v=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),u=e+o,(i|=c)>0?(n=.5*f*f,0===a?f-(n-l*(n+u)):a*L-(n-(l*(n+u)+a*M)-f)):0===a?f-l*(f-u):a*L-(l*(f-u)-a*M-f))))}var W=Math.sqrt,k=Number.POSITIVE_INFINITY,Y="function"==typeof Object.defineProperty?Object.defineProperty:null;var q=Object.defineProperty,C=Object.prototype,z=C.toString,B=C.__defineGetter__,D=C.__defineSetter__,J=C.__lookupGetter__,K=C.__lookupSetter__;var Q=function(){try{return Y({},"x",{}),!0}catch(r){return!1}}()?q:function(r,n,t){var e,o,a,u;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(J.call(r,n)||K.call(r,n)?(e=r.__proto__,r.__proto__=C,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,u="set"in t,o&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&B&&B.call(r,n,t.get),u&&D&&D.call(r,n,t.set),r};function R(r,n,t){Q(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X,Z,$=!0===I?0:1,rr=new b(1),nr=new c(rr.buffer);!0===I?(X=1,Z=0):(X=0,Z=1);var tr={HIGH:X,LOW:Z},er=new b(1),or=new c(er.buffer),ar=tr.HIGH,ur=tr.LOW;function fr(r,n){return or[ar]=r,or[ur]=n,er[0]}var ir=Math.floor;function cr(r){return r===k||r===P}var lr,vr;!0===I?(lr=1,vr=0):(lr=0,vr=1);var yr={HIGH:lr,LOW:vr},pr=new b(1),br=new c(pr.buffer),sr=yr.HIGH,wr=yr.LOW;function Ar(r,n,t,e){return pr[0]=r,n[e]=br[sr],n[e+t]=br[wr],n}function _r(r){return Ar(r,[0,0],1,0)}R(_r,"assign",Ar);var dr=[0,0];function mr(r,n,t,e){return G(r)||cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}R((function(r){return mr(r,[0,0],1,0)}),"assign",mr);var hr=[0,0],Nr=[0,0];function Ur(r,n){var t,e,o,a,u,f;return 0===n||0===r||G(r)||cr(r)?r:(mr(r,hr,1,0),n+=hr[1],n+=function(r){var n=F(r);return(n=(2146435072&n)>>>20)-1023|0}(r=hr[0]),n<-1074?(o=0,a=r,_r.assign(o,dr,1,0),u=dr[0],u&=2147483647,f=F(a),fr(u|=f&=2147483648,dr[1])):n>1023?r<0?P:k:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_r.assign(r,Nr,1,0),t=Nr[0],t&=2148532223,e*fr(t|=n+1023<<20,Nr[1])))}function gr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ir=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Or=5.960464477539063e-8,Sr=gr(20),Er=gr(20),Fr=gr(20),Hr=gr(20);function Tr(r,n,t,e,o,a,u,f,i){var c,l,v,y,p,b,s,w,A;for(y=a,A=e[t],w=t,p=0;w>0;p++)l=Or*A|0,Hr[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=Ur(A,o),A-=8*ir(.125*A),A-=s=0|A,v=0,o>0?(s+=p=Hr[t-1]>>24-o,Hr[t-1]-=p<<24-o,v=Hr[t-1]>>23-o):0===o?v=Hr[t-1]>>23:A>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<t;p++)w=Hr[p],0===c?0!==w&&(c=1,Hr[p]=16777216-w):Hr[p]=16777215-w;if(o>0)switch(o){case 1:Hr[t-1]&=8388607;break;case 2:Hr[t-1]&=4194303}2===v&&(A=1-A,0!==c&&(A-=Ur(1,o)))}if(0===A){for(w=0,p=t-1;p>=a;p--)w|=Hr[p];if(0===w){for(b=1;0===Hr[a-b];b++);for(p=t+1;p<=t+b;p++){for(i[f+p]=jr[u+p],l=0,w=0;w<=f;w++)l+=r[w]*i[f+(p-w)];e[p]=l}return Tr(r,n,t+=b,e,o,a,u,f,i)}}if(0===A)for(t-=1,o-=24;0===Hr[t];)t-=1,o-=24;else(A=Ur(A,-o))>=16777216?(l=Or*A|0,Hr[t]=A-16777216*l|0,o+=24,Hr[t+=1]=l):Hr[t]=0|A;for(l=Ur(1,o),p=t;p>=0;p--)e[p]=l*Hr[p],l*=Or;for(p=t;p>=0;p--){for(l=0,b=0;b<=y&&b<=t-p;b++)l+=Ir[b]*e[p+b];Fr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Fr[p];for(n[0]=0===v?l:-l,l=Fr[0]-l,p=1;p<=t;p++)l+=Fr[p];return n[1]=0===v?l:-l,7&s}function xr(r,n,t,e){var o,a,u,f,i,c,l;for(4,(a=(t-3)/24|0)<0&&(a=0),f=t-24*(a+1),c=a-(u=e-1),l=u+4,i=0;i<=l;i++)Sr[i]=c<0?0:jr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=u;c++)o+=r[c]*Sr[u+(i-c)];Er[i]=o}return 4,Tr(r,n,4,Er,f,4,a,u,Sr)}var Gr=Math.round;function Pr(r,n,t){var e,o,a,u,f;return a=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),u=6077100506506192e-26*e,f=n>>20|0,t[0]=a-u,f-(F(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),t[0]=a-u,f-(F(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),t[0]=a-u)),t[1]=a-t[0]-u,e}var Lr=1.5707963267341256,Mr=6077100506506192e-26,Vr=2*Mr,Wr=4*Mr,kr=[0,0,0],Yr=[0,0];function qr(r,n){var t,e,o,a,u,f,i;if((o=2147483647&F(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,n):o<=1073928572?r>0?(i=r-Lr,n[0]=i-Mr,n[1]=i-n[0]-Mr,1):(i=r+Lr,n[0]=i+Mr,n[1]=i-n[0]+Mr,-1):r>0?(i=r-2*Lr,n[0]=i-Vr,n[1]=i-n[0]-Vr,2):(i=r+2*Lr,n[0]=i+Vr,n[1]=i-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,n):r>0?(i=r-3*Lr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Lr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?Pr(r,o,n):r>0?(i=r-4*Lr,n[0]=i-Wr,n[1]=i-n[0]-Wr,4):(i=r+4*Lr,n[0]=i+Wr,n[1]=i-n[0]+Wr,-4);if(o<1094263291)return Pr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return rr[0]=r,nr[$]}(r),i=fr(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)kr[u]=0|i,i=16777216*(i-kr[u]);for(kr[2]=i,a=3;0===kr[a-1];)a-=1;return f=xr(kr,Yr,e,a),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-f):(n[0]=Yr[0],n[1]=Yr[1],f)}var Cr=-.16666666666666632;function zr(r,n,t,e,o){var a,u,f,i,c;return u=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(i=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,t[o]=0===n?r+f*(Cr+c*u):r-(c*(.5*n-f*u)-n-f*Cr),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=i*i*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),i=1-(a=.5*c),t[o+e]=i+(1-i-a+(c*u-r*n)),t}var Br=[0,0];function Dr(r,n,t,e){var o,a;if(o=F(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),zr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(a=qr(r,Br),zr(Br[0],Br[1],n,t,e),3&a){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}function Jr(r){return Dr(r,[0,0],1,0)}R(Jr,"assign",Dr);var Kr=[0,0];function Qr(r){var n,t,e,o,a,u;return r<0&&(r=-r),r===k?0:0===r?1:r<=4?(o=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)}(a=r*r),(u=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)}(a=1-r*r/64),(u=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(a=8/r)*a),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),u=.5641895835477563/W(r),Jr(Kr),u*(n*(Kr[1]+Kr[0])-a*t*(Kr[0]-Kr[1])))}var Rr=.8935769662791675,Xr=3.957678419314858,Zr=7.086051060301773,$r=[0,0];function rn(r){var n,t,e,o,a,u,f;return r<0?NaN:0===r?P:r===k?0:r<=3?(a=r*r,u=V(r/Rr)*Qr(r)*.6366197723675814,o=function(r){var n,t;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(n=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),t=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(n=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,t=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),n/t)}(a),u+(f=(r+Rr)*(r-228/256-.0029519662791675214))*o):r<=5.5?(a=r*r,u=V(r/Xr)*Qr(r)*.6366197723675814,o=function(r){var n,t;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(n=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,t=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(n=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),t=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),n/t)}(a),u+(f=(r+Xr)*(r-1013/256-.0006471693148578684))*o):r<=8?(a=r*r,u=V(r/Zr)*Qr(r)*.6366197723675814,o=function(r){var n,t;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(n=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,t=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(n=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,t=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),n/t)}(a),u+(f=(r+Zr)*(r-1814/256-.00011356030177269763))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(a=8/r)*a),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),f=.5641895835477563/W(r),Dr(r,$r,1,0),f*(n*($r[0]-$r[1])+a*t*($r[1]+$r[0])))}export{rn as default};
//# sourceMappingURL=mod.js.map
