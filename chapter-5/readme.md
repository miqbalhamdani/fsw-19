# NodeJS

### Todos

1. [ ] Mampu menginisiasi project menggunakan package manager
2. [ ] Mampu melakukan konfigurasi package.json
3. [ ] Mampu menggunakan module untuk melakukan read dan write file

Ada tiga tipe module di dalam Node.js

1. Core Module

   Core module adalah module yang sudah ada di dalam Node.js dan dapat kita pakai langsung setelah inisialisasi Node.js, module ini dibuat langsung oleh developer Node.js.

   Contoh: Http, File System

   [Core Module NodeJS](https://www.tutorialsteacher.com/nodejs/nodejs-modules)

2. Third party module

   Third party module adalah module yang dibuat oleh komunitas atau perusahaan di luar lingkup developer Node.js. Untuk memakai Third party module, kita harus menginstall-nya terlebih dahulu.

   Contoh: React, Boostrap, Express

3. Local module

   Local module adalah suatu module yang kita buat sendiri. Kita akan banyak ngotak-atik module ini, karena module ini adalah inti dari aplikasi kita. Sebelum bisa bikin local module ini, kita harus tau dulu bagaimana cara inisialisasi project dari Node.js.

### Package Manager

1. NPM
2. Yarn
3. PNPM

### Module

1. Moment

   Parse, validate, manipulate, and display dates and times in JavaScript.

   [Moment Installation and Documentation](https://momentjs.com/docs/#/use-it/)

2. Nodemon

   Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

   [Nodemon Installation](https://github.com/remy/nodemon)

### File System

File system ini yang saya tahu, digunakan untuk menyimpan log, sebagai contoh log semuah transaksi saat checkout hingga bayar, atau pemesanan tiket kereta yang membutuhkan integrasi ke beberapa layanan.

Tapi pada implementasi nya, itu hanya berlaku untuk aplikasi kecil, sedangkan untuk aplikasi besar sudah tidak digunakan karena justru akan memberatkan aplikasi itu sendiri.
