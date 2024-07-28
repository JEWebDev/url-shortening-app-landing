const linkInput = document.querySelector("#user-link");
const shortenBtn = document.querySelector("#shorten-btn");
const linkForm = document.querySelector("#link-form");

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let link = linkInput.value.trim();
  if (validateURL(link)) {
    console.log("link is valid");
  } else {
    console.log("link is invalid");
  }
});

linkInput.addEventListener("input", (e) => {});
