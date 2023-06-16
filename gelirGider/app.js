//? Selektörler (seçiciler)
//* gelir ekleme selektörleri
const gelirEkleBtn = document.getElementById('gelirEkleBtn');
const gelirEkleInput = document.getElementById('gelirEkleInput');
const toplamGelir = document.getElementById('toplamGelir');
//* gider ekleme selektörleri
const giderEkleBtn = document.getElementById('giderEkleBtn');
const harcamaTuru = document.getElementById('harcamaTuru');
const tarih = document.getElementById('tarih');
const harcamaTutari = document.getElementById('harcamaTutari');
const harcamaFormu = document.getElementById('harcamaFormu');
const toplamGider = document.getElementById('toplamGider');
const kalanTutar = document.getElementById('kalanTutar');

const harcamaBody = document.getElementById('harcamaBody');

let gelirlerToplami = 0;
let toplamHarcamalar = 0;

// Gelir ekleme
gelirEkleBtn.addEventListener('click', () => {
    if (gelirEkleInput.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'Gelir Kısmı Boş Geçilemez!!! Lütfen bir değer girin.'
        });
        return;
    }
    
    gelirlerToplami += parseFloat(gelirEkleInput.value);
    toplamGelir.textContent = `: ${gelirlerToplami} TL`;
    gelirEkleInput.value = "";
    localStorage.setItem("gelirlerToplami", gelirlerToplami);
    guncelle();
});

// Harcamaları JSON olarak localStorage'ye kaydetme
giderEkleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (harcamaTuru.value === "" || harcamaTutari.value === "" || tarih.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'Harcama Türü, Tarih veya Harcanan Miktar Kısmı Boş Geçilemez!!! Lütfen bir değer girin.'
        });
        return;
    }

    const yeniHarcama = {
        id: new Date().getTime(),
        harcamaTuru: harcamaTuru.value,
        harcamaTutari: parseFloat(harcamaTutari.value),
        tarih: tarih.value
    };

    harcamaListesi.push(yeniHarcama);
    localStorage.setItem('harcamaListesi', JSON.stringify(harcamaListesi));
    harcamayiEkranaYaz(yeniHarcama);
    harcamaFormu.reset();
    

    toplamHarcamalar += Number(yeniHarcama.harcamaTutari);
    toplamGider.textContent = `: ${toplamHarcamalar} TL`;

    guncelle();
});

// Kaydedilen verileri tekrar alıp ekrana yazdırma
window.addEventListener("load", () => {
    if (localStorage.getItem("harcamaListesi") !== null) {
        harcamaListesi = JSON.parse(localStorage.getItem("harcamaListesi"));
        harcamaListesi.forEach((harcama) => {
            harcamayiEkranaYaz(harcama);
            toplamHarcamalar += Number(harcama.harcamaTutari);
        });
        toplamGider.textContent = `: ${toplamHarcamalar} TL`;
    }

    if (localStorage.getItem("gelirlerToplami") !== null) {
        gelirlerToplami = parseFloat(localStorage.getItem("gelirlerToplami"));
        toplamGelir.textContent = `: ${gelirlerToplami} TL`;
    }
   
    tarih.valueAsDate = new Date();
    guncelle();
});

function harcamayiEkranaYaz(yeniHarcama) {
    const satir = document.createElement('tr');
    const tarihHucre = document.createElement('td');
    // tarihHucre.textContent = yeniHarcama.tarih;
    const tarihDizi = yeniHarcama.tarih.split("-");
    const tarihFormatli = `${tarihDizi[2]}.${tarihDizi[1]}.${tarihDizi[0]}`;
    tarihHucre.textContent = tarihFormatli;

    const harcamaTuruHucre = document.createElement('td');
    harcamaTuruHucre.textContent = yeniHarcama.harcamaTuru;
    const harcamaTutariHucre = document.createElement('td');
    harcamaTutariHucre.textContent = yeniHarcama.harcamaTutari;
    const silButonHucre = document.createElement('td');
    const silButon = document.createElement('button');
    silButon.textContent = 'Sil';
    silButon.classList.add('sil-button');
    silButon.style.background = 'red';
    silButon.style.color = 'white';
    silButon.style.border = 'none';
    silButon.style.borderRadius = '5px';
    silButon.style.padding = '0 10px';
    silButon.addEventListener('click', () => {
        harcamayiSil(satir, yeniHarcama);
    });
    silButonHucre.appendChild(silButon);

    satir.appendChild(tarihHucre);
    satir.appendChild(harcamaTuruHucre);
    satir.appendChild(harcamaTutariHucre);
    satir.appendChild(silButonHucre);
    harcamaBody.appendChild(satir);
}

function harcamayiSil(satir, harcama) {
    const index = harcamaListesi.findIndex((item) => item.id === harcama.id);
    if (index !== -1) {
        harcamaListesi.splice(index, 1);
        localStorage.setItem('harcamaListesi', JSON.stringify(harcamaListesi));
        satir.remove();

        toplamHarcamalar -= harcama.harcamaTutari;
        toplamGider.textContent = `: ${toplamHarcamalar} TL`;
    }

    guncelle();
}

function guncelle() {
    const kalan = gelirlerToplami - toplamHarcamalar;
    kalanTutar.textContent = `: ${kalan} TL`;
}
