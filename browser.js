// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,u,f,i,a;if(null==r)return t.call(r);u=r[o],a=o,n=null!=(i=r)&&e.call(i,a);try{r[o]=void 0}catch(n){return t.call(r)}return f=t.call(r),n?r[o]=u:delete r[o],f}:function(r){return t.call(r)},f="function"==typeof Uint32Array,i="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,n,t;if("function"!=typeof i)return!1;try{n=new i(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?a:function(){throw new Error("not implemented")};var c,l=r,y="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,p="function"==typeof Float64Array?Float64Array:void 0;c=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(y&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var b,s=c,d="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,256,257]),t=n,r=(d&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,m=b,h="function"==typeof Uint16Array,N="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,65536,65537]),t=n,r=(h&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j={uint16:_,uint8:m};(g=new j.uint16(1))[0]=4660;var I=52===new j.uint8(g.buffer)[0],O=!0===I?1:0,S=new s(1),E=new l(S.buffer);function F(r){return S[0]=r,E[O]}var T=!0===I?1:0,x=new s(1),H=new l(x.buffer);function G(r){return r!=r}var P=1023,L=Number.NEGATIVE_INFINITY,M=.6931471803691238,V=1.9082149292705877e-10,W=1048575;function k(r){var n,t,e,o,u,f,i,a,c,l,y,v;return 0===r?L:G(r)||r<0?NaN:(u=0,(t=F(r))<1048576&&(u-=54,t=F(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-P|0,u+=(a=614244+(t&=W)&1048576|0)>>20|0,i=(r=function(r,n){return x[0]=r,H[T]=n>>>0,x[0]}(r,t|1072693248^a))-1,(W&2+t)<3?0===i?0===u?0:u*M+u*V:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*M-(f-u*V-i)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=i/(2+i))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=e+o,(a|=c)>0?(n=.5*i*i,0===u?i-(n-l*(n+f)):u*M-(n-(l*(n+f)+u*V)-i)):0===u?i-l*(i-f):u*M-(l*(i-f)-u*V-i))))}var Y=Math.sqrt,q=Number.POSITIVE_INFINITY,C="function"==typeof Object.defineProperty?Object.defineProperty:null,z=Object.defineProperty,B=Object.prototype,D=B.toString,J=B.__defineGetter__,K=B.__defineSetter__,Q=B.__lookupGetter__,R=B.__lookupSetter__,X=function(){try{return C({},"x",{}),!0}catch(r){return!1}}()?z:function(r,n,t){var e,o,u,f;if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(Q.call(r,n)||R.call(r,n)?(e=r.__proto__,r.__proto__=B,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,f="set"in t,o&&(u||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&J&&J.call(r,n,t.get),f&&K&&K.call(r,n,t.set),r};function Z(r,n,t){X(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $,rr,nr=!0===I?0:1,tr=new s(1),er=new l(tr.buffer);!0===I?($=1,rr=0):($=0,rr=1);var or={HIGH:$,LOW:rr},ur=new s(1),fr=new l(ur.buffer),ir=or.HIGH,ar=or.LOW;function cr(r,n){return fr[ir]=r,fr[ar]=n,ur[0]}var lr,yr,vr=Math.floor;function pr(r){return r===q||r===L}!0===I?(lr=1,yr=0):(lr=0,yr=1);var br={HIGH:lr,LOW:yr},sr=new s(1),dr=new l(sr.buffer),wr=br.HIGH,Ar=br.LOW;function _r(r,n){return sr[0]=n,r[0]=dr[wr],r[1]=dr[Ar],r}function mr(r,n){return 1===arguments.length?_r([0,0],r):_r(r,n)}var hr=[0,0];function Nr(r,n,t,e){return G(r)||pr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}Z((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Ur=[0,0],gr=[0,0];function jr(r,n){var t,e,o,u,f;return 0===n||0===r||G(r)||pr(r)?r:(Nr(r,Ur,1,0),n+=Ur[1],n+=function(r){var n=F(r);return(n=(2146435072&n)>>>20)-P|0}(r=Ur[0]),n<-1074?(o=r,mr(hr,0),u=hr[0],u&=2147483647,f=F(o),cr(u|=f&=2147483648,hr[1])):n>1023?r<0?L:q:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mr(gr,r),t=gr[0],t&=2148532223,e*cr(t|=n+P<<20,gr[1])))}function Ir(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Or=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Sr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Er=16777216,Fr=5.960464477539063e-8,Tr=Ir(20),xr=Ir(20),Hr=Ir(20),Gr=Ir(20);function Pr(r,n,t,e,o,u,f,i,a){var c,l,y,v,p,b,s,d,w;for(v=u,w=e[t],d=t,p=0;d>0;p++)l=Fr*w|0,Gr[p]=w-Er*l|0,w=e[d-1]+l,d-=1;if(w=jr(w,o),w-=8*vr(.125*w),w-=s=0|w,y=0,o>0?(s+=p=Gr[t-1]>>24-o,Gr[t-1]-=p<<24-o,y=Gr[t-1]>>23-o):0===o?y=Gr[t-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)d=Gr[p],0===c?0!==d&&(c=1,Gr[p]=16777216-d):Gr[p]=16777215-d;if(o>0)switch(o){case 1:Gr[t-1]&=8388607;break;case 2:Gr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=jr(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=Gr[p];if(0===d){for(b=1;0===Gr[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[i+p]=Or[f+p],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(p-d)];e[p]=l}return Pr(r,n,t+=b,e,o,u,f,i,a)}}if(0===w)for(t-=1,o-=24;0===Gr[t];)t-=1,o-=24;else(w=jr(w,-o))>=Er?(l=Fr*w|0,Gr[t]=w-Er*l|0,o+=24,Gr[t+=1]=l):Gr[t]=0|w;for(l=jr(1,o),p=t;p>=0;p--)e[p]=l*Gr[p],l*=Fr;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=Sr[b]*e[p+b];Hr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Hr[p];for(n[0]=0===y?l:-l,l=Hr[0]-l,p=1;p<=t;p++)l+=Hr[p];return n[1]=0===y?l:-l,7&s}function Lr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Tr[a]=c<0?0:Or[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Tr[f+(a-c)];xr[a]=o}return Pr(r,n,4,xr,i,4,u,f,Tr)}var Mr=Math.round;function Vr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Mr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(F(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(F(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var Wr=1.5707963267341256,kr=6077100506506192e-26,Yr=2*kr,qr=3*kr,Cr=4*kr,zr=[0,0,0],Br=[0,0];function Dr(r,n){var t,e,o,u,f,i,a;if((o=2147483647&F(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Vr(r,o,n):o<=1073928572?r>0?(a=r-Wr,n[0]=a-kr,n[1]=a-n[0]-kr,1):(a=r+Wr,n[0]=a+kr,n[1]=a-n[0]+kr,-1):r>0?(a=r-2*Wr,n[0]=a-Yr,n[1]=a-n[0]-Yr,2):(a=r+2*Wr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Vr(r,o,n):r>0?(a=r-3*Wr,n[0]=a-qr,n[1]=a-n[0]-qr,3):(a=r+3*Wr,n[0]=a+qr,n[1]=a-n[0]+qr,-3):1075388923===o?Vr(r,o,n):r>0?(a=r-4*Wr,n[0]=a-Cr,n[1]=a-n[0]-Cr,4):(a=r+4*Wr,n[0]=a+Cr,n[1]=a-n[0]+Cr,-4);if(o<1094263291)return Vr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return tr[0]=r,er[nr]}(r),a=cr(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)zr[f]=0|a,a=16777216*(a-zr[f]);for(zr[2]=a,u=3;0===zr[u-1];)u-=1;return i=Lr(zr,Br,e,u),r<0?(n[0]=-Br[0],n[1]=-Br[1],-i):(n[0]=Br[0],n[1]=Br[1],i)}var Jr=-.16666666666666632;function Kr(r,n,t,e,o){var u,f,i,a,c;return f=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),i=c*r,t[o]=0===n?r+i*(Jr+c*f):r-(c*(.5*n-i*f)-n-i*Jr),f=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),f+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),t[o+e]=a+(1-a-u+(c*f-r*n)),t}var Qr=[0,0];function Rr(r,n,t,e){var o,u;if(o=F(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),Kr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(u=Dr(r,Qr),Kr(Qr[0],Qr[1],n,t,e),3&u){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}function Xr(r){return Rr(r,[0,0],1,0)}Z(Xr,"assign",Rr);var Zr=[0,0];function $r(r){var n,t,e,o,u,f;return r<0&&(r=-r),r===q?0:0===r?1:r<=4?(o=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)}(u=r*r),(f=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)}(u=1-r*r/64),(f=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(u=8/r)*u),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),f=.5641895835477563/Y(r),Xr(Zr),f*(n*(Zr[1]+Zr[0])-u*t*(Zr[0]-Zr[1])))}var rn=.6366197723675814,nn=.8935769662791675,tn=3.957678419314858,en=7.086051060301773,on=[0,0];return function(r){var n,t,e,o,u,f,i;return r<0?NaN:0===r?L:r===q?0:r<=3?(u=r*r,f=k(r/nn)*$r(r)*rn,o=function(r){var n,t;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(n=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),t=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(n=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,t=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),n/t)}(u),f+(i=(r+nn)*(r-228/256-.0029519662791675214))*o):r<=5.5?(u=r*r,f=k(r/tn)*$r(r)*rn,o=function(r){var n,t;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(n=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,t=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(n=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),t=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),n/t)}(u),f+(i=(r+tn)*(r-1013/256-.0006471693148578684))*o):r<=8?(u=r*r,f=k(r/en)*$r(r)*rn,o=function(r){var n,t;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(n=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,t=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(n=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,t=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),n/t)}(u),f+(i=(r+en)*(r-1814/256-.00011356030177269763))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(u=8/r)*u),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),i=.5641895835477563/Y(r),Rr(r,on,1,0),i*(n*(on[0]-on[1])+u*t*(on[1]+on[0])))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).y0=n();
//# sourceMappingURL=browser.js.map
