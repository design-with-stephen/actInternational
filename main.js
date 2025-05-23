(function () {
    const menuBars = document.querySelector(".hamburger");
    const mobNavbar = document.querySelector(".mob-navbar");
    const closeBtn = document.querySelector(".closeBtn");
    const body = document.body;
    function openMenu() {
        
    }
    openMenu();

    // body.addEventListener("click", () => {
    //     if (mobNavbar.classList.contains("mobNavActive")) {
    //         mobNavbar.classList.remove("mobNavActive");
    //     }
    // })

    menuBars.addEventListener("click", (e) => {
        mobNavbar.classList.toggle("mobNavActive");
        body.style.overflowY = "hidden";
    })

    closeBtn.addEventListener("click", () => {
        mobNavbar.classList.remove("mobNavActive");
        body.style.overflowY = "auto";
    })
    
})();