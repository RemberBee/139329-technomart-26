var link=document.querySelector(".help-link"),popup=document.querySelector(".letter"),close=popup.querySelector(".close-window"),form=popup.querySelector("form"),user=popup.querySelector("[name=user-name]"),email=popup.querySelector("[name=user-email]"),comment=popup.querySelector("[name=free-text]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("user-name")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(user.value=storage,email.focus()):user.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){user.value&&email.value&&comment.value?isStorageSupport&&localStorage.setItem("user-name",user.value):(e.preventDefault(),alert("Необходимо заполнить имя и электронную почту"),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});var mapLink=document.querySelector(".map-link"),mapPopup=document.querySelector(".map"),mapClose=mapPopup.querySelector(".close-window");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&(e.preventDefault(),mapPopup.classList.remove("modal-show"))});for(var buyBookmark=document.getElementsByClassName("buy-modal"),cartPopup=document.querySelector(".add-cart"),cartClose=cartPopup.querySelector(".close-window"),i=0;i<buyBookmark.length;i++)buyBookmark[i].addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.add("modal-show")});cartClose.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&cartPopup.classList.contains("modal-show")&&(e.preventDefault(),cartPopup.classList.remove("modal-show"))});