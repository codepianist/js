# Vue.JS



## Forms:

```html
<template>
	<button type="submit" @click.prevent="submitted">Submit</button> 
    <!-- Prevent form submission -->
</template>

<script>
export default(){
	...
    data() {
      isSubmitted: false  
    },
	methods: {
      submitted(){
          this.isSubmitted= true;
      }
    },
	...
}

</script>
```

