import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() variabili : Array<string> = [];
  copix : string ="";

  visualizza(i:string) :boolean{
    this.copix= i;

    return false;


  }


  constructor() { }

  ngOnInit() {
  }

}
