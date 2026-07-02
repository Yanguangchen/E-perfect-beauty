import { blogPosts } from "./blog-posts.js";
import { renderPostsInto } from "./blog-render.js";

const blogPostsEl = document.getElementById("blogPosts");
const blogFilterEl = document.getElementById("blogFilter");

function filterPosts(category) {
  if (category === "all") {
    return blogPosts;
  }
  return blogPosts.filter(post => 
    post.tags && post.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
  );
}

function initBlog() {
  // Initial render
  renderPostsInto(blogPostsEl, blogPosts);

  // Filter logic
  if (blogFilterEl) {
    const filterBtns = blogFilterEl.querySelectorAll(".blog-filter__btn");
    
    filterBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove("active"));
        // Add active class to clicked
        e.target.classList.add("active");
        
        // Filter and render
        const category = e.target.getAttribute("data-filter");
        const filteredPosts = filterPosts(category);
        renderPostsInto(blogPostsEl, filteredPosts);
      });
    });
  }
}

initBlog();
