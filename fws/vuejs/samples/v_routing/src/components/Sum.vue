<template>
    <div>
        <h2>Sum</h2>
        <p v-if="errorMsg.length>1" style="color: red;">{{ errorMsg }}</p>
        <p>{{ sumResult }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                errorMsg: ''
            }
        },
        computed: {
            sumResult: function(){
                let a= this.$route.query.a,
                    b= this.$route.query.b;

                if(a === undefined || b === undefined){
                    this.errorMsg = "You must pass 'a' and 'b' as query parameters!";
                    return  "*** Missing arguments! ***";
                }

                if(isNaN(a) || isNaN(b)){
                    this.errorMsg = "a= ${a} and b= ${b} must both be valid numbers!";
                    return  "*** Not a number! ***";
                }

                return `The sum of ${a} + ${b} = ${ parseInt(a)+parseInt(b) }`;

            }
        }
    }
</script>
