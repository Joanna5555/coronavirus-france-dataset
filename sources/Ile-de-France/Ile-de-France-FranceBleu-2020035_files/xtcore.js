/***@licence*Copyright2015ATInternet,AllRightsReserved.*ATInternetTag4.7.0*/window.Xtconf={xt1:'.francebleu.fr',xtLogDom:'.xiti.com/hit.xiti',xtfirst:true,xt2:'1',xt3:365,xt4sec:'20',xt4rss:'20',xt4epr:'20',xt4erec:'20',xt4adi:'20',xt4adc:'20',xt4al:'20',xtsds:'https://logs1286',xtsd:'http://logc286',xtsts:0,xtsite:function(x){return x},xtscript:'',xtpreview:false,xtnocookies:false,xtcode:'',xt46:'1',xt50:'1',xt48:'',xt54:false,xt58:false,xtdocl:false,xttredir:500,xtkwv:'xtmc',xtkwp:'xtnp',idcExp:397,idcType:'fixed',weboAccountId:0,tvTracking:{active:false,url:'',duration:30,priority:1,lifetime:30,domain:null,path:null,retention:5}};
window.ATInternet=window.ATInternet||{};
window.ATInternet.Utils=new function(){var b=this;b.getCookie=function(b){return b=(b=RegExp("(?:^| )"+b+"=([^;]+)").exec(document.cookie)||null)&&1<b.length?b[1]:null};b.setCookie=function(b,p,g,c,l){var q=new Date;q.setTime(q.getTime()+1E3*g);g="expires="+q.toGMTString();document.cookie=b+"="+p+";"+g+";path="+(l?l:"/")+";domain="+(c?c:"")};b.serialJSON=function(k,p){var g=typeof k;if("object"!==g||null===k)return"string"===g&&(k=p?encodeURIComponent('"'+k+'"'):'"'+k+'"'),String(k);var c,l,q=[],
u=k&&k.constructor===Array;for(c in k)k.hasOwnProperty(c)&&(l=k[c],g=typeof l,"function"!==g&&("string"===g?l=p?encodeURIComponent('"'+l.replace(/[^\\]"/g,'\\"')+'"'):'"'+l.replace(/[^\\]"/g,'\\"')+'"':"object"===g&&null!==l&&(l=b.serialJSON(l,p)),q.push((u?"":p?encodeURIComponent('"'+c+'":'):'"'+c+'":')+String(l))));return(u?"[":"{")+String(q)+(u?"]":"}")};b.parseJSON=function(b){return null===b?b:"string"===typeof b?(new Function("return "+b))():!1}};
window.Xtcore=function(){function b(d){return"undefined"!==typeof d}function k(d){return ATInternet.Utils.serialJSON(d,!0)}function p(d){return d.replace(/%3C/g,"<").replace(/%3E/g,">").replace(/[<>]/g,"")}function g(d,a,j,e,f){a=0===f?a:encodeURIComponent(a);A||(r.cookie=d+"="+a+";expires="+j.toGMTString()+";path=/"+e)}function c(d,m,j){var e;try{e=$.location.href}catch(f){e=a.location.href}m=null===m||!b(m)?p(e.toLowerCase().replace(/%3d/g,"=")):m;if(0<m.indexOf(d+"=")){m=m.substr(1);d=m.substr(m.indexOf(d+
"="));if(2!=j){if(1!=j)try{d=decodeURIComponent(d)}catch(g){d=unescape(d)}if(m=d.match(/(\[[^\]]*\])/g)){e="";for(var c=0,T=m.length;c<T;c++)e=m[c].substring(1,m[c].length-1),d=d.replace(e,encodeURIComponent(e))}}m=d.indexOf("#");e=d.search(/&.[^&]+=/gi);e=-1==e?-1==m?d.length:m:0<m&&m<e?m:e;return 1==j?decodeURIComponent(d.substring(d.indexOf("=")+1,e)):2==j?d.substring(d.indexOf("=")+1,e):d.substring(d.indexOf("=")+1,e).replace("&","%26")}return null}function l(d,a,j,e){if((0===xa||3==xa||"C"!=
d)&&"P"!=d)cb&&"0"==v&&"F"==d?(B=B.replace("&p="+c("p",B,2),""),B=B.replace("&s2="+c("s2",B),""),AT_hit.isPreviewOrPrerendering()||AT_hit.sendTag(d,null,null,a),cb=!1):AT_hit.sendTag(d,a);null!==j&&(b(j)&&"M"!=d)&&(""===e||null===e?r.location=j:window.open(j,"xfen","").focus())}function q(d){d-=100*Math.floor(d/100);return 10>d?"0"+d:d}function u(d){return Math.floor(Math.random()*Math.pow(10,d))}var D=this;D.sentHits=[];var h=Xtconf.xt1,aa=Xtconf.xtscript,n=window.xtLogDom=Xtconf.xtLogDom,z=Xtconf.xtpreview,
db=Xtconf.xtfirst,A=Xtconf.xtnocookies,eb=Xtconf.xtcode,v=Xtconf.xt46,M=Xtconf.xt50,H=Xtconf.xt48,s=Xtconf.xt54,L=Xtconf.xt58,C=Xtconf.xtdocl,ba=Xtconf.xt2,yb=Xtconf.xt3;window.xttredir=Xtconf.xttredir;var fb=Xtconf.xtkwv,gb=Xtconf.xtkwp,ya=[],I=[];I.sec=Xtconf.xt4sec;I.rss=Xtconf.xt4rss;I.epr=Xtconf.xt4epr;I.erec=Xtconf.xt4erec;I.adi=Xtconf.xt4adi;I.adc=Xtconf.xt4adc;I.al=Xtconf.xt4al;I.es=Xtconf.xt4epr;I.ad=Xtconf.xt4adi;var za=[],cb=!0,U=!1,Aa=null,a=window.xw=window,r=window.xd=document,x=navigator,
zb=window.xtv=a.xtczv?"4.7.0-"+a.xtczv:"4.7.0",h=window.xt1=a.xtdmc?";domain="+a.xtdmc:""!==h?";domain="+h:"",$=a.xtnv?a.xtnv:r,Ab=window.xt7=a.xtsdi?a.xtsdi:a.xtsd?a.xtsd+n:("https:"===r.location.protocol?Xtconf.xtsds:Xtconf.xtsd)+n,ia=a.xtsts?a.xtsts:Xtconf.xtsts,ja="";if(s){var Ba="";try{Ba=$.location.href}catch(Yb){Ba=a.location.href}var Bb=/#.*/,Ca=null;try{Ca=Ba.match(Bb)[0]}catch(Zb){Ca=null}ja=(ja=Ca)?"&sta="+encodeURIComponent(p(ja)):""}var hb=a.xtcustom?k(a.xtcustom):"",N=
window.xt8=a.xtsite?a.xtsite:0,Cb=window.xt9=a.xtn2?"&s2="+a.xtn2:"",Db=window.xt8b=(0===N?"":"s="+N)+(0===ia?"":0===N?"sts="+ia:"&sts="+ia),ka=window.xtp=a.xtpage?a.xtpage:"",ib=a.xto_force?a.xto_force.toLowerCase():null,O="redirect"===N,Eb=a.xtdi?"&di="+a.xtdi:"",Fb=a.xtidp?"&idpays="+a.xtidp:"",Gb=a.xtidprov?"&idprov="+a.xtidprov:"",w=a.xtparam?a.xtparam:"",v=a.xtnopage&&"1"===a.xtnopage?"0":v,M=a.xtergo&&"0"===a.xtergo?"0":M,xa=a.scriptOnClickZone&&"1"===M?a.scriptOnClickZone:0,Hb=""!==eb?"&code="+
eb:"",Da=[],la=[],ca=[],ma=[],Ea=[],R=[];window.xt44=a.xtprod_load?"&pdtl="+a.xtprod_load:"";a.addEventListener?a.addEventListener("unload",function(){},!1):a.attachEvent&&a.attachEvent("onunload",function(){});r.addEventListener?(r.addEventListener("keydown",function(){U=!0},!1),r.addEventListener("keyup",function(){U=!1},!1)):r.attachEvent&&(r.attachEvent("onkeydown",function(){U=!0}),r.attachEvent("onkeyup",function(){U=!1}));var Ib=a.roimt&&0>w.indexOf("&roimt",0)?"&roimt="+a.roimt:"",Jb=0>w.indexOf("&mc=",
0)?a.xtmc?"&mc="+a.xtmc:c(fb)?"&mc="+c(fb):c("xtmc")?"&mc="+c("xtmc"):"":"",Kb=c("xtcr")?"&mcrg="+c("xtcr"):"",Lb=a.xtac&&0>w.indexOf("&ac=",0)?"&ac="+a.xtac:"",Mb=a.xtat&&0>w.indexOf("&at=",0)?"&at="+a.xtat:"",jb=a.xtan&&0>w.indexOf("&an=",0)?"&an="+a.xtan:"",Nb=0>w.indexOf("&np=",0)?a.xtnp?"&np="+a.xtnp:c(gb)?"&np="+c(gb):c("xtnp")?"&np="+c("xtnp"):"":"",Ob=a.xtprm&&0>w.indexOf("&x",0)?a.xtprm:"",w=w+(Ib+Jb+Kb+Lb+(""!==jb?jb:Mb)+Nb+Ob+ja),Fa="";try{Fa=top.document.referrer}catch($b){try{Fa=$.referrer}catch(ac){}}var na=
screen,P=window.xt21=new Date,kb=P.getTime()/36E5,t=window.xtf1=function(d,a){if(A)return null;a=null!==a&&b(a)?a:"0";var j=RegExp("(?:^| )"+d+"=([^;]+)").exec(r.cookie)||null;if(j&&(j=p(j[1]),"1"!=a))try{j=decodeURIComponent(j)}catch(e){j=unescape(j)}return j};window.xt_addchain=function(d,a){var j=a?a:"abmv",e=!ya[j]?0:ya[j];e++;w+="&"+j+""+e+"="+d;ya[j]=e};"function"===typeof xt_adch&&xt_adch();window.wck=g;window.xtf3=c;window.xt_mvt=function(d,a,j,e,f){if(e)for(var b=1;b<e.length+1;b++)j+="&"+
(f?f:"abmv")+b+"="+e[b-1];l("","&p="+d+"&s2="+a+"&abmvc="+j+"&type=mvt")};window.xt_med=function(d,a,j,e,f,g,c,T){e="F"==d&&(null===e||!b(e))?c?"&stc="+k(c):"":"M"==d?"&a="+e+"&m1="+f+"&m2="+g+"&m3="+c+"&m4="+T:"&clic="+e+(c?"&stc="+k(c):"");l(d,"&s2="+a+"&p="+j+e,f,g)};if(db=window.xtfirst=-1!=x.userAgent.indexOf("Safari")&&0>x.userAgent.indexOf("Chrome")||-1!=x.userAgent.indexOf("iPhone")||-1!=x.userAgent.indexOf("iPod")||-1!=x.userAgent.indexOf("iPad")||db||a.xtidc||A){var oa=a.xtidc,Ga=t("xtidc"),
V="",V=oa?oa:Ga?Ga:(new Date).getTime()+""+u(7);if("relative"==Xtconf.idcType||oa||!Ga&&!oa){var Ha=new Date;Ha.setTime(Ha.getTime()+864E5*Xtconf.idcExp);g("xtidc",V,Ha,h,1)}var lb=t("xtidc"),V=V+(!a.xtidc&&(null===lb||lb!=V)?"-NO":"")}window.xt_ad=function(d,m,j,e){l("AT","&atc="+d+"&type=AT&patc="+a.xtpage+"&s2atc="+a.xtn2+(e?"&stc="+k(e):""),m,j)};window.xt_adi=function(d,a,j){l("AT","&ati="+d+"&type=AT",a,j)};window.xt_adc=function(d,m,j,e,f){l("AT","&atc="+m+"&type=AT&patc="+a.xtpage+"&s2atc="+
a.xtn2+(f?"&stc="+k(f):""));return AT_click.do_navig(d,j,e?"_blank":null,!0)};window.xt_click=function(d,a,j,e,f,c,g,T){f=("F"==a&&(null===f||!b(f))?"":"&clic="+f)+(T?"&stc="+k(T):"");l(a,"&s2="+j+"&p="+e+f);return AT_click.do_navig(d,c,g?"_blank":null,!0)};window.xt_form=function(d,a,j,e,f,c,g){f=("F"==a&&(null===f||!b(f))?"":"&clic="+f)+(g?"&stc="+k(g):"");l(a,"&s2="+j+"&p="+e+f);return AT_click.do_submit(d,!0,c)};window.xt_rm=function(d,m,j,e,f,b,g,c,k,q,n,h,z,p){l(d,"&p="+j+"&s2="+m+"&type="+
d+"&a="+e+"&m5="+n+"&m6="+h+(null!==f&&"0"!=f?"&"+f:"")+(null!==g&&"pause"!=e&&"stop"!=e?"&m1="+g+"&"+c+"&m3="+k+"&m4="+q+"&m7="+z+"&m8="+p+"&prich="+a.xtpage+"&s2rich="+a.xtn2:"")+(null!==b&&"0"!=b&&null!==g?"&rfsh="+b:""));f=new Date;if(null!==b&&"0"!=b&&("play"==e||"play&buf=1"==e||"refresh"==e)){R[d]&&18E5<f.getTime()-R[d]&&(ca[d]=0);if(("play"==e||"play&buf=1"==e)&&!ca[d])ca[d]=f.getTime()/1E3,ma[d]=parseInt(g),e=Math.floor(b),e=1500<e?1500:5>e?5:e,Da[d]=e,la[d]=e,R[d]=!1;else if("refresh"==
e&&("live"==h||!ma[d]||300<ma[d]&&2>100*Da[d]/ma[d]))e=R[d]?Ea[d]:f.getTime()/1E3-ca[d],5>100*la[d]/(e+30)&&(la[d]=5*((e+30)/100)),R[d]&&(R[d]=!1,ca[d]=f.getTime()/1E3-Ea[d]),Ea[d]=e;za[d]=a.setTimeout("xt_rm('"+d+"','"+m+"','"+j+"','refresh','0','"+b+"',null,'"+c+"','"+k+"','"+q+"','"+n+"','"+h+"')",1E3*la[d])}else if(("pause"==e||"stop"==e)&&null!==za)a.clearTimeout(za[d]),"stop"==e?Da[d]=0:R[d]=f.getTime()};var Ia=window.xtidpg=q(P.getHours())+""+q(P.getMinutes())+""+q(P.getSeconds())+""+u(7),
y=0,mb=0;window.xt16="";window.xt_addProduct=function(d,m,j,e,f,b){y++;a.xt16+="&pdt"+y+"=";a.xt16+=d?d+"::":"";a.xt16+=m?m:"";a.xt16+=j?"&qte"+y+"="+j:"";a.xt16+=e?"&mt"+y+"="+e:"";a.xt16+=f?"&dsc"+y+"="+f:"";a.xt16+=b?"&pcode"+y+"="+b:""};window.xt_rd=u;window.xt_addProduct_v2=function(d,m,j,e,f,b,g,c,k){y++;a.xt16+="&pdt"+y+"=";a.xt16+=d?d+"::":"";a.xt16+=m?m:"";a.xt16+=j?"&qte"+y+"="+j:"";a.xt16+=e?"&mt"+y+"="+e:"";a.xt16+=f?"&mtht"+y+"="+f:"";a.xt16+=b?"&dsc"+y+"="+b:"";a.xt16+=g?"&dscht"+y+
"="+g:"";a.xt16+=k?"&roimt"+y+"="+k:"";a.xt16+=c?"&pcode"+y+"="+c:""};window.xt_addProduct_load=function(d,m,j){m&&(mb++,a.xt44+=1==mb?"&pdtl=":"|",a.xt44+=d?d+"::":"",a.xt44+=m,a.xt44+=j?";"+j:"")};"function"==typeof xt_cart?xt_cart():a.xt16="";window.xt_ParseUrl=function(d,a,j){AT_hit.sendTag(j?"F":"old",a)};window.xt_ParseUrl3=function(d,a,j,e,f){AT_hit.sendTag("&ati="==f?"AT":"PDT",a,null,"&type="+("&ati="==f?"AT":"PDT"))};window.AT_click={id:0,objs:[],elem:function(d,a,j,e,f,g,c,q){var n={};
n.urlDest=f;n.type=d;n.n2=a;n.label=j;n.typeClick=e;n.target=g;n.submit=!1!==f;n.redir=!b(c)?!0:c;n.xtcust=b(q)?"&stc="+k(q):"";return n},addListener:function(d,a,j){window.addEventListener?d.addEventListener(a,j,!1):window.attachEvent&&d.attachEvent("on"+a,j)},tag:function(a,m,j,e,f,b,g,c,n){if(a&&"function"==typeof a.setAttribute)this.addElem(a,m,j,e,f,b,g,c,n);else if("object"==typeof a)for(var k in a)a.hasOwnProperty(k)&&"function"==typeof a[k].setAttribute&&this.addElem(a[k],m,j,e,f,b,g,c,n)},
addElem:function(a,m,b,e,f,g,c,k,n){this.id++;a.setAttribute("data-xtclickid",this.id);this.objs[this.id]=this.elem(m,b,e,f,g,c,k,n);"FORM"!=a.nodeName?this.addListener(a,"click",this.on_click_submit):this.addListener(a,"submit",this.on_click_submit)},on_click_submit:function(a){try{var m=a.target||a.srcElement,b=m.getAttribute("data-xtclickid"),e={},f="",g=a.defaultPrevented,c=window.AT_click;if(!b)for(var k=m.parentNode;k;){if(k.getAttribute("data-xtclickid")){b=k.getAttribute("data-xtclickid");
break}k=k.parentNode}b&&(e=c.objs[b],"AT"!=e.type?f+="&p="+e.label+("C"==e.type?"&clic="+e.typeClick:""):"AT"==e.type&&(f+="&type=AT&atc="+e.label),f+=e.xtcust,l(e.type,"&s2="+e.n2+f),!g&&e.redir&&(a.preventDefault(),"FORM"!=m.nodeName?c.do_navig(m,e.urlDest,e.target):c.do_submit(m,null,e.submit)))}catch(n){}},do_navig:function(d,b,j,e){var f=null;if("A"!=d.nodeName)for(var c=d.parentNode;c;){if("A"==c.nodeName){f=c;break}c=c.parentNode}else f=d;if(f){if(f.target=j||d.target||"_self",f.href=b||d.href||
f.href,!e||e&&!U)if(d=f.href.split('"').join('\\"'),0>f.href.indexOf("mailto:"))if("_self"==f.target.toLowerCase()){if(setTimeout('self.location.href="'+d+'"',a.xttredir),e)return!1}else if("_top"==f.target.toLowerCase()){if(setTimeout('top.location.href="'+d+'"',a.xttredir),e)return!1}else if("_parent"==f.target.toLowerCase()){if(setTimeout('parent.location.href="'+d+'"',a.xttredir),e)return!1}else return!0;else if(setTimeout('AT_click.mail_to("'+d+'");',a.xttredir),e)return!1}else if(b||d.href)if(b=
b?b:d.href,0>b.indexOf("mailto:"))if("_blank"==j)setTimeout('(xw.open("'+b.split('"').join('\\"')+'","_blank")).focus();',1);else{if(setTimeout('self.location.href="'+b.split('"').join('\\"')+'"',a.xttredir),e)return!1}else if(setTimeout('AT_click.mail_to("'+b.split('"').join('\\"')+'");',a.xttredir),e)return!1;if(e)return U=!1,!0},do_submit:function(a,b,c){if(c&&(setTimeout(function(){a.submit()},500),b&&c))return!1},mail_to:function(a){window.location=a}};window.AT_hit={first:!0,referrer:("acc_dir"==
c("xtref")?"":null!==c("xtref")?c("xtref"):"acc_dir"==t("xtref")?"":t("xtref")||Fa.replace(/[<>]/g,"")||"").replace(/[<>]/g,"").substring(0,1600),parse:function(a,b,j,e){var f=[""];if(1600>=b.length)f[0]=b;else{a=AT_hit.first&&"F"==a?Ia:Ia.substring(0,6)+u(8);var g="",k="",n,q={};n=[];var h=0;0<=b.indexOf("&ref=")&&(g=b.substring(b.indexOf("&ref=")),b=b.replace(g,""));if(e)for(var z in e)if(e.hasOwnProperty(z)&&0<=b.indexOf("&"+z+"=")&&1600<(k=c(z,b,2)).length)b=b.replace("&"+z+"="+k,""),n=RegExp("["+
e[z]+"]","gi"),q[z]=k.replace(/&/g,"%26").split(n);n=RegExp("["+j+"]","gi");n=b.split(n);for(var l in n)n.hasOwnProperty(l)&&(1600>=f[h].length+n[l].length+1?f[h]+=""!==n[l]?"&"+n[l]:"":(f.push(""),h++,f[h]=1600>n[l].length?f[h]+(""!==n[l]?"&"+n[l]:""):f[h]+("&mherr=1&"+n[l].substring(0,1600))));for(var p in q)if(q.hasOwnProperty(p)){b="&"+p+"=";j=!1;z=q[p].length;for(l=0;l<z;l++)1600>=f[h].length+q[p][l].length+1?(j||(f[h]+=b,j=!0),f[h]+=""!==q[p][l]?q[p][l]+("stc"===p&&z-1===l?"":e[p]):""):(f.push(b),
j=!0,h++,f[h]=1600>q[p][l].length?f[h]+(""!==q[p][l]?q[p][l]+("stc"===p&&z-1===l?"":e[p]):""):f[h]+("mherr=1"+e[p]))}g&&(1600>=f[h].length+g.length||(f.push(""),h++),f[h]+=g);for(e=0;e<f.length;e++)f[e]="&mh="+(e+1)+"-"+f.length+"-"+a+f[e]}return f},sendTag:function(d,b,c,e){"undefined"!=typeof window.ATTagTvTracking&&ATTagTvTracking.update();"undefined"!=typeof window.ATTagWebo&&ATTagWebo.update();var f=[];c=c||Pb+Db;c+=a.xtfirst?"&idclient="+V:"";d=d||"F";b=b||B;b+=(e?e:"")+"&vtag="+zb+AT_hit.localHour()+
AT_hit.resolution()+"&rn="+(new Date).getTime();AT_hit.first&&"F"==d&&(b+=hb&&0>b.indexOf("&stc=")?"&stc="+hb:"",b+="&ref="+AT_hit.referrer.replace(/&/g,"$"));"C"===d&&(b+="&pclick="+a.xtpage+"&s2click="+(a.xtn2?a.xtn2:""));f=AT_hit.parse(d,b,"&",{ati:",",atc:",",pdtl:"|",stc:",",dz:"|"});for(b=0;b<f.length;b++)AT_hit.loadImage(c+f[b]);AT_hit.first&&("F"==d&&""!==aa)&&AT_hit.loadFile("script",aa,!0,"text/javascript");"F"==d&&(AT_hit.first=!1)},loadImage:function(a){var b=new Image;b.src=a;D.sentHits instanceof
Array&&D.sentHits.push(a);b.onload=function(){b.onload=null}},loadFile:function(a,b,c,e,f){a=document.createElement(a);a.type=e;a.async=c;a.src=b;(f||document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(a,null)},localHour:function(a){a=a?a:new Date;return"&hl="+a.getHours()+"x"+a.getMinutes()+"x"+a.getSeconds()},resolution:function(){if(4<=parseFloat(x.appVersion))try{var a;a="undefined"!==typeof window.devicePixelRatio?
window.devicePixelRatio:1;return"&r="+na.width*a+"x"+na.height*a+"x"+na.pixelDepth+"x"+na.colorDepth}catch(b){}return""},prerenderDisplaying:function(){AT_hit.first&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+ka+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))},isPreviewOrPrerendering:function(){return window.navigator&&"preview"===window.navigator.loadPurpose&&-1!=x.userAgent.indexOf("Safari")&&0>x.userAgent.indexOf("Chrome")?
(z&&(AT_hit.sendTag("F",null,null,"&pvw=1"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+ka+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):""))),!0):"prerender"==r.webkitVisibilityState?(r.addEventListener("webkitvisibilitychange",AT_hit.prerenderDisplaying,!1),!0):!1}};if(0!==N||0!==ia||O){var da="";if(""!==H){da=t("xtvid");da||(Aa=da=P.getTime()+""+u(6));var Ja=new Date;Ja.setMinutes(Ja.getMinutes()+30);g("xtvid",da,Ja,"",1)}window.xtvid=da;var nb=
Xtconf.xtsite("xtor"),Ka=Xtconf.xtsite("xtdate"),ob=Xtconf.xtsite("xtocl"),La=Xtconf.xtsite("xtan"),Ma=Xtconf.xtsite("xtat"),ea=Xtconf.xtsite("xtant"),S=c("xtor"),Na=c("xtdt"),E=c("xtan"),F=c("xtat"),Oa=c("an",w),Pa=c("at",w),pb=c("ac",w),qb=t(ob),Qa=t("xtgo"),Ra=t("xtord"),rb=t("xtvrn"),fa=null!==qb?qb:"$",Qb="0"===Qa?Ra:null,Sa=null!==Qa?Qa:"0",pa=null!==rb?rb:"$",sb=P.getTime()/6E4,ga=null!==Na&&(c("xts")==N||O)?30>sb-Na&&0<=sb-Na?"2":"1":Sa,Rb="1"==Sa?"&pgt="+Ra:"1"==ga&&null!==S?"&pgt="+S:"",
W=null!==ib?ib:null!==S&&"0"==ga?S:!O?Qb:null,W=0>fa.indexOf("$"+W+"$")||"$"==fa?W:null,K="0"==ga?W:"2"==Sa?Ra:"2"==ga?S:null,X,Ta;null!==K?(Ta=K.substring(0,K.indexOf("-")),X=I[Ta]):X="1";if(null===X||!b(X))X=I.ad;null===E&&!O&&(E=t("xtanrd"));null===F&&!O&&(F=t("xtatrd"));var tb=t(La),ub=t(Ma),qa=t(ea),J=new Date,G=window.xt29=new Date,Ua=new Date;O?J.setTime(J.getTime()+3E4):J.setTime(J.getTime()+864E5*X);Ua.setTime(Ua.getTime()+18E5);G.setTime(G.getTime()+864E5*yb);var Va=null!==E?E.indexOf("-"):
0,Wa=null!==F?F.indexOf("-"):0,vb=null!==Oa?"":null!==E&&0<Va?"&ac="+E.substring(0,Va)+"&ant=0&an="+E.substring(Va+1,E.length):null!==tb?"&anc="+tb+"&anct="+qa:"",Sb=null!==Pa?"":null!==F&&0<Wa?"&ac="+F.substring(0,Wa)+"&ant=0&at="+F.substring(Wa+1,F.length):null!==ub?"&attc="+ub+"&anct="+qa:"",Q=0>pa.indexOf("$"+N+"$")?"&vrn=1":"",Tb=null!==c("xtatc")&&null===c("atc",w)?"&atc="+c("xtatc"):"";""!==Q&&g("xtvrn",141>pa.length?pa+N+"$":pa.substring(0,141),G,h,0);Q+=null===W?"":"&xto="+W;Q+=(""!==vb?
vb:Sb)+Rb+Tb;null!==Oa?(g(La,pb+"-"+Oa,G,h,1),g(ea,"1",G,h,1)):null!==E&&"1"!=qa&&(g(La,E,G,h,1),g(ea,"0",G,h,1));null!==Pa?(g(Ma,pb+"-"+Pa,G,h,1),g(ea,"1",G,h,1)):null!==F&&"1"!=qa&&(g(Ma,F,G,h,1),g(ea,"0",G,h,1));var Xa=t(nb),ha=t(Ka),ha=(/[a-zA-Z]/.test(ha)?(new Date(ha)).getTime()/36E5:parseFloat(t(Ka)))||(new Date).getTime()/36E5,Ub=0<=Math.floor(kb-ha)?Math.floor(kb-ha):0,Q=Q+(null===Xa?"":"&xtor="+Xa+"&roinbh="+Ub);if(O)g("xtgo",ga,J,h,1),null!==S&&g("xtord",S,J,h,1),null!==E&&g("xtanrd",E,
J,h,1),null!==F&&g("xtatrd",F,J,h,1),g("xtref",AT_hit.referrer?AT_hit.referrer.replace(/&/g,"$"):"acc_dir",J,h,0),a.xtloc&&($.location=a.xtloc);else{null!==K&&(0>fa.indexOf("$"+encodeURIComponent(K)+"$")||"$"==fa)&&g(ob,fa+K+"$",Ua,h,1);var ra=x.appName+" "+x.appVersion,Y=ra.indexOf("MSIE"),Z;0<=Y?(Z=parseInt(ra.substr(Y+5)),Y=!0):(Z=parseFloat(x.appVersion),Y=!1);var Vb=0<=ra.indexOf("Netscape"),Wb=0<=ra.indexOf("Mac"),Ya=0<=x.userAgent.indexOf("Opera"),sa="",wb="",Za="",$a="";if(Y&&5<=Z&&!Wb&&!Ya&&
!O)try{r.body.addBehavior("#default#clientCaps"),sa="&cn="+r.body.connectionType,sa+="&ul="+r.body.UserLanguage,r.body.addBehavior("#default#homePage"),wb=r.body.isHomePage(location.href)?"&hm=1":"&hm=0",$a="&re="+r.body.offsetWidth+"x"+r.body.offsetHeight}catch(bc){}else 5<=Z&&($a="&re="+a.innerWidth+"x"+a.innerHeight);Vb&&4<=Z||Ya?Za="&lng="+x.language:Y&&(4<=Z&&!Ya)&&(Za="&lng="+x.userLanguage);g("xtord","",P,h,1);if(null!==K&&(null===Xa||"1"==ba))g(nb,K,J,h,1),g(Ka,P.getTime()/36E5,J,h,1);var Xb=
C?"&docl="+encodeURIComponent($.location.href.replace(/&/g,"#ec#")):"",B=Cb+"&p="+ka+Eb+Fb+Gb+Q+Xb+Hb+w+sa+wb+Za+"&idp="+Ia,ab=t("xtvalCZ",1);if(null!==ab){var B=B+decodeURIComponent(ab.replace(/%at1%/g,"-").replace(/%at2%/g,"_").replace(/%at3%/g,".").replace(/%at4%/g,"!").replace(/%at5%/g,"~").replace(/%at6%/g,"*").replace(/%at7%/g,"'").replace(/%at8%/g,"(").replace(/%at9%/g,")")).replace("&c=","&current=").replace("&b=","&before=").replace("&a=","&after="),bb=new Date;bb.setTime(bb.getTime()-36E5);
g("xtvalCZ",ab,bb,h,1)}var Pb=window.Xt_id=Ab+"?",ta=t("xtide");if(null!==K)switch(Ta.toLowerCase()){case "erec":case "epr":case "es":var ua=null;try{var va=K.match(/(\[[^\]]*\])|([^\-]+)|(-)/g),xb=0,wa;for(wa in va)"-"==va[wa]&&xb++,5==xb&&"-"!=va[wa]&&(ua=va[wa])}catch(cc){ua=null}null!==ua&&(ta=ua,g("xtide",ta,G,"",1))}B+="&jv="+(x.javaEnabled()?"1":"0")+$a+xt16+(null!==ta?"&ide="+ta:"");Aa&&(B+="&lnk="+H+"&vid="+Aa);"0"!=v&&!AT_hit.isPreviewOrPrerendering()&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",
xt44,null,"&type=PDT&p="+ka+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))}}0<xa&&"function"==typeof xtNodesload&&(L?a.addEventListener?a.addEventListener("load",xtNodesload,!1):a.attachEvent&&a.attachEvent("onload",xtNodesload):xtNodesload())};
window.ATWebo=function(){var b=this,k=("https:"==document.location.protocol?"https://":"http://")+"aimfr.solution.weborama.fr/fcgi-bin/dispatch.fcgi?g.wr=1&a.A=la",p={},g={},c=!1,l=!1;b.init=function(c){p=c;k+="&a.si="+p.weboAccountId+"&a.cb=ATTagWebo.callback&_="+Math.random();c=null;p.xtnocookies?(b.initInfoWebo(),g.info.message="xtnocookies",b.setXtcore()):(c=ATInternet.Utils.getCookie("atwebo"))?(g=ATInternet.Utils.parseJSON(c),b.setXtcore()):(b.initInfoWebo(),b.run())};b.update=function(){var b=
ATInternet.Utils.getCookie("atwebo");b&&ATInternet.Utils.setCookie("atwebo",b,1800,p.xt1)};b.run=function(){var c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=k;c.onerror=b.setScriptError;(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(c,null);setTimeout(b.setTimeoutError,500)};b.initInfoWebo=function(){g.info={version:"1.0.0",accountid:p.weboAccountId,message:"",
error:[]}};b.setDataWebo=function(b){g.data={accountid:p.weboAccountId,code:b}};b.setCookieWebo=function(){var b=ATInternet.Utils.serialJSON(g);ATInternet.Utils.setCookie("atwebo",b,1800,p.xt1);ATInternet.Utils.getCookie("atwebo")||(g.info.error.push("cookieError"),g={info:g.info})};b.setXtcore=function(){c||(window.xtcustom=window.xtcustom||{},window.xtcustom.wbo=g,window.attag=new Xtcore,c=!0)};b.setScriptError=function(){g.info.error.push("noScript");b.setCookieWebo();b.setXtcore()};b.setTimeoutError=
function(){l=!0;c||(g.info.error.push("timeout"),b.setCookieWebo(),b.setXtcore())};b.callback=function(c){l||("string"===typeof c?0!==c.length?b.setDataWebo(c):g.info.message="noAction":g.info.error.push("codeError"),b.setCookieWebo(),b.setXtcore())}};
window.ATTvTracking=function(){var b={},k={},p={},g=!1,c=!1,l="",q="";this.init=function(n){b=n;k.info={version:"1.3.0",message:"",error:[]};l=b.tvTracking.domain?b.tvTracking.domain:b.xt1;q=b.tvTracking.path?b.tvTracking.path:"/";if(b.xtnocookies)k.info.message="xtnocookies",D();else if(ATInternet.Utils.getCookie("xttvt"))k.info.message="sessionAlreadyActive",u(),D();else if(b.tvTracking.url&&"string"===typeof b.tvTracking.url){var h;h=document.createElement("script");h.type="text/javascript";h.src=
b.tvTracking.url;h.async=!1;h.defer=!1;h.onload=h.onreadystatechange=function(b){b=b||window.event;if("load"===b.type||/loaded|complete/.test(h.readyState)&&(!document.documentMode||9>document.documentMode))h.onload=h.onreadystatechange=h.onerror=null,c||(u(),D())};h.onerror=function(){h.onload=h.onreadystatechange=h.onerror=null;c||(k.info.error.push("noScript"),u(),D())};n=document.head||document.getElementsByTagName("head")[0];n.insertBefore(h,n.lastChild);setTimeout(function(){g||(k.info.error.push("timeout"),
c=!0,u(),D())},500)}else k.info.message="noURLSet",u(),D()};this.update=function(){var c=ATInternet.Utils.getCookie("xttvt");c&&ATInternet.Utils.setCookie("xttvt",c,60*b.tvTracking.duration,l,q)};var u=function(){var c=window.tvtrackingcustom,g="",u=!1,A=ATInternet.Utils.getCookie("xttvtr"),D=ATInternet.Utils.getCookie("xttvt"),v="";if("undefined"!==typeof c&&"undefined"!==typeof c.channel&&"undefined"!==c.channel){var M=c.time,H;if(M&&"string"===typeof M){H=Date;var s;var L=/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/.exec(M)||
[];if(L[1]){s=L[1].split(/\D/);for(var C=0;C<s.length;C++)s[C]=parseInt(s[C],10)||0;s[1]-=1;s=new Date(Date.UTC.apply(Date,s));s.getDate()?L[5]&&(C=60*parseInt(L[5],10),L[6]&&(C+=parseInt(L[6],10)),"+"===L[4]&&(C*=-1),C&&s.setUTCMinutes(s.getUTCMinutes()+C)):s=NaN}else s=NaN;H=new H(s);s=new Date;H=s>=H&&s-H<=6E4*b.tvTracking.retention}else H=!1;H?u=!0:k.info.error.push("timeError");k.info.message=M}else"undefined"===typeof c?k.info.error.push("noData"):"undefined"===typeof c.channel?k.info.error.push("noChannel"):
"undefined"===c.channel&&(k.info.message="channelUndefined");null!==A&&0>A.indexOf(":")&&(ATInternet.Utils.setCookie("xttvtr","",-1,l,q),A=null);if(null===D){if(u)for(var ba in c)c.hasOwnProperty(ba)&&(v+=ba+":"+encodeURIComponent(c[ba])+"#");0===b.tvTracking.priority?null!==A?(h("direct",v),h("remanent",A),g=A):(c=v,h("direct",c),aa(c)):(null!==A&&(h("remanent",A),g=A),c=v,h("direct",c),aa(c))}else g=ATInternet.Utils.getCookie("xttvt").split("##"),v=g[0],g=g[1],h("direct",v),h("remanent",g),v+="#";
ATInternet.Utils.setCookie("xttvt",(v?v:"#")+"#"+g,60*b.tvTracking.duration,l,q);ATInternet.Utils.getCookie("xttvt")?("undefined"!==typeof p.direct&&(k.direct=p.direct),"undefined"!==typeof p.remanent&&(k.remanent=p.remanent)):k.info.error.push("cookieError")},D=function(){window.xtcustom=window.xtcustom||{};window.xtcustom.TvTracking=k;window.Xtconf.weboAccountId?(window.ATTagWebo=new ATWebo,ATTagWebo.init(window.Xtconf)):window.attag=new Xtcore;g=!0},h=function(b,c){if(""!==c){var g=c.split("#"),
h;p[b]={};for(var k=0;k<g.length;k++)h=g[k].split(":"),""!==h[0]&&(p[b][h[0]]=decodeURIComponent(h[1]))}},aa=function(c){c&&ATInternet.Utils.setCookie("xttvtr",c,86400*b.tvTracking.lifetime,l,q)}};window.Xtconf.tvTracking&&window.Xtconf.tvTracking.active?(window.ATTagTvTracking=new ATTvTracking,ATTagTvTracking.init(window.Xtconf)):window.Xtconf.weboAccountId?(window.ATTagWebo=new ATWebo,ATTagWebo.init(window.Xtconf)):window.attag=new Xtcore;
