# AngularJS

### Create a component:

```shell
ng generate component components/bookmark-tree
ng g c components/bookmark-tree
```

### Selectors:
```js
@Component({
  selector: 'app-sample', // search for <app-sample></app-sample>
  // selector: ['app-sample'], // search for <div app-sample></div>
  // selector: '.app-sample', // search for <div class="app-sample"></div>
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

	// ...

}
```
