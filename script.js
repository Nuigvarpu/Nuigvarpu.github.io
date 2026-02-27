
document.addEventListener("DOMContentLoaded", () => {
  const pills = Array.from(document.querySelectorAll("[data-filter]"));
  const grid = document.getElementById("productGrid");
  const cards = Array.from(grid?.querySelectorAll(".producto") ?? []);
  const searchInput = document.getElementById("searchInput");
  const emptyState = document.getElementById("emptyState");
  const resetBtn = document.getElementById("resetBtn");

  const cartCount = document.getElementById("cartCount");
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  const contactForm = document.getElementById("contactForm");

  let activeFilter = "all";
  let cartItems = 0;
  let toastTimer = null;

  // Fallback image (SVG data URI) if /Img files are missing
  const FALLBACK_IMG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='720' height='520'>
        <defs>
          <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
            <stop offset='0' stop-color='#ffd1ea'/>
            <stop offset='0.55' stop-color='#e6ddff'/>
            <stop offset='1' stop-color='#d6f6ff'/>
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#g)'/>
        <circle cx='125' cy='115' r='58' fill='rgba(255,255,255,.55)'/>
        <circle cx='625' cy='95' r='68' fill='rgba(255,255,255,.45)'/>
        <rect x='90' y='230' width='540' height='200' rx='24' fill='rgba(255,255,255,.65)'/>
        <text x='50%' y='56%' text-anchor='middle' font-family='system-ui,Segoe UI' font-size='28' fill='rgba(18,19,26,.78)'>
          Imagen no incluida
        </text>
        <text x='50%' y='64%' text-anchor='middle' font-family='system-ui,Segoe UI' font-size='16' fill='rgba(18,19,26,.55)'>
          Pon tus .webp en /Img
        </text>
      </svg>
    `);

  function normalize(str) {
    return (str ?? "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  }

  function setActivePill(filter) {
    pills.forEach((p) => p.classList.toggle("is-active", p.dataset.filter === filter));
  }

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 1700);
  }

  function updateCartCount() {
    if (!cartCount) return;
    cartCount.textContent = String(cartItems);
    cartCount.setAttribute("aria-label", `${cartItems} artículos`);
  }

  function applyFilters() {
    const q = normalize(searchInput?.value);
    let visible = 0;

    cards.forEach((card) => {
      const category = card.dataset.category;
      const name = normalize(card.dataset.name);

      const matchCategory = activeFilter === "all" || category === activeFilter;
      const matchQuery = !q || name.includes(q);

      const show = matchCategory && matchQuery;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });

    if (emptyState) emptyState.hidden = visible !== 0;
  }

  // Swap broken images for fallback
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = "1";
      img.src = FALLBACK_IMG;
    });
  });

  // Category pills
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      activeFilter = pill.dataset.filter || "all";
      setActivePill(activeFilter);
      applyFilters();
    });
  });

  // Search
  searchInput?.addEventListener("input", applyFilters);

  // Reset
  resetBtn?.addEventListener("click", () => {
    activeFilter = "all";
    setActivePill(activeFilter);
    if (searchInput) searchInput.value = "";
    applyFilters();
  });

  // Add to cart buttons
  document.body.addEventListener("click", (e) => {
    const btn = e.target?.closest?.("[data-add-to-cart]");
    if (!btn) return;

    const name = btn.getAttribute("data-name") || "Producto";
    const price = btn.getAttribute("data-price");

    cartItems += 1;
    updateCartCount();
    showToast(price ? `Agregado: ${name} ($${price})` : `Agregado: ${name}`);
  });

  // Contact form (demo)
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Mensaje listo (demo). Conecta un backend para enviar.");
    contactForm.reset();
  });

  // Init
  updateCartCount();
  applyFilters();
});
