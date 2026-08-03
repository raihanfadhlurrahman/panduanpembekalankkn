/**
 * Main Application Logic - Panduan Pembekalan KKN UII Reguler Angkatan 73
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryGrid();
  initRefTable();
  initModal();
  initSearch();
  initNavScroll();
});

// Render Gallery Grid
function initGalleryGrid() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const eyeIconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

  container.innerHTML = DOC_ACUAN.map(doc => `
    <div class="gallery-card" data-id="${doc.id}" onclick="openDocModal(${doc.id})">
      <div class="gallery-img-wrapper">
        <img src="${doc.file}" alt="${doc.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Gambar+Acuan+${doc.tag}'" />
        <div class="gallery-overlay">
          ${eyeIconSvg} <span>Pratinjau Dokumen</span>
        </div>
      </div>
      <div class="gallery-info">
        <span class="gallery-tag">${doc.tag}</span>
        <div class="gallery-card-title">${doc.title}</div>
        <div class="gallery-card-desc">${doc.desc}</div>
      </div>
    </div>
  `).join('');
}

// Render Table Acuan
function initRefTable() {
  const tbody = document.getElementById('ref-table-body');
  if (!tbody) return;

  tbody.innerHTML = DOC_ACUAN.map((doc, idx) => `
    <tr onclick="openDocModal(${doc.id})" style="cursor: pointer;">
      <td style="text-align: center; font-weight: 600; color: #64748B;">${idx + 1}</td>
      <td><code class="tag-code">${doc.tag}</code></td>
      <td><strong>${doc.title}</strong><br><small style="color: #64748B;">${doc.desc}</small></td>
      <td><span class="badge badge-gold">${doc.category}</span></td>
    </tr>
  `).join('');
}

// Modal Lightbox Logic
function initModal() {
  const modal = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeDocModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDocModal();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDocModal();
  });
}

function openDocModal(docId) {
  const doc = DOC_ACUAN.find(d => d.id === docId);
  if (!doc) return;

  const modal = document.getElementById('modal-overlay');
  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const category = document.getElementById('modal-category');
  const desc = document.getElementById('modal-desc');
  const rulesList = document.getElementById('modal-rules');

  if (img) img.src = doc.file;
  if (title) title.textContent = doc.title;
  if (category) category.textContent = doc.category;
  if (desc) desc.textContent = doc.desc;
  
  if (rulesList) {
    rulesList.innerHTML = doc.rules.map(rule => `<li>${rule}</li>`).join('');
  }

  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDocModal() {
  const modal = document.getElementById('modal-overlay');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Search Filter Logic
function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    // Filter Cards
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
      const docId = parseInt(card.dataset.id);
      const doc = DOC_ACUAN.find(d => d.id === docId);
      if (doc) {
        const match = doc.title.toLowerCase().includes(query) || 
                      doc.tag.toLowerCase().includes(query) || 
                      doc.desc.toLowerCase().includes(query) ||
                      doc.category.toLowerCase().includes(query);
        card.style.display = match ? 'flex' : 'none';
      }
    });

    // Filter Table Rows
    const rows = document.querySelectorAll('#ref-table-body tr');
    rows.forEach((row, idx) => {
      const doc = DOC_ACUAN[idx];
      if (doc) {
        const match = doc.title.toLowerCase().includes(query) || 
                      doc.tag.toLowerCase().includes(query) || 
                      doc.desc.toLowerCase().includes(query) ||
                      doc.category.toLowerCase().includes(query);
        row.style.display = match ? '' : 'none';
      }
    });
  });
}

// Smooth Scroll & Active Nav Tabs
function initNavScroll() {
  const navLinks = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section-block');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
