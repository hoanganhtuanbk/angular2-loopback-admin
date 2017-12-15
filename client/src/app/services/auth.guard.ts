import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

const login: string = "login";
const register: string = "register"
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {
      this.auth.loadFromSession()
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(next.url[0]);
      let path: string = next.url[0] ? next.url[0].path : "";
      console.log(path, this.isAuthenticated());
      if (((path === login) || (path === register)) && this.isAuthenticated()) {
        this.router.navigate(["/"]);
        return false;
      } else if (((path === login) || (path === register)) && (!this.isAuthenticated()) ) {
        return true;
      } else if (((path !== login) || (path !== register)) && (!this.isAuthenticated())) {
        this.router.navigate(["/login"]);
        return true;
      }else{
        return true;
      }
    }

    isAuthenticated(): boolean {
      console.log(this.auth.getAccessTokenId())
      if(this.auth.getAccessTokenId() !== null){
        return true
      } else return false
    }
}
