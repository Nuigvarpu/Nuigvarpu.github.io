const DB_KEY = 'moe_shop_db_v1';
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const state = {
  lang: localStorage.getItem('moe_lang') || 'es',
  theme: localStorage.getItem('moe_theme') || 'light',
  salesFilter: 'all'
};

const i18n = {
  es: {
    topPill:'Base de datos local', topText:'Ventas · Inventario · Pagos demo', navCatalog:'Catálogo', navHome:'Inicio',
    kicker:'Base de datos local · Demo', title:'Registro de ventas', lead:'Consulta las ventas guardadas desde el carrito, revisa totales por periodo y exporta la información de la base de datos local.',
    export:'Exportar JSON', clear:'Borrar ventas', summary:'Resumen', filterAll:'Todas las ventas', filterYear:'Ventas anuales', filterMonth:'Ventas mensuales', filterWeek:'Ventas semanales',
    sales:'Ventas', totalUsd:'Total USD', totalCop:'Total COP', productsTitle:'Productos registrados', product:'Producto', category:'Categoría', priceUsd:'Precio USD', stock:'Stock', salesTitle:'Ventas realizadas',
    helpAll:'Mostrando todas las ventas registradas.', helpYear:'Mostrando ventas del año actual.', helpMonth:'Mostrando ventas del mes actual.', helpWeek:'Mostrando ventas de los últimos 7 días.',
    noProducts:'No hay productos registrados. Abre primero el index para cargar el catálogo.', noSales:'Todavía no hay ventas registradas para este filtro.', noCategory:'Sin categoría', noDate:'Sin fecha', customer:'Cliente', noName:'Sin nombre', noEmail:'Sin correo', status:'Estado', rate:'Tasa', method:'Método', first4:'primeros 4', deleted:'Ventas borradas'
  },
  en: {
    topPill:'Local database', topText:'Sales · Inventory · Demo payments', navCatalog:'Catalog', navHome:'Home',
    kicker:'Local database · Demo', title:'Sales registry', lead:'Review sales saved from the cart, check totals by period, and export the local database information.',
    export:'Export JSON', clear:'Delete sales', summary:'Summary', filterAll:'All sales', filterYear:'Annual sales', filterMonth:'Monthly sales', filterWeek:'Weekly sales',
    sales:'Sales', totalUsd:'Total USD', totalCop:'Total COP', productsTitle:'Registered products', product:'Product', category:'Category', priceUsd:'USD price', stock:'Stock', salesTitle:'Completed sales',
    helpAll:'Showing every registered sale.', helpYear:'Showing sales from the current year.', helpMonth:'Showing sales from the current month.', helpWeek:'Showing sales from the last 7 days.',
    noProducts:'No products registered. Open the index page first to load the catalog.', noSales:'No sales registered for this filter yet.', noCategory:'No category', noDate:'No date', customer:'Customer', noName:'No name', noEmail:'No email', status:'Status', rate:'Rate', method:'Method', first4:'first 4', deleted:'Sales deleted'
  }
};
const txt = () => i18n[state.lang];

function readDB(){
  try{
    const db = JSON.parse(localStorage.getItem(DB_KEY) || '{}');
    return {
      meta: db.meta || {}, settings: db.settings || {}, categories: Array.isArray(db.categories) ? db.categories : [], products: Array.isArray(db.products) ? db.products : [], customers: Array.isArray(db.customers) ? db.customers : [], sales: Array.isArray(db.sales) ? db.sales : [], saleItems: Array.isArray(db.saleItems) ? db.saleItems : [], payments: Array.isArray(db.payments) ? db.payments : [], inventoryMovements: Array.isArray(db.inventoryMovements) ? db.inventoryMovements : []
    };
  }catch(error){
    return {meta:{}, settings:{}, categories:[], products:[], customers:[], sales:[], saleItems:[], payments:[], inventoryMovements:[]};
  }
}
function writeDB(db){ db.meta = { ...(db.meta || {}), updatedAt: new Date().toISOString() }; localStorage.setItem(DB_KEY, JSON.stringify(db)); }
function usd(value){ return new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(value || 0); }
function cop(value){ return new Intl.NumberFormat('es-CO', {style:'currency', currency:'COP', maximumFractionDigits:0}).format(value || 0); }
function dateText(iso){ return iso ? new Intl.DateTimeFormat(state.lang === 'en' ? 'en-US' : 'es-CO', {dateStyle:'medium', timeStyle:'short'}).format(new Date(iso)) : txt().noDate; }
function showToast(message){ const toast=$('#toast'), text=$('#toastText'); if(!toast||!text) return; text.textContent=message; toast.hidden=false; clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.hidden=true,1800); }
function categoryLabel(db, id){ const cat = db.categories.find(c => c.id === id); return (state.lang === 'en' ? cat?.labelEn : cat?.labelEs) || cat?.labelEs || id || txt().noCategory; }

function getSaleTime(sale){ return new Date(sale.createdAt || sale.date || 0); }
function filterSales(sales){
  const now = new Date();
  return sales.filter(sale => {
    const d = getSaleTime(sale);
    if(Number.isNaN(d.getTime())) return state.salesFilter === 'all';
    if(state.salesFilter === 'year') return d.getFullYear() === now.getFullYear();
    if(state.salesFilter === 'month') return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
    if(state.salesFilter === 'week'){
      const diffMs = now.getTime() - d.getTime();
      return diffMs >= 0 && diffMs <= 7 * 24 * 60 * 60 * 1000;
    }
    return true;
  });
}
function currentHelp(){ return txt()[`help${state.salesFilter[0].toUpperCase()}${state.salesFilter.slice(1)}`] || txt().helpAll; }

function applyTheme(){
  document.documentElement.dataset.theme = state.theme;
  const btn = $('#themeToggle');
  if(btn) btn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
}
function setCustomSelect(id, value, label){
  const input = document.getElementById(id);
  const wrapper = input?.closest('[data-custom-select]');
  const btn = wrapper?.querySelector('.custom-select__btn');
  if(input) input.value = value;
  if(btn) btn.textContent = label;
}
function initCustomSelects(){
  $$('[data-custom-select]').forEach(wrapper => {
    const btn = wrapper.querySelector('.custom-select__btn');
    const input = wrapper.querySelector('input[type="hidden"]');
    btn?.addEventListener('click', () => {
      const isOpen = wrapper.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
    wrapper.querySelectorAll('[data-value]').forEach(option => {
      option.addEventListener('click', () => {
        const value = option.dataset.value || '';
        const label = option.textContent.trim();
        if(input) input.value = value;
        if(btn) btn.textContent = idLabel(input?.id, value, label);
        wrapper.classList.remove('is-open');
        btn?.setAttribute('aria-expanded','false');
        input?.dispatchEvent(new Event('change', {bubbles:true}));
      });
    });
  });
  document.addEventListener('click', e => {
    $$('[data-custom-select].is-open').forEach(wrapper => {
      if(!wrapper.contains(e.target)){
        wrapper.classList.remove('is-open');
        wrapper.querySelector('.custom-select__btn')?.setAttribute('aria-expanded','false');
      }
    });
  });
}
function idLabel(id, value, fallback){ return id === 'languageSelect' ? (value === 'en' ? 'EN' : 'ES') : fallback; }
function applyLanguage(){
  localStorage.setItem('moe_lang', state.lang);
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if(txt()[key]) el.textContent = txt()[key]; });
  setCustomSelect('languageSelect', state.lang, state.lang === 'en' ? 'EN' : 'ES');
  const help = $('#filterHelp'); if(help) help.textContent = currentHelp();
}

function render(){
  const db = readDB();
  const allSales = db.sales;
  const sales = filterSales(allSales);
  const products = db.products;
  const payments = db.payments;
  const items = db.saleItems;

  $('#salesCount').textContent = String(sales.length);
  $('#totalUsd').textContent = usd(sales.reduce((acc,s) => acc + (s.totalsUSD?.total || 0), 0));
  $('#totalCop').textContent = cop(sales.reduce((acc,s) => acc + (s.totalsCOP?.total || 0), 0));

  $('#productsTable').innerHTML = products.map(p => `
    <tr>
      <td><strong>${p.name}</strong><br><span class="muted small">${p.sku || p.id}</span></td>
      <td>${categoryLabel(db, p.category)}</td>
      <td>${usd(p.priceUSD)}</td>
      <td>${p.stock ?? 0}<br><span class="muted small">${p.status || 'active'}</span></td>
    </tr>
  `).join('') || `<tr><td colspan="4">${txt().noProducts}</td></tr>`;

  $('#salesList').innerHTML = sales.map(sale => {
    const payment = payments.find(p => p.id === sale.paymentId) || sale.payment || {};
    const saleItems = items.filter(i => i.saleId === sale.id).length ? items.filter(i => i.saleId === sale.id) : (sale.products || []);
    const card = payment.cardBrand ? `<span class="sale-pill">${payment.cardBrand} · ${txt().first4}: ${payment.cardFirst4 || '----'}</span>` : '';
    const itemList = saleItems.map(p => `<li>${p.qty}x ${p.name} · ${usd(p.totalUSD)} / ${cop(p.totalCOP || (p.totalUSD * (sale.usdCopRate || db.settings.usdCopRate || 4000)))}</li>`).join('');
    return `<article class="sale-card">
      <div class="sale-card__head">
        <div><strong>${sale.id}</strong><span>${dateText(sale.createdAt || sale.date)}</span></div>
        <strong>${usd(sale.totalsUSD?.total || 0)} / ${cop(sale.totalsCOP?.total || 0)}</strong>
      </div>
      <p><strong>${txt().customer}:</strong> ${sale.buyer || txt().noName} · ${sale.email || txt().noEmail}</p>
      <p><strong>${txt().status}:</strong> ${sale.status || 'paid_demo'} · <strong>${txt().rate}:</strong> 1 USD = ${new Intl.NumberFormat('es-CO').format(sale.usdCopRate || db.settings.usdCopRate || 0)} COP</p>
      <p><strong>${txt().method}:</strong> ${payment.methodLabel || payment.method || 'No registrado'} ${card}</p>
      <ul>${itemList}</ul>
    </article>`;
  }).join('') || `<div class="cart-empty">${txt().noSales}</div>`;
}
function exportJSON(){ const blob = new Blob([JSON.stringify(readDB(), null, 2)], {type:'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'moe-shop-db.json'; a.click(); URL.revokeObjectURL(url); }

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(); initCustomSelects(); applyLanguage(); render();
  $('#themeToggle')?.addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('moe_theme', state.theme); applyTheme(); });
  $('#languageSelect')?.addEventListener('change', e => { state.lang = e.target.value || 'es'; applyLanguage(); render(); });
  $$('[data-sales-filter]').forEach(btn => btn.addEventListener('click', () => {
    state.salesFilter = btn.dataset.salesFilter || 'all';
    $$('[data-sales-filter]').forEach(p => p.classList.toggle('is-active', p === btn));
    applyLanguage(); render();
  }));
  $('#exportBtn')?.addEventListener('click', exportJSON);
  $('#clearSalesBtn')?.addEventListener('click', () => { const db = readDB(); db.sales=[]; db.saleItems=[]; db.payments=[]; db.customers=[]; db.inventoryMovements=[]; writeDB(db); render(); showToast(txt().deleted); });
});
