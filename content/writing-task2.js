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
    { label: 'Intro · 3 kalimat', from: 'Isi slot dari tahap 1 (bedah soal, posisi, dua alasan). Urutan dan kata penghubung jangan diubah.', lines: [
      ['1 · Latar', 'Nowadays, {{topik dalam 2–5 kata}} is a subject of considerable debate.'],
      ['2 · Parafrase', 'Some people claim that {{pernyataan soal dengan kata-katamu sendiri}}.'],
      ['3 · Posisi', 'I {{strongly agree / partly agree / strongly disagree}} with this view, because {{alasan 1 singkat}} and because {{alasan 2 singkat}}.']
    ]},
    { label: 'Body 1 · 5 kalimat · alasan 1', from: 'Dari tahap 1: alasan terkuat beserta rantainya (mengapa → contoh → dampak).', lines: [
      ['1 · Topic sentence', 'The primary reason for my view is that {{alasan 1}}.'],
      ['2 · Explain', 'This is because {{mekanisme: X menyebabkan Y}}.'],
      ['3 · Example', 'For example, {{contoh spesifik: siapa, di mana, apa yang terjadi}}.'],
      ['4 · Result', 'As a result, {{dampak yang terjadi}}.'],
      ['5 · Link', 'Therefore, this clearly shows that {{kembali ke posisimu}}.']
    ]},
    { label: 'Body 2 · 5 kalimat · alasan 2 + konsesi', from: 'Dari tahap 1: alasan kedua, keberatan terkuat, dan bantahannya.', lines: [
      ['1 · Topic sentence', 'Another important reason is that {{alasan 2}}.'],
      ['2 · Explain', 'This is mainly because {{mekanisme}}.'],
      ['3 · Example', 'For instance, {{contoh spesifik}}.'],
      ['4 · Konsesi', 'Admittedly, some people may argue that {{keberatan terkuat}}.'],
      ['5 · Bantahan', 'However, this argument is not convincing because {{alasan keberatan itu lemah}}.']
    ]},
    { label: 'Penutup · 2 kalimat', from: 'Dari tahap 1: posisi dan dua alasan.', lines: [
      ['1 · Posisi', 'In conclusion, I {{strongly agree / partly agree / strongly disagree}} that {{posisi, diparafrase}}.'],
      ['2 · Alasan', 'This is because {{alasan 1}} and {{alasan 2}}.']
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
    },
    {
      q: 'Some people believe that keeping animals in zoos is cruel and that zoos should be closed. To what extent do you agree or disagree?',
      plan: [
        'Posisi: setuju sebagian — kebanyakan kebun binatang tidak perlu, tetapi bukan semuanya',
        'Alasan 1: ruang sempit merusak kesejahteraan hewan → contoh gajah dan hewan predator',
        'Alasan 2: manfaat pendidikan bisa didapat dari cara lain → dokumenter dan cagar alam',
        'Konsesi: zoo menyelamatkan spesies langka → bantahan: hanya perlu pusat penangkaran khusus'
      ],
      paras: [
        { r: 'Intro', t: 'Zoos have long been a popular family attraction, yet a growing number of people regard them as cruel and call for their closure. I largely agree with this view, because the confinement of wild animals harms their welfare and the educational value of zoos can now be gained in better ways.' },
        { r: 'Body 1', t: 'The primary reason for my view is that most zoos cannot provide the space that wild animals need. Elephants, for example, may walk dozens of kilometres a day in their natural habitat, but in captivity they are restricted to a small enclosure, and many develop repetitive swaying and other signs of stress. Predators such as tigers show similar behaviour when they are unable to hunt or roam. As a result, the animals suffer psychologically even when they are well fed, which is difficult to justify merely to entertain visitors.' },
        { r: 'Body 2', t: 'Another important reason is that the educational purpose of zoos is now largely outdated. Modern documentaries and virtual reality programmes allow children to observe animals in their natural surroundings, behaving as they truly do, which is far more informative than watching a bored animal behind glass. Admittedly, some people argue that zoos protect endangered species through breeding programmes. However, this argument is not convincing as a defence of zoos in general, because such work is carried out by a small number of specialised breeding centres, and these could continue without being open to the public as tourist attractions.' },
        { r: 'Penutup', t: 'In conclusion, I largely agree that zoos should be closed. Confinement damages the animals themselves, and education and conservation can be achieved through methods that do not require keeping wild creatures in captivity.' }
      ],
      why: [
        'Posisi “largely agree” diberi batas jelas: yang ditutup adalah zoo hiburan, bukan pusat penangkaran.',
        'Konsesi (konservasi) dijawab dengan pembedaan yang konkret, bukan penolakan mentah.',
        'Dua alasan berasal dari sudut berbeda: kesejahteraan hewan dan nilai edukasi.'
      ]
    },
    {
      q: 'Some people think that schools should teach children how to manage money as a compulsory subject. To what extent do you agree or disagree?',
      plan: [
        'Posisi: setuju penuh',
        'Alasan 1: keputusan keuangan buruk punya dampak seumur hidup → contoh utang kartu kredit',
        'Alasan 2: sekolah satu-satunya tempat yang menjangkau semua anak → keluarga tidak setara',
        'Konsesi: kurikulum sudah padat → bantahan: bisa digabung dengan matematika'
      ],
      paras: [
        { r: 'Intro', t: 'Many young adults leave school with excellent exam results but little idea how to budget, save or borrow wisely. I strongly agree that financial education should be a compulsory subject, because poor money habits cause lasting harm and schools are the only place that can reach every child.' },
        { r: 'Body 1', t: 'The primary reason for my view is that financial mistakes made early in life can follow people for decades. A student who signs up for a credit card without understanding interest rates, for example, may accumulate debt that takes years to repay and damages their ability to rent a home or obtain a loan. Learning the basics of budgeting, saving and compound interest at school would help young people avoid such traps before they face them. As a result, they would be more confident, and society would bear fewer costs from personal debt.' },
        { r: 'Body 2', t: 'Another important reason is that schools can offer equal access to this knowledge. At present, children learn about money mainly from their parents, and families differ greatly in how much they know and how openly they discuss finances. A compulsory subject would give children from less informed households the same practical grounding as their wealthier classmates, and it would help reduce inequality in the long term. Admittedly, some people argue that the curriculum is already overloaded. However, this objection is not convincing, because the topic can be taught within existing mathematics or social studies lessons, using realistic problems about prices, wages and savings.' },
        { r: 'Penutup', t: 'In conclusion, I strongly agree that schools should teach money management as a compulsory subject. It protects young people from costly mistakes, and it gives every child, regardless of background, the same chance to build financial security.' }
      ],
      why: [
        'Setuju penuh dengan dua alasan yang tidak tumpang tindih: dampak individu dan keadilan akses.',
        'Bantahan memberi solusi praktis (digabung ke matematika), bukan hanya menolak.',
        'Contoh berbeda tiap body: kartu kredit dan kesenjangan keluarga.'
      ]
    },
    {
      q: 'Some people think that private cars should be banned from city centres. To what extent do you agree or disagree?',
      plan: [
        'Posisi: setuju sebagian — dengan syarat angkutan umum memadai',
        'Alasan 1: polusi dan kemacetan di pusat kota → contoh kota yang menutup jalan utama',
        'Alasan 2: ruang jalan bisa dipakai untuk pejalan kaki dan bisnis lokal',
        'Konsesi: orang tua dan penyandang disabilitas butuh kendaraan → bantahan: izin khusus'
      ],
      paras: [
        { r: 'Intro', t: 'Traffic jams and poor air quality have led some people to propose that private cars should be excluded from city centres altogether. I partly agree with this idea, because it would reduce pollution and create better public space, but it will only work if realistic alternatives are provided.' },
        { r: 'Body 1', t: 'The primary reason for my view is that cars are a major source of pollution and congestion in crowded centres. Exhaust fumes concentrate in narrow streets between tall buildings, which raises the risk of asthma and other respiratory diseases among residents and workers. Several European cities, for example, have closed their main avenues to private vehicles and recorded noticeably cleaner air within a few months. As a result, healthcare costs fall and the area becomes a more pleasant place to live, which strongly supports a ban.' },
        { r: 'Body 2', t: 'Another important reason is that road space could be used far more productively. Streets cleared of cars can become wide pavements, cycle lanes and outdoor seating areas, which attract shoppers and benefit small local businesses. Admittedly, some people argue that elderly and disabled residents depend on cars to travel. However, this concern is not a reason to reject the policy entirely, because the city can issue special permits and provide frequent, accessible buses and trams. Without such alternatives, though, a ban would simply shift the problem to other districts, which is why my agreement is only partial.' },
        { r: 'Penutup', t: 'In conclusion, I partly agree that private cars should be banned from city centres. The environmental and social gains are considerable, provided that good public transport and exceptions for those in genuine need are in place.' }
      ],
      why: [
        'Posisi sebagian dinyatakan dengan syarat spesifik, dan syarat itu diulang di body 2 dan penutup.',
        'Konsesi justru memperkaya argumen karena dijawab dengan izin khusus dan transportasi publik.',
        'Dua alasan: kesehatan dan penggunaan ruang, sehingga tidak terdengar mengulang.'
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
    { label: 'Intro · 3 kalimat', from: 'Isi slot dari tahap 1 (pandangan A, pandangan B, opini). Urutan dan kata penghubung jangan diubah.', lines: [
      ['1 · Latar', '{{Topik}} is a subject on which people hold very different opinions.'],
      ['2 · Dua pandangan', 'Some people believe that {{pandangan A}}, while others argue that {{pandangan B}}.'],
      ['3 · Opini', 'This essay will discuss both views, and I will argue that {{opinimu: A / B / A untuk situasi tertentu}}.']
    ]},
    { label: 'Body 1 · 5 kalimat · pandangan yang kurang kamu dukung', from: 'Dari tahap 1: dua alasan terbaik untuk sisi ini, ditulis dengan adil.', lines: [
      ['1 · Topic sentence', 'On the one hand, those who support {{pandangan A}} make a valid point.'],
      ['2 · Alasan 1', 'They argue that {{alasan A1}}, because {{mekanisme}}.'],
      ['3 · Example', 'For example, {{contoh}}.'],
      ['4 · Alasan 2', 'In addition, {{alasan A2}}, which means that {{dampak}}.'],
      ['5 · Batas', 'Nevertheless, this view has limitations, since {{kelemahan sisi A}}.']
    ]},
    { label: 'Body 2 · 5 kalimat · pandangan yang kamu dukung', from: 'Dari tahap 1: opini, dua alasan, dan jawaban atas keberatan sisi A.', lines: [
      ['1 · Topic sentence', 'On the other hand, I personally believe that {{pandangan B}}.'],
      ['2 · Alasan 1', 'The main reason is that {{alasan B1}}, because {{mekanisme}}.'],
      ['3 · Example', 'For instance, {{contoh}}.'],
      ['4 · Alasan 2', 'Furthermore, {{alasan B2}}, which means that {{dampak}}.'],
      ['5 · Jawab keberatan', 'Although {{keberatan dari sisi A}}, this can be solved by {{jalan keluar}}.']
    ]},
    { label: 'Penutup · 2 kalimat', from: 'Dari tahap 1: opini dan alasan utamanya.', lines: [
      ['1 · Opini', 'In conclusion, although {{kekuatan pandangan A}}, I believe that {{pandangan B}}.'],
      ['2 · Alasan', 'This is mainly because {{alasan utama}}.']
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
    },
    {
      q: 'Some people believe that students learn better in a traditional classroom, while others think online courses are more effective. Discuss both views and give your own opinion.',
      plan: [
        'Opini: kelas tatap muka lebih efektif untuk kebanyakan pelajar, daring bagus sebagai pelengkap',
        'Pandangan B (daring): fleksibel dan murah → contoh pekerja yang kuliah malam',
        'Pandangan A (kelas): interaksi, disiplin, umpan balik langsung → contoh anak yang mudah teralihkan',
        'Jawab keberatan: daring bisa dipakai sebagai pelengkap'
      ],
      paras: [
        { r: 'Intro', t: 'The rapid growth of internet-based education has changed how people study. Some people believe that students learn better in a traditional classroom, while others argue that online courses are more effective. This essay will discuss both views, and I will argue that the classroom remains the better setting for most learners.' },
        { r: 'Body 1', t: 'On the one hand, those who support online learning make a valid point. They argue that digital courses are flexible, because students can study at any hour and revisit recorded lectures as often as they need. For example, an employee with a full-time job can complete a degree in the evenings without moving to another city. In addition, online programmes are often cheaper, since they save on travel and accommodation, which means that more people can afford further education. Nevertheless, this view has limitations, since it assumes that every learner can stay motivated alone.' },
        { r: 'Body 2', t: 'On the other hand, I personally believe that the classroom is more effective for most students. The main reason is that face-to-face teaching provides immediate feedback and structure, because a teacher can see confusion on a student\'s face and adjust the explanation at once. For instance, younger learners who are easily distracted at home usually make better progress when they follow a fixed timetable among their classmates. Furthermore, discussion and group work develop communication skills that a screen cannot easily replace. Although online study is convenient, this can be solved by combining it with classroom lessons, using digital materials for revision and practice.' },
        { r: 'Penutup', t: 'In conclusion, although online courses offer flexibility and lower costs, I believe that traditional classrooms are more effective. This is mainly because they give students guidance, discipline and interaction that most learners need.' }
      ],
      why: [
        'Opini (kelas lebih baik) jelas di intro dan penutup, dengan posisi pelengkap untuk daring.',
        'Body 1 ditulis adil dan memakai bukti nyata sebelum diberi batas.',
        'Argumen terkuat ada di body 2 sehingga menjadi yang terakhir dibaca.'
      ]
    },
    {
      q: 'Some people think governments should spend public money on the arts, while others believe the money should go to healthcare and education instead. Discuss both views and give your own opinion.',
      plan: [
        'Opini: prioritas kesehatan dan pendidikan, seni mendapat dana yang lebih kecil',
        'Pandangan A (seni): identitas budaya dan pariwisata → contoh festival dan museum',
        'Pandangan B (kesehatan dan pendidikan): kebutuhan dasar warga → contoh rumah sakit kekurangan dana',
        'Jawab keberatan: seni tetap didanai sebagian dan lewat sponsor swasta'
      ],
      paras: [
        { r: 'Intro', t: 'Public budgets are limited, so governments must decide which services deserve funding first. Some people believe that money should be spent on the arts, while others argue that healthcare and education should take priority. This essay will discuss both views, and I will argue that essential services should come first, with the arts receiving a smaller share.' },
        { r: 'Body 1', t: 'On the one hand, those who support arts funding make a valid point. They argue that culture gives a society its identity, because theatres, museums and music keep traditions alive and bring communities together. For example, a city festival can attract thousands of visitors every year, which supports hotels, restaurants and local workers. In addition, access to the arts improves quality of life, which means that public investment can pay for itself indirectly. Nevertheless, this view has limitations, since these benefits are less urgent than the basic needs of citizens.' },
        { r: 'Body 2', t: 'On the other hand, I personally believe that healthcare and education deserve greater priority. The main reason is that they determine whether people can live safely and work productively, because an ill or uneducated population cannot sustain an economy. For instance, a hospital without enough staff or equipment may cost lives, whereas a delayed exhibition costs no one their health. Furthermore, good schools create the skilled workers who pay the taxes that fund everything else. Although the arts are valuable, this can be solved by giving them a modest public budget and encouraging private sponsorship and ticket revenue for the rest.' },
        { r: 'Penutup', t: 'In conclusion, although the arts enrich national life, I believe that governments should give priority to healthcare and education. This is mainly because these services protect lives and build the foundation of long-term prosperity.' }
      ],
      why: [
        'Opini bersifat menengah yang spesifik: prioritas jelas, seni tetap dapat porsi kecil.',
        'Contoh berlawanan dan konkret (festival vs rumah sakit) membuat perbandingan terasa nyata.',
        'Keberatan sisi A dijawab dengan solusi pendanaan, bukan penolakan.'
      ]
    },
    {
      q: 'Some people think that students should be assessed through final examinations, while others believe that continuous assessment during the course is fairer. Discuss both views and give your own opinion.',
      plan: [
        'Opini: penilaian berkelanjutan lebih adil, ujian akhir tetap sebagian kecil',
        'Pandangan A (ujian akhir): standar sama dan sulit dicurangi → contoh ujian nasional',
        'Pandangan B (berkelanjutan): kerja sepanjang tahun, kurang stres → contoh siswa gugup',
        'Jawab keberatan: kecurangan dikurangi lewat tugas di kelas dan ujian lisan'
      ],
      paras: [
        { r: 'Intro', t: 'Assessment methods strongly influence how students study and how their abilities are judged. Some people believe that final examinations are the best measure of achievement, while others argue that continuous assessment is fairer. This essay will discuss both views, and I will argue that assessment spread across the course gives a more accurate picture.' },
        { r: 'Body 1', t: 'On the one hand, those who support final examinations make a valid point. They argue that exams apply the same conditions to every candidate, because everyone answers the same questions in the same time under supervision. For example, national university entrance tests allow thousands of applicants to be compared on an equal basis. In addition, exams are hard to cheat in, which means that the results are trusted by employers and universities. Nevertheless, this view has limitations, since a single performance on one day may not reflect real ability.' },
        { r: 'Body 2', t: 'On the other hand, I personally believe that continuous assessment is fairer. The main reason is that it rewards steady effort and understanding, because students are judged on essays, projects and tests across many weeks. For instance, a talented student who feels extreme anxiety in exam halls may fail a final paper, yet perform well in regular coursework. Furthermore, ongoing feedback helps learners correct mistakes while there is still time to improve. Although coursework can be copied, this can be solved by setting tasks in class and adding short oral questions to confirm that the work is the student\'s own.' },
        { r: 'Penutup', t: 'In conclusion, although final examinations provide a common standard, I believe that continuous assessment is the fairer method. This is mainly because it measures learning over time rather than performance on a single day.' }
      ],
      why: [
        'Kedua pandangan diberi bukti yang masuk akal sebelum opini dinyatakan.',
        'Contoh siswa yang cemas di ruang ujian konkret dan relevan dengan klaim fairness.',
        'Keberatan terbesar (menyontek) langsung dijawab dengan langkah praktis.'
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
    { label: 'Intro · 3 kalimat', from: 'Isi slot dari tahap 1 (fenomena, apa yang diminta soal). Urutan dan kata penghubung jangan diubah.', lines: [
      ['1 · Latar', '{{Fenomena}} has become increasingly {{common / serious}} in recent years.'],
      ['2 · Arah esai', 'This essay will explain {{the main problems / the main causes}} of this trend and suggest some solutions.'],
      ['3 · Posisi', 'I will argue that {{solusi inti}} would be the most effective response.']
    ]},
    { label: 'Body 1 · 5 kalimat · masalah atau penyebab', from: 'Dari tahap 1: dua masalah (atau penyebab) dan contohnya.', lines: [
      ['1 · Topic sentence', 'The most significant {{problem / cause}} is {{masalah 1}}.'],
      ['2 · Explain', 'This happens because {{mekanisme}}.'],
      ['3 · Example', 'For example, {{contoh}}.'],
      ['4 · Masalah 2', 'Another serious {{problem / cause}} is {{masalah 2}}.'],
      ['5 · Result', 'As a result, {{dampak pada orang atau masyarakat}}.']
    ]},
    { label: 'Body 2 · 5 kalimat · solusi', from: 'Dari tahap 1: tiap masalah dipasangkan dengan satu solusi dan satu aktor.', lines: [
      ['1 · Solusi 1', 'To address {{masalah 1}}, {{aktor}} should {{solusi 1}}.'],
      ['2 · Explain', 'This would help because {{mekanisme}}.'],
      ['3 · Example', 'For instance, {{contoh solusi serupa yang berhasil}}.'],
      ['4 · Solusi 2', 'In addition, {{aktor 2}} could {{solusi 2}} to deal with {{masalah 2}}.'],
      ['5 · Hasil', 'If these steps are taken, {{hasil yang diharapkan}}.']
    ]},
    { label: 'Penutup · 2 kalimat', from: 'Dari tahap 1: peta masalah ke solusi.', lines: [
      ['1 · Masalah', 'In conclusion, {{ringkasan masalah}} is mainly caused by {{penyebab utama}}.'],
      ['2 · Solusi', 'However, if {{aktor}} {{solusi utama}}, this situation could improve significantly.']
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
    },
    {
      q: 'Traffic congestion is becoming a serious problem in many large cities. What are the main causes of this problem, and what measures can be taken to reduce it?',
      plan: [
        'Penyebab 1: banyak orang memakai mobil pribadi karena transportasi umum buruk',
        'Penyebab 2: kota berkembang tanpa perencanaan, kantor dan rumah berjauhan',
        'Solusi 1: perbaiki angkutan umum (kereta, bus cepat) → contoh kota dengan jalur bus khusus',
        'Solusi 2: biaya masuk kawasan padat dan jam kerja fleksibel'
      ],
      paras: [
        { r: 'Intro', t: 'Traffic congestion has become increasingly serious in recent years, costing drivers time and money and polluting the air of many large cities. This essay will explain the main causes of this trend and suggest some solutions. I will argue that better public transport would be the most effective response.' },
        { r: 'Body 1', t: 'The most significant cause is the heavy reliance on private cars. This happens because public transport in many cities is slow, crowded or unreliable, so anyone who can afford a vehicle chooses to drive. For example, in cities where buses share the same roads as cars, a bus journey can take twice as long as a trip by car. Another serious cause is poor urban planning, as offices are concentrated in the centre while affordable housing is far away. As a result, millions of commuters travel in the same direction at the same hours, and the roads cannot cope.' },
        { r: 'Body 2', t: 'To address the first cause, city authorities should invest in fast and affordable public transport. This would help because commuters switch to buses and trains when they are quicker and cheaper than driving. For instance, several cities have introduced dedicated bus lanes and have seen a clear fall in car use on those routes. In addition, governments could charge vehicles an entry fee for the busiest districts and encourage employers to offer flexible working hours to spread demand across the day. If these steps are taken, journeys would become shorter and the air would be cleaner.' },
        { r: 'Penutup', t: 'In conclusion, congestion is mainly caused by dependence on cars and by poor planning of where people live and work. However, if authorities improve public transport and manage demand, this situation could improve significantly.' }
      ],
      why: [
        'Setiap penyebab langsung dipasangkan dengan solusi di body 2.',
        'Aktor solusi jelas (otoritas kota, pemerintah, perusahaan) sehingga rekomendasi terdengar bisa dijalankan.',
        'Posisi (angkutan umum paling efektif) dinyatakan sejak intro dan dikembangkan penuh.'
      ]
    },
    {
      q: 'In many countries, young people are leaving rural areas to live in cities, and villages are becoming empty. What problems does this cause, and what can be done to solve them?',
      plan: [
        'Masalah 1: desa kekurangan pekerja dan layanan menurun',
        'Masalah 2: kota padat, harga sewa naik, pengangguran',
        'Solusi 1: investasi pekerjaan di desa lewat internet cepat dan insentif usaha',
        'Solusi 2: perbaiki sekolah dan klinik di desa'
      ],
      paras: [
        { r: 'Intro', t: 'The movement of young people from villages to cities has become increasingly common in recent years. This essay will explain the main problems of this trend and suggest some solutions. I will argue that creating jobs and services in rural areas would be the most effective response.' },
        { r: 'Body 1', t: 'The most significant problem is that villages lose the people they need most. This happens because the young are usually the strongest workers, so farms are left without labour and local shops, schools and clinics close when customers disappear. For example, in some regions a village with only elderly residents may lose its only bus service, leaving the remaining people isolated. Another serious problem is pressure on cities, which receive more migrants than they can house. As a result, rents rise sharply, slums expand, and newcomers often struggle to find stable jobs.' },
        { r: 'Body 2', t: 'To address the first problem, governments should create real economic opportunities outside the cities. This would help because young people leave mainly to find work, not because they dislike village life. For instance, providing fast internet and tax benefits for small businesses has allowed some rural areas to attract online companies and tourism. In addition, local authorities could improve rural schools and clinics to deal with the loss of services in the countryside. If these steps are taken, more young people would choose to stay or return, and urban pressure would ease.' },
        { r: 'Penutup', t: 'In conclusion, rural depopulation is mainly caused by a lack of jobs and services outside cities. However, if governments invest in rural employment and public facilities, this situation could improve significantly.' }
      ],
      why: [
        'Dua masalah mewakili dua tempat berbeda: desa dan kota, sehingga cakupan seimbang.',
        'Solusi menyasar akar penyebab (pekerjaan), bukan melarang migrasi.',
        'Contoh internet cepat dan pariwisata membuat solusi terasa realistis.'
      ]
    },
    {
      q: 'Cyberbullying among teenagers has increased dramatically. What are the causes of this problem, and what solutions can you suggest?',
      plan: [
        'Penyebab 1: anonimitas dan jarak di internet membuat orang lebih kejam',
        'Penyebab 2: kurangnya pengawasan orang tua dan pendidikan etika digital',
        'Solusi 1: sekolah mengajarkan etika digital dan menyediakan konselor',
        'Solusi 2: platform wajib menghapus konten pelecehan dan orang tua terlibat'
      ],
      paras: [
        { r: 'Intro', t: 'Cyberbullying has become increasingly serious in recent years, as almost every teenager now spends hours on social media. This essay will explain the main causes of this trend and suggest some solutions. I will argue that education combined with stricter platform rules would be the most effective response.' },
        { r: 'Body 1', t: 'The most significant cause is the sense of distance that the internet creates. This happens because users can hide behind anonymous accounts and cannot see the pain of the person they are insulting, so they feel less responsible for their words. For example, a teenager who would never insult a classmate in person may post cruel comments under a fake name. Another serious cause is the lack of guidance, since many parents do not monitor their children\'s online activity and schools rarely teach digital manners. As a result, harmful behaviour spreads quickly and victims are left alone.' },
        { r: 'Body 2', t: 'To address the first cause, social media companies should remove abusive content quickly and make it harder to create anonymous accounts for harassment. This would help because bullies would face real consequences and victims would receive faster protection. For instance, platforms that introduced reporting tools and automatic warnings have seen a decline in offensive posts. In addition, schools could teach digital etiquette and employ counsellors to support affected students. If these steps are taken, teenagers would understand the effect of their words and feel safer online.' },
        { r: 'Penutup', t: 'In conclusion, cyberbullying is mainly caused by online anonymity and weak guidance from adults. However, if schools educate students and platforms enforce stricter rules, this situation could improve significantly.' }
      ],
      why: [
        'Penyebab dibagi jelas: faktor teknologi dan faktor pengasuhan.',
        'Solusi diberikan ke aktor yang tepat (platform dan sekolah).',
        'Contoh sehari-hari (komentar dengan akun palsu) mudah dibayangkan dan spesifik.'
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
    { label: 'Intro · 3 kalimat', from: 'Isi slot dari tahap 1 (tren, sisi yang menang). Urutan dan kata penghubung jangan diubah.', lines: [
      ['1 · Latar', '{{Tren}} is becoming more and more common nowadays.'],
      ['2 · Arah esai', 'This essay will discuss the advantages and disadvantages of this trend.'],
      ['3 · Posisi', 'I believe that {{the advantages outweigh the disadvantages / the disadvantages outweigh the advantages}}.']
    ]},
    { label: 'Body 1 · 5 kalimat · sisi yang menang', from: 'Dari tahap 1: dua poin terkuat dari sisi yang menang.', lines: [
      ['1 · Topic sentence', 'The main {{advantage / disadvantage}} of {{tren}} is that {{poin 1}}.'],
      ['2 · Explain', 'This is because {{mekanisme}}.'],
      ['3 · Example', 'For example, {{contoh}}.'],
      ['4 · Poin 2', 'Another {{advantage / disadvantage}} is that {{poin 2}}, which means that {{dampak}}.'],
      ['5 · Bobot', 'These {{benefits / drawbacks}} are significant because {{alasan penting}}.']
    ]},
    { label: 'Body 2 · 5 kalimat · sisi lawan, lalu ditimbang', from: 'Dari tahap 1: poin terkuat sisi yang kalah dan alasan ia lebih kecil.', lines: [
      ['1 · Topic sentence', 'On the other hand, there are also some {{disadvantages / advantages}}, such as {{poin sisi lawan}}.'],
      ['2 · Explain', 'This occurs because {{mekanisme}}.'],
      ['3 · Example', 'For instance, {{contoh}}.'],
      ['4 · Timbang', 'However, this {{problem / benefit}} is less serious because {{mengapa lebih kecil}}.'],
      ['5 · Kurangi', 'Moreover, it can be reduced by {{langkah atau fakta pendukung}}.']
    ]},
    { label: 'Penutup · 2 kalimat', from: 'Dari tahap 1: pemenang dan alasannya.', lines: [
      ['1 · Konsesi', 'In conclusion, although {{sisi yang kalah}}, I believe that {{sisi yang menang}}.'],
      ['2 · Penilaian', 'Overall, {{the advantages outweigh the disadvantages / the disadvantages outweigh the advantages}}.']
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
    },
    {
      q: 'More and more students are using artificial intelligence tools to help with their homework. Do the advantages of this trend outweigh the disadvantages?',
      plan: [
        'Posisi: kerugian lebih besar bila tanpa aturan; manfaat nyata tetapi bisa diatur',
        'Poin 1 (manfaat): penjelasan personal 24 jam → contoh siswa yang tertinggal',
        'Poin 2 (manfaat): hemat waktu untuk latihan',
        'Sisi lawan: ketergantungan dan menyontek → bisa dikurangi aturan guru'
      ],
      paras: [
        { r: 'Intro', t: 'Artificial intelligence tools are becoming more and more common in students\' homework nowadays. This essay will discuss the advantages and disadvantages of this trend. I believe that the advantages outweigh the disadvantages, provided that schools set clear rules.' },
        { r: 'Body 1', t: 'The main advantage of these tools is that they give every student a patient personal tutor. This is because a learner can ask the same question many times and receive an explanation adapted to their level at any hour. For example, a student who falls behind in algebra and cannot afford private lessons can still understand a difficult step the same evening. Another advantage is that the tools reduce routine work such as checking grammar, which means that students can spend more time practising ideas. These benefits are significant because they help weaker students catch up with their classmates.' },
        { r: 'Body 2', t: 'On the other hand, there are also some disadvantages, such as dependence and dishonesty. This occurs because a student can copy an answer without thinking, and thus never develops problem-solving skills. For instance, a pupil who relies on a tool to write every essay may be unable to write a paragraph during an exam. However, this problem is less serious than it appears, because teachers can set tasks that must be completed in class and ask students to explain their answers. Moreover, it can be reduced by teaching students to use the tools for checking and understanding rather than for copying.' },
        { r: 'Penutup', t: 'In conclusion, although these tools may encourage dependence, I believe that they bring greater benefits to learning. Overall, the advantages outweigh the disadvantages when schools guide how they are used.' }
      ],
      why: [
        'Posisi “outweigh, provided that…” memberi nuansa tanpa kehilangan kejelasan.',
        'Sisi lawan diberi bobot lebih kecil lewat langkah konkret (tugas di kelas, tanya jawab).',
        'Contoh siswa yang tertinggal di aljabar konkret dan relevan dengan klaim manfaat.'
      ]
    },
    {
      q: 'In some countries, many teenagers have part-time jobs while they are still at school. Do the advantages of this outweigh the disadvantages?',
      plan: [
        'Posisi: manfaat lebih besar bila jam kerja dibatasi',
        'Poin 1: tanggung jawab dan keterampilan kerja → contoh kerja di kafe',
        'Poin 2: kemandirian finansial dan pemahaman nilai uang',
        'Sisi lawan: nilai turun dan lelah → bisa dibatasi jam kerja'
      ],
      paras: [
        { r: 'Intro', t: 'Part-time work is becoming more and more common among school students nowadays. This essay will discuss the advantages and disadvantages of this trend. I believe that the advantages outweigh the disadvantages, as long as working hours are limited.' },
        { r: 'Body 1', t: 'The main advantage of working while at school is that teenagers learn responsibility and practical skills. This is because a job requires them to arrive on time, follow instructions and deal with customers. For example, a student who works at a café on weekends learns teamwork and communication, abilities that classrooms rarely teach. Another advantage is that earning money helps teenagers understand its value, which means that they are more careful about spending and saving later in life. These benefits are significant because employers often prefer graduates who already have experience, and a reference from a previous manager can make a first job application much stronger.' },
        { r: 'Body 2', t: 'On the other hand, there are also some disadvantages, such as tiredness and lower grades. This occurs because long shifts leave little time and energy for homework or sleep. For instance, a teenager who works late on weeknights may struggle to concentrate in class the next morning. However, this problem is less serious than it seems, because it appears mainly when students work many hours. Moreover, it can be reduced by laws that limit teenagers to a few hours a week and prohibit work on school nights.' },
        { r: 'Penutup', t: 'In conclusion, although a job may affect schoolwork if it is excessive, I believe that part-time employment gives teenagers valuable experience. Overall, the advantages outweigh the disadvantages when the hours are reasonable.' }
      ],
      why: [
        'Syarat “limited hours” muncul di intro, body 2, dan penutup sehingga konsisten.',
        'Dampak negatif dibatasi dengan fakta bahwa masalah muncul hanya pada jam kerja panjang.',
        'Contoh kafe akhir pekan spesifik dan dekat dengan kehidupan remaja.'
      ]
    },
    {
      q: 'An increasing number of people are leaving their home country to work abroad. Is this a positive or negative development?',
      plan: [
        'Posisi: terutama positif',
        'Poin 1: pekerja memperoleh gaji dan keterampilan baru → contoh perawat di luar negeri',
        'Poin 2: kiriman uang membantu keluarga dan ekonomi asal',
        'Sisi lawan: brain drain → sementara karena banyak yang pulang membawa ilmu'
      ],
      paras: [
        { r: 'Intro', t: 'Working abroad is becoming more and more common nowadays. This essay will discuss the advantages and disadvantages of this trend. I believe that the advantages outweigh the disadvantages, so it is a mainly positive development.' },
        { r: 'Body 1', t: 'The main advantage of working abroad is that people gain higher incomes and valuable experience. This is because wages for the same job are often much higher in wealthier countries, and employees also learn new methods and languages. For example, a nurse who moves to a country with a shortage of health workers may earn several times her previous salary and receive advanced training. Another advantage is that migrants send money home, which means that their families can afford better food, education and housing. These benefits are significant because remittances are an important source of income for many developing economies.' },
        { r: 'Body 2', t: 'On the other hand, there are also some disadvantages, such as the loss of skilled people from the home country. This occurs because the most educated workers are often the first to leave, which can leave hospitals and schools short of staff. For instance, a small country may lose a large share of its doctors to richer neighbours. However, this problem is less serious than it appears, because many migrants eventually return with new knowledge and savings. Moreover, it can be reduced by programmes that encourage returning workers to start businesses or train others.' },
        { r: 'Penutup', t: 'In conclusion, although the departure of skilled workers can harm their home country, I believe that working abroad brings greater benefits. Overall, it is a mainly positive development for both individuals and economies.' }
      ],
      why: [
        'Pro dan kontra ditimbang dari sudut individu dan negara asal.',
        'Brain drain dijawab dengan fakta (banyak yang pulang) dan langkah kebijakan.',
        'Contoh perawat dipakai konsisten untuk mewakili kedua manfaat dan kerugian.'
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
    { label: 'Intro · 2 kalimat', from: 'Isi slot dari tahap 1 (parafrase topik, jawaban Q1 dan Q2). Urutan dan kata penghubung jangan diubah.', lines: [
      ['1 · Latar', '{{Parafrase topik}}.'],
      ['2 · Dua jawaban', 'This essay will explain {{jawaban singkat Q1}}, and it will argue that {{jawaban singkat Q2}}.']
    ]},
    { label: 'Body 1 · 5 kalimat · pertanyaan 1', from: 'Dari tahap 1: dua alasan untuk Q1 beserta contoh.', lines: [
      ['1 · Topic sentence', 'There are several reasons why {{Q1 dengan kata sendiri}}.'],
      ['2 · Alasan 1', 'The main reason is that {{alasan 1}}.'],
      ['3 · Explain', 'This is because {{mekanisme}}.'],
      ['4 · Example', 'For example, {{contoh}}.'],
      ['5 · Alasan 2', 'Another reason is that {{alasan 2}}, which {{dampak}}.']
    ]},
    { label: 'Body 2 · 5 kalimat · pertanyaan 2', from: 'Dari tahap 1: jawaban langsung Q2, alasan, dan batasnya.', lines: [
      ['1 · Jawab langsung', 'As for whether {{Q2 dengan kata sendiri}}, I believe that {{jawaban langsung}}.'],
      ['2 · Alasan', 'This is because {{alasan}}.'],
      ['3 · Example', 'For instance, {{contoh}}.'],
      ['4 · Batas', 'However, this depends on {{syarat atau batas}}.'],
      ['5 · Saran', 'Therefore, {{rekomendasi atau kesimpulan kecil}}.']
    ]},
    { label: 'Penutup · 2 kalimat', from: 'Dari tahap 1: dua jawaban satu kalimat.', lines: [
      ['1 · Jawaban Q1', 'In conclusion, {{jawaban Q1}}.'],
      ['2 · Jawaban Q2', 'As for {{Q2 singkat}}, I believe that {{jawaban Q2}}.']
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
    },
    {
      q: 'In many countries, people are choosing to have fewer children or none at all. Why is this happening, and is it a positive or negative development for society?',
      plan: [
        'Q1 alasan 1: biaya membesarkan anak dan harga rumah',
        'Q1 alasan 2: karier dan kebebasan, terutama bagi perempuan',
        'Q2 jawaban: terutama negatif jangka panjang karena populasi menua',
        'Kualifikasi: tergantung kebijakan imigrasi dan dukungan keluarga'
      ],
      paras: [
        { r: 'Intro', t: 'In many countries, the average family is becoming smaller, and a growing number of couples decide not to have children. This essay will explain the main reasons for this trend, and it will argue that it is a mainly negative development for society.' },
        { r: 'Body 1', t: 'There are several reasons why people are having fewer children. The main reason is that raising a child has become very expensive. This is because housing, childcare and education cost far more than before, and many young couples cannot afford a larger home. For example, in major cities, a family may spend a large part of its income on rent alone. Another reason is that people place greater value on careers and personal freedom, which means that they often delay parenthood until it is no longer possible.' },
        { r: 'Body 2', t: 'As for whether this is positive or negative, I believe that it is mainly negative. This is because a falling birth rate leads to an ageing population, in which fewer workers support a growing number of retirees. For instance, some countries already struggle to fund pensions and healthcare for the elderly because of the shrinking workforce. However, this depends on government policy, because affordable childcare, flexible working and sensible immigration can reduce the problem. Therefore, societies should make family life easier rather than simply accept the decline.' },
        { r: 'Penutup', t: 'In conclusion, smaller families are mainly the result of high living costs and changing priorities. As for the effect on society, I believe that it is a negative trend unless governments support parents and balance the workforce.' }
      ],
      why: [
        'Setiap pertanyaan dijawab di body tersendiri dan diumumkan di intro.',
        'Jawaban Q2 bernuansa (“mainly negative”) dengan syarat yang jelas.',
        'Contoh sewa di kota besar spesifik dan menjelaskan mekanisme biaya.'
      ]
    },
    {
      q: 'In many countries, fewer young people vote in elections than older people. Why is this the case, and what can be done to encourage young people to vote?',
      plan: [
        'Q1 alasan 1: merasa suara tidak berpengaruh dan politisi tidak mewakili',
        'Q1 alasan 2: kurang informasi dan pendidikan kewarganegaraan',
        'Q2 jawaban: pendidikan politik di sekolah, pemilihan daring, kampanye di media sosial',
        'Kualifikasi: tergantung keamanan sistem dan kepercayaan publik'
      ],
      paras: [
        { r: 'Intro', t: 'Election results show that young adults vote far less often than older generations. This essay will explain the main reasons for this pattern, and it will argue that better political education and easier voting methods would encourage young people to take part.' },
        { r: 'Body 1', t: 'There are several reasons why young people vote less. The main reason is that many of them feel that politicians ignore their concerns. This is because campaigns usually focus on pensions and property taxes, which matter more to older voters, so younger people believe that their single vote changes nothing. For example, students worried about rent and tuition fees often say that no party speaks for them. Another reason is that many have never been taught how the political system works, which means that voting seems complicated and irrelevant.' },
        { r: 'Body 2', t: 'As for how to encourage them, I believe that education and convenience are the key. This is because young people who understand how decisions affect their lives are more likely to take part. For instance, schools that run mock elections and discuss current issues produce students who register to vote as soon as they are eligible. Parties should also address youth concerns on the platforms where young people spend time. However, this depends on trust, because online voting would only work if the system were secure. Therefore, governments should introduce it carefully, with strong protection against fraud.' },
        { r: 'Penutup', t: 'In conclusion, young people vote less because they feel unrepresented and uninformed. As for solutions, I believe that civic education, relevant policies and secure, convenient voting would raise participation.' }
      ],
      why: [
        'Penyebab mencakup faktor perasaan dan faktor pengetahuan, sehingga tidak berulang.',
        'Solusi menjawab langsung penyebab: informasi dan relevansi.',
        'Kualifikasi tentang keamanan memberi nuansa tanpa melemahkan jawaban.'
      ]
    },
    {
      q: 'Many people give up their free time to work as volunteers. Why do people do this, and should governments encourage more people to volunteer?',
      plan: [
        'Q1 alasan 1: kepuasan batin dan rasa memiliki tujuan',
        'Q1 alasan 2: pengalaman dan koneksi untuk karier',
        'Q2 jawaban: ya, tetapi dukungan, bukan paksaan',
        'Kualifikasi: tergantung agar relawan tidak menggantikan pekerja berbayar'
      ],
      paras: [
        { r: 'Intro', t: 'Millions of people spend their evenings and weekends working without pay for charities and community groups. This essay will explain the main reasons for this behaviour, and it will argue that governments should encourage volunteering, provided that they do not replace paid workers.' },
        { r: 'Body 1', t: 'There are several reasons why people volunteer. The main reason is that helping others brings a deep sense of satisfaction and purpose. This is because volunteers can see the direct result of their effort, which is not always the case in routine jobs. For example, someone who teaches reading to adults at a local centre may feel that their time has made a real difference. Another reason is practical, since volunteering offers experience and contacts, which means that young people can improve their career prospects.' },
        { r: 'Body 2', t: 'As for whether governments should encourage it, I believe that they should. This is because volunteers provide services that communities might otherwise lack, and they strengthen social ties. For instance, volunteer groups often run food banks and support elderly neighbours at little cost to the state. However, this depends on the way in which it is encouraged, because compulsion would remove the very motivation that makes it valuable. Therefore, governments should offer tax benefits, recognition and training, while ensuring that volunteers do not take over jobs that should be paid.' },
        { r: 'Penutup', t: 'In conclusion, people volunteer mainly for personal fulfilment and for the experience it gives. As for government action, I believe that encouragement through incentives is wise as long as essential services remain properly funded.' }
      ],
      why: [
        'Alasan batin dan alasan praktis memberi dua sudut berbeda untuk Q1.',
        'Jawaban Q2 dikualifikasi dua kali: tanpa paksaan, tanpa menggantikan pekerja.',
        'Contoh pusat membaca dan bank makanan konkret dan tidak mengulang.'
      ]
    }
  ]
}

];
