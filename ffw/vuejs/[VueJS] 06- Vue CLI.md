# VueJS:



## Vue CLI:

- Creates a vue project structure;
- Allow to Fetch templates;
- Handles imports;
- CSS Processing;
- Browsefy: <http://browserify.org/>
- See: <https://github.com/vuejs/vue-cli>



### Install:

```shell
sudo npm install -g vue-cli
```



### Run

```shell
vue init webpack-simple <project-name>
cd /<project-name>
npm install # install dependencies
npm run dev # start the development server
```





- `vue-loader` loads `App.vue`;

- `main.js` as a starter:

```js
import Vue from 'vue'
import App from './App.vue'

new Vue({
	el: "#app",
    render: r=> r(App)
})
```

- `App.vue` : Vue application:

```html
<template>
	<div id="app">
        {{ msg }}
        ...
    </div>
</template>

<script>
export default { // This the Vue instance
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Vue.js'
        }
    }
}
</script>

<style>
...
</style>
```

