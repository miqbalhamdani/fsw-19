# Chapter 4

<img src="https://img.shields.io/badge/npm-v12.20.0-blue">

## Review Challenge 4

[Review Challenge 4](./review.md)

## Data Type

[What is camelCase, PascalCase, kebab-case and snake_case?](https://winnercrespo.com/naming-conventions/)

## Object Oriented Programming

Paradigma itu hanya style kita untuk membuat program, jadi tidak terikat pada bahasa tertentu.

**Imperative**: Resep memasak. menjelaskan bagaimana step nya.

**Declarative**: Hasil Masakan. Mau urutan nya bagaimana terserah.

### Function

```js
function diskon(x) {
  return ...
}
```

`const` dan `let` untuk deklarasi sebuah variable, sedangkan `function` adalah kata kunci untuk mendeklarasi fungsi.

`return` akan menghentikan eksekusi kode, kemudian mengembalikan hasil fungsi tersebut.

### Perbedaan cara menggunakan function lama dan baru?

Canggih nya javascript, variable juga bisa menyimpan function. Takut nya menjadi terlalu kompleks, inti nya ada beberapa kondisi, dimana kita tidak bisa menggunakan function, dan harus menggunakan arrow function.

### OOP Language

- Java
- C++
- C#
- Ruby
- Python

Typescript dan Angular Mengadopsi Prinsip OOP

## DOM

**How DOM Work.**

1. Pertama browser akan memuat halaman HTML.
2. Lalu browser akan mengubah tag tag html supaya bisa terbaca oleh browser (bisa kita bilang meng compile / me render yah sebutan nya).
3. Lalu HTML akan check apakah tag html tersebut memiliki style atau class, apabila iya maka css akan dimuat
4. Lalu mengubah attribute attibute css yang tadi telah kita buat untuk di render supaya bisa terbaca oleh browser.
5. Terakhir semua tag html dan style css akan di jadikan DOM sebelum itu semua di tampilkan di browser.
