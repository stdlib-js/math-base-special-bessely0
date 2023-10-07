// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,c,f;if(null==r)return n.call(r);i=r[a],f=a,e=null!=(c=r)&&t.call(c,f);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)},c="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,n;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(c&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?u:function(){throw new Error("not implemented")};var s,l=r,p="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,e,n;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),n=e,r=(p&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var g,v=s,h="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),n=e,r=(h&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=g,_="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var N,U={uint16:m,uint8:A};(N=new U.uint16(1))[0]=4660;var I=52===new U.uint8(N.buffer)[0],S=!0===I?1:0,k=new v(1),F=new l(k.buffer);function j(r){return k[0]=r,F[S]}var T=!0===I?1:0,O=new v(1),V=new l(O.buffer);function $(r){return r!=r}var G=1023,H=Number.NEGATIVE_INFINITY,W=.6931471803691238,C=1.9082149292705877e-10,L=1048575;function P(r){var e,n,t,i,a,o,c,f,u,s,l,p;return 0===r?H:$(r)||r<0?NaN:(a=0,(n=j(r))<1048576&&(a-=54,n=j(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-G|0,a+=(f=614244+(n&=L)&1048576|0)>>20|0,c=(r=function(r,e){return O[0]=r,V[T]=e>>>0,O[0]}(r,n|1072693248^f))-1,(L&2+n)<3?0===c?0===a?0:a*W+a*C:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*W-(o-a*C-c)):(f=n-398458|0,u=440401-n|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=u)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*W-(e-(s*(e+o)+a*C)-c)):0===a?c-s*(c-o):a*W-(s*(c-o)-a*C-c))))}var R=Math.sqrt,M=Number.POSITIVE_INFINITY,Z="function"==typeof Object.defineProperty?Object.defineProperty:null,X=Object.defineProperty;function Y(r){return"number"==typeof r}function q(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function z(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+q(i):q(i)+r,t&&(r="-"+r)),r}var B=String.prototype.toLowerCase,D=String.prototype.toUpperCase;function J(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Y(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=z(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=z(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===D.call(r.specifier)?D.call(n):B.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function K(r){return"string"==typeof r}var Q=Math.abs,rr=String.prototype.toLowerCase,er=String.prototype.toUpperCase,nr=String.prototype.replace,tr=/e\+(\d)$/,ir=/e-(\d)$/,ar=/^(\d+)$/,or=/^(\d+)e/,cr=/\.0$/,fr=/\.0*e/,ur=/(\..*[^0])0*e/;function sr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Y(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Q(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=nr.call(n,ur,"$1e"),n=nr.call(n,fr,"e"),n=nr.call(n,cr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=nr.call(n,tr,"e+0$1"),n=nr.call(n,ir,"e-0$1"),r.alternate&&(n=nr.call(n,ar,"$1."),n=nr.call(n,or,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===er.call(r.specifier)?er.call(n):rr.call(n)}function lr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function pr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+lr(t):lr(t)+r}var yr=String.fromCharCode,dr=isNaN,gr=Array.isArray;function vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function hr(r){var e,n,t,i,a,o,c,f,u;if(!gr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(K(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=vr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,u=0;u<n.length;u++)switch(i=n.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,dr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,dr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=J(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!dr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=dr(a)?String(t.arg):yr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=sr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=z(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=pr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function br(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function mr(r){var e,n,t,i;for(n=[],i=0,t=wr.exec(r);t;)(e=r.slice(i,wr.lastIndex-t[0].length)).length&&n.push(e),n.push(br(t)),i=wr.lastIndex,t=wr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Ar(r){return"string"==typeof r}function _r(r){var e,n,t;if(!Ar(r))throw new TypeError(_r("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=mr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return hr.apply(null,n)}var Er=Object.prototype,xr=Er.toString,Nr=Er.__defineGetter__,Ur=Er.__defineSetter__,Ir=Er.__lookupGetter__,Sr=Er.__lookupSetter__,kr=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?X:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===xr.call(r))throw new TypeError(_r("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===xr.call(n))throw new TypeError(_r("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Ir.call(r,e)||Sr.call(r,e)?(t=r.__proto__,r.__proto__=Er,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Nr&&Nr.call(r,e,n.get),o&&Ur&&Ur.call(r,e,n.set),r};function Fr(r,e,n){kr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var jr,Tr,Or=2147483647,Vr=2146435072,$r=!0===I?0:1,Gr=new v(1),Hr=new l(Gr.buffer);!0===I?(jr=1,Tr=0):(jr=0,Tr=1);var Wr={HIGH:jr,LOW:Tr},Cr=new v(1),Lr=new l(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Mr(r,e){return Lr[Pr]=r,Lr[Rr]=e,Cr[0]}var Zr,Xr,Yr=Math.floor;function qr(r){return r===M||r===H}!0===I?(Zr=1,Xr=0):(Zr=0,Xr=1);var zr={HIGH:Zr,LOW:Xr},Br=new v(1),Dr=new l(Br.buffer),Jr=zr.HIGH,Kr=zr.LOW;function Qr(r,e,n,t){return Br[0]=r,e[t]=Dr[Jr],e[t+n]=Dr[Kr],e}function re(r){return Qr(r,[0,0],1,0)}Fr(re,"assign",Qr);var ee=[0,0];function ne(r,e,n,t){return $(r)||qr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Fr((function(r){return ne(r,[0,0],1,0)}),"assign",ne);var te=[0,0],ie=[0,0];function ae(r,e){var n,t,i,a,o,c;return 0===e||0===r||$(r)||qr(r)?r:(ne(r,te,1,0),e+=te[1],e+=function(r){var e=j(r);return(e=(e&Vr)>>>20)-G|0}(r=te[0]),e<-1074?(i=0,a=r,re.assign(i,ee,1,0),o=ee[0],o&=Or,c=j(a),Mr(o|=c&=2147483648,ee[1])):e>1023?r<0?H:M:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,re.assign(r,ie,1,0),n=ie[0],n&=2148532223,t*Mr(n|=e+G<<20,ie[1])))}function oe(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ce=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ue=16777216,se=5.960464477539063e-8,le=oe(20),pe=oe(20),ye=oe(20),de=oe(20);function ge(r,e,n,t,i,a,o,c,f){var u,s,l,p,y,d,g,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=se*h|0,de[y]=h-ue*s|0,h=t[v-1]+s,v-=1;if(h=ae(h,i),h-=8*Yr(.125*h),h-=g=0|h,l=0,i>0?(g+=y=de[n-1]>>24-i,de[n-1]-=y<<24-i,l=de[n-1]>>23-i):0===i?l=de[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,u=0,y=0;y<n;y++)v=de[y],0===u?0!==v&&(u=1,de[y]=16777216-v):de[y]=16777215-v;if(i>0)switch(i){case 1:de[n-1]&=8388607;break;case 2:de[n-1]&=4194303}2===l&&(h=1-h,0!==u&&(h-=ae(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=de[y];if(0===v){for(d=1;0===de[a-d];d++);for(y=n+1;y<=n+d;y++){for(f[c+y]=ce[o+y],s=0,v=0;v<=c;v++)s+=r[v]*f[c+(y-v)];t[y]=s}return ge(r,e,n+=d,t,i,a,o,c,f)}}if(0===h)for(n-=1,i-=24;0===de[n];)n-=1,i-=24;else(h=ae(h,-i))>=ue?(s=se*h|0,de[n]=h-ue*s|0,i+=24,de[n+=1]=s):de[n]=0|h;for(s=ae(1,i),y=n;y>=0;y--)t[y]=s*de[y],s*=se;for(y=n;y>=0;y--){for(s=0,d=0;d<=p&&d<=n-y;d++)s+=fe[d]*t[y+d];ye[n-y]=s}for(s=0,y=n;y>=0;y--)s+=ye[y];for(e[0]=0===l?s:-s,s=ye[0]-s,y=1;y<=n;y++)s+=ye[y];return e[1]=0===l?s:-s,7&g}function ve(r,e,n,t){var i,a,o,c,f,u,s;for((a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),u=a-(o=t-1),s=o+4,f=0;f<=s;f++)le[f]=u<0?0:ce[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*le[o+(f-u)];pe[f]=i}return ge(r,e,4,pe,c,4,a,o,le)}var he=Math.round;function we(r,e,n){var t,i,a,o,c;return a=r-1.5707963267341256*(t=he(.6366197723675814*r)),o=6077100506506192e-26*t,c=e>>20|0,n[0]=a-o,c-(j(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,c-(j(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var be=1.5707963267341256,me=6077100506506192e-26,Ae=2*me,_e=3*me,Ee=4*me,xe=[0,0,0],Ne=[0,0];function Ue(r,e){var n,t,i,a,o,c,f;if((i=j(r)&Or|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?we(r,i,e):i<=1073928572?r>0?(f=r-be,e[0]=f-me,e[1]=f-e[0]-me,1):(f=r+be,e[0]=f+me,e[1]=f-e[0]+me,-1):r>0?(f=r-2*be,e[0]=f-Ae,e[1]=f-e[0]-Ae,2):(f=r+2*be,e[0]=f+Ae,e[1]=f-e[0]+Ae,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?we(r,i,e):r>0?(f=r-3*be,e[0]=f-_e,e[1]=f-e[0]-_e,3):(f=r+3*be,e[0]=f+_e,e[1]=f-e[0]+_e,-3):1075388923===i?we(r,i,e):r>0?(f=r-4*be,e[0]=f-Ee,e[1]=f-e[0]-Ee,4):(f=r+4*be,e[0]=f+Ee,e[1]=f-e[0]+Ee,-4);if(i<1094263291)return we(r,i,e);if(i>=Vr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Gr[0]=r,Hr[$r]}(r),f=Mr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)xe[o]=0|f,f=16777216*(f-xe[o]);for(xe[2]=f,a=3;0===xe[a-1];)a-=1;return c=ve(xe,Ne,t,a),r<0?(e[0]=-Ne[0],e[1]=-Ne[1],-c):(e[0]=Ne[0],e[1]=Ne[1],c)}var Ie=-.16666666666666632;function Se(r,e,n,t,i){var a,o,c,f,u;return o=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(f=u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),c=u*r,n[i]=0===e?r+c*(Ie+u*o):r-(u*(.5*e-c*o)-e-c*Ie),o=u*(.0416666666666666+u*(2480158728947673e-20*u-.001388888888887411)),o+=f*f*(u*(2.087572321298175e-9+-11359647557788195e-27*u)-2.7557314351390663e-7),f=1-(a=.5*u),n[i+t]=f+(1-f-a+(u*o-r*e)),n}var ke=[0,0];function Fe(r,e,n,t){var i,a;if(i=j(r),(i&=Or)<=1072243195)return i<1044381696&&0==(0|r)&&(e[t]=r,e[t+n]=0),Se(r,0,e,n,t);if(i>=Vr)return e[t]=NaN,e[t+n]=NaN,e;switch(a=Ue(r,ke),Se(ke[0],ke[1],e,n,t),3&a){case 1:return i=e[t+n],e[t+n]=-e[t],e[t]=i,e;case 2:return e[t]*=-1,e[t+n]*=-1,e;case 3:return i=-e[t+n],e[t+n]=e[t],e[t]=i,e;default:return e}}Fr((function(r){return Fe(r,[0,0],1,0)}),"assign",Fe);var je=[0,0];function Te(r){var e,n,t,i,a,o;return r<0&&(r=-r),r===M?0:0===r?1:r<=4?(i=function(r){var e,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(e=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(e=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),e/n)}(a=r*r),(o=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*i):r<=8?(i=function(r){var e,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(e=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(e=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),e/n)}(a=1-r*r/64),(o=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*i):(e=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/n)}(t=(a=8/r)*a),n=function(r){var e,n;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/n)}(t),o=.5641895835477563/R(r),Fe(r,je,1,0),o*(e*(je[1]+je[0])-a*n*(je[0]-je[1])))}var Oe=.6366197723675814,Ve=.8935769662791675,$e=3.957678419314858,Ge=7.086051060301773,He=[0,0];return function(r){var e,n,t,i,a,o,c;return r<0?NaN:0===r?H:r===M?0:r<=3?(a=r*r,o=P(r/Ve)*Te(r)*Oe,i=function(r){var e,n;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(e=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),n=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(e=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,n=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),e/n)}(a),o+(c=(r+Ve)*(r-228/256-.0029519662791675214))*i):r<=5.5?(a=r*r,o=P(r/$e)*Te(r)*Oe,i=function(r){var e,n;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(e=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,n=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(e=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),n=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),e/n)}(a),o+(c=(r+$e)*(r-1013/256-.0006471693148578684))*i):r<=8?(a=r*r,o=P(r/Ge)*Te(r)*Oe,i=function(r){var e,n;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(e=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,n=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(e=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,n=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),e/n)}(a),o+(c=(r+Ge)*(r-1814/256-.00011356030177269763))*i):(e=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/n)}(t=(a=8/r)*a),n=function(r){var e,n;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/n)}(t),c=.5641895835477563/R(r),Fe(r,He,1,0),c*(e*(He[0]-He[1])+a*n*(He[1]+He[0])))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).y0=e();
//# sourceMappingURL=browser.js.map
