const log=e=>{console.log(e)},addClass=(e,t)=>{e.classList.add(t)},removeClass=(e,t)=>{e.classList.remove(t)},select=(e,t=document)=>t.querySelector(e),selects=(e,t=document)=>t.querySelectorAll(e),container=select("[container]"),wrapper=select("[wrapper]"),startButton=select("[start-button]"),slidingClass="--sliding",winnerClass="--winner",skewClass="--skew",lastWinner="--last-winner",cardWidth=10,halfCardWidth="calc(10rem / 2)",scrollStart=`(50vw - ${halfCardWidth})`,perScrollCard=30,perScroll=300;let scrolledCard=30,scrollWidth=300;const updateScrollPosition=()=>{let e=`translateX(calc(${scrollStart} - ${scrollWidth}rem))`;wrapper.style.transform=e},createCard=e=>{let t=document.createElement("div");return t.classList.add("slider__card","slider-card"),t.setAttribute("card",""),t.innerHTML=`<img src="assets/img/cards/${e}.webp" alt="" class="slider-card__image">`,t},injectCard=()=>{let e=1;for(;e<=46.5;){let t=Math.floor(6*Math.random())+1,r=createCard(t);wrapper.insertAdjacentElement("beforeend",r),e++}},startAnimation=()=>{startButton.innerHTML="Tekrar Dene",startButton.setAttribute("disabled","");let e=select(".--winner");e&&removeClass(e,"--winner"),updateScrollPosition(),addClass(container,"--skew"),addClass(wrapper,"--sliding"),scrollWidth+=300},finishAnimation=e=>{if(e.srcElement!=wrapper)return;let t=selects("[card]")[scrolledCard];addClass(t,"--winner"),addClass(t,lastWinner),removeClass(container,"--skew"),removeClass(wrapper,"--sliding"),startButton.removeAttribute("disabled"),scrolledCard+=30,injectCard()},init=()=>{startButton.addEventListener("click",startAnimation),wrapper.addEventListener("transitionend",finishAnimation),injectCard()};window.onload=(startButton.addEventListener("click",startAnimation),wrapper.addEventListener("transitionend",finishAnimation),void injectCard());