// navbar sticky
window.addEventListener("scroll", function () {
  var nav = document.getElementById('nav2');
  nav.classList.toggle("fixed-top", window.scrollY > 0);
  var navtwo = document.getElementById('responsivenavbar');
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//------------------ for slider--------------------//
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$('#bar2').click(function(){
  $('.slidedown').css('display','block').css('height','auto');
  $('.slidedown ul li').css('display','block');
  $('#bar2').css('display','none');
  $('#cross2').css('display','block');
});
$('#cross2').click(function(){
  $('.slidedown').css('display','none').css('height','0');
  $('.slidedown ul li').css('display','none');
  $('#bar2').css('display','block');
  $('#cross2').css('display','none');
});


$('#bar3').click(function(){
  $('.slidedown2').css('display','block').css('height','auto');
  $('.slidedown2 ul li').css('display','block');
  $('#bar3').css('display','none');
  $('#cross').css('display','block');
});

$('#cross').click(function(){
  $('.slidedown2').css('display','none').css('height','0');
  $('.slidedown2 ul li').css('display','none');
  $('#bar3').css('display','block');
  $('#cross').css('display','none');
});

$('#ar-ring').click( function() {
  $('#addtext').text(' Fake jewelry has been around for quite a long time. Silver can be sold as white gold, fake hallmarks can be engraved into the pieces of jewelry, and fake gems can be used instead of real ones. So it’s important to be aware of these things when you’re shopping for a ring, a bracelet, a necklace, earrings, or any other jewelry items' );
  $('#addtext').text( );
  $('.slidedown2').css('display','none').css('height','0');
  $('.slidedown2 ul li').css('display','none');
  $('#bar3').css('display','block');
  $('#cross').css('display','none');
});

$('#ar-beacelet').click( function() {
  $('#addtext').text( 'compiled a list of the simplest methods that will help you check whether an item is fake or real. By using these methods, you can check the jewelry that you have at home and some of them can even be used in a jewelry store.');
  $('.slidedown2').css('display','none').css('height','0');
  $('.slidedown2 ul li').css('display','none');
  $('#bar3').css('display','block');
  $('#cross').css('display','none');
});

$('#ar-necklace').click( function() {
  $('#addtext').text( 'Of course, the easiest way is to check the hallmark. The information about which hallmarks different metals have is available on the internet. After finding it, the only thing left to do will be to compare the information from the internet with the information on your jewelry item. Numbers should be accurate');
  $('.slidedown2').css('display','none').css('height','0');
  $('.slidedown2 ul li').css('display','none');
  $('#bar3').css('display','block');
  $('#cross').css('display','none');
});

$('#ar-earings').click( function() {
  $('#addtext').text( 'and easy to read, otherwise, it’s better not to take the risk and refuse to buy such an item. In order to understand the amount of precious metal according to the hallmark, place a comma after the second digit in your mind. The number that you get will show the percent of the content of a precious metal. For example, the hallmark with ');
  $('.slidedown2').css('display','none').css('height','0');
  $('.slidedown2 ul li').css('display','none');
  $('#bar3').css('display','block');
  $('#cross').css('display','none');
});







$('#rl-ring').click( function() {
  $('#addtext2').text('Jewellery is one of the oldest types of archaeological artefact – with 100,000-year-old beads made from Nassarius shells thought to be the oldest known jewellery.[1] The basic forms of jewellery vary between cultures but are often extremely long-lived; in European cultures the most common forms of jewellery listed above have persisted' );
  $('.slidedown').css('display','none').css('height','0');
  $('.slidedown ul li').css('display','none');
  $('#bar2').css('display','block');
  $('#cross2').css('display','none');
});

$('#rl-beacelet').click( function() {
  $('#addtext2').text( 'Jewellery may be made from a wide range of materials. Gemstones and similar materials such as amber and coral, precious metals, beads, and shells have been widely used, and enamel has often been important. In most cultures jewellery can be understood as a status symbol, for its material properties, its patterns, or for meaningful symbols.');
  $('.slidedown').css('display','none').css('height','0');
  $('.slidedown ul li').css('display','none');
  $('#bar2').css('display','block');
  $('#cross2').css('display','none');
});

$('#rl-necklace').click( function() {
  $('#addtext2').text( 'The word jewellery itself is derived from the word jewel, which was anglicised from the Old French "jouel",[2] and beyond that, to the Latin word "jocale", meaning plaything. In British English, Indian English, New Zealand English, Hiberno-English, Australian English, and South African English it is spelled jewellery, while the spelling is jewelry ');
  $('.slidedown').css('display','none').css('height','0');
  $('.slidedown ul li').css('display','none');
  $('#bar2').css('display','block');
  $('#cross2').css('display','none');
});

$('#rl-earings').click( function() {
  $('#addtext2').text( 'In creating jewellery, gemstones, coins, or other precious items are often used, and they are typically set into precious metals. Platinum alloys range from 900 (90% pure) to 950 (95.0% pure). The silver used in jewellery is usually sterling silver, or 92.5% fine silver. In costume jewellery, stainless steel findings are sometimes used.');
  $('.slidedown').css('display','none').css('height','0');
  $('.slidedown ul li').css('display','none');
  $('#bar2').css('display','block');
  $('#cross2').css('display','none');
});









