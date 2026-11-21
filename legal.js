const switcher = document.querySelector('#legal-language');
const nodes = [...document.querySelectorAll('[data-es][data-en]')];
let language = localStorage.getItem('emybrand-language') || 'es';
function setLegalLanguage(next) {
  language = next;
  nodes.forEach((node) => { node.innerHTML = node.dataset[language]; });
  document.documentElement.lang = language === 'en' ? 'en' : 'es-MX';
  document.title = language === 'en'
    ? (location.pathname.endsWith('privacidad.html') ? 'Privacy Notice | EmyBrand' : 'Terms & Conditions | EmyBrand')
    : (location.pathname.endsWith('privacidad.html') ? 'Aviso de Privacidad | EmyBrand' : 'Términos y Condiciones | EmyBrand');
  switcher.innerHTML = language === 'en' ? 'ES <span>/ EN</span>' : 'EN <span>/ ES</span>';
  localStorage.setItem('emybrand-language', language);
}
switcher.addEventListener('click', () => setLegalLanguage(language === 'es' ? 'en' : 'es'));
document.querySelectorAll('.legal-year').forEach((node) => { node.textContent = new Date().getFullYear(); });
setLegalLanguage(language);
