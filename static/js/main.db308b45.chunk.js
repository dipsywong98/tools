(this.webpackJsonptools=this.webpackJsonptools||[]).push([[0],{75:function(e,t,n){},76:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=76},84:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(10),s=n.n(o),i=(n(75),n(61)),a=n(15),l=n(60),j=n(119),u=n(120),b=n(121),d=n(128),h=n(122),O=n(123),x=n(87),p=n(124),f=n(89),g=n(125),v=n(24),y=n(11),m=n(49),S=n(55),_=n.n(S),w=n(116),C=n(4);var N=function(){var e=Object(c.useState)((function(){return JSON.stringify({host:"0.peerjs.com",port:443,path:"/",secure:!0,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"}],sdpSemantics:"unified-plan"}},null,2)})),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(null),s=Object(a.a)(o,2),i=s[0],l=s[1],j=Object(c.useState)(""),u=Object(a.a)(j,2),b=u[0],d=u[1],h=Object(c.useState)(""),O=Object(a.a)(h,2),x=O[0],p=O[1],f=Object(c.useState)([]),g=Object(a.a)(f,2),v=g[0],y=g[1],S=Object(c.useState)(!1),N=Object(a.a)(S,2),k=N[0],$=N[1],P=Object(c.useState)(null),L=Object(a.a)(P,2),D=L[0],F=L[1],J=Object(c.useState)(""),T=Object(a.a)(J,2),I=T[0],E=T[1];return Object(C.jsxs)(w.a,{children:[Object(C.jsx)("h1",{children:"PeerJS Playground"}),Object(C.jsxs)("label",{children:[Object(C.jsx)("div",{children:"Option JSON"}),Object(C.jsx)("textarea",{rows:20,cols:100,value:n,onChange:function(e){var t=e.target;return r(t.value)}})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{onClick:function(){i&&!i.destroyed&&i.destroy();var e=new _.a(JSON.parse(n));l(e),e.on("open",(function(){d(e.id)})),e.on("error",console.error),e.on("connection",(function(e){F(e),e.on("open",(function(){return $(!0)})),e.on("data",(function(e){return y([].concat(Object(m.a)(v),[e]))})),e.on("close",(function(){return $(!1)})),e.on("error",console.error)}))},children:"new Peer()"}),"current peerId ",b]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{value:x,onChange:function(e){var t=e.target;return p(t.value)}})," ",Object(C.jsx)("button",{onClick:function(){if(i){var e=i.connect(x);e.on("open",(function(){return $(!0)})),e.on("data",(function(e){return y([].concat(Object(m.a)(v),[e]))})),e.on("close",(function(){return $(!1)})),e.on("error",console.error),F(e)}},children:"connect"})]}),Object(C.jsxs)("div",{children:["connected: ",k?"true":"false"]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{value:I,onChange:function(e){var t=e.target;return E(t.value)}}),Object(C.jsx)("button",{onClick:function(){i&&D&&k&&(D.send(I),E(""))},children:"send"})]}),Object(C.jsx)("div",{children:v.reverse().map((function(e,t){return Object(C.jsx)("div",{children:e},t)}))})]})},k=n(118),$=n(126),P=function(e,t){return"server {\n  if ($host = ".concat(e,") {\n    return 301 https://$host$request_uri;\n  }\n  listen 80;\n  listen [::]:80;\n  server_name ").concat(e,";\n  return 301 https://$host$request_uri;\n}\n\nserver {\n  ssl on;\n  ssl_certificate /etc/letsencrypt/live/").concat(e,"/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/").concat(e,"/privkey.pem;\n  listen 443 ssl;\n  listen [::]:443 ssl;\n  server_name ").concat(e,";\n").concat(function(e){return/^\d+$/.test(e)?"\n  location / {\n    proxy_set_header Host $http_host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_pass http://localhost:".concat(e,'/;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "upgrade";\n  }'):"\n  root ".concat(e,"\n\n  location / {\n      try_files $uri $uri/ =404\n  }")}(t),"\n}\n  ")},L=function(){var e=Object(c.useState)("www.dipsy.me"),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)("3000"),s=Object(a.a)(o,2),i=s[0],l=s[1];return Object(C.jsxs)(w.a,{style:{overflowY:"auto"},children:[Object(C.jsx)(x.a,{variant:"h3",children:"Nginx subdomain SSL config generation"}),Object(C.jsx)(x.a,{children:"This util is to generate nginx ssl config with enforced HTTPS for a subdomain, and generate cert with certbot let's encrypt"}),Object(C.jsxs)(x.a,{children:["Please refer to these articles for details: ",Object(C.jsx)(k.a,{href:"https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx",children:"Certbot official"})," ",Object(C.jsx)(k.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04",children:"Digital Ocean"})]}),Object(C.jsx)(x.a,{children:"First enter the subdomain, then enter port if you want this subdomain to proxy to a localhost server, or an absolute path if it is a static file hosting."}),Object(C.jsx)($.a,{label:"Subdomain",value:n,onChange:function(e){var t=e.target;return r(t.value)}}),Object(C.jsx)($.a,{label:"port or path",value:i,onChange:function(e){var t=e.target;return l(t.value)}}),Object(C.jsxs)(x.a,{children:["Next copy paste the below to ",Object(C.jsxs)("code",{children:["/etc/nginx/conf.d/",n,".conf"]})]}),Object(C.jsx)("pre",{children:Object(C.jsx)("code",{children:P(n,i)})}),Object(C.jsxs)(x.a,{children:["Next run ",Object(C.jsx)("code",{children:"sudo systemctl reload nginx"}),". Finally run ",Object(C.jsxs)("code",{children:["certbot certonly -d ",n]})]})]})},D=function(){return Object(C.jsx)(w.a,{children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)(v.b,{to:"peerjs",component:k.a,children:"Peer Js testing playground"})}),Object(C.jsx)("li",{children:Object(C.jsx)(v.b,{to:"Nginx-SSL",component:k.a,children:"Nginx playground"})})]})})},F=Object(l.a)({palette:{type:"dark"}}),J=Object(l.a)({palette:{type:"light"}}),T=function(){var e=Object(c.useState)(Object(j.a)("(prefers-color-scheme: dark)")),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(C.jsx)(v.a,{children:Object(C.jsxs)(u.a,{theme:Object(i.a)({},n?F:J),children:[Object(C.jsx)(b.a,{}),Object(C.jsxs)(d.a,{flexDirection:"column",style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex"},children:[Object(C.jsx)(h.a,{position:"static",children:Object(C.jsxs)(O.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(x.a,{variant:"h6",children:"Dipsy's Toolbox"}),Object(C.jsxs)(p.a,{variant:"text",color:"inherit",children:[Object(C.jsx)(v.b,{to:"/",component:f.a,children:"Home"}),Object(C.jsx)(v.b,{to:"/peerjs",component:f.a,children:"Peerjs"}),Object(C.jsx)(v.b,{to:"Nginx-SSL",component:f.a,children:"Nginx SSL"}),Object(C.jsx)(f.a,{title:"Light/Dark Mode",onClick:function(){return r(!n)},children:Object(C.jsx)(g.a,{})})]})]})}),Object(C.jsxs)(y.c,{children:[Object(C.jsx)(y.a,{path:"/peerjs",children:Object(C.jsx)(N,{})}),Object(C.jsx)(y.a,{path:"/Nginx-SSL",children:Object(C.jsx)(L,{})}),Object(C.jsx)(y.a,{path:"/",children:Object(C.jsx)(D,{})})]})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root")),I()}},[[84,1,2]]]);
//# sourceMappingURL=main.db308b45.chunk.js.map