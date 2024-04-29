import{S as g,a as h,i as l}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();let f=new g(".gallery a");const y=document.querySelector(".imagesFetch");function m(i){const o=i.reduce((t,e)=>t+=`
          <li class="imagesFetch-item">
          <div class="gallery">
                 <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="1"/>
                 </a>
          </div>
          <div class="imagesFetch-item-description">
              <ul class="description-list">
              <li class="description-list-item">
                  <p class="item-name">Likes</p>
                  <span>${e.likes}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Views</p>
                  <span>${e.views}900290</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Comments</p>
                  <span>${e.comments}229</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Downloads</p>
                  <span>${e.downloads}610937</span>
              </li>
              </ul>
          </div>
          </li>  `,"");y.insertAdjacentHTML("beforeend",o),f.refresh(),document.querySelectorAll(".imagesFetch-item").forEach(t=>{const e=t.getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})})}const b=document.querySelector(".btn");let n=1;async function d(i){const o="43173042-04092544e8d4f8f0c3df25e51",r=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:15,page:n});try{const t=await h.get(`https://pixabay.com/api/?key=${o}&q=${i}&${r}`);return n*15>t.data.totalHits?(b.style.display="none",l.error({position:"topRight",message:"We're sorry, there are no more posts to load"})):(n++,console.log("page: ",n),t)}catch(t){throw new Error(t.message)}}const v=document.querySelector(".form"),L=document.querySelector(".imagesFetch"),a=document.querySelector(".loader"),p=document.querySelector(".btn"),u=document.querySelector(".form-input");v.addEventListener("submit",i=>{i.preventDefault();const o=u.value.trim();if(L.innerHTML="",o===""){l.error({title:"Error",message:"Enter search images value",position:"topRight"});return}a.style.display="block",d(o).then(r=>{console.log("response: ",r),r.data.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none",m(r.data.hits),p.style.display="block",p.addEventListener("click",()=>{a.style.display="block",d(o).then(t=>{console.log("response2: ",t),a.style.display="none",m(t.data.hits)}).catch(t=>{console.log(t)})})}).catch(r=>{console.log(r)}),u.value=""});
//# sourceMappingURL=commonHelpers.js.map
