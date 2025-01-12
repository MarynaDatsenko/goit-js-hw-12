import{a as A,S as u,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const c={key:"47527494-043e5fa64e78cd3667b900e8d",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function f(){const e=new URLSearchParams(c);return(await A.get(`https://pixabay.com/api/?${e}`)).data}const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBrZQ9UsMwEIXXQoZhcgCocU6RNKlygPTOKUhPDz00UOBbpMenwFzBAzMUJMGOVhllFHlXUuK8xh57/T6t9yepJ5MWCKX5HC7zHGK0Kt5hXRTkO+kz35QlNNUn+CSyTMXO9T0Fkaz5cgl/T48QpfsFC5G9zZVMLAWRfc1DEHkOcx9E+syxgE1VeU3dGBciTLdQ5tfPLyo7vlXxcBiDsW4mm/JDQwQ+oFoRT4UpYhAFMZmv1QxQWZpn5BwY4QDZ6ZrC2eYrZsCMvAAKApBEm0cBKEisOUpApFrmPqSoDOx/vvtF/O45GsAVNBYiTzHnuosFiLus82K3hvlusSH/eq1XzvdDfU1+X9/a9IyrAnWl1recTvXhLhY/3w+JKlw6m4G4udWnMWrrGkJyY2xzzFza6ZqVcOpGdc1R+yL3hVDmB4A+EM68A+hABgNovkJFHoIcjdhuI+fgADIeQ0i+3bQFnGgNCyU078wAAAAASUVORK5CYII=",v=new u(".gallery-link",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".loader"),h=document.querySelector(".gallery"),r=document.querySelector(".load-more-btn");l.style.display="none";function w(e){if(!e.hits.length)h.innerHTML="",r.style.display="none",setTimeout(()=>{n.show({iconUrl:a,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200);else{e.totalHits;const o=e.hits.map(i=>`<li class="gallery-item">
				<a class="gallery-link" href="${i.largeImageURL}" >
					<img class="gallery-image" src="${i.webformatURL}" alt="${i.tags}"/>
				</a>
				<div class="image-description">
					<div class="decsription-item">
						<h3>Likes</h3>
						<p> ${i.likes}</p>
					</div>
					<div class="decsription-item">
						<h3>Views</h3>
						<p> ${i.views}</p>
					</div>
					<div class="decsription-item">
						<h3>Comments</h3>
						<p> ${i.comments}</p>
					</div>
					<div class="decsription-item">
						<h3>Downloads</h3>
						<p> ${i.downloads}</p>
					</div>
				</div>
			</li>`).join(`

`);h.innerHTML+=o,v.refresh(),r.style.display="block"}l.style.display="none"}const p=document.querySelector(".search-form");let y=0;p.addEventListener("submit",async e=>{e.preventDefault();const o=p.elements.searchInput.value.trim();o?(y=0,h.innerHTML="",r.style.display="none",c.q=o,c.page=1,await g()):setTimeout(()=>{n.show({iconUrl:a,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200)});async function g(){l.style.display="block";try{const e=await f();y+=e.hits.length,e.hits.length>0?(w(e),y>=e.totalHits?(r.style.visibility="hidden",n.show({iconUrl:a,message:"You have reached the end of the search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"})):r.style.visibility="visible"):(r.style.display="none",n.show({iconUrl:a,message:"No more images found.",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}))}catch{r.style.display="none",n.show({iconUrl:a,message:"You have reached the end of the search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"})}finally{l.style.display="none"}p.reset()}r.addEventListener("click",async()=>{r.style.visibility="hidden",l.style.position="fixed",l.style.bottom="0",c.page++,await g(),F()});function F(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:o,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
