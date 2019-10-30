    var link = document.querySelector(".help-link");

    var popup = document.querySelector(".letter");
    var close = popup.querySelector(".close-window");

    var form = popup.querySelector("form");
    var user = popup.querySelector("[name=user-name]");
    var email = popup.querySelector("[name=user-email]");
    var comment = popup.querySelector("[name=free-text]")

    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("user-name");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show")
      ;
      if (storage) {
        user.value = storage;
        email.focus();
      } else {
        user.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!user.value || !email.value || !comment.value) {
        evt.preventDefault();
        alert("Необходимо заполнить имя и электронную почту");
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("user-name", user.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });

    var mapLink = document.querySelector(".map-link");

    var mapPopup = document.querySelector(".map");
    var mapClose = mapPopup.querySelector(".close-window");

    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        }
      }
    });

    var buyBookmark = document.getElementsByClassName("buy-modal");

    var cartPopup = document.querySelector(".add-cart");
    var cartClose = cartPopup.querySelector(".close-window");

    for (var i = 0; i < buyBookmark.length; i++) {
      buyBookmark[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
      });
    }

    cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          cartPopup.classList.remove("modal-show");
        }
      }
    });
