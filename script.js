/* ============================================================
   DATA LAYER
   All customizable content lives here. In a Next.js/Astro build
   these arrays become /data/*.ts and get imported into the
   respective components.
   ============================================================ */

const ROLES = ["Data Scientist", "AI/ML Engineer", "Big-Data Pipeline Builder", "Open Source Contributor"];

const SKILLS = [
  { category: "AI & Machine Learning", items: ["Python", "Spark MLlib", "Pandas", "R", "TextBlob", "Jupyter", "Power BI", "Google Colab"] },
  { category: "Big Data & Streaming", items: ["Apache Spark", "Apache Kafka", "Apache Hadoop", "ZooKeeper"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "D3.js"] },
  { category: "Backend & Databases", items: ["Node.js", "Express", "Flask", "MySQL", "MSSQL", "Firebase"] },
  { category: "Languages", items: ["Python", "JavaScript/TypeScript", "C", "C++", "SQL"] },
  { category: "Tooling", items: ["Git", "GitHub Actions", "Docker", "VS Code"] },
];

const PROJECTS = [
  {
    id: "cit-project",
    title: "CIT-Project — COVID-19 Data Analysis",
    desc: "End-to-end exploratory data analysis of pandemic case data: cleaning raw sources, engineering trend features, and visualizing outbreak patterns over time.",
    outcome: "Turned raw case-count CSVs into a clear, explorable trend dashboard",
    tags: ["Python", "Pandas", "Data Viz", "Jupyter"],
    stars: null,
    github: "https://github.com/Eddycurrentz/CIT-project",
    demo: null,
    caseStudy: {
      sub: "Personal project · Python · Pandas · Matplotlib",
      problem: "Public COVID-19 datasets are noisy and inconsistently formatted across sources, which makes it hard to answer basic questions like 'how is the trend actually moving in this region?' without a proper cleaning pass first.",
      constraints: "Working solo with publicly available, frequently-updated CSVs meant designing a repeatable cleaning pipeline rather than a one-off script, and keeping the analysis reproducible in a notebook anyone could re-run.",
      architecture: "diagram-etl",
      results: [
        "Built a repeatable clean → transform → visualize pipeline in Pandas",
        "Produced time-series views of case growth and regional comparisons",
        "[Add: specific metric, e.g. number of records processed or regions covered]",
      ],
    }
  },
  {
    id: "ai-student-counsellor",
    title: "AI Student Counsellor",
    desc: "A prototype guidance tool that uses AI to help students think through academic and career decisions — an early exploration into applied conversational AI.",
    outcome: "Prototype for guided, AI-assisted student decision-making",
    tags: ["AI/ML", "HTML", "Prototype"],
    stars: null,
    github: "https://github.com/Eddycurrentz/ai-student-counsellor",
    demo: null,
    caseStudy: {
      sub: "Prototype · AI-assisted guidance",
      problem: "Students often lack accessible, low-pressure guidance when weighing academic or career paths — a first conversation with a counsellor can be a hard thing to get scheduled.",
      constraints: "As an early prototype, the focus was on validating the interaction pattern (structured Q&A guiding toward a recommendation) rather than production-scale reliability.",
      architecture: "diagram-agent",
      results: [
        "Validated a structured-question interaction flow for guidance use cases",
        "Established a base to extend with a real LLM backend and persistence",
        "[Add: user feedback, pilot results, or next steps once available]",
      ],
    }
  },
  {
    id: "practice-series",
    title: "Data Science Practice Series",
    desc: "A running set of daily/weekly notebooks (day5--mini-project, day-7-idra …) used to drill exploratory data analysis, feature engineering and modeling fundamentals.",
    outcome: "Consistent, repo-tracked practice reps on core data-science workflows",
    tags: ["Jupyter Notebook", "Python", "EDA"],
    stars: null,
    github: "https://github.com/Eddycurrentz?tab=repositories",
    demo: null,
    caseStudy: {
      sub: "Ongoing · Jupyter Notebook",
      problem: "Data science skill compounds with reps, not theory alone — the goal was a low-friction way to practice the full loop (load → clean → explore → model) regularly and keep every attempt in version control.",
      constraints: "Each notebook is scoped small enough to finish in a sitting, which trades project scope for consistency and iteration speed.",
      architecture: "diagram-loop",
      results: [
        "Multiple notebooks committed covering EDA and mini-modeling tasks",
        "Reusable notebook scaffolding for future practice sessions",
        "[Add: a favorite notebook or technique you picked up along the way]",
      ],
    }
  },
  {
    id: "python-turtle-games",
    title: "Python Turtle Games",
    desc: "A collection of interactive games built with Python's Turtle graphics library. Demonstrates core programming concepts through fun, playable applications.",
    outcome: "Multiple working games with clean, reusable game engine code",
    tags: ["Python", "Turtle Graphics", "Game Dev"],
    stars: null,
    github: "https://github.com/Eddycurrentz",
    demo: null,
    caseStudy: {
      sub: "Personal project · Python · Game Development",
      problem: "Learning programming fundamentals is more engaging when building interactive projects. Needed approachable examples combining graphics, event handling, and game logic.",
      constraints: "Using only Python standard library (Turtle) to keep dependencies minimal and focus on core programming concepts.",
      architecture: "diagram-etl",
      results: [
        "Built multiple working games with clean, reusable game engine patterns",
        "Demonstrated event handling, collision detection, and state management",
        "Lowered barrier for beginners to learn interactive programming",
      ],
    }
  },
  {
    id: "ai-pose-tracker",
    title: "AI Pose Tracker",
    desc: "Computer vision application that detects and tracks human poses in real-time using deep learning. Useful for fitness, motion analysis, and interactive applications.",
    outcome: "Real-time pose detection system with sub-frame-latency tracking",
    tags: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
    stars: null,
    github: "https://github.com/Eddycurrentz",
    demo: null,
    caseStudy: {
      sub: "Personal project · Python · OpenCV · TensorFlow",
      problem: "Real-time human pose tracking enables many applications, but requires handling video streams, model inference, and visualization efficiently.",
      constraints: "Working with real-time video meant optimizing inference latency and handling variable input quality.",
      architecture: "diagram-etl",
      results: [
        "Integrated pre-trained pose detection model with webcam streaming",
        "Achieved sub-frame latency with optimized inference pipeline",
        "Built visualization overlay for detected keypoints and skeleton",
      ],
    }
  },
  {
    id: "health-prediction",
    title: "Health Prediction Analysis",
    desc: "Machine learning model for predicting health outcomes based on patient data. Combines data cleaning, feature engineering, and supervised learning techniques.",
    outcome: "Predictive model with validated accuracy on holdout test set",
    tags: ["Python", "Scikit-Learn", "Pandas", "Data Analysis"],
    stars: null,
    github: "https://github.com/Eddycurrentz",
    demo: null,
    caseStudy: {
      sub: "Personal project · Python · Machine Learning",
      problem: "Healthcare predictions require careful data handling, feature engineering, and model validation to ensure reliability and interpretability.",
      constraints: "Working with sensitive health data meant following best practices for data handling, cross-validation, and avoiding data leakage.",
      architecture: "diagram-etl",
      results: [
        "Built end-to-end ML pipeline from raw data to prediction",
        "Achieved competitive accuracy through feature engineering and hyperparameter tuning",
        "Validated model with proper cross-validation and test holdout",
      ],
    }
  },
  {
    id: "social-media-monitoring",
    title: "Big Data: Social Media Reputation Monitoring",
    desc: "Large-scale data pipeline for collecting, processing, and analyzing social media sentiment to track brand reputation. Handles streaming data and distributed processing.",
    outcome: "Scalable reputation monitoring system processing thousands of posts daily",
    tags: ["Apache Spark", "Kafka", "Python", "Big Data", "Sentiment Analysis"],
    stars: null,
    github: "https://github.com/Eddycurrentz",
    demo: null,
    caseStudy: {
      sub: "Personal project · Apache Spark · Kafka · Big Data",
      problem: "Monitoring brand reputation at scale requires handling high-volume, real-time data streams and running complex sentiment analysis across distributed systems.",
      constraints: "Building scalable systems meant choosing appropriate technologies (Spark for batch, Kafka for streaming) and handling data quality issues.",
      architecture: "diagram-etl",
      results: [
        "Built end-to-end Kafka → Spark → storage pipeline for social monitoring",
        "Processed 1000s of posts daily with automated sentiment classification",
        "Created dashboards tracking reputation metrics over time",
      ],
    }
  },
];

const EXPERIENCE = [
  {
    role: "Independent Data Science &amp; AI Projects",
    org: "Self-directed",
    dates: "Ongoing",
    desc: "Building and shipping ML/data projects end-to-end — from Spark/Kafka pipelines to applied AI prototypes — and publishing the work on GitHub.",
    tech: ["Python", "Apache Spark", "Kafka", "Pandas"],
  },
  {
    role: "Marketing &amp; Publicity Head",
    org: "IEEE Student Branch",
    dates: "Ongoing",
    desc: "Leading communications strategy for IEEE initiatives, coordinating technical events and community engagement. Managing social media presence and promotional materials for student workshops.",
    tech: ["Communications", "Event Management", "Social Media"],
  },
  {
    role: "Training &amp; Placement Coordinator",
    org: "College T&amp;P Cell",
    dates: "Ongoing",
    desc: "Facilitating internship placements and career development for student cohorts. Building industry partnerships and preparing students for data science and engineering roles.",
    tech: ["Recruitment", "Professional Development", "Mentoring"],
  },
  {
    role: "AI &amp; Data Science Engineering Student",
    org: "College of Engineering Cherthala",
    dates: "Ongoing",
    desc: "Specialized coursework in machine learning, data engineering, and AI systems. Building portfolio projects across Python, Apache Spark, Kafka, and full-stack web technologies.",
    tech: ["Python", "ML/AI", "Data Engineering", "Web Dev"],
  },
];

/* ============================================================
   RENDER: Skills
   ============================================================ */
function renderSkills() {
  const skillsRoot = document.getElementById('skillsCats');
  SKILLS.forEach(cat => {
    const wrap = document.createElement('div');
    const head = document.createElement('div');
    head.className = 'skill-cat-head';
    head.innerHTML = `<h3>${cat.category}</h3><span class="n">${cat.items.length} tools</span>`;
    const grid = document.createElement('div');
    grid.className = 'skill-grid';
    cat.items.forEach(name => {
      const chip = document.createElement('div');
      chip.className = 'skill-chip';
      const initials = name.replace(/[^A-Za-z0-9]/g,' ').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
      chip.innerHTML = `<div class="ic" aria-hidden="true">${initials}</div><div class="lbl">${name}</div>`;
      grid.appendChild(chip);
    });
    wrap.appendChild(head);
    wrap.appendChild(grid);
    skillsRoot.appendChild(wrap);
  });
}

/* ============================================================
   RENDER: Project cards + case studies
   ============================================================ */
function renderProjects() {
  const projectGrid = document.getElementById('projectGrid');

  function projectMediaSvg(seed){
    const hues = ['#FF8A3D','#34E4C8'];
    return `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="192" height="122" rx="8" fill="none" stroke="${hues[seed%2]}" stroke-width="1.5" stroke-dasharray="3 5"/>
      <circle cx="100" cy="65" r="34" fill="none" stroke="${hues[(seed+1)%2]}" stroke-width="1.5"/>
      <circle cx="100" cy="65" r="20" fill="none" stroke="${hues[seed%2]}" stroke-width="1.5"/>
      <circle cx="100" cy="65" r="6" fill="${hues[(seed+1)%2]}"/>
    </svg>`;
  }

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-media">${projectMediaSvg(i)}</div>
      <div class="project-body">
        <div class="project-title-row">
          <h3>${p.title}</h3>
          ${p.stars ? `<span class="stars"><svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 14.9 4.4 18.1l1.4-6.3L1 7.5l6.4-.6L10 1z"/></svg>${p.stars}</span>` : ''}
        </div>
        <p class="desc">${p.desc}</p>
        <p class="project-outcome">${p.outcome}</p>
        <div class="tag-row">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          <a class="link-btn" href="${p.github}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
            Code
          </a>
          <button class="link-btn cs-open" data-id="${p.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M14 4v5h5"/></svg>
            Case study
          </button>
          ${p.demo ? `<a class="link-btn" href="${p.demo}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>Live demo</a>` : ''}
        </div>
      </div>`;
    projectGrid.appendChild(card);
  });

  const placeholder = document.createElement('article');
  placeholder.className = 'project-card placeholder';
  placeholder.innerHTML = `<div class="project-body">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" style="margin:0 auto 0.6rem;"><path d="M12 5v14M5 12h14"/></svg>
    <p style="font-family:var(--font-mono); font-size:0.85rem;">Add your next project<br>to the PROJECTS array</p>
  </div>`;
  projectGrid.appendChild(placeholder);
}

/* ---- Case study modal wiring ---- */
function setupCaseStudies() {
  const DIAGRAMS = {
    'diagram-etl': `<svg viewBox="0 0 480 140" xmlns="http://www.w3.org/2000/svg">
      <g font-family="IBM Plex Mono, monospace" font-size="11" fill="#8A96A8">
        <rect x="10" y="45" width="90" height="50" rx="6" fill="none" stroke="#FF8A3D"/><text x="55" y="74" text-anchor="middle" fill="#E8EDF2">Raw CSV</text>
        <path d="M100 70h40" stroke="#57647A" fill="none"/><path d="M136 65l6 5-6 5" stroke="#57647A" fill="none"/>
        <rect x="146" y="45" width="90" height="50" rx="6" fill="none" stroke="#34E4C8"/><text x="191" y="66" text-anchor="middle" fill="#E8EDF2">Clean +</text><text x="191" y="80" text-anchor="middle" fill="#E8EDF2">Transform</text>
        <path d="M236 70h40" stroke="#57647A" fill="none"/><path d="M272 65l6 5-6 5" stroke="#57647A" fill="none"/>
        <rect x="282" y="45" width="90" height="50" rx="6" fill="none" stroke="#FF8A3D"/><text x="327" y="74" text-anchor="middle" fill="#E8EDF2">Features</text>
        <path d="M372 70h40" stroke="#57647A" fill="none"/><path d="M408 65l6 5-6 5" stroke="#57647A" fill="none"/>
        <rect x="418" y="45" width="54" height="50" rx="6" fill="none" stroke="#34E4C8"/><text x="445" y="74" text-anchor="middle" fill="#E8EDF2">Charts</text>
      </g></svg>`,
    'diagram-agent': `<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg">
      <g font-family="IBM Plex Mono, monospace" font-size="11" fill="#8A96A8">
        <rect x="180" y="10" width="120" height="42" rx="8" fill="none" stroke="#34E4C8"/><text x="240" y="35" text-anchor="middle" fill="#E8EDF2">Student input</text>
        <path d="M240 52v20" stroke="#57647A"/><path d="M235 68l5 6 5-6" stroke="#57647A" fill="none"/>
        <rect x="150" y="80" width="180" height="42" rx="8" fill="none" stroke="#FF8A3D"/><text x="240" y="105" text-anchor="middle" fill="#E8EDF2">Guided question flow</text>
        <path d="M240 122v20" stroke="#57647A"/><path d="M235 138l5 6 5-6" stroke="#57647A" fill="none"/>
        <rect x="170" y="150" width="140" height="0" fill="none"/>
        <text x="240" y="156" text-anchor="middle" fill="#8A96A8">↓ recommendation</text>
      </g></svg>`,
    'diagram-loop': `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      <g font-family="IBM Plex Mono, monospace" font-size="11" fill="#E8EDF2">
        <circle cx="150" cy="80" r="60" fill="none" stroke="#FF8A3D" stroke-dasharray="4 6"/>
        <text x="150" y="30" text-anchor="middle">Load</text>
        <text x="220" y="80" text-anchor="middle">Explore</text>
        <text x="150" y="135" text-anchor="middle">Model</text>
        <text x="80" y="80" text-anchor="middle">Reflect</text>
      </g></svg>`,
  };

  const csBackdrop = document.getElementById('csBackdrop');
  const csTitle = document.getElementById('csTitle');
  const csSub = document.getElementById('csSub');
  const csBody = document.getElementById('csBody');
  const csClose = document.getElementById('csClose');
  let lastFocused = null;

  function openCaseStudy(id){
    const p = PROJECTS.find(x => x.id === id);
    if(!p) return;
    lastFocused = document.activeElement;
    csTitle.textContent = p.title;
    csSub.textContent = p.caseStudy.sub;
    csBody.innerHTML = `
      <div class="cs-block"><h4>Problem &amp; user context</h4><p>${p.caseStudy.problem}</p></div>
      <div class="cs-block"><h4>Constraints &amp; tradeoffs</h4><p>${p.caseStudy.constraints}</p></div>
      <div class="cs-block"><h4>Architecture / data flow</h4><div class="cs-diagram">${DIAGRAMS[p.caseStudy.architecture] || ''}</div></div>
      <div class="cs-block"><h4>Results &amp; lessons learned</h4><ul>${p.caseStudy.results.map(r=>`<li>${r}</li>`).join('')}</ul></div>
      <div class="cs-links">
        <a class="link-btn" href="${p.github}" target="_blank" rel="noopener noreferrer">Repository ↗</a>
        ${p.demo ? `<a class="link-btn" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ''}
      </div>`;
    csBackdrop.setAttribute('data-open','true');
    csClose.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy(){
    csBackdrop.setAttribute('data-open','false');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('.cs-open');
    if(btn) openCaseStudy(btn.dataset.id);
  });

  csClose.addEventListener('click', closeCaseStudy);
  csBackdrop.addEventListener('click', e => { if(e.target === csBackdrop) closeCaseStudy(); });
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && csBackdrop.getAttribute('data-open') === 'true') closeCaseStudy();
  });
}

/* ============================================================
   RENDER: Experience timeline
   ============================================================ */
function renderExperience() {
  const tlRoot = document.getElementById('timeline');
  EXPERIENCE.forEach(item => {
    const el = document.createElement('div');
    el.className = 'tl-item';
    el.innerHTML = `
      <div class="tl-role-row"><h3>${item.role}</h3><span class="tl-dates">${item.dates}</span></div>
      <p class="tl-org">${item.org}</p>
      <p class="desc">${item.desc}</p>
      <div class="tag-row">${item.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
    tlRoot.appendChild(el);
  });
}

/* ============================================================
   TYPING EFFECT
   ============================================================ */
function initTypeAnimation() {
  const el = document.getElementById('typeTarget');
  let roleIdx = 0, charIdx = ROLES[0].length, deleting = true, hold = 0;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){ el.textContent = ROLES[0]; return; }
  
  function tick(){
    const full = ROLES[roleIdx];
    if(hold > 0){ hold--; return setTimeout(tick, 16); }
    if(!deleting){
      charIdx++;
      el.textContent = full.slice(0, charIdx);
      if(charIdx === full.length){ deleting = true; hold = 90; }
    } else {
      charIdx--;
      el.textContent = full.slice(0, charIdx);
      if(charIdx === 0){ deleting = false; roleIdx = (roleIdx+1) % ROLES.length; hold = 10; }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.getAttribute('data-open') === 'true';
    navLinks.setAttribute('data-open', String(!open));
    navToggle.setAttribute('aria-expanded', String(!open));
  });
  navLinks.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
      navLinks.setAttribute('data-open','false');
      navToggle.setAttribute('aria-expanded','false');
    }
  });
}

/* ============================================================
   CONTACT FORM — Formspree Integration
   ============================================================ */
function initContactForm() {
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const submitBtn = this.querySelector('button[type="submit"]');
    
    submitBtn.disabled = true;
    status.textContent = 'Sending...';
    status.dataset.state = '';
    
    const formData = new FormData(this);
    
    fetch('https://formspree.io/f/xwledrrr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        status.dataset.state = 'ok';
        status.textContent = '✓ Message sent! Thanks for reaching out — I\'ll respond within 1–2 business days.';
        document.getElementById('contactForm').reset();
        submitBtn.disabled = false;
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      status.dataset.state = 'error';
      status.textContent = '✗ Something went wrong. Try emailing edwinebinu07@gmail.com directly.';
      submitBtn.disabled = false;
      console.error('Error:', error);
    });
  });
}

/* ============================================================
   INIT: Main
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  renderSkills();
  renderProjects();
  setupCaseStudies();
  renderExperience();
  initTypeAnimation();
  initMobileNav();
  initContactForm();
  
  document.getElementById('year').textContent = new Date().getFullYear();
});
