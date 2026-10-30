// ===== Edit everything about you here =====
const ME = {
  name: "AJ", // big name on the main screen
  fullName: "AJ Jandrei Mercado", // shown on Status
  photo: "img/aj.jpg", // Status photo
  role: "Full-Stack Web & App Developer",
  github: "ajjandreimercado", // pulls avatar, stats and repos automatically
  hide: ["portfolio", "gamehaqqqqs2", "gamehaqqqs2", "gamehaqqs2", "focusfury"], // repo names to leave out of Requests
  // your own descriptions for repos (lowercase names); replaces the GitHub one
  about: {
    broombroom: "An online marketplace for buying cars, motorcycles, trucks, e-bikes and more in the Philippines. Browse and compare vehicles, apply to buy with cash or financing, and message sellers, all in one place.",
    "madyawph-booking-website": "A hotel booking website for Madyaw partner hotels. Guests find a hotel, pick a room and dates, and send a booking request. Once the hotel confirms, they pay easily with GCash or Maya.",
    emergensign: "An Android app that helps Deaf and Hard-of-Hearing patients talk to emergency responders. The phone camera reads their Filipino Sign Language and the app speaks and shows it in English and Filipino. Works fully offline, no internet needed.",
  },
  // live sites for repos (lowercase names); adds a Visit Site button to the card
  sites: {
    broombroom: "https://broombroom.onrender.com/",
    "madyawph-booking-website": "https://www.madyaw.com/",
  },
  // screenshots for repo cards (lowercase names), files in img/
  shots: {
    broombroom: "img/broombroom.jpg",
    "madyawph-booking-website": "img/madyaw.jpg",
    emergensign: "img/emergensign.jpg",
  },
  // display names for repo cards (lowercase names); otherwise the repo name is used
  titles: {
    broombroom: "BroomBroom",
    "madyawph-booking-website": "MadyawPH",
    emergensign: "EmergenSign",
  },
  cv: "AJ_Mercado_CV.pdf",
  messenger: "https://m.me/aj.jandrie.5",
  services: [
    ["Websites", "Fast, mobile-friendly sites for businesses, portfolios and shops."],
    ["Web apps", "Custom systems with sign-in, dashboards and a database, built to grow with you."],
    ["Booking systems", "Online reservations and payments for hotels, rentals and services."],
    ["Mobile apps", "Android apps your customers can use on the go, even offline."],
    ["ML features", "Smart features like image and sign recognition, powered by machine learning."],
  ],
  bio: "I'm a full-stack developer who builds websites and apps end to end, from the interface down to the API and database. I've shipped real client platforms, a vehicle marketplace and a hotel booking site, with React, TypeScript, Node.js and MongoDB. I also have hands-on experience in machine learning.",
  facts: [
    ["Based in", "Philippines"],
    ["Focus", "Web & app development, machine learning"],
    ["Top skills", "TypeScript, React, Node.js, MongoDB"],
    ["Open for", "Freelance projects and commissions"],
  ],
  // level 1–5, based on the projects in Requests
  skills: [
    { name: "TypeScript", level: 4 },
    { name: "React", level: 4 },
    { name: "Node.js / Express", level: 4 },
    { name: "MongoDB", level: 3 },
    { name: "Tailwind CSS", level: 4 },
    { name: "Machine Learning", level: 3 },
    { name: "Python", level: 3 },
    { name: "Android / Kotlin", level: 3 },
  ],
  // shown first in Requests; GitHub repos are appended after these
  projects: [],
  links: [
    { label: "GitHub", arcana: "Magician", url: "https://github.com/ajjandreimercado" },
    { label: "Email", arcana: "Lovers", url: "mailto:ajjandreimercado@gmail.com" },
  ],
};
const RANKS = ["", "Novice", "Apprentice", "Adept", "Expert", "Master"];

// ===== render =====
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const ext = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "");
// a card with a live site can't be one big link (links can't nest), so it gets two buttons instead
const card = (label, title, text, url, foot = "", site = "", shot = "") => {
  const body = `${shot ? `<img class="shot" src="${esc(shot)}" alt="Screenshot of ${esc(title)}" loading="lazy" onerror="this.remove()">` : ""}
    <span class="label">${esc(label)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p>
    ${foot ? `<span class="label">${esc(foot)}</span>` : ""}`;
  return site
    ? `<div class="panel card reveal" style="--i:2">${body}
        <span class="card-links">
          <a class="go" href="${esc(site)}"${ext(site)}>Visit Site ▶</a>
          <a href="${esc(url)}"${ext(url)}>View Code</a>
        </span>
      </div>`
    : `<a class="panel card reveal" style="--i:2" href="${esc(url)}"${ext(url)}>${body}</a>`;
};

$("#name").textContent = ME.name;
$("#fullname").textContent = ME.fullName.replace(/^AJ\s*/, "");
$("#status-name").textContent = ME.fullName;
$("#avatar").src = ME.photo;
$("#avatar").alt = ME.fullName;
$("#role").textContent = ME.role;
$("#bio").textContent = ME.bio;
$("#facts").innerHTML = ME.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
$("#stats").innerHTML = ME.skills.map((s, i) => `
  <div class="panel stat reveal" style="--i:${i + 1}">
    <h3>${esc(s.name)}</h3>
    <div class="bar">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= s.level ? "on" : ""}"></i>`).join("")}</div>
    <span class="rank">Rk ${s.level} · ${RANKS[s.level]}</span>
  </div>`).join("");
if (ME.messenger) ME.links.push({ label: "Messenger", arcana: "Chariot", url: ME.messenger });
if (ME.cv) $("#cv").innerHTML = `<a class="go" href="${esc(ME.cv)}" download>Download CV ▶</a>`;
$("#services").innerHTML = ME.services.map(([t, d], i) => `
  <div class="panel service reveal" style="--i:${i + 2}">
    <span class="label">Commission #${String(i + 1).padStart(2, "0")}</span><h3>${esc(t)}</h3><p>${esc(d)}</p>
  </div>`).join("");
const mail = ME.links.find((l) => l.url.startsWith("mailto:"));
$("#hire-links").innerHTML = [
  mail && `<a class="go" href="${esc(mail.url)}?subject=${encodeURIComponent("Project inquiry")}">Send an Email ▶</a>`,
  ME.messenger && `<a href="${esc(ME.messenger)}"${ext(ME.messenger)}>Message on Messenger</a>`,
].filter(Boolean).join("");
$("#link-list").innerHTML = ME.links.map((l) => card(`Arcana · ${l.arcana}`, l.label, l.url.replace(/^(mailto:|https?:\/\/)/, ""), l.url)).join("");

const renderProjects = (repos = []) => {
  const all = [
    ...ME.projects.map((p) => [p.name, p.desc, p.url, p.tag]),
    ...repos.map((r) => {
      const k = r.name.toLowerCase();
      return [ME.titles[k] || r.name, ME.about[k] || r.description || "No description.", r.html_url, r.language || "Code", ME.sites[k], ME.shots[k]];
    }),
  ];
  $("#projects").innerHTML = all.map(([n, d, u, t, s, img], i) => card(`Request #${String(i + 1).padStart(2, "0")}`, n, d, u, t, s, img)).join("");
};
renderProjects();

$("#gh-card").innerHTML = `<p class="muted">Set <b>github</b> in script.js to show your GitHub profile here.</p>`;
if (ME.github) {
  const api = `https://api.github.com/users/${encodeURIComponent(ME.github)}`;
  Promise.all([fetch(api), fetch(`${api}/repos?per_page=100&sort=pushed`)])
    .then(async ([u, r]) => {
      if (!u.ok || !r.ok) throw new Error(u.status === 403 ? "GitHub rate limit hit, try again later." : "GitHub user not found.");
      const [user, repos] = [await u.json(), await r.json()];
      $("#gh-card").innerHTML = `
        <img src="${esc(user.avatar_url)}" alt="">
        <div>
          <span class="label">Arcana · Magician</span>
          <h3><a href="${esc(user.html_url)}" target="_blank" rel="noopener">${esc(ME.fullName)}</a></h3>
          <p class="muted">@${esc(user.login)} · ${esc(ME.role)}</p>
          <div class="gh-nums">
            <span><b>${user.public_repos}</b>Repos</span>
          </div>
        </div>`;
      renderProjects(repos.filter((x) => !x.fork && !ME.hide.some((h) => h.toLowerCase() === x.name.toLowerCase()))
        .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
        .slice(0, 6));
    })
    .catch((e) => { $("#gh-card").innerHTML = `<p class="muted">${esc(e.message)}</p>`; });
}

// ===== HUD: P3-style date + time of day =====
const tick = () => {
  const d = new Date(), h = d.getHours();
  $("#hud-md").textContent = `${d.getMonth() + 1}/${d.getDate()}`;
  $("#hud-day").textContent = d.toLocaleDateString("en", { weekday: "short" });
  $("#hud-time").textContent = h === 0 ? "Dark Hour" : h < 5 ? "Late Night" : h < 8 ? "Early Morning"
    : h < 12 ? "Morning" : h < 15 ? "Daytime" : h < 18 ? "After School" : "Evening";
  document.body.classList.toggle("dark-hour", h === 0);
};
tick();
setInterval(tick, 60_000);

// ===== sound effects: P3R sound pack in sfx/, played through Web Audio for low latency =====
let ctx, muted = false;
try { muted = localStorage.getItem("muted") === "1"; } catch {}
const soundBtn = $("#sound");
const syncSound = () => {
  soundBtn.textContent = muted ? "Sound Off" : "Sound On";
  soundBtn.setAttribute("aria-pressed", String(!muted));
};
syncSound();

// browsers only allow audio after the visitor has clicked or pressed a key
const audio = () => {
  if (muted || !navigator.userActivation?.hasBeenActive) return null;
  if (!ctx) {
    ctx = new AudioContext();
    // decode every clip once; each play reuses the buffer
    for (const name of Object.keys(sfx))
      buffers[name] = fetch(`sfx/${name}.mp3`).then((r) => r.arrayBuffer()).then((d) => ctx.decodeAudioData(d));
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
};
const buffers = {};
const play = (name, vol = .7) => {
  const a = audio();
  if (!a) return;
  buffers[name].then((buf) => {
    const src = a.createBufferSource(), g = a.createGain();
    src.buffer = buf;
    g.gain.value = vol;
    src.connect(g).connect(a.destination);
    src.start();
  }).catch(() => {}); // a missing file just stays silent
};
const sfx = {
  move: () => play("move"),
  confirm: () => play("confirm"),
  back: () => play("back"),
  open: () => play("open"),
  on: () => play("on"),
  off: () => play("off"),
};
soundBtn.addEventListener("click", () => {
  if (!muted) sfx.off(); // play before muting, or it's blocked
  muted = !muted;
  try { localStorage.setItem("muted", muted ? "1" : "0"); } catch {}
  syncSound();
  if (!muted) sfx.on();
});

// ===== router + P3R transitions =====
const screens = [...document.querySelectorAll(".screen")];
const menu = [...document.querySelectorAll(".menu a")];
const home = $("#home");
const splash = $("#splash");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const rnd = (a, b) => a + Math.random() * (b - a);
let current, busy = false;

const show = (next) => {
  const prev = current;
  screens.forEach((s) => s.classList.toggle("active", s.id === next));
  document.body.dataset.screen = current = next;
  scrollTo(0, 0);
  // come back to the menu with the item you left from still selected
  if (next === "home") (menu.find((a) => a.hash === "#" + prev) || menu[0]).focus({ preventScroll: true });
};
const done = () => { busy = false; route(); }; // catch up if the hash changed mid-transition

// water splash: a jittered grid of blobs guarantees full cover at the peak, then the swap happens underneath
const splashTo = (next) => {
  // one goo layer per colour so edges stay crisp instead of bleeding into each other
  const w = innerWidth, h = innerHeight, cell = 200, blobs = ["", "", ""];
  let rings = "";
  for (let x = 0; x < w + cell; x += cell)
    for (let y = 0; y < h + cell; y += cell)
      blobs[(Math.random() * 3) | 0] += `<circle cx="${x + rnd(-25, 25)}" cy="${y + rnd(-25, 25)}" r="${rnd(165, 230)}" style="animation-delay:${rnd(0, 150) | 0}ms"/>`;
  for (let i = 0; i < 18; i++)
    rings += `<circle cx="${rnd(0, w)}" cy="${rnd(h * .3, h)}" r="${rnd(5, 22)}" fill="none" stroke="#3fb8ff" stroke-width="3" style="animation-delay:${rnd(100, 400) | 0}ms"/>`;
  splash.setAttribute("viewBox", `0 0 ${w} ${h}`);
  splash.querySelectorAll(".blobs").forEach((g, i) => (g.innerHTML = blobs[i]));
  splash.querySelector(".rings").innerHTML = rings;
  splash.classList.remove("go");
  void splash.getBBox(); // restart the animation
  splash.classList.add("go");
  setTimeout(() => show(next), 450);
  setTimeout(done, 900);
};

// menu pick: push in on the chosen item, next screen opens from a circle on it
const irisTo = (next, item) => {
  const r = item.getBoundingClientRect();
  document.documentElement.style.setProperty("--x", `${r.left + r.width / 2}px`);
  document.documentElement.style.setProperty("--y", `${r.top + r.height / 2}px`);
  const el = document.getElementById(next);
  home.classList.add("zooming");
  setTimeout(() => el.classList.add("incoming"), 220);
  el.addEventListener("animationend", function end(e) {
    if (e.animationName !== "iris") return;
    el.removeEventListener("animationend", end);
    show(next);
    el.classList.remove("incoming");
    home.classList.remove("zooming");
    done();
  });
};

const route = () => {
  const want = location.hash.slice(1);
  const next = screens.some((s) => s.id === want) ? want : "home";
  if (busy || next === current) return;
  const item = current === "home" && menu.find((a) => a === document.activeElement && a.hash === "#" + next);
  const back = !item && current && next === "home";
  if (item) sfx.confirm();
  else if (back) sfx.back();
  if (reduce) return show(next);
  busy = true;
  if (item) return irisTo(next, item);
  if (!back) sfx.open();
  splashTo(next);
};
addEventListener("hashchange", route);
route();

// ===== game-style controls =====
menu.forEach((a) => a.addEventListener("mouseenter", () => {
  if (document.activeElement !== a) sfx.move();
  a.focus({ preventScroll: true });
}));
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && current !== "home") location.hash = "#home";
  if (current === "home" && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
    e.preventDefault();
    const i = menu.indexOf(document.activeElement);
    menu[(i + (e.key === "ArrowDown" ? 1 : -1) + menu.length) % menu.length].focus();
    sfx.move();
  }
});
