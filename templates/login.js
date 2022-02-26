document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querSelector("#login");
  const createAccountForm = document.querSelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", () => {
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", () => {
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });
});
