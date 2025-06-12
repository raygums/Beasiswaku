// Ambil referensi tombol
const scrollUpButton = document.getElementById('scrollUpButton');

// Tampilkan tombol jika pengguna menggulir ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollUpButton.style.display = 'block';  
    } else {
        scrollUpButton.style.display = 'none';  
    }
});

// Gulung halaman ke atas saat tombol diklik
scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
});


// Fungsi untuk menambahkan kelas aktif saat melewati elemen
document.addEventListener("scroll", function () {
    const items = document.querySelectorAll(".timeline-item");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;

        if (scrollPosition > itemTop) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
});


document.addEventListener("scroll", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineLine = document.querySelector(".timeline");

    let hasActiveItem = false; 

    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;

        // Deteksi apakah kotak telah dilewati
        if (window.scrollY + window.innerHeight / 2 > itemTop) {
            item.classList.add("active");
            hasActiveItem = true;
        } else {
            item.classList.remove("active");
        }
    });

    // Ubah warna garis timeline berdasarkan status
    if (hasActiveItem) {
        timelineLine.classList.add("active");
    } else {
        timelineLine.classList.remove("active");
    }
});
