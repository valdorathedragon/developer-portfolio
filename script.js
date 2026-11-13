/**
 * ============================================================================
 * 1. EDITABLE RESUME CONTENT OBJECT
 *    Strict source of truth: Vedant Srivastava Resume PDF.
 * ============================================================================
 */
const RESUME_DATA = {
  profile: {
    name: "Vedant Srivastava",
    role: "BCA — Artificial Intelligence & Data Science",
    location: "Gurugram, Haryana",
    phone: "+91-9560678977",
    email: "2601060015@krmu.edu.in",
    linkedin: "https://linkedin.com/in/vedant-srivastava-945123404",
    github: "https://github.com/valdorathedragon"
  },

  sectors: [
    {
      id: "about",
      name: "About Me",
      tag: "HOME STAR",
      color: "#f59e0b",
      secondaryColor: "#fbbf24",
      radius: 2.3,
      orbitRadius: 0,
      orbitSpeed: 0,
      rotationSpeed: 0.003,
      hasRing: false,
      hasMoon: false,
      content: {
        headline: "Vedant Srivastava",
        summary:
          "Undergraduate student pursuing a Bachelor of Computer Applications (BCA) in Artificial Intelligence & Data Science at K.R. Mangalam University, Gurugram (Expected: December 2029).",
        highlights: [
          "Focused on Python data pipelines, anomaly detection with Scikit-Learn, SQLite databases, and Linux shell automation.",
          "Experienced in REST API JSON processing, Git version control workflows, and reproducible exploratory data analysis."
        ]
      }
    },
    {
      id: "skills",
      name: "Skills",
      tag: "SECTOR 02",
      color: "#22d3ee",
      secondaryColor: "#0284c7",
      radius: 1.05,
      orbitRadius: 6.2,
      orbitSpeed: 0.0022,
      initialAngle: 0.4,
      rotationSpeed: 0.007,
      hasRing: true,
      hasMoon: false,
      content: {
        groups: [
          {
            category: "Languages",
            items: ["Python", "Bash / Shell Scripting", "SQL"]
          },
          {
            category: "Tools",
            items: ["Git", "GitHub", "VS Code", "Linux Terminal", "Postman", "Ollama"]
          },
          {
            category: "Concepts",
            items: [
              "File Systems",
              "Process Management",
              "REST APIs",
              "Markdown",
              "Prompt Engineering"
            ]
          }
        ]
      }
    },
    {
      id: "experience",
      name: "Experience",
      tag: "SECTOR 03",
      color: "#8b5cf6",
      secondaryColor: "#4c1d95",
      radius: 1.15,
      orbitRadius: 9.6,
      orbitSpeed: 0.0017,
      initialAngle: 2.1,
      rotationSpeed: 0.006,
      hasRing: false,
      hasMoon: true,
      content: {
        entries: [
          {
            title: "Aarambhathon 2.0 University Hackathon",
            organization: "K.R. Mangalam University",
            date: "November 2026",
            roleType: "Extra-Curricular & Competitive Engineering",
            bullets: [
              "Developed the backend architecture and anomaly detection workflow during an 18-hour competitive hackathon."
            ]
          }
        ]
      }
    },
    {
      id: "projects",
      name: "Projects",
      tag: "SECTOR 04",
      color: "#3b82f6",
      secondaryColor: "#1d4ed8",
      radius: 1.35,
      orbitRadius: 13.4,
      orbitSpeed: 0.0013,
      initialAngle: 3.7,
      rotationSpeed: 0.005,
      hasRing: true,
      hasMoon: true,
      content: {
        items: [
          {
            title: "Mule Account Detection Engine",
            stack: "Python, Pandas, Scikit-Learn, SQLite",
            date: "November 2026",
            link: "https://github.com/valdorathedragon",
            bullets: [
              "Designed an anomaly detection pipeline using Isolation Forest to flag high-risk mule accounts and transaction velocity spikes.",
              "Implemented persistent SQLite logging and automated data validation checks for banking fraud screening."
            ]
          }
        ]
      }
    },
    {
      id: "education",
      name: "Education",
      tag: "SECTOR 05",
      color: "#38bdf8",
      secondaryColor: "#0369a1",
      radius: 1.1,
      orbitRadius: 17.2,
      orbitSpeed: 0.001,
      initialAngle: 5.0,
      rotationSpeed: 0.006,
      hasRing: false,
      hasMoon: false,
      content: {
        degree: "Bachelor of Computer Applications (BCA)",
        specialization: "Artificial Intelligence & Data Science",
        institution: "K.R. Mangalam University, Gurugram",
        expected: "Expected: December 2029"
      }
    },
    {
      id: "achievements",
      name: "Achievements",
      tag: "SECTOR 06",
      color: "#a855f7",
      secondaryColor: "#6b21a8",
      radius: 0.98,
      orbitRadius: 20.8,
      orbitSpeed: 0.0008,
      initialAngle: 1.2,
      rotationSpeed: 0.008,
      hasRing: true,
      hasMoon: false,
      content: {
        items: [
          {
            title: "18-Hour Competitive Backend Architecture Build",
            date: "November 2026",
            detail:
              "Engineered the backend architecture and anomaly detection workflow for Aarambhathon 2.0 University Hackathon at K.R. Mangalam University."
          },
          {
            title: "End-to-End AI & Data Engineering Repositories",
            date: "November 2026",
            detail:
              "Built and documented three technical systems spanning Isolation Forest fraud screening, Linux Bash automation, and automated Pandas data cleaning."
          }
        ]
      }
    },
    {
      id: "contact",
      name: "Contact",
      tag: "OUTER BEACON",
      color: "#06b6d4",
      secondaryColor: "#155e75",
      radius: 1.0,
      orbitRadius: 24.4,
      orbitSpeed: 0.00065,
      initialAngle: 4.3,
      rotationSpeed: 0.007,
      hasRing: false,
      hasMoon: true,
      content: {
        location: "Gurugram, Haryana",
        phone: "+91-9560678977",
        email: "2601060015@krmu.edu.in",
        linkedin: "https://linkedin.com/in/vedant-srivastava-945123404",
        github: "https://github.com/valdorathedragon"
      }
    }
  ]
};

/**
 * ============================================================================
 * 2. APPLICATION STATE & MOTION PREFERENCES
 * ============================================================================
 */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const state = {
  selectedIndex: -1,
  hoveredIndex: -1,
  isPaused: false,
  introDone: false,
  // Spherical camera coordinates for galaxy overview
  camSpherical: {
    radius: 58,
    theta: 0.45,
    phi: 1.08
  },
  targetSpherical: {
    radius: 34,
    theta: 0.45,
    phi: 1.08
  },
  camPos: new THREE.Vector3(0, 26, 52),
  camLookAt: new THREE.Vector3(0, 0, 0),
  targetLookAt: new THREE.Vector3(0, 0, 0),
  mouseNDC: new THREE.Vector2(0, 0),
  parallaxOffset: new THREE.Vector2(0, 0),
  isDragging: false,
  dragMoved: false,
  prevPointer: { x: 0, y: 0 },
  pinchDistance: null
};

/**
 * ============================================================================
 * 3. SCENE, RENDERER & LIGHTING SETUP
 * ============================================================================
 */
function initScene() {
  const canvas = document.getElementById("galaxy-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance"
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060f, 0.0075);

  const camera = new THREE.PerspectiveCamera(
    52,
    window.innerWidth / window.innerHeight,
    0.1,
    400
  );
  camera.position.copy(state.camPos);

  // Core Sun PointLight + Soft Galactic Fill Lights
  const sunLight = new THREE.PointLight(0xffb703, 2.6, 95, 1.4);
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);

  const ambientLight = new THREE.AmbientLight(0x3b4978, 0.85);
  scene.add(ambientLight);

  const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.65);
  rimLight.position.set(-20, 25, -18);
  scene.add(rimLight);

  return { canvas, renderer, scene, camera };
}

/**
 * ============================================================================
 * 4. PROCEDURAL TEXTURES & STARFIELD / NEBULA / SHOOTING STARS
 * ============================================================================
 */
function createPlanetTexture(primaryHex, secondaryHex, isSun = false) {
  const size = 256;
  const cvs = document.createElement("canvas");
  cvs.width = size;
  cvs.height = size;
  const ctx = cvs.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, primaryHex);
  grad.addColorStop(0.5, secondaryHex);
  grad.addColorStop(1, primaryHex);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Procedural atmospheric bands / surface turbulence
  for (let i = 0; i < (isSun ? 90 : 45); i++) {
    const y = Math.random() * size;
    const h = 2 + Math.random() * (isSun ? 12 : 8);
    ctx.fillStyle = isSun
      ? `rgba(255, 244, 214, ${0.05 + Math.random() * 0.14})`
      : `rgba(255, 255, 255, ${0.03 + Math.random() * 0.08})`;
    ctx.fillRect(0, y, size, h);
  }

  for (let i = 0; i < 65; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 2 + Math.random() * 14;
    const spot = ctx.createRadialGradient(x, y, 0, x, y, r);
    spot.addColorStop(0, "rgba(5, 6, 15, 0.18)");
    spot.addColorStop(1, "rgba(5, 6, 15, 0)");
    ctx.fillStyle = spot;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(cvs);
  texture.encoding = THREE.sRGBEncoding;
  return texture;
}

function createGlowSprite(hexColor, scale, opacity = 0.65) {
  const size = 128;
  const cvs = document.createElement("canvas");
  cvs.width = size;
  cvs.height = size;
  const ctx = cvs.getContext("2d");

  const c = new THREE.Color(hexColor);
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);

  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    2,
    size / 2,
    size / 2,
    size / 2
  );
  grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
  grad.addColorStop(0.42, `rgba(${r}, ${g}, ${b}, ${opacity * 0.35})`);
  grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(cvs);
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(scale, scale, 1);
  return sprite;
}

function createEnvironment(scene) {
  // 3 Parallax Instanced Starfield Layers
  const layers = [
    { count: 900, minR: 45, maxR: 95, size: 0.16, color: 0xe2e8f0, speed: 0.00012 },
    { count: 700, minR: 90, maxR: 155, size: 0.24, color: 0x38bdf8, speed: 0.00007 },
    { count: 500, minR: 145, maxR: 220, size: 0.32, color: 0xa78bfa, speed: 0.00003 }
  ];

  const starGeo = new THREE.OctahedronGeometry(1, 0);
  const dummy = new THREE.Object3D();
  const starClouds = [];

  layers.forEach((layer) => {
    const mat = new THREE.MeshBasicMaterial({ color: layer.color });
    const instanced = new THREE.InstancedMesh(starGeo, mat, layer.count);

    for (let i = 0; i < layer.count; i++) {
      const r = layer.minR + Math.random() * (layer.maxR - layer.minR);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      dummy.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi) * 0.65,
        r * Math.sin(phi) * Math.sin(theta)
      );
      const s = layer.size * (0.5 + Math.random() * 0.9);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      instanced.setMatrixAt(i, dummy.matrix);
    }

    instanced.instanceMatrix.needsUpdate = true;
    scene.add(instanced);
    starClouds.push({ mesh: instanced, speed: layer.speed });
  });

  // Subtle Galactic Nebula Glow Sprites
  const nebulaColors = ["#3b82f6", "#8b5cf6", "#22d3ee"];
  nebulaColors.forEach((col, idx) => {
    const cloud = createGlowSprite(col, 68, 0.14);
    cloud.position.set((idx - 1) * 18, (idx % 2 === 0 ? 1 : -1) * 6, -24 - idx * 8);
    scene.add(cloud);
  });

  // Shooting Star Pool
  const shootingGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-4.5, 1.4, -1.5)
  ]);
  const shootingMat = new THREE.LineBasicMaterial({
    color: 0x67e8f9,
    transparent: true,
    opacity: 0
  });
  const shootingStar = new THREE.Line(shootingGeo, shootingMat);
  scene.add(shootingStar);

  return {
    starClouds,
    shootingStar: {
      line: shootingStar,
      active: false,
      timer: 2.5,
      velocity: new THREE.Vector3()
    }
  };
}

/**
 * ============================================================================
 * 5. PLANETS, RINGS, MOONS & LABELS BUILDER
 * ============================================================================
 */
function buildPlanets(scene) {
  const labelsLayer = document.getElementById("labels-layer");
  const sphereGeo = new THREE.SphereGeometry(1, 40, 40);
  const moonGeo = new THREE.SphereGeometry(0.18, 16, 16);
  const planetObjects = [];

  RESUME_DATA.sectors.forEach((sector, index) => {
    const isSun = sector.orbitRadius === 0;
    const pivot = new THREE.Group();
    scene.add(pivot);

    // Orbital Path Ring
    if (!isSun) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(a) * sector.orbitRadius,
            0,
            Math.sin(a) * sector.orbitRadius
          )
        );
      }
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.16
      });
      scene.add(new THREE.Line(orbitGeo, orbitMat));
    }

    // Planet Group
    const planetGroup = new THREE.Group();
    const angle = sector.initialAngle || 0;
    planetGroup.position.set(
      Math.cos(angle) * sector.orbitRadius,
      0,
      Math.sin(angle) * sector.orbitRadius
    );
    pivot.add(planetGroup);

    // Core Mesh
    const tex = createPlanetTexture(sector.color, sector.secondaryColor, isSun);
    const mat = isSun
      ? new THREE.MeshBasicMaterial({ map: tex })
      : new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.55,
          metalness: 0.15,
          emissive: new THREE.Color(sector.color),
          emissiveIntensity: 0.22
        });

    const mesh = new THREE.Mesh(sphereGeo, mat);
    mesh.scale.setScalar(sector.radius);
    mesh.userData.sectorIndex = index;
    planetGroup.add(mesh);

    // Atmospheric Glow Halo
    const glow = createGlowSprite(
      sector.color,
      sector.radius * (isSun ? 6.4 : 4.2),
      isSun ? 0.85 : 0.52
    );
    planetGroup.add(glow);

    // Optional Planetary Ring
    if (sector.hasRing) {
      const ringGeo = new THREE.RingGeometry(
        sector.radius * 1.42,
        sector.radius * 2.05,
        64
      );
      const ringMat = new THREE.MeshBasicMaterial({
        color: sector.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.34
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI * 0.38;
      ring.rotation.y = Math.PI * 0.12;
      planetGroup.add(ring);
    }

    // Optional Orbiting Moon
    let moonPivot = null;
    if (sector.hasMoon) {
      moonPivot = new THREE.Group();
      const moonMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.7
      });
      const moon = new THREE.Mesh(moonGeo, moonMat);
      moon.position.set(sector.radius * 1.85, 0.25, 0);
      moonPivot.add(moon);
      planetGroup.add(moonPivot);
    }

    // Floating HTML Label
    const labelEl = document.createElement("div");
    labelEl.className = "planet-label";
    labelEl.textContent = sector.name;
    labelsLayer.appendChild(labelEl);

    planetObjects.push({
      data: sector,
      index,
      group: planetGroup,
      mesh,
      glow,
      moonPivot,
      labelEl,
      angle,
      floatOffset: index * 1.1,
      currentScale: 1
    });
  });

  return planetObjects;
}

/**
 * ============================================================================
 * 6. UI RENDERING, ACCESSIBILITY FALLBACK & WEB AUDIO AMBIENCE
 * ============================================================================
 */
function renderSectorHTML(sector) {
  const c = sector.content;

  if (sector.id === "about") {
    return `
      <div class="glass-card stagger-item" style="animation-delay: 0.05s">
        <h3>${c.headline}</h3>
        <p class="card-subtitle">${RESUME_DATA.profile.role} &bull; ${RESUME_DATA.profile.location}</p>
        <p class="card-text">${c.summary}</p>
      </div>
      <div class="glass-card stagger-item" style="animation-delay: 0.14s">
        <h3>Core Focus Areas</h3>
        <ul class="bullet-list">
          ${c.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  if (sector.id === "skills") {
    return c.groups
      .map(
        (group, idx) => `
      <div class="glass-card stagger-item" style="animation-delay: ${0.06 * (idx + 1)}s">
        <div class="skill-group-title">${group.category}</div>
        <div class="chip-cloud">
          ${group.items.map((skill) => `<span class="skill-chip">${skill}</span>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  if (sector.id === "experience") {
    return c.entries
      .map(
        (entry, idx) => `
      <div class="glass-card stagger-item" style="animation-delay: ${0.08 * (idx + 1)}s">
        <div class="timeline">
          <span class="card-date">${entry.date}</span>
          <h3>${entry.title}</h3>
          <p class="card-subtitle">${entry.organization} &bull; ${entry.roleType}</p>
          <ul class="bullet-list">
            ${entry.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>
    `
      )
      .join("");
  }

  if (sector.id === "projects") {
    return c.items
      .map(
        (proj, idx) => `
      <div class="glass-card stagger-item" style="animation-delay: ${0.08 * (idx + 1)}s">
        <span class="card-date">${proj.date}</span>
        <h3>${proj.title}</h3>
        <p class="card-subtitle">${proj.stack}</p>
        <ul class="bullet-list">
          ${proj.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <a class="card-link" href="${proj.link}" target="_blank" rel="noopener noreferrer">
          View Repository on GitHub &rarr;
        </a>
      </div>
    `
      )
      .join("");
  }

  if (sector.id === "education") {
    return `
      <div class="glass-card stagger-item" style="animation-delay: 0.08s">
        <span class="card-date">${c.expected}</span>
        <h3>${c.degree}</h3>
        <p class="card-subtitle">${c.specialization}</p>
        <p class="card-text">${c.institution}</p>
      </div>
    `;
  }

  if (sector.id === "achievements") {
    return c.items
      .map(
        (ach, idx) => `
      <div class="glass-card stagger-item" style="animation-delay: ${0.08 * (idx + 1)}s">
        <span class="card-date">${ach.date}</span>
        <h3>${ach.title}</h3>
        <p class="card-text">${ach.detail}</p>
      </div>
    `
      )
      .join("");
  }

  if (sector.id === "contact") {
    return `
      <div class="contact-grid stagger-item" style="animation-delay: 0.06s">
        <div class="contact-item">
          <span class="contact-label">Location</span>
          <span>${c.location}</span>
        </div>
        <a class="contact-item" href="tel:${c.phone}">
          <span class="contact-label">Phone</span>
          <span>${c.phone}</span>
        </a>
        <a class="contact-item" href="mailto:${c.email}">
          <span class="contact-label">Email</span>
          <span>${c.email}</span>
        </a>
        <a class="contact-item" href="${c.github}" target="_blank" rel="noopener noreferrer">
          <span class="contact-label">GitHub</span>
          <span>github.com/valdorathedragon &rarr;</span>
        </a>
        <a class="contact-item" href="${c.linkedin}" target="_blank" rel="noopener noreferrer">
          <span class="contact-label">LinkedIn</span>
          <span>linkedin.com/in/vedant-srivastava-945123404 &rarr;</span>
        </a>
      </div>
    `;
  }

  return "";
}

function initUI(selectPlanet, resetView) {
  document.getElementById("hud-name").textContent = RESUME_DATA.profile.name;
  document.getElementById("hud-role").textContent = RESUME_DATA.profile.role;

  // Build Bottom HUD Navigation Pills
  const navList = document.getElementById("planet-nav-list");
  RESUME_DATA.sectors.forEach((sector, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "planet-nav-btn";
    btn.dataset.index = String(index);
    btn.innerHTML = `<span class="nav-swatch" style="background:${sector.color}; box-shadow:0 0 8px ${sector.color}"></span>${sector.name}`;
    btn.addEventListener("click", () => selectPlanet(index));
    li.appendChild(btn);
    navList.appendChild(li);
  });

  // Populate Accessible Text Fallback View
  const a11yContent = document.getElementById("accessible-content");
  a11yContent.innerHTML = RESUME_DATA.sectors
    .map(
      (s) => `
      <section class="a11y-section">
        <h3>${s.name}</h3>
        ${renderSectorHTML(s)}
      </section>
    `
    )
    .join("");

  // Panel Controls
  document.getElementById("panel-close").addEventListener("click", resetView);
  document.getElementById("prev-planet").addEventListener("click", () => {
    const prev =
      (state.selectedIndex - 1 + RESUME_DATA.sectors.length) %
      RESUME_DATA.sectors.length;
    selectPlanet(prev);
  });
  document.getElementById("next-planet").addEventListener("click", () => {
    const next = (state.selectedIndex + 1) % RESUME_DATA.sectors.length;
    selectPlanet(next);
  });

  // Accessible View Toggle
  const a11yView = document.getElementById("accessible-view");
  const a11yToggle = document.getElementById("a11y-toggle");
  const a11yClose = document.getElementById("a11y-close");

  a11yToggle.addEventListener("click", () => {
    const open = a11yView.hidden;
    a11yView.hidden = !open;
    a11yToggle.setAttribute("aria-expanded", String(open));
  });

  a11yClose.addEventListener("click", () => {
    a11yView.hidden = true;
    a11yToggle.setAttribute("aria-expanded", "false");
  });

  // Optional Procedural Ambient Space Audio (Off by default)
  let audioCtx = null;
  let isPlaying = false;
  const audioBtn = document.getElementById("audio-toggle");

  audioBtn.addEventListener("click", () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
      const master = audioCtx.createGain();
      master.gain.value = 0.04;
      master.connect(audioCtx.destination);

      [55, 82.41, 110].forEach((freq) => {
        const osc = audioCtx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.connect(master);
        osc.start();
      });
      isPlaying = true;
    } else if (isPlaying) {
      audioCtx.suspend();
      isPlaying = false;
    } else {
      audioCtx.resume();
      isPlaying = true;
    }

    audioBtn.setAttribute("aria-pressed", String(isPlaying));
    audioBtn.querySelector(".btn-icon").textContent = isPlaying ? "🔊" : "🔇";
    audioBtn.querySelector(".btn-label").textContent = isPlaying
      ? "Ambient: On"
      : "Ambient: Off";
  });
}

function openInfoPanel(index) {
  const sector = RESUME_DATA.sectors[index];
  const panel = document.getElementById("info-panel");
  document.getElementById("panel-index").textContent = `0${index + 1} / 0${RESUME_DATA.sectors.length}`;
  document.getElementById("panel-tag").textContent = sector.tag;
  document.getElementById("panel-title").textContent = sector.name;
  document.getElementById("panel-body").innerHTML = renderSectorHTML(sector);
  panel.hidden = false;

  document.querySelectorAll(".planet-nav-btn").forEach((btn, i) => {
    btn.classList.toggle("is-active", i === index);
  });
}

function closeInfoPanel() {
  document.getElementById("info-panel").hidden = true;
  document.querySelectorAll(".planet-nav-btn").forEach((btn) => {
    btn.classList.remove("is-active");
  });
}

/**
 * ============================================================================
 * 7. CAMERA CONTROLLER & INTERACTION EVENTS
 * ============================================================================
 */
function setupInteractions(canvas, camera, planetObjects, selectPlanet, resetView) {
  const raycaster = new THREE.Raycaster();
  const meshes = planetObjects.map((p) => p.mesh);

  function updatePointerNDC(clientX, clientY) {
    state.mouseNDC.x = (clientX / window.innerWidth) * 2 - 1;
    state.mouseNDC.y = -(clientY / window.innerHeight) * 2 + 1;
  }

  function checkHover() {
    raycaster.setFromCamera(state.mouseNDC, camera);
    const hits = raycaster.intersectObjects(meshes, false);
    const hitIndex = hits.length > 0 ? hits[0].object.userData.sectorIndex : -1;

    if (hitIndex !== state.hoveredIndex) {
      state.hoveredIndex = hitIndex;
      canvas.style.cursor = hitIndex !== -1 ? "pointer" : state.isDragging ? "grabbing" : "grab";
    }
  }

  // Pointer Drag & Click
  canvas.addEventListener("pointerdown", (e) => {
    state.isDragging = true;
    state.dragMoved = false;
    state.prevPointer = { x: e.clientX, y: e.clientY };
    updatePointerNDC(e.clientX, e.clientY);
  });

  window.addEventListener("pointermove", (e) => {
    updatePointerNDC(e.clientX, e.clientY);

    if (state.isDragging) {
      const dx = e.clientX - state.prevPointer.x;
      const dy = e.clientY - state.prevPointer.y;
      if (Math.hypot(dx, dy) > 4) state.dragMoved = true;

      if (state.selectedIndex === -1) {
        state.targetSpherical.theta -= dx * 0.0055;
        state.targetSpherical.phi = THREE.MathUtils.clamp(
          state.targetSpherical.phi - dy * 0.0045,
          0.35,
          1.45
        );
      }
      state.prevPointer = { x: e.clientX, y: e.clientY };
    } else {
      checkHover();
    }
  });

  window.addEventListener("pointerup", (e) => {
    if (state.isDragging && !state.dragMoved) {
      updatePointerNDC(e.clientX, e.clientY);
      raycaster.setFromCamera(state.mouseNDC, camera);
      const hits = raycaster.intersectObjects(meshes, false);
      if (hits.length > 0) {
        selectPlanet(hits[0].object.userData.sectorIndex);
      }
    }
    state.isDragging = false;
  });

  // Scroll Zoom (with min/max limits)
  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      if (state.selectedIndex !== -1) return;
      state.targetSpherical.radius = THREE.MathUtils.clamp(
        state.targetSpherical.radius + e.deltaY * 0.025,
        14,
        62
      );
    },
    { passive: false }
  );

  // Touch Pinch-to-Zoom
  canvas.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length === 2 && state.selectedIndex === -1) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        if (state.pinchDistance !== null) {
          const delta = state.pinchDistance - dist;
          state.targetSpherical.radius = THREE.MathUtils.clamp(
            state.targetSpherical.radius + delta * 0.08,
            14,
            62
          );
        }
        state.pinchDistance = dist;
      }
    },
    { passive: true }
  );

  canvas.addEventListener("touchend", () => {
    state.pinchDistance = null;
  });

  // Keyboard Navigation: Arrows / Tab / Enter / Escape
  window.addEventListener("keydown", (e) => {
    const a11yOpen = !document.getElementById("accessible-view").hidden;
    if (a11yOpen) return;

    const total = RESUME_DATA.sectors.length;

    if (e.key === "Escape") {
      if (state.selectedIndex !== -1) {
        resetView();
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const next =
        state.selectedIndex === -1
          ? (state.hoveredIndex + 1) % total
          : (state.selectedIndex + 1) % total;
      if (state.selectedIndex !== -1) {
        selectPlanet(next);
      } else {
        state.hoveredIndex = next;
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev =
        state.selectedIndex === -1
          ? (state.hoveredIndex - 1 + total) % total
          : (state.selectedIndex - 1 + total) % total;
      if (state.selectedIndex !== -1) {
        selectPlanet(prev);
      } else {
        state.hoveredIndex = prev;
      }
    } else if (e.key === "Enter" && state.selectedIndex === -1 && state.hoveredIndex !== -1) {
      e.preventDefault();
      selectPlanet(state.hoveredIndex);
    }
  });
}

/**
 * ============================================================================
 * 8. MAIN BOOTSTRAP & 60FPS ANIMATION LOOP
 * ============================================================================
 */
function main() {
  const { canvas, renderer, scene, camera } = initScene();
  const env = createEnvironment(scene);
  const planetObjects = buildPlanets(scene);

  function selectPlanet(index) {
    state.selectedIndex = index;
    state.hoveredIndex = index;
    document.getElementById("explore-hint").classList.remove("is-visible");
    openInfoPanel(index);
  }

  function resetView() {
    state.selectedIndex = -1;
    state.targetLookAt.set(0, 0, 0);
    closeInfoPanel();
  }

  initUI(selectPlanet, resetView);
  setupInteractions(canvas, camera, planetObjects, selectPlanet, resetView);

  // Resize Handler
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Pause rendering when browser tab is hidden
  document.addEventListener("visibilitychange", () => {
    state.isPaused = document.hidden;
  });

  // Cinematic Intro Sequence
  setTimeout(() => {
    document.getElementById("loader").classList.add("is-hidden");
    state.introDone = true;
    setTimeout(() => {
      if (state.selectedIndex === -1) {
        document.getElementById("explore-hint").classList.add("is-visible");
      }
    }, 900);
  }, 650);

  const clock = new THREE.Clock();
  const projVec = new THREE.Vector3();
  const desiredCamPos = new THREE.Vector3();
  const desiredLookAt = new THREE.Vector3();
  const motionScale = prefersReducedMotion ? 0.15 : 1;

  function animate() {
    requestAnimationFrame(animate);
    if (state.isPaused) return;

    const delta = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.getElapsedTime();

    // 1. Update Starfield Parallax Layers
    env.starClouds.forEach((layer) => {
      layer.mesh.rotation.y += layer.speed * motionScale;
    });

    // 2. Update Shooting Star
    if (!prefersReducedMotion) {
      const sStar = env.shootingStar;
      if (!sStar.active) {
        sStar.timer -= delta;
        if (sStar.timer <= 0) {
          sStar.active = true;
          sStar.line.position.set(
            (Math.random() - 0.3) * 45,
            14 + Math.random() * 14,
            -25 - Math.random() * 20
          );
          sStar.velocity.set(28, -9, 10);
          sStar.line.material.opacity = 0.85;
        }
      } else {
        sStar.line.position.addScaledVector(sStar.velocity, delta);
        sStar.line.material.opacity -= delta * 0.9;
        if (sStar.line.material.opacity <= 0) {
          sStar.active = false;
          sStar.timer = 4 + Math.random() * 6;
        }
      }
    }

    // 3. Update Planets (Orbit, Rotation, Hover Scale & 2D Screen Labels)
    planetObjects.forEach((p) => {
      const isSelected = state.selectedIndex === p.index;
      const isHovered = state.hoveredIndex === p.index;

      if (p.data.orbitRadius > 0 && !isSelected) {
        p.angle += p.data.orbitSpeed * motionScale;
      }

      const x = Math.cos(p.angle) * p.data.orbitRadius;
      const z = Math.sin(p.angle) * p.data.orbitRadius;
      const y =
        p.data.orbitRadius > 0
          ? Math.sin(elapsed * 1.1 + p.floatOffset) * 0.22 * motionScale
          : 0;

      p.group.position.set(x, y, z);
      p.mesh.rotation.y += p.data.rotationSpeed * motionScale;

      if (p.moonPivot) {
        p.moonPivot.rotation.y += 0.018 * motionScale;
      }

      // Reactive Scale & Glow
      const targetScale = isHovered || isSelected ? 1.18 : 1.0;
      p.currentScale += (targetScale - p.currentScale) * 0.12;
      p.mesh.scale.setScalar(p.data.radius * p.currentScale);

      const baseGlow = p.data.orbitRadius === 0 ? 0.85 : 0.5;
      p.glow.material.opacity +=
        ((isHovered || isSelected ? 0.95 : baseGlow) - p.glow.material.opacity) * 0.12;

      // Project 3D position to 2D screen label
      projVec.set(x, y + p.data.radius * 1.35, z);
      projVec.project(camera);

      const isBehind = projVec.z > 1;
      const sx = (projVec.x * 0.5 + 0.5) * window.innerWidth;
      const sy = (-projVec.y * 0.5 + 0.5) * window.innerHeight;

      p.labelEl.style.left = `${sx}px`;
      p.labelEl.style.top = `${sy}px`;
      p.labelEl.style.opacity = isBehind ? "0" : "1";
      p.labelEl.classList.toggle("is-hovered", isHovered);
      p.labelEl.classList.toggle("is-active", isSelected);
    });

    // 4. Smooth Eased Camera Flight & Mouse Parallax
    const ease = prefersReducedMotion ? 0.25 : 0.065;

    if (state.selectedIndex !== -1) {
      const targetPlanet = planetObjects[state.selectedIndex];
      const pPos = targetPlanet.group.position;
      const offsetDist = Math.max(targetPlanet.data.radius * 4.4, 5.2);

      // Offset camera slightly left on desktop so planet frames nicely beside right glass panel
      const sideShift = window.innerWidth > 768 ? -1.4 : 0;
      desiredLookAt.set(pPos.x - sideShift * 0.65, pPos.y, pPos.z);
      desiredCamPos.set(
        pPos.x + offsetDist * 0.65 + sideShift,
        pPos.y + offsetDist * 0.42,
        pPos.z + offsetDist * 0.85
      );
    } else {
      state.camSpherical.radius +=
        (state.targetSpherical.radius - state.camSpherical.radius) * ease;
      state.camSpherical.theta +=
        (state.targetSpherical.theta - state.camSpherical.theta) * ease;
      state.camSpherical.phi +=
        (state.targetSpherical.phi - state.camSpherical.phi) * ease;

      const r = state.camSpherical.radius;
      const theta = state.camSpherical.theta;
      const phi = state.camSpherical.phi;

      desiredLookAt.set(0, 0, 0);
      desiredCamPos.set(
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.cos(theta)
      );
    }

    // Gentle Mouse Parallax
    state.parallaxOffset.x += (state.mouseNDC.x * 1.1 - state.parallaxOffset.x) * 0.05;
    state.parallaxOffset.y += (state.mouseNDC.y * 0.7 - state.parallaxOffset.y) * 0.05;

    desiredCamPos.x += state.parallaxOffset.x * motionScale;
    desiredCamPos.y += state.parallaxOffset.y * motionScale;

    state.camPos.lerp(desiredCamPos, ease);
    state.camLookAt.lerp(desiredLookAt, ease);

    camera.position.copy(state.camPos);
    camera.lookAt(state.camLookAt);

    renderer.render(scene, camera);
  }

  animate();
}

window.addEventListener("DOMContentLoaded", main);