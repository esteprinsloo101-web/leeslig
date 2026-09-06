(function () {
  'use strict';

  var STARS_KEY = 'leeslig_stars_v1';
  var GRADE_KEY = 'leeslig_grade_v1';
  var MINS_KEY = 'leeslig_mins_v1';
  var SETTINGS_KEY = 'leeslig_settings_v1';

  var state = {
    grade: 1,
    mins: 3,
    module: null,
    items: [],
    index: 0,
    answered: false,
    timerSec: 180,
    timerId: null,
    timerPaused: false,
    settings: { timer: true, sound: false, demoBadge: true }
  };

  var C = window.LEESLIG_CONTENT || {};

  function $(id) { return document.getElementById(id); }

  function loadSettings() {
    try {
      var raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) state.settings = Object.assign(state.settings, JSON.parse(raw));
    } catch (e) {}
  }

  function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings)); } catch (e) {}
  }

  function getStars() {
    try { return parseInt(localStorage.getItem(STARS_KEY) || '0', 10) || 0; }
    catch (e) { return 0; }
  }

  function setStars(n) {
    try { localStorage.setItem(STARS_KEY, String(Math.max(0, n))); } catch (e) {}
    updateStarsUI();
  }

  function addStar() { setStars(getStars() + 1); }

  function updateStarsUI() {
    var el = $('star-count');
    if (el) el.textContent = getStars();
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function stopTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
  }

  function startTimer() {
    stopTimer();
    if (!state.settings.timer) {
      $('timer-wrap').style.display = 'none';
      return;
    }
    $('timer-wrap').style.display = '';
    state.timerSec = state.mins * 60;
    state.timerPaused = false;
    $('timer-display').textContent = formatTime(state.timerSec);
    $('timer-display').classList.remove('warn');
    $('timer-toggle').textContent = 'Pouse';
    state.timerId = setInterval(function () {
      if (state.timerPaused) return;
      state.timerSec -= 1;
      var el = $('timer-display');
      if (el) {
        el.textContent = formatTime(Math.max(0, state.timerSec));
        if (state.timerSec <= 30) el.classList.add('warn');
      }
      if (state.timerSec <= 0) {
        stopTimer();
        endSession();
      }
    }, 1000);
  }

  function endSession() {
    stopTimer();
    $('done-msg').textContent = 'Goed gewerk. Kort en kalm is genoeg vir vandag. Sterre: ' + getStars() + '.';
    $('done-modal').hidden = false;
  }

  function setGrade(g) {
    state.grade = parseInt(g, 10) || 1;
    try { localStorage.setItem(GRADE_KEY, String(state.grade)); } catch (e) {}
    document.querySelectorAll('.grade-btn').forEach(function (b) {
      b.classList.toggle('active', parseInt(b.dataset.grade, 10) === state.grade);
    });
    updateModuleHints();
  }

  function setMins(m) {
    state.mins = parseInt(m, 10) || 3;
    try { localStorage.setItem(MINS_KEY, String(state.mins)); } catch (e) {}
    document.querySelectorAll('.session-btn').forEach(function (b) {
      b.classList.toggle('active', parseInt(b.dataset.mins, 10) === state.mins);
    });
  }

  function updateModuleHints() {
    var g = state.grade;
    var junior = g <= 3;
    // All modules available; senior grades lean on sentences/passages but stubs exist for sounds/words
    document.querySelectorAll('.mod-card').forEach(function (card) {
      card.classList.remove('disabled');
      card.disabled = false;
    });
    var note = junior
      ? 'Junior (Gr 1–3): begin by Klanke of Kort woorde.'
      : 'Senior (Gr 4–7): DEMO/stub-inhoud — sinne & passasies word aanbeveel.';
    // soft hint via session note when home
  }

  function getItems(module, grade) {
    var bucket = C[module];
    if (!bucket) return [];
    var list = bucket[grade] || bucket[String(grade)] || [];
    if (!list.length) {
      // fallback to nearest lower grade with content
      for (var g = grade - 1; g >= 1; g--) {
        if (bucket[g] && bucket[g].length) { list = bucket[g]; break; }
      }
    }
    return shuffle(list);
  }

  function showHome() {
    stopTimer();
    $('practice-view').hidden = true;
    $('home-view').style.display = '';
    state.module = null;
  }

  function showPractice() {
    $('home-view').style.display = 'none';
    $('practice-view').hidden = false;
  }

  function startModule(module) {
    state.module = module;
    state.items = getItems(module, state.grade);
    state.index = 0;
    state.answered = false;
    if (!state.items.length) {
      alert('Geen items vir hierdie graad/module nie (nog stub). Probeer Gr 1–3.');
      return;
    }
    var labels = { sounds: 'Klanke', words: 'Kort woorde', sentences: 'Sinne', passages: 'Passasies' };
    $('module-label').textContent = labels[module] || module;
    showPractice();
    startTimer();
    $('session-note').textContent = 'Graad ' + state.grade + ' · ' + state.mins + ' min · Een kaart op ’n slag. Stop gerus vroeg.';
    renderItem();
  }

  function renderItem() {
    var item = state.items[state.index % state.items.length];
    state.answered = false;
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    $('next-item').textContent = 'Volgende';
    var area = $('prompt-area');
    var choicesEl = $('choices');
    choicesEl.innerHTML = '';
    area.className = 'prompt-area';
    area.innerHTML = '';

    var badge = state.settings.demoBadge
      ? '<div class="demo-badge">DEMO · oefening · nie CAPS</div>'
      : '';

    if (state.module === 'sounds') {
      $('prompt-hint').textContent = 'Watter klank is dit? Tip: ' + (item.tip || '');
      area.innerHTML = badge + '<div class="sound-big">' + escapeHtml(item.prompt) + '</div>';
      renderChoices(item.choices, item.answer);
    } else if (state.module === 'words') {
      $('prompt-hint').textContent = 'Lees die woord. Kies dieselfde spelling.';
      area.innerHTML = badge + '<div class="word-big">' + escapeHtml(item.word) + '</div>';
      renderChoices(item.choices, item.answer);
    } else if (state.module === 'sentences') {
      $('prompt-hint').textContent = 'Lees die sin. Beantwoord die vraag.';
      area.classList.add('passage');
      area.innerHTML = badge +
        '<div>' + escapeHtml(item.text) + '</div>' +
        '<div class="q">' + escapeHtml(item.q) + '</div>';
      renderChoices(item.choices, item.answer);
    } else if (state.module === 'passages') {
      $('prompt-hint').textContent = 'Lees die kort passasie. Beantwoord die vraag.';
      area.classList.add('passage');
      area.innerHTML = badge +
        '<strong>' + escapeHtml(item.title || '') + '</strong>' +
        '<div style="margin-top:0.5rem">' + escapeHtml(item.text) + '</div>' +
        '<div class="q">' + escapeHtml(item.q) + '</div>';
      renderChoices(item.choices, item.answer);
    }
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderChoices(choices, answer) {
    var el = $('choices');
    shuffle(choices).forEach(function (c) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice-btn';
      btn.textContent = c;
      btn.addEventListener('click', function () { onChoose(btn, c, answer); });
      el.appendChild(btn);
    });
  }

  function onChoose(btn, choice, answer) {
    if (state.answered) return;
    state.answered = true;
    var ok = choice === answer;
    document.querySelectorAll('.choice-btn').forEach(function (b) {
      b.disabled = true;
      if (b.textContent === answer) b.classList.add('correct');
    });
    if (!ok) btn.classList.add('wrong');
    var fb = $('feedback');
    if (ok) {
      fb.textContent = 'Goed so! ⭐';
      fb.className = 'feedback ok';
      addStar();
      softBeep();
    } else {
      fb.textContent = 'Amper — die antwoord is: ' + answer;
      fb.className = 'feedback no';
    }
  }

  function softBeep() {
    if (!state.settings.sound) return;
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 660;
      g.gain.value = 0.04;
      o.start();
      setTimeout(function () { o.stop(); ctx.close(); }, 120);
    } catch (e) {}
  }

  function nextItem() {
    if (!state.answered) {
      // gentle nudge — allow skip without star
      $('feedback').textContent = 'Kies eers ’n antwoord, of tik weer Volgende om oor te slaan.';
      $('feedback').className = 'feedback';
      if ($('next-item').dataset.skip === '1') {
        state.index += 1;
        $('next-item').dataset.skip = '';
        renderItem();
      } else {
        $('next-item').dataset.skip = '1';
      }
      return;
    }
    $('next-item').dataset.skip = '';
    state.index += 1;
    renderItem();
  }

  /* Parent gate */
  function openParentGate() {
    $('parent-answer').value = '';
    $('gate-err').hidden = true;
    $('parent-modal').hidden = false;
    $('parent-answer').focus();
  }

  function tryUnlockParent() {
    var v = parseInt($('parent-answer').value, 10);
    if (v === 7) {
      $('parent-modal').hidden = true;
      $('opt-timer').checked = !!state.settings.timer;
      $('opt-sound').checked = !!state.settings.sound;
      $('opt-demo-badge').checked = !!state.settings.demoBadge;
      $('settings-modal').hidden = false;
    } else {
      $('gate-err').hidden = false;
    }
  }

  function bind() {
    document.querySelectorAll('.grade-btn').forEach(function (b) {
      b.addEventListener('click', function () { setGrade(b.dataset.grade); });
    });
    document.querySelectorAll('.session-btn').forEach(function (b) {
      b.addEventListener('click', function () { setMins(b.dataset.mins); });
    });
    document.querySelectorAll('.mod-card').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.disabled) return;
        startModule(b.dataset.module);
      });
    });
    $('back-home').addEventListener('click', showHome);
    $('next-item').addEventListener('click', nextItem);
    $('timer-toggle').addEventListener('click', function () {
      state.timerPaused = !state.timerPaused;
      $('timer-toggle').textContent = state.timerPaused ? 'Speel' : 'Pouse';
    });
    $('open-parent').addEventListener('click', openParentGate);
    $('parent-cancel').addEventListener('click', function () { $('parent-modal').hidden = true; });
    $('parent-unlock').addEventListener('click', tryUnlockParent);
    $('parent-answer').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') tryUnlockParent();
    });
    $('settings-close').addEventListener('click', function () {
      state.settings.timer = $('opt-timer').checked;
      state.settings.sound = $('opt-sound').checked;
      state.settings.demoBadge = $('opt-demo-badge').checked;
      saveSettings();
      $('settings-modal').hidden = true;
    });
    $('reset-stars').addEventListener('click', function () {
      if (confirm('Stel sterre op hierdie toestel terug na 0?')) setStars(0);
    });
    $('done-home').addEventListener('click', function () {
      $('done-modal').hidden = true;
      showHome();
    });
  }

  function init() {
    loadSettings();
    updateStarsUI();
    var g = 1, m = 3;
    try { g = parseInt(localStorage.getItem(GRADE_KEY) || '1', 10) || 1; } catch (e) {}
    try { m = parseInt(localStorage.getItem(MINS_KEY) || '3', 10) || 3; } catch (e) {}
    setGrade(g);
    setMins(m);
    bind();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
