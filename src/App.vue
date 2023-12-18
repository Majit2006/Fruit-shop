<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>
<style scoped>
@import url("./assets/css/all.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
</style>
<script>
import Navbar from "./components/navs/navbar.vue";
export default {
  components: { Navbar },
};
</script>
