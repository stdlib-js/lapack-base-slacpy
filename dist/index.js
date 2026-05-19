"use strict";var w=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var R=w(function(ur,F){
var _=require('@stdlib/ndarray-base-assert-is-row-major/dist'),K=require('@stdlib/ndarray-base-unary-loop-interchange-order/dist'),C=require('@stdlib/math-base-special-fast-min/dist');function P(v,u,p,e,l,c,i,o,s,f){var r,t,a,n,x,q,O,m,y,b,g,j,E,h;for(h=K([v,u],[e,l],[o,s]),x=h.sh,m=h.sx,y=h.sy,q=x[0],O=x[1],r=m[0],t=m[1]-q*m[0],a=y[0],n=y[1]-q*y[0],b=c,g=f,E=0;E<O;E++){for(j=0;j<q;j++)i[g]=p[b],b+=r,g+=a;b+=t,g+=n}return i}function Q(v,u,p,e,l,c,i,o,s,f){var r,t,a,n;if(r=c,t=f,_([e,l])){for(n=0;n<v;n++){for(a=n;a<u;a++)i[t+a*s]=p[r+a*l];r+=e,t+=o}return i}for(n=0;n<u;n++){for(a=0;a<=C(n,v-1);a++)i[t+a*o]=p[r+a*e];r+=l,t+=s}return i}function W(v,u,p,e,l,c,i,o,s,f){var r,t,a,n;if(r=c,t=f,_([e,l])){for(n=0;n<v;n++){for(a=0;a<=C(n,u-1);a++)i[t+a*s]=p[r+a*l];r+=e,t+=o}return i}for(n=0;n<u;n++){for(a=n;a<v;a++)i[t+a*o]=p[r+a*e];r+=l,t+=s}return i}function X(v,u,p,e,l,c,i,o,s,f,r){return v==="upper"?Q(u,p,e,l,c,i,o,s,f,r):v==="lower"?W(u,p,e,l,c,i,o,s,f,r):P(u,p,e,l,c,i,o,s,f,r)}F.exports=X
});var U=w(function(ir,T){
var Y=require('@stdlib/blas-base-assert-is-layout/dist'),Z=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),$=R();function M(v,u,p,e,l,c,i,o){var s,f,r,t;if(!Y(v))throw new TypeError(S('1yvFx',v));if(Z(v))s=1,f=c,r=1,t=o;else{if(c<e)throw new RangeError(S('1yvG8',e,c));if(o<e)throw new RangeError(S('1yvG9',e,o));s=c,f=1,r=o,t=1}return $(u,p,e,l,s,f,0,i,r,t,0)}T.exports=M
});var z=w(function(nr,k){
var d=R();function L(v,u,p,e,l,c,i,o,s,f,r){return d(v,u,p,e,l,c,i,o,s,f,r)}k.exports=L
});var I=w(function(vr,H){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=U(),N=z();D(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),rr=require('@stdlib/assert-is-error/dist'),ar=I(),V,J=B(A(__dirname,"./native.js"));rr(J)?V=ar:V=J;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
