import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-rent';
  log : boolean = false;
  utenti : Array<string> = [];

  change() : boolean{
    if (this.log)
      {this.log=false;}
    else {
      this.log=true;
    }
    return false;
  }

   send(user:HTMLInputElement) : boolean{
     this.utenti.push(user.value);
     return false;
  }
}

