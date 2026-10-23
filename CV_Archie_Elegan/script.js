// =================================
// 0. MENU NAVIGASI RESPONSIF
// =================================
const tombolMenu = document.querySelector('.menu-toggle');
const menuNavigasi = document.querySelector('#menuNavigasi');

if (tombolMenu && menuNavigasi) {
    tombolMenu.addEventListener('click', function () {
        const terbuka = menuNavigasi.classList.toggle('menu-open');
        tombolMenu.setAttribute('aria-expanded', String(terbuka));
    });

    menuNavigasi.querySelectorAll('a').forEach(function (tautan) {
        tautan.addEventListener('click', function () {
            menuNavigasi.classList.remove('menu-open');
            tombolMenu.setAttribute('aria-expanded', 'false');
        });
    });
}

// =================================
// 1. MENU SCROLL HALUS
// =================================

document.querySelectorAll('.menu a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        const tujuan = document.querySelector(
            this.getAttribute('href')
        );

        if (tujuan) {

            event.preventDefault();

            tujuan.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// =================================
// 2. ANIMASI SAAT SCROLL
// =================================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function(section) {

    observer.observe(section);

});


// =================================
// 3. TOMBOL KEMBALI KE ATAS
// =================================

const tombolAtas = document.createElement('button');

tombolAtas.innerHTML = '↑';

tombolAtas.id = 'tombolAtas';

document.body.appendChild(tombolAtas);


window.addEventListener('scroll', function() {

    if (window.scrollY > 400) {

        tombolAtas.style.display = 'block';

    } else {

        tombolAtas.style.display = 'none';

    }

});


tombolAtas.addEventListener('click', function() {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


// =================================
// 4. FORM LANGSUNG KE WHATSAPP
// =================================

const tombolWA = document.querySelector('#kirimWA');


if (tombolWA) {

    tombolWA.addEventListener('click', function() {

        const nama =
            document.querySelector('#nama').value.trim();

        const pesan =
            document.querySelector('#pesan').value.trim();


        if (nama === '' || pesan === '') {

            alert(
                'Silakan isi nama dan pesan terlebih dahulu.'
            );

            return;

        }


        const nomor = '628950523241';


        const teks =
            'Halo Archie, saya ' +
            nama +
            '.%0A%0A' +
            pesan;


        const link =
            'https://wa.me/' +
            nomor +
            '?text=' +
            teks;


        window.open(link, '_blank');

    });

}


// =================================
// 5. EFEK TABEL
// =================================

const barisTabel =
    document.querySelectorAll('tbody tr');


barisTabel.forEach(function(baris) {

    baris.addEventListener('mouseenter', function() {

        this.style.cursor = 'pointer';

    });

});


// =================================
// 6. TAHUN OTOMATIS
// =================================

const tahunSekarang =
    new Date().getFullYear();

const footer =
    document.querySelector('footer');


if (footer) {

    const teksFooter =
        footer.querySelector('p');

    if (teksFooter) {

        teksFooter.innerHTML =
            '© ' +
            tahunSekarang +
            ' Archie Alexander Siswanto';

    }

}