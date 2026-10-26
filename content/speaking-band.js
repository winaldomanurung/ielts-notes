/*
  Kriteria Speaking per band (5–9). Diparafrase dengan bahasa sendiri dari IELTS Speaking Band Descriptors
  (versi publik di ielts.org). Bukan teks resmi; untuk kata-kata aslinya buka tautan di bawah.

  Tiap kriteria: { id, name, short, bands: { 5..9: 'deskripsi' }, up: { '5→6', '6→7', '7→8' }, check: [pertanyaan saat dengar rekaman] }
*/
(function () {
  window.SPEAKING_BAND_SOURCE = {
    t: 'IELTS Speaking Band Descriptors (public version)',
    u: 'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-speaking-band-descriptors.pdf'
  };

  window.SPEAKING_BANDS = [
    { id: 'fc', name: 'Fluency & Coherence', short: 'Mengalir dan runtut',
      bands: {
        9: 'Lancar dengan pengulangan atau koreksi diri yang sangat jarang. Jeda hanya untuk memikirkan isi, tidak pernah untuk mencari kata. Jawaban berkembang penuh dan panjangnya pas.',
        8: 'Lancar; pengulangan dan koreksi diri hanya sesekali. Jeda umumnya karena memikirkan isi, walau kadang masih mencari kata. Ide berkembang runtut dan relevan.',
        7: 'Bisa bicara panjang tanpa terlihat berusaha keras dan tanpa kehilangan arah. Jeda atau koreksi di tengah kalimat masih ada, tetapi tidak merusak alur. Penghubung dan discourse marker dipakai dengan luwes.',
        6: 'Mau bicara panjang, tetapi alur kadang hilang karena jeda, pengulangan, atau koreksi diri. Penghubung sudah dipakai, tetapi tidak selalu tepat.',
        5: 'Alur bicara dipertahankan dengan banyak pengulangan, koreksi diri, atau bicara pelan. Sering berhenti mencari kata dasar. Penghubung itu-itu saja dan dipakai berlebihan.'
      },
      up: {
        '5→6': 'Latih jawaban yang lebih panjang: Part 1 minimal dua sampai tiga kalimat, Part 2 sampai dua menit penuh walau ada jeda.',
        '6→7': 'Kurangi jeda karena mencari kata. Kuasai frasa pengulur waktu dan variasikan penghubung (so, which is why, that said) supaya tidak and then terus.',
        '7→8': 'Jeda hanya boleh karena memikirkan ide. Jawaban Part 3 harus berkembang sendiri: pendapat, alasan, contoh, sisi lain, tanpa dipancing penguji.'
      },
      check: [
        'Apakah aku berhenti di tengah kalimat untuk mencari kata?',
        'Apakah ada kata yang terulang terus (and, so, actually)?',
        'Apakah Part 2 bertahan sampai mendekati dua menit?',
        'Apakah jawaban Part 3 punya alasan dan contoh, bukan hanya pendapat?'
      ] },
    { id: 'lr', name: 'Lexical Resource', short: 'Kosakata dan parafrase',
      bands: {
        9: 'Kosakata sepenuhnya luwes dan tepat di semua konteks; bahasa idiomatis dipakai akurat dan konsisten.',
        8: 'Kosakata luas dipakai dengan luwes untuk makna yang presisi di topik apa pun. Kata yang jarang dan idiomatis dipakai dengan terampil, walau kadang masih ada salah pilih kata atau kolokasi.',
        7: 'Kosakata cukup luwes untuk berbagai topik. Mulai memakai kata yang kurang umum dan idiomatis, sadar gaya bahasa dan kolokasi, walau masih ada pilihan kata yang kurang pas. Parafrase berjalan efektif.',
        6: 'Kosakata cukup untuk bicara panjang dan makna tetap jelas walau ada pilihan kata yang kurang tepat. Parafrase umumnya berhasil.',
        5: 'Bisa membahas topik akrab maupun tidak akrab, tetapi kosakatanya kaku. Mencoba memparafrase dengan hasil campur.'
      },
      up: {
        '5→6': 'Jangan mengulang kata dari pertanyaan penguji. Latih parafrase: like → be into, popular → pretty common.',
        '6→7': 'Pakai kolokasi per topik (heavy workload, stay in shape) dan beberapa kata yang kurang umum, asal tepat konteks.',
        '7→8': 'Presisi: pilih kata yang paling tepat (exhausted vs tired, rewarding vs good). Idiom dipakai jarang tetapi pas, bukan disisipkan paksa.'
      },
      check: [
        'Apakah aku mengulang kata yang sama dari pertanyaan?',
        'Berapa kali aku memakai good, bad, very, a lot?',
        'Apakah ada kolokasi topik yang terdengar natural?',
        'Saat lupa kata, apakah aku bisa menjelaskannya dengan cara lain?'
      ] },
    { id: 'gra', name: 'Grammatical Range & Accuracy', short: 'Variasi dan ketepatan grammar',
      bands: {
        9: 'Struktur kalimat tepat dan akurat sepanjang tes, kecuali salah ucap kecil yang wajar juga dialami penutur asli.',
        8: 'Banyak variasi struktur dipakai dengan luwes dan sebagian besar kalimat bebas kesalahan. Kesalahan hanya sesekali dan tidak sistematis.',
        7: 'Variasi struktur dipakai dengan luwes dan banyak kalimat bebas kesalahan. Kalimat sederhana dan kompleks sama-sama dipakai dengan efektif, walau masih ada beberapa kesalahan dasar yang berulang.',
        6: 'Campuran kalimat pendek dan kompleks, tetapi kurang luwes. Kalimat kompleks sering salah, walau jarang mengganggu pemahaman.',
        5: 'Kalimat dasar cukup terkontrol. Kalimat kompleks dicoba tetapi terbatas, biasanya ada kesalahan, dan kadang harus diulang.'
      },
      up: {
        '5→6': 'Tambahkan kalimat kompleks sederhana: because, when, if, which. Kunci tense cerita di Part 2.',
        '6→7': 'Kurangi kesalahan dasar yang berulang (he/she, -s, artikel, tense). Tambahkan conditional, present perfect, dan cleft sentence.',
        '7→8': 'Sebagian besar kalimat harus bersih. Variasikan struktur secara alami: partisipel, The more… the more…, It\'s not… that…'
      },
      check: [
        'Apakah he/she dan akhiran -s sudah benar?',
        'Apakah tense di Part 2 konsisten dari awal sampai akhir?',
        'Berapa jenis struktur kompleks yang muncul (if, which, cleft, perfect)?',
        'Kesalahan apa yang muncul lebih dari dua kali?'
      ] },
    { id: 'pr', name: 'Pronunciation', short: 'Kejelasan, tekanan, dan intonasi',
      bands: {
        9: 'Seluruh fitur pengucapan dipakai untuk makna yang presisi dan halus. Connected speech luwes sepanjang tes. Sangat mudah dipahami; aksen sama sekali tidak mengganggu.',
        8: 'Banyak fitur pengucapan dipakai untuk menyampaikan makna yang presisi. Ritme terjaga; tekanan dan intonasi luwes di kalimat panjang, hanya sesekali meleset. Mudah dipahami dan aksen hampir tidak berpengaruh.',
        7: 'Tidak punya deskripsi sendiri: semua ciri positif band 6 terpenuhi, ditambah sebagian (belum semua) ciri band 8.',
        6: 'Beberapa fitur pengucapan dipakai, tetapi kontrolnya belum stabil. Pemenggalan frasa umumnya pas, tetapi ritme bisa terganggu karena tekanan kata kurang atau bicara terlalu cepat. Tekanan dan intonasi efektif hanya sesekali. Salah ucap kadang mengurangi kejelasan, tetapi secara umum mudah diikuti.',
        5: 'Tidak punya deskripsi sendiri: semua ciri band 4 terpenuhi, ditambah sebagian ciri band 6.'
      },
      up: {
        '5→6': 'Prioritaskan kejelasan: konsonan akhir (-s, -ed, -t) diucapkan, tempo sedikit diperlambat.',
        '6→7': 'Latih word stress pada kata panjang (deVELopment, ecoNOMic) dan pemenggalan frasa yang konsisten.',
        '7→8': 'Gunakan intonasi untuk makna: tekanan pada kata penting, nada naik-turun saat membandingkan, connected speech yang alami.'
      },
      check: [
        'Apakah konsonan akhir terdengar jelas?',
        'Apakah aku bicara terlalu cepat sampai kata-kata menempel?',
        'Apakah nada suaraku datar dari awal sampai akhir?',
        'Kata apa yang tekanannya terdengar salah?'
      ] }
  ];

  window.SPEAKING_BAND_NOTES = [
    'Nilai Speaking adalah rata-rata empat kriteria dengan bobot sama.',
    'Untuk mendapat suatu band, semua ciri positif band itu harus terpenuhi, bukan hanya sebagian.',
    'Yang dinilai adalah performa rata-rata di seluruh tes, jadi satu jawaban buruk tidak menentukan nilai.',
    'Aksen tidak dinilai. Yang dinilai adalah seberapa mudah kamu dipahami.'
  ];
})();
