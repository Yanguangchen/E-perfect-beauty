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
    ["eyebrow-embroidery-first-visit.html", "First brow visit"],
    ["pricing.html#embroidery", "Embroidery pricing"],
    ["service-trust.html#embroidery", "How embroidery visits work"],
  ],
  "korean-misty-brows": [
    ["eyebrow-embroidery-first-visit.html", "First brow visit"],
    ["pricing.html#korean-misty-eyebrow", "Korean misty brow pricing"],
    ["service-trust.html#korean-misty-eyebrow", "Why clients trust the mapping"],
  ],
  "hydration-facial-routine": [
    ["pricing.html#facials", "Facial pricing"],
    ["hydra-facial-or-whitening.html", "Hydra facial or whitening"],
    ["contact.html", "Book a facial"],
  ],
  "eyebrow-embroidery-first-visit": [
    ["blog.html#aftercare-embroidery", "7–10 day aftercare note"],
    ["pricing.html#embroidery", "Embroidery pricing"],
    ["lip-embroidery-guide.html", "Lip embroidery guide"],
  ],
  "lip-embroidery-guide": [
    ["media.html", "Lip embroidery photos"],
    ["pricing.html#embroidery", "Embroidery pricing"],
    ["eyebrow-embroidery-first-visit.html", "First brow visit"],
  ],
  "hydra-facial-or-whitening": [
    ["whitening-treatment.html", "Needle-free whitening"],
    ["pricing.html#facials", "Facial pricing"],
    ["blog.html#hydration-facial-routine", "Daily hydration habits"],
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
    const imgWrap = document.createElement(post.href ? "a" : "div");
    imgWrap.className = "blog-post__image-wrap";
    if (post.href) {
      imgWrap.href = post.href;
    }
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
  if (post.href) {
    const titleLink = document.createElement("a");
    titleLink.href = post.href;
    titleLink.textContent = post.title || "Untitled";
    title.appendChild(titleLink);
  } else {
    title.textContent = post.title || "Untitled";
  }
  contentWrap.appendChild(title);

  // Body
  contentWrap.appendChild(renderPostBody(post.content));
  contentWrap.appendChild(relatedLinksElement(post));
  if (post.href) {
    const more = document.createElement("p");
    more.className = "blog-post__related";
    const moreLink = document.createElement("a");
    moreLink.href = post.href;
    moreLink.textContent = "Read the full guide";
    more.appendChild(moreLink);
    contentWrap.appendChild(more);
  }

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

