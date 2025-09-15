import{a as m,S as p,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="52299901-ed5308505488786f07030921d",y="https://pixabay.com/api/";async function h(o){const i={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40},{data:r}=await m.get(y,{params:i});return r}const u=document.querySelector(".gallery"),s=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o=[]){const i=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${r}" alt="${e}" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${t}</li>
          <li><b>Views:</b> ${n}</li>
          <li><b>Comments:</b> ${f}</li>
          <li><b>Downloads:</b> ${d}</li>
        </ul>
      </li>`).join("");u.insertAdjacentHTML("beforeend",i),b.refresh()}function q(){u.innerHTML=""}function v(){s&&(s.classList.add("is-visible"),s.setAttribute("aria-hidden","false"))}function c(){s&&(s.classList.remove("is-visible"),s.setAttribute("aria-hidden","true"))}const w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault();const i=o.currentTarget.elements["search-text"].value.trim();if(!i){l.warning({message:"Please enter a search query",position:"topRight"});return}q(),v(),h(i).then(r=>{if(c(),!r.hits||r.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}).catch(r=>{c(),l.error({message:"Request failed. Check API key or network.",position:"topRight"}),console.error(r)})});
//# sourceMappingURL=index.js.map
