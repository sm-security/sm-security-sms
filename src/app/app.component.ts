import { Component, OnInit, Input, HostListener } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @Input()
  title = 'Smsecurity';
  iframe:SafeResourceUrl;
  constructor(public sanitizer:DomSanitizer) { 
    
  }

  SmSecurity (n,key) {
    var link = 'https://sm-security.firebaseapp.com/';
    var params = {
      phone:n,
      k:key,
    }
    var parametersText = Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');
    var iframeLink = link+'?'+parametersText;
    return iframeLink;
  }

  ngOnInit() {
    if (window.addEventListener) {
      window.addEventListener("message", this.SmSecurityCallback, false);
    }      
  }

  setIframe (telefonTel,Apikey) {
    const iframeSrc = this.SmSecurity(telefonTel,Apikey);
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(iframeSrc);
  }

  @HostListener('onMessage', ['$event'])
  SmSecurityCallback ($event) {
     console.log($event.data);
  }
  

}
