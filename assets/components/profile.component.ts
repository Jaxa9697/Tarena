/**
 * Created by Jahongir on 06-Jun-17.
 */
import { Component }      from '@angular/core';
import { HeaderService }  from '../shared/header.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ChangePassword } from "../shared/components.model";
import { UserSignUp }     from "../shared/user";
import { SignInService }  from "../shared/sign-in-up.service";

@Component({
  selector: 'profile-app',
  templateUrl: '/app/components/views/profile.component.html',
  providers: [ HeaderService ]
})

export class ProfileComponent{

  password: ChangePassword = new ChangePassword();
  constructor( private headerService: HeaderService
  ){}

  changePassword(password: ChangePassword){
    if(password.newPassword !== password.repeatNewPassword){
      alert("Новый пароль с его повтором не совподают");
    }else {
      this.headerService.changePassword(password)
        .subscribe((data)=>{
          if(data.message == "ok"){
            alert("Ваш пароль успешно изменен");
            this.headerService.logoff()
              .subscribe(()=>{});
          }else if (data.message == "passwordError"){
            alert("Неверный пароль.");
          }
        });
    }
  }

}

@Component({
  selector: 'new-user-app',
  templateUrl: '/app/components/views/new.user.component.html',
  providers: [ SignInService ]
})

export class NewUserComponent{

  userSignUp: UserSignUp = new UserSignUp();

  constructor( private signInService: SignInService,
               public  activeModal:   NgbActiveModal
  ){}

  onSignUp(userSignUp): void{
    this.signInService.signUp(userSignUp)
      .subscribe((data) => {
        if(data.message == "ok"){
          alert("Новый поьзователь успешно добавлен")
        }
      });
  }
}




