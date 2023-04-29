<template>
    <div>
        <h2>Users</h2>
        <hr>
        <ul class="list-group">
            <li class="list-group-item"><router-link to="/user/10">User 10</router-link></li>
            <li class="list-group-item"><router-link to="/user/11">User 11</router-link></li>
            <li class="list-group-item"><router-link to="/user/15">User 15</router-link></li>
        </ul>
        <br>
        <button @click="toHome" class="btn btn-primary">to Home</button>
    </div>
</template>

<script>
    export default {
        methods: {
            toHome(){
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style>

</style>
