# Catatan IELTS

Catatan belajar IELTS Academic pribadi. Situs statis tanpa database, di-deploy lewat GitHub Pages:
https://winaldomanurung.github.io/ielts-notes/

## Struktur

- `index.html` — halaman utama: tab per skill, sub-tab per task atau part, latihan Reading dan Listening.
- `content/writing-task2.js` — semua konten Writing Task 2: contoh soal, framework berpikir, framework menulis, dan esai contoh per jenis soal.
- `content/structure.js` — tab Structure: kalimat kompleks per fungsi, dibedah jadi kerangka (bagian tetap, slot, alternatif diksi). Tambah kalimat di array `items` pada grup yang sesuai. Khusus Writing.
- `content/speaking-bank.js` — bank soal Speaking: topik Part 1 dan cue card Part 2, masing-masing dengan pertanyaan Part 3 terkait. Dipakai Bank soal dan Mock test.
- `content/speaking-language.js` — grammar lisan per fungsi, gaya tulis vs ucap, kesalahan umum penutur Indonesia, dan kosakata Speaking.
- `content/speaking-band.js` — kriteria Speaking per band 5–9 (parafrase band descriptors resmi), cara naik band, dan checklist rekaman.
- `content/speaking.js` + `content/speaking.css` — renderer dan gaya untuk sub-tab Speaking baru. Konten Speaking terpisah dari Writing.

## Menambah esai Task 2

Buka `content/writing-task2.js`, cari jenis soalnya (`opinion`, `discussion`, `problem`, `advdis`, `twopart`), lalu tambahkan objek baru di array `essays`:

```js
{
  q: 'Pertanyaan esai',
  plan: ['Hasil tahap 1: posisi', 'Alasan 1', 'Alasan 2', 'Konsesi'],
  paras: [
    { r: 'Intro', t: '...' },
    { r: 'Body 1', t: '...' },
    { r: 'Body 2', t: '...' },
    { r: 'Penutup', t: '...' }
  ],
  why: ['Catatan 1', 'Catatan 2']
}
```

Jumlah kata dihitung otomatis. Saat ini ada 5 esai per jenis soal (25 total). Tombol esai di halaman mengikuti jumlah objek di `essays`.

## Template Menulis

Tab "2 · Menulis" memakai skrip baku per kalimat (Intro 2–3 kalimat, tiap Body 5 kalimat, Penutup 2 kalimat). Ubah di array `writing` pada tiap jenis soal; bagian `{{...}}` tampil sebagai slot isian.

## Menambah soal Speaking

Buka `content/speaking-bank.js`.

- Topik Part 1: tambahkan `{ id, name, qs: [...] }` di array `p1`. Beri `intro: true` kalau topik itu pembuka (work, studies, home); mock test selalu memulai dari salah satu topik pembuka.
- Cue card: tambahkan objek di array `p2`:

```js
{
  id: 'slug', cat: 'Orang / Tempat / Benda / Kejadian / Kegiatan / Rencana',
  title: 'Describe ...',
  bullets: ['poin 1', 'poin 2', 'poin 3', 'and explain ...'],
  round: 'Pertanyaan penutup singkat setelah 2 menit',
  p3: { topic: 'Nama topik diskusi', qs: ['Pertanyaan Part 3', '...'] }
}
```

Mock test memakai 1 topik pembuka + 2 topik lain di Part 1, 1 cue card acak, lalu 5 pertanyaan Part 3 dari kartu itu.

## Catatan

Semua esai dan kerangka di repositori ini ditulis sendiri untuk belajar. Esai contoh ditulis mengacu pada deskriptor Band 9, tetapi bukan penilaian resmi. Esai resmi dari IELTS.org, British Council, IDP, dan Cambridge berhak cipta, jadi hanya ditautkan.
