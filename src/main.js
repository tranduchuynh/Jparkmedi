import './style.css';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import fullPricesData from './data/fullPrices.json';
import { CURRENCY_RATES, FEATURED_OFFERS, formatPrice } from './data/pricingConfig.js';

// Application State
const state = {
  currency: 'usd',
  activeModal: null,
};

// DOM ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initSwiperCarousels();
  initCurrencyConverter();
  initFaqAccordion();
  initCountdownTimer();
  initForms();
  initModals();
  initFloatingActions();
  renderFullPriceTable();
});

/* ---------------- Swiper Carousels (No dots pagination) ---------------- */
function initSwiperCarousels() {
  // 1. Patient Feedback Chat Screenshots Slider
  new Swiper('.feedback-swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 14,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.feedback-next',
      prevEl: '.feedback-prev',
    },
  });

  // 2. Before & After Cases Slider
  new Swiper('.before-after-swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 14,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.before-after-next',
      prevEl: '.before-after-prev',
    },
  });

  // 3. Clinical Facilities Slider
  new Swiper('.facilities-swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 14,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.facilities-next',
      prevEl: '.facilities-prev',
    },
  });
}

/* ---------------- Interactive Currency Converter ---------------- */
function initCurrencyConverter() {
  const curSelects = document.querySelectorAll('.cur-select, .abm-cur');
  curSelects.forEach(sel => {
    sel.addEventListener('change', (e) => {
      const selected = e.target.value.toLowerCase();
      state.currency = selected;
      updateAllPrices(selected);
      // sync all selects
      curSelects.forEach(s => s.value = selected);
    });
  });

  // initial update
  updateAllPrices(state.currency);
}

function updateAllPrices(currencyKey) {
  // 1. Section 10 Featured Offers Table
  document.querySelectorAll('.featured-price-row').forEach((row, idx) => {
    const offer = FEATURED_OFFERS[idx];
    if (!offer) return;
    const oldEl = row.querySelector('.old-price');
    const newEl = row.querySelector('.new-price');
    const fixedOld = currencyKey === 'aud' ? offer.oldAud : null;
    const fixedNew = currencyKey === 'aud' ? offer.abmediAud : null;
    if (oldEl) oldEl.textContent = formatPrice(offer.oldUsd, currencyKey, fixedOld);
    if (newEl) newEl.textContent = formatPrice(offer.abmediUsd, currencyKey, fixedNew);
  });

  // 2. Full Price List Modal Table
  document.querySelectorAll('.full-price-row').forEach(row => {
    const regUsd = parseFloat(row.getAttribute('data-reg-usd') || 0);
    const nowUsd = parseFloat(row.getAttribute('data-now-usd') || 0);
    const regEl = row.querySelector('.price-regular');
    const nowEl = row.querySelector('.price-now');
    if (regEl) regEl.textContent = formatPrice(regUsd, currencyKey);
    if (nowEl) nowEl.textContent = formatPrice(nowUsd, currencyKey);
  });
}

function renderFullPriceTable() {
  const container = document.getElementById('fullPriceTableBody');
  if (!container) return;

  let html = '';
  fullPricesData.forEach(cat => {
    html += `
      <tr class="abm-cat bg-ab-navy text-white font-bold text-xs uppercase tracking-wider">
        <td colspan="4" class="py-2.5 px-4 text-left font-serif">${cat.category}</td>
      </tr>
    `;
    cat.items.forEach((item, i) => {
      const isEven = i % 2 === 1;
      html += `
        <tr class="full-price-row ${isEven ? 'bg-[#faf6ee]' : 'bg-white'} border-b border-[#eee5d3] text-xs"
            data-reg-usd="${item.regularUsd}" data-now-usd="${item.priceUsd}">
          <td class="py-2.5 px-3 text-left font-medium text-gray-900">${item.service}</td>
          <td class="py-2.5 px-2 text-center text-gray-400 line-through price-regular">${formatPrice(item.regularUsd, state.currency)}</td>
          <td class="py-2.5 px-2 text-center font-bold text-ab-navy price-now">${formatPrice(item.priceUsd, state.currency)}</td>
          <td class="py-2.5 px-2 text-center font-bold text-ab-red">${item.save}</td>
        </tr>
      `;
    });
  });
  container.innerHTML = html;
}

/* ---------------- FAQ Accordion ---------------- */
function initFaqAccordion() {
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all other faqs
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.querySelector('.faq-content')?.classList.add('hidden');
          other.querySelector('.faq-icon')?.classList.remove('rotate-180');
        }
      });

      if (isOpen) {
        content.classList.add('hidden');
        icon?.classList.remove('rotate-180');
      } else {
        content.classList.remove('hidden');
        icon?.classList.add('rotate-180');
      }
    });
  });
}

/* ---------------- Countdown Timer (October 2026 Promo) ---------------- */
function initCountdownTimer() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMins');
  const secsEl = document.getElementById('countSecs');

  if (!daysEl) return;

  const targetDate = new Date('2026-10-31T23:59:59').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ---------------- Forms ---------------- */
function initForms() {
  document.querySelectorAll('.abmedi-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('input[name="name"]');
      const phoneInput = form.querySelector('input[name="phone"]');

      if (!nameInput?.value.trim()) {
        showToast('Please enter your name.', 'error');
        nameInput?.focus();
        return;
      }
      if (!phoneInput?.value.trim()) {
        showToast('Please enter your WhatsApp phone number.', 'error');
        phoneInput?.focus();
        return;
      }

      const successMsg = form.getAttribute('data-success') || 'Thank you! Our doctor will be in touch with you shortly!';
      showToast(successMsg, 'success');
      form.reset();

      const modal = form.closest('.modal-wrapper');
      if (modal) {
        closeModal(modal.id);
      }
    });
  });
}

/* ---------------- Modal Management with Smooth Zoom/Fade Animation ---------------- */
function initModals() {
  document.querySelectorAll('[data-modal-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      openModal(targetId);
    });
  });

  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(closer => {
    closer.addEventListener('click', () => {
      const modal = closer.closest('.modal-wrapper');
      if (modal) closeModal(modal.id);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeModal) {
      closeModal(state.activeModal);
    }
  });

  document.querySelectorAll('.zoomable-image').forEach(img => {
    img.addEventListener('click', () => {
      openImageModal(img.src);
    });
  });
}

export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  void modal.offsetWidth; // trigger reflow for smooth animation
  modal.classList.add('modal-active');
  state.activeModal = modalId;
  document.body.style.overflow = 'hidden';
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('modal-active');
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 260);
  state.activeModal = null;
  document.body.style.overflow = '';
}

function openImageModal(imgSrc) {
  const modal = document.getElementById('imageViewerModal');
  const imgEl = document.getElementById('imageViewerSrc');
  if (!modal || !imgEl) return;
  imgEl.src = imgSrc;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  void modal.offsetWidth;
  modal.classList.add('modal-active');
  state.activeModal = 'imageViewerModal';
  document.body.style.overflow = 'hidden';
}

/* ---------------- Floating Actions ---------------- */
function initFloatingActions() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', () => {
    if (scrollBtn) {
      if (window.scrollY > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'auto';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.pointerEvents = 'none';
      }
    }
  });
}

/* ---------------- Toast Notifications ---------------- */
function showToast(message, type = 'success') {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3.5 rounded-xl shadow-2xl text-xs sm:text-sm font-semibold transition-all duration-300 max-w-sm text-center';
    document.body.appendChild(toast);
  }

  if (type === 'success') {
    toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3.5 rounded-xl shadow-2xl text-xs sm:text-sm font-semibold transition-all duration-300 max-w-sm text-center bg-emerald-700 text-white border border-emerald-500';
  } else {
    toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3.5 rounded-xl shadow-2xl text-xs sm:text-sm font-semibold transition-all duration-300 max-w-sm text-center bg-rose-700 text-white border border-rose-500';
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, 0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, -10px)';
  }, 3500);
}
