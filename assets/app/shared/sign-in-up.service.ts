/**
 * Created by Jahongir on 11-Apr-17.
 */
 import{ Injectable } from '@angular/core';
 import { Http, Response, Headers } from  "@angular/http";
 import { User, UserSignUp} from './user';

 import 'rxjs/add/operator/toPromise';
 import 'rxjs/Rx';

 @Injectable()
 export class SignInService {
   constructor (private http: Http){}

   signInUsingCookie(){
     return this.http.get('/signIn')
       .map((data: Response )=> {
         return data.json();
       });
   }

   signIn(obj: User ){
     const body = JSON.stringify(obj);
     let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

     return this.http.post('/signIn', body, { headers: headers })
       .map((data: Response )=> {
         return data.json();
       });
   }

   signUp(obj: UserSignUp ){
     const body = JSON.stringify(obj);
     let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

     return this.http.post('/signUp', body, { headers: headers })
       .map((data: Response )=> {
         return data.json();
       });
   }
 }
