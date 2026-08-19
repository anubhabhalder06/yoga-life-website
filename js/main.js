/* main.js v2 */

/* ===== LANGUAGE TOGGLE ===== */
(function() {
  var STORAGE_KEY = 'yogalife-lang';
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function t(key) {
    var dict = TRANSLATIONS[currentLang];
    return (dict && dict[key] !== undefined) ? dict[key] : ((TRANSLATIONS['en'][key]) || key);
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });
    document.documentElement.lang = currentLang === 'bn' ? 'bn' : 'en';
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { setLang(btn.getAttribute('data-lang')); });
    });
    applyTranslations();
  });
})();

/* ===== HEADER ===== */
document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('site-header');
  if (!header) return;

  var heroSection = document.querySelector('.hero');
  var isHomePage = !!heroSection;

  /* On inner pages: immediately show scrolled (frosted) header */
  if (!isHomePage) {
    header.classList.add('scrolled');
  }

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      /* Only remove scrolled on home page (where hero provides dark bg) */
      if (isHomePage) {
        header.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hero dark mode â€” home only */
  if (isHomePage) {
    header.classList.add('hero-dark');
    var heroObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        header.classList.toggle('hero-dark', entry.isIntersecting);
      });
    }, { threshold: 0.01 });
    heroObserver.observe(heroSection);
  }

  /* ===== MOBILE NAV ===== */
  var hamburger = document.querySelector('.nav-hamburger');
  var drawer = document.querySelector('.nav-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', function() {
      var isOpen = drawer.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===== SCROLL REVEAL ===== */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(function(el) { observer.observe(el); });
  } else {
    revealEls.forEach(function(el) { el.classList.add('visible'); });
  }

  /* ===== TIMINGS TABS ===== */
  document.querySelectorAll('.timings-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var panel = tab.getAttribute('data-panel');
      /* Find sibling tabs â€” only affect tabs in the same container */
      var container = tab.closest('.timings-tabs');
      if (container) {
        container.querySelectorAll('.timings-tab').forEach(function(t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
      }
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      /* Hide all sibling panels */
      var panelContainer = tab.closest('section') || document;
      panelContainer.querySelectorAll('.timings-panel').forEach(function(p) { p.classList.remove('active'); });
      var target = document.getElementById(panel);
      if (target) target.classList.add('active');
    });
  });

  /* ===== ACTIVE NAV LINK ===== */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (!page) page = 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function(link) {
    var href = (link.getAttribute('href') || '').split('#')[0];
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ===== SCHEDULE DYNAMIC LOAD ===== */
  loadSchedule();
});

/* ===== SCHEDULE DATA ===== */
function loadSchedule() {
  var containers = document.querySelectorAll('[data-schedule]');
  if (!containers.length) return;

  fetch('data/schedule.json')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      containers.forEach(function(container) {
        var mode = container.getAttribute('data-schedule');
        var modeData = data[mode];
        if (!modeData) return;

        var slotBody = container.querySelector('.slot-table-body');
        if (slotBody) {
          slotBody.innerHTML = '';
          modeData.slots.forEach(function(slot) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + slot.time + '</td><td>' + slot.days + '</td>';
            slotBody.appendChild(tr);
          });
        }

        var pricingWrap = container.querySelector('.pricing-cards-wrap');
        if (pricingWrap) {
          pricingWrap.innerHTML = '';
          modeData.plans.forEach(function(plan) {
            var card = document.createElement('div');
            card.className = 'pricing-card';
            var sav = plan.savings ? '<span class="savings">' + plan.savings + '</span>' : '';
            card.innerHTML = '<p class="plan-name">' + plan.label + '</p><p class="price">&#8377;' + plan.price + sav + '</p><p class="price-period">per ' + plan.period + '</p>';
            pricingWrap.appendChild(card);
          });
        }
      });
    })
    .catch(function(e) { console.warn('schedule.json not loaded', e); });
}
