// 1. Mobile Menu Logic - FIXED SELECTOR
const menuButton = document.querySelector(".menu-button");
const menuIcon = menuButton?.querySelector(".bx");
const navbar = document.querySelector(".navbar");

if (menuButton && navbar) {
  menuButton.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    menuIcon.classList.toggle("bx-menu");
    navbar.classList.toggle("active");

    // Accessibility: Update aria-expanded
    const isOpen = navbar.classList.contains("active");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
} else {
  console.warn("Menu elements not found");
}

// 2. Typewriter Effect - WITH ERROR HANDLING
const typingElement = document.querySelector(".typing-text");

if (typingElement) {
  const typed = new Typed(".typing-text", {
    strings: ["Frontend Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
} else {
  console.warn("Typing element (.typing-text) not found in DOM");
}

// 3. Smooth Scrolling & Active Link Detection
const navLinks = document.querySelectorAll(".navbar a");

if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the target section
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Smooth scroll to section
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Remove 'active' class from all links
        navLinks.forEach((item) => {
          item.classList.remove("active");
        });

        // Add 'active' class to the clicked link
        link.classList.add("active");

        // Close mobile menu if it's open
        if (menuIcon) menuIcon.classList.remove("bx-x");
        if (navbar) navbar.classList.remove("active");
      }
    });
  });
}

// UTILITY: Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func.apply(this, arguments);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 4. Sticky Header - Hide on scroll down, Show on scroll up
let lastScrollTop = 0;
const header = document.querySelector(".header");
const goToTopBtn = document.getElementById("goToTop");

if (header && goToTopBtn) {
  window.addEventListener(
    "scroll",
    throttle(() => {
      let scrollTop = window.scrollY;

      // HEADER HIDE/SHOW LOGIC
      if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
          // Scrolling DOWN - hide header
          header.classList.add("hide");
          header.classList.remove("show");
        } else {
          // Scrolling UP - show header
          header.classList.remove("hide");
          header.classList.add("show");
        }
      } else {
        // At top - always show header
        header.classList.remove("hide");
        header.classList.add("show");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // GO TO TOP BUTTON LOGIC
      if (scrollTop > 500) {
        // Show button after scrolling 500px
        goToTopBtn.classList.add("show");

        // Add pulse animation first time it appears
        if (!goToTopBtn.hasAttribute("data-shown")) {
          goToTopBtn.setAttribute("data-shown", "true");
          goToTopBtn.classList.add("pulse");
        }
      } else {
        // Hide button at top
        goToTopBtn.classList.remove("show");
      }
    }, 100),
  );

  // GO TO TOP BUTTON CLICK HANDLER
  goToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
} else {
  console.warn("Header or Go-to-Top button not found");
}

// 5. Intersection Observer for fade-in animations - WITH ERROR HANDLING
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and content sections
const cardsToObserve = document.querySelectorAll(
  ".skill-card, .service-card, .portfolio-card",
);

if (cardsToObserve.length > 0) {
  cardsToObserve.forEach((el) => {
    observer.observe(el);
  });
} else {
  console.warn("No cards found to observe for animations");
}

// 6. FORM VALIDATION & SUBMISSION - CRITICAL
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  // Validate form inputs
  function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    // Name validation
    if (!name || name.length < 2) {
      showError("Please enter a valid name (at least 2 characters)");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showError("Please enter a valid email address");
      return false;
    }

    // Message validation
    if (!message || message.length < 10) {
      showError("Please enter a message (at least 10 characters)");
      return false;
    }

    return true;
  }

  // Show error message
  function showError(errorMessage) {
    const existingError = contactForm.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = errorMessage;
    errorDiv.style.cssText = `
      padding: 12px;
      margin-bottom: 15px;
      background-color: #ff4757;
      color: white;
      border-radius: 5px;
      font-size: 0.95em;
    `;

    contactForm.insertBefore(errorDiv, contactForm.firstChild);

    // Remove error after 5 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }

  // Show success message
  function showSuccess(successMessage) {
    const existingSuccess = contactForm.querySelector(".success-message");
    if (existingSuccess) {
      existingSuccess.remove();
    }

    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.textContent = successMessage;
    successDiv.style.cssText = `
      padding: 12px;
      margin-bottom: 15px;
      background-color: #2ed573;
      color: white;
      border-radius: 5px;
      font-size: 0.95em;
    `;

    contactForm.insertBefore(successDiv, contactForm.firstChild);

    // Remove success after 3 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 3000);
  }

  // Handle form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Show success message
    showSuccess(
      "✓ Thank you! Your message has been received. We'll get back to you soon!",
    );

    // Reset form
    contactForm.reset();

    // Optional: Send to backend
    // const formData = new FormData(contactForm);
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData
    // }).then(response => response.json());
  });
} else {
  console.warn("Contact form not found");
}
