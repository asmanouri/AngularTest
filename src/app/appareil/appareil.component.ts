import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() appareilName: string;
  @Input() appareilStatus: string;


  getStatus() {
    return this.appareilStatus;
  }


}
