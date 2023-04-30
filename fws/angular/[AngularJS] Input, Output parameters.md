# AngularJS:

## Input and Output Parameters:

- On component page:

![1555182808857](/home/codepianist/Code/github/topics/js/angular/imgs/1555182808857.png)

- On component Typescript file:

![1555182905196](/home/codepianist/Code/github/topics/js/angular/imgs/1555182905196.png)

![1555184503890](imgs/1555184503890.png)

- On destination page:

![1555182936916](/home/codepianist/Code/github/topics/js/angular/imgs/1555182936916.png)



```typescript
// Input:
[name]="name" to Page <- from Component @Input() name: string;

// Output:
(changeHobby)="changeHobby($event)" from Page -> to Component public keyUp(event: any){...}
```

