# Angular JS:



## Router:

### Events:

![1549288346837](imgs/1549288346837.png)

- Create an application with a routing file:

```shell
ng new sample1 --routing
```

- Create login component:

```shell
ng g component login
```

![1549288891740](imgs/1549288891740.png)

- redirection:

![1549289356926](imgs/1549289356926.png)

- Navigation:

![1549289419199](imgs/1549289419199.png)

### Guards

- Add condition to Navigation

![1549288460549](imgs/1549288460549.png)



-  Create authentication guard:

```shell
ng g service AuthenticationGuard
```

![1549289014578](imgs/1549289014578.png)

- DeactivateGuard:

```shell
ng g service DeactivateGuard
```

![1549289098558](imgs/1549289098558.png)

### Angular CLI:

- Installation instructions: https://github.com/angular/angular-cli/wiki
- 



#### Start the application:

```shell
ng serve
```





### Observable, Subjects and Promisses:

![1549291999236](imgs/1549291999236.png)



![1549292041280](imgs/1549292041280.png)

![1549292112037](imgs/1549292112037.png)



### Create an app:

- Create the app skeleton:

```shell
ng new angular-tour-of-heroes
```

- Build and run (`--open` opens the default browser).

```shell
ng serve --open
```



![1549293869265](imgs/1549293869265.png)

- Add global styles to: `src/styles.css`

#### Create a component:

```shell
ng generate component heroes
```

- A folder `src/app/heroes/` was created:

![1549294343970](imgs/1549294343970.png)

- component:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { // Always export the component class so you can import it elsewhere ... like in the AppModule.

  constructor() { }

  ngOnInit() {
  }

}
```

- `@Component` is a decorator function that specifies the Angular metadata for the component.
- The `ngOnInit` is a [lifecycle hook](https://angular.io/guide/lifecycle-hooks#oninit). Angular calls `ngOnInit` shortly after creating a component. It's a good place to put initialization logic.



- Add hero property to heroes template `src/app/heroes/heroes.component.html`:

```
{{hero}}
```



- Add the hero component to the app template `src/app/app.component.html`:

```
<h1>{{title}}</h1>
<app-heroes></app-heroes>
```



- Use pipes to format Strings: https://angular.io/guide/pipes

```html
<h2>{{hero.name | uppercase}} Details</h2>
```



- Import FormsModule on `src/app/app.module.ts`:

```typescript
import { FormsModule } from '@angular/forms';
...
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```



