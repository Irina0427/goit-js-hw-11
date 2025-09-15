import{a as m,S as p,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="52299901-ed5308505488786f07030921d",y="https://pixabay.com/api/";async function h(i){const o={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40},{data:r}=await m.get(y,{params:o});return r}const d=document.querySelector(".gallery"),n=document.getElementById("loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${q(e)}"
            loading="lazy"
          />
        </a>
        <div class="card-meta">
          <div><b>Likes</b>${t}</div>
          <div><b>Views</b>${a}</div>
          <div><b>Comments</b>${u}</div>
          <div><b>Downloads</b>${f}</div>
        </div>
      </li>`).join("");d.insertAdjacentHTML("beforeend",o),b.refresh()}function L(){d.innerHTML=""}function A(){n.classList.add("loader--visible"),n.setAttribute("aria-hidden","false")}function c(){n.classList.remove("loader--visible"),n.setAttribute("aria-hidden","true")}function q(i=""){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}const P=document.querySelector(".form");P.addEventListener("submit",i=>{i.preventDefault();const o=i.currentTarget.elements["search-text"].value.trim();if(!o){l.warning({message:"Please enter a search query",position:"topRight"});return}L(),A(),h(o).then(r=>{if(c(),!r.hits||r.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}).catch(r=>{c(),l.error({message:"Request failed. Check API key or network.",position:"topRight"}),console.error(r)})});
//# sourceMappingURL=index.js.map
