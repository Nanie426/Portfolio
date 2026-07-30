// typing effect
const text = "こんにちは！";
const output = document.getElementById("text-output");

function typeText() {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      output.textContent += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 300);
}
setTimeout(typeText, 500);

//header scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("bg-white/10", "backdrop-blur-lg", "shadow-md");
  } else {
    header.classList.remove("bg-white/10", "backdrop-blur-lg", "shadow-md");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("About-me");

  if (!aboutSection) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    aboutSection.classList.add("is-visible");
    return;
  }

  if (!("IntersectionObserver" in window)) {
    aboutSection.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  observer.observe(aboutSection);
});

// project card click event
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".group");

  projectCards.forEach((card) => {
    const links = card.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (link.getAttribute("href") === "#") {
          e.preventDefault();
          const title = card.querySelector("h3").textContent;
          console.log(`Đã bấm vào liên kết của dự án: ${title}`);
        }
      });
    });
  });
});

//menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("pointer-events-none");
    mobileMenu.classList.toggle("-translate-y-2");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("opacity-0", "pointer-events-none", "-translate-y-2");
    });
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
      mobileMenu.classList.add("opacity-0", "pointer-events-none", "-translate-y-2");
    }
  });
});