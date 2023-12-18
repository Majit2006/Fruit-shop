<template>
  <div>
    <main-content-shop />
    <shopify-section-footer />
  </div>
</template>

<script>
import mainContentShop from "@/components/content/main-content-shop.vue";
import ShopifySectionFooter from "../footer/shopify-section-footer.vue";

export default {
  components: { mainContentShop, ShopifySectionFooter },
};
</script>
