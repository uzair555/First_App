import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "src/app/auth/auth.service";
import { error } from "@angular/compiler/src/util";
import { Observable,Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "src/app/shared/alert/alert.component";
import { PlaceholderDirective } from "src/app/shared/placeholder/placeholder.directive";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceholderDirective ) alerHost: PlaceholderDirective;

    private closeSub: Subscription

    constructor(
        private authService: AuthService,
        private router:Router,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {

        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;  

        this.isLoading = true;

        if (this.isLoginMode) {
            authObs=this.authService.login(email, password);
        } else {
            authObs=this.authService.signup(email, password)
        }
        authObs.subscribe(resData => {

            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);

        },
            errorMessasge => {
                console.log(errorMessasge);
                this.error = errorMessasge;
                this.showErrorAlert(errorMessasge);
                this.isLoading = false;

            }
        )

        form.reset();
    }

    onHandleError(){
        this.error=null;
    }

    ngOnDestroy(){
    if(this.closeSub){
        this.closeSub.unsubscribe();
    }
        
    }

    private showErrorAlert(message:string){
        //you cant create like this here it will not work 
        // const alertCmp= new AlertComponent();

       const alertCmpfactory = this.componentFactoryResolver.resolveComponentFactory(
           AlertComponent
        );
        const hostViewContainerRef=this.alerHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(alertCmpfactory);

        componentRef.instance.message=message;
        this.closeSub= componentRef.instance.close.subscribe(()=>{
           this.closeSub.unsubscribe();
           hostViewContainerRef.clear();
        })
    }
      
}