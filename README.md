# Catatan IELTS

Catatan belajar IELTS Academic pribadi. Situs statis tanpa database, di-deploy lewat GitHub Pages:
https://winaldomanurung.github.io/ielts-notes/

## Struktur

- `index.html` — halaman utama: tab per skill, sub-tab per task atau part, latihan Reading dan Listening.
- `content/writing-task2.js` — semua konten Writing Task 2: contoh soal, framework berpikir, framework menulis, dan esai contoh per jenis soal.

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

Jumlah kata dihitung otomatis. Tombol esai di halaman mengikuti jumlah objek di `essays`.

## Catatan

Semua esai dan kerangka di repositori ini ditulis sendiri untuk belajar. Esai contoh ditulis mengacu pada deskriptor Band 9, tetapi bukan penilaian resmi. Esai resmi dari IELTS.org, British Council, IDP, dan Cambridge berhak cipta, jadi hanya ditautkan.
