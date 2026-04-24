const PRODUCTS = [
  { id: 'frieren-luna', name: 'Frieren · Luna', category: 'frieren', priceUSD: 42.99, img: './Img/Frieren.webp', desc: 'Figura · Base incluida', rating: 4.9, stock: 6, tag: 'Drop' },
  { id: 'frieren-campo', name: 'Frieren · Campo', category: 'frieren', priceUSD: 39.99, img: './Img/FrierenCampo.jpg', desc: 'Figura 1/7 · Base incluida', rating: 4.8, stock: 8, tag: 'Nuevo' },
  { id: 'frieren-flower', name: 'Frieren · Flower Dance', category: 'frieren', priceUSD: 44.5, img: './Img/FrierenFlowerDance.webp', desc: 'Figura dinámica · Efecto azul', rating: 4.7, stock: 5, tag: 'Top' },
  { id: 'ubel-dayoff', name: 'Ubel · Day off', category: 'frieren', priceUSD: 35.0, img: './Img/Ubelcasual.webp', desc: 'Figura casual · 40 cm', rating: 4.5, stock: 4, tag: 'Preventa' },
  { id: 'miku-chibi', name: 'Miku · Chibbi', category: 'miku', priceUSD: 29.99, img: './Img/MikuChibbi.webp', desc: 'Mini figura · Edición pastel', rating: 4.7, stock: 12, tag: 'Kawaii' },
  { id: 'miku-neko', name: 'Miku · Neko escritorio', category: 'miku', priceUSD: 31.5, img: './Img/MikuEscritorio.webp', desc: 'Figura · Base incluida', rating: 4.9, stock: 9, tag: 'Top' },
  { id: 'miku-noodle', name: 'Miku · Noodle Stopper', category: 'miku', priceUSD: 33.25, img: './Img/MikuNoodleStopper.webp', desc: 'Figura para repisa · 23 cm', rating: 4.8, stock: 7, tag: 'Nuevo' },
  { id: 'miku-rainy', name: 'Miku · Rainy Dance', category: 'miku', priceUSD: 37.9, img: './Img/MikuRainiDance.webp', desc: 'Figura azul · Paraguas', rating: 4.9, stock: 6, tag: 'Brilla' },
  { id: 'maomao-casual', name: 'Maomao · Casual', category: 'maomao', priceUSD: 34.99, img: './Img/MaomaoCasual.jpg', desc: 'Figura · Canasta incluida', rating: 4.8, stock: 6, tag: 'Nuevo' },
  { id: 'maomao-chibi', name: 'Maomao · Chibi', category: 'maomao', priceUSD: 18.9, img: './Img/MaomaoChibbi.webp', desc: 'Figura chibi · 25 cm', rating: 4.7, stock: 11, tag: '2x1' },
  { id: 'maomao-vestido', name: 'Maomao · Vestido', category: 'maomao', priceUSD: 41.0, img: './Img/maomaoVestido.jpg', desc: 'Figura elegante · Base incluida', rating: 4.8, stock: 5, tag: 'Premium' },
  { id: 'jinshi', name: 'Jinshi · Jardín', category: 'maomao', priceUSD: 43.5, img: './Img/Shinnji.jpg', desc: 'Figura · Kimono azul', rating: 4.7, stock: 4, tag: 'Premium' },
  { id: 'gojo-purple', name: 'Gojo · Técnica púrpura', category: 'otras', priceUSD: 49.99, img: './Img/GojoPurpura.webp', desc: 'Figura de acción · Efecto incluido', rating: 4.9, stock: 3, tag: 'Épico' },
  { id: 'hagakure-school', name: 'Hagakure · Clase 1A', category: 'otras', priceUSD: 22.0, img: './Img/HagakureEscolar.jpg', desc: 'Figura escolar · 30 cm', rating: 4.4, stock: 10, tag: 'Minimal' },
  { id: 'heroteorita', name: 'Teorita · Heroína', category: 'otras', priceUSD: 36.75, img: './Img/Heroteorita.webp', desc: 'Figura de fantasía · Capa', rating: 4.6, stock: 6, tag: 'Nuevo' },
  { id: 'rei-plush', name: 'Rei · Peluche playa', category: 'otras', priceUSD: 24.9, img: './Img/Reiluche.jpg', desc: 'Peluche suave · Edición playa', rating: 4.6, stock: 14, tag: 'Cute' },
  { id: 'shinobu', name: 'Shinobu Kocho · Aleteo de mariposa', category: 'otras', priceUSD: 38.5, img: './Img/Shinobu.webp', desc: 'Figura · 45 cm · Base incluida', rating: 4.8, stock: 5, tag: 'Brilla' }
];

const state = {
  currency: localStorage.getItem('moe_currency') || 'USD',
  lang: localStorage.getItem('moe_lang') || 'es',
  theme: localStorage.getItem('moe_theme') || 'light',
  usdCopRate: Number(localStorage.getItem('moe_usd_cop_rate')) || 4000,
  cart: JSON.parse(localStorage.getItem('moe_cart') || '{}'),
  activeFilter: 'all'
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="520"><rect width="100%" height="100%" fill="#f7e8ff"/><text x="50%" y="52%" text-anchor="middle" font-family="Arial" font-size="28" fill="#555">Imagen no incluida</text></svg>`);

function saveCart() { localStorage.setItem('moe_cart', JSON.stringify(state.cart)); }
function saveCurrency() { localStorage.setItem('moe_currency', state.currency); localStorage.setItem('moe_usd_cop_rate', String(state.usdCopRate)); }
function normalize(str) { return (str ?? '').toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ''); }
function getProduct(id) { return PRODUCTS.find((p) => p.id === id); }

function formatMoney(usd) {
  if (state.currency === 'COP') {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(usd * state.usdCopRate);
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(usd);
}

async function loadRate() {
  const info = $('#rateInfo');
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!res.ok) throw new Error('No response');
    const data = await res.json();
    if (!data?.rates?.COP) throw new Error('COP missing');
    state.usdCopRate = Number(data.rates.COP);
    saveCurrency();
    if (info) info.textContent = `Tasa actual: 1 USD ≈ ${new Intl.NumberFormat('es-CO').format(state.usdCopRate)} COP.`;
  } catch (error) {
    if (info) info.textContent = `No se pudo conectar a la API. Usando tasa guardada: 1 USD ≈ ${new Intl.NumberFormat('es-CO').format(state.usdCopRate)} COP.`;
  }
  renderProducts();
  renderCart();
}

function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) return;
  const query = normalize($('#searchInput')?.value || '');
  const filtered = PRODUCTS.filter((p) => {
    const matchFilter = state.activeFilter === 'all' || p.category === state.activeFilter;
    const matchQuery = !query || normalize(`${p.name} ${p.desc} ${p.category}`).includes(query);
    return matchFilter && matchQuery;
  });

  grid.innerHTML = filtered.map((p) => `
    <article class="producto" data-category="${p.category}" data-name="${p.name}">
      <div class="producto__img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='${fallbackImg}'">
        <span class="badge">${p.tag}</span>
      </div>
      <div class="producto__body">
        <h3>${p.name}</h3>
        <p class="muted">${p.desc}</p>
        <div class="producto__row">
          <span class="price">${formatMoney(p.priceUSD)}</span>
          <span class="rating" aria-label="${p.rating} de 5">★★★★★ <span class="muted">${p.rating}</span></span>
        </div>
        <p class="muted small">Stock: ${p.stock}</p>
        <button class="btn btn--small" data-add-product="${p.id}">Agregar</button>
      </div>
    </article>
  `).join('');
  const empty = $('#emptyState');
  if (empty) empty.hidden = filtered.length !== 0;
}

function cartEntries() {
  return Object.entries(state.cart)
    .map(([id, item]) => ({ ...item, product: getProduct(id) }))
    .filter((item) => item.product);
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;
  const current = state.cart[id] || { qty: 0, selected: true };
  if (current.qty >= product.stock) return showToast(`Solo hay ${product.stock} unidades de ${product.name}.`);
  state.cart[id] = { qty: current.qty + 1, selected: true };
  saveCart();
  renderCart();
  showToast(`Agregado: ${product.name}`);
}

function removeFromCart(id) {
  delete state.cart[id];
  saveCart();
  renderCart();
}

function setQty(id, qty) {
  const product = getProduct(id);
  if (!product) return;
  const safeQty = Math.max(1, Math.min(product.stock, Number(qty) || 1));
  state.cart[id].qty = safeQty;
  saveCart();
  renderCart();
}

function setSelected(id, selected) {
  if (!state.cart[id]) return;
  state.cart[id].selected = selected;
  saveCart();
  renderCart();
}

function totals() {
  const selected = cartEntries().filter((item) => item.selected);
  const subtotal = selected.reduce((acc, item) => acc + item.product.priceUSD * item.qty, 0);
  const shipping = selected.length ? 4.5 : 0;
  return { selected, subtotal, shipping, total: subtotal + shipping };
}

function renderCart() {
  const entries = cartEntries();
  const container = $('#cartItems');
  const count = entries.reduce((acc, item) => acc + item.qty, 0);
  const cartCount = $('#cartCount');
  if (cartCount) {
    cartCount.textContent = String(count);
    cartCount.setAttribute('aria-label', `${count} artículos`);
  }
  if (!container) return;

  if (!entries.length) {
    container.innerHTML = `<div class="cart-empty">Tu carrito está vacío. El estante está esperando mercancía.</div>`;
  } else {
    container.innerHTML = entries.map(({ product, qty, selected }) => `
      <article class="cart-item">
        <label class="cart-item__check">
          <input type="checkbox" data-select-cart="${product.id}" ${selected ? 'checked' : ''}>
        </label>
        <img src="${product.img}" alt="${product.name}" onerror="this.src='${fallbackImg}'">
        <div class="cart-item__info">
          <strong>${product.name}</strong>
          <span class="muted small">${formatMoney(product.priceUSD)} c/u · Stock ${product.stock}</span>
          <div class="qty">
            <button type="button" data-qty-minus="${product.id}">−</button>
            <input type="number" min="1" max="${product.stock}" value="${qty}" data-qty-input="${product.id}">
            <button type="button" data-qty-plus="${product.id}">+</button>
          </div>
        </div>
        <div class="cart-item__side">
          <strong>${formatMoney(product.priceUSD * qty)}</strong>
          <button class="remove-btn" type="button" data-remove-cart="${product.id}">Quitar</button>
        </div>
      </article>
    `).join('');
  }

  const totalData = totals();
  $('#selectedCount').textContent = String(totalData.selected.reduce((acc, item) => acc + item.qty, 0));
  $('#subtotalText').textContent = formatMoney(totalData.subtotal);
  $('#shippingText').textContent = formatMoney(totalData.shipping);
  $('#totalText').textContent = formatMoney(totalData.total);
}

function openCart() {
  const drawer = $('#cartDrawer');
  drawer?.classList.add('is-open');
  drawer?.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  const drawer = $('#cartDrawer');
  drawer?.classList.remove('is-open');
  drawer?.setAttribute('aria-hidden', 'true');
}
function showToast(message) {
  const toast = $('#toast');
  const text = $('#toastText');
  if (!toast || !text) return;
  text.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { toast.hidden = true; }, 1800);
}


function setCustomSelect(id, value, label = value) {
  const wrapper = document.querySelector(`[data-custom-select="${id}"]`);
  const input = document.getElementById(id);
  const btn = wrapper?.querySelector('.custom-select__btn');
  if (input) input.value = value;
  if (btn) btn.textContent = label;
}

function initCustomSelects() {
  document.querySelectorAll('.custom-select').forEach((wrapper) => {
    const inputId = wrapper.dataset.customSelect;
    const btn = wrapper.querySelector('.custom-select__btn');
    const options = wrapper.querySelectorAll('[data-value]');
    btn?.addEventListener('click', () => {
      const open = wrapper.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      document.querySelectorAll('.custom-select').forEach((other) => {
        if (other !== wrapper) {
          other.classList.remove('is-open');
          other.querySelector('.custom-select__btn')?.setAttribute('aria-expanded', 'false');
        }
      });
    });
    options.forEach((option) => {
      option.addEventListener('click', () => {
        const value = option.dataset.value;
        setCustomSelect(inputId, value, option.textContent.trim());
        wrapper.classList.remove('is-open');
        btn?.setAttribute('aria-expanded', 'false');
        document.getElementById(inputId)?.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.custom-select')) return;
    document.querySelectorAll('.custom-select').forEach((select) => {
      select.classList.remove('is-open');
      select.querySelector('.custom-select__btn')?.setAttribute('aria-expanded', 'false');
    });
  });
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const btn = $('#themeToggle');
  if (btn) btn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
}

function applyLanguage() {
  localStorage.setItem('moe_lang', state.lang);
  const es = state.lang === 'es';
  document.documentElement.lang = state.lang;
  setCustomSelect('languageSelect', state.lang, es ? 'ES' : 'EN');

  const text = {
    es: {
      topPill: 'Envíos a toda Colombia',
      topText: 'Catálogo completo · Carrito funcional · Precios USD/COP',
      search: 'Busca: Frieren, Miku, Maomao…',
      cart: 'Carrito',
      benefits: 'Beneficios',
      catalog: 'Catálogo',
      contact: 'Contacto',
      kicker: 'Tienda anime · Figuras · Coleccionables',
      title: 'Tu rincón otaku con carrito de verdad',
      lead: 'Agrega productos, cambia cantidades, selecciona qué pagar y mira los precios convertidos entre dólares y pesos colombianos.',
      ctaCatalog: 'Ver catálogo completo',
      ctaCart: 'Ver carrito',
      chip1: '💱 Tasa USD/COP por API',
      chip2: '✅ Pago por productos seleccionados',
      chip3: '🧾 Resumen de compra',
      catalogTitle: 'Catálogo completo',
      catalogLead: 'Todos los productos disponibles con precio dinámico USD/COP.',
      checkoutTitle: 'Datos de pago',
      checkoutBtn: 'Pagar seleccionados',
      clearBtn: 'Vaciar carrito',
      demo: '*Pago demo: genera confirmación, no cobra dinero real.'
    },
    en: {
      topPill: 'Shipping across Colombia',
      topText: 'Full catalog · Working cart · USD/COP prices',
      search: 'Search: Frieren, Miku, Maomao…',
      cart: 'Cart',
      benefits: 'Benefits',
      catalog: 'Catalog',
      contact: 'Contact',
      kicker: 'Anime shop · Figures · Collectibles',
      title: 'Your otaku corner with a real cart',
      lead: 'Add products, change quantities, choose what to pay for, and see prices converted between dollars and Colombian pesos.',
      ctaCatalog: 'View full catalog',
      ctaCart: 'View cart',
      chip1: '💱 USD/COP rate via API',
      chip2: '✅ Pay selected items',
      chip3: '🧾 Purchase summary',
      catalogTitle: 'Full catalog',
      catalogLead: 'All available products with dynamic USD/COP pricing.',
      checkoutTitle: 'Payment details',
      checkoutBtn: 'Pay selected items',
      clearBtn: 'Empty cart',
      demo: '*Demo payment: generates confirmation, no real money is charged.'
    }
  }[state.lang];

  const navLinks = $$('.nav a');
  $('.topbar__pill') && ($('.topbar__pill').textContent = text.topPill);
  $('.topbar__text') && ($('.topbar__text').textContent = text.topText);
  $('#searchInput')?.setAttribute('placeholder', text.search);
  $('.cart__text') && ($('.cart__text').textContent = text.cart);
  if (navLinks[0]) navLinks[0].textContent = text.benefits;
  if (navLinks[1]) navLinks[1].textContent = text.catalog;
  if (navLinks[2]) navLinks[2].textContent = text.contact;
  $('.kicker') && ($('.kicker').textContent = text.kicker);
  $('.hero h1') && ($('.hero h1').textContent = text.title);
  $('.lead') && ($('.lead').textContent = text.lead);
  $('.hero__cta .btn--primary') && ($('.hero__cta .btn--primary').textContent = text.ctaCatalog);
  $('#openCartHero') && ($('#openCartHero').textContent = text.ctaCart);
  const chips = $$('.hero__chips .chip');
  if (chips[0]) chips[0].textContent = text.chip1;
  if (chips[1]) chips[1].textContent = text.chip2;
  if (chips[2]) chips[2].textContent = text.chip3;
  $('#catalogo h2') && ($('#catalogo h2').textContent = text.catalogTitle);
  $('#catalogo .section__head .muted') && ($('#catalogo .section__head .muted').textContent = text.catalogLead);
  $('.checkout-form h3') && ($('.checkout-form h3').textContent = text.checkoutTitle);
  $('#checkoutForm button[type="submit"]') && ($('#checkoutForm button[type="submit"]').textContent = text.checkoutBtn);
  $('#clearCartBtn') && ($('#clearCartBtn').textContent = text.clearBtn);
  $('.checkout-form .muted.small:last-child') && ($('.checkout-form .muted.small:last-child').textContent = text.demo);
  renderProducts();
  renderCart();
}

function detectCardBrand(number) {
  const n = number.replace(/\D/g, '');
  if (/^4\d{12}(\d{3})?(\d{3})?$/.test(n)) return 'Visa';
  if (/^(5[1-5]\d{14}|2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12})$/.test(n)) return 'Mastercard';
  if (/^3[47]\d{13}$/.test(n)) return 'American Express';
  if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(n)) return 'Diners Club';
  if (/^6(?:011|5\d{2})\d{12}$/.test(n)) return 'Discover';
  return n.length ? 'Desconocida' : 'sin detectar';
}

function luhnCheck(number) {
  const digits = number.replace(/\D/g, '');
  if (digits.length < 13) return false;
  let sum = 0, shouldDouble = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

function validExpiry(value) {
  const m = value.match(/^(\d{2})\/?(\d{2})$/);
  if (!m) return false;
  const month = Number(m[1]);
  const year = 2000 + Number(m[2]);
  if (month < 1 || month > 12) return false;
  const expiry = new Date(year, month);
  const now = new Date();
  return expiry > new Date(now.getFullYear(), now.getMonth());
}

function updatePaymentFields() {
  const method = $('#paymentMethod')?.value || '';
  const isCard = method.includes('crédito') || method.includes('débito');
  const isPaypal = method === 'PayPal';
  $('#cardFields') && ($('#cardFields').hidden = !isCard);
  $('#paypalFields') && ($('#paypalFields').hidden = !isPaypal);
  ['cardNumber','cardExpiry','cardCvv'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.required = isCard;
  });
  const paypal = $('#paypalEmail');
  if (paypal) paypal.required = isPaypal;
}

function updateCardBrand() {
  const number = $('#cardNumber')?.value || '';
  const brand = detectCardBrand(number);
  const ok = luhnCheck(number);
  const label = $('#cardBrand');
  if (label) label.textContent = `Tipo de tarjeta: ${brand}${number.replace(/\D/g,'').length >= 13 ? (ok ? ' · número válido' : ' · número inválido') : ''}`;
}

function checkout(e) {
  e.preventDefault();
  const totalData = totals();
  if (!totalData.selected.length) return showToast(state.lang === 'en' ? 'Select at least one item to pay.' : 'Selecciona al menos un producto para pagar.');
  const method = $('#paymentMethod').value;
  if (!method) return showToast(state.lang === 'en' ? 'Choose a payment method.' : 'Selecciona un método de pago.');
  const isCard = method.includes('crédito') || method.includes('débito');
  const isPaypal = method === 'PayPal';

  if (isCard) {
    const cardNumber = $('#cardNumber')?.value || '';
    const expiry = $('#cardExpiry')?.value || '';
    const cvv = $('#cardCvv')?.value || '';
    const brand = detectCardBrand(cardNumber);
    const cvvOk = brand === 'American Express' ? /^\d{4}$/.test(cvv) : /^\d{3}$/.test(cvv);
    if (!luhnCheck(cardNumber) || brand === 'Desconocida') return showToast('Tarjeta inválida: revisa número y franquicia.');
    if (!validExpiry(expiry)) return showToast('Fecha de vencimiento inválida.');
    if (!cvvOk) return showToast('CVV inválido para esa tarjeta.');
  }

  if (isPaypal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#paypalEmail')?.value || '')) {
    return showToast('Ingresa un correo válido de PayPal.');
  }

  const buyer = $('#buyerName').value.trim();
  const summary = totalData.selected.map((item) => `${item.qty}x ${item.product.name}`).join(', ');
  totalData.selected.forEach((item) => delete state.cart[item.product.id]);
  saveCart();
  renderCart();
  e.target.reset();
  setCustomSelect('paymentMethod', '', state.lang === 'en' ? 'Select payment method' : 'Selecciona método de pago');
  updatePaymentFields();
  showToast(`Pago demo aprobado: ${buyer} pagó ${formatMoney(totalData.total)} por ${summary} con ${method}.`);
}
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  initCustomSelects();
  setCustomSelect('currencySelect', state.currency, state.currency);
  setCustomSelect('languageSelect', state.lang, state.lang === 'es' ? 'ES' : 'EN');
  applyLanguage();
  renderProducts();
  renderCart();
  loadRate();

  $$('.pill').forEach((pill) => pill.addEventListener('click', () => {
    state.activeFilter = pill.dataset.filter || 'all';
    $$('.pill').forEach((p) => p.classList.toggle('is-active', p === pill));
    renderProducts();
  }));

  $('#searchInput')?.addEventListener('input', renderProducts);
  $('#resetBtn')?.addEventListener('click', () => {
    state.activeFilter = 'all';
    $('#searchInput').value = '';
    $$('.pill').forEach((p) => p.classList.toggle('is-active', p.dataset.filter === 'all'));
    renderProducts();
  });
  $('#currencySelect')?.addEventListener('change', (e) => {
    state.currency = e.target.value;
    saveCurrency();
    setCustomSelect('currencySelect', state.currency, state.currency);
    renderProducts();
    renderCart();
  });

  $('#languageSelect')?.addEventListener('change', (e) => {
    state.lang = e.target.value || 'es';
    applyLanguage();
  });

  $('#themeToggle')?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('moe_theme', state.theme);
    applyTheme();
  });

  $('#paymentMethod')?.addEventListener('change', updatePaymentFields);
  $('#cardNumber')?.addEventListener('input', updateCardBrand);
  $('#cardExpiry')?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0,4).replace(/(\d{2})(\d)/, '$1/$2');
  });
  $('#cardCvv')?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0,4);
  });

  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-product]');
    const removeBtn = e.target.closest('[data-remove-cart]');
    const minusBtn = e.target.closest('[data-qty-minus]');
    const plusBtn = e.target.closest('[data-qty-plus]');
    if (addBtn) return addToCart(addBtn.dataset.addProduct);
    if (removeBtn) return removeFromCart(removeBtn.dataset.removeCart);
    if (minusBtn) return setQty(minusBtn.dataset.qtyMinus, state.cart[minusBtn.dataset.qtyMinus].qty - 1);
    if (plusBtn) return setQty(plusBtn.dataset.qtyPlus, state.cart[plusBtn.dataset.qtyPlus].qty + 1);
  });

  document.body.addEventListener('change', (e) => {
    if (e.target.matches('[data-select-cart]')) setSelected(e.target.dataset.selectCart, e.target.checked);
    if (e.target.matches('[data-qty-input]')) setQty(e.target.dataset.qtyInput, e.target.value);
  });

  $('#cartBtn')?.addEventListener('click', openCart);
  $('#openCartHero')?.addEventListener('click', openCart);
  $('#openCartBenefits')?.addEventListener('click', openCart);
  $('#closeCartBtn')?.addEventListener('click', closeCart);
  $('#cartDrawer')?.addEventListener('click', (e) => { if (e.target.id === 'cartDrawer') closeCart(); });
  $('#clearCartBtn')?.addEventListener('click', () => { state.cart = {}; saveCart(); renderCart(); showToast('Carrito vacío.'); });
  $('#checkoutForm')?.addEventListener('submit', checkout);
  $('#contactForm')?.addEventListener('submit', (e) => { e.preventDefault(); showToast('Mensaje listo (demo). Conecta un backend para enviar.'); e.target.reset(); });
});

// Topbar hide on scroll mobile
window.addEventListener('scroll', (() => {
  let lastScrollY = window.scrollY;
  return () => {
    const topbar = document.querySelector('.topbar');
    const root = document.documentElement;
    if (window.innerWidth > 820) { topbar?.classList.remove('is-hidden'); root.classList.remove('topbar-hidden'); return; }
    const currentScroll = window.scrollY;
    if (Math.abs(currentScroll - lastScrollY) < 10) return;
    if (currentScroll > lastScrollY && currentScroll > 60) { topbar?.classList.add('is-hidden'); root.classList.add('topbar-hidden'); }
    else { topbar?.classList.remove('is-hidden'); root.classList.remove('topbar-hidden'); }
    lastScrollY = currentScroll;
  };
})(), { passive: true });
