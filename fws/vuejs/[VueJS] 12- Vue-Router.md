# Vue:

## VueRouter:

```shell
mkdir sample_vuerouter
cd sample_vuerouter/
vue create .
npm install --save vue-router
```

### Create `routes` constant and map paths to components:
- `routes.js`:
```js 
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Users from './components/user/Users.vue';
import Home from './components/Home.vue';

export const routes= [
    { path: '', component: Home },
    { path: '/user-detail', component: UserDetail },
    { path: '/user-edit', component: UserEdit },
    { path: '/users', component: Users },
];

```

### Import and use `VueRouter`:
- `main.js`:
```js
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router= new VueRouter({
	routes // ES6 same as routes: routes
});

new Vue({
	el: 'app',
	router,
	render: h => h(App)
});
```

- `App.vue`:
```html
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>{{ msg }}</h1>
        <hr>
        <!-- The page will be rendered here -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
```

### Modes:
- `RouterView` automatically adds the '#' to url: `http://localhost:8080/#/`
- Usually used in SPA- Single Page Applications.
- The reason is that we want to handle the route in the SPA, and not send the request to the server.
- `main.js`:
```js
const router= new VueRouter({
  routes,
  mode: 'history' // this mode disables the hashtag '#' in the url
  // mode: 'hash' // this is the default option with the '#' in the url
});
```

### Redirections:
```js
export const routes= [
	// ...
	{ path: '/dasda', redirect: '/home' }, // simple
	{ path: '/dasda', redirect: { name: 'home' } }, // named
	{ path: '*', redirect: '/home' }, // wildcard
 	// ...
];
```

### Router Guards:
- Global Level, at `main.js`:
```js
router.beforeEach((to, from, next) => {
	console.log('Global beforeEach...');
	next(); // simply allows the flow to continue
	next(false); // blocks, stays on same page Omitting next(); will have the same effect
	next(url); // redirects to other url
});
```

- Route Level, at route:
```js
export const routes= [
	// ...
	{ path: '/edit', component: UserEdit, beforeEnter: (to, from, next) => {
		console.log('beforeEnter UserEdit...');
		next(false);
	} }, // simple
	{ path: '/add', component: UserAdd }, // named
	{ path: '*', redirect: '/home' }, // wildcard
 	// ...
];
```

- Component Level, at Component:
```js 
<script>
	export default {
		//...
		beforeRouteEnter(to, from, next){
			// as long you don't call next() the component is not loaded.
			// or pass a callback to be executed as the component is loaded
			next(viewModel => {
				console.log(viewModel.link);
			});
			//
			if(userIsPresent()){
				next();
			}
			else{
				next(false);
			}
		}
	}
</script>
```

- `beforeLeave` Guard:
```js
<template>
	<!-- ... -->
	<button @click="confirmed = true" >Confirm</button>
	<!-- ... -->
</template>
<script>
	export default {
		//...
		data(){
			return {
				confirmed: false;
			}
		}
		beforeRouteLeave(to, from, next){
			if(this.confirmed){
				next();
			}
			else{
				next(false);
			}
		}
	}
</script>
```

