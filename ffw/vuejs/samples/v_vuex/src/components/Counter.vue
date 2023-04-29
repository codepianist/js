<template>
    <section>
        <button class="btn btn-primary" @click="increment">Increase</button>
        <button class="btn btn-primary" @click="decrement">Decrease</button>
    </section>
</template>

<script>
    export default {
        methods:{
            increment(){
                this.$store.state.counter++
            },
            decrement(){
                this.$store.state.counter--
            }
        }
    }
</script>
