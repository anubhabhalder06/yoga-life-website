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

  /* ===== HERO SLIDER ===== */
  var heroSlider = document.getElementById('hero-slider');
  if (heroSlider && typeof Swiper !== 'undefined') {
    new Swiper('#hero-slider', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true,
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

/* ===== HERO HEADLINE INTERACTION ===== */
document.addEventListener('DOMContentLoaded', function() {
  var headline = document.querySelector('.hero-headline');
  if (headline) {
    headline.addEventListener('mousemove', function(e) {
      var rect = headline.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      headline.style.setProperty('--mouse-x', x + 'px');
      headline.style.setProperty('--mouse-y', y + 'px');
    });
    headline.addEventListener('mouseleave', function() {
      headline.style.setProperty('--mouse-x', '-1000px');
      headline.style.setProperty('--mouse-y', '-1000px');
    });
  }
});

/* ===== DYNAMIC ISLAND NOTIFICATION ===== */
function initDynamicIsland() {
  // Remove old island if it exists (for hot reloads)
  var old = document.querySelector('.di-wrapper') || document.querySelector('.dynamic-island');
  if(old) old.remove();

  var island = document.createElement('div');
  island.className = 'dynamic-island';
  
  var lang = localStorage.getItem('yogalife-lang') || 'en';
  var idleTxt = lang === 'bn' ? 'যোগ দিন' : 'JOIN NOW';
  
  island.innerHTML = '<div class="di-idle" data-i18n="di.idle">' + idleTxt + '</div><div class="di-content"><div class="di-dot"></div><div class="di-text"></div></div>';
  
  // Create flex wrapper to perfectly center it in the available header gap
  var wrapper = document.createElement('div');
  wrapper.className = 'di-wrapper';
  wrapper.style.cssText = 'flex-grow: 1; display: flex; justify-content: center; position: relative; height: 100%; align-items: center; z-index: 9999; margin: 0 10px; min-width: 90px;';
  wrapper.appendChild(island);

  var navInner = document.querySelector('.nav-inner');
  if (navInner) {
    var navRight = navInner.querySelector('.nav-right');
    navInner.insertBefore(wrapper, navRight);
  } else {
    document.body.appendChild(wrapper);
  }

  var phrases = [
    { en: 'Limited Seats. <strong>Enroll!</strong>', bn: 'সীমিত আসন। <strong>ভর্তি হন!</strong>' },
    { en: 'New Classes <strong>Added</strong>', bn: 'নতুন ক্লাস <strong>যুক্ত</strong>' },
    { en: 'Book <strong>Free Trial</strong>', bn: '<strong>ফ্রি ট্রায়াল</strong> বুক করুন' },
    { en: 'Join <strong>Community</strong>', bn: '<strong>যোগ দিন</strong>' },
    { en: 'Find <strong>Inner Peace</strong>', bn: '<strong>শান্তি</strong> খুঁজুন' },
    { en: 'Morning Yoga <strong>6:30 AM</strong>', bn: 'মর্নিং যোগা <strong>৬:৩০</strong>' },
    { en: 'Boost <strong>Immunity</strong>', bn: '<strong>ইমিউনিটি</strong> বাড়ান' },
    { en: 'Zumba <strong>Sessions</strong>', bn: 'জুম্বা <strong>সেশন</strong>' },
    { en: 'Transform <strong>Life</strong>', bn: '<strong>জীবন</strong> বদলান' },
    { en: 'Guided <strong>Meditation</strong>', bn: '<strong>মেডিটেশন</strong>' },
    { en: 'Start <strong>Today</strong>', bn: '<strong>আজই</strong> শুরু করুন' }
  ];
  var currentPhraseIndex = 0;
  var showDuration = 4000; // Visible for 4 seconds
  
  function triggerIsland() {
    var navDrawer = document.getElementById('nav-drawer');
    var isMenuOpen = navDrawer && navDrawer.classList.contains('open');
    
    // Only trigger if at top of page and menu is not open
    if (window.scrollY < 50 && !isMenuOpen) {
      var curLang = localStorage.getItem('yogalife-lang') || 'en';
      var textEl = island.querySelector('.di-text');
      
      // Phrase 1 setup
      if (textEl) {
        textEl.style.width = 'max-content'; // force natural width for measurement
        textEl.innerHTML = phrases[currentPhraseIndex][curLang] || phrases[currentPhraseIndex]['en'];
        textEl.classList.remove('fade-out');
        
        var textW = textEl.scrollWidth;
        var padding = window.innerWidth < 768 ? 50 : 60;
        island.style.width = (textW + padding) + 'px';
        textEl.style.width = textW + 'px'; // lock width so flex doesn't squish it during transition
      }
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      
      // Expand Island
      island.classList.add('is-active');
      
      // Wait 3s, then crossfade to Phrase 2
      setTimeout(function() {
        if (textEl) textEl.classList.add('fade-out'); // Slide UP and blur out
        
        setTimeout(function() {
          // Jump text to bottom while invisible
          if (textEl) {
            textEl.classList.remove('fade-out');
            textEl.classList.add('fade-in-prep');
            textEl.style.width = 'max-content';
            textEl.innerHTML = phrases[currentPhraseIndex][curLang] || phrases[currentPhraseIndex]['en'];
            
            // Adjust width to perfectly hug new text
            var textW = textEl.scrollWidth;
            var newPadding = window.innerWidth < 768 ? 50 : 60;
            island.style.width = (textW + newPadding) + 'px';
            textEl.style.width = textW + 'px'; // lock width
          }
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          
          // Wait for island width transition (approx 350ms) to almost finish before fading text in
          setTimeout(function() {
            if (textEl) textEl.classList.remove('fade-in-prep');
            
            // Wait 3s, then shrink Island
            setTimeout(function() {
              island.classList.remove('is-active');
              island.style.width = ''; // revert to CSS small pill
            }, 3000);
          }, 350);
        }, 400); // Wait 400ms for slide-out transition
      }, 3000);
      
      // Schedule next attempt after full animation sequence + idle time
      setTimeout(triggerIsland, Math.random() * 5000 + 10000); // 10s to 15s delay
    } else {
      // Skipped due to scroll/menu, check again quickly
      setTimeout(triggerIsland, 2000);
    }
  }
  
  // Instant translation for Dynamic Island
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var newLang = this.getAttribute('data-lang');
      var textEl = island.querySelector('.di-text');
      if (textEl && island.classList.contains('is-active')) {
        var prevIndex = (currentPhraseIndex - 1 + phrases.length) % phrases.length;
        textEl.style.width = 'max-content';
        textEl.innerHTML = phrases[prevIndex][newLang] || phrases[prevIndex]['en'];
        var textW = textEl.scrollWidth;
        var padding = window.innerWidth < 768 ? 50 : 60;
        island.style.width = (textW + padding) + 'px';
        textEl.style.width = textW + 'px';
      }
    });
  });
  
  // Initial popup after 2 seconds
  setTimeout(triggerIsland, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  initDynamicIsland();
});
