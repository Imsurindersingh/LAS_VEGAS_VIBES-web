// Dark/Light Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark"
  );
});

// Smooth scroll (optional: handled by CSS)
// Blog post loader
async function loadBlogPosts() {
  const blogDiv = document.getElementById("blogPosts");
  const post = await fetch("blog/posts/post1.md").then(res => res.text());
  const html = marked.parse(post);
  blogDiv.innerHTML = `<div class="card">${html}</div>`;
}
loadBlogPosts();

// Contact Form (not functional - just alert)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out!");
});
