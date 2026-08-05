/* Griffin IB — shared behaviour */
(function () {
  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Race-day countdown ----
     EDIT THE DATE BELOW each year to the Friday of race weekend.
     Format: YYYY, MM(0-11!), DD, HH, MM  — month is zero-indexed. */
  var cd = document.getElementById('countdown');
  if (cd) {
    // 9 October 2026, 6:00pm  — PLACEHOLDER, update to the real drop time.
    var raceDate = new Date(2026, 9, 9, 18, 0, 0);
    var units = [
      ['days', 86400000],
      ['hours', 3600000],
      ['mins', 60000],
      ['secs', 1000]
    ];
    function tick() {
      var diff = raceDate - new Date();
      if (diff <= 0) {
        cd.innerHTML =
          '<div class="cd-unit"><b>NOW</b><span>Blindfolds off — race weekend is here. Update the date in app.js.</span></div>';
        clearInterval(timer);
        return;
      }
      var html = '';
      units.forEach(function (u) {
        var val = Math.floor(diff / u[1]);
        diff -= val * u[1];
        html +=
          '<div class="cd-unit"><b>' +
          String(val).padStart(2, '0') +
          '</b><span>' +
          u[0] +
          '</span></div>';
      });
      cd.innerHTML = html;
    }
    tick();
    var timer = setInterval(tick, 1000);
  }

  /* ---- Contact form (demo only — no backend) ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-note');
      if (note)
        note.textContent =
          'Thanks — this demo form has no mailbox wired up yet. Point it at your squad email or a Google Form (see README).';
    });
  }
})();
