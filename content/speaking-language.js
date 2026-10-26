/*
  Grammar dan kosakata versi lisan untuk Speaking. Terpisah dari tab Structure (yang khusus Writing).
  Semua contoh ditulis sendiri.

  SPEAKING_GRAMMAR: grup → items { fn, part, p, ex, n }
    p  = pola, bagian {{...}} tampil sebagai slot isian
    ex = contoh jawaban lisan
    n  = catatan pemakaian atau jebakan umum
  SPEAKING_TONE: pasangan gaya tulis (esai) → gaya ucap
  SPEAKING_ERRORS: kesalahan yang sering muncul pada penutur bahasa Indonesia
  SPEAKING_VOCAB: upgrade kata umum, cara memparafrase pertanyaan, kosakata per topik
*/
(function () {
  var grammar = [
    { id: 'masa-lalu', name: 'Kebiasaan & masa lalu',
      about: 'Paling sering dipakai di Part 1 (dulu vs sekarang) dan Part 2 (bercerita). Tense yang konsisten adalah sumber poin Grammar paling mudah.',
      items: [
        { fn: 'Kebiasaan dulu dengan used to', part: 'P1 · P3',
          p: 'I used to {{kebiasaan dulu}}, but these days I {{kebiasaan sekarang}}.',
          ex: 'I used to read a lot of novels, but these days I mostly read articles on my phone.',
          n: 'Used to + V1 (bukan V-ing). Hanya untuk masa lalu; untuk sekarang pakai usually.' },
        { fn: 'Kenangan berulang dengan would', part: 'P2',
          p: 'When I was a kid, my {{orang}} would {{kebiasaan}} every {{waktu}}.',
          ex: 'When I was a kid, my grandfather would take me fishing every Sunday morning.',
          n: 'Would untuk tindakan berulang saja, bukan keadaan. Benar: I used to live in Bogor. Salah: I would live in Bogor.' },
        { fn: 'Durasi sampai sekarang', part: 'P1',
          p: 'I\'ve been {{V-ing}} for {{durasi}}, ever since {{titik awal}}.',
          ex: 'I\'ve been working there for about five years, ever since I finished my degree.',
          n: 'Jawaban untuk How long…? Jangan pakai present simple: I work here for five years itu salah.' },
        { fn: 'Latar cerita dengan past continuous', part: 'P2',
          p: 'I was {{V-ing kegiatan latar}} when {{kejadian utama, past simple}}.',
          ex: 'I was waiting for my flight when the airline announced a four-hour delay.',
          n: 'Latar = past continuous, kejadian yang memotong = past simple. Ini cara cepat menunjukkan range tense di Part 2.' },
        { fn: 'Pengalaman dengan present perfect', part: 'P1 · P2',
          p: 'I\'ve {{V3}} {{berapa kali / never}}, and {{komentar singkat}}.',
          ex: 'I\'ve been to Bali three times, and I honestly never get tired of it.',
          n: 'Kalau menyebut waktu spesifik (last year, in 2019), pindah ke past simple.' }
      ] },
    { id: 'banding', name: 'Perubahan & perbandingan',
      about: 'Penguji sering bertanya "Has it changed?" atau "Is it different from…?". Pola ini membuat jawaban otomatis lebih panjang dan lebih kompleks.',
      items: [
        { fn: 'Dulu vs sekarang', part: 'P1 · P3',
          p: 'Compared to {{waktu lalu}}, {{hal}} is {{komparatif}} now, mainly because {{alasan}}.',
          ex: 'Compared to ten years ago, my hometown is far more crowded now, mainly because of new factories.',
          n: 'Tambahkan penguat: far, much, a lot, slightly, a bit + komparatif.' },
        { fn: 'Tidak sama dengan not as … as', part: 'P1 · P3',
          p: '{{A}} isn\'t as {{adjektiva}} as {{B}}, but {{kelebihan A}}.',
          ex: 'Online classes aren\'t as engaging as face-to-face ones, but they\'re much more flexible.',
          n: 'Cara halus menyatakan kekurangan tanpa terdengar negatif.' },
        { fn: 'Makin … makin', part: 'P3',
          p: 'The {{komparatif}} {{klausa 1}}, the {{komparatif}} {{klausa 2}}.',
          ex: 'The more time people spend online, the less patient they seem to become.',
          n: 'Satu kalimat seperti ini di Part 3 sudah menunjukkan struktur kompleks.' },
        { fn: 'Perubahan bertahap', part: 'P3',
          p: '{{Hal}} has become {{komparatif}} over the last few years, and I think it\'ll keep {{V-ing}}.',
          ex: 'Working from home has become much more common over the last few years, and I think it\'ll keep growing.',
          n: 'Menggabungkan present perfect (sudah terjadi) dan will (prediksi) dalam satu jawaban.' }
      ] },
    { id: 'spekulasi', name: 'Spekulasi & masa depan',
      about: 'Inti Part 3: penguji bertanya tentang masa depan dan masyarakat. Jawaban yang terlalu yakin terdengar kaku; jawaban yang bisa menebak dengan wajar terdengar matang.',
      items: [
        { fn: 'Menebak dengan modal', part: 'P3',
          p: 'I suppose {{subjek}} might {{prediksi}}, although {{batasan}}.',
          ex: 'I suppose robots might take over some factory jobs, although people will still need to maintain them.',
          n: 'Variasi: could, may well, will probably. Hindari I think berturut-turut di setiap jawaban.' },
        { fn: 'Prediksi dengan likely', part: 'P3',
          p: 'It\'s quite likely that {{prediksi}}, especially if {{kondisi}}.',
          ex: 'It\'s quite likely that more people will cycle to work, especially if cities build safer bike lanes.',
          n: 'Likely bisa juga dipakai sebagai: People are likely to…' },
        { fn: 'Tidak kaget kalau…', part: 'P3',
          p: 'I wouldn\'t be surprised if {{prediksi, past simple}} in the next {{waktu}}.',
          ex: 'I wouldn\'t be surprised if most shops stopped accepting cash in the next ten years.',
          n: 'Setelah if di pola ini pakai past simple, karena masih hipotesis.' },
        { fn: 'Membayangkan', part: 'P3',
          p: 'I can see {{subjek}} {{V-ing}} in the future, simply because {{alasan}}.',
          ex: 'I can see more companies offering four-day weeks in the future, simply because staff are more productive.',
          n: 'Natural dan jarang dipakai kandidat lain, jadi menonjol di Lexical Resource juga.' }
      ] },
    { id: 'kondisi', name: 'Kondisi & hipotesis',
      about: 'Muncul ketika penguji bertanya "Would you…?" atau "What if…?". Second conditional wajib lancar.',
      items: [
        { fn: 'Kalau ada kesempatan', part: 'P1 · P2',
          p: 'If I had the chance, I\'d {{keinginan}}, because {{alasan}}.',
          ex: 'If I had the chance, I\'d study in the UK, because I\'ve always wanted to experience life abroad.',
          n: 'If + past simple, lalu would. Jawaban yang paling aman untuk "Would you like to…?"' },
        { fn: 'Penyesalan atau masa lalu yang berbeda', part: 'P2',
          p: 'If I hadn\'t {{V3}}, I probably wouldn\'t have {{V3}}.',
          ex: 'If I hadn\'t joined that project, I probably wouldn\'t have found out how much I enjoy leading a team.',
          n: 'Third conditional. Cukup sekali per tes; terlalu sering terdengar dipaksakan.' },
        { fn: 'Syarat dengan as long as', part: 'P3',
          p: '{{Hal}} can be really useful, as long as {{syarat}}.',
          ex: 'Social media can be really useful for students, as long as they don\'t let it take over their study time.',
          n: 'Cara cepat memberi jawaban seimbang tanpa harus bilang it depends.' },
        { fn: 'Tergantung, tapi jelas', part: 'P3',
          p: 'It depends on {{faktor}}. If {{kondisi A}}, then {{hasil A}}, but if {{kondisi B}}, {{hasil B}}.',
          ex: 'It depends on the age of the child. If they\'re under ten, then parents should decide, but if they\'re teenagers, they need some freedom.',
          n: 'It depends saja tanpa penjelasan adalah jawaban lemah. Selalu sebutkan dua kondisinya.' }
      ] },
    { id: 'opini', name: 'Preferensi & penekanan',
      about: 'Cleft sentence dan pola preferensi membuat jawaban terdengar natural dan menunjukkan range tanpa terasa seperti hafalan.',
      items: [
        { fn: 'Lebih memilih', part: 'P1',
          p: 'I\'d rather {{V1}} than {{V1}}, to be honest. {{alasan}}.',
          ex: 'I\'d rather cook at home than eat out, to be honest. It\'s cheaper and I know exactly what goes into the food.',
          n: 'I\'d rather + V1 (tanpa to). Variasi: I prefer X to Y / I prefer V-ing to V-ing.' },
        { fn: 'Cleft dengan What', part: 'P1 · P2',
          p: 'What I {{like / enjoy / find hard}} most about {{hal}} is {{jawaban}}.',
          ex: 'What I enjoy most about my job is that no two days are the same.',
          n: 'Cleft sentence adalah struktur kompleks yang terdengar sangat natural saat diucapkan.' },
        { fn: 'Penekanan dengan The thing is', part: 'P1 · P3',
          p: 'The thing is, {{alasan utama}}, so {{akibat}}.',
          ex: 'The thing is, most people don\'t have time to cook during the week, so they rely on takeaways.',
          n: 'Pembuka khas bahasa lisan untuk menjelaskan alasan. Jangan dipakai di Writing.' },
        { fn: 'Penekanan dengan It\'s … that', part: 'P3',
          p: 'It\'s not {{hal A}} that {{klausa}}, it\'s {{hal B}}.',
          ex: 'It\'s not the price that stops people using public transport, it\'s how unreliable it is.',
          n: 'Bagus untuk membantah anggapan umum di Part 3.' }
      ] },
    { id: 'detail', name: 'Menambah detail',
      about: 'Cara memperpanjang jawaban tanpa memulai kalimat baru terus-menerus, sehingga Fluency dan Grammar sama-sama naik.',
      items: [
        { fn: 'Which is why', part: 'P1 · P3',
          p: '{{Fakta}}, which is why {{akibat}}.',
          ex: 'My shift starts very early, which is why I usually go to bed before ten.',
          n: 'Which merujuk ke seluruh klausa sebelumnya. Ini pengganti so yang lebih bervariasi.' },
        { fn: 'The kind of … where', part: 'P2',
          p: 'It\'s the kind of {{place / person / day}} where {{deskripsi}}.',
          ex: 'It\'s the kind of café where you can sit for hours and nobody rushes you.',
          n: 'Where untuk tempat, who untuk orang, when untuk waktu.' },
        { fn: 'Klausa partisipel', part: 'P2',
          p: '{{V-ing}} {{keterangan}}, I {{tindakan utama}}.',
          ex: 'Having never done anything like it before, I was pretty nervous at first.',
          n: 'Subjek kedua bagian harus sama (I). Salah: Walking home, the rain started.' },
        { fn: 'Bahkan / apalagi', part: 'P1 · P3',
          p: '{{Klaim}}, let alone {{hal yang lebih ekstrem}}.',
          ex: 'I can barely find time to cook breakfast, let alone go to the gym before work.',
          n: 'Idiomatis tapi tidak berlebihan. Klausa pertama biasanya bernada negatif.' }
      ] }
  ];

  var tone = [
    ['It is widely believed that…', 'A lot of people think…'],
    ['Furthermore, / Moreover,', 'On top of that, / Plus,'],
    ['Nevertheless, / Nonetheless,', 'Even so, / That said,'],
    ['In conclusion,', 'So all in all, / So yeah, overall…'],
    ['This essay will discuss…', '(tidak dipakai, langsung jawab)'],
    ['A significant proportion of individuals', 'Quite a lot of people'],
    ['Consequently,', 'So, / Because of that,'],
    ['Admittedly,', 'I mean, to be fair,'],
    ['I firmly believe that…', 'I\'d say… / Personally, I think…'],
    ['do not, it is, cannot', 'don\'t, it\'s, can\'t (kontraksi justru natural)']
  ];

  var errors = [
    { e: 'He/she tertukar', w: 'My mother is a teacher. He teaches maths.', r: 'My mother is a teacher. She teaches maths.', why: 'Bahasa Indonesia hanya punya "dia". Saat bercerita tentang satu orang di Part 2, cek ulang setiap kata ganti.' },
    { e: 'Tense cerita tidak konsisten', w: 'Last year I go to Bali and I see the beach.', r: 'Last year I went to Bali and saw the beach.', why: 'Part 2 hampir selalu cerita masa lalu. Kunci tense di kalimat pertama lalu pertahankan.' },
    { e: 'Akhiran -s hilang', w: 'My brother work in Jakarta. I have two sister.', r: 'My brother works in Jakarta. I have two sisters.', why: 'Kena di Grammar dan Pronunciation sekaligus. Ucapkan -s dengan jelas.' },
    { e: 'Agree diperlakukan seperti adjektiva', w: 'I am agree with that.', r: 'I agree with that.', why: 'Agree adalah kata kerja, jadi tidak pakai am.' },
    { e: 'Artikel hilang', w: 'I live in small house near airport.', r: 'I live in a small house near the airport.', why: 'Benda tunggal yang bisa dihitung hampir selalu butuh a/an atau the.' },
    { e: 'Terjemahan langsung', w: 'I very like coffee. / Until now I still…', r: 'I really like coffee. / I still… (to this day)', why: 'Very tidak bisa langsung di depan kata kerja. Until now bukan padanan "sampai sekarang" untuk keadaan yang masih berlangsung.' },
    { e: 'Make, do, take tertukar', w: 'I do a decision. I make my homework.', r: 'I make a decision. I do my homework. I take a photo.', why: 'Kolokasi seperti ini dinilai di Lexical Resource. Hafalkan sebagai satu frasa.' },
    { e: 'Bored dan boring tertukar', w: 'I am boring at home.', r: 'I get bored at home. The film was boring.', why: '-ed untuk perasaan orang, -ing untuk sifat hal yang menyebabkannya.' }
  ];

  var vocab = {
    upgrades: [
      ['good', 'rewarding, worthwhile, beneficial, enjoyable, decent'],
      ['bad', 'frustrating, disappointing, harmful, not ideal'],
      ['big', 'huge, massive, considerable, spacious (ruangan)'],
      ['very', 'really, incredibly, extremely, pretty (santai)'],
      ['many', 'a lot of, loads of, a wide range of, plenty of'],
      ['like', 'be into, be keen on, be a big fan of, enjoy'],
      ['don\'t like', 'not really my thing, can\'t stand, not a big fan of'],
      ['important', 'essential, crucial, a big deal (santai)'],
      ['difficult', 'challenging, tricky, demanding'],
      ['interesting', 'fascinating, eye-opening, gripping (cerita)'],
      ['happy', 'thrilled, over the moon, really pleased'],
      ['tired', 'exhausted, worn out, drained']
    ],
    paraphrase: [
      { q: 'Do you like reading?', a: 'Yeah, I\'m quite into it, especially…' },
      { q: 'Is it popular in your country?', a: 'It\'s pretty common here, particularly among…' },
      { q: 'Do you often cook?', a: 'I cook fairly regularly, maybe three or four times a week.' },
      { q: 'Is it important to…?', a: 'I\'d say it\'s essential, because…' },
      { q: 'Why do people…?', a: 'I think the main reason people do that is…' },
      { q: 'Has it changed?', a: 'It\'s changed quite a bit, actually. Back then… whereas now…' }
    ],
    markers: [
      { g: 'Membuka jawaban', w: ['Actually,', 'To be honest,', 'Well, I\'d say…', 'Funnily enough,'] },
      { g: 'Menambah ide', w: ['On top of that,', 'Plus,', 'And another thing is…', 'Not to mention…'] },
      { g: 'Memberi contoh', w: ['For instance,', 'Take … for example.', 'Like, say,…', 'A good example would be…'] },
      { g: 'Menyeimbangkan', w: ['That said,', 'Having said that,', 'On the other hand,', 'Then again,'] },
      { g: 'Memperbaiki diri', w: ['Or rather,', 'What I mean is…', 'Let me put it another way.', 'Sorry, I meant…'] },
      { g: 'Menutup', w: ['So yeah, overall…', 'So that\'s why…', 'All in all,', 'Anyway, that\'s basically it.'] }
    ],
    topics: [
      { name: 'Work', items: [
        ['work shifts / be on the night shift', 'I\'m on the night shift twice a week.'],
        ['be in charge of', 'I\'m in charge of a small maintenance team.'],
        ['a heavy workload', 'We have a heavy workload during the holiday season.'],
        ['meet a deadline', 'It\'s stressful when everyone is trying to meet the same deadline.'],
        ['job satisfaction', 'For me, job satisfaction matters more than salary.'],
        ['climb the career ladder', 'A lot of my friends want to climb the career ladder quickly.']
      ] },
      { name: 'Studies', items: [
        ['major in', 'I majored in mechanical engineering.'],
        ['hands-on experience', 'The course gave me plenty of hands-on experience.'],
        ['pick up (a skill)', 'I picked up most of my English from films.'],
        ['fall behind', 'If you miss a few classes, it\'s easy to fall behind.'],
        ['a steep learning curve', 'The first year was a steep learning curve.'],
        ['broaden my horizons', 'Studying abroad would really broaden my horizons.']
      ] },
      { name: 'Hometown & city', items: [
        ['a bustling city', 'Jakarta is a bustling city that never really sleeps.'],
        ['a laid-back town', 'My hometown is much more laid-back.'],
        ['traffic congestion', 'Traffic congestion is the biggest problem there.'],
        ['the cost of living', 'The cost of living has gone up a lot.'],
        ['on the outskirts', 'I live on the outskirts, about an hour from the centre.'],
        ['get a bit of a facelift', 'The old market recently got a bit of a facelift.']
      ] },
      { name: 'Free time', items: [
        ['unwind / wind down', 'I usually go for a run to unwind after work.'],
        ['take up (a hobby)', 'I took up running again last year.'],
        ['a great way to switch off', 'Gaming is a great way to switch off.'],
        ['kill time', 'I watch short videos to kill time on the bus.'],
        ['have a go at', 'I\'d love to have a go at rock climbing.'],
        ['catch up with friends', 'At weekends I usually catch up with friends.']
      ] },
      { name: 'Technology', items: [
        ['be glued to (a screen)', 'Teenagers are glued to their phones these days.'],
        ['tech-savvy', 'My younger brother is far more tech-savvy than me.'],
        ['user-friendly', 'The app is really user-friendly.'],
        ['a double-edged sword', 'Social media is a bit of a double-edged sword.'],
        ['keep up with', 'It\'s hard for older people to keep up with new apps.'],
        ['screen time', 'I\'m trying to cut down on my screen time.']
      ] },
      { name: 'Health & lifestyle', items: [
        ['stay in shape', 'I run three times a week to stay in shape.'],
        ['a sedentary lifestyle', 'Office jobs often lead to a sedentary lifestyle.'],
        ['cut down on', 'I\'ve cut down on sugary drinks.'],
        ['get enough sleep', 'Shift workers often struggle to get enough sleep.'],
        ['a balanced diet', 'A balanced diet is easier when you cook at home.'],
        ['burn out', 'If you work non-stop, you\'re likely to burn out.']
      ] },
      { name: 'Travel', items: [
        ['off the beaten track', 'I prefer places that are a bit off the beaten track.'],
        ['a tourist trap', 'Some famous markets are just tourist traps.'],
        ['soak up the atmosphere', 'We spent the evening soaking up the atmosphere.'],
        ['go sightseeing', 'We went sightseeing on the first day.'],
        ['a once-in-a-lifetime experience', 'Seeing the sunrise there was a once-in-a-lifetime experience.'],
        ['get away from it all', 'Sometimes I just want to get away from it all.']
      ] },
      { name: 'People & relationships', items: [
        ['get on well with', 'I get on really well with my colleagues.'],
        ['look up to', 'I\'ve always looked up to my father.'],
        ['keep in touch', 'We still keep in touch even though we live far apart.'],
        ['down-to-earth', 'She\'s very down-to-earth, despite being successful.'],
        ['have a lot in common', 'We have a lot in common, so we never run out of things to talk about.'],
        ['lose touch', 'I\'ve lost touch with most of my school friends.']
      ] },
      { name: 'Environment', items: [
        ['carbon footprint', 'Flying less is the easiest way to reduce your carbon footprint.'],
        ['single-use plastic', 'A lot of shops have stopped giving out single-use plastic bags.'],
        ['go green', 'More companies are trying to go green.'],
        ['public awareness', 'Public awareness has improved a lot recently.'],
        ['take action', 'Governments need to take action rather than just talk.'],
        ['renewable energy', 'Renewable energy is becoming much cheaper.']
      ] },
      { name: 'Education & society', items: [
        ['rote learning', 'Our school system relied heavily on rote learning.'],
        ['critical thinking', 'Schools should focus more on critical thinking.'],
        ['the generation gap', 'The generation gap is obvious when it comes to technology.'],
        ['peer pressure', 'Peer pressure has a huge influence on teenagers.'],
        ['have access to', 'Not everyone has access to good schools.'],
        ['in the long run', 'It\'s more expensive at first but cheaper in the long run.']
      ] }
    ]
  };

  window.SPEAKING_GRAMMAR = grammar;
  window.SPEAKING_TONE = tone;
  window.SPEAKING_ERRORS = errors;
  window.SPEAKING_VOCAB = vocab;
})();
