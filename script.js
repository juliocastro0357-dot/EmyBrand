const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  nav.classList.remove('open');
}));

document.querySelectorAll('[data-package]').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('#service').value = `Paquete ${link.dataset.package}`;
}));

const form = document.querySelector('#contact-form');
const result = document.querySelector('#form-result');
const message = document.querySelector('#form-message');
const copyButton = document.querySelector('#copy-message');
const copyStatus = document.querySelector('#copy-status');
let preparedMessage = '';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  preparedMessage = [
    'Hola, EmyBrand. Quiero solicitar un diagnóstico para mi marca.',
    '',
    `Nombre: ${fields.get('name').trim()}`,
    `Negocio o marca: ${fields.get('business').trim()}`,
    `Servicio de interés: ${fields.get('service')}`,
    `Mi WhatsApp o correo: ${fields.get('contact').trim()}`,
  ].join('\n');
  message.textContent = preparedMessage;
  result.hidden = false;
  copyStatus.textContent = '';
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(preparedMessage);
    copyStatus.textContent = 'Solicitud copiada.';
  } catch {
    const helper = document.createElement('textarea');
    helper.value = preparedMessage;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.append(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
    copyStatus.textContent = 'Solicitud copiada.';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.service-card, .project, .process-steps article, .price-card, .value-strip article').forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}
