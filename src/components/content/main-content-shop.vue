<template>
  <div class="container">
    <maincontentTop />
    <ProductGrid />
  </div>
</template>

<script>
// import sidebar from "@/components/navs/sidebar.vue";
import ProductGrid from "@/components/card/product-grid.vue";
import maincontentTop from "./main-content-top.vue";
export default {
  components: { ProductGrid, maincontentTop },
};
</script>
