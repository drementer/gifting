const e=(e,r)=>{e.classList.add(r)},r=(e,r)=>{e.classList.remove(r)},t=(e,r=document)=>r.querySelector(e),n=t("[wrapper]"),a=t("[start-button]"),s="--sliding",d="--winner";let l=300,c=30;const i=e=>`\n\t<div class="slider__card slider-card" card>\n\t\t<img src="./assets/img/cards/${e}.png" alt="" class="slider-card__image">\n\t</div>\n\t`,o=()=>{let e="",r=1;for(;r<=30;)e+=i(Math.floor(6*Math.random())+1),r++;n.innerHTML+=e};a.addEventListener("click",(()=>{let c=`calc((50vw - calc(10rem / 2)) - ${l}rem)`,i=t(".--winner");i&&r(i,d),o(),a.innerHTML="Tekrar Dene",e(n,s),n.style.transform=`translateX(${c})`,l+=300})),n.addEventListener("transitionend",(()=>{let t=((e,r=document)=>r.querySelectorAll(e))("[card]")[c];r(n,s),e(t,d),c+=30})),window.onload=o();