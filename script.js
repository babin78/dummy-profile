// 1. Mobile Menu Logic
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Changes menu icon to 'X'
  navbar.classList.toggle("active"); // Slides the navbar in
};

// 2. Typewriter Effect
const typed = new Typed(".typing-text", {
  strings: ["Frontend Developer", "Web Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// 3. Smooth Scrolling & Active Link Detection
const navLinks = document.querySelectorAll(".navbar a");
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
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });
});

// 4. Sticky Header - Hide on scroll down, Show on scroll up
let lastScrollTop = 0;
const header = document.querySelector(".header");
const goToTopBtn = document.getElementById("goToTop");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  // HEADER HIDE/SHOW LOGIC
  if (scrollTop > 100) {
    // After scrolling down 100px (10% equivalent for most screens)
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
    goToTopBtn.classList.remove("pulse");

    // Add pulse animation first time it appears
    if (!goToTopBtn.hasAttribute("data-shown")) {
      goToTopBtn.setAttribute("data-shown", "true");
      goToTopBtn.classList.add("pulse");
    }
  } else {
    // Hide button at top
    goToTopBtn.classList.remove("show");
  }
});

// GO TO TOP BUTTON CLICK HANDLER
goToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 5. Intersection Observer for fade-in animations
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
document
  .querySelectorAll(".skill-card, .service-card, .portfolio-card")
  .forEach((el) => {
    observer.observe(el);
  });
