"use strict";

/* ================================
   BOOTSTRAP FORM VALIDATION
================================ */
(() => {
  const forms = document.querySelectorAll(".needs-validation");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
})();

/* ================================
   DOM CONTENT LOADED
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* -------- Rating Stars -------- */
  const rangeInput = document.getElementById("range4");
  const rangeOutput = document.getElementById("rangeValue");

  if (rangeInput && rangeOutput) {
    const updateStars = (value) => {
      rangeOutput.innerHTML = "&#11088;".repeat(value);
    };

    updateStars(rangeInput.value);
    rangeInput.addEventListener("input", () => updateStars(rangeInput.value));
  }

  /* -------- Search Placeholder -------- */
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    const updateSearchPlaceholder = () => {
      const width = window.innerWidth;

      if (width <= 368) {
        searchInput.placeholder = "search...";
      } else if (width <= 576) {
        searchInput.placeholder = "destinations...";
      } else {
        searchInput.placeholder = "Search destinations...";
      }
    };

    updateSearchPlaceholder();
    window.addEventListener("resize", updateSearchPlaceholder);
  }

  /* -------- Filter Scroll Arrow -------- */
  const filterContainer = document.getElementById("filter_toggle");
  const scrollButton = document.getElementById("filterScrollRight");

  if (filterContainer && scrollButton) {
    scrollButton.addEventListener("click", () => {
      filterContainer.scrollBy({
        left: 240,
        behavior: "smooth",
      });
    });
  }

  /* -------- Tax Toggle Logic -------- */
  const taxSwitch = document.getElementById("flexSwitchCheckDefault");
  const priceElements = document.querySelectorAll(".price-text");
  const TAX_MULTIPLIER = 1.18;

  if (taxSwitch && priceElements.length) {
    taxSwitch.addEventListener("change", () => {
      priceElements.forEach((priceElement) => {
        const basePrice = Number(priceElement.dataset.price);
        const priceSpan = priceElement.querySelector(".price-value");

        if (!priceSpan) return;

        const finalPrice = taxSwitch.checked
          ? Math.round(basePrice * TAX_MULTIPLIER)
          : basePrice;

        priceSpan.textContent = finalPrice.toLocaleString("en-IN");
      });
    });
  }

  /* -------- Live Validation (Optional UX Boost) -------- */
  document
    .querySelectorAll(".needs-validation .form-control")
    .forEach((input) => {
      input.addEventListener("input", () => {
        input.form.classList.add("was-validated");
      });
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const taxToggleLabel = document.getElementById("taxToggleLabel");
  if (!taxToggleLabel) return;

  const updateLabel = () => {
    const width = window.innerWidth;

    if (width < 442) {
      taxToggleLabel.textContent = "Total";
    } else if (width < 1300) {
      taxToggleLabel.textContent = "total";
    } else if (width < 1395) {
      taxToggleLabel.textContent = "after tax";
    } else {
      taxToggleLabel.textContent = "Display total after taxes";
    }
  };

  updateLabel();                 // run once on load
  window.addEventListener("resize", updateLabel);
});
