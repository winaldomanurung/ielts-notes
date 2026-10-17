/*
  Tab Structure: kalimat kompleks yang dibedah menjadi kerangka.
  Semua kalimat ditulis sendiri sebagai bahan belajar.

  Cara menambah kalimat: tambahkan objek di array `items` pada grup yang sesuai.
    k(teks, [alternatif], label)  = kata kerangka yang tetap (bisa diganti dengan alternatif)
    c(label, teks)                = isi yang kamu ganti dengan idemu sendiri
  Bagian digabung dengan spasi, jadi taruh tanda baca di akhir teks bagian.
*/
(function () {
  function k(t, a, l) { return { k: 1, t: t, a: a || [], l: l || 'Kerangka' }; }
  function c(l, t) { return { l: l, t: t }; }

  var G = [
    { id: 'kontras', name: 'Kontras & konsesi',
      about: 'Mengakui satu sisi lalu menegaskan sisi lain. Dipakai di body 2 (konsesi dan bantahan) dan di intro.',
      lex: ['nevertheless', 'nonetheless', 'even so', 'that said', 'on the contrary', 'by contrast', 'conversely', 'albeit'],
      items: [
        { fn: 'Konsesi dengan Although', use: 'Intro atau body. Klausa pertama = hal yang diakui, klausa kedua = posisimu.',
          p: [k('Although', ['Even though', 'While', 'Whilst'], 'Konjungsi konsesi'), c('Klausa konsesi', 'remote work saves commuting time,'), c('Klausa posisimu', 'it can leave employees feeling isolated.')],
          n: 'Jangan pakai but di klausa kedua. Although dan but tidak dipakai bersamaan.',
          ex2: 'While online shopping is convenient, it threatens many small local businesses.' },
        { fn: 'Konsesi dengan Despite', use: 'Sama dengan Although, tetapi bagian pertama berupa frasa nomina, bukan klausa.',
          p: [k('Despite', ['In spite of', 'Notwithstanding'], 'Preposisi konsesi'), c('Frasa nomina', 'the rising cost of tuition,'), c('Klausa posisimu', 'more students than ever are choosing to study abroad.')],
          n: 'Setelah Despite wajib nomina atau V-ing. Boleh juga Despite the fact that + klausa.',
          ex2: 'In spite of strict regulations, illegal dumping remains widespread in many cities.' },
        { fn: 'Konsesi dua tahap', use: 'Body 2. Mengakui keberatan terkuat, lalu membantahnya dalam satu kalimat.',
          p: [k('Admittedly,', ['It is true that', 'It cannot be denied that', 'Granted,'], 'Pembuka konsesi'), c('Keberatan', 'public transport is expensive to build;'), k('nevertheless,', ['however,', 'even so,', 'that said,'], 'Pembalik'), c('Bantahan', 'the savings in healthcare and fuel far exceed the initial cost.')],
          n: 'Titik koma sebelum nevertheless atau however. Setelah Granted tidak pakai that.',
          ex2: 'It is true that nuclear power carries risks; nevertheless, it produces far fewer emissions than coal.' },
        { fn: 'Kontras dua hal dengan Whereas', use: 'Membandingkan dua kelompok, tempat, atau waktu dalam satu kalimat.',
          p: [k('Whereas', ['While', 'Whilst'], 'Konjungsi kontras'), c('Hal A', 'urban residents tend to rely on public transport,'), c('Hal B', 'people in rural areas depend heavily on private cars.')],
          n: 'Hal A dan B sebaiknya paralel: subjek dan struktur kalimat sama.',
          ex2: 'Whereas older workers value job security, younger employees often prioritise flexibility.' }
      ] },

    { id: 'sebab', name: 'Sebab & akibat',
      about: 'Menjelaskan mengapa sesuatu terjadi dan apa dampaknya. Inti dari rantai alasan → mekanisme → dampak.',
      lex: ['stem from', 'be attributable to', 'give rise to', 'bring about', 'contribute to', 'consequently', 'as a consequence', 'thereby'],
      items: [
        { fn: 'Sebab dengan frasa nomina', use: 'Awal kalimat untuk menyebut penyebab sebagai nomina.',
          p: [k('Owing to', ['Due to', 'Because of', 'As a result of'], 'Preposisi sebab'), c('Frasa nomina penyebab', 'the rapid growth of online platforms,'), c('Klausa akibat', 'traditional bookshops have struggled to survive.')],
          n: 'Tidak boleh diikuti klausa lengkap (S + V). Kalau mau klausa, pakai because atau since.',
          ex2: 'As a result of prolonged drought, farmers in the region have lost a significant share of their harvest.' },
        { fn: 'Sebab dengan klausa', use: 'Menjelaskan mekanisme: apa yang terjadi dulu sehingga akibat muncul.',
          p: [k('Since', ['Because', 'As', 'Given that'], 'Konjungsi sebab'), c('Klausa sebab', 'housing costs have risen faster than wages,'), c('Klausa akibat', 'many young adults cannot afford to leave their parents\' homes.')],
          n: 'As dan Since di awal kalimat terdengar lebih formal daripada because.',
          ex2: 'Given that most jobs now require digital skills, schools should teach them from an early age.' },
        { fn: 'Akibat dengan which', use: 'Menambahkan dampak di akhir kalimat tanpa memulai kalimat baru.',
          p: [c('Klausa penyebab', 'Governments have cut funding for public libraries,'), k('which has led to', ['which has resulted in', 'which has contributed to', 'thereby causing'], 'Penghubung akibat'), c('Frasa nomina akibat', 'a sharp decline in reading among low-income children.')],
          n: 'Which merujuk ke seluruh klausa sebelumnya. Setelah led to / resulted in / contributed to wajib nomina.',
          ex2: 'Many factories discharge waste into rivers, which has resulted in serious damage to aquatic life.' },
        { fn: 'Akibat dengan so … that', use: 'Menunjukkan tingkat: sebab begitu besar sehingga akibat tertentu terjadi.',
          p: [c('Subjek + be', 'The cost of living in major cities has become'), k('so', ['so (+ adj)'], 'Penguat'), c('Kata sifat', 'high'), k('that', [], 'Penghubung'), c('Akibat', 'many skilled workers are moving to smaller towns.')],
          n: 'Dengan nomina pakai such: such a high cost of living that…',
          ex2: 'The pace of technological change has become so rapid that many workers must retrain every few years.' }
      ] },

    { id: 'contoh', name: 'Contoh & penjelasan',
      about: 'Menambah informasi dan contoh ke dalam kalimat tanpa memecahnya jadi kalimat pendek.',
      lex: ['for instance', 'a case in point', 'to illustrate', 'namely', 'in other words', 'that is to say', 'notably', 'particularly'],
      items: [
        { fn: 'Informasi tambahan dengan which', use: 'Menyisipkan penjelasan tentang topik di tengah kalimat.',
          p: [c('Subjek (topik)', 'Urbanisation,'), k('which', ['a process that'], 'Kata penghubung'), c('Informasi tambahan', 'has accelerated across Asia over recent decades,'), c('Predikat utama', 'places enormous pressure on housing.')],
          n: 'Dua koma mengapit informasi tambahan. Kalau dibuang, kalimat inti tetap utuh.',
          ex2: 'Climate change, which is driven largely by fossil fuel use, threatens coastal communities worldwide.' },
        { fn: 'Apposition (keterangan nomina)', use: 'Menjelaskan sebuah nomina dengan frasa nomina lain, tanpa kata penghubung.',
          p: [c('Subjek', 'Tourism,'), c('Keterangan nomina', 'a major source of income for many island nations,'), c('Predikat utama', 'can also damage fragile ecosystems.')],
          n: 'Keterangan nomina diapit dua koma dan tidak memakai which atau is.',
          ex2: 'Artificial intelligence, a technology once confined to research laboratories, now shapes everyday decisions.' },
        { fn: 'Contoh dengan such as', use: 'Menyebut contoh di akhir klaim umum.',
          p: [c('Klaim umum', 'Many governments have introduced incentives for clean energy,'), k('such as', ['including', 'notably', 'particularly'], 'Penanda contoh'), c('Contoh spesifik', 'tax reductions for households that install solar panels.')],
          n: 'Cukup satu atau dua contoh. Kalau contoh diawali for example, pakai kalimat baru.',
          ex2: 'Several industries are suffering from labour shortages, including construction and healthcare.' },
        { fn: 'Contoh dengan a case in point', use: 'Memperkenalkan satu contoh nyata (negara, kota, kasus) yang membuktikan klaim.',
          p: [c('Klaim umum', 'Several countries have restricted advertising aimed at children;'), k('a case in point is', ['a good example is', 'a clear illustration is'], 'Penanda contoh'), c('Contoh + detail', 'Sweden, where commercial advertising during children\'s programmes is banned.')],
          n: 'Where menambahkan detail tentang tempat. Pastikan contoh tidak mengarang fakta yang tidak kamu yakini.',
          ex2: 'Cities can reduce traffic by encouraging cycling; a good example is Copenhagen, where more than a third of commuters travel by bicycle.' }
      ] },

    { id: 'kondisi', name: 'Kondisi & syarat',
      about: 'Menyatakan apa yang terjadi jika sesuatu dilakukan. Sangat berguna untuk solusi dan prediksi.',
      lex: ['provided that', 'as long as', 'on condition that', 'in the event that', 'were it not for', 'otherwise', 'failing that'],
      items: [
        { fn: 'Kondisi nyata (first conditional)', use: 'Solusi dan prediksi yang realistis.',
          p: [k('If', ['Provided that', 'As long as', 'On condition that'], 'Pembuka kondisi'), c('Kondisi (present)', 'governments subsidise public transport,'), c('Hasil (will + V)', 'more commuters will leave their cars at home.')],
          n: 'Setelah If pakai present simple, bukan will.',
          ex2: 'Provided that teachers receive adequate training, new technology will improve learning outcomes.' },
        { fn: 'Kondisi hipotetis (second conditional)', use: 'Membayangkan keadaan yang tidak nyata untuk menunjukkan dampak.',
          p: [k('If', [], 'Pembuka kondisi'), c('Kondisi (past simple)', 'every household reduced its waste by half,'), c('Hasil (would + V)', 'landfill sites would last far longer.')],
          n: 'Untuk be pakai were untuk semua subjek: If I were…, If the government were…',
          ex2: 'If cities banned private cars from their centres, air quality would improve dramatically.' },
        { fn: 'Syarat negatif dengan Unless', use: 'Peringatan: apa yang terjadi bila tindakan tidak diambil.',
          p: [k('Unless', ['If … not'], 'Pembuka kondisi negatif'), c('Kondisi (present, bentuk positif)', 'stricter regulations are introduced,'), c('Hasil (will + V)', 'plastic pollution will continue to harm marine life.')],
          n: 'Unless sudah bermakna negatif, jadi klausanya positif.',
          ex2: 'Unless more young people take up nursing, hospitals will face severe staff shortages.' },
        { fn: 'Kondisi dengan Without', use: 'Versi ringkas dari kondisi, memakai nomina.',
          p: [k('Without', ['In the absence of'], 'Pembuka kondisi'), c('Frasa nomina', 'sustained investment in education,'), c('Hasil', 'developing economies will struggle to compete globally.')],
          n: 'Setelah Without wajib nomina atau V-ing, bukan klausa.',
          ex2: 'In the absence of clear guidelines, companies may collect personal data without users\' knowledge.' }
      ] },

    { id: 'timbang', name: 'Perbandingan & penimbangan',
      about: 'Menimbang dua sisi dan menyatakan mana yang lebih besar. Inti esai Advantages-Disadvantages dan Discussion.',
      lex: ['far outweigh', 'by far', 'considerably', 'marginally', 'to a lesser extent', 'on balance', 'all things considered', 'pale in comparison'],
      items: [
        { fn: 'Menimbang dengan outweigh', use: 'Penutup atau akhir body: menyatakan sisi yang menang.',
          p: [c('Sisi yang menang', 'The long-term environmental benefits of recycling'), k('far outweigh', ['clearly outweigh', 'considerably outweigh', 'more than compensate for'], 'Kata kerja timbang'), c('Sisi yang kalah', 'the initial cost of setting up collection systems.')],
          n: 'Subjek jamak: outweigh. Subjek tunggal: outweighs.',
          ex2: 'The convenience of digital payments clearly outweighs the small risk of online fraud.' },
        { fn: 'Menimbang dengan While', use: 'Mengakui satu faktor, menegaskan faktor yang lebih penting.',
          p: [k('While', ['Whilst', 'Although'], 'Konjungsi'), c('Faktor yang diakui', 'cost is undoubtedly a factor,'), c('Faktor yang lebih penting', 'safety is a far more important consideration when choosing a means of transport.')],
          n: 'Tambahkan kata penguat seperti far more, much more, considerably more.',
          ex2: 'While speed matters in emergency services, accuracy is considerably more important.' },
        { fn: 'Perbandingan berkorelasi', use: 'Menunjukkan dua hal yang bergerak bersama (tren).',
          p: [k('The', [], 'Penanda'), c('Bentuk komparatif 1 + klausa', 'more people rely on digital payments,'), k('the', [], 'Penanda'), c('Bentuk komparatif 2 + klausa', 'less cash circulates in the economy.')],
          n: 'Kedua bagian diawali the + komparatif: the more…, the less…',
          ex2: 'The longer people spend on social media, the more anxious they tend to become.' },
        { fn: 'Perbandingan dua pendekatan', use: 'Membandingkan dua metode, kebijakan, atau kelompok.',
          p: [k('Compared with', ['In comparison with', 'Unlike', 'In contrast to'], 'Pembuka perbandingan'), c('Pembanding', 'traditional lectures,'), c('Hal utama + hasil', 'interactive workshops enable students to retain information far more effectively.')],
          n: 'Pastikan yang dibandingkan sejenis: workshops dengan lectures, bukan dengan lecturers.',
          ex2: 'Unlike printed newspapers, online news sites can update stories within minutes.' }
      ] },

    { id: 'opini', name: 'Opini & hedging',
      about: 'Menyatakan pendapat dengan nada akademik: tidak terlalu mutlak, tetapi tetap jelas.',
      lex: ['arguably', 'to a certain extent', 'by and large', 'in the main', 'tend to', 'are likely to', 'may well', 'it seems that'],
      items: [
        { fn: 'Menanggapi pandangan umum', use: 'Intro. Menyebut pandangan umum lalu membantahnya dengan posisimu.',
          p: [k('It is widely believed that', ['It is often argued that', 'There is a common perception that', 'Many people assume that'], 'Pembuka pandangan umum'), c('Pandangan umum', 'children benefit from competitive sports,'), k('but', ['yet', 'whereas'], 'Pembalik'), k('I would argue that', ['I firmly believe that', 'My own view is that', 'I am convinced that'], 'Pembuka posisi'), c('Posisimu', 'cooperative activities teach more valuable skills.')],
          n: 'Cocok untuk soal opinion dan discussion.',
          ex2: 'Many people assume that technology makes life easier, but I would argue that it often creates new pressures.' },
        { fn: 'Hedging dengan kata kerja modal', use: 'Menghindari klaim mutlak sehingga argumen terasa matang.',
          p: [c('Subjek', 'Smartphones'), k('tend to', ['are likely to', 'may well', 'are inclined to'], 'Pelunak'), c('Kata kerja + objek', 'distract students from their studies,'), k('although', ['though', 'even though'], 'Penghubung'), c('Batasan', 'this is not always the case.')],
          n: 'Hindari kata mutlak: always, never, all, everyone, completely, kecuali memang tepat.',
          ex2: 'Young people are inclined to change jobs frequently, although there are many exceptions.' },
        { fn: 'Hedging dengan frasa tingkat', use: 'Menyatakan setuju sebagian atau kebenaran yang terbatas.',
          p: [k('To a large extent,', ['In many respects,', 'Up to a point,', 'To some degree,'], 'Pelunak'), c('Klaim berkualifikasi', 'the success of a school depends on the quality of its teachers.')],
          n: 'To a large extent menyatakan setuju kuat. Up to a point menyatakan setuju lemah.',
          ex2: 'Up to a point, governments can influence how much citizens save.' },
        { fn: 'Meminta pembaca mempertimbangkan', use: 'Argumen yang diajukan sebagai bahan pertimbangan, bukan perintah.',
          p: [k('It could be argued that', ['It might be said that', 'One could claim that'], 'Pembuka klaim'), c('Klaim', 'society benefits more from investing in prevention than in treatment,'), k('since', ['because', 'as'], 'Penghubung'), c('Alasan', 'early intervention reduces long-term healthcare costs.')],
          n: 'Cocok untuk membawakan sudut pandang pihak lain tanpa menyatakan itu opinimu.',
          ex2: 'It might be said that public parks are a luxury, but they improve both health and community life.' }
      ] },

    { id: 'solusi', name: 'Solusi & saran',
      about: 'Mengusulkan tindakan dengan aktor yang jelas. Wajib untuk Problem-Solution dan Two-Part.',
      lex: ['tackle', 'curb', 'mitigate', 'address', 'implement', 'introduce', 'incentivise', 'put in place'],
      items: [
        { fn: 'Aktor + tindakan + cara', use: 'Satu kalimat berisi siapa, mau mencapai apa, dan dengan cara apa.',
          p: [c('Aktor', 'Governments'), k('could', ['should', 'ought to', 'are well placed to'], 'Modal'), c('Tujuan (V1 + objek)', 'reduce traffic congestion'), k('by', ['through', 'by means of'], 'Penanda cara'), c('Cara (V-ing)', 'investing in reliable and affordable public transport.')],
          n: 'Setelah by wajib V-ing. Gunakan aktor yang berbeda untuk solusi berbeda.',
          ex2: 'Schools could improve attendance by offering free meals to students from low-income families.' },
        { fn: 'Satu langkah beserta dampaknya', use: 'Awal paragraf solusi: usulan lalu hasil yang diharapkan.',
          p: [k('One effective measure would be to', ['A practical solution would be to', 'A more sustainable approach would be to', 'The most direct way to tackle this would be to'], 'Pembuka usulan'), c('Tindakan', 'introduce a congestion charge in city centres,'), k('which would', ['which could', 'which is likely to'], 'Penghubung dampak'), c('Dampak (V1)', 'discourage unnecessary car journeys.')],
          n: 'Setelah to wajib kata kerja dasar. Setelah which would juga kata kerja dasar.',
          ex2: 'A practical solution would be to set a daily limit on children\'s screen time, which would encourage them to play outdoors.' },
        { fn: 'Keharusan dengan subjunctive', use: 'Menekankan bahwa sesuatu harus dilakukan, lebih kuat daripada should.',
          p: [k('It is essential that', ['It is vital that', 'It is imperative that', 'It is crucial that'], 'Pembuka keharusan'), c('Subjek', 'schools'), c('Kata kerja dasar + objek', 'teach students how to evaluate online information critically.')],
          n: 'Kata kerja memakai bentuk dasar tanpa -s: It is essential that she study, bukan studies.',
          ex2: 'It is vital that every employee receive basic first-aid training.' },
        { fn: 'Menunjuk tanggung jawab', use: 'Menyebut siapa yang seharusnya bertindak.',
          p: [k('The onus is on', ['The responsibility lies with', 'It is incumbent upon'], 'Penanda tanggung jawab'), c('Aktor', 'employers'), c('Tugas (to + V)', 'to provide safe working conditions for all staff.')],
          n: 'Cocok di awal paragraf solusi atau di penutup.',
          ex2: 'The responsibility lies with manufacturers to reduce unnecessary packaging.' }
      ] },

    { id: 'lanjut', name: 'Struktur lanjutan',
      about: 'Struktur yang menunjukkan range tata bahasa. Pakai secukupnya, dua atau tiga kali per esai, dan pastikan akurat.',
      lex: ['having + V3', 'it is … that', 'not only … but also', 'only by … can', 'the + noun + of', 'rarely', 'seldom'],
      items: [
        { fn: 'Participle clause (Having + V3)', use: 'Menggabungkan dua tindakan berurutan oleh subjek yang sama.',
          p: [k('Having', [], 'Pembuka participle'), c('V3 + objek', 'recognised the risks of a sedentary lifestyle,'), c('Klausa utama (subjek sama)', 'many companies now offer employees gym memberships.')],
          n: 'Subjek klausa utama harus yang melakukan tindakan pertama. Kalau tidak, kalimat jadi salah.',
          ex2: 'Having experienced rapid economic growth, the country now faces serious pollution problems.' },
        { fn: 'Nominalisasi', use: 'Mengubah kata kerja atau sifat menjadi nomina agar terdengar akademik.',
          p: [k('The growing', ['The rapid', 'The steady', 'The widespread'], 'Penanda tren'), c('Nomina (dari verba)', 'dependence on smartphones'), k('has raised concerns about', ['has given rise to concerns about', 'has prompted concerns about', 'has fuelled concerns about'], 'Kata kerja dampak'), c('Isu', 'attention spans among teenagers.')],
          n: 'Contoh: depend → dependence, grow → growth, increase → rise, decide → decision.',
          ex2: 'The steady decline in birth rates has prompted concerns about the future workforce.' },
        { fn: 'Cleft sentence (It is … that)', use: 'Menyorot faktor yang paling penting sebagai penyebab.',
          p: [k('It is', [], 'Pembuka'), c('Fokus', 'the lack of affordable housing'), k('that', ['which'], 'Penghubung'), c('Sisa kalimat', 'forces many young people to remain with their parents.')],
          n: 'Fokus bisa berupa nomina atau frasa. Jangan berlebihan, cukup sekali per esai.',
          ex2: 'It is the high cost of childcare that discourages many couples from having more children.' },
        { fn: 'Inversi dengan Not only', use: 'Menambahkan dua manfaat atau dua dampak dengan penekanan.',
          p: [k('Not only does', ['Not only do', 'Not only has'], 'Pembuka inversi'), c('Subjek + V dasar', 'regular exercise improve physical health,'), k('but it also', ['but also'], 'Penghubung'), c('Tambahan', 'reduces stress and anxiety.')],
          n: 'Setelah Not only, auxiliary dulu baru subjek, lalu kata kerja bentuk dasar.',
          ex2: 'Not only do public libraries lend books, but they also provide free internet access.' },
        { fn: 'Inversi dengan Only by', use: 'Menyatakan satu-satunya cara untuk mencapai tujuan.',
          p: [k('Only by', ['Only through'], 'Pembuka inversi'), c('V-ing', 'investing in renewable energy'), k('can', ['will', 'could'], 'Auxiliary'), c('Subjek + V dasar', 'countries meet their emission targets.')],
          n: 'Auxiliary muncul sebelum subjek: can countries, bukan countries can.',
          ex2: 'Only through sustained cooperation can nations tackle global health threats.' }
      ] }
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function split(t) { var m = t.match(/^(.*?)([,.;:]*)$/); return [m[1], m[2]]; }
  var root = document.getElementById('str');
  if (!root) return;
  var key = 'catatan-ielts-str', cur = 0;
  try { var sv = parseInt(localStorage.getItem(key), 10); if (sv >= 0 && sv < G.length) cur = sv; } catch (e) {}

  function card(it, n) {
    var sent = it.p.map(function (x, i) { return '<span class="' + (x.k ? 'sk' : 'sc') + '">' + esc(x.t) + '</span>'; }).join(' ');
    var form = it.p.map(function (x) { var s = split(x.t); return x.k ? '<b>' + esc(s[0]) + '</b>' + esc(s[1]) : '[' + esc(x.l) + ']' + esc(s[1]); }).join(' ');
    var tpl = it.p.map(function (x) { var s = split(x.t); return x.k ? esc(x.t) : '<span class="slot">' + esc(x.l) + '</span>' + esc(s[1]); }).join(' ');
    var rows = it.p.map(function (x) {
      var alts = x.k && x.a.length ? '<div class="chips">' + x.a.map(function (a) { return '<span class="chip">' + esc(a) + '</span>'; }).join('') + '</div>' : (x.k ? '<span class="dim">tetap</span>' : '<span class="dim">ganti dengan idemu</span>');
      return '<div class="dr"><div class="dl">' + esc(x.l) + '</div><div class="dt"><span class="' + (x.k ? 'sk' : 'sc') + '">' + esc(x.t) + '</span></div><div class="da">' + alts + '</div></div>';
    }).join('');
    return '<article class="scard"><header><span class="sn">' + n + '</span><h3>' + esc(it.fn) + '</h3></header>' +
      '<p class="use">' + esc(it.use) + '</p>' +
      '<div class="sform">' + form + '</div>' +
      '<p class="sent">' + sent + '</p>' +
      '<div class="dis"><div class="dh"><span>Bagian</span><span>Teks di contoh</span><span>Bisa diganti dengan</span></div>' + rows + '</div>' +
      '<div class="tpl" data-label="Template siap pakai"><p>' + tpl + '</p></div>' +
      '<p class="note"><b>Catatan:</b> ' + esc(it.n) + '</p>' +
      '<p class="ex2"><b>Variasi:</b> ' + esc(it.ex2) + '</p></article>';
  }

  function render() {
    var g = G[cur];
    var nav = '<div class="subnav inner" role="group" aria-label="Fungsi kalimat">' + G.map(function (x, i) {
      return '<button type="button" class="sbtn" data-i="' + i + '" aria-pressed="' + (i === cur) + '">' + esc(x.name) + '</button>';
    }).join('') + '</div>';
    var body = '<h3 class="gname">' + esc(g.name) + ' <span>' + g.items.length + ' kalimat</span></h3><p class="sub">' + esc(g.about) + '</p>' +
      '<div class="stack">' + g.items.map(function (it, i) { return card(it, i + 1); }).join('') + '</div>' +
      '<h4 class="group-title">Kosakata pengganti untuk fungsi ini</h4><div class="chips">' + g.lex.map(function (a) { return '<span class="chip">' + esc(a) + '</span>'; }).join('') + '</div>';
    root.innerHTML = nav + body;
    Array.prototype.forEach.call(root.querySelectorAll('.sbtn'), function (b) {
      b.addEventListener('click', function () {
        cur = Number(b.getAttribute('data-i'));
        try { localStorage.setItem(key, String(cur)); } catch (e) {}
        render();
        var t = root.getBoundingClientRect().top + window.pageYOffset - 70;
        if (window.pageYOffset > t) window.scrollTo(0, t);
      });
    });
  }
  window.STRUCTURE = G;
  render();
})();
