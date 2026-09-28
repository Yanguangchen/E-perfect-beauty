export function formatPostDate(isoString) {
  if (!isoString) return "";
  try {
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
    });
  } catch {
    return "";
  }
}

export function renderPostBody(text) {
  const wrap = document.createElement("div");
  wrap.className = "blog-post__body";
  const lines = String(text || "").split("\n");
  lines.forEach((line) => {
    if (line.trim() !== "") {
      const p = document.createElement("p");
      p.textContent = line;
      wrap.appendChild(p);
    }
  });
  return wrap;
}

const RELATED_LINKS = {
  "top-beauty-trends-bukit-panjang": [
    ["index.html#services", "All treatments"],
    ["pricing.html#korean-misty-eyebrow", "Korean misty brows"],
    ["about-us.html", "Meet Evelyn"],
    ["contact.html", "Book a visit"],
  ],
  "aftercare-embroidery": [
    ["pricing.html#embroidery", "Embroidery pricing"],
    ["service-trust.html#embroidery", "How embroidery visits work"],
    ["contact.html", "Message Evelyn"],
  ],
  "korean-misty-brows": [
    ["pricing.html#korean-misty-eyebrow", "Korean misty brow pricing"],
    ["service-trust.html#korean-misty-eyebrow", "Why clients trust the mapping"],
    ["contact.html", "Book a consult"],
  ],
  "hydration-facial-routine": [
    ["pricing.html#facials", "Facial pricing"],
    ["whitening-treatment.html", "Needle-free whitening"],
    ["contact.html", "Book a facial"],
  ],
};

function relatedLinksElement(post) {
  const links = RELATED_LINKS[post.id] || [["contact.html", "Book a visit"]];
  const paragraph = document.createElement("p");
  paragraph.className = "blog-post__related";
  paragraph.append("Related: ");
  links.forEach(([href, label], index) => {
    if (index > 0) paragraph.append(" · ");
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.textContent = label;
    paragraph.appendChild(anchor);
  });
  return paragraph;
}

export function createPostArticle(post, isFeatured = false) {
  const article = document.createElement("article");
  article.className = "blog-post";
  if (post.id) article.id = post.id;
  
  if (isFeatured) {
    article.classList.add("blog-post--featured");
  }

  // Image section
  if (post.image) {
    const imgWrap = document.createElement("div");
    imgWrap.className = "blog-post__image-wrap";
    const img = document.createElement("img");
    img.className = "blog-post__image";
    img.src = post.image;
    img.alt = post.title;
    img.width = 1100;
    img.height = 614;
    img.decoding = "async";
    img.loading = isFeatured ? "eager" : "lazy";
    if (isFeatured) img.setAttribute("fetchpriority", "high");
    imgWrap.appendChild(img);
    article.appendChild(imgWrap);
  }

  // Content wrapper
  const contentWrap = document.createElement("div");
  contentWrap.className = "blog-post__content-wrap";

  // Tags
  if (post.tags && post.tags.length > 0) {
    const tagsWrap = document.createElement("div");
    tagsWrap.className = "blog-post__tags";
    post.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "blog-post__tag";
      span.textContent = tag;
      tagsWrap.appendChild(span);
    });
    contentWrap.appendChild(tagsWrap);
  }

  // Title
  const title = document.createElement("h2");
  title.className = "blog-post__title";
  title.textContent = post.title || "Untitled";
  contentWrap.appendChild(title);

  // Body
  contentWrap.appendChild(renderPostBody(post.content));
  contentWrap.appendChild(relatedLinksElement(post));

  // Meta (Footer of card)
  const meta = document.createElement("div");
  meta.className = "blog-post__meta";
  
  const authorWrap = document.createElement("div");
  authorWrap.className = "blog-post__author";
  const authorImg = document.createElement("div");
  authorImg.className = "blog-post__author-avatar";
  authorImg.textContent = post.authorName ? post.authorName.charAt(0).toUpperCase() : "E";
  const authorName = document.createElement("span");
  authorName.textContent = post.authorName || "Team";
  authorWrap.appendChild(authorImg);
  authorWrap.appendChild(authorName);
  
  const dateStr = formatPostDate(post.createdAt);
  const readTime = post.readTime || "3 min read";
  const metaText = document.createElement("span");
  metaText.className = "blog-post__meta-text";
  metaText.textContent = `${dateStr} · ${readTime}`;

  meta.appendChild(authorWrap);
  meta.appendChild(metaText);
  contentWrap.appendChild(meta);

  article.appendChild(contentWrap);

  return article;
}

export function renderPostsInto(container, posts) {
  if (!container) return;

  container.replaceChildren();

  if (!posts.length) {
    const empty = document.createElement("p");
    empty.className = "blog-posts__empty";
    empty.textContent = "No posts found for this category.";
    container.appendChild(empty);
    return;
  }

  posts.forEach((post, index) => {
    // Make the first post featured if there are more than 1 posts in total being shown
    const isFeatured = index === 0 && posts.length > 1;
    container.appendChild(createPostArticle(post, isFeatured));
  });
}

