<template>
  <div>
    <main class="m-3">
      <div class="cards-products">
        <h2 class="text-center mb-4">Best Sellers Products</h2>
        <CardProducts />
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn border-1 border-success text-center">
          VIEW MORE <i class="bi bi-arrow-down text-success"></i>
        </button>
      </div>
      <div class="container banner mt-5 d-flex justify-content-center">
        <img src="@/assets/images/vege-banner.jpg" class="img-fluid" />
      </div>
    </main>
  </div>
</template>
<script>
import CardProducts from "@/components/card/card-products.vue";
export default {
  components: { CardProducts },
};
</script>
