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


/* ===== SERVICE WORKER REGISTRATION ===== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
}

/* ===== POPULAR TIMES CHART ===== */
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('popularTimesChart');
  if (!canvas) return; // Only run if chart canvas exists

  // Make sure Chart is available
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js is not loaded.');
    return;
  }

  const ctx = canvas.getContext('2d');
  
  // Data estimated from Google Maps screenshots
  // Hours: 6a, 7a, 8a, 9a, 10a, 11a, 12p, 1p, 2p, 3p, 4p, 5p, 6p, 7p, 8p
  const labels = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
  
  const weeklyData = [
    { // Mon
      data: [30, 25, 25, 20, 20, 20, 20, 25, 25, 30, 40, 50, 70, 60, 55],
      text: "Usually a little busy at <strong>6 PM</strong>"
    },
    { // Tue
      data: [30, 35, 40, 40, 30, 30, 30, 50, 60, 55, 40, 50, 70, 80, 60],
      text: "Usually as busy as it gets at <strong>7 PM</strong>"
    },
    { // Wed
      data: [30, 45, 50, 50, 40, 40, 40, 45, 30, 35, 25, 35, 50, 55, 60],
      text: "Usually a little busy at <strong>8 PM</strong>"
    },
    { // Thu
      data: [20, 25, 20, 15, 20, 35, 30, 25, 25, 20, 30, 40, 50, 45, 45],
      text: "Usually a little busy at <strong>6 PM</strong>"
    },
    { // Fri
      data: [30, 15, 10, 20, 35, 40, 40, 50, 55, 65, 55, 50, 60, 55, 45],
      text: "Usually a little busy at <strong>6 PM</strong>"
    },
    { // Sat
      data: [40, 50, 80, 50, 50, 40, 35, 30, 25, 25, 30, 30, 35, 35, 50],
      text: "Usually a little busy at <strong>8 AM</strong>"
    },
    { // Sun
      data: [25, 20, 35, 45, 50, 40, 35, 30, 40, 55, 75, 80, 55, 45, 0],
      text: "Usually a little busy at <strong>5 PM</strong>"
    }
  ];

  // Default to today
  const today = new Date().getDay();
  // JS getDay(): 0 = Sun, 1 = Mon ... 6 = Sat
  // Our tabs: 0 = Mon, 1 = Tue ... 6 = Sun
  let initialDay = today - 1;
  if (initialDay === -1) initialDay = 6; // Sunday

  // Create gradient
  let gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(42, 173, 173, 0.45)'); // Teal transparent
  gradient.addColorStop(1, 'rgba(42, 173, 173, 0.02)'); // Transparent

  const config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Activity',
        data: weeklyData[initialDay].data,
        borderColor: '#2AADAD', // var(--teal)
        backgroundColor: gradient,
        borderWidth: 3,
        fill: true,
        tension: 0.4, // Sexy smooth bezier curves
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: '#C4973C', // Gold
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(28, 36, 36, 0.9)', // var(--charcoal)
          titleFont: { family: 'Outfit', size: 12 },
          bodyFont: { family: 'Outfit', size: 14, weight: 'bold' },
          padding: 10,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: function() { return 'Activity Level'; }
          }
        }
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            font: { family: 'Outfit', size: 11 },
            color: '#6B6560', // var(--text-muted)
            maxTicksLimit: 8
          }
        },
        y: {
          display: false, // Hide Y axis entirely for a cleaner look
          min: 0,
          max: 100
        }
      },
      animation: {
        duration: 800,
        easing: 'easeOutQuart'
      }
    }
  };

  const chart = new Chart(ctx, config);

  // Set initial text and tab
  const statusText = document.getElementById('pt-status-text');
  if (statusText) {
    statusText.innerHTML = weeklyData[initialDay].text;
    statusText.style.transition = 'opacity 0.3s ease';
  }
  
  const tabs = document.querySelectorAll('.pt-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (parseInt(tab.getAttribute('data-day')) === initialDay) {
      tab.classList.add('active');
    }

    tab.addEventListener('click', function() {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');
      
      const dayIndex = parseInt(this.getAttribute('data-day'));
      
      // Update Chart Data
      chart.data.datasets[0].data = weeklyData[dayIndex].data;
      chart.update();
      
      // Update Status Text
      if (statusText) {
        statusText.style.opacity = 0;
        setTimeout(() => {
          statusText.innerHTML = weeklyData[dayIndex].text;
          statusText.style.opacity = 1;
        }, 300); 
      }
    });
  });
});
