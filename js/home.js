document.addEventListener("DOMContentLoaded", () => {
  const welcomeHeading = document.querySelector(".welcome-heading");
  const profileName = document.querySelector(".profile-details h3");
  const profileEmail = document.querySelector(".profile-details p");
  
  const savedUser = localStorage.getItem("fitlive_user");
  if (savedUser) {
    try {
      const userData = JSON.parse(savedUser);
      if (userData.name && welcomeHeading) {
        welcomeHeading.textContent = `Olá, ${userData.name}`;
      }
      if (userData.name && profileName) {
        profileName.textContent = userData.name;
      }
      if (userData.email && profileEmail) {
        profileEmail.textContent = userData.email;
      }
    } catch (e) {
    }
  }

  const notificationBtn = document.querySelector(".notification-btn");
  if (notificationBtn) {
    notificationBtn.addEventListener("click", () => {
    });
  }

  const promoBtn = document.querySelector(".btn-promo");
  if (promoBtn) {
    promoBtn.addEventListener("click", () => {
    });
  }
});