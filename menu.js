var menu = document.querySelector(".navigation__list");
var navigation = document.querySelector(".navigation__sandwitch");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      
    } else {
      menu.classList.add("showMenu");
    }
  }

navigation.addEventListener("click", toggleMenu)

