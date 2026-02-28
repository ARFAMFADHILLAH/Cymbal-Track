import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaIhEyiKb0eCjj9JGpGDpLpREM9K-ChQA",
  authDomain: "cymbal-track.firebaseapp.com",
  projectId: "cymbal-track",
  storageBucket: "cymbal-track.firebasestorage.app",
  messagingSenderId: "936813595114",
  appId: "1:936813595114:web:3a6b99d0eb2647d81f0a93",
  measurementId: "G-TGY8RBKK9M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// SATU FUNGSI UNTUK SEMUA
window.initMap = async function() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // 1. Inisialisasi peta awal di Bekasi
    const map = new Map(document.getElementById("map"), {
        center: { lat: -6.2383, lng: 106.9756 },
        zoom: 15,
        mapId: "DEMO_MAP_ID",
    });

    // 2. Cek apakah Browser mendukung Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Geser peta ke lokasi saat ini
                map.setCenter(pos);

                // Buat/Update Marker di posisi user
                new AdvancedMarkerElement({
                    position: pos,
                    map: map,
                    title: "Anda di sini!",
                });
            },
            () => {
                console.error("Gagal mendapatkan lokasi.");
            }
        );
    } else {
        alert("Browser Anda tidak mendukung Geolocation.");
    }
};