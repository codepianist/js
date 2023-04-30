# Vue.JS:



## Directives:

- Starts with the `v-` prefix;

```html
<p v-text="'Some text'"></p>
<p v-html="'<strong>Some strong text</strong>'"></p>
```



### Configuring Directives:

```js
import Vue from 'vue';
import App from 'App.vue';

Vue.directive('<name>', {
    // hooks
});
new Vue({
    el: '#app',
    render: h => h(App)
});
```



#### Directive Hooks:

- `bind(el, binding, vnode)`- Fires when the directive is bounded to the element;
- `inserted(el, binding, vnode)`- Fires when the element is inserted into the DOM;
- `update(el, binding, vnode, oldVnode)`- Fires when the component is updated. Before any children was updated.
- `componentUpdate(el, binding, vnode, oldVnode)`- Fires when the component is updated with its children updated too.   
- `bind(el, binding, vnode)`- Fires when the directive is removed.

`binding, vnode, oldVnode` are read-only. Should not be changed.



##### Examples of a directive:

###### 1:

- HTML:

```html
<p v-highlight="'red'">
    Color this.
</p>
```

- JS:

```js
import Vue from 'vue';
import App from 'App.vue';

Vue.directive('highlight', {
    bind(el, binding, vnode){
        el.style.backgroundColor= binding.value; // Sets bg color = value
    }
});
new Vue({
    el: '#app',
    render: h => h(App)
});
```



###### 2 - Passing arguments:

- HTML:

```html
<p v-highlight:background="'red'">
    Color this.
</p>
```

- JS:

```js
import Vue from 'vue';
import App from 'App.vue';

Vue.directive('highlight', {
    bind(el, binding, vnode){
        if(el.arg == 'background') {
            el.style.backgroundColor= binding.value; 
        }
        else{
            el.style.color= binding.value; // text color
        }
    }
});
new Vue({
    el: '#app',
    render: h => h(App)
});
```



###### 3 - Using modifiers:

- HTML:

```html
<p v-highlight:background.delayed="'red'">
    Color this.
</p>
```

- JS:

```js
import Vue from 'vue';
import App from 'App.vue';

Vue.directive('highlight', {
    bind(el, binding, vnode){
        var delay= 0;
        if(binding.modifiers['delayed']){
           delay= 3000;
        }
        setTimeout(() => {
            if(el.arg == 'background') {
                el.style.backgroundColor= binding.value; 
            }
            else{
                el.style.color= binding.value; // text color
            }
        }, delay);
    }
});
new Vue({
    el: '#app',
    render: h => h(App)
});
```



### Local Directives:

```html
<template>
</template>

<script>
	export default {
        directives: {
            'local-directive':{
                bind(el, binding, vnode){
                    ...
                }
            }
        }
    }
</script>
```

