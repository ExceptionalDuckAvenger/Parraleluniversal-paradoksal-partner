const html = document.querySelector("html");
const btn = document.querySelector("#toggle-btn");

function toggleDark() {
 // html.classList.toggle("dark");
  console.log(html.classList);
  if (html.classList.contains		("dark")) {
    html.classList = "light";
    btn.textContent = "Dark Mode";
  } else {
    html.classList = "dark";
    btn.textContent = "Light Mode";
  }
}

btn.addEventListener("click", toggleDark);
