## Breakdown Task

- Setup React Project
- Setup React Routing
- Install UI Framework
- Default Layout
- Header / Navigation
- Landing Page Section 1
- Landing Page Section 2
- Landing Page Section 3
- Landing Page Section 4
- Landing Page Section 5
- Design Login Page
- Design Register Page
- Design Profile Page
- Design Game List Page
- Design Score Section, Detail Page
- Design Rock Paper Scissors, Detail Page
- Functional Rock Paper Scissors, Detail Page
- Functional RScore Section, Detail Page
- Config React Middleware
- Setup Firebase
- Integrate Create User with Email and Password with Firebase
- Integrate Sign In with Email and Password with Firebase
- Create Database Structure in Firebase
- Integrate Score Data to Firebase
- Integrate User Data to Firebase


## Git Flow

Berikut adalah panduan umum untuk developer yang akan mengembangkan satu fitur

> Terdapat 3 branch: master, development.
> Origin disini maksud nya adalah yang ada di cloud atau kita bisa lihat di github.com

Branch master akan digunakan di akhir, setelah seluruh fitur selesai di kerjakan semua, sudah di testing dan tidak ada bugs, dan sudah siap untuk release.

1. Kita buat branch development terlebih dahulu

    ```
    $ git checkout -b development
    ```

2. Buat branch baru dan beri nama sesuai kode/fitur yang akan ditambah

   ```bash
   # untuk update / sync branch di local dan origin
   $ git fetch

   # pindah ke branch development
   $ git checkout development

   # update data terbaru, dari branch development yang ada di origin
   $ git pull

   # buat branch baru (feature-landing-page-section-1), dari source branch development
   $ git checkout -b feature-landing-page-section-1
   ```

3. Lakukan coding seperti biasa. Tambahkan, hapus, atau ubah file yang diperlukan. Git akan tracking secara otomatis. Apabila ingin melihat file yang berubah, cek dengan

    ```bash
    $ git status
    ```

4. Untuk menyimpan perubahan ke origin yang sudah kita kerjakan.

    ```bash
    # menambahkan semua file untuk di upload ke origin
    $ git add .

    # menyimpan seluruh perubahan dengan pesan seperti dibawah
    $ git commit -m "add feature-landing-page-section-1"
    ```

5. sebelum kita upload branch kita ke origin, kita harus menyingkronkan antara branch development   dengan branch kita. Supaya nanti ketika `pull request` tidak ada conflict.

    ```bash
    # sync branch kita dengan branch development yang ada di origin
    $ git pull origin development
    ```

    Jika terjadi conflict karena ada anggota tim lain yang mengedit baris code sama, lakukan resolve di code editor dengan memilih potongan code yang betul. Dan apabila perlu, untuk resolve ini bisa didiskusikan ke developer terkait terlebih dahulu. Ada beberapa opsi:
    - pilih code existing (milik kita),
    - pilih code incoming (milik anggota lain), atau
    - keep both (dua-duanya dimasukkan).

    Pastikan code yang sudah di resolve sudah di test kembali berjalan dengan normal. Setelah itu baru simpan perubahan tadi dengan pesan.

    ```bash
    # menyimpan perubahan dengan pesan
    $ git commit -m "merge development to feature-landing-page-section-1"

    # upload branch kita ke origin
    $ git push
    ```

    Sedangkan apabila tidak terjadi conflict, bisa langsung lakukan ini

    ```bash
    # upload branch kita ke origin
    $ git push
    ```
6. Lakukan Pull Request di github

    1. Pilih tab ***Pull Requests***
    2. Klik Button ***New Pull Request***
    3. pilih branch asal feature-landing-page-section-1 dan branch tujuan development.
    4. Klik Button ***Create Pull Request***

7. Selanjut nya, `Maintainer` akan mereview code, lalu apabila tidak ada error,  `Maintainer` bisa **Merge pull request** dan approve apabila tidak ada conflict


