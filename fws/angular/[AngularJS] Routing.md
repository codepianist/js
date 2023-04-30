##Routing:

### Create a Router:

- Angular-CLI:

```shell
# Modules
# Create a router
ng generate module app-routing --flat --module=app
# --flat puts the file in src/app instead of its own folder.
# --module=app tells the CLI to register it in the imports array of the AppModule.
```

- TypeScript:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntriesComponent} from './entries/entries.component';
import {CandidatesComponent} from './candidates/candidates.component';

const routes: Routes = [
  { path: '', redirectTo: '/entries', pathMatch: 'full'},
  { path: '**', redirectTo: '/entries', pathMatch: 'full'},
  { path: 'entries', component: EntriesComponent},
  { path: 'candidates', component: CandidatesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
```

- Navigation at `app.component.html`:

```html
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/bookmarks">Bookmarks</a>
</nav>
```

- Components are loaded with router-outlet: Acts as a placeholder that Angular dynamically fills based on the current router state.
- Can navigate using routerLink.
- Use `history.pushState` to set a baseRef.

