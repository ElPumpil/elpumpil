import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mono-interface';











  login(user:HTMLInputElement) : boolean{
     this(user.value);
     return false;
  }
}
