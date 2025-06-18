// --- Testimonial Carousel ---
const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    author: 'Lorem ipsum',
    role: 'consectetur sadipscing elitr',
    avatar: 'imgs/avatar1.png'
  },
  {
    text: 'Depoimento 2: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    author: 'Dolor sit',
    role: 'sadipscing elitr',
    avatar: 'imgs/avatar2.png'
  },
  {
    text: 'Depoimento 3: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    author: 'Amet consectetur',
    role: 'elitr',
    avatar: 'imgs/avatar3.png'
  }
];

let testimonialIndex = 0;
let testimonialInterval = null;

function renderTestimonial(idx) {
  const card = document.querySelector('.testimonial__card');
  const t = testimonials[idx];
  card.querySelector('blockquote p').textContent = t.text;
  card.querySelector('.testimonial__avatar').src = t.avatar;
  card.querySelector('.testimonial__avatar').alt = t.author;
  card.querySelector('.testimonial__author strong').textContent = t.author;
  card.querySelector('.testimonial__author span').textContent = t.role;
  document.querySelectorAll('.testimonial__dots .dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  renderTestimonial(testimonialIndex);
}

function startTestimonialAutoplay() {
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialAutoplay() {
  clearInterval(testimonialInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  // Testimonial carousel
  renderTestimonial(testimonialIndex);
  startTestimonialAutoplay();
  document.querySelectorAll('.testimonial__dots .dot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
      testimonialIndex = i;
      renderTestimonial(i);
      stopTestimonialAutoplay();
      startTestimonialAutoplay();
    });
  });

  // --- Tabs ---
  const tabContents = [
    'Conteúdo da aba 1: Lorem ipsum dolor sit amet.',
    'Conteúdo da aba 2: Sed ut perspiciatis unde omnis.',
    'Conteúdo da aba 3: Nemo enim ipsam voluptatem.',
    'Conteúdo da aba 4: Ut enim ad minima veniam.'
  ];
  const tabs = document.querySelectorAll('.tab');
  const tabsSection = document.querySelector('.tabs__container');
  let tabContentDiv = document.createElement('div');
  tabContentDiv.className = 'tab-content';
  tabContentDiv.style.marginTop = '32px';
  tabContentDiv.style.fontFamily = "'Zoho_Puvi_Regular', Arial, sans-serif";
  tabContentDiv.style.fontSize = '1.1rem';
  tabContentDiv.textContent = tabContents[0];
  tabsSection.appendChild(tabContentDiv);

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tabContentDiv.textContent = tabContents[i];
    });
  });
});
