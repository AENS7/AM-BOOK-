/* AM-Book | app.js : seluruh JavaScript dalam satu file.
   Dipakai oleh index.html, dashboard.html, dan reader.html.
   Bagian dashboard dan reader hanya aktif di halamannya masing-masing. */

/* ====================== TEMA ====================== */
/* ==========================================================
   AM-Book | theme.js
   Switch tema Terang / Sepia / Gelap.
   Disimpan di sessionStorage (bukan localStorage), sehingga
   localStorage tetap hanya berisi data Bookmark.
   ========================================================== */
(function () {
  const THEMES = ["light", "warm", "dark"];
  const KEY = "ambook-theme";
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-theme-btn]");

  function read() {
    try {
      const saved = sessionStorage.getItem(KEY);
      return THEMES.includes(saved) ? saved : "dark";
    } catch (e) {
      return "dark";
    }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.themeBtn === theme));
    });
    try {
      sessionStorage.setItem(KEY, theme);
    } catch (e) { /* abaikan jika penyimpanan diblokir */ }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.themeBtn));
  });

  apply(read());
})();

/* ====================== DATA BUKU ====================== */
/* ==========================================================
   AM-Book | books.js
   Data katalog. Setiap buku: id, judul, penulis, kategori,
   warna sampul, deskripsi, dan isi per halaman (array paragraf).
   Isi di bawah hanya contoh; ganti dengan koleksi Kakak.
   ========================================================== */
const BOOKS = [
  {
    id: "senja-kota-tua",
    title: "Islam Ala Prabowo",
    author: "Abdul Rahim",
    category: "Religius",
    color: "#7a2e2e",
    image: "images/islamprabowo.jpeg",
    pdf: "books/islam-ala-prabowo.pdf",
    description: "Buku Islam ala Prabowo: Cara Prabowo Subianto mengamalkan Ajaran Islam",
    pages: [
      ["prbw"]
      ["JavaScript adalah bahasa yang membuat halaman web bisa bereaksi. Tombol yang berubah warna, daftar yang bertambah, dan menu yang terbuka semuanya digerakkan olehnya."],
      ["Variabel adalah wadah bernama untuk menyimpan nilai. Gunakan const untuk nilai yang tidak berubah dan let untuk nilai yang akan diganti.", "Fungsi adalah blok perintah yang bisa dipanggil berulang kali, sehingga kode tidak perlu ditulis dua kali."],

    ]

  },
  {
    id: "dasar-javascript",
    title: "A Tale Of Two Cities",
    author: "Charles Dickens",
    category: "Novel",
    color: "#1f4e5f",
    image: "images/ataleof.png",
    pdf: "books/atale-of-2.pdf",
    description: "nilah masa terbaik, sekaligus masa terburuk. Zaman kebijaksanaan, juga zaman kebodohan.",
    pages: [
      ["JavaScript adalah bahasa yang membuat halaman web bisa bereaksi. Tombol yang berubah warna, daftar yang bertambah, dan menu yang terbuka semuanya digerakkan olehnya."],
      ["Variabel adalah wadah bernama untuk menyimpan nilai. Gunakan const untuk nilai yang tidak berubah dan let untuk nilai yang akan diganti.", "Fungsi adalah blok perintah yang bisa dipanggil berulang kali, sehingga kode tidak perlu ditulis dua kali."],
      ["Event  adalah kejadian di halaman, misalnya klik atau ketikan. Dengan addEventListener, kita menyuruh browser menjalankan sebuah fungsi saat kejadian itu muncul."]
    ]
  },
  {
    id: "sejarah-nusantara",
    title: "Pulang Pergi",
    author: "Tereliye",
    category: "Novel",
    color: "#6b4f1d",
    image: "images/pulangpergi.png",
    pdf: "books/Pulang-pergi.pdf",
    description: "Jika setiap manusia memiliki lima emosi, yaitu bahagia,sedih, takut, jijik, dan kemarahan, aku hanya memiliki empat emosi. Aku tidak punya rasa takut..",
    pages: [
      ["Jauh sebelum peta modern dibuat, kapal-kapal kayu sudah menyusuri perairan Nusantara. Mereka membawa rempah, kain, dan kabar dari pelabuhan ke pelabuhan."],
      ["Pelabuhan yang ramai tumbuh menjadi kota, dan kota yang makmur melahirkan kerajaan. Perdagangan menjadi cara paling awal bagi berbagai budaya untuk saling bertukar ilmu."],
      ["Jejak masa itu masih bisa dilihat pada candi, prasasti, dan naskah kuno yang dijaga hingga sekarang."]
    ]
  },
  {
    id: "kebun-kecil",
    title: "Manusia Setengah Salmon",
    author: "Raditya Dika",
    category: "Novel",
    color: "#35603a",
    image: "images/manusia-stgh-slmon.png",
    pdf: "books/manusia-setengah-salmon.pdf",
    description: "Manusia Setengah Salmon adalah karya Raditya Dika, judul ini terinspirasi dari filosopi ikan salmon yang harus berpindah-pindah tempat bagi kelangsungan hidupnya.",
    pages: [
      ["prbw"]
      ["JavaScript adalah bahasa yang membuat halaman web bisa bereaksi. Tombol yang berubah warna, daftar yang bertambah, dan menu yang terbuka semuanya digerakkan olehnya."],
      ["Variabel adalah wadah bernama untuk menyimpan nilai. Gunakan const untuk nilai yang tidak berubah dan let untuk nilai yang akan diganti.", "Fungsi adalah blok perintah yang bisa dipanggil berulang kali, sehingga kode tidak perlu ditulis dua kali."],

    ]
  },
  {
    id: "mengelola-waktu",
    title: "Automic Habits",
    author: "James Clear",
    category: "Pengetahuan",
    color: "#4b3a63",
    image: "images/atomic-habbit.png",
    pdf: "books/atomic-habbit.pdf",
    description: "Kebiasaan-kebiasaan kecil untuk menyelesaikan hal penting tanpa merasa kewalahan.",
    pages: [
      ["Waktu tidak bisa ditambah, tetapi bisa dipakai dengan lebih sadar. Mulailah dengan menuliskan tiga hal yang paling penting hari ini."],
      ["Bekerja dalam blok waktu pendek lalu beristirahat membantu otak tetap segar. Istirahat bukan kemalasan, melainkan bagian dari rencana."],
      ["Di akhir hari, luangkan lima menit untuk melihat apa yang sudah selesai. Rasa cukup sama pentingnya dengan rasa produktif."]
    ]
  },
  {
    id: "misteri-perpustakaan",
    title: "Laut Bercerita",
    author: "Leila.S",
    category: "Novel",
    color: "#2b2f3f",
    image: "images/lautbercerita.jpeg",
    pdf: "books/laut-bercerita.pdf",
    description: "hari ini, aku akan mati.Aku tak tahu apakah aku bisa bangkit..",
    pages: [
      ["Bu Sinta, penjaga perpustakaan, pertama kali menyadarinya pada hari Selasa. Buku bersampul biru itu seharusnya ada di rak ketiga, tetapi pagi itu ia ada di rak paling atas."],
      ["Mira, Dito, dan Yuda membuat jadwal ronda. Mereka membawa senter, roti, dan buku catatan kecil untuk mencatat setiap bunyi yang mencurigakan."],
      ["Tepat tengah malam, terdengar suara roda kecil bergulir pelan di lantai kayu."]
    ]
  },
  {
    id: "Jin Iprittt",
    title: "Dialog dengan Jin Muslim",
    author: "Muhammad Isa Dawud",
    category: "Horror",
    color: "#1674aa",
    image: "images/berdialog-jin-muslim.jpeg",
    pdf: "books/dialog-jin-muslim.pdf",
    description: "Perubahan kecil yang memberikan dampak besar",
    pages: [
      ["Bu Sinta, penjaga perpustakaan, pertama kali menyadarinya pada hari Selasa. Buku bersampul biru itu seharusnya ada di rak ketiga, tetapi pagi itu ia ada di rak paling atas."],
      ["Mira, Dito, dan Yuda membuat jadwal ronda. Mereka membawa senter, roti, dan buku catatan kecil untuk mencatat setiap bunyi yang mencurigakan."],
      ["Tepat tengah malam, terdengar suara roda kecil bergulir pelan di lantai kayu."]
    ]
  },
  {
    id: "kisah-tnh",
    title: "Kisah Tanah Jawa",
    author: "@kisahtanahjawa",
    category: "Horror",
    color: "#3d61f1",
    image: "images/kisah-tnh.png",
    pdf: "books/kisah-tanah-jawa.pdf",
    description: "Menceritakan Cerita Rakyat dan mitos di tanah jawa",
    pages: [
      ["Bu Sinta, penjaga perpustakaan, pertama kali menyadarinya pada hari Selasa. Buku bersampul biru itu seharusnya ada di rak ketiga, tetapi pagi itu ia ada di rak paling atas."],
      ["Mira, Dito, dan Yuda membuat jadwal ronda. Mereka membawa senter, roti, dan buku catatan kecil untuk mencatat setiap bunyi yang mencurigakan."],
      ["Tepat tengah malam, terdengar suara roda kecil bergulir pelan di lantai kayu."]
    ]
  }

];

function findBook(id) {
  return BOOKS.find((b) => b.id === id) || null;
}

/* ====================== BOOKMARK (localStorage) ====================== */
/* ==========================================================
   AM-Book | storage.js
   Satu-satunya key localStorage: "ambook-bookmarks".
   Bentuk data: { "<idBuku>": { page: <halamanTerakhir> } }
   Urutan key = urutan buku ditambahkan ke Bookmark.
   ========================================================== */
const BOOKMARK_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z" stroke-linejoin="round"/></svg>';

const Store = (function () {
  const KEY = "ambook-bookmarks";

  function load() {
    try {
      const data = JSON.parse(localStorage.getItem(KEY));
      return data && typeof data === "object" && !Array.isArray(data) ? data : {};
    } catch (e) {
      return {};
    }
  }

  function save(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) { /* penyimpanan penuh atau diblokir */ }
  }

  return {
    ids() { return Object.keys(load()); },
    count() { return Object.keys(load()).length; },
    has(id) { return id in load(); },

    add(id, page) {
      const data = load();
      if (!(id in data)) data[id] = { page: page || 1 };
      save(data);
    },

    remove(id) {
      const data = load();
      delete data[id];
      save(data);
    },

    /** Menambah jika belum ada, menghapus jika sudah ada. Mengembalikan status baru. */
    toggle(id, page) {
      if (this.has(id)) { this.remove(id); return false; }
      this.add(id, page);
      return true;
    },

    /** Halaman terakhir dibaca (hanya untuk buku yang di-bookmark). */
    getPage(id) {
      const entry = load()[id];
      return entry && Number.isInteger(entry.page) ? entry.page : 1;
    },

    setPage(id, page) {
      const data = load();
      if (id in data) {
        data[id].page = page;
        save(data);
      }
    }
  };
})();

/* ====================== DASHBOARD ====================== */
/* ==========================================================
   AM-Book | dashboard.js
   Navigasi antar tampilan, rak buku, katalog (cari + kategori),
   bookmark, dan modal detail buku.
   Bergantung pada: books.js, storage.js
   ========================================================== */
(function () {
  if (!document.getElementById("mainNav")) return; // hanya jalan di dashboard.html
  const $ = (sel) => document.querySelector(sel);

  /* ---------- Elemen ---------- */
  const views = document.querySelectorAll("[data-view]");
  const navLinks = $("#mainNav");
  const navToggle = $("#navToggle");
  const featuredShelf = $("#featuredShelf");
  const catalogShelf = $("#catalogShelf");
  const catalogEmpty = $("#catalogEmpty");
  const bookmarkShelf = $("#bookmarkShelf");
  const bookmarkEmpty = $("#bookmarkEmpty");
  const searchInput = $("#searchInput");
  const chipBox = $("#categoryChips");
  const badge = $("#bookmarkCount");

  const modal = $("#bookModal");
  const modalBookmark = $("#modalBookmark");
  let modalBookId = null;
  let lastFocus = null;

  const filter = { query: "", category: "Semua" };

  /* ---------- Navigasi tampilan ---------- */
  function showView(name) {
    const valid = [...views].map((v) => v.dataset.view);
    if (!valid.includes(name)) name = "beranda";

    views.forEach((v) => { v.hidden = v.dataset.view !== name; });
    document.querySelectorAll(".nav-links [data-view-link]").forEach((a) => {
      const active = a.dataset.viewLink === name;
      a.classList.toggle("active", active);
      if (active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    closeMenu();
    window.scrollTo(0, 0);
  }

  function closeMenu() {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("hashchange", () => showView(location.hash.slice(1)));

  /* ---------- Membuat kartu buku ---------- */
  function createBook(book) {
    const wrap = document.createElement("div");
    wrap.className = "book";

    const open = document.createElement("button");
    open.type = "button";
    open.className = "book-open";
    open.dataset.id = book.id;
    open.style.setProperty("--cover", book.color);
    if (book.image) {
      open.style.backgroundImage = `url("${book.image}")`;
      open.style.backgroundSize = "cover";
      open.style.backgroundPosition = "center";
      open.style.backgroundRepeat = "no-repeat";
    }
    open.setAttribute("aria-label", "Lihat detail " + book.title);

    if (!book.image) {
      const text = document.createElement("span");
      text.className = "book-cover-text";
      const title = document.createElement("span");
      title.className = "book-cover-title";
      title.textContent = book.title;
      const author = document.createElement("span");
      author.className = "book-cover-author";
      author.textContent = book.author;
      text.append(title, author);
      open.appendChild(text);
    }

    const mark = document.createElement("button");
    mark.type = "button";
    mark.className = "book-bookmark";
    mark.dataset.id = book.id;
    mark.innerHTML = BOOKMARK_ICON;

    wrap.append(open, mark);
    return wrap;
  }

  function fillShelf(shelf, list) {
    shelf.replaceChildren(...list.map(createBook));
  }

  /* ---------- Render ---------- */
  function renderFeatured() {
    fillShelf(featuredShelf, BOOKS.slice(0, 6));
  }

  function renderCatalog() {
    const q = filter.query.trim().toLowerCase();
    const list = BOOKS.filter((b) => {
      const okCat = filter.category === "Semua" || b.category === filter.category;
      const okQuery = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      return okCat && okQuery;
    });
    fillShelf(catalogShelf, list);
    catalogShelf.hidden = list.length === 0;
    catalogEmpty.hidden = list.length > 0;
    syncBookmarkState();
  }

  function renderBookmarks() {
    const list = Store.ids().map(findBook).filter(Boolean);
    fillShelf(bookmarkShelf, list);
    bookmarkShelf.hidden = list.length === 0;
    bookmarkEmpty.hidden = list.length > 0;
  }

  function renderChips() {
    const cats = ["Semua", ...new Set(BOOKS.map((b) => b.category))];
    chipBox.replaceChildren(...cats.map((cat) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = cat;
      chip.setAttribute("aria-pressed", String(cat === filter.category));
      chip.addEventListener("click", () => {
        filter.category = cat;
        chipBox.querySelectorAll(".chip").forEach((c) => {
          c.setAttribute("aria-pressed", String(c === chip));
        });
        renderCatalog();
      });
      return chip;
    }));
  }

  /* ---------- Sinkron status bookmark di semua tempat ---------- */
  function syncBookmarkState() {
    document.querySelectorAll(".book-bookmark").forEach((btn) => {
      const saved = Store.has(btn.dataset.id);
      const book = findBook(btn.dataset.id);
      btn.classList.toggle("is-saved", saved);
      btn.setAttribute("aria-pressed", String(saved));
      btn.setAttribute(
        "aria-label",
        (saved ? "Hapus dari Bookmark: " : "Tambah ke Bookmark: ") + book.title
      );
    });
    badge.textContent = Store.count();
    if (modalBookId) updateModalBookmark();
  }

  function toggleBookmark(id) {
    Store.toggle(id);
    renderBookmarks();
    syncBookmarkState();
  }

  /* ---------- Modal detail buku ---------- */
  function updateModalBookmark() {
    modalBookmark.textContent = Store.has(modalBookId)
      ? "Hapus dari Bookmark"
      : "Tambah ke Bookmark";
  }

  function openModal(id) {
    const book = findBook(id);
    if (!book) return;
    modalBookId = id;
    lastFocus = document.activeElement;

    $("#modalTitle").textContent = book.title;
    $("#modalAuthor").textContent = book.author;
    const metaEl = $("#modalMeta");
    if (book.pdf && typeof pdfjsLib !== "undefined") {
      metaEl.textContent = book.category + ", menghitung halaman...";
      pdfjsLib.getDocument({ url: book.pdf, disableWorker: true }).promise.then((pdf) => {
        if (modalBookId === book.id) {
          metaEl.textContent = book.category + ", " + pdf.numPages + " halaman";
        }
      }).catch(() => {
        metaEl.textContent = book.category + ", " + book.pages.length + " halaman";
      });
    } else {
      metaEl.textContent = book.category + ", " + book.pages.length + " halaman";
    }
    $("#modalDesc").textContent = book.description;
    const coverEl = $("#modalCover");
    if (book.image) {
      coverEl.style.background = `url("${book.image}") center / cover no-repeat`;
    } else {
      coverEl.style.background = "";
      coverEl.style.setProperty("--cover", book.color);
    }
    $("#modalRead").href = "reader.html?id=" + encodeURIComponent(book.id);
    updateModalBookmark();

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $("#modalClose").focus();
  }

  function closeModal() {
    modal.hidden = true;
    modalBookId = null;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
  modalBookmark.addEventListener("click", () => toggleBookmark(modalBookId));

  /* ---------- Klik pada rak (delegasi) ---------- */
  document.addEventListener("click", (e) => {
    const mark = e.target.closest(".book-bookmark");
    if (mark) { toggleBookmark(mark.dataset.id); return; }

    const open = e.target.closest(".book-open");
    if (open) openModal(open.dataset.id);
  });

  searchInput.addEventListener("input", () => {
    filter.query = searchInput.value;
    renderCatalog();
  });

  /* ---------- Mulai ---------- */
  $("#year").textContent = new Date().getFullYear();
  renderFeatured();
  renderChips();
  renderCatalog();
  renderBookmarks();
  syncBookmarkState();
  showView(location.hash.slice(1));
})();

/* ====================== READER + TIMER ====================== */
/* ==========================================================
   AM-Book | reader.js
   Halaman membaca + reading timer.
   - Timer jalan hanya saat membaca (tab terlihat, tanpa pop-up).
   - Setelah 2 jam: pop-up istirahat.
       Oke  -> halaman tersimpan, countdown 5 menit, bisa ke dashboard.
       Skip -> lanjut membaca, timer mulai dari 0.
   Tambahkan ?demo=1 di URL untuk uji cepat (10 detik).
   Bergantung pada: books.js, storage.js
   ========================================================== */
(function () {
  if (!document.getElementById("paper")) return; // hanya jalan di reader.html
  const $ = (sel) => document.querySelector(sel);
  const params = new URLSearchParams(location.search);
  const demo = params.get("demo") === "1";

  const READ_LIMIT = demo ? 10 : 2 * 60 * 60;
  const REST_TIME = demo ? 10 : 5 * 60;
  const REST_KEY = "ambook-rest-until";
  const AUTO_BOOKMARK_ON_BREAK = true;

  /* ---------- Buku ---------- */
  const book = findBook(params.get("id"));
  if (!book) {
    location.replace("dashboard.html#katalog");
    return;
  }

  const pageText = $("#pageText");
  const prevBtn = $("#prevPage");
  const nextBtn = $("#nextPage");
  const bookmarkBtn = $("#readerBookmark");
  const timerEl = $("#readTimer");
  const readerEl = $(".reader");
  const breakModal = $("#breakModal");
  const restModal = $("#restModal");

  let total = book.pages.length;
  let page = Math.min(Math.max(Store.getPage(book.id), 1), total);
  let pdfDoc = null;
  let isRenderingPDF = false;

  document.title = book.title + " | AM-Book";
  $("#readerTitle").textContent = book.title;
  $("#readerAuthor").textContent = book.author;
  $("#chapterTitle").textContent = book.title;
  $("#backBtn").href = "dashboard.html#" + (Store.has(book.id) ? "bookmark" : "katalog");
  bookmarkBtn.innerHTML = BOOKMARK_ICON;

  /* ---------- Tampilan halaman (Teks Biasa vs PDF) ---------- */
  /* ---------- Tampilan halaman (PDF Menyatu dengan Background & Tema Web) ---------- */
  function renderPage() {
    if (book.pdf && pdfDoc) {
      if (isRenderingPDF) return;
      isRenderingPDF = true;

      $("#chapterTitle").style.display = "none";

      pdfDoc.getPage(page).then((pdfPage) => {
        // 1. Naikkan ke scale 3.5 (Ultra HD) biar huruf tajam saat diperbesar 100%
        const viewport = pdfPage.getViewport({ scale: 3.5 });
        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        tempCanvas.width = viewport.width;
        tempCanvas.height = viewport.height;

        pdfPage.render({
          canvasContext: tempCtx,
          viewport: viewport
        }).promise.then(() => {
          const w = tempCanvas.width;
          const h = tempCanvas.height;
          const imgData = tempCtx.getImageData(0, 0, w, h);
          const data = imgData.data;

          const theme = document.documentElement.getAttribute("data-theme") || "dark";
          const isDark = theme === "dark";

          let minX = w, minY = h, maxX = 0, maxY = 0;
          let hasContent = false;

          if (page > 1) {
            for (let y = 0; y < h; y++) {
              for (let x = 0; x < w; x++) {
                const i = (y * w + x) * 4;
                const r = data[i], g = data[i + 1], b = data[i + 2];
                const brightness = (r + g + b) / 3;

                if (brightness > 240) {
                  // Hanya latar putih bersih yang transparan total
                  data[i + 3] = 0;
                } else {
                  hasContent = true;
                  if (x < minX) minX = x;
                  if (x > maxX) maxX = x;
                  if (y < minY) minY = y;
                  if (y > maxY) maxY = y;

                  // 2. Hitung kehalusan pinggiran huruf (anti-aliasing) biar gak bergerigi
                  const alpha = Math.min(255, Math.max(0, (240 - brightness) * 2.2));
                  data[i + 3] = alpha;

                  if (isDark) {
                    data[i] = 241;
                    data[i + 1] = 231;
                    data[i + 2] = 216;
                  } else {
                    data[i] = 40;
                    data[i + 1] = 32;
                    data[i + 2] = 24;
                  }
                }
              }
            }
            tempCtx.putImageData(imgData, 0, 0);
          }

          // Potong pinggiran kosong jika ada konten teks
          const pad = 24;
          const cropX = hasContent ? Math.max(0, minX - pad) : 0;
          const cropY = hasContent ? Math.max(0, minY - pad) : 0;
          const cropW = hasContent ? Math.min(w - cropX, maxX - minX + pad * 2) : w;
          const cropH = hasContent ? Math.min(h - cropY, maxY - minY + pad * 2) : h;

          pageText.innerHTML = '<canvas id="pdfCanvas" style="width:100%; height:auto; display:block;"></canvas>';
          const finalCanvas = document.getElementById("pdfCanvas");
          finalCanvas.width = cropW;
          finalCanvas.height = cropH;
          finalCanvas.getContext("2d").drawImage(
            tempCanvas,
            cropX, cropY, cropW, cropH,
            0, 0, cropW, cropH
          );

          isRenderingPDF = false;
        });
      });
    } else if (!book.pdf) {
      pageText.replaceChildren(...book.pages[page - 1].map((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        return p;
      }));
    }

    $("#pageInfo").textContent = "Halaman " + page + " dari " + total;
    prevBtn.disabled = page <= 1;
    nextBtn.disabled = page >= total;
    Store.setPage(book.id, page);
  }

  function goTo(n) {
    page = Math.min(Math.max(n, 1), total);
    renderPage();
    window.scrollTo(0, 0);
  }

  function renderBookmarkBtn() {
    const saved = Store.has(book.id);
    bookmarkBtn.setAttribute("aria-pressed", String(saved));
    bookmarkBtn.setAttribute("aria-label", saved ? "Hapus dari Bookmark" : "Tambah ke Bookmark");
    $("#backBtn").href = "dashboard.html#" + (saved ? "bookmark" : "katalog");
  }

  prevBtn.addEventListener("click", () => goTo(page - 1));
  nextBtn.addEventListener("click", () => goTo(page + 1));
  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => { if (book.pdf) renderPage(); });
  });
  bookmarkBtn.addEventListener("click", () => {
    Store.toggle(book.id, page);
    renderBookmarkBtn();
  });
  document.addEventListener("keydown", (e) => {
    if (state !== "reading") return;
    if (e.key === "ArrowLeft") goTo(page - 1);
    if (e.key === "ArrowRight") goTo(page + 1);
  });

  /* ---------- Reading timer ---------- */
  let state = "reading";
  let elapsed = 0;

  function pad(n) { return String(n).padStart(2, "0"); }
  function formatHMS(sec) {
    return pad(Math.floor(sec / 3600)) + ":" + pad(Math.floor((sec % 3600) / 60)) + ":" + pad(sec % 60);
  }
  function formatMS(sec) {
    return pad(Math.floor(sec / 60)) + ":" + pad(sec % 60);
  }

  function tick() {
    if (state !== "reading" || document.hidden) return;
    elapsed += 1;
    timerEl.textContent = formatHMS(elapsed);
    if (elapsed >= READ_LIMIT) showBreakPrompt();
  }

  function showBreakPrompt() {
    state = "break";
    breakModal.hidden = false;
    $("#breakOk").focus();
  }

  function resetTimer() {
    elapsed = 0;
    timerEl.textContent = formatHMS(0);
  }

  $("#breakSkip").addEventListener("click", () => {
    breakModal.hidden = true;
    resetTimer();
    state = "reading";
  });

  $("#breakOk").addEventListener("click", () => {
    if (AUTO_BOOKMARK_ON_BREAK) Store.add(book.id, page);
    Store.setPage(book.id, page);
    breakModal.hidden = true;
    startRest(Date.now() + REST_TIME * 1000);
  });

  /* ---------- Istirahat ---------- */
  let restInterval = null;

  function startRest(endTime) {
    state = "rest";
    try { sessionStorage.setItem(REST_KEY, String(endTime)); } catch (e) { }
    readerEl.hidden = true;
    restModal.hidden = false;
    $("#restDone").hidden = true;
    $("#restText").textContent = "Berdirilah, minum air, dan lemaskan mata.";
    $("#restTitle").textContent = "Waktu istirahat";

    const update = () => {
      const left = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      $("#restCountdown").textContent = formatMS(left);
      if (left === 0) finishRest();
    };
    clearInterval(restInterval);
    update();
    restInterval = setInterval(update, 1000);
  }

  function finishRest() {
    clearInterval(restInterval);
    try { sessionStorage.removeItem(REST_KEY); } catch (e) { }
    $("#restTitle").textContent = "Istirahat selesai";
    $("#restText").textContent = "Kamu sudah bisa melanjutkan membaca.";
    $("#restDone").hidden = false;
    $("#restDone").focus();
  }

  $("#restDone").addEventListener("click", () => {
    restModal.hidden = true;
    readerEl.hidden = false;
    resetTimer();
    state = "reading";
  });

  /* ---------- Mulai ---------- */
  renderBookmarkBtn();
  resetTimer();
  setInterval(tick, 1000);

  if (book.pdf && typeof pdfjsLib !== "undefined") {
    $("#pageInfo").textContent = "Memuat dokumen PDF...";

    pdfjsLib.getDocument({
      url: book.pdf,
      disableWorker: true
    }).promise.then((pdf) => {
      pdfDoc = pdf;
      total = pdf.numPages;
      page = Math.min(Math.max(Store.getPage(book.id), 1), total);
      renderPage();
    }).catch((err) => {
      pageText.innerHTML = "<p>Error: " + err.message + "</p>";
      console.error(err);
    });
  } else {
    renderPage();
  }

  let pending = 0;
  try { pending = Number(sessionStorage.getItem(REST_KEY)) || 0; } catch (e) { }
  if (pending > Date.now()) startRest(pending);
})();

// Gradasi bg edit.Rafly
const ambientBg = document.getElementById('ambient-bg');

document.addEventListener('mouseover', (e) => {
  const bookBtn = e.target.closest('.book-open');
  if (bookBtn && ambientBg) {
    const bgImg = bookBtn.style.backgroundImage;
    const bgColor = bookBtn.style.getPropertyValue('--cover');

    if (bgImg) {
      ambientBg.style.backgroundImage = bgImg;
      ambientBg.style.backgroundColor = 'transparent';
      ambientBg.classList.add('active');
    } else if (bgColor) {
      ambientBg.style.backgroundImage = 'none';
      ambientBg.style.backgroundColor = bgColor;
      ambientBg.classList.add('active');
    }
  }
});

document.addEventListener('mouseout', (e) => {
  const bookBtn = e.target.closest('.book-open');
  if (bookBtn && ambientBg) {
    if (!bookBtn.contains(e.relatedTarget)) {
      ambientBg.classList.remove('active');
    }
  }
});