# Smsecurity

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Send sms verification example 

n = Phone number 
key = api key
 `
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
  `

## Add this code to Listene the 

ngOnInit() {
    .....
    if (window.addEventListener) {
      window.addEventListener("message", this.SmSecurityCallback, false);
    }      
    .....
}

@HostListener('onMessage', ['$event'])
SmSecurityCallback ($event) {
   console.log($event.data);
}
