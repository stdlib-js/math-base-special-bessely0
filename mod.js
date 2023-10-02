// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var t="function"==typeof Symbol?Symbol:void 0,i="function"==typeof t?t.toStringTag:"";var a=r&&"symbol"==typeof Symbol.toStringTag?function(r){var t,a,o,c,u;if(null==r)return e.call(r);a=r[i],u=i,t=null!=(c=r)&&n.call(c,u);try{r[i]=void 0}catch(n){return e.call(r)}return o=e.call(r),t?r[i]=a:delete r[i],o}:function(r){return e.call(r)},o="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var u,f="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(o&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?f:function(){throw new Error("not implemented")};var s=u,l="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var v,y="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,e,n;if("function"!=typeof p)return!1;try{e=new p([1,3.14,-3.14,NaN]),n=e,r=(l&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var g=v,d="function"==typeof Uint8Array;var h="function"==typeof Uint8Array?Uint8Array:null;var w,b="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var r,e,n;if("function"!=typeof h)return!1;try{e=new h(e=[1,3.14,-3.14,256,257]),n=e,r=(d&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m=w,A="function"==typeof Uint16Array;var _="function"==typeof Uint16Array?Uint16Array:null;var E,x="function"==typeof Uint16Array?Uint16Array:void 0;E=function(){var r,e,n;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,65536,65537]),n=e,r=(A&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var N,U={uint16:E,uint8:m};(N=new U.uint16(1))[0]=4660;var I=52===new U.uint8(N.buffer)[0],S=!0===I?1:0,k=new g(1),F=new s(k.buffer);function j(r){return k[0]=r,F[S]}var T=!0===I?1:0,O=new g(1),V=new s(O.buffer);function $(r){return r!=r}var G=Number.NEGATIVE_INFINITY;var H=.6931471803691238,W=1.9082149292705877e-10;function C(r){var e,n,t,i,a,o,c,u,f,s,l,p;return 0===r?G:$(r)||r<0?NaN:(a=0,(n=j(r))<1048576&&(a-=54,n=j(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(u=(n&=1048575)+614244&1048576|0)>>20|0,c=(r=function(r,e){return O[0]=r,V[T]=e>>>0,O[0]}(r,n|1072693248^u))-1,(1048575&2+n)<3?0===c?0===a?0:a*H+a*W:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*H-(o-a*W-c)):(u=n-398458|0,f=440401-n|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*H-(e-(s*(e+o)+a*W)-c)):0===a?c-s*(c-o):a*H-(s*(c-o)-a*W-c))))}var L=Math.sqrt,P=Number.POSITIVE_INFINITY,R="function"==typeof Object.defineProperty?Object.defineProperty:null;var M=Object.defineProperty;function Z(r){return"number"==typeof r}function X(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Y(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+X(i):X(i)+r,t&&(r="-"+r)),r}var q=String.prototype.toLowerCase,z=String.prototype.toUpperCase;function B(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Z(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Y(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Y(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===z.call(r.specifier)?z.call(n):q.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function D(r){return"string"==typeof r}var J=Math.abs,K=String.prototype.toLowerCase,Q=String.prototype.toUpperCase,rr=String.prototype.replace,er=/e\+(\d)$/,nr=/e-(\d)$/,tr=/^(\d+)$/,ir=/^(\d+)e/,ar=/\.0$/,or=/\.0*e/,cr=/(\..*[^0])0*e/;function ur(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Z(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":J(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=rr.call(n,cr,"$1e"),n=rr.call(n,or,"e"),n=rr.call(n,ar,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=rr.call(n,er,"e+0$1"),n=rr.call(n,nr,"e-0$1"),r.alternate&&(n=rr.call(n,tr,"$1."),n=rr.call(n,ir,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Q.call(r.specifier)?Q.call(n):K.call(n)}function fr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function sr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+fr(t):fr(t)+r}var lr=String.fromCharCode,pr=isNaN,vr=Array.isArray;function yr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function gr(r){var e,n,t,i,a,o,c,u,f;if(!vr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(D(t=r[u]))o+=t;else{if(e=void 0!==t.precision,!(t=yr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,pr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,pr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=B(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!pr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=pr(a)?String(t.arg):lr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=ur(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Y(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=sr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var dr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function hr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function wr(r){var e,n,t,i;for(n=[],i=0,t=dr.exec(r);t;)(e=r.slice(i,dr.lastIndex-t[0].length)).length&&n.push(e),n.push(hr(t)),i=dr.lastIndex,t=dr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function br(r){return"string"==typeof r}function mr(r){var e,n,t;if(!br(r))throw new TypeError(mr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=wr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return gr.apply(null,n)}var Ar=Object.prototype,_r=Ar.toString,Er=Ar.__defineGetter__,xr=Ar.__defineSetter__,Nr=Ar.__lookupGetter__,Ur=Ar.__lookupSetter__;var Ir=function(){try{return R({},"x",{}),!0}catch(r){return!1}}()?M:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===_r.call(r))throw new TypeError(mr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===_r.call(n))throw new TypeError(mr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Nr.call(r,e)||Ur.call(r,e)?(t=r.__proto__,r.__proto__=Ar,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Er&&Er.call(r,e,n.get),o&&xr&&xr.call(r,e,n.set),r};function Sr(r,e,n){Ir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var kr,Fr,jr=!0===I?0:1,Tr=new g(1),Or=new s(Tr.buffer);!0===I?(kr=1,Fr=0):(kr=0,Fr=1);var Vr={HIGH:kr,LOW:Fr},$r=new g(1),Gr=new s($r.buffer),Hr=Vr.HIGH,Wr=Vr.LOW;function Cr(r,e){return Gr[Hr]=r,Gr[Wr]=e,$r[0]}var Lr=Math.floor;function Pr(r){return r===P||r===G}var Rr,Mr;!0===I?(Rr=1,Mr=0):(Rr=0,Mr=1);var Zr={HIGH:Rr,LOW:Mr},Xr=new g(1),Yr=new s(Xr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Br(r,e,n,t){return Xr[0]=r,e[t]=Yr[qr],e[t+n]=Yr[zr],e}function Dr(r){return Br(r,[0,0],1,0)}Sr(Dr,"assign",Br);var Jr=[0,0];function Kr(r,e,n,t){return $(r)||Pr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Sr((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=[0,0],re=[0,0];function ee(r,e){var n,t,i,a,o,c;return 0===e||0===r||$(r)||Pr(r)?r:(Kr(r,Qr,1,0),e+=Qr[1],e+=function(r){var e=j(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Qr[0]),e<-1074?(i=0,a=r,Dr.assign(i,Jr,1,0),o=Jr[0],o&=2147483647,c=j(a),Cr(o|=c&=2147483648,Jr[1])):e>1023?r<0?G:P:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Dr.assign(r,re,1,0),n=re[0],n&=2148532223,t*Cr(n|=e+1023<<20,re[1])))}function ne(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ae=5.960464477539063e-8,oe=ne(20),ce=ne(20),ue=ne(20),fe=ne(20);function se(r,e,n,t,i,a,o,c,u){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=ae*h|0,fe[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=ee(h,i),h-=8*Lr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=fe[n-1]>>24-i,fe[n-1]-=v<<24-i,l=fe[n-1]>>23-i):0===i?l=fe[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=fe[v],0===f?0!==d&&(f=1,fe[v]=16777216-d):fe[v]=16777215-d;if(i>0)switch(i){case 1:fe[n-1]&=8388607;break;case 2:fe[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=ee(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=fe[v];if(0===d){for(y=1;0===fe[a-y];y++);for(v=n+1;v<=n+y;v++){for(u[c+v]=te[o+v],s=0,d=0;d<=c;d++)s+=r[d]*u[c+(v-d)];t[v]=s}return se(r,e,n+=y,t,i,a,o,c,u)}}if(0===h)for(n-=1,i-=24;0===fe[n];)n-=1,i-=24;else(h=ee(h,-i))>=16777216?(s=ae*h|0,fe[n]=h-16777216*s|0,i+=24,fe[n+=1]=s):fe[n]=0|h;for(s=ee(1,i),v=n;v>=0;v--)t[v]=s*fe[v],s*=ae;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=ie[y]*t[v+y];ue[n-v]=s}for(s=0,v=n;v>=0;v--)s+=ue[v];for(e[0]=0===l?s:-s,s=ue[0]-s,v=1;v<=n;v++)s+=ue[v];return e[1]=0===l?s:-s,7&g}function le(r,e,n,t){var i,a,o,c,u,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),f=a-(o=t-1),s=o+4,u=0;u<=s;u++)oe[u]=f<0?0:te[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*oe[o+(u-f)];ce[u]=i}return 4,se(r,e,4,ce,c,4,a,o,oe)}var pe=Math.round;function ve(r,e,n){var t,i,a,o,c;return a=r-1.5707963267341256*(t=pe(.6366197723675814*r)),o=6077100506506192e-26*t,c=e>>20|0,n[0]=a-o,c-(j(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,c-(j(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ye=1.5707963267341256,ge=6077100506506192e-26,de=2*ge,he=4*ge,we=[0,0,0],be=[0,0];function me(r,e){var n,t,i,a,o,c,u;if((i=2147483647&j(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ve(r,i,e):i<=1073928572?r>0?(u=r-ye,e[0]=u-ge,e[1]=u-e[0]-ge,1):(u=r+ye,e[0]=u+ge,e[1]=u-e[0]+ge,-1):r>0?(u=r-2*ye,e[0]=u-de,e[1]=u-e[0]-de,2):(u=r+2*ye,e[0]=u+de,e[1]=u-e[0]+de,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ve(r,i,e):r>0?(u=r-3*ye,e[0]=u-1.8231301519518578e-10,e[1]=u-e[0]-1.8231301519518578e-10,3):(u=r+3*ye,e[0]=u+1.8231301519518578e-10,e[1]=u-e[0]+1.8231301519518578e-10,-3):1075388923===i?ve(r,i,e):r>0?(u=r-4*ye,e[0]=u-he,e[1]=u-e[0]-he,4):(u=r+4*ye,e[0]=u+he,e[1]=u-e[0]+he,-4);if(i<1094263291)return ve(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Tr[0]=r,Or[jr]}(r),u=Cr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)we[o]=0|u,u=16777216*(u-we[o]);for(we[2]=u,a=3;0===we[a-1];)a-=1;return c=le(we,be,t,a),r<0?(e[0]=-be[0],e[1]=-be[1],-c):(e[0]=be[0],e[1]=be[1],c)}var Ae=-.16666666666666632;function _e(r,e,n,t,i){var a,o,c,u,f;return o=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(u=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),c=f*r,n[i]=0===e?r+c*(Ae+f*o):r-(f*(.5*e-c*o)-e-c*Ae),o=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),o+=u*u*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),u=1-(a=.5*f),n[i+t]=u+(1-u-a+(f*o-r*e)),n}var Ee=[0,0];function xe(r,e,n,t){var i,a;if(i=j(r),(i&=2147483647)<=1072243195)return i<1044381696&&0==(0|r)&&(e[t]=r,e[t+n]=0),_e(r,0,e,n,t);if(i>=2146435072)return e[t]=NaN,e[t+n]=NaN,e;switch(a=me(r,Ee),_e(Ee[0],Ee[1],e,n,t),3&a){case 1:return i=e[t+n],e[t+n]=-e[t],e[t]=i,e;case 2:return e[t]*=-1,e[t+n]*=-1,e;case 3:return i=-e[t+n],e[t+n]=e[t],e[t]=i,e;default:return e}}Sr((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var Ne=[0,0];function Ue(r){var e,n,t,i,a,o;return r<0&&(r=-r),r===P?0:0===r?1:r<=4?(i=function(r){var e,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(e=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(e=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),e/n)}(a=r*r),(o=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*i):r<=8?(i=function(r){var e,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(e=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(e=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),e/n)}(a=1-r*r/64),(o=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*i):(e=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/n)}(t=(a=8/r)*a),n=function(r){var e,n;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/n)}(t),o=.5641895835477563/L(r),xe(r,Ne,1,0),o*(e*(Ne[1]+Ne[0])-a*n*(Ne[0]-Ne[1])))}var Ie=.8935769662791675,Se=3.957678419314858,ke=7.086051060301773,Fe=[0,0];function je(r){var e,n,t,i,a,o,c;return r<0?NaN:0===r?G:r===P?0:r<=3?(a=r*r,o=C(r/Ie)*Ue(r)*.6366197723675814,i=function(r){var e,n;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(e=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),n=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(e=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,n=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),e/n)}(a),o+(c=(r+Ie)*(r-228/256-.0029519662791675214))*i):r<=5.5?(a=r*r,o=C(r/Se)*Ue(r)*.6366197723675814,i=function(r){var e,n;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(e=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,n=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(e=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),n=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),e/n)}(a),o+(c=(r+Se)*(r-1013/256-.0006471693148578684))*i):r<=8?(a=r*r,o=C(r/ke)*Ue(r)*.6366197723675814,i=function(r){var e,n;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(e=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,n=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(e=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,n=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),e/n)}(a),o+(c=(r+ke)*(r-1814/256-.00011356030177269763))*i):(e=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/n)}(t=(a=8/r)*a),n=function(r){var e,n;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/n)}(t),c=.5641895835477563/L(r),xe(r,Fe,1,0),c*(e*(Fe[0]-Fe[1])+a*n*(Fe[1]+Fe[0])))}export{je as default};
//# sourceMappingURL=mod.js.map
