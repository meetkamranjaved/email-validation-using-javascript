document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email-id");
  const errorMsg = document.getElementById("error-msg");
  const icon = document.getElementById("icon");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const states = {
    VALID: "valid",
    INVALID: "invalid",
    EMPTY: "empty",
  };
  let currentState = states.EMPTY;
  emailInput.addEventListener("input", () => {
    clearTimeout(emailInput.timer);
    emailInput.timer = setTimeout(validateEmail, 300);
  });
  function validateEmail() {
    const email = emailInput.value.trim();
    if (email === "") {
      if (currentState !== states.EMPTY) {
        setState(states.EMPTY);
      }
      return;
    }
    if (emailRegex.test(email)) {
      if (currentState !== states.VALID) {
        setState(states.VALID);
      }
    } else {
      if (currentState !== states.INVALID) {
        setState(states.INVALID);
      }
    }
  }
  function setState(state) {
    currentState = state;
    emailInput.classList.remove(states.VALID, states.INVALID);
    icon.classList.remove(states.VALID, states.INVALID, "visible");
    errorMsg.classList.remove("visible");
    switch (state) {
      case states.VALID:
        emailInput.classList.add(states.VALID);
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.classList.add(states.VALID, "visible");
        break;
      case states.INVALID:
        emailInput.classList.add(states.INVALID);
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.classList.add(states.INVALID, "visible");
        errorMsg.classList.add("visible");
        break;
      case states.EMPTY:
        break;
    }
  }
});

// Project: Email Validation
// Author: Kamran Javed
// Portfolio: https://kamranjaved.com
// Company: OneDigitalLine
// Website: https://onedigitalline.com
// Email: meet@kamranjaved.com
// License: For personal or client use only. Redistribution prohibited.
// © Kamran Javed. All rights reserved.
