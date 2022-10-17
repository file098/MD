import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // var util = {
  //   mobileMenu() {
  //     $("#nav").toggleClass("nav-visible");
  //   },
  //   windowResize() {
  //     if ($(window).width() > 800) {
  //       $("#nav").removeClass("nav-visible");
  //     }
  //   },
  //   scrollEvent() {
  //     var scrollPosition = $(document).scrollTop();
      
  //     $.each(util.scrollMenuIds, function(i) {
  //       var link = util.scrollMenuIds[i],
  //           container = $(link).attr("href"),
  //           containerOffset = $(container).offset().top,
  //           containerHeight = $(container).outerHeight(),
  //           containerBottom = containerOffset + containerHeight;
  
  //       if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
  //         $(link).addClass("active");
  //       } else {
  //         $(link).removeClass("active");
  //       }
  //     });
  //   }
  // };
  
  // $(document).ready(function() {
    
  //   util.scrollMenuIds = $("a.nav-link[href]");
  //   $("#menu").click(util.mobileMenu);
  //   $(window).resize(util.windowResize);
  //   $(document).scroll(util.scrollEvent);
    
  // });
  

}


