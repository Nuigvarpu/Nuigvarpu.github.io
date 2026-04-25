const PRODUCTS = [
  {
    "id": "frieren-luna",
    "name": "Frieren · Luna",
    "category": "frieren",
    "priceUSD": 33.51,
    "img": "./Img/Frieren.webp",
    "descEs": "Figura premium · Base incluida",
    "descEn": "Premium figure · Stand included",
    "rating": 4.9,
    "stock": 6,
    "tagEs": "Drop",
    "tagEn": "Drop",
    "details": {
      "sizeCm": "18 cm",
      "sizeIn": "7.1 in",
      "maker": "SEGA",
      "line": "Luminasta",
      "material": "PVC / ABS",
      "sourceEs": "Referencia basada en ficha de SEGA Luminasta Frieren: 180 mm, PVC/ABS, precio listado USD 33.51.",
      "sourceEn": "Reference based on SEGA Luminasta Frieren listing: 180 mm, PVC/ABS, listed price USD 33.51."
    }
  },
  {
    "id": "frieren-campo",
    "name": "Frieren · Campo de Flores",
    "category": "frieren",
    "priceUSD": 45.99,
    "img": "./Img/FrierenCampo.jpg",
    "descEs": "Figura de Frieren · Base incluida",
    "descEn": "Frieren figure · Stand included",
    "rating": 4.8,
    "stock": 8,
    "tagEs": "Nuevo",
    "tagEn": "New",
    "details": {
      "sizeCm": "18 cm aprox.",
      "sizeIn": "7.1 in approx.",
      "maker": "SEGA",
      "line": "Luminasta Campo de Flores",
      "material": "PVC / ABS",
      "sourceEs": "Precio de referencia encontrado: 45,99 € para Frieren Campo de Flores Sega Luminasta; altura aproximada de línea Luminasta similar.",
      "sourceEn": "Reference price found: €45.99 for Frieren Campo de Flores Sega Luminasta; approximate height based on similar Luminasta figures."
    }
  },
  {
    "id": "frieren-flower",
    "name": "Frieren · Flower Dance",
    "category": "frieren",
    "priceUSD": 44.5,
    "img": "./Img/FrierenFlowerDance.webp",
    "descEs": "Figura dinámica · Efecto translúcido",
    "descEn": "Dynamic figure · Translucent effect",
    "rating": 4.7,
    "stock": 5,
    "tagEs": "Top",
    "tagEn": "Top",
    "details": {
      "sizeCm": "18 cm aprox.",
      "sizeIn": "7.1 in approx.",
      "maker": "SEGA",
      "line": "Prize figure",
      "material": "PVC / ABS",
      "sourceEs": "Sin ficha exacta localizada; se conserva como producto de catálogo demo con medidas aproximadas de figuras prize.",
      "sourceEn": "Exact listing not located; kept as a demo catalog item with approximate prize-figure measurements."
    }
  },
  {
    "id": "ubel-dayoff",
    "name": "Übel · Day off",
    "category": "frieren",
    "priceUSD": 35.0,
    "img": "./Img/Ubelcasual.webp",
    "descEs": "Figura casual · Edición de colección",
    "descEn": "Casual figure · Collector edition",
    "rating": 4.5,
    "stock": 4,
    "tagEs": "Preventa",
    "tagEn": "Pre-order",
    "details": {
      "sizeCm": "18 cm aprox.",
      "sizeIn": "7.1 in approx.",
      "maker": "SEGA",
      "line": "Prize figure",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo; título y precio ajustables según proveedor.",
      "sourceEn": "Demo catalog product; title and price can be adjusted to supplier data."
    }
  },
  {
    "id": "miku-chibi",
    "name": "Miku · Chibbi",
    "category": "miku",
    "priceUSD": 29.99,
    "img": "./Img/MikuChibbi.webp",
    "descEs": "Mini figura · Edición pastel",
    "descEn": "Mini figure · Pastel edition",
    "rating": 4.7,
    "stock": 12,
    "tagEs": "Kawaii",
    "tagEn": "Kawaii",
    "details": {
      "sizeCm": "10 cm aprox.",
      "sizeIn": "3.9 in approx.",
      "maker": "FuRyu",
      "line": "Chibi / prize style",
      "material": "PVC",
      "sourceEs": "Producto de catálogo demo inspirado en líneas chibi de Miku; precio de referencia de figuras FuRyu similares.",
      "sourceEn": "Demo catalog product inspired by Miku chibi lines; price references similar FuRyu figures."
    }
  },
  {
    "id": "miku-neko",
    "name": "Miku · Neko escritorio",
    "category": "miku",
    "priceUSD": 31.5,
    "img": "./Img/MikuEscritorio.webp",
    "descEs": "Figura decorativa · Estilo escritorio",
    "descEn": "Decorative figure · Desk style",
    "rating": 4.9,
    "stock": 9,
    "tagEs": "Top",
    "tagEn": "Top",
    "details": {
      "sizeCm": "12 cm aprox.",
      "sizeIn": "4.7 in approx.",
      "maker": "FuRyu",
      "line": "Desktop figure",
      "material": "PVC",
      "sourceEs": "Producto de catálogo demo; verificar ficha exacta con proveedor antes de venta real.",
      "sourceEn": "Demo catalog product; verify exact supplier listing before real sale."
    }
  },
  {
    "id": "miku-noodle",
    "name": "Miku · Noodle Stopper",
    "category": "miku",
    "priceUSD": 33.25,
    "img": "./Img/MikuNoodleStopper.webp",
    "descEs": "Figura para repisa · Colección Miku",
    "descEn": "Shelf figure · Miku collection",
    "rating": 4.8,
    "stock": 7,
    "tagEs": "Nuevo",
    "tagEn": "New",
    "details": {
      "sizeCm": "14 cm aprox.",
      "sizeIn": "5.5 in approx.",
      "maker": "FuRyu",
      "line": "Noodle Stopper",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo basado en la línea Noodle Stopper de FuRyu.",
      "sourceEn": "Demo catalog product based on FuRyu Noodle Stopper line."
    }
  },
  {
    "id": "miku-rainy",
    "name": "Miku · Rainy Dance",
    "category": "miku",
    "priceUSD": 37.9,
    "img": "./Img/MikuRainiDance.webp",
    "descEs": "Figura azul · Paraguas",
    "descEn": "Blue figure · Umbrella",
    "rating": 4.9,
    "stock": 6,
    "tagEs": "Brilla",
    "tagEn": "Shiny",
    "details": {
      "sizeCm": "18 cm aprox.",
      "sizeIn": "7.1 in approx.",
      "maker": "FuRyu",
      "line": "Prize figure",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo; precio cercano a figuras FuRyu prize.",
      "sourceEn": "Demo catalog product; price aligned with FuRyu prize figures."
    }
  },
  {
    "id": "maomao-casual",
    "name": "Maomao · Casual",
    "category": "maomao",
    "priceUSD": 39.99,
    "img": "./Img/MaomaoCasual.jpg",
    "descEs": "Figura de Maomao · Canasta incluida",
    "descEn": "Maomao figure · Basket included",
    "rating": 4.8,
    "stock": 6,
    "tagEs": "Nuevo",
    "tagEn": "New",
    "details": {
      "sizeCm": "15 cm aprox.",
      "sizeIn": "5.9 in approx.",
      "maker": "Banpresto",
      "line": "Prize figure / Street Walk style",
      "material": "PVC / ABS",
      "sourceEs": "Referencia de Maomao Banpresto: Big Sofvimates aprox. 5.9 in; listado Street Walk visto a USD 39.99.",
      "sourceEn": "Maomao Banpresto reference: Big Sofvimates approx. 5.9 in; Street Walk listing seen at USD 39.99."
    }
  },
  {
    "id": "maomao-chibi",
    "name": "Maomao · Chibi",
    "category": "maomao",
    "priceUSD": 18.9,
    "img": "./Img/MaomaoChibbi.webp",
    "descEs": "Figura chibi · Estilo adorable",
    "descEn": "Chibi figure · Cute style",
    "rating": 4.7,
    "stock": 11,
    "tagEs": "2x1",
    "tagEn": "2-for-1",
    "details": {
      "sizeCm": "9 cm aprox.",
      "sizeIn": "3.5 in approx.",
      "maker": "Banpresto",
      "line": "Chibi style",
      "material": "PVC",
      "sourceEs": "Producto de catálogo demo; no se encontró ficha oficial exacta para esta imagen.",
      "sourceEn": "Demo catalog product; exact official listing for this image was not found."
    }
  },
  {
    "id": "maomao-vestido",
    "name": "Maomao · Vestido",
    "category": "maomao",
    "priceUSD": 41.0,
    "img": "./Img/maomaoVestido.jpg",
    "descEs": "Figura elegante · Base incluida",
    "descEn": "Elegant figure · Stand included",
    "rating": 4.8,
    "stock": 5,
    "tagEs": "Premium",
    "tagEn": "Premium",
    "details": {
      "sizeCm": "20 cm aprox.",
      "sizeIn": "7.9 in approx.",
      "maker": "Banpresto / Taito style",
      "line": "Dress figure",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo; verificar fabricante exacto con distribuidor.",
      "sourceEn": "Demo catalog product; verify exact manufacturer with distributor."
    }
  },
  {
    "id": "jinshi",
    "name": "Jinshi · Jardín",
    "category": "maomao",
    "priceUSD": 43.5,
    "img": "./Img/Shinnji.jpg",
    "descEs": "Figura de Jinshi · Kimono azul",
    "descEn": "Jinshi figure · Blue kimono",
    "rating": 4.7,
    "stock": 4,
    "tagEs": "Premium",
    "tagEn": "Premium",
    "details": {
      "sizeCm": "18 cm aprox.",
      "sizeIn": "7.1 in approx.",
      "maker": "FuRyu / Prize style",
      "line": "The Apothecary Diaries",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo; información pendiente de ficha oficial exacta.",
      "sourceEn": "Demo catalog product; exact official listing still pending."
    }
  },
  {
    "id": "gojo-purple",
    "name": "Gojo · Técnica púrpura",
    "category": "otras",
    "priceUSD": 49.99,
    "img": "./Img/GojoPurpura.webp",
    "descEs": "Figura de acción · Efecto incluido",
    "descEn": "Action figure · Effect included",
    "rating": 4.9,
    "stock": 3,
    "tagEs": "Épico",
    "tagEn": "Epic",
    "details": {
      "sizeCm": "20 cm aprox.",
      "sizeIn": "7.9 in approx.",
      "maker": "SEGA",
      "line": "Jujutsu Kaisen prize figure",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo basado en figura de Jujutsu Kaisen con efecto translúcido.",
      "sourceEn": "Demo catalog product based on a Jujutsu Kaisen figure with translucent effect."
    }
  },
  {
    "id": "hagakure-school",
    "name": "Hagakure · Clase 1A",
    "category": "otras",
    "priceUSD": 22.0,
    "img": "./Img/HagakureEscolar.jpg",
    "descEs": "Figura escolar · Estilo uniforme",
    "descEn": "School figure · Uniform style",
    "rating": 4.4,
    "stock": 10,
    "tagEs": "Minimal",
    "tagEn": "Minimal",
    "details": {
      "sizeCm": "18 cm aprox.",
      "sizeIn": "7.1 in approx.",
      "maker": "Banpresto",
      "line": "My Hero Academia prize style",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo; ajustar ficha con datos del proveedor real.",
      "sourceEn": "Demo catalog product; adjust details with real supplier data."
    }
  },
  {
    "id": "heroteorita",
    "name": "Teorita · Heroína",
    "category": "otras",
    "priceUSD": 36.75,
    "img": "./Img/Heroteorita.webp",
    "descEs": "Figura de fantasía · Capa",
    "descEn": "Fantasy figure · Cape",
    "rating": 4.6,
    "stock": 6,
    "tagEs": "Nuevo",
    "tagEn": "New",
    "details": {
      "sizeCm": "18 cm aprox.",
      "sizeIn": "7.1 in approx.",
      "maker": "FuRyu",
      "line": "Fantasy prize figure",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo; información exacta pendiente.",
      "sourceEn": "Demo catalog product; exact listing pending."
    }
  },
  {
    "id": "rei-plush",
    "name": "Rei · Peluche playa",
    "category": "otras",
    "priceUSD": 24.9,
    "img": "./Img/Reiluche.jpg",
    "descEs": "Peluche suave · Edición playa",
    "descEn": "Soft plush · Beach edition",
    "rating": 4.6,
    "stock": 14,
    "tagEs": "Cute",
    "tagEn": "Cute",
    "details": {
      "sizeCm": "15 cm aprox.",
      "sizeIn": "5.9 in approx.",
      "maker": "SEGA Goods",
      "line": "Plush / mascot",
      "material": "Poliéster",
      "sourceEs": "Producto de catálogo demo inspirado en peluches mascot de SEGA Goods.",
      "sourceEn": "Demo catalog product inspired by SEGA Goods mascot plushies."
    }
  },
  {
    "id": "shinobu",
    "name": "Shinobu Kocho · Aleteo de mariposa",
    "category": "otras",
    "priceUSD": 38.5,
    "img": "./Img/Shinobu.webp",
    "descEs": "Figura de Shinobu · Base incluida",
    "descEn": "Shinobu figure · Stand included",
    "rating": 4.8,
    "stock": 5,
    "tagEs": "Brilla",
    "tagEn": "Shiny",
    "details": {
      "sizeCm": "17 cm aprox.",
      "sizeIn": "6.7 in approx.",
      "maker": "SEGA Goods",
      "line": "Demon Slayer prize figure",
      "material": "PVC / ABS",
      "sourceEs": "Producto de catálogo demo basado en figura prize de Shinobu con efecto translúcido.",
      "sourceEn": "Demo catalog product based on a Shinobu prize figure with translucent effect."
    }
  }
];

const state = {
  currency: localStorage.getItem('moe_currency') || 'USD',
  lang: localStorage.getItem('moe_lang') || 'es',
  theme: localStorage.getItem('moe_theme') || 'light',
  usdCopRate: Number(localStorage.getItem('moe_usd_cop_rate')) || 4000,
  cart: JSON.parse(localStorage.getItem('moe_cart') || '{}'),
  activeFilter: 'all'
};

const i18n = {
  es: {
    topPill: 'Envíos a toda Colombia', topText: 'Figuras · Coleccionables · Japón al alcance de tus manos',
    search: 'Busca: Frieren, Miku, Maomao…', cart: 'Carrito', benefits: 'Beneficios', catalog: 'Catálogo', contact: 'Contacto',
    kicker: 'Tienda anime · Figuras · Coleccionables', title: 'Figuras anime y coleccionables en un solo lugar',
    lead: 'Explora figuras, preventas y coleccionables con estética japonesa, precios claros y envíos nacionales.',
    ctaCatalog: 'Ver catálogo completo', ctaCart: 'Ver carrito', chip1: '💱 Precios en USD/COP', chip2: '✅ Compra segura', chip3: '🧾 Productos por encargo',
    featured: 'DESTACADO', featuredDesc: 'Figura · Base incluida', stock: 'Stock', addCart: 'Agregar al carrito', add: 'Agregar', unit: 'c/u', outOf: 'de',
    benefitTag: 'Compra segura · Anime shop', benefitTitle: 'Más que una tienda, tu vitrina de Japón',
    benefitLead: 'Encuentra productos seleccionados, atención rápida y opciones de pago pensadas para comprar sin enredos.', benefitBuy: 'Comprar ahora',
    catalogTitle: 'Catálogo completo', catalogLead: 'Explora el catálogo completo y filtra por personaje o colección. Los precios se actualizan según la moneda seleccionada.',
    filters: ['Todo', 'Frieren', 'Miku', 'Maomao', 'Otras'], emptyTitle: 'No encontré productos con ese filtro.', emptyLead: 'Prueba con otro nombre o vuelve a “Todo”.', reset: 'Limpiar filtros', detailsBtn: 'Ver detalles', detailSize: 'Tamaño', detailMaker: 'Fabricante', detailLine: 'Línea', detailMaterial: 'Material', detailPrice: 'Precio base', detailInfo: 'Información de referencia', close: 'Cerrar',
    drawerTitle: 'Carrito', drawerLead: 'Marca solo los productos que quieres pagar.', selected: 'Seleccionados', subtotal: 'Subtotal', shipping: 'Envío', total: 'Total a pagar', remove: 'Quitar', emptyCart: 'Tu carrito está vacío. El estante está esperando mercancía.',
    checkoutTitle: 'Datos de pago', buyerName: 'Nombre completo', buyerEmail: 'Correo', paymentPlaceholder: 'Selecciona método de pago',
    paymentOptions: ['Contra entrega a envíos nacionales','Tarjeta de crédito','Tarjeta de débito','PayPal'], cardNumber: 'Número de tarjeta', cardExpiry: 'MM/AA', cardCvv: 'CVV', paypalEmail: 'Correo de PayPal', cardType: 'Tipo de tarjeta', noDetect: 'sin detectar', unknown: 'desconocida', validNumber: 'número válido', invalidNumber: 'número inválido', cardPreview: 'Tarjeta detectada', first4: 'primeros 4 dígitos',
    checkoutBtn: 'Pagar seleccionados', clearBtn: 'Vaciar carrito', demo: '*Pago demo: genera confirmación, no cobra dinero real.',
    contactTitle: 'Contacto', contactLead: '¿Buscas un personaje específico? Pide por encargo y te cotizamos.', contactName: 'Nombre', contactEmail: 'Email', contactMsg: 'Mensaje (ej: “quiero una figura de…”)', send: 'Enviar', formDemo: '*Este formulario es demo. No envía datos a ningún servidor.', shortcuts: 'Atajos', location: 'Santa Marta / Envíos nacionales', hours: 'Lun–Sáb: 10:00–19:00', payTypes: 'Tarjeta / PayPal / Contraentrega*',
    footerText: 'Figuras y cositas anime con vibra pastel.', sections: 'Secciones', social: 'Social', rate: 'Tasa actual', rateFallback: 'No se pudo conectar a la API. Usando tasa guardada', chooseOne: 'Selecciona al menos un producto para pagar.', chooseMethod: 'Selecciona un método de pago.', cardInvalid: 'Tarjeta inválida: revisa número y franquicia.', expiryInvalid: 'Fecha de vencimiento inválida.', cvvInvalid: 'CVV inválido para esa tarjeta.', paypalInvalid: 'Ingresa un correo válido de PayPal.', cartEmptied: 'Carrito vacío.', messageReady: 'Mensaje listo (demo). Conecta un backend para enviar.'
  },
  en: {
    topPill: 'Shipping across Colombia', topText: 'Figures · Collectibles · Japan within your reach',
    search: 'Search: Frieren, Miku, Maomao…', cart: 'Cart', benefits: 'Benefits', catalog: 'Catalog', contact: 'Contact',
    kicker: 'Anime shop · Figures · Collectibles', title: 'Anime figures and collectibles in one place',
    lead: 'Browse figures, pre-orders, and Japan-inspired collectibles with clear prices and nationwide shipping.',
    ctaCatalog: 'View full catalog', ctaCart: 'View cart', chip1: '💱 USD/COP prices', chip2: '✅ Secure checkout', chip3: '🧾 Special orders available',
    featured: 'FEATURED', featuredDesc: 'Figure · Stand included', stock: 'Stock', addCart: 'Add to cart', add: 'Add', unit: 'each', outOf: 'out of',
    benefitTag: 'Secure shopping · Anime shop', benefitTitle: 'More than a store, your Japan showcase',
    benefitLead: 'Find curated products, fast support, and payment options designed for a smooth checkout.', benefitBuy: 'Shop now',
    catalogTitle: 'Full catalog', catalogLead: 'Browse every available product and filter by character or collection. Prices update based on your selected currency.',
    filters: ['All', 'Frieren', 'Miku', 'Maomao', 'Other'], emptyTitle: 'No products matched that filter.', emptyLead: 'Try another name or go back to “All”.', reset: 'Clear filters', detailsBtn: 'View details', detailSize: 'Size', detailMaker: 'Maker', detailLine: 'Line', detailMaterial: 'Material', detailPrice: 'Base price', detailInfo: 'Reference information', close: 'Close',
    drawerTitle: 'Cart', drawerLead: 'Select only the products you want to pay for.', selected: 'Selected', subtotal: 'Subtotal', shipping: 'Shipping', total: 'Total to pay', remove: 'Remove', emptyCart: 'Your cart is empty. The shelf is waiting for treasures.',
    checkoutTitle: 'Payment details', buyerName: 'Full name', buyerEmail: 'Email', paymentPlaceholder: 'Select payment method',
    paymentOptions: ['Cash on delivery for national shipping','Credit card','Debit card','PayPal'], cardNumber: 'Card number', cardExpiry: 'MM/YY', cardCvv: 'CVV', paypalEmail: 'PayPal email', cardType: 'Card type', noDetect: 'not detected', unknown: 'unknown', validNumber: 'valid number', invalidNumber: 'invalid number', cardPreview: 'Detected card', first4: 'first 4 digits',
    checkoutBtn: 'Pay selected items', clearBtn: 'Empty cart', demo: '*Demo payment: generates confirmation, no real money is charged.',
    contactTitle: 'Contact', contactLead: 'Looking for a specific character? Request it and we will quote it.', contactName: 'Name', contactEmail: 'Email', contactMsg: 'Message (example: “I want a figure of…”)', send: 'Send', formDemo: '*This form is a demo. It does not send data to any server.', shortcuts: 'Quick info', location: 'Santa Marta / National shipping', hours: 'Mon–Sat: 10:00–19:00', payTypes: 'Card / PayPal / Cash on delivery*',
    footerText: 'Anime figures and goods with a pastel vibe.', sections: 'Sections', social: 'Social', rate: 'Current rate', rateFallback: 'Could not reach the API. Using saved rate', chooseOne: 'Select at least one item to pay.', chooseMethod: 'Choose a payment method.', cardInvalid: 'Invalid card: check the number and card network.', expiryInvalid: 'Invalid expiration date.', cvvInvalid: 'Invalid CVV for that card.', paypalInvalid: 'Enter a valid PayPal email.', cartEmptied: 'Cart emptied.', messageReady: 'Message ready (demo). Connect a backend to send it.'
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const txt = () => i18n[state.lang];
const fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="520"><rect width="100%" height="100%" fill="#f7e8ff"/><text x="50%" y="52%" text-anchor="middle" font-family="Arial" font-size="28" fill="#555">Imagen no incluida</text></svg>`);

// ===========================
// Mini base de datos local
// Guarda productos y ventas en localStorage para esta demo estática.
// En producción esto debería ir en backend + base de datos real.
// ===========================
const DB_KEY = 'moe_shop_db_v1';
function readDB(){
  const base = { products: PRODUCTS, sales: [] };
  try{
    const saved = JSON.parse(localStorage.getItem(DB_KEY) || 'null');
    return {
      products: Array.isArray(saved?.products) ? saved.products : PRODUCTS,
      sales: Array.isArray(saved?.sales) ? saved.sales : []
    };
  }catch(error){
    return base;
  }
}
function writeDB(db){ localStorage.setItem(DB_KEY, JSON.stringify(db)); }
function seedDB(){
  const db = readDB();
  db.products = PRODUCTS.map(p => ({
    id: p.id,
    name: p.name,
    category: p.category,
    priceUSD: p.priceUSD,
    stock: p.stock,
    img: p.img,
    descEs: p.descEs,
    descEn: p.descEn
  }));
  writeDB(db);
}
function createSaleRecord({buyer, email, method, methodLabel, cardBrand, cardFirst4, selected, subtotal, shipping, total}){
  const db = readDB();
  const sale = {
    id: `SALE-${Date.now()}`,
    date: new Date().toISOString(),
    buyer,
    email,
    currency: state.currency,
    usdCopRate: state.usdCopRate,
    payment: {
      method,
      methodLabel,
      cardBrand: cardBrand || null,
      cardFirst4: cardFirst4 || null
    },
    products: selected.map(item => ({
      productId: item.product.id,
      name: item.product.name,
      qty: item.qty,
      unitPriceUSD: item.product.priceUSD,
      totalUSD: Number((item.product.priceUSD * item.qty).toFixed(2))
    })),
    totalsUSD: {
      subtotal: Number(subtotal.toFixed(2)),
      shipping: Number(shipping.toFixed(2)),
      total: Number(total.toFixed(2))
    },
    totalsCOP: {
      subtotal: Math.round(subtotal * state.usdCopRate),
      shipping: Math.round(shipping * state.usdCopRate),
      total: Math.round(total * state.usdCopRate)
    }
  };
  db.sales.unshift(sale);
  writeDB(db);
  return sale;
}
function methodLabelByValue(method){
  const idx=['cod','credit','debit','paypal'].indexOf(method);
  return idx >= 0 ? txt().paymentOptions[idx] : method;
}


function saveCart(){ localStorage.setItem('moe_cart', JSON.stringify(state.cart)); }
function saveCurrency(){ localStorage.setItem('moe_currency', state.currency); localStorage.setItem('moe_usd_cop_rate', String(state.usdCopRate)); }
function normalize(str){ return (str ?? '').toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ''); }
function getProduct(id){ return PRODUCTS.find((p) => p.id === id); }
function desc(p){ return state.lang === 'en' ? p.descEn : p.descEs; }
function tag(p){ return state.lang === 'en' ? p.tagEn : p.tagEs; }

function formatMoney(usd){
  if (state.currency === 'COP') return new Intl.NumberFormat('es-CO', {style:'currency', currency:'COP', maximumFractionDigits:0}).format(usd * state.usdCopRate);
  return new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(usd);
}

async function loadRate(){
  const info = $('#rateInfo');
  try{
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if(!res.ok) throw new Error('No response');
    const data = await res.json();
    if(!data?.rates?.COP) throw new Error('COP missing');
    state.usdCopRate = Number(data.rates.COP);
    saveCurrency();
    if(info) info.textContent = `${txt().rate}: 1 USD ≈ ${new Intl.NumberFormat('es-CO').format(state.usdCopRate)} COP.`;
  }catch(error){
    if(info) info.textContent = `${txt().rateFallback}: 1 USD ≈ ${new Intl.NumberFormat('es-CO').format(state.usdCopRate)} COP.`;
  }
  renderProducts(); renderCart();
}

function renderProducts(){
  const grid = $('#productGrid');
  if(!grid) return;
  const query = normalize($('#searchInput')?.value || '');
  const filtered = PRODUCTS.filter(p => {
    const matchFilter = state.activeFilter === 'all' || p.category === state.activeFilter;
    const matchQuery = !query || normalize(`${p.name} ${desc(p)} ${p.category}`).includes(query);
    return matchFilter && matchQuery;
  });
  grid.innerHTML = filtered.map(p => `
    <article class="producto" data-category="${p.category}" data-name="${p.name}">
      <div class="producto__img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='${fallbackImg}'">
        <span class="badge">${tag(p)}</span>
      </div>
      <div class="producto__body">
        <h3>${p.name}</h3>
        <p class="muted">${desc(p)}</p>
        <div class="producto__row">
          <span class="price">${formatMoney(p.priceUSD)}</span>
          <span class="rating" aria-label="${p.rating} ${txt().outOf} 5">★★★★★ <span class="muted">${p.rating}</span></span>
        </div>
        <p class="muted small">${txt().stock}: ${p.stock}</p>
        <div class="producto__actions">
          <button class="btn btn--small" data-add-product="${p.id}">${txt().add}</button>
          <button class="btn btn--small btn--details" data-open-details="${p.id}">${txt().detailsBtn}</button>
        </div>
      </div>
    </article>`).join('');
  const empty = $('#emptyState');
  if(empty) empty.hidden = filtered.length !== 0;
}

function cartEntries(){ return Object.entries(state.cart).map(([id,item]) => ({...item, product:getProduct(id)})).filter(i => i.product); }
function addToCart(id){
  const product = getProduct(id); if(!product) return;
  const current = state.cart[id] || {qty:0, selected:true};
  if(current.qty >= product.stock) return showToast(state.lang === 'en' ? `Only ${product.stock} units of ${product.name} are available.` : `Solo hay ${product.stock} unidades de ${product.name}.`);
  state.cart[id] = {qty: current.qty + 1, selected: true};
  saveCart(); renderCart(); showToast(state.lang === 'en' ? `Added: ${product.name}` : `Agregado: ${product.name}`);
}
function removeFromCart(id){ delete state.cart[id]; saveCart(); renderCart(); }
function setQty(id, qty){
  const product = getProduct(id); if(!product || !state.cart[id]) return;
  state.cart[id].qty = Math.max(1, Math.min(product.stock, Number(qty) || 1));
  saveCart(); renderCart();
}
function setSelected(id, selected){ if(!state.cart[id]) return; state.cart[id].selected = selected; saveCart(); renderCart(); }
function totals(){
  const selected = cartEntries().filter(item => item.selected);
  const subtotal = selected.reduce((acc,item) => acc + item.product.priceUSD * item.qty, 0);
  const shipping = selected.length ? 4.5 : 0;
  return {selected, subtotal, shipping, total: subtotal + shipping};
}
function renderCart(){
  const entries = cartEntries();
  const container = $('#cartItems');
  const count = entries.reduce((acc,item) => acc + item.qty, 0);
  const cartCount = $('#cartCount');
  if(cartCount){ cartCount.textContent = String(count); cartCount.setAttribute('aria-label', `${count} ${state.lang === 'en' ? 'items' : 'artículos'}`); }
  if(!container) return;
  if(!entries.length) container.innerHTML = `<div class="cart-empty">${txt().emptyCart}</div>`;
  else container.innerHTML = entries.map(({product, qty, selected}) => `
    <article class="cart-item">
      <label class="cart-item__check"><input type="checkbox" data-select-cart="${product.id}" ${selected ? 'checked' : ''}></label>
      <img src="${product.img}" alt="${product.name}" onerror="this.src='${fallbackImg}'">
      <div class="cart-item__info">
        <strong>${product.name}</strong>
        <span class="muted small">${formatMoney(product.priceUSD)} ${txt().unit} · ${txt().stock} ${product.stock}</span>
        <div class="qty">
          <button type="button" data-qty-minus="${product.id}">−</button>
          <input type="number" min="1" max="${product.stock}" value="${qty}" data-qty-input="${product.id}">
          <button type="button" data-qty-plus="${product.id}">+</button>
        </div>
      </div>
      <div class="cart-item__side"><strong>${formatMoney(product.priceUSD * qty)}</strong><button class="remove-btn" type="button" data-remove-cart="${product.id}">${txt().remove}</button></div>
    </article>`).join('');
  const totalData = totals();
  $('#selectedCount').textContent = String(totalData.selected.reduce((acc,item) => acc + item.qty, 0));
  $('#subtotalText').textContent = formatMoney(totalData.subtotal);
  $('#shippingText').textContent = formatMoney(totalData.shipping);
  $('#totalText').textContent = formatMoney(totalData.total);
}

function productSize(product){ return state.lang === 'en' ? product.details?.sizeIn : product.details?.sizeCm; }
function sourceText(product){ return state.lang === 'en' ? product.details?.sourceEn : product.details?.sourceEs; }
function openDetails(id){
  const product = getProduct(id); const modal = $('#detailsModal'); const body = $('#detailsBody');
  if(!product || !modal || !body) return; const t = txt();
  body.innerHTML = `
    <div class="details-layout">
      <div class="details-img-wrap"><img src="${product.img}" alt="${product.name}" onerror="this.src='${fallbackImg}'"></div>
      <div class="details-info">
        <span class="badge details-badge">${tag(product)}</span>
        <h2>${product.name}</h2>
        <p class="muted">${desc(product)}</p>
        <div class="details-price-row"><strong class="price">${formatMoney(product.priceUSD)}</strong><span class="rating">★★★★★ <span class="muted">${product.rating}</span></span></div>
        <dl class="details-list">
          <div><dt>${t.detailSize}</dt><dd>${productSize(product) || 'N/D'}</dd></div>
          <div><dt>${t.detailMaker}</dt><dd>${product.details?.maker || 'N/D'}</dd></div>
          <div><dt>${t.detailLine}</dt><dd>${product.details?.line || 'N/D'}</dd></div>
          <div><dt>${t.detailMaterial}</dt><dd>${product.details?.material || 'N/D'}</dd></div>
          <div><dt>${t.detailPrice}</dt><dd>${new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(product.priceUSD)}</dd></div>
          <div><dt>${t.stock}</dt><dd>${product.stock}</dd></div>
        </dl>
        <div class="details-note"><strong>${t.detailInfo}:</strong> ${sourceText(product) || ''}</div>
        <div class="details-actions"><button class="btn btn--primary" data-add-product="${product.id}">${t.addCart}</button><button class="btn btn--ghost" data-close-details type="button">${t.close}</button></div>
      </div>
    </div>`;
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false');
}
function closeDetails(){ const modal = $('#detailsModal'); modal?.classList.remove('is-open'); modal?.setAttribute('aria-hidden','true'); }

function openCart(){ $('#cartDrawer')?.classList.add('is-open'); $('#cartDrawer')?.setAttribute('aria-hidden','false'); }
function closeCart(){ $('#cartDrawer')?.classList.remove('is-open'); $('#cartDrawer')?.setAttribute('aria-hidden','true'); }
function showToast(message){ const toast=$('#toast'), text=$('#toastText'); if(!toast||!text) return; text.textContent=message; toast.hidden=false; clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>{toast.hidden=true;},1800); }

function setCustomSelect(id, value, label = value){
  const wrapper = document.querySelector(`[data-custom-select="${id}"]`);
  const input = document.getElementById(id);
  const btn = wrapper?.querySelector('.custom-select__btn');
  if(input) input.value = value;
  if(btn) btn.textContent = label;
}
function initCustomSelects(){
  document.querySelectorAll('.custom-select').forEach(wrapper => {
    const inputId = wrapper.dataset.customSelect;
    const btn = wrapper.querySelector('.custom-select__btn');
    const options = wrapper.querySelectorAll('[data-value]');
    btn?.addEventListener('click', () => {
      const open = wrapper.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      document.querySelectorAll('.custom-select').forEach(other => { if(other !== wrapper){ other.classList.remove('is-open'); other.querySelector('.custom-select__btn')?.setAttribute('aria-expanded','false'); } });
    });
    options.forEach(option => option.addEventListener('click', () => {
      const value = option.dataset.value;
      setCustomSelect(inputId, value, option.textContent.trim());
      wrapper.classList.remove('is-open'); btn?.setAttribute('aria-expanded','false');
      document.getElementById(inputId)?.dispatchEvent(new Event('change', {bubbles:true}));
    }));
  });
  document.addEventListener('click', e => {
    if(e.target.closest('.custom-select')) return;
    document.querySelectorAll('.custom-select').forEach(select => { select.classList.remove('is-open'); select.querySelector('.custom-select__btn')?.setAttribute('aria-expanded','false'); });
  });
}

function applyTheme(){ document.documentElement.dataset.theme = state.theme; const btn=$('#themeToggle'); if(btn) btn.textContent = state.theme === 'dark' ? '☀️' : '🌙'; }
function applyLanguage(){
  localStorage.setItem('moe_lang', state.lang);
  document.documentElement.lang = state.lang;
  const t = txt();
  setCustomSelect('languageSelect', state.lang, state.lang === 'es' ? 'ES' : 'EN');
  $('.topbar__pill') && ($('.topbar__pill').textContent = t.topPill);
  $('.topbar__text') && ($('.topbar__text').textContent = t.topText);
  $('#searchInput')?.setAttribute('placeholder', t.search);
  $('.cart__text') && ($('.cart__text').textContent = t.cart);
  const navLinks = $$('.nav a'); if(navLinks[0]) navLinks[0].textContent=t.benefits; if(navLinks[1]) navLinks[1].textContent=t.catalog; if(navLinks[2]) navLinks[2].textContent=t.contact;
  $('.kicker') && ($('.kicker').textContent = t.kicker); $('.hero h1') && ($('.hero h1').textContent = t.title); $('.lead') && ($('.lead').textContent = t.lead);
  $('.hero__cta .btn--primary') && ($('.hero__cta .btn--primary').textContent = t.ctaCatalog); $('#openCartHero') && ($('#openCartHero').textContent = t.ctaCart);
  const chips = $$('.hero__chips .chip'); if(chips[0]) chips[0].textContent=t.chip1; if(chips[1]) chips[1].textContent=t.chip2; if(chips[2]) chips[2].textContent=t.chip3;
  $('.heroCard__badge') && ($('.heroCard__badge').textContent=t.featured); $('.heroCard__meta .muted') && ($('.heroCard__meta .muted').textContent=t.featuredDesc); $('.heroCard__price .muted') && ($('.heroCard__price .muted').textContent=`${t.stock}: 6`); $('.heroCard .btn--wide') && ($('.heroCard .btn--wide').textContent=t.addCart);
  $('.membership-banner__tag') && ($('.membership-banner__tag').textContent=t.benefitTag); $('.membership-banner__info h2') && ($('.membership-banner__info h2').textContent=t.benefitTitle); $('.membership-banner__info p') && ($('.membership-banner__info p').textContent=t.benefitLead); $('.membership-banner__actions .btn--primary') && ($('.membership-banner__actions .btn--primary').textContent=t.benefitBuy); $('#openCartBenefits') && ($('#openCartBenefits').textContent=t.ctaCart);
  $('#catalogo h2') && ($('#catalogo h2').textContent=t.catalogTitle); $('#catalogo .section__head .muted') && ($('#catalogo .section__head .muted').textContent=t.catalogLead); $$('.filters .pill').forEach((p,i)=>{ if(t.filters[i]) p.textContent=t.filters[i]; });
  $('#emptyState strong') && ($('#emptyState strong').textContent=t.emptyTitle); $('#emptyState .muted') && ($('#emptyState .muted').textContent=t.emptyLead); $('#resetBtn') && ($('#resetBtn').textContent=t.reset);
  $('.drawer__head h2') && ($('.drawer__head h2').textContent=t.drawerTitle); $('.drawer__head .muted') && ($('.drawer__head .muted').textContent=t.drawerLead);
  const rows = $$('.cart-summary .summary-row span'); if(rows[0]) rows[0].textContent=t.selected; if(rows[1]) rows[1].textContent=t.subtotal; if(rows[2]) rows[2].textContent=t.shipping; if(rows[3]) rows[3].textContent=t.total;
  $('.checkout-form h3') && ($('.checkout-form h3').textContent=t.checkoutTitle); $('#buyerName')?.setAttribute('placeholder',t.buyerName); $('#buyerEmail')?.setAttribute('placeholder',t.buyerEmail);
  $('#cardNumber')?.setAttribute('placeholder',t.cardNumber); $('#cardExpiry')?.setAttribute('placeholder',t.cardExpiry); $('#cardCvv')?.setAttribute('placeholder',t.cardCvv); $('#paypalEmail')?.setAttribute('placeholder',t.paypalEmail);
  const optionButtons = $$('[data-custom-select="paymentMethod"] [data-value]'); optionButtons.forEach((b,i)=>{ if(t.paymentOptions[i]) b.textContent=t.paymentOptions[i]; });
  const paymentValue = $('#paymentMethod')?.value || ''; const idx = ['cod','credit','debit','paypal'].indexOf(paymentValue); setCustomSelect('paymentMethod', paymentValue, idx >= 0 ? t.paymentOptions[idx] : t.paymentPlaceholder);
  $('#checkoutForm button[type="submit"]') && ($('#checkoutForm button[type="submit"]').textContent=t.checkoutBtn); $('#clearCartBtn') && ($('#clearCartBtn').textContent=t.clearBtn); $('.checkout-form .muted.small:last-child') && ($('.checkout-form .muted.small:last-child').textContent=t.demo);
  $('#contacto h2') && ($('#contacto h2').textContent=t.contactTitle); $('#contacto .section__head .muted') && ($('#contacto .section__head .muted').textContent=t.contactLead); $('#contactForm input[type="text"]')?.setAttribute('placeholder',t.contactName); $('#contactForm input[type="email"]')?.setAttribute('placeholder',t.contactEmail); $('#contactForm textarea')?.setAttribute('placeholder',t.contactMsg); $('#contactForm button[type="submit"]') && ($('#contactForm button[type="submit"]').textContent=t.send); $('#contactForm .muted.small') && ($('#contactForm .muted.small').textContent=t.formDemo);
  $('.contact__card h3') && ($('.contact__card h3').textContent=t.shortcuts); const lis=$$('.contact__card .list li'); if(lis[0]) lis[0].innerHTML=`<span>📍</span> ${t.location}`; if(lis[1]) lis[1].innerHTML=`<span>⏱️</span> ${t.hours}`; if(lis[2]) lis[2].innerHTML=`<span>💳</span> ${t.payTypes}`;
  $('.footer .muted') && ($('.footer .muted').textContent=t.footerText); const hs=$$('.footer h4'); if(hs[0]) hs[0].textContent=t.sections; if(hs[1]) hs[1].textContent=t.social; const fl=$$('.footer a'); if(fl[0]) fl[0].textContent=t.catalog; if(fl[1]) fl[1].textContent=t.contact;
  updateCardBrand(); renderProducts(); renderCart();
}

function detectCardBrand(number){
  const n = number.replace(/\D/g,'');
  if(/^4\d{12}(\d{3})?(\d{3})?$/.test(n)) return 'Visa';
  if(/^(5[1-5]\d{14}|2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12})$/.test(n)) return 'Mastercard';
  if(/^3[47]\d{13}$/.test(n)) return 'American Express';
  if(/^3(?:0[0-5]|[68]\d)\d{11}$/.test(n)) return 'Diners Club';
  if(/^6(?:011|5\d{2})\d{12}$/.test(n)) return 'Discover';
  return n.length ? 'Unknown' : '';
}
function luhnCheck(number){
  const digits=number.replace(/\D/g,''); if(digits.length < 13) return false;
  let sum=0, dbl=false; for(let i=digits.length-1;i>=0;i--){ let d=Number(digits[i]); if(dbl){ d*=2; if(d>9) d-=9; } sum+=d; dbl=!dbl; }
  return sum % 10 === 0;
}
function validExpiry(value){
  const m=value.match(/^(\d{2})\/?(\d{2})$/); if(!m) return false;
  const month=Number(m[1]), year=2000+Number(m[2]); if(month<1 || month>12) return false;
  const expiry = new Date(year, month); const now = new Date(); return expiry > new Date(now.getFullYear(), now.getMonth());
}
function updatePaymentFields(){
  const method=$('#paymentMethod')?.value || ''; const isCard=method==='credit'||method==='debit'; const isPaypal=method==='paypal';
  $('#cardFields') && ($('#cardFields').hidden=!isCard); $('#paypalFields') && ($('#paypalFields').hidden=!isPaypal);
  ['cardNumber','cardExpiry','cardCvv'].forEach(id => { const el=document.getElementById(id); if(el) el.required=isCard; });
  const paypal=$('#paypalEmail'); if(paypal) paypal.required=isPaypal;
  if(!isCard && $('#cardPreview')) $('#cardPreview').hidden = true;
  updateCardBrand();
}
function updateCardBrand(){
  const number=$('#cardNumber')?.value || '';
  const digits = number.replace(/\D/g,'');
  const brand=detectCardBrand(number);
  const ok=luhnCheck(number);
  const label=$('#cardBrand');
  const preview=$('#cardPreview');
  const shown = brand === 'Unknown' ? txt().unknown : (brand || txt().noDetect);
  if(label) label.textContent = `${txt().cardType}: ${shown}${digits.length >= 13 ? (ok ? ` · ${txt().validNumber}` : ` · ${txt().invalidNumber}`) : ''}`;
  if(preview){
    if(digits.length >= 4){
      preview.hidden = false;
      preview.innerHTML = `<strong>${txt().cardPreview}:</strong> ${shown} · ${txt().first4}: ${digits.slice(0,4)}`;
    } else {
      preview.hidden = true;
      preview.textContent = '';
    }
  }
}
function checkout(e){
  e.preventDefault(); const totalData=totals(); if(!totalData.selected.length) return showToast(txt().chooseOne);
  const method=$('#paymentMethod').value; if(!method) return showToast(txt().chooseMethod);
  const isCard=method==='credit'||method==='debit'; const isPaypal=method==='paypal';
  if(isCard){
    const cardNumber=$('#cardNumber')?.value||'', expiry=$('#cardExpiry')?.value||'', cvv=$('#cardCvv')?.value||'', brand=detectCardBrand(cardNumber);
    const cvvOk = brand === 'American Express' ? /^\d{4}$/.test(cvv) : /^\d{3}$/.test(cvv);
    if(!luhnCheck(cardNumber) || brand==='Unknown') return showToast(txt().cardInvalid);
    if(!validExpiry(expiry)) return showToast(txt().expiryInvalid);
    if(!cvvOk) return showToast(txt().cvvInvalid);
  }
  if(isPaypal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#paypalEmail')?.value || '')) return showToast(txt().paypalInvalid);
  const buyer=$('#buyerName').value.trim();
  const email=$('#buyerEmail').value.trim();
  const summary=totalData.selected.map(item => `${item.qty}x ${item.product.name}`).join(', ');
  let cardBrand = null;
  let cardFirst4 = null;
  if(isCard){
    const digits = ($('#cardNumber')?.value || '').replace(/\D/g,'');
    cardBrand = detectCardBrand(digits);
    cardFirst4 = digits.slice(0,4);
  }
  const methodLabel = methodLabelByValue(method);
  const sale = createSaleRecord({
    buyer,
    email,
    method,
    methodLabel,
    cardBrand: cardBrand && cardBrand !== 'Unknown' ? cardBrand : null,
    cardFirst4,
    selected: totalData.selected,
    subtotal: totalData.subtotal,
    shipping: totalData.shipping,
    total: totalData.total
  });
  totalData.selected.forEach(item => delete state.cart[item.product.id]); saveCart(); renderCart(); e.target.reset(); setCustomSelect('paymentMethod','',txt().paymentPlaceholder); updatePaymentFields();
  showToast(state.lang === 'en' ? `Sale ${sale.id} registered: ${buyer} paid ${formatMoney(totalData.total)} with ${methodLabel}.` : `Venta ${sale.id} registrada: ${buyer} pagó ${formatMoney(totalData.total)} con ${methodLabel}.`);
}

document.addEventListener('DOMContentLoaded', () => {
  seedDB();
  applyTheme(); initCustomSelects(); setCustomSelect('currencySelect', state.currency, state.currency); setCustomSelect('languageSelect', state.lang, state.lang === 'es' ? 'ES' : 'EN'); applyLanguage(); renderProducts(); renderCart(); loadRate();
  $$('.pill').forEach(pill => pill.addEventListener('click', () => { state.activeFilter = pill.dataset.filter || 'all'; $$('.pill').forEach(p => p.classList.toggle('is-active', p === pill)); renderProducts(); }));
  $('#searchInput')?.addEventListener('input', renderProducts);
  $('#resetBtn')?.addEventListener('click', () => { state.activeFilter='all'; $('#searchInput').value=''; $$('.pill').forEach(p => p.classList.toggle('is-active', p.dataset.filter==='all')); renderProducts(); });
  $('#currencySelect')?.addEventListener('change', e => { state.currency=e.target.value; saveCurrency(); setCustomSelect('currencySelect', state.currency, state.currency); renderProducts(); renderCart(); });
  $('#languageSelect')?.addEventListener('change', e => { state.lang=e.target.value || 'es'; applyLanguage(); loadRate(); });
  $('#themeToggle')?.addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('moe_theme', state.theme); applyTheme(); });
  $('#paymentMethod')?.addEventListener('change', updatePaymentFields); $('#cardNumber')?.addEventListener('input', updateCardBrand);
  $('#cardExpiry')?.addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g,'').slice(0,4).replace(/(\d{2})(\d)/,'$1/$2'); });
  $('#cardCvv')?.addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g,'').slice(0,4); });
  document.body.addEventListener('click', e => {
    const addBtn=e.target.closest('[data-add-product]'), detailsBtn=e.target.closest('[data-open-details]'), closeDetailsBtn=e.target.closest('[data-close-details]'), removeBtn=e.target.closest('[data-remove-cart]'), minusBtn=e.target.closest('[data-qty-minus]'), plusBtn=e.target.closest('[data-qty-plus]');
    if(addBtn) return addToCart(addBtn.dataset.addProduct); if(detailsBtn) return openDetails(detailsBtn.dataset.openDetails); if(closeDetailsBtn) return closeDetails(); if(removeBtn) return removeFromCart(removeBtn.dataset.removeCart); if(minusBtn) return setQty(minusBtn.dataset.qtyMinus, state.cart[minusBtn.dataset.qtyMinus].qty - 1); if(plusBtn) return setQty(plusBtn.dataset.qtyPlus, state.cart[plusBtn.dataset.qtyPlus].qty + 1);
  });
  document.body.addEventListener('change', e => { if(e.target.matches('[data-select-cart]')) setSelected(e.target.dataset.selectCart, e.target.checked); if(e.target.matches('[data-qty-input]')) setQty(e.target.dataset.qtyInput, e.target.value); });
  $('#cartBtn')?.addEventListener('click', openCart); $('#openCartHero')?.addEventListener('click', openCart); $('#openCartBenefits')?.addEventListener('click', openCart); $('#closeCartBtn')?.addEventListener('click', closeCart); $('#cartDrawer')?.addEventListener('click', e => { if(e.target.id === 'cartDrawer') closeCart(); }); $('#detailsModal')?.addEventListener('click', e => { if(e.target.id === 'detailsModal') closeDetails(); });
  $('#clearCartBtn')?.addEventListener('click', () => { state.cart = {}; saveCart(); renderCart(); showToast(txt().cartEmptied); });
  $('#checkoutForm')?.addEventListener('submit', checkout); $('#contactForm')?.addEventListener('submit', e => { e.preventDefault(); showToast(txt().messageReady); e.target.reset(); });
});
