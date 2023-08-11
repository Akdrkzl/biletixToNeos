// !NAVBAR-START
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

// !LİNK GRUBU DETAY BÖLÜMÜ
// Link grubu data ile yaptım
const linkGrup = document.querySelectorAll('.link-grup')
linkGrup.forEach((element) =>{
    element.addEventListener('click',()=>{
        const linkDetayAcik = document.querySelector(element.dataset.target)
        linkDetayAcik.classList.toggle('link-aktif')
    })

})

//!NAVBAR-HAMBURGER-MENU-START
function barMenu(){
    const barOpenElements = document.querySelectorAll('.bar-menu')
    barOpenElements.forEach((element) => {
        element.addEventListener('click',() =>{
            const hamburgerMenu = document.querySelector('.hamburger-menu')
            hamburgerMenu.classList.add('hamburger-menu-aktif')
            if(hamburgerMenu.classList.contains('hamburger-menu-aktif')){
            }
                
        })
    })

    const ok = document.querySelectorAll('.ok')
    ok.forEach((e) => {
        e.addEventListener('click', ()=>{
            const hamburgerMenu = document.querySelector('.hamburger-menu')
            if(hamburgerMenu.classList.contains('hamburger-menu-aktif')){
            hamburgerMenu.classList.remove('hamburger-menu-aktif')
            }
        })
    })
    
}
barMenu()


//* üst-div-TR
//* üst div'de bulunan TR bölümünün hamburger-menu yapısı
const trAc = document.querySelectorAll('#tr')
trAc.forEach((element) =>{
    element.addEventListener('click', () =>{
        const hamburgerMenuTr = document.querySelector('.hamburger-menu-tr')
        hamburgerMenuTr.classList.toggle('hamburger-menu-aktif')
    });

    const ok = document.querySelectorAll('#ok-tr')
    ok.forEach((e) => {
        e.addEventListener('click', ()=>{
            const hamburgerMenuTr = document.querySelector('.hamburger-menu-tr')
            if(hamburgerMenuTr.classList.contains('hamburger-menu-aktif')){
            hamburgerMenuTr.classList.remove('hamburger-menu-aktif')
            }
        })
    })
});

//*üst-div-Tüm-Türkiye 
//* üst div'de bulunan Tüm Türkiye bölümünün hamburger-menu-yapısı
const tumTrAc = document.querySelectorAll('#tum-tr')
tumTrAc.forEach((element) =>{
    element.addEventListener('click', () =>{
        const hamburgerMenuTumTr = document.querySelector('.hamburger-menu-tum-tr')
        hamburgerMenuTumTr.classList.toggle('hamburger-menu-aktif')
    });

    const ok = document.querySelectorAll('#ok-tum-tr')
    ok.forEach((e) => {
        e.addEventListener('click', ()=>{
            const hamburgerMenuTumTr = document.querySelector('.hamburger-menu-tum-tr')
            if(hamburgerMenuTumTr.classList.contains('hamburger-menu-aktif')){
            hamburgerMenuTumTr.classList.remove('hamburger-menu-aktif')
            }
        })
    })
});
//!NAVBAR-HAMBURGER-MENU-END
//!NAVBAR-END


// HOTTICKETS-YENİ&YAKINDAGELECEKLER JS BAŞLANGIÇ KISMI 

let tikla = document.querySelector (".satis")
tikla.addEventListener("click",
function(){
let hotSatis = document.querySelector (".satis")
hotSatis.style.border="2px solid #e6e6e6" 
hotSatis.style.borderBottom="none"  

let hotSatis2 = document.querySelector(".ticket")
hotSatis2.style.border="none"
hotSatis2.style.borderBottom="2px solid #e6e6e6"

let hotSatis3 = document.querySelector(".hottickettt")
hotSatis3.style.display = "none"

let hotSatis4 = document.querySelector(".yenisatisss")
hotSatis4.style.display="block"



});

let tiklaa = document.querySelector(".ticket")
tiklaa.addEventListener("click",
function(){
let hotSatis = document.querySelector (".ticket")
hotSatis.style.border="2px solid #e6e6e6" 
hotSatis.style.borderBottom="none"  

let hotSatis2 = document.querySelector(".satis")
hotSatis2.style.border="none"
hotSatis2.style.borderBottom="2px solid #e6e6e6"


let hotSatis3 = document.querySelector(".yenisatisss")
hotSatis3.style.display = "none"

let hotSatis4 = document.querySelector(".hottickettt")
hotSatis4.style.display="block"



});

// HOTTICKETS-YENİ&YAKINDAGELECEKLER JS SON KISMI 


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


// muzik html sayfası
//  KATEGROİLER VE ETKİNLİK TARİHLERİ BAŞLANGIÇ

let gizle = document.querySelector(".d2");
let tiklad1 = document.querySelector(".d1");
tiklad1.addEventListener("click", function () {
    let goster = document.querySelector(".d3");
    goster.classList.toggle("d3-active");
    tiklad1.style.display = "none";
    gizle.style.display = "block";
});

gizle.addEventListener("click", function () {
    gizle.style.display = "none";
    let goster = document.querySelector(".d3");
    goster.classList.remove("d3-active");
    tiklad1.style.display = "block";
});

//  KATEGROİLER VE ETKİNLİK TARİHLERİ BAŞLANGIÇ
