// build time:Tue Dec 24 2019 16:52:25 GMT+0800 (GMT+08:00)
(function(){var e=document.getElementById("search-key"),t=document.getElementById("search-local"),n=document.getElementById("search-form"),i=document.getElementById("result-mask"),r=document.getElementById("result-wrap"),o=document.getElementById("search-result"),s=document.getElementById("search-tpl").innerHTML,c,u,a;if(window.innerWidth){c=parseInt(window.innerWidth)}else if(document.body&&document.body.clientWidth){c=parseInt(document.body.clientWidth)}if(window.innerHeight){u=parseInt(window.innerHeight)}else if(document.body&&document.body.clientHeight){u=parseInt(document.body.clientHeight)}i.style.width=c+"px";i.style.height=u+"px";function l(e,t){return e.replace(/\{\w+\}/g,function(e){var n=e.replace(/\{|\}/g,"");return t[n]||""})}function d(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function f(e,t){if(!d(e,t))e.className+=" "+t}function h(e,t){if(d(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function m(e,t){return p(e.title,t)||p(e.text,t)}function p(e,t){t.lastIndex=0;return t.test(e)}function g(){h(r,"hide");h(i,"hide")}function v(){f(r,"hide");f(i,"hide")}function y(e){if(!a){var t=new XMLHttpRequest;t.open("GET","/content.json",true);t.onload=function(){if(this.status>=200&&this.status<300){var t=JSON.parse(this.response||this.responseText);a=t instanceof Array?t:t.posts;e(a)}else{console.error(this.statusText)}};t.onerror=function(){console.error(this.statusText)};t.send()}else{e(a)}}function w(t){var n="";if(t.length){n=t.map(function(e){return l(s,{title:x(e.title,"title"),path:e.path,content:x(e.text,"content")})}).join("")}else{if(e.value==""){v()}else{n='<div class="tips"><p>没有找到相关结果!</p></div>'}}o.innerHTML=n}function x(t,n){var i=e.value;var r=t.indexOf(i);var o=t.replace(i,"<b>"+i+"</b>");if(n=="title"){return o}if(n=="content"&&r>0){return o.substr(r-15,45)}}function E(t){var n=this.value.trim();if(!n){w("");return}var i=new RegExp(n.replace(/[ ]/g,"|"),"gmi");y(function(e){var t=e.filter(function(e){return m(e,i)});w(t)});t.preventDefault();g();e.onfocus=function(){g()}}e.onfocus=function(){e.addEventListener("input",E)};i.onclick=function(){v()}})();
//rebuild by neat 