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

// Global Page Search Filter Logic
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const counter = document.getElementById('search-counter');
  const mainWrapper = document.querySelector('.main-wrapper .container');

  if (!searchInput) return;

  // Create no-results element dynamically if it doesn't exist
  let noResultsEl = document.getElementById('no-results-box');
  if (!noResultsEl && mainWrapper) {
    noResultsEl = document.createElement('div');
    noResultsEl.id = 'no-results-box';
    noResultsEl.className = 'no-results-box';
    noResultsEl.style.display = 'none';
    noResultsEl.innerHTML = `
      <h3>Tidak ditemukan hasil pencarian</h3>
      <p id="no-results-text">Coba kata kunci lain seperti 'LHO', 'jam', 'stempel', 'plang', 'laporan', atau 'buku'.</p>
    `;
    mainWrapper.appendChild(noResultsEl);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      performSearch('');
      searchInput.focus();
    });
  }

  searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });

  function performSearch(rawQuery) {
    const query = rawQuery.toLowerCase().trim();

    if (clearBtn) {
      clearBtn.style.display = query ? 'block' : 'none';
    }

    if (!query) {
      // Restore all sections and elements to visible default state
      document.querySelectorAll('.section-block').forEach(sec => sec.style.display = '');
      document.querySelectorAll('.gallery-card').forEach(card => card.style.display = 'flex');
      document.querySelectorAll('#ref-table-body tr').forEach(row => row.style.display = '');
      document.querySelectorAll('.custom-table tbody tr').forEach(row => row.style.display = '');
      document.querySelectorAll('.timeline-card').forEach(card => card.style.display = '');
      document.querySelectorAll('.lho-card').forEach(card => card.style.display = '');
      document.querySelectorAll('.callout').forEach(c => c.style.display = '');

      if (counter) {
        counter.style.display = 'none';
        counter.textContent = '';
      }
      if (noResultsEl) {
        noResultsEl.style.display = 'none';
      }
      removeHighlights();
      return;
    }

    let matchCount = 0;
    removeHighlights();

    // 1. Filter Gallery Cards
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
      const docId = parseInt(card.dataset.id);
      const doc = DOC_ACUAN.find(d => d.id === docId);
      if (doc) {
        const match = doc.title.toLowerCase().includes(query) || 
                      doc.tag.toLowerCase().includes(query) || 
                      doc.desc.toLowerCase().includes(query) ||
                      doc.category.toLowerCase().includes(query) ||
                      (doc.rules && doc.rules.some(r => r.toLowerCase().includes(query)));
        card.style.display = match ? 'flex' : 'none';
        if (match) matchCount++;
      }
    });

    // 2. Filter Acuan Reference Table Rows
    const refRows = document.querySelectorAll('#ref-table-body tr');
    refRows.forEach((row, idx) => {
      const doc = DOC_ACUAN[idx];
      if (doc) {
        const match = doc.title.toLowerCase().includes(query) || 
                      doc.tag.toLowerCase().includes(query) || 
                      doc.desc.toLowerCase().includes(query) ||
                      doc.category.toLowerCase().includes(query) ||
                      (doc.rules && doc.rules.some(r => r.toLowerCase().includes(query)));
        row.style.display = match ? '' : 'none';
        if (match) matchCount++;
      }
    });

    // 3. Filter Section Blocks & All Content Cards/Tables/Callouts
    const sections = document.querySelectorAll('.section-block');
    sections.forEach(section => {
      let sectionMatches = false;
      const secId = section.id;

      if (secId === 'daftar-acuan') {
        const visibleRefRows = Array.from(refRows).filter(r => r.style.display !== 'none');
        sectionMatches = visibleRefRows.length > 0;
      } else if (secId === 'galeri-dokumen') {
        const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
        const callouts = section.querySelectorAll('.callout');
        let calloutMatch = false;
        callouts.forEach(c => {
          if (c.textContent.toLowerCase().includes(query)) {
            c.style.display = '';
            calloutMatch = true;
            matchCount++;
          } else {
            c.style.display = 'none';
          }
        });
        sectionMatches = visibleCards.length > 0 || calloutMatch;
      } else {
        const subTables = section.querySelectorAll('.custom-table tbody tr');
        const subTimelineCards = section.querySelectorAll('.timeline-card');
        const subLhoCards = section.querySelectorAll('.lho-card');
        const subCallouts = section.querySelectorAll('.callout');

        let subItemMatchCount = 0;

        subTables.forEach(row => {
          if (row.textContent.toLowerCase().includes(query)) {
            row.style.display = '';
            subItemMatchCount++;
          } else {
            row.style.display = 'none';
          }
        });

        subTimelineCards.forEach(card => {
          if (card.textContent.toLowerCase().includes(query)) {
            card.style.display = '';
            subItemMatchCount++;
          } else {
            card.style.display = 'none';
          }
        });

        subLhoCards.forEach(card => {
          if (card.textContent.toLowerCase().includes(query)) {
            card.style.display = '';
            subItemMatchCount++;
          } else {
            card.style.display = 'none';
          }
        });

        subCallouts.forEach(callout => {
          if (callout.textContent.toLowerCase().includes(query)) {
            callout.style.display = '';
            subItemMatchCount++;
          } else {
            callout.style.display = 'none';
          }
        });

        const sectionTitle = section.querySelector('.section-title');
        const titleMatch = sectionTitle && sectionTitle.textContent.toLowerCase().includes(query);

        if (titleMatch) {
          sectionMatches = true;
          matchCount++;
          subTables.forEach(r => r.style.display = '');
          subTimelineCards.forEach(c => c.style.display = '');
          subLhoCards.forEach(c => c.style.display = '');
          subCallouts.forEach(c => c.style.display = '');
        } else if (subItemMatchCount > 0) {
          sectionMatches = true;
          matchCount += subItemMatchCount;
        } else if (section.textContent.toLowerCase().includes(query)) {
          sectionMatches = true;
          matchCount++;
        }
      }

      section.style.display = sectionMatches ? '' : 'none';
    });

    // Highlight text matches in active sections
    highlightQueryMatches(query);

    // Update Live Counter & Empty State
    if (counter) {
      counter.style.display = 'block';
      counter.textContent = matchCount > 0 
        ? `Ditemukan ${matchCount} item/bagian yang sesuai dengan "${rawQuery}"`
        : `Tidak ada hasil untuk "${rawQuery}"`;
    }

    if (noResultsEl) {
      if (matchCount === 0) {
        noResultsEl.style.display = 'block';
        const txt = document.getElementById('no-results-text');
        if (txt) txt.textContent = `Tidak ditemukan kata kunci "${rawQuery}". Silakan coba kata kunci lain seperti 'LHO', 'jam', 'stempel', 'plang', 'laporan', atau 'buku'.`;
      } else {
        noResultsEl.style.display = 'none';
      }
    }
  }
}

function removeHighlights() {
  const highlights = document.querySelectorAll('mark.search-highlight');
  highlights.forEach(mark => {
    const parent = mark.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    }
  });
}

function highlightQueryMatches(query) {
  if (!query || query.length < 2) return;
  const searchableElements = document.querySelectorAll('.section-block:not([style*="display: none"]) p, .section-block:not([style*="display: none"]) li, .section-block:not([style*="display: none"]) td, .section-block:not([style*="display: none"]) .timeline-title, .section-block:not([style*="display: none"]) .lho-card-title, .section-block:not([style*="display: none"]) .gallery-card-title');

  searchableElements.forEach(el => {
    if (el.children.length > 3) return;
    const text = el.textContent;
    const lowerText = text.toLowerCase();
    if (lowerText.includes(query)) {
      const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
      if (!el.querySelector('input') && !el.querySelector('button') && !el.querySelector('svg')) {
        el.innerHTML = text.replace(regex, '<mark class="search-highlight">$1</mark>');
      }
    }
  });
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
