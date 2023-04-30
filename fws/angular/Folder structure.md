## Folder structure:

- `src/index.html`: single page.
- `src/app`: app components.
- `src/assets`: static files.
- `src/environments`: environment variables.
- 

### `src/app/app.module.ts`:
- Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts.
```js
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }`
```
- declarations: The components, directives, and pipes that belong to this NgModule.
- exports: The subset of declarations that should be visible and usable in the component templates of other NgModules.
- imports: Other modules whose exported classes are needed by component templates declared in this NgModule.
- providers: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)
- bootstrap: The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap.

See: [architecture-modules](https://angular.io/guide/architecture-modules)