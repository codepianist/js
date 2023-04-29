<template>
    <main>
        <p>{{ counter }}</p>
    </main>
</template>

<script>
    export default {
        computed: {
            counter(){
                return this.$store.state.counter
            }
        }
    }
</script>
