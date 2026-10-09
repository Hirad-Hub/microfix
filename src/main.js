import './styles.css';

const links = {
  business: 'https://microfix.nl/zakelijke-klanten/', reseller: 'https://microfix.nl/reseller/',
  consumer: 'https://microfix.nl/particuliere-klanten/', who: 'https://microfix.nl/onderwijs/',
  solutions: 'https://microfix.nl/reparatie/', about: 'https://microfix.nl/over-microfix/',
  sustainability: 'https://microfix.nl/duurzaamheid/', contact: 'https://microfix.nl/contact/',
  premium: 'https://microfix.nl/premiumcare-garantie/', greenfix: 'https://greenfix.nl/',
  faq: 'https://microfix.nl/veelgestelde-vragen/', status: 'https://portal.microfix.nl/microfix/home',
  assistant: 'https://microfix.nl/', apple: 'https://microfix.nl/apple-service-provider/', rates: 'https://microfix.nl/tarieven/',
  privacy: 'https://microfix.nl/privacyverklaring/', terms: 'https://microfix.nl/algemene-voorwaarden/',
};
const repairUrl = 'https://portal.microfix.nl/microfix/home';
const icon = (name, size = 20) => {
  const paths = {
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>', right: '<path d="M5 12h14m-7-7 7 7-7 7"/>', down: '<path d="m6 9 6 6 6-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>', close: '<path d="m18 6-12 12M6 6l12 12"/>', monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>', package: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 8 9 5 9-5m-18 0v9l9 5 9-5V8m-9 5v9"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>', wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.6 6.6L3 18l3 3 5.1-5.1a5 5 0 0 0 6.6-6.6L14 12l-2-2 2.7-3.7Z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>', leaf: '<path d="M11 20A7 7 0 0 1 4 13C4 5 20 4 20 4s-1 16-9 16Z"/><path d="M8 16c2-3 5-5 9-7"/>',
    badge: '<path d="M12 3 9.5 5.5 6 5l-.5 3.5L3 11l2.5 2.5L5 17l3.5.5L11 20l2.5-2.5L17 18l.5-3.5L20 12l-2.5-2.5L18 6l-3.5-.5L12 3Z"/><path d="m9 12 2 2 4-4"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};
const brand = (light = false) => `<a class="brand${light ? ' brand-light' : ''}" href="#top" aria-label="MicroFix — home"><span class="brand-symbol" aria-hidden="true"><span></span><span></span><span></span></span><span class="brand-name">micro<span>fix</span><i>.</i></span></a>`;
const button = (href, label, variant = 'primary', arrow = true) => `<a class="button button-${variant}" href="${href}"><span>${label}</span>${arrow ? icon('arrow',17) : ''}</a>`;
const menus = {
  who: [['Onderwijs', links.who], ['Zakelijke klanten', links.business], ['Reseller', links.reseller], ['Particuliere klanten', links.consumer]],
  solutions: [['Vochtschade', links.solutions], ['Garantie', links.solutions], ['GreenFix', links.greenfix], ['PremiumCare garantie', links.premium], ['Reparatie', links.solutions], ['Apple Service Provider', links.apple]],
  about: [['Alles over MicroFix', links.about], ['Digidromen', links.about], ['Kennisartikelen en blogs', links.about], ['Veelgestelde vragen', links.faq], ['Werken bij MicroFix', 'https://microfix.nl/werken-bij-microfix/']],
};
const audiences = [
  ['monitor','Zakelijke klanten','IT-reparaties, garantieafhandeling en lifecycle services voor organisaties die operationeel willen blijven.',links.business,'01'],
  ['package','Resellers','Verleng garanties, bied reparaties aan en werk samen met een betrouwbare servicepartner.',links.reseller,'02'],
  ['phone','Particuliere klanten','Snelle reparaties voor laptops, smartphones en tablets. Binnen én buiten garantie.',links.consumer,'03'],
];
const reasons = [
  ['badge','Apple Authorized<br>Service Provider','Officiële Apple-reparaties met originele onderdelen, behoud van fabrieksgarantie en gecertificeerde expertise.'],
  ['monitor','Alle merken,<br>alle apparaten','Van laptops en desktops tot smartphones, tablets en scanners. Wij ondersteunen vrijwel alle bekende merken.'],
  ['shield','Binnen én<br>buiten garantie','Wij verzorgen reparaties binnen fabrieksgarantie én daarbuiten. Eén aanspreekpunt voor service, garantie en herstel.'],
  ['clock','24/7 ondersteuning Benelux','Voor organisaties en partners waarbij continuïteit essentieel is. Snelle ondersteuning wanneer stilstand geen optie is.'],
];
const solutions = [
  ['shield','Reparatie binnen garantie','Officiële reparaties volgens de richtlijnen van de fabrikant, met behoud van garantie.',links.solutions,'Binnen fabrieksgarantie'],
  ['wrench','Reparatie buiten garantie','Snelle diagnose, transparante offertes en betaalbare reparaties voor vrijwel alle merken.',links.solutions,'Alle merken'],
  ['badge','PremiumCare','Verlengde garantie en extra zekerheid voor zakelijke IT-omgevingen. Inclusief aanvullende dekking en snelle service.',links.premium,'Zakelijke zekerheid'],
  ['leaf','GreenFix Refurbish','Verleng de levensduur van hardware met professionele refurbish- en hersteloplossingen voor organisaties.',links.greenfix,'Circulaire IT'],
];
const stats = ['30+ jaar ervaring','Specialist in IT-reparaties','100.000+ reparaties per jaar','Landelijke dekking en eigen logistiek'];
const brands = [['ASUS','b0'],['acer','b1'],['Apple','b2'],['TSC','b3'],['ZEBRA','b4'],['SAMSUNG','b5'],['Lexmark','b6'],['Lenovo','b7'],['hp','b8'],['Dell','b9'],['Printronix','b10']];

const menuButton = (key, label) => `<div class="nav-menu"><button type="button" aria-expanded="false" data-menu="${key}">${label}${icon('down',14)}</button><div class="nav-dropdown">${menus[key].map(([t,u])=>`<a href="${u}">${t}${icon('arrow',13)}</a>`).join('')}</div></div>`;

document.querySelector('#root').innerHTML = `
<header class="header"><div class="header-inner">${brand()}<button class="menu-toggle" aria-label="Menu openen" aria-expanded="false">${icon('menu',22)}</button><nav class="nav" aria-label="Hoofdnavigatie">${menuButton('who','Voor wie?')}${menuButton('solutions','Oplossingen')}${menuButton('about','Over ons')}<a href="${links.sustainability}">Duurzaamheid</a>${button(repairUrl,'Reparatie aanmelden','primary',false).replace('</span>','</span>'+icon('right',16))}</nav></div></header>
<main><section class="hero" id="top"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-dot"></span> Al meer dan 30 jaar vertrouwd</div><h1>Reparaties waar je <em>op kunt vertrouwen.</em></h1><h2>Snel geholpen. Professioneel. Zonder gedoe.</h2><p>Professionele IT-reparaties binnen en buiten garantie. Voor organisaties, resellers en consumenten. Al meer dan 30 jaar helpen wij klanten hun hardware langer inzetbaar te houden.</p><div class="hero-actions">${button(repairUrl,'Reparatie aanmelden')}${button(links.business,'Zakelijke oplossingen','outline')}</div><div class="hero-proof"><div class="proof-avatars" aria-hidden="true"><span>M</span><span>F</span><span>✓</span></div><div><strong>Persoonlijke service, bewezen expertise</strong><span>Een partner voor elke reparatie</span></div></div></div><div class="hero-visual"><div class="visual-image" role="img" aria-label="Een technicus repareert een MacBook"></div><div class="image-wash"></div><div class="visual-topline"><span class="live-mark"></span> MICROFIX SERVICE CENTER <span>• LEIDEN</span></div><div class="visual-caption"><span class="caption-icon">${icon('wrench',17)}</span><div><strong>Met zorg gerepareerd.</strong><span>Gemaakt om langer mee te gaan.</span></div>${icon('arrow',18)}</div><div class="cert-stamp"><span class="stamp-icon">${icon('shield',20)}</span><span>ISO<br><b>GECERTIFICEERD</b></span></div><div class="visual-index">BEELD: MICROFIX</div></div><div class="hero-bottom"><span>Reparatie die verder gaat</span><a href="#voor-wie">Ontdek MicroFix ${icon('down',14)}</a></div></section>
<section class="section audience-section" id="voor-wie"><div class="section-head"><div><div class="eyebrow">VOOR WIE WIJ WERKEN</div><h2>Goede service.<br><em>Voor iedereen.</em></h2></div><p>Of je nu één apparaat gebruikt of een complete organisatie draaiende houdt: wij zorgen dat je verder kunt.</p></div><div class="audience-grid">${audiences.map(([ic,title,text,href,num])=>`<a class="audience-card" href="${href}"><div class="card-top"><span class="card-icon">${icon(ic)}</span><span class="card-number">${num}</span></div><div class="card-content"><h3>${title}</h3><p>${text}</p><span class="text-link">Ontdek meer ${icon('right',16)}</span></div><span class="card-corner">${icon('arrow',18)}</span></a>`).join('')}</div></section>
<section class="section reasons-section"><div class="section-head section-head-tight"><div><div class="eyebrow">WAAROM MICROFIX</div><h2>Service waar je<br><em>op kunt bouwen.</em></h2></div><p>Ervaring en expertise die je apparaten én je organisatie vooruithelpen.</p></div><div class="reason-grid">${reasons.map(([ic,title,text])=>`<article class="reason"><span class="reason-icon">${icon(ic)}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div><div class="reason-foot"><span><span class="green-dot"></span> Eén aanspreekpunt, van diagnose tot herstel.</span><a href="${links.about}">Alles over MicroFix ${icon('right',15)}</a></div></section>
<section class="section solutions-section" id="oplossingen"><div class="section-head"><div><div class="eyebrow">ONZE OPLOSSINGEN</div><h2>Altijd de juiste oplossing<br><em>voor jouw situatie.</em></h2></div><p>Van een reparatie met behoud van garantie tot een compleet circulaire serviceoplossing.</p></div><div class="solution-grid">${solutions.map(([ic,title,text,href,tag],i)=>`<a href="${href}" class="solution-card"><div class="solution-meta"><span>${tag}</span><span class="solution-index">0${i+1}</span></div><span class="solution-icon">${icon(ic)}</span><h3>${title}</h3><p>${text}</p><span class="solution-link">Meer over deze oplossing ${icon('arrow',16)}</span></a>`).join('')}</div><div class="solutions-cta"><span>Een reparatie aanmelden?</span>${button(repairUrl,'Start je reparatie')}</div></section>
<section class="about-section section" id="over-ons"><div class="about-visual"><div class="about-photo" role="img" aria-label="Een MicroFix technicus werkt aan een laptop"></div><div class="about-photo-shade"></div><div class="about-photo-label"><span class="label-dot"></span> PRECISIE IN ELKE REPARATIE</div><div class="about-note"><span class="note-icon">${icon('leaf',19)}</span><div><strong>Repareren is vooruitkijken.</strong><span>Langer gebruik. Minder e-waste.</span></div></div><div class="about-years"><strong>30<span>+</span></strong><span>jaar<br>expertise</span></div></div><div class="about-copy"><div class="eyebrow">AL MEER DAN 30 JAAR DÉ REPARATIESPECIALIST</div><h2>Goed voor je apparaat.<br><em>Goed voor morgen.</em></h2><p>Wij geloven dat repareren vaak slimmer is dan vervangen. Daarom helpen wij organisaties, resellers en consumenten met professionele reparaties, garantieoplossingen en circulaire IT-diensten.</p><ul class="stats-list">${stats.map(t=>`<li><span>${icon('check',15)}</span>${t}</li>`).join('')}</ul>${button(links.about,'Over ons','outline',false)}</div></section>
<section class="brands-section"><div class="brands-heading"><span>MERKEN DIE WIJ REPAREREN</span><span class="brands-line"></span><p>Wij repareren álle merken (binnen en buiten garantie), onder andere:</p></div><div class="brand-list" aria-label="Merken die MicroFix repareert">${brands.map(([b,c])=>`<span class="brand-word brand-word-${c}">${b}${b==='Apple'?'<small>Authorized Service Provider</small>':''}</span>`).join('')}</div></section>
<section class="trust-section"><div class="trust-top"><div class="eyebrow">VERTROUWD IN HEEL NEDERLAND</div><h2>In goede handen.<br><em>Dat voel je.</em></h2><p>Al meer dan 100.000 reparaties uitgevoerd voor organisaties, resellers en consumenten</p></div><div class="trust-score"><span class="stars" aria-label="Vijf sterren">★★★★★</span><strong>9,3 <i>/ 10</i></strong><span>klantwaardering</span></div><div class="trust-quote"><span class="quote-mark">“</span><blockquote>MicroFix is voor ons een betrouwbare partner. Snelle service, duidelijke communicatie en altijd een passende oplossing.</blockquote><div class="quote-by"><span class="quote-avatar">IT</span><span><strong>IT manager</strong><small>zakelijke klant</small></span><span class="verified">${icon('check',13)} Geverifieerde ervaring</span></div></div><div class="trust-decoration" aria-hidden="true">M<span>F</span></div></section>
<section class="final-cta"><div class="cta-orbit orbit-one"></div><div class="cta-orbit orbit-two"></div><div class="cta-content"><div class="eyebrow"><span class="eyebrow-dot"></span> SAMEN KRIJG JE MEER VOOR ELKAAR</div><h2>Klaar om je hardware<br>langer inzetbaar te houden?</h2><p>Of je nu één apparaat beheert of duizenden assets binnen je organisatie. Onze specialisten helpen je met professionele reparaties, lifecycle management en duurzame IT-oplossingen.</p><div class="cta-actions">${button(repairUrl,'Reparatie aanmelden','white')}${button(links.contact,'Contact opnemen','dark-outline')}</div></div><div class="cta-side"><span class="cta-side-icon">${icon('wrench',22)}</span><strong>Snel geholpen.<br>Goed geregeld.</strong><span>Dat is MicroFix.</span></div></section></main>
<footer class="footer"><div class="footer-main"><div class="footer-brand-col">${brand(true)}<p>Samen tegen e-waste</p><p class="footer-address">Willem Barentszstraat 23<br>2315 TZ Leiden</p><div class="iso-badge">${icon('shield',19)}<span>ISO 9001 · ISO 14001<br>ISO/IEC 27001 · EcoVadis Gold</span></div><div class="apple-provider"><span class="apple-glyph">●</span> Apple Authorized<br>Service Provider</div></div><div class="footer-links"><h3>Klantenservice</h3><a href="${repairUrl}">Reparatie aanmelden ${icon('arrow',14)}</a><a href="${links.status}">Reparatie status ${icon('arrow',14)}</a><a href="${links.assistant}">AI Service Assistent (Will FixIT) ${icon('arrow',14)}</a><a href="${links.faq}">Veelgestelde vragen ${icon('arrow',14)}</a><a href="${links.apple}">Alles over Apple reparaties ${icon('arrow',14)}</a><a href="${links.rates}">Tarieven ${icon('arrow',14)}</a></div><div class="footer-links"><h3>Ga direct naar</h3><a href="${links.business}">Zakelijke klanten ${icon('arrow',14)}</a><a href="${links.reseller}">Reseller ${icon('arrow',14)}</a><a href="${links.consumer}">Particuliere klanten ${icon('arrow',14)}</a><a href="${links.sustainability}">Duurzaam MicroFix ${icon('arrow',14)}</a><a href="https://microfix.nl/werken-bij-microfix/">Werken bij MicroFix ${icon('arrow',14)}</a><a href="${links.contact}">Contact ${icon('arrow',14)}</a></div><div class="footer-help"><div><span class="help-icon">${icon('package',18)}</span><h3>Lopende reparatie?</h3><a href="${repairUrl}">Naar ons reparatieportaal ${icon('right',14)}</a></div><div><span class="help-icon">${icon('monitor',18)}</span><h3>Vragen over diensten?</h3><p>Stel je vraag aan onze <a href="${links.assistant}">AI Service Assistent</a>. Of neem contact op via:</p><a href="mailto:info@microfix.nl">info@microfix.nl</a><a href="tel:+31715682555">071 – 568 2555</a></div><div><span class="help-icon">${icon('badge',18)}</span><h3>Vraag over facturen?</h3><a href="mailto:finance@microfix.nl">finance@microfix.nl</a><a href="https://wa.me/31715682555">WhatsApp sturen ${icon('arrow',14)}</a></div></div></div><div class="footer-bottom"><span>© MicroFix</span><span><a href="${links.privacy}">Privacyverklaring</a><i></i> <a href="${links.terms}">Algemene voorwaarden</a></span><a href="https://projectie.com/">Gerealiseerd door Projectie ${icon('arrow',13)}</a></div></footer><a class="whatsapp-shortcut" href="https://wa.me/31715682555" aria-label="WhatsApp sturen" title="WhatsApp sturen">${icon('phone',20)}</a>`;

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  button.innerHTML = icon(open ? 'close' : 'menu', 22);
  document.querySelector('.nav').classList.toggle('nav-open', open);
});
document.querySelectorAll('.nav-menu>button').forEach(button => button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  document.querySelectorAll('.nav-menu>button').forEach(item => item.setAttribute('aria-expanded','false'));
  button.setAttribute('aria-expanded',String(open));
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-menu')) document.querySelectorAll('.nav-menu>button').forEach(item => item.setAttribute('aria-expanded','false'));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.nav-menu>button').forEach(item => item.setAttribute('aria-expanded','false'));
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    document.querySelector('.menu-toggle').setAttribute('aria-label','Menu openen');
    document.querySelector('.menu-toggle').innerHTML = icon('menu',22);
    document.querySelector('.nav').classList.remove('nav-open');
  }
});
