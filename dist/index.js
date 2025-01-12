"use strict";var w=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var R=w(function(er,T){
var _=require('@stdlib/ndarray-base-assert-is-row-major/dist'),K=require('@stdlib/ndarray-base-unary-loop-interchange-order/dist'),F=require('@stdlib/math-base-special-fast-min/dist');function P(i,u,p,e,l,s,n,o,c,f){var r,t,a,v,x,q,O,m,y,b,g,j,E,h;for(h=K([i,u],[e,l],[o,c]),x=h.sh,m=h.sx,y=h.sy,q=x[0],O=x[1],r=m[0],t=m[1]-q*m[0],a=y[0],v=y[1]-q*y[0],b=s,g=f,E=0;E<O;E++){for(j=0;j<q;j++)n[g]=p[b],b+=r,g+=a;b+=t,g+=v}return n}function Q(i,u,p,e,l,s,n,o,c,f){var r,t,a,v;if(r=s,t=f,_([e,l])){for(v=0;v<i;v++){for(a=v;a<u;a++)n[t+a*c]=p[r+a*l];r+=e,t+=o}return n}for(v=0;v<u;v++){for(a=0;a<=F(v,i-1);a++)n[t+a*o]=p[r+a*e];r+=l,t+=c}return n}function W(i,u,p,e,l,s,n,o,c,f){var r,t,a,v;if(r=s,t=f,_([e,l])){for(v=0;v<i;v++){for(a=0;a<=F(v,u-1);a++)n[t+a*c]=p[r+a*l];r+=e,t+=o}return n}for(v=0;v<u;v++){for(a=v;a<i;a++)n[t+a*o]=p[r+a*e];r+=l,t+=c}return n}function X(i,u,p,e,l,s,n,o,c,f,r){return i==="upper"?Q(u,p,e,l,s,n,o,c,f,r):i==="lower"?W(u,p,e,l,s,n,o,c,f,r):P(u,p,e,l,s,n,o,c,f,r)}T.exports=X
});var k=w(function(ur,U){
var Y=require('@stdlib/blas-base-assert-is-layout/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=R();function $(i,u,p,e,l,s,n,o){var c,f,r,t;if(!Y(i))throw new TypeError(S('1yvFx',i));if(i==="column-major")c=1,f=s,r=1,t=o;else{if(s<e)throw new RangeError(S('1yvG8',e,s));if(o<e)throw new RangeError(S('1yvG9',e,o));c=s,f=1,r=o,t=1}return Z(u,p,e,l,c,f,0,n,r,t,0)}U.exports=$
});var C=w(function(nr,z){
var M=R();function d(i,u,p,e,l,s,n,o,c,f,r){return M(i,u,p,e,l,s,n,o,c,f,r)}z.exports=d
});var I=w(function(vr,H){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=k(),D=C();L(G,"ndarray",D);H.exports=G
});var N=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),rr=I(),V,J=A(N(__dirname,"./native.js"));B(J)?V=rr:V=J;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
