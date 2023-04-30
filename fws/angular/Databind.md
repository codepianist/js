## Databind:

### From Typescript to HTML:

#### String interpolation:
- html:
```html
{{ title }}
```

- typescript:
```js
export class Test implements OnInit {
	title: string
}
```

#### Property binding:
- html:
```html
<button [disabled]="disabledButton">Button</button>
<button [disabled]="!disabledButton">Button</button>
```

- typescript:
```js
export class Test implements OnInit {
	disabledButton: string= true
}
```


### From HTML to Typescript:

### Events:
- html:
```html
<button (click)="changeProperty()">Change property</button>
```

- typescript:
```js
export class Test implements OnInit {
	someProperty: string= "some value"
	changeProperty(){
		this.someProperty= "another value"
	}
}
```


### Bi directional:

#### 2 way databinding:
- html:
```html
[(event)]="data"
```

- typescript:
```js
export class Test implements OnInit {
	title: string
}
```