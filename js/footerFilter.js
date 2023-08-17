function initCheckbox() {
  const checkboxContainer = document.querySelector(".checkbox-container");
  const btns = checkboxContainer.querySelectorAll(".checkbox-button");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const forValue = btn.getAttribute("for");

      if (forValue === "other") {
        btns.forEach(function (otherBtn) {
          if (otherBtn !== btn) {
            otherBtn.classList.remove("active-checkbox");
          }
        });
      } else {
        const otherBtn = checkboxContainer.querySelector('label[for="other"]');
        if (otherBtn) {
          otherBtn.classList.remove("active-checkbox");
        }
      }

      if (!btn.classList.contains("active-checkbox")) {
        btn.classList.add("active-checkbox");
      } else {
        btn.classList.remove("active-checkbox");
      }
    });
  });
}

function initComponents() {
  initCheckbox();
}

initComponents();
