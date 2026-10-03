"use strict";var w=function(v,e){return function(){try{return e||v((e={exports:{}}).exports,e),e.exports}catch(l){throw (e=0, l)}};};var R=w(function(ur,F){
var _=require('@stdlib/ndarray-base-assert-is-row-major/dist'),K=require('@stdlib/ndarray-base-unary-loop-interchange-order/dist'),C=require('@stdlib/math-base-special-fast-min/dist');function P(v,e,l,u,s,p,i,o,c,f){var r,t,a,n,x,q,O,m,y,b,g,j,E,h;for(h=K([v,e],[u,s],[o,c]),x=h.sh,m=h.sx,y=h.sy,q=x[0],O=x[1],r=m[0],t=m[1]-q*m[0],a=y[0],n=y[1]-q*y[0],b=p,g=f,E=0;E<O;E++){for(j=0;j<q;j++)i[g]=l[b],b+=r,g+=a;b+=t,g+=n}return i}function Q(v,e,l,u,s,p,i,o,c,f){var r,t,a,n;if(r=p,t=f,_([u,s])){for(n=0;n<v;n++){for(a=n;a<e;a++)i[t+a*c]=l[r+a*s];r+=u,t+=o}return i}for(n=0;n<e;n++){for(a=0;a<=C(n,v-1);a++)i[t+a*o]=l[r+a*u];r+=s,t+=c}return i}function W(v,e,l,u,s,p,i,o,c,f){var r,t,a,n;if(r=p,t=f,_([u,s])){for(n=0;n<v;n++){for(a=0;a<=C(n,e-1);a++)i[t+a*c]=l[r+a*s];r+=u,t+=o}return i}for(n=0;n<e;n++){for(a=n;a<v;a++)i[t+a*o]=l[r+a*u];r+=s,t+=c}return i}function X(v,e,l,u,s,p,i,o,c,f,r){return v==="upper"?Q(e,l,u,s,p,i,o,c,f,r):v==="lower"?W(e,l,u,s,p,i,o,c,f,r):P(e,l,u,s,p,i,o,c,f,r)}F.exports=X
});var U=w(function(ir,T){
var Y=require('@stdlib/blas-base-assert-is-layout/dist'),Z=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),$=R();function M(v,e,l,u,s,p,i,o){var c,f,r,t;if(!Y(v))throw new TypeError(S('1yvFx',v));if(Z(v))c=1,f=p,r=1,t=o;else{if(p<u)throw new RangeError(S('1yvG8',u,p));if(o<u)throw new RangeError(S('1yvG9',u,o));c=p,f=1,r=o,t=1}return $(e,l,u,s,c,f,0,i,r,t,0)}T.exports=M
});var z=w(function(nr,k){
var d=R();function L(v,e,l,u,s,p,i,o,c,f,r){return d(v,e,l,u,s,p,i,o,c,f,r)}k.exports=L
});var I=w(function(vr,H){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=U(),N=z();D(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),rr=require('@stdlib/assert-is-error/dist'),ar=I(),V,J=B(A(__dirname,"./native.js"));rr(J)?V=ar:V=J;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
