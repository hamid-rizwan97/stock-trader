<template>
  <div class="container-fluid">
    <appheader></appheader>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
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
</style>
