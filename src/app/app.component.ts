import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth: boolean = false;


  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur'

  appareilOneStatus = 'éteint ';
  appareilTwoStatus = 'allumé';
  appareilThreeStatus = 'éteint'

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tout !');
    this.appareilOneStatus = "allumé";

  }
}
