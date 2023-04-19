<template>
  <div class="container">
    <appheader></appheader>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
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

<style></style>
