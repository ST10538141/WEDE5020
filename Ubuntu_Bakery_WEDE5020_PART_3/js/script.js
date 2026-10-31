// Ubuntu Bakery Part 3 JavaScript: forms, FAQ, product filtering and image lightbox.
document.addEventListener("DOMContentLoaded", function () {
  // FAQ accordion: open one answer at a time.
  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      const answer = button.nextElementSibling;
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      document.querySelectorAll(".faq-question").forEach(function (other) {
        other.setAttribute("aria-expanded", "false");
        other.nextElementSibling.hidden = true;
      });
      button.setAttribute("aria-expanded", String(willOpen));
      answer.hidden = !willOpen;
    });
  });

  // Product search, category filter and price sorting.
  const productGrid = document.getElementById("productGrid");
  if (productGrid) {
    const cards = Array.from(productGrid.querySelectorAll(".product-card"));
    const search = document.getElementById("productSearch");
    const category = document.getElementById("categoryFilter");
    const sort = document.getElementById("sortProducts");
    const count = document.getElementById("productCount");
    function updateProducts() {
      const term = search.value.toLowerCase().trim();
      const selected = category.value;
      let visible = cards.filter(function (card) {
        const matchesText = card.textContent.toLowerCase().includes(term);
        const matchesCategory = selected === "all" || card.dataset.category === selected;
        card.hidden = !(matchesText && matchesCategory);
        return !card.hidden;
      });
      if (sort.value !== "default") {
        visible.sort(function (a, b) {
          return sort.value === "low" ? Number(a.dataset.price) - Number(b.dataset.price) : Number(b.dataset.price) - Number(a.dataset.price);
        });
        visible.forEach(function (card) { productGrid.appendChild(card); });
      } else {
        cards.forEach(function (card) { productGrid.appendChild(card); });
      }
      count.textContent = "Showing " + visible.length + " of " + cards.length + " products";
    }
    search.addEventListener("input", updateProducts);
    category.addEventListener("change", updateProducts);
    sort.addEventListener("change", updateProducts);
  }

  // Product image lightbox.
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const largeImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");
    document.querySelectorAll(".gallery-image").forEach(function (button) {
      button.addEventListener("click", function () {
        const image = button.querySelector("img");
        largeImage.src = image.src;
        largeImage.alt = image.alt;
        lightbox.hidden = false;
        closeButton.focus();
      });
    });
    function closeLightbox() { lightbox.hidden = true; largeImage.src = ""; }
    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) { if (event.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape" && !lightbox.hidden) closeLightbox(); });
  }

  // Interactive regional map. It deliberately does not claim an exact shop address.
  const mapElement = document.getElementById("bakeryMap");
  if (mapElement && window.L) {
    const map = L.map("bakeryMap").setView([-23.9, 29.45], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.circle([-23.9, 29.45], { radius: 35000 }).addTo(map)
      .bindPopup("Illustrative Limpopo region only. No exact bakery address is available.");
  } else if (mapElement) {
    mapElement.textContent = "The interactive map needs an internet connection and the map library to load.";
  }

  // Shared validation helper for both forms.
  function validateForm(form, feedback) {
    if (!form.checkValidity()) {
      form.reportValidity();
      feedback.textContent = "Please check the highlighted fields and complete all required information.";
      feedback.classList.add("error-message");
      return false;
    }
    feedback.classList.remove("error-message");
    return true;
  }

  // Enquiry: show a response relevant to the selected enquiry and prepare an email.
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    const productFromLink = new URLSearchParams(window.location.search).get("product");
    if (productFromLink) document.getElementById("productChoice").value = productFromLink;
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const feedback = document.getElementById("enquiryFeedback");
      if (!validateForm(enquiryForm, feedback)) return;
      const data = new FormData(enquiryForm);
      let response = "Thank you. Your enquiry details are ready. Availability and final prices must be confirmed by the bakery.";
      if (data.get("type") === "Custom cake") response = "Thank you for your custom cake enquiry. Please include design, size and collection date when the bakery contacts you. The date is not booked until confirmed.";
      if (data.get("type") === "Bulk order") response = "Thank you for your bulk order enquiry. The bakery will need to confirm quantity, pricing and preparation time before accepting the order.";
      if (data.get("type") === "Volunteer" || data.get("type") === "Sponsorship") response = "Thank you for your interest in supporting Ubuntu Bakery. Your message is ready to be sent for review.";
      feedback.textContent = response + " An email draft will now open for you to review.";
      const subject = encodeURIComponent("Ubuntu Bakery - " + data.get("type"));
      const body = encodeURIComponent("Name: " + data.get("name") + "\nEmail: " + data.get("email") + "\nPhone: " + data.get("phone") + "\nProduct: " + data.get("product") + "\nRequired date: " + data.get("date") + "\nMessage: " + data.get("message"));
      window.location.href = "mailto:info@ubuntubakery.example?subject=" + subject + "&body=" + body;
    });
  }

  // Contact form: compile the details into an email draft.
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const feedback = document.getElementById("contactFeedback");
      if (!validateForm(contactForm, feedback)) return;
      const data = new FormData(contactForm);
      feedback.textContent = "Your message has been prepared. Your email application should open so you can review and send it.";
      const subject = encodeURIComponent("Ubuntu Bakery - " + data.get("type"));
      const body = encodeURIComponent("Name: " + data.get("name") + "\nEmail: " + data.get("email") + "\nPhone: " + (data.get("phone") || "Not supplied") + "\nMessage type: " + data.get("type") + "\n\n" + data.get("message"));
      window.location.href = "mailto:info@ubuntubakery.example?subject=" + subject + "&body=" + body;
    });
  }
});
