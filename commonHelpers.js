import{a as w,S as q,i as m}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=document.querySelector(".picture-search-form"),S=document.querySelector(".picture-search-name"),L=document.querySelector(".loader-container"),u=document.querySelector(".load-more-button"),k="41764451-f0ee5e8d00846e21c9f97a054";let n=1;const h=40;let d="";function $(){L.style.display="block"}function g(){L.style.display="none"}async function b(l,o){d=l;const a={key:k,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:h},i=new URLSearchParams(a);$();try{const e=await w.get(`https://pixabay.com/api/?${i}`);g();const{hits:t,totalHits:r}=e.data,f=document.querySelector(".gallery"),p=new q(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});p.refresh(),o===1&&(f.innerHTML="");const v=t.reduce((c,s)=>c+`<a class="gallery-link" href="${s.largeImageURL}">
            <img
                class="gallery-image"
                src="${s.webformatURL}"
                alt="${s.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${s.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${s.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${s.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${s.downloads}</p>
              </li>
            </ul>
        </a>`,"");if(f.insertAdjacentHTML("beforeend",v),p.refresh(),o*h>=r)u.style.display="none",m.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{u.style.display="block";const c=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}}catch(e){g(),m.error({title:"Error",message:e.message,position:"topRight"})}}y.addEventListener("submit",l=>{l.preventDefault();const o=S.value.trim();n=1,b(o,n),y.reset()});u.addEventListener("click",()=>{n+=1,b(d,n)});
//# sourceMappingURL=commonHelpers.js.map
