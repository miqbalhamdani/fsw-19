# Database

Tipe Database:
1. Relational Database (SQL)
2. Non-Relational Database (NoSQL)

### Macam DBMS

[DB Rangking](https://db-engines.com/en/ranking)

**DBMS yang berbasis SQL**

- MySQL
- PostgreSQL
- Microsoft SQL Server (enterprise)
- Oracle RDBMS (enterprise)

**DBMS yang berbasis NoSQL**

- MongoDB (Document)
- Redis (Key-value)
- Elasticsearch (search engine)
- Algolia (search engine)

### SQL vs NoSQL (MongoDB)

![](https://miro.medium.com/max/1214/0*GbAB-bGDGaWtfOxi.jpeg)

### SQL Syntax

Postgre

```sql
psql postgres -- untuk masuk Postgre

\l -- untuk melihat database
```

### MongoDB Syntax

```sql
mongosh -- untuk masuk MongoDB

use book_store -- masuk database book_store, dan akan membuat database tersebut kalau belum ada

-- untuk membuat dan memasukan data ke collection books, pada database book_store
db.books.insertOne({
 "title": "Belajar React",
 "description": "Learn Most Popular Frontend Framework"
})

-- menampilkan collection books tadi, yang sudah kita isi sebelum nya.
db.books.find({});


--- untuk menambahkan data dua atau lebih sekaligus ke collection books
db.books.insertMany([
{
 "title": "Vue",
 "description": "Simple Easy and Beautiful Frontend Framework"
},
{
 "title": "Angular",
 "description": "Enterprise Frontend Framework"
}
])
```
