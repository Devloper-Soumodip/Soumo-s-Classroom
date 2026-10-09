// ============ Course Data ============
const courses = [
  { id: 'ms-word', name: 'Microsoft Word', icon: 'fas fa-file-word', category: 'office', level: 'Beginner to Pro', duration: '4 Weeks', rating: 4.8, students: 120, desc: 'Master document creation, formatting, and professional writing with advanced Word features.', topics: ['Formatting', 'Templates', 'Mail Merge', 'Macros'], syllabus: [{ week: 'Week 1', topic: 'Interface, Text Formatting & Styles' }, { week: 'Week 2', topic: 'Page Layout, Table Properties' }, { week: 'Week 3', topic: 'Mail Merge & Autocorrect Features' }, { week: 'Week 4', topic: 'Macros & Tab Settings' }] },
  { id: 'ms-excel', name: 'Microsoft Excel', icon: 'fas fa-file-excel', category: 'office', level: 'Beginner to Advanced', duration: '8 Weeks', rating: 4.9, students: 250, desc: 'Learn spreadsheets, formulas, functions, charts, and data analysis from scratch to pro.', topics: ['Formulas', 'Pivot Tables', 'Charts', 'VLOOKUP', 'Macros'], syllabus: [{ week: 'Week 1-2', topic: 'Basics, Data Entry & Formatting' }, { week: 'Week 3-4', topic: 'Formulas, Functions & Conditional Formatting' }, { week: 'Week 5-6', topic: 'Charts, Pivot Tables & Dashboard' }, { week: 'Week 7-8', topic: 'VLOOKUP, INDEX-MATCH & Macros' }] },
  { id: 'html', name: 'HTML', icon: 'fab fa-html5', category: 'web', level: 'Beginner to Pro', duration: '3 Weeks', rating: 4.7, students: 180, desc: 'Build the structure of web pages with semantic HTML5 elements and best practices.', topics: ['Tags', 'Forms', 'Semantic HTML', 'Accessibility'], syllabus: [{ week: 'Week 1', topic: 'HTML Basics, Tags & Elements' }, { week: 'Week 2', topic: 'Forms, Inputs & Validation' }, { week: 'Week 3', topic: 'Semantic HTML5 & Accessibility' }] },
  { id: 'css', name: 'CSS', icon: 'fab fa-css3-alt', category: 'web', level: 'Beginner to Intermediate', duration: '4 Weeks', rating: 4.8, students: 165, desc: 'Style and layout web pages with modern CSS, Flexbox, Grid, and animations.', topics: ['Selectors', 'Flexbox', 'Grid', 'Animations', 'Responsive'], syllabus: [{ week: 'Week 1', topic: 'Selectors, Colors & Box Model' }, { week: 'Week 2', topic: 'Flexbox & CSS Grid Layouts' }, { week: 'Week 3', topic: 'Transitions, Animations & Transforms' }, { week: 'Week 4', topic: 'Responsive Design & Media Queries' }] },
  { id: 'javascript', name: 'JavaScript', icon: 'fab fa-js', category: 'web', level: 'Intermediate', duration: '8 Weeks', rating: 4.9, students: 210, desc: "Add interactivity and dynamic behavior to websites with the world's most popular language.", topics: ['DOM', 'ES6+', 'Async/Await', 'APIs', 'OOP'], syllabus: [{ week: 'Week 1-2', topic: 'Variables, Data Types & Operators' }, { week: 'Week 3-4', topic: 'DOM Manipulation & Events' }, { week: 'Week 5-6', topic: 'ES6+, Async/Await & Fetch API' }, { week: 'Week 7-8', topic: 'OOP Concepts & Mini Projects' }] },
  { id: 'c', name: 'C Programming', icon: 'fas fa-code', category: 'programming', level: 'Beginner to Intermediate', duration: '6 Weeks', rating: 4.6, students: 90, desc: 'Build a strong programming foundation with C — the mother of modern languages.', topics: ['Variables', 'Pointers', 'Functions', 'Arrays', 'Structures'], syllabus: [{ week: 'Week 1-2', topic: 'Syntax, Variables & Control Flow' }, { week: 'Week 3-4', topic: 'Functions, Arrays & Strings' }, { week: 'Week 5-6', topic: 'Pointers, Structures & File Handling' }] },
  { id: 'cpp', name: 'C++ Programming', icon: 'fas fa-code', category: 'programming', level: 'Intermediate', duration: '8 Weeks', rating: 4.7, students: 110, desc: 'Master object-oriented programming with C++ and build powerful applications.', topics: ['OOP', 'Templates', 'STL', 'Exception Handling'], syllabus: [{ week: 'Week 1-2', topic: 'C++ Basics & Memory Management' }, { week: 'Week 3-4', topic: 'OOP: Classes, Objects & Inheritance' }, { week: 'Week 5-6', topic: 'Polymorphism & Templates' }, { week: 'Week 7-8', topic: 'STL & Exception Handling' }] },
  { id: 'python', name: 'Python', icon: 'fab fa-python', category: 'programming', level: 'Beginner to Intermediate', duration: '10 Weeks', rating: 4.9, students: 300, desc: 'Versatile language for web, data science, AI/ML, automation, and more.', topics: ['Syntax', 'OOP', 'NumPy', 'Pandas', 'Django'], syllabus: [{ week: 'Week 1-2', topic: 'Python Basics & Data Structures' }, { week: 'Week 3-4', topic: 'Functions, Modules & File Handling' }, { week: 'Week 5-6', topic: 'OOP & Exception Handling' }, { week: 'Week 7-8', topic: 'NumPy, Pandas & Data Visualization' }, { week: 'Week 9-10', topic: 'Web Scraping & Django Basics' }] },
  { id: 'tally', name: 'Tally Prime with GST', icon: 'fas fa-calculator', category: 'accounting', level: 'Beginner to Advanced', duration: '8 Weeks', rating: 4.8, students: 140, desc: 'Master accounting with Tally Prime, GST filing, inventory, and financial reports.', topics: ['Accounting', 'GST', 'Inventory', 'Payroll', 'Reports'], syllabus: [{ week: 'Week 1-2', topic: 'Accounting Basics & Tally Installation' }, { week: 'Week 3-4', topic: 'Ledgers, Vouchers & Inventory' }, { week: 'Week 5-6', topic: 'GST Configuration & Filing' }, { week: 'Week 7-8', topic: 'Payroll, TDS & Financial Reports' }] }
];

// ============ Theme Toggle ============
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
if (localStorage.getItem('theme') === 'light') body.classList.add('light-mode');
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

// ============ Custom Cursor & Scroll Progress & Mouse Glow ============
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
const scrollProgress = document.getElementById('scroll-progress');
const mouseGlow = document.getElementById('mouseGlow');

window.addEventListener('mousemove', (e) => {
  if (window.innerWidth >= 1024) { // Only on desktop
    if (cursorDot && cursorOutline) {
      cursorDot.style.left = `${e.clientX}px`; cursorDot.style.top = `${e.clientY}px`;
      cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 300, fill: 'forwards' });
    }
    if (mouseGlow) { mouseGlow.style.left = `${e.clientX}px`; mouseGlow.style.top = `${e.clientY}px`; }
  }
});

document.querySelectorAll('a, button, input, textarea, select, .course-card, .why-card, .testimonial-card, .contact-info-card, .faq-item').forEach(el => {
  if (cursorOutline) {
    el.addEventListener('mouseover', () => cursorOutline.classList.add('hover'));
    el.addEventListener('mouseout', () => cursorOutline.classList.remove('hover'));
  }
});

window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  if (scrollProgress) scrollProgress.style.width = `${scrollPercent}%`;
});

// ============ Loading Screen ============
let loadProgress = 0;
const loaderBar = document.getElementById('loaderBar');
const loaderPct = document.getElementById('loaderPct');
const loader = document.getElementById('loader');
document.body.style.overflow = 'hidden';
const loadInterval = setInterval(() => {
  loadProgress += Math.random() * 15 + 5;
  if (loadProgress >= 100) {
    loadProgress = 100; clearInterval(loadInterval);
    setTimeout(() => { loader.classList.add('hide'); document.body.style.overflow = 'auto'; initAnimations(); }, 500);
  }
  loaderBar.style.width = loadProgress + '%';
  loaderPct.textContent = Math.floor(loadProgress) + '%';
}, 150);

// ============ Navbar Scroll ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  let current = '';
  document.querySelectorAll('section[id]').forEach(section => { if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute('id'); });
  document.querySelectorAll('.nav-link').forEach(link => { link.classList.toggle('active', link.getAttribute('href') === '#' + current); });
});

// ============ Courses Dropdown ============
const coursesWrapper = document.getElementById('coursesWrapper');
const coursesNavToggle = document.getElementById('coursesNavToggle');
coursesNavToggle.addEventListener('click', (e) => { e.preventDefault(); coursesWrapper.classList.toggle('open'); });
document.addEventListener('click', (e) => { if (!coursesWrapper.contains(e.target)) coursesWrapper.classList.remove('open'); });
document.querySelectorAll('.dropdown-course').forEach(item => {
  item.addEventListener('click', () => { scrollToCourse(item.dataset.course); coursesWrapper.classList.remove('open'); });
});

// ============ Mobile Menu ============
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');
mobileToggle.addEventListener('click', () => { mobileMenu.classList.add('open'); mobileOverlay.classList.add('open'); });
mobileClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);
function closeMobileMenu() { mobileMenu.classList.remove('open'); mobileOverlay.classList.remove('open'); }

const mobileCoursesToggle = document.getElementById('mobileCoursesToggle');
const mobileCoursesList = document.getElementById('mobileCoursesList');
mobileCoursesList.innerHTML = courses.map(c => `<div class="mobile-course-item" data-course="${c.id}"><i class="${c.icon}"></i> ${c.name}</div>`).join('');
mobileCoursesToggle.addEventListener('click', () => {
  mobileCoursesList.classList.toggle('open');
  mobileCoursesToggle.querySelector('i').style.transform = mobileCoursesList.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
});
document.querySelector('.mobile-menu').addEventListener('click', (e) => {
  const target = e.target.closest('[data-course]');
  if (target) { e.preventDefault(); scrollToCourse(target.dataset.course); } 
  else if (e.target.closest('.mobile-link') && !e.target.closest('#mobileCoursesToggle')) { closeMobileMenu(); }
});
document.querySelectorAll('.footer-link[data-course]').forEach(link => {
  link.addEventListener('click', (e) => { e.preventDefault(); scrollToCourse(link.dataset.course); });
});

function scrollToCourse(courseId) {
  closeMobileMenu();
  document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const card = document.querySelector(`[data-course-id="${courseId}"]`);
    if (card) {
      card.style.outline = '2px solid var(--primary)';
      card.style.outlineOffset = '4px';
      setTimeout(() => { card.style.outline = ''; card.style.outlineOffset = ''; }, 2500);
    }
  }, 700);
}

// ============ Hero Particles Canvas ============
const heroCanvas = document.getElementById('heroCanvas');
const ctx = heroCanvas.getContext('2d');
let particles = [];
function resizeCanvas() { heroCanvas.width = heroCanvas.offsetWidth; heroCanvas.height = heroCanvas.offsetHeight; }
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

class Particle {
  constructor() {
    this.x = Math.random() * heroCanvas.width; this.y = Math.random() * heroCanvas.height;
    this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 2 + 0.5; this.opacity = Math.random() * 0.4 + 0.1;
    const colors = ['99, 102, 241', '236, 72, 153', '34, 211, 238'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > heroCanvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > heroCanvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.5, this.size), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`; ctx.fill();
  }
}
function initParticles() { particles = []; const count = Math.min(60, Math.floor(heroCanvas.width / 25)); for (let i = 0; i < count; i++) particles.push(new Particle()); }
initParticles();
function animateParticles() {
  if (!heroCanvas.width || !heroCanvas.height) return requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ============ 1. Typewriter Effect ============
const typeData = ["Python Programming.", "Advanced Excel.", "Web Development.", "Tally Prime with GST.", "C & C++ Programming."];
let typeIndex = 0, charIndex = 0, isDeleting = false;
const typedTextEl = document.getElementById('typedText');

function typeWriter() {
    const currentWord = typeData[typeIndex];
    if (isDeleting) {
        typedTextEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; typeIndex = (typeIndex + 1) % typeData.length; typeSpeed = 500;
    }
    setTimeout(typeWriter, typeSpeed);
}
typeWriter();

// ============ 2. 3D Tilt Effect (Disabled on Mobile) ============
function attachTilt() {
  if (window.innerWidth < 1024) return; // Disable on mobile/tablet
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y - rect.height / 2) / rect.height) * -10;
      const ry = ((x - rect.width / 2) / rect.width) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// ============ 3. Magnetic Buttons ============
document.querySelectorAll('.magnetic').forEach(btn => {
  if (window.innerWidth < 1024) return; // Disable on mobile
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

// ============ Render Courses ============
const coursesGrid = document.getElementById('coursesGrid');
function renderCourses(filter = 'all') {
  const filtered = filter === 'all' ? courses : courses.filter(c => c.category === filter);
  coursesGrid.innerHTML = filtered.map(c => {
    const levelClass = c.level.toLowerCase().includes('advanced') ? 'level-advanced' : c.level.toLowerCase().includes('intermediate') ? 'level-intermediate' : 'level-beginner';
    return `<div class="course-card" data-course-id="${c.id}" data-category="${c.category}"><div class="course-card-header"><div class="course-icon-wrap ${c.category}"><i class="${c.icon}"></i></div><h3>${c.name}</h3><p class="desc">${c.desc}</p></div><div class="course-card-body"><div><div class="course-meta"><span class="course-tag ${levelClass}">${c.level}</span><span class="course-tag"><i class="far fa-clock mr-1"></i>${c.duration}</span></div><div class="course-topics">${c.topics.map(t => `<span class="course-topic-pill">#${t}</span>`).join(' ')}</div></div><div><div class="course-stats"><span><i class="fas fa-users text-[var(--primary)] mr-1"></i> ${c.students}+ Students</span><span class="course-rating"><i class="fas fa-star mr-1"></i> ${c.rating}</span></div><div class="course-actions"><button class="course-syllabus-btn" onclick="openSyllabusModal('${c.id}')"><i class="fas fa-list-ul"></i> Syllabus</button></div></div></div></div>`;
  }).join('');
  attachTilt();
}
renderCourses();
document.querySelectorAll('.course-filter').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.course-filter').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderCourses(btn.dataset.filter); }); });

// ============ Course Syllabus Modal ============
function openSyllabusModal(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;
  
  document.getElementById('syllabusTitle').textContent = `${course.name} - Syllabus`;
  const contentDiv = document.getElementById('syllabusContent');
  contentDiv.innerHTML = course.syllabus.map(s => `
    <div class="syllabus-item">
      <div class="syllabus-week">${s.week}</div>
      <div class="syllabus-topic">${s.topic}</div>
    </div>
  `).join('');
  
  openModal('syllabusModal');
}

// ============ Course Selection Grid ============
const courseSelectGrid = document.getElementById('courseSelectGrid');
let selectedCourse = '';
courseSelectGrid.innerHTML = courses.map(c => `<div class="course-select-item" data-course="${c.id}"><div class="check"><i class="fas fa-check"></i></div><div class="label">${c.name}</div></div>`).join('');
courseSelectGrid.addEventListener('click', (e) => {
  const item = e.target.closest('.course-select-item'); if (!item) return;
  document.querySelectorAll('.course-select-item').forEach(i => i.classList.remove('selected'));
  item.classList.add('selected'); selectedCourse = item.dataset.course;
});

// ============ 4. Registration Form Slide Animation ============
let currentStep = 1;
const regProgress = document.getElementById('regProgress');

function updateStep(step, direction = 'next') {
  const currentContent = document.getElementById('step' + currentStep);
  const nextContent = document.getElementById('step' + step);
  
  // Slide out current
  currentContent.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
  
  // Prepare next content to slide in
  nextContent.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
  nextContent.classList.remove('hidden');
  
  // Trigger reflow
  void nextContent.offsetWidth;
  
  // Slide in next content
  nextContent.classList.remove('slide-in-right', 'slide-in-left');
  
  // Hide old content after animation
  setTimeout(() => {
    currentContent.classList.add('hidden');
    currentContent.classList.remove('slide-out-left', 'slide-out-right');
  }, 400);

  currentStep = step;
  document.querySelectorAll('.reg-step').forEach(s => {
    const sNum = parseInt(s.dataset.step);
    s.classList.remove('active', 'completed');
    if (sNum < step) s.classList.add('completed');
    else if (sNum === step) s.classList.add('active');
  });
  regProgress.style.width = ((step - 1) / 2) * 80 + '%';
  if (step === 3) generateQR('regQR');
}
document.getElementById('step1Next').addEventListener('click', () => {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  if (!name) return showToast('Please enter your name', 'error');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('Please enter a valid email', 'error');
  if (!phone || phone.replace(/\D/g, '').length < 10) return showToast('Please enter a valid phone number', 'error');
  updateStep(2, 'next');
});
document.getElementById('step2Back').addEventListener('click', () => updateStep(1, 'prev'));
document.getElementById('step2Next').addEventListener('click', () => { if (!selectedCourse) return showToast('Please select a course', 'error'); updateStep(3, 'next'); });
document.getElementById('step3Back').addEventListener('click', () => updateStep(2, 'prev'));

// ============ QR Code Generator ============
function generateQR(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const size = 25, cellSize = 8, total = size * cellSize;
  function inFinder(x, y, fx, fy) {
    const dx = Math.abs(x - fx), dy = Math.abs(y - fy);
    if (dx > 3 || dy > 3) return null;
    if (dx === 3 || dy === 3) return true;
    if (dx === 2 || dy === 2) return false;
    return true;
  }
  let cells = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let fill = null;
      const f1 = inFinder(x, y, 3, 3);
      const f2 = inFinder(x, y, size - 4, 3);
      const f3 = inFinder(x, y, 3, size - 4);
      if (f1 !== null) fill = f1;
      else if (f2 !== null) fill = f2;
      else if (f3 !== null) fill = f3;
      else {
        if ((x < 7 && y < 7) || (x > size - 8 && y < 7) || (x < 7 && y > size - 8)) fill = false;
        else fill = ((x * 7 + y * 13 + x * y * 3 + x * y) % 7) < 3;
      }
      if (fill) cells += `<rect x="${x * cellSize}" y="${y * cellSize}" width="${cellSize}" height="${cellSize}" fill="#07070d"/>`;
    }
  }
  const ax = size - 7, ay = size - 7;
  for (let y = -2; y <= 2; y++) {
    for (let x = -2; x <= 2; x++) {
      const px = ax + x, py = ay + y;
      if (px >= 0 && px < size && py >= 0 && py < size) {
        const isBorder = Math.abs(x) === 2 || Math.abs(y) === 2;
        const isCenter = x === 0 && y === 0;
        cells += `<rect x="${px * cellSize}" y="${py * cellSize}" width="${cellSize}" height="${cellSize}" fill="${(isBorder || isCenter) ? '#07070d' : 'white'}"/>`;
      }
    }
  }
  container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" width="200" height="200"><rect width="${total}" height="${total}" fill="white"/>${cells}</svg>`;
}

// ============ Google Sheets Integration ============
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbx3wIXkwSVq1zGf4PaknsZM286zabv1DHzZRhPx3Gt3-PPFBF8CfSNlA6Y_zTbrDk63/exec';
async function submitToGoogleSheet(data) {
  try { await fetch(GOOGLE_SHEET_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); return true; } 
  catch (error) { console.error('Submission error:', error); return false; }
}

document.getElementById('submitRegistration').addEventListener('click', async () => {
  const transaction = document.getElementById('regTransaction').value.trim();
  const terms = document.getElementById('regTerms').checked;
  if (!transaction) return showToast('Please enter transaction ID', 'error');
  if (!terms) return showToast('Please accept the terms and conditions', 'error');
  
  const btn = document.getElementById('submitRegistration');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'; btn.disabled = true;
  
  const courseName = courses.find(c => c.id === selectedCourse)?.name || '';
  const data = {
    type: 'registration', name: document.getElementById('regName').value, email: document.getElementById('regEmail').value,
    phone: document.getElementById('regPhone').value, age: document.getElementById('regAge').value || 'N/A',
    qualification: document.getElementById('regQualification').value || 'N/A', batch: document.getElementById('regBatch').value || 'N/A',
    course: courseName, message: document.getElementById('regMessage').value || 'N/A',
    transactionId: transaction, amount: 249, date: new Date().toISOString()
  };
  
  await submitToGoogleSheet(data);
  
  btn.innerHTML = originalText; btn.disabled = false;
  
  document.getElementById('successTitle').textContent = 'Registration Successful!';
  document.getElementById('successMsg').innerHTML = `Thank you <strong>${data.name}</strong>! Your registration for <strong>${courseName}</strong> has been received. We'll contact you at <strong>${data.email}</strong> within 24 hours.`;
  openModal('successModal');
  
  // 5. Trigger Confetti
  launchConfetti();
  
  ['regName','regEmail','regPhone','regAge','regQualification','regBatch','regMessage','regTransaction'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('regTerms').checked = false; 
  selectedCourse = '';
  document.querySelectorAll('.course-select-item').forEach(i => i.classList.remove('selected')); 
  updateStep(1, 'prev');
});

// ============ 5. Confetti Animation ============
const confettiCanvas = document.getElementById('confettiCanvas');
const confettiCtx = confettiCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimationId;

function resizeConfettiCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfettiCanvas);
resizeConfettiCanvas();

function launchConfetti() {
  confettiCanvas.style.display = 'block';
  confettiParticles = [];
  const colors = ['#6366f1', '#ec4899', '#22d3ee', '#f59e0b', '#10b981'];
  
  for (let i = 0; i < 150; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 100,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }
  
  animateConfetti();
  setTimeout(() => {
    cancelAnimationFrame(confettiAnimationId);
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiCanvas.style.display = 'none';
  }, 5000);
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  
  confettiParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05; // Gravity
    p.rotation += p.rotationSpeed;
    
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rotation * Math.PI / 180);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    confettiCtx.restore();
  });
  
  confettiAnimationId = requestAnimationFrame(animateConfetti);
}

// ============ 7. Testimonials Slider ============
const testimonialTrack = document.getElementById('testimonialTrack');
const sliderDots = document.getElementById('sliderDots');
const cards = document.querySelectorAll('.testimonial-card');
let currentSlide = 0;
let slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
const totalSlides = cards.length;

function setupSlider() {
  // Create dots
  sliderDots.innerHTML = '';
  const dotCount = Math.ceil(totalSlides / slidesToShow);
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = i * slidesToShow;
      updateSlider();
    });
    sliderDots.appendChild(dot);
  }
  updateSlider();
}

function updateSlider() {
  const cardWidth = testimonialTrack.querySelector('.testimonial-card').offsetWidth + 16; // 16 for margin
  testimonialTrack.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  
  // Update dots
  const activeDotIndex = Math.floor(currentSlide / slidesToShow);
  document.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === activeDotIndex);
  });
}

function nextSlide() {
  currentSlide += slidesToShow;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateSlider();
}

let sliderInterval = setInterval(nextSlide, 4000);

// Recalculate on resize
window.addEventListener('resize', () => {
  const newSlidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  if (newSlidesToShow !== slidesToShow) {
    slidesToShow = newSlidesToShow;
    setupSlider();
  }
});

setupSlider();

// ============ Contact Form ============
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim(); const email = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim(); const message = document.getElementById('contactMessage').value.trim();
  if (!name || !email || !subject || !message) return showToast('Please fill all fields', 'error');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('Please enter a valid email', 'error');
  await submitToGoogleSheet({ type: 'contact', name, email, subject, message, date: new Date().toISOString() });
  document.getElementById('contactForm').reset();
  showToast('Message sent! We\'ll get back to you soon.', 'success');
});

// ============ Newsletter ============
document.getElementById('newsletterBtn').addEventListener('click', async () => {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('Please enter a valid email', 'error');
  await submitToGoogleSheet({ type: 'newsletter', email, date: new Date().toISOString() });
  document.getElementById('newsletterEmail').value = '';
  showToast('Subscribed! Thank you for joining.', 'success');
});

// ============ Modal Helpers ============
function openModal(id) { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }
document.querySelectorAll('[data-close]').forEach(el => { el.addEventListener('click', () => { el.closest('.modal').classList.remove('open'); document.body.style.overflow = ''; }); });

// ============ Toast ============
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<div class="toast-icon"><i class="fas ${type === 'success' ? 'fa-check' : type === 'error' ? 'fa-exclamation' : 'fa-info'}"></i></div><div class="toast-msg">${msg}</div>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 400); }, 4000);
}

// ============ FAQ Accordion ============
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// ============ Back to Top Button ============
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => { backToTopBtn.classList.toggle('show', window.scrollY > 400); });
backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// ============ 6. Scroll Reveal & Animated Counter ============
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.classList.contains('stat-value')) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.querySelectorAll('.stat-value').forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.count); const suffix = el.dataset.suffix || ''; const isDecimal = target % 1 !== 0;
  let current = 0; const duration = 2000, steps = 60, increment = target / steps, stepTime = duration / steps;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
  }, stepTime);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function(e) { const href = this.getAttribute('href'); if (href === '#' || href.length < 2) return; const target = document.querySelector(href); if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); } }); });

// ============ AI Assistant Logic ============
const aiToggleBtn = document.getElementById('aiToggleBtn');
const aiChatWidget = document.getElementById('aiChatWidget');
const aiChatBody = document.getElementById('aiChatBody');
const aiInput = document.getElementById('aiInput');

aiToggleBtn.addEventListener('click', () => aiChatWidget.classList.toggle('open'));
document.getElementById('aiCloseBtn').addEventListener('click', () => aiChatWidget.classList.remove('open'));

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div'); msgDiv.className = `message ${sender}`;
    msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
    aiChatBody.appendChild(msgDiv); aiChatBody.scrollTop = aiChatBody.scrollHeight;
}
function showTyping() {
    const typingDiv = document.createElement('div'); typingDiv.className = 'typing-indicator'; typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>'; aiChatBody.appendChild(typingDiv); aiChatBody.scrollTop = aiChatBody.scrollHeight;
}
function hideTyping() { const t = document.getElementById('typingIndicator'); if (t) t.remove(); }
function getAIResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes('course') || msg.includes('learn') || msg.includes('teach')) return "We offer premium courses like MS Excel, Python, JavaScript, C/C++, Tally Prime with GST, and Web Development! You can check the 'Courses' section for details. Which one are you interested in?";
    else if (msg.includes('fee') || msg.includes('cost') || msg.includes('price') || msg.includes('charge')) return "The registration fee for full course enrollment is just ₹249! This gives you access to all study materials and live classes.";
    else if (msg.includes('time') || msg.includes('batch') || msg.includes('schedule')) return "We have flexible batch timings: Morning (8 AM - 11 AM), Afternoon (12 PM - 3 PM), Evening (4 PM - 7 PM), and Night (8 PM - 10 PM). You can choose your preferred time during registration!";
    else if (msg.includes('tally') || msg.includes('gst')) return "Our Tally Prime with GST course is highly recommended! It covers accounting, GST filing, inventory, and payroll. It's an 8-week course. You can register from the 'Registration' section.";
    else if (msg.includes('payment') || msg.includes('pay') || msg.includes('upi')) return "You can pay securely via PhonePe, Google Pay, or Paytm by scanning the QR code provided in the Registration step. The registration fee is ₹249.";
    else if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('whatsapp')) return "You can reach us at soumosclassroom@gmail.com or call/WhatsApp at +91 98765 43210. We are available from 10 AM to 8 PM.";
    else if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) return "Hello there! 👋 How can I assist you with your learning journey today? You can ask about our courses, fees, or batch timings.";
    else return "I am here to help you with information about our courses, fees, and batches! Could you please rephrase your question? For complex queries, you can contact us directly at soumosclassroom@gmail.com.";
}
function handleSend() {
    const text = aiInput.value.trim(); if (!text) return;
    appendMessage(text, 'user'); aiInput.value = ''; showTyping();
    setTimeout(() => { hideTyping(); appendMessage(getAIResponse(text), 'bot'); }, 1000 + Math.random() * 1000);
}
document.getElementById('aiSendBtn').addEventListener('click', handleSend);
aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });