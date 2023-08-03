// !NAVBAR
//* navbar kategori gizleme 
let navbarEye = document.getElementById('navbar-eye')
let navbarKategori = document.getElementById('navbar-kategori')
let navbarXmark = document.getElementById('navbar-xmark') 

navbarEye.addEventListener('click', toggleNavbar)
navbarXmark.addEventListener('click',toggleNavbar)

function toggleNavbar(){
    navbarEye.classList.toggle('navbar-eye')
    navbarXmark.classList.toggle('navbar-xmark')
    navbarKategori.classList.toggle('navbar-kategori')
}



 // footer js start
        const acordionItems = document.querySelectorAll('.footer-main-acordion-item');
        // Html belgesinde footer-main-acordion-item sınıfına sahip tüm öğeleri seçer ve bu öğeleri acordionItem'a atar.

        acordionItems.forEach(item => {
            // acordionItems dizisindeki her bir akordion öğesi üzerinde bir döngü (forEach) başlatır.
            const header = item.querySelector('.footer-main-acordion-header');
            // her akordion öğesi içinde footer-main-acordion-header sınıfına sahip başlığı seçer ve header adlı bir değişkene atar.

            header.addEventListener('click', () => {
                // Her başlık öğesi için bir tıklama olay dinleyicisi ekler.
                item.classList.toggle('active');
                // Başlık öğesine tıklandığında, içeriğin açılmasını ve kapanmasını sağlayacak olan active sınıfını item adlı akordion öğesine ekleyip kaldırır. Yani, başlığa tıkladığınızda, active sınıfı eklenirse içerik görünür olacak, sınıf kaldırılırsa içerik gizlenecektir.


                acordionItems.forEach(otherItem => {
                    // Başlık öğesine tıklandığında, içeriğin açılmasını ve kapanmasını sağlayacak olan active sınıfını item adlı akordion öğesine ekleyip kaldırır. Yani, başlığa tıkladığınızda, active sınıfı eklenirse içerik görünür olacak, sınıf kaldırılırsa içerik gizlenecektir.
                    if (otherItem !== item) {
                        // Eğer mevcut otherItem akordion öğesi item akordion öğesi ile aynı değilse, yani seçilen akordionun dışındaki diğer öğelerse:
                        otherItem.classList.remove('active');
                        // sınıfını kaldırarak diğer akordion öğelerinin içeriğini kapatır.
                    }
                });
            });
        });
        const accordionHeaders = document.querySelectorAll('.footer-main-acordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                this.classList.toggle('active');
                // Başlık öğesine tıklandığında, içeriğin açılmasını ve kapanmasını sağlayacak olan active sınıfını başlık öğesine ekleyip kaldırır. Yani, başlığa tıkladığınızda, active sınıfı eklenirse içerik görünür olacak, sınıf kaldırılırsa içerik gizlenecektir.
            });
        });

        // footer js end
