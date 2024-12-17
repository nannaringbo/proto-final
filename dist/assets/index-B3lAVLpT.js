(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="170",Oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xc=0,Po=1,qc=2,Kl=1,Yc=2,ln=3,mn=0,Le=1,pe=2,Pn=0,Bi=1,Lo=2,Do=3,Io=4,jc=5,Jn=100,Zc=101,Jc=102,$c=103,Kc=104,Qc=200,th=201,eh=202,nh=203,ha=204,ua=205,ih=206,rh=207,sh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,fa=0,da=1,pa=2,Wi=3,ma=4,ga=5,_a=6,va=7,no=0,fh=1,dh=2,Ln=0,ph=1,mh=2,gh=3,_h=4,vh=5,xh=6,Mh=7,Ql=300,Xi=301,qi=302,xa=303,Ma=304,xs=306,ds=1e3,hn=1001,ya=1002,Fe=1003,yh=1004,Dr=1005,Pe=1006,Cs=1007,un=1008,gn=1009,tc=1010,ec=1011,gr=1012,io=1013,ri=1014,fn=1015,Er=1016,ro=1017,so=1018,Yi=1020,nc=35902,ic=1021,rc=1022,qe=1023,sc=1024,ac=1025,zi=1026,ji=1027,oc=1028,ao=1029,lc=1030,oo=1031,lo=1033,as=33776,os=33777,ls=33778,cs=33779,Sa=35840,Ea=35841,wa=35842,Ta=35843,ba=36196,Aa=37492,Ra=37496,Ca=37808,Pa=37809,La=37810,Da=37811,Ia=37812,Ua=37813,Na=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Ga=37821,hs=36492,Va=36494,Wa=36495,cc=36283,Xa=36284,qa=36285,Ya=36286,Sh=3200,Eh=3201,co=0,wh=1,Cn="",Ne="srgb",ai="srgb-linear",Ms="linear",ee="srgb",fi=7680,Uo=519,Th=512,bh=513,Ah=514,hc=515,Rh=516,Ch=517,Ph=518,Lh=519,No=35044,Fo="300 es",dn=2e3,ps=2001;class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const ur=Math.PI/180,_r=180/Math.PI;function li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function ho(i,t){return(i%t+t)%t}function Dh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Ih(i,t,e){return i!==t?(e-i)/(t-i):0}function fr(i,t,e){return(1-e)*i+e*t}function Uh(i,t,e,n){return fr(i,t,1-Math.exp(-e*n))}function Nh(i,t=1){return t-Math.abs(ho(i,t*2)-t)}function Fh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Oh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zh(i,t){return i+Math.random()*(t-i)}function kh(i){return i*(.5-Math.random())}function Hh(i){i!==void 0&&(Oo=i);let t=Oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gh(i){return i*ur}function Vh(i){return i*_r}function Wh(i){return(i&i-1)===0&&i!==0}function Xh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yh(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),p=a((t+n)/2),f=s((t-n)/2),d=a((t-n)/2),m=s((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":i.set(o*p,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*p,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*p,o*l);break;case"XZX":i.set(o*p,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*p,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*p,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ja={DEG2RAD:ur,RAD2DEG:_r,generateUUID:li,clamp:xe,euclideanModulo:ho,mapLinear:Dh,inverseLerp:Ih,lerp:fr,damp:Uh,pingpong:Nh,smoothstep:Fh,smootherstep:Oh,randInt:Bh,randFloat:zh,randFloatSpread:kh,seededRandom:Hh,degToRad:Gh,radToDeg:Vh,isPowerOfTwo:Wh,ceilPowerOfTwo:Xh,floorPowerOfTwo:qh,setQuaternionFromProperEuler:Yh,normalize:we,denormalize:Ai};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,r,s,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const p=this.elements;return p[0]=t,p[1]=r,p[2]=o,p[3]=e,p[4]=s,p[5]=c,p[6]=n,p[7]=a,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],p=n[4],f=n[7],d=n[2],m=n[5],v=n[8],g=r[0],u=r[3],h=r[6],x=r[1],M=r[4],_=r[7],T=r[2],E=r[5],w=r[8];return s[0]=a*g+o*x+c*T,s[3]=a*u+o*M+c*E,s[6]=a*h+o*_+c*w,s[1]=l*g+p*x+f*T,s[4]=l*u+p*M+f*E,s[7]=l*h+p*_+f*w,s[2]=d*g+m*x+v*T,s[5]=d*u+m*M+v*E,s[8]=d*h+m*_+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],p=t[8];return e*a*p-e*o*l-n*s*p+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],p=t[8],f=p*a-o*l,d=o*c-p*s,m=l*s-a*c,v=e*f+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=f*g,t[1]=(r*l-p*n)*g,t[2]=(o*n-r*a)*g,t[3]=d*g,t[4]=(p*e-r*c)*g,t[5]=(r*s-o*e)*g,t[6]=m*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ps.makeScale(t,e)),this}rotate(t){return this.premultiply(Ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new kt;function uc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){const i=vr("canvas");return i.style.display="block",i}const Bo={};function or(i){i in Bo||(Bo[i]=!0,console.warn(i))}function Zh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Jh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $h(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?Ms:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const zo=[.64,.33,.3,.6,.15,.06],ko=[.2126,.7152,.0722],Ho=[.3127,.329],Go=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[ai]:{primaries:zo,whitePoint:Ho,transfer:Ms,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:ko,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:zo,whitePoint:Ho,transfer:ee,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:ko,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let di;class Kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=vr("canvas")),di.width=t.width,di.height=t.height;const n=di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qh=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ls(r[a].image)):s.push(Ls(r[a]))}else s=Ls(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ls(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tu=0;class Se extends oi{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=hn,r=hn,s=Pe,a=un,o=qe,c=gn,l=Se.DEFAULT_ANISOTROPY,p=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=li(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=Ql;Se.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],p=c[4],f=c[8],d=c[1],m=c[5],v=c[9],g=c[2],u=c[6],h=c[10];if(Math.abs(p-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-u)<.01){if(Math.abs(p+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+u)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(m+1)/2,T=(h+1)/2,E=(p+d)/4,w=(f+g)/4,A=(v+u)/4;return M>_&&M>T?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=w/n):_>T?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=E/r,s=A/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=w/s,r=A/s),this.set(n,r,s,e),this}let x=Math.sqrt((u-v)*(u-v)+(f-g)*(f-g)+(d-p)*(d-p));return Math.abs(x)<.001&&(x=1),this.x=(u-v)/x,this.y=(f-g)/x,this.z=(d-p)/x,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Se(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends eu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nu extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],p=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],g=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=p,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=g;return}if(f!==g||c!==d||l!==m||p!==v){let u=1-o;const h=c*d+l*m+p*v+f*g,x=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const T=Math.sqrt(M),E=Math.atan2(T,h*x);u=Math.sin(u*E)/T,o=Math.sin(o*E)/T}const _=o*x;if(c=c*u+d*_,l=l*u+m*_,p=p*u+v*_,f=f*u+g*_,u===1-o){const T=1/Math.sqrt(c*c+l*l+p*p+f*f);c*=T,l*=T,p*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=p,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],p=n[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+p*f+c*m-l*d,t[e+1]=c*v+p*d+l*f-o*m,t[e+2]=l*v+p*m+o*d-c*f,t[e+3]=p*v-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),p=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*p*f+l*m*v,this._y=l*m*f-d*p*v,this._z=l*p*v+d*m*f,this._w=l*p*f-d*m*v;break;case"YXZ":this._x=d*p*f+l*m*v,this._y=l*m*f-d*p*v,this._z=l*p*v-d*m*f,this._w=l*p*f+d*m*v;break;case"ZXY":this._x=d*p*f-l*m*v,this._y=l*m*f+d*p*v,this._z=l*p*v+d*m*f,this._w=l*p*f-d*m*v;break;case"ZYX":this._x=d*p*f-l*m*v,this._y=l*m*f+d*p*v,this._z=l*p*v-d*m*f,this._w=l*p*f+d*m*v;break;case"YZX":this._x=d*p*f+l*m*v,this._y=l*m*f+d*p*v,this._z=l*p*v-d*m*f,this._w=l*p*f-d*m*v;break;case"XZY":this._x=d*p*f-l*m*v,this._y=l*m*f-d*p*v,this._z=l*p*v+d*m*f,this._w=l*p*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],p=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(p-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(p-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,p=e._w;return this._x=n*p+a*o+r*l-s*c,this._y=r*p+a*c+s*o-n*l,this._z=s*p+a*l+n*c-r*o,this._w=a*p-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),p=Math.atan2(l,o),f=Math.sin((1-e)*p)/l,d=Math.sin(e*p)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),p=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*p,this.y=n+c*p+o*l-s*f,this.z=r+c*f+s*p-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ds.copy(this).projectOnVector(t),this.sub(Ds)}reflect(t){return this.sub(Ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new V,Wo=new _n;class wr{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(s,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Ur.subVectors(this.max,tr),pi.subVectors(t.a,tr),mi.subVectors(t.b,tr),gi.subVectors(t.c,tr),Sn.subVectors(mi,pi),En.subVectors(gi,mi),Nn.subVectors(pi,gi);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Nn.z,Nn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Nn.z,0,-Nn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Nn.y,Nn.x,0];return!Is(e,pi,mi,gi,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Is(e,pi,mi,gi,Ur))?!1:(Nr.crossVectors(Sn,En),e=[Nr.x,Nr.y,Nr.z],Is(e,pi,mi,gi,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new V,new V,new V,new V,new V,new V,new V,new V],Ge=new V,Ir=new wr,pi=new V,mi=new V,gi=new V,Sn=new V,En=new V,Nn=new V,tr=new V,Ur=new V,Nr=new V,Fn=new V;function Is(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fn.fromArray(i,s);const o=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),c=t.dot(Fn),l=e.dot(Fn),p=n.dot(Fn);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>o)return!1}return!0}const iu=new wr,er=new V,Us=new V;class ys{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):iu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Us.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Us)),this.expandByPoint(er.copy(t.center).sub(Us))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new V,Ns=new V,Fr=new V,wn=new V,Fs=new V,Or=new V,Os=new V;class Ss{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ns.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Ns);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=wn.dot(this.direction),c=-wn.dot(Fr),l=wn.lengthSq(),p=Math.abs(1-a*a);let f,d,m,v;if(p>0)if(f=a*c-o,d=a*o-c,v=s*p,f>=0)if(d>=-v)if(d<=v){const g=1/p;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ns).addScaledVector(Fr,d),m}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),r=nn.dot(nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),p>=0?(s=(t.min.y-d.y)*p,a=(t.max.y-d.y)*p):(s=(t.max.y-d.y)*p,a=(t.min.y-d.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,r,s){Fs.subVectors(e,t),Or.subVectors(n,t),Os.crossVectors(Fs,Or);let a=this.direction.dot(Os),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);const c=o*this.direction.dot(Or.crossVectors(wn,Or));if(c<0)return null;const l=o*this.direction.dot(Fs.cross(wn));if(l<0||c+l>a)return null;const p=-o*wn.dot(Os);return p<0?null:this.at(p/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,r,s,a,o,c,l,p,f,d,m,v,g,u){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,p,f,d,m,v,g,u)}set(t,e,n,r,s,a,o,c,l,p,f,d,m,v,g,u){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=p,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=g,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/_i.setFromMatrixColumn(t,0).length(),s=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),p=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*p,m=a*f,v=o*p,g=o*f;e[0]=c*p,e[4]=-c*f,e[8]=l,e[1]=m+v*l,e[5]=d-g*l,e[9]=-o*c,e[2]=g-d*l,e[6]=v+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*p,m=c*f,v=l*p,g=l*f;e[0]=d+g*o,e[4]=v*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*p,e[9]=-o,e[2]=m*o-v,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*p,m=c*f,v=l*p,g=l*f;e[0]=d-g*o,e[4]=-a*f,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*p,e[9]=g-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*p,m=a*f,v=o*p,g=o*f;e[0]=c*p,e[4]=v*l-m,e[8]=d*l+g,e[1]=c*f,e[5]=g*l+d,e[9]=m*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,v=o*c,g=o*l;e[0]=c*p,e[4]=g-d*f,e[8]=v*f+m,e[1]=f,e[5]=a*p,e[9]=-o*p,e[2]=-l*p,e[6]=m*f+v,e[10]=d-g*f}else if(t.order==="XZY"){const d=a*c,m=a*l,v=o*c,g=o*l;e[0]=c*p,e[4]=-f,e[8]=l*p,e[1]=d*f+g,e[5]=a*p,e[9]=m*f-v,e[2]=v*f-m,e[6]=o*p,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,su)}lookAt(t,e,n){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Tn.crossVectors(n,Ie),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Tn.crossVectors(n,Ie)),Tn.normalize(),Br.crossVectors(Ie,Tn),r[0]=Tn.x,r[4]=Br.x,r[8]=Ie.x,r[1]=Tn.y,r[5]=Br.y,r[9]=Ie.y,r[2]=Tn.z,r[6]=Br.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],p=n[1],f=n[5],d=n[9],m=n[13],v=n[2],g=n[6],u=n[10],h=n[14],x=n[3],M=n[7],_=n[11],T=n[15],E=r[0],w=r[4],A=r[8],y=r[12],S=r[1],I=r[5],L=r[9],U=r[13],z=r[2],j=r[6],X=r[10],q=r[14],R=r[3],H=r[7],k=r[11],J=r[15];return s[0]=a*E+o*S+c*z+l*R,s[4]=a*w+o*I+c*j+l*H,s[8]=a*A+o*L+c*X+l*k,s[12]=a*y+o*U+c*q+l*J,s[1]=p*E+f*S+d*z+m*R,s[5]=p*w+f*I+d*j+m*H,s[9]=p*A+f*L+d*X+m*k,s[13]=p*y+f*U+d*q+m*J,s[2]=v*E+g*S+u*z+h*R,s[6]=v*w+g*I+u*j+h*H,s[10]=v*A+g*L+u*X+h*k,s[14]=v*y+g*U+u*q+h*J,s[3]=x*E+M*S+_*z+T*R,s[7]=x*w+M*I+_*j+T*H,s[11]=x*A+M*L+_*X+T*k,s[15]=x*y+M*U+_*q+T*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],p=t[2],f=t[6],d=t[10],m=t[14],v=t[3],g=t[7],u=t[11],h=t[15];return v*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*m-n*c*m)+g*(+e*c*m-e*l*d+s*a*d-r*a*m+r*l*p-s*c*p)+u*(+e*l*f-e*o*m-s*a*f+n*a*m+s*o*p-n*l*p)+h*(-r*o*p-e*c*f+e*o*d+r*a*f-n*a*d+n*c*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],p=t[8],f=t[9],d=t[10],m=t[11],v=t[12],g=t[13],u=t[14],h=t[15],x=f*u*l-g*d*l+g*c*m-o*u*m-f*c*h+o*d*h,M=v*d*l-p*u*l-v*c*m+a*u*m+p*c*h-a*d*h,_=p*g*l-v*f*l+v*o*m-a*g*m-p*o*h+a*f*h,T=v*f*c-p*g*c-v*o*d+a*g*d+p*o*u-a*f*u,E=e*x+n*M+r*_+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(g*d*s-f*u*s-g*r*m+n*u*m+f*r*h-n*d*h)*w,t[2]=(o*u*s-g*c*s+g*r*l-n*u*l-o*r*h+n*c*h)*w,t[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*m-n*c*m)*w,t[4]=M*w,t[5]=(p*u*s-v*d*s+v*r*m-e*u*m-p*r*h+e*d*h)*w,t[6]=(v*c*s-a*u*s-v*r*l+e*u*l+a*r*h-e*c*h)*w,t[7]=(a*d*s-p*c*s+p*r*l-e*d*l-a*r*m+e*c*m)*w,t[8]=_*w,t[9]=(v*f*s-p*g*s-v*n*m+e*g*m+p*n*h-e*f*h)*w,t[10]=(a*g*s-v*o*s+v*n*l-e*g*l-a*n*h+e*o*h)*w,t[11]=(p*o*s-a*f*s-p*n*l+e*f*l+a*n*m-e*o*m)*w,t[12]=T*w,t[13]=(p*g*r-v*f*r+v*n*d-e*g*d-p*n*u+e*f*u)*w,t[14]=(v*o*r-a*g*r-v*n*c+e*g*c+a*n*u-e*o*u)*w,t[15]=(a*f*r-p*o*r+p*n*c-e*f*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,p=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,p*o+n,p*c-r*a,0,l*c-r*o,p*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,p=a+a,f=o+o,d=s*l,m=s*p,v=s*f,g=a*p,u=a*f,h=o*f,x=c*l,M=c*p,_=c*f,T=n.x,E=n.y,w=n.z;return r[0]=(1-(g+h))*T,r[1]=(m+_)*T,r[2]=(v-M)*T,r[3]=0,r[4]=(m-_)*E,r[5]=(1-(d+h))*E,r[6]=(u+x)*E,r[7]=0,r[8]=(v+M)*w,r[9]=(u-x)*w,r[10]=(1-(d+g))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=_i.set(r[0],r[1],r[2]).length();const a=_i.set(r[4],r[5],r[6]).length(),o=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ve.copy(this);const l=1/s,p=1/a,f=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=p,Ve.elements[5]*=p,Ve.elements[6]*=p,Ve.elements[8]*=f,Ve.elements[9]*=f,Ve.elements[10]*=f,e.setFromRotationMatrix(Ve),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=dn){const c=this.elements,l=2*s/(e-t),p=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let m,v;if(o===dn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ps)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=dn){const c=this.elements,l=1/(e-t),p=1/(n-r),f=1/(a-s),d=(e+t)*l,m=(n+r)*p;let v,g;if(o===dn)v=(a+s)*f,g=-2*f;else if(o===ps)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new V,Ve=new te,ru=new V(0,0,0),su=new V(1,1,1),Tn=new V,Br=new V,Ie=new V,Xo=new te,qo=new _n;class je{constructor(t=0,e=0,n=0,r=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],p=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qo.setFromEuler(this),this.setFromQuaternion(qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let au=0;const Yo=new V,vi=new _n,rn=new te,zr=new V,nr=new V,ou=new V,lu=new _n,jo=new V(1,0,0),Zo=new V(0,1,0),Jo=new V(0,0,1),$o={type:"added"},cu={type:"removed"},xi={type:"childadded",child:null},Bs={type:"childremoved",child:null};class me extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new V,e=new je,n=new _n,r=new V(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new te},normalMatrix:{value:new kt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Zo,t)}rotateZ(t){return this.rotateOnAxis(Jo,t)}translateOnAxis(t,e){return Yo.copy(t).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Zo,t)}translateZ(t){return this.translateOnAxis(Jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(nr,zr,this.up):rn.lookAt(zr,nr,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(rn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),p=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const p=o[l];delete p.metadata,c.push(p)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}me.DEFAULT_UP=new V(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new V,sn=new V,zs=new V,an=new V,Mi=new V,yi=new V,Ko=new V,ks=new V,Hs=new V,Gs=new V,Vs=new Qt,Ws=new Qt,Xs=new Qt;class Xe{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),We.subVectors(t,e),r.cross(We);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){We.subVectors(r,e),sn.subVectors(n,e),zs.subVectors(t,e);const a=We.dot(We),o=We.dot(sn),c=We.dot(zs),l=sn.dot(sn),p=sn.dot(zs),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*p)*d,v=(a*p-o*c)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,an.x),c.addScaledVector(a,an.y),c.addScaledVector(o,an.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Vs.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),Vs.fromBufferAttribute(t,e),Ws.fromBufferAttribute(t,n),Xs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Vs,s.x),a.addScaledVector(Ws,s.y),a.addScaledVector(Xs,s.z),a}static isFrontFacing(t,e,n,r){return We.subVectors(n,e),sn.subVectors(t,e),We.cross(sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),We.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Mi.subVectors(r,n),yi.subVectors(s,n),ks.subVectors(t,n);const c=Mi.dot(ks),l=yi.dot(ks);if(c<=0&&l<=0)return e.copy(n);Hs.subVectors(t,r);const p=Mi.dot(Hs),f=yi.dot(Hs);if(p>=0&&f<=p)return e.copy(r);const d=c*f-p*l;if(d<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Mi,a);Gs.subVectors(t,s);const m=Mi.dot(Gs),v=yi.dot(Gs);if(v>=0&&m<=v)return e.copy(s);const g=m*l-c*v;if(g<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(yi,o);const u=p*v-m*f;if(u<=0&&f-p>=0&&m-v>=0)return Ko.subVectors(s,r),o=(f-p)/(f-p+(m-v)),e.copy(r).addScaledVector(Ko,o);const h=1/(u+g+d);return a=g*h,o=d*h,e.copy(n).addScaledVector(Mi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=ho(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=qs(a,s,t+1/3),this.g=qs(a,s,t),this.b=qs(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=pc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Yt.fromWorkingColorSpace(ye.copy(this),t),Math.round(xe(ye.r*255,0,255))*65536+Math.round(xe(ye.g*255,0,255))*256+Math.round(xe(ye.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,r=ye.g,s=ye.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const p=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=p<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=p,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Ne){Yt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,r=ye.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(kr);const n=fr(bn.h,kr.h,e),r=fr(bn.s,kr.s,e),s=fr(bn.l,kr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Ht;Ht.NAMES=pc;let hu=0;class ci extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=li(),this.name="",this.blending=Bi,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ze extends ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new V,Hr=new St;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}}class mc extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gc extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uu=0;const ze=new te,Ys=new me,Si=new V,Ue=new wr,ir=new wr,ve=new V;class Ee extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uc(t)?gc:mc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ue.min,ir.min),Ue.expandByPoint(ve),ve.addVectors(Ue.max,ir.max),Ue.expandByPoint(ve)):(Ue.expandByPoint(ir.min),Ue.expandByPoint(ir.max))}Ue.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,p=o.count;l<p;l++)ve.fromBufferAttribute(o,l),c&&(Si.fromBufferAttribute(t,l),ve.add(Si)),r=Math.max(r,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new V,c[A]=new V;const l=new V,p=new V,f=new V,d=new St,m=new St,v=new St,g=new V,u=new V;function h(A,y,S){l.fromBufferAttribute(n,A),p.fromBufferAttribute(n,y),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),v.fromBufferAttribute(s,S),p.sub(l),f.sub(l),m.sub(d),v.sub(d);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(g.copy(p).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(I),u.copy(f).multiplyScalar(m.x).addScaledVector(p,-v.x).multiplyScalar(I),o[A].add(g),o[y].add(g),o[S].add(g),c[A].add(u),c[y].add(u),c[S].add(u))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,y=x.length;A<y;++A){const S=x[A],I=S.start,L=S.count;for(let U=I,z=I+L;U<z;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new V,_=new V,T=new V,E=new V;function w(A){T.fromBufferAttribute(r,A),E.copy(T);const y=o[A];M.copy(y),M.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(E,y);const I=_.dot(c[A])<0?-1:1;a.setXYZW(A,M.x,M.y,M.z,I)}for(let A=0,y=x.length;A<y;++A){const S=x[A],I=S.start,L=S.count;for(let U=I,z=I+L;U<z;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new V,s=new V,a=new V,o=new V,c=new V,l=new V,p=new V,f=new V;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),g=t.getX(d+1),u=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,u),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,u),o.add(p),c.add(p),l.add(p),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),n.setXYZ(d+0,p.x,p.y,p.z),n.setXYZ(d+1,p.x,p.y,p.z),n.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){const l=o.array,p=o.itemSize,f=o.normalized,d=new l.constructor(c.length*p);let m=0,v=0;for(let g=0,u=c.length;g<u;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*p;for(let h=0;h<p;h++)d[v++]=l[m++]}return new Ye(d,p,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let p=0,f=l.length;p<f;p++){const d=l[p],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],p=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];p.push(m.toJSON(t.data))}p.length>0&&(r[c]=p,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(e))}const s=t.morphAttributes;for(const l in s){const p=[],f=s[l];for(let d=0,m=f.length;d<m;d++)p.push(f[d].clone(e));this.morphAttributes[l]=p}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,p=a.length;l<p;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new te,On=new Ss,Gr=new ys,tl=new V,Vr=new V,Wr=new V,Xr=new V,js=new V,qr=new V,el=new V,Yr=new V;class he extends me{constructor(t=new Ee,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const p=o[c],f=s[c];p!==0&&(js.fromBufferAttribute(f,t),a?qr.addScaledVector(js,p):qr.addScaledVector(js.sub(e),p))}e.add(qr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),On.copy(t.ray).recast(t.near),!(Gr.containsPoint(On.origin)===!1&&(On.intersectSphere(Gr,tl)===null||On.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(Qo.copy(s).invert(),On.copy(t.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const u=d[v],h=a[u.materialIndex],x=Math.max(u.start,m.start),M=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let _=x,T=M;_<T;_+=3){const E=o.getX(_),w=o.getX(_+1),A=o.getX(_+2);r=jr(this,h,t,n,l,p,f,E,w,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=u.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let u=v,h=g;u<h;u+=3){const x=o.getX(u),M=o.getX(u+1),_=o.getX(u+2);r=jr(this,a,t,n,l,p,f,x,M,_),r&&(r.faceIndex=Math.floor(u/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const u=d[v],h=a[u.materialIndex],x=Math.max(u.start,m.start),M=Math.min(c.count,Math.min(u.start+u.count,m.start+m.count));for(let _=x,T=M;_<T;_+=3){const E=_,w=_+1,A=_+2;r=jr(this,h,t,n,l,p,f,E,w,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=u.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let u=v,h=g;u<h;u+=3){const x=u,M=u+1,_=u+2;r=jr(this,a,t,n,l,p,f,x,M,_),r&&(r.faceIndex=Math.floor(u/3),e.push(r))}}}}function fu(i,t,e,n,r,s,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===mn,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Yr);return l<e.near||l>e.far?null:{distance:l,point:Yr.clone(),object:i}}function jr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Vr),i.getVertexPosition(c,Wr),i.getVertexPosition(l,Xr);const p=fu(i,t,e,n,Vr,Wr,Xr,el);if(p){const f=new V;Xe.getBarycoord(el,Vr,Wr,Xr,f),r&&(p.uv=Xe.getInterpolatedAttribute(r,o,c,l,f,new St)),s&&(p.uv1=Xe.getInterpolatedAttribute(s,o,c,l,f,new St)),a&&(p.normal=Xe.getInterpolatedAttribute(a,o,c,l,f,new V),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new V,materialIndex:0};Xe.getNormal(Vr,Wr,Xr,d.normal),p.face=d,p.barycoord=f}return p}class xn extends Ee{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],p=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(f,2));function v(g,u,h,x,M,_,T,E,w,A,y){const S=_/w,I=T/A,L=_/2,U=T/2,z=E/2,j=w+1,X=A+1;let q=0,R=0;const H=new V;for(let k=0;k<X;k++){const J=k*I-U;for(let Q=0;Q<j;Q++){const vt=Q*S-L;H[g]=vt*x,H[u]=J*M,H[h]=z,l.push(H.x,H.y,H.z),H[g]=0,H[u]=0,H[h]=E>0?1:-1,p.push(H.x,H.y,H.z),f.push(Q/w),f.push(1-k/A),q+=1}}for(let k=0;k<A;k++)for(let J=0;J<w;J++){const Q=d+J+j*k,vt=d+J+j*(k+1),N=d+(J+1)+j*(k+1),D=d+(J+1)+j*k;c.push(Q,vt,D),c.push(vt,N,D),R+=6}o.addGroup(m,R,y),m+=R,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const r in n)t[r]=n[r]}return t}function du(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _c(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Za={clone:Zi,merge:Te};var pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new V,nl=new St,il=new St;class Ce extends vc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,nl,il),e.subVectors(il,nl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,wi=1;class gu extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ce(Ei,wi,t,e);r.layers=this.layers,this.add(r);const s=new Ce(Ei,wi,t,e);s.layers=this.layers,this.add(s);const a=new Ce(Ei,wi,t,e);a.layers=this.layers,this.add(a);const o=new Ce(Ei,wi,t,e);o.layers=this.layers,this.add(o);const c=new Ce(Ei,wi,t,e);c.layers=this.layers,this.add(c);const l=new Ce(Ei,wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,p]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(f,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class xc extends Se{constructor(t,e,n,r,s,a,o,c,l,p){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,r,s,a,o,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _u extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new xc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xn(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Pn});s.uniforms.tEquirect.value=e;const a=new he(r,s),o=e.minFilter;return e.minFilter===un&&(e.minFilter=Pe),new gu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Zs=new V,vu=new V,xu=new kt;class cn{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Zs.subVectors(n,e).cross(vu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xu.getNormalMatrix(t),r=this.coplanarPoint(Zs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new ys,Zr=new V;class fo{constructor(t=new cn,e=new cn,n=new cn,r=new cn,s=new cn,a=new cn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],p=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],u=r[11],h=r[12],x=r[13],M=r[14],_=r[15];if(n[0].setComponents(c-s,d-l,u-m,_-h).normalize(),n[1].setComponents(c+s,d+l,u+m,_+h).normalize(),n[2].setComponents(c+a,d+p,u+v,_+x).normalize(),n[3].setComponents(c-a,d-p,u-v,_-x).normalize(),n[4].setComponents(c-o,d-f,u-g,_-M).normalize(),e===dn)n[5].setComponents(c+o,d+f,u+g,_+M).normalize();else if(e===ps)n[5].setComponents(o,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zr.x=r.normal.x>0?t.max.x:t.min.x,Zr.y=r.normal.y>0?t.max.y:t.min.y,Zr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Mu(i){const t=new WeakMap;function e(o,c){const l=o.array,p=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,p),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const p=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,p);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],g=f[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const g=f[m];i.bufferSubData(l,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class hi extends Ee{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,p=c+1,f=t/o,d=e/c,m=[],v=[],g=[],u=[];for(let h=0;h<p;h++){const x=h*d-a;for(let M=0;M<l;M++){const _=M*f-s;v.push(_,-x,0),g.push(0,0,1),u.push(M/o),u.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<o;x++){const M=x+l*h,_=x+l*(h+1),T=x+1+l*(h+1),E=x+1+l*h;m.push(M,_,E),m.push(_,T,E)}this.setIndex(m),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(g,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.widthSegments,t.heightSegments)}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:yu,alphahash_pars_fragment:Su,alphamap_fragment:Eu,alphamap_pars_fragment:wu,alphatest_fragment:Tu,alphatest_pars_fragment:bu,aomap_fragment:Au,aomap_pars_fragment:Ru,batching_pars_vertex:Cu,batching_vertex:Pu,begin_vertex:Lu,beginnormal_vertex:Du,bsdfs:Iu,iridescence_fragment:Uu,bumpmap_pars_fragment:Nu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:Bu,clipping_planes_vertex:zu,color_fragment:ku,color_pars_fragment:Hu,color_pars_vertex:Gu,color_vertex:Vu,common:Wu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:qu,displacementmap_pars_vertex:Yu,displacementmap_vertex:ju,emissivemap_fragment:Zu,emissivemap_pars_fragment:Ju,colorspace_fragment:$u,colorspace_pars_fragment:Ku,envmap_fragment:Qu,envmap_common_pars_fragment:tf,envmap_pars_fragment:ef,envmap_pars_vertex:nf,envmap_physical_pars_fragment:pf,envmap_vertex:rf,fog_vertex:sf,fog_pars_vertex:af,fog_fragment:of,fog_pars_fragment:lf,gradientmap_pars_fragment:cf,lightmap_pars_fragment:hf,lights_lambert_fragment:uf,lights_lambert_pars_fragment:ff,lights_pars_begin:df,lights_toon_fragment:mf,lights_toon_pars_fragment:gf,lights_phong_fragment:_f,lights_phong_pars_fragment:vf,lights_physical_fragment:xf,lights_physical_pars_fragment:Mf,lights_fragment_begin:yf,lights_fragment_maps:Sf,lights_fragment_end:Ef,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Af,map_fragment:Rf,map_pars_fragment:Cf,map_particle_fragment:Pf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:If,morphinstance_vertex:Uf,morphcolor_vertex:Nf,morphnormal_vertex:Ff,morphtarget_pars_vertex:Of,morphtarget_vertex:Bf,normal_fragment_begin:zf,normal_fragment_maps:kf,normal_pars_fragment:Hf,normal_pars_vertex:Gf,normal_vertex:Vf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Xf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:jf,opaque_fragment:Zf,packing:Jf,premultiplied_alpha_fragment:$f,project_vertex:Kf,dithering_fragment:Qf,dithering_pars_fragment:td,roughnessmap_fragment:ed,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:rd,shadowmap_vertex:sd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:fd,tonemapping_fragment:dd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:Md,background_vert:yd,background_frag:Sd,backgroundCube_vert:Ed,backgroundCube_frag:wd,cube_vert:Td,cube_frag:bd,depth_vert:Ad,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Pd,equirect_vert:Ld,equirect_frag:Dd,linedashed_vert:Id,linedashed_frag:Ud,meshbasic_vert:Nd,meshbasic_frag:Fd,meshlambert_vert:Od,meshlambert_frag:Bd,meshmatcap_vert:zd,meshmatcap_frag:kd,meshnormal_vert:Hd,meshnormal_frag:Gd,meshphong_vert:Vd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:Yd,meshtoon_frag:jd,points_vert:Zd,points_frag:Jd,shadow_vert:$d,shadow_frag:Kd,sprite_vert:Qd,sprite_frag:tp},Ct={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ke={basic:{uniforms:Te([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Te([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Te([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Te([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Te([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Te([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Te([Ct.points,Ct.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Te([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Te([Ct.common,Ct.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Te([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Te([Ct.sprite,Ct.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Te([Ct.common,Ct.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Te([Ct.lights,Ct.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Ke.physical={uniforms:Te([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Jr={r:0,b:0,g:0},zn=new je,ep=new te;function np(i,t,e,n,r,s,a){const o=new Ht(0);let c=s===!0?0:1,l,p,f=null,d=0,m=null;function v(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function g(x){let M=!1;const _=v(x);_===null?h(o,c):_&&_.isColor&&(h(_,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(x,M){const _=v(M);_&&(_.isCubeTexture||_.mapping===xs)?(p===void 0&&(p=new he(new xn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Zi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),zn.copy(M.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.material.uniforms.envMap.value=_,p.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(zn)),p.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ee,(f!==_||d!==_.version||m!==i.toneMapping)&&(p.material.needsUpdate=!0,f=_,d=_.version,m=i.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new he(new hi(2,2),new vn({name:"BackgroundMaterial",uniforms:Zi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,d=_.version,m=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function h(x,M){x.getRGB(Jr,_c(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),c=M,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,h(o,c)},render:g,addToRenderList:u}}function ip(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,I,L,U,z){let j=!1;const X=f(U,L,I);s!==X&&(s=X,l(s.object)),j=m(S,U,L,z),j&&v(S,U,L,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(S,I,L,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function p(S){return i.deleteVertexArray(S)}function f(S,I,L){const U=L.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let j=z[I.id];j===void 0&&(j={},z[I.id]=j);let X=j[U];return X===void 0&&(X=d(c()),j[U]=X),X}function d(S){const I=[],L=[],U=[];for(let z=0;z<e;z++)I[z]=0,L[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:U,object:S,attributes:{},index:null}}function m(S,I,L,U){const z=s.attributes,j=I.attributes;let X=0;const q=L.getAttributes();for(const R in q)if(q[R].location>=0){const k=z[R];let J=j[R];if(J===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;X++}return s.attributesNum!==X||s.index!==U}function v(S,I,L,U){const z={},j=I.attributes;let X=0;const q=L.getAttributes();for(const R in q)if(q[R].location>=0){let k=j[R];k===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(k=S.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),z[R]=J,X++}s.attributes=z,s.attributesNum=X,s.index=U}function g(){const S=s.newAttributes;for(let I=0,L=S.length;I<L;I++)S[I]=0}function u(S){h(S,0)}function h(S,I){const L=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;L[S]=1,U[S]===0&&(i.enableVertexAttribArray(S),U[S]=1),z[S]!==I&&(i.vertexAttribDivisor(S,I),z[S]=I)}function x(){const S=s.newAttributes,I=s.enabledAttributes;for(let L=0,U=I.length;L<U;L++)I[L]!==S[L]&&(i.disableVertexAttribArray(L),I[L]=0)}function M(S,I,L,U,z,j,X){X===!0?i.vertexAttribIPointer(S,I,L,z,j):i.vertexAttribPointer(S,I,L,U,z,j)}function _(S,I,L,U){g();const z=U.attributes,j=L.getAttributes(),X=I.defaultAttributeValues;for(const q in j){const R=j[q];if(R.location>=0){let H=z[q];if(H===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(H=S.instanceColor)),H!==void 0){const k=H.normalized,J=H.itemSize,Q=t.get(H);if(Q===void 0)continue;const vt=Q.buffer,N=Q.type,D=Q.bytesPerElement,C=N===i.INT||N===i.UNSIGNED_INT||H.gpuType===io;if(H.isInterleavedBufferAttribute){const b=H.data,Z=b.stride,it=H.offset;if(b.isInstancedInterleavedBuffer){for(let Y=0;Y<R.locationSize;Y++)h(R.location+Y,b.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let Y=0;Y<R.locationSize;Y++)u(R.location+Y);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Y=0;Y<R.locationSize;Y++)M(R.location+Y,J/R.locationSize,N,k,Z*D,(it+J/R.locationSize*Y)*D,C)}else{if(H.isInstancedBufferAttribute){for(let b=0;b<R.locationSize;b++)h(R.location+b,H.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let b=0;b<R.locationSize;b++)u(R.location+b);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let b=0;b<R.locationSize;b++)M(R.location+b,J/R.locationSize,N,k,J*D,J/R.locationSize*b*D,C)}}else if(X!==void 0){const k=X[q];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(R.location,k);break;case 3:i.vertexAttrib3fv(R.location,k);break;case 4:i.vertexAttrib4fv(R.location,k);break;default:i.vertexAttrib1fv(R.location,k)}}}}x()}function T(){A();for(const S in n){const I=n[S];for(const L in I){const U=I[L];for(const z in U)p(U[z].object),delete U[z];delete I[L]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const L in I){const U=I[L];for(const z in U)p(U[z].object),delete U[z];delete I[L]}delete n[S.id]}function w(S){for(const I in n){const L=n[I];if(L[S.id]===void 0)continue;const U=L[S.id];for(const z in U)p(U[z].object),delete U[z];delete L[S.id]}}function A(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:u,disableUnusedAttributes:x}}function rp(i,t,e){let n;function r(l){n=l}function s(l,p){i.drawArrays(n,l,p),e.update(p,n,1)}function a(l,p,f){f!==0&&(i.drawArraysInstanced(n,l,p,f),e.update(p,n,f))}function o(l,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,p,0,f);let m=0;for(let v=0;v<f;v++)m+=p[v];e.update(m,n,1)}function c(l,p,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],p[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,p,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=p[g]*d[g];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==qe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===Er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==gn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!A)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const p=c(l);p!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function ap(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new cn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=p(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,g=f.clipIntersection,u=f.clipShadows,h=i.get(f);if(!r||v===null||v.length===0||s&&!u)s?p(null):l();else{const x=s?0:n,M=x*4;let _=h.clippingState||null;c.value=_,_=p(v,d,M,m);for(let T=0;T!==M;++T)_[T]=e[T];h.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(f,d,m,v){const g=f!==null?f.length:0;let u=null;if(g!==0){if(u=c.value,v!==!0||u===null){const h=m+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(u===null||u.length<h)&&(u=new Float32Array(h));for(let M=0,_=m;M!==g;++M,_+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(u,_),u[_+3]=a.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,u}}function op(i){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=Xi:o===Ma&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xa||o===Ma)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new _u(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class yc extends vc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,rl=[.125,.215,.35,.446,.526,.582],$n=20,Js=new yc,sl=new Ht;let $s=null,Ks=0,Qs=0,ta=!1;const Xn=(1+Math.sqrt(5))/2,Ti=1/Xn,al=[new V(-Xn,Ti,0),new V(Xn,Ti,0),new V(-Ti,0,Xn),new V(Ti,0,Xn),new V(0,Xn,-Ti),new V(0,Xn,Ti),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($s,Ks,Qs),this._renderer.xr.enabled=ta,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Er,format:qe,colorSpace:ai,depthBuffer:!1},r=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,t,e)}return r}_compileMaterial(t){const e=new he(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,r){const o=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,d=p.toneMapping;p.getClearColor(sl),p.toneMapping=Ln,p.autoClear=!1;const m=new Ze({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),v=new he(new xn,m);let g=!1;const u=t.background;u?u.isColor&&(m.color.copy(u),t.background=null,g=!0):(m.color.copy(sl),g=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):x===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const M=this._cubeSize;$r(r,x*M,h>2?M:0,M,M),p.setRenderTarget(r),g&&p.render(v,o),p.render(t,o)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=d,p.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Xi||t.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new he(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;$r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=al[(r-s-1)%al.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,f=new he(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$n-1),g=s/v,u=isFinite(s)?1+Math.floor(p*g):$n;u>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${$n}`);const h=[];let x=0;for(let w=0;w<$n;++w){const A=w/g,y=Math.exp(-A*A/2);h.push(y),w===0?x+=y:w<u&&(x+=2*y)}for(let w=0;w<h.length;w++)h[w]=h[w]/x;d.envMap.value=t.texture,d.samples.value=u,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=v,d.mipInt.value=M-n;const _=this._sizeLods[r],T=3*_*(r>M-Di?r-M+Di:0),E=4*(this._cubeSize-_);$r(e,T,E,3*_,2*_),c.setRenderTarget(e),c.render(f,Js)}}function lp(i){const t=[],e=[],n=[];let r=i;const s=i-Di+1+rl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Di?c=rl[a-i+Di-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),p=-l,f=1+l,d=[p,p,f,p,f,f,p,p,f,f,p,f],m=6,v=6,g=3,u=2,h=1,x=new Float32Array(g*v*m),M=new Float32Array(u*v*m),_=new Float32Array(h*v*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,A=E>2?0:-1,y=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];x.set(y,g*v*E),M.set(d,u*v*E);const S=[E,E,E,E,E,E];_.set(S,h*v*E)}const T=new Ee;T.setAttribute("position",new Ye(x,g)),T.setAttribute("uv",new Ye(M,u)),T.setAttribute("faceIndex",new Ye(_,h)),t.push(T),r>Di&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function cp(i,t,e){const n=new Float32Array($n),r=new V(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function cl(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function hl(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===xa||c===Ma,p=c===Xi||c===qi;if(l||p){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ol(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||p&&m&&r(m)?(e===null&&(e=new ol(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let p=0;p<l;p++)o[p]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function up(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fp(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let u=0,h=g.length;u<h;u++)t.remove(g[u])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const g=m[v];for(let u=0,h=g.length;u<h;u++)t.update(g[u],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,v=f.attributes.position;let g=0;if(m!==null){const x=m.array;g=m.version;for(let M=0,_=x.length;M<_;M+=3){const T=x[M+0],E=x[M+1],w=x[M+2];d.push(T,E,E,w,w,T)}}else if(v!==void 0){const x=v.array;g=v.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const T=M+0,E=M+1,w=M+2;d.push(T,E,E,w,w,T)}}else return;const u=new(uc(d)?gc:mc)(d,1);u.version=g;const h=s.get(f);h&&t.remove(h),s.set(f,u)}function p(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:p}}function dp(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*a),e.update(m,n,1)}function l(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,d*a,v),e.update(m,n,v))}function p(d,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,v);let u=0;for(let h=0;h<v;h++)u+=m[h];e.update(u,n,1)}function f(d,m,v,g){if(v===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<d.length;h++)l(d[h]/a,m[h],g[h]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,g,0,v);let h=0;for(let x=0;x<v;x++)h+=m[x]*g[x];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=p,this.renderMultiDrawInstances=f}function pp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function mp(i,t,e){const n=new WeakMap,r=new Qt;function s(a,o,c){const l=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=p!==void 0?p.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),u===!0&&(_=3);let T=o.attributes.position.count*_,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*E*4*f),A=new dc(w,T,E,f);A.type=fn,A.needsUpdate=!0;const y=_*4;for(let I=0;I<f;I++){const L=h[I],U=x[I],z=M[I],j=T*E*4*I;for(let X=0;X<L.count;X++){const q=X*y;v===!0&&(r.fromBufferAttribute(L,X),w[j+q+0]=r.x,w[j+q+1]=r.y,w[j+q+2]=r.z,w[j+q+3]=0),g===!0&&(r.fromBufferAttribute(U,X),w[j+q+4]=r.x,w[j+q+5]=r.y,w[j+q+6]=r.z,w[j+q+7]=0),u===!0&&(r.fromBufferAttribute(z,X),w[j+q+8]=r.x,w[j+q+9]=r.y,w[j+q+10]=r.z,w[j+q+11]=z.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new St(T,E)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let u=0;u<l.length;u++)v+=l[u];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function gp(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,p=c.geometry,f=t.get(c,p);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Sc extends Se{constructor(t,e,n,r,s,a,o,c,l,p=zi){if(p!==zi&&p!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===zi&&(n=ri),n===void 0&&p===ji&&(n=Yi),super(null,r,s,a,o,c,p,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ec=new Se,ul=new Sc(1,1),wc=new dc,Tc=new nu,bc=new xc,fl=[],dl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=fl[r];if(s===void 0&&(s=new Float32Array(r),fl[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Es(i,t){let e=dl[t];e===void 0&&(e=new Int32Array(t),dl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;gl.set(n),i.uniformMatrix2fv(this.addr,!1,gl),_e(e,n)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;ml.set(n),i.uniformMatrix3fv(this.addr,!1,ml),_e(e,n)}}function Ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;pl.set(n),i.uniformMatrix4fv(this.addr,!1,pl),_e(e,n)}}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Dp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ul.compareFunction=hc,s=ul):s=Ec,e.setTexture2D(t||s,r)}function Ip(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Tc,r)}function Up(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||bc,r)}function Np(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||wc,r)}function Fp(i){switch(i){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return Mp;case 35674:return yp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return wp;case 35667:case 35671:return Tp;case 35668:case 35672:return bp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}function Op(i,t){i.uniform1fv(this.addr,t)}function Bp(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function zp(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function kp(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Hp(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gp(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vp(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wp(i,t){i.uniform1iv(this.addr,t)}function Xp(i,t){i.uniform2iv(this.addr,t)}function qp(i,t){i.uniform3iv(this.addr,t)}function Yp(i,t){i.uniform4iv(this.addr,t)}function jp(i,t){i.uniform1uiv(this.addr,t)}function Zp(i,t){i.uniform2uiv(this.addr,t)}function Jp(i,t){i.uniform3uiv(this.addr,t)}function $p(i,t){i.uniform4uiv(this.addr,t)}function Kp(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ec,s[a])}function Qp(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Tc,s[a])}function t0(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||bc,s[a])}function e0(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||wc,s[a])}function n0(i){switch(i){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return kp;case 35674:return Hp;case 35675:return Gp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return jp;case 36294:return Zp;case 36295:return Jp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}class i0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}}class r0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n0(e.type)}}class s0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function _l(i,t){i.seq.push(t),i.map[t.id]=t}function a0(i,t,e){const n=i.name,r=n.length;for(ea.lastIndex=0;;){const s=ea.exec(n),a=ea.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){_l(e,l===void 0?new i0(o,i,t):new r0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new s0(o),_l(e,f)),e=f}}}class us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);a0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function vl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const o0=37297;let l0=0;function c0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const xl=new kt;function h0(i){Yt._getMatrix(xl,Yt.workingColorSpace,i);const t=`mat3( ${xl.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Ms:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ml(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+c0(i.getShaderSource(t),a)}else return r}function u0(i,t){const e=h0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function f0(i,t){let e;switch(t){case ph:e="Linear";break;case mh:e="Reinhard";break;case gh:e="Cineon";break;case _h:e="ACESFilmic";break;case xh:e="AgX";break;case Mh:e="Neutral";break;case vh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new V;function d0(){Yt.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function m0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function lr(i){return i!==""}function yl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(_0,x0)}const v0=new Map;function x0(i,t){let e=qt[t];if(e===void 0){const n=v0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(M0,y0)}function y0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function E0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function T0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case no:t="ENVMAP_BLENDING_MULTIPLY";break;case fh:t="ENVMAP_BLENDING_MIX";break;case dh:t="ENVMAP_BLENDING_ADD";break}return t}function b0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function A0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=S0(e),l=E0(e),p=w0(e),f=T0(e),d=b0(e),m=p0(e),v=m0(s),g=r.createProgram();let u,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(lr).join(`
`),u.length>0&&(u+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(lr).join(`
`),h.length>0&&(h+=`
`)):(u=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),h=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+p:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?f0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,u0("linearToOutputTexel",e.outputColorSpace),d0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=Ja(a),a=yl(a,e),a=Sl(a,e),o=Ja(o),o=yl(o,e),o=Sl(o,e),a=El(a),o=El(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,h=["#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=x+u+a,_=x+h+o,T=vl(r,r.VERTEX_SHADER,M),E=vl(r,r.FRAGMENT_SHADER,_);r.attachShader(g,T),r.attachShader(g,E),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(I){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(E).trim();let j=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,T,E);else{const q=Ml(r,T,"vertex"),R=Ml(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+q+`
`+R)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||z==="")&&(X=!1);X&&(I.diagnostics={runnable:j,programLog:L,vertexShader:{log:U,prefix:u},fragmentShader:{log:z,prefix:h}})}r.deleteShader(T),r.deleteShader(E),A=new us(r,g),y=g0(r,g)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,o0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new P0(t),e.set(t,n)),n}}class P0{constructor(t){this.id=R0++,this.code=t,this.usedTimes=0}}function L0(i,t,e,n,r,s,a){const o=new uo,c=new C0,l=new Set,p=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function u(y,S,I,L,U){const z=L.fog,j=U.geometry,X=y.isMeshStandardMaterial?L.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),R=q&&q.mapping===xs?q.image.height:null,H=v[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const k=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,J=k!==void 0?k.length:0;let Q=0;j.morphAttributes.position!==void 0&&(Q=1),j.morphAttributes.normal!==void 0&&(Q=2),j.morphAttributes.color!==void 0&&(Q=3);let vt,N,D,C;if(H){const jt=Ke[H];vt=jt.vertexShader,N=jt.fragmentShader}else vt=y.vertexShader,N=y.fragmentShader,c.update(y),D=c.getVertexShaderID(y),C=c.getFragmentShaderID(y);const b=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),it=U.isInstancedMesh===!0,Y=U.isBatchedMesh===!0,ct=!!y.map,ut=!!y.matcap,pt=!!q,F=!!y.aoMap,at=!!y.lightMap,rt=!!y.bumpMap,st=!!y.normalMap,W=!!y.displacementMap,G=!!y.emissiveMap,dt=!!y.metalnessMap,B=!!y.roughnessMap,P=y.anisotropy>0,K=y.clearcoat>0,ht=y.dispersion>0,gt=y.iridescence>0,mt=y.sheen>0,xt=y.transmission>0,Mt=P&&!!y.anisotropyMap,Et=K&&!!y.clearcoatMap,Ot=K&&!!y.clearcoatNormalMap,_t=K&&!!y.clearcoatRoughnessMap,wt=gt&&!!y.iridescenceMap,Lt=gt&&!!y.iridescenceThicknessMap,Tt=mt&&!!y.sheenColorMap,At=mt&&!!y.sheenRoughnessMap,Vt=!!y.specularMap,zt=!!y.specularColorMap,Jt=!!y.specularIntensityMap,$=xt&&!!y.transmissionMap,Pt=xt&&!!y.thicknessMap,ft=!!y.gradientMap,yt=!!y.alphaMap,Rt=y.alphaTest>0,Dt=!!y.alphaHash,Wt=!!y.extensions;let le=Ln;y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(le=i.toneMapping);const fe={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:vt,fragmentShader:N,defines:y.defines,customVertexShaderID:D,customFragmentShaderID:C,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Y,batchingColor:Y&&U._colorsTexture!==null,instancing:it,instancingColor:it&&U.instanceColor!==null,instancingMorph:it&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:b===null?i.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ai,alphaToCoverage:!!y.alphaToCoverage,map:ct,matcap:ut,envMap:pt,envMapMode:pt&&q.mapping,envMapCubeUVHeight:R,aoMap:F,lightMap:at,bumpMap:rt,normalMap:st,displacementMap:d&&W,emissiveMap:G,normalMapObjectSpace:st&&y.normalMapType===wh,normalMapTangentSpace:st&&y.normalMapType===co,metalnessMap:dt,roughnessMap:B,anisotropy:P,anisotropyMap:Mt,clearcoat:K,clearcoatMap:Et,clearcoatNormalMap:Ot,clearcoatRoughnessMap:_t,dispersion:ht,iridescence:gt,iridescenceMap:wt,iridescenceThicknessMap:Lt,sheen:mt,sheenColorMap:Tt,sheenRoughnessMap:At,specularMap:Vt,specularColorMap:zt,specularIntensityMap:Jt,transmission:xt,transmissionMap:$,thicknessMap:Pt,gradientMap:ft,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:Rt,alphaHash:Dt,combine:y.combine,mapUv:ct&&g(y.map.channel),aoMapUv:F&&g(y.aoMap.channel),lightMapUv:at&&g(y.lightMap.channel),bumpMapUv:rt&&g(y.bumpMap.channel),normalMapUv:st&&g(y.normalMap.channel),displacementMapUv:W&&g(y.displacementMap.channel),emissiveMapUv:G&&g(y.emissiveMap.channel),metalnessMapUv:dt&&g(y.metalnessMap.channel),roughnessMapUv:B&&g(y.roughnessMap.channel),anisotropyMapUv:Mt&&g(y.anisotropyMap.channel),clearcoatMapUv:Et&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(y.sheenRoughnessMap.channel),specularMapUv:Vt&&g(y.specularMap.channel),specularColorMapUv:zt&&g(y.specularColorMap.channel),specularIntensityMapUv:Jt&&g(y.specularIntensityMap.channel),transmissionMapUv:$&&g(y.transmissionMap.channel),thicknessMapUv:Pt&&g(y.thicknessMap.channel),alphaMapUv:yt&&g(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(st||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!j.attributes.uv&&(ct||yt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Z,skinning:U.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:ct&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:G&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pe,flipSided:y.side===Le,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&y.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(S,y),M(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const S=v[y.type];let I;if(S){const L=Ke[S];I=Za.clone(L.uniforms)}else I=y.uniforms;return I}function T(y,S){let I;for(let L=0,U=p.length;L<U;L++){const z=p[L];if(z.cacheKey===S){I=z,++I.usedTimes;break}}return I===void 0&&(I=new A0(i,S,y,s),p.push(I)),I}function E(y){if(--y.usedTimes===0){const S=p.indexOf(y);p[S]=p[p.length-1],p.pop(),y.destroy()}}function w(y){c.remove(y)}function A(){c.dispose()}return{getParameters:u,getProgramCacheKey:h,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:p,dispose:A}}function D0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function I0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,m,v,g,u){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:g,group:u},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=u),t++,h}function o(f,d,m,v,g,u){const h=a(f,d,m,v,g,u);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function c(f,d,m,v,g,u){const h=a(f,d,m,v,g,u);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||I0),n.length>1&&n.sort(d||Tl),r.length>1&&r.sort(d||Tl)}function p(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:p,sort:l}}function U0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new bl,i.set(n,[a])):r>=s.length?(a=new bl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function N0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Ht};break;case"SpotLight":e={position:new V,direction:new V,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function F0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let O0=0;function B0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z0(i){const t=new N0,e=F0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const r=new V,s=new te,a=new te;function o(l){let p=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,g=0,u=0,h=0,x=0,M=0,_=0,T=0,E=0,w=0;l.sort(B0);for(let y=0,S=l.length;y<S;y++){const I=l[y],L=I.color,U=I.intensity,z=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=L.r*U,f+=L.g*U,d+=L.b*U;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],U);w++}else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,R=e.get(I);R.shadowIntensity=q.intensity,R.shadowBias=q.bias,R.shadowNormalBias=q.normalBias,R.shadowRadius=q.radius,R.shadowMapSize=q.mapSize,n.directionalShadow[m]=R,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=I.shadow.matrix,x++}n.directional[m]=X,m++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(L).multiplyScalar(U),X.distance=z,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[g]=X;const q=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,q.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[g]=q.matrix,I.castShadow){const R=e.get(I);R.shadowIntensity=q.intensity,R.shadowBias=q.bias,R.shadowNormalBias=q.normalBias,R.shadowRadius=q.radius,R.shadowMapSize=q.mapSize,n.spotShadow[g]=R,n.spotShadowMap[g]=j,_++}g++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(L).multiplyScalar(U),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[u]=X,u++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const q=I.shadow,R=e.get(I);R.shadowIntensity=q.intensity,R.shadowBias=q.bias,R.shadowNormalBias=q.normalBias,R.shadowRadius=q.radius,R.shadowMapSize=q.mapSize,R.shadowCameraNear=q.camera.near,R.shadowCameraFar=q.camera.far,n.pointShadow[v]=R,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=I.shadow.matrix,M++}n.point[v]=X,v++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(U),X.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[h]=X,h++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=f,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==m||A.pointLength!==v||A.spotLength!==g||A.rectAreaLength!==u||A.hemiLength!==h||A.numDirectionalShadows!==x||A.numPointShadows!==M||A.numSpotShadows!==_||A.numSpotMaps!==T||A.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=u,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,A.directionalLength=m,A.pointLength=v,A.spotLength=g,A.rectAreaLength=u,A.hemiLength=h,A.numDirectionalShadows=x,A.numPointShadows=M,A.numSpotShadows=_,A.numSpotMaps=T,A.numLightProbes=w,n.version=O0++)}function c(l,p){let f=0,d=0,m=0,v=0,g=0;const u=p.matrixWorldInverse;for(let h=0,x=l.length;h<x;h++){const M=l[h];if(M.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(u),f++}else if(M.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(u),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(u),m++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(u),a.identity(),s.copy(M.matrixWorld),s.premultiply(u),a.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(u),d++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(u),g++}}}return{setup:o,setupView:c,state:n}}function Al(i){const t=new z0(i),e=[],n=[];function r(p){l.camera=p,e.length=0,n.length=0}function s(p){e.push(p)}function a(p){n.push(p)}function o(){t.setup(e)}function c(p){t.setupView(e,p)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function k0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Al(i),t.set(r,[o])):s>=a.length?(o=new Al(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class H0 extends ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class G0 extends ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X0(i,t,e){let n=new fo;const r=new St,s=new St,a=new Qt,o=new H0({depthPacking:Eh}),c=new G0,l={},p=e.maxTextureSize,f={[mn]:Le,[Le]:mn,[pe]:pe},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:V0,fragmentShader:W0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ee;v.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new he(v,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let h=this.type;this.render=function(E,w,A){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Pn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=h!==ln&&this.type===ln,z=h===ln&&this.type!==ln;for(let j=0,X=E.length;j<X;j++){const q=E[j],R=q.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const H=R.getFrameExtents();if(r.multiply(H),s.copy(R.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/H.x),r.x=s.x*H.x,R.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/H.y),r.y=s.y*H.y,R.mapSize.y=s.y)),R.map===null||U===!0||z===!0){const J=this.type!==ln?{minFilter:Fe,magFilter:Fe}:{};R.map!==null&&R.map.dispose(),R.map=new Dn(r.x,r.y,J),R.map.texture.name=q.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();const k=R.getViewportCount();for(let J=0;J<k;J++){const Q=R.getViewport(J);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),L.viewport(a),R.updateMatrices(q,J),n=R.getFrustum(),_(w,A,R.camera,q,this.type)}R.isPointLightShadow!==!0&&this.type===ln&&x(R,A),R.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(y,S,I)};function x(E,w){const A=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Dn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,A,m,g,null)}function M(E,w,A,y){let S=null;const I=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=A.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const L=S.uuid,U=w.uuid;let z=l[L];z===void 0&&(z={},l[L]=z);let j=z[U];j===void 0&&(j=S.clone(),z[U]=j,w.addEventListener("dispose",T)),S=j}if(S.visible=w.visible,S.wireframe=w.wireframe,y===ln?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=i.properties.get(S);L.light=A}return S}function _(E,w,A,y,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ln)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const U=t.update(E),z=E.material;if(Array.isArray(z)){const j=U.groups;for(let X=0,q=j.length;X<q;X++){const R=j[X],H=z[R.materialIndex];if(H&&H.visible){const k=M(E,H,y,S);E.onBeforeShadow(i,E,w,A,U,k,R),i.renderBufferDirect(A,null,U,k,E,R),E.onAfterShadow(i,E,w,A,U,k,R)}}}else if(z.visible){const j=M(E,z,y,S);E.onBeforeShadow(i,E,w,A,U,j,null),i.renderBufferDirect(A,null,U,j,E,null),E.onAfterShadow(i,E,w,A,U,j,null)}}const L=E.children;for(let U=0,z=L.length;U<z;U++)_(L[U],w,A,y,S)}function T(E){E.target.removeEventListener("dispose",T);for(const A in l){const y=l[A],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const q0={[fa]:da,[pa]:_a,[ma]:va,[Wi]:ga,[da]:fa,[_a]:pa,[va]:ma,[ga]:Wi};function Y0(i,t){function e(){let $=!1;const Pt=new Qt;let ft=null;const yt=new Qt(0,0,0,0);return{setMask:function(Rt){ft!==Rt&&!$&&(i.colorMask(Rt,Rt,Rt,Rt),ft=Rt)},setLocked:function(Rt){$=Rt},setClear:function(Rt,Dt,Wt,le,fe){fe===!0&&(Rt*=le,Dt*=le,Wt*=le),Pt.set(Rt,Dt,Wt,le),yt.equals(Pt)===!1&&(i.clearColor(Rt,Dt,Wt,le),yt.copy(Pt))},reset:function(){$=!1,ft=null,yt.set(-1,0,0,0)}}}function n(){let $=!1,Pt=!1,ft=null,yt=null,Rt=null;return{setReversed:function(Dt){if(Pt!==Dt){const Wt=t.get("EXT_clip_control");Pt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const le=Rt;Rt=null,this.setClear(le)}Pt=Dt},getReversed:function(){return Pt},setTest:function(Dt){Dt?b(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Dt){ft!==Dt&&!$&&(i.depthMask(Dt),ft=Dt)},setFunc:function(Dt){if(Pt&&(Dt=q0[Dt]),yt!==Dt){switch(Dt){case fa:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Dt}},setLocked:function(Dt){$=Dt},setClear:function(Dt){Rt!==Dt&&(Pt&&(Dt=1-Dt),i.clearDepth(Dt),Rt=Dt)},reset:function(){$=!1,ft=null,yt=null,Rt=null,Pt=!1}}}function r(){let $=!1,Pt=null,ft=null,yt=null,Rt=null,Dt=null,Wt=null,le=null,fe=null;return{setTest:function(jt){$||(jt?b(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(jt){Pt!==jt&&!$&&(i.stencilMask(jt),Pt=jt)},setFunc:function(jt,be,Oe){(ft!==jt||yt!==be||Rt!==Oe)&&(i.stencilFunc(jt,be,Oe),ft=jt,yt=be,Rt=Oe)},setOp:function(jt,be,Oe){(Dt!==jt||Wt!==be||le!==Oe)&&(i.stencilOp(jt,be,Oe),Dt=jt,Wt=be,le=Oe)},setLocked:function(jt){$=jt},setClear:function(jt){fe!==jt&&(i.clearStencil(jt),fe=jt)},reset:function(){$=!1,Pt=null,ft=null,yt=null,Rt=null,Dt=null,Wt=null,le=null,fe=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let p={},f={},d=new WeakMap,m=[],v=null,g=!1,u=null,h=null,x=null,M=null,_=null,T=null,E=null,w=new Ht(0,0,0),A=0,y=!1,S=null,I=null,L=null,U=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(R)[1]),X=q>=1):R.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),X=q>=2);let H=null,k={};const J=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),vt=new Qt().fromArray(J),N=new Qt().fromArray(Q);function D($,Pt,ft,yt){const Rt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture($,Dt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<ft;Wt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Pt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Dt}const C={};C[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),b(i.DEPTH_TEST),a.setFunc(Wi),rt(!1),st(Po),b(i.CULL_FACE),F(Pn);function b($){p[$]!==!0&&(i.enable($),p[$]=!0)}function Z($){p[$]!==!1&&(i.disable($),p[$]=!1)}function it($,Pt){return f[$]!==Pt?(i.bindFramebuffer($,Pt),f[$]=Pt,$===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Pt),$===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Y($,Pt){let ft=m,yt=!1;if($){ft=d.get(Pt),ft===void 0&&(ft=[],d.set(Pt,ft));const Rt=$.textures;if(ft.length!==Rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Wt=Rt.length;Dt<Wt;Dt++)ft[Dt]=i.COLOR_ATTACHMENT0+Dt;ft.length=Rt.length,yt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ft)}function ct($){return v!==$?(i.useProgram($),v=$,!0):!1}const ut={[Jn]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[Jc]:i.FUNC_REVERSE_SUBTRACT};ut[$c]=i.MIN,ut[Kc]=i.MAX;const pt={[Qc]:i.ZERO,[th]:i.ONE,[eh]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[sh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function F($,Pt,ft,yt,Rt,Dt,Wt,le,fe,jt){if($===Pn){g===!0&&(Z(i.BLEND),g=!1);return}if(g===!1&&(b(i.BLEND),g=!0),$!==jc){if($!==u||jt!==y){if((h!==Jn||_!==Jn)&&(i.blendEquation(i.FUNC_ADD),h=Jn,_=Jn),jt)switch($){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}x=null,M=null,T=null,E=null,w.set(0,0,0),A=0,u=$,y=jt}return}Rt=Rt||Pt,Dt=Dt||ft,Wt=Wt||yt,(Pt!==h||Rt!==_)&&(i.blendEquationSeparate(ut[Pt],ut[Rt]),h=Pt,_=Rt),(ft!==x||yt!==M||Dt!==T||Wt!==E)&&(i.blendFuncSeparate(pt[ft],pt[yt],pt[Dt],pt[Wt]),x=ft,M=yt,T=Dt,E=Wt),(le.equals(w)===!1||fe!==A)&&(i.blendColor(le.r,le.g,le.b,fe),w.copy(le),A=fe),u=$,y=!1}function at($,Pt){$.side===pe?Z(i.CULL_FACE):b(i.CULL_FACE);let ft=$.side===Le;Pt&&(ft=!ft),rt(ft),$.blending===Bi&&$.transparent===!1?F(Pn):F($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),a.setFunc($.depthFunc),a.setTest($.depthTest),a.setMask($.depthWrite),s.setMask($.colorWrite);const yt=$.stencilWrite;o.setTest(yt),yt&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),G($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?b(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt($){S!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),S=$)}function st($){$!==Xc?(b(i.CULL_FACE),$!==I&&($===Po?i.cullFace(i.BACK):$===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),I=$}function W($){$!==L&&(X&&i.lineWidth($),L=$)}function G($,Pt,ft){$?(b(i.POLYGON_OFFSET_FILL),(U!==Pt||z!==ft)&&(i.polygonOffset(Pt,ft),U=Pt,z=ft)):Z(i.POLYGON_OFFSET_FILL)}function dt($){$?b(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function B($){$===void 0&&($=i.TEXTURE0+j-1),H!==$&&(i.activeTexture($),H=$)}function P($,Pt,ft){ft===void 0&&(H===null?ft=i.TEXTURE0+j-1:ft=H);let yt=k[ft];yt===void 0&&(yt={type:void 0,texture:void 0},k[ft]=yt),(yt.type!==$||yt.texture!==Pt)&&(H!==ft&&(i.activeTexture(ft),H=ft),i.bindTexture($,Pt||C[$]),yt.type=$,yt.texture=Pt)}function K(){const $=k[H];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ot(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Tt($){vt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),vt.copy($))}function At($){N.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),N.copy($))}function Vt($,Pt){let ft=l.get(Pt);ft===void 0&&(ft=new WeakMap,l.set(Pt,ft));let yt=ft.get($);yt===void 0&&(yt=i.getUniformBlockIndex(Pt,$.name),ft.set($,yt))}function zt($,Pt){const yt=l.get(Pt).get($);c.get(Pt)!==yt&&(i.uniformBlockBinding(Pt,yt,$.__bindingPointIndex),c.set(Pt,yt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},H=null,k={},f={},d=new WeakMap,m=[],v=null,g=!1,u=null,h=null,x=null,M=null,_=null,T=null,E=null,w=new Ht(0,0,0),A=0,y=!1,S=null,I=null,L=null,U=null,z=null,vt.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:b,disable:Z,bindFramebuffer:it,drawBuffers:Y,useProgram:ct,setBlending:F,setMaterial:at,setFlipSided:rt,setCullFace:st,setLineWidth:W,setPolygonOffset:G,setScissorTest:dt,activeTexture:B,bindTexture:P,unbindTexture:K,compressedTexImage2D:ht,compressedTexImage3D:gt,texImage2D:wt,texImage3D:Lt,updateUBOMapping:Vt,uniformBlockBinding:zt,texStorage2D:Ot,texStorage3D:_t,texSubImage2D:mt,texSubImage3D:xt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Et,scissor:Tt,viewport:At,reset:Jt}}function Rl(i,t,e,n){const r=j0(n);switch(e){case ic:return i*t;case sc:return i*t;case ac:return i*t*2;case oc:return i*t/r.components*r.byteLength;case ao:return i*t/r.components*r.byteLength;case lc:return i*t*2/r.components*r.byteLength;case oo:return i*t*2/r.components*r.byteLength;case rc:return i*t*3/r.components*r.byteLength;case qe:return i*t*4/r.components*r.byteLength;case lo:return i*t*4/r.components*r.byteLength;case as:case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case wa:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hs:case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cc:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j0(i){switch(i){case gn:case tc:return{byteLength:1,components:1};case gr:case ec:case Er:return{byteLength:2,components:1};case ro:case so:return{byteLength:2,components:4};case ri:case io:case fn:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Z0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,p=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(B,P){return m?new OffscreenCanvas(B,P):vr("canvas")}function g(B,P,K){let ht=1;const gt=dt(B);if((gt.width>K||gt.height>K)&&(ht=K/Math.max(gt.width,gt.height)),ht<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const mt=Math.floor(ht*gt.width),xt=Math.floor(ht*gt.height);f===void 0&&(f=v(mt,xt));const Mt=P?v(mt,xt):f;return Mt.width=mt,Mt.height=xt,Mt.getContext("2d").drawImage(B,0,0,mt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+mt+"x"+xt+")."),Mt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),B;return B}function u(B){return B.generateMipmaps}function h(B){i.generateMipmap(B)}function x(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(B,P,K,ht,gt=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let mt=P;if(P===i.RED&&(K===i.FLOAT&&(mt=i.R32F),K===i.HALF_FLOAT&&(mt=i.R16F),K===i.UNSIGNED_BYTE&&(mt=i.R8)),P===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(mt=i.R8UI),K===i.UNSIGNED_SHORT&&(mt=i.R16UI),K===i.UNSIGNED_INT&&(mt=i.R32UI),K===i.BYTE&&(mt=i.R8I),K===i.SHORT&&(mt=i.R16I),K===i.INT&&(mt=i.R32I)),P===i.RG&&(K===i.FLOAT&&(mt=i.RG32F),K===i.HALF_FLOAT&&(mt=i.RG16F),K===i.UNSIGNED_BYTE&&(mt=i.RG8)),P===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(mt=i.RG8UI),K===i.UNSIGNED_SHORT&&(mt=i.RG16UI),K===i.UNSIGNED_INT&&(mt=i.RG32UI),K===i.BYTE&&(mt=i.RG8I),K===i.SHORT&&(mt=i.RG16I),K===i.INT&&(mt=i.RG32I)),P===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),K===i.UNSIGNED_INT&&(mt=i.RGB32UI),K===i.BYTE&&(mt=i.RGB8I),K===i.SHORT&&(mt=i.RGB16I),K===i.INT&&(mt=i.RGB32I)),P===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),K===i.UNSIGNED_INT&&(mt=i.RGBA32UI),K===i.BYTE&&(mt=i.RGBA8I),K===i.SHORT&&(mt=i.RGBA16I),K===i.INT&&(mt=i.RGBA32I)),P===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),P===i.RGBA){const xt=gt?Ms:Yt.getTransfer(ht);K===i.FLOAT&&(mt=i.RGBA32F),K===i.HALF_FLOAT&&(mt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(mt=xt===ee?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function _(B,P){let K;return B?P===null||P===ri||P===Yi?K=i.DEPTH24_STENCIL8:P===fn?K=i.DEPTH32F_STENCIL8:P===gr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ri||P===Yi?K=i.DEPTH_COMPONENT24:P===fn?K=i.DEPTH_COMPONENT32F:P===gr&&(K=i.DEPTH_COMPONENT16),K}function T(B,P){return u(B)===!0||B.isFramebufferTexture&&B.minFilter!==Fe&&B.minFilter!==Pe?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function E(B){const P=B.target;P.removeEventListener("dispose",E),A(P),P.isVideoTexture&&p.delete(P)}function w(B){const P=B.target;P.removeEventListener("dispose",w),S(P)}function A(B){const P=n.get(B);if(P.__webglInit===void 0)return;const K=B.source,ht=d.get(K);if(ht){const gt=ht[P.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&y(B),Object.keys(ht).length===0&&d.delete(K)}n.remove(B)}function y(B){const P=n.get(B);i.deleteTexture(P.__webglTexture);const K=B.source,ht=d.get(K);delete ht[P.__cacheKey],a.memory.textures--}function S(B){const P=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(P.__webglFramebuffer[ht]))for(let gt=0;gt<P.__webglFramebuffer[ht].length;gt++)i.deleteFramebuffer(P.__webglFramebuffer[ht][gt]);else i.deleteFramebuffer(P.__webglFramebuffer[ht]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[ht])}else{if(Array.isArray(P.__webglFramebuffer))for(let ht=0;ht<P.__webglFramebuffer.length;ht++)i.deleteFramebuffer(P.__webglFramebuffer[ht]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ht=0;ht<P.__webglColorRenderbuffer.length;ht++)P.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[ht]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const K=B.textures;for(let ht=0,gt=K.length;ht<gt;ht++){const mt=n.get(K[ht]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(K[ht])}n.remove(B)}let I=0;function L(){I=0}function U(){const B=I;return B>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),I+=1,B}function z(B){const P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function j(B,P){const K=n.get(B);if(B.isVideoTexture&&W(B),B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){const ht=B.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(K,B,P);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+P)}function X(B,P){const K=n.get(B);if(B.version>0&&K.__version!==B.version){N(K,B,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+P)}function q(B,P){const K=n.get(B);if(B.version>0&&K.__version!==B.version){N(K,B,P);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+P)}function R(B,P){const K=n.get(B);if(B.version>0&&K.__version!==B.version){D(K,B,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+P)}const H={[ds]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},k={[Fe]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[Cs]:i.LINEAR_MIPMAP_NEAREST,[un]:i.LINEAR_MIPMAP_LINEAR},J={[Th]:i.NEVER,[Lh]:i.ALWAYS,[bh]:i.LESS,[hc]:i.LEQUAL,[Ah]:i.EQUAL,[Ph]:i.GEQUAL,[Rh]:i.GREATER,[Ch]:i.NOTEQUAL};function Q(B,P){if(P.type===fn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Pe||P.magFilter===Cs||P.magFilter===Dr||P.magFilter===un||P.minFilter===Pe||P.minFilter===Cs||P.minFilter===Dr||P.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,H[P.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,H[P.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,H[P.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,k[P.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,k[P.minFilter]),P.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,J[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Fe||P.minFilter!==Dr&&P.minFilter!==un||P.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function vt(B,P){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",E));const ht=P.source;let gt=d.get(ht);gt===void 0&&(gt={},d.set(ht,gt));const mt=z(P);if(mt!==B.__cacheKey){gt[mt]===void 0&&(gt[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),gt[mt].usedTimes++;const xt=gt[B.__cacheKey];xt!==void 0&&(gt[B.__cacheKey].usedTimes--,xt.usedTimes===0&&y(P)),B.__cacheKey=mt,B.__webglTexture=gt[mt].texture}return K}function N(B,P,K){let ht=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ht=i.TEXTURE_3D);const gt=vt(B,P),mt=P.source;e.bindTexture(ht,B.__webglTexture,i.TEXTURE0+K);const xt=n.get(mt);if(mt.version!==xt.__version||gt===!0){e.activeTexture(i.TEXTURE0+K);const Mt=Yt.getPrimaries(Yt.workingColorSpace),Et=P.colorSpace===Cn?null:Yt.getPrimaries(P.colorSpace),Ot=P.colorSpace===Cn||Mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let _t=g(P.image,!1,r.maxTextureSize);_t=G(P,_t);const wt=s.convert(P.format,P.colorSpace),Lt=s.convert(P.type);let Tt=M(P.internalFormat,wt,Lt,P.colorSpace,P.isVideoTexture);Q(ht,P);let At;const Vt=P.mipmaps,zt=P.isVideoTexture!==!0,Jt=xt.__version===void 0||gt===!0,$=mt.dataReady,Pt=T(P,_t);if(P.isDepthTexture)Tt=_(P.format===ji,P.type),Jt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Tt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Tt,_t.width,_t.height,0,wt,Lt,null));else if(P.isDataTexture)if(Vt.length>0){zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Pt,Tt,Vt[0].width,Vt[0].height);for(let ft=0,yt=Vt.length;ft<yt;ft++)At=Vt[ft],zt?$&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,wt,Lt,At.data):e.texImage2D(i.TEXTURE_2D,ft,Tt,At.width,At.height,0,wt,Lt,At.data);P.generateMipmaps=!1}else zt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Pt,Tt,_t.width,_t.height),$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,wt,Lt,_t.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,_t.width,_t.height,0,wt,Lt,_t.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){zt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Tt,Vt[0].width,Vt[0].height,_t.depth);for(let ft=0,yt=Vt.length;ft<yt;ft++)if(At=Vt[ft],P.format!==qe)if(wt!==null)if(zt){if($)if(P.layerUpdates.size>0){const Rt=Rl(At.width,At.height,P.format,P.type);for(const Dt of P.layerUpdates){const Wt=At.data.subarray(Dt*Rt/At.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Dt,At.width,At.height,1,wt,Wt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,_t.depth,wt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Tt,At.width,At.height,_t.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,_t.depth,wt,Lt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Tt,At.width,At.height,_t.depth,0,wt,Lt,At.data)}else{zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Pt,Tt,Vt[0].width,Vt[0].height);for(let ft=0,yt=Vt.length;ft<yt;ft++)At=Vt[ft],P.format!==qe?wt!==null?zt?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,wt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Tt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?$&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,wt,Lt,At.data):e.texImage2D(i.TEXTURE_2D,ft,Tt,At.width,At.height,0,wt,Lt,At.data)}else if(P.isDataArrayTexture)if(zt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Tt,_t.width,_t.height,_t.depth),$)if(P.layerUpdates.size>0){const ft=Rl(_t.width,_t.height,P.format,P.type);for(const yt of P.layerUpdates){const Rt=_t.data.subarray(yt*ft/_t.data.BYTES_PER_ELEMENT,(yt+1)*ft/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,_t.width,_t.height,1,wt,Lt,Rt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,wt,Lt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,_t.width,_t.height,_t.depth,0,wt,Lt,_t.data);else if(P.isData3DTexture)zt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Pt,Tt,_t.width,_t.height,_t.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,wt,Lt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,_t.width,_t.height,_t.depth,0,wt,Lt,_t.data);else if(P.isFramebufferTexture){if(Jt)if(zt)e.texStorage2D(i.TEXTURE_2D,Pt,Tt,_t.width,_t.height);else{let ft=_t.width,yt=_t.height;for(let Rt=0;Rt<Pt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Tt,ft,yt,0,wt,Lt,null),ft>>=1,yt>>=1}}else if(Vt.length>0){if(zt&&Jt){const ft=dt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Tt,ft.width,ft.height)}for(let ft=0,yt=Vt.length;ft<yt;ft++)At=Vt[ft],zt?$&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt,Lt,At):e.texImage2D(i.TEXTURE_2D,ft,Tt,wt,Lt,At);P.generateMipmaps=!1}else if(zt){if(Jt){const ft=dt(_t);e.texStorage2D(i.TEXTURE_2D,Pt,Tt,ft.width,ft.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Lt,_t)}else e.texImage2D(i.TEXTURE_2D,0,Tt,wt,Lt,_t);u(P)&&h(ht),xt.__version=mt.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function D(B,P,K){if(P.image.length!==6)return;const ht=vt(B,P),gt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+K);const mt=n.get(gt);if(gt.version!==mt.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);const xt=Yt.getPrimaries(Yt.workingColorSpace),Mt=P.colorSpace===Cn?null:Yt.getPrimaries(P.colorSpace),Et=P.colorSpace===Cn||xt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ot=P.isCompressedTexture||P.image[0].isCompressedTexture,_t=P.image[0]&&P.image[0].isDataTexture,wt=[];for(let yt=0;yt<6;yt++)!Ot&&!_t?wt[yt]=g(P.image[yt],!0,r.maxCubemapSize):wt[yt]=_t?P.image[yt].image:P.image[yt],wt[yt]=G(P,wt[yt]);const Lt=wt[0],Tt=s.convert(P.format,P.colorSpace),At=s.convert(P.type),Vt=M(P.internalFormat,Tt,At,P.colorSpace),zt=P.isVideoTexture!==!0,Jt=mt.__version===void 0||ht===!0,$=gt.dataReady;let Pt=T(P,Lt);Q(i.TEXTURE_CUBE_MAP,P);let ft;if(Ot){zt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Vt,Lt.width,Lt.height);for(let yt=0;yt<6;yt++){ft=wt[yt].mipmaps;for(let Rt=0;Rt<ft.length;Rt++){const Dt=ft[Rt];P.format!==qe?Tt!==null?zt?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,0,0,Dt.width,Dt.height,Tt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,Vt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,0,0,Dt.width,Dt.height,Tt,At,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,Vt,Dt.width,Dt.height,0,Tt,At,Dt.data)}}}else{if(ft=P.mipmaps,zt&&Jt){ft.length>0&&Pt++;const yt=dt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Vt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(_t){zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,wt[yt].width,wt[yt].height,Tt,At,wt[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Vt,wt[yt].width,wt[yt].height,0,Tt,At,wt[yt].data);for(let Rt=0;Rt<ft.length;Rt++){const Wt=ft[Rt].image[yt].image;zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,0,0,Wt.width,Wt.height,Tt,At,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,Vt,Wt.width,Wt.height,0,Tt,At,Wt.data)}}else{zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Tt,At,wt[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Vt,Tt,At,wt[yt]);for(let Rt=0;Rt<ft.length;Rt++){const Dt=ft[Rt];zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,0,0,Tt,At,Dt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,Vt,Tt,At,Dt.image[yt])}}}u(P)&&h(i.TEXTURE_CUBE_MAP),mt.__version=gt.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function C(B,P,K,ht,gt,mt){const xt=s.convert(K.format,K.colorSpace),Mt=s.convert(K.type),Et=M(K.internalFormat,xt,Mt,K.colorSpace),Ot=n.get(P),_t=n.get(K);if(_t.__renderTarget=P,!Ot.__hasExternalTextures){const wt=Math.max(1,P.width>>mt),Lt=Math.max(1,P.height>>mt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,mt,Et,wt,Lt,P.depth,0,xt,Mt,null):e.texImage2D(gt,mt,Et,wt,Lt,0,xt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),st(P)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,gt,_t.__webglTexture,0,rt(P)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,gt,_t.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function b(B,P,K){if(i.bindRenderbuffer(i.RENDERBUFFER,B),P.depthBuffer){const ht=P.depthTexture,gt=ht&&ht.isDepthTexture?ht.type:null,mt=_(P.stencilBuffer,gt),xt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=rt(P);st(P)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,mt,P.width,P.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,mt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,mt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,B)}else{const ht=P.textures;for(let gt=0;gt<ht.length;gt++){const mt=ht[gt],xt=s.convert(mt.format,mt.colorSpace),Mt=s.convert(mt.type),Et=M(mt.internalFormat,xt,Mt,mt.colorSpace),Ot=rt(P);K&&st(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Et,P.width,P.height):st(P)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,Et,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Et,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=n.get(P.depthTexture);ht.__renderTarget=P,(!ht.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),j(P.depthTexture,0);const gt=ht.__webglTexture,mt=rt(P);if(P.depthTexture.format===zi)st(P)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(P.depthTexture.format===ji)st(P)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function it(B){const P=n.get(B),K=B.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==B.depthTexture){const ht=B.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ht){const gt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ht.removeEventListener("dispose",gt)};ht.addEventListener("dispose",gt),P.__depthDisposeCallback=gt}P.__boundDepthTexture=ht}if(B.depthTexture&&!P.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Z(P.__webglFramebuffer,B)}else if(K){P.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ht]),P.__webglDepthbuffer[ht]===void 0)P.__webglDepthbuffer[ht]=i.createRenderbuffer(),b(P.__webglDepthbuffer[ht],B,!1);else{const gt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=P.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,mt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),b(P.__webglDepthbuffer,B,!1);else{const ht=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(B,P,K){const ht=n.get(B);P!==void 0&&C(ht.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&it(B)}function ct(B){const P=B.texture,K=n.get(B),ht=n.get(P);B.addEventListener("dispose",w);const gt=B.textures,mt=B.isWebGLCubeRenderTarget===!0,xt=gt.length>1;if(xt||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=P.version,a.memory.textures++),mt){K.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(P.mipmaps&&P.mipmaps.length>0){K.__webglFramebuffer[Mt]=[];for(let Et=0;Et<P.mipmaps.length;Et++)K.__webglFramebuffer[Mt][Et]=i.createFramebuffer()}else K.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){K.__webglFramebuffer=[];for(let Mt=0;Mt<P.mipmaps.length;Mt++)K.__webglFramebuffer[Mt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(xt)for(let Mt=0,Et=gt.length;Mt<Et;Mt++){const Ot=n.get(gt[Mt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(B.samples>0&&st(B)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Mt=0;Mt<gt.length;Mt++){const Et=gt[Mt];K.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Mt]);const Ot=s.convert(Et.format,Et.colorSpace),_t=s.convert(Et.type),wt=M(Et.internalFormat,Ot,_t,Et.colorSpace,B.isXRRenderTarget===!0),Lt=rt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,wt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,K.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),b(K.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Q(i.TEXTURE_CUBE_MAP,P);for(let Mt=0;Mt<6;Mt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Et=0;Et<P.mipmaps.length;Et++)C(K.__webglFramebuffer[Mt][Et],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Et);else C(K.__webglFramebuffer[Mt],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);u(P)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let Mt=0,Et=gt.length;Mt<Et;Mt++){const Ot=gt[Mt],_t=n.get(Ot);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),Q(i.TEXTURE_2D,Ot),C(K.__webglFramebuffer,B,Ot,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),u(Ot)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Mt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ht.__webglTexture),Q(Mt,P),P.mipmaps&&P.mipmaps.length>0)for(let Et=0;Et<P.mipmaps.length;Et++)C(K.__webglFramebuffer[Et],B,P,i.COLOR_ATTACHMENT0,Mt,Et);else C(K.__webglFramebuffer,B,P,i.COLOR_ATTACHMENT0,Mt,0);u(P)&&h(Mt),e.unbindTexture()}B.depthBuffer&&it(B)}function ut(B){const P=B.textures;for(let K=0,ht=P.length;K<ht;K++){const gt=P[K];if(u(gt)){const mt=x(B),xt=n.get(gt).__webglTexture;e.bindTexture(mt,xt),h(mt),e.unbindTexture()}}}const pt=[],F=[];function at(B){if(B.samples>0){if(st(B)===!1){const P=B.textures,K=B.width,ht=B.height;let gt=i.COLOR_BUFFER_BIT;const mt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(B),Mt=P.length>1;if(Mt)for(let Et=0;Et<P.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Et=0;Et<P.length;Et++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Et]);const Ot=n.get(P[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,K,ht,0,0,K,ht,gt,i.NEAREST),c===!0&&(pt.length=0,F.length=0,pt.push(i.COLOR_ATTACHMENT0+Et),B.depthBuffer&&B.resolveDepthBuffer===!1&&(pt.push(mt),F.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Et=0;Et<P.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Et]);const Ot=n.get(P[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&c){const P=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function rt(B){return Math.min(r.maxSamples,B.samples)}function st(B){const P=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function W(B){const P=a.render.frame;p.get(B)!==P&&(p.set(B,P),B.update())}function G(B,P){const K=B.colorSpace,ht=B.format,gt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==ai&&K!==Cn&&(Yt.getTransfer(K)===ee?(ht!==qe||gt!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),P}function dt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=R,this.rebindTextures=Y,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=C,this.useMultisampledRTT=st}function J0(i,t){function e(n,r=Cn){let s;const a=Yt.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Er)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===rc)return i.RGB;if(n===qe)return i.RGBA;if(n===sc)return i.LUMINANCE;if(n===ac)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===lc)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===as||n===os||n===ls||n===cs)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===as)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===as)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ea||n===wa||n===Ta)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Aa||n===Ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ba||n===Aa)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ra)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hs||n===Va||n===Wa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===hs)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===Xa||n===qa||n===Ya)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===hs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class $0 extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ke extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const u=e.getJointPose(g,n),h=this._getHandJoint(l,g);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const p=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=p.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Se,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:Q0,fragmentShader:tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nm extends oi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,p=null,f=null,d=null,m=null,v=null;const g=new em,u=e.getContextAttributes();let h=null,x=null;const M=[],_=[],T=new St;let E=null;const w=new Ce;w.viewport=new Qt;const A=new Ce;A.viewport=new Qt;const y=[w,A],S=new $0;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let D=M[N];return D===void 0&&(D=new na,M[N]=D),D.getTargetRaySpace()},this.getControllerGrip=function(N){let D=M[N];return D===void 0&&(D=new na,M[N]=D),D.getGripSpace()},this.getHand=function(N){let D=M[N];return D===void 0&&(D=new na,M[N]=D),D.getHandSpace()};function U(N){const D=_.indexOf(N.inputSource);if(D===-1)return;const C=M[D];C!==void 0&&(C.update(N.inputSource,N.frame,l||a),C.dispatchEvent({type:N.type,data:N.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let N=0;N<M.length;N++){const D=_[N];D!==null&&(_[N]=null,M[N].disconnect(D))}I=null,L=null,g.reset(),t.setRenderTarget(h),m=null,d=null,f=null,r=null,x=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),u.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0){const D={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,D),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Dn(m.framebufferWidth,m.framebufferHeight,{format:qe,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let D=null,C=null,b=null;u.depth&&(b=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=u.stencil?ji:zi,C=u.stencil?Yi:ri);const Z={colorFormat:e.RGBA8,depthFormat:b,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Z),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Dn(d.textureWidth,d.textureHeight,{format:qe,type:gn,depthTexture:new Sc(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(N){for(let D=0;D<N.removed.length;D++){const C=N.removed[D],b=_.indexOf(C);b>=0&&(_[b]=null,M[b].disconnect(C))}for(let D=0;D<N.added.length;D++){const C=N.added[D];let b=_.indexOf(C);if(b===-1){for(let it=0;it<M.length;it++)if(it>=_.length){_.push(C),b=it;break}else if(_[it]===null){_[it]=C,b=it;break}if(b===-1)break}const Z=M[b];Z&&Z.connect(C)}}const X=new V,q=new V;function R(N,D,C){X.setFromMatrixPosition(D.matrixWorld),q.setFromMatrixPosition(C.matrixWorld);const b=X.distanceTo(q),Z=D.projectionMatrix.elements,it=C.projectionMatrix.elements,Y=Z[14]/(Z[10]-1),ct=Z[14]/(Z[10]+1),ut=(Z[9]+1)/Z[5],pt=(Z[9]-1)/Z[5],F=(Z[8]-1)/Z[0],at=(it[8]+1)/it[0],rt=Y*F,st=Y*at,W=b/(-F+at),G=W*-F;if(D.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(G),N.translateZ(W),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),Z[10]===-1)N.projectionMatrix.copy(D.projectionMatrix),N.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const dt=Y+W,B=ct+W,P=rt-G,K=st+(b-G),ht=ut*ct/B*dt,gt=pt*ct/B*dt;N.projectionMatrix.makePerspective(P,K,ht,gt,dt,B),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function H(N,D){D===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(D.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let D=N.near,C=N.far;g.texture!==null&&(g.depthNear>0&&(D=g.depthNear),g.depthFar>0&&(C=g.depthFar)),S.near=A.near=w.near=D,S.far=A.far=w.far=C,(I!==S.near||L!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,L=S.far),w.layers.mask=N.layers.mask|2,A.layers.mask=N.layers.mask|4,S.layers.mask=w.layers.mask|A.layers.mask;const b=N.parent,Z=S.cameras;H(S,b);for(let it=0;it<Z.length;it++)H(Z[it],b);Z.length===2?R(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),k(N,S,b)};function k(N,D,C){C===null?N.matrix.copy(D.matrixWorld):(N.matrix.copy(C.matrixWorld),N.matrix.invert(),N.matrix.multiply(D.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(D.projectionMatrix),N.projectionMatrixInverse.copy(D.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=_r*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let J=null;function Q(N,D){if(p=D.getViewerPose(l||a),v=D,p!==null){const C=p.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let b=!1;C.length!==S.cameras.length&&(S.cameras.length=0,b=!0);for(let it=0;it<C.length;it++){const Y=C[it];let ct=null;if(m!==null)ct=m.getViewport(Y);else{const pt=f.getViewSubImage(d,Y);ct=pt.viewport,it===0&&(t.setRenderTargetTextures(x,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(x))}let ut=y[it];ut===void 0&&(ut=new Ce,ut.layers.enable(it),ut.viewport=new Qt,y[it]=ut),ut.matrix.fromArray(Y.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Y.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ct.x,ct.y,ct.width,ct.height),it===0&&(S.matrix.copy(ut.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),b===!0&&S.cameras.push(ut)}const Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const it=f.getDepthInformation(C[0]);it&&it.isValid&&it.texture&&g.init(t,it,r.renderState)}}for(let C=0;C<M.length;C++){const b=_[C],Z=M[C];b!==null&&Z!==void 0&&Z.update(b,D,l||a)}J&&J(N,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),v=null}const vt=new Mc;vt.setAnimationLoop(Q),this.setAnimationLoop=function(N){J=N},this.dispose=function(){}}}const kn=new je,im=new te;function rm(i,t){function e(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,_c(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function r(u,h,x,M,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(u,h):h.isMeshToonMaterial?(s(u,h),f(u,h)):h.isMeshPhongMaterial?(s(u,h),p(u,h)):h.isMeshStandardMaterial?(s(u,h),d(u,h),h.isMeshPhysicalMaterial&&m(u,h,_)):h.isMeshMatcapMaterial?(s(u,h),v(u,h)):h.isMeshDepthMaterial?s(u,h):h.isMeshDistanceMaterial?(s(u,h),g(u,h)):h.isMeshNormalMaterial?s(u,h):h.isLineBasicMaterial?(a(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?c(u,h,x,M):h.isSpriteMaterial?l(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,e(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,e(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===Le&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,e(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===Le&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,e(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,e(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const x=t.get(h),M=x.envMap,_=x.envMapRotation;M&&(u.envMap.value=M,kn.copy(_),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),u.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(kn)),u.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,u.aoMapTransform))}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,e(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function c(u,h,x,M){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*x,u.scale.value=M*.5,h.map&&(u.map.value=h.map,e(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function l(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,e(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function p(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function d(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,x){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Le&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=x.texture,u.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,h){h.matcap&&(u.matcap.value=h.matcap)}function g(u,h){const x=t.get(h).light;u.referencePosition.value.setFromMatrixPosition(x.matrixWorld),u.nearDistance.value=x.shadow.camera.near,u.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sm(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function l(x,M){let _=r[x.id];_===void 0&&(v(x),_=p(x),r[x.id]=_,x.addEventListener("dispose",u));const T=M.program;n.updateUBOMapping(x,T);const E=t.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function p(x){const M=f();x.__bindingPointIndex=M;const _=i.createBuffer(),T=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],_=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,w=_.length;E<w;E++){const A=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,S=A.length;y<S;y++){const I=A[y];if(m(I,E,y,T)===!0){const L=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let j=0;j<U.length;j++){const X=U[j],q=g(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,L+z,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,M,_,T){const E=x.value,w=M+"_"+_;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const A=T[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return T[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function v(x){const M=x.uniforms;let _=0;const T=16;for(let w=0,A=M.length;w<A;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,I=y.length;S<I;S++){const L=y[S],U=Array.isArray(L.value)?L.value:[L.value];for(let z=0,j=U.length;z<j;z++){const X=U[z],q=g(X),R=_%T,H=R%q.boundary,k=R+H;_+=H,k!==0&&T-k<q.storage&&(_+=T-k),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=q.storage}}}const E=_%T;return E>0&&(_+=T-E),x.__size=_,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function u(x){const M=x.target;M.removeEventListener("dispose",u);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class am{constructor(t={}){const{canvas:e=jh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),g=new Int32Array(4);let u=null,h=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Ln,this.toneMappingExposure=1;const _=this;let T=!1,E=0,w=0,A=null,y=-1,S=null;const I=new Qt,L=new Qt;let U=null;const z=new Ht(0);let j=0,X=e.width,q=e.height,R=1,H=null,k=null;const J=new Qt(0,0,X,q),Q=new Qt(0,0,X,q);let vt=!1;const N=new fo;let D=!1,C=!1;const b=new te,Z=new te,it=new V,Y=new Qt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function pt(){return A===null?R:1}let F=n;function at(O,tt){return e.getContext(O,tt)}try{const O={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eo}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),F===null){const tt="webgl2";if(F=at(tt,O),F===null)throw at(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let rt,st,W,G,dt,B,P,K,ht,gt,mt,xt,Mt,Et,Ot,_t,wt,Lt,Tt,At,Vt,zt,Jt,$;function Pt(){rt=new up(F),rt.init(),zt=new J0(F,rt),st=new sp(F,rt,t,zt),W=new Y0(F,rt),st.reverseDepthBuffer&&d&&W.buffers.depth.setReversed(!0),G=new pp(F),dt=new D0,B=new Z0(F,rt,W,dt,st,zt,G),P=new op(_),K=new hp(_),ht=new Mu(F),Jt=new ip(F,ht),gt=new fp(F,ht,G,Jt),mt=new gp(F,gt,ht,G),Tt=new mp(F,st,B),_t=new ap(dt),xt=new L0(_,P,K,rt,st,Jt,_t),Mt=new rm(_,dt),Et=new U0,Ot=new k0(rt),Lt=new np(_,P,K,W,mt,m,c),wt=new X0(_,mt,st),$=new sm(F,G,st,W),At=new rp(F,rt,G),Vt=new dp(F,rt,G),G.programs=xt.programs,_.capabilities=st,_.extensions=rt,_.properties=dt,_.renderLists=Et,_.shadowMap=wt,_.state=W,_.info=G}Pt();const ft=new nm(_,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const O=rt.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=rt.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(O){O!==void 0&&(R=O,this.setSize(X,q,!1))},this.getSize=function(O){return O.set(X,q)},this.setSize=function(O,tt,ot=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=O,q=tt,e.width=Math.floor(O*R),e.height=Math.floor(tt*R),ot===!0&&(e.style.width=O+"px",e.style.height=tt+"px"),this.setViewport(0,0,O,tt)},this.getDrawingBufferSize=function(O){return O.set(X*R,q*R).floor()},this.setDrawingBufferSize=function(O,tt,ot){X=O,q=tt,R=ot,e.width=Math.floor(O*ot),e.height=Math.floor(tt*ot),this.setViewport(0,0,O,tt)},this.getCurrentViewport=function(O){return O.copy(I)},this.getViewport=function(O){return O.copy(J)},this.setViewport=function(O,tt,ot,lt){O.isVector4?J.set(O.x,O.y,O.z,O.w):J.set(O,tt,ot,lt),W.viewport(I.copy(J).multiplyScalar(R).round())},this.getScissor=function(O){return O.copy(Q)},this.setScissor=function(O,tt,ot,lt){O.isVector4?Q.set(O.x,O.y,O.z,O.w):Q.set(O,tt,ot,lt),W.scissor(L.copy(Q).multiplyScalar(R).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(O){W.setScissorTest(vt=O)},this.setOpaqueSort=function(O){H=O},this.setTransparentSort=function(O){k=O},this.getClearColor=function(O){return O.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(O=!0,tt=!0,ot=!0){let lt=0;if(O){let et=!1;if(A!==null){const bt=A.texture.format;et=bt===lo||bt===oo||bt===ao}if(et){const bt=A.texture.type,It=bt===gn||bt===ri||bt===gr||bt===Yi||bt===ro||bt===so,Ut=Lt.getClearColor(),Nt=Lt.getClearAlpha(),Gt=Ut.r,Xt=Ut.g,Ft=Ut.b;It?(v[0]=Gt,v[1]=Xt,v[2]=Ft,v[3]=Nt,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=Gt,g[1]=Xt,g[2]=Ft,g[3]=Nt,F.clearBufferiv(F.COLOR,0,g))}else lt|=F.COLOR_BUFFER_BIT}tt&&(lt|=F.DEPTH_BUFFER_BIT),ot&&(lt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),Et.dispose(),Ot.dispose(),dt.dispose(),P.dispose(),K.dispose(),mt.dispose(),Jt.dispose(),$.dispose(),xt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",$i),ft.removeEventListener("sessionend",Eo),Un.stop()};function yt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const O=G.autoReset,tt=wt.enabled,ot=wt.autoUpdate,lt=wt.needsUpdate,et=wt.type;Pt(),G.autoReset=O,wt.enabled=tt,wt.autoUpdate=ot,wt.needsUpdate=lt,wt.type=et}function Dt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Wt(O){const tt=O.target;tt.removeEventListener("dispose",Wt),le(tt)}function le(O){fe(O),dt.remove(O)}function fe(O){const tt=dt.get(O).programs;tt!==void 0&&(tt.forEach(function(ot){xt.releaseProgram(ot)}),O.isShaderMaterial&&xt.releaseShaderCache(O))}this.renderBufferDirect=function(O,tt,ot,lt,et,bt){tt===null&&(tt=ct);const It=et.isMesh&&et.matrixWorld.determinant()<0,Ut=Gc(O,tt,ot,lt,et);W.setMaterial(lt,It);let Nt=ot.index,Gt=1;if(lt.wireframe===!0){if(Nt=gt.getWireframeAttribute(ot),Nt===void 0)return;Gt=2}const Xt=ot.drawRange,Ft=ot.attributes.position;let Zt=Xt.start*Gt,re=(Xt.start+Xt.count)*Gt;bt!==null&&(Zt=Math.max(Zt,bt.start*Gt),re=Math.min(re,(bt.start+bt.count)*Gt)),Nt!==null?(Zt=Math.max(Zt,0),re=Math.min(re,Nt.count)):Ft!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,Ft.count));const ae=re-Zt;if(ae<0||ae===1/0)return;Jt.setup(et,lt,Ut,ot,Nt);let Ae,$t=At;if(Nt!==null&&(Ae=ht.get(Nt),$t=Vt,$t.setIndex(Ae)),et.isMesh)lt.wireframe===!0?(W.setLineWidth(lt.wireframeLinewidth*pt()),$t.setMode(F.LINES)):$t.setMode(F.TRIANGLES);else if(et.isLine){let Bt=lt.linewidth;Bt===void 0&&(Bt=1),W.setLineWidth(Bt*pt()),et.isLineSegments?$t.setMode(F.LINES):et.isLineLoop?$t.setMode(F.LINE_LOOP):$t.setMode(F.LINE_STRIP)}else et.isPoints?$t.setMode(F.POINTS):et.isSprite&&$t.setMode(F.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)$t.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))$t.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Bt=et._multiDrawStarts,tn=et._multiDrawCounts,Kt=et._multiDrawCount,He=Nt?ht.get(Nt).bytesPerElement:1,ui=dt.get(lt).currentProgram.getUniforms();for(let De=0;De<Kt;De++)ui.setValue(F,"_gl_DrawID",De),$t.render(Bt[De]/He,tn[De])}else if(et.isInstancedMesh)$t.renderInstances(Zt,ae,et.count);else if(ot.isInstancedBufferGeometry){const Bt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,tn=Math.min(ot.instanceCount,Bt);$t.renderInstances(Zt,ae,tn)}else $t.render(Zt,ae)};function jt(O,tt,ot){O.transparent===!0&&O.side===pe&&O.forceSinglePass===!1?(O.side=Le,O.needsUpdate=!0,Lr(O,tt,ot),O.side=mn,O.needsUpdate=!0,Lr(O,tt,ot),O.side=pe):Lr(O,tt,ot)}this.compile=function(O,tt,ot=null){ot===null&&(ot=O),h=Ot.get(ot),h.init(tt),M.push(h),ot.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(h.pushLight(et),et.castShadow&&h.pushShadow(et))}),O!==ot&&O.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(h.pushLight(et),et.castShadow&&h.pushShadow(et))}),h.setupLights();const lt=new Set;return O.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const bt=et.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Ut=bt[It];jt(Ut,ot,et),lt.add(Ut)}else jt(bt,ot,et),lt.add(bt)}),M.pop(),h=null,lt},this.compileAsync=function(O,tt,ot=null){const lt=this.compile(O,tt,ot);return new Promise(et=>{function bt(){if(lt.forEach(function(It){dt.get(It).currentProgram.isReady()&&lt.delete(It)}),lt.size===0){et(O);return}setTimeout(bt,10)}rt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let be=null;function Oe(O){be&&be(O)}function $i(){Un.stop()}function Eo(){Un.start()}const Un=new Mc;Un.setAnimationLoop(Oe),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(O){be=O,ft.setAnimationLoop(O),O===null?Un.stop():Un.start()},ft.addEventListener("sessionstart",$i),ft.addEventListener("sessionend",Eo),this.render=function(O,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(tt),tt=ft.getCamera()),O.isScene===!0&&O.onBeforeRender(_,O,tt,A),h=Ot.get(O,M.length),h.init(tt),M.push(h),Z.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),N.setFromProjectionMatrix(Z),C=this.localClippingEnabled,D=_t.init(this.clippingPlanes,C),u=Et.get(O,x.length),u.init(),x.push(u),ft.enabled===!0&&ft.isPresenting===!0){const bt=_.xr.getDepthSensingMesh();bt!==null&&Rs(bt,tt,-1/0,_.sortObjects)}Rs(O,tt,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(H,k),ut=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ut&&Lt.addToRenderList(u,O),this.info.render.frame++,D===!0&&_t.beginShadows();const ot=h.state.shadowsArray;wt.render(ot,O,tt),D===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=u.opaque,et=u.transmissive;if(h.setupLights(),tt.isArrayCamera){const bt=tt.cameras;if(et.length>0)for(let It=0,Ut=bt.length;It<Ut;It++){const Nt=bt[It];To(lt,et,O,Nt)}ut&&Lt.render(O);for(let It=0,Ut=bt.length;It<Ut;It++){const Nt=bt[It];wo(u,O,Nt,Nt.viewport)}}else et.length>0&&To(lt,et,O,tt),ut&&Lt.render(O),wo(u,O,tt);A!==null&&(B.updateMultisampleRenderTarget(A),B.updateRenderTargetMipmap(A)),O.isScene===!0&&O.onAfterRender(_,O,tt),Jt.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(h=M[M.length-1],D===!0&&_t.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?u=x[x.length-1]:u=null};function Rs(O,tt,ot,lt){if(O.visible===!1)return;if(O.layers.test(tt.layers)){if(O.isGroup)ot=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(tt);else if(O.isLight)h.pushLight(O),O.castShadow&&h.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||N.intersectsSprite(O)){lt&&Y.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Z);const It=mt.update(O),Ut=O.material;Ut.visible&&u.push(O,It,Ut,ot,Y.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||N.intersectsObject(O))){const It=mt.update(O),Ut=O.material;if(lt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Y.copy(O.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Y.copy(It.boundingSphere.center)),Y.applyMatrix4(O.matrixWorld).applyMatrix4(Z)),Array.isArray(Ut)){const Nt=It.groups;for(let Gt=0,Xt=Nt.length;Gt<Xt;Gt++){const Ft=Nt[Gt],Zt=Ut[Ft.materialIndex];Zt&&Zt.visible&&u.push(O,It,Zt,ot,Y.z,Ft)}}else Ut.visible&&u.push(O,It,Ut,ot,Y.z,null)}}const bt=O.children;for(let It=0,Ut=bt.length;It<Ut;It++)Rs(bt[It],tt,ot,lt)}function wo(O,tt,ot,lt){const et=O.opaque,bt=O.transmissive,It=O.transparent;h.setupLightsView(ot),D===!0&&_t.setGlobalState(_.clippingPlanes,ot),lt&&W.viewport(I.copy(lt)),et.length>0&&Pr(et,tt,ot),bt.length>0&&Pr(bt,tt,ot),It.length>0&&Pr(It,tt,ot),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function To(O,tt,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[lt.id]===void 0&&(h.state.transmissionRenderTarget[lt.id]=new Dn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Er:gn,minFilter:un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const bt=h.state.transmissionRenderTarget[lt.id],It=lt.viewport||I;bt.setSize(It.z,It.w);const Ut=_.getRenderTarget();_.setRenderTarget(bt),_.getClearColor(z),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),ut&&Lt.render(ot);const Nt=_.toneMapping;_.toneMapping=Ln;const Gt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),h.setupLightsView(lt),D===!0&&_t.setGlobalState(_.clippingPlanes,lt),Pr(O,ot,lt),B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ft=0,Zt=tt.length;Ft<Zt;Ft++){const re=tt[Ft],ae=re.object,Ae=re.geometry,$t=re.material,Bt=re.group;if($t.side===pe&&ae.layers.test(lt.layers)){const tn=$t.side;$t.side=Le,$t.needsUpdate=!0,bo(ae,ot,lt,Ae,$t,Bt),$t.side=tn,$t.needsUpdate=!0,Xt=!0}}Xt===!0&&(B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt))}_.setRenderTarget(Ut),_.setClearColor(z,j),Gt!==void 0&&(lt.viewport=Gt),_.toneMapping=Nt}function Pr(O,tt,ot){const lt=tt.isScene===!0?tt.overrideMaterial:null;for(let et=0,bt=O.length;et<bt;et++){const It=O[et],Ut=It.object,Nt=It.geometry,Gt=lt===null?It.material:lt,Xt=It.group;Ut.layers.test(ot.layers)&&bo(Ut,tt,ot,Nt,Gt,Xt)}}function bo(O,tt,ot,lt,et,bt){O.onBeforeRender(_,tt,ot,lt,et,bt),O.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),et.onBeforeRender(_,tt,ot,lt,O,bt),et.transparent===!0&&et.side===pe&&et.forceSinglePass===!1?(et.side=Le,et.needsUpdate=!0,_.renderBufferDirect(ot,tt,lt,et,O,bt),et.side=mn,et.needsUpdate=!0,_.renderBufferDirect(ot,tt,lt,et,O,bt),et.side=pe):_.renderBufferDirect(ot,tt,lt,et,O,bt),O.onAfterRender(_,tt,ot,lt,et,bt)}function Lr(O,tt,ot){tt.isScene!==!0&&(tt=ct);const lt=dt.get(O),et=h.state.lights,bt=h.state.shadowsArray,It=et.state.version,Ut=xt.getParameters(O,et.state,bt,tt,ot),Nt=xt.getProgramCacheKey(Ut);let Gt=lt.programs;lt.environment=O.isMeshStandardMaterial?tt.environment:null,lt.fog=tt.fog,lt.envMap=(O.isMeshStandardMaterial?K:P).get(O.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&O.envMap===null?tt.environmentRotation:O.envMapRotation,Gt===void 0&&(O.addEventListener("dispose",Wt),Gt=new Map,lt.programs=Gt);let Xt=Gt.get(Nt);if(Xt!==void 0){if(lt.currentProgram===Xt&&lt.lightsStateVersion===It)return Ro(O,Ut),Xt}else Ut.uniforms=xt.getUniforms(O),O.onBeforeCompile(Ut,_),Xt=xt.acquireProgram(Ut,Nt),Gt.set(Nt,Xt),lt.uniforms=Ut.uniforms;const Ft=lt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Ft.clippingPlanes=_t.uniform),Ro(O,Ut),lt.needsLights=Wc(O),lt.lightsStateVersion=It,lt.needsLights&&(Ft.ambientLightColor.value=et.state.ambient,Ft.lightProbe.value=et.state.probe,Ft.directionalLights.value=et.state.directional,Ft.directionalLightShadows.value=et.state.directionalShadow,Ft.spotLights.value=et.state.spot,Ft.spotLightShadows.value=et.state.spotShadow,Ft.rectAreaLights.value=et.state.rectArea,Ft.ltc_1.value=et.state.rectAreaLTC1,Ft.ltc_2.value=et.state.rectAreaLTC2,Ft.pointLights.value=et.state.point,Ft.pointLightShadows.value=et.state.pointShadow,Ft.hemisphereLights.value=et.state.hemi,Ft.directionalShadowMap.value=et.state.directionalShadowMap,Ft.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ft.spotShadowMap.value=et.state.spotShadowMap,Ft.spotLightMatrix.value=et.state.spotLightMatrix,Ft.spotLightMap.value=et.state.spotLightMap,Ft.pointShadowMap.value=et.state.pointShadowMap,Ft.pointShadowMatrix.value=et.state.pointShadowMatrix),lt.currentProgram=Xt,lt.uniformsList=null,Xt}function Ao(O){if(O.uniformsList===null){const tt=O.currentProgram.getUniforms();O.uniformsList=us.seqWithValue(tt.seq,O.uniforms)}return O.uniformsList}function Ro(O,tt){const ot=dt.get(O);ot.outputColorSpace=tt.outputColorSpace,ot.batching=tt.batching,ot.batchingColor=tt.batchingColor,ot.instancing=tt.instancing,ot.instancingColor=tt.instancingColor,ot.instancingMorph=tt.instancingMorph,ot.skinning=tt.skinning,ot.morphTargets=tt.morphTargets,ot.morphNormals=tt.morphNormals,ot.morphColors=tt.morphColors,ot.morphTargetsCount=tt.morphTargetsCount,ot.numClippingPlanes=tt.numClippingPlanes,ot.numIntersection=tt.numClipIntersection,ot.vertexAlphas=tt.vertexAlphas,ot.vertexTangents=tt.vertexTangents,ot.toneMapping=tt.toneMapping}function Gc(O,tt,ot,lt,et){tt.isScene!==!0&&(tt=ct),B.resetTextureUnits();const bt=tt.fog,It=lt.isMeshStandardMaterial?tt.environment:null,Ut=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,Nt=(lt.isMeshStandardMaterial?K:P).get(lt.envMap||It),Gt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Xt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Ft=!!ot.morphAttributes.position,Zt=!!ot.morphAttributes.normal,re=!!ot.morphAttributes.color;let ae=Ln;lt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ae=_.toneMapping);const Ae=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,$t=Ae!==void 0?Ae.length:0,Bt=dt.get(lt),tn=h.state.lights;if(D===!0&&(C===!0||O!==S)){const Be=O===S&&lt.id===y;_t.setState(lt,O,Be)}let Kt=!1;lt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==tn.state.version||Bt.outputColorSpace!==Ut||et.isBatchedMesh&&Bt.batching===!1||!et.isBatchedMesh&&Bt.batching===!0||et.isBatchedMesh&&Bt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Bt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Bt.instancing===!1||!et.isInstancedMesh&&Bt.instancing===!0||et.isSkinnedMesh&&Bt.skinning===!1||!et.isSkinnedMesh&&Bt.skinning===!0||et.isInstancedMesh&&Bt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Bt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Bt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Bt.instancingMorph===!1&&et.morphTexture!==null||Bt.envMap!==Nt||lt.fog===!0&&Bt.fog!==bt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==_t.numPlanes||Bt.numIntersection!==_t.numIntersection)||Bt.vertexAlphas!==Gt||Bt.vertexTangents!==Xt||Bt.morphTargets!==Ft||Bt.morphNormals!==Zt||Bt.morphColors!==re||Bt.toneMapping!==ae||Bt.morphTargetsCount!==$t)&&(Kt=!0):(Kt=!0,Bt.__version=lt.version);let He=Bt.currentProgram;Kt===!0&&(He=Lr(lt,tt,et));let ui=!1,De=!1,Ki=!1;const oe=He.getUniforms(),Je=Bt.uniforms;if(W.useProgram(He.program)&&(ui=!0,De=!0,Ki=!0),lt.id!==y&&(y=lt.id,De=!0),ui||S!==O){W.buffers.depth.getReversed()?(b.copy(O.projectionMatrix),Jh(b),$h(b),oe.setValue(F,"projectionMatrix",b)):oe.setValue(F,"projectionMatrix",O.projectionMatrix),oe.setValue(F,"viewMatrix",O.matrixWorldInverse);const Mn=oe.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,it.setFromMatrixPosition(O.matrixWorld)),st.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&oe.setValue(F,"isOrthographic",O.isOrthographicCamera===!0),S!==O&&(S=O,De=!0,Ki=!0)}if(et.isSkinnedMesh){oe.setOptional(F,et,"bindMatrix"),oe.setOptional(F,et,"bindMatrixInverse");const Be=et.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),oe.setValue(F,"boneTexture",Be.boneTexture,B))}et.isBatchedMesh&&(oe.setOptional(F,et,"batchingTexture"),oe.setValue(F,"batchingTexture",et._matricesTexture,B),oe.setOptional(F,et,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",et._indirectTexture,B),oe.setOptional(F,et,"batchingColorTexture"),et._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",et._colorsTexture,B));const Qi=ot.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Tt.update(et,ot,He),(De||Bt.receiveShadow!==et.receiveShadow)&&(Bt.receiveShadow=et.receiveShadow,oe.setValue(F,"receiveShadow",et.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Je.envMap.value=Nt,Je.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&tt.environment!==null&&(Je.envMapIntensity.value=tt.environmentIntensity),De&&(oe.setValue(F,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&Vc(Je,Ki),bt&&lt.fog===!0&&Mt.refreshFogUniforms(Je,bt),Mt.refreshMaterialUniforms(Je,lt,R,q,h.state.transmissionRenderTarget[O.id]),us.upload(F,Ao(Bt),Je,B)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(us.upload(F,Ao(Bt),Je,B),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&oe.setValue(F,"center",et.center),oe.setValue(F,"modelViewMatrix",et.modelViewMatrix),oe.setValue(F,"normalMatrix",et.normalMatrix),oe.setValue(F,"modelMatrix",et.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Be=lt.uniformsGroups;for(let Mn=0,yn=Be.length;Mn<yn;Mn++){const Co=Be[Mn];$.update(Co,He),$.bind(Co,He)}}return He}function Vc(O,tt){O.ambientLightColor.needsUpdate=tt,O.lightProbe.needsUpdate=tt,O.directionalLights.needsUpdate=tt,O.directionalLightShadows.needsUpdate=tt,O.pointLights.needsUpdate=tt,O.pointLightShadows.needsUpdate=tt,O.spotLights.needsUpdate=tt,O.spotLightShadows.needsUpdate=tt,O.rectAreaLights.needsUpdate=tt,O.hemisphereLights.needsUpdate=tt}function Wc(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(O,tt,ot){dt.get(O.texture).__webglTexture=tt,dt.get(O.depthTexture).__webglTexture=ot;const lt=dt.get(O);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,tt){const ot=dt.get(O);ot.__webglFramebuffer=tt,ot.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(O,tt=0,ot=0){A=O,E=tt,w=ot;let lt=!0,et=null,bt=!1,It=!1;if(O){const Nt=dt.get(O);if(Nt.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(F.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)B.setupRenderTarget(O);else if(Nt.__hasExternalTextures)B.rebindTextures(O,dt.get(O.texture).__webglTexture,dt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const Ft=O.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&dt.has(Ft)&&(O.width!==Ft.image.width||O.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(O)}}const Gt=O.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(It=!0);const Xt=dt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Xt[tt])?et=Xt[tt][ot]:et=Xt[tt],bt=!0):O.samples>0&&B.useMultisampledRTT(O)===!1?et=dt.get(O).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[ot]:et=Xt,I.copy(O.viewport),L.copy(O.scissor),U=O.scissorTest}else I.copy(J).multiplyScalar(R).floor(),L.copy(Q).multiplyScalar(R).floor(),U=vt;if(W.bindFramebuffer(F.FRAMEBUFFER,et)&&lt&&W.drawBuffers(O,et),W.viewport(I),W.scissor(L),W.setScissorTest(U),bt){const Nt=dt.get(O.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Nt.__webglTexture,ot)}else if(It){const Nt=dt.get(O.texture),Gt=tt||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,ot||0,Gt)}y=-1},this.readRenderTargetPixels=function(O,tt,ot,lt,et,bt,It){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=dt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){W.bindFramebuffer(F.FRAMEBUFFER,Ut);try{const Nt=O.texture,Gt=Nt.format,Xt=Nt.type;if(!st.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=O.width-lt&&ot>=0&&ot<=O.height-et&&F.readPixels(tt,ot,lt,et,zt.convert(Gt),zt.convert(Xt),bt)}finally{const Nt=A!==null?dt.get(A).__webglFramebuffer:null;W.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(O,tt,ot,lt,et,bt,It){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=dt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){const Nt=O.texture,Gt=Nt.format,Xt=Nt.type;if(!st.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(tt>=0&&tt<=O.width-lt&&ot>=0&&ot<=O.height-et){W.bindFramebuffer(F.FRAMEBUFFER,Ut);const Ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),F.readPixels(tt,ot,lt,et,zt.convert(Gt),zt.convert(Xt),0);const Zt=A!==null?dt.get(A).__webglFramebuffer:null;W.bindFramebuffer(F.FRAMEBUFFER,Zt);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zh(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(Ft),F.deleteSync(re),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,tt=null,ot=0){O.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),tt=arguments[0]||null,O=arguments[1]);const lt=Math.pow(2,-ot),et=Math.floor(O.image.width*lt),bt=Math.floor(O.image.height*lt),It=tt!==null?tt.x:0,Ut=tt!==null?tt.y:0;B.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,ot,0,0,It,Ut,et,bt),W.unbindTexture()},this.copyTextureToTexture=function(O,tt,ot=null,lt=null,et=0){O.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,O=arguments[1],tt=arguments[2],et=arguments[3]||0,ot=null);let bt,It,Ut,Nt,Gt,Xt,Ft,Zt,re;const ae=O.isCompressedTexture?O.mipmaps[et]:O.image;ot!==null?(bt=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Ut=ot.isBox3?ot.max.z-ot.min.z:1,Nt=ot.min.x,Gt=ot.min.y,Xt=ot.isBox3?ot.min.z:0):(bt=ae.width,It=ae.height,Ut=ae.depth||1,Nt=0,Gt=0,Xt=0),lt!==null?(Ft=lt.x,Zt=lt.y,re=lt.z):(Ft=0,Zt=0,re=0);const Ae=zt.convert(tt.format),$t=zt.convert(tt.type);let Bt;tt.isData3DTexture?(B.setTexture3D(tt,0),Bt=F.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(B.setTexture2DArray(tt,0),Bt=F.TEXTURE_2D_ARRAY):(B.setTexture2D(tt,0),Bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,tt.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,tt.unpackAlignment);const tn=F.getParameter(F.UNPACK_ROW_LENGTH),Kt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),He=F.getParameter(F.UNPACK_SKIP_PIXELS),ui=F.getParameter(F.UNPACK_SKIP_ROWS),De=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const Ki=O.isDataArrayTexture||O.isData3DTexture,oe=tt.isDataArrayTexture||tt.isData3DTexture;if(O.isRenderTargetTexture||O.isDepthTexture){const Je=dt.get(O),Qi=dt.get(tt),Be=dt.get(Je.__renderTarget),Mn=dt.get(Qi.__renderTarget);W.bindFramebuffer(F.READ_FRAMEBUFFER,Be.__webglFramebuffer),W.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let yn=0;yn<Ut;yn++)Ki&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dt.get(O).__webglTexture,et,Xt+yn),O.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dt.get(tt).__webglTexture,et,re+yn),F.blitFramebuffer(Nt,Gt,bt,It,Ft,Zt,bt,It,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(Bt,et,Ft,Zt,re+yn,Nt,Gt,bt,It):F.copyTexSubImage2D(Bt,et,Ft,Zt,re+yn,Nt,Gt,bt,It);W.bindFramebuffer(F.READ_FRAMEBUFFER,null),W.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?O.isDataTexture||O.isData3DTexture?F.texSubImage3D(Bt,et,Ft,Zt,re,bt,It,Ut,Ae,$t,ae.data):tt.isCompressedArrayTexture?F.compressedTexSubImage3D(Bt,et,Ft,Zt,re,bt,It,Ut,Ae,ae.data):F.texSubImage3D(Bt,et,Ft,Zt,re,bt,It,Ut,Ae,$t,ae):O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,et,Ft,Zt,bt,It,Ae,$t,ae.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,et,Ft,Zt,ae.width,ae.height,Ae,ae.data):F.texSubImage2D(F.TEXTURE_2D,et,Ft,Zt,bt,It,Ae,$t,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,tn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,He),F.pixelStorei(F.UNPACK_SKIP_ROWS,ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De),et===0&&tt.generateMipmaps&&F.generateMipmap(Bt),W.unbindTexture()},this.copyTextureToTexture3D=function(O,tt,ot=null,lt=null,et=0){return O.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,lt=arguments[1]||null,O=arguments[2],tt=arguments[3],et=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,tt,ot,lt,et)},this.initRenderTarget=function(O){dt.get(O).__webglFramebuffer===void 0&&B.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?B.setTextureCube(O,0):O.isData3DTexture?B.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?B.setTexture2DArray(O,0):B.setTexture2D(O,0),W.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,W.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class om extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class lm extends Se{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Fe,p=Fe,f,d){super(null,a,o,c,l,p,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr extends ci{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ms=new V,gs=new V,Cl=new te,rr=new Ss,Qr=new ys,ia=new V,Pl=new V;class mo extends me{constructor(t=new Ee,e=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ms.fromBufferAttribute(e,r-1),gs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ms.distanceTo(gs);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,t.ray.intersectsSphere(Qr)===!1)return;Cl.copy(r).invert(),rr.copy(t.ray).applyMatrix4(Cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,p=n.index,d=n.attributes.position;if(p!==null){const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let g=m,u=v-1;g<u;g+=l){const h=p.getX(g),x=p.getX(g+1),M=ts(this,t,rr,c,h,x);M&&e.push(M)}if(this.isLineLoop){const g=p.getX(v-1),u=p.getX(m),h=ts(this,t,rr,c,g,u);h&&e.push(h)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let g=m,u=v-1;g<u;g+=l){const h=ts(this,t,rr,c,g,g+1);h&&e.push(h)}if(this.isLineLoop){const g=ts(this,t,rr,c,v-1,m);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ts(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(ms.fromBufferAttribute(a,r),gs.fromBufferAttribute(a,s),e.distanceSqToSegment(ms,gs,ia,Pl)>n)return;ia.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ia);if(!(c<t.near||c>t.far))return{distance:c,point:Pl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Ll=new V,Dl=new V;class cm extends mo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Ll.fromBufferAttribute(e,r),Dl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ll.distanceTo(Dl);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const p=n[r],d=n[r+1]-p,m=(a-p)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new St:new V);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new V,r=[],s=[],a=[],o=new V,c=new te;for(let m=0;m<=t;m++){const v=m/t;r[m]=this.getTangentAt(v,new V)}s[0]=new V,a[0]=new V;let l=Number.MAX_VALUE;const p=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);p<=l&&(l=p,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(xe(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(xe(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let v=1;v<=t;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class go extends Qe{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new St){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const p=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*p-m*f+this.aX,l=d*f+m*p+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hm extends go{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _o(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,p,f){let d=(a-s)/l-(o-s)/(l+p)+(o-a)/p,m=(o-a)/p-(c-a)/(p+f)+(c-o)/f;d*=p,m*=p,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const es=new V,ra=new _o,sa=new _o,aa=new _o;class um extends Qe{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new V){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,p;this.closed||o>0?l=r[(o-1)%s]:(es.subVectors(r[0],r[1]).add(r[0]),l=es);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?p=r[(o+2)%s]:(es.subVectors(r[s-1],r[s-2]).add(r[s-1]),p=es),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(d),m),u=Math.pow(d.distanceToSquared(p),m);g<1e-4&&(g=1),v<1e-4&&(v=g),u<1e-4&&(u=g),ra.initNonuniformCatmullRom(l.x,f.x,d.x,p.x,v,g,u),sa.initNonuniformCatmullRom(l.y,f.y,d.y,p.y,v,g,u),aa.initNonuniformCatmullRom(l.z,f.z,d.z,p.z,v,g,u)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(l.x,f.x,d.x,p.x,this.tension),sa.initCatmullRom(l.y,f.y,d.y,p.y,this.tension),aa.initCatmullRom(l.z,f.z,d.z,p.z,this.tension));return n.set(ra.calc(c),sa.calc(c),aa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new V().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Il(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function fm(i,t){const e=1-i;return e*e*t}function dm(i,t){return 2*(1-i)*i*t}function pm(i,t){return i*i*t}function dr(i,t,e,n){return fm(i,t)+dm(i,e)+pm(i,n)}function mm(i,t){const e=1-i;return e*e*e*t}function gm(i,t){const e=1-i;return 3*e*e*i*t}function _m(i,t){return 3*(1-i)*i*i*t}function vm(i,t){return i*i*i*t}function pr(i,t,e,n,r){return mm(i,t)+gm(i,e)+_m(i,n)+vm(i,r)}class Ac extends Qe{constructor(t=new St,e=new St,n=new St,r=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,r.x,s.x,a.x,o.x),pr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xm extends Qe{constructor(t=new V,e=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new V){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,r.x,s.x,a.x,o.x),pr(t,r.y,s.y,a.y,o.y),pr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rc extends Qe{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mm extends Qe{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cc extends Qe{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ym extends Qe{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y),dr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pc extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],p=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Il(o,c.x,l.x,p.x,f.x),Il(o,c.y,l.y,p.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new St().fromArray(r))}return this}}var Ul=Object.freeze({__proto__:null,ArcCurve:hm,CatmullRomCurve3:um,CubicBezierCurve:Ac,CubicBezierCurve3:xm,EllipseCurve:go,LineCurve:Rc,LineCurve3:Mm,QuadraticBezierCurve:Cc,QuadraticBezierCurve3:ym,SplineCurve:Pc});class Sm extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const p=c[l];n&&n.equals(p)||(e.push(p),n=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Ul[r.type]().fromJSON(r))}return this}}class Hi extends Sm{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rc(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Cc(this.currentPoint.clone(),new St(t,e),new St(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Ac(this.currentPoint.clone(),new St(t,e),new St(n,r),new St(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+l,e+p,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new go(t,e,n,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const p=l.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vo extends Ee{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new V,p=new St;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const m=n+f/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),p.x=(a[d]/t+1)/2,p.y=(a[d+1]/t+1)/2,c.push(p.x,p.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mr extends Hi{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Hi().fromJSON(r))}return this}}const Em={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Lc(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,p,f,d,m;if(n&&(s=Rm(i,t,s,e)),i.length>80*e){o=l=i[0],c=p=i[1];for(let v=e;v<r;v+=e)f=i[v],d=i[v+1],f<o&&(o=f),d<c&&(c=d),f>l&&(l=f),d>p&&(p=d);m=Math.max(l-o,p-c),m=m!==0?32767/m:0}return Mr(s,a,e,o,c,m,0),a}};function Lc(i,t,e,n,r){let s,a;if(r===zm(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Nl(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Nl(s,i[s],i[s+1],a);return a&&ws(a,a.next)&&(Sr(a),a=a.next),a}function si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||ce(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Im(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Tm(i,n,r,s):wm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Sr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=bm(si(i),t,e),Mr(i,t,e,n,r,s,2)):a===2&&Am(i,t,e,n,r,s):Mr(si(i),t,e,n,r,s,1);break}}}function wm(i){const t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,p=r<s?r<a?r:a:s<a?s:a,f=o<c?o<l?o:l:c<l?c:l,d=r>s?r>a?r:a:s>a?s:a,m=o>c?o>l?o:l:c>l?c:l;let v=n.next;for(;v!==t;){if(v.x>=p&&v.x<=d&&v.y>=f&&v.y<=m&&Ii(r,o,s,c,a,l,v.x,v.y)&&ce(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Tm(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ce(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,p=r.y,f=s.y,d=a.y,m=o<c?o<l?o:l:c<l?c:l,v=p<f?p<d?p:d:f<d?f:d,g=o>c?o>l?o:l:c>l?c:l,u=p>f?p>d?p:d:f>d?f:d,h=$a(m,v,t,e,n),x=$a(g,u,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=h&&_&&_.z<=x;){if(M.x>=m&&M.x<=g&&M.y>=v&&M.y<=u&&M!==r&&M!==a&&Ii(o,p,c,f,l,d,M.x,M.y)&&ce(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=m&&_.x<=g&&_.y>=v&&_.y<=u&&_!==r&&_!==a&&Ii(o,p,c,f,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=h;){if(M.x>=m&&M.x<=g&&M.y>=v&&M.y<=u&&M!==r&&M!==a&&Ii(o,p,c,f,l,d,M.x,M.y)&&ce(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=x;){if(_.x>=m&&_.x<=g&&_.y>=v&&_.y<=u&&_!==r&&_!==a&&Ii(o,p,c,f,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bm(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!ws(r,s)&&Dc(r,n,n.next,s)&&yr(r,s)&&yr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Sr(n),Sr(n.next),n=i=s),n=n.next}while(n!==i);return si(n)}function Am(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fm(a,o)){let c=Ic(a,o);a=si(a,a.next),c=si(c,c.next),Mr(a,t,e,n,r,s,0),Mr(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Rm(i,t,e,n){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=Lc(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Nm(l));for(r.sort(Cm),s=0;s<r.length;s++)e=Pm(r[s],e);return e}function Cm(i,t){return i.x-t.x}function Pm(i,t){const e=Lm(i,t);if(!e)return t;const n=Ic(e,i);return si(n,n.next),si(e,e.next)}function Lm(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let p=1/0,f;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Ii(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(s-e.x),yr(e,i)&&(f<p||f===p&&(e.x>r.x||e.x===r.x&&Dm(r,e)))&&(r=e,p=f)),e=e.next;while(e!==o);return r}function Dm(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function Im(i,t,e,n){let r=i;do r.z===0&&(r.z=$a(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Um(r)}function Um(i){let t,e,n,r,s,a,o,c,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function $a(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Nm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ii(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Fm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Om(i,t)&&(yr(i,t)&&yr(t,i)&&Bm(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||ws(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function Dc(i,t,e,n){const r=is(ce(i,t,e)),s=is(ce(i,t,n)),a=is(ce(e,n,i)),o=is(ce(e,n,t));return!!(r!==s&&a!==o||r===0&&ns(i,e,t)||s===0&&ns(i,n,t)||a===0&&ns(e,i,n)||o===0&&ns(e,t,n))}function ns(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function is(i){return i>0?1:i<0?-1:0}function Om(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Dc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function Bm(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ic(i,t){const e=new Ka(i.i,i.x,i.y),n=new Ka(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Nl(i,t,e,n){const r=new Ka(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ka(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zm(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class ii{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return ii.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Fl(t),Ol(n,t);let a=t.length;e.forEach(Fl);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,Ol(n,e[c]);const o=Em.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Fl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ol(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ts extends Ee{constructor(t=new mr([new St(0,.5),new St(-.5,-.5),new St(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let p=0;p<t.length;p++)l(t[p]),this.addGroup(o,c,p),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(s,3)),this.setAttribute("uv",new se(a,2));function l(p){const f=r.length/3,d=p.extractPoints(e);let m=d.shape;const v=d.holes;ii.isClockWise(m)===!1&&(m=m.reverse());for(let u=0,h=v.length;u<h;u++){const x=v[u];ii.isClockWise(x)===!0&&(v[u]=x.reverse())}const g=ii.triangulateShape(m,v);for(let u=0,h=v.length;u<h;u++){const x=v[u];m=m.concat(x)}for(let u=0,h=m.length;u<h;u++){const x=m[u];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let u=0,h=g.length;u<h;u++){const x=g[u],M=x[0]+f,_=x[1]+f,T=x[2]+f;n.push(M,_,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return km(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new Ts(n,t.curveSegments)}}function km(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class bs extends Ee{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const p=[],f=new V,d=new V,m=[],v=[],g=[],u=[];for(let h=0;h<=n;h++){const x=[],M=h/n;let _=0;h===0&&a===0?_=.5/e:h===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const E=T/e;f.x=-t*Math.cos(r+E*s)*Math.sin(a+M*o),f.y=t*Math.cos(a+M*o),f.z=t*Math.sin(r+E*s)*Math.sin(a+M*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),u.push(E+_,1-M),x.push(l++)}p.push(x)}for(let h=0;h<n;h++)for(let x=0;x<e;x++){const M=p[h][x+1],_=p[h][x],T=p[h+1][x],E=p[h+1][x+1];(h!==0||a>0)&&m.push(M,_,E),(h!==n-1||c<Math.PI)&&m.push(_,T,E)}this.setIndex(m),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(g,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xo extends Ee{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],p=new V,f=new V,d=new V;for(let m=0;m<=n;m++)for(let v=0;v<=r;v++){const g=v/r*s,u=m/n*Math.PI*2;f.x=(t+e*Math.cos(u))*Math.cos(g),f.y=(t+e*Math.cos(u))*Math.sin(g),f.z=e*Math.sin(u),o.push(f.x,f.y,f.z),p.x=t*Math.cos(g),p.y=t*Math.sin(g),d.subVectors(f,p).normalize(),c.push(d.x,d.y,d.z),l.push(v/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){const g=(r+1)*m+v-1,u=(r+1)*(m-1)+v-1,h=(r+1)*(m-1)+v,x=(r+1)*m+v;a.push(g,u,x),a.push(u,h,x)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Uc extends ci{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nc extends ci{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const _s={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Hm{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(p){o++,s===!1&&r.onStart!==void 0&&r.onStart(p,a,o),s=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return c?c(p):p},this.setURLModifier=function(p){return c=p,this},this.addHandler=function(p,f){return l.push(p,f),this},this.removeHandler=function(p){const f=l.indexOf(p);return f!==-1&&l.splice(f,2),this},this.getHandler=function(p){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],v=l[f+1];if(m.global&&(m.lastIndex=0),m.test(p))return v}return null}}}const Gm=new Hm;class In{constructor(t){this.manager=t!==void 0?t:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}In.DEFAULT_MATERIAL_NAME="__DEFAULT";const on={};class Vm extends Error{constructor(t,e){super(t),this.response=e}}class As extends In{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=_s.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(on[t]!==void 0){on[t].push({onLoad:e,onProgress:n,onError:r});return}on[t]=[],on[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const p=on[t],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,v=m!==0;let g=0;const u=new ReadableStream({start(h){x();function x(){f.read().then(({done:M,value:_})=>{if(M)h.close();else{g+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let E=0,w=p.length;E<w;E++){const A=p[E];A.onProgress&&A.onProgress(T)}h.enqueue(_),x()}},M=>{h.error(M)})}}});return new Response(u)}else throw new Vm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(p=>new DOMParser().parseFromString(p,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{_s.add(t,l);const p=on[t];delete on[t];for(let f=0,d=p.length;f<d;f++){const m=p[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const p=on[t];if(p===void 0)throw this.manager.itemError(t),l;delete on[t];for(let f=0,d=p.length;f<d;f++){const m=p[f];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Wm extends In{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=_s.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=vr("img");function c(){p(),_s.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){p(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function p(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Xm extends In{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new lm,o=new As(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(c){let l;try{l=s.parse(c)}catch(p){if(r!==void 0)r(p);else{console.error(p);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:hn,a.wrapT=l.wrapT!==void 0?l.wrapT:hn,a.magFilter=l.magFilter!==void 0?l.magFilter:Pe,a.minFilter=l.minFilter!==void 0?l.minFilter:Pe,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=un),l.mipmapCount===1&&(a.minFilter=Pe),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,e&&e(a,l)},n,r),a}}class Fc extends In{constructor(t){super(t)}load(t,e,n,r){const s=new Se,a=new Wm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Mo extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const oa=new te,Bl=new V,zl=new V;class Oc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bl),zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zl),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kl=new te,sr=new V,la=new V;class qm extends Oc{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),la.copy(n.position),la.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(la),n.updateMatrixWorld(),r.makeTranslation(-sr.x,-sr.y,-sr.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}}class Ym extends Mo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new qm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jm extends Oc{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new jm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jm extends Mo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let rs;class Bc{static getContext(){return rs===void 0&&(rs=new(window.AudioContext||window.webkitAudioContext)),rs}static setContext(t){rs=t}}class $m extends In{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new As(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){try{const l=c.slice(0);Bc.getContext().decodeAudioData(l,function(f){e(f)}).catch(o)}catch(l){o(l)}},n,r);function o(c){r?r(c):console.error(c),s.manager.itemError(t)}}}class Km{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hl(){return performance.now()}const Hn=new V,Gl=new _n,Qm=new V,Gn=new V;class tg extends me{constructor(){super(),this.type="AudioListener",this.context=Bc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Km}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Hn,Gl,Qm),Gn.set(0,0,-1).applyQuaternion(Gl),e.positionX){const r=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Hn.x,r),e.positionY.linearRampToValueAtTime(Hn.y,r),e.positionZ.linearRampToValueAtTime(Hn.z,r),e.forwardX.linearRampToValueAtTime(Gn.x,r),e.forwardY.linearRampToValueAtTime(Gn.y,r),e.forwardZ.linearRampToValueAtTime(Gn.z,r),e.upX.linearRampToValueAtTime(n.x,r),e.upY.linearRampToValueAtTime(n.y,r),e.upZ.linearRampToValueAtTime(n.z,r)}else e.setPosition(Hn.x,Hn.y,Hn.z),e.setOrientation(Gn.x,Gn.y,Gn.z,n.x,n.y,n.z)}}class eg extends me{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Vn=new V,Vl=new _n,ng=new V,Wn=new V;class ig extends eg{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Vn,Vl,ng),Wn.set(0,0,1).applyQuaternion(Vl);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Vn.x,n),e.positionY.linearRampToValueAtTime(Vn.y,n),e.positionZ.linearRampToValueAtTime(Vn.z,n),e.orientationX.linearRampToValueAtTime(Wn.x,n),e.orientationY.linearRampToValueAtTime(Wn.y,n),e.orientationZ.linearRampToValueAtTime(Wn.z,n)}else e.setPosition(Vn.x,Vn.y,Vn.z),e.setOrientation(Wn.x,Wn.y,Wn.z)}}const Wl=new te;class rg{constructor(t,e,n=0,r=1/0){this.ray=new Ss(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(t,e=!0,n=[]){return Qa(t,this,n,e),n.sort(Xl),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Qa(t[r],this,n,e);return n.sort(Xl),n}}function Xl(i,t){return i.distance-t.distance}function Qa(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Qa(s[a],t,e,!0)}}class ql{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yl=new St;class sg{constructor(t=new St(1/0,1/0),e=new St(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yl).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class ag extends cm{constructor(t=10,e=10,n=4473924,r=8947848){n=new Ht(n),r=new Ht(r);const s=e/2,a=t/e,o=t/2,c=[],l=[];for(let d=0,m=0,v=-o;d<=e;d++,v+=a){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const g=d===s?n:r;g.toArray(l,m),m+=3,g.toArray(l,m),m+=3,g.toArray(l,m),m+=3,g.toArray(l,m),m+=3}const p=new Ee;p.setAttribute("position",new se(c,3)),p.setAttribute("color",new se(l,3));const f=new xr({vertexColors:!0,toneMapped:!1});super(p,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Rn{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Hi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,a){return this.currentPath.bezierCurveTo(t,e,n,r,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(h){const x=[];for(let M=0,_=h.length;M<_;M++){const T=h[M],E=new mr;E.curves=T.curves,x.push(E)}return x}function n(h,x){const M=x.length;let _=!1;for(let T=M-1,E=0;E<M;T=E++){let w=x[T],A=x[E],y=A.x-w.x,S=A.y-w.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(w=x[E],y=-y,A=x[T],S=-S),h.y<w.y||h.y>A.y)continue;if(h.y===w.y){if(h.x===w.x)return!0}else{const I=S*(h.x-w.x)-y*(h.y-w.y);if(I===0)return!0;if(I<0)continue;_=!_}}else{if(h.y!==w.y)continue;if(A.x<=h.x&&h.x<=w.x||w.x<=h.x&&h.x<=A.x)return!0}}return _}const r=ii.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new mr,c.curves=o.curves,l.push(c),l;let p=!r(s[0].getPoints());p=t?!p:p;const f=[],d=[];let m=[],v=0,g;d[v]=void 0,m[v]=[];for(let h=0,x=s.length;h<x;h++)o=s[h],g=o.getPoints(),a=r(g),a=t?!a:a,a?(!p&&d[v]&&v++,d[v]={s:new mr,p:g},d[v].s.curves=o.curves,p&&v++,m[v]=[]):m[v].push({h:o,p:g[0]});if(!d[0])return e(s);if(d.length>1){let h=!1,x=0;for(let M=0,_=d.length;M<_;M++)f[M]=[];for(let M=0,_=d.length;M<_;M++){const T=m[M];for(let E=0;E<T.length;E++){const w=T[E];let A=!0;for(let y=0;y<d.length;y++)n(w.p,d[y].p)&&(M!==y&&x++,A?(A=!1,f[y].push(w)):h=!0);A&&f[M].push(w)}}x>0&&h===!1&&(m=f)}let u;for(let h=0,x=d.length;h<x;h++){c=d[h].s,l.push(c),u=m[h];for(let M=0,_=u.length;M<_;M++)c.holes.push(u[M].h)}return l}}class og extends oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);function Tr(){const t=window.innerWidth/window.innerHeight,e=.01,n=70;return new Ce(70,t,e,n)}function br(){const i=new om;return i.userData.movable=!1,i}const jl={type:"change"},yo={type:"start"},zc={type:"end"},ss=new Ss,Zl=new cn,lg=Math.cos(70*ja.DEG2RAD),de=new V,Re=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ca=1e-6;class cg extends og{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new _n,this._lastTargetPosition=new V,this._quat=new _n().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ql,this._sphericalDelta=new ql,this._scale=1,this._panOffset=new V,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new V,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ug.bind(this),this._onPointerDown=hg.bind(this),this._onPointerUp=fg.bind(this),this._onContextMenu=xg.bind(this),this._onMouseWheel=mg.bind(this),this._onKeyDown=gg.bind(this),this._onTouchStart=_g.bind(this),this._onTouchMove=vg.bind(this),this._onMouseDown=dg.bind(this),this._onMouseMove=pg.bind(this),this._interceptControlDown=Mg.bind(this),this._interceptControlUp=yg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jl),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;de.copy(e).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Re:n>Math.PI&&(n-=Re),r<-Math.PI?r+=Re:r>Math.PI&&(r-=Re),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),e.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=de.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new V(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ss.origin.copy(this.object.position),ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ss.direction))<lg?this.object.lookAt(this.target):(Zl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ss.intersectPlane(Zl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ca||this._lastTargetPosition.distanceToSquared(this.target)>ca?(this.dispatchEvent(jl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Re/60*this.autoRotateSpeed*t:Re/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){de.setFromMatrixColumn(e,0),de.multiplyScalar(-t),this._panOffset.add(de)}_panUp(t,e){this.screenSpacePanning===!0?de.setFromMatrixColumn(e,1):(de.setFromMatrixColumn(e,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(t),this._panOffset.add(de)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;de.copy(r).sub(this.target);let s=de.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ug(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zc),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case Oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case Oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(yo)}function pg(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(yo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zc))}function gg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function _g(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(yo)}function vg(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function xg(i){this.enabled!==!1&&i.preventDefault()}function Mg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ar(i,t){const e=new cg(i,t);return e.enableDamping=!0,e.animate=()=>e.update(),e}class Sg{static createButton(t,e={}){const n=document.createElement("button");function r(){if(e.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const m=document.createElementNS("http://www.w3.org/2000/svg","svg");m.setAttribute("width",38),m.setAttribute("height",38),m.style.position="absolute",m.style.right="20px",m.style.top="20px",m.addEventListener("click",function(){l.end()}),d.appendChild(m);const v=document.createElementNS("http://www.w3.org/2000/svg","path");v.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),v.setAttribute("stroke","#fff"),v.setAttribute("stroke-width",2),m.appendChild(v),e.optionalFeatures===void 0&&(e.optionalFeatures=[]),e.optionalFeatures.push("dom-overlay"),e.domOverlay={root:d}}let l=null;async function p(d){d.addEventListener("end",f),t.xr.setReferenceSpaceType("local"),await t.xr.setSession(d),n.textContent="STOP AR",e.domOverlay.root.style.display="",l=d}function f(){l.removeEventListener("end",f),n.textContent="START AR",e.domOverlay.root.style.display="none",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-ar",e).then(p):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",e).then(p).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",e).then(p).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="AR NOT SUPPORTED"}function o(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="AR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-ar").then(function(l){l?r():a()}).catch(o),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}}function Rr(){const i=new am({antialias:!0,alpha:!0});return i.xr.enabled=!0,i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.xr.setReferenceSpaceType("viewer"),document.body.appendChild(Sg.createButton(i,{requiredFeatures:["anchors","local-floor"],optionalFeatures:["light-estimation","depth-sensing","bounded-floor"],depthSensing:{usagePreference:["gpu-optimized"],dataFormatPreference:[]}})),i}function ie(i,t){const e=t.clone(),n=new te;i.parent&&(i.parent.updateMatrixWorld(!0),n.copy(i.parent.matrixWorld).invert(),e.applyMatrix4(n)),i.position.copy(e)}function qn(i){return new Fc().load(i)}function Eg(i,t,e){const n=new xn(i,t,e),r=qn("./assets/textures/CrumbledPlastic.png"),s=new Uc({map:r}),a=new he(n,s);return a.animate=()=>{a.rotation.x+=.01,a.rotation.y+=.01},a.userData.movable=!0,a}function Cr(){const i=new Jm(16777147,20),t=new Zm(16776427,4);return i.position.set(20,10,10),t.position.set(3,5,3),t}function wg(i){let t;return t=i.xr.getController(0),t.animate=()=>{},t}function kc(i,t,e,n){const r=new rg;let s=null,a,o=[];const c={x:0,y:0},l=wg(e);i.add(l),l.addEventListener("selectstart",f),l.addEventListener("selectend",d);function p(m,v){return Tg(s,a),r.setFromCamera(c,v),o=r.intersectObjects(m.children,!0),o.length>0&&(s=o[0].object,Ag(s)),s}function f(m){console.log("onSelectStart");const v=m.target;if(p(i,t),s){v.attach(s),v.userData.selected=s;const g=n.indexOf(s);g!==-1&&n.splice(g,1)}}function d(m){console.log("onSelectEnd");const v=m.target;i.attach(s),v.userData.selected=void 0,n.includes(s)||(n.push(s),console.log("toAnimate in onSelectEnd",n))}return r.animate=()=>{p(i,t),l.animate()},r}function Tg(i,t){i&&i.material&&i.material.emissive&&(i.material.emissive.setHex(t),i=null)}function bg(i,t){i&&i.material&&i.material.emissive&&i.material.emissive.getHex()}function Ag(i,t){i&&i.material&&i.material.emissive&&(bg(i),i.material.emissive.setHex(16711680))}const Rg=Ne;class vs extends In{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,r){const s=this,a=new As(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){const e=this;function n(N,D){if(N.nodeType!==1)return;const C=_(N);let b=!1,Z=null;switch(N.nodeName){case"svg":D=v(N,D);break;case"style":s(N);break;case"g":D=v(N,D);break;case"path":D=v(N,D),N.hasAttribute("d")&&(Z=r(N));break;case"rect":D=v(N,D),Z=c(N);break;case"polygon":D=v(N,D),Z=l(N);break;case"polyline":D=v(N,D),Z=p(N);break;case"circle":D=v(N,D),Z=f(N);break;case"ellipse":D=v(N,D),Z=d(N);break;case"line":D=v(N,D),Z=m(N);break;case"defs":b=!0;break;case"use":D=v(N,D);const ct=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ut=N.viewportElement.getElementById(ct);ut?n(ut,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+ct);break}Z&&(D.fill!==void 0&&D.fill!=="none"&&Z.color.setStyle(D.fill,Rg),E(Z,J),L.push(Z),Z.userData={node:N,style:D});const it=N.childNodes;for(let Y=0;Y<it.length;Y++){const ct=it[Y];b&&ct.nodeName!=="style"&&ct.nodeName!=="defs"||n(ct,D)}C&&(z.pop(),z.length>0?J.copy(z[z.length-1]):J.identity())}function r(N){const D=new Rn,C=new St,b=new St,Z=new St;let it=!0,Y=!1;const ct=N.getAttribute("d");if(ct===""||ct==="none")return null;const ut=ct.match(/[a-df-z][^a-df-z]*/ig);for(let pt=0,F=ut.length;pt<F;pt++){const at=ut[pt],rt=at.charAt(0),st=at.slice(1).trim();it===!0&&(Y=!0,it=!1);let W;switch(rt){case"M":W=u(st);for(let G=0,dt=W.length;G<dt;G+=2)C.x=W[G+0],C.y=W[G+1],b.x=C.x,b.y=C.y,G===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),G===0&&Z.copy(C);break;case"H":W=u(st);for(let G=0,dt=W.length;G<dt;G++)C.x=W[G],b.x=C.x,b.y=C.y,D.lineTo(C.x,C.y),G===0&&Y===!0&&Z.copy(C);break;case"V":W=u(st);for(let G=0,dt=W.length;G<dt;G++)C.y=W[G],b.x=C.x,b.y=C.y,D.lineTo(C.x,C.y),G===0&&Y===!0&&Z.copy(C);break;case"L":W=u(st);for(let G=0,dt=W.length;G<dt;G+=2)C.x=W[G+0],C.y=W[G+1],b.x=C.x,b.y=C.y,D.lineTo(C.x,C.y),G===0&&Y===!0&&Z.copy(C);break;case"C":W=u(st);for(let G=0,dt=W.length;G<dt;G+=6)D.bezierCurveTo(W[G+0],W[G+1],W[G+2],W[G+3],W[G+4],W[G+5]),b.x=W[G+2],b.y=W[G+3],C.x=W[G+4],C.y=W[G+5],G===0&&Y===!0&&Z.copy(C);break;case"S":W=u(st);for(let G=0,dt=W.length;G<dt;G+=4)D.bezierCurveTo(g(C.x,b.x),g(C.y,b.y),W[G+0],W[G+1],W[G+2],W[G+3]),b.x=W[G+0],b.y=W[G+1],C.x=W[G+2],C.y=W[G+3],G===0&&Y===!0&&Z.copy(C);break;case"Q":W=u(st);for(let G=0,dt=W.length;G<dt;G+=4)D.quadraticCurveTo(W[G+0],W[G+1],W[G+2],W[G+3]),b.x=W[G+0],b.y=W[G+1],C.x=W[G+2],C.y=W[G+3],G===0&&Y===!0&&Z.copy(C);break;case"T":W=u(st);for(let G=0,dt=W.length;G<dt;G+=2){const B=g(C.x,b.x),P=g(C.y,b.y);D.quadraticCurveTo(B,P,W[G+0],W[G+1]),b.x=B,b.y=P,C.x=W[G+0],C.y=W[G+1],G===0&&Y===!0&&Z.copy(C)}break;case"A":W=u(st,[3,4],7);for(let G=0,dt=W.length;G<dt;G+=7){if(W[G+5]==C.x&&W[G+6]==C.y)continue;const B=C.clone();C.x=W[G+5],C.y=W[G+6],b.x=C.x,b.y=C.y,a(D,W[G],W[G+1],W[G+2],W[G+3],W[G+4],B,C),G===0&&Y===!0&&Z.copy(C)}break;case"m":W=u(st);for(let G=0,dt=W.length;G<dt;G+=2)C.x+=W[G+0],C.y+=W[G+1],b.x=C.x,b.y=C.y,G===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),G===0&&Z.copy(C);break;case"h":W=u(st);for(let G=0,dt=W.length;G<dt;G++)C.x+=W[G],b.x=C.x,b.y=C.y,D.lineTo(C.x,C.y),G===0&&Y===!0&&Z.copy(C);break;case"v":W=u(st);for(let G=0,dt=W.length;G<dt;G++)C.y+=W[G],b.x=C.x,b.y=C.y,D.lineTo(C.x,C.y),G===0&&Y===!0&&Z.copy(C);break;case"l":W=u(st);for(let G=0,dt=W.length;G<dt;G+=2)C.x+=W[G+0],C.y+=W[G+1],b.x=C.x,b.y=C.y,D.lineTo(C.x,C.y),G===0&&Y===!0&&Z.copy(C);break;case"c":W=u(st);for(let G=0,dt=W.length;G<dt;G+=6)D.bezierCurveTo(C.x+W[G+0],C.y+W[G+1],C.x+W[G+2],C.y+W[G+3],C.x+W[G+4],C.y+W[G+5]),b.x=C.x+W[G+2],b.y=C.y+W[G+3],C.x+=W[G+4],C.y+=W[G+5],G===0&&Y===!0&&Z.copy(C);break;case"s":W=u(st);for(let G=0,dt=W.length;G<dt;G+=4)D.bezierCurveTo(g(C.x,b.x),g(C.y,b.y),C.x+W[G+0],C.y+W[G+1],C.x+W[G+2],C.y+W[G+3]),b.x=C.x+W[G+0],b.y=C.y+W[G+1],C.x+=W[G+2],C.y+=W[G+3],G===0&&Y===!0&&Z.copy(C);break;case"q":W=u(st);for(let G=0,dt=W.length;G<dt;G+=4)D.quadraticCurveTo(C.x+W[G+0],C.y+W[G+1],C.x+W[G+2],C.y+W[G+3]),b.x=C.x+W[G+0],b.y=C.y+W[G+1],C.x+=W[G+2],C.y+=W[G+3],G===0&&Y===!0&&Z.copy(C);break;case"t":W=u(st);for(let G=0,dt=W.length;G<dt;G+=2){const B=g(C.x,b.x),P=g(C.y,b.y);D.quadraticCurveTo(B,P,C.x+W[G+0],C.y+W[G+1]),b.x=B,b.y=P,C.x=C.x+W[G+0],C.y=C.y+W[G+1],G===0&&Y===!0&&Z.copy(C)}break;case"a":W=u(st,[3,4],7);for(let G=0,dt=W.length;G<dt;G+=7){if(W[G+5]==0&&W[G+6]==0)continue;const B=C.clone();C.x+=W[G+5],C.y+=W[G+6],b.x=C.x,b.y=C.y,a(D,W[G],W[G+1],W[G+2],W[G+3],W[G+4],B,C),G===0&&Y===!0&&Z.copy(C)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(C.copy(Z),D.currentPath.currentPoint.copy(C),it=!0);break;default:console.warn(at)}Y=!1}return D}function s(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let D=0;D<N.sheet.cssRules.length;D++){const C=N.sheet.cssRules[D];if(C.type!==1)continue;const b=C.selectorText.split(/,/gm).filter(Boolean).map(Z=>Z.trim());for(let Z=0;Z<b.length;Z++){const it=Object.fromEntries(Object.entries(C.style).filter(([,Y])=>Y!==""));U[b[Z]]=Object.assign(U[b[Z]]||{},it)}}}function a(N,D,C,b,Z,it,Y,ct){if(D==0||C==0){N.lineTo(ct.x,ct.y);return}b=b*Math.PI/180,D=Math.abs(D),C=Math.abs(C);const ut=(Y.x-ct.x)/2,pt=(Y.y-ct.y)/2,F=Math.cos(b)*ut+Math.sin(b)*pt,at=-Math.sin(b)*ut+Math.cos(b)*pt;let rt=D*D,st=C*C;const W=F*F,G=at*at,dt=W/rt+G/st;if(dt>1){const Ot=Math.sqrt(dt);D=Ot*D,C=Ot*C,rt=D*D,st=C*C}const B=rt*G+st*W,P=(rt*st-B)/B;let K=Math.sqrt(Math.max(0,P));Z===it&&(K=-K);const ht=K*D*at/C,gt=-K*C*F/D,mt=Math.cos(b)*ht-Math.sin(b)*gt+(Y.x+ct.x)/2,xt=Math.sin(b)*ht+Math.cos(b)*gt+(Y.y+ct.y)/2,Mt=o(1,0,(F-ht)/D,(at-gt)/C),Et=o((F-ht)/D,(at-gt)/C,(-F-ht)/D,(-at-gt)/C)%(Math.PI*2);N.currentPath.absellipse(mt,xt,D,C,Mt,Mt+Et,it===0,b)}function o(N,D,C,b){const Z=N*C+D*b,it=Math.sqrt(N*N+D*D)*Math.sqrt(C*C+b*b);let Y=Math.acos(Math.max(-1,Math.min(1,Z/it)));return N*b-D*C<0&&(Y=-Y),Y}function c(N){const D=M(N.getAttribute("x")||0),C=M(N.getAttribute("y")||0),b=M(N.getAttribute("rx")||N.getAttribute("ry")||0),Z=M(N.getAttribute("ry")||N.getAttribute("rx")||0),it=M(N.getAttribute("width")),Y=M(N.getAttribute("height")),ct=1-.551915024494,ut=new Rn;return ut.moveTo(D+b,C),ut.lineTo(D+it-b,C),(b!==0||Z!==0)&&ut.bezierCurveTo(D+it-b*ct,C,D+it,C+Z*ct,D+it,C+Z),ut.lineTo(D+it,C+Y-Z),(b!==0||Z!==0)&&ut.bezierCurveTo(D+it,C+Y-Z*ct,D+it-b*ct,C+Y,D+it-b,C+Y),ut.lineTo(D+b,C+Y),(b!==0||Z!==0)&&ut.bezierCurveTo(D+b*ct,C+Y,D,C+Y-Z*ct,D,C+Y-Z),ut.lineTo(D,C+Z),(b!==0||Z!==0)&&ut.bezierCurveTo(D,C+Z*ct,D+b*ct,C,D+b,C),ut}function l(N){function D(it,Y,ct){const ut=M(Y),pt=M(ct);Z===0?b.moveTo(ut,pt):b.lineTo(ut,pt),Z++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Rn;let Z=0;return N.getAttribute("points").replace(C,D),b.currentPath.autoClose=!0,b}function p(N){function D(it,Y,ct){const ut=M(Y),pt=M(ct);Z===0?b.moveTo(ut,pt):b.lineTo(ut,pt),Z++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Rn;let Z=0;return N.getAttribute("points").replace(C,D),b.currentPath.autoClose=!1,b}function f(N){const D=M(N.getAttribute("cx")||0),C=M(N.getAttribute("cy")||0),b=M(N.getAttribute("r")||0),Z=new Hi;Z.absarc(D,C,b,0,Math.PI*2);const it=new Rn;return it.subPaths.push(Z),it}function d(N){const D=M(N.getAttribute("cx")||0),C=M(N.getAttribute("cy")||0),b=M(N.getAttribute("rx")||0),Z=M(N.getAttribute("ry")||0),it=new Hi;it.absellipse(D,C,b,Z,0,Math.PI*2);const Y=new Rn;return Y.subPaths.push(it),Y}function m(N){const D=M(N.getAttribute("x1")||0),C=M(N.getAttribute("y1")||0),b=M(N.getAttribute("x2")||0),Z=M(N.getAttribute("y2")||0),it=new Rn;return it.moveTo(D,C),it.lineTo(b,Z),it.currentPath.autoClose=!1,it}function v(N,D){D=Object.assign({},D);let C={};if(N.hasAttribute("class")){const Y=N.getAttribute("class").split(/\s/).filter(Boolean).map(ct=>ct.trim());for(let ct=0;ct<Y.length;ct++)C=Object.assign(C,U["."+Y[ct]])}N.hasAttribute("id")&&(C=Object.assign(C,U["#"+N.getAttribute("id")]));function b(Y,ct,ut){ut===void 0&&(ut=function(F){return F.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),F}),N.hasAttribute(Y)&&(D[ct]=ut(N.getAttribute(Y))),C[Y]&&(D[ct]=ut(C[Y])),N.style&&N.style[Y]!==""&&(D[ct]=ut(N.style[Y]))}function Z(Y){return Math.max(0,Math.min(1,M(Y)))}function it(Y){return Math.max(0,M(Y))}return b("fill","fill"),b("fill-opacity","fillOpacity",Z),b("fill-rule","fillRule"),b("opacity","opacity",Z),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",Z),b("stroke-width","strokeWidth",it),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",it),b("visibility","visibility"),D}function g(N,D){return N-(D-N)}function u(N,D,C){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const b={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Z=0,it=1,Y=2,ct=3;let ut=Z,pt=!0,F="",at="";const rt=[];function st(B,P,K){const ht=new SyntaxError('Unexpected character "'+B+'" at index '+P+".");throw ht.partial=K,ht}function W(){F!==""&&(at===""?rt.push(Number(F)):rt.push(Number(F)*Math.pow(10,Number(at)))),F="",at=""}let G;const dt=N.length;for(let B=0;B<dt;B++){if(G=N[B],Array.isArray(D)&&D.includes(rt.length%C)&&b.FLAGS.test(G)){ut=it,F=G,W();continue}if(ut===Z){if(b.WHITESPACE.test(G))continue;if(b.DIGIT.test(G)||b.SIGN.test(G)){ut=it,F=G;continue}if(b.POINT.test(G)){ut=Y,F=G;continue}b.COMMA.test(G)&&(pt&&st(G,B,rt),pt=!0)}if(ut===it){if(b.DIGIT.test(G)){F+=G;continue}if(b.POINT.test(G)){F+=G,ut=Y;continue}if(b.EXP.test(G)){ut=ct;continue}b.SIGN.test(G)&&F.length===1&&b.SIGN.test(F[0])&&st(G,B,rt)}if(ut===Y){if(b.DIGIT.test(G)){F+=G;continue}if(b.EXP.test(G)){ut=ct;continue}b.POINT.test(G)&&F[F.length-1]==="."&&st(G,B,rt)}if(ut===ct){if(b.DIGIT.test(G)){at+=G;continue}if(b.SIGN.test(G)){if(at===""){at+=G;continue}at.length===1&&b.SIGN.test(at)&&st(G,B,rt)}}b.WHITESPACE.test(G)?(W(),ut=Z,pt=!1):b.COMMA.test(G)?(W(),ut=Z,pt=!0):b.SIGN.test(G)?(W(),ut=it,F=G):b.POINT.test(G)?(W(),ut=Y,F=G):st(G,B,rt)}return W(),rt}const h=["mm","cm","in","pt","pc","px"],x={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function M(N){let D="px";if(typeof N=="string"||N instanceof String)for(let b=0,Z=h.length;b<Z;b++){const it=h[b];if(N.endsWith(it)){D=it,N=N.substring(0,N.length-it.length);break}}let C;return D==="px"&&e.defaultUnit!=="px"?C=x.in[e.defaultUnit]/e.defaultDPI:(C=x[D][e.defaultUnit],C<0&&(C=x[D].in*e.defaultDPI)),C*parseFloat(N)}function _(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const D=T(N);return z.length>0&&D.premultiply(z[z.length-1]),J.copy(D),z.push(D),D}function T(N){const D=new kt,C=j;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const b=M(N.getAttribute("x")),Z=M(N.getAttribute("y"));D.translate(b,Z)}if(N.hasAttribute("transform")){const b=N.getAttribute("transform").split(")");for(let Z=b.length-1;Z>=0;Z--){const it=b[Z].trim();if(it==="")continue;const Y=it.indexOf("("),ct=it.length;if(Y>0&&Y<ct){const ut=it.slice(0,Y),pt=u(it.slice(Y+1));switch(C.identity(),ut){case"translate":if(pt.length>=1){const F=pt[0];let at=0;pt.length>=2&&(at=pt[1]),C.translate(F,at)}break;case"rotate":if(pt.length>=1){let F=0,at=0,rt=0;F=pt[0]*Math.PI/180,pt.length>=3&&(at=pt[1],rt=pt[2]),X.makeTranslation(-at,-rt),q.makeRotation(F),R.multiplyMatrices(q,X),X.makeTranslation(at,rt),C.multiplyMatrices(X,R)}break;case"scale":if(pt.length>=1){const F=pt[0];let at=F;pt.length>=2&&(at=pt[1]),C.scale(F,at)}break;case"skewX":pt.length===1&&C.set(1,Math.tan(pt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":pt.length===1&&C.set(1,0,0,Math.tan(pt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":pt.length===6&&C.set(pt[0],pt[2],pt[4],pt[1],pt[3],pt[5],0,0,1);break}}D.premultiply(C)}}return D}function E(N,D){function C(Y){k.set(Y.x,Y.y,1).applyMatrix3(D),Y.set(k.x,k.y)}function b(Y){const ct=Y.xRadius,ut=Y.yRadius,pt=Math.cos(Y.aRotation),F=Math.sin(Y.aRotation),at=new V(ct*pt,ct*F,0),rt=new V(-ut*F,ut*pt,0),st=at.applyMatrix3(D),W=rt.applyMatrix3(D),G=j.set(st.x,W.x,0,st.y,W.y,0,0,0,1),dt=X.copy(G).invert(),K=q.copy(dt).transpose().multiply(dt).elements,ht=I(K[0],K[1],K[4]),gt=Math.sqrt(ht.rt1),mt=Math.sqrt(ht.rt2);if(Y.xRadius=1/gt,Y.yRadius=1/mt,Y.aRotation=Math.atan2(ht.sn,ht.cs),!((Y.aEndAngle-Y.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Mt=X.set(gt,0,0,0,mt,0,0,0,1),Et=q.set(ht.cs,ht.sn,0,-ht.sn,ht.cs,0,0,0,1),Ot=Mt.multiply(Et).multiply(G),_t=wt=>{const{x:Lt,y:Tt}=new V(Math.cos(wt),Math.sin(wt),0).applyMatrix3(Ot);return Math.atan2(Tt,Lt)};Y.aStartAngle=_t(Y.aStartAngle),Y.aEndAngle=_t(Y.aEndAngle),w(D)&&(Y.aClockwise=!Y.aClockwise)}}function Z(Y){const ct=y(D),ut=S(D);Y.xRadius*=ct,Y.yRadius*=ut;const pt=ct>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);Y.aRotation+=pt,w(D)&&(Y.aStartAngle*=-1,Y.aEndAngle*=-1,Y.aClockwise=!Y.aClockwise)}const it=N.subPaths;for(let Y=0,ct=it.length;Y<ct;Y++){const pt=it[Y].curves;for(let F=0;F<pt.length;F++){const at=pt[F];at.isLineCurve?(C(at.v1),C(at.v2)):at.isCubicBezierCurve?(C(at.v0),C(at.v1),C(at.v2),C(at.v3)):at.isQuadraticBezierCurve?(C(at.v0),C(at.v1),C(at.v2)):at.isEllipseCurve&&(H.set(at.aX,at.aY),C(H),at.aX=H.x,at.aY=H.y,A(D)?b(at):Z(at))}}}function w(N){const D=N.elements;return D[0]*D[4]-D[1]*D[3]<0}function A(N){const D=N.elements,C=D[0]*D[3]+D[1]*D[4];if(C===0)return!1;const b=y(N),Z=S(N);return Math.abs(C/(b*Z))>Number.EPSILON}function y(N){const D=N.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function S(N){const D=N.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function I(N,D,C){let b,Z,it,Y,ct;const ut=N+C,pt=N-C,F=Math.sqrt(pt*pt+4*D*D);return ut>0?(b=.5*(ut+F),ct=1/b,Z=N*ct*C-D*ct*D):ut<0?Z=.5*(ut-F):(b=.5*F,Z=-.5*F),pt>0?it=pt+F:it=pt-F,Math.abs(it)>2*Math.abs(D)?(ct=-2*D/it,Y=1/Math.sqrt(1+ct*ct),it=ct*Y):Math.abs(D)===0?(it=1,Y=0):(ct=-.5*it/D,it=1/Math.sqrt(1+ct*ct),Y=ct*it),pt>0&&(ct=it,it=-Y,Y=ct),{rt1:b,rt2:Z,cs:it,sn:Y}}const L=[],U={},z=[],j=new kt,X=new kt,q=new kt,R=new kt,H=new St,k=new V,J=new kt,Q=new DOMParser().parseFromString(t,"image/svg+xml");return n(Q.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:L,xml:Q.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(g,u,h,x){const M=g.x,_=u.x,T=h.x,E=x.x,w=g.y,A=u.y,y=h.y,S=x.y,I=(E-T)*(w-y)-(S-y)*(M-T),L=(_-M)*(w-y)-(A-w)*(M-T),U=(S-y)*(_-M)-(E-T)*(A-w),z=I/U,j=L/U;if(U===0&&I!==0||z<=0||z>=1||j<0||j>1)return null;if(I===0&&U===0){for(let X=0;X<2;X++)if(a(X===0?h:x,g,u),r.loc==n.ORIGIN){const q=X===0?h:x;return{x:q.x,y:q.y,t:r.t}}else if(r.loc==n.BETWEEN){const q=+(M+r.t*(_-M)).toPrecision(10),R=+(w+r.t*(A-w)).toPrecision(10);return{x:q,y:R,t:r.t}}return null}else{for(let R=0;R<2;R++)if(a(R===0?h:x,g,u),r.loc==n.ORIGIN){const H=R===0?h:x;return{x:H.x,y:H.y,t:r.t}}const X=+(M+z*(_-M)).toPrecision(10),q=+(w+z*(A-w)).toPrecision(10);return{x:X,y:q,t:z}}}function a(g,u,h){const x=h.x-u.x,M=h.y-u.y,_=g.x-u.x,T=g.y-u.y,E=x*T-_*M;if(g.x===u.x&&g.y===u.y){r.loc=n.ORIGIN,r.t=0;return}if(g.x===h.x&&g.y===h.y){r.loc=n.DESTINATION,r.t=1;return}if(E<-Number.EPSILON){r.loc=n.LEFT;return}if(E>Number.EPSILON){r.loc=n.RIGHT;return}if(x*_<0||M*T<0){r.loc=n.BEHIND;return}if(Math.sqrt(x*x+M*M)<Math.sqrt(_*_+T*T)){r.loc=n.BEYOND;return}let w;x!==0?w=_/x:w=T/M,r.loc=n.BETWEEN,r.t=w}function o(g,u){const h=[],x=[];for(let M=1;M<g.length;M++){const _=g[M-1],T=g[M];for(let E=1;E<u.length;E++){const w=u[E-1],A=u[E],y=s(_,T,w,A);y!==null&&h.find(S=>S.t<=y.t+Number.EPSILON&&S.t>=y.t-Number.EPSILON)===void 0&&(h.push(y),x.push(new St(y.x,y.y)))}}return x}function c(g,u,h){const x=new St;u.getCenter(x);const M=[];return h.forEach(_=>{_.boundingBox.containsPoint(x)&&o(g,_.points).forEach(E=>{M.push({identifier:_.identifier,isCW:_.isCW,point:E})})}),M.sort((_,T)=>_.point.x-T.point.x),M}function l(g,u,h,x,M){(M==null||M==="")&&(M="nonzero");const _=new St;g.boundingBox.getCenter(_);const T=[new St(h,_.y),new St(x,_.y)],E=c(T,g.boundingBox,u);E.sort((L,U)=>L.point.x-U.point.x);const w=[],A=[];E.forEach(L=>{L.identifier===g.identifier?w.push(L):A.push(L)});const y=w[0].point.x,S=[];let I=0;for(;I<A.length&&A[I].point.x<y;)S.length>0&&S[S.length-1]===A[I].identifier?S.pop():S.push(A[I].identifier),I++;if(S.push(g.identifier),M==="evenodd"){const L=S.length%2===0,U=S[S.length-2];return{identifier:g.identifier,isHole:L,for:U}}else if(M==="nonzero"){let L=!0,U=null,z=null;for(let j=0;j<S.length;j++){const X=S[j];L?(z=u[X].isCW,L=!1,U=X):z!==u[X].isCW&&(z=u[X].isCW,L=!0)}return{identifier:g.identifier,isHole:L,for:U}}else console.warn('fill-rule: "'+M+'" is currently not implemented.')}let p=999999999,f=-999999999,d=t.subPaths.map(g=>{const u=g.getPoints();let h=-999999999,x=999999999,M=-999999999,_=999999999;for(let T=0;T<u.length;T++){const E=u[T];E.y>h&&(h=E.y),E.y<x&&(x=E.y),E.x>M&&(M=E.x),E.x<_&&(_=E.x)}return f<=M&&(f=M+1),p>=_&&(p=_-1),{curves:g.curves,points:u,isCW:ii.isClockWise(u),identifier:-1,boundingBox:new sg(new St(_,x),new St(M,h))}});d=d.filter(g=>g.points.length>1);for(let g=0;g<d.length;g++)d[g].identifier=g;const m=d.map(g=>l(g,d,p,f,t.userData?t.userData.style.fillRule:void 0)),v=[];return d.forEach(g=>{if(!m[g.identifier].isHole){const h=new mr;h.curves=g.curves,m.filter(M=>M.isHole&&M.for===g.identifier).forEach(M=>{const _=d[M.identifier],T=new Hi;T.curves=_.curves,h.holes.push(T)}),v.push(h)}}),v}static getStrokeStyle(t,e,n,r,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(t,e,n,r){const s=[],a=[],o=[];if(vs.pointsToStrokeWithBuffers(t,e,n,r,s,a,o)===0)return null;const c=new Ee;return c.setAttribute("position",new se(s,3)),c.setAttribute("normal",new se(a,3)),c.setAttribute("uv",new se(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,r,s,a,o,c){const l=new St,p=new St,f=new St,d=new St,m=new St,v=new St,g=new St,u=new St,h=new St,x=new St,M=new St,_=new St,T=new St,E=new St,w=new St,A=new St,y=new St;n=n!==void 0?n:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,t=pt(t);const S=t.length;if(S<2)return 0;const I=t[0].equals(t[S-1]);let L,U=t[0],z;const j=e.strokeWidth/2,X=1/(S-1);let q=0,R,H,k,J,Q=!1,vt=0,N=c*3,D=c*2;C(t[0],t[1],l).multiplyScalar(j),u.copy(t[0]).sub(l),h.copy(t[0]).add(l),x.copy(u),M.copy(h);for(let F=1;F<S;F++){L=t[F],F===S-1?I?z=t[1]:z=void 0:z=t[F+1];const at=l;if(C(U,L,at),f.copy(at).multiplyScalar(j),_.copy(L).sub(f),T.copy(L).add(f),R=q+X,H=!1,z!==void 0){C(L,z,p),f.copy(p).multiplyScalar(j),E.copy(L).sub(f),w.copy(L).add(f),k=!0,f.subVectors(z,U),at.dot(f)<0&&(k=!1),F===1&&(Q=k),f.subVectors(z,L),f.normalize();const rt=Math.abs(at.dot(f));if(rt>Number.EPSILON){const st=j/rt;f.multiplyScalar(-st),d.subVectors(L,U),m.copy(d).setLength(st).add(f),A.copy(m).negate();const W=m.length(),G=d.length();d.divideScalar(G),v.subVectors(z,L);const dt=v.length();switch(v.divideScalar(dt),d.dot(A)<G&&v.dot(A)<dt&&(H=!0),y.copy(m).add(L),A.add(L),J=!1,H?k?(w.copy(A),T.copy(A)):(E.copy(A),_.copy(A)):it(),e.strokeLineJoin){case"bevel":Y(k,H,R);break;case"round":ct(k,H),k?Z(L,_,E,R,0):Z(L,w,T,R,1);break;case"miter":case"miter-clip":default:const B=j*e.strokeMiterLimit/W;if(B<1)if(e.strokeLineJoin!=="miter-clip"){Y(k,H,R);break}else ct(k,H),k?(v.subVectors(y,_).multiplyScalar(B).add(_),g.subVectors(y,E).multiplyScalar(B).add(E),b(_,R,0),b(v,R,0),b(L,R,.5),b(L,R,.5),b(v,R,0),b(g,R,0),b(L,R,.5),b(g,R,0),b(E,R,0)):(v.subVectors(y,T).multiplyScalar(B).add(T),g.subVectors(y,w).multiplyScalar(B).add(w),b(T,R,1),b(v,R,1),b(L,R,.5),b(L,R,.5),b(v,R,1),b(g,R,1),b(L,R,.5),b(g,R,1),b(w,R,1));else H?(k?(b(h,q,1),b(u,q,0),b(y,R,0),b(h,q,1),b(y,R,0),b(A,R,1)):(b(h,q,1),b(u,q,0),b(y,R,1),b(u,q,0),b(A,R,0),b(y,R,1)),k?E.copy(y):w.copy(y)):k?(b(_,R,0),b(y,R,0),b(L,R,.5),b(L,R,.5),b(y,R,0),b(E,R,0)):(b(T,R,1),b(y,R,1),b(L,R,.5),b(L,R,.5),b(y,R,1),b(w,R,1)),J=!0;break}}else it()}else it();!I&&F===S-1&&ut(t[0],x,M,k,!0,q),q=R,U=L,u.copy(E),h.copy(w)}if(!I)ut(L,_,T,k,!1,R);else if(H&&s){let F=y,at=A;Q!==k&&(F=A,at=y),k?(J||Q)&&(at.toArray(s,0*3),at.toArray(s,3*3),J&&F.toArray(s,1*3)):(J||!Q)&&(at.toArray(s,1*3),at.toArray(s,3*3),J&&F.toArray(s,0*3))}return vt;function C(F,at,rt){return rt.subVectors(at,F),rt.set(-rt.y,rt.x).normalize()}function b(F,at,rt){s&&(s[N]=F.x,s[N+1]=F.y,s[N+2]=0,a&&(a[N]=0,a[N+1]=0,a[N+2]=1),N+=3,o&&(o[D]=at,o[D+1]=rt,D+=2)),vt+=3}function Z(F,at,rt,st,W){l.copy(at).sub(F).normalize(),p.copy(rt).sub(F).normalize();let G=Math.PI;const dt=l.dot(p);Math.abs(dt)<1&&(G=Math.abs(Math.acos(dt))),G/=n,f.copy(at);for(let B=0,P=n-1;B<P;B++)d.copy(f).rotateAround(F,G),b(f,st,W),b(d,st,W),b(F,st,.5),f.copy(d);b(d,st,W),b(rt,st,W),b(F,st,.5)}function it(){b(h,q,1),b(u,q,0),b(_,R,0),b(h,q,1),b(_,R,0),b(T,R,1)}function Y(F,at,rt){at?F?(b(h,q,1),b(u,q,0),b(_,R,0),b(h,q,1),b(_,R,0),b(A,R,1),b(_,rt,0),b(E,rt,0),b(A,rt,.5)):(b(h,q,1),b(u,q,0),b(T,R,1),b(u,q,0),b(A,R,0),b(T,R,1),b(T,rt,1),b(A,rt,0),b(w,rt,1)):F?(b(_,rt,0),b(E,rt,0),b(L,rt,.5)):(b(T,rt,1),b(w,rt,0),b(L,rt,.5))}function ct(F,at){at&&(F?(b(h,q,1),b(u,q,0),b(_,R,0),b(h,q,1),b(_,R,0),b(A,R,1),b(_,q,0),b(L,R,.5),b(A,R,1),b(L,R,.5),b(E,q,0),b(A,R,1)):(b(h,q,1),b(u,q,0),b(T,R,1),b(u,q,0),b(A,R,0),b(T,R,1),b(T,q,1),b(A,R,0),b(L,R,.5),b(L,R,.5),b(A,R,0),b(w,q,1)))}function ut(F,at,rt,st,W,G){switch(e.strokeLineCap){case"round":W?Z(F,rt,at,G,.5):Z(F,at,rt,G,.5);break;case"square":if(W)l.subVectors(at,F),p.set(l.y,-l.x),f.addVectors(l,p).add(F),d.subVectors(p,l).add(F),st?(f.toArray(s,1*3),d.toArray(s,0*3),d.toArray(s,3*3)):(f.toArray(s,1*3),o[3*2+1]===1?d.toArray(s,3*3):f.toArray(s,3*3),d.toArray(s,0*3));else{l.subVectors(rt,F),p.set(l.y,-l.x),f.addVectors(l,p).add(F),d.subVectors(p,l).add(F);const dt=s.length;st?(f.toArray(s,dt-1*3),d.toArray(s,dt-2*3),d.toArray(s,dt-4*3)):(d.toArray(s,dt-2*3),f.toArray(s,dt-1*3),d.toArray(s,dt-4*3))}break}}function pt(F){let at=!1;for(let st=1,W=F.length-1;st<W;st++)if(F[st].distanceTo(F[st+1])<r){at=!0;break}if(!at)return F;const rt=[];rt.push(F[0]);for(let st=1,W=F.length-1;st<W;st++)F[st].distanceTo(F[st+1])>=r&&rt.push(F[st]);return rt.push(F[F.length-1]),rt}}}class Hc extends In{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new As(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const c=s.parse(JSON.parse(o));e&&e(c)},n,r)}parse(t){return new Cg(t)}}class Cg{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=Pg(t,e,this.data);for(let s=0,a=r.length;s<a;s++)n.push(...r[s].toShapes());return n}}function Pg(i,t,e){const n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,a=[];let o=0,c=0;for(let l=0;l<n.length;l++){const p=n[l];if(p===`
`)o=0,c-=s;else{const f=Lg(p,r,o,c,e);o+=f.offsetX,a.push(f.path)}}return a}function Lg(i,t,e,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const a=new Rn;let o,c,l,p,f,d,m,v;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let u=0,h=g.length;u<h;)switch(g[u++]){case"m":o=g[u++]*t+e,c=g[u++]*t+n,a.moveTo(o,c);break;case"l":o=g[u++]*t+e,c=g[u++]*t+n,a.lineTo(o,c);break;case"q":l=g[u++]*t+e,p=g[u++]*t+n,f=g[u++]*t+e,d=g[u++]*t+n,a.quadraticCurveTo(f,d,l,p);break;case"b":l=g[u++]*t+e,p=g[u++]*t+n,f=g[u++]*t+e,d=g[u++]*t+n,m=g[u++]*t+e,v=g[u++]*t+n,a.bezierCurveTo(f,d,m,v,l,p);break}}return{offsetX:s.ha*t,path:a}}function Yn(i,t,e){const n=new ke;return new Hc().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(s){const a=new Ht(e),o=new Ze({color:a,side:pe}),c=new Ze({color:a,transparent:!0,opacity:.5,side:pe}),l=s.generateShapes(i,t),p=new Ts(l);p.computeBoundingBox();const f=-.5*(p.boundingBox.max.x-p.boundingBox.min.x);p.translate(f,0,0),p.scale(.1,.1,.1);const d=new he(p,c),m=[];for(let u=0;u<l.length;u++){const h=l[u];if(h.holes&&h.holes.length>0)for(let x=0;x<h.holes.length;x++){const M=h.holes[x];m.push(M)}}l.push.apply(l,m);const v=vs.getStrokeStyle(.2,a.getStyle()),g=new ke;for(let u=0;u<l.length;u++){const x=l[u].getPoints(),M=vs.pointsToStroke(x,v);M.translate(f,0,0);const _=new he(M,o);g.add(_)}g.scale.set(.1,.1,.1),n.add(d)}),n.animate=()=>{},n}function Dg(i,t,e,n){const r=new ke,s=[];for(let a=0;a<=n;a++)s.push(Ig());for(let a=0;a<e;a++){const o=new xr({color:s[Math.floor(Math.random()*n)]}),c=new Jl(i,t),l=new Jl(i,t),p=[c,l],f=new Ee().setFromPoints(p),d=new mo(f,o);r.add(d)}return r.animate=()=>{},r}function Ig(){const i=Math.floor(Math.random()*255)+1,t=Math.floor(Math.random()*255)+1,e=Math.floor(Math.random()*255)+1;return new Ht(i/255,t/255,e/255)}function Jl(i,t){const e=Math.floor(Math.random()*(i-t+1)+t),n=Math.floor(Math.random()*(i-t+1)+t),r=Math.floor(Math.random()*(i-t+1)+t);return new V(r,e,n)}var nt={};(function(){var i=function(){function r(s){this.message="JPEG error: "+s}return r.prototype=new Error,r.prototype.name="JpegError",r.constructor=r,r}(),t=function(){var r=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),s=4017,a=799,o=3406,c=2276,l=1567,p=3784,f=5793,d=2896;function m(_){_==null&&(_={}),_.w==null&&(_.w=-1),this.V=_.n,this.N=_.w}function v(_,T){for(var E=0,w=[],A,y,S=16,I;S>0&&!_[S-1];)S--;w.push({children:[],index:0});var L=w[0];for(A=0;A<S;A++){for(y=0;y<_[A];y++){for(L=w.pop(),L.children[L.index]=T[E];L.index>0;)L=w.pop();for(L.index++,w.push(L);w.length<=A;)w.push(I={children:[],index:0}),L.children[L.index]=I.children,L=I;E++}A+1<S&&(w.push(I={children:[],index:0}),L.children[L.index]=I.children,L=I)}return w[0].children}function g(_,T,E){return 64*((_.P+1)*T+E)}function u(_,T,E,w,A,y,S,I,L,U){U==null&&(U=!1);var z=E.m,j=E.Z,X=T,q=0,R=0,H=0,k=0,J,Q=0,vt,N,D,C,b,Z,it=0,Y,ct,ut,pt;function F(){if(R>0)return R--,q>>R&1;if(q=_[T++],q===255){var xt=_[T++];if(xt){if(xt===220&&U){T+=2;var Mt=e(_,T);if(T+=2,Mt>0&&Mt!==E.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",Mt)}else if(xt===217){if(U){var Et=Q*8;if(Et>0&&Et<E.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",Et)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return R=7,q>>>7}function at(xt){for(var Mt=xt;;){switch(Mt=Mt[F()],typeof Mt){case"number":return Mt;case"object":continue}throw new i("invalid huffman sequence")}}function rt(xt){for(var Mt=0;xt>0;)Mt=Mt<<1|F(),xt--;return Mt}function st(xt){if(xt===1)return F()===1?1:-1;var Mt=rt(xt);return Mt>=1<<xt-1?Mt:Mt+(-1<<xt)+1}function W(xt,Mt){var Et=at(xt.J),Ot=Et===0?0:st(Et),_t=1;for(xt.D[Mt]=xt.Q+=Ot;_t<64;){var wt=at(xt.i),Lt=wt&15,Tt=wt>>4;if(Lt===0){if(Tt<15)break;_t+=16;continue}_t+=Tt;var At=r[_t];xt.D[Mt+At]=st(Lt),_t++}}function G(xt,Mt){var Et=at(xt.J),Ot=Et===0?0:st(Et)<<L;xt.D[Mt]=xt.Q+=Ot}function dt(xt,Mt){xt.D[Mt]|=F()<<L}function B(xt,Mt){if(H>0){H--;return}for(var Et=y,Ot=S;Et<=Ot;){var _t=at(xt.i),wt=_t&15,Lt=_t>>4;if(wt===0){if(Lt<15){H=rt(Lt)+(1<<Lt)-1;break}Et+=16;continue}Et+=Lt;var Tt=r[Et];xt.D[Mt+Tt]=st(wt)*(1<<L),Et++}}function P(xt,Mt){for(var Et=y,Ot=S,_t=0,wt,Lt;Et<=Ot;){var Tt=Mt+r[Et],At=xt.D[Tt]<0?-1:1;switch(k){case 0:if(Lt=at(xt.i),wt=Lt&15,_t=Lt>>4,wt===0)_t<15?(H=rt(_t)+(1<<_t),k=4):(_t=16,k=1);else{if(wt!==1)throw new i("invalid ACn encoding");J=st(wt),k=_t?2:3}continue;case 1:case 2:xt.D[Tt]?xt.D[Tt]+=At*(F()<<L):(_t--,_t===0&&(k=k===2?3:0));break;case 3:xt.D[Tt]?xt.D[Tt]+=At*(F()<<L):(xt.D[Tt]=J<<L,k=0);break;case 4:xt.D[Tt]&&(xt.D[Tt]+=At*(F()<<L));break}Et++}k===4&&(H--,H===0&&(k=0))}function K(xt,Mt,Et,Ot,_t){var wt=Et/z|0,Lt=Et%z;Q=wt*xt.A+Ot;var Tt=Lt*xt.h+_t,At=g(xt,Q,Tt);Mt(xt,At)}function ht(xt,Mt,Et){Q=Et/xt.P|0;var Ot=Et%xt.P,_t=g(xt,Q,Ot);Mt(xt,_t)}var gt=w.length;for(j?y===0?Z=I===0?G:dt:Z=I===0?B:P:Z=W,gt===1?ct=w[0].P*w[0].c:ct=z*E.R;it<=ct;){var mt=A?Math.min(ct-it,A):ct;if(mt>0){for(N=0;N<gt;N++)w[N].Q=0;if(H=0,gt===1)for(vt=w[0],b=0;b<mt;b++)ht(vt,Z,it),it++;else for(b=0;b<mt;b++){for(N=0;N<gt;N++)for(vt=w[N],ut=vt.h,pt=vt.A,D=0;D<pt;D++)for(C=0;C<ut;C++)K(vt,Z,it,D,C);it++}}if(R=0,Y=M(_,T),!Y)break;if(Y.u&&(T=Y.offset),Y.M>=65488&&Y.M<=65495)T+=2;else break}return T-X}function h(_,T,E){var w=_.$,A=_.D,y,S,I,L,U,z,j,X,q,R,H,k,J,Q,vt,N,D;if(!w)throw new i("missing required Quantization Table.");for(var C=0;C<64;C+=8){if(q=A[T+C],R=A[T+C+1],H=A[T+C+2],k=A[T+C+3],J=A[T+C+4],Q=A[T+C+5],vt=A[T+C+6],N=A[T+C+7],q*=w[C],!(R|H|k|J|Q|vt|N)){D=f*q+512>>10,E[C]=D,E[C+1]=D,E[C+2]=D,E[C+3]=D,E[C+4]=D,E[C+5]=D,E[C+6]=D,E[C+7]=D;continue}R*=w[C+1],H*=w[C+2],k*=w[C+3],J*=w[C+4],Q*=w[C+5],vt*=w[C+6],N*=w[C+7],y=f*q+128>>8,S=f*J+128>>8,I=H,L=vt,U=d*(R-N)+128>>8,X=d*(R+N)+128>>8,z=k<<4,j=Q<<4,y=y+S+1>>1,S=y-S,D=I*p+L*l+128>>8,I=I*l-L*p+128>>8,L=D,U=U+j+1>>1,j=U-j,X=X+z+1>>1,z=X-z,y=y+L+1>>1,L=y-L,S=S+I+1>>1,I=S-I,D=U*c+X*o+2048>>12,U=U*o-X*c+2048>>12,X=D,D=z*a+j*s+2048>>12,z=z*s-j*a+2048>>12,j=D,E[C]=y+X,E[C+7]=y-X,E[C+1]=S+j,E[C+6]=S-j,E[C+2]=I+z,E[C+5]=I-z,E[C+3]=L+U,E[C+4]=L-U}for(var b=0;b<8;++b){if(q=E[b],R=E[b+8],H=E[b+16],k=E[b+24],J=E[b+32],Q=E[b+40],vt=E[b+48],N=E[b+56],!(R|H|k|J|Q|vt|N)){D=f*q+8192>>14,D<-2040?D=0:D>=2024?D=255:D=D+2056>>4,A[T+b]=D,A[T+b+8]=D,A[T+b+16]=D,A[T+b+24]=D,A[T+b+32]=D,A[T+b+40]=D,A[T+b+48]=D,A[T+b+56]=D;continue}y=f*q+2048>>12,S=f*J+2048>>12,I=H,L=vt,U=d*(R-N)+2048>>12,X=d*(R+N)+2048>>12,z=k,j=Q,y=(y+S+1>>1)+4112,S=y-S,D=I*p+L*l+2048>>12,I=I*l-L*p+2048>>12,L=D,U=U+j+1>>1,j=U-j,X=X+z+1>>1,z=X-z,y=y+L+1>>1,L=y-L,S=S+I+1>>1,I=S-I,D=U*c+X*o+2048>>12,U=U*o-X*c+2048>>12,X=D,D=z*a+j*s+2048>>12,z=z*s-j*a+2048>>12,j=D,q=y+X,N=y-X,R=S+j,vt=S-j,H=I+z,Q=I-z,k=L+U,J=L-U,q<16?q=0:q>=4080?q=255:q>>=4,R<16?R=0:R>=4080?R=255:R>>=4,H<16?H=0:H>=4080?H=255:H>>=4,k<16?k=0:k>=4080?k=255:k>>=4,J<16?J=0:J>=4080?J=255:J>>=4,Q<16?Q=0:Q>=4080?Q=255:Q>>=4,vt<16?vt=0:vt>=4080?vt=255:vt>>=4,N<16?N=0:N>=4080?N=255:N>>=4,A[T+b]=q,A[T+b+8]=R,A[T+b+16]=H,A[T+b+24]=k,A[T+b+32]=J,A[T+b+40]=Q,A[T+b+48]=vt,A[T+b+56]=N}}function x(_,T){for(var E=T.P,w=T.c,A=new Int16Array(64),y=0;y<w;y++)for(var S=0;S<E;S++){var I=g(T,y,S);h(T,I,A)}return T.D}function M(_,T,E){E==null&&(E=T);var w=_.length-1,A=E<T?E:T;if(T>=w)return null;var y=e(_,T);if(y>=65472&&y<=65534)return{u:null,M:y,offset:T};for(var S=e(_,A);!(S>=65472&&S<=65534);){if(++A>=w)return null;S=e(_,A)}return{u:y.toString(16),M:S,offset:A}}return m.prototype={parse(_,T){T==null&&(T={});var E=T.F,w=0,A=null,y=null,S,I,L=0;function U(){var Tt=e(_,w);w+=2;var At=w+Tt-2,Vt=M(_,At,w);Vt&&Vt.u&&(At=Vt.offset);var zt=_.subarray(w,At);return w+=zt.length,zt}function z(Tt){for(var At=Math.ceil(Tt.o/8/Tt.X),Vt=Math.ceil(Tt.s/8/Tt.B),zt=0;zt<Tt.W.length;zt++){P=Tt.W[zt];var Jt=Math.ceil(Math.ceil(Tt.o/8)*P.h/Tt.X),$=Math.ceil(Math.ceil(Tt.s/8)*P.A/Tt.B),Pt=At*P.h,ft=Vt*P.A,yt=64*ft*(Pt+1);P.D=new Int16Array(yt),P.P=Jt,P.c=$}Tt.m=At,Tt.R=Vt}var j=[],X=[],q=[],R=e(_,w);if(w+=2,R!==65496)throw new i("SOI not found");R=e(_,w),w+=2;t:for(;R!==65497;){var H,k,J;switch(R){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var Q=U();R===65504&&Q[0]===74&&Q[1]===70&&Q[2]===73&&Q[3]===70&&Q[4]===0&&(A={version:{d:Q[5],T:Q[6]},K:Q[7],j:Q[8]<<8|Q[9],H:Q[10]<<8|Q[11],S:Q[12],I:Q[13],C:Q.subarray(14,14+3*Q[12]*Q[13])}),R===65518&&Q[0]===65&&Q[1]===100&&Q[2]===111&&Q[3]===98&&Q[4]===101&&(y={version:Q[5]<<8|Q[6],k:Q[7]<<8|Q[8],q:Q[9]<<8|Q[10],a:Q[11]});break;case 65499:var vt=e(_,w),N;w+=2;for(var D=vt+w-2;w<D;){var C=_[w++],b=new Uint16Array(64);if(C>>4)if(C>>4===1)for(k=0;k<64;k++)N=r[k],b[N]=e(_,w),w+=2;else throw new i("DQT - invalid table spec");else for(k=0;k<64;k++)N=r[k],b[N]=_[w++];j[C&15]=b}break;case 65472:case 65473:case 65474:if(S)throw new i("Only single frame JPEGs supported");w+=2,S={},S.G=R===65473,S.Z=R===65474,S.precision=_[w++];var Z=e(_,w),it,Y=0,ct=0;w+=2,S.s=E||Z,S.o=e(_,w),w+=2,S.W=[],S._={};var ut=_[w++];for(H=0;H<ut;H++){it=_[w];var pt=_[w+1]>>4,F=_[w+1]&15;Y<pt&&(Y=pt),ct<F&&(ct=F);var at=_[w+2];J=S.W.push({h:pt,A:F,L:at,$:null}),S._[it]=J-1,w+=3}S.X=Y,S.B=ct,z(S);break;case 65476:var rt=e(_,w);for(w+=2,H=2;H<rt;){var st=_[w++],W=new Uint8Array(16),G=0;for(k=0;k<16;k++,w++)G+=W[k]=_[w];var dt=new Uint8Array(G);for(k=0;k<G;k++,w++)dt[k]=_[w];H+=17+G,(st>>4?X:q)[st&15]=v(W,dt)}break;case 65501:w+=2,I=e(_,w),w+=2;break;case 65498:var B=++L===1&&!E,P;w+=2;var K=_[w++],ht=[];for(H=0;H<K;H++){var gt=_[w++],mt=S._[gt];P=S.W[mt],P.index=gt;var xt=_[w++];P.J=q[xt>>4],P.i=X[xt&15],ht.push(P)}var Mt=_[w++],Et=_[w++],Ot=_[w++];try{var _t=u(_,w,S,ht,I,Mt,Et,Ot>>4,Ot&15,B);w+=_t}catch(Tt){if(Tt instanceof DNLMarkerError)return this.parse(_,{F:Tt.s});if(Tt instanceof EOIMarkerError)break t;throw Tt}break;case 65500:w+=4;break;case 65535:_[w]!==255&&w--;break;default:var wt=M(_,w-2,w-3);if(wt&&wt.u){w=wt.offset;break}if(w>=_.length-1)break t;throw new i("JpegImage.parse - unknown marker: "+R.toString(16))}R=e(_,w),w+=2}for(this.width=S.o,this.height=S.s,this.g=A,this.b=y,this.W=[],H=0;H<S.W.length;H++){P=S.W[H];var Lt=j[P.L];Lt&&(P.$=Lt),this.W.push({index:P.index,e:x(S,P),l:P.h/S.X,t:P.A/S.B,P:P.P,c:P.c})}this.p=this.W.length},Y(_,T,E){E==null&&(E=!1);var w=this.width/_,A=this.height/T,y,S,I,L,U,z,j,X,q,R,H=0,k,J=this.W.length,Q=_*T*J,vt=new Uint8ClampedArray(Q),N=new Uint32Array(_),D=4294967288,C;for(j=0;j<J;j++){if(y=this.W[j],S=y.l*w,I=y.t*A,H=j,k=y.e,L=y.P+1<<3,S!==C){for(U=0;U<_;U++)X=0|U*S,N[U]=(X&D)<<3|X&7;C=S}for(z=0;z<T;z++)for(X=0|z*I,R=L*(X&D)|(X&7)<<3,U=0;U<_;U++)vt[H]=k[R+N[U]],H+=J}var b=this.V;if(!E&&J===4&&!b&&(b=new Int32Array([-256,255,-256,255,-256,255,-256,255])),b)for(j=0;j<Q;)for(X=0,q=0;X<J;X++,j++,q+=2)vt[j]=(vt[j]*b[q]>>8)+b[q+1];return vt},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(T){for(var E,w,A,y=0,S=T.length;y<S;y+=3)E=T[y],w=T[y+1],A=T[y+2],T[y]=E-179.456+1.402*A,T[y+1]=E+135.459-.344*w-.714*A,T[y+2]=E-226.816+1.772*w;return T},O:function(T){for(var E,w,A,y,S=0,I=0,L=T.length;I<L;I+=4)E=T[I],w=T[I+1],A=T[I+2],y=T[I+3],T[S++]=-122.67195406894+w*(-660635669420364e-19*w+.000437130475926232*A-54080610064599e-18*E+.00048449797120281*y-.154362151871126)+A*(-.000957964378445773*A+.000817076911346625*E-.00477271405408747*y+1.53380253221734)+E*(.000961250184130688*E-.00266257332283933*y+.48357088451265)+y*(-.000336197177618394*y+.484791561490776),T[S++]=107.268039397724+w*(219927104525741e-19*w-.000640992018297945*A+.000659397001245577*E+.000426105652938837*y-.176491792462875)+A*(-.000778269941513683*A+.00130872261408275*E+.000770482631801132*y-.151051492775562)+E*(.00126935368114843*E-.00265090189010898*y+.25802910206845)+y*(-.000318913117588328*y-.213742400323665),T[S++]=-20.810012546947+w*(-.000570115196973677*w-263409051004589e-19*A+.0020741088115012*E-.00288260236853442*y+.814272968359295)+A*(-153496057440975e-19*A-.000132689043961446*E+.000560833691242812*y-.195152027534049)+E*(.00174418132927582*E-.00255243321439347*y+.116935020465145)+y*(-.000343531996510555*y+.24165260232407);return T.subarray(0,S)},r:function(T){for(var E,w,A,y=0,S=T.length;y<S;y+=4)E=T[y],w=T[y+1],A=T[y+2],T[y]=434.456-E-1.402*A,T[y+1]=119.541-E+.344*w+.714*A,T[y+2]=481.816-E-1.772*w;return T},U:function(T){for(var E,w,A,y,S=0,I=0,L=T.length;I<L;I+=4)E=T[I],w=T[I+1],A=T[I+2],y=T[I+3],T[S++]=255+E*(-6747147073602441e-20*E+.0008379262121013727*w+.0002894718188643294*A+.003264231057537806*y-1.1185611867203937)+w*(26374107616089405e-21*w-8626949158638572e-20*A-.0002748769067499491*y-.02155688794978967)+A*(-3878099212869363e-20*A-.0003267808279485286*y+.0686742238595345)-y*(.0003361971776183937*y+.7430659151342254),T[S++]=255+E*(.00013596372813588848*E+.000924537132573585*w+.00010567359618683593*A+.0004791864687436512*y-.3109689587515875)+w*(-.00023545346108370344*w+.0002702845253534714*A+.0020200308977307156*y-.7488052167015494)+A*(6834815998235662e-20*A+.00015168452363460973*y-.09751927774728933)-y*(.0003189131175883281*y+.7364883807733168),T[S++]=255+E*(13598650411385307e-21*E+.00012423956175490851*w+.0004751985097583589*A-36729317476630422e-22*y-.05562186980264034)+w*(.00016141380598724676*w+.0009692239130725186*A+.0007782692450036253*y-.44015232367526463)+A*(5068882914068769e-22*A+.0017778369011375071*y-.7591454649749609)-y*(.0003435319965105553*y+.7063770186160144);return T.subarray(0,S)},getData:function(_){var T=_.width,E=_.height,w=_.forceRGB,A=_.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var y=this.Y(T,E,A);if(this.p===1&&w){for(var S=y.length,I=new Uint8ClampedArray(S*3),L=0,U=0;U<S;U++){var z=y[U];I[L++]=z,I[L++]=z,I[L++]=z}return I}else{if(this.p===3&&this.f)return this.z(y);if(this.p===4){if(this.f)return w?this.O(y):this.r(y);if(w)return this.U(y)}}return y}},m}();function e(n,r){return n[r]<<8|n[r+1]}nt.JpegDecoder=t})();nt.encodeImage=function(i,t,e,n){var r={t256:[t],t257:[e],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[e],t279:[t*e*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var s in n)r[s]=n[s];for(var a=new Uint8Array(nt.encode([r])),o=new Uint8Array(i),c=new Uint8Array(1e3+t*e*4),s=0;s<a.length;s++)c[s]=a[s];for(var s=0;s<o.length;s++)c[1e3+s]=o[s];return c.buffer};nt.encode=function(i){var t=new Uint8Array(2e4),e=4,n=nt._binBE;t[0]=t[1]=77,n.writeUshort(t,2,42);var r=8;n.writeUint(t,e,r),e+=4;for(var s=0;s<i.length;s++){var a=nt._writeIFD(n,nt._types.basic,t,r,i[s]);r=a[1],s<i.length-1&&(r&3&&(r+=4-(r&3)),n.writeUint(t,a[0],r))}return t.slice(0,r).buffer};nt.decode=function(i,t){t==null&&(t={parseMN:!0,debug:!1});var e=new Uint8Array(i),n=0,r=nt._binBE.readASCII(e,n,2);n+=2;var s=r=="II"?nt._binLE:nt._binBE;s.readUshort(e,n),n+=2;var a=s.readUint(e,n);n+=4;for(var o=[];;){var c=s.readUshort(e,a),l=s.readUshort(e,a+4);if(c!=0&&(l<1||13<l)){log("error in TIFF");break}if(nt._readIFD(s,e,a,o,0,t),a=s.readUint(e,a+2+c*12),a==0)break}return o};nt.decodeImage=function(i,t,e){if(!t.data){var n=new Uint8Array(i),r=nt._binBE.readASCII(n,0,2);if(t.t256!=null){t.isLE=r=="II",t.width=t.t256[0],t.height=t.t257[0];var s=t.t259?t.t259[0]:1,a=t.t266?t.t266[0]:1;t.t284&&t.t284[0]==2&&log("PlanarConfiguration 2 should not be used!"),s==7&&t.t258&&t.t258.length>3&&(t.t258=t.t258.slice(0,3));var o=t.t277?t.t277[0]:1,c=t.t258?t.t258[0]:1,l=c*o;s==1&&t.t279!=null&&t.t278&&t.t262[0]==32803&&(l=Math.round(t.t279[0]*8/(t.width*t.t278[0]))),t.t50885&&t.t50885[0]==4&&(l=t.t258[0]*3);var p=Math.ceil(t.width*l/8)*8,f=t.t273;(f==null||t.t322)&&(f=t.t324);var d=t.t279;s==1&&f.length==1&&(d=[t.height*(p>>>3)]),(d==null||t.t322)&&(d=t.t325);var m=new Uint8Array(t.height*(p>>>3)),v=0;if(t.t322!=null){var g=t.t322[0],u=t.t323[0],h=Math.floor((t.width+g-1)/g),x=Math.floor((t.height+u-1)/u),M=new Uint8Array(Math.ceil(g*u*l/8)|0);console.log("====",h,x);for(var _=0;_<x;_++)for(var T=0;T<h;T++){var E=_*h+T;M.fill(0),nt.decode._decompress(t,e,n,f[E],d[E],s,M,0,a,g,u),s==6?m=M:nt._copyTile(M,Math.ceil(g*l/8)|0,u,m,Math.ceil(t.width*l/8)|0,t.height,Math.ceil(T*g*l/8)|0,_*u)}v=m.length*8}else{if(f==null)return;var w=t.t278?t.t278[0]:t.height;w=Math.min(w,t.height);for(var E=0;E<f.length;E++)nt.decode._decompress(t,e,n,f[E],d[E],s,m,Math.ceil(v/8)|0,a,t.width,w),v+=p*w;v=Math.min(v,m.length*8)}t.data=new Uint8Array(m.buffer,0,Math.ceil(v/8)|0)}}};nt.decode._decompress=function(i,t,e,n,r,s,a,o,c,l,p){if(i.t271&&i.t271[0]=="Panasonic"&&i.t45&&i.t45[0]==6&&(s=34316),s==1)for(var f=0;f<r;f++)a[o+f]=e[n+f];else if(s==2)nt.decode._decodeG2(e,n,r,a,o,l,c);else if(s==3)nt.decode._decodeG3(e,n,r,a,o,l,c,i.t292?(i.t292[0]&1)==1:!1);else if(s==4)nt.decode._decodeG4(e,n,r,a,o,l,c);else if(s==5)nt.decode._decodeLZW(e,n,r,a,o,8);else if(s==6)nt.decode._decodeOldJPEG(i,e,n,r,a,o);else if(s==7||s==34892)nt.decode._decodeNewJPEG(i,e,n,r,a,o);else if(s==8||s==32946){var d=new Uint8Array(e.buffer,n+2,r-6),m=nt._inflateRaw(d);o+m.length<=a.length&&a.set(m,o)}else s==9?nt.decode._decodeVC5(e,n,r,a,o,i.t33422):s==32767?nt.decode._decodeARW(i,e,n,r,a,o):s==32773?nt.decode._decodePackBits(e,n,r,a,o):s==32809?nt.decode._decodeThunder(e,n,r,a,o):s==34316?nt.decode._decodePanasonic(i,e,n,r,a,o):s==34713?nt.decode._decodeNikon(i,t,e,n,r,a,o):s==34676?nt.decode._decodeLogLuv32(i,e,n,r,a,o):log("Unknown compression",s);var v=i.t258?Math.min(32,i.t258[0]):1,g=i.t277?i.t277[0]:1,u=v*g>>>3,h=Math.ceil(v*g*l/8);if(v==16&&!i.isLE&&i.t33422==null)for(var x=0;x<p;x++)for(var M=o+x*h,_=1;_<h;_+=2){var T=a[M+_];a[M+_]=a[M+_-1],a[M+_-1]=T}if(i.t317&&i.t317[0]==2)for(var x=0;x<p;x++){var E=o+x*h;if(v==16)for(var f=u;f<h;f+=2){var w=(a[E+f+1]<<8|a[E+f])+(a[E+f-u+1]<<8|a[E+f-u]);a[E+f]=w&255,a[E+f+1]=w>>>8&255}else if(g==3)for(var f=3;f<h;f+=3)a[E+f]=a[E+f]+a[E+f-3]&255,a[E+f+1]=a[E+f+1]+a[E+f-2]&255,a[E+f+2]=a[E+f+2]+a[E+f-1]&255;else for(var f=u;f<h;f++)a[E+f]=a[E+f]+a[E+f-u]&255}};nt.decode._decodePanasonic=function(i,t,e,n,r,s){var a=t.buffer,o=i.t2[0],c=i.t3[0],l=i.t10[0],p=i.t45[0],f=0,d=0,m=0,v=0,g=p==6?new Uint32Array(18):new Uint8Array(16),u,h,x,M=[0,0],_=[0,0],T,E=0,w,A,y,S,I=new Uint8Array(16384),L=new Uint16Array(r.buffer);function U(F){if(m==0){var at=new Uint8Array(a,e+d+8184,8200),rt=new Uint8Array(a,e+d,8184);I.set(at),I.set(rt,at.length),d+=16384}if(p==5)for(u=0;u<16;u++)g[u]=I[m++],m&=16383;else return m=m-F&131071,v=m>>3^16368,(I[v]|I[v+1]<<8)>>(m&7)&~(-1<<F)}function z(F){return I[m+15-F]}function j(){g[0]=z(0)<<6|z(1)>>2,g[1]=((z(1)&3)<<12|z(2)<<4|z(3)>>4)&16383,g[2]=z(3)>>2&3,g[3]=(z(3)&3)<<8|z(4),g[4]=z(5)<<2|z(6)>>6,g[5]=(z(6)&63)<<4|z(7)>>4,g[6]=z(7)>>2&3,g[7]=(z(7)&3)<<8|z(8),g[8]=z(9)<<2&1020|z(10)>>6,g[9]=(z(10)<<4|z(11)>>4)&1023,g[10]=z(11)>>2&3,g[11]=(z(11)&3)<<8|z(12),g[12]=(z(13)<<2&1020|z(14)>>6)&1023,g[13]=(z(14)<<4|z(15)>>4)&1023,m+=16,v=0}function X(){g[0]=z(0)<<4|z(1)>>4,g[1]=((z(1)&15)<<8|z(2))&4095,g[2]=z(3)>>6&3,g[3]=(z(3)&63)<<2|z(4)>>6,g[4]=(z(4)&63)<<2|z(5)>>6,g[5]=(z(5)&63)<<2|z(6)>>6,g[6]=z(6)>>4&3,g[7]=(z(6)&15)<<4|z(7)>>4,g[8]=(z(7)&15)<<4|z(8)>>4,g[9]=(z(8)&15)<<4|z(9)>>4,g[10]=z(9)>>2&3,g[11]=(z(9)&3)<<6|z(10)>>2,g[12]=(z(10)&3)<<6|z(11)>>2,g[13]=(z(11)&3)<<6|z(12)>>2,g[14]=z(12)&3,g[15]=z(13),g[16]=z(14),g[17]=z(15),m+=16,v=0}function q(){M[0]=0,M[1]=0,_[0]=0,_[1]=0}if(p==7)throw p;if(p==6){var R=l==12,H=R?X:j,k=R?14:11,J=R?128:512,Q=R?2048:8192,vt=R?16383:65535,N=R?4095:16383,D=o/k,C=D*16,b=R?18:14;for(A=0;A<c-15;A+=16){var Z=Math.min(16,c-A),it=C*Z;for(I=new Uint8Array(a,e+f,it),m=0,f+=it,S=0,y=0;S<Z;S++,y=0){E=(A+S)*o;for(var Y=0;Y<D;Y++)for(H(),q(),x=0,w=0,u=0;u<k;u++){if(T=u&1,u%3==2){var ct=v<b?g[v++]:0;ct==3&&(ct=4),w=J<<ct,x=1<<ct}var ut=v<b?g[v++]:0;M[T]?(ut*=x,w<Q&&_[T]>w&&(ut+=_[T]-w),_[T]=ut):(M[T]=ut,ut?_[T]=ut:ut=_[T]),L[E+y++]=ut-15<=vt?ut-15&vt:ut+2147483633>>31&N}}}}else if(p==5){var pt=l==12?10:9;for(A=0;A<c;A++)for(y=0;y<o;y+=pt)U(0),l==12?(L[E++]=((g[1]&15)<<8)+g[0],L[E++]=16*g[2]+(g[1]>>4),L[E++]=((g[4]&15)<<8)+g[3],L[E++]=16*g[5]+(g[4]>>4),L[E++]=((g[7]&15)<<8)+g[6],L[E++]=16*g[8]+(g[7]>>4),L[E++]=((g[10]&15)<<8)+g[9],L[E++]=16*g[11]+(g[10]>>4),L[E++]=((g[13]&15)<<8)+g[12],L[E++]=16*g[14]+(g[13]>>4)):l==14&&(L[E++]=g[0]+((g[1]&63)<<8),L[E++]=(g[1]>>6)+4*g[2]+((g[3]&15)<<10),L[E++]=(g[3]>>4)+16*g[4]+((g[5]&3)<<12),L[E++]=((g[5]&252)>>2)+(g[6]<<6),L[E++]=g[7]+((g[8]&63)<<8),L[E++]=(g[8]>>6)+4*g[9]+((g[10]&15)<<10),L[E++]=(g[10]>>4)+16*g[11]+((g[12]&3)<<12),L[E++]=((g[12]&252)>>2)+(g[13]<<6),L[E++]=g[14]+((g[15]&63)<<8))}else if(p==4)for(A=0;A<c;A++)for(y=0;y<o;y++)u=y%14,T=u&1,u==0&&q(),u%3==2&&(x=4>>3-U(2)),_[T]?(h=U(8),h!=0&&(M[T]-=128<<x,(M[T]<0||x==4)&&(M[T]&=~(-1<<x)),M[T]+=h<<x)):(_[T]=U(8),(_[T]||u>11)&&(M[T]=_[T]<<4|U(4))),L[E++]=M[y&1];else throw p};nt.decode._decodeVC5=function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],t,e,n,r=[3,3,3,3,2,2,2,1,1,1],s=24576,a=16384,o=8192,c=a|o;function l(x){var M=x[1],_=x[0][M>>>3]>>>7-(M&7)&1;return x[1]++,_}function p(x,M){if(t==null){t={};for(var _=0;_<i.length;_+=4)t[i[_+1]]=i.slice(_,_+4)}for(var T=l(x),E=t[T];E==null;)T=T<<1|l(x),E=t[T];var w=E[3];w!=0&&(w=l(x)==0?w:-w),M[0]=E[2],M[1]=w}function f(x,M){for(var _=0;_<M;_++)(x&1)==1&&x++,x=x>>>1;return x}function d(x,M){return x>>M}function m(x,M,_,T,E,w){M[_]=d(d(11*x[E]-4*x[E+w]+x[E+w+w]+4,3)+x[T],1),M[_+w]=d(d(5*x[E]+4*x[E+w]-x[E+w+w]+4,3)-x[T],1)}function v(x,M,_,T,E,w){var A=x[E-w]-x[E+w],y=x[E],S=x[T];M[_]=d(d(A+4,3)+y+S,1),M[_+w]=d(d(-A+4,3)+y-S,1)}function g(x,M,_,T,E,w){M[_]=d(d(5*x[E]+4*x[E-w]-x[E-w-w]+4,3)+x[T],1),M[_+w]=d(d(11*x[E]-4*x[E-w]+x[E-w-w]+4,3)-x[T],1)}function u(x){return x=x<0?0:x>4095?4095:x,x=n[x]>>>2,x}function h(x,M,_,T,E,w){T=new Uint16Array(T.buffer);var A=Date.now(),y=nt._binBE,S=M+_,I,L,U,z,j,X,q,R,H,k;M+=4;for(var J=w[0]==1;M<S;){var Q=y.readShort(x,M),vt=y.readUshort(x,M+2);if(M+=4,Q==12)I=vt;else if(Q==20)L=vt;else if(Q==21)U=vt;else if(Q==48)z=vt;else if(Q==53)j=vt;else if(Q!=35){if(Q==62)X=vt;else if(Q!=101){if(Q==109)q=vt;else if(Q!=84){if(Q!=106){if(Q!=107){if(Q!=108){if(Q!=102){if(Q==104)R=vt;else if(Q!=105){var N=Q<0?-Q:Q,D=N&65280,C=0;if(N&c&&(N&o?(C=vt&65535,C+=(N&255)<<16):C=vt&65535),(N&s)==s){if(H==null){H=[];for(var b=0;b<4;b++)H[b]=new Int16Array((L>>>1)*(U>>>1));k=new Int16Array((L>>>1)*(U>>>1)),e=new Int16Array(1024);for(var b=0;b<1024;b++){var Z=b-512,it=Math.abs(Z),I=Math.floor(768*it*it*it/(255*255*255))+it;e[b]=Math.sign(Z)*I}n=new Uint16Array(4096);for(var Y=65535,b=0;b<4096;b++){var ct=b,ut=Y*(Math.pow(113,ct/4095)-1)/112;n[b]=Math.min(ut,Y)}}var pt=H[X],F=f(L,1+r[z]),at=f(U,1+r[z]);if(z==0)for(var rt=0;rt<at;rt++)for(var st=0;st<F;st++){var W=M+(rt*F+st)*2;pt[rt*(L>>>1)+st]=x[W]<<8|x[W+1]}else{for(var G=[x,M*8],dt=[],B=0,P=F*at,K=[0,0],ht=0,vt=0;B<P;)for(p(G,K),ht=K[0],vt=K[1];ht>0;)dt[B++]=vt,ht--;for(var gt=(z-1)%3,mt=gt!=1?F:0,xt=gt!=0?at:0,rt=0;rt<at;rt++)for(var Mt=(rt+xt)*(L>>>1)+mt,Et=rt*F,st=0;st<F;st++)pt[Mt+st]=e[dt[Et+st]+512]*j;if(gt==2){for(var R=L>>>1,Ot=F*2,_t=at*2,rt=0;rt<at;rt++)for(var st=0;st<Ot;st++){var b=rt*2*R+st,wt=rt*R+st,Lt=at*R+wt;rt==0?m(pt,k,b,Lt,wt,R):rt==at-1?g(pt,k,b,Lt,wt,R):v(pt,k,b,Lt,wt,R)}var Tt=pt;pt=k,k=Tt;for(var rt=0;rt<_t;rt++)for(var st=0;st<F;st++){var b=rt*R+2*st,wt=rt*R+st,Lt=F+wt;st==0?m(pt,k,b,Lt,wt,1):st==F-1?g(pt,k,b,Lt,wt,1):v(pt,k,b,Lt,wt,1)}var Tt=pt;pt=k,k=Tt;for(var At=[],Vt=2-~~((z-1)/3),zt=0;zt<3;zt++)At[zt]=q>>14-zt*2&3;var Jt=At[Vt];if(Jt!=0)for(var rt=0;rt<_t;rt++)for(var st=0;st<Ot;st++){var b=rt*R+st;pt[b]=pt[b]<<Jt}}}if(z==9&&X==3)for(var $=H[0],Pt=H[1],ft=H[2],yt=H[3],rt=0;rt<U;rt+=2)for(var st=0;st<L;st+=2){var Rt=rt*L+st,W=(rt>>>1)*(L>>>1)+(st>>>1),Dt=$[W],Wt=Pt[W]-2048,le=ft[W]-2048,fe=yt[W]-2048,jt=(Wt<<1)+Dt,be=(le<<1)+Dt,Oe=Dt+fe,$i=Dt-fe;J?(T[Rt]=u(Oe),T[Rt+1]=u(be),T[Rt+L]=u(jt),T[Rt+L+1]=u($i)):(T[Rt]=u(jt),T[Rt+1]=u(Oe),T[Rt+L]=u($i),T[Rt+L+1]=u(be))}M+=C*4}else if(N==16388)M+=C*4;else if(!(D==8192||D==8448||D==9216))throw N.toString(16)}}}}}}}}}console.log(Date.now()-A)}return h}();nt.decode._decodeLogLuv32=function(i,t,e,n,r,s){for(var a=i.width,o=a*4,c=0,l=new Uint8Array(o);c<n;){for(var p=0;p<o;){var f=t[e+c];if(c++,f<128){for(var d=0;d<f;d++)l[p+d]=t[e+c+d];p+=f,c+=f}else{f=f-126;for(var d=0;d<f;d++)l[p+d]=t[e+c];p+=f,c++}}for(var m=0;m<a;m++)r[s+0]=l[m],r[s+1]=l[m+a],r[s+2]=l[m+a*2],r[s+4]=l[m+a*3],s+=6}};nt.decode._ljpeg_diff=function(i,t,e){var n=nt.decode._getbithuff,r,s;return r=n(i,t,e[0],e),s=n(i,t,r,0),s&1<<r-1||(s-=(1<<r)-1),s};nt.decode._decodeARW=function(i,t,e,n,r,s){var a=i.t256[0],o=i.t257[0],c=i.t258[0],l=i.isLE?nt._binLE:nt._binBE,p=a*o==n||a*o*1.5==n;if(!p){o+=8;var f=[e,0,0,0],d=new Uint16Array(32770),m=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],q,v,g,y,A,u=0,h=nt.decode._ljpeg_diff;for(d[0]=15,g=q=0;q<18;q++)for(var x=32768>>>(m[q]>>>8),v=0;v<x;v++)d[++g]=m[q];for(y=a;y--;)for(A=0;A<o+1;A+=2)if(A==o&&(A=1),u+=h(t,f,d),A<o){var M=u&4095;nt.decode._putsF(r,(A*a+y)*c,M<<16-c)}return}if(a*o*1.5==n){for(var q=0;q<n;q+=3){var _=t[e+q+0],T=t[e+q+1],E=t[e+q+2];r[s+q]=T<<4|_>>>4,r[s+q+1]=_<<4|E>>>4,r[s+q+2]=E<<4|T>>>4}return}var w=new Uint16Array(16),A,y,S,I,L,U,z,j,X,q,R,H=new Uint8Array(a+1);for(A=0;A<o;A++){for(var k=0;k<a;k++)H[k]=t[e++];for(R=0,y=0;y<a-30;R+=16){for(I=2047&(S=l.readUint(H,R)),L=2047&S>>>11,U=15&S>>>22,z=15&S>>>26,j=0;j<4&&128<<j<=I-L;j++);for(X=30,q=0;q<16;q++)q==U?w[q]=I:q==z?w[q]=L:(w[q]=((l.readUshort(H,R+(X>>3))>>>(X&7)&127)<<j)+L,w[q]>2047&&(w[q]=2047),X+=7);for(q=0;q<16;q++,y+=2){var M=w[q]<<1;nt.decode._putsF(r,(A*a+y)*c,M<<16-c)}y-=y&1?1:31}}};nt.decode._decodeNikon=function(i,t,e,n,r,s,a){var o=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],c=i.t256[0],l=i.t257[0],p=i.t258[0],f=0,d=0,m=nt.decode._make_decoder,v=nt.decode._getbithuff,g=t[0].exifIFD.makerNote,u=g.t150?g.t150:g.t140,h=0,x=u[h++],M=u[h++];(x==73||M==88)&&(h+=2110),x==70&&(f=2),p==14&&(f+=3);for(var _=[[0,0],[0,0]],T=i.isLE?nt._binLE:nt._binBE,S=0;S<2;S++)for(var E=0;E<2;E++)_[S][E]=T.readShort(u,h),h+=2;var w=1<<p&32767,A=0,y=T.readShort(u,h);h+=2,y>1&&(A=Math.floor(w/(y-1))),x==68&&M==32&&A>0&&(d=T.readShort(u,562));var S,I,L,U,z,j,X=[0,0],q=m(o[f]),R=[n,0,0,0];for(I=0;I<l;I++)for(d&&I==d&&(q=m(o[f+1])),L=0;L<c;L++){S=v(e,R,q[0],q),U=S&15,z=S>>>4,j=(v(e,R,U-z,0)<<1)+1<<z>>>1,j&1<<U-1||(j-=(1<<U)-(z==0?1:0)),L<2?X[L]=_[I&1][L]+=j:X[L&1]+=j;var H=Math.min(Math.max(X[L&1],0),(1<<p)-1),k=(I*c+L)*p;nt.decode._putsF(s,k,H<<16-p)}};nt.decode._putsF=function(i,t,e){e=e<<8-(t&7);var n=t>>>3;i[n]|=e>>>16,i[n+1]|=e>>>8,i[n+2]|=e};nt.decode._getbithuff=function(i,t,e,n){var r=0;nt.decode._get_byte;var s,a=t[0],o=t[1],c=t[2],l=t[3];if(e==0||c<0)return 0;for(;!l&&c<e&&(s=i[a++])!=-1&&!(l=r);)o=(o<<8)+s,c+=8;if(s=o<<32-c>>>32-e,n?(c-=n[s+1]>>>8,s=n[s+1]&255):c-=e,c<0)throw"e";return t[0]=a,t[1]=o,t[2]=c,t[3]=l,s};nt.decode._make_decoder=function(i){var t,e,n,r,s,a=[];for(t=16;t!=0&&!i[t];t--);var o=17;for(a[0]=t,n=e=1;e<=t;e++)for(r=0;r<i[e];r++,++o)for(s=0;s<1<<t-e;s++)n<=1<<t&&(a[n++]=e<<8|i[o]);return a};nt.decode._decodeNewJPEG=function(i,t,e,n,r,s){n=Math.min(n,t.length-e);var a=i.t347,o=a?a.length:0,c=new Uint8Array(o+n);if(a){for(var l=216,p=217,f=0,d=0;d<o-1&&!(a[d]==255&&a[d+1]==p);d++)c[f++]=a[d];var m=t[e],v=t[e+1];(m!=255||v!=l)&&(c[f++]=m,c[f++]=v);for(var d=2;d<n;d++)c[f++]=t[e+d]}else for(var d=0;d<n;d++)c[d]=t[e+d];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var g=i.t258[0],u=nt.LosslessJpegDecode(c),h=u.length;if(g==16)if(i.isLE)for(var d=0;d<h;d++)r[s+(d<<1)]=u[d]&255,r[s+(d<<1)+1]=u[d]>>>8;else for(var d=0;d<h;d++)r[s+(d<<1)]=u[d]>>>8,r[s+(d<<1)+1]=u[d]&255;else if(g==14||g==12||g==10)for(var x=16-g,d=0;d<h;d++)nt.decode._putsF(r,d*g,u[d]<<x);else if(g==8)for(var d=0;d<h;d++)r[s+d]=u[d];else throw new Error("unsupported bit depth "+g)}else{var M=new nt.JpegDecoder;M.parse(c);for(var _=M.getData({width:M.width,height:M.height,forceRGB:!0,isSourcePDF:!1}),d=0;d<_.length;d++)r[s+d]=_[d]}i.t262[0]==6&&(i.t262[0]=2)};nt.decode._decodeOldJPEGInit=function(i,t,e,n){var r=216,s=219,a=196,o=221,c=192,l=218,p=0,f=0,d,m,v=!1,g,u,h,x=i.t513,M=x?x[0]:0,_=i.t514,T=_?_[0]:0,E=i.t324||i.t273||x,w=i.t530,A=0,y=0,S=i.t277?i.t277[0]:1,I=i.t515;if(E&&(f=E[0],v=E.length>1),!v){if(t[e]==255&&t[e+1]==r)return{jpegOffset:e};if(x!=null&&(t[e+M]==255&&t[e+M+1]==r?p=e+M:log("JPEGInterchangeFormat does not point to SOI"),_==null?log("JPEGInterchangeFormatLength field is missing"):(M>=f||M+T<=f)&&log("JPEGInterchangeFormatLength field value is invalid"),p!=null))return{jpegOffset:p}}if(w!=null&&(A=w[0],y=w[1]),x!=null&&_!=null)if(T>=2&&M+T<=f){for(t[e+M+T-2]==255&&t[e+M+T-1]==r?d=new Uint8Array(T-2):d=new Uint8Array(T),g=0;g<d.length;g++)d[g]=t[e+M+g];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(d==null){var L=0,U=[];U[L++]=255,U[L++]=r;var z=i.t519;if(z==null)throw new Error("JPEGQTables tag is missing");for(g=0;g<z.length;g++)for(U[L++]=255,U[L++]=s,U[L++]=0,U[L++]=67,U[L++]=g,u=0;u<64;u++)U[L++]=t[e+z[g]+u];for(h=0;h<2;h++){var j=i[h==0?"t520":"t521"];if(j==null)throw new Error((h==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(g=0;g<j.length;g++){U[L++]=255,U[L++]=a;var X=19;for(u=0;u<16;u++)X+=t[e+j[g]+u];for(U[L++]=X>>>8,U[L++]=X&255,U[L++]=g|h<<4,u=0;u<16;u++)U[L++]=t[e+j[g]+u];for(u=0;u<X;u++)U[L++]=t[e+j[g]+16+u]}}if(U[L++]=255,U[L++]=c,U[L++]=0,U[L++]=8+3*S,U[L++]=8,U[L++]=i.height>>>8&255,U[L++]=i.height&255,U[L++]=i.width>>>8&255,U[L++]=i.width&255,U[L++]=S,S==1)U[L++]=1,U[L++]=17,U[L++]=0;else for(g=0;g<3;g++)U[L++]=g+1,U[L++]=g!=0?17:(A&15)<<4|y&15,U[L++]=g;I!=null&&I[0]!=0&&(U[L++]=255,U[L++]=o,U[L++]=0,U[L++]=4,U[L++]=I[0]>>>8&255,U[L++]=I[0]&255),d=new Uint8Array(U)}var q=-1;for(g=0;g<d.length-1;){if(d[g]==255&&d[g+1]==c){q=g;break}g++}if(q==-1){var R=new Uint8Array(d.length+10+3*S);R.set(d);var H=d.length;if(q=d.length,d=R,d[H++]=255,d[H++]=c,d[H++]=0,d[H++]=8+3*S,d[H++]=8,d[H++]=i.height>>>8&255,d[H++]=i.height&255,d[H++]=i.width>>>8&255,d[H++]=i.width&255,d[H++]=S,S==1)d[H++]=1,d[H++]=17,d[H++]=0;else for(g=0;g<3;g++)d[H++]=g+1,d[H++]=g!=0?17:(A&15)<<4|y&15,d[H++]=g}if(t[f]==255&&t[f+1]==l){var k=t[f+2]<<8|t[f+3];for(m=new Uint8Array(k+2),m[0]=t[f],m[1]=t[f+1],m[2]=t[f+2],m[3]=t[f+3],g=0;g<k-2;g++)m[g+4]=t[f+g+4]}else{m=new Uint8Array(8+2*S);var J=0;if(m[J++]=255,m[J++]=l,m[J++]=0,m[J++]=6+2*S,m[J++]=S,S==1)m[J++]=1,m[J++]=0;else for(g=0;g<3;g++)m[J++]=g+1,m[J++]=g<<4|g;m[J++]=0,m[J++]=63,m[J++]=0}return{jpegOffset:e,tables:d,sosMarker:m,sofPosition:q}};nt.decode._decodeOldJPEG=function(i,t,e,n,r,s){var a,o,c,l,p,f=nt.decode._decodeOldJPEGInit(i,t,e,n);if(f.jpegOffset!=null)for(o=e+n-f.jpegOffset,l=new Uint8Array(o),a=0;a<o;a++)l[a]=t[f.jpegOffset+a];else{for(c=f.tables.length,l=new Uint8Array(c+f.sosMarker.length+n+2),l.set(f.tables),p=c,l[f.sofPosition+5]=i.height>>>8&255,l[f.sofPosition+6]=i.height&255,l[f.sofPosition+7]=i.width>>>8&255,l[f.sofPosition+8]=i.width&255,(t[e]!=255||t[e+1]!=SOS)&&(l.set(f.sosMarker,p),p+=sosMarker.length),a=0;a<n;a++)l[p++]=t[e+a];l[p++]=255,l[p++]=EOI}var d=new nt.JpegDecoder;d.parse(l);for(var m=d.getData({width:d.width,height:d.height,forceRGB:!0,isSourcePDF:!1}),a=0;a<m.length;a++)r[s+a]=m[a];i.t262&&i.t262[0]==6&&(i.t262[0]=2)};nt.decode._decodePackBits=function(i,t,e,n,r){for(var s=new Int8Array(i.buffer),a=new Int8Array(n.buffer),o=t+e;t<o;){var c=s[t];if(t++,c>=0&&c<128)for(var l=0;l<c+1;l++)a[r]=s[t],r++,t++;if(c>=-127&&c<0){for(var l=0;l<-c+1;l++)a[r]=s[t],r++;t++}}return r};nt.decode._decodeThunder=function(i,t,e,n,r){for(var s=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],o=t+e,c=r*2,l=0;t<o;){var p=i[t],f=p>>>6,d=p&63;if(t++,f==3&&(l=d&15,n[c>>>1]|=l<<4*(1-c&1),c++),f==0)for(var m=0;m<d;m++)n[c>>>1]|=l<<4*(1-c&1),c++;if(f==2)for(var m=0;m<2;m++){var v=d>>>3*(1-m)&7;v!=4&&(l+=a[v],n[c>>>1]|=l<<4*(1-c&1),c++)}if(f==1)for(var m=0;m<3;m++){var v=d>>>2*(2-m)&3;v!=2&&(l+=s[v],n[c>>>1]|=l<<4*(1-c&1),c++)}}};nt.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3};nt.decode._lens=function(){var i=function(c,l,p,f){for(var d=0;d<l.length;d++)c[l[d]]=p+d*f},t="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",e="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",r="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",s="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";t=t.split(","),e=e.split(","),n=n.split(","),r=r.split(","),s=s.split(",");var a={},o={};return i(a,t,0,1),i(a,n,64,64),i(a,s,1792,64),i(o,e,0,1),i(o,r,64,64),i(o,s,1792,64),[a,o]}();nt.decode._decodeG4=function(i,t,e,n,r,s,a){for(var o=nt.decode,c=t<<3,l=0,p="",f=[],d=[],m=0;m<s;m++)d.push(0);d=o._makeDiff(d);for(var v=0,g=0,u=0,h=0,x=0,M=0,_="",T=0,E=Math.ceil(s/8)*8;c>>>3<t+e;){u=o._findDiff(d,v+(v==0?0:1),1-x),h=o._findDiff(d,u,x);var w=0;if(a==1&&(w=i[c>>>3]>>>7-(c&7)&1),a==2&&(w=i[c>>>3]>>>(c&7)&1),c++,p+=w,_=="H"){if(o._lens[x][p]!=null){var A=o._lens[x][p];p="",l+=A,A<64&&(o._addNtimes(f,l,x),v+=l,x=1-x,l=0,T--,T==0&&(_=""))}}else p=="0001"&&(p="",o._addNtimes(f,h-v,x),v=h),p=="001"&&(p="",_="H",T=2),o._dmap[p]!=null&&(g=u+o._dmap[p],o._addNtimes(f,g-v,x),v=g,p="",x=1-x);f.length==s&&_==""&&(o._writeBits(f,n,r*8+M*E),x=0,M++,v=0,d=o._makeDiff(f),f=[])}};nt.decode._findDiff=function(i,t,e){for(var n=0;n<i.length;n+=2)if(i[n]>=t&&i[n+1]==e)return i[n]};nt.decode._makeDiff=function(i){var t=[];i[0]==1&&t.push(0,1);for(var e=1;e<i.length;e++)i[e-1]!=i[e]&&t.push(e,i[e]);return t.push(i.length,0,i.length,1),t};nt.decode._decodeG2=function(i,t,e,n,r,s,a){for(var o=nt.decode,c=t<<3,l=0,p="",f=[],d=0,m=0,v=Math.ceil(s/8)*8;c>>>3<t+e;){var g=0;a==1&&(g=i[c>>>3]>>>7-(c&7)&1),a==2&&(g=i[c>>>3]>>>(c&7)&1),c++,p+=g,l=o._lens[d][p],l!=null&&(o._addNtimes(f,l,d),p="",l<64&&(d=1-d),f.length==s&&(o._writeBits(f,n,r*8+m*v),f=[],m++,d=0,c&7&&(c+=8-(c&7)),l>=64&&(c+=8)))}};nt.decode._decodeG3=function(i,t,e,n,r,s,a,o){for(var c=nt.decode,l=t<<3,p=0,f="",d=[],m=[],v=0;v<s;v++)d.push(0);for(var g=0,u=0,h=0,x=0,M=0,_=-1,T="",E=0,w=!0,A=Math.ceil(s/8)*8;l>>>3<t+e;){h=c._findDiff(m,g+(g==0?0:1),1-M),x=c._findDiff(m,h,M);var y=0;if(a==1&&(y=i[l>>>3]>>>7-(l&7)&1),a==2&&(y=i[l>>>3]>>>(l&7)&1),l++,f+=y,w){if(c._lens[M][f]!=null){var S=c._lens[M][f];f="",p+=S,S<64&&(c._addNtimes(d,p,M),M=1-M,p=0)}}else if(T=="H"){if(c._lens[M][f]!=null){var S=c._lens[M][f];f="",p+=S,S<64&&(c._addNtimes(d,p,M),g+=p,M=1-M,p=0,E--,E==0&&(T=""))}}else f=="0001"&&(f="",c._addNtimes(d,x-g,M),g=x),f=="001"&&(f="",T="H",E=2),c._dmap[f]!=null&&(u=h+c._dmap[f],c._addNtimes(d,u-g,M),g=u,f="",M=1-M);f.endsWith("000000000001")&&(_>=0&&c._writeBits(d,n,r*8+_*A),o&&(a==1&&(w=(i[l>>>3]>>>7-(l&7)&1)==1),a==2&&(w=(i[l>>>3]>>>(l&7)&1)==1),l++),f="",M=0,_++,g=0,m=c._makeDiff(d),d=[])}d.length==s&&c._writeBits(d,n,r*8+_*A)};nt.decode._addNtimes=function(i,t,e){for(var n=0;n<t;n++)i.push(e)};nt.decode._writeBits=function(i,t,e){for(var n=0;n<i.length;n++)t[e+n>>>3]|=i[n]<<7-(e+n&7)};nt.decode._decodeLZW=nt.decode._decodeLZW=function(){var i,t,e,n,r=0,s=0,a=0,o=0,c=function(){var u=i>>>3,h=t[u]<<16|t[u+1]<<8|t[u+2],x=h>>>24-(i&7)-s&(1<<s)-1;return i+=s,x},l=new Uint32Array(4096*4),p=0,f=function(u){if(u!=p){p=u,a=1<<u,o=a+1;for(var h=0;h<o+1;h++)l[4*h]=l[4*h+3]=h,l[4*h+1]=65535,l[4*h+2]=1}},d=function(u){s=u+1,r=o+1},m=function(u){for(var h=u<<2,x=l[h+2],M=n+x-1;h!=65535;)e[M--]=l[h],h=l[h+1];n+=x},v=function(u,h){var x=r<<2,M=u<<2;l[x]=l[(h<<2)+3],l[x+1]=M,l[x+2]=l[M+2]+1,l[x+3]=l[M+3],r++,r+1==1<<s&&s!=12&&s++},g=function(u,h,x,M,_,T){i=h<<3,t=u,e=M,n=_;var E=h+x<<3,w=0,A=0;for(f(T),d(T);i<E&&(w=c())!=o;){if(w==a){if(d(T),w=c(),w==o)break;m(w)}else w<r?(m(w),v(A,w)):(v(A,A),m(r-1));A=w}return n};return g}();nt.tags={};nt._types=function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var t={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:t},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}}();nt._readIFD=function(i,t,e,n,r,s){var a=i.readUshort(t,e);e+=2;var o={};s.debug&&log("   ".repeat(r),n.length-1,">>>----------------");for(var c=0;c<a;c++){var l=i.readUshort(t,e);e+=2;var p=i.readUshort(t,e);e+=2;var f=i.readUint(t,e);e+=4;var d=i.readUint(t,e);e+=4;var m=[];if(p==1||p==7){var v=f<5?e-4:d;v+f>t.buffer.byteLength&&(f=t.buffer.byteLength-v),m=new Uint8Array(t.buffer,v,f)}if(p==2){var g=f<5?e-4:d,u=t[g],h=Math.max(0,Math.min(f-1,t.length-g));u<128||h==0?m.push(i.readASCII(t,g,h)):m=new Uint8Array(t.buffer,g,h)}if(p==3)for(var x=0;x<f;x++)m.push(i.readUshort(t,(f<3?e-4:d)+2*x));if(p==4||p==13)for(var x=0;x<f;x++)m.push(i.readUint(t,(f<2?e-4:d)+4*x));if(p==5||p==10)for(var M=p==5?i.readUint:i.readInt,x=0;x<f;x++)m.push([M(t,d+x*8),M(t,d+x*8+4)]);if(p==8)for(var x=0;x<f;x++)m.push(i.readShort(t,(f<3?e-4:d)+2*x));if(p==9)for(var x=0;x<f;x++)m.push(i.readInt(t,(f<2?e-4:d)+4*x));if(p==11)for(var x=0;x<f;x++)m.push(i.readFloat(t,d+x*4));if(p==12)for(var x=0;x<f;x++)m.push(i.readDouble(t,d+x*8));if(f!=0&&m.length==0){if(log(l,"unknown TIFF tag type: ",p,"num:",f),c==0)return;continue}if(s.debug&&log("   ".repeat(r),l,p,nt.tags[l],m),o["t"+l]=m,!(l==330&&o.t272&&o.t272[0]=="DSLR-A100")){if(l==330||l==34665||l==34853||l==50740&&i.readUshort(t,i.readUint(m,0))<300||l==61440){for(var _=l==50740?[i.readUint(m,0)]:m,T=[],x=0;x<_.length;x++)nt._readIFD(i,t,_[x],T,r+1,s);l==330&&(o.subIFD=T),l==34665&&(o.exifIFD=T[0]),l==34853&&(o.gpsiIFD=T[0]),l==50740&&(o.dngPrvt=T[0]),l==61440&&(o.fujiIFD=T[0])}}if(l==37500&&s.parseMN){var E=m;if(i.readASCII(E,0,5)=="Nikon")o.makerNote=nt.decode(E.slice(10).buffer)[0];else if(i.readASCII(E,0,5)=="OLYMP"||i.readASCII(E,0,9)=="OM SYSTEM"){var w=[8208,8224,8240,8256,8272],A=[];nt._readIFD(i,E,E[1]==77?16:E[5]==85?12:8,A,r+1,s);for(var y=o.makerNote=A.pop(),x=0;x<w.length;x++){var S="t"+w[x];y[S]!=null&&(nt._readIFD(i,E,y[S][0],A,r+1,s),y[S]=A.pop())}y.t12288&&(nt._readIFD(i,y.t12288,0,A,r+1,s),y.t12288=A.pop())}else if(i.readUshort(t,d)<300&&i.readUshort(t,d+4)<=12){var A=[];nt._readIFD(i,t,d,A,r+1,s),o.makerNote=A[0]}}}return n.push(o),s.debug&&log("   ".repeat(r),"<<<---------------"),e};nt._writeIFD=function(i,t,e,n,r){var s=Object.keys(r),a=s.length;r.exifIFD&&a--,r.gpsiIFD&&a--,i.writeUshort(e,n,a),n+=2;for(var o=n+a*12+4,c=0;c<s.length;c++){var l=s[c];if(!(l=="t34665"||l=="t34853")){l=="exifIFD"&&(l="t34665"),l=="gpsiIFD"&&(l="t34853");var p=parseInt(l.slice(1)),f=t.main[p];if(f==null&&(f=t.rest[p]),f==null||f==0)throw new Error("unknown type of tag: "+p);var d=r[l];if(p==34665){var m=nt._writeIFD(i,t,e,o,r.exifIFD);d=[o],o=m[1]}if(p==34853){var m=nt._writeIFD(i,nt._types.gps,e,o,r.gpsiIFD);d=[o],o=m[1]}f==2&&(d=d[0]+"\0");var v=d.length;i.writeUshort(e,n,p),n+=2,i.writeUshort(e,n,f),n+=2,i.writeUint(e,n,v),n+=4;var g=[-1,1,1,2,4,8,0,1,0,4,8,0,8][f]*v,u=n;if(g>4&&(i.writeUint(e,n,o),u=o),f==1||f==7)for(var h=0;h<v;h++)e[u+h]=d[h];else if(f==2)i.writeASCII(e,u,d);else if(f==3)for(var h=0;h<v;h++)i.writeUshort(e,u+2*h,d[h]);else if(f==4)for(var h=0;h<v;h++)i.writeUint(e,u+4*h,d[h]);else if(f==5||f==10)for(var x=f==5?i.writeUint:i.writeInt,h=0;h<v;h++){var M=d[h],_=M[0],T=M[1];if(_==null)throw"e";x(e,u+8*h,_),x(e,u+8*h+4,T)}else if(f==9)for(var h=0;h<v;h++)i.writeInt(e,u+4*h,d[h]);else if(f==12)for(var h=0;h<v;h++)i.writeDouble(e,u+8*h,d[h]);else throw f;g>4&&(g+=g&1,o+=g),n+=4}}return[n,o]};nt.toRGBA8=function(i,t){function e(dt){return dt<.0031308?12.92*dt:1.055*Math.pow(dt,1/2.4)-.055}var n=i.width,r=i.height,s=n*r,a=i.data,o=new Uint8Array(s*4),c=i.t262?i.t262[0]:2,l=i.t258?Math.min(32,i.t258[0]):1;i.t262==null&&l==1&&(c=0);var p=i.t277?i.t277[0]:i.t258?i.t258.length:[1,1,3,1,1,4,3][c],f=i.t339?i.t339[0]:null;if(c==1&&l==32&&f!=3)throw"e";var d=Math.ceil(p*l*n/8);if(c==0){t=1/256;for(var m=0;m<r;m++){var v=m*d,g=m*n;if(l==1)for(var u=0;u<n;u++){var h=g+u<<2,x=a[v+(u>>3)]>>7-(u&7)&1;o[h]=o[h+1]=o[h+2]=(1-x)*255,o[h+3]=255}if(l==4)for(var u=0;u<n;u++){var h=g+u<<2,x=a[v+(u>>1)]>>4-4*(u&1)&15;o[h]=o[h+1]=o[h+2]=(15-x)*17,o[h+3]=255}if(l==8)for(var u=0;u<n;u++){var h=g+u<<2,x=a[v+u];o[h]=o[h+1]=o[h+2]=255-x,o[h+3]=255}if(l==16)for(var u=0;u<n;u++){var h=g+u<<2,M=v+2*u,x=a[M+1]<<8|a[M];o[h]=o[h+1]=o[h+2]=Math.min(255,255-~~(x*t)),o[h+3]=255}}}else if(c==1){t==null&&(t=1/256);for(var _=a.length&3?null:new Float32Array(a.buffer),m=0;m<r;m++){var v=m*d,g=m*n;if(l==1)for(var u=0;u<n;u++){var h=g+u<<2,x=a[v+(u>>3)]>>7-(u&7)&1;o[h]=o[h+1]=o[h+2]=x*255,o[h+3]=255}if(l==2)for(var u=0;u<n;u++){var h=g+u<<2,x=a[v+(u>>2)]>>6-2*(u&3)&3;o[h]=o[h+1]=o[h+2]=x*85,o[h+3]=255}if(l==8)for(var u=0;u<n;u++){var h=g+u<<2,x=a[v+u*p];o[h]=o[h+1]=o[h+2]=x,o[h+3]=255}if(l==16)for(var u=0;u<n;u++){var h=g+u<<2,M=v+2*u,x=a[M+1]<<8|a[M];o[h]=o[h+1]=o[h+2]=Math.min(255,~~(x*t)),o[h+3]=255}if(l==32)for(var u=0;u<n;u++){var h=g+u<<2,M=(v>>>2)+u,x=_[M];o[h]=o[h+1]=o[h+2]=~~(.5+255*x),o[h+3]=255}}}else if(c==2)if(l==8){if(p==1)for(var u=0;u<s;u++)o[4*u]=o[4*u+1]=o[4*u+2]=a[u],o[4*u+3]=255;if(p==3)for(var u=0;u<s;u++){var h=u<<2,T=u*3;o[h]=a[T],o[h+1]=a[T+1],o[h+2]=a[T+2],o[h+3]=255}if(p>=4)for(var u=0;u<s;u++){var h=u<<2,T=u*p;o[h]=a[T],o[h+1]=a[T+1],o[h+2]=a[T+2],o[h+3]=a[T+3]}}else if(l==16){if(p==4)for(var u=0;u<s;u++){var h=u<<2,T=u*8+1;o[h]=a[T],o[h+1]=a[T+2],o[h+2]=a[T+4],o[h+3]=a[T+6]}if(p==3)for(var u=0;u<s;u++){var h=u<<2,T=u*6+1;o[h]=a[T],o[h+1]=a[T+2],o[h+2]=a[T+4],o[h+3]=255}}else if(l==32){for(var E=new Float32Array(a.buffer),w=0,u=0;u<E.length;u++)w=Math.min(w,E[u]);if(w<0)for(var u=0;u<a.length;u+=4){var A=a[u];a[u]=a[u+3],a[u+3]=A,A=a[u+1],a[u+1]=a[u+2],a[u+2]=A}for(var y=[],u=0;u<65536;u++)y.push(e(u/65535));for(var u=0;u<E.length;u++){var S=Math.max(0,Math.min(1,E[u]));E[u]=y[~~(.5+S*65535)]}if(p==3)for(var u=0;u<s;u++){var h=u<<2,T=u*3;o[h]=~~(.5+E[T]*255),o[h+1]=~~(.5+E[T+1]*255),o[h+2]=~~(.5+E[T+2]*255),o[h+3]=255}else if(p==4)for(var u=0;u<s;u++){var h=u<<2,T=u*4;o[h]=~~(.5+E[T]*255),o[h+1]=~~(.5+E[T+1]*255),o[h+2]=~~(.5+E[T+2]*255),o[h+3]=~~(.5+E[T+3]*255)}else throw p}else throw l;else if(c==3)for(var I=i.t320,L=1<<l,U=l==8&&p>1&&i.t338&&i.t338[0]!=0,m=0;m<r;m++)for(var z=0;z<n;z++){var u=m*n+z,h=u<<2,j=0,X=m*d;if(l==1)j=a[X+(z>>>3)]>>>7-(z&7)&1;else if(l==2)j=a[X+(z>>>2)]>>>6-2*(z&3)&3;else if(l==4)j=a[X+(z>>>1)]>>>4-4*(z&1)&15;else if(l==8)j=a[X+z*p];else throw l;o[h]=I[j]>>8,o[h+1]=I[L+j]>>8,o[h+2]=I[L+L+j]>>8,o[h+3]=U?a[X+z*p+1]:255}else if(c==5)for(var q=p>4?1:0,u=0;u<s;u++){var h=u<<2,R=u*p;if(window.UDOC){var H=a[R],k=a[R+1],J=a[R+2],Q=a[R+3],vt=UDOC.C.cmykToRgb([H*(1/255),k*(1/255),J*(1/255),Q*(1/255)]);o[h]=~~(.5+255*vt[0]),o[h+1]=~~(.5+255*vt[1]),o[h+2]=~~(.5+255*vt[2])}else{var H=255-a[R],k=255-a[R+1],J=255-a[R+2],Q=(255-a[R+3])*(1/255);o[h]=~~(H*Q+.5),o[h+1]=~~(k*Q+.5),o[h+2]=~~(J*Q+.5)}o[h+3]=255*(1-q)+a[R+4]*q}else if(c==6&&i.t278)for(var N=i.t278[0],m=0;m<r;m+=N)for(var u=m*n,D=N*n,C=0;C<D;C++){var h=4*(u+C),R=3*u+4*(C>>>1),J=a[R+(C&1)],b=a[R+2]-128,Z=a[R+3]-128,it=J+((Z>>2)+(Z>>3)+(Z>>5)),Y=J-((b>>2)+(b>>4)+(b>>5))-((Z>>1)+(Z>>3)+(Z>>4)+(Z>>5)),ct=J+(b+(b>>1)+(b>>2)+(b>>6));o[h]=Math.max(0,Math.min(255,it)),o[h+1]=Math.max(0,Math.min(255,Y)),o[h+2]=Math.max(0,Math.min(255,ct)),o[h+3]=255}else if(c==32845)for(var m=0;m<r;m++)for(var z=0;z<n;z++){var R=(m*n+z)*6,h=(m*n+z)*4,ut=a[R+1]<<8|a[R],ut=Math.pow(2,(ut+.5)/256-64),pt=(a[R+3]+.5)/410,F=(a[R+5]+.5)/410,at=9*pt/(6*pt-16*F+12),rt=4*F/(6*pt-16*F+12),st=ut,W=at*st/rt,J=st,G=(1-at-rt)*st/rt,it=2.69*W-1.276*J-.414*G,Y=-1.022*W+1.978*J+.044*G,ct=.061*W-.224*J+1.163*G;o[h]=e(Math.min(it,1))*255,o[h+1]=e(Math.min(Y,1))*255,o[h+2]=e(Math.min(ct,1))*255,o[h+3]=255}else log("Unknown Photometric interpretation: "+c);return o};nt.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var t=["tif","tiff","dng","cr2","nef"],e=0;e<i.length;e++){var n=i[e],r=n.getAttribute("src");if(r!=null){var s=r.split(".").pop().toLowerCase();if(t.indexOf(s)!=-1){var a=new XMLHttpRequest;nt._xhrs.push(a),nt._imgs.push(n),a.open("GET",r),a.responseType="arraybuffer",a.onload=nt._imgLoaded,a.send()}}}};nt._xhrs=[];nt._imgs=[];nt._imgLoaded=function(i){var t=nt._xhrs.indexOf(i.target),e=nt._imgs[t];nt._xhrs.splice(t,1),nt._imgs.splice(t,1),e.setAttribute("src",nt.bufferToURI(i.target.response))};nt.bufferToURI=function(i){var t=nt.decode(i),e=t,n=0,r=e[0];t[0].subIFD&&(e=e.concat(t[0].subIFD));for(var s=0;s<e.length;s++){var a=e[s];if(!(a.t258==null||a.t258.length<3)){var o=a.t256*a.t257;o>n&&(n=o,r=a)}}nt.decodeImage(i,r,t);var c=nt.toRGBA8(r),l=r.width,p=r.height,f=document.createElement("canvas");f.width=l,f.height=p;var d=f.getContext("2d"),m=new ImageData(new Uint8ClampedArray(c.buffer),l,p);return d.putImageData(m,0,0),f.toDataURL()};nt._binBE={nextZero:function(i,t){for(;i[t]!=0;)t++;return t},readUshort:function(i,t){return i[t]<<8|i[t+1]},readShort:function(i,t){var e=nt._binBE.ui8;return e[0]=i[t+1],e[1]=i[t+0],nt._binBE.i16[0]},readInt:function(i,t){var e=nt._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],nt._binBE.i32[0]},readUint:function(i,t){var e=nt._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],nt._binBE.ui32[0]},readASCII:function(i,t,e){for(var n="",r=0;r<e;r++)n+=String.fromCharCode(i[t+r]);return n},readFloat:function(i,t){for(var e=nt._binBE.ui8,n=0;n<4;n++)e[n]=i[t+3-n];return nt._binBE.fl32[0]},readDouble:function(i,t){for(var e=nt._binBE.ui8,n=0;n<8;n++)e[n]=i[t+7-n];return nt._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e>>8&255,i[t+1]=e&255},writeInt:function(i,t,e){var n=nt._binBE.ui8;nt._binBE.i32[0]=e,i[t+3]=n[0],i[t+2]=n[1],i[t+1]=n[2],i[t+0]=n[3]},writeUint:function(i,t,e){i[t]=e>>24&255,i[t+1]=e>>16&255,i[t+2]=e>>8&255,i[t+3]=e>>0&255},writeASCII:function(i,t,e){for(var n=0;n<e.length;n++)i[t+n]=e.charCodeAt(n)},writeDouble:function(i,t,e){nt._binBE.fl64[0]=e;for(var n=0;n<8;n++)i[t+n]=nt._binBE.ui8[7-n]}};nt._binBE.ui8=new Uint8Array(8);nt._binBE.i16=new Int16Array(nt._binBE.ui8.buffer);nt._binBE.i32=new Int32Array(nt._binBE.ui8.buffer);nt._binBE.ui32=new Uint32Array(nt._binBE.ui8.buffer);nt._binBE.fl32=new Float32Array(nt._binBE.ui8.buffer);nt._binBE.fl64=new Float64Array(nt._binBE.ui8.buffer);nt._binLE={nextZero:nt._binBE.nextZero,readUshort:function(i,t){return i[t+1]<<8|i[t]},readShort:function(i,t){var e=nt._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],nt._binBE.i16[0]},readInt:function(i,t){var e=nt._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],nt._binBE.i32[0]},readUint:function(i,t){var e=nt._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],nt._binBE.ui32[0]},readASCII:nt._binBE.readASCII,readFloat:function(i,t){for(var e=nt._binBE.ui8,n=0;n<4;n++)e[n]=i[t+n];return nt._binBE.fl32[0]},readDouble:function(i,t){for(var e=nt._binBE.ui8,n=0;n<8;n++)e[n]=i[t+n];return nt._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e&255,i[t+1]=e>>8&255},writeInt:function(i,t,e){var n=nt._binBE.ui8;nt._binBE.i32[0]=e,i[t+0]=n[0],i[t+1]=n[1],i[t+2]=n[2],i[t+3]=n[3]},writeUint:function(i,t,e){i[t]=e>>>0&255,i[t+1]=e>>>8&255,i[t+2]=e>>>16&255,i[t+3]=e>>>24&255},writeASCII:nt._binBE.writeASCII};nt._copyTile=function(i,t,e,n,r,s,a,o){for(var c=Math.min(t,r-a),l=Math.min(e,s-o),p=0;p<l;p++)for(var f=(o+p)*r+a,d=p*t,m=0;m<c;m++)n[f+m]=i[d+m]};nt._inflateRaw=function(){var i={};return i.H={},i.H.N=function(t,e){var n=Uint8Array,r=0,s=0,a=0,o=0,c=0,l=0,p=0,f=0,d=0,m,v;if(t[0]==3&&t[1]==0)return e||new n(0);var g=i.H,u=g.b,h=g.e,x=g.R,M=g.n,_=g.A,T=g.Z,E=g.m,w=e==null;for(w&&(e=new n(t.length>>>2<<5));r==0;){if(r=u(t,d,1),s=u(t,d+1,2),d+=3,s==0){d&7&&(d+=8-(d&7));var A=(d>>>3)+4,y=t[A-4]|t[A-3]<<8;w&&(e=i.H.W(e,f+y)),e.set(new n(t.buffer,t.byteOffset+A,y),f),d=A+y<<3,f+=y;continue}if(w&&(e=i.H.W(e,f+(1<<17))),s==1&&(m=E.J,v=E.h,l=511,p=31),s==2){a=h(t,d,5)+257,o=h(t,d+5,5)+1,c=h(t,d+10,4)+4,d+=14;for(var S=1,I=0;I<38;I+=2)E.Q[I]=0,E.Q[I+1]=0;for(var I=0;I<c;I++){var L=h(t,d+I*3,3);E.Q[(E.X[I]<<1)+1]=L,L>S&&(S=L)}d+=3*c,M(E.Q,S),_(E.Q,S,E.u),m=E.w,v=E.d,d=x(E.u,(1<<S)-1,a+o,t,d,E.v);var U=g.V(E.v,0,a,E.C);l=(1<<U)-1;var z=g.V(E.v,a,o,E.D);p=(1<<z)-1,M(E.C,U),_(E.C,U,m),M(E.D,z),_(E.D,z,v)}for(;;){var j=m[T(t,d)&l];d+=j&15;var X=j>>>4;if(!(X>>>8))e[f++]=X;else{if(X==256)break;var q=f+X-254;if(X>264){var R=E.q[X-257];q=f+(R>>>3)+h(t,d,R&7),d+=R&7}var H=v[T(t,d)&p];d+=H&15;var k=H>>>4,J=E.c[k],Q=(J>>>4)+u(t,d,J&15);for(d+=J&15;f<q;)e[f]=e[f++-Q],e[f]=e[f++-Q],e[f]=e[f++-Q],e[f]=e[f++-Q];f=q}}}return e.length==f?e:e.slice(0,f)},i.H.W=function(t,e){var n=t.length;if(e<=n)return t;var r=new Uint8Array(n<<1);return r.set(t,0),r},i.H.R=function(t,e,n,r,s,a){for(var o=i.H.e,c=i.H.Z,l=0;l<n;){var p=t[c(r,s)&e];s+=p&15;var f=p>>>4;if(f<=15)a[l]=f,l++;else{var d=0,m=0;f==16?(m=3+o(r,s,2),s+=2,d=a[l-1]):f==17?(m=3+o(r,s,3),s+=3):f==18&&(m=11+o(r,s,7),s+=7);for(var v=l+m;l<v;)a[l]=d,l++}}return s},i.H.V=function(t,e,n,r){for(var s=0,a=0,o=r.length>>>1;a<n;){var c=t[a+e];r[a<<1]=0,r[(a<<1)+1]=c,c>s&&(s=c),a++}for(;a<o;)r[a<<1]=0,r[(a<<1)+1]=0,a++;return s},i.H.n=function(t,e){for(var n=i.H.m,r=t.length,s,a,o,c,l,p=n.j,c=0;c<=e;c++)p[c]=0;for(c=1;c<r;c+=2)p[t[c]]++;var f=n.K;for(s=0,p[0]=0,a=1;a<=e;a++)s=s+p[a-1]<<1,f[a]=s;for(o=0;o<r;o+=2)l=t[o+1],l!=0&&(t[o]=f[l],f[l]++)},i.H.A=function(t,e,n){for(var r=t.length,s=i.H.m,a=s.r,o=0;o<r;o+=2)if(t[o+1]!=0)for(var c=o>>1,l=t[o+1],p=c<<4|l,f=e-l,d=t[o]<<f,m=d+(1<<f);d!=m;){var v=a[d]>>>15-e;n[v]=p,d++}},i.H.l=function(t,e){for(var n=i.H.m.r,r=15-e,s=0;s<t.length;s+=2){var a=t[s]<<e-t[s+1];t[s]=n[a]>>>r}},i.H.M=function(t,e,n){n=n<<(e&7);var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8},i.H.I=function(t,e,n){n=n<<(e&7);var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},i.H.e=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8)>>>(e&7)&(1<<n)-1},i.H.b=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)&(1<<n)-1},i.H.Z=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)},i.H.i=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16|t[(e>>>3)+3]<<24)>>>(e&7)},i.H.m=function(){var t=Uint16Array,e=Uint32Array;return{K:new t(16),j:new t(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new t(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new e(32),J:new t(512),_:[],h:new t(32),$:[],w:new t(32768),C:[],v:[],d:new t(32768),D:[],u:new t(512),Q:[],r:new t(32768),s:new e(286),Y:new e(30),a:new e(19),t:new e(15e3),k:new t(65536),g:new t(32768)}}(),function(){for(var t=i.H.m,e=32768,n=0;n<e;n++){var r=n;r=(r&2863311530)>>>1|(r&1431655765)<<1,r=(r&3435973836)>>>2|(r&858993459)<<2,r=(r&4042322160)>>>4|(r&252645135)<<4,r=(r&4278255360)>>>8|(r&16711935)<<8,t.r[n]=(r>>>16|r<<16)>>>17}function s(a,o,c){for(;o--!=0;)a.push(0,c)}for(var n=0;n<32;n++)t.q[n]=t.S[n]<<3|t.T[n],t.c[n]=t.p[n]<<4|t.z[n];s(t._,144,8),s(t._,112,9),s(t._,24,7),s(t._,8,8),i.H.n(t._,9),i.H.A(t._,9,t.J),i.H.l(t._,9),s(t.$,32,5),i.H.n(t.$,5),i.H.A(t.$,5,t.h),i.H.l(t.$,5),s(t.Q,19,0),s(t.C,286,0),s(t.D,30,0),s(t.v,320,0)}(),i.H.N}();nt.LosslessJpegDecode=function(){var i,t;function e(){return i[t++]}function n(){return i[t++]<<8|i[t++]}function r(u){for(var h=e(),x=[0,0,0,255],M=[],_=8,T=0;T<16;T++)M[T]=e();for(var T=0;T<16;T++)for(var E=0;E<M[T];E++){var w=s(x,0,T+1,1);x[w+3]=e()}var A=new Uint8Array(1<<_);u[h]=[new Uint8Array(x),A];for(var T=0;T<1<<_;T++){for(var y=_,S=T,I=0,L=0;x[I+3]==255&&y!=0;)L=S>>--y&1,I=x[I+L];A[T]=I}}function s(u,h,x,M){if(u[h+3]!=255)return 0;if(x==0)return h;for(var _=0;_<2;_++){u[h+_]==0&&(u[h+_]=u.length,u.push(0,0,M,255));var T=s(u,u[h+_],x-1,M+1);if(T!=0)return T}return 0}function a(u){for(var h=u.b,x=u.f;h<25&&u.a<u.d;){var M=u.data[u.a++];M==255&&!u.c&&u.a++,x=x<<8|M,h+=8}if(h<0)throw"e";u.b=h,u.f=x}function o(u,h){return h.b<u&&a(h),h.f>>(h.b-=u)&65535>>16-u}function c(u,h){var x=u[0],M=0,_=255,T=0;h.b<16&&a(h);var E=h.f>>h.b-8&255;for(M=u[1][E],_=x[M+3],h.b-=x[M+2];_==255;)T=h.f>>--h.b&1,M=x[M+T],_=x[M+3];return _}function l(u,h){return u<32768>>16-h&&(u+=-(1<<h)+1),u}function p(u,h){var x=c(u,h);if(x==0)return 0;if(x==16)return-32768;var M=o(x,h);return l(M,x)}function f(u,h,x,M,_,T){for(var E=0,w=0;w<T;w++){for(var A=w*h,y=0;y<h;y+=_){E++;for(var S=0;S<_;S++)u[A+y+S]=p(M[S],x)}if(x.e!=0&&E%x.e==0&&w!=0){for(var I=x.a,L=x.data;L[I]!=255||!(208<=L[I+1]&&L[I+1]<=215);)I--;x.a=I+2,x.f=0,x.b=0}}}function d(u,h){return l(o(u,h),u)}function m(u,h,x,M,_){for(var T=i.length-t,E=0;E<T;E+=4){var w=i[t+E];i[t+E]=i[t+E+3],i[t+E+3]=w;var w=i[t+E+1];i[t+E+1]=i[t+E+2],i[t+E+2]=w}for(var A=0;A<_;A++)for(var y=32768,S=32768,I=0;I<h;I+=2){var L=c(M,x),U=c(M,x);L!=0&&(y+=d(L,x)),U!=0&&(S+=d(U,x)),u[A*h+I]=y&65535,u[A*h+I+1]=S&65535}}function v(u){if(i=u,t=0,n()!=65496)throw"e";for(var h=[],x=0,M=0,_=0,T=[],E=[],w=[],A=0,y=0,S=0;;){var I=n();if(I==65535){t--;continue}var L=n();if(I==65475){M=e(),y=n(),S=n(),A=e();for(var U=0;U<A;U++){var z=e(),j=e(),X=e();if(X!=0)throw"e";h[z]=[U,j>>4,j&15]}}else if(I==65476)for(var q=t+L-2;t<q;)r(E);else if(I==65498){t++;for(var U=0;U<A;U++){var R=e(),H=h[R];w[H[0]]=E[e()>>>4],T[H[0]]=H.slice(1)}x=e(),t+=2;break}else I==65501?_=n():t+=L-2}var k=M>8?Uint16Array:Uint8Array,J=new k(y*S*A),Q={b:0,f:0,c:x==8,a:t,data:i,d:i.length,e:_};if(Q.c)m(J,S*A,Q,w[0],y);else{for(var vt=[],N=0,D=0,U=0;U<A;U++){var C=T[U],b=C[0],Z=C[1];b>N&&(N=b),Z>D&&(D=Z),vt.push(b*Z)}if(N!=1||D!=1){if(A!=3||vt[1]!=1||vt[2]!=1||N!=2||D!=1&&D!=2)throw"e";for(var it=[],Y=0,U=0;U<A;U++){for(var ct=0;ct<vt[U];ct++)it.push(w[U]);Y+=vt[U]}var ut=S/N,pt=y/D,F=ut*pt;f(J,ut*Y,Q,it,Y,pt),g(J,x,ut,pt,Y-2,Y,Y,M);var at=new Uint16Array(F*vt[0]);if(N==2&&D==2){for(var U=0;U<F;U++)at[4*U]=J[6*U],at[4*U+1]=J[6*U+1],at[4*U+2]=J[6*U+2],at[4*U+3]=J[6*U+3];g(at,x,ut*4,pt,0,1,1,M);for(var U=0;U<F;U++)J[6*U]=at[4*U],J[6*U+1]=at[4*U+1],J[6*U+2]=at[4*U+2],J[6*U+3]=at[4*U+3]}if(N==2&&D==1){for(var U=0;U<F;U++)at[2*U]=J[4*U],at[2*U+1]=J[4*U+1];g(at,x,ut*2,pt,0,1,1,M);for(var U=0;U<F;U++)J[4*U]=at[2*U],J[4*U+1]=at[2*U+1]}for(var rt=J.slice(0),Z=0;Z<y;Z++)if(D==2)for(var b=0;b<S;b++){var st=(Z*S+b)*A,W=((Z>>>1)*ut+(b>>>1))*Y,G=(Z&1)*2+(b&1);J[st]=rt[W+G],J[st+1]=rt[W+4],J[st+2]=rt[W+5]}else for(var b=0;b<S;b++){var st=(Z*S+b)*A,W=(Z*ut+(b>>>1))*Y,G=b&1;J[st]=rt[W+G],J[st+1]=rt[W+2],J[st+2]=rt[W+3]}}else if(f(J,S*A,Q,w,A,y),_==0)g(J,x,S,y,0,A,A,M);else for(var dt=Math.floor(_/S),Z=0;Z<y;Z+=dt){var B=J.slice(Z*S*A,(Z+dt)*S*A);g(B,x,S,dt,0,A,A,M),J.set(B,Z*S*A)}}return J}function g(u,h,x,M,_,T,E,w){for(var A=x*E,y=_;y<T;y++)u[y]+=1<<w-1;for(var S=E;S<A;S+=E)for(var y=_;y<T;y++)u[S+y]+=u[S+y-E];for(var I=1;I<M;I++){for(var L=I*A,y=_;y<T;y++)u[L+y]+=u[L+y-A];for(var S=E;S<A;S+=E)for(var y=_;y<T;y++){var U=L+S+y,z=U-A,j=u[U-E],X=0;if(h==0)X=0;else if(h==1)X=j;else if(h==2)X=u[z];else if(h==3)X=u[z-E];else if(h==4)X=j+(u[z]-u[z-E]);else if(h==5)X=j+(u[z]-u[z-E]>>>1);else if(h==6)X=u[z]+(j-u[z-E]>>>1);else if(h==7)X=j+u[z]>>>1;else throw h;u[U]+=X}}}return v}();(function(){var i=0,t=1,e=2,n=3,r=4,s=5,a=6,o=7,c=8,l=9,p=10,f=11,d=12,m=13,v=14,g=15,u=16,h=17,x=18;function M(R){var H=nt._binBE.readUshort,k={b:H(R,0),i:R[2],C:R[3],u:R[4],q:H(R,5),k:H(R,7),e:H(R,9),l:H(R,11),s:R[13],d:H(R,14)};if(k.b!=18771||k.i>1||k.q<6||k.q%6||k.e<768||k.e%24||k.l!=768||k.k<k.l||k.k%k.l||k.k-k.e>=k.l||k.s>16||k.s!=k.k/k.l||k.s!=Math.ceil(k.e/k.l)||k.d!=k.q/6||k.u!=12&&k.u!=14&&k.u!=16||k.C!=16&&k.C!=0)throw"Invalid data";if(k.i==0)throw"Not implemented. We need this file!";return k.h=k.C==16,k.m=(k.h?k.l*2/3:k.l>>>1)|0,k.A=k.m+2,k.f=64,k.g=(1<<k.u)-1,k.n=4*k.u,k}function _(R,H){var k=new Array(H.s),J=4*H.s,Q=16+J;J&12&&(Q+=16-(J&12));for(var vt=0,N=16;vt<H.s;N+=4){var D=nt._binBE.readUint(R,N);k[vt]=R.slice(Q,Q+D),k[vt].j=0,k[vt].a=0,Q+=D,vt++}if(Q!=R.length)throw"Invalid data";return k}function T(R,H){for(var k=-H[4],J=0;k<=H[4];J++,k++)R[J]=k<=-H[3]?-4:k<=-H[2]?-3:k<=-H[1]?-2:k<-H[0]?-1:k<=H[0]?0:k<H[1]?1:k<H[2]?2:k<H[3]?3:4}function E(R,H,k){var J=[H,3*H+18,5*H+67,7*H+276,k];R.o=H,R.w=(J[4]+2*H)/(2*H+1)+1|0,R.v=Math.ceil(Math.log2(R.w)),R.t=9,T(R.c,J)}function w(R){var H={c:new Int8Array(2<<R.u)};return E(H,0,R.g),H}function A(R){for(var H=[[],[],[]],k=Math.max(2,R.w+32>>>6),J=0;J<3;J++)for(var Q=0;Q<41;Q++)H[J][Q]=[k,1];return H}function y(R){for(var H=-1,k=0;!k;H++)k=R[R.j]>>>7-R.a&1,R.a++,R.a&=7,R.a||R.j++;return H}function S(R,H){var k=0,J=8-R.a;if(R.j,R.a,H){if(H>=J)do k<<=J,H-=J,k|=R[R.j]&(1<<J)-1,R.j++,J=8;while(H>=8);H&&(k<<=H,J-=H,k|=R[R.j]>>>J&(1<<H)-1),R.a=8-J}return k}function I(R,H){var k=0;if(H<R)for(;k<=14&&H<<++k<R;);return k}function L(R,H,k,J,Q,vt,N,D){D==null&&(D=0);var C=vt+1,b=C%2,Z=0,it,Y,ct=J[Q],ut=J[Q-1],pt=J[Q-2][C],F=ut[C-1],at=ut[C],rt=ut[C+1],st=ct[C-1],W=ct[C+1],G=Math.abs,dt,B,P,K;if(b&&(dt=G(rt-at),B=G(pt-at),P=G(F-at)),b){if(K=dt>P&&B<dt?pt+F:dt<P&&B<P?pt+rt:rt+F,K=K+2*at>>>2,D){ct[C]=K;return}it=H.t*H.c[R.g+at-pt]+H.c[R.g+F-at]}else K=at>F&&at>rt||at<F&&at<rt?W+st+2*at>>>2:st+W>>>1,it=H.t*H.c[R.g+at-F]+H.c[R.g+F-st];Y=G(it);var ht=y(k);if(ht<R.n-H.v-1){var gt=I(N[Y][0],N[Y][1]);Z=S(k,gt)+(ht<<gt)}else Z=S(k,H.v)+1;Z=Z&1?-1-(Z>>>1):Z>>>1,N[Y][0]+=G(Z),N[Y][1]==R.f&&(N[Y][0]>>>=1,N[Y][1]>>>=1),N[Y][1]++,K=it<0?K-Z:K+Z,R.i&&(K<0?K+=H.w:K>R.g&&(K-=H.w)),ct[C]=K>=0?Math.min(K,R.g):0}function U(R,H,k){for(var J=R[0].length,Q=H;Q<=k;Q++)R[Q][0]=R[Q-1][1],R[Q][J-1]=R[Q-1][J-2]}function z(R){U(R,o,d),U(R,e,r),U(R,g,h)}function j(R,H,k,J,Q,vt,N,D,C,b,Z,it,Y){for(var ct=0,ut=1,pt=Q<m&&Q>r;ut<R.m;)ct<R.m&&(L(R,H,k,J,Q,ct,N[C],R.h&&(pt&&b||!pt&&(Z||(ct&it)==Y))),L(R,H,k,J,vt,ct,N[C],R.h&&(!pt&&b||pt&&(Z||(ct&it)==Y))),ct+=2),ct>8&&(L(R,H,k,J,Q,ut,D[C]),L(R,H,k,J,vt,ut,D[C]),ut+=2);z(J)}function X(R,H,k,J,Q,vt){j(R,H,k,J,e,o,Q,vt,0,0,1,0,8),j(R,H,k,J,c,g,Q,vt,1,0,1,0,8),j(R,H,k,J,n,l,Q,vt,2,1,0,3,0),j(R,H,k,J,p,u,Q,vt,0,0,0,3,2),j(R,H,k,J,r,f,Q,vt,1,0,0,3,2),j(R,H,k,J,d,h,Q,vt,2,1,0,3,0)}function q(R,H,k,J,Q,vt){var N=vt.length,D=R.l;Q+1==R.s&&(D=R.e-Q*R.l);for(var C=6*R.e*J+Q*R.l,b=0;b<6;b++){for(var Z=0;Z<D;Z++){var it=vt[b%N][Z%N],Y;it==0?Y=e+(b>>>1):it==2?Y=g+(b>>>1):Y=o+b;var ct=R.h?(Z*2/3&2147483646|Z%3&1)+(Z%3>>>1):Z>>>1;H[C+Z]=k[Y][ct+1]}C+=R.e}}nt._decompressRAF=function(R,H){var k=M(R),J=_(R,k),Q=w(k),vt=new Int16Array(k.e*k.q);H==null&&(H=k.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var N=[[i,n],[t,r],[s,f],[a,d],[m,u],[v,h]],D=[],C=0;C<x;C++)D[C]=new Uint16Array(k.A);for(var b=0;b<k.s;b++){for(var Z=A(Q),it=A(Q),C=0;C<x;C++)for(var Y=0;Y<k.A;Y++)D[C][Y]=0;for(var ct=0;ct<k.d;ct++){X(k,Q,J[b],D,Z,it);for(var C=0;C<6;C++)for(var Y=0;Y<k.A;Y++)D[N[C][0]][Y]=D[N[C][1]][Y];q(k,vt,D,ct,b,H);for(var C=e;C<x;C++)if([s,a,m,v].indexOf(C)==-1)for(var Y=0;Y<k.A;Y++)D[C][Y]=0;z(D)}}return vt}})();class Ug extends Xm{constructor(t){super(t)}parse(t){const e=nt.decode(t);nt.decodeImage(t,e[0]);const n=nt.toRGBA8(e[0]);return{width:e[0].width,height:e[0].height,data:n,flipY:!0,magFilter:Pe,minFilter:un}}}function Ng(i,t,e){const n=new Ug,r=new hi(i,t,i-1,t-1);r.rotateX(-Math.PI/2);const s=new he(r);return n.load(e,a=>{a.colorSpace=ai;const o=new Ze({map:a,color:"white",side:pe,transparent:!0,alphaTest:.5});s.material=o}),s.animate=()=>{},s}function So(i,t,e){const n=new ke,r=new hi(i,t),s=new Ze({side:pe,transparent:!0,alphaTest:.5});r.rotateX(-Math.PI/2);const a=new he(r,s);a.material.depthTest=!1;const o=Ng(i,t,e);return n.add(o),n.userData.movable=!1,n.animate=()=>{},n}class Fg extends mo{constructor(t,e=1,n=16,r=2){const s=new Ee,a=n+r*2,o=new Float32Array((a*3+3)*3);s.setAttribute("position",new Ye(o,3));const c=new xr({color:65280}),l=new xr({color:16776960});super(s,[l,c]),this.audio=t,this.range=e,this.divisionsInnerAngle=n,this.divisionsOuterAngle=r,this.type="PositionalAudioHelper",this.update()}update(){const t=this.audio,e=this.range,n=this.divisionsInnerAngle,r=this.divisionsOuterAngle,s=ja.degToRad(t.panner.coneInnerAngle),a=ja.degToRad(t.panner.coneOuterAngle),o=s/2,c=a/2;let l=0,p=0,f,d;const m=this.geometry,v=m.attributes.position;m.clearGroups();function g(u,h,x,M){const _=(h-u)/x;for(v.setXYZ(l,0,0,0),p++,f=u;f<h;f+=_)d=l+p,v.setXYZ(d,Math.sin(f)*e,0,Math.cos(f)*e),v.setXYZ(d+1,Math.sin(Math.min(f+_,h))*e,0,Math.cos(Math.min(f+_,h))*e),v.setXYZ(d+2,0,0,0),p+=3;m.addGroup(l,p,M),l+=p,p=0}g(-c,-o,r,0),g(-o,o,n,1),g(o,c,r,0),v.needsUpdate=!0,s===a&&(this.material[0].visible=!1)}dispose(){this.geometry.dispose(),this.material[0].dispose(),this.material[1].dispose()}}function Og(i,t){const e=new tg;i.add(e);const n=new ig(e);n.setRefDistance(20),n.setDirectionalCone(40,50,.01),n.setLoop(!0);const r=new Fg(n);n.add(r);function s(){e.context.state==="suspended"&&e.context.resume()}window.addEventListener("click",s),new $m().load(t,function(p){n.setBuffer(p),n.setRefDistance(20),n.play()});const o=new xo(.3,.1),c=new Nc({color:16720384}),l=new he(o,c);return l.add(n),l.animate=()=>{},l}function Bg(i,t,e){const n=new bs(i,12,6),r=new Ym(t,e,20);r.castShadow=!0,r.shadow.bias=-.005;const s=new Ze({color:"#f0e785"}),a=new he(n,s);r.add(a);const o=.5,c=.01;let l=0;const p=new V;return r.animate=()=>{p.length()===0&&r.getWorldPosition(p),l+=c,r.position.x=p.x+o*Math.cos(l),r.position.z=p.z+o*Math.sin(l),r.position.y=p.y+o*Math.sin(l/2),r.rotateX(c),r.rotateZ(c)},r}function zg(){const i=new hi(2,2),t=new Uc({color:"darkgray",side:pe}),e=new he(i,t);return e.animate=()=>{},e}function kg(){const i=Bg(.1,"#f0e785",2),t=zg(),e=new ke;return e.add(i),e.add(t),i.position.set(2,0,0),t.position.set(-2.5,0,.2),t.rotateY(-Math.PI/1.5),e.animate=()=>{i.animate()},e}function Hg(){const i=new vo(.2,16),t=new Ze({color:"black",side:pe}),e=new he(i,t);return e.rotateX(-Math.PI/2),e.animate=()=>{},e}function Gg(i,t){const e=new ke,n=new ke,r=Hg();for(let s=0;s<i;s++){const a=$l(t);n.add(a)}return e.add(n),e.add(r),e.animate=()=>{n.rotation.y+=.03;for(let s=0;s<n.children.length;s++)n.children[s].position.y<=r.position.y+2?n.children[s].speed+=1e-4:n.children[s].speed+=1e-5;for(let s=0;s<n.children.length;s++){let a=n.children[s].position.x,o=n.children[s].position.y,c=n.children[s].position.z,l=r.position.x,p=r.position.y,f=r.position.z,d=a-l,m=o-p,v=c-f;const g=n.children[s].speed;if(n.children[s].position.set(a-d*g,o-m*g,c-v*g),Math.abs(n.children[s].position.x-l)<.1&&Math.abs(n.children[s].position.y-p)<.1&&Math.abs(n.children[s].position.z-f)<.1){n.remove(n.children[s]);const u=$l(t);n.add(u)}}},e}function $l(i){const t=new bs(i),e=new Nc({color:"black"}),n=new he(t,e);return n.position.set(4*Math.random()-2,3*Math.random()+1.3,4*Math.random()-2),n.speed=Math.random()*.003+.001,n}let ti,Ui,$e,jn=[];class Vg{constructor(t){let n=0-1.65+.2,r=20,s=20;ti=Tr(),$e=br(),Ui=Rr(),t.append(Ui.domElement);const a=Ar(ti,Ui.domElement);jn.push(a),Ui.setAnimationLoop(Xg);const o=new V(1,0,1);ie(ti,o);const c=Cr();$e.add(c);const l=So(r,s,"./assets/textures/JourneyScore_TIFF.tiff");jn.push(l),$e.add(l);const p=new V(0,n,0);ie(l,p);const f=new Og(ti,"./assets/sound/heartbeat.mp3");f.rotateX(-80),jn.push(f),$e.add(f);const d=new V(0,4,1);ie(f,d);const v=Yn("INTERNAL",6,"#4f3300");v.rotateY(.5),$e.add(v);const g=new V(-4.5,-1,-6.5);ie(v,g);const u=Dg(5,-5,150,7);jn.push(u),u.scale.set(.3,.3,.3),$e.add(u);const h=new V(0,n+1.5,5.5);ie(u,h);const x=kg();$e.add(x),jn.push(x);const M=new V(-4,n+1,1);ie(x,M);const _=Gg(500,.01);jn.push(_),$e.add(_);const T=new V(6,n,-1.3);ie(_,T),$e.scale.set(.25,.25,.25),window.addEventListener("resize",Wg)}}function Wg(){ti.aspect=window.innerWidth/window.innerHeight,ti.updateProjectionMatrix(),Ui.setSize(window.innerWidth,window.innerHeight)}function Xg(i){for(const t of jn)t.animate();Ui.render($e,ti)}let Gi,Ni,Ri,to=[];class qg{constructor(t){let n=0-1.65+.2,r=20,s=20;Gi=Tr(),Ri=br(),Ni=Rr(),t.append(Ni.domElement);const a=Ar(Gi,Ni.domElement);to.push(a),Ni.setAnimationLoop(jg);const o=new V(1,0,1);ie(Gi,o);const c=Cr();Ri.add(c);const l=So(r,s-s/2.5,"./assets/textures/FloorMap_v2.tiff");to.push(l),Ri.add(l);const p=new V(0,n,0);ie(l,p);const f=0,m=Yn("Fitting In",2,"black"),v=new V(4.5,f,0);ie(m,v);const u=Yn("Walking",2,"black");u.rotateY(Math.PI/2.5);const h=new V(-3.5,f,2);ie(u,h);const M=Yn("Tracing",2,"black");M.rotateY(Math.PI/1.5);const _=new V(-6.5,f,4);ie(M,_);const E=Yn("Fixed point",2,"black");E.rotateY(Math.PI/-4);const w=new V(6,f,-5.5);ie(E,w);const y=Yn("Frog leap",2,"black"),S=new V(-5,f,-3);ie(y,S);const L=Yn("Weaving",2,"black");L.rotateY(Math.PI/-8);const U=new V(0,f,1.5);ie(L,U),Ri.add(m,u,M,E,y,L),Ri.scale.set(.25,.25,.25),window.addEventListener("resize",Yg)}}function Yg(){Gi.aspect=window.innerWidth/window.innerHeight,Gi.updateProjectionMatrix(),Ni.setSize(window.innerWidth,window.innerHeight)}function jg(i){for(const t of to)t.animate();Ni.render(Ri,Gi)}function Zg(){const i=[],t=[],e=qn("./assets/textures/water.jpg"),n=qn("./assets/textures/water.jpg"),r=qn("./assets/textures/water.jpg"),s=qn("./assets/textures/water.jpg"),a=qn("./assets/textures/water.jpg"),o=qn("./assets/textures/water.jpg");i.push(e,n,r,s,a,o),i.forEach(f=>{let d=new Ze({map:f,side:pe,color:7654644,transparent:!0,opacity:.5});t.push(d)});const c=new xn(10,4,10),l=new he(c,t);let p=0;return l.animate=()=>{p+=.02,l.position.y=Math.sin(p)*.4,l.rotation.y+=5e-4},l}class Jg extends he{constructor(t,e={}){super(t),this.isWater=!0;const n=this,r=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,a=e.clipBias!==void 0?e.clipBias:0,o=e.alpha!==void 0?e.alpha:1,c=e.time!==void 0?e.time:0,l=e.waterNormals!==void 0?e.waterNormals:null,p=e.sunDirection!==void 0?e.sunDirection:new V(.70707,.70707,0),f=new Ht(e.sunColor!==void 0?e.sunColor:16777215),d=new Ht(e.waterColor!==void 0?e.waterColor:8355711),m=e.eye!==void 0?e.eye:new V(0,0,0),v=e.distortionScale!==void 0?e.distortionScale:20,g=e.side!==void 0?e.side:mn,u=e.fog!==void 0?e.fog:!1,h=new cn,x=new V,M=new V,_=new V,T=new te,E=new V(0,0,-1),w=new Qt,A=new V,y=new V,S=new Qt,I=new te,L=new Ce,U=new Dn(r,s),z={name:"MirrorShader",uniforms:Za.merge([Ct.fog,Ct.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new te},sunColor:{value:new Ht(8355711)},sunDirection:{value:new V(.70707,.70707,0)},eye:{value:new V},waterColor:{value:new Ht(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},j=new vn({name:z.name,uniforms:Za.clone(z.uniforms),vertexShader:z.vertexShader,fragmentShader:z.fragmentShader,lights:!0,side:g,fog:u});j.uniforms.mirrorSampler.value=U.texture,j.uniforms.textureMatrix.value=I,j.uniforms.alpha.value=o,j.uniforms.time.value=c,j.uniforms.normalSampler.value=l,j.uniforms.sunColor.value=f,j.uniforms.waterColor.value=d,j.uniforms.sunDirection.value=p,j.uniforms.distortionScale.value=v,j.uniforms.eye.value=m,n.material=j,n.onBeforeRender=function(X,q,R){if(M.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(R.matrixWorld),T.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(T),A.subVectors(M,_),A.dot(x)>0)return;A.reflect(x).negate(),A.add(M),T.extractRotation(R.matrixWorld),E.set(0,0,-1),E.applyMatrix4(T),E.add(_),y.subVectors(M,E),y.reflect(x).negate(),y.add(M),L.position.copy(A),L.up.set(0,1,0),L.up.applyMatrix4(T),L.up.reflect(x),L.lookAt(y),L.far=R.far,L.updateMatrixWorld(),L.projectionMatrix.copy(R.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(L.projectionMatrix),I.multiply(L.matrixWorldInverse),h.setFromNormalAndCoplanarPoint(x,M),h.applyMatrix4(L.matrixWorldInverse),w.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const H=L.projectionMatrix;S.x=(Math.sign(w.x)+H.elements[8])/H.elements[0],S.y=(Math.sign(w.y)+H.elements[9])/H.elements[5],S.z=-1,S.w=(1+H.elements[10])/H.elements[14],w.multiplyScalar(2/w.dot(S)),H.elements[2]=w.x,H.elements[6]=w.y,H.elements[10]=w.z+1-a,H.elements[14]=w.w,m.setFromMatrixPosition(R.matrixWorld);const k=X.getRenderTarget(),J=X.xr.enabled,Q=X.shadowMap.autoUpdate;n.visible=!1,X.xr.enabled=!1,X.shadowMap.autoUpdate=!1,X.setRenderTarget(U),X.state.buffers.depth.setMask(!0),X.autoClear===!1&&X.clear(),X.render(q,L),n.visible=!0,X.xr.enabled=J,X.shadowMap.autoUpdate=Q,X.setRenderTarget(k);const vt=R.viewport;vt!==void 0&&X.state.viewport(vt)}}}function $g(){const i=new xn(11,7,11);new ke;const t=new Fc().load("./assets/textures/waternormals.jpg",function(s){s.wrapS=s.wrapT=ds}),e=.7,n=1,r=new Jg(i,{side:pe,textureWidth:512,textureHeight:512,waterNormals:t,alpha:e,waterColor:16271,distortionScale:n});return r.material.uniforms,r.animate=()=>{r.material.uniforms.time.value+=.5/60,r.rotation.y+=5e-4,performance.now()*.001},r}let Vi,Fi,cr,fs=[];class Kg{constructor(t){let n=0-1.65+.2;Vi=Tr(),cr=br(),Fi=Rr(),t.append(Fi.domElement);const r=Ar(Vi,Fi.domElement);fs.push(r),Fi.setAnimationLoop(t_);const s=new V(1,0,1);ie(Vi,s);const a=Cr();cr.add(a);const o=Zg();fs.push(o),cr.add(o);const c=new V(0,n,0);ie(o,c);const l=$g();fs.push(l),cr.add(l);const p=new V(0,n+2,0);ie(l,p),window.addEventListener("resize",Qg)}}function Qg(){Vi.aspect=window.innerWidth/window.innerHeight,Vi.updateProjectionMatrix(),Fi.setSize(window.innerWidth,window.innerHeight)}function t_(i){for(const t of fs)t.animate();Fi.render(cr,Vi)}function bi(i,t,e){const n=new xn(1.8,t/2,.5),r=new Ze({color:14349807,transparent:!0,opacity:.4,side:pe}),s=new he(n,r);return new Hc().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(o){const c=new Ht(e),l=new Ze({color:c,transparent:!0,opacity:1,side:pe}),p=o.generateShapes(i,t),f=new Ts(p);f.scale(.1,.1,.1);const d=new he(f,l);d.geometry.computeBoundingBox();const m=d.geometry.boundingBox;d.position.x=-(m.max.x-m.min.x)/2,d.position.y=-(m.max.y-m.min.y)/2,s.add(d)}),s.userData.movable=!0,s.animate=()=>{},s}let ei,Kn,Zn,Ci=[];class e_{constructor(t){let n=0-1.65+.2,r=20,s=20;ei=Tr(),Zn=br(),Kn=Rr(),t.append(Kn.domElement);const a=Ar(ei,Kn.domElement);Ci.push(a),Kn.setAnimationLoop(i_);const o=new V(1,0,1);ie(ei,o);const c=Cr();Zn.add(c);const l=So(r,s-s/2.5,"./assets/textures/FloorMap_v2.tiff");Ci.push(l),Zn.add(l);const p=new V(0,n,0);ie(l,p),console.log("ground movable:",l.userData.movable);const f=0,m=bi("Fitting In",2,"black"),v=new V(3,f,-8);ie(m,v);const u=bi("Walking",2,"black"),h=new V(-12,f,-8);ie(u,h);const M=bi("Tracing",2,"black"),_=new V(-2,f,-8);ie(M,_);const E=bi("Treasure Hunt",2,"black"),w=new V(6,f,-8);ie(E,w);const y=bi("Frog leap",2,"black"),S=new V(-5,f,-8);ie(y,S);const L=bi("Weaving",2,"black"),U=new V(-9,f,-8);ie(L,U),Zn.add(m,u,M,E,y,L),Ci.push(m,u,M,E,y,L),Zn.scale.set(.25,.25,.25),window.addEventListener("resize",n_);const z=kc(Zn,ei,Kn,Ci);Ci.push(z)}}function n_(){ei.aspect=window.innerWidth/window.innerHeight,ei.updateProjectionMatrix(),Kn.setSize(window.innerWidth,window.innerHeight)}function i_(i){for(const t of Ci)t.animate();Kn.render(Zn,ei)}let ni,Qn,Pi,hr=[];class r_{constructor(t){let n=0-1.65+.2,r=20;ni=Tr(),Pi=br(),Qn=Rr(),t.append(Qn.domElement);const s=Ar(ni,Qn.domElement);hr.push(s),Qn.setAnimationLoop(a_);const a=new V(1,0,1);ie(ni,a);const o=Cr();Pi.add(o);const c=kc(Pi,ni,Qn,hr);hr.push(c);const l=Eg(.5,.5,.5);Pi.add(l),hr.push(l);const p=new V(-1,0,-1);ie(l,p),console.log("cubeWP:",p),console.log("cube position:",l.position);const f=new ag(r,r);f.position.y=n,Pi.add(f),window.addEventListener("resize",s_)}}function s_(){ni.aspect=window.innerWidth/window.innerHeight,ni.updateProjectionMatrix(),Qn.setSize(window.innerWidth,window.innerHeight)}function a_(i){for(const t of hr)t.animate();Qn.render(Pi,ni)}function o_(){l_()}o_();function ar({text:i,onClick:t}){const e=document.createElement("button");return e.textContent=i,e.style.backgroundColor="#FAEBD7",e.style.padding="40px 70px",e.style.margin="100px 20px",e.style.fontSize="30px",e.style.color="#6495ED",e.style.border="2px solid #6495ED",e.style.borderRadius="5px",e.style.cursor="pointer",e.addEventListener("click",t),e}function l_(){const i=document.querySelector("#scene-container"),t=ar({text:"Score 1",onClick:()=>{new Vg(i),t.hidden=!0,e.hidden=!0,n.hidden=!0,r.hidden=!0,s.hidden=!0}}),e=ar({text:"Score 2",onClick:()=>{new qg(i),t.hidden=!0,e.hidden=!0,n.hidden=!0,r.hidden=!0,s.hidden=!0}}),n=ar({text:"Score 3",onClick:()=>{new Kg(i),t.hidden=!0,e.hidden=!0,n.hidden=!0,r.hidden=!0,s.hidden=!0}}),r=ar({text:"Score 4",onClick:()=>{new e_(i),t.hidden=!0,e.hidden=!0,n.hidden=!0,r.hidden=!0,s.hidden=!0}}),s=ar({text:"Score 5",onClick:()=>{new r_(i),t.hidden=!0,e.hidden=!0,n.hidden=!0,r.hidden=!0,s.hidden=!0}});i.appendChild(t),i.appendChild(e),i.appendChild(n),i.appendChild(r),i.appendChild(s)}