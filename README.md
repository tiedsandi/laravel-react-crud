# Employee Management (Laravel + React)

## Deskripsi

Project ini adalah aplikasi sederhana untuk mengelola data karyawan (Employee) menggunakan **Laravel (Backend API)** dan **React.js (Frontend)**.
Fitur yang disediakan:

- Menampilkan daftar Employee dalam tabel
- Tambah Employee
- Edit Employee
- Hapus Employee
- Validasi input (frontend & backend)

---

## Tech Stack

- **Backend**: Laravel 12, SQLite (default Laravel)
- **Frontend**: React.js (Vite, TailwindCSS, React Router)

---

## Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/tiedsandi/laravel-react-crud
cd laravel-react-app
```

### 2. Setup Backend (Laravel)

```bash
cd backend
cp .env.example .env
```

Lalu jalankan:

```bash
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

Backend jalan di: `http://127.0.0.1:8000`

---

### 3. (Opsional) Jalankan Seeder

Untuk mengisi database dengan data dummy karyawan, jalankan:

```bash
php artisan db:seed
```

Atau jika ingin reset database sekaligus isi ulang seed:

```bash
php artisan migrate:fresh --seed
```

Seeder ini akan menambahkan 3 data awal ke tabel `employees`.

---

### 4. Setup Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend jalan di: `http://localhost:5173`

---

## Endpoint API (Laravel)

- `GET    /api/employees` → List semua employee
- `POST   /api/employees` → Tambah employee baru
- `PUT    /api/employees/{id}` → Update employee
- `DELETE /api/employees/{id}` → Hapus employee

---

## Validasi

**Backend (Laravel)**

- `name`: minimal 5 karakter
- `email`: unik & format valid

**Frontend (React)**

- `name`: wajib diisi
- `email`: wajib diisi & format valid
- `position`: wajib diisi

---

## Tampilan

- Halaman utama: tabel daftar employee
- Tombol **Tambah, Edit, Hapus** di setiap row
- Form untuk tambah & edit employee
