import{S as g,a as y,i as n}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let h=new g(".gallery a");const f=document.querySelector(".imagesFetch");function d(i){const t=i.reduce((s,r)=>s+=`
          <li class="imagesFetch-item">
          <div class="gallery">
                 <a href="${r.largeImageURL}">
                    <img src="${r.webformatURL}" alt="1"/>
                 </a>
          </div>
          <div class="imagesFetch-item-description">
              <ul class="description-list">
              <li class="description-list-item">
                  <p class="item-name">Likes</p>
                  <span>${r.likes}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Views</p>
                  <span>${r.views}900290</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Comments</p>
                  <span>${r.comments}229</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Downloads</p>
                  <span>${r.downloads}610937</span>
              </li>
              </ul>
          </div>
          </li>  `,"");f.insertAdjacentHTML("beforeend",t),h.refresh()}async function u(i,t){const s="43173042-04092544e8d4f8f0c3df25e51",r=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:15,page:t}),{data:e}=await y.get(`https://pixabay.com/api/?key=${s}&q=${i}&${r}`);return e}const w=document.querySelector(".form"),v=document.querySelector(".imagesFetch"),l=document.querySelector(".loader"),a=document.querySelector(".btn"),m=document.querySelector(".form-input");let c=1;w.addEventListener("submit",async i=>{i.preventDefault();const t=m.value.trim();if(v.innerHTML="",t===""){n.error({title:"Error",message:"Enter search images value",position:"topRight"}),a.style.display="none";return}try{l.style.display="block",c=1;const s=await u(t,c);if(s.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.style.display="none",d(s.hits),a.style.display="block",s.hits.length<15&&(a.style.display="none",n.error({position:"topRight",message:"We're sorry, there are no more posts to load"})),a.dataset.inputValue=t}catch{l.style.display="none",n.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight"})}m.value=""});a.addEventListener("click",async i=>{i.preventDefault(),c++,l.style.display="block";try{const t=i.currentTarget.dataset.inputValue,s=await u(t,c);l.style.display="none",d(s.hits);const e=document.querySelectorAll(".imagesFetch-item")[0].getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"}),s.hits.length<15&&(a.style.display="none",n.error({position:"topRight",message:"We're sorry, there are no more posts to load"}))}catch{n.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight"}),l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
