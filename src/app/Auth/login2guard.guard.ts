import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const login2guardGuard: CanActivateFn = (route, state) => {
  // route?routeco
  const router = inject(Router)
  console.log(route.routeConfig?.path)
  if (route.routeConfig?.path) {
    if (route.routeConfig?.path == 'login2') {
      
      if (localStorage.getItem('id')) {
        return true
      }
      else {
        router.navigate(['/login'])
      }
    }else{
      if (localStorage.getItem('id') && localStorage.getItem('token')) {
        return true
      }
      else {
        router.navigate(['/login'])
      }

    }
  }
  return false;
};
