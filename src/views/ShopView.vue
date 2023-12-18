<template>
  <div>
    <div class="container">
      <h3 class="text-center mt-2">Collections</h3>
      <div class="blog-container">
        <div class="text-light d-flex flex-wrap gap-3">
          <div class="col text-center blog-item">
            <router-link to="#" class="text-decoration-none text-light">
              <h4>All</h4>
            </router-link>
          </div>
          <div class="col text-center blog-item">
            <router-link to="#" class="text-decoration-none text-light">
              <h4>Dried Products</h4>
            </router-link>
          </div>
          <div class="col text-center blog-item">
            <router-link to="#" class="text-decoration-none text-light">
              <h4>Blog_3</h4>
            </router-link>
          </div>
        </div>
      </div>
      <div class="bloog-container">
        <div class="text-light d-flex flex-wrap gap-3">
          <div class="col text-center blog-item mt-2">
            <router-link to="#" class="text-light text-decoration-none"
              ><h4>All</h4></router-link
            >
          </div>
          <div class="col text-center blog-item mt-2">
            <router-link to="#" class="text-light text-decoration-none">
              <h4>Dried Products</h4>
            </router-link>
          </div>
          <div class="col text-center blog-item mt-2">
            <router-link to="#" class="text-light text-decoration-none">
              <h4>Blog_3</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <ShopifySectionFooter />
  </div>
</template>

<script>
import ShopifySectionFooter from "@/components/footer/shopify-section-footer.vue";

export default {
  components: { ShopifySectionFooter },
};
</script>

<style>
.blog-container {
}
.blog-item:nth-of-type(n) {
  background: #b7b7b7 url("@/assets/images/removal.ai.jpg") center no-repeat;
  background-size: contain;
  height: 300px !important;
}
.blog-item:nth-last-child(4) {
  background: #b7b7b7 url("@/assets/images/remvoeon.png") center no-repeat;
  background-size: contain;
  height: 300px !important;
}
.bloog-container .blog-item:nth-last-child(3) {
  background: #b7b7b7 url("@/assets/images/removebg_apple.png") center no-repeat;
  background-size: contain;
  height: 300px !important;
}
</style>
