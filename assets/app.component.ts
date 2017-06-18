import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { SignInService }    from './shared/sign-in-up.service';
import { User, UserSignUp } from "./shared/user";
import { HeaderComponent }  from "./components/header.component";
import { CookieService }    from 'angular2-cookie/services/cookies.service';
import {HeaderService} from "./shared/header.service";

@Component({
  selector: 'my-app',
  templateUrl: '/app/components/views/app.component.html',
  providers: [ SignInService, CookieService, HeaderService ]
})

export class AppComponent {
  private EntryPage:  boolean = false;
  private entryError: boolean = true;

  primary: string = "primary";

  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;

  constructor (private signInService: SignInService,
               private headerService: HeaderService,
               private componentFactoryResolver: ComponentFactoryResolver,
               private _cookieService: CookieService
  ) {}

  user: User = new User();

  createHeaderComponent(data): void{
    if(data.message == "ok"){
      this.EntryPage = true;

      const childComponent = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);
      let cmpRef = this.parent.createComponent(childComponent);
          cmpRef.instance.user = this.headerService.getUserPrivileges(data.user,0);

    }else{
      this.entryError = false;
    }
  }

  ngOnInit(){
    let cookie = this._cookieService.get('remember');
    if (cookie){
      this.signInService.signInUsingCookie()
        .subscribe((data) => {
          this.createHeaderComponent(data);
        });
    }
  }

  onSubmit(user): void{
    this.signInService.signIn(user)
      .subscribe((data) => {
        this.createHeaderComponent(data);
      });
  }

}
