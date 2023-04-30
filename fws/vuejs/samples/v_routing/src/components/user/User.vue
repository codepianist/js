<template>
    <div>
        <h2>User Page</h2>
        <p>You've selected the user <b>{{ userId }}</b>.</p>
        <router-view></router-view>
        <router-link tag="button" :to="'/user/'+ $route.params.id + '/detail'">Detail</router-link>
        <router-link tag="button" :to="'/user/'+ $route.params.id + '/edit'">Edit</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userId: this.$route.params.id
            }
        }
    }
</script>
