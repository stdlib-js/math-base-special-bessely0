// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,c,f;if(null==r)return n.call(r);i=r[a],f=a,e=null!=(c=r)&&t.call(c,f);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)},c="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,n;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(c&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?u:function(){throw new Error("not implemented")};var s,l=r,p="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,e,n;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),n=e,r=(p&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var g,v=s,h="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),n=e,r=(h&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=g,_="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var N,U={uint16:m,uint8:A};(N=new U.uint16(1))[0]=4660;var I=52===new U.uint8(N.buffer)[0],S=!0===I?1:0,k=new v(1),F=new l(k.buffer);function j(r){return k[0]=r,F[S]}var T=!0===I?1:0,O=new v(1),V=new l(O.buffer);function $(r){return r!=r}var G=1023,H=Number.NEGATIVE_INFINITY,W=.6931471803691238,C=1.9082149292705877e-10,L=0x40000000000000,P=.3333333333333333,R=1048575,M=2146435072,Z=1048576,X=1072693248;function Y(r){var e,n,t,i,a,o,c,f,u,s,l,p;return 0===r?H:$(r)||r<0?NaN:(a=0,(n=j(r))<Z&&(a-=54,n=j(r*=L)),n>=M?r+r:(a+=(n>>20)-G|0,a+=(f=614244+(n&=R)&1048576|0)>>20|0,c=(r=function(r,e){return O[0]=r,V[T]=e>>>0,O[0]}(r,n|f^X))-1,(R&2+n)<3?0===c?0===a?0:a*W+a*C:(o=c*c*(.5-P*c),0===a?c-o:a*W-(o-a*C-c)):(f=n-398458|0,u=440401-n|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=u)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*W-(e-(s*(e+o)+a*C)-c)):0===a?c-s*(c-o):a*W-(s*(c-o)-a*C-c))))}var q=Math.sqrt,z=Number.POSITIVE_INFINITY,B="function"==typeof Object.defineProperty?Object.defineProperty:null,D=Object.defineProperty;function J(r){return"number"==typeof r}function K(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Q(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+K(i):K(i)+r,t&&(r="-"+r)),r}var rr=String.prototype.toLowerCase,er=String.prototype.toUpperCase;function nr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!J(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Q(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Q(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===er.call(r.specifier)?er.call(n):rr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var tr=Math.abs,ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase,or=String.prototype.replace,cr=/e\+(\d)$/,fr=/e-(\d)$/,ur=/^(\d+)$/,sr=/^(\d+)e/,lr=/\.0$/,pr=/\.0*e/,yr=/(\..*[^0])0*e/;function dr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!J(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":tr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=or.call(n,yr,"$1e"),n=or.call(n,pr,"e"),n=or.call(n,lr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=or.call(n,cr,"e+0$1"),n=or.call(n,fr,"e-0$1"),r.alternate&&(n=or.call(n,ur,"$1."),n=or.call(n,sr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ar.call(r.specifier)?ar.call(n):ir.call(n)}function gr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var vr=String.fromCharCode,hr=isNaN,wr=Array.isArray;function br(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function mr(r){var e,n,t,i,a,o,c,f,u,s,l,p,y;if(!wr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=br(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,u=0;u<n.length;u++)switch(i=n.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,hr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,hr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=nr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!hr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=hr(a)?String(t.arg):vr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=dr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Q(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+gr(y):gr(y)+s)),o+=t.arg||"",c+=1}return o}var Ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Er(r){var e,n,t,i;for(n=[],i=0,t=Ar.exec(r);t;)(e=r.slice(i,Ar.lastIndex-t[0].length)).length&&n.push(e),n.push(_r(t)),i=Ar.lastIndex,t=Ar.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function xr(r){var e,n;if("string"!=typeof r)throw new TypeError(xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Er(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return mr.apply(null,e)}var Nr=Object.prototype,Ur=Nr.toString,Ir=Nr.__defineGetter__,Sr=Nr.__defineSetter__,kr=Nr.__lookupGetter__,Fr=Nr.__lookupSetter__,jr=function(){try{return B({},"x",{}),!0}catch(r){return!1}}()?D:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Ur.call(r))throw new TypeError(xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Ur.call(n))throw new TypeError(xr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(kr.call(r,e)||Fr.call(r,e)?(t=r.__proto__,r.__proto__=Nr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ir&&Ir.call(r,e,n.get),o&&Sr&&Sr.call(r,e,n.set),r};function Tr(r,e,n){jr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Or,Vr,$r=2147483647,Gr=2146435072,Hr=1048575,Wr=!0===I?0:1,Cr=new v(1),Lr=new l(Cr.buffer);!0===I?(Or=1,Vr=0):(Or=0,Vr=1);var Pr={HIGH:Or,LOW:Vr},Rr=new v(1),Mr=new l(Rr.buffer),Zr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e){return Mr[Zr]=r,Mr[Xr]=e,Rr[0]}var qr=Math.floor,zr=1023,Br=-1023,Dr=-1074;function Jr(r){return r===z||r===H}var Kr,Qr,re=2147483648;!0===I?(Kr=1,Qr=0):(Kr=0,Qr=1);var ee={HIGH:Kr,LOW:Qr},ne=new v(1),te=new l(ne.buffer),ie=ee.HIGH,ae=ee.LOW;function oe(r,e,n,t){return ne[0]=r,e[t]=te[ie],e[t+n]=te[ae],e}function ce(r){return oe(r,[0,0],1,0)}Tr(ce,"assign",oe);var fe=[0,0],ue=22250738585072014e-324,se=4503599627370496;function le(r,e,n,t){return $(r)||Jr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<ue?(e[t]=r*se,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Tr((function(r){return le(r,[0,0],1,0)}),"assign",le);var pe=2220446049250313e-31,ye=2148532223,de=[0,0],ge=[0,0];function ve(r,e){var n,t,i,a,o,c;return 0===e||0===r||$(r)||Jr(r)?r:(le(r,de,1,0),r=de[0],e+=de[1],e+=function(r){var e=j(r);return(e=(e&Gr)>>>20)-G|0}(r),e<Dr?(i=0,a=r,ce.assign(i,fe,1,0),o=fe[0],o&=$r,c=j(a),Yr(o|=c&=re,fe[1])):e>zr?r<0?H:z:(e<=Br?(e+=52,t=pe):t=1,ce.assign(r,ge,1,0),n=ge[0],n&=ye,t*Yr(n|=e+G<<20,ge[1])))}function he(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var we=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],be=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],me=16777216,Ae=5.960464477539063e-8,_e=he(20),Ee=he(20),xe=he(20),Ne=he(20);function Ue(r,e,n,t,i,a,o,c,f){var u,s,l,p,y,d,g,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=Ae*h|0,Ne[y]=h-me*s|0,h=t[v-1]+s,v-=1;if(h=ve(h,i),h-=8*qr(.125*h),h-=g=0|h,l=0,i>0?(g+=y=Ne[n-1]>>24-i,Ne[n-1]-=y<<24-i,l=Ne[n-1]>>23-i):0===i?l=Ne[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,u=0,y=0;y<n;y++)v=Ne[y],0===u?0!==v&&(u=1,Ne[y]=16777216-v):Ne[y]=16777215-v;if(i>0)switch(i){case 1:Ne[n-1]&=8388607;break;case 2:Ne[n-1]&=4194303}2===l&&(h=1-h,0!==u&&(h-=ve(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=Ne[y];if(0===v){for(d=1;0===Ne[a-d];d++);for(y=n+1;y<=n+d;y++){for(f[c+y]=we[o+y],s=0,v=0;v<=c;v++)s+=r[v]*f[c+(y-v)];t[y]=s}return Ue(r,e,n+=d,t,i,a,o,c,f)}}if(0===h)for(n-=1,i-=24;0===Ne[n];)n-=1,i-=24;else(h=ve(h,-i))>=me?(s=Ae*h|0,Ne[n]=h-me*s|0,i+=24,Ne[n+=1]=s):Ne[n]=0|h;for(s=ve(1,i),y=n;y>=0;y--)t[y]=s*Ne[y],s*=Ae;for(y=n;y>=0;y--){for(s=0,d=0;d<=p&&d<=n-y;d++)s+=be[d]*t[y+d];xe[n-y]=s}for(s=0,y=n;y>=0;y--)s+=xe[y];for(e[0]=0===l?s:-s,s=xe[0]-s,y=1;y<=n;y++)s+=xe[y];return e[1]=0===l?s:-s,7&g}function Ie(r,e,n,t){var i,a,o,c,f,u,s;for((a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),u=a-(o=t-1),s=o+4,f=0;f<=s;f++)_e[f]=u<0?0:we[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*_e[o+(f-u)];Ee[f]=i}return Ue(r,e,4,Ee,c,4,a,o,_e)}var Se=Math.round,ke=.6366197723675814,Fe=1.5707963267341256,je=6077100506506192e-26,Te=6077100506303966e-26,Oe=20222662487959506e-37,Ve=20222662487111665e-37,$e=84784276603689e-45,Ge=2047;function He(r,e,n){var t,i,a,o,c;return a=r-(t=Se(r*ke))*Fe,o=t*je,c=e>>20|0,n[0]=a-o,c-(j(n[0])>>20&Ge)>16&&(o=t*Oe-((i=a)-(a=i-(o=t*Te))-o),n[0]=a-o,c-(j(n[0])>>20&Ge)>49&&(o=t*$e-((i=a)-(a=i-(o=t*Ve))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var We=0,Ce=16777216,Le=1.5707963267341256,Pe=6077100506506192e-26,Re=2*Pe,Me=3*Pe,Ze=4*Pe,Xe=598523,Ye=1072243195,qe=1073928572,ze=1074752122,Be=1074977148,De=1075183036,Je=1075388923,Ke=1075594811,Qe=1094263291,rn=[0,0,0],en=[0,0];function nn(r,e){var n,t,i,a,o,c,f;if((i=j(r)&$r|0)<=Ye)return e[0]=r,e[1]=0,0;if(i<=ze)return(i&Hr)===Xe?He(r,i,e):i<=qe?r>0?(f=r-Le,e[0]=f-Pe,e[1]=f-e[0]-Pe,1):(f=r+Le,e[0]=f+Pe,e[1]=f-e[0]+Pe,-1):r>0?(f=r-2*Le,e[0]=f-Re,e[1]=f-e[0]-Re,2):(f=r+2*Le,e[0]=f+Re,e[1]=f-e[0]+Re,-2);if(i<=Ke)return i<=De?i===Be?He(r,i,e):r>0?(f=r-3*Le,e[0]=f-Me,e[1]=f-e[0]-Me,3):(f=r+3*Le,e[0]=f+Me,e[1]=f-e[0]+Me,-3):i===Je?He(r,i,e):r>0?(f=r-4*Le,e[0]=f-Ze,e[1]=f-e[0]-Ze,4):(f=r+4*Le,e[0]=f+Ze,e[1]=f-e[0]+Ze,-4);if(i<Qe)return He(r,i,e);if(i>=Gr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Cr[0]=r,Lr[Wr]}(r),f=Yr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)rn[o]=0|f,f=(f-rn[o])*Ce;for(rn[2]=f,a=3;rn[a-1]===We;)a-=1;return c=Ie(rn,en,t,a),r<0?(e[0]=-en[0],e[1]=-en[1],-c):(e[0]=en[0],e[1]=en[1],c)}var tn=-.16666666666666632,an=.00833333333332249,on=-.0001984126982985795,cn=27557313707070068e-22,fn=-2.5050760253406863e-8,un=1.58969099521155e-10,sn=.0416666666666666,ln=-.001388888888887411,pn=2480158728947673e-20,yn=-2.7557314351390663e-7,dn=2.087572321298175e-9,gn=-11359647557788195e-27;function vn(r,e,n,t,i){var a,o,c,f,u;return o=an+(u=r*r)*(on+u*cn)+u*(f=u*u)*(fn+u*un),c=u*r,n[i]=0===e?r+c*(tn+u*o):r-(u*(.5*e-c*o)-e-c*tn),o=u*(sn+u*(ln+u*pn)),o+=f*f*(yn+u*(dn+u*gn)),f=1-(a=.5*u),n[i+t]=f+(1-f-a+(u*o-r*e)),n}var hn=1072243195,wn=1044381696,bn=[0,0];function mn(r,e,n,t){var i,a;if(i=j(r),(i&=$r)<=hn)return i<wn&&0==(0|r)&&(e[t]=r,e[t+n]=0),vn(r,0,e,n,t);if(i>=Gr)return e[t]=NaN,e[t+n]=NaN,e;switch(a=nn(r,bn),vn(bn[0],bn[1],e,n,t),3&a){case 1:return i=e[t+n],e[t+n]=-e[t],e[t]=i,e;case 2:return e[t]*=-1,e[t+n]*=-1,e;case 3:return i=-e[t+n],e[t+n]=e[t],e[t]=i,e;default:return e}}Tr((function(r){return mn(r,[0,0],1,0)}),"assign",mn);var An=.5641895835477563,_n=2.404825557695773,En=5.520078110286311,xn=616,Nn=-.0014244423042272315,Un=1413,In=.0005468602863106496,Sn=[0,0];function kn(r){var e,n,t,i,a,o;return r<0&&(r=-r),r===z?0:0===r?1:r<=4?(i=function(r){var e,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(e=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(e=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),e/n)}(a=r*r),(o=(r+_n)*(r-xn/256-Nn))*i):r<=8?(i=function(r){var e,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(e=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(e=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),e/n)}(a=1-r*r/64),(o=(r+En)*(r-Un/256-In))*i):(e=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/n)}(t=(a=8/r)*a),n=function(r){var e,n;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/n)}(t),o=An/q(r),mn(r,Sn,1,0),o*(e*(Sn[1]+Sn[0])-a*n*(Sn[0]-Sn[1])))}var Fn=.6366197723675814,jn=.8935769662791675,Tn=3.957678419314858,On=7.086051060301773,Vn=[0,0];return function(r){var e,n,t,i,a,o,c;return r<0?NaN:0===r?H:r===z?0:r<=3?(a=r*r,o=Y(r/jn)*kn(r)*Fn,i=function(r){var e,n;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(e=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),n=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(e=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,n=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),e/n)}(a),o+(c=(r+jn)*(r-228/256-.0029519662791675214))*i):r<=5.5?(a=r*r,o=Y(r/Tn)*kn(r)*Fn,i=function(r){var e,n;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(e=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,n=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(e=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),n=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),e/n)}(a),o+(c=(r+Tn)*(r-1013/256-.0006471693148578684))*i):r<=8?(a=r*r,o=Y(r/On)*kn(r)*Fn,i=function(r){var e,n;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(e=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,n=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(e=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,n=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),e/n)}(a),o+(c=(r+On)*(r-1814/256-.00011356030177269763))*i):(e=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/n)}(t=(a=8/r)*a),n=function(r){var e,n;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/n)}(t),c=.5641895835477563/q(r),mn(r,Vn,1,0),c*(e*(Vn[0]-Vn[1])+a*n*(Vn[1]+Vn[0])))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).y0=e();
//# sourceMappingURL=browser.js.map