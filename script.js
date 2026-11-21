const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const languageButton = document.querySelector('#language-toggle');
const spanish = {
  'Skip to content': 'Saltar al contenido', 'Services': 'Servicios', 'Process': 'Proceso', 'Packages': 'Paquetes', 'Questions': 'Preguntas',
  'Let’s talk about your brand': 'Hablemos de tu marca', 'STRATEGY · DESIGN · DEVELOPMENT': 'ESTRATEGIA · DISEÑO · DESARROLLO',
  'Your brand has something to say.': 'Tu marca tiene algo que decir.', 'Let’s make it stand out.': 'Hagamos que se note.',
  'We turn ideas into brands with personality, presence and a digital foundation built to grow.': 'Transformamos ideas en marcas con personalidad, presencia y una base digital lista para crecer.',
  'View packages': 'Ver paquetes', 'Request a brand consultation': 'Solicitar diagnóstico', 'One clear direction for your brand,': 'Una sola dirección para tu marca,',
  'from the first idea to launch.': 'desde la primera idea hasta el lanzamiento.', 'CREATIVE STRATEGY': 'ESTRATEGIA CREATIVA',
  'FOR BUSINESSES READY TO GROW': 'PARA NEGOCIOS QUE QUIEREN CRECER', 'SCROLL TO EXPLORE': 'DESLIZA PARA EXPLORAR',
  'START WITH A STRONG FOUNDATION': 'EMPIEZA CON UNA BUENA BASE', 'Your business deserves': 'Tu negocio merece', 'to look like what it is.': 'verse como lo que es.',
  'When your identity, communication and digital presence work together, your offer is easier to understand and your business makes a more confident impression.': 'Cuando identidad, comunicación y presencia digital trabajan juntas, tu propuesta se entiende mejor y tu negocio se presenta con más confianza.',
  'At EmyBrand, we bring strategy, design and technology together to create a consistent experience at every touchpoint.': 'En EmyBrand unimos estrategia creativa, diseño y tecnología para construir una experiencia coherente en cada punto de contacto.',
  'How we work': 'Así trabajamos', 'INTEGRATED APPROACH': 'ENFOQUE INTEGRAL', 'Brand, web and communication with one creative direction.': 'Marca, web y comunicación bajo una sola dirección creativa.',
  'MADE FOR YOU': 'HECHO A TU MEDIDA', 'Visual decisions connected to your business and your customers.': 'Decisiones visuales conectadas con tu negocio y tus clientes.',
  'READY FOR WHAT’S NEXT': 'LISTO PARA AVANZAR', 'Deliverables designed to use, update and grow with.': 'Entregables pensados para usar, actualizar y hacer crecer.',
  'WHAT WE DO': 'LO QUE HACEMOS', 'Four pillars.': 'Cuatro pilares.', 'One stronger brand.': 'Una marca más fuerte.',
  'We meet your business where it is and connect every piece so your brand feels consistent throughout.': 'Te acompañamos en el punto que tu negocio necesita y conectamos cada pieza para que todo se sienta parte de la misma marca.',
  '01 / IDENTITY': '01 / IDENTIDAD', 'Brand identity': 'Branding e identidad', 'A recognizable identity that expresses what makes your business different.': 'Una identidad reconocible que expresa lo que hace diferente a tu negocio.',
  'Explore service': 'Explorar servicio', '02 / DIGITAL EXPERIENCE': '02 / EXPERIENCIA DIGITAL', 'Web design & development': 'Diseño y desarrollo web',
  'Fast, responsive websites that present your offer clearly and guide visitors to the next step.': 'Sitios rápidos y responsivos que presentan tu oferta con claridad y guían al siguiente paso.',
  '03 / CONTENT': '03 / CONTENIDO', 'Marketing & social media': 'Marketing y redes', 'Content, calendars and messaging with a consistent visual style and a voice of your own.': 'Contenido, parrillas y mensajes con una línea visual consistente y voz propia.',
  '04 / VISIBILITY': '04 / VISIBILIDAD', 'Local SEO & visibility': 'SEO y posicionamiento local',
  'Improve your local search presence and make it easier for new customers to find you.': 'Mejora tu presencia en búsquedas locales y facilita que nuevos clientes te encuentren.',
  'A LOOK AT WHAT’S POSSIBLE': 'UN VISTAZO A LO POSIBLE', 'Ideas take': 'Ideas que toman', 'shape and presence.': 'forma y presencia.',
  'A consistent brand shows up in every detail, from its identity to the experience of browsing its website.': 'Una marca consistente se reconoce en cada detalle: desde su identidad hasta la experiencia de navegar su sitio.',
  'coffee roasters': 'tostadores', 'IDENTITY · APPLICATIONS': 'IDENTIDAD · APLICACIONES', 'SAMPLE CONCEPT': 'CONCEPTO DEMOSTRATIVO',
  'An identity with character': 'Una identidad con carácter', 'DESIGN FOR LIVING': 'DISEÑO PARA VIVIR', 'Spaces that': 'Espacios que', 'make you feel good.': 'te hacen bien.',
  'EXPLORE THE STUDIO': 'CONOCE EL ESTUDIO', 'WEBSITE · DIGITAL EXPERIENCE': 'SITIO WEB · EXPERIENCIA DIGITAL', 'A website that guides': 'Una web que guía',
  'Your moment.': 'Tu momento.', 'Your energy.': 'Tu energía.', 'MOVE YOUR WAY': 'MUÉVETE A TU MANERA', 'Today is yours.': 'Hoy cuenta por ti.',
  'VISUAL DIRECTION · SOCIAL': 'DIRECCIÓN VISUAL · REDES', 'Content with personality': 'Contenido con personalidad',
  'Visual exercises to show creative direction. They are not real client projects or commercial results.': 'Ejercicios visuales para mostrar dirección creativa. No corresponden a clientes ni resultados comerciales reales.',
  'CLARITY AT EVERY STAGE': 'CLARIDAD EN CADA ETAPA', 'From the idea': 'De la idea', 'to what’s next.': 'al siguiente nivel.',
  'Know what comes next, what we deliver and how every stage helps build a stronger brand.': 'Sabes qué sigue, qué entregamos y cómo cada etapa contribuye a una marca mejor construida.',
  'Discovery & strategy': 'Diagnóstico y estrategia', 'We learn about your business, your goals and the people you want to reach.': 'Entendemos tu negocio, tus objetivos y a quién quieres llegar.',
  'Structure & design': 'Arquitectura y diseño', 'We shape the concept, structure and visual direction for your brand.': 'Definimos concepto, estructura y dirección visual para tu marca.',
  'Development & production': 'Desarrollo y producción', 'We create the materials and digital experience we agreed on.': 'Creamos los materiales y la experiencia digital acordados.',
  'Launch & delivery': 'Lanzamiento y entrega', 'We publish, review and hand over your files and access details.': 'Publicamos, revisamos y te entregamos tus archivos y accesos.',
  'PACKAGES FOR EVERY STAGE': 'PAQUETES PARA CADA ETAPA', 'A clear investment.': 'Una inversión clara.', 'A defined scope.': 'Un alcance definido.',
  'Choose the level of support that makes sense for you today. We confirm each proposal after learning about your project.': 'Elige el nivel de acompañamiento que tiene sentido hoy. Cada propuesta se confirma después de entender tu proyecto.',
  '01 / A STRONG START': '01 / PARA EMPEZAR', 'LAUNCH': 'DESPEGUE', 'A professional foundation to present your brand and start attracting customers.': 'Una base profesional para presentar tu marca y empezar a atraer clientes.',
  'Request a quote': 'Solicitar cotización', 'Custom quote': 'Cotización', 'based on scope and needs': 'según alcance y necesidades', 'Request a Launch quote': 'Cotizar Despegue', 'Request a Growth quote': 'Solicitar cotización', 'Request an Empire quote': 'Solicitar cotización', 'I accept the': 'Acepto el', 'Acepto el': 'I accept the', 'Privacy Notice': 'Aviso de Privacidad', 'and authorize the use of my data to respond to my request.': 'y autorizo el uso de mis datos para responder a mi solicitud.', 'y autorizo el uso de mis datos para responder a mi solicitud.': 'and authorize the use of my data to respond to my request.', 'Terms & Conditions': 'Términos y Condiciones', 'The message is prepared on this site; it will only be shared with WhatsApp when you choose to open and send it.': 'El mensaje se prepara en este sitio; solo se compartirá con WhatsApp cuando elijas abrirlo y enviarlo.', 'Primary logo and variations': 'Logotipo principal y variantes', 'Color palette and identity guide': 'Paleta de color y guía de identidad',
  'Responsive one-page landing site': 'Landing page responsiva de una página', '6 social templates and 6 strategic captions': '6 plantillas y 6 copies para redes',
  'Basic Google Business Profile setup': 'Configuración básica de Google Business Profile', 'Estimated delivery: 5–7 business days': 'Entrega estimada: 5–7 días hábiles',
  'Get a Launch quote': 'Cotizar Despegue', 'MOST POPULAR': 'MÁS ELEGIDO', '02 / READY TO GROW': '02 / PARA CRECER', 'GROWTH': 'CRECIMIENTO',
  'More tools to attract customers and strengthen your digital presence.': 'Más herramientas para captar clientes y fortalecer tu presencia digital.', 'Investment': 'Inversión', 'Custom scope and needs': 'según alcance y necesidades',
  'Complete identity and brand guide': 'Identidad completa y manual de marca', 'Corporate website with up to 5 sections': 'Sitio corporativo de hasta 5 secciones',
  'Integrated contact form': 'Formulario de contacto integrado', '12 designed posts with copywriting': '12 publicaciones con copywriting', 'On-page SEO and Google Business Profile': 'SEO on-page y Google Business Profile',
  'Estimated delivery: 10–14 business days': 'Entrega estimada: 10–14 días hábiles', 'Choose Growth': 'Elegir Crecimiento', '03 / COMPLETE BRAND': '03 / MARCA TOTAL',
  'DIGITAL EMPIRE': 'IMPERIO DIGITAL', 'A connected brand, content and sales ecosystem.': 'Un ecosistema completo para conectar marca, contenido y ventas.', 'Custom proposal': 'Propuesta',
  'tailored to your project': 'personalizada para tu proyecto', 'Rebrand or master identity': 'Rebranding o identidad master', 'Custom website or online store': 'Web a medida o tienda en línea',
  '20 posts and video scripts': '20 publicaciones y guiones de video', 'Local SEO and conversion strategy': 'SEO local y estrategia de conversión', 'Defined scope, integrations and support': 'Alcance, integraciones y soporte definidos',
  'Estimated delivery: 15–21 business days': 'Entrega estimada: 15–21 días hábiles', 'Request a proposal': 'Solicitar propuesta',
  'What does the investment include?': '¿Qué cubre la inversión?', 'Strategic direction, custom design, production of the listed deliverables, agreed revisions and final files. Domain, hosting, ad spend and third-party services are quoted separately. The final price is confirmed in writing before work begins.': 'Dirección estratégica, diseño a medida, producción de los entregables listados, ajustes acordados y entrega de archivos finales. Dominio, hosting, pauta y servicios de terceros se cotizan por separado. El precio final se confirma por escrito antes de iniciar.',
  'Tell us about your project': 'Cuéntanos tu proyecto', 'FREQUENTLY ASKED QUESTIONS': 'PREGUNTAS FRECUENTES', 'Before you': 'Antes de', 'get started.': 'empezar.',
  'We want you to feel clear about every step from the first conversation.': 'Queremos que tengas claridad desde el primer contacto.', 'How long does a website project take?': '¿Cuánto tarda un proyecto web?',
  'Between one and three weeks, depending on the package, scope and review times. We set the schedule in your proposal.': 'Entre una y tres semanas según el paquete, el alcance y el tiempo de respuesta para revisar avances. La fecha se define en la propuesta.',
  'Do I receive the files and account access?': '¿Recibo los archivos y accesos?', 'Yes. At the end, we deliver the final files and agreed access details so you can use your materials and manage your website.': 'Sí. Al terminar, entregamos los archivos finales y los accesos acordados para que puedas usar tus materiales y administrar tu sitio.',
  'Are domain and hosting included?': '¿Dominio y hosting están incluidos?', 'They are quoted separately. We can help you choose an option and register it in your business’s name.': 'Se cotizan por separado. Te asesoramos para que queden registrados a nombre de tu negocio y elegimos la opción adecuada al sitio.',
  'Can we customize a package?': '¿Podemos personalizar un paquete?', 'Yes. Tell us your goal and we’ll prepare a tailored scope with deliverables, timeline and investment in writing.': 'Sí. Cuéntanos tu objetivo y preparamos un alcance a la medida, con entregables, tiempos e inversión por escrito.',
  'How is the final price confirmed?': '¿Cómo se confirma el precio final?', 'First, we learn about your project. Then you receive a proposal with scope, schedule, investment and terms before work begins.': 'Primero conocemos tu proyecto. Después recibes una propuesta con alcance, calendario, inversión y condiciones antes de autorizar el inicio.',
  'YOUR NEXT STEP STARTS HERE': 'EL SIGUIENTE PASO EMPIEZA AQUÍ', 'Ready to move': '¿Listo para impulsar', 'your brand forward?': 'tu marca?',
  'Tell us what you are building. We’ll help you find the right starting point and define a clear proposal.': 'Cuéntanos qué estás construyendo. Te ayudamos a encontrar el mejor punto de partida y a definir una propuesta clara.',
  'No commitment.': 'Sin compromiso.', 'Clarity from the first conversation.': 'Con claridad desde la primera conversación.', 'LET’S TALK ABOUT YOUR PROJECT': 'HABLEMOS DE TU PROYECTO',
  'Your name': 'Tu nombre', 'What should we call you?': '¿Cómo te llamas?', 'Business or brand': 'Negocio o marca', 'Your business name': 'Nombre de tu negocio',
  'What do you need?': '¿Qué necesitas?', 'Select a service': 'Selecciona un servicio', 'Branding & identity': 'Branding e identidad', 'Web design & development': 'Diseño y desarrollo web',
  'Marketing & social media': 'Marketing y redes sociales', 'Local SEO & visibility': 'SEO y posicionamiento local', 'Launch package': 'Paquete Despegue', 'Growth package': 'Paquete Crecimiento',
  'Digital Empire package': 'Paquete Imperio Digital', 'A custom proposal': 'Una propuesta a medida', 'WhatsApp or email': 'WhatsApp o correo',
  'Your preferred contact': 'Tu forma preferida de contacto', 'Prepare my request': 'Preparar mi solicitud',
  'Continuing will open WhatsApp with your message ready to review and send. It will not be sent without your approval.': 'Al continuar, se abrirá WhatsApp con tu mensaje listo para revisar y enviar. No se enviará sin tu autorización.',
  'Open WhatsApp to send': 'Abrir WhatsApp y enviar', 'Copy message': 'Copiar mensaje', 'Message copied.': 'Mensaje copiado.',
  'We’ll be in touch on WhatsApp.': 'Continúa en WhatsApp para enviarnos tu mensaje.', 'Back to top': 'VOLVER ARRIBA',
  'We help your brand move forward.': 'Impulsamos tu marca al siguiente nivel.', 'IDENTITY · DESIGN · GROWTH': 'IDENTIDAD · DISEÑO · CRECIMIENTO',
  'All rights reserved.': 'Todos los derechos reservados.', 'Write to us on WhatsApp at 629 171 1138': 'Escríbenos por WhatsApp al 629 171 1138',
  'Facebook for EmyBrand': 'Facebook de EmyBrand', 'Instagram for EmyBrand': 'Instagram de EmyBrand', 'Facebook': 'Facebook', 'Instagram': 'Instagram',
  'We help your brand move forward': 'Impulsamos tu marca', 'to the next level.': 'al siguiente nivel.', 'Custom': 'A medida', 'Proposal': 'Propuesta',
  'to look like': 'verse como', 'what it is.': 'lo que es.', 'An integrated approach': 'Enfoque integral', 'Made for you': 'Hecho a tu medida',
  'Ready for what’s next': 'Listo para avanzar', 'Marketing & social media': 'Marketing y redes', 'Launch': 'Despegue', 'Growth': 'Crecimiento',
  'Marketing and social media': 'Marketing y redes sociales',
  'Digital Empire': 'Imperio Digital', 'your': 'tu', 'brand?': 'marca?', 'Today is': 'Hoy cuenta', 'for you.': 'por ti.',
  'THAT MOVE FORWARD': 'QUE AVANZAN', 'One brand.': 'Una marca.', 'One next level.': 'Un siguiente nivel.',
  'Custom quote': 'A medida', 'based on scope and needs': 'según alcance y necesidades', 'Proposal': 'Propuesta',
  'based on your project': 'personalizada para tu proyecto', 'Explore the studio ↗': 'CONOCE EL ESTUDIO ↗',
  'Open menu': 'Abrir menú', 'Close menu': 'Cerrar menú', 'EmyBrand, home': 'EmyBrand, inicio', 'Main navigation': 'Navegación principal', 'Back to top ↑': 'VOLVER ARRIBA ↑',
  'Abstract brand graphic composition': 'Composición gráfica abstracta de marca'
};
const english = Object.fromEntries(Object.entries(spanish).map(([en, es]) => [es, en]));

let currentLanguage = localStorage.getItem('emybrand-language') || 'es';

function applyLanguage(language) {
  currentLanguage = language;
  const toEnglish = language === 'en';
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    const trimmed = textNode.nodeValue.trim().replace(/\s+/gu, ' ');
    if (!trimmed) continue;
    const translated = toEnglish ? (english[trimmed] || trimmed) : (spanish[trimmed] || trimmed);
    const leading = textNode.nodeValue.match(/^\s*/)[0];
    const trailing = textNode.nodeValue.match(/\s*$/)[0];
    textNode.nodeValue = `${leading}${translated}${trailing}`;
  }

  const placeholders = toEnglish ? {
    '#name': 'What should we call you?', '#business': 'Your business name', '#service': 'Select a service', '#contact': 'Your preferred contact'
  } : {
    '#name': '¿Cómo te llamas?', '#business': 'Nombre de tu negocio', '#contact': 'Tu forma preferida de contacto'
  };
  Object.entries(placeholders).forEach(([selector, value]) => document.querySelector(selector)?.setAttribute('placeholder', value));

  document.documentElement.lang = toEnglish ? 'en' : 'es-MX';
  document.title = toEnglish ? 'EmyBrand — We help your brand move forward' : 'EmyBrand — Impulsamos tu marca al siguiente nivel';
  document.querySelector('meta[name="description"]').content = toEnglish
    ? 'EmyBrand grows brands through strategy, visual identity, web design and local visibility. Clear packages built for your next stage.'
    : 'EmyBrand impulsa marcas con estrategia, identidad visual, desarrollo web y posicionamiento digital. Paquetes claros para hacer crecer tu negocio.';
  document.querySelector('.skip-link').textContent = toEnglish ? 'Skip to content' : 'Saltar al contenido';
  document.querySelector('.main-nav').setAttribute('aria-label', toEnglish ? 'Main navigation' : 'Navegación principal');
  document.querySelector('.hero-art').setAttribute('aria-label', toEnglish ? 'Abstract brand graphic composition' : 'Composición gráfica abstracta de marca');
  document.querySelector('.wordmark').setAttribute('aria-label', toEnglish ? 'EmyBrand, home' : 'EmyBrand, inicio');
  document.querySelector('.menu-toggle').setAttribute('aria-label', toEnglish ? 'Open menu' : 'Abrir menú');
  document.querySelector('.whatsapp-float').setAttribute('aria-label', toEnglish ? 'Write to us on WhatsApp at 629 171 1138' : 'Escríbenos por WhatsApp al 629 171 1138');
  document.querySelector('.intro-grid h2').innerHTML = toEnglish
    ? 'Your business deserves<br>to look like <em>what it is.</em>'
    : 'Tu negocio merece<br>verse como <em>lo que es.</em>';
  document.querySelector('.contact-copy h2').innerHTML = toEnglish
    ? 'Ready to move<br>your brand <em>forward?</em>'
    : '¿Listo para impulsar<br>tu <em>marca?</em>';
  document.querySelector('.tile-two b').innerHTML = toEnglish ? 'Today is<br>yours.' : 'Hoy cuenta<br>por ti.';
  document.querySelector('.art-bottom b').innerHTML = toEnglish ? 'One brand.<br>One next level.' : 'Una marca.<br>Un siguiente nivel.';
  document.querySelector('.art-back span:nth-child(2)').textContent = toEnglish ? 'THAT MOVE FORWARD' : 'QUE AVANZAN';
  document.querySelector('.footer-bottom span:first-child').innerHTML = toEnglish
    ? `© <span id="year">${new Date().getFullYear()}</span> EmyBrand. All rights reserved.`
    : `© <span id="year">${new Date().getFullYear()}</span> EmyBrand. Todos los derechos reservados.`;
  document.querySelector('.whatsapp-float').href = toEnglish
    ? `https://wa.me/526291711138?text=${encodeURIComponent('Hello, EmyBrand. I would like information about your services.')}`
    : 'https://wa.me/526291711138?text=Hola%2C%20EmyBrand.%20Quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.';
  document.querySelector('.price-card:first-of-type .price-amount small').textContent = toEnglish ? 'Quote' : 'Cotización';
  document.querySelector('.price-card:first-of-type .price-amount strong').textContent = toEnglish ? 'Custom' : 'A medida';
  document.querySelector('.price-card:first-of-type .price-amount small:last-child').textContent = toEnglish ? 'based on scope and needs' : 'según alcance y necesidades';
  document.querySelector('.price-featured .price-amount strong').textContent = toEnglish ? 'Custom quote' : 'A medida';
  document.querySelector('.price-featured .price-amount small:last-child').textContent = toEnglish ? 'based on scope and needs' : 'según alcance y necesidades';
  document.querySelector('.price-card:nth-child(3) .price-amount strong').textContent = toEnglish ? 'Proposal' : 'Propuesta';
  document.querySelector('.price-card:nth-child(3) .price-amount small:last-child').textContent = toEnglish ? 'tailored to your project' : 'personalizada para tu proyecto';
  const privacyCopy = document.querySelector('.consent-check span');
  privacyCopy.innerHTML = toEnglish
    ? 'I accept the <a href="privacidad.html" target="_blank" rel="noopener">Privacy Notice</a> and authorize the use of my data to respond to my request.'
    : 'Acepto el <a href="privacidad.html" target="_blank" rel="noopener">Aviso de Privacidad</a> y autorizo el uso de mis datos para responder a mi solicitud.';
  document.querySelectorAll('.price-card [data-package]').forEach((link) => {
    const labels = toEnglish ? {Despegue:'Request a quote', Crecimiento:'Request a quote', 'Imperio Digital':'Request a quote'} : {Despegue:'Cotizar Despegue', Crecimiento:'Solicitar cotización', 'Imperio Digital':'Solicitar cotización'};
    link.childNodes[0].textContent = labels[link.dataset.package] + ' ';
  });
  document.querySelectorAll('.service-card a').forEach((link, index) => {
    const es = ['Consultar branding e identidad', 'Consultar diseño y desarrollo web', 'Consultar marketing y redes', 'Consultar SEO y posicionamiento local'];
    const en = ['Ask about brand identity', 'Ask about web design and development', 'Ask about marketing and social media', 'Ask about local SEO'];
    link.setAttribute('aria-label', toEnglish ? en[index] : es[index]);
  });
  document.querySelector('.social-links').setAttribute('aria-label', toEnglish ? 'Social media' : 'Redes sociales');
  document.querySelectorAll('.social-links a').forEach((link) => link.setAttribute('aria-label', toEnglish ? `${link.textContent.includes('Facebook') ? 'Facebook' : 'Instagram'} for EmyBrand` : `${link.textContent.includes('Facebook') ? 'Facebook' : 'Instagram'} de EmyBrand`));
  languageButton.innerHTML = toEnglish ? 'ES <span>/ EN</span>' : 'EN <span>/ ES</span>';
  languageButton.setAttribute('aria-label', toEnglish ? 'Switch to Spanish' : 'Switch to English');
  languageButton.setAttribute('lang', toEnglish ? 'es' : 'en');
  localStorage.setItem('emybrand-language', language);
}

languageButton.addEventListener('click', () => applyLanguage(currentLanguage === 'es' ? 'en' : 'es'));
applyLanguage(currentLanguage);

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? (currentLanguage === 'en' ? 'Open menu' : 'Abrir menú') : (currentLanguage === 'en' ? 'Close menu' : 'Cerrar menú'));
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', currentLanguage === 'en' ? 'Open menu' : 'Abrir menú');
  nav.classList.remove('open');
}));

document.querySelectorAll('[data-package]').forEach((link) => link.addEventListener('click', () => {
  const packageNames = currentLanguage === 'en'
    ? { Despegue: 'Launch package', Crecimiento: 'Growth package', 'Imperio Digital': 'Digital Empire package' }
    : { Despegue: 'Paquete Despegue', Crecimiento: 'Paquete Crecimiento', 'Imperio Digital': 'Paquete Imperio Digital' };
  document.querySelector('#service').value = packageNames[link.dataset.package];
}));

const form = document.querySelector('#contact-form');
const result = document.querySelector('#form-result');
const message = document.querySelector('#form-message');
const copyButton = document.querySelector('#copy-message');
const copyStatus = document.querySelector('#copy-status');
const whatsappSubmit = document.querySelector('#whatsapp-submit');
const WHATSAPP_NUMBER = '526291711138';
let preparedMessage = '';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const english = currentLanguage === 'en';
  preparedMessage = [
    english ? 'Hello, EmyBrand. I’d like to request a consultation for my brand.' : 'Hola, EmyBrand. Quiero solicitar un diagnóstico para mi marca.',
    '',
    `${english ? 'Name' : 'Nombre'}: ${fields.get('name').trim()}`,
    `${english ? 'Business or brand' : 'Negocio o marca'}: ${fields.get('business').trim()}`,
    `${english ? 'Service of interest' : 'Servicio de interés'}: ${fields.get('service')}`,
    `${english ? 'My WhatsApp or email' : 'Mi WhatsApp o correo'}: ${fields.get('contact').trim()}`,
  ].join('\n');
  message.textContent = preparedMessage;
  whatsappSubmit.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(preparedMessage)}`;
  result.hidden = false;
  copyStatus.textContent = '';
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(preparedMessage);
    copyStatus.textContent = currentLanguage === 'en' ? 'Message copied.' : 'Mensaje copiado.';
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
    copyStatus.textContent = currentLanguage === 'en' ? 'Message copied.' : 'Mensaje copiado.';
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
