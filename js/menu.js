document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector('aside[aria-label="Navegação lateral"]');
  if (!sidebar) return;

  let menuToggle = document.querySelector(".menu-toggle");

  if (!menuToggle) {
    menuToggle = document.createElement("button");
    menuToggle.type = "button";
    menuToggle.className = "menu-toggle";
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-controls", "sidebar-nav-container");

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-bars";
    icon.setAttribute("aria-hidden", "true");
    menuToggle.appendChild(icon);

    if (!sidebar.id) {
      sidebar.id = "sidebar-nav-container";
    }

    document.body.appendChild(menuToggle);
  }

  function toggleMenu(open) {
    const isExpanded = open !== undefined ? open : menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    menuToggle.setAttribute("aria-label", isExpanded ? "Fechar menu de navegação" : "Abrir menu de navegação");
    sidebar.classList.toggle("menu-open", isExpanded);
    document.body.classList.toggle("menu-open-active", isExpanded);

    const icon = menuToggle.querySelector("i");
    if (icon) {
      if (isExpanded) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  }

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  const navLinks = sidebar.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu(false);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("menu-open")) {
      toggleMenu(false);
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 768 &&
      sidebar.classList.contains("menu-open") &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      toggleMenu(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && sidebar.classList.contains("menu-open")) {
      toggleMenu(false);
    }
  });
});