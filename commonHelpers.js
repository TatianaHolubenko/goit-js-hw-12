import{a as w,i as c,S as q}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".picture-search-form"),y=document.querySelector(".picture-search-name"),h=document.querySelector(".loader-container"),p=document.querySelector(".load-more-button"),S="41764451-f0ee5e8d00846e21c9f97a054";let d=1;const g=40;function k(){h.style.display="block"}function m(){h.style.display="none"}let u={key:S,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:g};async function L(s,o){u.q=s,u.page=o;const n=new URLSearchParams(u);k();try{const i=await w.get(`https://pixabay.com/api/?${n}`);m();const{hits:e,totalHits:t}=i.data;if(e.length===0){c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}const l=document.querySelector(".gallery"),b=new q(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});o===1&&(l.innerHTML="");const v=e.reduce((a,r)=>a+`<a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${r.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${r.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${r.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${r.downloads}</p>
              </li>
            </ul>
        </a>`,"");if(l.insertAdjacentHTML("beforeend",v),b.refresh(),o*g>=t)p.style.display="none",c.error({title:"Error",message:error.message,position:"topRight"});else{p.style.display="block";const a=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch{m(),c.error({title:"Error",message:error.message,position:"topRight"})}}f.addEventListener("submit",s=>{s.preventDefault();const o=y.value.trim();d=1,L(o),f.reset()});p.addEventListener("click",()=>{d+=1;const s=y.value.trim();L(s)});
//# sourceMappingURL=commonHelpers.js.map
