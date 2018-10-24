import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot,CanActivate,RouterStateSnapshot } from "@angular/router";
import { AuthService } from './auth.service'

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }
   
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   console.log(next);
    if (this.auth.isAuthenticated) {
      console.log("Paso")
      return true;
    } else {
      console.error("Bloqueado");
      return false;
    }
  }
}
