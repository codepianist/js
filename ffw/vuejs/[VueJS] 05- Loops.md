# VueJS



## Loops:

- `v-for`:

```html
<tr>
	<td v-for="sample in item.samples">{{ sample.description }}</td>
</tr>
```

- `v-for` with index:

```html
<template v-for="(item, ix) in items"> 
	<h3>{{ ix+1 }}- {{ item.title }}</h3>
```

- v-for with maps:

```html
<ul>
    <li v-for="person in persons">
    	<div v-for="(v, k, ix) in person">{{ix}}- [{{k}}, {{v}}]</div>
    </li>
</ul>
```

```js
data:{
    persons: {
        {name: 'Carlos', age: 30, phone: '33344455'},
        {name: 'Amanda', age: 19, phone: '69696969'}
    }
}
```

- v-for with numbers:

```html
<span v-for="n in 10"></span>		
```

- Keeping tracking with  keys:

```html
<template v-for="(item, ix) in items" :key="item"> 
	<h3>{{ ix+1 }}- {{ item.title }}</h3>
```

- For more: <https://vuejs.org/v2/guide/list.html>

