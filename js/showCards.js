document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards-list__item");
  const button = document.querySelector(".services-page__button button");

  const initialVisibleCards = 4;
  let visibleCards = initialVisibleCards;

  function showCards(count) {
    for (let i = 0; i < cards.length; i++) {
      if (i < count) {
        cards[i].style.opacity = "0";
        cards[i].style.transition = `opacity 0.5s ${i * 0.1}s`;
        cards[i].style.display = "flex";

        setTimeout(() => {
          cards[i].style.opacity = "1";
        }, 0);
      } else {
        cards[i].style.display = "none";
      }
    }
  }

  showCards(initialVisibleCards);

  if (window.innerWidth >= 1024) {
    button.style.display = "none";

    showCards(cards.length);
  } else {
    button.addEventListener("click", function () {
      visibleCards += 3;
      showCards(visibleCards);

      if (visibleCards >= cards.length) {
        button.style.display = "none";
      }
    });
  }
});
