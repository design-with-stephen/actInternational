const tabs = document.querySelectorAll(".tab")
const tabContents = document.querySelectorAll(".tabContent")


if (tabs.length > 0 && tabContents.length > 0) {
    tabs[0].classList.add("active");
    tabContents[0].classList.add("active");
}
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });

        tabContents.forEach((content) => {
            content.classList.remove("active")
        });

        tab.classList.add("active");
        tabContents[index].classList.add("active");
    });
});