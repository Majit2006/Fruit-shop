<template>
  <div>
    <banner />
    <Cards />
    <CollectionTabCarousel />
    <slide-blog />
    <ShopifyFooter />
  </div>
</template>

<script>
import Cards from "@/components/card/cards.vue";
import banner from "@/components/banner/banner.vue";
import CollectionTabCarousel from "@/components/Carousel/collection-tab-carousel.vue";
import ShopifyFooter from "@/components/footer/shopify-footer.vue";
import SlideBlog from "@/components/Swiper/slide-blog.vue";
export default {
  components: {
    Cards,
    CollectionTabCarousel,
    ShopifyFooter,
    banner,
    SlideBlog,
  },
};
</script>

<style>
.burger {
  font-size: 30px;
}

.bi-search {
  font-size: 15px;
}

.bg-green {
  background-color: #8dc73f;
}

.bi-basket {
  font-size: 16px;
}

.border-secondary {
  border-color: rgba(223, 223, 223, 0.74) !important;
}

.text-success-color {
  font-size: 20px;
  color: #8dc73f;
}

.bi-star {
  font-size: 14px;
}

.bi-star-fill {
  font-size: 14px;
}

.bi-heart {
  font-size: 19px;
}
</style>
