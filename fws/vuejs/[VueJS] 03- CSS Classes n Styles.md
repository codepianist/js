# VueJS



## Styles:

- see: <https://vuejs.org/v2/guide/class-and-style.html>
- `:class`

```html
<!-- 1 -->
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
<!-- 2 -->
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
// 1
data: {
  isActive: true,
  hasError: false
}

// 2
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

- `:style`

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

