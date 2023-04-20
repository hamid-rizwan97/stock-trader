<template>
  <div class="container-fluid">
    <appheader></appheader>
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in" >
          <router-view></router-view>
        </transition>
        
      </div>
    </div>
    <div class="image">
    <img src="./assets/stock.png">
  </div>
  </div>
</template>

<script>
import header from "./components/header.vue";
export default {
  components: {
    appheader: header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style scoped>
.container-fluid{
  background-color: rgb(213, 255, 200);
  padding-top: 20px;
  
}
.image{
  text-align: center;
}
.slide-enter-active{
animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active
{
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in{
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out{
  from{
    transform: translateY(0);
    opacity: 1;
  }
  to{
    transform: translateY(-30px);
    opacity: 0;
  }
}

</style>
