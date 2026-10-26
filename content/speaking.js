/*
  Tab Speaking: Bank soal, Mock test, Grammar lisan, Kosakata, Kriteria & band.
  Data ada di speaking-bank.js, speaking-language.js, speaking-band.js. File ini hanya merender.
  Terpisah dari Writing dan Structure.
*/
(function () {
  var BANK = window.SPEAKING_BANK, GR = window.SPEAKING_GRAMMAR, TONE = window.SPEAKING_TONE || [],
      ERR = window.SPEAKING_ERRORS || [], VOC = window.SPEAKING_VOCAB, BANDS = window.SPEAKING_BANDS,
      BAND_NOTES = window.SPEAKING_BAND_NOTES || [], BAND_SRC = window.SPEAKING_BAND_SOURCE;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function slots(s) { return esc(s).replace(/\{\{(.+?)\}\}/g, '<span class="slot">$1</span>'); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem('catatan-ielts-sp-' + k); localStorage.setItem('catatan-ielts-sp-' + k, v); } catch (e) { return null; } return null; }

  /* ---------- Suara penguji (opsional) ---------- */
  var synth = null;
  try { synth = window.speechSynthesis && window.SpeechSynthesisUtterance ? window.speechSynthesis : null; } catch (e) { synth = null; }
  function say(text) {
    if (!synth) return;
    try {
      synth.cancel();
      var u = new SpeechSynthesisUtterance(text), vs = synth.getVoices();
      var v = vs.filter(function (x) { return /^en-GB/i.test(x.lang); })[0] || vs.filter(function (x) { return /^en/i.test(x.lang); })[0];
      if (v) u.voice = v;
      u.lang = v ? v.lang : 'en-GB'; u.rate = 0.95;
      synth.speak(u);
    } catch (e) {}
  }
  function hush() { try { if (synth) synth.cancel(); } catch (e) {} }

  /* ---------- Bunyi penanda waktu habis ---------- */
  var actx = null;
  function beep() {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var o = actx.createOscillator(), g = actx.createGain();
      o.frequency.value = 880; g.gain.value = 0.08;
      o.connect(g); g.connect(actx.destination);
      o.start(); o.stop(actx.currentTime + 0.25);
    } catch (e) {}
  }

  /* ---------- Timer ---------- */
  function countdown(sec, tick, done) {
    var end = Date.now() + sec * 1000, id;
    function step() {
      var left = (end - Date.now()) / 1000;
      tick(Math.max(0, Math.ceil(left)));
      if (left <= 0) { clearInterval(id); id = null; if (done) done(); }
    }
    id = setInterval(step, 250); step();
    return { stop: function () { if (id) clearInterval(id); id = null; } };
  }
  function stopwatch(tick) {
    var t0 = Date.now(), id = setInterval(function () { tick((Date.now() - t0) / 1000); }, 250);
    tick(0);
    return { stop: function () { clearInterval(id); return (Date.now() - t0) / 1000; } };
  }

  /* Target durasi per part, dipakai di latihan acak dan mock test */
  var TARGET = { 1: [15, 30, 'Target 15–30 detik'], 3: [35, 75, 'Target 35–75 detik'] };
  function paceNote(part, sec) {
    var t = TARGET[part];
    if (!t) return '';
    if (sec < t[0]) return 'Terlalu singkat. Tambahkan alasan atau contoh.';
    if (sec > t[1]) return 'Cukup panjang. Pastikan tetap menjawab pertanyaan.';
    return 'Panjang jawaban pas.';
  }

  function innerNav(items, cur, label) {
    return '<div class="subnav inner" role="group" aria-label="' + esc(label) + '">' + items.map(function (x, i) {
      return '<button type="button" class="sbtn" data-i="' + i + '" aria-pressed="' + (i === cur) + '">' + esc(x) + '</button>';
    }).join('') + '</div>';
  }
  function bindNav(root, fn) {
    $$('.subnav.inner .sbtn', root).forEach(function (b) {
      b.addEventListener('click', function () { fn(Number(b.getAttribute('data-i'))); });
    });
  }
  function fail(root, file) { root.innerHTML = '<p class="sub">Konten tidak termuat. Pastikan file ' + file + ' ada di repositori.</p>'; }

  var CATS = BANK ? BANK.p2.map(function (c) { return c.cat; }).filter(function (c, i, a) { return a.indexOf(c) === i; }) : [];

  /* =========================================================
     BANK SOAL
     ========================================================= */
  (function () {
    var root = document.getElementById('sp-bank');
    if (!root) return;
    if (!BANK) return fail(root, 'content/speaking-bank.js');

    var drillPart = Number(store('drill-part')) || 1, drill = null, timer = null, running = false, browse = Number(store('browse')) || 0, catSel = -1;

    function newDrill() {
      if (drillPart === 1) { var t = pick(BANK.p1); drill = { part: 1, q: pick(t.qs), topic: t.name }; }
      else if (drillPart === 2) { drill = { part: 2, card: pick(BANK.p2) }; }
      else { var c = pick(BANK.p2); drill = { part: 3, q: pick(c.p3.qs), topic: c.p3.topic }; }
    }
    function stopTimer() { if (timer) timer.stop(); timer = null; running = false; }

    function drillHtml() {
      var h = '<div class="card sp-drill">' +
        '<div class="sp-drill-top"><p class="label">Latihan acak</p>' + innerNav(['Part 1', 'Part 2', 'Part 3'], drillPart - 1, 'Pilih part') + '</div>';
      if (drill.part === 2) {
        var c = drill.card;
        h += '<div class="paper sp-cue"><p class="label">Cue card · ' + esc(c.cat) + '</p><h3>' + esc(c.title) + '</h3><p class="meta">You should say:</p><ul class="tips">' +
          c.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>';
      } else {
        h += '<p class="meta">' + esc(drill.topic) + '</p><p class="sp-q">' + esc(drill.q) + '</p>';
      }
      h += '<div class="sp-clockrow"><div class="clock sp-clock" role="timer" aria-live="off">' + (drill.part === 2 ? '1:00' : '0:00') + '</div>' +
        '<div><p class="meta sp-status">' + (drill.part === 2 ? '1 menit persiapan, lalu 2 menit bicara' : TARGET[drill.part][2]) + '</p>' +
        '<div class="tbtns"><button type="button" class="btn" data-a="start">Mulai</button>' +
        '<button type="button" class="btn ghost" data-a="next">Soal lain</button>' +
        (synth ? '<button type="button" class="btn ghost" data-a="say">Bacakan</button>' : '') + '</div></div></div>' +
        '</div>';
      return h;
    }

    function browseHtml() {
      var h = '<h3 class="sp-h">Semua soal</h3>' + '<div class="sp-browse-nav">' + innerNav(['Part 1 · per topik', 'Part 2 & 3 · per kartu'], browse, 'Jenis soal') + '</div>';
      if (browse === 0) {
        h += '<div class="sp-topics">' + BANK.p1.map(function (t) {
          return '<details><summary>' + esc(t.name) + (t.intro ? ' <span class="sp-tag">pembuka</span>' : '') + '</summary><div class="in"><ol class="sp-ol">' +
            t.qs.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ol></div></details>';
        }).join('') + '</div>' +
        '<p class="sub">Topik bertanda <b>pembuka</b> (work, studies, home) hampir selalu jadi topik pertama Part 1.</p>';
      } else {
        h += '<div class="chips sp-cats"><button type="button" class="chip sp-chip" data-c="-1" aria-pressed="' + (catSel === -1) + '">Semua (' + BANK.p2.length + ')</button>' +
          CATS.map(function (c, i) {
            var n = BANK.p2.filter(function (x) { return x.cat === c; }).length;
            return '<button type="button" class="chip sp-chip" data-c="' + i + '" aria-pressed="' + (catSel === i) + '">' + esc(c) + ' (' + n + ')</button>';
          }).join('') + '</div>';
        h += '<div class="sp-topics">' + BANK.p2.filter(function (c) { return catSel < 0 || c.cat === CATS[catSel]; }).map(function (c) {
          return '<details><summary>' + esc(c.title) + ' <span class="sp-tag">' + esc(c.cat) + '</span></summary><div class="in">' +
            '<p class="meta">You should say:</p><ul class="tips">' + c.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
            '<p class="meta">Pertanyaan penutup: ' + esc(c.round) + '</p>' +
            '<p class="label" style="margin-top:14px">Part 3 · ' + esc(c.p3.topic) + '</p><ol class="sp-ol">' +
            c.p3.qs.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ol></div></details>';
        }).join('') + '</div>';
      }
      return h;
    }

    function render() {
      stopTimer(); hush();
      root.innerHTML = '<div class="sp-drillwrap">' + drillHtml() + '</div>' + browseHtml();
      var d = $('.sp-drill', root);
      bindNav(d, function (i) { drillPart = i + 1; store('drill-part', String(drillPart)); newDrill(); render(); });
      var clk = $('.sp-clock', d), st = $('.sp-status', d);
      $('[data-a="next"]', d).addEventListener('click', function () { newDrill(); render(); });
      var sb = $('[data-a="say"]', d);
      if (sb) sb.addEventListener('click', function () {
        say(drill.part === 2 ? drill.card.title + ' You should say: ' + drill.card.bullets.join('. ') : drill.q);
      });
      var startBtn = $('[data-a="start"]', d);
      startBtn.addEventListener('click', function () {
        clk.classList.remove('done');
        if (drill.part === 2) {
          stopTimer();
          startBtn.textContent = 'Ulang dari awal';
          st.textContent = 'Persiapan: tulis kata kunci saja';
          timer = countdown(60, function (s) { clk.textContent = fmt(s); }, function () {
            beep(); st.textContent = 'Bicara sekarang, sampai waktu habis';
            timer = countdown(120, function (s) { clk.textContent = fmt(s); }, function () {
              beep(); clk.classList.add('done'); st.textContent = 'Selesai. Penguji akan bertanya: ' + drill.card.round;
            });
          });
        } else if (running) {
          var used = timer.stop(); timer = null; running = false;
          startBtn.textContent = 'Mulai lagi';
          st.textContent = fmt(used) + ' · ' + paceNote(drill.part, used);
        } else {
          running = true;
          startBtn.textContent = 'Selesai menjawab';
          st.textContent = TARGET[drill.part][2];
          timer = stopwatch(function (s) {
            clk.textContent = fmt(s);
            clk.classList.toggle('sp-over', s > TARGET[drill.part][1]);
          });
        }
      });

      bindNav($('.sp-browse-nav', root), function (i) { browse = i; store('browse', String(i)); render(); });
      $$('.sp-chip', root).forEach(function (b) {
        b.addEventListener('click', function () { catSel = Number(b.getAttribute('data-c')); render(); });
      });
    }
    newDrill(); render();
  })();

  /* =========================================================
     MOCK TEST
     ========================================================= */
  (function () {
    var root = document.getElementById('sp-mock');
    if (!root) return;
    if (!BANK) return fail(root, 'content/speaking-bank.js');

    var M = null, timer = null, total = null;
    var voice = store('voice') !== '0';

    function stopAll() { if (timer) timer.stop(); timer = null; hush(); }

    function plan() {
      var intro = pick(BANK.p1.filter(function (t) { return t.intro; }));
      var others = shuffle(BANK.p1.filter(function (t) { return !t.intro; })).slice(0, 2);
      var steps = [];
      steps.push({ kind: 'say', part: 1, title: 'Part 1 · Perkenalan', text: 'Good afternoon. In this first part, I\'d like to ask you some questions about yourself. Let\'s talk about ' + intro.name.toLowerCase() + '.' });
      intro.qs.slice(0, 4).forEach(function (q) { steps.push({ kind: 'q', part: 1, topic: intro.name, q: q }); });
      others.forEach(function (t) {
        var qs = shuffle(t.qs).slice(0, 3);
        qs.forEach(function (q, i) { steps.push({ kind: 'q', part: 1, topic: t.name, q: (i === 0 ? 'Now let\'s talk about ' + t.name.toLowerCase() + '. ' : '') + q }); });
      });
      var card = pick(BANK.p2);
      steps.push({ kind: 'say', part: 2, title: 'Part 2 · Kartu topik', text: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. You have one minute to think about what you\'re going to say. You can make some notes if you wish.' });
      steps.push({ kind: 'card', part: 2, card: card });
      steps.push({ kind: 'say', part: 3, title: 'Part 3 · Diskusi', text: 'We\'ve been talking about ' + card.title.replace(/^Describe /, '').replace(/\.$/, '') + '. I\'d like to discuss with you some more general questions related to this. Let\'s consider ' + card.p3.topic.toLowerCase() + '.' });
      shuffle(card.p3.qs).slice(0, 5).forEach(function (q) { steps.push({ kind: 'q', part: 3, topic: card.p3.topic, q: q }); });
      return { steps: steps, i: 0, log: [], notes: '', card: card, t0: Date.now() };
    }

    function head(step) {
      var qs = M.steps.filter(function (s) { return s.kind !== 'say'; }), n = qs.indexOf(step) + 1;
      var parts = [1, 2, 3].map(function (p) { return '<span class="sp-pp' + (p === step.part ? ' on' : (p < step.part ? ' done' : '')) + '">Part ' + p + '</span>'; }).join('');
      return '<div class="sp-mhead"><div class="sp-parts">' + parts + '</div><div class="meta">' +
        (n > 0 ? 'Langkah ' + n + ' dari ' + qs.length + ' · ' : '') + 'Total <span class="sp-total">' + fmt((Date.now() - M.t0) / 1000) + '</span></div></div>';
    }
    function runTotal() {
      if (total) clearInterval(total);
      total = setInterval(function () { var t = $('.sp-total', root); if (t && M) t.textContent = fmt((Date.now() - M.t0) / 1000); else { clearInterval(total); total = null; } }, 1000);
    }

    function intro() {
      stopAll(); M = null;
      root.innerHTML =
        '<div class="card sp-mintro">' +
          '<h3>Simulasi Speaking 11–14 menit</h3>' +
          '<p>Soal diacak dari bank soal setiap kali mulai: satu topik pembuka dan dua topik lain di Part 1, satu cue card di Part 2, lalu lima pertanyaan Part 3 yang terkait dengan kartu itu.</p>' +
          '<ul class="tips"><li>Klik <b>Berikutnya</b> setelah selesai menjawab. Waktu tiap jawaban dicatat.</li>' +
          '<li>Part 2 berjalan otomatis: 1 menit persiapan, bunyi penanda, lalu 2 menit bicara.</li>' +
          '<li>Rekam dirimu dengan perekam suara di HP selama mock, lalu dengarkan ulang dengan checklist di akhir.</li></ul>' +
          (synth ? '<label class="opt sp-voice"><input type="checkbox" id="sp-voice"' + (voice ? ' checked' : '') + '><span>Bacakan pertanyaan dengan suara penguji (teks juga tetap tampil)</span></label>'
                 : '<p class="meta">Browser ini tidak mendukung suara, jadi pertanyaan hanya tampil sebagai teks.</p>') +
          '<div class="tbtns"><button type="button" class="btn" id="sp-start">Mulai mock test</button></div>' +
        '</div>';
      var vb = $('#sp-voice', root);
      if (vb) vb.addEventListener('change', function () { voice = vb.checked; store('voice', voice ? '1' : '0'); });
      $('#sp-start', root).addEventListener('click', function () { M = plan(); runTotal(); show(); });
    }

    function next() { stopAll(); M.i++; if (M.i >= M.steps.length) summary(); else show(); }

    function toTop() {
      var t = root.getBoundingClientRect().top + window.pageYOffset - 70;
      if (window.pageYOffset > t) window.scrollTo(0, t);
    }
    function show() {
      toTop();
      var s = M.steps[M.i];
      if (s.kind === 'say') return showSay(s);
      if (s.kind === 'card') return showCard(s);
      return showQ(s);
    }

    function showSay(s) {
      root.innerHTML = head(s) + '<div class="card sp-stage"><p class="label">' + esc(s.title) + '</p><p class="sp-examiner">' + esc(s.text) + '</p>' +
        '<div class="tbtns"><button type="button" class="btn" data-a="go">Lanjut</button>' + (synth ? '<button type="button" class="btn ghost" data-a="say">Ulangi suara</button>' : '') +
        '<button type="button" class="btn ghost" data-a="end">Akhiri</button></div></div>';
      if (voice) say(s.text);
      wire({ go: next, say: function () { say(s.text); } });
      $('[data-a="go"]', root).focus();
    }

    function showQ(s) {
      root.innerHTML = head(s) + '<div class="card sp-stage"><p class="label">' + esc(s.topic) + '</p><p class="sp-q">' + esc(s.q) + '</p>' +
        '<div class="sp-clockrow"><div class="clock sp-clock">0:00</div><p class="meta">' + TARGET[s.part][2] + '</p></div>' +
        '<div class="tbtns"><button type="button" class="btn" data-a="go">Berikutnya</button>' + (synth ? '<button type="button" class="btn ghost" data-a="say">Ulangi pertanyaan</button>' : '') +
        '<button type="button" class="btn ghost" data-a="end">Akhiri</button></div></div>';
      if (voice) say(s.q);
      var clk = $('.sp-clock', root), sw = stopwatch(function (x) {
        clk.textContent = fmt(x);
        clk.classList.toggle('sp-over', x > TARGET[s.part][1]);
      });
      timer = sw;
      wire({ go: function () { var used = sw.stop(); timer = null; M.log.push({ part: s.part, q: s.q, sec: used }); next(); }, say: function () { say(s.q); } });
      $('[data-a="go"]', root).focus();
    }

    function showCard(s) {
      var c = s.card, phase = 'prep', spoke = 0, t1 = 0;
      root.innerHTML = head(s) +
        '<div class="split sp-cardstage">' +
          '<div class="paper sp-cue"><p class="label">Cue card · ' + esc(c.cat) + '</p><h3>' + esc(c.title) + '</h3><p class="meta">You should say:</p><ul class="tips">' +
            c.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>' +
          '<div class="card"><div class="sp-clockrow"><div class="clock sp-clock">1:00</div><p class="meta sp-status">Persiapan · tulis kata kunci</p></div>' +
            '<label class="label" for="sp-notes">Catatan</label><textarea id="sp-notes" class="sp-notes" rows="5" placeholder="Kata kunci saja, satu baris per poin"></textarea>' +
            '<p class="meta sp-round" hidden></p>' +
            '<div class="tbtns"><button type="button" class="btn" data-a="go">Mulai bicara sekarang</button><button type="button" class="btn ghost" data-a="end">Akhiri</button></div></div>' +
        '</div>';
      if (voice) say(c.title + ' You should say: ' + c.bullets.join('. '));
      var clk = $('.sp-clock', root), st = $('.sp-status', root), go = $('[data-a="go"]', root), notes = $('#sp-notes', root);
      notes.focus();

      function speak() {
        if (timer) timer.stop();
        phase = 'speak'; beep(); hush();
        if (voice) say('Alright? Remember you have one to two minutes for this. I\'ll tell you when the time is up. Can you start speaking now, please?');
        st.textContent = 'Bicara · sampai waktu habis'; go.textContent = 'Saya sudah selesai';
        t1 = Date.now();
        timer = countdown(120, function (x) { clk.textContent = fmt(x); }, done);
      }
      function done() {
        if (phase !== 'speak') return;
        if (timer) timer.stop(); timer = null;
        phase = 'round'; spoke = (Date.now() - t1) / 1000;
        beep(); clk.classList.add('done');
        st.textContent = 'Waktu bicara ' + fmt(spoke) + (spoke < 90 ? ' · usahakan mendekati 2 menit' : ' · bagus');
        var r = $('.sp-round', root); r.hidden = false; r.textContent = 'Penguji: “Thank you. ' + c.round + '” (jawab singkat, satu-dua kalimat)';
        if (voice) say('Thank you. ' + c.round);
        go.textContent = 'Lanjut ke Part 3';
      }
      timer = countdown(60, function (x) { clk.textContent = fmt(x); }, speak);
      wire({ go: function () {
        if (phase === 'prep') speak();
        else if (phase === 'speak') done();
        else { M.notes = notes.value; M.log.push({ part: 2, q: c.title, sec: spoke }); next(); }
      } });
    }

    function wire(map) {
      $$('[data-a]', root).forEach(function (b) {
        var a = b.getAttribute('data-a');
        b.addEventListener('click', function () {
          if (a === 'end') { if (window.confirm('Akhiri mock test sekarang?')) summary(); return; }
          if (map[a]) map[a]();
        });
      });
    }

    function summary() {
      stopAll();
      if (total) clearInterval(total); total = null;
      var dur = (Date.now() - M.t0) / 1000, L = M.log;
      function avg(p) { var a = L.filter(function (x) { return x.part === p; }); return a.length ? a.reduce(function (s, x) { return s + x.sec; }, 0) / a.length : 0; }
      function flag(x) {
        if (x.part === 2) return x.sec < 90 ? 'Kurang dari 1:30' : '';
        var t = TARGET[x.part]; return x.sec < t[0] ? 'Terlalu singkat' : (x.sec > t[1] ? 'Panjang' : '');
      }
      var rows = L.map(function (x) {
        var f = flag(x);
        return '<tr><td>P' + x.part + '</td><td>' + esc(x.q) + '</td><td class="sp-num">' + fmt(x.sec) + '</td><td>' + (f ? '<span class="sp-flag">' + f + '</span>' : '') + '</td></tr>';
      }).join('');
      var checks = BANDS ? BANDS.map(function (b) {
        return '<div class="card"><h3>' + esc(b.name) + '</h3><div class="stack">' + b.check.map(function (c, i) {
          return '<label class="opt sp-check"><input type="checkbox"><span>' + esc(c) + '</span></label>';
        }).join('') + '</div></div>';
      }).join('') : '';
      root.innerHTML =
        '<div class="card sp-sum">' +
          '<p class="label">Hasil mock test</p><h3>Durasi total ' + fmt(dur) + '</h3>' +
          '<div class="sp-stats"><div><b>' + fmt(avg(1)) + '</b><span>rata-rata Part 1</span></div><div><b>' + fmt(avg(2)) + '</b><span>bicara Part 2</span></div><div><b>' + fmt(avg(3)) + '</b><span>rata-rata Part 3</span></div></div>' +
          '<p class="meta">Panjang jawaban bukan nilai, tetapi jawaban yang terlalu pendek hampir selalu menahan Fluency di band 5–6.</p>' +
        '</div>' +
        (L.length ? '<div class="scroll tcard"><table class="sp-table"><thead><tr><th>Part</th><th>Pertanyaan</th><th>Waktu</th><th>Catatan</th></tr></thead><tbody>' + rows + '</tbody></table></div>' : '') +
        (M.notes ? '<div class="card"><p class="label">Catatan persiapan Part 2</p><pre class="sp-pre">' + esc(M.notes) + '</pre></div>' : '') +
        '<h3 class="sp-h">Checklist saat mendengar rekaman</h3><p class="sub">Putar rekamanmu, lalu centang yang masih jadi masalah. Itu fokus latihan berikutnya.</p>' +
        '<div class="grid wide">' + checks + '</div>' +
        '<div class="tbtns"><button type="button" class="btn" id="sp-again">Mock test baru</button><button type="button" class="btn ghost" id="sp-back">Kembali</button></div>';
      toTop();
      $('#sp-again', root).addEventListener('click', function () { M = plan(); runTotal(); show(); });
      $('#sp-back', root).addEventListener('click', intro);
    }

    intro();
  })();

  /* =========================================================
     GRAMMAR LISAN
     ========================================================= */
  (function () {
    var root = document.getElementById('sp-grammar');
    if (!root) return;
    if (!GR) return fail(root, 'content/speaking-language.js');
    var cur = Number(store('grammar')) || 0;
    if (!GR[cur]) cur = 0;

    function render() {
      var g = GR[cur];
      var h = innerNav(GR.map(function (x) { return x.name; }), cur, 'Fungsi') +
        '<h3 class="gname">' + esc(g.name) + ' <span>' + g.items.length + ' pola</span></h3><p class="sub">' + esc(g.about) + '</p>' +
        '<div class="stack">' + g.items.map(function (it, i) {
          return '<article class="scard"><header><span class="sn">' + (i + 1) + '</span><h3>' + esc(it.fn) + '</h3><span class="sp-tag">' + esc(it.part) + '</span></header>' +
            '<div class="tpl" data-label="Pola"><p>' + slots(it.p) + '</p></div>' +
            '<p class="sent sp-ex">' + esc(it.ex) + '</p>' +
            '<p class="note"><b>Catatan:</b> ' + esc(it.n) + '</p></article>';
        }).join('') + '</div>';
      var box = $('.sp-gr-body', root);
      box.innerHTML = h;
      bindNav(box, function (i) {
        cur = i; store('grammar', String(i)); render();
        var t = root.getBoundingClientRect().top + window.pageYOffset - 70;
        if (window.pageYOffset > t) window.scrollTo(0, t);
      });
    }

    root.innerHTML = '<div class="sp-gr-body"></div>' +
      '<h3 class="sp-h">Gaya tulis vs gaya ucap</h3>' +
      '<p class="sub">Kalimat ala esai terdengar seperti hafalan saat diucapkan. Di Speaking, pakai versi lisannya.</p>' +
      '<div class="scroll tcard"><table class="sp-table"><thead><tr><th>Gaya Writing</th><th>Gaya Speaking</th></tr></thead><tbody>' +
        TONE.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<h3 class="sp-h">Kesalahan umum penutur bahasa Indonesia</h3>' +
      '<p class="sub">Kesalahan dasar yang berulang menahan Grammar di band 6. Dengarkan rekamanmu dan cari pola-pola ini.</p>' +
      '<div class="grid wide">' + ERR.map(function (e) {
        return '<div class="card sp-err"><h3>' + esc(e.e) + '</h3><p class="sp-wrong">' + esc(e.w) + '</p><p class="sp-right">' + esc(e.r) + '</p><p class="meta">' + esc(e.why) + '</p></div>';
      }).join('') + '</div>';
    render();
  })();

  /* =========================================================
     KOSAKATA
     ========================================================= */
  (function () {
    var root = document.getElementById('sp-vocab');
    if (!root) return;
    if (!VOC) return fail(root, 'content/speaking-language.js');
    var cur = Number(store('vocab')) || 0;
    if (!VOC.topics[cur]) cur = 0;

    function topic() {
      var t = VOC.topics[cur], box = $('.sp-voc-topic', root);
      box.innerHTML = innerNav(VOC.topics.map(function (x) { return x.name; }), cur, 'Topik') +
        '<div class="scroll tcard"><table class="sp-table"><thead><tr><th>Frasa</th><th>Contoh dalam jawaban</th></tr></thead><tbody>' +
        t.items.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</tbody></table></div>';
      bindNav(box, function (i) { cur = i; store('vocab', String(i)); topic(); });
    }

    root.innerHTML =
      '<h3 class="sp-h" style="margin-top:0">Kosakata per topik</h3>' +
      '<p class="sub">Kolokasi yang natural untuk topik yang sering keluar. Pakai yang benar-benar cocok dengan ceritamu, jangan dipaksakan.</p>' +
      '<div class="sp-voc-topic"></div>' +
      '<h3 class="sp-h">Jangan ulang kata penguji</h3>' +
      '<p class="sub">Parafrase pertanyaan di kalimat pertama jawaban. Ini cara termudah menunjukkan Lexical Resource.</p>' +
      '<div class="scroll tcard"><table class="sp-table"><thead><tr><th>Penguji bertanya</th><th>Kamu menjawab</th></tr></thead><tbody>' +
        VOC.paraphrase.map(function (r) { return '<tr><td>' + esc(r.q) + '</td><td>' + esc(r.a) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<h3 class="sp-h">Naikkan kata yang terlalu umum</h3>' +
      '<div class="scroll tcard"><table class="sp-table"><thead><tr><th>Kata umum</th><th>Alternatif (pilih yang paling tepat)</th></tr></thead><tbody>' +
        VOC.upgrades.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<h3 class="sp-h">Discourse marker lisan</h3>' +
      '<p class="sub">Penanda alur yang terdengar natural saat bicara. Variasikan supaya tidak and then terus.</p>' +
      '<div class="grid">' + VOC.markers.map(function (m) {
        return '<div class="card"><p class="group-title">' + esc(m.g) + '</p><div class="chips">' + m.w.map(function (w) { return '<span class="chip">' + esc(w) + '</span>'; }).join('') + '</div></div>';
      }).join('') + '</div>';
    topic();
  })();

  /* =========================================================
     KRITERIA & BAND
     ========================================================= */
  (function () {
    var root = document.getElementById('sp-band');
    if (!root) return;
    if (!BANDS) return fail(root, 'content/speaking-band.js');
    var levels = [9, 8, 7, 6, 5], targets = [6, 7, 8];
    var target = Number(store('target')) || 7;
    if (targets.indexOf(target) < 0) target = 7;

    function render() {
      var upKey = (target - 1) + '→' + target;
      root.innerHTML =
        '<h2>Kriteria &amp; band</h2>' +
        '<p class="sub">Empat kriteria dengan bobot sama. Deskripsi di bawah adalah parafrase bebas dari band descriptors resmi, supaya beda antar band lebih mudah dilihat.</p>' +
        '<ul class="tips sp-notes-list">' + BAND_NOTES.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' +
        '<div class="card sp-target"><p class="label">Target band</p>' +
          '<div class="subnav inner" role="group" aria-label="Target band">' + targets.map(function (t) {
            return '<button type="button" class="sbtn" data-t="' + t + '" aria-pressed="' + (t === target) + '">Band ' + t + '</button>';
          }).join('') + '</div>' +
          '<p class="meta">Baris band ' + target + ' disorot di tiap kriteria, beserta cara naik dari band ' + (target - 1) + '.</p></div>' +
        '<div class="sp-bands">' + BANDS.map(function (b) {
          return '<article class="card sp-crit"><p class="label">25% · ' + esc(b.short) + '</p><h3>' + esc(b.name) + '</h3>' +
            '<div class="sp-blist">' + levels.map(function (l) {
              return '<div class="sp-brow' + (l === target ? ' on' : '') + '"><b>' + l + '</b><p>' + esc(b.bands[l]) + '</p></div>';
            }).join('') + '</div>' +
            '<div class="sp-up"><p class="label">Naik ' + esc(upKey) + '</p><p>' + esc(b.up[upKey] || '') + '</p></div>' +
            '</article>';
        }).join('') + '</div>' +
        (BAND_SRC ? '<p class="meta sp-src">Sumber resmi: <a href="' + esc(BAND_SRC.u) + '" target="_blank" rel="noopener noreferrer">' + esc(BAND_SRC.t) + '</a>. Baca versi aslinya sebelum tes.</p>' : '');
      $$('[data-t]', root).forEach(function (btn) {
        btn.addEventListener('click', function () { target = Number(btn.getAttribute('data-t')); store('target', String(target)); render(); });
      });
    }
    render();
  })();
})();
