function setupCardRevealForAllSections(cardsToShowOnEachClick = 3) {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const cardsContainer = section.querySelector(".cards");
        const cards = cardsContainer?.querySelectorAll(".card");
        const moreBtn = section.querySelector(".moreBtn");

        if (!cards || cards.length <= cardsToShowOnEachClick || !moreBtn) return;

        let visibleCount = 0;

        // Show initial 3 cards
        const showCards = (count) => {
            const nextVisible = visibleCount + count;
            for (let i = visibleCount; i < nextVisible && i < cards.length; i++) {
                cards[i].classList.add("visible");
            }
            visibleCount = nextVisible;

            if (visibleCount >= cards.length) {
                moreBtn.style.display = "none";
            }
        };

        showCards(cardsToShowOnEachClick); // Show initial

        moreBtn.addEventListener("click", (e) => {
            e.preventDefault();
            showCards(cardsToShowOnEachClick); // Show next 3
        });
    });
}

setupCardRevealForAllSections();
