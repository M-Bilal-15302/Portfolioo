/* ============ EDIT ME: your content ============ */
const FORM_ENDPOINT = ""; // Formspree URL, e.g. "https://formspree.io/f/xxxxxx". Empty = opens the visitor's email app.
const ROLES = [
  "MERN Stack Developer",
  "React & Node.js Engineer",
  "Full-Stack Problem Solver",
];
const NAV = [
  ["home", "fa-house", "Home"],
  ["work", "fa-folder-open", "Projects"],
  ["about", "fa-user", "About"],
  ["stack", "fa-bolt", "Skills"],
  ["services", "fa-briefcase", "Services"],
  ["contact", "fa-envelope", "Contact"],
];
// Replace every "#" with your real links. Add `img: "assets/your-shot.jpg"` to show a screenshot. `h` = colour hue (0-360).
const PROJECTS = [
  {
    title: "BuyNRent",
    h: 265,
    img: "assets/property.jpg",
    featured: true,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    desc: [
      "A full-stack Airbnb-style rental marketplace. Search stays, save favourites and reserve dates with a live price breakdown.",
      "Built on the MERN stack: a React interface, an Express and Node.js REST API, and MongoDB for listings and bookings.",
    ],
    live: "#",
    code: "#",
  },
  {
    title: "Movie Explorer",
    h: 335,
    img: "assets/movieExp.jpg",
    tags: ["React", "TMDB API", "Tailwind CSS"],
    desc: [
      "Search, filter and follow film trends in real time, with rich banners and cached async data.",
      "Fetches movie details, cast and user ratings through async API requests, with responsive layouts and efficient state handling.",
    ],
    live: "#",
    code: "https://github.com/M-Bilal-15302/movie-explorer",
  },
  {
    title: "Currency Converter",
    h: 200,
    img: "assets/currency.jpg",
    tags: ["React", "fetch API"],
    desc: [
      "Fast exchange-rate calculations powered by live market data across currencies.",
      "Built with React and the fetch API, with a simple, mobile-friendly layout that is easy to use on any device.",
    ],
    live: "#",
    code: "#",
  },
  {
    title: "Secure Password Generator",
    h: 160,
    img: "assets/passGen.jpg",
    tags: ["React", "Hooks", "Web Crypto"],
    desc: [
      "Custom length and character rules, one-click copy and a live strength meter.",
      "Passwords are generated in the browser with the Web Crypto API, so they are strong and truly random.",
    ],
    live: "#",
    code: "#",
  },
];
const STACK = [
  [
    "fa-code",
    "Programming",
    ["Python", "C++", "JavaScript", "PHP", "Git and GitHub"],
  ],
  [
    "fa-palette",
    "Frontend",
    ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive design"],
  ],
  [
    "fa-server",
    "Backend and database",
    ["Node.js", "Express", "REST APIs", "MongoDB", "SQL"],
  ],
  [
    "fa-chart-line",
    "Data and analytics",
    [
      "Pandas",
      "NumPy",
      "Web scraping",
      "Data cleaning",
      "EDA",
      "Data visualization",
    ],
  ],
  [
    "fa-network-wired",
    "Networking and systems",
    ["TCP/IP", "HTTP/HTTPS", "DNS", "Operating systems", "DSA", "DBMS"],
  ],
  [
    "fa-pen-ruler",
    "Office and design",
    [
      "MS Word",
      "MS Excel",
      "PowerPoint",
      "Graphic design",
      "UI/UX design",
      "Figma",
    ],
  ],
];
const SERVICES = [
  [
    "fa-laptop-code",
    "Frontend development",
    "Fast, responsive interfaces that look great on every screen.",
    [
      "React.js single-page apps",
      "Tailwind CSS and custom styling",
      "Responsive, accessible layouts",
    ],
  ],
  [
    "fa-server",
    "Backend and APIs",
    "Secure server-side logic and well-structured data.",
    [
      "Node.js and Express REST APIs",
      "MongoDB and SQL database design",
      "Third-party API integration",
    ],
  ],
  [
    "fa-layer-group",
    "Full-stack MERN apps",
    "Complete products, from the database to the interface.",
    [
      "Planning, building and deploying",
      "Clean, maintainable code",
      "Bug fixes and new features",
    ],
  ],
  [
    "fa-chart-pie",
    "Data analysis and reports",
    "Turn raw data into clear, useful insights.",
    [
      "Python, Pandas and NumPy analysis",
      "Data cleaning, EDA and web scraping",
      "Charts and summary reports",
    ],
  ],
  [
    "fa-pen-ruler",
    "UI/UX and graphic design",
    "Clean layouts and visuals that support your brand.",
    [
      "Wireframes and prototypes in Figma",
      "Graphics for web and social media",
      "Design-to-code handoff",
    ],
  ],
  [
    "fa-gears",
    "Custom software and automation",
    "Tools that save time on repeated work.",
    [
      "Python scripts and automation",
      "Object-oriented utilities",
      "Documents and sheets in MS Office",
    ],
  ],
];
/* ================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Navigation: dock (tablet/laptop) and menu (mobile) share one list */
const item = (n) =>
  `<a class="dock-item" href="#${n[0]}"><i class="fa-solid ${n[1]}"></i><span>${n[2]}</span></a>`;
$("#dock-tray").innerHTML = $("#m-grid").innerHTML = NAV.map(item).join("");
$("#foot-links").className = "space-y-2.5 foot-list";
$("#foot-links").innerHTML = NAV.map(
  (n) => `<li><a href="#${n[0]}">${n[2]}</a></li>`,
).join("");
const menuBtn = $("#menu-btn"),
  menu = $("#mobile-menu");
const setMenu = (open) => {
  menu.classList.toggle("hidden", !open);
  menuBtn.setAttribute("aria-expanded", open);
  $("i", menuBtn).className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
menuBtn.onclick = () => setMenu(menu.classList.contains("hidden"));
$$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));

/* Scroll: active dock item and top progress bar */
function onScroll() {
  let cur = "home";
  $$("section[id]").forEach((s) => {
    if (scrollY >= s.offsetTop - 240) cur = s.id;
  });
  $$(".dock-item").forEach((a) =>
    a.classList.toggle("on", a.getAttribute("href") === "#" + cur),
  );
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Hero: letter-by-letter name reveal and typing roles */
const nm = $("#hero-name");
nm.innerHTML = [...nm.textContent]
  .map(
    (c, i) =>
      `<span class="ch" aria-hidden="true" style="animation-delay:${i * 45}ms">${c === " " ? "&nbsp;" : c}</span>`,
  )
  .join("");
(function typer() {
  const el = $("#typed");
  let r = 0,
    c = 0,
    del = false;
  (function tick() {
    const w = ROLES[r];
    el.textContent = w.slice(0, c);
    if (!del && c === w.length) {
      del = true;
      return setTimeout(tick, 1600);
    }
    if (del && c === 0) {
      del = false;
      r = (r + 1) % ROLES.length;
    }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 30 : 70);
  })();
})();

/* Projects: text on the left, image on the right (image on top on mobile and tablet) */
$("#projects").innerHTML = PROJECTS.map(
  (p, i) => `
  <article class="proj reveal" style="--g1:hsl(${p.h} 75% 45%);--g2:hsl(${(p.h + 55) % 360} 80% 55%)">
    <div class="proj-info">
      <p class="proj-num">0${i + 1}${p.featured ? '<span class="proj-pill">Featured</span>' : ""}</p>
      <h3 class="proj-title">${p.title}</h3>
      ${p.desc.map((d) => `<p class="proj-desc">${d}</p>`).join("")}
      <div class="flex flex-wrap gap-2 stagger">${p.tags.map((t, k) => `<span class="chip" style="transition-delay:${k * 70}ms">${t}</span>`).join("")}</div>
      <div class="proj-links">
        <a class="proj-link" target="_blank" rel="noopener" href="${p.live}">Live project<i class="fa-solid fa-arrow-right"></i></a>
        <a class="proj-link" target="_blank" rel="noopener" href="${p.code}">Source code<i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
    <div class="proj-media"><div class="proj-frame">
      <div class="shot">${p.img ? `<img src="${p.img}" alt="${p.title} screenshot" loading="lazy" onerror="this.remove()">` : ""}<i class="fa-solid fa-laptop-code"></i><span>${p.title}</span></div>
    </div></div>
  </article>`,
).join("");
$("#stack-grid").innerHTML = STACK.map(
  (s) => `
  <div class="card reveal p-5"><i class="fa-solid ${s[0]} text-lg text-violet-400 mb-3"></i><h3 class="font-bold mb-3">${s[1]}</h3>
  <div class="flex flex-wrap gap-2 stagger">${s[2].map((t, i) => `<span class="chip" style="transition-delay:${i * 60}ms">${t}</span>`).join("")}</div></div>`,
).join("");
$("#services-grid").innerHTML = SERVICES.map(
  (s) => `
  <div class="card reveal p-6"><div class="w-9 h-9 rounded-xl bg-violet-600/20 text-violet-300 flex items-center justify-center mb-4"><i class="fa-solid ${s[0]}"></i></div>
  <h3 class="font-bold mb-1.5">${s[1]}</h3><p class="text-gray-400 leading-relaxed mb-3">${s[2]}</p>
  <ul class="space-y-1.5 text-[11px] text-gray-300">${s[3].map((x) => `<li class="flex gap-2"><i class="fa-solid fa-check text-emerald-400 mt-[3px] text-[9px]"></i>${x}</li>`).join("")}</ul></div>`,
).join("");

/* Reveal on scroll, section title underline, counters */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
      $$("[data-count]", e.target).forEach((n) => {
        const end = +n.dataset.count,
          dec = +(n.dataset.dec || 0),
          t0 = performance.now();
        (function step(t) {
          const k = Math.min((t - t0) / 1200, 1);
          n.textContent = (end * (1 - Math.pow(1 - k, 3))).toFixed(dec);
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      });
    }),
  { threshold: 0.15 },
);
$$(".reveal").forEach((el) => io.observe(el));

/* Pointer effects: page glow, card spotlight, 3D tilt, magnetic buttons */
document.addEventListener("pointermove", (e) => {
  document.body.style.setProperty("--cx", e.clientX + "px");
  document.body.style.setProperty("--cy", e.clientY + "px");
  const c = e.target.closest && e.target.closest(".card");
  if (c) {
    const r = c.getBoundingClientRect(),
      x = e.clientX - r.left,
      y = e.clientY - r.top;
    c.style.setProperty("--mx", x + "px");
    c.style.setProperty("--my", y + "px");
    if (!reduce && c.classList.contains("tilt") && e.pointerType === "mouse")
      c.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * 6}deg) rotateY(${(x / r.width - 0.5) * 6}deg) translateY(-3px)`;
  }
  if (reduce) return;
  $$(".mag").forEach((b) => {
    const r = b.getBoundingClientRect(),
      dx = e.clientX - (r.left + r.width / 2),
      dy = e.clientY - (r.top + r.height / 2);
    b.style.transform =
      Math.hypot(dx, dy) < 90 ? `translate(${dx * 0.25}px,${dy * 0.35}px)` : "";
  });
});
$$(".tilt").forEach((c) =>
  c.addEventListener("pointerleave", () => (c.style.transform = "")),
);

/* Contact form */
$("#contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const d = {
    name: $("#name").value,
    email: $("#email").value,
    subject: $("#subject").value,
    message: $("#message").value,
  };
  const st = $("#form-status");
  if (!FORM_ENDPOINT) {
    location.href = `mailto:iambilal.co@gmail.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message + "\n\nFrom: " + d.name + " (" + d.email + ")")}`;
    st.className = "text-sm text-emerald-400";
    st.textContent = "Opening your email app to send the message.";
    return;
  }
  try {
    const r = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(d),
    });
    if (!r.ok) throw 0;
    st.className = "text-sm text-emerald-400";
    st.textContent = `Thanks ${d.name}, your message was sent.`;
    e.target.reset();
  } catch {
    st.className = "text-sm text-red-400";
    st.textContent =
      "Message not sent. Check your connection or email me directly.";
  }
});
