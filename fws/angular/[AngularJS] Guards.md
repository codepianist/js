## Guards:

- Guards are executed before Routes;

#### `<your-guard>.guard.ts`:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot, 
        UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
```

#### `app-routing.module.ts`:

```typescript
import { AuthGuard } from './auth.guard'
...
const routes: Routes = [
...
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
...
];
```



### Generate a Guard:

```shell
ng generate guard auth
ng g g auth
```

- Choose one of the interfaces.



### Interfaces:

- `CanActivate`- Setups a rule which defines access to a Route and its childes (route/).
- `CanActivateChild`- Setups a rule which defines access to a Route childes (route/*).
- `CanDeactivate`
- `Resolve`- Used to obtain data.
- `CanLoad`- Lazily check

