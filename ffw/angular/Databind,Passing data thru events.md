## Events:

### Simple Events:
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

### Passing data thru events:
- html:
```html
<input type="text" (input)="changeProperty($event)" />
```

- typescript:
```js
export class Test implements OnInit {
	someProperty: string= "some value"
	changeProperty(event){
		this.someProperty= (<HTMLInputElement>event.target).value
	}
}
```