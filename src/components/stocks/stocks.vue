<template>
  <div>
    <appstock v-for="stock in stocks" :stock="stock"></appstock>
  </div>
</template>
<script>
import stock from "./stock.vue";
export default {
  components: {
    appstock: stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
