var xe=Object.defineProperty;var Qe=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ce=(e,t,n)=>(Qe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(c){if(c.ep)return;c.ep=!0;const o=n(c);fetch(c.href,o)}})();function C(){}function Ee(e){return e()}function ue(){return Object.create(null)}function U(e){e.forEach(Ee)}function le(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ee;function de(e,t){return e===t?!0:(ee||(ee=document.createElement("a")),ee.href=t,e===ee.href)}function Ce(e){return Object.keys(e).length===0}function Ie(e,...t){if(e==null){for(const s of t)s(void 0);return C}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function I(e,t,n){e.$$.on_destroy.push(Ie(t,n))}function B(e,t,n){return e.set(n),t}function p(e,t){e.appendChild(t)}function Q(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function Me(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function A(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function M(){return O(" ")}function ne(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Be(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.data!==t&&(e.data=t)}let X;function z(e){X=e}function ke(){if(!X)throw new Error("Function called outside component initialization");return X}function Te(e){ke().$$.on_mount.push(e)}function Ge(e){ke().$$.on_destroy.push(e)}const L=[],pe=[];let j=[];const ge=[],De=Promise.resolve();let ie=!1;function Pe(){ie||(ie=!0,De.then(we))}function ae(e){j.push(e)}const oe=new Set;let H=0;function we(){if(H!==0)return;const e=X;do{try{for(;H<L.length;){const t=L[H];H++,z(t),Se(t.$$)}}catch(t){throw L.length=0,H=0,t}for(z(null),L.length=0,H=0;pe.length;)pe.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];oe.has(n)||(oe.add(n),n())}j.length=0}while(L.length);for(;ge.length;)ge.pop()();ie=!1,oe.clear(),z(e)}function Se(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}function He(e){const t=[],n=[];j.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),j=t}const te=new Set;let P;function Ze(){P={r:0,c:[],p:P}}function Le(){P.r||U(P.c),P=P.p}function S(e,t){e&&e.i&&(te.delete(e),e.i(t))}function _(e,t,n,s){if(e&&e.o){if(te.has(e))return;te.add(e),P.c.push(()=>{te.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function Ae(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function se(e){e&&e.c()}function W(e,t,n){const{fragment:s,after_update:c}=e.$$;s&&s.m(t,n),ae(()=>{const o=e.$$.on_mount.map(Ee).filter(le);e.$$.on_destroy?e.$$.on_destroy.push(...o):U(o),e.$$.on_mount=[]}),c.forEach(ae)}function Y(e,t){const n=e.$$;n.fragment!==null&&(He(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(L.push(e),Pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,s,c,o,r=null,a=[-1]){const f=X;z(e);const i=e.$$={fragment:null,ctx:[],props:o,update:C,not_equal:c,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ue(),dirty:a,skip_bound:!1,root:t.target||f.$$.root};r&&r(i.root);let b=!1;if(i.ctx=n?n(e,t.props||{},(g,y,...w)=>{const h=w.length?w[0]:y;return i.ctx&&c(i.ctx[g],i.ctx[g]=h)&&(!i.skip_bound&&i.bound[g]&&i.bound[g](h),b&&Oe(e,g)),y}):[],i.update(),b=!0,U(i.before_update),i.fragment=s?s(i.ctx):!1,t.target){if(t.hydrate){const g=Be(t.target);i.fragment&&i.fragment.l(g),g.forEach(k)}else i.fragment&&i.fragment.c();t.intro&&S(e.$$.fragment),W(e,t.target,t.anchor),we()}z(f)}class V{constructor(){ce(this,"$$");ce(this,"$$set")}$destroy(){Y(this,1),this.$destroy=C}$on(t,n){if(!le(n))return C;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const c=s.indexOf(n);c!==-1&&s.splice(c,1)}}$set(t){this.$$set&&!Ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(je);const Z=[];function $(e,t=C){let n;const s=new Set;function c(a){if(q(e,a)&&(e=a,n)){const f=!Z.length;for(const i of s)i[1](),Z.push(i,e);if(f){for(let i=0;i<Z.length;i+=2)Z[i][0](Z[i+1]);Z.length=0}}}function o(a){c(a(e))}function r(a,f=C){const i=[a,f];return s.add(i),s.size===1&&(n=t(c,o)||C),a(e),()=>{s.delete(i),s.size===0&&n&&(n(),n=null)}}return{set:c,update:o,subscribe:r}}const D=$(0),J=$(0),N=$(0),re=$(0),ve=$(!1);function _e(e){let t,n=me(e[0])+"",s;return{c(){t=A("div"),s=O(n)},m(c,o){Q(c,t,o),p(t,s)},p(c,[o]){o&1&&n!==(n=me(c[0])+"")&&R(s,n)},i:C,o:C,d(c){c&&k(t)}}}function me(e){const t=Math.floor(e/60),n=e%60;return`${t}:${n<10?"0":""}${n}`}function Ne(e,t,n){let s,c;I(e,N,f=>n(0,s=f)),I(e,ve,f=>n(1,c=f));let o;function r(){o||(o=setInterval(()=>{B(N,s+=1,s)},1e3))}function a(){clearInterval(o),o=null}return Ge(()=>{a()}),e.$$.update=()=>{e.$$.dirty&2&&(c?r():a())},[s,c]}class qe extends V{constructor(t){super(),K(this,t,Ne,_e,q,{})}}function Re(e){let t,n,s,c,o,r;return{c(){t=A("main"),n=A("div"),n.textContent="Space Trivia",s=M(),c=A("div"),c.textContent="Start",E(n,"class","title svelte-v5eox2"),E(c,"class","button"),E(t,"class","wrapper svelte-v5eox2")},m(a,f){Q(a,t,f),p(t,n),p(t,s),p(t,c),o||(r=ne(c,"click",e[0]),o=!0)},p:C,i:C,o:C,d(a){a&&k(t),o=!1,r()}}}function ze(e,t,n){let s,c,o;I(e,J,a=>n(1,s=a)),I(e,N,a=>n(2,c=a)),I(e,D,a=>n(3,o=a));function r(){B(D,o=1,o),ve.set(!0),B(N,c=0,c),B(J,s=0,s)}return[r]}class Xe extends V{constructor(t){super(),K(this,t,ze,Re,q,{})}}function he(e,t,n){const s=e.slice();return s[14]=t[n],s}function be(e){let t,n,s,c;return{c(){t=A("img"),de(t.src,n=e[14][0][0])||E(t,"src",n),E(t,"class","image svelte-1wq99lf")},m(o,r){Q(o,t,r),s||(c=ne(t,"click",function(){le(e[14][1]?e[4]:e[3])&&(e[14][1]?e[4]:e[3]).apply(this,arguments)}),s=!0)},p(o,r){e=o,r&1&&!de(t.src,n=e[14][0][0])&&E(t,"src",n)},d(o){o&&k(t),s=!1,c()}}}function Je(e){let t,n,s,c,o,r,a,f,i,b,g,y=e[1][1]+"",w,h,v,u,l,x;r=new qe({});let T=Ae(e[0]),F=[];for(let m=0;m<T.length;m+=1)F[m]=be(he(e,T,m));return{c(){t=A("main"),n=A("div"),s=A("div"),s.textContent="Back",c=M(),o=A("div"),se(r.$$.fragment),a=M(),f=A("div"),i=A("div"),i.textContent="Select:",b=M(),g=A("div"),w=O(y),h=M(),v=A("div");for(let m=0;m<F.length;m+=1)F[m].c();E(s,"class","button svelte-1wq99lf"),E(o,"class","counter svelte-1wq99lf"),E(n,"class","header svelte-1wq99lf"),E(g,"class","bigtext svelte-1wq99lf"),E(f,"class","prompt svelte-1wq99lf"),E(v,"class","grid svelte-1wq99lf"),E(t,"class","wrapper svelte-1wq99lf")},m(m,G){Q(m,t,G),p(t,n),p(n,s),p(n,c),p(n,o),W(r,o,null),p(t,a),p(t,f),p(f,i),p(f,b),p(f,g),p(g,w),p(t,h),p(t,v);for(let d=0;d<F.length;d+=1)F[d]&&F[d].m(v,null);u=!0,l||(x=ne(s,"click",e[5]),l=!0)},p(m,[G]){if((!u||G&2)&&y!==(y=m[1][1]+"")&&R(w,y),G&25){T=Ae(m[0]);let d;for(d=0;d<T.length;d+=1){const fe=he(m,T,d);F[d]?F[d].p(fe,G):(F[d]=be(fe),F[d].c(),F[d].m(v,null))}for(;d<F.length;d+=1)F[d].d(1);F.length=T.length}},i(m){u||(S(r.$$.fragment,m),u=!0)},o(m){_(r.$$.fragment,m),u=!1},d(m){m&&k(t),Y(r),Me(F,m),l=!1,x()}}}function Ue(e,t,n){let s,c,o,r;I(e,re,l=>n(8,s=l)),I(e,D,l=>n(2,c=l)),I(e,N,l=>n(9,o=l)),I(e,J,l=>n(10,r=l));let a=0,f=0,i=[],b=["none"],g=[["https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/GSFC_20171208_Archive_e001982~orig.jpg?w=1536&h=864&fit=clip&crop=faces%2Cfocalpoint","Moon","Planets",!1],["https://science.nasa.gov/wp-content/uploads/2016/05/venus2-jpg.webp?w=4096&format=png&crop=1","Venus","Planets",!1],["https://science.nasa.gov/wp-content/uploads/2023/04/hubble-mars-litho-image-jpg.webp?w=4096&format=png&crop=1","Mars","Planets",!1],["data:image/jpeg;base64,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","Mercury","Planets",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs.nasa.gov%2Fdscovr%2Fwp-content%2Fuploads%2Fsites%2F244%2F2015%2F02%2Fearth-fulldisc.jpg&f=1&nofb=1&ipt=ee44b16213b62ff1adb83421834cf1b221478d2146cea6a9b4c90d9cf0393ea2&ipo=images","Earth","Planets",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnasa3d.arc.nasa.gov%2Fshared_assets%2Fmodels%2Fjupiter-model%2Fimage1.jpg&f=1&nofb=1&ipt=3a98ad03e408e14e7bb7cdbb9217fe8b1efd3c5926bc4e8c1bae89faa3f2f828&ipo=images","Jupiter","Planets",!1],["https://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg","Saturn","Planets",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsolarsystem.nasa.gov%2Fsystem%2Fdownloadable_items%2F786_PIA18182.jpg&f=1&nofb=1&ipt=6cdc4f4be9777a51fe43e4d7d133c3bd1a35ce540f5c5017c02dd8ebf2bc2622&ipo=images","Uranus","Planets",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsolarsystem.nasa.gov%2Fsystem%2Fresources%2Fdetail_files%2F611_PIA01492.jpg&f=1&nofb=1&ipt=18754b0334945907a37001125f00007fda3c2914ecc2ed38b37986eb4479b36c&ipo=images","Neptune","Planets",!1],["https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.nasa.gov%2Fpluto%2Fwp-content%2Fuploads%2Fsites%2F253%2F2015%2F10%2Fpluto-heart.png&f=1&nofb=1&ipt=a1af5724c26d1e03c28c250e3eb2cc1038e71a690cc601942e778d061f38846b&ipo=images","Pluto","Planets",!1],["https://www.spacex.com/static/images/falcon-9/F9_8.jpg","Falcon 9","Rockets",!1],["https://www.spacex.com/static/images/falcon-heavy/FH_9.jpg","Falcon Heavy","Rockets",!1],["https://www.spacex.com/vehicles/starship/assets/images/Starhip_website-crop20230126_dji_0199_01.jpg","Starship","Rockets",!1],["https://www.spacex.com/static/images/dragon/parachute.webp","Dragon","Rockets",!1],["https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frayotek.com%2Fwpnews%2Fwp-content%2Fuploads%2F2014%2F12%2FOrion-Lift-Off.jpg&f=1&nofb=1&ipt=d08af698da51af91c8180f6d65cb5720819068f7c777ceb48c0d6940a5ac3b10&ipo=images","Delta 4 Heavy","Rockets",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nasaspaceflight.com%2Fwp-content%2Fuploads%2F2023%2F11%2FTenacity1-1170x878.png&f=1&nofb=1&ipt=83a6292945f77555a4c9ea21fa25fc9d10a0841e4791ec4764d7f5c656f5f236&ipo=images","Dream chaser","Rockets",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.riqmSUgWX6xAze7qFG1PswHaJc%26pid%3DApi&f=1&ipt=f2b7209e5cbee871e6d227b531e073971af9f5a853476cd1c6d0fe8741e3327f&ipo=images","Saturn 5","Rockets",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.k0XklZL8S7VcGHe36JuPkAHaHi%26pid%3DApi&f=1&ipt=fb22b3b0093f1dc12579c8217ae5f0dec13ff4f5c4fabb8c7d5550b7a5ac37a8&ipo=images","Claude Nicollier","Astronauts",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.s-EYonDtiWC87S-r55rRNAHaLH%26pid%3DApi&f=1&ipt=51f8dab10592643e7eb936f7922b2c95c338c6456dcaf24caa9a66fe6a19d93e&ipo=images","Thomas Pesquet","Astronauts",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EZgTVtFaKvxrP8HJ-LClKQHaJQ%26pid%3DApi&f=1&ipt=cde30c18b6cd294483ec9a674c26dda71cd2063af4595ffff731b881cd32137b&ipo=images","Samantha Cristoferetti","Astronauts",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pvU_HGLLPkuT_j6C7Bx5PwHaJW%26pid%3DApi&f=1&ipt=05ebaa294306fc98e7450895706f102352a121e2ec937ed910584b94aace6a79&ipo=images","Urlich Walter","Astronauts",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FVKA2XKU2B73ak27PmEaGVo.jpg&f=1&nofb=1&ipt=8871105bb33957bdb4571fa16d8ee5db06b9dffe96dd7ee3812d76867716c043&ipo=images","Cape Canavral","Site",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rocketlabusa.com%2Fassets%2FUploads%2F_resampled%2FScaleHeightWyIxMDUwIl0%2FPadB-Aerial-Low-019.jpg&f=1&nofb=1&ipt=df4b734a72b8ffd8bcb70f23215e16cad8a8c4c869ab1c02c943e4794f297c72&ipo=images","Māhia Peninsula","Site",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wfY_5trAAjF2P6FcE-jScAHaEK%26pid%3DApi&f=1&ipt=9dd5c688cb27e2d26eae5c3a1b313e1787e18d7b4872adf73543287eb822e5f1&ipo=images","Guiana Space center","Site",!1],["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9VfadX3ymTS4zp7OPOthywHaEm%26pid%3DApi&f=1&ipt=4eca0624a4be11cc6f295f1db73991afba407702f894e3486b2b13f5927934ae&ipo=images","Starbase","Site",!1]];function y(){let l=g.filter(d=>!d[3]);if(l.length===0){v();return}let x=Math.floor(Math.random()*l.length);n(1,b=l[x]),n(1,b[3]=!0,b);let T=b[2],F=g.filter(d=>d[2]===T&&d!==b);F.sort(()=>Math.random()-.5),n(0,i=[null,null,null,null]);let m=Math.floor(Math.random()*4);n(0,i[m]=[b,!0],i);let G=0;for(let d=0;d<4;d++)i[d]===null&&G<F.length&&(n(0,i[d]=[F[G],!1],i),G++);i.length<4&&console.log("ran out of questions for "+{category:T})}Te(()=>{y()});function w(){a+=10,f+=1,y()}function h(){y()}function v(){B(J,r+=a+o,r),B(N,o=0,o),B(D,c=2,c),B(re,s=f,s)}return[i,b,c,w,h,()=>{B(D,c=0,c)}]}class We extends V{constructor(t){super(),K(this,t,Ue,Je,q,{})}}function Ye(e){let t,n,s,c=Fe(e[0])+"",o,r,a,f=ye(e[0])+"",i,b,g,y,w,h,v,u;return{c(){t=A("main"),n=A("div"),s=A("h1"),o=O(c),r=M(),a=A("div"),i=O(f),b=M(),g=A("div"),y=O(e[1]),w=M(),h=A("div"),h.textContent="Exit",E(a,"class","bigtext svelte-1sh712h"),E(g,"class","errortext svelte-1sh712h"),E(h,"class","button"),E(n,"class","wrapper svelte-1sh712h")},m(l,x){Q(l,t,x),p(t,n),p(n,s),p(s,o),p(n,r),p(n,a),p(a,i),p(n,b),p(n,g),p(g,y),p(n,w),p(n,h),v||(u=ne(h,"click",e[3]),v=!0)},p(l,[x]){x&1&&c!==(c=Fe(l[0])+"")&&R(o,c),x&1&&f!==(f=ye(l[0])+"")&&R(i,f),x&2&&R(y,l[1])},i:C,o:C,d(l){l&&k(t),v=!1,u()}}}function ye(e){const t=Math.floor(e/60),n=e%60;return`${t}:${n<10?"0":""}${n}`}function Fe(e){return e=e/16,e<2?"That was speedy!":e<4?"Well done.":e<8?"Not bad :)":"My grandpa was faster..."}function Ke(e,t,n){let s,c,o;return I(e,J,a=>n(0,s=a)),I(e,re,a=>n(1,c=a)),I(e,D,a=>n(2,o=a)),[s,c,o,()=>B(D,o=0,o)]}class Ve extends V{constructor(t){super(),K(this,t,Ke,Ye,q,{})}}function $e(e){let t,n;return t=new Ve({}),{c(){se(t.$$.fragment)},m(s,c){W(t,s,c),n=!0},i(s){n||(S(t.$$.fragment,s),n=!0)},o(s){_(t.$$.fragment,s),n=!1},d(s){Y(t,s)}}}function et(e){let t,n;return t=new We({}),{c(){se(t.$$.fragment)},m(s,c){W(t,s,c),n=!0},i(s){n||(S(t.$$.fragment,s),n=!0)},o(s){_(t.$$.fragment,s),n=!1},d(s){Y(t,s)}}}function tt(e){let t,n;return t=new Xe({}),{c(){se(t.$$.fragment)},m(s,c){W(t,s,c),n=!0},i(s){n||(S(t.$$.fragment,s),n=!0)},o(s){_(t.$$.fragment,s),n=!1},d(s){Y(t,s)}}}function nt(e){let t,n,s,c,o,r,a,f,i,b,g,y;const w=[tt,et,$e],h=[];function v(u,l){return u[0]==0?0:u[0]==1?1:2}return n=v(e),s=h[n]=w[n](e),{c(){t=A("main"),s.c(),c=M(),o=A("div"),o.textContent="v0.3",r=M(),a=A("div"),a.textContent="Made with 🤍 by Matias",f=M(),i=A("div"),i.textContent="Images taken from NASA | SpaceX",b=M(),g=A("div"),g.textContent="If images are slow to load, run through game once to preload",E(t,"class","main svelte-1prowrh"),E(o,"class","versiontext svelte-1prowrh")},m(u,l){Q(u,t,l),h[n].m(t,null),Q(u,c,l),Q(u,o,l),Q(u,r,l),Q(u,a,l),Q(u,f,l),Q(u,i,l),Q(u,b,l),Q(u,g,l),y=!0},p(u,[l]){let x=n;n=v(u),n!==x&&(Ze(),_(h[x],1,1,()=>{h[x]=null}),Le(),s=h[n],s||(s=h[n]=w[n](u),s.c()),S(s,1),s.m(t,null))},i(u){y||(S(s),y=!0)},o(u){_(s),y=!1},d(u){u&&(k(t),k(c),k(o),k(r),k(a),k(f),k(i),k(b),k(g)),h[n].d()}}}function st(e,t,n){let s;return I(e,D,c=>n(0,s=c)),[s]}class ct extends V{constructor(t){super(),K(this,t,st,nt,q,{})}}new ct({target:document.getElementById("app")});
