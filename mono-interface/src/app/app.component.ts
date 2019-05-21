import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mono-interface';
   data: Object;
   o :Observable<Object>;

   constructor(public http: HttpClient) {}





  login(user:HTMLInputElement, psw:HTMLInputElement) : boolean{

    this.http.get('https://my-json-server.typicode.com/ElPumpil/elpumpil/utente')
       .subscribe(data => {
          this.data = data;
          for(let i of data){
            if (i.username==user.value && i.psw == psw.value){
              

              break
            }
          }

       });






  /*   this.http.post('https://my-json-server.typicode.com/ElPumpil/elpumpil/utente',
       JSON.stringify({
         username : user.value ,
         psw : psw.value ,


       })
     )
     .subscribe(data => {
       this.data = data;
      console.log(data);

      if (c)
     {console.log("ciao")}
       else{
         console.log("bye bye");
       }


     });*/






     return false;
  }
}
