# 🌍 Cymbal-Track

Aplikasi pelacak lokasi *real-time* berbasis web yang dibangun dengan Google Maps API dan Firebase. Proyek ini dirancang untuk memantau koordinat lokasi secara langsung menggunakan *Geolocation API* browser.



## 🚀 Fitur Utama
* **Peta Interaktif:** Menampilkan peta Google Maps dengan penanda lokasi terkini.
* **Tracking Real-time:** Memanfaatkan `navigator.geolocation.watchPosition` untuk memantau pergerakan pengguna secara *live*.
* **Advanced Markers:** Menggunakan `AdvancedMarkerElement` untuk performa peta yang optimal.
* **Cloud Deployment:** Di-hosting secara *online* melalui Firebase Hosting.

## 🛠 Teknologi yang Digunakan
* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules).
* **Maps:** Google Maps JavaScript API (Maps & Marker libraries).
* **Backend/Deployment:** Firebase Hosting.
* **Data:** Browser Geolocation API.

## 📂 Struktur Folder
```text
Cymbal-Track/
├── public/
│   ├── index.html    # Halaman utama aplikasi
│   ├── style.css     # Styling CSS
│   └── app.js        # Logika utama (Peta & GPS)
├── firebase.json     # Konfigurasi hosting Firebase
└── README.md         # Dokumentasi proyek
