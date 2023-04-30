
## Create a component: 


### `App.js`

```js

```

### The `props` parameter:

- Parameter from parent;


### The `children` parameter:

- A value passed inside de component. Between the component tags;


- Parent

```js
<GoalList name="Goal listsaadsasd"> Children... </GoalList>
```

- Child

```js
import React, { Children } from 'react';

export const GoalList = (props) => {
    console.log(props); // Goal listsaadsasd
    console.log(props.children); // Children...
    return (<div>Goal list</div>);
};
```