// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


    window.onscroll = function() {
        const header = document.querySelector('.header_section');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('header_fixed');
        } else {
            header.classList.remove('header_fixed');
        }
    };

 

    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default anchor

            const targetId = this.getAttribute('href'); // Mendapatkan ID target
            const targetElement = document.querySelector(targetId); // Menemukan elemen target

            if (targetElement) { // Pastikan elemen target ada
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen target
            } else {
                console.error(`Element with ID ${targetId} not found.`);
            }
        });
    });


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}