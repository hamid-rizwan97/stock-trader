<template>
    <div>
        <h1>Trade or view your Portfolio</h1>
         <h6 class="home-font">You may save and Load your data</h6>
         <h6 class="home-font">Click on 'End Day' to begin a New Day!</h6>
         <p>Your Funds:{{ funds | currency }}</p>
    </div>
</template>
<script>
export default{
    computed:{
        funds()
        {
            return this.$store.getters.funds
        },
    
    },
}
</script>
<style scoped>
.home-font{
  font-weight: bold;
}
.paragraph{
    font-weight: bold;
}
</style>
