const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.gap = '12px';
  navLinks.style.background = '#ffffff';
  navLinks.style.padding = '12px';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '62px';
  navLinks.style.left = '16px';
  navLinks.style.right = '16px';
  navLinks.style.border = '1px solid #e5e7eb';
  navLinks.style.borderRadius = '12px';
  navLinks.style.boxShadow = '0 10px 24px rgba(0,0,0,.06)';
});
const counters = [
  { id: 's1', to: 250 },
  { id: 's2', to: 15 },
  { id: 's3', to: 8 },
  { id: 's4', to: 4 }
];
const runCounter = (el, to) => {
  let n = 0;
  const step = Math.ceil(to / 60);
  const t = setInterval(() => {
    n += step;
    if (n >= to) {
      n = to;
      clearInterval(t);
    }
    el.textContent = n;
  }, 20);
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      counters.forEach(c => runCounter(document.getElementById(c.id), c.to));
      observer.disconnect();
    }
  });
});
observer.observe(document.querySelector('.stats'));
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const program = form.program.value;
  const message = form.message.value.trim();
  console.log({
    name,
    phone,
    email,
    program,
    message
  });

  formMsg.textContent = " شكرًا لك " + (name || "طالبنا العزيز") + "! تم استلام طلبك وسنتواصل معك قريبًا.";
  formMsg.style.color = "green";
  formMsg.style.fontWeight = "600";
  form.reset();
});
document.getElementById('year').textContent = new Date().getFullYear();
