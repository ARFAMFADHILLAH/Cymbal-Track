# 🌍 Cymbal-Track

Aplikasi pelacak lokasi *real-time* berbasis web yang dikembangkan oleh seorang **Google Maps Platform Innovator** dan **Google Cloud Innovator**. Aplikasi ini dirancang untuk memantau koordinat lokasi secara langsung menggunakan Google Maps API dan teknologi *Geolocation* modern.

## 🚀 Fitur Utama
* **Peta Interaktif:** Implementasi `AdvancedMarkerElement` untuk visualisasi lokasi yang presisi.
* **Tracking Real-time:** Memanfaatkan `navigator.geolocation.watchPosition` untuk memantau pergerakan pengguna secara *live*.
* **Cloud-Native:** Di-hosting dengan infrastruktur **Google Cloud Platform** melalui Firebase Hosting.

## 🛠 Teknologi yang Digunakan
* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules).
* **Maps API:** Google Maps JavaScript API (Maps & Marker libraries).
* **Cloud Infrastructure:** Firebase Hosting (Google Cloud Platform).
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
