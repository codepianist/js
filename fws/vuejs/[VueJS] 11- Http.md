# VueJS:



## HTTP connection:

- `Vue-Resource`: http://github.com/vuejs/vue-resource
- Install for your project:

```shell
npm install vue-resource --save # saves as production dependency
```





- `App.vue`:

```html
<template>
	<div class="container">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h2>Http connection:</h2>	
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" type="text" v-model="user.name"></input>			
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="text" v-model="user.email"></input>			
            </div>
            <button class="btn btn-primary" @click="submit">Submit</button>
    		<hr>
    		<button class="btn btn-primary" @click="fetchData">Get data</button>
    		<br>
    		<ul class="list-group">
                <li class="list-group-item" v-for="u in users">{{ u.name - u.email }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit(){
                this.$http.post('https://...', this.user) // from vue-resource
            		.then( // promise
                        response => { 
							console.log(response);
                        },
                    	error => {
                            console.log(error);
                        } 
                	); 
            },
            fetchData(){
                this.$http.get('https://...')
                	.then(
                		response => {
                            return response.json(); // Converts to js object
                            // Returns the promise
                        }
                	)
                	.then( // When the data is really available
                		data=> {
                            console.log(data);
                            const arr= [];
                            for(let k in data){
                                arr.push(data[k]);
                            }
                            this.users= arr;
                        }
                	);
            }
        }
    }
</script>
```

- `main.js`:

```js
import Vue from 'Vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource); // Adds a plugin
new Vue({
    el: '#app',
    render: h => h(App)
});
```



### Configuring Vue-Resource globally:

- `main.js`:

```js
import Vue from 'Vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource); // Adds a plugin
Vue.http.options.root = 'https://your-server'; // All requests will be sent to this server
// First argument for post, get methods can be empty

new Vue({
    el: '#app',
    render: h => h(App)
});
```



### Interceptors:

- `main.js`:

```js
import Vue from 'Vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource); // Adds a plugin
Vue.http.options.root = 'https://your-server'; // All requests will be sent to this server
// First argument for post, get methods can be empty
Vue.http.interceptors.push((req, next)=> { // An array of functions executed on each request
    // Intercepting requests
    console.log(request);
    if(request.method == 'POST'){
        // do something
    }
    
    // Intercepting responses
    next(resp=> {
        console.log(resp);
        // do something with the response
    });
}); 

new Vue({
    el: '#app',
    render: h => h(App)
});
```





### Resources:

- https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md

- Resources allow to execute actions on `resource` object;

- `App.vue`:

```html
<template>
	<div class="container">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h2>Http connection:</h2>	
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" type="text" v-model="user.name"></input>			
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="text" v-model="user.email"></input>			
            </div>
            <button class="btn btn-primary" @click="submit">Submit</button>
    		<hr>
    		<button class="btn btn-primary" @click="fetchData">Get data</button>
    		<br>
    		<ul class="list-group">
                <li class="list-group-item" v-for="u in users">{{ u.name - u.email }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: [],
                resource
            }
        },
        methods: {
            submit(){
				this.resource.save({}, this.user) // arg0- params, arg1- data
            },
            fetchData(){
                this.$http.get('url-suffix')
                	.then(
                		response => {
                            return response.json(); // Converts to js object
                            // Returns the promise
                        }
                	)
                	.then( // When the data is really available
                		data=> {
                            console.log(data);
                            const arr= [];
                            for(let k in data){
                                arr.push(data[k]);
                            }
                            this.users= arr;
                        }
                	);
            }
        },
        created(){
            this.resource= this.$resource('url-mapping'); 
            // Suffix of declared on Vue.http.options.root
        }
    }
</script>
```

- Custom resources:

```html
<template>
	<!-- ... -->
</template>

<script>
	export default {
		data(){
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: [],
                resource
            }
        },
        methods: {
            submit(){
				this.resource.save({}, this.user) // arg0- params, arg1- data
            },
            fetchData(){
				this.resource.get({suffix: 'data'});
            }
        },
        created(){
            const customActions= {
                payTheBill: {
                    method: 'POST',
                	url: 'pay-the-bill.json'
                }
            }
            // URL supports URI templates - see http://medialize.github.io/URI.js/
            this.resource= this.$resource('{suffix}.json', {}, customActions); 
            // Suffix of declared on Vue.http.options.root
        }
    }
</script>
```



- http://medialize.github.io/URI.js/
- 