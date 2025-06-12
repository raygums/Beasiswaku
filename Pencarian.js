const scholarships = [
  { name: "BSI Scholarship", url: "beasiswapost.html" },
  { name: "Beasiswa Sarjana (S1)", url: "beasiswas1.html" },
  { name: "Beasiswa Magister (S2)", url: "beasiswas2.html" },
  { name: "Beasiswa Doktor (S3)", url: "beasiswas3.html" },
  { name: "5 Manfaat Toefl", url: "/BEASISWAKU/berita/post1.html" },
  { name: "Tips Study Abroad", url: "/BEASISWAKU/tips/tips1.html" },
];

// Fungsi pencarian dan render dropdown
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const dropdown = document.getElementById("searchDropdown");

  // Hapus list lama
  dropdown.innerHTML = "";

  if (query) {
      const filteredItems = scholarships.filter(item =>
          item.name.toLowerCase().includes(query)
      );

      // Tampilkan hasil jika ada, jika tidak ada tampilkan pesan
      if (filteredItems.length > 0) {
          filteredItems.forEach(item => {
              const li = document.createElement("li");
              li.textContent = item.name;
              li.style.color = 'black'; 

              // Efek saat hover
              li.addEventListener("mouseenter", function () {
                  li.style.backgroundColor = '#e5e7eb'; 
                  li.style.cursor = 'pointer';          
              });

              li.addEventListener("mouseleave", function () {
                  li.style.backgroundColor = ''; 
              });

              // Efek saat item diklik
              li.addEventListener("click", function () {
                  li.style.backgroundColor = '#93c5fd'; 
                  window.location.href = item.url; 
              });

              dropdown.appendChild(li);
          });
      } else {
          const li = document.createElement("li");
          li.textContent = "Hasil tidak ditemukan.";
          li.classList.add("no-result");
          li.style.color = 'gray';  
          dropdown.appendChild(li);
      }

      dropdown.classList.remove("hidden"); 
  } else {
      dropdown.classList.add("hidden"); 
  }
});


//tombol "Cari"
document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("searchResult");

  if (query) {
      // Menampilkan hasil pencarian di halaman
      resultDiv.textContent = `Hasil pencarian untuk: "${query}"`;

      // Memilih halaman yang sesuai berdasarkan kata kunci
      if (query.toLowerCase().includes("sarjana")) {
          window.location.href = `beasiswas1.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("magister")) {
          window.location.href = `beasiswas2.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("doktor")) {
          window.location.href = `beasiswas3.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("toefl")) {
          window.location.href = `/BEASISWAKU/berita/post1.html?search=${encodeURIComponent(query)}`;
      } else if (query.toLowerCase().includes("study abroad")) {
          window.location.href = `/BEASISWAKU/tips/tips1.html?search=${encodeURIComponent(query)}`;
      } else {
          window.location.href = `beasiswas1.html?search=${encodeURIComponent(query)}`;
      }
  } else {
      alert("Masukkan kata kunci untuk mencari beasiswa.");
  }
});


// Event untuk klik di luar dropdown
document.addEventListener("click", function (event) {
  const input = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchDropdown");

  if (!input.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.add("hidden");
  }
});

