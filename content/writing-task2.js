/*
  Konten Writing Task 2 (Academic).
  Semua esai dan kerangka di file ini ditulis sendiri sebagai bahan belajar.
  Esai contoh ditulis mengacu pada deskriptor Band 9, tetapi bukan penilaian resmi.

  Cara menambah esai: tambahkan objek baru di array `essays` pada jenis soal yang sesuai.
  Format slot di template: {{isi di sini}} akan tampil sebagai isian bergaris putus-putus.
*/

window.WRITING_REFS = [
  {
    t: 'IDP IELTS · Essay samples for band 9',
    u: 'https://ielts.idp.com/nepal/about/news-and-articles/article-ielts-essay-band-9',
    n: 'Artikel IDP berisi tips Task 2 dan dua esai contoh (teknologi dalam pendidikan, pemanasan global). Halaman ini tidak menyebut skor band tiap esai.'
  },
  {
    t: 'IDP IELTS · Memahami soal Writing Task 2',
    u: 'https://ielts.idp.com/southafrica/about/news-and-articles/article-how-to-understand-task-2-writing-questions',
    n: 'Panduan IDP untuk membaca dan mengenali jenis soal Task 2.'
  },
  {
    t: 'British Council · How to write an English essay for IELTS',
    u: 'https://takeielts.britishcouncil.org/blog/how-to-write-an-english-essay-for-ielts',
    n: 'Panduan menulis esai dari British Council, penyelenggara resmi IELTS.'
  },
  {
    t: 'IELTS.org · Beranda resmi',
    u: 'https://ielts.org',
    n: 'Cari “Writing band descriptors” untuk kriteria penilaian resmi yang dipakai penguji.'
  },
  {
    t: 'Buku Cambridge IELTS',
    u: '',
    n: 'Beberapa buku dalam seri ini memuat contoh jawaban Writing. Cek daftar isi sebelum membeli. Tidak ditautkan karena berbayar.'
  }
];

window.WRITING_T2 = [

/* ===================================================================== */
{
  id: 'opinion',
  name: 'Opinion',
  sub: 'Agree / Disagree',
  cue: 'Kata kunci di soal: To what extent do you agree or disagree? / Do you agree or disagree?',
  about: 'Kamu menilai satu pernyataan. Pilih satu posisi, lalu pertahankan dari intro sampai penutup.',
  map: [
    ['Intro', 'Parafrase soal + posisi'],
    ['Body 1', 'Alasan terkuat'],
    ['Body 2', 'Alasan kedua + konsesi'],
    ['Penutup', 'Tegaskan posisi']
  ],
  questions: [
    'Some people believe that the best way to reduce crime is to give longer prison sentences. To what extent do you agree or disagree?',
    'Many people think that schools should not give children homework. To what extent do you agree or disagree?',
    'Some argue that governments should spend money on public transport rather than building new roads. To what extent do you agree or disagree?',
    'It is sometimes said that studying history has little value in the modern world. Do you agree or disagree?',
    'Some people think that advertising aimed at children should be banned completely. To what extent do you agree or disagree?'
  ],
  thinking: [
    { t: 'Bedah soal', m: '1 mnt', q: [
      'Garis bawahi topik dan klaim yang diajukan soal.',
      'Tandai kata yang membuat klaim ekstrem: should, must, all, always, the best, completely. Posisimu harus menjawab klaim itu persis seperti tertulis.',
      'To what extent berarti kamu menjawab seberapa jauh setuju, bukan sekadar ya atau tidak.'
    ]},
    { t: 'Pilih posisi', m: '30 dtk', q: [
      'Pilih sisi yang paling mudah didukung dengan dua alasan dan satu contoh nyata, bukan sisi yang paling kamu yakini.',
      'Tentukan tingkatnya: setuju penuh, setuju sebagian, atau tidak setuju. Posisi sebagian sah, asal jelas bagian mana yang kamu setujui.'
    ]},
    { t: 'Brainstorm alasan', m: '2 mnt', q: [
      'Tulis tiga atau empat alasan, lalu pilih dua yang terkuat.',
      'Kembangkan tiap alasan dengan rantai: alasan → mengapa itu terjadi → contoh spesifik → dampak.',
      'Cari ide dari beberapa sudut: individu, masyarakat, ekonomi, lingkungan, jangka panjang.'
    ]},
    { t: 'Sisi lawan', m: '30 dtk', q: [
      'Apa keberatan terkuat terhadap posisimu?',
      'Siapkan satu kalimat konsesi (Admittedly…) dan satu kalimat bantahan (However…).'
    ]},
    { t: 'Peta dan uji konsistensi', m: '1 mnt', q: [
      'Tulis satu baris untuk tiap paragraf: intro, body 1, body 2, penutup.',
      'Uji: apakah thesis, topic sentence, dan penutup menyatakan posisi yang sama?'
    ]}
  ],
  writing: [
    { label: 'Intro', from: 'Dari tahap 1: hasil bedah soal, posisi, dan dua alasan terkuat.', lines: [
      ['Latar', '{{It is often claimed / A growing number of people believe}} that {{pernyataan soal dengan kata-katamu sendiri}}.'],
      ['Posisi', '{{I strongly agree / I largely agree / I partly agree / I disagree}} with this view, {{because / since}} {{ringkasan dua alasan}}.']
    ]},
    { label: 'Body 1 · alasan terkuat', from: 'Dari tahap 1: alasan 1 beserta rantainya.', lines: [
      ['Point', 'The first reason is that {{alasan 1}}.'],
      ['Explain', 'This is because {{mengapa itu terjadi}}.'],
      ['Example', 'For instance, {{contoh spesifik: orang, tempat, atau situasi}}.'],
      ['Link', 'As a result, {{dampak yang mengembalikan ke posisimu}}.']
    ]},
    { label: 'Body 2 · alasan kedua dan konsesi', from: 'Dari tahap 1: alasan 2 dan keberatan terkuat.', lines: [
      ['Point', 'A second {{benefit / consideration}} is that {{alasan 2}}.'],
      ['Explain + Example', '{{Mekanisme}}. For example, {{contoh}}.'],
      ['Konsesi', 'Admittedly, {{keberatan terkuat}}.'],
      ['Bantahan', 'However, {{mengapa keberatan itu tidak mengubah posisimu}}.']
    ]},
    { label: 'Penutup', from: 'Dari tahap 1: posisi, konsesi, dua alasan.', lines: [
      ['Rangkum', 'In conclusion, although {{konsesi}}, I {{believe / maintain}} that {{posisi}}, mainly because {{alasan 1}} and {{alasan 2}}.']
    ]}
  ],
  phrases: [
    { t: 'Menyatakan posisi', c: ['I strongly agree that…', 'I largely agree, although…', 'I agree up to a point, but…', 'I take a different view…'] },
    { t: 'Menambah alasan', c: ['The first reason is…', 'A second consideration is…', 'Equally important is…'] },
    { t: 'Konsesi dan bantahan', c: ['Admittedly, …', 'It is true that… Nevertheless, …', 'Critics may argue that… However, …'] }
  ],
  essays: [
    {
      q: 'Some people believe that university students should be required to complete a period of unpaid community service as part of their degree. To what extent do you agree or disagree?',
      plan: [
        'Posisi: setuju sebagian besar',
        'Alasan 1: keterampilan praktis dan kesadaran sosial → contoh mahasiswa kedokteran di klinik desa',
        'Alasan 2: kewajiban membuat partisipasi merata → siapa yang selama ini terlewat',
        'Konsesi: wajib itu kontradiktif → bantahan: mahasiswa memilih sendiri kegiatannya'
      ],
      paras: [
        { r: 'Intro', t: 'Calls for universities to make unpaid community service a compulsory part of every degree are growing. Although such a rule may seem an extra burden on students who are already stretched, I largely agree with it, because it teaches things that lectures cannot.' },
        { r: 'Body 1', t: 'The first reason is that service builds practical skills and social awareness that the classroom rarely reaches. A medical student who spends a semester helping at a rural clinic, for instance, learns to reassure anxious patients and to work with limited resources, abilities that no textbook fully conveys. Service also exposes students to problems they might otherwise only read about, such as homelessness or loneliness among elderly people, and that first-hand contact often shapes the careers they later choose. Employers value exactly these qualities, so the requirement is more likely to strengthen graduates\' prospects than to delay them.' },
        { r: 'Body 2', t: 'A second benefit is that compulsion widens participation. When volunteering is optional, it tends to attract students who already have free time, confidence and family encouragement, while those who work part-time or care for relatives rarely get the chance. Making service a degree requirement, with flexible scheduling, gives every student the same opportunity and gives communities a far broader pool of help. Admittedly, critics argue that compulsory volunteering is a contradiction in terms and may breed resentment. However, a programme in which students choose a cause that interests them largely answers this objection, and many participants find genuine motivation once they see the results of their effort.' },
        { r: 'Penutup', t: 'In conclusion, although mandatory service raises fair questions about freedom and workload, its value in developing real-world skills and ensuring equal access justifies making it part of a university degree.' }
      ],
      why: [
        'Posisi yang sama muncul di intro, topic sentence, dan penutup.',
        'Tiap alasan dikembangkan penuh: klaim, mekanisme, contoh spesifik, dampak.',
        'Konsesi dijawab dengan solusi konkret (memilih sendiri kegiatan), bukan sekadar “but”.'
      ]
    },
    {
      q: 'In many countries, more people are working from home. Some believe that, in the long term, this will completely replace the traditional office. To what extent do you agree or disagree?',
      plan: [
        'Posisi: tidak setuju pada kata “completely replace”',
        'Alasan 1: banyak pekerjaan butuh kehadiran fisik, dan tugas tertentu lebih baik tatap muka',
        'Alasan 2: kantor memenuhi kebutuhan sosial dan budaya kerja',
        'Konsesi: kerja hibrida akan makin umum → tetapi itu bukan penggantian total'
      ],
      paras: [
        { r: 'Intro', t: 'Improvements in video conferencing and cloud software have made working from home commonplace, and some commentators predict that offices will soon disappear altogether. I disagree with this view: remote work will remain an important option, but it is unlikely to replace the office completely.' },
        { r: 'Body 1', t: 'The main reason is that many jobs cannot be done from a kitchen table. Surgeons, engineers who maintain machinery and chefs, for example, depend on physical equipment and on colleagues working beside them. Even in desk-based professions, certain tasks resist remote delivery. Training new recruits, resolving a sensitive disagreement or developing a product idea in real time all work better face to face, where tone and body language are easy to read. A number of companies that went fully remote during the pandemic have since reintroduced regular office days for precisely these reasons.' },
        { r: 'Body 2', t: 'A second reason is that the office meets needs that technology does not. Many employees, particularly young graduates in small flats, lack a quiet and well-equipped space at home, and prolonged isolation can leave workers feeling disconnected from their teams. Employers, meanwhile, rely on shared spaces to build a common culture, which is hard to sustain through a screen. It is true that hybrid arrangements will become more widespread, since they save commuting time and widen the pool of available talent. Nevertheless, a blend of home and office is a very different outcome from the complete replacement that the statement predicts.' },
        { r: 'Penutup', t: 'In conclusion, while remote work will continue to grow, the nature of many jobs and the social value of a shared workplace mean that the traditional office is far more likely to evolve than to vanish.' }
      ],
      why: [
        'Menjawab klaim ekstrem dengan tepat: menerima tren, menolak kata “completely”.',
        'Contoh berbeda tiap alasan (profesi fisik, tugas tatap muka, kebutuhan sosial) sehingga tidak mengulang.',
        'Konsesi (hibrida) justru dipakai untuk mempertegas posisi lewat “Nevertheless”.'
      ]
    }
  ]
},

/* ===================================================================== */
{
  id: 'discussion',
  name: 'Discussion',
  sub: 'Discuss both views',
  cue: 'Kata kunci di soal: Discuss both views and give your own opinion.',
  about: 'Soal memuat dua pandangan. Bahas keduanya secara adil, lalu nyatakan opinimu dengan jelas.',
  map: [
    ['Intro', 'Dua pandangan + opini'],
    ['Body 1', 'Pandangan yang kurang kamu dukung'],
    ['Body 2', 'Pandangan yang kamu dukung'],
    ['Penutup', 'Opini + alasan utama']
  ],
  questions: [
    'Some people believe that tourism brings great benefits to local communities, while others think the harm outweighs the value. Discuss both views and give your own opinion.',
    'Some people prefer to live in a big city, while others prefer a small town or the countryside. Discuss both views and give your own opinion.',
    'Some people think that university education should be available to everyone, while others believe it should be limited to the most able students. Discuss both views and give your own opinion.',
    'Some argue that scientists should be free to research whatever they choose, while others believe governments should decide research priorities. Discuss both views and give your own opinion.',
    'Some people think schools should teach traditional crafts and skills, while others believe the focus should be modern technology. Discuss both views and give your own opinion.'
  ],
  thinking: [
    { t: 'Bedah soal', m: '1 mnt', q: [
      'Cari dua pandangan yang disebut soal (some people… others…) dan beri nama singkat: A dan B.',
      'Cek apakah ada kalimat give your own opinion. Kalau ada, opinimu wajib tampak jelas.'
    ]},
    { t: 'Putuskan opini lebih dulu', m: '30 dtk', q: [
      'Pilih pandangan yang kamu dukung, atau posisi tengah yang spesifik (misalnya A untuk situasi tertentu).',
      'Opini ini muncul di intro dan penutup, dan menjadi nada body kedua. Tanpa keputusan ini esai terdengar bingung.'
    ]},
    { t: 'Brainstorm kedua sisi', m: '2 mnt', q: [
      'Cari dua alasan terbaik untuk A dan dua untuk B. Tulis versi terkuat dari sisi yang tidak kamu dukung.',
      'Tiap alasan: mengapa → contoh.',
      'Tanyakan siapa yang berpikir begitu (orang tua, pemerintah, pelajar). Itu membantu menyebut kelompok dengan natural.'
    ]},
    { t: 'Alokasi paragraf', m: '30 dtk', q: [
      'Body 1 untuk pandangan yang kurang kamu dukung, body 2 untuk yang kamu dukung. Argumen terkuatmu jadi yang terakhir dibaca.',
      'Porsi kata kedua body kurang lebih sama.'
    ]},
    { t: 'Peta dan uji', m: '1 mnt', q: [
      'Tulis satu baris per paragraf.',
      'Uji: kedua pandangan dibahas adil? Opini terlihat di intro dan penutup?'
    ]}
  ],
  writing: [
    { label: 'Intro', from: 'Dari tahap 1: pandangan A, pandangan B, opinimu.', lines: [
      ['Latar', '{{Topik}} is a subject on which opinions differ.'],
      ['Dua pandangan', 'While some people believe that {{pandangan A}}, others argue that {{pandangan B}}.'],
      ['Opini', 'This essay will discuss both views before explaining why I {{favour A / favour B / take a middle position}}.']
    ]},
    { label: 'Body 1 · pandangan yang kurang kamu dukung', from: 'Dari tahap 1: dua alasan terbaik untuk sisi itu.', lines: [
      ['Pandangan', 'Those who favour {{pandangan A}} make a reasonable case.'],
      ['Alasan', 'They argue that {{alasan A1}}, because {{mekanisme}}.'],
      ['Contoh', 'For example, {{contoh}}.'],
      ['Tambahan', 'In addition, {{alasan A2 singkat}}.']
    ]},
    { label: 'Body 2 · pandangan yang kamu dukung', from: 'Dari tahap 1: opini, dua alasan, jawaban atas keberatan sisi A.', lines: [
      ['Opini', 'However, I find the case for {{pandangan B}} more persuasive.'],
      ['Alasan 1', '{{Alasan B1}}, since {{mekanisme}}. For instance, {{contoh}}.'],
      ['Alasan 2', 'Moreover, {{alasan B2}}.'],
      ['Jawab keberatan', 'The concern that {{keberatan dari sisi A}} can be met by {{jalan keluar}}.']
    ]},
    { label: 'Penutup', from: 'Dari tahap 1: opini dan alasan utamanya.', lines: [
      ['Rangkum', 'In conclusion, although {{pandangan A memiliki nilai}}, I believe that {{pandangan B}} because {{alasan utama}}.']
    ]}
  ],
  phrases: [
    { t: 'Memperkenalkan pandangan', c: ['Proponents of… argue that…', 'Those who favour… point out that…', 'Critics of… claim that…'] },
    { t: 'Beralih ke pandanganmu', c: ['However, I find… more persuasive.', 'Nevertheless, I tend to side with…', 'On balance, I believe…'] }
  ],
  essays: [
    {
      q: 'Some people believe that children should begin learning a foreign language in primary school, while others think it is better to wait until secondary school. Discuss both views and give your own opinion.',
      plan: [
        'A: mulai di SD. B: tunggu sampai SMP. Opini: mendukung A',
        'Body 1 (B): prioritas literasi dasar, kurikulum penuh, siswa SMP lebih matang secara kognitif',
        'Body 2 (A): pelafalan alami, belajar lewat permainan, jam latihan lebih banyak',
        'Jawab keberatan: kurikulum penuh → pelajaran singkat dan informal'
      ],
      paras: [
        { r: 'Intro', t: 'The age at which children should start learning a foreign language is a matter of ongoing debate. While some educators favour introducing it in primary school, others prefer to postpone it until secondary level. Although both positions have merit, I believe that an early start is preferable.' },
        { r: 'Body 1 · pandangan B', t: 'Those who favour waiting argue that young children have more urgent priorities. Primary schools must first secure strong literacy and numeracy in the pupils\' own language, and adding a second language too soon could, in this view, overload the curriculum and confuse weaker pupils. Secondary students, by contrast, are mature enough to grasp grammar rules explicitly and can use study techniques to progress quickly. Some research even suggests that older learners advance faster in the early stages, which implies that little is lost by starting later.' },
        { r: 'Body 2 · pandangan A', t: 'However, I find the case for an early start more persuasive. Young children absorb sounds naturally and are far less self-conscious about making mistakes, so they tend to achieve better pronunciation and greater confidence over time. Lessons at this age can also be playful, built around songs and games rather than grammar tables, which means that children associate the language with enjoyment instead of anxiety. Moreover, a child who begins at six has several more years of practice than a classmate who begins at twelve, and that accumulated exposure is what produces fluency. The concern about overcrowding the curriculum can be met by keeping early lessons short and informal.' },
        { r: 'Penutup', t: 'In conclusion, delaying language learning has some practical appeal, but the natural ability of young children and the benefit of prolonged practice make primary school the better starting point.' }
      ],
      why: [
        'Pandangan yang tidak didukung ditulis dengan versi terkuatnya, jadi esai terasa adil.',
        'Opini muncul di intro, di awal body 2 (“However, I find…”), dan di penutup.',
        'Keberatan terbesar dari sisi lawan dijawab di akhir body 2.'
      ]
    },
    {
      q: 'Some people think that museums and historic sites should be free for everyone to enter, while others believe that visitors should pay. Discuss both views and give your own opinion.',
      plan: [
        'A: tiket berbayar. B: masuk gratis. Opini: mendukung B',
        'Body 1 (A): biaya perawatan tinggi, beban pajak, tarif kecil lebih adil',
        'Body 2 (B): warisan milik bersama, tarif mengecualikan kelompok berpenghasilan rendah, kenaikan pengunjung di negara yang menggratiskan',
        'Jalan tengah: gratis umum, berbayar untuk pameran khusus'
      ],
      paras: [
        { r: 'Intro', t: 'Whether cultural institutions should charge admission divides opinion. Supporters of free entry see it as a matter of public access, while others argue that visitors should contribute to the cost. In my view, free entry is justified for most museums, provided that it is properly funded.' },
        { r: 'Body 1 · pandangan A', t: 'Those who support charging make a reasonable financial case. Museums and heritage sites are expensive to run: they must preserve fragile collections, employ specialist staff and maintain old buildings. If these costs are not met by ticket revenue, they fall on taxpayers, including many who never visit. A modest fee can therefore be seen as fairer, since those who benefit directly are the ones who pay. In addition, the income can be spent on new exhibitions and educational programmes that improve the experience for everyone.' },
        { r: 'Body 2 · pandangan B', t: 'Nevertheless, I believe the arguments for free entry carry more weight. Cultural heritage belongs to the whole community, and even a small charge can exclude families on low incomes, students and elderly people, which narrows the audience that museums exist to serve. Countries that abolished fees for national museums, such as the United Kingdom, saw sharp rises in visitor numbers. Free admission need not mean lost income either, since visitors who spend nothing at the door may spend more in cafes and shops and are often willing to make voluntary donations. Where funding is a concern, governments can offer free general entry while charging for special exhibitions.' },
        { r: 'Penutup', t: 'In conclusion, charging admission has a clear financial logic, but because cultural heritage is a shared public good, free entry, supported by government funding and paid special exhibitions, is the better approach.' }
      ],
      why: [
        'Opini bersyarat (“provided that it is properly funded”) membuat posisi terasa matang, bukan hitam-putih.',
        'Body 1 memakai bahasa penghormatan (“a reasonable financial case”) sebelum ditandingi.',
        'Keberatan finansial dijawab dengan usulan konkret di akhir body 2.'
      ]
    }
  ]
},

/* ===================================================================== */
{
  id: 'problem',
  name: 'Problem–Solution',
  sub: 'Problems / causes and solutions',
  cue: 'Kata kunci di soal: What problems…? What can be done? / What are the causes…? What measures…?',
  about: 'Soal meminta masalah (atau penyebab) dan solusi. Setiap solusi harus menjawab masalah tertentu.',
  map: [
    ['Intro', 'Fenomena + arah esai'],
    ['Body 1', 'Masalah atau penyebab'],
    ['Body 2', 'Solusi dengan aktor jelas'],
    ['Penutup', 'Masalah → solusi → hasil']
  ],
  questions: [
    'Many people in cities suffer from high levels of stress. What are the causes, and what can be done to reduce it?',
    'In many countries, the number of people who are overweight is rising. What problems does this cause for individuals and for society? What can be done about it?',
    'Plastic waste is polluting the world\'s oceans. What are the main causes of this problem, and what measures can be taken to solve it?',
    'Many elderly people now live alone and feel isolated. What problems does this create, and how can communities help?',
    'Young people are spending less time reading books than in the past. What problems might result, and what can be done to encourage reading?'
  ],
  thinking: [
    { t: 'Bedah soal', m: '1 mnt', q: [
      'Tandai apa yang diminta: problems, causes, effects, solutions, measures, who should act.',
      'Jangan menukar penyebab dengan dampak. Body harus mengikuti urutan pertanyaan di soal.'
    ]},
    { t: 'Petakan masalah atau penyebab', m: '1,5 mnt', q: [
      'Tulis dua yang terpenting. Pilih yang sifatnya berbeda, misalnya satu personal dan satu sosial atau ekonomi.',
      'Untuk tiap item: mengapa itu terjadi atau apa akibatnya → contoh.'
    ]},
    { t: 'Pasangkan solusi', m: '1,5 mnt', q: [
      'Untuk setiap masalah, tulis satu solusi yang menjawabnya langsung.',
      'Tentukan aktornya: pemerintah, sekolah, perusahaan, komunitas, individu.',
      'Jelaskan mekanismenya: bagaimana solusi itu bekerja?'
    ]},
    { t: 'Uji kelayakan', m: '30 dtk', q: [
      'Mengapa solusi ini realistis? Satu logika atau contoh singkat sudah cukup.',
      'Hindari jawaban kosong seperti “raise awareness” tanpa menyebut siapa melakukan apa.'
    ]},
    { t: 'Peta', m: '30 dtk', q: [
      'Body 1: masalah 1 dan 2. Body 2: solusi 1 dan 2, dengan urutan yang sama.',
      'Uji: tidak ada masalah tanpa solusi dan tidak ada solusi yang menggantung.'
    ]}
  ],
  writing: [
    { label: 'Intro', from: 'Dari tahap 1: fenomena dan apa yang diminta soal.', lines: [
      ['Latar', '{{Fenomena}} has become increasingly {{common / serious}} in {{konteks}}.'],
      ['Arah esai', 'This essay will examine {{the main problems / the main causes}} and suggest {{measures}} to address {{them / it}}.']
    ]},
    { label: 'Body 1 · masalah atau penyebab', from: 'Dari tahap 1: dua masalah (atau penyebab) dan contohnya.', lines: [
      ['Masalah 1', 'The most {{serious / immediate}} {{problem / cause}} is {{masalah 1}}.'],
      ['Mekanisme', '{{Bagaimana itu terjadi dan siapa yang terdampak}}. For example, {{contoh}}.'],
      ['Masalah 2', 'A further {{problem / cause}} is {{masalah 2}}, which {{akibat}}.']
    ]},
    { label: 'Body 2 · solusi', from: 'Dari tahap 1: pasangan masalah dan solusi, beserta aktornya.', lines: [
      ['Solusi 1', 'To tackle {{masalah 1}}, {{aktor}} could {{solusi 1}}, which would {{dampak positif}}.'],
      ['Solusi 2', 'In addition, {{aktor 2}} should {{solusi 2}} so that {{masalah 2 teratasi}}.'],
      ['Kelayakan', 'This approach is realistic because {{alasan singkat}}.']
    ]},
    { label: 'Penutup', from: 'Dari tahap 1: peta masalah ke solusi.', lines: [
      ['Rangkum', 'In conclusion, {{ringkasan masalah atau penyebab}}, but {{ringkasan solusi}} would {{hasil yang diharapkan}}.']
    ]}
  ],
  phrases: [
    { t: 'Menyebut masalah dan penyebab', c: ['stem from…', 'be driven by…', 'result in…', 'give rise to…'] },
    { t: 'Menyebut solusi', c: ['One effective measure would be to…', 'tackle / address / curb…', 'The onus lies with… to…', 'would go a long way towards…'] }
  ],
  essays: [
    {
      q: 'In many cities, young people are finding it increasingly difficult to afford a home. What problems does this cause, and what measures could be taken to address it?',
      plan: [
        'Masalah 1: orang muda menunda tonggak hidup (menikah, punya anak, menabung)',
        'Masalah 2: kota kehilangan pekerja esensial (perawat, guru, staf perhotelan)',
        'Solusi 1: pemerintah menambah pasokan rumah terjangkau + aturan perencanaan lebih longgar',
        'Solusi 2: pajak properti kosong dan investor multi-properti + subsidi sewa jangka pendek'
      ],
      paras: [
        { r: 'Intro', t: 'Housing costs in many cities have risen far faster than wages, leaving a growing number of young adults unable to buy or even rent a decent home. This trend creates serious personal and social problems, but it can be eased through a combination of government and planning measures.' },
        { r: 'Body 1 · masalah', t: 'The most immediate problem is that young people postpone the milestones that stability allows. Many remain in their parents\' homes well into their thirties or share crowded flats, and as a result they delay marriage, starting a family and saving for the future. At a wider level, cities risk losing the very workers they depend on. Nurses, teachers and hospitality staff may be forced to move to cheaper towns and commute long distances, or leave the city altogether, which creates shortages in essential services and weakens the local economy.' },
        { r: 'Body 2 · solusi', t: 'Governments can respond in several ways. The most direct is to increase the supply of affordable housing, either by building public homes or by requiring developers to reserve a percentage of every new project for lower-income buyers. Relaxing restrictive planning rules, such as limits on building height in well-connected areas, would also allow more homes to be built where demand is highest. On the demand side, taxes on empty properties and on investors who buy multiple homes would discourage speculation that pushes prices up. Finally, subsidised rental schemes for first-time tenants can provide immediate relief while these longer-term policies take effect.' },
        { r: 'Penutup', t: 'In conclusion, unaffordable housing delays young people\'s lives and drains cities of essential workers, but expanding the supply of affordable homes and curbing speculation would go a long way towards resolving the problem.' }
      ],
      why: [
        'Dua masalah berbeda sifat: personal (menunda hidup) dan sosial (kekurangan pekerja).',
        'Solusi dibagi sisi pasokan, sisi permintaan, dan bantuan jangka pendek, jadi terasa menyeluruh.',
        'Aktor selalu jelas (pemerintah, pengembang) dan mekanisme dijelaskan.'
      ]
    },
    {
      q: 'Clothing is now produced, bought and thrown away in far greater quantities than in the past. What are the causes of this trend, and what can be done to reduce the waste it creates?',
      plan: [
        'Penyebab 1: fast fashion (koleksi cepat, harga murah, media sosial, belanja online)',
        'Penyebab 2: harga tidak mencerminkan biaya lingkungan, jadi tak ada insentif memperbaiki',
        'Solusi 1: produsen bertanggung jawab atas siklus hidup produk',
        'Solusi 2: label dampak lingkungan + kampanye kebiasaan (perbaiki, bekas, tukar)'
      ],
      paras: [
        { r: 'Intro', t: 'The amount of clothing manufactured and discarded each year has risen dramatically over recent decades. This trend stems mainly from changes in how clothes are produced and marketed, and tackling it will require action by governments, companies and consumers alike.' },
        { r: 'Body 1 · penyebab', t: 'The first cause is the rise of fast fashion. Retailers now release new collections every few weeks at very low prices, which makes garments feel disposable and encourages shoppers to buy far more than they need. Social media amplifies the effect, since people feel pressure to avoid being seen in the same outfit twice, and online shopping makes impulse purchases effortless. A second cause is that low prices hide the true cost of production. Because manufacturers rarely pay for the pollution and water use involved, clothes appear cheaper than they really are, and buyers have little incentive to repair or reuse them.' },
        { r: 'Body 2 · solusi', t: 'Several measures could reduce this waste. Governments could make producers responsible for the full lifecycle of their products, requiring them to fund collection and recycling schemes, which would raise prices slightly and reward durable design. Clear labelling of environmental impact would let consumers compare garments, much as energy ratings already do for appliances. Meanwhile, schools and media campaigns could encourage habits such as repairing clothes, buying second-hand and swapping with friends. If these steps are combined, the cost of disposability would finally be visible to buyers and sellers alike.' },
        { r: 'Penutup', t: 'In conclusion, the surge in clothing waste is driven by cheap, constantly changing fashion and by prices that ignore environmental harm, so making producers accountable and helping consumers choose more carefully would be effective remedies.' }
      ],
      why: [
        'Soal meminta penyebab, bukan dampak, dan body 1 konsisten membahas penyebab.',
        'Setiap solusi nyambung ke penyebab: harga yang menyembunyikan biaya dijawab tanggung jawab produsen dan label.',
        'Analogi (label energi pada peralatan) membuat solusi terasa realistis tanpa data berlebihan.'
      ]
    }
  ]
},

/* ===================================================================== */
{
  id: 'advdis',
  name: 'Advantages–Disadvantages',
  sub: 'Outweigh / positive or negative',
  cue: 'Kata kunci di soal: Do the advantages outweigh the disadvantages? / Is this a positive or negative development? / What are the advantages and disadvantages?',
  about: 'Kenali variannya dulu. Dua varian pertama menuntut kamu memilih satu sisi, bukan hanya mendaftar.',
  map: [
    ['Intro', 'Tren + posisi penimbang'],
    ['Body 1', 'Sisi yang kamu menangkan'],
    ['Body 2', 'Sisi lawan, lalu ditimbang'],
    ['Penutup', 'Pernyataan penimbang']
  ],
  questions: [
    'Some companies allow employees to choose their own working hours. Do the advantages of this outweigh the disadvantages?',
    'In some countries, many young people take a year off between school and university to work or travel. Do the advantages of this outweigh the disadvantages?',
    'Many people now rely on digital payments instead of cash. Is this a positive or negative development?',
    'Tourism in developing countries is increasing rapidly. What are the advantages and disadvantages of this trend?',
    'Some people prefer to buy second-hand goods rather than new ones. Do the benefits of this outweigh the drawbacks?'
  ],
  thinking: [
    { t: 'Bedah soal dan kenali varian', m: '1 mnt', q: [
      'Varian (a): advantages and disadvantages saja. Bahas keduanya, posisi opsional tetapi tetap tampak.',
      'Varian (b): do the advantages outweigh…? Kamu wajib memilih.',
      'Varian (c): positive or negative development? Kamu wajib memilih.'
    ]},
    { t: 'Brainstorm dengan lensa', m: '1,5 mnt', q: [
      'Tulis tiga keuntungan dan tiga kerugian dari sudut: individu, masyarakat, ekonomi, lingkungan.',
      'Beri contoh nyata untuk setiap yang ingin kamu kembangkan.'
    ]},
    { t: 'Timbang', m: '1 mnt', q: [
      'Bandingkan dengan empat pertanyaan: seberapa besar skalanya, sementara atau permanen, siapa yang menanggung, dan bisakah dikurangi?',
      'Pemenang adalah sisi yang lebih besar, lebih lama, atau lebih sulit diperbaiki.'
    ]},
    { t: 'Pilih yang terbaik', m: '30 dtk', q: [
      'Kembangkan satu atau dua poin terkuat per sisi. Sisanya cukup disebut sekilas.',
      'Siapkan satu kalimat yang mengecilkan sisi yang kalah (sementara, bisa dikurangi, dampak terbatas).'
    ]},
    { t: 'Peta', m: '1 mnt', q: [
      'Body 1 untuk sisi yang kamu menangkan, body 2 untuk sisi lawan lalu ditimbang dengan However atau Nevertheless.',
      'Uji: apakah intro dan penutup sama-sama menyatakan sisi mana yang menang?'
    ]}
  ],
  writing: [
    { label: 'Intro', from: 'Dari tahap 1: tren dan sisi yang menang.', lines: [
      ['Latar', '{{Tren}} is becoming increasingly common.'],
      ['Posisi', 'While this {{memiliki kekurangan}}, I believe that {{the advantages outweigh the disadvantages / it is a mainly positive development / it is a mainly negative development}}.']
    ]},
    { label: 'Body 1 · sisi yang menang', from: 'Dari tahap 1: poin terkuat dan contohnya.', lines: [
      ['Poin utama', 'The principal {{advantage / drawback}} is {{poin 1}}.'],
      ['Mekanisme', '{{Bagaimana itu terjadi}}. For example, {{contoh}}.'],
      ['Poin kedua', 'A further {{benefit / problem}} is {{poin 2}}.']
    ]},
    { label: 'Body 2 · sisi lawan, lalu ditimbang', from: 'Dari tahap 1: kerugian terkuat dan alasan ia lebih kecil.', lines: [
      ['Sisi lawan', 'On the other hand, {{poin sisi lawan}}. {{Mekanisme singkat}}.'],
      ['Timbang', 'However, {{mengapa itu lebih kecil: sementara, bisa dikurangi, atau terbatas}}.'],
      ['Bukti', '{{Contoh atau langkah yang mengecilkan masalah}}.']
    ]},
    { label: 'Penutup', from: 'Dari tahap 1: pemenang dan alasannya.', lines: [
      ['Rangkum', 'In conclusion, although {{sisi yang kalah}}, {{sisi yang menang}}, so {{the benefits outweigh the drawbacks / it is a mainly positive development}}.']
    ]}
  ],
  phrases: [
    { t: 'Menimbang', c: ['this is largely temporary', 'can be mitigated by…', 'far outweighs…', 'is by no means inevitable', 'on balance'] },
    { t: 'Berpindah sisi', c: ['On the other hand, …', 'Admittedly, …', 'Nevertheless, …', 'These problems are not insurmountable.'] }
  ],
  essays: [
    {
      q: 'More and more students are choosing to complete their degrees in a foreign country. Do the advantages of this trend outweigh the disadvantages?',
      plan: [
        'Varian (b): wajib memilih → keuntungan lebih besar',
        'Body 1: pengalaman mandiri dan lintas budaya, akses kursus khusus, kemampuan bahasa untuk karier global',
        'Body 2: biaya tinggi, rasa rindu rumah, putus jaringan profesional di negara asal',
        'Timbang: kerugian sementara atau bisa dikurangi (beasiswa, kerja paruh waktu, layanan kampus); keterampilan bertahan seumur karier'
      ],
      paras: [
        { r: 'Intro', t: 'A growing number of students now leave their home country to study abroad. Although this involves real costs and difficulties, I believe that the advantages, in terms of personal growth and career prospects, outweigh the disadvantages.' },
        { r: 'Body 1 · keuntungan', t: 'The principal advantage is the breadth of experience that students gain. Living independently in an unfamiliar culture forces them to solve everyday problems, adapt to new ways of thinking and build friendships with people from very different backgrounds, which develops maturity and open-mindedness, qualities that are difficult to demonstrate on a CV in any other way. Academically, students gain access to specialised courses and research facilities that may not exist at home, while fluency in another language, often acquired almost effortlessly, is highly valued by employers in a globalised job market. A graduate of an overseas university therefore frequently enjoys a clear advantage when competing for international positions.' },
        { r: 'Body 2 · kerugian dan penimbang', t: 'On the other hand, studying abroad has genuine drawbacks. Tuition fees for international students are often far higher than for locals, and living costs add to the burden, so many families must borrow heavily or exhaust their savings. Homesickness and cultural isolation can also affect performance, particularly during the first year. Some graduates, moreover, find that after several years away they have lost contact with professional networks at home. However, these problems are largely temporary or manageable. Scholarships, part-time work and university support services reduce the financial and emotional strain, whereas the skills and perspectives gained last for a whole career.' },
        { r: 'Penutup', t: 'In conclusion, studying overseas is expensive and sometimes lonely, but the maturity, qualifications and international outlook it develops make its benefits greater than its drawbacks.' }
      ],
      why: [
        'Posisi penimbang jelas sejak intro, jadi body 2 punya tugas khusus: mengecilkan kerugian.',
        'Penimbangan memakai kriteria nyata: kerugian bersifat sementara dan bisa dikurangi, manfaat bertahan lama.',
        'Keuntungan diberi contoh dari tiga ranah: pribadi, akademik, karier.'
      ]
    },
    {
      q: 'Increasing numbers of people now buy goods online rather than visiting physical shops. Is this a positive or negative development?',
      plan: [
        'Varian (c): wajib memilih → positif secara keseluruhan',
        'Body 1: kenyamanan, perbandingan harga dan ulasan, jangkauan bagi desa dan penyandang disabilitas, bisnis kecil tanpa sewa mahal',
        'Body 2: pusat kota sepi, toko independen tutup, lalu lintas pengiriman',
        'Timbang: kota menata ulang pusat kota jadi tempat pengalaman; pengiriman terkonsolidasi dan van listrik'
      ],
      paras: [
        { r: 'Intro', t: 'Online shopping has expanded rapidly, to the point where many consumers rarely enter a physical shop. While this shift has some drawbacks for communities, I believe it is, on balance, a positive development.' },
        { r: 'Body 1 · manfaat', t: 'The main benefit is convenience and choice. Shoppers can compare prices and read reviews from thousands of other buyers within minutes, which helps them avoid poor-quality products and find the best deal, while open price comparison pushes retailers to keep their prices competitive. People who live in rural areas, who have disabilities or who have little free time gain particularly, since goods that once required a long journey now arrive at the door. Online platforms also allow small businesses to reach customers nationwide without paying the rent of a prime high-street location, which lowers barriers to starting a business.' },
        { r: 'Body 2 · biaya dan penimbang', t: 'Admittedly, the trend carries real costs. Town centres lose footfall, and independent shops that cannot compete on price may close, leaving high streets empty and reducing social contact. Delivery vehicles also add to traffic and emissions, and returned goods can generate extra packaging waste. Nevertheless, these problems are not inevitable consequences of online retail. Many towns have responded by reinventing centres as places for experiences, such as markets, cafes and leisure venues, which online stores cannot replicate, and consolidated delivery schemes and electric vans can reduce the environmental footprint. Such adjustments suggest that the damage can be limited while the benefits remain.' },
        { r: 'Penutup', t: 'In conclusion, although online shopping weakens traditional high streets and adds delivery traffic, its convenience, wider choice and support for small businesses make it a mainly positive development.' }
      ],
      why: [
        'Menjawab pertanyaan persis: “positive or negative” dijawab “a mainly positive development”.',
        'Kerugian diakui secara spesifik (pusat kota sepi, emisi) sebelum dibantah, jadi argumennya kredibel.',
        'Penimbang berupa solusi yang sudah terjadi (kota menata ulang, van listrik), bukan sekadar optimisme.'
      ]
    }
  ]
},

/* ===================================================================== */
{
  id: 'twopart',
  name: 'Two-Part Question',
  sub: 'Dua pertanyaan langsung',
  cue: 'Kata kunci di soal: dua pertanyaan terpisah, misalnya Why…? Is this a good thing?',
  about: 'Esai ini seperti dua mini-esai. Kalimat pertama tiap body menjawab langsung satu pertanyaan.',
  map: [
    ['Intro', 'Paraphrase + dua jawaban singkat'],
    ['Body 1', 'Jawaban pertanyaan 1'],
    ['Body 2', 'Jawaban pertanyaan 2'],
    ['Penutup', 'Dua jawaban dirangkum']
  ],
  questions: [
    'Many people choose to work for themselves rather than for a company. Why do they do this? Is it a good choice?',
    'Large numbers of people now travel abroad on holiday. Why do people choose to travel? Does it benefit the countries they visit?',
    'Why do many people prefer to shop at large supermarkets rather than local markets? Is this a positive trend?',
    'In many places, people are retiring later than in the past. Why is this happening? Is it a good thing?',
    'More and more people are choosing to live alone. What are the reasons for this? Is it a negative development for society?'
  ],
  thinking: [
    { t: 'Pisahkan dua pertanyaan', m: '1 mnt', q: [
      'Tulis Q1 dan Q2 di kertas coretan dengan kata-katamu sendiri.',
      'Kenali jenis tiap pertanyaan: mengapa (sebab), baik atau buruk (opini), apa solusinya, atau akankah berlanjut (prediksi).'
    ]},
    { t: 'Tulis jawaban satu kalimat', m: '30 dtk', q: [
      'Jawab Q1 dan Q2 masing-masing dalam satu kalimat. Dua kalimat ini menjadi thesis.',
      'Jawaban harus langsung. Hindari “it depends” tanpa arah.'
    ]},
    { t: 'Brainstorm per pertanyaan', m: '2 mnt', q: [
      'Q1: dua alasan beserta contoh.',
      'Q2: posisi dengan dua alasan, atau satu alasan dan satu kualifikasi.',
      'Pastikan jawaban Q2 tidak mengulang isi Q1.'
    ]},
    { t: 'Cari benang merah', m: '30 dtk', q: [
      'Hubungkan Q1 dan Q2, misalnya sebab → penilaian. Itu membuat esai terasa satu kesatuan.',
      'Satu kata penghubung di awal body 2 sudah cukup.'
    ]},
    { t: 'Peta', m: '1 mnt', q: [
      'Body 1 = Q1, body 2 = Q2. Kalimat pertama tiap body menjawab langsung.',
      'Uji: setiap bagian soal terjawab?'
    ]}
  ],
  writing: [
    { label: 'Intro', from: 'Dari tahap 1: parafrase topik dan dua jawaban satu kalimat.', lines: [
      ['Latar', '{{Parafrase topik}}.'],
      ['Dua jawaban', 'This essay will explain {{jawaban singkat Q1}} and argue that {{jawaban Q2}}.']
    ]},
    { label: 'Body 1 · pertanyaan 1', from: 'Dari tahap 1: alasan untuk Q1 beserta contoh.', lines: [
      ['Jawab langsung', '{{Jawaban Q1 dalam satu klausa}}, mainly because {{alasan 1}}.'],
      ['Mekanisme', '{{Bagaimana alasan itu bekerja}}. For example, {{contoh}}.'],
      ['Faktor lain', 'Another factor is {{alasan 2}}.']
    ]},
    { label: 'Body 2 · pertanyaan 2', from: 'Dari tahap 1: posisi untuk Q2 dan kualifikasinya.', lines: [
      ['Jawab langsung', 'As for {{Q2 dengan kata sendiri}}, I {{believe / do not believe}} {{jawaban langsung}}.'],
      ['Alasan', '{{Alasan}}. For instance, {{contoh}}.'],
      ['Kualifikasi', 'However, this depends on {{syarat atau batas}}.']
    ]},
    { label: 'Penutup', from: 'Dari tahap 1: dua jawaban satu kalimat.', lines: [
      ['Rangkum', 'In conclusion, {{jawaban Q1}}, and {{jawaban Q2}}.']
    ]}
  ],
  phrases: [
    { t: 'Menjawab sebab', c: ['The main reason is…', 'This is largely due to…', 'One key driver is…'] },
    { t: 'Menjawab penilaian', c: ['I believe this is a positive trend because…', 'On balance, I regard this as…', 'This is not necessarily the case, since…'] }
  ],
  essays: [
    {
      q: 'Increasing numbers of adults are returning to education later in life. Why do you think this is happening? Is it a positive development for society?',
      plan: [
        'Q1 (sebab): pasar kerja berubah, masa kerja lebih panjang, format belajar fleksibel',
        'Q2 (opini): positif secara jelas',
        'Body 2: ekonomi (tenaga kerja lebih produktif, pengangguran turun) dan sosial (teladan bagi anak, aktif di komunitas)',
        'Keberatan: mahasiswa dewasa menyingkirkan lulusan sekolah → kampus memperluas kapasitas dan banyak yang paruh waktu'
      ],
      paras: [
        { r: 'Intro', t: 'More adults than ever are enrolling in courses long after leaving school. This trend is driven largely by a changing job market and by longer working lives, and I believe it benefits society as well as the individuals involved.' },
        { r: 'Body 1 · mengapa', t: 'The main reason adults return to study is that careers no longer stay the same for decades. Technology and automation are changing the skills that employers demand, so workers must retrain to remain employable or to move into growing fields such as data analysis or healthcare. In addition, people now live and work longer, which means that a person in their forties may reasonably expect another twenty years of employment and sees a new qualification as a sound investment. Finally, flexible formats such as evening classes and online degrees have removed the practical barriers that once made study impossible alongside a job or family.' },
        { r: 'Body 2 · positif atau tidak', t: 'I regard this as a clearly positive development. Economically, a workforce that continually updates its skills is more productive and better able to fill shortages, which reduces unemployment and the cost of welfare support. Socially, adults who return to learning often serve as role models for their children and may feel more confident and engaged in their communities. A reasonable concern is that older students might take places from school leavers, but universities can expand provision, and mature students frequently study part-time, so the competition is limited. On balance, the advantages for individuals and for the wider economy are substantial.' },
        { r: 'Penutup', t: 'In conclusion, adults return to education because of a shifting job market, longer careers and flexible learning, and this trend strengthens both the economy and community life.' }
      ],
      why: [
        'Kalimat pertama tiap body langsung menjawab satu pertanyaan.',
        'Q1 dijawab dengan tiga sebab yang berbeda jenis (pasar kerja, usia kerja, format belajar).',
        'Keberatan atas Q2 disebut dan dijawab dalam dua klausa, tanpa memanjang.'
      ]
    },
    {
      q: 'Many children now spend a large part of their free time playing video games. Why is this activity so popular? Should parents limit the time children spend on it?',
      plan: [
        'Q1 (sebab): umpan balik instan, aspek sosial, rasa kendali dan pencapaian, mudah diakses',
        'Q2 (opini): ya, orang tua perlu batas, tetapi bukan larangan',
        'Alasan: anak kecil kurang kontrol diri; tidur, aktivitas fisik, dan PR terganggu',
        'Kualifikasi: larangan keras berbalik; lebih baik diskusi, pilih game sesuai usia, seimbangkan dengan aktivitas luar'
      ],
      paras: [
        { r: 'Intro', t: 'Video games have become one of the most common ways for children to spend their spare time. They are popular because they are engaging and social, and I believe parents should set sensible limits, although they should not ban them.' },
        { r: 'Body 1 · mengapa', t: 'Games appeal to children for several reasons. They are designed to provide instant feedback and a constant sense of progress, through points, levels and rewards, which makes them highly absorbing. Many games are also social: online multiplayer titles let children play and talk with friends who live elsewhere, so gaming has become a shared pastime much as football once was. In addition, games give young people a feeling of control and achievement that school often does not, since they can solve problems, build worlds and succeed at their own pace. Their availability on phones and consoles makes them accessible at almost any moment.' },
        { r: 'Body 2 · batas dari orang tua', t: 'Given this appeal, I believe parental limits are necessary. Young children lack the self-control to stop playing, and long sessions can reduce sleep, physical activity and homework time, all of which affect health and school results. Setting clear rules, such as a daily time allowance or no screens before bedtime, teaches self-discipline without removing a harmless source of enjoyment. However, strict prohibition is likely to backfire, because children may simply play secretly at a friend\'s house. A better approach is for parents to discuss the rules with their child, choose age-appropriate games and encourage a balance with outdoor activities.' },
        { r: 'Penutup', t: 'In conclusion, video games attract children through constant rewards and social connection, and reasonable parental limits, agreed with the child, protect their health and studies without denying them a legitimate hobby.' }
      ],
      why: [
        'Jawaban Q2 bernuansa (“limits, not a ban”) dan nuansa itu sudah diumumkan di intro.',
        'Analogi (game sosial seperti sepak bola dulu) membuat penjelasan sebab terasa konkret.',
        'Solusi praktis di akhir body 2 membuat posisi bisa dijalankan, bukan sekadar pendapat.'
      ]
    }
  ]
}

];
