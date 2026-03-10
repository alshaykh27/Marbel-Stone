document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      if (mainNav.style.display === "block") {
        mainNav.style.display = "none";
      } else {
        mainNav.style.display = "block";
        mainNav.style.position = "absolute";
        mainNav.style.top = "100%";
        mainNav.style.left = "0";
        mainNav.style.right = "0";
        mainNav.style.backgroundColor = "#fff";
        mainNav.style.padding = "20px";
        mainNav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      }
    });
  }

  // Smooth Scroll for Navigation Links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        if (window.innerWidth <= 768 && mainNav) {
          mainNav.style.display = "none";
        }

        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar Background Change on Scroll
  const header = document.querySelector(".main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
    } else {
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    }
  });

  // Image Lazy Loading Placeholder
  const images = document.querySelectorAll('img[src*="placeholder"]');

  images.forEach((img) => {
    img.style.backgroundColor = "#f0f0f0";
    img.style.display = "flex";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
  });

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe marble sections for animation
  const marbleSections = document.querySelectorAll(".marble-section");
  marbleSections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Contact bar - show/hide on scroll (optional)
  let lastScroll = 0;
  const contactBar = document.querySelector(".contact-bar");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      contactBar.style.transform = "translateY(0)";
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down - hide contact bar
      contactBar.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up - show contact bar
      contactBar.style.transform = "translateY(0)";
      contactBar.style.transition = "transform 0.3s ease";
    }

    lastScroll = currentScroll;
  });

 
});
