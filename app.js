/**
 * =========================================================================
 * APPLICATION LOGIC & INTERACTIVITY — DIVYANSHU JAIN PORTFOLIO
 * =========================================================================
 * - Dynamic data rendering from PORTFOLIO_DATA
 * - Sticky navigation & scrollspy active highlighting
 * - Scroll-reveal animations (IntersectionObserver)
 * - Interactive filterable skills
 * - Detailed project modal system
 * - Certificate preview modal system
 * - In-browser resume viewer modal
 * - Mobile drawer navigation
 * - Contact form client validation & feedback toast
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data configuration not loaded.");
    return;
  }

  // Initialize all sections and UI logic
  renderHero(data);
  renderAbout(data);
  renderEducation(data);
  renderSkills(data);
  renderProjects(data);
  renderAchievements(data);
  renderCertifications(data);
  renderLearningJourney(data);
  renderExperience(data);
  renderActivities(data);
  renderCodingProfiles(data);
  renderResume(data);
  renderContact(data);
  renderFooter(data);

  // Initialize interactivity features
  initScrollSpy();
  initStickyHeader();
  initMobileMenu();
  initScrollReveal();
  initBackToTop();
  initContactForm(data);
  initModals(data);
});

/* =========================================================================
   SVG ICON SYSTEM
   ========================================================================= */
function getSvgIcon(iconName, size = 20) {
  const icons = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    brain: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`,
    terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    "git-branch": `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    layout: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`,
    palette: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`,
    smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>`,
    table: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"></path><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>`,
    "bar-chart": `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    network: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>`,
    "external-link": `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>`,
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`
  };
  return icons[iconName] || icons.code;
}

/* =========================================================================
   1. HERO SECTION RENDERING
   ========================================================================= */
function renderHero(data) {
  const { profile, socialLinks } = data;

  const heroNameEl = document.getElementById("hero-name");
  const heroTitleEl = document.getElementById("hero-title");
  const heroIntroEl = document.getElementById("hero-intro");
  const heroAnimatedTextEl = document.getElementById("hero-animated-text");
  const heroAvatarEl = document.getElementById("hero-avatar-img");
  const heroSocialsEl = document.getElementById("hero-socials");

  if (heroNameEl) heroNameEl.textContent = profile.name;
  if (heroTitleEl) heroTitleEl.textContent = profile.role;
  if (heroIntroEl) heroIntroEl.textContent = profile.intro;
  if (heroAnimatedTextEl) heroAnimatedTextEl.textContent = profile.animatedBadge;
  if (heroAvatarEl) {
    heroAvatarEl.src = profile.avatar;
    heroAvatarEl.alt = `${profile.name} - Profile Avatar`;
  }

  if (heroSocialsEl) {
    heroSocialsEl.innerHTML = socialLinks
      .map(
        (item) => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${item.platform}" title="${item.platform}: ${item.label}">
          ${getSvgIcon(item.icon, 20)}
        </a>
      `
      )
      .join("");
  }
}

/* =========================================================================
   2. ABOUT ME SECTION RENDERING
   ========================================================================= */
function renderAbout(data) {
  const { about } = data;

  const aboutIntroEl = document.getElementById("about-narrative");
  const aboutExploringEl = document.getElementById("about-exploring-grid");
  const aboutStrengthsEl = document.getElementById("about-strengths-list");
  const aboutAspirationEl = document.getElementById("about-aspiration-text");

  if (aboutIntroEl) {
    aboutIntroEl.innerHTML = about.paragraphs
      .map((p) => `<p class="about-p">${p}</p>`)
      .join("");
  }

  if (aboutAspirationEl) {
    aboutAspirationEl.textContent = about.careerAspirations;
  }

  if (aboutExploringEl) {
    aboutExploringEl.innerHTML = about.currentlyExploring
      .map(
        (item) => `
        <div class="exploring-item">
          <span style="color: var(--brand-cyan); display: inline-flex;">${getSvgIcon(item.icon, 18)}</span>
          <span>${item.name}</span>
        </div>
      `
      )
      .join("");
  }

  if (aboutStrengthsEl) {
    aboutStrengthsEl.innerHTML = about.strengths
      .map(
        (strength) => `
        <li class="strength-item">
          <span class="strength-icon">${getSvgIcon("check", 18)}</span>
          <span>${strength}</span>
        </li>
      `
      )
      .join("");
  }
}

/* =========================================================================
   3. EDUCATION TIMELINE RENDERING
   ========================================================================= */
function renderEducation(data) {
  const container = document.getElementById("education-timeline");
  if (!container) return;

  container.innerHTML = data.education
    .map(
      (item) => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="glass-card education-card">
          <div class="edu-header">
            <div>
              <h3 class="edu-degree">${item.degree}</h3>
              <p class="edu-branch">${item.branch}</p>
            </div>
            <span class="badge ${item.status === "Pursuing" ? "badge-cyan" : "badge-emerald"}">
              ${item.status}
            </span>
          </div>

          <div class="edu-institution">
            ${getSvgIcon("mapPin", 16)}
            <span>${item.institution}</span>
          </div>

          <div class="edu-meta-grid">
            <div class="edu-meta-item">
              <span class="edu-meta-label">Academic Duration</span>
              <span class="edu-meta-val">${item.year}</span>
            </div>
            <div class="edu-meta-item">
              <span class="edu-meta-label">CGPA / Percentage</span>
              <span class="edu-meta-val" style="color: var(--brand-amber);">${item.cgpa}</span>
            </div>
          </div>

          ${
            item.relevantSubjects && item.relevantSubjects.length > 0
              ? `
              <div class="edu-subjects-title">Key Curricular Coursework</div>
              <div class="edu-tags">
                ${item.relevantSubjects
                  .map((sub) => `<span class="subject-tag">${sub}</span>`)
                  .join("")}
              </div>
            `
              : ""
          }
        </div>
      </div>
    `
    )
    .join("");
}

/* =========================================================================
   4. SKILLS SECTION RENDERING & FILTERING
   ========================================================================= */
function renderSkills(data) {
  const filterContainer = document.getElementById("skills-filter");
  const gridContainer = document.getElementById("skills-grid");
  if (!filterContainer || !gridContainer) return;

  const categories = data.skills.categories;
  const items = data.skills.items;

  // Render Filter Buttons
  filterContainer.innerHTML = categories
    .map(
      (cat, idx) => `
      <button class="filter-btn ${idx === 0 ? "active" : ""}" data-category="${cat}">
        ${cat}
      </button>
    `
    )
    .join("");

  // Function to render items
  function displaySkills(category) {
    const filtered =
      category === "All"
        ? items
        : items.filter((item) => item.category === category);

    gridContainer.innerHTML = filtered
      .map((skill) => {
        let badgeClass = "badge-indigo";
        if (skill.level === "Currently Learning") badgeClass = "badge-amber";
        else if (skill.level === "Intermediate") badgeClass = "badge-cyan";
        else if (skill.level === "Advanced") badgeClass = "badge-emerald";

        return `
          <div class="glass-card skill-card reveal">
            <div class="skill-top">
              <div class="skill-icon-wrap">
                ${getSvgIcon(skill.icon, 22)}
              </div>
              <span class="badge ${badgeClass}">${skill.level}</span>
            </div>
            <h4 class="skill-name">${skill.name}</h4>
            <p class="skill-desc">${skill.description}</p>
          </div>
        `;
      })
      .join("");

    // Trigger reveal class
    setTimeout(() => {
      document.querySelectorAll(".skill-card").forEach((card) => card.classList.add("active"));
    }, 50);
  }

  // Initial display
  displaySkills("All");

  // Event delegation for filter buttons
  filterContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    displaySkills(btn.dataset.category);
  });
}

/* =========================================================================
   5. PROJECTS SECTION RENDERING
   ========================================================================= */
function renderProjects(data) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = data.projects
    .map((proj) => {
      return `
      <div class="glass-card project-card reveal" data-project-id="${proj.id}">
        <div class="project-preview">
          ${
            proj.featured
              ? `<div class="featured-badge-pill"><span class="badge badge-cyan">Featured</span></div>`
              : ""
          }
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>

          <div class="project-problem-box">
            <strong>Problem Solved:</strong> ${proj.problemSolved}
          </div>

          <div class="project-tech-tags">
            ${proj.technologies
              .map((t) => `<span class="tech-tag">${t}</span>`)
              .join("")}
          </div>

          <ul class="project-features-list">
            ${proj.keyFeatures
              .slice(0, 3)
              .map((feat) => `<li>${feat}</li>`)
              .join("")}
          </ul>

          <div class="project-footer-actions">
            ${
              proj.liveDemoUrl
                ? `<a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                    ${getSvgIcon("external-link", 14)} Live Demo
                   </a>`
                : ""
            }
            ${
              proj.githubUrl
                ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
                    ${getSvgIcon("github", 14)} GitHub
                   </a>`
                : ""
            }
            <button type="button" class="btn btn-sm btn-outline btn-view-project" data-project-id="${proj.id}">
              View Details
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

/* =========================================================================
   6. ACHIEVEMENTS SECTION RENDERING
   ========================================================================= */
function renderAchievements(data) {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  container.innerHTML = data.achievements
    .map((ach) => `
      <div class="glass-card achievement-card reveal">
        <div class="ach-cat-date">
          <span class="badge badge-amber">${ach.category}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${ach.date}</span>
        </div>
        <h3 class="ach-title">${ach.title}</h3>
        <p class="ach-org">${ach.organization}</p>
        <p class="ach-desc">${ach.description}</p>
        ${
          ach.proofUrl
            ? `<a href="${ach.proofUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" style="margin-top: auto; width: fit-content;">
                ${getSvgIcon("external-link", 14)} View Proof
               </a>`
            : `<span style="font-size: 0.78rem; color: var(--text-muted); margin-top: auto; font-style: italic;">Proof to be updated</span>`
        }
      </div>
    `)
    .join("");
}

/* =========================================================================
   7. CERTIFICATIONS SECTION RENDERING
   ========================================================================= */
function renderCertifications(data) {
  const container = document.getElementById("certifications-grid");
  if (!container) return;

  container.innerHTML = data.certifications
    .map((cert) => `
      <div class="glass-card cert-card reveal">
        <div class="cert-thumbnail">
          <img src="${cert.thumbnail}" alt="${cert.name}" loading="lazy">
        </div>
        <div>
          <h3 class="cert-name">${cert.name}</h3>
          <p class="cert-org">${cert.organization} • ${cert.date}</p>
        </div>
        <p class="cert-details"><strong>Skills:</strong> ${cert.skillsCovered}</p>
        <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">
          ID: ${cert.credentialId}
        </div>
        <button type="button" class="btn btn-sm btn-outline btn-view-cert" data-cert-id="${cert.id}" style="margin-top: auto;">
          ${getSvgIcon("external-link", 14)} View Certificate
        </button>
      </div>
    `)
    .join("");
}

/* =========================================================================
   8. LEARNING JOURNEY RENDERING
   ========================================================================= */
function renderLearningJourney(data) {
  const highlightEl = document.getElementById("learning-highlight-card");
  const phasesEl = document.getElementById("learning-phases-grid");
  if (!highlightEl || !phasesEl) return;

  const { currentlyLearningHighlight, phases } = data.learningJourney;

  highlightEl.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
      <span class="badge badge-cyan">${currentlyLearningHighlight.title}</span>
      <span class="badge badge-amber">${currentlyLearningHighlight.progress}</span>
    </div>
    <h3 class="learning-focus-title">${currentlyLearningHighlight.focus}</h3>
    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 18px;">
      ${currentlyLearningHighlight.description}
    </p>
    <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: var(--brand-cyan); margin-bottom: 8px;">
      Active Weekly Targets:
    </div>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
      ${currentlyLearningHighlight.weeklyGoals
        .map((goal) => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: var(--text-secondary);">
            <span style="color: var(--brand-emerald);">${getSvgIcon("check", 16)}</span>
            <span>${goal}</span>
          </li>
        `)
        .join("")}
    </ul>
  `;

  phasesEl.innerHTML = phases
    .map((phase) => {
      let badgeClass = "badge-emerald";
      if (phase.status === "current") badgeClass = "badge-cyan";
      if (phase.status === "upcoming") badgeClass = "badge-indigo";

      return `
        <div class="glass-card phase-card reveal">
          <div class="phase-header">
            <span class="badge ${badgeClass}">${phase.badge}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${phase.period}</span>
          </div>
          <h3 class="phase-title">${phase.phase}</h3>
          <div class="phase-topics-list">
            ${phase.topics
              .map((t) => `
                <div class="topic-item">
                  <div class="topic-name">${t.name}</div>
                  <div class="topic-detail">${t.detail}</div>
                </div>
              `)
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

/* =========================================================================
   9. EXPERIENCE SECTION RENDERING
   ========================================================================= */
function renderExperience(data) {
  const container = document.getElementById("experience-container");
  if (!container) return;

  const { currentStatusMessage, opportunitiesOpenFor } = data.experience;

  container.innerHTML = `
    <div class="glass-card experience-hero-box reveal">
      <div class="experience-hero-badge">
        <span class="badge badge-cyan">First-Year Milestone</span>
      </div>
      <p class="experience-hero-quote">
        "${currentStatusMessage}"
      </p>
      <div style="font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--brand-cyan); margin-top: 16px;">
        Actively Open For:
      </div>
      <div class="opportunities-list">
        ${opportunitiesOpenFor
          .map((opp) => `
            <div class="opp-item">
              <span style="color: var(--brand-cyan);">${getSvgIcon("sparkles", 18)}</span>
              <span>${opp}</span>
            </div>
          `)
          .join("")}
      </div>
      <div style="margin-top: 32px;">
        <a href="#contact" class="btn btn-primary">
          Let's Collaborate or Connect
        </a>
      </div>
    </div>
  `;
}

/* =========================================================================
   10. ACTIVITIES & CLUBS RENDERING
   ========================================================================= */
function renderActivities(data) {
  const container = document.getElementById("activities-grid");
  if (!container) return;

  container.innerHTML = data.activities
    .map((act) => `
      <div class="glass-card activity-card reveal">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="badge badge-indigo">${act.category}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${act.duration}</span>
        </div>
        <h3 class="activity-role">${act.role}</h3>
        <p class="activity-org">${act.organization}</p>
        <p class="activity-desc">${act.description}</p>
        <div class="activity-contribution-box">
          <strong>Key Contribution:</strong> ${act.contribution}
        </div>
      </div>
    `)
    .join("");
}

/* =========================================================================
   11. CODING PROFILES RENDERING
   ========================================================================= */
function renderCodingProfiles(data) {
  const container = document.getElementById("coding-profiles-grid");
  if (!container) return;

  // Rule: Only display platforms for which URLs are provided
  const validProfiles = data.codingProfiles.filter((p) => p.url && p.url.trim() !== "");

  container.innerHTML = validProfiles
    .map((p) => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="glass-card profile-card reveal">
        <div class="profile-top">
          <div style="color: var(--brand-cyan); display: inline-flex;">
            ${getSvgIcon(p.icon, 24)}
          </div>
          <span class="badge badge-indigo">${p.badge}</span>
        </div>
        <div>
          <h3 class="profile-platform">${p.platform}</h3>
          <div class="profile-user">${p.username}</div>
        </div>
        <p class="profile-desc">${p.description}</p>
        <div style="margin-top: auto; display: flex; align-items: center; gap: 6px; font-size: 0.82rem; font-weight: 600; color: var(--brand-cyan);">
          Visit Profile ${getSvgIcon("external-link", 14)}
        </div>
      </a>
    `)
    .join("");
}

/* =========================================================================
   12. RESUME SECTION RENDERING
   ========================================================================= */
function renderResume(data) {
  const container = document.getElementById("resume-content");
  if (!container) return;

  container.innerHTML = `
    <div class="glass-card resume-card reveal">
      <div class="section-badge" style="margin-bottom: 0;">Verified Credentials</div>
      <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary);">
        Curriculum Vitae — Divyanshu Jain
      </h3>
      <p style="color: var(--text-secondary); max-width: 600px;">
        ${data.resume.subtitle}
      </p>

      <div class="resume-highlights">
        ${data.resume.highlights
          .map((h) => `
            <div class="resume-highlight-item">
              <span style="color: var(--brand-emerald);">${getSvgIcon("check", 16)}</span>
              <span>${h}</span>
            </div>
          `)
          .join("")}
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; margin-top: 8px;">
        <button type="button" class="btn btn-primary btn-view-resume">
          ${getSvgIcon("external-link", 18)} View Resume
        </button>
        <button type="button" class="btn btn-secondary btn-download-resume">
          ${getSvgIcon("download", 18)} Download Resume
        </button>
      </div>
      <div style="font-size: 0.78rem; color: var(--text-muted);">
        Session: ${data.resume.lastUpdated} • Formatted for Academic & Industry Review
      </div>
    </div>
  `;
}

/* =========================================================================
   13. CONTACT SECTION RENDERING
   ========================================================================= */
function renderContact(data) {
  const infoEl = document.getElementById("contact-info");
  if (!infoEl) return;

  const { contact } = data;

  infoEl.innerHTML = `
    <div class="glass-card contact-info-card reveal">
      <div>
        <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
          Direct Channels
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">
          ${contact.subtitle}
        </p>
      </div>

      <div class="contact-method-list">
        <a href="mailto:${contact.directEmail}" class="contact-method-item">
          <div class="contact-icon-box">${getSvgIcon("mail", 20)}</div>
          <div class="contact-method-text">
            <span class="contact-label">Email</span>
            <span class="contact-val">${contact.directEmail}</span>
          </div>
        </a>

        ${
          contact.phonePlaceholder
            ? `
          <div class="contact-method-item">
            <div class="contact-icon-box">${getSvgIcon("phone", 20)}</div>
            <div class="contact-method-text">
              <span class="contact-label">Phone</span>
              <span class="contact-val">${contact.phonePlaceholder}</span>
            </div>
          </div>
        `
            : ""
        }

        <div class="contact-method-item">
          <div class="contact-icon-box">${getSvgIcon("mapPin", 20)}</div>
          <div class="contact-method-text">
            <span class="contact-label">Location</span>
            <span class="contact-val">${contact.locationText}</span>
          </div>
        </div>
      </div>

      <div style="padding: 14px; border-radius: var(--radius-sm); background: var(--bg-tertiary); font-size: 0.85rem; color: var(--brand-cyan); border-left: 3px solid var(--brand-cyan);">
        ⚡ ${contact.responseExpectation}
      </div>
    </div>
  `;
}

/* =========================================================================
   14. FOOTER RENDERING
   ========================================================================= */
function renderFooter(data) {
  const nameEl = document.getElementById("footer-name");
  const branchEl = document.getElementById("footer-branch");
  const quoteEl = document.getElementById("footer-quote");
  const copyEl = document.getElementById("footer-copy");
  const socialsEl = document.getElementById("footer-socials");

  if (nameEl) nameEl.textContent = data.footer.name;
  if (branchEl) branchEl.textContent = data.footer.degreeTagline;
  if (quoteEl) quoteEl.textContent = `"${data.footer.quote}"`;
  if (copyEl) {
    copyEl.textContent = `© ${data.footer.copyrightYear} ${data.footer.name}. All Rights Reserved.`;
  }

  if (socialsEl) {
    socialsEl.innerHTML = data.socialLinks
      .map(
        (item) => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${item.platform}">
          ${getSvgIcon(item.icon, 18)}
        </a>
      `
      )
      .join("");
  }
}

/* =========================================================================
   15. INTERACTION & SCROLL BEHAVIOR
   ========================================================================= */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

function initMobileMenu() {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    const isOpen = hamburgerBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
  }

  hamburgerBtn.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  // Dismiss if clicking outside
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });
}

function initBackToTop() {
  const btn = document.querySelector(".back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* =========================================================================
   16. MODALS MANAGEMENT
   ========================================================================= */
function initModals(data) {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (!modalOverlay || !modalTitle || !modalBody) return;

  function openModal(title, contentHtml) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // Project Details Click Delegate
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-view-project");
    if (!btn) return;

    const projectId = btn.dataset.projectId;
    const project = data.projects.find((p) => p.id === projectId);
    if (!project) return;

    const contentHtml = `
      <div>
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 20px;">
        
        <p style="font-size: 1.05rem; color: var(--text-primary); line-height: 1.6; margin-bottom: 16px;">
          ${project.description}
        </p>

        <div style="padding: 16px; border-radius: var(--radius-sm); background: var(--bg-tertiary); margin-bottom: 20px;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--brand-cyan); margin-bottom: 6px;">Problem Solved</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">${project.problemSolved}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--brand-cyan); margin-bottom: 6px;">My Technical Contribution</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">${project.myContribution}</p>
        </div>

        ${
          project.detailedOverview
            ? `
          <div style="margin-bottom: 20px;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--brand-cyan); margin-bottom: 6px;">System Architecture</h4>
            <p style="font-size: 0.95rem; color: var(--text-secondary);">${project.detailedOverview.architecture}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--brand-cyan); margin-bottom: 6px;">Key Engineering Challenges</h4>
            <p style="font-size: 0.95rem; color: var(--text-secondary);">${project.detailedOverview.challengesFaced}</p>
          </div>
        `
            : ""
        }

        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--brand-cyan); margin-bottom: 8px;">Key Features</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
            ${project.keyFeatures
              .map(
                (feat) => `
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--text-secondary);">
                <span style="color: var(--brand-emerald);">${getSvgIcon("check", 16)}</span>
                <span>${feat}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          ${
            project.liveDemoUrl
              ? `<a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  ${getSvgIcon("external-link", 16)} Live Interactive Demo
                 </a>`
              : ""
          }
          ${
            project.githubUrl
              ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                  ${getSvgIcon("github", 16)} Repository Source Code
                 </a>`
              : ""
          }
        </div>
      </div>
    `;

    openModal(project.title, contentHtml);
  });

  // Certificate Click Delegate
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-view-cert");
    if (!btn) return;

    const certId = btn.dataset.certId;
    const cert = data.certifications.find((c) => c.id === certId);
    if (!cert) return;

    const contentHtml = `
      <div style="text-align: center;">
        <img src="${cert.thumbnail}" alt="${cert.name}" style="width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 20px;">
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">${cert.name}</h3>
        <p style="color: var(--brand-cyan); font-weight: 600; margin-bottom: 12px;">${cert.organization} • ${cert.date}</p>
        <p style="color: var(--text-secondary); margin-bottom: 20px;"><strong>Skills Validated:</strong> ${cert.skillsCovered}</p>
        <div style="display: flex; justify-content: center; gap: 12px;">
          <a href="${cert.verificationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            ${getSvgIcon("external-link", 16)} Open Full Image in New Tab
          </a>
        </div>
      </div>
    `;

    openModal(`Certificate: ${cert.name}`, contentHtml);
  });

  // Resume Modal & Download Delegates
  document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-view-resume")) {
      const contentHtml = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="border-bottom: 2px solid var(--brand-primary); padding-bottom: 16px;">
            <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary);">${data.profile.name}</h2>
            <p style="color: var(--brand-cyan); font-weight: 600;">${data.profile.role}</p>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">${data.contact.directEmail} • ${data.contact.locationText}</p>
          </div>

          <div>
            <h4 style="font-size: 1rem; font-weight: 700; color: var(--brand-cyan); margin-bottom: 8px; text-transform: uppercase;">Professional Summary</h4>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${data.profile.intro}</p>
          </div>

          <div>
            <h4 style="font-size: 1rem; font-weight: 700; color: var(--brand-cyan); margin-bottom: 12px; text-transform: uppercase;">Education</h4>
            ${data.education
              .map(
                (edu) => `
              <div style="margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--text-primary);">
                  <span>${edu.degree} — ${edu.branch}</span>
                  <span style="color: var(--text-muted);">${edu.year}</span>
                </div>
                <div style="font-size: 0.9rem; color: var(--text-secondary);">${edu.institution} | Score: ${edu.cgpa}</div>
              </div>
            `
              )
              .join("")}
          </div>

          <div>
            <h4 style="font-size: 1rem; font-weight: 700; color: var(--brand-cyan); margin-bottom: 12px; text-transform: uppercase;">Key Projects</h4>
            ${data.projects
              .map(
                (p) => `
              <div style="margin-bottom: 12px;">
                <div style="font-weight: 700; color: var(--text-primary);">${p.title}</div>
                <div style="font-size: 0.88rem; color: var(--text-secondary);">${p.description}</div>
                <div style="font-size: 0.8rem; color: var(--brand-cyan); margin-top: 4px;">Tech: ${p.technologies.join(", ")}</div>
              </div>
            `
              )
              .join("")}
          </div>

          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 10px;">
            <button type="button" class="btn btn-primary" onclick="window.print()">
              Print / Save as PDF
            </button>
          </div>
        </div>
      `;
      openModal("Resume Preview — Divyanshu Jain", contentHtml);
    }

    if (e.target.closest(".btn-download-resume")) {
      showToast("Resume preview opened for download / print.");
      document.querySelector(".btn-view-resume")?.click();
    }
  });
}

/* =========================================================================
   17. CONTACT FORM VALIDATION & FEEDBACK TOAST
   ========================================================================= */
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>${getSvgIcon("check", 18)}</span> <span>${message}</span>`;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 4000);
}

function initContactForm(data) {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"]?.value.trim();
    const email = form.elements["email"]?.value.trim();
    const subject = form.elements["subject"]?.value.trim();
    const message = form.elements["message"]?.value.trim();

    if (!name || !email || !subject || !message) {
      showToast("Please fill in all form fields.");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    // Simulate clean submission and mailto intent
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      showToast(`Thank you, ${name}! Your message has been prepared.`);

      // Also trigger a mailto draft as fallback so it works 100% serverless
      const mailtoUrl = `mailto:${data.contact.directEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Hi Divyanshu,\n\n${message}\n\nFrom: ${name} (${email})`)}`;

      window.location.href = mailtoUrl;
    }, 800);
  });
}
