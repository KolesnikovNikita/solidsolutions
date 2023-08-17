function selectService() {
  function switchTab(newIndex) {
    tabPanels.forEach(function (tabPanel, index) {
      tabPanel.hidden = !(index === newIndex);
    });
  }

  const tabItems = document.querySelectorAll(".tab-item");
  const tabPanels = document.querySelectorAll(".tab-content");

  switchTab(0);

  tabItems.forEach(function (tabItem, index) {
    tabItem.addEventListener("click", function (event) {
      tabItems.forEach(function (tab) {
        tab.classList.remove("active-link");
      });
      event.preventDefault();
      this.classList.add("active-link");
      switchTab(index);
    });
  });
}

function changeButtonText() {
  const btn = document.getElementById("learnLink");
  const windowWidth = 1200;
  btn.innerText = "Learn more";

  if (window.innerWidth > windowWidth) {
    btn.innerText = "Learn More about us";
  } else {
    btn.innerText = "Learn more";
  }

  window.addEventListener("resize", changeButtonText);
}

function initComponents() {
  selectService();
  changeButtonText();
}

initComponents();
