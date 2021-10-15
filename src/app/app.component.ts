

import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
declare const $: any;


@Component({
  selector: 'lms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lms';

   authenticationServices:AuthenticationService ;

  constructor(private authenticationService: AuthenticationService){



    
    jQuery(function ($) {

      $(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
  
  $("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
  });
  
  
     
     
  });
this.authenticationServices = authenticationService;
  }

  logout(){
    this.authenticationServices.logout();
  }



}
