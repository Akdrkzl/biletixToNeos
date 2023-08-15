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
let aktifDiv = null;
function linkMenu(link){
    const linkGrupId = link.dataset.target;
    const linkGrup = document.getElementById(linkGrupId);
    if (aktifDiv !== null && aktifDiv !== linkGrup) {
        aktifDiv.style.display = "none";
    }
    linkGrup.style.display = linkGrup.style.display === "block" ? "none" : "block";
    aktifDiv = linkGrup.style.display === "block" ? linkGrup : null;
}

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
if (tikla)
{
tikla.addEventListener("click",
function ticketSatis(){
   
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
}


)};


let tiklaa = document.querySelector(".ticket")
if (tiklaa) {
tiklaa.addEventListener("click",
function ticketSatis2(){


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

}
)};


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
function gosterGizleMuzik(){
    let gizle = document.querySelector(".d2");
    let tiklad1 = document.querySelector(".d1");
    if(tiklad1){
       tiklad1.addEventListener("click", function () {
        let goster = document.querySelector(".d3");
        goster.classList.toggle("d3-active");
        tiklad1.style.display = "none";
        gizle.style.display = "block";
        }); 
    }    
    if(gizle){
        gizle.addEventListener("click", function () {
        gizle.style.display = "none";
        let goster = document.querySelector(".d3");
        goster.classList.remove("d3-active");
        tiklad1.style.display = "block";
        });
    }
}
gosterGizleMuzik()

//  KATEGROİLER VE ETKİNLİK TARİHLERİ BAŞLANGIÇ






/* (footer) Hesabım-(Hesap Oluştur ) createAccount.html START (hesabım sayfasının içinde bulunan sayfa) */
 
  // tr tel no js 
  let telephone= document.getElementById("country-select")
  if(telephone){
    telephone.addEventListener("change", function() {
      var selectedValue = this.value;
      var phoneInput = document.getElementById("tr-tel");
  
      if (selectedValue === "90") {
          phoneInput.style.visibility = "visible";
      } else {
          phoneInput.style.visibility = "hidden";
      }
  });
  }

//modal box(1.checkbox'a basıldığında)

var modal = document.getElementById("modalBoxForm");

var checkBox = document.getElementById("defaultCheck1");
var modalKapa = document.getElementsByClassName("modal-kapa")[0];
var modalKapaİki = document.getElementsByClassName("modal-kapaiki")[0];


// checkbox'a tıkladığında aç
if(checkBox){
checkBox.onclick = function() {
  modal.style.display = "block";
}
}


//modal dışında bir yere tıkladığında kapan
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//okudum anladım ve onaylamadan çık'a basınca kapan
if(modalKapa){
modalKapa.onclick = function() {
  modal.style.display = "none";
}
}
if(modalKapaİki){
modalKapaİki.onclick = function() {
  modal.style.display = "none";
}}
    // disable checkbox için
    let checkbox = document.getElementById('okudumAnladim');
    let confirmButton = document.getElementById('confirmButton');

   if(confirmButton){
    confirmButton.addEventListener('click', () => {

      checkbox.disabled = false;
      checkbox.checked = true;
    });
  }
/* (footer) Hesabım-account-(Hesap Oluştur ) createaccount.html  (hesabım sayfasının içinde bulunan sayfa) END  */

// (footer-bize ulaşın-contactus) START

/*select'  -bize ulasin */ 
const selectElement = document.getElementById("sec");
const divElements = document.querySelectorAll(".ulas-info");

function update() {
  const selectedOptionValue = selectElement.value;
  divElements.forEach(div => {
    if (div.id === selectedOptionValue + "Info") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}
if (selectElement){
  selectElement.addEventListener("click", update);
}

update();

//(footer-bize ulaşın-contactus) END


// ETKİNLİK-LİSTE-JS-START
const sonuc = document.querySelector('#sonuc')
const divGoster = document.querySelector('.scriptgenel')
if(sonuc){
    sonuc.addEventListener('click', function(){
        divGoster.classList.toggle('scriptgenelactive')
    })
}

// ETKİNLİK-LİSTE-JS-END
